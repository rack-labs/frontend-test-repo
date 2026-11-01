// Live hero: the rig, then how one frame of a set becomes rack coordinates,
// as one continuous scene. First the rig as built (the rig layout render): the
// rack, three cameras on the storage posts, the tablet, the compute enclosure
// and the cable runs. The gear then fades and the measurement-principle
// animation takes over in the same space: three rays leave the cameras through
// the detected left knee, the point nearest the three rays is the 3D joint,
// the same is done for all 33 joints, then for every frame of a squat, and the
// floor frame is moved to the rack frame. The person is rack-tracker's MHR body
// model fitted to the example pose (scripts/hero-mesh/), drawn translucent with
// the model's own skeleton inside, and the measured joints on top. What the
// cameras measure is that model's own joints, so the skeleton and the measured
// joints meet wherever the two name the same joint. Data are those of rack-tracker (cameras K/R/t from the 28 August 2026
// PVC rig calibration, example pose); every label, caption, dimension and the
// image inset are left out.
//
// The camera follows the key moments on its own. Dragging takes it over
// (rotate; wheel or pinch zooms once the scene has been grabbed, so the page
// still scrolls under a plain wheel), and after a few idle seconds it eases
// back onto the automatic path.
import * as THREE from 'three';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import PERSON from './hero-person.js';

/* ── palette for the light page. The canvas clears to the page colour, read from --bg where it
   mounts (style.css), and bg here is only the fallback ── */
const PAL = {
  bg: '#eceef1', grid: '#cdd3da', rack: '#a9b2be', person: '#556070',
  px: '#e0611f', joint: '#11151b', mark: '#556070', tri: '#667080',
};
const CAM_COLORS = ['#e5483a', '#2f80e0', '#1fa36a'];
const AXIS_COLORS = ['#e5483a', '#1fa36a', '#2f80e0'];

/* ── thick lines: one thin cylinder per segment, one InstancedMesh per bundle (radius r in cm) ── */
const UNIT_CYL = new THREE.CylinderGeometry(1, 1, 1, 6, 1, true); UNIT_CYL.userData.keep = true;
const UP_Y = new THREE.Vector3(0, 1, 0);
const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _d = new THREE.Vector3();
class Segs {
  constructor(parent, color, { opacity = 1, r = 0.4, dashed = false, dash = 3.5, gap = 2.2 } = {}) {
    this.r = r; this.dashed = dashed; this.dash = dash; this.gap = gap; this.cap = 0; this.mesh = null;
    this.mat = new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity });
    this.g = new THREE.Group(); parent.add(this.g);
  }
  ensure(n) {
    if (this.mesh && n <= this.cap) return;
    if (this.mesh) { this.g.remove(this.mesh); this.mesh.dispose(); }
    this.cap = Math.max(8, Math.ceil(n * 1.25));
    this.mesh = new THREE.InstancedMesh(UNIT_CYL, this.mat, this.cap); this.mesh.frustumCulled = false; this.g.add(this.mesh);
  }
  update(pairs) {
    const segs = [];
    for (const [a, b] of pairs) {
      if (!this.dashed) { segs.push(a, b); continue; }
      _d.subVectors(b, a); const L = _d.length(); if (L < 1e-6) continue; _d.divideScalar(L);
      for (let s = 0; s < L; s += this.dash + this.gap) { const e = Math.min(L, s + this.dash); segs.push(a.clone().addScaledVector(_d, s), a.clone().addScaledVector(_d, e)); }
    }
    const n = segs.length / 2; this.ensure(n);
    for (let i = 0; i < n; i++) {
      const a = segs[2 * i], b = segs[2 * i + 1];
      _d.subVectors(b, a); const L = _d.length();
      if (L < 1e-6) { _s.set(0, 0, 0); _q.identity(); } else { _d.divideScalar(L); _q.setFromUnitVectors(UP_Y, _d); _s.set(this.r, L, this.r); }
      _p.addVectors(a, b).multiplyScalar(0.5); _m4.compose(_p, _q, _s); this.mesh.setMatrixAt(i, _m4);
    }
    this.mesh.count = n; this.mesh.instanceMatrix.needsUpdate = true;
    return this;
  }
}
const disposeTree = root => root.traverse(o => { if (o.isInstancedMesh) o.dispose(); if (o.isSkinnedMesh) o.skeleton.dispose(); if (o.geometry && !o.geometry.userData.keep) o.geometry.dispose(); if (o.material) o.material.dispose(); });

/* ── data (cm, floor frame, y up). Camera K/R/t as stored then (y down), flipped on read.
   Reference camera C3. Distortion = C1's lens calibration, lent to all three (example).
   Rack size = pvc_prototype preset, rack pose and body pose are examples. Every 2D
   detection carries a fixed ±2.5 px error, so the rays never quite meet ── */
const RAW = [
  { K: [[754.3885, 0, 958.3901], [0, 754.0707, 589.3091], [0, 0, 1]],
    R: [[-0.15571322513590607, 0.9097554007454354, -0.38483568224930287], [0.8648641536539832, -0.06266303658242406, -0.4980796518335677], [-0.47724562569200496, -0.41038817558597096, -0.7770573711747831]],
    t: [51.590955807405955, -39.45737480615681, 54.95397136017899] },
  { K: [[753.0304, 0, 913.8973], [0, 753.1349, 606.1174], [0, 0, 1]],
    R: [[-0.225324469469351, -0.9297371771486811, 0.29123472472553313], [-0.8913797239970729, 0.07606163234231916, -0.4468297390867395], [0.39328243172719657, -0.3602824024470577, -0.8458874153111148]],
    t: [-39.82676917611968, -9.86989754651869, 42.398635742616285] },
  { K: [[751.4181, 0, 979.4653], [0, 751.3425, 602.4515], [0, 0, 1]],
    R: [[0.20999218404048606, -0.7846917494500244, -0.5832342076618673], [-0.8915870591669028, 0.09110655694011054, -0.44359002604728537], [0.4012178941273924, 0.6131545104030289, -0.6804893443724163]],
    t: [-133.78484504711085, 2.2732873447759743, 145.3864252187952] },
];
const COEF = { k1: 0.02881, k2: -0.07958, k3: 0.01993, p1: 0.000553, p2: -0.001256 };
const RACK = { u: 7.6, cs: 7.6, H: 241, Wi: 109, Di: 95.8, storage: 38.4,
  jcupW: 11, jcupH: 12, jcupReach: 15, jcupNose: 3.5, jcupHeight: 130, safetyW: 7.6, safetyT: 10.2, safetyHeight: 60 };
const RACK_POSE = { c: [17.0, 0, 45.0], yaw: -1.1 };
const IMG_W = 1920, IMG_H = 1200, PLANE_D = 28;
const FEAT = 25;                                                                // the joint followed: left knee
const NOISE_PX = 2.5;

/* ── small maths ── */
const F = [[1, 0, 0], [0, -1, 0], [0, 0, -1]];
const mm = (A, B) => A.map(r => B[0].map((_, j) => r.reduce((s, a, k) => s + a * B[k][j], 0)));
const mv = (A, v) => A.map(r => r[0] * v[0] + r[1] * v[1] + r[2] * v[2]);
const tr = A => A[0].map((_, j) => A.map(r => r[j]));
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const nrm = a => Math.hypot(a[0], a[1], a[2]);
const unit = a => mul(a, 1 / (nrm(a) || 1));
const lerp = (a, b, k) => a + (b - a) * k;
const clamp01 = x => x < 0 ? 0 : x > 1 ? 1 : x;
const easeOut = k => 1 - (1 - k) ** 3;
const smooth = k => k * k * (3 - 2 * k);
const prog = (t, r) => clamp01((t - r[0]) / Math.max(r[1], 1e-3));
const hash = n => { const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };
const det3 = m => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
const solve3 = (A, b) => { const D = det3(A); if (Math.abs(D) < 1e-9) return null; return [0, 1, 2].map(i => { const M = A.map(r => r.slice()); for (let r = 0; r < 3; r++) M[r][i] = b[r]; return det3(M) / D; }); };

/* ── lens model (OpenCV) and its iterative inverse, as undistortPoints does ── */
const distort = (xp, yp, c) => {
  const r2 = xp * xp + yp * yp, r4 = r2 * r2, r6 = r4 * r2;
  const rad = 1 + c.k1 * r2 + c.k2 * r4 + c.k3 * r6;
  return [xp * rad + 2 * c.p1 * xp * yp + c.p2 * (r2 + 2 * xp * xp), yp * rad + c.p1 * (r2 + 2 * yp * yp) + 2 * c.p2 * xp * yp];
};
const undistort = (xd, yd, c) => {
  let x = xd, y = yd;
  for (let i = 0; i < 10; i++) {
    const r2 = x * x + y * y, r4 = r2 * r2, r6 = r4 * r2, rad = 1 + c.k1 * r2 + c.k2 * r4 + c.k3 * r6;
    const dx = 2 * c.p1 * x * y + c.p2 * (r2 + 2 * x * x), dy = c.p1 * (r2 + 2 * y * y) + 2 * c.p2 * x * y;
    x = (xd - dx) / rad; y = (yd - dy) / rad;
  }
  return [x, y];
};

