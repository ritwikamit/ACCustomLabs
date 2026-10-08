"use client";

import { motion } from "motion/react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurText({
  text,
  className = "",
  delay = 0,
}: BlurTextProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + index * 0.08,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block mr-[0.28em] will-change-[filter,opacity,transform]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
