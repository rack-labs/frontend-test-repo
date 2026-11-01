# Hero body mesh

The person in the live hero scene (`src/lib/hero-scene.js`) is rack-tracker's
MHR body model, fitted to the scene's own example person: the 33 MediaPipe
joints that `stickAt(k)` builds from bone lengths and joint angles, at 33 phases
of the squat (0 standing .. 1 bottom). The fit is the product's post-processing
(`MhrFitter`: bone scale, 3D initialisation, reprojection into the scene's three
cameras), so the mesh sits on the measured joints the way it does in the
product's replay.

The scene then measures the fitted model, not the stick figure: `fit.py` also
writes `src/lib/hero-person.js`, the model's own 33 joints in MediaPipe order at
every phase (the fitter's `landmarks`) and the name of the mesh file, and
`personAt(k)` in `hero-scene.js` reads it. The model's skeleton is drawn with
its shoulder, elbow, wrist, hip, knee and ankle at the joint centre plus the
product's fixed offset (`LANDMARK_OFFSET_CM` in rack-tracker's
`service/mhr_topology.py`, in the header as `bodyOffsets`); that is where the
product puts the matching MediaPipe joint on the model. So the measured joints
and the model's skeleton meet up to the detection error (under 0.7 cm). Before
2 November 2026 the skeleton was drawn at the bare joint centres and the stick
figure was measured: the two were 3.6 cm apart on average and 8 cm at the
shoulders.

The scene does not receive vertices per frame. It skins the rest mesh on the
GPU (`THREE.SkinnedMesh`) from the 127 joint states of each phase and blends
the two nearest phases, so the body can take any squat depth and snaps to the
pose of each measured frame in the burst beat. The file is fetched once the
scene mounts (~600 KiB); until it is here the body is the old stick figure.

The body is one team member's. `member.json` holds the MHR identity (45 shape
values) the product fitted from that member's InBody record, and the bone
lengths triangulated in one of their sets; `hero-scene.js` builds the stick
figure from those lengths and `fit.py --identity member.json` passes the shape
to the fit. With the average body (identity 0) the figure looked heavy.

Height: against MediaPipe landmarks the bone scales come out short, so the
mesh stands 7–11 cm under the member's height and the head, which has no scale
of its own, looks big (rack-tracker #655). Here `SIZE` in `hero-scene.js`
scales the whole stick figure until the standing mesh is the member's height;
`fit.py` prints that height (`body: standingHeightCm`), so one refit tells
whether `SIZE` needs another step (1.055 gave 177.5 cm, 1.01 gives 170.4 cm).

Output: `public/assets/hero-mesh/squat-YYYYMMDD.bin` and
`src/lib/hero-person.js` (which names the bin, so `MESH_URL` follows it; a new
file gets a new name so caches do not serve the old one). Layout and section
list: the docstring of `fit.py`.
Correctives (pose-dependent blendshapes) are not in the file; the fit script
prints how far the skinned mesh is from the full model (mean 0.34 cm on
2 November 2026).

Rebuild after changing the person (`SIZE`, `LEN`, `ANG`, `LAT`, `stickAt`,
`member.json`) or the cameras in `hero-scene.js`:

    cd scripts/hero-mesh
    node pose.mjs --phases 33
    MHR_CUDA_GRAPH=0 <rack-tracker>/backend/.venv/Scripts/python fit.py --backend <rack-tracker>/backend --out ../../public/assets/hero-mesh/squat-YYYYMMDD.bin

`fit.py` needs the backend venv (torch + CUDA) and `mhr/assets/mhr_model.pt`
beside `backend/`; the fit takes about 100 s on a laptop GPU. With an identity
the fitter's CUDA-graph path fails during capture, hence `MHR_CUDA_GRAPH=0`.
Delete the old bin and check with `#hero=check` (`scripts/hero-scene/README.md`).

Fit on 2 November 2026 (`squat-20261102c.bin`, the same fit as `b` plus the
person file and `bodyOffsets`): stick figure to fitted model, 3D error mean 1.82 cm, max
4.8 cm (worst joints the toes, ears and shoulders, where the stick figure and
the model's landmarks disagree); reprojection residual 9.0 px; standing mesh
170.4 cm, shoulder joint span 25.1 cm; at the bottom the hip is 1.2 cm under
the knee (the member's real set: 10.9 cm above).