/* ── cameras: centre, viewing axis, image up, image plane 28 cm in front, projection and back-projection ── */
const CAMS = RAW.map((c, i) => {
  const Rn = mm(c.R, F), Rt = tr(Rn), C = mul(mv(Rt, c.t), -1);
  const K = { fx: c.K[0][0], fy: c.K[1][1], cx: c.K[0][2], cy: c.K[1][2] };
  const planePt = (x, y) => mv(Rt, sub([x * PLANE_D, y * PLANE_D, PLANE_D], c.t));
  const corners = [[0, 0], [IMG_W, 0], [IMG_W, IMG_H], [0, IMG_H]].map(([u, v]) => planePt((u - K.cx) / K.fx, (v - K.cy) / K.fy));
  const project = P => { const p = add(mv(Rn, P), c.t); if (p[2] < 1) return null; const x = p[0] / p[2], y = p[1] / p[2], d = distort(x, y, COEF); return { u: K.fx * d[0] + K.cx, v: K.fy * d[1] + K.cy }; };
  const pxToNorm = (u, v) => undistort((u - K.cx) / K.fx, (v - K.cy) / K.fy, COEF);
  return { i, color: CAM_COLORS[i], C, axis: mv(Rt, [0, 0, 1]), up: mv(Rt, [0, -1, 0]), corners, pp: planePt(0, 0), planePt, project, pxToNorm };
});

/* ── rack frame: origin shift + yaw from the floor frame ── */
const yaw = RACK_POSE.yaw * Math.PI / 180;
const EX = [Math.cos(yaw), 0, Math.sin(yaw)], EY = [0, 1, 0], EZ = [-Math.sin(yaw), 0, Math.cos(yaw)];
const r2f = p => [RACK_POSE.c[0] + p[0] * EX[0] + p[2] * EZ[0], p[1], RACK_POSE.c[2] + p[0] * EX[2] + p[2] * EZ[2]];
const RACK_O = r2f([0, 0, 0]);

/* ── the person as designed: 33 MediaPipe joints, built in the rack frame from bone lengths and
   joint angles, facing the cameras (−z). This is what the MHR model is fitted to
   (scripts/hero-mesh/pose.mjs); the scene measures the fitted model (personAt below) ── */
const BONES_BODY = [[11, 12], [11, 13], [13, 15], [12, 14], [14, 16], [11, 23], [12, 24], [23, 24], [23, 25], [25, 27], [24, 26], [26, 28], [27, 29], [29, 31], [27, 31], [28, 30], [30, 32], [28, 32]];
const BONES_FACE = [[0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10]];
const BONES_HAND = [[15, 17], [15, 19], [15, 21], [17, 19], [16, 18], [16, 20], [16, 22], [18, 20]];
const BONES = BONES_BODY.concat(BONES_FACE, BONES_HAND);
/* lengths and widths are one team member's, triangulated in a real set (scripts/hero-mesh/member.json).
   SIZE scales the whole figure so the fitted mesh stands that member's height: against MediaPipe
   landmarks the bone scales come out short, and the head, which has no scale of its own, then looks
   big (rack-tracker #655). The bottom is deeper than the member's real set (hip 1–2 cm under the knee) */
const SIZE = 1.01;
const LEN = { shin: 37.0, thigh: 37.9, trunk: 51.9, neck: 13 };
const ANG = { stand: [3, 3, 0], bottom: [42, 92, 32] };                        // shin, thigh, trunk from the vertical
const LAT = { ankle: 12, knee: 12.5, hip: 8.4, sh: 16.6, elbow: 27, wrist: 24.5, ear: 8.9, eyeIn: 3, eye: 4.5, eyeOut: 6, mouth: 2.5, pinky: 26, index: 25, thumb: 22.5 };
function stickAt(k) {
  const [ts, tt, tb] = ANG.stand.map((a, i) => lerp(a, ANG.bottom[i], k) * Math.PI / 180);
  const ankle = [0, 8, 0];
  const knee = [0, ankle[1] + LEN.shin * Math.cos(ts), -LEN.shin * Math.sin(ts)];
  const hip = [0, knee[1] + LEN.thigh * Math.cos(tt), knee[2] + LEN.thigh * Math.sin(tt)];
  const up = [0, Math.cos(tb), -Math.sin(tb)], fw = [0, -Math.sin(tb), -Math.cos(tb)];
  const at = (o, du, df) => add(o, add(mul(up, du), mul(fw, df)));
  const sh = at(hip, LEN.trunk, 0), neck = at(sh, LEN.neck, 0);
  const nose = at(neck, 3, 9.5), eyeIn = at(neck, 6, 8), eye = at(neck, 6, 7.5), eyeOut = at(neck, 6, 6.5), ear = at(neck, 4.5, 0), mouth = at(neck, 0, 8.5);
  const elbow = at(sh, -11, -12), wrist = at(sh, 6, -5), pinky = at(wrist, 3, -1.5), index = at(wrist, 3.5, 1), thumb = at(wrist, 1.5, 2.5);
  const heel = [0, 2, 8], toe = [0, 1, -15];
  const L = (p, x) => [-x, p[1], p[2]], R = (p, x) => [x, p[1], p[2]];
  return [nose, L(eyeIn, LAT.eyeIn), L(eye, LAT.eye), L(eyeOut, LAT.eyeOut), R(eyeIn, LAT.eyeIn), R(eye, LAT.eye), R(eyeOut, LAT.eyeOut), L(ear, LAT.ear), R(ear, LAT.ear), L(mouth, LAT.mouth), R(mouth, LAT.mouth),
    L(sh, LAT.sh), R(sh, LAT.sh), L(elbow, LAT.elbow), R(elbow, LAT.elbow), L(wrist, LAT.wrist), R(wrist, LAT.wrist), L(pinky, LAT.pinky), R(pinky, LAT.pinky), L(index, LAT.index), R(index, LAT.index), L(thumb, LAT.thumb), R(thumb, LAT.thumb),
    L(hip, LAT.hip), R(hip, LAT.hip), L(knee, LAT.knee), R(knee, LAT.knee), L(ankle, LAT.ankle), R(ankle, LAT.ankle), L(heel, LAT.ankle), R(heel, LAT.ankle), L(toe, LAT.ankle), R(toe, LAT.ankle)].map(p => mul(p, SIZE));
}
/* the person the scene measures: the fitted model's own 33 joints (hero-person.js, written with the
   mesh by scripts/hero-mesh/fit.py; cm, floor frame), blended between the two nearest squat phases
   the way the mesh blends its joint states. Measuring the stick figure instead left the measured
   joints 1–3 cm off the model's skeleton, the fit's own error */
function personAt(k) {
  const ph = PERSON.phases, J = PERSON.joints;
  let i = 0; while (i + 2 < ph.length && ph[i + 1] <= k) i++;
  const u = clamp01((k - ph[i]) / (ph[i + 1] - ph[i]));
  return J[i].map((a, j) => { const b = J[i + 1][j]; return [lerp(a[0], b[0], u), lerp(a[1], b[1], u), lerp(a[2], b[2], u)]; });
}
const headOf = P => mul(add(add(P[7], P[8]), add(P[2], P[5])), 0.25);
const pairsOf = (pts, bones) => bones.map(([i, j]) => [pts[i], pts[j]]);

/* ── the body as a mesh: rack-tracker's MHR body model fitted to this person's 33 joints at
   33 phases of the squat (scripts/hero-mesh/ makes the file: rest vertices, four skin weights a
   vertex, the 127 joint states of every phase). Skinned on the GPU here (SkinnedMesh) and
   blended between the two nearest phases, so any squat depth is one call. Fetched once when the
   scene mounts; until it is here, and without it, the body is the faint stick figure ── */
