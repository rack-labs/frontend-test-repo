// preview-template.html 의 {{ASSET:파일명}} 자리를 preview/ 의 파일을 data URI 로 바꿔 hero-preview.html 을 만든다(아티팩트는 외부 파일을 못 읽는다)
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
const HERE = dirname(fileURLToPath(import.meta.url));
const MIME = { '.webp': 'image/webp', '.webm': 'video/webm', '.png': 'image/png', '.mp4': 'video/mp4' };
let html = readFileSync(join(HERE, 'preview-template.html'), 'utf8');
let total = 0;
html = html.replace(/\{\{ASSET:([^}]+)\}\}/g, (_, name) => {
  const p = join(HERE, 'preview', name); total += statSync(p).size;
  return `data:${MIME[extname(name)]};base64,${readFileSync(p).toString('base64')}`;
});
const out = join(HERE, 'hero-preview.html');
writeFileSync(out, html);
console.log('wrote', out, 'assets', (total / 1e6).toFixed(2), 'MB → html', (statSync(out).size / 1e6).toFixed(2), 'MB');
