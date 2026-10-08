import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Globe, CheckCircle } from "lucide-react";

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 lg:py-32 bg-[#050505] relative border-t border-white/[0.04]">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-radial-[circle_at_center] from-[#FF1738]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF1738]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738]" />
              <span>[ 01 / VERIFIED LIVE CLIENT WORK ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-display)]">
              Real projects delivered for real businesses.
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              Explore live deployments across fitness centers, beauty salons, pharmaceutical distribution, and real estate.
              Every build is engineered from strategy through live deployment on modern cloud architecture.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#FF1738] transition-colors py-2 group shrink-0"
          >
            <span>Explore All 5 Case Studies</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Projects Bento Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <article
                key={project.id}
                className={`group flex flex-col justify-between bg-[#0B0B0D] border border-white/[0.08] hover:border-white/[0.22] rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF1738]/5 relative overflow-hidden ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0B0B0D] via-[#0E0E12] to-[#0B0B0D]" : ""
                }`}
              >
                {/* Subtle hover red corner flare */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-radial-[circle_at_top_right] from-[#FF1738]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Browser Mockup Window Chrome Bar */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#050505] rounded-xl border border-white/[0.06] text-xs font-mono">
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

                  {/* Header Tag Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-white/[0.04] text-[#D4D4D8] border border-white/[0.08]">
                      {project.category} · {project.industry}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      0{index + 1} / 05
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FF1738] transition-colors font-[family-name:var(--font-display)]">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Outcome Callout Box */}
                  <div className="bg-[#111114] border border-white/[0.06] rounded-2xl p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF1738]" />
                      <span>Production Impact</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#E4E4E7] leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[#A1A1AA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-white hover:text-[#FF1738] transition-colors"
                    aria-label={`Visit live website for ${project.name} at ${project.displayUrl}`}
                  >
                    <Globe className="w-3.5 h-3.5 text-[#FF1738]" />
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <Link
                    href={`/contact?project=${encodeURIComponent(project.name)}`}
                    className="text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    Request Similar Build →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