const MESH_URL = '/assets/hero-mesh/' + PERSON.mesh;                           // the person and the mesh come from one fit
const MESH_COL = { skin: '#8d99a8', opacity: 0.45, bone: '#2c7272' };         // the product's replay draws the mesh at 0.45 too
let MESH = null, meshLoad = null, REV = 0;                                      // REV changes when the mesh arrives: fades re-collect their materials
function loadMesh() {
  if (meshLoad || typeof fetch !== 'function') return;
  if (typeof navigator !== 'undefined' && navigator.connection && navigator.connection.saveData) return;
  meshLoad = fetch(MESH_URL).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.arrayBuffer(); }).then(buf => {
    const hl = new DataView(buf).getUint32(0, true);
    const h = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl)));
    const sec = (name, T) => { const [off, n] = h.sections[name]; return new T(buf, off, n); };
    const rest = sec('rest', Int16Array), pos = new Float32Array(rest.length);
    for (let i = 0; i < rest.length; i++) pos[i] = rest[i] * 0.1;             // mm → cm
    const wq = sec('skinWeight', Uint8Array), w = new Float32Array(wq.length);
    for (let i = 0; i < w.length; i += 4) { const s = (wq[i] + wq[i + 1] + wq[i + 2] + wq[i + 3]) || 1; for (let k = 0; k < 4; k++) w[i + k] = wq[i + k] / s; }
    const geo = new THREE.BufferGeometry(); geo.userData.keep = true;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('skinIndex', new THREE.BufferAttribute(new Uint16Array(sec('skinIndex', Uint8Array)), 4));
    geo.setAttribute('skinWeight', new THREE.BufferAttribute(w, 4));
    geo.setIndex(new THREE.BufferAttribute(sec('faces', Uint16Array), 1));
    geo.computeVertexNormals();
    MESH = { J: h.joints, phases: h.phases, geo, ibp: sec('ibp', Float32Array), states: sec('states', Float32Array), bodyIds: h.bodyIds, bodyParents: h.bodyParents,
      bodyOffsets: h.bodyOffsets || h.bodyIds.map(() => [0, 0, 0]) };
    REV++;
  }).catch(e => { console.warn('[hero] body mesh not loaded:', e); });
}
const _bt = new THREE.Vector3(), _bqa = new THREE.Quaternion(), _bqb = new THREE.Quaternion(), _bs = new THREE.Vector3();
const stateMatrix = (st, o, m) => { _bt.set(st[o], st[o + 1], st[o + 2]); _bqa.set(st[o + 3], st[o + 4], st[o + 5], st[o + 6]); _bs.setScalar(st[o + 7]); return m.compose(_bt, _bqa, _bs); };
class Body {
  constructor(parent, color) {
    this.g = new THREE.Group(); parent.add(this.g);
    this.k = 1; this.mesh = null;
    const c = new THREE.Color(color);
    this.stick = new Segs(this.g, c, { opacity: 0.22, r: 1.3 });
    this.head = new THREE.Mesh(new THREE.SphereGeometry(7.5, 14, 14), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.22 })); this.g.add(this.head);
    this.setPhase(1);
  }
  /* k: 0 standing .. 1 bottom of the squat */
  setPhase(k) { this.k = k; this.sync(); }
  sync() {
    if (MESH && !this.mesh) this.build();
    if (this.mesh) { this.pose(this.k); return; }
    const P = personAt(this.k);
    this.stick.update(pairsOf(P.map(p => new THREE.Vector3(...p)), BONES_BODY)); this.head.position.set(...headOf(P));
  }
  build() {
    const D = MESH;
    this.g.remove(this.stick.g, this.head); disposeTree(this.stick.g); disposeTree(this.head);
    const bones = [], inv = [];
    for (let j = 0; j < D.J; j++) { const b = new THREE.Bone(); b.matrixAutoUpdate = false; bones.push(b); inv.push(stateMatrix(D.ibp, j * 8, new THREE.Matrix4())); }
    const mat = new THREE.MeshLambertMaterial({ color: MESH_COL.skin, transparent: true, opacity: MESH_COL.opacity });
    mat.userData.base = MESH_COL.opacity;
    this.mesh = new THREE.SkinnedMesh(D.geo, mat); this.mesh.frustumCulled = false;
    bones.forEach(b => this.mesh.add(b));
    this.mesh.bind(new THREE.Skeleton(bones, inv), new THREE.Matrix4());        // explicit bind matrix: without it bind() recomputes the inverses from the unposed bones
    this.bones = bones; this.g.add(this.mesh);
    /* the model's own body joints and bones, in their own colour, inside the translucent mesh. A joint
       that names the same joint as a measured one (shoulder, elbow, wrist, hip, knee, ankle) is drawn
       where the product puts that measured joint on the model: the joint centre plus a fixed offset in
       the joint's frame (bodyOffsets; the shoulder landmark sits ~7 cm off the shoulder centre) */
    const bc = new THREE.Color(MESH_COL.bone);
    this.rig = new Segs(this.g, bc, { opacity: 0.95, r: 0.38 });
    this.dots = new THREE.InstancedMesh(new THREE.SphereGeometry(1.05, 10, 10), new THREE.MeshBasicMaterial({ color: bc }), D.bodyIds.length);
    this.g.add(this.dots);
    this.pts = D.bodyIds.map(() => new THREE.Vector3());
    REV++;
  }
  pose(k) {
    const D = MESH, ph = D.phases, st = D.states, J = D.J;
    let i = 0; while (i + 2 < ph.length && ph[i + 1] <= k) i++;
    const u = clamp01((k - ph[i]) / (ph[i + 1] - ph[i])), A = i * J * 8, B = (i + 1) * J * 8;
    for (let j = 0; j < J; j++) {
      const a = A + j * 8, b = B + j * 8;
      _bt.set(lerp(st[a], st[b], u), lerp(st[a + 1], st[b + 1], u), lerp(st[a + 2], st[b + 2], u));
      _bqa.set(st[a + 3], st[a + 4], st[a + 5], st[a + 6]); _bqb.set(st[b + 3], st[b + 4], st[b + 5], st[b + 6]); _bqa.slerp(_bqb, u);
      _bs.setScalar(lerp(st[a + 7], st[b + 7], u));
      const bone = this.bones[j]; bone.matrix.compose(_bt, _bqa, _bs); bone.matrixWorldNeedsUpdate = true;
    }
    D.bodyIds.forEach((j, q) => { const p = this.pts[q].fromArray(D.bodyOffsets[q]).applyMatrix4(this.bones[j].matrix); _m4.makeTranslation(p.x, p.y, p.z); this.dots.setMatrixAt(q, _m4); });
    this.dots.instanceMatrix.needsUpdate = true;
    this.rig.update(D.bodyParents.map((p, q) => p >= 0 ? [this.pts[q], this.pts[p]] : null).filter(Boolean));
  }
}

/* ── one frame: 2D detections (with error) → normalised coordinates → points on the image
   planes → rays → triangulation (the point nearest all rays). f numbers the frame, so the
   error differs from frame to frame ── */
const noise = (ci, j, a, f) => (hash(ci * 1000 + j * 10 + a + f * 7919) - 0.5) * 2 * NOISE_PX;
const obs = (c, P, j, f) => { const pr = c.project(P); const u = pr.u + noise(c.i, j, 0, f), v = pr.v + noise(c.i, j, 1, f), [x, y] = c.pxToNorm(u, v); return { pt: c.planePt(x, y) }; };
const triangulate = lines => {
  const A = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], bb = [0, 0, 0];
  for (const { C, d } of lines) for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { const m = (i === j ? 1 : 0) - d[i] * d[j]; A[i][j] += m; bb[i] += m * C[j]; }
  return solve3(A, bb);
};
const frameOf = (P, f = 0) => {
  const O = CAMS.map(c => P.map((p, j) => obs(c, p, j, f)));
  const T = P.map((_, j) => triangulate(CAMS.map(c => ({ C: c.C, d: unit(sub(O[c.i][j].pt, c.C)) }))));
  return { P, O, T };
};
const FIG = frameOf(personAt(1));

/* ── frame after frame (the 'burst' beat): the same for every frame of the set. Frames come
   0.36 s apart at first and close up to 1/30 s (30 Hz) about 2 s in, while the body squats
   twice from the bottom at an even pace, so the first and the last frame are FIG. Frames
   slower than 'slow' grow their rays, fade them and pop the joints; towards 30 Hz the rays
   and joints stay lit and just jump to each new frame ── */
const BURST = { dur: 6.0, t0: 0.35, first: 0.36, min: 1 / 30, decay: 0.8, hold: 0.5, reps: 2, rayIn: 0.06, slow: 0.15 };
const BURST_AT = [];
for (let t = BURST.t0, i = 0; t < BURST.dur - BURST.hold; i++) { BURST_AT.push(t); t += Math.max(BURST.min, BURST.first * BURST.decay ** i); }
const burstK = t => (1 - Math.cos(Math.PI * (1 + 2 * BURST.reps * clamp01((t - BURST.t0) / (BURST_AT[BURST_AT.length - 1] - BURST.t0))))) / 2;
const BURST_FR = BURST_AT.map((t, i) => i === 0 || i === BURST_AT.length - 1 ? FIG : frameOf(personAt(burstK(t)), i));

/* ── the rig as built (the rig layout render): rack members, the cameras in their housings on the
   storage posts, C3 on a magic arm, the tablet, the compute enclosure (Jetson Orin NX and the
   trigger board) and the cable runs. Built in rack coordinates (cage floor centre, x right,
   z front) and placed on the calibration floor frame as one group: the layout moved the
   calibration by x −17 cm and z −46.05 cm so the cameras sit on the storage posts, and the
   group undoes that, so its cameras are the scene's cameras ── */
const SPEC = { W: 118, D: 106, H: 241, U: 7.6, CS: 7.6, holePitch: 5, holeFirst: 6.8, holeLast: 240,
  jcupW: 11, jcupH: 12, jcupReach: 15, jcupNose: 3.5, jcupHeight: 130, safetyW: 7.6, safetyT: 10.2, safetyHeight: 60,
  storageOffset: 38.4, storageHeight: 241, storageU: 7.6 };
const SZC = -SPEC.D / 2 - SPEC.storageOffset - SPEC.storageU / 2;               // storage post centre z (−95.2)
const FACE_FS = SZC + SPEC.storageU / 2, FACE_RS = SZC - SPEC.storageU / 2;     // storage post front face z −91.4 · back face −99.0
const SHIFT_Z = (FACE_FS + 2.35) - (-43.0);                                     // C1·C2 at z≈−43 → 2.35 in front of the storage posts
const RIG_OFF = [17, 0, -SHIFT_Z];                                              // rack coordinates + RIG_OFF = floor frame
const RIG_COL = { steel: 0xcdd3da, edge: 0x6b7280, dark: 0x23272e, box: 0x2f343c, box2: 0x5b6473, cable: 0x23272e,
  clip: 0x4b5563, hole: 0x5b6675, led: 0x2fa36b, arm: 0x7a8290, glass: 0x0b0d10, screen: 0xeef1f5 };

