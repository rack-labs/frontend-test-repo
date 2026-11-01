// Builds the graduation-review deck of slide-studio into public/slides/, so the site serves it
// at /slides/#/graduation-review/1 (the deck is a Vite + React app with hash routing).
//   node scripts/slides/build.mjs [--app <slide-studio checkout>/app]
// slide-studio itself is not changed: Vite runs here with an inline config that
//   - sets base to /slides/ and the output to this repo's public/slides/,
//   - keeps only the graduation-review session (the other decks stay private),
//   - rewrites the deck's absolute media paths (/graduation-review/…) under /slides/,
//   - gives the page its title, an ?embed mode that hides the app's own bars and a slide show
//     (the slide alone on black) while the page is full screen.
// The deck's media (app/public/graduation-review) is copied in afterwards.
import { createRequire } from 'node:module';
import { cpSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const a = Object.fromEntries(process.argv.slice(2).reduce((acc, v, i, arr) => { if (v.startsWith('--')) acc.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']); return acc; }, []));
const app = resolve(a.app || 'C:/Users/neighbor/Documents/Code/Github/slide-studio-4-graduation/app');
const repo = fileURLToPath(new URL('../../', import.meta.url));
const outDir = join(repo, 'public/slides');
const require = createRequire(join(app, 'package.json'));
// the ESM entries by hand: require.resolve would hand back the CJS builds
const pkgDir = (name) => join(app, 'node_modules', name);
const { build } = await import(pathToFileURL(join(pkgDir('vite'), 'dist/node/index.js')).href);
const react = (await import(pathToFileURL(join(pkgDir('@vitejs/plugin-react'), 'dist/index.js')).href)).default;

const KEEP = 'graduation-review';
const sessionsFile = join(app, 'src/sessions/index.js');
const onlyOneSession = {
  name: 'only-one-session',
  enforce: 'pre',
  load(id) {
    if (resolve(id.split('?')[0]) !== sessionsFile) return null;
    let code = readFileSync(sessionsFile, 'utf8');
    // drop the other decks: their import lines and their entries in the array
    code = code.replace(/^import \w+ from '\.\/(?!graduation-review\/)[^']+'\n/gm, '');
    code = code.replace(/\n  \{\n    id: '(?!graduation-review')[^']+',[\s\S]*?\n  \},(?=\n)/g, '');
    if (!code.includes(`id: '${KEEP}'`)) throw new Error('graduation-review entry not found in sessions/index.js');
    return code;
  },
};
const underSlides = {
  name: 'media-under-slides',
  transform(code, id) {
    const file = id.split('?')[0].split('\\').join('/');         // Vite ids keep forward slashes on Windows
    if (!/\.(jsx?|tsx?|css)$/.test(file) || !file.includes('/src/')) return null;
    // every form the deck uses: quoted strings, template literals, url(), and JSX attributes (src=/…)
    const next = code.replace(/(["'`(=])\/graduation-review\//g, '$1/slides/graduation-review/');
    return next === code ? null : { code: next, map: null };
  },
  transformIndexHtml(html) {
    return html
      .replace('<title>slide-studio</title>', '<title>RackTracker 발표 자료</title>')
      .replace('</head>', `    <script>if (/(^|[?&])embed(=|&|$)/.test(location.search)) document.documentElement.classList.add('embed')</script>
    <style>
      /* ?embed: the deck alone, scaled to the window. The deck is 80rem × 45rem with the two
         2.75rem nav buttons and their gaps beside it (87.75rem in all), so the root font size
         follows the window and everything set in rem scales with it. */
      .embed [class*="_topbar_"], .embed [class*="_bar_"] { display: none !important }
      html.embed { font-size: min(1.1396vw, 2.2222vh); }
      html.embed, html.embed body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
      html.embed body { background: transparent; }
      html.embed #root { height: 100%; display: grid; place-items: center; }

      /* full screen = the slide show, as F5 in PowerPoint: the slide alone on black, as large as
         the screen allows (80rem × 45rem), without the bars, arrows and dots around it */
      html.present { font-size: min(1.25vw, 2.2222vh); }
      html.present, html.present body { margin: 0; padding: 0; height: 100%; overflow: hidden; background: #000; }
      html.present #root { height: 100%; display: grid; place-items: center; }
      html.present #root > * > :not(:has([data-deck-frame])),
      html.present :has(> [data-deck-frame]) > :not([data-deck-frame]) { display: none !important }
      html.present [data-deck-frame] { border: 0; border-radius: 0; box-shadow: none; }
      html.present.idle, html.present.idle * { cursor: none !important }
    </style>
    <script>
      // The slide show is on while this page itself is full screen (the home page asks for it).
      // Space, Enter, PageDown and a click go forward, Backspace and PageUp go back (presenter
      // remotes send PageDown/PageUp); the deck already listens for the arrow keys. The pointer
      // hides after two still seconds. Esc leaves full screen, and so the slide show.
      (() => {
        const html = document.documentElement;
        const turn = (key) => window.dispatchEvent(new KeyboardEvent('keydown', { key }));
        const NEXT = [' ', 'Enter', 'PageDown'], BACK = ['Backspace', 'PageUp'];
        const on = () => html.classList.contains('present');
        let still;
        document.addEventListener('fullscreenchange', () => {
          html.classList.toggle('present', document.fullscreenElement === html);
          html.classList.remove('idle');
        });
        window.addEventListener('keydown', (e) => {
          if (!on() || !e.isTrusted) return;
          const key = NEXT.includes(e.key) ? 'ArrowRight' : BACK.includes(e.key) ? 'ArrowLeft' : null;
          if (key) { e.preventDefault(); turn(key); }
        });
        document.addEventListener('click', (e) => {
          if (on() && !e.target.closest('a, button, input, select, textarea, [controls]')) turn('ArrowRight');
        });
        document.addEventListener('mousemove', () => {
          html.classList.remove('idle'); clearTimeout(still);
          if (on()) still = setTimeout(() => html.classList.add('idle'), 2000);
        });
      })();
    </script>
  </head>`);
  },
};

rmSync(outDir, { recursive: true, force: true });
await build({
  root: app, base: '/slides/', configFile: false, publicDir: false, logLevel: 'warn',
  plugins: [react(), onlyOneSession, underSlides],
  build: { outDir, emptyOutDir: true, chunkSizeWarningLimit: 1200 },
});
const media = join(app, 'public', KEEP);
if (!existsSync(media)) throw new Error(`deck media missing: ${media}`);
cpSync(media, join(outDir, KEEP), { recursive: true });
console.log('deck built into', outDir);
