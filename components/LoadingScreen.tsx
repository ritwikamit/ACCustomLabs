"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["Design", "Engineer", "Deploy"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // RAF Counter from 000 to 100 with guaranteed completion in ~1500ms
  useEffect(() => {
    let frameId: number;
    let completed = false;
    const startTime = performance.now();
    const duration = 1500;

    const finish = () => {
      if (completed) return;
      completed = true;
      setCount(100);
      setIsDone(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("ac_seen_intro", "1");
      }
      setTimeout(() => {
        onComplete();
      }, 300);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(eased * 100);

      setCount(currentCount);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        finish();
      }
    };

    frameId = requestAnimationFrame(animate);

    // Guaranteed fallback timeout so it NEVER stalls
    const timeout = setTimeout(() => {
      finish();
    }, 1800);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  // Word cycling every 500ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 500);

    return () => clearInterval(wordInterval);
  }, []);

  const handleSkip = () => {
    setIsDone(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ac_seen_intro", "1");
    }
    onComplete();
  };

  return (
    <motion.aside
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      animate={{ opacity: isDone ? 0 : 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed inset-0 z-[9999] bg-[hsl(var(--bg))] flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none ${
        isDone ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* Top Left Label & Skip Button */}
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF1738] animate-ping" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium font-mono">
            AC Custom Labs • Portfolio &apos;26
          </span>
        </motion.div>

        <button
          onClick={handleSkip}
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-text-primary uppercase tracking-widest font-mono transition-colors px-3 py-1.5 rounded-full border border-stroke/60 hover:border-stroke"
        >
          <span>Skip</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Center Rotating Words */}
      <div className="flex items-center justify-center h-40">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.95 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-display italic text-text-primary tracking-tight text-center"
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom Counter Display */}
      <div className="flex items-end justify-between">
        <div className="hidden sm:block text-xs text-muted max-w-xs font-mono">
          [System Ready] Next.js 16 • Turbopack • TypeScript • GSAP • Motion
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
