"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Engineer", "Deploy"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // RAF Counter from 0 to 100 over ~2400ms
  useEffect(() => {
    const startTime = performance.now();
    const duration = 2400;

    let frameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(eased * 100);

      setCount(currentCount);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(100);
        const timer = setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 400);
        }, 300);
        return () => clearTimeout(timer);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  // Word cycling every 800ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 800);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <motion.aside
      aria-label="Loading portfolio"
      aria-live="polite"
      initial={{ opacity: 1 }}
      animate={{ opacity: isDone ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[hsl(var(--bg))] flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none pointer-events-auto"
    >
      {/* Top Left Label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF1738] animate-ping" />
        <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
          AC Custom Labs • Portfolio &apos;26
        </span>
      </motion.div>

      {/* Center Rotating Words */}
      <div className="flex items-center justify-center h-40">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary tracking-tight text-center"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom Counter Display */}
      <div className="flex items-end justify-between">
        <div className="hidden sm:block text-xs text-muted max-w-xs font-mono">
          [System Ready] Turbopack / Next.js 16 / TypeScript / GSAP / Motion
        </div>
        <div className="text-6xl sm:text-8xl md:text-9xl font-display text-text-primary tabular-nums font-normal ml-auto">
          {String(count).padStart(3, "0")}
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="h-full accent-gradient transition-transform duration-75 origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 12px rgba(137, 170, 204, 0.45)",
          }}
        />
      </div>
    </motion.aside>
  );
}
