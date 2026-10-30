// Live hero, first sequence: how one frame of a set becomes rack coordinates.
// Three rays leave the cameras through the detected left knee, the point
// nearest the three rays is the 3D joint, the same is done for all 33 joints,
// and the floor frame is moved to the rack frame. The scene, data and timing
// are those of the measurement-principle animation (rack-tracker, cameras
// K/R/t from the 28 August 2026 PVC rig calibration, example pose), cut to
// its rays .. rack-coordinates beats, with every label, caption and the image
// inset removed and the colours set for the dark page.
//
// The camera follows the key moments on its own. Dragging takes it over
// (rotate; wheel or pinch zooms once the scene has been grabbed, so the page
// still scrolls under a plain wheel), and after a few idle seconds it eases
// back onto the automatic path.
import * as THREE from 'three';

/* ── palette: the page is #0b0d10; the canvas clears to it ── */
const PAL = {
  bg: '#0b0d10', grid: '#252d38', rack: '#3a4350', person: '#8b95a3',
  px: '#f0773f', joint: '#e6eaf0', mark: '#a3adbb', tri: '#8a94a3',
};
const CAM_COLORS = ['#f0604f', '#4f9cf0', '#45c48a'];
const AXIS_COLORS = ['#f0604f', '#45c48a', '#4f9cf0'];

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
const disposeTree = root => root.traverse(o => { if (o.isInstancedMesh) o.dispose(); if (o.geometry && !o.geometry.userData.keep) o.geometry.dispose(); if (o.material) o.material.dispose(); });

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

/* ── cameras: centre, image plane 28 cm in front, projection and back-projection ── */
const CAMS = RAW.map((c, i) => {
  const Rn = mm(c.R, F), Rt = tr(Rn), C = mul(mv(Rt, c.t), -1);
  const K = { fx: c.K[0][0], fy: c.K[1][1], cx: c.K[0][2], cy: c.K[1][2] };
  const planePt = (x, y) => mv(Rt, sub([x * PLANE_D, y * PLANE_D, PLANE_D], c.t));
  const corners = [[0, 0], [IMG_W, 0], [IMG_W, IMG_H], [0, IMG_H]].map(([u, v]) => planePt((u - K.cx) / K.fx, (v - K.cy) / K.fy));
  const project = P => { const p = add(mv(Rn, P), c.t); if (p[2] < 1) return null; const x = p[0] / p[2], y = p[1] / p[2], d = distort(x, y, COEF); return { u: K.fx * d[0] + K.cx, v: K.fy * d[1] + K.cy }; };
  const pxToNorm = (u, v) => undistort((u - K.cx) / K.fx, (v - K.cy) / K.fy, COEF);
  return { i, color: CAM_COLORS[i], C, corners, pp: planePt(0, 0), planePt, project, pxToNorm };
});

/* ── rack frame: origin shift + yaw from the floor frame ── */
const yaw = RACK_POSE.yaw * Math.PI / 180;
const EX = [Math.cos(yaw), 0, Math.sin(yaw)], EY = [0, 1, 0], EZ = [-Math.sin(yaw), 0, Math.cos(yaw)];
const r2f = p => [RACK_POSE.c[0] + p[0] * EX[0] + p[2] * EZ[0], p[1], RACK_POSE.c[2] + p[0] * EX[2] + p[2] * EZ[2]];
const RACK_O = r2f([0, 0, 0]);

/* ── the person: 33 MediaPipe joints, built in the rack frame from bone lengths and joint
   angles, facing the cameras (−z), held at the bottom of a squat ── */
const BONES_BODY = [[11, 12], [11, 13], [13, 15], [12, 14], [14, 16], [11, 23], [12, 24], [23, 24], [23, 25], [25, 27], [24, 26], [26, 28], [27, 29], [29, 31], [27, 31], [28, 30], [30, 32], [28, 32]];
const BONES_FACE = [[0, 1], [1, 2], [2, 3], [3, 7], [0, 4], [4, 5], [5, 6], [6, 8], [9, 10]];
const BONES_HAND = [[15, 17], [15, 19], [15, 21], [17, 19], [16, 18], [16, 20], [16, 22], [18, 20]];
const BONES = BONES_BODY.concat(BONES_FACE, BONES_HAND);
const LEN = { shin: 40, thigh: 44, trunk: 50, neck: 11 };
const ANG = { stand: [3, 3, 0], bottom: [32, 55, 40] };
const LAT = { ankle: 14, knee: 15, hip: 11, sh: 19, elbow: 31, wrist: 28, ear: 7.5, eyeIn: 3, eye: 4.5, eyeOut: 6, mouth: 2.5, pinky: 30, index: 29, thumb: 26 };
function poseAt(k) {
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
    L(hip, LAT.hip), R(hip, LAT.hip), L(knee, LAT.knee), R(knee, LAT.knee), L(ankle, LAT.ankle), R(ankle, LAT.ankle), L(heel, LAT.ankle), R(heel, LAT.ankle), L(toe, LAT.ankle), R(toe, LAT.ankle)];
}
const headOf = P => mul(add(add(P[7], P[8]), add(P[2], P[5])), 0.25);

