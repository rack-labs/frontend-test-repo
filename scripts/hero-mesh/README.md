# Hero body mesh

The person in the live hero scene (`src/lib/hero-scene.js`) is rack-tracker's
MHR body model, fitted to the scene's own example person: the 33 MediaPipe
joints that `poseAt(k)` builds from bone lengths and joint angles, at 33 phases
of the squat (0 standing .. 1 bottom). The fit is the product's post-processing
(`MhrFitter`: bone scale, 3D initialisation, reprojection into the scene's three
cameras), so the mesh sits on the measured joints the way it does in the
product's replay.

The scene does not receive vertices per frame. It skins the rest mesh on the
GPU (`THREE.SkinnedMesh`) from the 127 joint states of each phase and blends
the two nearest phases, so the body can take any squat depth and snaps to the
pose of each measured frame in the burst beat. The file is fetched once the
scene mounts (~600 KiB); until it is here the body is the old stick figure.

Output: `public/assets/hero-mesh/squat-YYYYMMDD.bin` (the name is in
`MESH_URL` in `hero-scene.js`; a new file gets a new date so caches do not
serve the old one). Layout and section list: the docstring of `fit.py`.
Correctives (pose-dependent blendshapes) are not in the file; the fit script
prints how far the skinned mesh is from the full model (mean 0.33 cm on
2 November 2026).

Rebuild after changing the person (`LEN`, `ANG`, `LAT`, `poseAt`) or the
cameras in `hero-scene.js`:

    cd scripts/hero-mesh
    node pose.mjs --phases 33
    <rack-tracker>/backend/.venv/Scripts/python fit.py --backend <rack-tracker>/backend --out ../../public/assets/hero-mesh/squat-YYYYMMDD.bin

`fit.py` needs the backend venv (torch + CUDA) and `mhr/assets/mhr_model.pt`
beside `backend/`; the fit takes about 40 s on a laptop GPU. Then change
`MESH_URL` and check with `#hero=check` (`scripts/hero-scene/README.md`).

Fit on 2 November 2026: 3D error mean 1.84 cm, max 5.6 cm (worst joints the
shoulders, ears and toes, where the stick figure and the model's landmarks
disagree); reprojection residual 9.1 px.
