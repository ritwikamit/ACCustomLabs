import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Globe } from "lucide-react";

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 lg:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
              <span>[ 01 / SELECTED WORK ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
              Real projects delivered for real businesses.
            </h2>
            <p className="text-base text-[#A1A1AA]">
              Explore live deployments across fitness, beauty, pharmaceuticals, and real estate.
              Every project is engineered custom from strategy to launch.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FF1738] transition-colors py-2 group"
          >
            <span>View All Case Studies</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className={`group flex flex-col justify-between bg-[#0B0B0D] border border-white/[0.08] hover:border-[#FF1738]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF1738]/5 ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="space-y-6">
                {/* Header Tag Bar */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-white/[0.04] text-[#D4D4D8] border border-white/[0.08]">
                    {project.category} · {project.industry}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#10B981] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FF1738] transition-colors font-[family-name:var(--font-display)]">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Outcome Callout */}
                <div className="bg-[#111114] border border-white/[0.05] rounded-xl p-4 text-xs text-[#D4D4D8] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A1A1AA] block">
                    Execution Outcome
                  </span>
                  <p className="leading-relaxed">{project.outcome}</p>
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] text-[#A1A1AA]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-white hover:text-[#FF1738] transition-colors"
                  aria-label={`Visit live website for ${project.name} at ${project.displayUrl}`}
                >
                  <Globe className="w-3.5 h-3.5 text-[#FF1738]" />
                  <span>{project.displayUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>

                <Link
                  href="/contact"
                  className="text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors"
                >
                  Build Similar →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
