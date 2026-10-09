"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { LandingPageFrame } from "@/src/shaders/landing-pages/LandingPageFrame";
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
    <div className="relative min-h-screen bg-[#05070a] text-[#dfe7e0] font-sans overflow-x-hidden pt-28 pb-24">
      {/* 3D Kyoto Temple Atmospheric WebGL Background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-50">
        <LandingPageFrame
          sourceUrl="/landing-pages/kage.html?shot=1"
          title="3D Atmospheric Background"
          backgroundCanvasSelector="#gl"
          backgroundVisualSelector="#vignette, #grain"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 space-y-20">
        {/* Section Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="sec-head">
            <span className="k">
              <b>01</b> // Verified Work Archive
            </span>
            <span className="jp text-xs tracking-[0.3em] text-[#78837c]">実績 // 01</span>
            <i className="rule" />
          </div>

          <h1 className="display text-3xl sm:text-5xl lg:text-6xl text-[#dfe7e0]">
            Production systems built for category leaders.
          </h1>

          <p className="text-sm sm:text-base text-[#aab4ad] font-light leading-relaxed">
            Every project below is a live, verified deployment engineered by AC Custom Labs.
            We develop custom software, responsive web platforms, and mobile apps engineered from clean foundations.
          </p>

          {/* Minimalist Filter Chips */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-medium tracking-[0.16em] uppercase px-4 py-2 rounded-full transition-all border ${
                  activeCategory === cat
                    ? "bg-[#dfe7e0] text-[#05070a] border-[#dfe7e0] shadow-md shadow-white/10"
                    : "bg-[#0a0e12]/60 text-[#aab4ad] hover:text-[#dfe7e0] border-white/[0.09] hover:border-white/[0.2]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Plates Gallery */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const indexStr = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.id}
                id={project.slug}
                className="group relative bg-[#0a0e12]/75 backdrop-blur-xl border border-white/[0.1] hover:border-white/[0.22] rounded-2xl p-6 sm:p-10 transition-all duration-500 shadow-2xl shadow-black/70"
              >
                {/* Browser Viewport Chrome Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.07]">
                  <div className="flex items-center gap-3">
                    <span className="num text-xl sm:text-2xl text-[#aab4ad]">
                      {indexStr}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#78837c] font-mono">
                      {project.displayUrl || project.liveUrl.replace(/^https?:\/\//, "")}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e0231c] animate-pulse" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#dfe7e0] font-mono">
                      Live in Production
                    </span>
                  </div>
                </div>

                {/* Main Content Layout */}
                <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Story & Metrics */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <div className="eyebrow mb-2">
                        {project.category} // {project.industry}
                      </div>
                      <h2 className="display text-2xl sm:text-3xl lg:text-4xl text-[#dfe7e0]">
                        {project.name}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#aab4ad] font-light leading-relaxed">
                      {project.tagline}
                    </p>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-[#aab4ad] font-light leading-relaxed space-y-2">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#dfe7e0] font-medium">
                        Architecture & Solution
                      </div>
                      <p>{project.solution}</p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[#aab4ad]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Actions */}
                  <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end justify-between self-stretch pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrowlink"
                    >
                      <span>Visit Live Platform</span>
                      <span className="ar">
                        <svg viewBox="0 0 14 14" fill="none">
                          <path
                            d="M3 11 11 3M5 3h6v6"
                            stroke="#dfe7e0"
                            strokeWidth="1.3"
                          />
                        </svg>
                      </span>
                    </a>

                    <Link
                      href={`/enquire?project=${encodeURIComponent(project.name)}`}
                      className="nav-enquire mt-4"
                    >
                      <span className="orb" aria-hidden="true" />
                      <span>Build Similar</span>
                      <svg viewBox="0 0 14 14" fill="none">
                        <path
                          d="M3 11 11 3M5 3h6v6"
                          stroke="currentColor"
                          strokeWidth="1.3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Chapter IV Closing CTA */}
        <section className="pt-16 pb-8 border-t border-white/[0.08] space-y-6">
          <div className="eyebrow">04 — Project Initiation</div>
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-[#dfe7e0]">
            Have a project in mind? Let&apos;s build it.
          </h2>
          <p className="text-sm sm:text-base text-[#aab4ad] font-light max-w-2xl leading-relaxed">
            Connect directly with our lead developer on WhatsApp for project scoping, quotes, and delivery timelines. We respond within a few hours.
          </p>
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Link href="/enquire" className="cta">
              <i />
              <span>Start Project Enquiry (/enquire)</span>
              <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
                <path d="M3 11 11 3M5 3h6v6" stroke="#05070a" strokeWidth="1.3" />
              </svg>
            </Link>

            <a href="tel:+919113445763" className="arrowlink">
              <span>Call +91 9113445763</span>
              <span className="ar">
                <svg viewBox="0 0 14 14" fill="none">
                  <path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" strokeWidth="1.3" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
