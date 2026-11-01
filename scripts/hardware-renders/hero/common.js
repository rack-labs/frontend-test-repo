// 히어로용 하드웨어 렌더 공통: 랜딩 사이트 팔레트(배경 #0b0d10, 격자 #222a35/#36424f, 강조 #8fbcbc) 위에
// RoomEnvironment 반사 + 키/림 조명 + 바닥 그림자. 페이지는 units(mm) 로 모형을 짜고 query 로 시점을 받는다.
//   ?w=&h=  캔버스 크기   ?theta=&phi=&radius=&fov=&tx=&ty=&tz=  시점   ?grid=0  격자 끄기
//   window.__cam({theta,phi,radius,tx,ty,tz}) 시점 바꾸고 그린다 · window.__render() 한 프레임 · window.__ready 첫 프레임 뒤 true
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const q = new URLSearchParams(location.search);
export const num = (k, d) => (q.has(k) ? parseFloat(q.get(k)) : d);
export const BG = 0x0b0d10;
export const PAL = { grid: 0x222a35, major: 0x36424f, tint: 0x8fbcbc, ink: 0xe6eaf0 };
// ?duo=1  두 색 무광 모드: 반사(environment) 없이 roughness 1, 모든 면이 어두운 색(c0) 아니면 밝은 색(c1) 둘 중 하나.
//   ?c0=1c2129&c1=dde3e9 로 두 색을 바꾼다. 페이지는 ready({ light: [밝게 칠할 재질…] }) 로 밝은 쪽을 고른다(나머지는 어두운 쪽).
export const DUO = q.has('duo');
export const DUO_COL = { dark: parseInt(q.get('c0') || '2e353e', 16), light: parseInt(q.get('c1') || 'c6ced6', 16) };
let _ctx = null;

export function setup({ w = num('w', 1440), h = num('h', 1200), fov = num('fov', 30), floorY = 0, gridStep = 10, gridMajor = 50, gridExtent = 400, shadow = true } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1); renderer.setSize(w, h, false);
  renderer.setClearColor(BG, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = shadow; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

  // 조명: 키(그림자) · 림(사이트 강조색, 뒤 왼쪽) · 채움
  const hemi = new THREE.HemisphereLight(0xdfe5ec, 0x1a1e24, 0.55); scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(160, 260, 200); key.castShadow = shadow;
  key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.6; key.shadow.radius = 3;
  scene.add(key);
  const rim = new THREE.DirectionalLight(PAL.tint, 1.4); rim.position.set(-220, 140, -180); scene.add(rim);
  const fill = new THREE.DirectionalLight(0xffffff, 0.5); fill.position.set(-120, 80, 220); scene.add(fill);
  _ctx = { scene, hemi, key, rim, fill };

  // 바닥: 그림자만 받는 투명 면 + 격자(가는 눈금, 굵은 눈금)
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(gridExtent * 4, gridExtent * 4), new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.55 }));
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

  const cam = new THREE.PerspectiveCamera(fov, w / h, 1, 20000);
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
  return { renderer, scene, cam, view, render, key };
}

