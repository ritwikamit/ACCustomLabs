import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, Check, Code, Layout, Globe, Search, RefreshCw, Smartphone, Database, Server, PenTool } from "lucide-react";

// Service icon mapping helper
const serviceIcons: Record<string, typeof Code> = {
  "web-development": Code,
  "web-design": Layout,
  "full-stack": Server,
  "seo-optimization": Search,
  "website-redesign": RefreshCw,
  "responsive-design": Smartphone,
  "landing-pages": Globe,
  "custom-software": Database,
  "maintenance-support": PenTool,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[#08080A] relative border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-radial-[circle_at_center] from-[#FF1738]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
            <span>[ 02 / COMPREHENSIVE CAPABILITIES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
            End-to-end digital capabilities under one roof.
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            We don’t just deliver static frontends. We handle your entire technical stack:
            from high-contrast UI/UX and custom TypeScript code to APIs, databases, SEO systems, and post-launch maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.id] || Code;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-[#0B0B0D] border border-white/[0.07] hover:border-white/[0.22] rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF1738]/5"
              >
                {/* Subtle Red Top Accent Indicator */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#FF1738] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-6">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF1738] group-hover:bg-[#FF1738] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xl font-mono font-bold text-zinc-500 group-hover:text-white transition-colors">
                        {service.number}
                      </span>
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="p-2 rounded-full bg-white/[0.03] group-hover:bg-[#FF1738] text-zinc-400 group-hover:text-white transition-colors"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F7F7F7] font-[family-name:var(--font-display)]">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-[#D4D4D8]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-white/[0.05] space-y-2.5">
                    <span className="text-[11px] font-mono uppercase text-zinc-500 block">
                      Core Deliverables
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                          <Check className="w-3.5 h-3.5 text-[#FF1738] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Impact Note */}
                <div className="mt-6 pt-4 border-t border-white/[0.05] text-[11px] font-mono text-zinc-400">
                  <span className="text-zinc-600 block text-[10px] uppercase">Business Impact</span>
                  <span className="text-zinc-300 italic">{service.businessImpact}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FF1738] transition-colors border border-white/[0.1] hover:border-[#FF1738]/40 rounded-full px-8 py-3.5 bg-[#0B0B0D]"
          >
            <span>View Complete Capabilities & Technical Deliverables</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
