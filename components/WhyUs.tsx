import { Layers, Shield, Wrench, Users, Expand, PhoneCall, Check, Zap, Terminal, Lock } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-[#050505] relative border-t border-white/[0.04]">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-[circle_at_center] from-[#FF1738]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
            <span>[ 03 / STUDIO ADVANTAGE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
            Why ambitious businesses partner with AC Custom Labs.
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            We operate as an agile, dedicated digital product studio. We prioritize clean technical
            execution, transparent timelines, and measurable business outcomes over generic agency fluff.
          </p>
        </div>

        {/* Bento Grid Architecture (Inspired by 21st.dev Component 26901 & UI Pro Max Bento Guidelines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Wide Col-Span 2 - Full Lifecycle */}
          <div className="lg:col-span-2 group relative overflow-hidden liquid-glass hover:border-white/[0.2] rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF1738]/5 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial-[circle_at_top_right] from-[#FF1738]/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF1738]">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">[ 01 / WORKFLOW ]</span>
              </div>

              <div className="space-y-3 max-w-xl">
                <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                  One cohesive team across the entire product lifecycle
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  No handoff friction between disconnected designers, offshore coders, and third-party hosting firms.
                  Strategy, custom UI/UX, full-stack implementation, SEO, and cloud deployment are delivered by one accountable studio team.
                </p>
              </div>

              {/* Visual Pipeline Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-mono">
                {["01 Discovery", "02 UX / UI", "03 Custom Code", "04 SEO Hardening", "05 Vercel Launch"].map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111114] border border-white/[0.06] text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
                    <span>{step}</span>
                    {idx < 4 && <span className="text-zinc-600 hidden sm:inline ml-1">→</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center gap-3 text-xs text-zinc-400">
              <Zap className="w-4 h-4 text-[#FF1738]" />
              <span>Zero communication silos · Rapid delivery cycles · Direct accountability</span>
            </div>
          </div>

          {/* Card 2: 100% Custom Code */}
          <div className="group relative overflow-hidden liquid-glass hover:border-white/[0.2] rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF1738]/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF1738]">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">[ 02 / CODE ]</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                  100% Custom Code, Zero Bloat
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  We never resell pre-made WordPress themes, sluggish builders, or bloated plugins. Every line is written by our team with modern Next.js and TypeScript.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#111114] border border-white/[0.06] font-mono text-xs text-zinc-300 space-y-2">
                <div className="flex justify-between items-center text-[11px] text-zinc-500">
                  <span>METRIC</span>
                  <span className="text-[#FF1738]">AC CUSTOM LABS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Theme bloat:</span>
                  <span className="text-emerald-400">0 KB (Zero)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lighthouse Target:</span>
                  <span className="text-emerald-400">95 - 100</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-zinc-400 flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FF1738]" />
              <span>Full source ownership transfer</span>
            </div>
          </div>

          {/* Card 3: Direct Technical Access */}
          <div className="group relative overflow-hidden liquid-glass hover:border-white/[0.2] rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF1738]/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF1738]">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">[ 03 / ACCESS ]</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                  Direct Access to Builders
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  You speak directly with the engineers and designers building your system. No account manager telephone game or fabricated excuses.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-zinc-400 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#FF1738]" />
              <span>Clear technical conversations</span>
            </div>
          </div>

          {/* Card 4: Security & Production Standards */}
          <div className="group relative overflow-hidden liquid-glass hover:border-white/[0.2] rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF1738]/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF1738]">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">[ 04 / SECURITY ]</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                  Hardened Production Standards
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Strict Content Security Policy headers, sanitized server actions, honeypots, SSL A+ ratings, and verified DNS protect your reputation.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-zinc-400 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#FF1738]" />
              <span>Enterprise-grade security hygiene</span>
            </div>
          </div>

          {/* Card 5: Long-term Expansion & Post Launch */}
          <div className="group relative overflow-hidden liquid-glass hover:border-white/[0.2] rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF1738]/5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF1738]">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">[ 05 / RELIABILITY ]</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                  Ongoing Support & Evolution
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  We don’t vanish after release. We offer structured retainers covering uptime checks, framework upgrades, security audits, and continuous conversion optimization.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs text-zinc-400 flex items-center gap-2">
              <Expand className="w-4 h-4 text-[#FF1738]" />
              <span>Prepared for future SaaS / portals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