/* ── 재질: 한 장면 안에서 같은 물건은 같은 재질 ── */
const S = (o) => new THREE.MeshStandardMaterial(o);
export const M = {
  pcb: (map) => S({ color: 0xffffff, map, roughness: 0.62, metalness: 0.05, envMapIntensity: 0.6 }),
  plastic: S({ color: 0x15171a, roughness: 0.55, metalness: 0.0, envMapIntensity: 0.5 }),        // 검은 플라스틱(렌즈 홀더·커넥터)
  rubber: S({ color: 0x101214, roughness: 0.9, metalness: 0.0, envMapIntensity: 0.2 }),
  alu: S({ color: 0x2b2f34, roughness: 0.48, metalness: 0.55, envMapIntensity: 0.9 }),           // 검정 아노다이징 방열판
  aluFin: S({ color: 0x24282d, roughness: 0.5, metalness: 0.55, envMapIntensity: 0.8 }),
  steel: S({ color: 0x8e97a3, roughness: 0.4, metalness: 0.9, envMapIntensity: 0.9 }),           // 포트 쉘·나사
  steelDark: S({ color: 0x7c8591, roughness: 0.4, metalness: 0.85, envMapIntensity: 0.9 }),
  gold: S({ color: 0xd4a640, roughness: 0.35, metalness: 0.9, envMapIntensity: 1.0 }),
  brass: S({ color: 0xb8964a, roughness: 0.45, metalness: 0.8, envMapIntensity: 0.8 }),
  ic: S({ color: 0x111316, roughness: 0.42, metalness: 0.05, envMapIntensity: 0.6 }),            // QFN·SOT 몸체
  mlcc: S({ color: 0x9e8c6a, roughness: 0.55, metalness: 0.1, envMapIntensity: 0.4 }),
  capGray: S({ color: 0x6f7680, roughness: 0.45, metalness: 0.6, envMapIntensity: 0.7 }),
  white: S({ color: 0xe8e6df, roughness: 0.6, metalness: 0.0, envMapIntensity: 0.4 }),           // JST·흰 커넥터
  green: S({ color: 0x2c8a4a, roughness: 0.55, metalness: 0.0, envMapIntensity: 0.4 }),          // 터미널 블록
  blue: S({ color: 0x1f5fb8, roughness: 0.5, metalness: 0.0, envMapIntensity: 0.4 }),            // USB 3 텅
  slot: S({ color: 0x07080a, roughness: 0.8, metalness: 0.0, envMapIntensity: 0.1 }),            // 포트 구멍(어두운 속)
  glass: new THREE.MeshPhysicalMaterial({ color: 0x0c1322, roughness: 0.04, metalness: 0.0, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 1.6, reflectivity: 0.9 }),
  coat: new THREE.MeshPhysicalMaterial({ color: 0x3a2a6a, roughness: 0.08, metalness: 0.0, clearcoat: 1, envMapIntensity: 1.4, transparent: true, opacity: 0.55 }),
  led: new THREE.MeshStandardMaterial({ color: 0x2fa36b, emissive: 0x2fa36b, emissiveIntensity: 1.4, roughness: 0.3 }),
  ledAmber: new THREE.MeshStandardMaterial({ color: 0xd9a63b, emissive: 0xd9a63b, emissiveIntensity: 1.0, roughness: 0.3 }),
  tint: S({ color: PAL.tint, roughness: 0.5, metalness: 0.1 }),
};

/* ── 조각 ── */
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
// 십자 머리 나사: 머리 + 홈 두 줄
export function screw(parent, r, [x, y, z], mat = M.steel) {
  const head = cyl(parent, r, r * 0.55, [x, y + r * 0.27, z], mat, { seg: 24 });
  box(parent, r * 1.3, 0.25, r * 0.28, [x, y + r * 0.55, z], M.slot, { shadow: false });
  box(parent, r * 0.28, 0.25, r * 1.3, [x, y + r * 0.55, z], M.slot, { shadow: false });
  return head;
}
// 육각 스탠드오프(황동)
export const standoff = (parent, r, h, [x, y, z]) => cyl(parent, r, h, [x, y, z], M.brass, { seg: 6 });

