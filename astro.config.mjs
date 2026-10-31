// Static build: every page is written out as finished HTML at build time, so
// crawlers that do not run JavaScript read the same text a browser shows.
// Files under public/ (styles, media, pipeplot-live.js, the hardware viewers,
// the built slide deck) are copied as they are.
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://racktracker.dev',
  // Astro 7 applies JSX whitespace rules by default, which drops line breaks
  // between inline elements and runs words together. The pages were written
  // as plain HTML, so keep their whitespace as written.
  compressHTML: false,
  // The Project Report (src/report/project-report.md) writes its formulas in
  // TeX between $ signs; they are set with KaTeX at build time.
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
