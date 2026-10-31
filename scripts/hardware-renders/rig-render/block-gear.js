/* ── 연산 장비함 하나에 Jetson Orin NX(MIC-711D-OX 캐리어 125×125×51mm)와 트리거 보드를 함께 넣는다.
   보관 기둥(좌) 바깥 옆면 x=−59 에 밀착, 161~179cm. 캐리어가 위 칸, 트리거 보드가 아래 칸. 뚜껑은 바깥(−x)을 본다 ── */
const S_OUT = -CW - SU / 2;                                                       // 보관 기둥(좌) 바깥 옆면 x (−59.0)
const ENC = { w: 13.5, h: 17.5, d: 5.6, y: 170, z: SZC, face: S_OUT };
const ENC_TOP = ENC.y + ENC.h / 2, ENC_BOT = ENC.y - ENC.h / 2, ENC_X = ENC.face - 0.4 - ENC.d / 2;   // 장비함 중심 x (−62.2)
{
  const g = new THREE.Group(); g.position.set(ENC.face, ENC.y, ENC.z); g.rotation.y = -Math.PI / 2; gear.add(g);   // 로컬 +z = 월드 −x, 로컬 +x = 월드 +z
  box(g, 10, 19, 0.4, [0, 0, 0.2], mats.box2);                                                   // 마운트 판
  box(g, ENC.w, ENC.h, ENC.d, [0, 0, 0.4 + ENC.d / 2], mats.box);
  const lidZ = 0.4 + ENC.d + 0.15, divY = -ENC.h / 2 + 4.2;                                      // 뚜껑 두 장: 위 칸(캐리어)·아래 칸(트리거 보드)
  const upTop = ENC.h / 2 - 0.6, upBot = divY + 0.15, loTop = divY - 0.15, loBot = -ENC.h / 2 + 0.6;
  box(g, ENC.w - 1.2, upTop - upBot, 0.3, [0, (upTop + upBot) / 2, lidZ], mats.box2, false);
  box(g, ENC.w - 1.2, loTop - loBot, 0.3, [0, (loTop + loBot) / 2, lidZ], mats.box2, false);
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 10), mats.led); led.position.set(5.0, ENC.h / 2 - 1.6, lidZ + 0.15); g.add(led);
  for (let k = 0; k < 5; k++) box(g, 0.25, 0.6, 4.0, [-3 + k * 1.5, ENC.h / 2 + 0.3, 0.4 + ENC.d / 2], mats.box2, false);   // 방열 핀(윗면)
  const lab = document.createElement('div'); lab.className = 'lab ko'; lab.textContent = '연산 장비 Jetson Orin NX · 트리거 보드'; overlay.appendChild(lab);
  labels.push({ el: lab, at: new THREE.Vector3(ENC_X, ENC_TOP + 4.5, ENC.z), kind: 'label' });
}

/* ── 선: 카메라 3대가 모두 보관 기둥에 있으니 선도 보관 기둥과 보관부 상단 크로스멤버 면만 탄다(한 면에 한 레인, 30cm 마다 클립).
   C2 : 좌 보관 기둥 앞면 → 바깥 옆면 레인 A ↑ 장비함 아래
   C3 : 매직암 → 좌 보관 기둥 앞면 → 바깥 옆면 레인 A ↓ 장비함 위
   C1 : 우 보관 기둥 안쪽 옆면 → 뒷면 ↑ → 보관부 상단 크로스멤버 뒷면 ← → 좌 보관 기둥 뒷면 ↓ → 바깥 옆면 레인 B → 장비함 위
   전원: 장비함 아래 → 레인 B ↓ 바닥 → 랙 밖 ── */