/* ── PCB 질감: 바탕색 위에 희미한 배선과 흰 실크 테두리. 글자는 넣지 않는다(히어로는 글자 없이) ── */
export function pcbTexture({ size = 1024, base = '#1f5a3c', trace = '#2a6d4a', silk = 'rgba(236,240,236,0.85)', seed = 7, silkRects = [], pads = 220, traces = 140 } = {}) {
  let s = seed; const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
  g.fillStyle = base; g.fillRect(0, 0, size, size);
  g.strokeStyle = trace; g.lineWidth = 2.2; g.lineCap = 'round';
  for (let i = 0; i < traces; i++) {           // 배선: 가로/세로/45° 로만 꺾이는 짧은 선
    let x = rnd() * size, y = rnd() * size; g.beginPath(); g.moveTo(x, y);
    for (let k = 0; k < 2 + Math.floor(rnd() * 4); k++) {
      const dir = Math.floor(rnd() * 8) * Math.PI / 4, len = 20 + rnd() * 120;
      x += Math.cos(dir) * len; y += Math.sin(dir) * len; g.lineTo(x, y);
    }
    g.stroke();
  }
  g.fillStyle = 'rgba(214,180,90,0.9)';
  for (let i = 0; i < pads; i++) { const r = 2 + rnd() * 2.5; g.beginPath(); g.arc(rnd() * size, rnd() * size, r, 0, Math.PI * 2); g.fill(); }
  g.strokeStyle = silk; g.lineWidth = 2;
  for (const [u, v, w, h] of silkRects) g.strokeRect(u * size, v * size, w * size, h * size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

// 작은 부품 흩뿌리기: 영역 안에 MLCC·SOT·QFN 을 결정적으로(seed) 배치. 금지 영역(큰 부품 자리)은 피한다
export function sprinkle(parent, { y, area: [x0, z0, x1, z1], n = 40, seed = 3, avoid = [] }) {
  let s = seed; const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
  const hits = (x, z, w, d) => avoid.some(([ax0, az0, ax1, az1]) => x + w / 2 > ax0 && x - w / 2 < ax1 && z + d / 2 > az0 && z - d / 2 < az1);
  let placed = 0, tries = 0;
  while (placed < n && tries++ < n * 30) {
    const kind = rnd();
    const [w, h, d, mat] = kind < 0.6 ? [1.6, 0.8, 0.8, M.mlcc] : kind < 0.85 ? [2.9, 1.1, 1.4, M.ic] : [4 + rnd() * 3, 0.9, 4 + rnd() * 3, M.ic];
    const rot = rnd() < 0.5;
    const x = x0 + rnd() * (x1 - x0), z = z0 + rnd() * (z1 - z0);
    const W = rot ? d : w, D = rot ? w : d;
    if (hits(x, z, W + 1, D + 1)) continue;
    box(parent, W, h, D, [x, y + h / 2, z], mat); placed++;
  }
}

// 디테일 마스크(흰 = 실크·패드·배선, make-duo-masks.py 가 사진 질감에서 뽑음)를 두 색으로 칠한 질감으로 만든다.
// 바탕은 그 재질의 색(tier), 디테일은 반대 색. 원래 map 의 회전·반복은 그대로 따라간다
async function duoMap(url, tier, orig) {
  const img = await new Promise((ok, no) => { const i = new Image(); i.onload = () => ok(i); i.onerror = no; i.src = url; });
  const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight;
  const g = c.getContext('2d'); g.drawImage(img, 0, 0);
  const id = g.getImageData(0, 0, c.width, c.height), d = id.data;
  const base = new THREE.Color(DUO_COL[tier]), det = new THREE.Color(DUO_COL[tier === 'light' ? 'dark' : 'light']);
  const b = [base.r * 255, base.g * 255, base.b * 255], e = [det.r * 255, det.g * 255, det.b * 255];
  for (let i = 0; i < d.length; i += 4) { const p = d[i] > 127 ? e : b; d[i] = p[0]; d[i + 1] = p[1]; d[i + 2] = p[2]; d[i + 3] = 255; }
  g.putImageData(id, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 16;
  if (orig) { t.center.copy(orig.center); t.rotation = orig.rotation; t.repeat.copy(orig.repeat); t.offset.copy(orig.offset); t.wrapS = orig.wrapS; t.wrapT = orig.wrapT; t.flipY = orig.flipY; }
  return t;
}

// 두 색 무광: 반사 끄고, 림 조명도 흰색으로(세 번째 색이 생기지 않게), 투명 겹(코팅)은 숨기고, 재질을 둘 중 하나로 바꿔 끼운다.
// masks = Map(재질 → 마스크 url): 그 재질은 민무늬 대신 두 색 디테일 질감을 입는다
export async function applyDuo({ scene, hemi, rim, fill }, lightMats = [], masks = null) {
  scene.environment = null;
  rim.color.set(0xffffff); rim.intensity = 1.0; hemi.intensity = 0.7; fill.intensity = 0.6;
  const L = new Set(lightMats), cache = new Map();
  const tierOf = (m) => (L.has(m) ? 'light' : 'dark');
  if (masks) for (const [m, url] of masks) {
    const map = await duoMap(url, tierOf(m), m.map);
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

export async function ready({ light = [], masks = null } = {}) {    // 모형을 다 만든 뒤 한 번 그리고 나서 준비 신호
  if (DUO && _ctx) await applyDuo(_ctx, light, masks);
  await window.__render();
  await new Promise(r => requestAnimationFrame(r));
  window.__ready = true;
}
