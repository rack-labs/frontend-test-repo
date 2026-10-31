// Builds the live pipeplot hero (three.js, src/lib/heroLive.js of the pipeplot
// checkout) into one ES module for this site, without touching pipeplot's
// tracked files. Run from this repo:
//   node scripts/build-pipeplot-live.mjs --pipeplot ../pipeplot
// Output: public/assets/pipeplot-live.js (loaded on demand by index.html when
// WebGL is available; the recorded video stays as the fallback).
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, copyFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const argIdx = process.argv.indexOf('--pipeplot');
const pipeplot = resolve(argIdx > 0 ? process.argv[argIdx + 1] : '../pipeplot');
const here = fileURLToPath(new URL('..', import.meta.url));
const out = join(here, 'public', 'assets');
const tmp = mkdtempSync(join(tmpdir(), 'pipeplot-live-'));
const entry = join(tmp, 'entry.js');
const dist = join(tmp, 'dist');
const slash = (p) => p.replaceAll(String.fromCharCode(92), '/');

writeFileSync(entry, `export { mountHeroLive } from '${slash(join(pipeplot, 'src/lib/heroLive.js'))}';\n`);
writeFileSync(join(tmp, 'vite.config.mjs'), `export default {
  root: '${slash(pipeplot)}',
  publicDir: false,
  logLevel: 'info',
  build: {
    lib: { entry: '${slash(entry)}', formats: ['es'], fileName: () => 'pipeplot-live.js' },
    outDir: '${slash(dist)}', emptyOutDir: true, minify: true, sourcemap: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
};\n`);
const r = spawnSync('npx', ['vite', 'build', '--config', join(tmp, 'vite.config.mjs')], { cwd: pipeplot, stdio: 'inherit', shell: true });
if (r.status !== 0) { console.error('vite build failed'); process.exit(r.status ?? 1); }
copyFileSync(join(dist, 'pipeplot-live.js'), join(out, 'pipeplot-live.js'));
rmSync(tmp, { recursive: true, force: true });
console.log('wrote', join(out, 'pipeplot-live.js'));
