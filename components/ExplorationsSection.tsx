"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Cpu, Globe2, Layers, Sparkles, Terminal, X, ArrowUpRight } from "lucide-react";

interface ExplorationItem {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Code2;
  stack: string;
  details: string;
  highlight: string;
}

const explorations: ExplorationItem[] = [
  {
    id: "turbopack",
    title: "Turbopack Runtime",
    subtitle: "Instant incremental bundling",
    icon: Terminal,
    stack: "Next.js 16 / Rust Core",
    details: "Zero cold-start delay with Rust-powered asset compilation, streaming server components, and sub-second Fast Refresh.",
    highlight: "300ms Build Speed",
  },
  {
    id: "motion-gsap",
    title: "Physics & Kinetic UI",
    subtitle: "Fluid 60fps micro-interactions",
    icon: Sparkles,
    stack: "GSAP 3 + Motion 14",
    details: "Spring-damped physics engines, smooth cursor follow magnets, and scroll-bound timelines that feel alive without thread lag.",
    highlight: "Zero dropped frames",
  },
  {
    id: "tailwind-engine",
    title: "Tailwind v4 Engine",
    subtitle: "Modern CSS cascade & variables",
    icon: Layers,
    stack: "Tailwind CSS v4 + PostCSS",
    details: "Unified design token layers with zero build-time boilerplate, native CSS custom properties, and ultra-lean production CSS output.",
    highlight: "Lean 76KB bundle",
  },
  {
    id: "edge-infra",
    title: "Edge Cloud Compute",
    subtitle: "Multi-region low latency routing",
    icon: Globe2,
    stack: "Vercel Edge / Cloudflare",
    details: "Distributed serverless edge lambdas running within 15ms of end users across Asia, Europe, and North America.",
    highlight: "< 40ms TTFB",
  },
  {
    id: "database-core",
    title: "Relational Schemas",
    subtitle: "Strict typing with transactional integrity",
    icon: Cpu,
    stack: "PostgreSQL / Prisma",
    details: "ACID-compliant storage for user reservations, memberships, supplier catalogs, and client inquiries with automated backups.",
    highlight: "Zero data anomalies",
  },
  {
    id: "schema-seo",
    title: "Semantic AEO / SEO",
    subtitle: "Entity graph structured data",
    icon: Code2,
    stack: "Schema.org / JSON-LD",
    details: "Full RDFa / JSON-LD entity graph wiring enabling direct Google Knowledge Graph integration, local 3-pack rankings, and AI engine search.",
    highlight: "100% Rich Result Pass",
  },
];

export default function ExplorationsSection() {
  const [activeItem, setActiveItem] = useState<ExplorationItem | null>(null);

  return (
    <section id="explorations" className="bg-bg py-20 lg:py-32 border-t border-stroke/40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#89AACC]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Pinned Center Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-stroke bg-surface/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              Explorations
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight mb-4">
            Technical <span className="font-display italic text-[#89AACC]">playground</span>
          </h2>

          <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
            A window into our internal architectural prototypes, performance experiments, and full-stack modules. Click any card to inspect the specification.
          </p>

          <a
            href="https://github.com/ritwikamit"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center rounded-full text-xs font-medium px-5 py-2.5 text-text-primary transition-all duration-300 hover:scale-105"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 border border-stroke">
              <span>View GitHub Code</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* 6 Explorations Grid (2-column on desktop with alternating card rotations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {explorations.map((item, index) => {
            const Icon = item.icon;
            // Alternating tilt degrees for organic feel
            const tilt = index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setActiveItem(item)}
                className={`group cursor-pointer rounded-3xl bg-surface border border-stroke p-8 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:border-stroke/80 hover:shadow-2xl hover:shadow-[#89AACC]/10 ${tilt}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-text-primary group-hover:accent-gradient group-hover:text-black transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase text-[#89AACC] px-2.5 py-1 rounded-full bg-stroke/30">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl font-display italic text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted mb-4 font-mono">{item.subtitle}</p>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">
                    {item.details}
                  </p>
                </div>

                <div className="pt-6 border-t border-stroke/40 flex items-center justify-between text-xs text-muted font-mono">
                  <span>{item.stack}</span>
                  <span className="text-text-primary group-hover:translate-x-1 transition-transform">
                    Inspect ↗
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Specification Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg rounded-3xl bg-surface border border-stroke p-8 shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-stroke/40 border border-stroke flex items-center justify-center text-muted hover:text-text-primary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono uppercase text-[#89AACC] px-2.5 py-1 rounded-full bg-stroke/30">
                  {activeItem.stack}
                </span>
                <span className="text-xs font-mono text-muted">• {activeItem.highlight}</span>
              </div>

              <h3 className="text-3xl font-display italic text-text-primary mb-2">
                {activeItem.title}
              </h3>
              <p className="text-sm text-[#89AACC] font-mono mb-6">{activeItem.subtitle}</p>

              <p className="text-sm text-text-primary/90 leading-relaxed mb-6 font-normal">
                {activeItem.details}
              </p>

              <div className="pt-6 border-t border-stroke flex justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold bg-text-primary text-bg hover:opacity-90 transition-opacity"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
