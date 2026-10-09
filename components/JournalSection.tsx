"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

interface JournalEntry {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
}

const entries: JournalEntry[] = [
  {
    id: "nextjs-16-turbopack",
    title: "Next.js 16 App Router & Turbopack in Production Architecture",
    category: "Architecture",
    date: "Mar 2026",
    readTime: "5 min read",
  },
  {
    id: "custom-vs-templates",
    title: "Why Custom Code Outperforms Bloated Template Frameworks",
    category: "Engineering",
    date: "Feb 2026",
    readTime: "6 min read",
  },
  {
    id: "sub-second-booking",
    title: "Engineering Sub-Second Booking Workflows for Modern Gyms & Salons",
    category: "Performance",
    date: "Jan 2026",
    readTime: "4 min read",
  },
  {
    id: "technical-seo-schema",
    title: "Technical SEO & Semantic Schema Automation for Local Dominance",
    category: "Search Systems",
    date: "Dec 2025",
    readTime: "7 min read",
  },
];

export default function JournalSection() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header matching pattern */}
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
                Journal & Notes
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-text-primary tracking-tight">
              Recent <span className="font-display italic text-[#89AACC]">breakdowns</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg">
              Architectural decisions, performance benchmarks, and development methodologies from our real-world client builds.
            </p>
          </div>

          {/* Desktop "View all" button */}
          <Link
            href="/services"
            className="group relative hidden md:inline-flex items-center rounded-full text-xs font-medium px-5 py-2.5 text-text-primary transition-all duration-300 hover:scale-105 shrink-0"
          >
            <span className="absolute -inset-[1.5px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[0.5px]" />
            <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 border border-stroke">
              <span>View all notes</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>

        {/* 4 Horizontal Pills */}
        <div className="flex flex-col gap-4">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href="/services"
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 bg-surface/30 hover:bg-surface border border-stroke rounded-[28px] sm:rounded-full transition-all duration-300 hover:border-stroke/80"
              >
                {/* Left: Category Icon + Title */}
                <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-stroke/40 border border-stroke flex items-center justify-center shrink-0 text-text-primary group-hover:accent-gradient group-hover:text-black transition-colors duration-300">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-mono uppercase text-[#89AACC] tracking-wider">
                        {entry.category}
                      </span>
                      <span className="text-muted text-xs">•</span>
                      <span className="text-[11px] text-muted font-mono">{entry.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-medium text-text-primary truncate group-hover:text-white">
                      {entry.title}
                    </h3>
                  </div>
                </div>

                {/* Right: Read time & Arrow */}
                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 sm:pl-4">
                  <div className="inline-flex items-center gap-1.5 text-xs text-muted font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{entry.readTime}</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-stroke/30 border border-stroke flex items-center justify-center text-muted group-hover:text-text-primary group-hover:bg-stroke/60 transition-all duration-200 group-hover:translate-x-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
