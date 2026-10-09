"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function SelectedWork() {
  // 4 primary showcase projects matching the 7 / 5 / 5 / 7 alternate bento spans
  const showcaseProjects = projectsData.slice(0, 4);

  return (
    <section id="selected-works" className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="space-y-4 max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Selected Work
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight">
              Featured <span className="font-display italic text-[#89AACC]">systems</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg">
              A selection of verified digital platforms we have engineered, launched, and scaled, from strategic conception to production.
            </p>
          </div>

          {/* Desktop "View all work" button */}
          <Link
            href="/work"
            className="group relative hidden md:inline-flex items-center rounded-full text-xs font-medium px-5 py-2.5 text-text-primary transition-all duration-300 hover:scale-105 shrink-0"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 border border-stroke">
              <span>View all work</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>

        {/* Bento Grid: Alternate spans 7 / 5 / 5 / 7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {showcaseProjects.map((project, index) => {
            // Alternating 7 / 5 / 5 / 7 grid spans
            const colSpan =
              index === 0
                ? "md:col-span-7"
                : index === 1
                ? "md:col-span-5"
                : index === 2
                ? "md:col-span-5"
                : "md:col-span-7";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`group relative min-h-[380px] sm:min-h-[420px] rounded-3xl bg-surface border border-stroke overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:border-stroke/80 ${colSpan}`}
              >
                {/* Background Pattern / Architecture Preview Graphic */}
                <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-2 to-bg opacity-90 transition-transform duration-700 group-hover:scale-105" />

                {/* Halftone Overlay */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
                    backgroundSize: "6px 6px",
                  }}
                />

                {/* Technical Meta & Window Chrome */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="text-[11px] font-mono uppercase text-muted tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-text-primary transition-colors font-mono"
                  >
                    <span>{project.displayUrl}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Card Title & Content */}
                <div className="relative z-10 mt-auto pt-16">
                  <span className="text-xs text-muted uppercase tracking-widest font-mono block mb-2">
                    Case 0{index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-3">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2 max-w-md mb-4">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-stroke/40 border border-stroke text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Reveal Layer */}
                <div className="absolute inset-0 bg-bg/75 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 z-20 pointer-events-none">
                  {/* Hover label: pill with animated gradient border, white bg */}
                  <div className="relative group/pill inline-flex items-center rounded-full p-[1.5px] accent-gradient shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 hover:bg-neutral-100 transition-colors"
                    >
                      <span>View</span>
                      <span className="text-neutral-400">•</span>
                      <span className="font-display italic text-sm">{project.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile "View all work" fallback button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-medium px-5 py-3 rounded-full border border-stroke bg-surface text-text-primary"
          >
            <span>Explore All 5 Case Studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
