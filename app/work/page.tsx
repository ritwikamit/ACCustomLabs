"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ExternalLink, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";

const CATEGORIES = ["All", "Fitness", "Healthcare", "Beauty", "Real Estate"] as const;

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
          <span>[ VERIFIED CASE STUDIES & LIVE DEPLOYMENTS ]</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
          Real products built for ambitious businesses.
        </h1>
        <p className="text-lg text-[#A1A1AA] leading-relaxed">
          Every project below is a live, verified deployment designed, built, or optimized by our team.
          We present authentic deliverables and engineering outcomes without fabricated metrics or fake reviews.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 pt-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-full transition-all border ${
                activeCategory === cat
                  ? "bg-[#FF1738] text-white border-[#FF1738] shadow-md shadow-[#FF1738]/20"
                  : "bg-white/[0.03] text-[#A1A1AA] hover:text-white border-white/[0.08] hover:border-white/[0.18]"
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

                <Link
                  href={`/contact?project=${encodeURIComponent(project.name)}`}
                  className="inline-flex items-center gap-2 bg-white/[0.03] hover:bg-white/[0.08] text-white text-sm font-medium px-5 py-3 rounded-full transition-colors border border-white/[0.1]"
                >
                  <span>Build Similar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Case Study Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Challenge & Solution */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#FF1738]">
                    The Challenge
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#10B981]">
                    Our Approach & Solution
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-white">
                    Key Features Delivered
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF1738] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Services Delivered */}
              <div className="space-y-6 bg-[#111114] border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-[#71717A] block">
                      Services Delivered
                    </span>
                    <ul className="space-y-1.5">
                      {project.services.map((s) => (
                        <li key={s} className="text-xs text-[#F7F7F7] font-medium">
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-[#71717A] block">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-[#D4D4D8] border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.05] text-xs text-[#A1A1AA]">
                  <span className="text-white font-medium block mb-1">Business Outcome:</span>
                  <p className="italic">{project.outcome}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