const XO = S_OUT - 0.6;                           // 바깥 옆면(x=−59 평면) 위 선 중심 x
const ZB = FACE_RS - 0.6;                         // 뒷면(z=−99 평면: 보관 기둥·보관부 크로스멤버) 위 선 중심 z
const LANE_A = SZC + 1.6, LANE_B = SZC - 1.6;     // 보관 기둥 바깥 옆면의 두 레인 z (−93.6 / −96.8)
const V = (x, y, z) => new THREE.Vector3(x, y, z);
function tube(pts, r = 0.45, mat = mats.cable) {
  const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(48, pts.length * 24), r, 8, false), mat); cables.add(m); return m;
}
// 클립: 선이 붙는 면과 방향에 따라 모양이 다르다 — vz 세로선·z면, vx 세로선·x면, hz 가로선(x 방향)·z면, vx2 x면의 두 레인을 한 클립으로
const CLIP = { vz: [1.6, 1.0, 1.1], vx: [1.1, 1.0, 1.6], hz: [1.0, 1.6, 1.1], vx2: [1.1, 1.0, 4.6] };
const clip = (x, y, z, kind = 'vz') => { const [w, h, d] = CLIP[kind]; const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats.clip); m.position.set(x, y, z); cables.add(m); };
const camBack = (i, d = 2.2) => camInfo[i].centre.clone().sub(camInfo[i].axis.clone().multiplyScalar(d));
const intoTop = (lane) => [V(XO, ENC_TOP + 2.5, lane), V(XO - 0.8, ENC_TOP + 1.0, lane), V(ENC_X + 1.2, ENC_TOP, lane)];   // 레인에서 장비함 윗면으로
const intoBot = (lane) => [V(XO, ENC_BOT - 6, lane), V(XO, ENC_BOT - 2.5, lane), V(XO - 0.8, ENC_BOT - 1.0, lane), V(ENC_X + 1.2, ENC_BOT, lane)];   // 레인에서 장비함 아랫면으로
{ // C1 (우 보관 기둥 앞면 안쪽 모서리, 27cm)
  const b = camBack(0), xr = CW + 1.8, yc = SPEC.H - SPEC.CS / 2 - 0.8;    // 뒷면 레인 x(±57) · 크로스멤버 뒷면 선 y(236.4)
  tube([b, V(CW - 4.4, b.y + 0.3, FACE_FS - 2.0), V(CW - 4.4, b.y + 0.6, ZB), V(CW + 0.8, b.y + 1.2, ZB), V(xr, b.y + 3.5, ZB),
    V(xr, 60, ZB), V(xr, 120, ZB), V(xr, 180, ZB), V(xr, 228, ZB), V(xr, yc - 1.8, ZB), V(xr - 2.0, yc, ZB),
    V(30, yc, ZB), V(0, yc, ZB), V(-30, yc, ZB), V(-xr + 2.0, yc, ZB), V(-xr, yc - 1.8, ZB), V(-xr, 228, ZB), V(-xr, 205, ZB), V(-xr, 190, ZB),
    V(-xr - 1.6, 187.2, ZB + 0.6), V(XO, 185.5, LANE_B), ...intoTop(LANE_B)]);
  for (let y = 60; y < 225; y += 30) clip(xr, y, ZB + 0.1, 'vz');
  for (const x of [30, 0, -30]) clip(x, yc, ZB + 0.1, 'hz');
  for (const y of [225, 200]) clip(-xr, y, ZB + 0.1, 'vz');
}
{ // C2 (좌 보관 기둥 앞면 안쪽 모서리, 21cm)
  const b = camBack(1);
  tube([b, V(-CW - 1.0, b.y + 0.3, FACE_FS + 0.6), V(S_OUT - 0.3, b.y + 0.6, FACE_FS + 0.2), V(XO, b.y + 0.4, LANE_A + 1.2), V(XO, b.y + 4, LANE_A),
    V(XO, 60, LANE_A), V(XO, 100, LANE_A), V(XO, 140, LANE_A), ...intoBot(LANE_A)]);
}
{ // C3 (좌 보관 기둥 매직암, 194cm)
  const b = camBack(2, 2.8);
  tube([b, V(-49.8, 200.2, -33.2 + SHIFT_Z), V(-54.6, 191.8, -43.0 + SHIFT_Z), V(-57.6, 191.0, FACE_FS + 0.8), V(XO, 191.2, LANE_A + 1.0),
    V(XO, 188.5, LANE_A), V(XO, ENC_TOP + 5, LANE_A), ...intoTop(LANE_A)]);
}
{ // 전원선: 장비함 아래 → 레인 B ↓ → 바닥 → 보관 기둥 바깥으로 플러그
  const end = V(-84, 0.6, -112);
  tube([...intoBot(LANE_B).reverse(), V(XO, 100, LANE_B), V(XO, 50, LANE_B), V(XO, 12, LANE_B), V(XO, 3, LANE_B - 0.5),
    V(XO - 2, 0.6, -100.5), V(-68, 0.6, -105), V(-77, 0.6, -109), end]);
  box(cables, 2.4, 1.2, 3.6, [end.x, end.y, end.z], mats.box2);
  const lab = document.createElement('div'); lab.className = 'lab ko'; lab.textContent = '전원'; overlay.appendChild(lab);
  labels.push({ el: lab, at: end.clone().add(V(0, 7, 0)), kind: 'label' });
}
// 보관 기둥 바깥 옆면: 두 레인을 한 클립으로(위 구간 C3·C1, 아래 구간 C2·전원)
for (const y of [183, 40, 70, 100, 130]) clip(S_OUT - 0.5, y, SZC, 'vx2');

