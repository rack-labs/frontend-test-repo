"""Step 2 of the hero body mesh: fit rack-tracker's MHR body model to the hero person's 33 joints
at every squat phase (data/pose.json from pose.mjs), the way the product's post-processing does
(MhrFitter: bone scale, 3D initialisation, reprojection into the three cameras), and write the
one file the hero scene skins on the GPU:

  [u32 header length][header JSON][sections, each 4-byte aligned]
  rest        int16  [V,3]      rest-pose vertices, mm
  faces       uint16 [Fc,3]
  skinIndex   uint8  [V,4]      joint of each of the four skin weights
  skinWeight  uint8  [V,4]      weights × 255 (the reader renormalises)
  ibp         f32    [J,8]      inverse bind pose a joint: t(3) q(xyzw) s
  states      f32    [P,J,8]    skeleton state a phase and joint, same layout (cm)
  header: vertices, faces, joints, phases [P], bodyIds [29] (joints drawn as the model's skeleton),
          bodyParents [29] (index into bodyIds, −1 = root), bodyNames, fit {...}

Run with rack-tracker's backend venv (torch + CUDA, mhr/assets/mhr_model.pt):
  <rack-tracker>/backend/.venv/Scripts/python fit.py --backend <rack-tracker>/backend --out ../../public/assets/hero-mesh/squat-YYYYMMDD.bin
Correctives (pose-dependent blendshapes) are not in the file: the GPU skins the rest mesh with
the joint states only. The script prints how far that is from the full model."""
import argparse, json, struct, sys, time
from pathlib import Path
from types import SimpleNamespace
import numpy as np

ap = argparse.ArgumentParser()
ap.add_argument("--backend", required=True)
ap.add_argument("--pose", default="data/pose.json")
ap.add_argument("--out", required=True)
ap.add_argument("--device", default="cuda")
ap.add_argument("--lambda-t", type=float, default=None, help="angle smoothing across phases (default: the product's)")
ns = ap.parse_args()
BACKEND = Path(ns.backend).resolve()
sys.path.insert(0, str(BACKEND))
import torch
from service.mhr_model import MhrModel
from service.mhr_fitter import MhrFitter, MhrFitConfig, POSE_LANDMARK_NAMES
from service.mhr_postprocess import MHR_BODY_JOINTS, body_joint_ids
from service.batch_triangulation_torch import _project

src = json.loads(Path(ns.pose).read_text(encoding="utf-8"))
positions = np.asarray(src["positions"], dtype=np.float64)            # [P,33,3] cm, floor frame, y up
P = positions.shape[0]
cams = [SimpleNamespace(R=np.asarray(c["R"], dtype=np.float64), t=np.asarray(c["t"], dtype=np.float64),
                        K=np.asarray(c["K"], dtype=np.float64), dist_coeffs=np.asarray(src["dist"], dtype=np.float64))
        for c in src["cameras"]]
# 2D observations = the same joints projected into the three cameras (no detection error)
obs_pixel = np.zeros((len(cams), P, 33, 2))
for i, c in enumerate(cams):
    px, _ = _project(torch, torch.tensor(positions.reshape(-1, 3)), torch.tensor(c.R), torch.tensor(c.t),
                     torch.tensor(c.K), torch.tensor(c.dist_coeffs))
    obs_pixel[i] = px.numpy().reshape(P, 33, 2)
w, h = src["image"]
inside = (obs_pixel[..., 0] >= 0) & (obs_pixel[..., 0] < w) & (obs_pixel[..., 1] >= 0) & (obs_pixel[..., 1] < h)
print(f"{P} phases; joints inside the image: " + ", ".join(f"C{i + 1} {inside[i].mean() * 100:.0f}%" for i in range(len(cams))))
obs_valid = inside.copy()
obs_conf = np.ones_like(obs_pixel[..., 0])
observed = np.ones((P, 33), dtype=bool)

t0 = time.perf_counter()
m = MhrModel(model_path=BACKEND.parent / "mhr/assets/mhr_model.pt", device=ns.device)
print(f"model {m.n_vertices} vertices, {m.faces.shape[0]} faces, {m.n_joints} joints, load {time.perf_counter() - t0:.1f} s")
cfg = MhrFitConfig(device=str(m.device))
if ns.lambda_t is not None:
    cfg.lambda_t = ns.lambda_t
log = lambda s: print("  " + s)
res = MhrFitter(m, cfg, log=log).fit(positions=positions, observed=observed, obs_pixel=obs_pixel, obs_valid=obs_valid,
                                     obs_conf=obs_conf, cameras=cams)