/* ── one frame: 2D detections (with error) → normalised coordinates → points on the image
   planes → rays → triangulation (the point nearest all rays) ── */
const noise = (ci, j, a) => (hash(ci * 1000 + j * 10 + a) - 0.5) * 2 * NOISE_PX;
const obs = (c, P, j) => { const pr = c.project(P); const u = pr.u + noise(c.i, j, 0), v = pr.v + noise(c.i, j, 1), [x, y] = c.pxToNorm(u, v); return { pt: c.planePt(x, y) }; };
const triangulate = lines => {
  const A = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], bb = [0, 0, 0];
  for (const { C, d } of lines) for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { const m = (i === j ? 1 : 0) - d[i] * d[j]; A[i][j] += m; bb[i] += m * C[j]; }
  return solve3(A, bb);
};
const FIG = (() => {
  const P = poseAt(1).map(r2f);
  const O = CAMS.map(c => P.map((p, j) => obs(c, p, j)));
  const T = P.map((_, j) => triangulate(CAMS.map(c => ({ C: c.C, d: unit(sub(O[c.i][j].pt, c.C)) }))));
  return { P, O, T };
})();

/* ── timeline: the rays .. rack-coordinates beats of the original, then a short hold ── */
const BEATS = [
  { stage: 2, key: 'rays', dur: 3.8 },
  { stage: 3, key: 'meet', dur: 3.8 },
  { stage: 3, key: 'all', dur: 5.2 },
  { stage: 4, key: 'frame', dur: 3.8 },
];
const ALL_S = j => 0.2 + j * 0.08;                                              // 'all': when joint j appears
const TOTAL = BEATS.reduce((s, b) => s + b.dur, 0);
const HOLD = 2.2;
const locate = T => { let t0 = 0; for (let i = 0; i < BEATS.length; i++) { if (T < t0 + BEATS[i].dur || i === BEATS.length - 1) return { i, t: Math.min(T - t0, BEATS[i].dur) }; t0 += BEATS[i].dur; } };

/* ── automatic camera: keys over the whole timeline (seconds), smoothstep between them.
   theta/phi orbit the target: theta 0 looks from +z (behind the person), π from the cameras ── */
