// Hardware viewers on the landing page: one three.js scene per page (camera.html, carrier.html),
// drawn on the page's sheet colour and turned by the visitor. Grew out of the hero render
// tooling in scripts/hardware-renders/hero/ (same models, same units: mm, y up).
//   ?bg=fafafa          page colour the canvas clears to (the sheet)
//   ?duo=0              photo textures instead of the two-colour matte look (needs tex/*.png, see scripts/)
//   ?c0=&c1=            the two colours of the matte look (dark, light)
//   ?spin=0             no idle turntable
//   ?w=&h=              fixed canvas size, no interaction (capture tooling); otherwise fills the window
//   ?theta=&phi=&radius=&fov=&tx=&ty=&tz=  first viewpoint
//   window.__cam({theta,phi,radius,tx,ty,tz}) sets the viewpoint · __render() one frame · __ready true after the first frame
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const q = new URLSearchParams(location.search);
export const num = (k, d) => (q.has(k) ? parseFloat(q.get(k)) : d);
const hex = (k, d) => parseInt((q.get(k) || d).replace('#', ''), 16);
export const BG = hex('bg', 'fafafa');
export const PAL = { grid: 0xe6e8eb, major: 0xd2d7de, tint: 0x2c7272, ink: 0x1a1f26 };
// Two-colour matte look (the default here): no reflections, roughness 1, every face either the dark
// colour (c0) or the light one (c1). A page says which materials are light with ready({ light: [...] }).
export const DUO = q.get('duo') !== '0';
export const DUO_COL = { dark: hex('c0', '2e353e'), light: hex('c1', 'c6ced6') };
const FIXED = q.has('w') && q.has('h');
const SPIN = !FIXED && q.get('spin') !== '0' && !matchMedia('(prefers-reduced-motion: reduce)').matches;
let _ctx = null;

