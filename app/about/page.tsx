import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Terminal, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Studio & Philosophy",
  description:
    "AC Custom Labs is an independent, freelancer-led digital product studio with a working team. Hands-on design, full-stack engineering, and long-term delivery without corporate bloat.",
};

export default function AboutPage() {
  const principles = [
    {
      icon: Terminal,
      title: "Practitioners, Not Middlemen",
      description:
        "When you work with AC Custom Labs, you speak and plan directly with the engineers and designers building your application. There are no sales account managers translating requirements poorly or inflating scopes.",
    },
    {
      icon: ShieldCheck,
      title: "Codebases You Truly Own",
      description:
        "Every project is handed over with clean Git version control, zero vendor lock-in, and full documentation. We don't trap clients inside proprietary website builders or obfuscated themes.",
    },
    {
      icon: HeartHandshake,
      title: "Direct & Transparent Collaboration",
      description:
        "We are honest about what makes technical sense for your budget and timeline. If a simple, focused feature works better than an over-engineered complex system, we will explicitly recommend the simpler path.",
    },
    {
      icon: Sparkles,
      title: "Built to Expand Over Time",
      description:
        "We engineer digital assets for today that don't need to be scrapped tomorrow. Our modular Next.js and React setups are architected so that booking flows, databases, and APIs can be added directly whenever your business demands it.",
    },
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Page Header */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
          <span>[ ABOUT AC CUSTOM LABS ]</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
          Custom by design. <br />
          Built by practitioners.
        </h1>
        <p className="text-lg text-[#A1A1AA] leading-relaxed">
          AC Custom Labs is an independent digital development studio built around hands-on
          design, engineering, and reliable delivery. We are freelancer-led and supported by a
          dedicated working team.
        </p>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="space-y-6 text-base text-[#D4D4D8] leading-relaxed bg-[#0B0B0D] border border-white/[0.08] rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
            Our Studio Model
          </h2>
          <p>
            We don’t pretend to be a massive 500-person corporation, and we don’t want to be.
            Traditional agency models frequently trap clients between high markups, junior developers,
            and layers of non-technical management.
          </p>
          <p>
            AC Custom Labs was created to offer an alternative: an agile, senior-led product studio
            where every project receives direct, hands-on attention. Whether we are crafting a local
            business flagship for an Aurangabad gym or engineering an enterprise formulation catalog
            for a pharmaceutical brand, we bring the exact same standard of excellence.
          </p>
          <p className="text-sm text-[#A1A1AA]">
            Our philosophy is simple: <strong className="text-white">Red is the signal. Black is the environment. White is the information.</strong> We eliminate visual noise and technical fluff so your customers can discover, trust, and take action.
          </p>
        </div>

        {/* Operating Principles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
            How We Operate
          </h2>
          <div className="space-y-4">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-[#0B0B0D] border border-white/[0.06] rounded-2xl p-6 space-y-2.5 hover:border-white/[0.14] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FF1738]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white font-[family-name:var(--font-display)]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed pl-11">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom CTA Block */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#111114] to-[#0B0B0D] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
            Ready to discuss your project?
          </h3>
          <p className="text-sm text-[#A1A1AA]">
            Share your goals and we’ll prepare a structured project roadmap.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#FF1738] hover:bg-[#FF3350] text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg shadow-[#FF1738]/20 shrink-0"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
