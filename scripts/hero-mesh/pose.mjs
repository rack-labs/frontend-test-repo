// Step 1 of the hero body mesh: the person of the live hero scene (src/lib/hero-scene.js) as 33
// MediaPipe joints at N phases of the squat (0 standing .. 1 bottom), with the scene's three
// cameras, for fit.py. Run from this folder:
//   node pose.mjs [--phases 33] [--out data/pose.json]
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { __hero } from '../../src/lib/hero-scene.js';

const a = Object.fromEntries(process.argv.slice(2).reduce((acc, v, i, arr) => { if (v.startsWith('--')) acc.push([v.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']); return acc; }, []));
const N = +(a.phases || 33), out = a.out || 'data/pose.json';
const phases = Array.from({ length: N }, (_, i) => i / (N - 1));
const positions = phases.map(k => __hero.joints(k));
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify({ phases, positions, cameras: __hero.cameras, dist: __hero.dist, image: __hero.image }));
const hip = p => (p[23][1] + p[24][1]) / 2, knee = p => (p[25][1] + p[26][1]) / 2;
console.log(`${N} phases → ${out}; standing hip ${hip(positions[0]).toFixed(1)} cm, bottom hip ${hip(positions[N - 1]).toFixed(1)} cm (knee ${knee(positions[N - 1]).toFixed(1)} cm)`);