export function setup({ w = num('w', 1440), h = num('h', 1200), fov = num('fov', 30), floorY = 0, gridStep = 10, gridMajor = 50, gridExtent = 400, shadow = true } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
  renderer.setPixelRatio(FIXED ? 1 : Math.min(devicePixelRatio || 1, 2));
  renderer.setSize(FIXED ? w : innerWidth, FIXED ? h : innerHeight);
  renderer.setClearColor(BG, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = shadow; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

  // lights: key (shadows), rim, fill
  const hemi = new THREE.HemisphereLight(0xdfe5ec, 0x1a1e24, 0.55); scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(160, 260, 200); key.castShadow = shadow;
  key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.6; key.shadow.radius = 3;
  scene.add(key);
  const rim = new THREE.DirectionalLight(PAL.tint, 1.4); rim.position.set(-220, 140, -180); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.5); fill.position.set(-120, 80, 220); scene.add(fill);
  _ctx = { scene, hemi, key, rim, fill };

  // floor: a transparent plane that only takes the shadow, and a grid (fine and major lines)
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(gridExtent * 4, gridExtent * 4), new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.22 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = floorY; floor.receiveShadow = true; scene.add(floor);
  if (q.get('grid') !== '0') {
    const minor = [], major = [];
    for (let v = -gridExtent; v <= gridExtent; v += gridStep) {
      const a = (Math.round(v / gridMajor) * gridMajor === v) ? major : minor;
      a.push(new THREE.Vector3(v, floorY + 0.02, -gridExtent), new THREE.Vector3(v, floorY + 0.02, gridExtent));
      a.push(new THREE.Vector3(-gridExtent, floorY + 0.02, v), new THREE.Vector3(gridExtent, floorY + 0.02, v));
    }
    scene.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(minor), new THREE.LineBasicMaterial({ color: PAL.grid })));
    scene.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(major), new THREE.LineBasicMaterial({ color: PAL.major })));
  }

  const cam = new THREE.PerspectiveCamera(fov, (FIXED ? w : innerWidth) / (FIXED ? h : innerHeight), 1, 20000);
  const view = { theta: num('theta', 0.7), phi: num('phi', 1.1), radius: num('radius', 300), tx: num('tx', 0), ty: num('ty', 0), tz: num('tz', 0) };
  const apply = () => {
    const { theta, phi, radius, tx, ty, tz } = view;
    cam.position.set(tx + radius * Math.sin(phi) * Math.sin(theta), ty + radius * Math.cos(phi), tz + radius * Math.sin(phi) * Math.cos(theta));
    cam.lookAt(tx, ty, tz); cam.updateProjectionMatrix();
    key.shadow.camera.left = key.shadow.camera.bottom = -radius; key.shadow.camera.right = key.shadow.camera.top = radius;
    key.shadow.camera.near = 1; key.shadow.camera.far = 2000; key.shadow.camera.updateProjectionMatrix();
  };
  const render = () => { apply(); renderer.render(scene, cam); };
  window.__cam = (v) => { Object.assign(view, v); render(); return { ...view }; };
  window.__render = () => new Promise(r => { render(); requestAnimationFrame(() => r(true)); });
  window.__view = view;

  if (!FIXED) {
    // fills the window and follows it
    const fit = () => { renderer.setSize(innerWidth, innerHeight); cam.aspect = innerWidth / innerHeight; render(); };
    addEventListener('resize', fit);
    // turned by hand: drag rotates, pinch zooms, the wheel zooms once the scene has been grabbed
    // (so the page above still scrolls over a plain wheel); an idle turntable until the first touch
    const el = renderer.domElement, pts = new Map(); let drag = null, pinch = null, armed = false, spinning = SPIN;
    const r0 = view.radius;
    const dist = () => { const [a, b] = [...pts.values()]; return Math.hypot(a[0] - b[0], a[1] - b[1]); };
    const clampR = r => Math.min(r0 * 3, Math.max(r0 * 0.35, r));
    el.style.cursor = 'grab'; el.style.touchAction = 'none';
    el.addEventListener('pointerdown', e => {
      pts.set(e.pointerId, [e.clientX, e.clientY]); try { el.setPointerCapture(e.pointerId); } catch (_) { /* no capture */ }
      armed = true; spinning = false; el.style.cursor = 'grabbing';
      if (pts.size === 1) { drag = [e.clientX, e.clientY]; pinch = null; } else if (pts.size === 2) { drag = null; pinch = { d0: dist(), r0: view.radius }; }
    });
    el.addEventListener('pointermove', e => {
      if (!pts.has(e.pointerId)) return; pts.set(e.pointerId, [e.clientX, e.clientY]);
      if (pinch && pts.size >= 2) { const d = dist(); if (d > 0) { view.radius = clampR(pinch.r0 * pinch.d0 / d); render(); } return; }
      if (!drag) return;
      view.theta -= (e.clientX - drag[0]) * 0.006; view.phi = Math.min(1.5, Math.max(0.12, view.phi - (e.clientY - drag[1]) * 0.006));
      drag = [e.clientX, e.clientY]; render();
    });
    const lift = e => { pts.delete(e.pointerId); pinch = null; drag = pts.size === 1 ? [...pts.values()][0].slice() : null; if (!pts.size) el.style.cursor = 'grab'; };
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => el.addEventListener(ev, lift));
    el.addEventListener('wheel', e => { if (!armed) return; e.preventDefault(); view.radius = clampR(view.radius * (1 + e.deltaY * 0.001)); render(); }, { passive: false });
    let last = 0;
    const tick = t => { if (!spinning) return; if (last) view.theta += (t - last) / 1000 * 0.12; last = t; render(); requestAnimationFrame(tick); };
    window.__spin = (on) => { spinning = on && !FIXED; last = 0; if (spinning) requestAnimationFrame(tick); };
    // starts turning once the model is drawn (see ready())
    _ctx.startSpin = () => { if (spinning) { last = 0; requestAnimationFrame(tick); } };
    _ctx.pauseSpin = (pause) => { if (pause) { spinning = false; } else if (SPIN && !armed) { spinning = true; last = 0; requestAnimationFrame(tick); } };
    document.addEventListener('visibilitychange', () => _ctx.pauseSpin(document.hidden));
    // the page that embeds this one (viewer-tabs.js) pauses it behind a tab or off screen
    addEventListener('message', e => { const m = e.data; if (!m || !m.hw) return; if (m.hw === 'pause') _ctx.pauseSpin(true); else if (m.hw === 'resume') _ctx.pauseSpin(false); });
  }
  return { renderer, scene, cam, view, render, key };
}

