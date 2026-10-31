#!/usr/bin/env bash
# Step 4 of the hero render: PNG frames -> two rungs of webm (VP9) + mp4 (H.264), poster webp, og png.
# Needs ffmpeg with libvpx-vp9, libx264 and libwebp. Run from this folder after capture.mjs.
set -e
cd "$(dirname "$0")"
COLOR="-pix_fmt yuv420p -color_range tv -colorspace bt709 -color_primaries bt709 -color_trc bt709"
IN="-framerate 30 -i frames/f%04d.png"
ffmpeg -y -loglevel error $IN -c:v libvpx-vp9 -b:v 0 -crf 33 -row-mt 1 -deadline good -cpu-used 2 $COLOR -an out/hero-mhr-2160.webm
ffmpeg -y -loglevel error $IN -c:v libx264 -crf 23 -preset slow -profile:v high $COLOR -movflags +faststart -an out/hero-mhr-2160.mp4
ffmpeg -y -loglevel error $IN -vf scale=1080:-2 -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 -deadline good -cpu-used 2 $COLOR -an out/hero-mhr-1080.webm
ffmpeg -y -loglevel error $IN -vf scale=1080:-2 -c:v libx264 -crf 23 -preset slow -profile:v high $COLOR -movflags +faststart -an out/hero-mhr-1080.mp4
ffmpeg -y -loglevel error -i frames/f0000.png -vf scale=1440:-2 -c:v libwebp -quality 82 -frames:v 1 out/hero-mhr.webp
ffmpeg -y -loglevel error -i og/f0000.png -c:v png -frames:v 1 out/og.png
ls -la out