function rigGroup(fat) {
  const M = {
    steel: new THREE.MeshLambertMaterial({ color: RIG_COL.steel, transparent: true, opacity: 0.38, depthWrite: false }),
    dark: new THREE.MeshLambertMaterial({ color: RIG_COL.dark }), box: new THREE.MeshLambertMaterial({ color: RIG_COL.box }),
    box2: new THREE.MeshLambertMaterial({ color: RIG_COL.box2 }), cable: new THREE.MeshLambertMaterial({ color: RIG_COL.cable }),
    clip: new THREE.MeshLambertMaterial({ color: RIG_COL.clip }), arm: new THREE.MeshLambertMaterial({ color: RIG_COL.arm }),
    led: new THREE.MeshBasicMaterial({ color: RIG_COL.led }), glass: new THREE.MeshBasicMaterial({ color: RIG_COL.glass }),
    screen: new THREE.MeshBasicMaterial({ color: RIG_COL.screen }),
    hole: new THREE.PointsMaterial({ color: RIG_COL.hole, size: 1.4, sizeAttenuation: true }),
  };
  /* edges are 1 CSS px wide at any pixel ratio (LineSegments2; the resolution is set on every draw) */
  const edge = new LineMaterial({ color: RIG_COL.edge, linewidth: 1, transparent: true, opacity: 0.85 });
  fat.push(edge);
  const root = new THREE.Group(); root.position.set(...RIG_OFF);
  const rack = new THREE.Group(), gear = new THREE.Group(), cables = new THREE.Group();
  root.add(rack, gear, cables);
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  function box(parent, w, h, d, [x, y, z], mat = M.steel, edges = true) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.position.set(x, y, z); parent.add(m);
    if (edges) { const e = new LineSegments2(new LineSegmentsGeometry().fromEdgesGeometry(new THREE.EdgesGeometry(m.geometry)), edge); e.position.copy(m.position); parent.add(e); }
    return m;
  }
  const { W, D, H, U, CS } = SPEC, SU = SPEC.storageU;
  const CW = (W - U) / 2, CD = (D - U) / 2;
  {
    const corners = [[-CW, -CD], [CW, -CD], [CW, CD], [-CW, CD]];
    for (const [x, z] of corners) box(rack, U, H, U, [x, H / 2, z]);
    for (let k = 0; k < 4; k++) {
      const [ax, az] = corners[k], [bx, bz] = corners[(k + 1) % 4];
      const span = Math.hypot(bx - ax, bz - az) - U, horiz = Math.abs(bz - az) < 1e-6;
      box(rack, horiz ? span : CS, CS, horiz ? CS : span, [(ax + bx) / 2, H - CS / 2, (az + bz) / 2]);
    }
    for (const sx of [-1, 1]) box(rack, CS, CS, 2 * CD - U, [sx * CW, CS / 2, 0]);
    const holes = [];
    for (let y = SPEC.holeFirst; y <= Math.min(SPEC.holeLast, H); y += SPEC.holePitch)
      for (const [x, z] of corners) holes.push(x - Math.sign(x) * U / 2, y, z);
    const hg = new THREE.BufferGeometry(); hg.setAttribute('position', new THREE.Float32BufferAttribute(holes, 3));
    rack.add(new THREE.Points(hg, M.hole));
    for (const sx of [-1, 1]) {
      box(rack, SPEC.jcupW, SPEC.jcupH, SPEC.jcupReach, [sx * (W / 2 - SPEC.jcupW / 2), SPEC.jcupHeight, -(D / 2 - SPEC.jcupReach / 2 + SPEC.jcupNose)]);
      box(rack, SPEC.safetyW, SPEC.safetyT, D - U, [sx * CW, SPEC.safetyHeight, 0]);
    }
    const SH = SPEC.storageHeight, gap = SPEC.storageOffset;
    for (const sx of [-1, 1]) {
      box(rack, SU, SH, SU, [sx * CW, SH / 2, SZC]);
      box(rack, CS, CS, gap, [sx * CW, CS / 2, -D / 2 - gap / 2]);
      box(rack, CS, CS, gap, [sx * CW, SH - CS / 2, -D / 2 - gap / 2]);
    }
    box(rack, 2 * CW - SU, CS, CS, [0, SH - CS / 2, SZC]);
  }
  /* cameras in rack coordinates: the scene's centres, axes and image-up directions */
  const cams = CAMS.map(c => ({ centre: V(c.C[0] - RIG_OFF[0], c.C[1] - RIG_OFF[1], c.C[2] - RIG_OFF[2]), axis: V(...c.axis), up: V(...c.up) }));
  for (const info of cams) {
    const g = new THREE.Group(); g.position.copy(info.centre); g.up.copy(info.up); g.lookAt(info.centre.clone().add(info.axis));
    const body = box(g, 3.8, 3.8, 3.8, [0, 0, 0], M.dark);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 1.05, 1.4, 24), M.dark); lens.rotation.x = Math.PI / 2; lens.position.z = 2.6; g.add(lens);
    const glass = new THREE.Mesh(new THREE.CircleGeometry(0.7, 24), M.glass); glass.position.z = 3.31; g.add(glass);
    const port = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.9, 0.7), M.box2); port.position.set(0, -0.6, -2.2); g.add(port);
    gear.add(g);
  }
  for (const i of [0, 1]) { const p = cams[i].centre; box(gear, 3, 3, 0.9, [p.x, p.y, FACE_FS + 0.45], M.box2); }
  function rod(a, b, r, mat) {
    const d = b.clone().sub(a), len = d.length();
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 12), mat);
    m.position.copy(a).add(b).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); gear.add(m);
  }
  const ball = (p, r, mat) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 14), mat); m.position.copy(p); gear.add(m); };
  { // C3 magic arm: clamp on the left storage post → arm → elbow → arm → ball behind the housing
    const c3 = cams[2], back = c3.centre.clone().sub(c3.axis.clone().multiplyScalar(2.4));
    const clamp = V(-CW, 190, FACE_FS + 1.2), a0 = V(-CW, 190, FACE_FS + 2.6), elbow = V(-50, 198, -33 + SHIFT_Z);
    box(gear, 6, 5, 2.4, [clamp.x, clamp.y, clamp.z], M.box2);
    rod(a0, elbow, 1.0, M.arm); ball(elbow, 1.5, M.arm); rod(elbow, back, 1.0, M.arm); ball(back, 1.2, M.arm);
  }
  /* tablet (Galaxy Tab S8 Ultra, portrait) on the right storage post at 150 cm, screen to the lifter */
  const TAB = { w: 20.8, h: 32.6, t: 0.55, x: 48.0, y: 150, z: FACE_FS + 9.0 };
  {
    const clamp = V(CW, TAB.y, FACE_FS + 1.2), a0 = V(CW, TAB.y, FACE_FS + 2.6), back = V(TAB.x, TAB.y, TAB.z - TAB.t / 2 - 0.9);
    box(gear, 6, 5, 2.4, [clamp.x, clamp.y, clamp.z], M.box2);
    rod(a0, back, 1.0, M.arm); ball(back, 1.2, M.arm);
    box(gear, TAB.w, TAB.h, TAB.t, [TAB.x, TAB.y, TAB.z], M.dark);
    box(gear, TAB.w - 1.6, TAB.h - 1.6, 0.06, [TAB.x, TAB.y, TAB.z + TAB.t / 2 + 0.03], M.screen, false);
  }
  /* compute enclosure: Jetson Orin NX carrier above, trigger board below, on the outer face of the
     left storage post at 161..179 cm, lid facing out (−x) */
  const S_OUT = -CW - SU / 2;
  const ENC = { w: 13.5, h: 17.5, d: 5.6, y: 170, z: SZC, face: S_OUT };
  const ENC_TOP = ENC.y + ENC.h / 2, ENC_BOT = ENC.y - ENC.h / 2, ENC_X = ENC.face - 0.4 - ENC.d / 2;
  {
    const g = new THREE.Group(); g.position.set(ENC.face, ENC.y, ENC.z); g.rotation.y = -Math.PI / 2; gear.add(g);
    box(g, 10, 19, 0.4, [0, 0, 0.2], M.box2);
    box(g, ENC.w, ENC.h, ENC.d, [0, 0, 0.4 + ENC.d / 2], M.box);
    const lidZ = 0.4 + ENC.d + 0.15, divY = -ENC.h / 2 + 4.2;
    const upTop = ENC.h / 2 - 0.6, upBot = divY + 0.15, loTop = divY - 0.15, loBot = -ENC.h / 2 + 0.6;
    box(g, ENC.w - 1.2, upTop - upBot, 0.3, [0, (upTop + upBot) / 2, lidZ], M.box2, false);
    box(g, ENC.w - 1.2, loTop - loBot, 0.3, [0, (loTop + loBot) / 2, lidZ], M.box2, false);
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 10), M.led); led.position.set(5.0, ENC.h / 2 - 1.6, lidZ + 0.15); g.add(led);
    for (let k = 0; k < 5; k++) box(g, 0.25, 0.6, 4.0, [-3 + k * 1.5, ENC.h / 2 + 0.3, 0.4 + ENC.d / 2], M.box2, false);
  }
  /* cables: every camera is on the storage posts, so the runs keep to the storage posts and the
     storage cross-member, one lane per face, a clip every 30 cm */
  const XO = S_OUT - 0.6, ZB = FACE_RS - 0.6, LANE_A = SZC + 1.6, LANE_B = SZC - 1.6;
  function tube(pts, r = 0.45) {
    const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
    cables.add(new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(48, pts.length * 24), r, 8, false), M.cable));
  }
  const CLIP = { vz: [1.6, 1.0, 1.1], vx: [1.1, 1.0, 1.6], hz: [1.0, 1.6, 1.1], hy: [1.0, 1.1, 1.6], vx2: [1.1, 1.0, 4.6] };
  const clip = (x, y, z, kind = 'vz') => { const [w, h, d] = CLIP[kind]; const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M.clip); m.position.set(x, y, z); cables.add(m); };
  const camBack = (i, d = 2.2) => cams[i].centre.clone().sub(cams[i].axis.clone().multiplyScalar(d));
  const intoTop = lane => [V(XO, ENC_TOP + 2.5, lane), V(XO - 0.8, ENC_TOP + 1.0, lane), V(ENC_X + 1.2, ENC_TOP, lane)];
  const intoBot = lane => [V(XO, ENC_BOT - 6, lane), V(XO, ENC_BOT - 2.5, lane), V(XO - 0.8, ENC_BOT - 1.0, lane), V(ENC_X + 1.2, ENC_BOT, lane)];
  { // C1: right storage post → back face up → storage cross-member ← → left storage post down → lane B
    const b = camBack(0), xr = CW + 1.8, yc = SPEC.H - SPEC.CS / 2 - 0.8;
    tube([b, V(CW - 4.4, b.y + 0.3, FACE_FS - 2.0), V(CW - 4.4, b.y + 0.6, ZB), V(CW + 0.8, b.y + 1.2, ZB), V(xr, b.y + 3.5, ZB),
      V(xr, 60, ZB), V(xr, 120, ZB), V(xr, 180, ZB), V(xr, 228, ZB), V(xr, yc - 1.8, ZB), V(xr - 2.0, yc, ZB),
      V(30, yc, ZB), V(0, yc, ZB), V(-30, yc, ZB), V(-xr + 2.0, yc, ZB), V(-xr, yc - 1.8, ZB), V(-xr, 228, ZB), V(-xr, 205, ZB), V(-xr, 190, ZB),
      V(-xr - 1.6, 187.2, ZB + 0.6), V(XO, 185.5, LANE_B), ...intoTop(LANE_B)]);
    for (let y = 60; y < 225; y += 30) clip(xr, y, ZB + 0.1, 'vz');
    for (const x of [30, 0, -30]) clip(x, yc, ZB + 0.1, 'hz');
    for (const y of [225, 200]) clip(-xr, y, ZB + 0.1, 'vz');
  }
  { // C2: left storage post → outer face lane A up → under the enclosure
    const b = camBack(1);
    tube([b, V(-CW - 1.0, b.y + 0.3, FACE_FS + 0.6), V(S_OUT - 0.3, b.y + 0.6, FACE_FS + 0.2), V(XO, b.y + 0.4, LANE_A + 1.2), V(XO, b.y + 4, LANE_A),
      V(XO, 60, LANE_A), V(XO, 100, LANE_A), V(XO, 140, LANE_A), ...intoBot(LANE_A)]);
  }
  { // C3: magic arm → left storage post → lane A down → top of the enclosure
    const b = camBack(2, 2.8);
    tube([b, V(-49.8, 200.2, -33.2 + SHIFT_Z), V(-54.6, 191.8, -43.0 + SHIFT_Z), V(-57.6, 191.0, FACE_FS + 0.8), V(XO, 191.2, LANE_A + 1.0),
      V(XO, 188.5, LANE_A), V(XO, ENC_TOP + 5, LANE_A), ...intoTop(LANE_A)]);
  }
  { // tablet USB: right storage post up → over the storage cross-member → left post down → top of the enclosure
    const XOR = CW + SU / 2 + 0.6, YT = SPEC.H + 0.6, port = V(TAB.x, TAB.y - TAB.h / 2, TAB.z);
    tube([port, V(TAB.x + 0.5, port.y - 2.5, TAB.z - 1.2), V(TAB.x + 2.5, port.y - 3.2, FACE_FS + 2.5), V(CW + 1.5, port.y - 2.8, FACE_FS + 0.6),
      V(XOR - 0.3, port.y - 2.4, FACE_FS + 0.2), V(XOR, port.y - 1.6, SZC + 1.0), V(XOR, port.y + 2, SZC), V(XOR, 160, SZC), V(XOR, 200, SZC), V(XOR, 230, SZC),
      V(XOR, SPEC.H - 1.5, SZC), V(XOR - 0.8, SPEC.H + 0.3, SZC), V(CW + 2, YT, SZC), V(30, YT, SZC), V(0, YT, SZC), V(-30, YT, SZC), V(-CW - 2, YT, SZC),
      V(XO + 0.8, SPEC.H + 0.3, SZC), V(XO, SPEC.H - 1.5, SZC), V(XO, 215, SZC), V(XO, 195, SZC), V(XO, ENC_TOP + 2.5, SZC), V(XO - 0.8, ENC_TOP + 1.0, SZC), V(ENC_X + 1.2, ENC_TOP, SZC)]);
    for (const y of [160, 190, 220]) clip(CW + SU / 2 + 0.5, y, SZC, 'vx');
    for (const x of [30, 0, -30]) clip(x, SPEC.H + 0.5, SZC, 'hy');
    for (const y of [228, 205]) clip(S_OUT - 0.5, y, SZC, 'vx');
  }
  { // power: under the enclosure → lane B down → floor → out behind the rack
    const end = V(-84, 0.6, -112);
    tube([...intoBot(LANE_B).reverse(), V(XO, 100, LANE_B), V(XO, 50, LANE_B), V(XO, 12, LANE_B), V(XO, 3, LANE_B - 0.5),
      V(XO - 2, 0.6, -100.5), V(-68, 0.6, -105), V(-77, 0.6, -109), end]);
    box(cables, 2.4, 1.2, 3.6, [end.x, end.y, end.z], M.box2);
  }
  for (const y of [183, 40, 70, 100, 130]) clip(S_OUT - 0.5, y, SZC, 'vx2');
  return root;
}

