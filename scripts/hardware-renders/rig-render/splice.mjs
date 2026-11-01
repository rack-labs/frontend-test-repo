// rig-layout.html 의 장비함·선 구간을 block-gear.js 내용으로 바꾼다
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const HERE = dirname(fileURLToPath(import.meta.url));
const file = join(HERE, 'rig-layout.html');
const src = readFileSync(file, 'utf8');
const a = src.indexOf('/* ── 연산 장비함');
const b = src.indexOf('/* ── 시점:');
if (a < 0 || b < 0 || b < a) throw new Error(`marker not found: a=${a} b=${b}`);
const block = readFileSync(join(HERE, 'block-gear.js'), 'utf8');
writeFileSync(file, src.slice(0, a) + block + src.slice(b));
console.log('spliced', a, b, 'block', block.length);
