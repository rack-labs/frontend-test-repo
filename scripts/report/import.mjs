// Brings the Project Report manuscript (rack-tracker docs/etc/graduation-review/report/) onto the
// site as one Markdown file that Astro renders at /report/.
//   node scripts/report/import.mjs --src <report dir>
// The manuscript keeps every figure and table in a quoted block:
//   > ![그림 n](figures/file)      → <figure> with the image and its caption
//   > 그림 n. caption.
//   > 요점: …  > 본문에 쓸 것: …    (working notes, dropped)
// Table blocks point at a drawn image; here the table itself is set in HTML from tables.md, which is
// the manuscript's own source for them. The date line, the title and the HTML comments are dropped
// (the page supplies its own title). Figures are copied to public/report/figures/ with their size read
// from the file so the page does not jump while they load.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { join, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const a = Object.fromEntries(process.argv.slice(2).reduce((acc, v, i, arr) => { if (v.startsWith('--')) acc.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']); return acc; }, []));
const src = resolve(a.src || 'C:/Users/neighbor/Documents/Code/Github/rack-tracker-forked/.claude/worktrees/635-graduation-project/docs/etc/graduation-review/report');
const repo = fileURLToPath(new URL('../../', import.meta.url));
const outMd = join(repo, 'src/report/project-report.md');
const outFigs = join(repo, 'public/report/figures');
mkdirSync(join(repo, 'src/report'), { recursive: true }); mkdirSync(outFigs, { recursive: true });

const md = readFileSync(join(src, 'project-report.md'), 'utf8').replace(/\r\n/g, '\n');
const tablesMd = readFileSync(join(src, 'tables.md'), 'utf8').replace(/\r\n/g, '\n');

// image size from the file header (PNG IHDR, JPEG SOFn)
function imageSize(file) {
  const b = readFileSync(file);
  if (b[0] === 0x89 && b[1] === 0x50) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}

// tables.md: '## 표 n. title' → { rows (markdown table lines), notes (other paragraphs) }
const tables = new Map();
for (const sec of tablesMd.split(/^## /m).slice(1)) {
  const m = sec.match(/^표 (\d+)\./); if (!m) continue;
  const lines = sec.split('\n').slice(1);
  const rows = [], notes = [];
  let para = [];
  const flush = () => { if (para.length) { notes.push(para.join(' ')); para = []; } };
  for (const l of lines) {
    if (/^\|/.test(l)) { rows.push(l); continue; }
    if (/^<!--/.test(l) || /-->$/.test(l)) continue;
    if (l.trim() === '') { flush(); continue; }
    if (!rows.length) para.push(l.trim());
  }
  flush();
  tables.set(m[1], { rows, notes });
}
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const inline = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
function tableHtml(n, caption) {
  const t = tables.get(n); if (!t) throw new Error(`표 ${n} not in tables.md`);
  const cells = l => l.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
  const align = cells(t.rows[1]).map(c => /^:?-+:$/.test(c) ? (c.startsWith(':') ? 'center' : 'right') : 'left');
  const heads = cells(t.rows[0]);
  const head = heads.map((c, i) => `<th style="text-align:${align[i]}">${inline(c)}</th>`).join('');
  // data-th carries the column name into each cell: on narrow screens the rows stack and doc.css labels the cells with it
  const body = t.rows.slice(2).map(l => `<tr>${cells(l).map((c, i) => `<td data-th="${esc(heads[i] || '')}" style="text-align:${align[i]}">${inline(c)}</td>`).join('')}</tr>`).join('');
  const notes = t.notes.map(x => `<p class="tnote">${inline(x)}</p>`).join('');
  return `<div class="tbl" id="tab-${n}"><table><caption>${esc(caption)}</caption><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>${notes}</div>`;
}
function figureHtml(n, file, caption) {
  const from = join(src, file);
  if (!existsSync(from)) throw new Error(`figure missing: ${file}`);
  copyFileSync(from, join(outFigs, basename(file)));
  const sz = imageSize(from);
  const alt = caption.replace(/^그림 \d+\.\s*/, '').replace(/\.$/, '');
  const dims = sz ? ` width="${sz.w}" height="${sz.h}"` : '';
  return `<figure class="fig" id="fig-${n}"><img src="/report/figures/${basename(file)}" alt="${esc(alt)}"${dims} loading="lazy" decoding="async"><figcaption>${esc(caption)}</figcaption></figure>`;
}

const lines = md.replace(/<!--[\s\S]*?-->\n?/g, '').split('\n');
const out = [];
let figs = 0, tabs = 0;
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (i === 0 && /^# /.test(l)) continue;                       // the page sets the title
  if (/^기준일 /.test(l)) continue;                               // working line of the manuscript
  const open = l.match(/^> !\[(그림|표) (\d+)\]\(([^)]+)\)\s*$/);
  if (open) {
    const block = [l]; let j = i + 1;
    while (j < lines.length && /^> ?/.test(lines[j])) block.push(lines[j++]);
    const cap = (block[1] || '').replace(/^> ?/, '').trim();
    if (open[1] === '그림') { out.push(figureHtml(open[2], open[3], cap)); figs++; }
    else { out.push(tableHtml(open[2], cap)); tabs++; }
    i = j - 1; continue;
  }
  out.push(l);
}
writeFileSync(outMd, out.join('\n').replace(/\n{3,}/g, '\n\n'));
console.log(`wrote ${outMd}: ${figs} figures, ${tabs} tables; source ${src}`);
