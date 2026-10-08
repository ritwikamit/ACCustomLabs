export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  deliverables: string[];
  capabilities: string[];
  technologies: string[];
  businessImpact: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    number: "01",
    title: "Websites & Web Apps",
    slug: "websites-web-apps",
    tagline: "High-performance digital flagships engineered for conversions.",
    description:
      "We design and develop custom websites and web applications built from scratch around your specific business model. No generic, bloated templates. We focus on blazing load speeds, semantic architecture, responsive polish, and conversion pathways.",
    deliverables: [
      "Custom Marketing Websites",
      "Interactive Web Applications",
      "E-Commerce & Catalog Systems",
      "Dynamic Portals & Dashboards",
      "Landing Pages & Campaign Sites",
    ],
    capabilities: [
      "Clean semantic architecture",
      "Responsive across all screen sizes",
      "Vercel / Cloudflare edge optimization",
      "Accessible & keyboard navigable",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    businessImpact:
      "A fast, custom web presence turns casual visitors into qualified inquiries while reinforcing technical trust.",
  },
  {
    id: "02",
    number: "02",
    title: "Apps & Software",
    slug: "apps-software",
    tagline: "Custom business tools, mobile applications, and internal workflows.",
    description:
      "From cross-platform mobile apps for iOS and Android to internal operational software, CRM dashboards, and booking engines. We engineer dependable software that eliminates manual friction and scales alongside your team.",
    deliverables: [
      "iOS & Android Mobile Applications",
      "Custom Business Management Software",
      "Client Booking & Scheduling Portals",
      "Internal Dashboards & Lead Trackers",
      "ERP-style Operational Utilities",
    ],
    capabilities: [
      "Cross-platform codebases",
      "Offline-first sync capabilities",
      "Role-based access & admin interfaces",
      "Third-party API synchronization",
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Node.js", "REST/GraphQL"],
    businessImpact:
      "Automates repetitive processes, centralizes business records, and gives clients an effortless mobile gateway.",
  },
  {
    id: "03",
    number: "03",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    tagline: "Minimal, high-contrast interfaces designed for immediate clarity.",
    description:
      "Design at AC Custom Labs is rooted in structural precision, thoughtful contrast, and effortless interaction. We map intuitive user flows, build consistent design systems, and craft interfaces that feel premium, fast, and respectful of user attention.",
    deliverables: [
      "Product & App Wireframing",
      "High-Fidelity Component Systems",
      "Interactive Clickable Prototypes",
      "Design Tokens & Responsive Layouts",
      "Brand Collateral & Icon Assets",
    ],
    capabilities: [
      "Information architecture mapping",
      "WCAG 2.1 AA accessibility guidelines",
      "Microinteractions & deliberate motion",
      "Mobile-first breakpoint planning",
    ],
    technologies: ["Figma", "Design Tokens", "SVG Engineering", "Prototyping"],
    businessImpact:
      "Removes user confusion, highlights primary calls to action, and delivers an undeniable first impression.",
  },
  {
    id: "04",
    number: "04",
    title: "Backend & Databases",
    slug: "backend-databases",
    tagline: "Scalable APIs, secure data modeling, and robust integrations.",
    description:
      "The invisible backbone that powers your application. We design relational database schemas, implement secure REST and GraphQL endpoints, integrate third-party payment gateways, and enforce strict server-side validation.",
    deliverables: [
      "REST & GraphQL API Endpoints",
      "PostgreSQL / MySQL Schema Design",
      "Payment Gateway Integration",
      "Webhook Handlers & Background Jobs",
      "Serverless & Microservice Functions",
    ],
    capabilities: [
      "ACID compliance & indexing",
      "Rate-limiting & input sanitization",
      "Encrypted connection strings",
      "Automated backup strategies",
    ],
    technologies: ["PostgreSQL", "Node.js", "Prisma", "Redis", "Next.js Route Handlers"],
    businessImpact:
      "Ensures zero data loss, rock-solid transaction reliability, and instant response times under load.",
  },
  {
    id: "05",
    number: "05",
    title: "SEO, AEO & GEO",
    slug: "seo-aeo-geo",
    tagline: "Optimization for traditional search, AI engines, and local map discovery.",
    description:
      "Search is no longer just Google keywords. We prepare your site for traditional search engine rankings (SEO), Answer Engine Optimization (AEO for ChatGPT, Perplexity, Claude), and Generative Engine Optimization (GEO with rich local microdata).",
    deliverables: [
      "Technical On-Page & Schema.org JSON-LD",
      "Local Map SEO & Geo-Coordinate Signals",
      "Semantic Answer-Engine Formatting",
      "Dynamic XML Sitemaps & Robots Directives",
      "Core Web Vitals Optimization",
    ],
    capabilities: [
      "Structured data validation",
      "Answer-first content hierarchy",
      "Clean canonical routing",
      "Zero keyword stuffing or synthetic fluff",
    ],
    technologies: ["JSON-LD", "Open Graph", "Canonical Headers", "Google Search Console"],
    businessImpact:
      "Positions your company at the top of local customer queries and ensures AI synthesis tools cite your business accurately.",
  },
  {
    id: "06",
    number: "06",
    title: "AI & Automation",
    slug: "ai-automation",
    tagline: "Intelligent workflows, conversational agents, and LLM integration.",
    description:
      "We integrate practical, revenue-generating AI solutions into business workflows. Whether you need a 24/7 intelligent customer intake chatbot, automated document parsing, or LLM-powered inquiry qualification, we build solutions that actually work.",
    deliverables: [
      "Custom Knowledge AI Chatbots",
      "Automated Lead Qualification",
      "LLM & OpenAI / Anthropic Integrations",
      "Internal Document & Data Search",
      "CRM Workflow Automations",
    ],
    capabilities: [
      "Context-grounded RAG architectures",
      "Strict data privacy & sanitization",
      "Fallback pathways to human support",
      "Webhook-driven triggers",
    ],
    technologies: ["OpenAI API", "Anthropic", "LangChain", "Vector Embeddings", "Node.js"],
    businessImpact:
      "Reduces lead response times from hours to seconds and prevents qualified inquiries from slipping through the cracks.",
  },
  {
    id: "07",
    number: "07",
    title: "Deployment & Infrastructure",
    slug: "deployment-infrastructure",
    tagline: "Vercel, cloud hosting, automated CI/CD, and global edge delivery.",
    description:
      "We eliminate deployment bottlenecks. We configure production-grade continuous integration and continuous deployment pipelines, manage edge network routing, configure caching headers, and establish reliable zero-downtime releases.",
    deliverables: [
      "Production Vercel Deployments",
      "GitHub Actions CI/CD Pipelines",
      "Cloudflare DNS & Edge Caching",
      "Environment Secret Configuration",
      "Zero-Downtime Rollout Workflows",
    ],
    capabilities: [
      "Branch-preview environments",
      "Edge caching & asset compression",
      "Fast rollback mechanisms",
      "Monitoring & uptime ping setups",
    ],
    technologies: ["Vercel", "GitHub Actions", "Cloudflare", "Docker", "AWS"],
    businessImpact:
      "Guarantees fast global page delivery, automatic scaling during traffic spikes, and painless feature updates.",
  },
  {
    id: "08",
    number: "08",
    title: "Maintenance & Security",
    slug: "maintenance-security",
    tagline: "Ongoing monitoring, vulnerability patches, bug fixes, and audits.",
    description:
      "A digital product is an evolving business asset. We stay by your side after launch to perform scheduled security audits, apply dependency updates, patch vulnerabilities, inspect error logs, and keep all systems running smoothly.",
    deliverables: [
      "Scheduled Dependency & Security Audits",
      "Bug Triage & Rapid Fix Releases",
      "OWASP Vulnerability Hardening",
      "Uptime & Performance Monitoring",
      "Long-Term Technical Retainers",
    ],
    capabilities: [
      "Content Security Policy enforcement",
      "Regular npm package audits",
      "Proactive error logging & alerts",
      "Direct technical hotline access",
    ],
    technologies: ["OWASP Guidelines", "CSP", "Sentry", "npm audit", "GitHub Alerts"],
    businessImpact:
      "Protects client information, prevents costly downtime, and keeps your software performing at its launch-day standard.",
  },
  {
    id: "09",
    number: "09",
    title: "Domains & Business Infrastructure",
    slug: "domains-business-infrastructure",
    tagline: "Domain setup, DNS records, SSL certificates, and professional email.",
    description:
      "We handle the foundational technical plumbing so founders don't have to navigate registrar dashboards. From domain selection and DKIM/SPF/DMARC email authentication to SSL provisioning and transactional inbox configuration.",
    deliverables: [
      "Domain Acquisition & DNS Setup",
      "Professional Google Workspace / Zoho Email",
      "SPF, DKIM & DMARC Authentication",
      "SSL / TLS Certificate Provisioning",
      "Transactional Email Routing",
    ],
    capabilities: [
      "Zero email spoofing or spam folder delivery",
      "Clean nameserver delegation",
      "Automated SSL renewal verification",
      "Domain transfer & security locks",
    ],
    technologies: ["Cloudflare DNS", "Google Workspace", "Resend", "Let's Encrypt"],
    businessImpact:
      "Ensures business emails land straight in customer inboxes and protects your primary domain authority from day one.",
  },
];