/* ── materials: one per kind of thing, shared within a scene ── */
const S = (o) => new THREE.MeshStandardMaterial(o);
export const M = {
  pcb: (map) => S({ color: 0xffffff, map, roughness: 0.62, metalness: 0.05, envMapIntensity: 0.6 }),
  plastic: S({ color: 0x15171a, roughness: 0.55, metalness: 0.0, envMapIntensity: 0.5 }),        // black plastic (lens holder, connectors)
  rubber: S({ color: 0x101214, roughness: 0.9, metalness: 0.0, envMapIntensity: 0.2 }),
  alu: S({ color: 0x2b2f34, roughness: 0.48, metalness: 0.55, envMapIntensity: 0.9 }),           // black anodised heatsink
  aluFin: S({ color: 0x24282d, roughness: 0.5, metalness: 0.55, envMapIntensity: 0.8 }),
  steel: S({ color: 0x8e97a3, roughness: 0.4, metalness: 0.9, envMapIntensity: 0.9 }),           // port shells, screws
  steelDark: S({ color: 0x7c8591, roughness: 0.4, metalness: 0.85, envMapIntensity: 0.9 }),
  gold: S({ color: 0xd4a640, roughness: 0.35, metalness: 0.9, envMapIntensity: 1.0 }),
  brass: S({ color: 0xb8964a, roughness: 0.45, metalness: 0.8, envMapIntensity: 0.8 }),
  ic: S({ color: 0x111316, roughness: 0.42, metalness: 0.05, envMapIntensity: 0.6 }),            // QFN, SOT bodies
  mlcc: S({ color: 0x9e8c6a, roughness: 0.55, metalness: 0.1, envMapIntensity: 0.4 }),
  capGray: S({ color: 0x6f7680, roughness: 0.45, metalness: 0.6, envMapIntensity: 0.7 }),
  white: S({ color: 0xe8e6df, roughness: 0.6, metalness: 0.0, envMapIntensity: 0.4 }),           // JST and other white connectors
  green: S({ color: 0x2c8a4a, roughness: 0.55, metalness: 0.0, envMapIntensity: 0.4 }),          // terminal block
  blue: S({ color: 0x1f5fb8, roughness: 0.5, metalness: 0.0, envMapIntensity: 0.4 }),            // USB 3 tongue
  slot: S({ color: 0x07080a, roughness: 0.8, metalness: 0.0, envMapIntensity: 0.1 }),            // the dark inside of a port
  glass: new THREE.MeshPhysicalMaterial({ color: 0x0c1322, roughness: 0.04, metalness: 0.0, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.6, reflectivity: 0.9 }),
  coat: new THREE.MeshPhysicalMaterial({ color: 0x3a2a6a, roughness: 0.08, metalness: 0.0, clearcoat: 1, envMapIntensity: 1.4, transparent: true, opacity: 0.55 }),
  led: new THREE.MeshStandardMaterial({ color: 0x2fa36b, emissive: 0x2fa36b, emissiveIntensity: 1.4, roughness: 0.3 }),
  ledAmber: new THREE.MeshStandardMaterial({ color: 0xd9a63b, emissive: 0xd9a63b, emissiveIntensity: 1.0, roughness: 0.3 }),
  tint: S({ color: PAL.tint, roughness: 0.5, metalness: 0.1 }),
};

/* ── pieces ── */
export function box(parent, w, h, d, [x, y, z], mat, { r = 0, seg = 3, shadow = true } = {}) {
  const g = r > 0 ? new RoundedBoxGeometry(w, h, d, seg, r) : new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(g, mat); m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = shadow; parent.add(m); return m;
}
export function cyl(parent, r, h, [x, y, z], mat, { axis = 'y', seg = 48, r2 = r, shadow = true } = {}) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r2, h, seg), mat); m.position.set(x, y, z);
  if (axis === 'x') m.rotation.z = Math.PI / 2; if (axis === 'z') m.rotation.x = Math.PI / 2;
  m.castShadow = shadow; m.receiveShadow = shadow; parent.add(m); return m;
}
export function ring(parent, r, tube, [x, y, z], mat, { axis = 'y', seg = 48 } = {}) {
  const m = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 12, seg), mat); m.position.set(x, y, z);
  if (axis === 'y') m.rotation.x = Math.PI / 2; if (axis === 'x') m.rotation.y = Math.PI / 2;
  m.castShadow = true; parent.add(m); return m;
}
export function disc(parent, r, [x, y, z], mat, { axis = 'y', seg = 48 } = {}) {
  const m = new THREE.Mesh(new THREE.CircleGeometry(r, seg), mat); m.position.set(x, y, z);
  if (axis === 'y') m.rotation.x = -Math.PI / 2; if (axis === '-y') m.rotation.x = Math.PI / 2; if (axis === 'z') { /* faces +z */ } if (axis === '-z') m.rotation.y = Math.PI;
  if (axis === 'x') m.rotation.y = Math.PI / 2; if (axis === '-x') m.rotation.y = -Math.PI / 2;
  parent.add(m); return m;
}
// cross-head screw: head and two slots
export function screw(parent, r, [x, y, z], mat = M.steel) {
  const head = cyl(parent, r, r * 0.55, [x, y + r * 0.27, z], mat, { seg: 24 });
  box(parent, r * 1.3, 0.25, r * 0.28, [x, y + r * 0.55, z], M.slot, { shadow: false });
  box(parent, r * 0.28, 0.25, r * 1.3, [x, y + r * 0.55, z], M.slot, { shadow: false });
  return head;
}
// hex standoff (brass)
export const standoff = (parent, r, h, [x, y, z]) => cyl(parent, r, h, [x, y, z], M.brass, { seg: 6 });

