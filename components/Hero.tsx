"use client";

import Link from "next/link";
import { ArrowUpRight, Code, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import RetroGrid from "@/components/ui/RetroGrid";
import BlurText from "@/components/ui/BlurText";
import ScrambleText from "@/components/ui/ScrambleText";
import Magnet from "@/components/ui/Magnet";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-[#050505] min-h-[90vh] flex flex-col justify-center">
      {/* 21st.dev Perspective 3D Grid */}
      <RetroGrid angle={62} className="opacity-35" />

      {/* Top red glow atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 red-horizon-glow pointer-events-none" />

      {/* Decorative red curve line matching the logo underline */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[120%] max-w-7xl h-32 pointer-events-none opacity-40">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 110 Q 600 0 1200 110"
            stroke="url(#hero-red-grad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="hero-red-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF1738" stopOpacity="0" />
              <stop offset="25%" stopColor="#FF1738" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#FF1738" stopOpacity="1" />
              <stop offset="75%" stopColor="#FF1738" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF1738" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Studio Eyebrow Badge with ScrambleText (Reference 2 & 5) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF1738] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-[#D4D4D8]">
              <ScrambleText text="AC Custom Labs · Digital Product Studio" />
            </span>
          </motion.div>

          {/* Main Headline with BlurText (Reference 5: Liquid-glass Agency reveal) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-[family-name:var(--font-display)]">
            <BlurText text="We build digital products that work." delay={0.15} />
          </h1>

          {/* Subtitle / Supporting copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed"
          >
            Websites, applications, business software, and SEO systems engineered
            specifically around your business, not a generic template.
          </motion.p>

          {/* Action CTAs (Reference 1 & 4: Arrow-circle CTA + Magnetic Interaction) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Magnet strength={12}>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FF1738] hover:bg-[#FF3350] active:scale-[0.98] text-white font-semibold text-base pl-8 pr-3 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-[#FF1738]/25 hover:shadow-[#FF1738]/45 border border-[#FF1738]/40 group"
              >
                <span>Start a Project</span>
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
                </span>
              </Link>
            </Magnet>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 liquid-glass hover:bg-white/[0.06] active:scale-[0.98] text-[#F7F7F7] font-medium text-base px-8 py-4 rounded-full transition-all duration-200 border border-white/[0.12] hover:border-white/[0.25]"
            >
              <span>View Our Work</span>
            </Link>
          </motion.div>

          {/* Liquid Glass Stats & Anchor Cards (Reference 2, 3 & 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left"
          >
            <div className="liquid-glass rounded-2xl p-4 sm:p-5 hover:border-white/[0.18] transition-colors">
              <div className="flex items-center gap-2 text-white text-sm font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#FF1738]" />
                <span>Single Studio Team</span>
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Strategy, UI/UX, code, and deployment handled together.
              </p>
            </div>

            <div className="liquid-glass rounded-2xl p-4 sm:p-5 hover:border-white/[0.18] transition-colors">
              <div className="flex items-center gap-2 text-white text-sm font-semibold mb-1">
                <Code className="w-4 h-4 text-[#FF1738]" />
                <span>100% Custom Code</span>
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Custom Next.js & React architectures. Zero template bloat.
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1 liquid-glass rounded-2xl p-4 sm:p-5 hover:border-white/[0.18] transition-colors">
              <div className="flex items-center gap-2 text-white text-sm font-semibold mb-1">
                <Sparkles className="w-4 h-4 text-[#FF1738]" />
                <span>5 Verified Live Builds</span>
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Gyms, clinics, salons, real estate, and pharmaceuticals.
              </p>
            </div>
          </motion.div>

          {/* Landing Page Trust & Authority Strip (Reference 1 & 4) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs font-mono text-zinc-400"
          >
            <span className="text-zinc-500 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Active live deployments:</span>
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { name: "Vikings Gym & Spa", href: "https://vikingsgym.in" },
                { name: "BBC Pro Gym", href: "https://bbcpro.vercel.app" },
                { name: "Real Looks Salon", href: "https://reallooks.vercel.app" },
                { name: "Mars Remedies", href: "https://marsremedies.co.in" },
                { name: "BB Real Estate", href: "https://bbrealestate.vercel.app" },
              ].map((client) => (
                <a
                  key={client.name}
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md liquid-glass hover:bg-white/[0.08] hover:border-[#FF1738]/40 text-zinc-300 hover:text-white transition-colors"
                >
                  {client.name} ↗
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
