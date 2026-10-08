import type { Metadata } from "next";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, Check, Code2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Review our complete range of digital services: custom websites, web applications, mobile apps, UI/UX design, database architecture, SEO, and cloud infrastructure.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Page Header */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
          <span>[ ALL SERVICES & DELIVERABLES ]</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
          Engineering capabilities tailored to your goals.
        </h1>
        <p className="text-lg text-[#A1A1AA] leading-relaxed">
          From the initial whiteboard architecture to production deployment and ongoing security retainers.
          We provide full-lifecycle technical execution for local businesses, founders, and growing companies.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-16">
        {servicesData.map((service) => (
          <div
            key={service.id}
            id={service.slug}
            className="scroll-mt-28 bg-[#0B0B0D] border border-white/[0.08] rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/[0.06] pb-8">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-bold text-[#FF1738]">
                    {service.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
                    Service Category
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-display)]">
                  {service.title}
                </h2>
                <p className="text-sm font-mono text-[#D4D4D8]">
                  {service.tagline}
                </p>
                <p className="text-base text-[#A1A1AA] leading-relaxed pt-1">
                  {service.description}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 bg-[#FF1738] hover:bg-[#FF3350] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-md shadow-[#FF1738]/20"
                >
                  <span>Discuss {service.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Deliverables & Capabilities Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Deliverables */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-[#71717A] block">
                  Concrete Deliverables
                </span>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <Check className="w-4 h-4 text-[#FF1738] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Capabilities */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-[#71717A] block">
                  Technical Standard
                </span>
                <ul className="space-y-2">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#D4D4D8]">
                      <Sparkles className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-[#71717A] block">
                  Core Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-[#111114] border border-white/[0.06] text-[#A1A1AA]"
                    >
                      <Code2 className="w-3 h-3 text-[#FF1738]" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
                <div className="pt-4 text-xs text-[#A1A1AA] italic">
                  Impact: {service.businessImpact}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
