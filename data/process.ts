export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tasks: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding your business goals and real constraints",
    description:
      "We begin with a focused conversation to understand what your business actually needs. We analyze your customer demographics, existing workflow bottlenecks, and specific functional requirements before writing a single line of code.",
    tasks: [
      "Target customer & market review",
      "Feature requirements & scoping",
      "Technical feasibility check",
      "Transparent timeline & milestone planning",
    ],
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Architecture, data models, and user flows",
    description:
      "We produce a concrete technical blueprint. This defines the site structure, content hierarchy, API pathways, and data interactions so there are no surprises or scope creep during development.",
    tasks: [
      "Information architecture mapping",
      "Component & page inventory",
      "Database & integration planning",
      "Milestone roadmap confirmation",
    ],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "High-contrast UI/UX and bespoke design systems",
    description:
      "We design custom interfaces tailored specifically to your brand identity. Every layout is built mobile-first with clear typographic hierarchy, controlled contrast, and intentional microinteractions that guide users toward action.",
    tasks: [
      "High-fidelity responsive layouts",
      "Design tokens & color contrast checks",
      "Interactive clickable flows",
      "Direct founder review & iteration",
    ],
  },
  {
    number: "04",
    title: "Build",
    subtitle: "Custom frontend engineering and solid backends",
    description:
      "We translate designs into clean, typed, modular code using modern standards. No bloated page builders, no unstable generic themes. Only clean, maintainable engineering built for longevity.",
    tasks: [
      "Next.js / React / TypeScript codebases",
      "Responsive styling with Tailwind CSS",
      "Form validation & security checks",
      "Third-party API & webhook integrations",
    ],
  },
  {
    number: "05",
    title: "Test",
    subtitle: "Exhaustive QA across devices, speed, and security",
    description:
      "Before launch, we conduct thorough cross-device testing. We verify responsiveness from 320px mobile screens to 4K displays, test form edge cases, run accessibility checks, and verify security headers.",
    tasks: [
      "Cross-browser & mobile viewport testing",
      "Form validation & honeypot spam protection",
      "Lighthouse performance & Core Web Vitals audit",
      "Security headers & OWASP compliance check",
    ],
  },
  {
    number: "06",
    title: "Launch & Support",
    subtitle: "Vercel edge deployment, SEO verification, and ongoing care",
    description:
      "We handle the complete production deployment: domain DNS delegation, SSL provisioning, dynamic sitemap indexing, and search engine submission. Post-launch, we remain available for ongoing maintenance, updates, and expansions.",
    tasks: [
      "Production Vercel edge deployment",
      "Custom domain & SSL configuration",
      "Search Console & Sitemap submission",
      "Post-launch monitoring & support retainers",
    ],
  },
];
