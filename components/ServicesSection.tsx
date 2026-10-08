import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, Check } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#08080A] relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
            <span>[ 02 / COMPREHENSIVE SERVICES ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
            End-to-end digital capabilities under one roof.
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            We don’t just deliver static frontends. We handle your entire technical stack:
            from high-contrast design and custom code to server backends, SEO, and ongoing maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between bg-[#0B0B0D] border border-white/[0.06] hover:border-white/[0.18] rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle Red Top Accent Indicator */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FF1738] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                {/* Number & Action */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-bold text-[#FF1738]/80 group-hover:text-[#FF1738] transition-colors">
                    {service.number}
                  </span>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="p-2 rounded-full bg-white/[0.03] group-hover:bg-[#FF1738] text-white transition-colors"
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
                <div className="pt-3 border-t border-white/[0.04] space-y-2">
                  <span className="text-[11px] font-mono uppercase text-[#71717A] block">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
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
              <div className="mt-6 pt-4 border-t border-white/[0.05] text-[11px] text-[#A1A1AA] italic">
                {service.businessImpact}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FF1738] transition-colors border border-white/[0.1] hover:border-[#FF1738]/40 rounded-full px-6 py-3 bg-[#0B0B0D]"
          >
            <span>Explore In-Depth Service Breakdown & Deliverables</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
