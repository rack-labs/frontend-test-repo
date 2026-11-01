# Hero, first sequence: the live rig and measurement scene

The hero's first sequence is not a recording. `src/lib/hero-scene.js` draws it
live with three.js as one scene. It opens on the rig as built (the rig layout
render: rack, three cameras on the storage posts, tablet, compute enclosure,
cable runs). The gear then fades and the measurement-principle animation takes
over in the same space: rays from the three cameras through the detected left
knee, the point where they meet, all 33 joints, the same for every frame of a
squat (rays to all 33 joints at once, frames closing up from 0.36 s to 1/30 s, 30 Hz),
then the move from the floor frame to the rack frame. The rig is built in rack coordinates and moved onto
the calibration floor frame by the shift the layout render used (x 17 cm,
z 46.05 cm), so its cameras are the measurement's cameras.

The person is rack-tracker's MHR body model fitted to the scene's example pose,
skinned on the GPU from `public/assets/hero-mesh/` (made by `../hero-mesh/`,
see its README); the model's own skeleton is drawn inside the translucent mesh
and the measured 33 joints on top. In the burst beat body and skeleton snap to
each measured frame together.

The camera follows the key moments by itself (`RIG_KEYS` and `MEASURE_KEYS` in
that file, seconds on the sequence clock); a visitor's drag takes it over, and
it eases back after five idle seconds. Labels, captions, dimensions and the
image inset of the two source renders are left out. On wide screens the canvas
fills the whole hero section; the camera is framed for the stage box on the
right, and the rest of the canvas shows what lies around it.

The only file made here is the still that stands in until the scene mounts:
`public/assets/hero-scene.webp`, the scene at 0 s inside the stage box.
Remake it after changing the first camera key or the colours:

    npx astro build
    node scripts/hero-scene/still.mjs --t 0 --out still.png
    ffmpeg -y -i still.png -c:v libwebp -quality 82 -frames:v 1 public/assets/hero-scene.webp

`#hero=check` on the home page mounts the scene paused and exposes
`window.__heroScene.seek(seconds)`, which draws that moment and returns the
whole canvas as a PNG data URL, for checking the camera path frame by frame.
