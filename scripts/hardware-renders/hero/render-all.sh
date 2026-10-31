#!/usr/bin/env bash
# 히어로 소스 일괄 렌더: 정지 화면(2160×1800) 4종 + 살짝 도는 루프(1440×1200, 앞뒤로 왕복) 3종
set -e
cd "$(dirname "$0")"
S=..
node -e "
const fs=require('fs'); const body=fs.readFileSync('$S/rig-render/rig-layout.html','utf8');
fs.writeFileSync('$S/rig-render/local.html', '<!doctype html><html lang=\"ko\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"></head><body>'+body+'</body></html>');"
# 하드웨어 두 모델은 두 색 무광 모드(duo=1, common.js 참고). 사진 질감 그대로 뽑으려면 HW="" 로 돌린다.
HW="${HW-duo=1}"
# 인자 hw 를 주면 카메라·캐리어만(리그 배치는 건너뜀)
MODE="${1-all}"
W=2160; H=1800
node capture.mjs --page hero/ar0234.html --query "$HW" --w $W --h $H --out out/ar0234.png | tail -1
node capture.mjs --page hero/ar0234.html --query "explode=1&$HW" --w $W --h $H --out out/ar0234-exploded.png | tail -1
node capture.mjs --page hero/mic711.html --query "$HW" --w $W --h $H --out out/mic711.png | tail -1
if [ "$MODE" = all ]; then
node capture.mjs --page rig-render/local.html --query "hero=1" --view hero --w $W --h $H --out out/rig-front.png | tail -1
node capture.mjs --page rig-render/local.html --query "hero=1" --view hero2 --w $W --h $H --out out/rig-back.png | tail -1
fi
# 루프: theta 를 0.32 rad 만큼 72 장, ffmpeg 에서 앞뒤로 이어 붙여 144 장(30fps 4.8초) 왕복
LW=1440; LH=1200; N=72; SPAN=0.32
node capture.mjs --page hero/ar0234.html --query "theta=0.4&$HW" --orbit $N --span $SPAN --w $LW --h $LH --out-dir frames/ar0234 | tail -1
node capture.mjs --page hero/mic711.html --query "theta=0.56&$HW" --orbit $N --span $SPAN --w $LW --h $LH --out-dir frames/mic711 | tail -1
LOOPS="ar0234 mic711"
if [ "$MODE" = all ]; then
node capture.mjs --page rig-render/local.html --query "hero=1" --view hero2 --orbit $N --span $SPAN --w $LW --h $LH --out-dir frames/rig | tail -1
LOOPS="$LOOPS rig"
fi
for k in $LOOPS; do
  ffmpeg -v error -y -framerate 30 -i frames/$k/f%04d.png -filter_complex "[0:v]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1[v]" -map "[v]" \
    -c:v libvpx-vp9 -b:v 0 -crf 32 -pix_fmt yuv420p -an out/$k-loop.webm
  ffmpeg -v error -y -framerate 30 -i frames/$k/f%04d.png -filter_complex "[0:v]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1[v]" -map "[v]" \
    -c:v libx264 -crf 20 -preset slow -pix_fmt yuv420p -movflags +faststart -an out/$k-loop.mp4
done
ls -la out
