"""Step 1 of the hero render: turn a set's post-processed MHR pose vectors
(tracks/NN_body.npz, written by rack-tracker's mhr_postprocess) into the mesh
vertices and the 29 body joints for a frame range, as flat binaries the
harness page reads.
  python export_mhr.py --backend <rack-tracker>/backend --set <dir with 01_body.npz> --out data --from 420 --to 880
Run with the backend's venv (torch + CUDA). Output: verts.i16 [F,V,3] int16 mm,
joints.f32 [F,29,3] float32 cm, faces.u32 [Fc,3] uint32, meta.json."""
import argparse, json, sys, time
from pathlib import Path
import numpy as np

ap = argparse.ArgumentParser()
ap.add_argument("--backend", required=True); ap.add_argument("--set", required=True); ap.add_argument("--out", default="data")
ap.add_argument("--seq", default="01"); ap.add_argument("--from", dest="a", type=int, default=0); ap.add_argument("--to", dest="b", type=int, required=True)
ns = ap.parse_args()
BACKEND = Path(ns.backend).resolve()
sys.path.insert(0, str(BACKEND))
import torch
from service.mhr_model import MhrModel
from service.mhr_postprocess import MHR_BODY_JOINTS, body_joint_ids

src = Path(ns.set); out = Path(ns.out); a, b = ns.a, ns.b
out.mkdir(parents=True, exist_ok=True)
z = np.load(src / f"{ns.seq}_body.npz")
pose = z["pose"][a:b]; identity = z["identity"]
t0 = time.perf_counter()
m = MhrModel(model_path=BACKEND.parent / "mhr/assets/mhr_model.pt", device="cuda")
print("model", m.n_vertices, "verts", m.faces.shape, "faces", "load", round(time.perf_counter() - t0, 1), "s")
ids, parents = body_joint_ids(m)
verts = []; joints = []
with torch.no_grad():
    for i in range(0, len(pose), 64):
        p = torch.from_numpy(pose[i:i+64]).to("cuda")
        v = m.vertices(p, identity, correctives=True)
        verts.append(torch.clamp(torch.round(torch.nan_to_num(v) * 10.0), -32767, 32767).to(torch.int16).cpu().numpy())
        st = m.skeleton_state(p)[:, ids, :3]
        joints.append(st.cpu().numpy().astype(np.float32))
verts = np.concatenate(verts); joints = np.concatenate(joints)
print("verts", verts.shape, "joints", joints.shape, round(time.perf_counter() - t0, 1), "s")
(out / "verts.i16").write_bytes(np.ascontiguousarray(verts).tobytes())
(out / "joints.f32").write_bytes(np.ascontiguousarray(joints).tobytes())
(out / "faces.u32").write_bytes(np.ascontiguousarray(m.faces.astype(np.uint32)).tobytes())
j33 = z["joints33"][a:b]
hip = ((j33[:, 23, 1] + j33[:, 24, 1]) / 2).astype(float).round(1).tolist()
ymin = float(verts[..., 1].min()) / 10; ymax = float(verts[..., 1].max()) / 10
meta = {"first": a, "last": b, "frames": int(b - a), "fps": 30, "nVertices": int(m.n_vertices), "nFaces": int(m.faces.shape[0]),
        "names": list(MHR_BODY_JOINTS), "parents": parents, "hipY": hip,
        "bbox": {"x": [float(verts[..., 0].min()) / 10, float(verts[..., 0].max()) / 10], "y": [ymin, ymax],
                 "z": [float(verts[..., 2].min()) / 10, float(verts[..., 2].max()) / 10]},
        "timestampMs": z["timestamp_ms"][a:b].round(1).tolist()}
(out / "meta.json").write_text(json.dumps(meta), encoding="utf-8")
print("bbox", meta["bbox"])
