"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ExternalLink, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Lenis from "lenis";

const CATEGORIES = ["All", "Fitness", "Healthcare", "Beauty", "Real Estate"] as const;

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.25,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#05070a] text-[#dfe7e0] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738] animate-pulse" />
            <span>VERIFIED CASE STUDIES & PRODUCTION DEPLOYMENTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#dfe7e0] font-[family-name:var(--font-display)]">
            Production systems built for category leaders.
          </h1>
          <p className="text-lg text-[#9aa5a0] leading-relaxed">
            Every project below is a live, verified deployment engineered by AC Custom Labs.
            We develop custom software, responsive web platforms, and mobile apps engineered from clean foundations.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://wa.me/919113445763?text=Hi%20AC%20Custom%20Labs%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e0231c] hover:bg-[#ff332a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-[#e0231c]/25 hover:scale-105"
            >
              <span>Enquire on WhatsApp (+91 9113445763)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-[#dfe7e0] text-sm font-medium px-5 py-3 rounded-full transition-all border border-white/[0.1]"
            >
              <span>← Back to Interactive 3D World</span>
            </Link>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 pt-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium px-4 py-2 rounded-full transition-all border ${
                  activeCategory === cat
                    ? "bg-[#e0231c] text-white border-[#e0231c] shadow-md shadow-[#e0231c]/25"
                    : "bg-white/[0.03] text-[#9aa5a0] hover:text-[#dfe7e0] border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

      {/* Case Studies Detailed Cards */}
      <div className="space-y-16">
        {filteredProjects.map((project, index) => (
          <article
            key={project.id}
            id={project.slug}
            className="scroll-mt-28 bg-[#0B0B0D] border border-white/[0.08] rounded-3xl p-8 sm:p-12 space-y-10 relative overflow-hidden"
          >
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/[0.06] pb-8">
              <div className="space-y-3 max-w-2xl">
                {/* Browser Mockup Window Chrome Bar */}
                <div className="flex items-center gap-2 px-3 py-2 bg-[#050505] rounded-xl border border-white/[0.06] text-xs font-mono max-w-md">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>
                  <div className="flex-1 mx-2 px-3 py-0.5 bg-white/[0.03] rounded-md text-[11px] text-zinc-400 truncate text-center font-mono">
                    https://{project.displayUrl}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 shrink-0 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#D4D4D8]">
                    0{index + 1} / {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#A1A1AA]">
                    {project.industry}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
                  {project.name}
                </h2>
                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF1738] hover:bg-[#FF3350] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-md shadow-[#FF1738]/20"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit {project.displayUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/919113445763?text=${encodeURIComponent(
                    `Hi AC Custom Labs, I would like to build a custom solution similar to ${project.name} (${project.displayUrl}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-[#dfe7e0] text-sm font-medium px-5 py-3 rounded-full transition-all border border-white/[0.1]"
                >
                  <span>Enquire Similar Build</span>
                  <ArrowUpRight className="w-4 h-4 text-[#e0231c]" />
                </a>
              </div>
            </div>

            {/* Case Study Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Challenge & Solution */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#e0231c]">
                    The Challenge
                  </h3>
                  <p className="text-sm text-[#9aa5a0] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Our Approach & Solution
                  </h3>
                  <p className="text-sm text-[#9aa5a0] leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#dfe7e0]">
                    Key Features Delivered
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-[#b4bfb7]">
                        <CheckCircle2 className="w-4 h-4 text-[#e0231c] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Services Delivered */}
              <div className="space-y-6 bg-[#06090c] border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-[#78837c] block">
                      Services Delivered
                    </span>
                    <ul className="space-y-1.5">
                      {project.services.map((s) => (
                        <li key={s} className="text-xs text-[#dfe7e0] font-medium">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-[#78837c] block">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-[#b4bfb7] border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-xs text-[#9aa5a0]">
                  <span className="text-[#dfe7e0] font-medium block mb-1">Business Outcome:</span>
                  <p className="italic">{project.outcome}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Agency Bottom CTA Section */}
      <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0a0e12] to-[#05070a] p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e0231c]">
          <span className="w-2 h-2 rounded-full bg-[#e0231c] animate-pulse" />
          <span>START A PROJECT ENGAGEMENT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#dfe7e0] max-w-2xl mx-auto">
          Ready to engineer your next software, website, or mobile app?
        </h2>
        <p className="text-[#9aa5a0] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Connect directly with our lead engineer on WhatsApp. Clear timelines, direct communication, and uncompromised execution.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/919113445763?text=Hi%20AC%20Custom%20Labs%2C%20I%20would%20like%20to%20enquire%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e0231c] hover:bg-[#ff332a] text-white text-sm font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-[#e0231c]/25 hover:scale-105"
          >
            <span>WhatsApp Enquiry (+91 9113445763)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+919113445763"
            className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-[#dfe7e0] text-sm font-medium px-6 py-4 rounded-full transition-all border border-white/[0.1]"
          >
            <span>Call +91 9113445763</span>
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white/[0.02] hover:bg-white/[0.06] text-[#9aa5a0] hover:text-[#dfe7e0] text-sm font-medium px-6 py-4 rounded-full transition-all border border-white/[0.06]"
          >
            <span>← Back to 3D World</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
}