const KEYS = [
  { at: 0.0,  target: [15, 98, 0],  theta: 2.25, phi: 1.2,  radius: 390 },     // rays: the cameras and the person
  { at: 3.4,  target: [12, 90, 4],  theta: 2.05, phi: 1.16, radius: 360 },
  { at: 5.4,  target: [2, 46, 16],  theta: 1.85, phi: 1.02, radius: 175 },     // meet: in on the knee
  { at: 7.4,  target: [2, 45, 18],  theta: 1.74, phi: 1.0,  radius: 165 },
  { at: 9.4,  target: [14, 88, 10], theta: 2.05, phi: 1.18, radius: 350 },     // all 33: back out
  { at: 12.6, target: [14, 84, 12], theta: 2.3,  phi: 1.16, radius: 340 },
  { at: 14.4, target: [10, 36, 22], theta: 1.35, phi: 0.9,  radius: 290 },     // rack frame: down to the floor axes
  { at: 16.6, target: [10, 38, 22], theta: 1.25, phi: 0.92, radius: 295 },
  { at: 18.8, target: [12, 46, 22], theta: 1.15, phi: 0.98, radius: 320 },
];
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
    fade(obj, reveal) {
      const ms = mats(obj);
      anims.push(t => { const k = prog(t, reveal); obj.visible = k > 0.001; ms.forEach(m => { m.opacity = m.userData.base * k; }); });
    },
    /* in, hold, out: [start, in, hold, out] */
    pulse(obj, [s, din, hold, dout]) {
      const ms = mats(obj);
      anims.push(t => { const k = prog(t, [s, din]) * (1 - prog(t, [s + din + hold, dout])); obj.visible = k > 0.001; ms.forEach(m => { m.opacity = m.userData.base * k; }); });
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
  const b = sceneBuilder(), S = bt.stage, K = bt.key, Fg = FIG;
  const pairsOf = (pts, bones) => bones.map(([i, j]) => [pts[i], pts[j]]);

  /* there from the start: rack, the three cameras, the person before measuring (faint) */
  b.rack({ origin: S === 4 });
  CAMS.forEach(c => b.camera(c));
  b.lines(pairsOf(Fg.P, BONES_BODY), 'person', { opacity: 0.22, r: 1.3 });
  b.dot(headOf(Fg.P), 'person', 7.5, { opacity: 0.22 });

  const planes2d = () => CAMS.forEach(c => b.grouped(() => {
    const O = Fg.O[c.i];
    O.forEach((o, j) => b.dot(o.pt, 'px', j === FEAT ? 0.9 : 0.55));
    b.lines(pairsOf(O.map(o => o.pt), BONES), 'px', { r: 0.14, opacity: 0.8 });
  }));
  const featOnPlanes = () => CAMS.forEach(c => b.dot(Fg.O[c.i][FEAT].pt, 'px', 1.2));
  const rayEnd = (c, j) => add(c.C, mul(unit(sub(Fg.O[c.i][j].pt, c.C)), nrm(sub(Fg.T[j], c.C)) + 30));
  const rays = (j, { reveal = null, stagger = 0.5 } = {}) => CAMS.forEach(c => b.lines([[c.C, rayEnd(c, j)]], c.color, { r: 0.45, opacity: 0.95, reveal: reveal ? [reveal[0] + c.i * stagger, reveal[1]] : null }));
  const normArrows = () => CAMS.forEach(c => { b.dot(c.pp, c.color, 0.7); b.arrow(c.pp, Fg.O[c.i][FEAT].pt, c.color, { head: 2.2 }); });

  /* 2 rays: follow the left knee; principal point → knee pixel is the normalised coordinate,
     the line through it from the camera centre is the ray */
  if (S === 2) {
    planes2d(); featOnPlanes(); normArrows();
    rays(FEAT, { reveal: [0.2, 1.2] });
  }

  /* 3 triangulation: the point nearest the three rays is the 3D joint, then all 33 */
  if (S === 3) {
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

  /* 4 rack coordinates: floor origin → rack origin, the rack axes */
  if (S === 4) {
    planes2d();
    Fg.T.forEach((T, j) => b.dot(T, 'joint', j === FEAT ? 1.9 : 1.3));
    b.lines(pairsOf(Fg.T, BONES), 'joint', { r: 0.4 });
    b.triad([0, 0.5, 0], [[1, 0, 0], [0, 1, 0], [0, 0, 1]], 34, { reveal: [0, 0.6] });
    b.arrow([0, 0.6, 0], [RACK_O[0], 0.6, RACK_O[2]], 'mark', { thick: true, reveal: [0.9, 1.0] });
    b.triad(RACK_O, [EX, EY, EZ], 40, { reveal: [1.9, 0.6] });
  }
  return { group: b.G, anims: b.anims };
}

/* floor grid: 1-px lines that fade into the page towards the edges */
function floorGrid() {
  const c0 = new THREE.Color(PAL.grid), bg = new THREE.Color(PAL.bg), cx = 20, cz = 30, R0 = 140, R1 = 420, step = 25, half = 450;
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
   focus   () => [x, y]: where on the canvas (0..1) the orbit target sits, read on every resize;
           the hero keeps the action clear of the copy on wide screens
   Returns { play() from the start, setActive(bool) to stop drawing while off screen, dispose() } */
export function mountMeasureHero(host, { still = false, onEnd = null, onFail = null, focus = () => [0.5, 0.5] } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(PAL.bg, 1);
  const el = renderer.domElement;
  el.className = 'live-canvas';
  host.appendChild(el);
  const scene = new THREE.Scene();
  scene.add(floorGrid());
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
    /* cap the drawing buffer near 4 Mpx so a large hero on a 2x screen stays light */
    const dpr = Math.min(devicePixelRatio || 1, 2, Math.sqrt(4.2e6 / (w * h)));
    renderer.setPixelRatio(dpr); renderer.setSize(w, h, false);
    const [fx, fy] = focus();
    cam.aspect = w / h; cam.setViewOffset(w, h, (0.5 - fx) * w, (0.5 - fy) * h, w, h);
    return true;
  };
  const draw = now => {
    const { i, t } = locate(Math.min(T, TOTAL));
    setBeat(i);
    S.anims.forEach(a => a(t));
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
  };
}

/* geometry for tuning the camera keys (node or console) */
export const __geom = { cams: CAMS.map(c => c.C), rackO: RACK_O, knee: FIG.T[FEAT], head: headOf(FIG.T), total: TOTAL };