/* ── timeline: the rig, then the rays .. rack-coordinates beats of the measurement animation
   (with frame after frame after all 33), then a short hold ── */
const RIG = 12.0;
const BEATS = [
  { stage: 1, key: 'rig', dur: RIG },
  { stage: 2, key: 'rays', dur: 3.8 },
  { stage: 3, key: 'meet', dur: 3.8 },
  { stage: 3, key: 'all', dur: 5.2 },
  { stage: 3, key: 'burst', dur: BURST.dur },
  { stage: 4, key: 'frame', dur: 3.8 },
];
const ALL_S = j => 0.2 + j * 0.08;                                              // 'all': when joint j appears
const TOTAL = BEATS.reduce((s, b) => s + b.dur, 0);
const HOLD = 2.2;
const locate = T => { let t0 = 0; for (let i = 0; i < BEATS.length; i++) { if (T < t0 + BEATS[i].dur || i === BEATS.length - 1) return { i, t: Math.min(T - t0, BEATS[i].dur) }; t0 += BEATS[i].dur; } };

/* ── automatic camera: keys over the whole timeline (seconds), smoothstep between them.
   theta/phi orbit the target: theta 0 looks from +z (behind the person), π from the cameras ── */
const RIG_KEYS = [
  { at: 0.0,  target: [17, 100, 11],  theta: -2.0,  phi: 1.2,  radius: 540 },  // rig: from behind the camera wall
  { at: 2.6,  target: [12, 110, 0],   theta: -2.15, phi: 1.18, radius: 480 },
  { at: 5.0,  target: [-38, 176, -39], theta: -2.25, phi: 1.24, radius: 200 }, // in on the compute enclosure and the C3 arm
  { at: 7.2,  target: [-38, 172, -39], theta: -2.45, phi: 1.22, radius: 190 },
  { at: 9.6,  target: [12, 100, -10], theta: -2.95, phi: 1.15, radius: 440 },  // out and across the camera wall
];
const MEASURE_KEYS = [
  { at: 0.0,  target: [15, 98, 0],  theta: 2.25, phi: 1.2,  radius: 390 },     // rays: the cameras and the person
  { at: 3.4,  target: [12, 90, 4],  theta: 2.05, phi: 1.16, radius: 360 },
  { at: 5.4,  target: [2, 46, 16],  theta: 1.85, phi: 1.02, radius: 175 },     // meet: in on the knee
  { at: 7.4,  target: [2, 45, 18],  theta: 1.74, phi: 1.0,  radius: 165 },
  { at: 9.4,  target: [14, 88, 10], theta: 2.05, phi: 1.18, radius: 350 },     // all 33: back out
  { at: 12.6, target: [14, 84, 12], theta: 2.3,  phi: 1.16, radius: 340 },
  { at: 18.6, target: [14, 84, 12], theta: 1.85, phi: 1.12, radius: 335 },     // frame after frame: round to the side
  { at: 20.4, target: [10, 36, 22], theta: 1.35, phi: 0.9,  radius: 290 },     // rack frame: down to the floor axes
  { at: 22.6, target: [10, 38, 22], theta: 1.25, phi: 0.92, radius: 295 },
  { at: 24.8, target: [12, 46, 22], theta: 1.15, phi: 0.98, radius: 320 },
];
const KEYS = RIG_KEYS.concat(MEASURE_KEYS.map(k => ({ ...k, at: k.at + RIG })));
function autoCam(T) {
  const K = KEYS;
  if (T <= K[0].at) return K[0];
  if (T >= K[K.length - 1].at) return K[K.length - 1];
  let j = 0; while (K[j + 1].at < T) j++;
  const a = K[j], b = K[j + 1], k = smooth((T - a.at) / (b.at - a.at));
  return blendCam(a, b, k);
}
function blendCam(a, b, k) {
  let dth = b.theta - a.theta; dth = Math.atan2(Math.sin(dth), Math.cos(dth));
  return { theta: a.theta + dth * k, phi: lerp(a.phi, b.phi, k), radius: lerp(a.radius, b.radius, k), target: [0, 1, 2].map(i => lerp(a.target[i], b.target[i], k)) };
}

