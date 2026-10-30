# Hero, first sequence: the live measurement scene

The hero's first sequence is not a recording. `src/lib/measure-hero.js` draws
it live with three.js: rays from the three cameras through the detected left
knee, the point where they meet, all 33 joints, then the move from the floor
frame to the rack frame. The camera follows the key moments by itself (`KEYS`
in that file, seconds on the sequence clock); a visitor's drag takes it over,
and it eases back after five idle seconds. The scene comes from rack-tracker's
measurement-principle animation, without its labels, captions and image inset.

The only file made here is the still that stands in until the scene mounts:
`public/assets/hero-measure.webp`, the scene at 0 s. Remake it after changing
the first camera key or the colours:

    npx astro build
    node scripts/hero-measure/still.mjs --t 0 --out still.png
    ffmpeg -y -i still.png -c:v libwebp -quality 82 -frames:v 1 public/assets/hero-measure.webp

`#hero=check` on the home page mounts the scene paused and exposes
`window.__measureHero.seek(seconds)`, which draws that moment and returns it
as a PNG data URL, for checking the camera path frame by frame.