// Paints the detail mask (white = silkscreen, pads, traces; make-duo-masks.py pulls it from the photo)
// in the two colours: the material's own colour as the ground, the other colour for the detail.
// The original map's rotation and repeat carry over; without one, the entry may give them itself.
async function duoMap(entry, tier, orig) {
  const e = typeof entry === 'string' ? { url: entry } : entry;
  const img = await new Promise((ok, no) => { const i = new Image(); i.onload = () => ok(i); i.onerror = no; i.src = e.url; });
  const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
  const g = c.getContext('2d'); g.drawImage(img, 0, 0);
  const id = g.getImageData(0, 0, c.width, c.height), d = id.data;
  const base = new THREE.Color(DUO_COL[tier]), det = new THREE.Color(DUO_COL[tier === 'light' ? 'dark' : 'light']);
  const b = [base.r * 255, base.g * 255, base.b * 255], k = [det.r * 255, det.g * 255, det.b * 255];
  for (let i = 0; i < d.length; i += 4) { const p = d[i] > 127 ? k : b; d[i] = p[0]; d[i + 1] = p[1]; d[i + 2] = p[2]; d[i + 3] = 255; }
  g.putImageData(id, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 16;
  if (orig) { t.center.copy(orig.center); t.rotation = orig.rotation; t.repeat.copy(orig.repeat); t.offset.copy(orig.offset); t.wrapS = orig.wrapS; t.wrapT = orig.wrapT; t.flipY = orig.flipY; }
  else { if (e.center) t.center.set(e.center[0], e.center[1]); if (e.rotation) t.rotation = e.rotation; }
  return t;
}

// Two-colour matte: reflections off, the rim light white (no third colour), transparent coats hidden,
// every material swapped for one of the two. masks = Map(material → mask url or { url, rotation, center }):
// that material gets the two-colour detail texture instead of a plain colour.
export async function applyDuo({ scene, hemi, rim, fill }, lightMats = [], masks = null) {
  scene.environment = null;
  rim.color.set(0xffffff); rim.intensity = 1.0; hemi.intensity = 0.7; fill.intensity = 0.6;
  const L = new Set(lightMats), cache = new Map();
  const tierOf = (m) => (L.has(m) ? 'light' : 'dark');
  if (masks) for (const [m, entry] of masks) {
    const map = await duoMap(entry, tierOf(m), m.map);
    cache.set(m, new THREE.MeshStandardMaterial({ map, color: 0xffffff, roughness: 1, metalness: 0, side: m.side }));
  }
  const conv = (m) => {
    if (m.isShadowMaterial || m.isLineBasicMaterial) return m;
    if (cache.has(m)) return cache.get(m);
    const tier = tierOf(m), k = tier + ':' + m.side;
    if (!cache.has(k)) cache.set(k, new THREE.MeshStandardMaterial({ color: DUO_COL[tier], roughness: 1, metalness: 0, side: m.side }));
    return cache.get(k);
  };
  scene.traverse((o) => {
    if (!o.isMesh) return;
    const m = o.material;
    if (!Array.isArray(m) && m.transparent && m.opacity < 1) { o.visible = false; return; }
    o.material = Array.isArray(m) ? m.map(conv) : conv(m);
  });
}

export async function ready({ light = [], masks = null } = {}) {    // once the model is built: draw once, then signal
  if (DUO && _ctx) await applyDuo(_ctx, light, masks);
  await window.__render();
  await new Promise(r => requestAnimationFrame(r));
  window.__ready = true;
  document.documentElement.dataset.ready = '1';
  if (_ctx && _ctx.startSpin) _ctx.startSpin();
  if (parent !== window) { try { parent.postMessage({ hw: 'ready', page: location.pathname }, '*'); } catch (_) { /* no parent */ } }
}