/* ── scene builder. reveal = [start s, length s]: lines and arrows draw on, the rest fades in ── */
function sceneBuilder() {
  const G = new THREE.Group(), anims = [];
  let cur = G;
  const V = p => new THREE.Vector3(p[0], p[1], p[2]);
  const col = c => new THREE.Color(c.startsWith('#') ? c : PAL[c]);
  const UP = new THREE.Vector3(0, 1, 0);
  const mats = obj => { const o = []; obj.traverse(x => { if (x.material) { const m = x.material; if (m.userData.base === undefined) m.userData.base = m.opacity; m.transparent = true; o.push(m); } }); return o; };
  const b = {
    G, anims, V,
    node() { return cur; },                                                     // the group new objects go into
    /* the materials are collected again when the body mesh arrives inside a fading group (REV) */
    fade(obj, reveal, { out = false } = {}) {
      let ms = [], rev = -1;
      anims.push(t => { if (rev !== REV) { ms = mats(obj); rev = REV; } let k = prog(t, reveal); if (out) k = 1 - k; obj.visible = k > 0.001; ms.forEach(m => { m.opacity = m.userData.base * k; }); });
    },
    /* in, hold, out: [start, in, hold, out] */
    pulse(obj, [s, din, hold, dout]) {
      let ms = [], rev = -1;
      anims.push(t => { if (rev !== REV) { ms = mats(obj); rev = REV; } const k = prog(t, [s, din]) * (1 - prog(t, [s + din + hold, dout])); obj.visible = k > 0.001; ms.forEach(m => { m.opacity = m.userData.base * k; }); });
    },
    grouped(fn, reveal = null) {
      const g = new THREE.Group(), prev = cur;
      cur.add(g); cur = g; fn(g); cur = prev;
      if (reveal) b.fade(g, reveal);
      return g;
    },
    lines(pairs, color, { dashed = false, opacity = 1, reveal = null, r = 0.4 } = {}) {
      const P = pairs.map(([a, c]) => [V(a), V(c)]);
      const sg = new Segs(cur, col(color), { opacity, r, dashed }).update(P);
      if (reveal) anims.push(t => { const k = easeOut(prog(t, reveal)); sg.update(P.map(([a, c]) => [a, a.clone().lerp(c, k)])); sg.g.visible = k > 0; });
      return sg;
    },
    arrow(a, c, color, { thick = false, head = null, reveal = null } = {}) {
      const C = col(color), g = new THREE.Group(); cur.add(g);
      const shaftR = thick ? 0.85 : 0.42;
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(shaftR, shaftR, 1, 8), new THREE.MeshBasicMaterial({ color: C }));
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 12), new THREE.MeshBasicMaterial({ color: C }));
      g.add(shaft, cone);
      const A = V(a), dir = V(c).sub(A), len = dir.length(); dir.divideScalar(len || 1);
      const h = head ?? Math.min(len * 0.28, thick ? 10 : 7), w = thick ? h * 0.5 : h * 0.42, end = new THREE.Vector3();
      const set = f => {
        const L = len * f; g.visible = L > 0.3; if (!g.visible) return;
        const hh = Math.min(h, L), sl = Math.max(0, L - hh);
        end.copy(A).addScaledVector(dir, sl);
        shaft.scale.set(1, Math.max(sl, 0.01), 1); shaft.position.copy(A).addScaledVector(dir, sl / 2); shaft.quaternion.setFromUnitVectors(UP, dir);
        cone.scale.set(w / 2, hh, w / 2); cone.position.copy(end).addScaledVector(dir, hh / 2); cone.quaternion.setFromUnitVectors(UP, dir);
      };
      set(1);
      if (reveal) anims.push(t => set(easeOut(prog(t, reveal))));
    },
    dot(p, color, r = 2.6, { reveal = null, opacity = 1 } = {}) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 14, 14), new THREE.MeshBasicMaterial({ color: col(color), transparent: opacity < 1, opacity }));
      m.position.copy(V(p)); cur.add(m);
      if (reveal) b.fade(m, reveal);
      return m;
    },
    quad(q, color, { opacity = 0.3 } = {}) {
      const P = q.map(V);
      const geo = new THREE.BufferGeometry().setFromPoints(P); geo.setIndex([0, 1, 2, 0, 2, 3]);
      cur.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: col(color), side: THREE.DoubleSide, transparent: true, opacity, depthWrite: false })));
    },
    triad(o, axes, len, { reveal = null } = {}) {
      axes.forEach((ax, i) => b.arrow(o, add(o, mul(unit(ax), len)), AXIS_COLORS[i], { head: Math.min(5, len * 0.3), reveal }));
    },
    /* camera: optical centre, view pyramid, image plane */
    camera(c) {
      const pairs = c.corners.map(k => [c.C, k]).concat(c.corners.map((k, i) => [k, c.corners[(i + 1) % 4]]));
      b.lines(pairs, c.color, { opacity: 0.9, r: 0.3 });
      b.quad(c.corners, c.color, { opacity: 0.09 });
      b.dot(c.C, c.color, 2.4);
    },
    /* power rack, members laid out as in the rig layout render; built in the rack frame and
       moved as one group by the rack pose */
    rack({ origin = false } = {}) {
      const S = RACK, U = S.u, CS = S.cs, H = S.H, Wi = S.Wi, Di = S.Di;
      const g = new THREE.Group(); g.position.set(RACK_O[0], 0, RACK_O[2]); g.rotation.y = -yaw; cur.add(g);
      const edges = [];
      const bx = (w, h, d, [x, y, z]) => {
        const eg = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, d)), a = eg.attributes.position.array; eg.dispose();
        for (let i = 0; i + 5 < a.length; i += 6) edges.push([new THREE.Vector3(a[i] + x, a[i + 1] + y, a[i + 2] + z), new THREE.Vector3(a[i + 3] + x, a[i + 4] + y, a[i + 5] + z)]);
      };
      const cw = Wi / 2 + U / 2, cd = Di / 2 + U / 2;
      const corners = [[-cw, -cd], [cw, -cd], [cw, cd], [-cw, cd]];
      corners.forEach(([x, z]) => bx(U, H, U, [x, H / 2, z]));
      for (let k = 0; k < 4; k++) {
        const [ax, az] = corners[k], [qx, qz] = corners[(k + 1) % 4];
        const span = Math.hypot(qx - ax, qz - az) - U, horiz = Math.abs(qz - az) < 1e-6;
        bx(horiz ? span : CS, CS, horiz ? CS : span, [(ax + qx) / 2, H - CS / 2, (az + qz) / 2]);
      }
      [-1, 1].forEach(sx => bx(CS, CS, 2 * cd - U, [sx * cw, CS / 2, 0]));
      [-1, 1].forEach(sx => {
        bx(S.jcupW, S.jcupH, S.jcupReach, [sx * (cw + U / 2 - S.jcupW / 2), S.jcupHeight, -(cd + U / 2 - S.jcupReach / 2 + S.jcupNose)]);
        bx(S.safetyW, S.safetyT, 2 * cd - U, [sx * cw, S.safetyHeight, 0]);
      });
      const gap = S.storage, szc = -(cd + U / 2) - gap - U / 2;
      [-1, 1].forEach(sx => { bx(U, H, U, [sx * cw, H / 2, szc]); bx(CS, CS, gap, [sx * cw, CS / 2, -(cd + U / 2) - gap / 2]); bx(CS, CS, gap, [sx * cw, H - CS / 2, -(cd + U / 2) - gap / 2]); });
      bx(2 * cw - U, CS, CS, [0, H - CS / 2, szc]);
      new Segs(g, col('rack'), { opacity: 0.85, r: 0.32 }).update(edges);
      const inner = [[-Wi / 2, 0.4, Di / 2], [Wi / 2, 0.4, Di / 2], [Wi / 2, 0.4, -Di / 2], [-Wi / 2, 0.4, -Di / 2]].map(r2f);
      b.lines(inner.map((p, i) => [p, inner[(i + 1) % 4]]), 'rack', { dashed: true, opacity: 0.9 });
      if (origin) b.dot(RACK_O, 'mark', 2.2);
    },
  };
  return b;
}

