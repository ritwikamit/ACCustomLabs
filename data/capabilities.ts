export interface CapabilityGroup {
  category: string;
  skills: string[];
  description: string;
}

export const capabilitiesData: CapabilityGroup[] = [
  {
    category: "Frontend Engineering",
    skills: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "HTML5 & Semantic Markup", "Responsive Design", "Microinteractions"],
    description: "Lightning-fast, accessible interfaces built with strict typing and modern component architecture.",
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Next.js Route Handlers", "REST APIs", "GraphQL", "Webhook Systems", "Server-Side Validation", "Zod"],
    description: "Clean server endpoints and integration layers engineered for stability and fast throughput.",
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "Prisma ORM", "Redis Caching", "Cloudflare R2 / S3", "ACID Transactions"],
    description: "Structured relational modeling and secure storage strategies designed for future data expansion.",
  },
  {
    category: "Mobile & Apps",
    skills: ["React Native", "Cross-Platform Mobile", "Progressive Web Apps (PWA)", "Offline Caching"],
    description: "Native-feeling mobile apps deployed to iOS and Android from unified codebases.",
  },
  {
    category: "Cloud & Deployment",
    skills: ["Vercel Edge Platform", "GitHub Actions CI/CD", "Cloudflare DNS & Caching", "SSL / TLS Encryption", "Domain Setup"],
    description: "Zero-friction deployment pipelines with edge delivery and automated preview environments.",
  },
  {
    category: "Search & Visibility",
    skills: ["Technical SEO", "Schema.org JSON-LD", "Answer Engine Optimization (AEO)", "Geo & Local SEO", "Core Web Vitals"],
    description: "Search foundations that help your business get found on Google, Apple Maps, and AI search tools.",
  },
];
