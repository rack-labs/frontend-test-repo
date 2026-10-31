# 사진 질감(tex/*.png)을 두 색 모드용 디테일 마스크로 이진화한다(255 = 바탕과 다른 곳: 실크·패드·배선·부품 자국).
# 국소 평균(adaptive)과의 차이로 판정해서 사진의 조명 기울기를 무시한다. 결과 = tex/<이름>-duo.png (L), 확인용 시트 = out/_mask-<이름>.png
import sys, cv2, numpy as np
from pathlib import Path
HERE = Path(__file__).resolve().parent
# 이름, 국소 창 비율, 밝은 쪽 문턱, 어두운 쪽 문턱(None 이면 밝은 쪽만)
JOBS = [('cam-front', 0.03, 18, 14), ('cam-back', 0.03, 22, 14), ('mic-top', 0.03, 22, 12)]
variant = sys.argv[1] if len(sys.argv) > 1 else 'b'       # b = 밝은 디테일만(기본), bd = 밝고 어두운 디테일 둘 다(시끄러워서 안 씀)

def mask_of(gray, win, tb, td):
    k = int(gray.shape[1] * win) | 1
    g = cv2.GaussianBlur(gray, (0, 0), 1.0)
    mean = cv2.blur(g, (k, k))
    d = g - mean
    m = d > tb
    if td is not None: m |= d < -td
    m = m.astype(np.uint8) * 255
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((2, 2), np.uint8))      # 낱알 제거
    n, lab, st, _ = cv2.connectedComponentsWithStats(m, connectivity=8)       # 사진 알갱이: 작은 조각(면적 < min_area)은 버린다
    min_area = max(10, int(gray.shape[1] * gray.shape[1] * 1.2e-5))
    keep = np.zeros(n, bool); keep[1:] = st[1:, cv2.CC_STAT_AREA] >= min_area
    return (keep[lab] * 255).astype(np.uint8)

for name, win, tb, td in JOBS:
    img = cv2.imread(str(HERE / 'tex' / f'{name}.png'))
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).astype(np.float32)
    m = mask_of(gray, win, tb, td if variant == 'bd' else None)
    cv2.imwrite(str(HERE / 'tex' / f'{name}-duo.png'), m)
    # 시트: 원본 축소 | 마스크 축소 | 가운데 1:1 크롭(원본) | 가운데 1:1 크롭(마스크)
    H, W = gray.shape; s = 600
    full = cv2.resize(img, (s, s), interpolation=cv2.INTER_AREA)
    mfull = cv2.cvtColor(cv2.resize(m, (s, s), interpolation=cv2.INTER_AREA), cv2.COLOR_GRAY2BGR)
    y0, x0 = H // 2 - s // 2, W // 2 - s // 2
    crop = img[y0:y0 + s, x0:x0 + s]; mcrop = cv2.cvtColor(m[y0:y0 + s, x0:x0 + s], cv2.COLOR_GRAY2BGR)
    sheet = np.hstack([full, mfull, crop, mcrop])
    cv2.imwrite(str(HERE / 'out' / f'_mask-{name}.png'), sheet)
    print(name, m.shape, 'detail %.1f%%' % (100 * (m > 0).mean()))
