// 히어로 렌더 캡처: 스크래치패드 루트를 정적으로 띄우고(importmap·모듈 때문에 http 필요) headless Chromium(GPU, d3d11)으로 찍는다.
//   node capture.mjs --page hero/mic711.html --w 2160 --h 1800 --out out/mic711.png [--query "theta=0.7&phi=1.1"]
//   node capture.mjs --page hero/mic711.html --orbit 120 --out-dir frames/mic711 [--span 6.283] [--query ...]   (theta 를 span 만큼 돌리며 N 장)
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const a = Object.fromEntries(process.argv.slice(2).reduce((acc, v, i, arr) => { if (v.startsWith('--')) acc.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']); return acc; }, []));
const require = createRequire('C:/Users/neighbor/Documents/Code/Github/rack-tracker-forked/package.json');
const { chromium } = require('playwright');
const HERE = dirname(fileURLToPath(import.meta.url)), ROOT = resolve(HERE, '..');   // 스크래치패드 루트(hero/, rig-render/ 가 그 아래)
const W = +(a.w || 2160), H = +(a.h || 1800), query = a.query ? '&' + a.query : '';
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.css': 'text/css', '.webp': 'image/webp', '.jpg': 'image/jpeg' };

const server = createServer((req, res) => {
  const p = join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!p.startsWith(ROOT) || !existsSync(p) || statSync(p).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': MIME[extname(p)] || 'application/octet-stream' }); res.end(readFileSync(p));
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

const browser = await chromium.launch({ headless: true, args: ['--use-gl=angle', '--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const errors = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
page.on('pageerror', e => errors.push(`pageerror: ${e.message}`));
const t0 = Date.now();
await page.goto(`${base}/${a.page}?w=${W}&h=${H}${query}`, { waitUntil: 'load' });
await page.waitForFunction(() => window.__ready === true || window.__rendered === true, null, { timeout: 120000 });
await page.waitForTimeout(300);
console.log('ready', ((Date.now() - t0) / 1000).toFixed(1), 's');

if (a.orbit) {
  const n = +a.orbit, span = +(a.span || Math.PI * 2), dir = a['out-dir'] || 'frames'; mkdirSync(resolve(HERE, dir), { recursive: true });
  const v0 = await page.evaluate(() => ({ ...window.__view }));
  for (let i = 0; i < n; i++) {
    await page.evaluate(async ([th]) => { window.__cam({ theta: th }); await window.__render(); }, [v0.theta + span * i / n]);
    writeFileSync(resolve(HERE, dir, `f${String(i).padStart(4, '0')}.png`), await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: W, height: H }, animations: 'disabled' }));
    if (i % 30 === 0) console.log('frame', i, ((Date.now() - t0) / 1000).toFixed(1), 's');
  }
} else {
  const out = resolve(HERE, a.out || 'out/shot.png'); mkdirSync(dirname(out), { recursive: true });
  if (a.view) await page.evaluate((v) => window.__setView(v), a.view);     // rig-layout 쪽 시점 이름
  await page.waitForTimeout(200);
  writeFileSync(out, await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: W, height: H }, animations: 'disabled' }));
  console.log('wrote', out);
}
console.log(errors.length ? errors.join('\n') : 'console clean', ((Date.now() - t0) / 1000).toFixed(1), 's');
await browser.close(); server.close();
