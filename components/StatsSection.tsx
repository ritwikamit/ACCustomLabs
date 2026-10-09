"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "5+",
    label: "Production Deployments",
    subtext: "Live verified platforms across fitness centers, luxury salons, pharmaceutical supply, and real estate.",
  },
  {
    value: "100%",
    label: "Custom Architecture",
    subtext: "Zero bloated third-party templates. Every layout, schema, and API route is hand-engineered.",
  },
  {
    value: "< 1.2s",
    label: "Core Web Vitals Benchmark",
    subtext: "Sub-second mobile rendering backed by Next.js 16 server rendering and distributed edge networks.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col border-l border-stroke/80 pl-6 sm:pl-8 py-2 group hover:border-[#89AACC] transition-colors duration-300"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-display italic text-text-primary tracking-tight mb-3 tabular-nums group-hover:text-[#89AACC] transition-colors duration-300">
                {stat.value}
              </div>
              <h3 className="text-base sm:text-lg font-medium text-text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
