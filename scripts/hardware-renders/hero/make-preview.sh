#!/usr/bin/env bash
# out/ 의 정지 png(2160×1800)와 루프 webm 을 시안 페이지용 작은 파일로 줄여 preview/ 에 둔다.
# 정지 = webp 1440×1200, 루프 = vp9 webm 1080×900 30fps. mesh.webp / mesh-loop.webm 은 hero-mhr 영상에서 온 것이라 건드리지 않는다.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p preview
python -I - <<'PY'
from PIL import Image
for name in ['ar0234', 'ar0234-exploded', 'mic711', 'rig-front', 'rig-back']:
    im = Image.open(f'out/{name}.png').convert('RGB').resize((1440, 1200), Image.LANCZOS)
    im.save(f'preview/{name}.webp', 'WEBP', quality=82, method=6)
    print('webp', name)
PY
for name in ar0234 mic711 rig; do
  ffmpeg -v error -y -i "out/${name}-loop.webm" -vf scale=1080:900 -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 -an "preview/${name}-loop.webm"
  echo "webm ${name}-loop"
done
ls -la preview
