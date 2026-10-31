// Step 3 of the hero render: draw harness.html frame by frame in headless
// Chromium and save PNGs. Playwright is borrowed from another checkout
// (--playwright <dir that has node_modules/playwright>, default rack-tracker).
//   node capture.mjs --w 2160 --h 1800 --from 39 --to 439 --blend 12 --out frames
//   [--query "theta=3.6&radius=425"] [--gpu]
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const a = Object.fromEntries(process.argv.slice(2).reduce((acc, v, i, arr) => { if (v.startsWith('--')) acc.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']); return acc; }, []));
const require = createRequire(resolve(a.playwright || '../../../rack-tracker-forked', 'package.json'));
const { chromium } = require('playwright');
const base = a.base || 'http://127.0.0.1:8311', W = +(a.w || 1440), H = +(a.h || 1200);
const from = +(a.from || 0), to = +(a.to || 1), out = a.out || 'frames', query = a.query ? '&' + a.query : '';
const blend = +(a.blend || 0);   // last N frames ease toward frame `from`, so the loop closes on itself
mkdirSync(out, { recursive: true });

const args = a.gpu ? ['--use-gl=angle', '--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist']
                   : ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'];
const browser = await chromium.launch({ headless: true, args });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') console.error('[console]', m.type(), m.text()); });
page.on('pageerror', e => console.error('[pageerror]', e.message));
const t0 = Date.now();
await page.goto(`${base}/harness.html?w=${W}&h=${H}&frame=${from}${query}`, { waitUntil: 'load' });
await page.waitForFunction(() => window.__ready === true, null, { timeout: 120000 });
console.log('ready', ((Date.now() - t0) / 1000).toFixed(1), 's', await page.evaluate(() => JSON.stringify(window.__cam)));
for (let i = from; i < to; i++) {
  const k = i - (to - blend);   // 0..blend-1 inside the tail
  const t = blend > 0 && k >= 0 ? (k + 1) / (blend + 1) : 0;
  await page.evaluate(([i, j, t]) => window.__setFrame(i, j, t), [i, from, t]);
  const png = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: W, height: H }, animations: 'disabled', caret: 'hide' });
  writeFileSync(join(out, `f${String(i - from).padStart(4, '0')}.png`), png);
  if ((i - from) % 30 === 0) console.log('frame', i, ((Date.now() - t0) / 1000).toFixed(1), 's');
}
await browser.close();
console.log('done', to - from, 'frames', ((Date.now() - t0) / 1000).toFixed(1), 's');