/* per-beat scene: what earlier beats of the same stage produced is already in place, only
   what this beat produces carries a reveal */
function buildScene(bt) {
  const b = sceneBuilder(), S = bt.stage, K = bt.key, Fg = FIG, fat = [];
  /* the measurement's opening state: rack, the person at the bottom of the squat (the body mesh,
     checked on every draw so it appears as soon as its file is here) */
  const base = () => {
    b.rack({ origin: S === 4 });
    const body = new Body(b.node(), PAL.person);
    b.anims.push(() => body.sync());
    return body;
  };
  CAMS.forEach(c => b.camera(c));

  const planes2d = () => CAMS.forEach(c => b.grouped(() => {
    const O = Fg.O[c.i];
    O.forEach((o, j) => b.dot(o.pt, 'px', j === FEAT ? 0.9 : 0.55));
    b.lines(pairsOf(O.map(o => o.pt), BONES), 'px', { r: 0.14, opacity: 0.8 });
  }));
  const featOnPlanes = () => CAMS.forEach(c => b.dot(Fg.O[c.i][FEAT].pt, 'px', 1.2));
  const rayEndOf = (fr, c, j) => add(c.C, mul(unit(sub(fr.O[c.i][j].pt, c.C)), nrm(sub(fr.T[j], c.C)) + 30));
  const rayEnd = (c, j) => rayEndOf(Fg, c, j);
  const rays = (j, { reveal = null, stagger = 0.5 } = {}) => CAMS.forEach(c => b.lines([[c.C, rayEnd(c, j)]], c.color, { r: 0.45, opacity: 0.95, reveal: reveal ? [reveal[0] + c.i * stagger, reveal[1]] : null }));
  const normArrows = () => CAMS.forEach(c => { b.dot(c.pp, c.color, 0.7); b.arrow(c.pp, Fg.O[c.i][FEAT].pt, c.color, { head: 2.2 }); });

  /* 1 the rig: the gear fades out and the measurement's opening state fades in, so the rays
     beat starts on exactly what this one ends on */
  let person = null;
  if (S === 1) {
    const rig = rigGroup(fat); b.G.add(rig);
    b.fade(rig, [RIG - 2.6, 1.8], { out: true });
    b.grouped(() => { base(); planes2d(); featOnPlanes(); normArrows(); }, [RIG - 2.2, 1.8]);
  } else person = base();

  /* 2 rays: follow the left knee; principal point → knee pixel is the normalised coordinate,
     the line through it from the camera centre is the ray */
  if (S === 2) {
    planes2d(); featOnPlanes(); normArrows();
    rays(FEAT, { reveal: [0.2, 1.2] });
  }

  /* 3 triangulation: the point nearest the three rays is the 3D joint, then all 33 */
  if (S === 3 && K !== 'burst') {
    planes2d(); featOnPlanes();
    const T = Fg.T[FEAT];
    if (K === 'meet') {
      rays(FEAT);
      b.dot(T, 'joint', 2.2, { reveal: [0.4, 0.5] });
      /* the short perpendiculars from each ray to the point: the ±2.5 px detection error */
      const stubs = CAMS.map(c => { const d = unit(sub(Fg.O[c.i][FEAT].pt, c.C)), q = sub(T, c.C); return [T, add(c.C, mul(d, dot3(q, d)))]; });
      b.lines(stubs, 'tri', { r: 0.3, reveal: [1.6, 0.5] });
    } else {
      b.dot(T, 'joint', 1.9);
      Fg.T.forEach((P, j) => {
        if (j === FEAT) return;
        const s = ALL_S(j);
        b.dot(P, 'joint', 1.3, { reveal: [s, 0.3] });
        CAMS.forEach(c => b.pulse(b.lines([[c.C, rayEnd(c, j)]], c.color, { r: 0.3, opacity: 0.7 }).g, [s - 0.1, 0.15, 0.1, 0.3]));
      });
      b.lines(pairsOf(Fg.T, BONES), 'joint', { r: 0.4, reveal: [3.1, 0.8] });
    }
  }

  /* 3 frame after frame: at each frame the body takes that frame's pose, the detections on the
     image planes change, the three rays reach all 33 joints at once and the skeleton takes the
     pose — all on the same instant, so body and skeleton never drift apart; the rays fade before
     the next frame. Between frames nothing moves: a frame is a snapshot */
  if (K === 'burst') {
    b.fade(b.grouped(featOnPlanes), [0, 0.3], { out: true });
    const V = b.V, n = BURST_AT.length, C3 = CAMS.map(c => V(c.C));
    const F3 = BURST_FR.map(fr => ({ T: fr.T.map(V), O: fr.O.map(o => o.map(q => V(q.pt))), ends: CAMS.map(c => fr.T.map((_, j) => V(rayEndOf(fr, c, j)))) }));
    const flat = CAMS.map(c => ({
      dots: Fg.O[c.i].map((o, j) => b.dot(o.pt, 'px', j === FEAT ? 0.9 : 0.55)),
      bones: b.lines(pairsOf(Fg.O[c.i].map(o => o.pt), BONES), 'px', { r: 0.14, opacity: 0.8 }),
      rays: b.lines([], c.color, { r: 0.3, opacity: 0.7 }),
    }));
    const dots = Fg.T.map((p, j) => b.dot(p, 'joint', j === FEAT ? 1.9 : 1.3));
    const bones = b.lines(pairsOf(Fg.T, BONES), 'joint', { r: 0.4 });
    b.anims.push(t => {
      let f = -1; while (f + 1 < n && t >= BURST_AT[f + 1]) f++;
      person.setPhase(f < 0 ? 1 : burstK(BURST_AT[f]));                        // the body is the frame being measured
      flat.forEach(fl => { fl.rays.g.visible = false; });
      if (f < 0) return;
      const at = BURST_AT[f], per = f + 1 < n ? BURST_AT[f + 1] - at : BURST.min;
      const sl = clamp01((per - BURST.min) / (BURST.slow - BURST.min));           // 1 slow frames .. 0 at 30 Hz
      const rin = BURST.rayIn * sl, a = rin > 1e-3 ? clamp01((t - at) / rin) : 1;  // at 30 Hz the rays are whole at once
      const cur = F3[f];
      const op = 0.7 * (a < 1 ? 1 : 1 - sl * easeOut(clamp01((t - at - rin) / Math.max(0.06, 0.75 * per - rin))));
      flat.forEach((fl, ci) => {
        fl.dots.forEach((m, j) => m.position.copy(cur.O[ci][j]));
        fl.bones.update(pairsOf(cur.O[ci], BONES));
        fl.rays.update(cur.ends[ci].map(e => [C3[ci], C3[ci].clone().lerp(e, easeOut(a))]));
        fl.rays.mat.opacity = op; fl.rays.g.visible = op > 0.01;
      });
      const pop = a < 1 ? 1 : 1 + 0.45 * sl * (1 - clamp01((t - at - rin) / 0.14));
      dots.forEach((m, j) => { m.position.copy(cur.T[j]); m.scale.setScalar(pop); });
      bones.update(pairsOf(cur.T, BONES));
    });
  }

  /* 4 rack coordinates: floor origin → rack origin, the rack axes */
  if (S === 4) {
    planes2d();
    Fg.T.forEach((T, j) => b.dot(T, 'joint', j === FEAT ? 1.9 : 1.3));
    b.lines(pairsOf(Fg.T, BONES), 'joint', { r: 0.4 });
    b.triad([0, 0.5, 0], [[1, 0, 0], [0, 1, 0], [0, 0, 1]], 34, { reveal: [0, 0.6] });
    b.arrow([0, 0.6, 0], [RACK_O[0], 0.6, RACK_O[2]], 'mark', { thick: true, reveal: [0.9, 1.0] });
    b.triad(RACK_O, [EX, EY, EZ], 40, { reveal: [1.9, 0.6] });
  }
  return { group: b.G, anims: b.anims, fat };
}

/* floor grid: 1-px lines that fade into the page towards the edges */
function floorGrid(page) {
  const c0 = new THREE.Color(PAL.grid), bg = new THREE.Color(page), cx = 20, cz = 30, R0 = 140, R1 = 420, step = 25, half = 450;
  const pos = [], cols = [], tmp = new THREE.Color();
  const push = (x, z) => { const d = Math.hypot(x - cx, z - cz), k = smooth(clamp01((d - R0) / (R1 - R0))); tmp.copy(c0).lerp(bg, k); pos.push(x, 0, z); cols.push(tmp.r, tmp.g, tmp.b); };
  for (let a = -half; a <= half; a += step) for (let s = -half; s < half; s += step) {
    push(cx + a, cz + s); push(cx + a, cz + s + step);
    push(cx + s, cz + a); push(cx + s + step, cz + a);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  return new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ vertexColors: true }));
}

/* ═══ mount ═══
   host: the element the canvas fills. Options:
   still   draw the finished frame and do not play (reduced motion); dragging still works
   onEnd   called once when the sequence and its hold are over and nobody is steering
   onFail  called if WebGL goes away
   frame   () => ({ x, y, w, h, fx, fy }): the box the camera is framed for, in CSS px from the
           canvas's top-left, and where in it (0..1) the orbit target sits. Read on every
           resize. The canvas may be larger than the box: the view through the box stays the
           same and the canvas only shows more around it. Default: the whole canvas, centred
   Returns { play() from the start, setActive(bool) to stop drawing while off screen, dispose() } */
