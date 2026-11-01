// Screenshots of the hardware viewer pages (public/hardware/*.html) as the site serves them:
// public/ is served at the root so /vendor/three/... resolves, the page is opened at the given
// size, and the frame is saved once the page signals it has drawn (data-ready on <html>).
// Playwright is borrowed from another checkout (--playwright <dir with node_modules/playwright>,
// default the rack-tracker checkout beside this repo).
//   node scripts/hardware-renders/shot.mjs --page hardware/camera.html --w 1200 --h 900 --out cam.png [--query "theta=0.4"]
import { createRequire } from 'node:module';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const a = Object.fromEntries(process.argv.slice(2).reduce((acc, v, i, arr) => { if (v.startsWith('--')) acc.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']); return acc; }, []));
const require = createRequire(resolve(a.playwright || fileURLToPath(new URL('../../../rack-tracker-forked/', import.meta.url)), 'package.json'));
const { chromium } = require('playwright');
const root = fileURLToPath(new URL('../../public/', import.meta.url));
const W = +(a.w || 1200), H = +(a.h || 900);

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = createServer((req, res) => {
  let p = join(root, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!p.startsWith(root) || !existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' });
  createReadStream(p).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({ headless: true, args: ['--use-gl=angle', '--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const log = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') log.push(`${m.type()}: ${m.text()}`); });
page.on('pageerror', e => log.push(`pageerror: ${e.message}`));
page.on('requestfailed', r => log.push(`requestfailed: ${r.url()}`));
const t0 = Date.now();
await page.goto(`${base}/${a.page}${a.query ? '?' + a.query : ''}`, { waitUntil: 'load' });
await page.waitForFunction(() => document.documentElement.dataset.ready === '1', null, { timeout: 60000 }).catch(() => log.push('timeout: no ready signal'));
await page.waitForTimeout(+(a.wait || 400));
await page.screenshot({ path: a.out || 'shot.png' });
console.log('saved', a.out || 'shot.png', ((Date.now() - t0) / 1000).toFixed(1) + 's');
for (const l of log) console.log(l);
await browser.close(); server.close();
