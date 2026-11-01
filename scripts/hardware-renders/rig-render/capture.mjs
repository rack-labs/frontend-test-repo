// rig-layout.html 을 headless Chrome 으로 찍는다. 아티팩트 호스트가 붙여 주는 doctype 뼈대를 로컬에서는 직접 두른다.
import { createRequire } from 'node:module';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
// playwright 는 저장소 node_modules 의 것을 쓴다(ESM 은 NODE_PATH 를 안 본다)
const { chromium } = createRequire('C:/Users/neighbor/Documents/Code/Github/rack-tracker-forked/package.json')('playwright');
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'out'); mkdirSync(OUT, { recursive: true });
const body = readFileSync(join(HERE, 'rig-layout.html'), 'utf8');
const wrap = (theme) => `<!doctype html><html lang="ko"${theme ? ` data-theme="${theme}"` : ''}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"></head><body>${body}</body></html>`;
writeFileSync(join(HERE, 'local.html'), wrap(''));
writeFileSync(join(HERE, 'local-dark.html'), wrap('dark'));

const views = (process.argv[2] || 'report,gear,front,top').split(',');
const W = Number(process.argv[3] || 1600), H = Number(process.argv[4] || 1000);
const browser = await chromium.launch({ headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const variants = process.argv.includes('--dark') ? [['local.html', ''], ['local-dark.html', '-dark']] : [['local.html', '']];   // 기본은 흰 배경만
for (const [file, tag] of variants) {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
  await page.goto(pathToFileURL(join(HERE, file)).href);
  await page.waitForFunction(() => window.__rendered === true, null, { timeout: 30000 });
  for (const v of views) {
    await page.evaluate((name) => window.__setView(name), v);
    await page.waitForTimeout(250);
    await page.locator('#stage').screenshot({ path: join(OUT, `rig-${v}${tag}.png`) });
    if (v === 'report') await page.screenshot({ path: join(OUT, `page-${v}${tag}.png`) });
  }
  console.log(file, 'done;', errors.length ? errors.join('\n') : 'console clean');
  await page.close();
  if (tag === '') continue;
}
await browser.close();