export function mountHeroScene(host, { still = false, onEnd = null, onFail = null, frame = null } = {}) {
  loadMesh();                                                                   // the body mesh, needed from ~10 s in
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const page = getComputedStyle(host).getPropertyValue('--bg').trim() || PAL.bg;
  renderer.setClearColor(page, 1);
  const el = renderer.domElement;
  el.className = 'live-canvas';
  host.appendChild(el);
  const scene = new THREE.Scene();
  scene.add(floorGrid(page));
  /* the rig's solid parts are lit as in the rig layout render; everything else is unlit */
  scene.add(new THREE.HemisphereLight(0xffffff, 0x6b7280, 1.1));
  const sun = new THREE.DirectionalLight(0xffffff, 0.7); sun.position.set(120, 300, 200); scene.add(sun);
  const cam = new THREE.PerspectiveCamera(40, 1, 1, 6000);

  let T = still ? TOTAL : 0, beatI = -1, S = null, active = true, playing = !still, ended = false;
  let raf = 0, last = 0;
  /* camera modes: auto (keys), user (dragged), back (easing from where the user left it onto the keys) */
  let mode = 'auto', userCam = null, backFrom = null, backAt = 0, lastInput = -1e9, autoSince = 0, hover = false;
  const IDLE = 5000, BACK = 1600, WHEEL_WINDOW = 4000;

  const setBeat = i => {
    if (i === beatI) return;
    if (S) { scene.remove(S.group); disposeTree(S.group); }
    beatI = i; S = buildScene(BEATS[i]); scene.add(S.group);
  };
  const applyCam = c => {
    const [tx, ty, tz] = c.target;
    cam.position.set(tx + c.radius * Math.sin(c.phi) * Math.sin(c.theta), ty + c.radius * Math.cos(c.phi), tz + c.radius * Math.sin(c.phi) * Math.cos(c.theta));
    cam.lookAt(tx, ty, tz);
  };
  const currentCam = now => {
    const a = autoCam(T);
    if (mode === 'user') return userCam;
    if (mode === 'back') {
      const k = clamp01((now - backAt) / BACK);
      if (k >= 1) { mode = 'auto'; autoSince = now; return a; }
      return blendCam(backFrom, a, smooth(k));
    }
    return a;
  };
  const fit = () => {
    const w = host.clientWidth, h = host.clientHeight;
    if (w < 4 || h < 4) return false;
    /* cap the drawing buffer near 6 Mpx so a full-screen hero on a 2x screen stays light */
    const dpr = Math.min(devicePixelRatio || 1, 2, Math.sqrt(6e6 / (w * h)));
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false);
    /* the projection is set up for the box (fov over its height, its aspect), and the canvas
       is a window onto that projection, offset by where the box sits in the canvas */
    const f = (frame && frame()) || { x: 0, y: 0, w, h, fx: 0.5, fy: 0.5 };
    if (f.w < 4 || f.h < 4) return false;
    cam.aspect = f.w / f.h;
    cam.setViewOffset(f.w, f.h, (0.5 - f.fx) * f.w - f.x, (0.5 - f.fy) * f.h - f.y, w, h);
    return true;
  };
  const draw = now => {
    const { i, t } = locate(Math.min(T, TOTAL));
    setBeat(i);
    S.anims.forEach(a => a(t));
    S.fat.forEach(m => m.resolution.set(el.clientWidth, el.clientHeight));   // 1 CSS px edges
    applyCam(currentCam(now));
    renderer.render(scene, cam);
  };
  const tick = now => {
    raf = 0;
    if (!active) return;
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    if (playing) T += dt;
    if (mode === 'user' && !pts.size && now - lastInput > IDLE) { backFrom = userCam; backAt = now; mode = 'back'; }
    draw(now);
    if (playing && !ended && T >= TOTAL + HOLD && mode === 'auto' && now - autoSince > 600) { ended = true; playing = false; onEnd && onEnd(); }
    if (playing || mode !== 'auto') raf = requestAnimationFrame(tick);
  };
  const kick = () => { if (!raf && active) { last = performance.now(); raf = requestAnimationFrame(tick); } };

  /* steering: drag rotates; pinch, or the wheel once the scene is in hand, zooms. A drag takes
     the camera only after it moves a few pixels, and on touch only sideways, so a swipe that
     scrolls the page leaves the automatic path alone */
  const pts = new Map();
  let drag = null, pinch = null;
  const take = now => { if (mode !== 'user') { userCam = { ...currentCam(now) }; mode = 'user'; } lastInput = now; };
  const zoom = f => { userCam.radius = Math.min(900, Math.max(45, userCam.radius * f)); };
  const spread = () => { const [a, b] = [...pts.values()]; return Math.hypot(a[0] - b[0], a[1] - b[1]); };
  const onDown = e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pts.set(e.pointerId, [e.clientX, e.clientY]);
    try { el.setPointerCapture(e.pointerId); } catch (_) { /* synthetic event */ }
    if (pts.size === 1) { drag = { at: [e.clientX, e.clientY], from: [e.clientX, e.clientY], on: false, touch: e.pointerType === 'touch' }; pinch = null; }
    else if (pts.size === 2) { drag = null; take(performance.now()); pinch = { d0: spread(), r0: userCam.radius }; }
    if (e.pointerType === 'mouse') el.classList.add('grabbing');
    kick();
  };
  const onMove = e => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, [e.clientX, e.clientY]);
    const now = performance.now();
    if (pinch && pts.size >= 2) { take(now); const d = spread(); if (d > 0) userCam.radius = Math.min(900, Math.max(45, pinch.r0 * pinch.d0 / d)); }
    else if (drag) {
      if (!drag.on) {
        const dx = e.clientX - drag.from[0], dy = e.clientY - drag.from[1];
        if (Math.hypot(dx, dy) < 4 || (drag.touch && Math.abs(dx) < Math.abs(dy))) return;
        drag.on = true;
      }
      take(now);
      userCam.theta -= (e.clientX - drag.at[0]) * 0.006;
      userCam.phi = Math.min(1.5, Math.max(0.08, userCam.phi - (e.clientY - drag.at[1]) * 0.006));
      drag.at = [e.clientX, e.clientY];
    }
    if (!playing) draw(now);
  };
  const onUp = e => {
    pts.delete(e.pointerId); pinch = null;
    const rest = pts.size === 1 ? [...pts.values()][0] : null;
    drag = rest ? { at: rest.slice(), from: rest.slice(), on: true, touch: false } : null;
    if (!pts.size) el.classList.remove('grabbing');
    if (mode === 'user') lastInput = performance.now();
    kick();
  };
  const onWheel = e => {
    const now = performance.now();
    const inHand = pts.size > 0 || (hover && mode === 'user' && now - lastInput < WHEEL_WINDOW);
    if (!inHand && !e.ctrlKey) return;                                          // a plain wheel scrolls the page
    e.preventDefault(); take(now); zoom(1 + Math.max(-0.5, Math.min(0.5, e.deltaY * 0.0012)));
    if (!playing) draw(now); kick();
  };
  const onEnter = () => { hover = true; }, onLeave = () => { hover = false; };
  el.addEventListener('pointerdown', onDown);
  el.addEventListener('pointermove', onMove);
  el.addEventListener('pointerup', onUp);
  el.addEventListener('pointercancel', onUp);
  el.addEventListener('pointerenter', onEnter);
  el.addEventListener('pointerleave', onLeave);
  el.addEventListener('wheel', onWheel, { passive: false });
  el.addEventListener('webglcontextlost', e => { e.preventDefault(); active = false; onFail && onFail(); });

  const ro = new ResizeObserver(() => { if (fit()) draw(performance.now()); });
  ro.observe(host);
  fit(); draw(performance.now());
  kick();

  return {
    canvas: el,
    play() { T = 0; ended = false; playing = true; mode = 'auto'; userCam = null; autoSince = 0; kick(); },
    setActive(on) { active = on; if (on) kick(); },
    dispose() { active = false; ro.disconnect(); if (S) disposeTree(S.group); renderer.dispose(); el.remove(); },
    /* for checks and the poster still: stop at T seconds and return the frame as a PNG data URL */
    seek(t) { playing = false; T = t; draw(performance.now()); return el.toDataURL('image/png'); },
    /* resolves once the body mesh has arrived (or failed to): checks wait on it before seeking */
    ready() { return meshLoad || Promise.resolve(); },
  };
}

/* geometry for tuning the camera keys (node or console) */
export const __geom = { cams: CAMS.map(c => c.C), rackO: RACK_O, knee: FIG.T[FEAT], head: headOf(FIG.T), total: TOTAL };
/* the person as designed and the cameras for scripts/hero-mesh/pose.mjs (what the model is fitted to):
   joints (cm, floor frame, y up) at a squat phase, and the cameras as R·t·K in that frame with the
   lens coefficients in OpenCV order */
export const __hero = {
  joints: k => stickAt(k).map(r2f),
  cameras: RAW.map(c => ({ R: mm(c.R, F), t: c.t, K: c.K })),
  dist: [COEF.k1, COEF.k2, COEF.p1, COEF.p2, COEF.k3], image: [IMG_W, IMG_H],
};