err = np.linalg.norm(res.landmarks - positions, axis=-1)                # [P,33] cm
by_joint = {n: round(float(err[:, j].mean()), 2) for j, n in enumerate(POSE_LANDMARK_NAMES)}
worst = sorted(by_joint.items(), key=lambda kv: -kv[1])[:6]
print(f"fit {res.stats.get('seconds_total')} s, residual {res.stats.get('resid_px_mean')} px, "
      f"3D error mean {err.mean():.2f} cm, max {err.max():.2f} cm; worst joints {worst}")

pose = torch.tensor(res.pose, device=m.device)
with torch.no_grad():
    states = m.skeleton_state(pose).cpu().numpy().astype(np.float32)  # [P,127,8]
    rest = m.rest_vertices(None)                                         # [1,V,3]
    v_lbs = m.skin(torch.tensor(states, device=m.device), rest)
    v_plain = m.vertices(pose, None, correctives=False)
    v_full = m.vertices(pose, None, correctives=True)
    d_lbs = (v_lbs - v_plain).norm(dim=-1)
    d_cor = (v_full - v_plain).norm(dim=-1)
print(f"GPU-skinning check: |LBS − model without correctives| max {d_lbs.max():.3f} cm; "
      f"correctives left out: mean {d_cor.mean():.2f} cm, max {d_cor.max():.2f} cm")

# skin table: up to four (joint, weight) a vertex, heaviest first
sj = m._skin_joint.cpu().numpy(); sw = m._skin_weight.cpu().numpy(); sv = m._skin_vertex.cpu().numpy()
skin_index = np.zeros((m.n_vertices, 4), dtype=np.uint8); skin_weight = np.zeros((m.n_vertices, 4), dtype=np.uint8)
order = np.lexsort((-sw, sv)); slot = np.zeros(m.n_vertices, dtype=np.int64); dropped = 0.0
for i in order:
    v = sv[i]; s = slot[v]
    if s >= 4:
        dropped = max(dropped, float(sw[i])); continue
    skin_index[v, s] = sj[i]; skin_weight[v, s] = int(round(float(sw[i]) * 255)); slot[v] += 1
assert m.n_joints < 256 and m.n_vertices < 65536
if dropped:
    print(f"warning: a fifth weight was dropped, largest {dropped:.3f}")
ids, parents = body_joint_ids(m)
rest_mm = np.clip(np.round(rest[0].cpu().numpy() * 10.0), -32767, 32767).astype(np.int16)
ibp = m._inverse_bind_pose.cpu().numpy().astype(np.float32)

sections = [("rest", rest_mm), ("faces", m.faces.astype(np.uint16)), ("skinIndex", skin_index), ("skinWeight", skin_weight),
            ("ibp", ibp), ("states", states)]
header = {"vertices": int(m.n_vertices), "faces": int(m.faces.shape[0]), "joints": int(m.n_joints),
          "phases": [round(float(k), 6) for k in src["phases"]], "bodyIds": [int(i) for i in ids], "bodyParents": [int(p) for p in parents],
          "bodyNames": list(MHR_BODY_JOINTS), "units": "cm; rest mm",
          "fit": {"residualPx": res.stats.get("resid_px_mean"), "error3dCm": round(float(err.mean()), 3),
                  "correctivesLeftOutCm": round(float(d_cor.mean()), 3), "lambdaT": cfg.lambda_t,
                  "boneScale": [round(float(v), 4) for v in res.bone_scale[:18]]},
          "sections": {}}
# lay out: header first (its own length depends on the offsets, so size it with placeholders, then fill)
def pack(hdr):
    hb = json.dumps(hdr, separators=(",", ":")).encode("utf-8")
    return hb
blobs = [np.ascontiguousarray(a).tobytes() for _, a in sections]
counts = [a.size for _, a in sections]
for _ in range(3):
    hb = pack(header)
    off = 4 + len(hb); off += (-off) % 4
    for (name, _), blob, n in zip(sections, blobs, counts):
        header["sections"][name] = [off, n]
        off += len(blob); off += (-off) % 4
hb = pack(header)
out = bytearray(struct.pack("<I", len(hb)) + hb); out += b"\0" * ((-len(out)) % 4)
for (name, _), blob in zip(sections, blobs):
    assert len(out) == header["sections"][name][0], name
    out += blob; out += b"\0" * ((-len(out)) % 4)
Path(ns.out).parent.mkdir(parents=True, exist_ok=True)
Path(ns.out).write_bytes(bytes(out))
print(f"→ {ns.out}: {len(out) / 1024:.0f} KiB (" + ", ".join(f"{n} {len(b) / 1024:.0f}" for (n, _), b in zip(sections, blobs)) + ")")
