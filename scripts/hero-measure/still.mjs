// The hero's still frame: serve dist/, open the home page with #hero=check
// (the live scene mounts paused and exposes seek), and save the frame at
// --t seconds as PNG. Playwright is borrowed from another checkout
// (--playwright <dir that has node_modules/playwright>, default the rack-tracker
// checkout beside this repo).
//   node still.mjs --t 0 --out still.png
import { createRequire } from 'node:module';
import { createReadStream, existsSync, statSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const a = Object.fromEntries(process.argv.slice(2).reduce((acc, v, i, arr) => { if (v.startsWith('--')) acc.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']); return acc; }, []));
const require = createRequire(resolve(a.playwright || fileURLToPath(new URL('../../../rack-tracker-forked/', import.meta.url)), 'package.json'));
const { chromium } = require('playwright');
const dist = fileURLToPath(new URL('../../dist/', import.meta.url));
const t = +(a.t || 0), out = a.out || 'still.png';

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const server = createServer((req, res) => {
  let p = join(dist, decodeURIComponent(new URL(req.url, 'http://x').pathname));
  if (existsSync(p) && statSync(p).isDirectory()) p = join(p, 'index.html');
  if (!p.startsWith(dist) || !existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' });
  createReadStream(p).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));

// 1500 x 1000 at 1.5x puts the stage at 960 x 800 CSS px, a 1440 x 1200 canvas
const browser = await chromium.launch({ headless: true, args: ['--use-gl=angle', '--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1500, height: 1000 }, deviceScaleFactor: 1.5 });
page.on('pageerror', e => console.error('[pageerror]', e.message));
await page.goto(`http://127.0.0.1:${server.address().port}/#hero=check`, { waitUntil: 'load' });
await page.waitForFunction(() => !!window.__measureHero, null, { timeout: 30000 });
const url = await page.evaluate(t => window.__measureHero.seek(t), t);
writeFileSync(out, Buffer.from(url.split(',')[1], 'base64'));
console.log('wrote', out);
await browser.close(); server.close();
