import Link from "next/link";
import { ArrowUpRight, Code, Sparkles, CheckCircle2 } from "lucide-react";
import RetroGrid from "@/components/ui/RetroGrid";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-[#050505]">
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
          {/* Studio Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#FF1738] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-[#D4D4D8]">
              AC Custom Labs · Digital Product Studio
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-[family-name:var(--font-display)]">
            We build digital products{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F7F7F7] to-[#D4D4D8]">
              that work.
            </span>
          </h1>

          {/* Subtitle / Supporting copy */}
          <p className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Websites, applications, business software, and SEO systems engineered
            specifically around your business — not a generic template.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF1738] hover:bg-[#FF3350] active:scale-[0.98] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#FF1738]/25 hover:shadow-[#FF1738]/40 border border-[#FF1738]/40"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] active:scale-[0.98] text-[#F7F7F7] font-medium text-base px-8 py-4 rounded-full transition-all duration-200 border border-white/[0.12] hover:border-white/[0.25]"
            >
              <span>View Our Work</span>
            </Link>
          </div>

          {/* Key Value Anchor Indicators */}
          <div className="pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
            <div className="bg-[#0B0B0D]/80 border border-white/[0.06] rounded-xl p-4">
              <div className="flex items-center gap-2 text-white text-sm font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#FF1738]" />
                <span>Single Studio Team</span>
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Strategy, UI/UX, code, and deployment handled together.
              </p>
            </div>

            <div className="bg-[#0B0B0D]/80 border border-white/[0.06] rounded-xl p-4">
              <div className="flex items-center gap-2 text-white text-sm font-semibold mb-1">
                <Code className="w-4 h-4 text-[#FF1738]" />
                <span>100% Bespoke Code</span>
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Custom Next.js & React architectures. Zero template bloat.
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-[#0B0B0D]/80 border border-white/[0.06] rounded-xl p-4">
              <div className="flex items-center gap-2 text-white text-sm font-semibold mb-1">
                <Sparkles className="w-4 h-4 text-[#FF1738]" />
                <span>Verified Live Work</span>
              </div>
              <p className="text-xs text-[#A1A1AA]">
                Gyms, clinics, salons, real estate, and pharmaceuticals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
