# Hero background: MHR playback

The landing hero's second sequence plays the post-processed MHR body of one
real set, rendered on the page colour (the first is the live measurement
scene, `../hero-scene/`). This folder rebuilds that loop from a set's body file.
Nothing here ships; `public/assets/hero-mhr-*.{webm,mp4}` and `hero-mhr.webp`
are the outputs. (`out/og.png` was the share card until 2026-11-02; the site
now uses the logo card `public/assets/og-logo.png`, cropped from the brand image.)

Current loop: set `measure_20261005-174755_01`, recorded on the prototype rig
on 5 October 2026 (three cameras, NVIDIA Jetson), MHR fit on CUDA, frames
459..858 of the set (two squats, 13.3 s at 30 fps). The last 12 frames ease
toward the first so the loop closes on itself.

1. Export vertices and joints with rack-tracker's backend venv (torch + CUDA,
   `mhr/assets/mhr_model.pt` unpacked):

       <rack-tracker>/backend/.venv/Scripts/python export_mhr.py --backend <rack-tracker>/backend --set <dir with 01_body.npz> --out data --from 420 --to 880

2. Copy three.js beside the harness and serve the folder:

       cp <rack-tracker>/backend/scripts/vendor/three.module.js .
       python -m http.server 8311 --bind 127.0.0.1 --directory .

   Preview in a browser: `http://127.0.0.1:8311/harness.html?play=1`. Camera
   tuning goes in the query (`theta`, `phi`, `radius`, `fov`, `ty`, `dx`).

3. Capture frames (Playwright from rack-tracker's node_modules):

       node capture.mjs --w 2160 --h 1800 --from 39 --to 439 --blend 12 --out frames
       node capture.mjs --w 1200 --h 630 --from 95 --to 96 --out og --query "radius=300&ty=60"

4. Encode and copy into the site:

       bash encode.sh
       cp out/hero-mhr-2160.* out/hero-mhr-1080.* out/hero-mhr.webp ../../public/assets/
