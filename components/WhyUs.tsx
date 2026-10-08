import { Layers, Shield, Wrench, Users, Expand, PhoneCall } from "lucide-react";

export default function WhyUs() {
  const differentiators = [
    {
      icon: Layers,
      title: "One Team Across the Entire Lifecycle",
      description:
        "No handoff friction between disconnected designers, offshore coders, and hosting agencies. Strategy, UI/UX, full-stack code, SEO, and cloud deployment are delivered by one cohesive team.",
    },
    {
      icon: Wrench,
      title: "100% Custom Engineering, Zero Bloated Themes",
      description:
        "We never sell off-the-shelf WordPress themes or slow website-builder templates. Every product is engineered cleanly with modern Next.js, React, and TypeScript for long-term speed and reliability.",
    },
    {
      icon: Users,
      title: "Direct Access to Technical Practitioners",
      description:
        "You talk directly with the people building your system. No account-manager telephone games, no bureaucratic delay, and no jargon designed to obscure timelines.",
    },
    {
      icon: Expand,
      title: "Architected for Future Business Expansion",
      description:
        "Whether you start with a lean marketing site or a targeted booking utility, our modular architecture is prepared to absorb future backends, client portals, databases, and APIs without redesign.",
    },
    {
      icon: Shield,
      title: "Modern Security & Production Standards",
      description:
        "Strict Content Security Policies, hardened form inputs, sanitized endpoints, and verified DNS configurations keep your company infrastructure protected from day one.",
    },
    {
      icon: PhoneCall,
      title: "Reliable Post-Launch Support",
      description:
        "We don't vanish after release. We offer structured maintenance retainers covering security audits, dependency updates, uptime monitoring, and rapid bug triage.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#050505] relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
            <span>[ 03 / STUDIO ADVANTAGE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
            Why ambitious businesses partner with AC Custom Labs.
          </h2>
          <p className="text-base text-[#A1A1AA]">
            We operate as an agile, dedicated digital product studio. We prioritize clean technical
            execution, transparent timelines, and measurable business outcomes over generic agency fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#0B0B0D] border border-white/[0.06] rounded-2xl p-6 sm:p-8 space-y-4 hover:border-white/[0.14] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FF1738]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-display)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
