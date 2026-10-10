import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Terminal, Globe, Dumbbell, Stethoscope, Scissors, Building2, Sparkles, Shield, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Portfolio & Engineering Archive",
  description:
    "Explore production digital products, AI tools, custom web platforms, and applications built by AC Custom Labs. Featuring CL8 Terminal AI, Vikings Gym, Mars Remedies, and more.",
};

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  description: string;
  highlights: string[];
  stack: string[];
  image: string;
  href: string;
  isFeatured?: boolean;
  year: string;
}

const projects: Project[] = [
  {
    id: "cl8",
    title: "CL8 — Terminal AI Assistant",
    subtitle: "Autonomous CLI Intelligence & Local LLMs",
    category: "AI & CLI Tooling",
    tag: "FEATURED AI SYSTEM",
    description:
      "AI that ships directly with your terminal. One command, your whole development stack. Instant command-line companion with zero mental context-switching, multi-provider model routing (Local Ollama, Google Gemini, OpenAI), deep codebase intelligence, git automation, and autonomous task execution.",
    highlights: [
      "Built by Amit Chauhan with high-performance TypeScript CLI runtime",
      "Multi-provider LLM support: local offline Ollama, Gemini 1.5, GPT-4o",
      "Repository-wide code analysis, git branch diffs & desktop task automation",
      "Zero telemetry leakage with strict local-first privacy mode",
    ],
    stack: ["TypeScript", "Node.js", "Ollama", "Gemini API", "OpenAI", "Vite", "Tailwind CSS"],
    image: "/projects/cl8.jpg",
    href: "https://cl8.vercel.app",
    isFeatured: true,
    year: "2026",
  },
  {
    id: "vikings-gym",
    title: "Vikings Gym & Spa",
    subtitle: "High-Performance Luxury Fitness Experience",
    category: "Web & Booking",
    tag: "FITNESS & WELLNESS",
    description:
      "A dark-aesthetic digital platform built for an elite fitness and wellness club. Features dynamic membership tier selectors, interactive trainer rosters, class scheduling, and streamlined instant WhatsApp booking pipelines.",
    highlights: [
      "Edge-rendered Next.js architecture with instant sub-100ms page transitions",
      "Integrated WhatsApp direct lead generation and membership checkout flow",
      "Optimized media pipeline with responsive WebP image delivery",
      "Flawless 100/100 Core Web Vitals performance score",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "WhatsApp Business API"],
    image: "/projects/vikings-gym.webp",
    href: "https://vikingsgym.in",
    isFeatured: true,
    year: "2025",
  },
  {
    id: "mars-remedies",
    title: "Mars Remedies",
    subtitle: "Institutional Healthcare & Pharma Platform",
    category: "Enterprise & Healthcare",
    tag: "HEALTHCARE & PHARMA",
    description:
      "Corporate pharmaceutical digital portal engineered for institutional credibility. Features an extensive certified manufacturing catalog, regulatory documentation downloads, and a secure B2B distributor procurement pipeline.",
    highlights: [
      "Enterprise product catalog categorized by therapeutic classification",
      "Global regulatory compliance documentation and ISO/GMP certificate showcase",
      "Direct international B2B buyer inquiries with CRM integration",
      "Technical SEO & AEO structured data schemas for high search discovery",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AEO / Schema.org", "Cloudflare CDN"],
    image: "/projects/mars-remedies.webp",
    href: "https://marsremedies.co.in",
    isFeatured: true,
    year: "2025",
  },
  {
    id: "bbc-pro-gym",
    title: "BBC Pro Gym",
    subtitle: "Athletic Conditioning & Training Hub",
    category: "Fitness & Lifestyle",
    tag: "ATHLETIC CLUB",
    description:
      "High-energy strength training gym web portal designed to maximize membership conversions. Includes interactive workout programs, facility equipment breakdown, coach biographies, and localized geo-targeted search presence.",
    highlights: [
      "Aggressive contrast athletic aesthetic with ultra-responsive mobile UX",
      "Lead capture inquiry system connected to direct sales channels",
      "Local Google Search Console indexing and local business ranking setup",
      "Fast CDN distribution for instant loading on cellular networks",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Local SEO", "Vercel Edge"],
    image: "/projects/bbc-pro.webp",
    href: "https://bbcpro.vercel.app",
    year: "2025",
  },
  {
    id: "real-looks",
    title: "Real Looks Unisex Salon",
    subtitle: "Modern Beauty & Salon Appointment Experience",
    category: "Lifestyle & Booking",
    tag: "BEAUTY & SALON",
    description:
      "Contemporary beauty salon digital portal crafted with elegant typography and clean visuals. Showcases categorized styling packages, bridal portfolios, verified client reviews, and direct booking coordination.",
    highlights: [
      "Clean price menu with categorical styling and grooming filters",
      "High-resolution transformation gallery with optimized asset loading",
      "Mobile-first WhatsApp appointment booking button with prefilled services",
      "Search experience optimization (SXO) targeting local salon queries",
    ],
    stack: ["Next.js", "Tailwind CSS", "SXO", "Vercel", "WhatsApp API"],
    image: "/projects/real-looks.webp",
    href: "https://reallooks.vercel.app",
    year: "2025",
  },
  {
    id: "bb-real-estate",
    title: "BB Real Estate",
    subtitle: "Commercial & Residential Property Showcase",
    category: "Real Estate & Commercial",
    tag: "LUXURY PROPERTY",
    description:
      "Premium real estate portal engineered for residential estates and commercial developments. Features architectural floor plans, high-res interactive galleries, neighborhood telemetry, and direct broker contact channels.",
    highlights: [
      "High-resolution property layout viewers and panoramic visual tours",
      "Categorized search filters for residential plots, villas, and commercial spaces",
      "Direct verified broker inquiries with zero friction",
      "Performance-tuned asset delivery with edge caching",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel Edge"],
    image: "/projects/bb-real-estate.webp",
    href: "https://bbrealestate.vercel.app",
    year: "2025",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#05070a] text-[#dfe7e0] pt-28 pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Breadcrumb & Title */}
        <div className="space-y-6 border-b border-white/[0.08] pb-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 text-[10.5px] font-mono tracking-[0.24em] uppercase text-[#38bdf8]">
              <span className="w-1.5 h-1.5 bg-[#38bdf8]"></span>
              <span>PORTFOLIO ARCHIVE // 01</span>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#78837c] hover:text-[#dfe7e0] transition-colors"
            >
              <span>← Back to 3D Temple Experience</span>
            </Link>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#dfe7e0]">
              Engineered Works <br />
              <span className="font-normal text-white">&amp; Client Systems.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#aab4ad] font-light leading-relaxed">
              A curated archive of production web applications, autonomous AI tools, high-conversion commercial portals, and enterprise digital solutions delivered by the AC Custom Labs engineering team.
            </p>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
              <b className="block text-2xl font-light text-white">6+</b>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#78837c]">
                Production Ships
              </span>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
              <b className="block text-2xl font-light text-[#38bdf8]">100%</b>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#78837c]">
                Client Codebase Ownership
              </span>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
              <b className="block text-2xl font-light text-white">&lt;100ms</b>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#78837c]">
                Avg Edge TTFB Latency
              </span>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/[0.06]">
              <b className="block text-2xl font-light text-[#ff5a3c]">0</b>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#78837c]">
                Vendor Lock-In Bloat
              </span>
            </div>
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="space-y-12">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#dfe7e0]">
              All Production Deployments ({projects.length})
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#78837c]">
              Chronological 2025–2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((proj) => (
              <article
                key={proj.id}
                className="group relative flex flex-col justify-between bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-[#38bdf8]/50 transition-all duration-300"
              >
                {/* Project Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080b0e] border-b border-white/[0.08]">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-[0.18em] bg-[#05070a]/85 border border-white/[0.12] text-[#38bdf8] backdrop-blur-md">
                      {proj.tag}
                    </span>
                    <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-[0.18em] bg-[#05070a]/85 border border-white/[0.12] text-[#aab4ad] backdrop-blur-md">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#78837c]">
                          {proj.category}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-light text-white group-hover:text-[#38bdf8] transition-colors mt-1">
                          {proj.title}
                        </h2>
                        <p className="text-xs text-[#aab4ad] font-mono tracking-wide mt-0.5">
                          {proj.subtitle}
                        </p>
                      </div>
                      <a
                        href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-10 h-10 border border-white/[0.15] group-hover:border-[#38bdf8] bg-white/[0.02] flex items-center justify-center transition-all group-hover:bg-[#38bdf8] text-[#dfe7e0] group-hover:text-[#05070a]"
                        aria-label={`Open live site for ${proj.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>

                    <p className="text-xs sm:text-sm text-[#aab4ad] font-light leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-white/[0.05]">
                      <span className="text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#78837c]">
                        Engineering Specifications:
                      </span>
                      <ul className="space-y-1 text-xs text-[#aab4ad] font-light">
                        {proj.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#38bdf8] font-mono text-[10px] mt-0.5">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Direct Action */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 text-[10px] font-mono text-[#aab4ad] bg-white/[0.04] border border-white/[0.06]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <a
                      href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.16em] uppercase text-[#38bdf8] hover:underline"
                    >
                      <span>Launch Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Initiation Callout */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.24em] uppercase text-[#38bdf8]">
              START A PROJECT WITH US
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Have an ambitious vision or legacy rewrite?
            </h3>
            <p className="text-xs sm:text-sm text-[#aab4ad] font-light leading-relaxed">
              We engineer custom software systems, Next.js web applications, mobile apps, and high-visibility search solutions with fixed milestones and zero corporate bloat.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/919113445763?text=Hi%20AC%20Custom%20Labs%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#38bdf8] text-[#05070a] font-mono text-xs uppercase tracking-[0.16em] font-semibold text-center hover:bg-white transition-colors"
            >
              Direct WhatsApp Briefing
            </a>
            <Link
              href="/#eternity"
              className="px-6 py-3.5 bg-transparent border border-white/[0.2] text-[#dfe7e0] font-mono text-xs uppercase tracking-[0.16em] text-center hover:bg-white/[0.06] transition-colors"
            >
              Protocol Intake Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
