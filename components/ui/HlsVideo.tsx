"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HlsVideoProps {
  src: string;
  className?: string;
  flipped?: boolean;
}

export default function HlsVideo({ src, className = "", flipped = false }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    // Strict browser autoplay compliance: muted must be set on the DOM property
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If browser autoplay policies restrict initial play, trigger on first gesture
            const onInteract = () => {
              video.play().catch(() => {});
              window.removeEventListener("click", onInteract);
              window.removeEventListener("touchstart", onInteract);
            };
            window.addEventListener("click", onInteract, { once: true });
            window.addEventListener("touchstart", onInteract, { once: true });
          });
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native Apple/Safari HLS support
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none select-none ${
        flipped ? "scale-y-[-1]" : ""
      } ${className}`}
    />
  );
}
