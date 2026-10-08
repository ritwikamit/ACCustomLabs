import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden border-t border-white/[0.04]">
      {/* Background glow and subtle accent arc */}
      <div className="absolute inset-0 red-bottom-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-b from-[#111114] to-[#0B0B0D] border border-white/[0.1] rounded-3xl p-8 sm:p-14 lg:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl">
          {/* Top red line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#FF1738] to-transparent" />

          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
            <span>[ READY TO BUILD? ]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight font-[family-name:var(--font-display)]">
            Have an ambitious project in mind? <br className="hidden sm:inline" />
            <span className="text-[#FF1738]">Let’s build it right.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Whether you need a new website, a custom web app, mobile software, or an SEO
            overhaul, we’ll help you clarify scope, budget, and delivery milestones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF1738] hover:bg-[#FF3350] active:scale-[0.98] text-white font-semibold text-base px-9 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#FF1738]/30 hover:shadow-[#FF1738]/45 border border-[#FF1738]/40"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-[#F7F7F7] font-medium text-base px-8 py-4 rounded-full transition-colors border border-white/[0.12]"
            >
              <span>Explore Verified Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
