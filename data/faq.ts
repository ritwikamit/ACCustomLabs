export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Process" | "Pricing" | "Technical";
}

export const faqData: FAQItem[] = [
  {
    category: "General",
    question: "What makes AC Custom Labs different from a generic agency or marketplace freelancer?",
    answer:
      "We are an independent, freelancer-led studio with a dedicated working team. You work directly with technical practitioners who design, build, and deploy your project end-to-end. There are no sales account middlemen, no outsourced junior handoffs, and no fragile pre-bought WordPress templates. Every line of code is written custom for your business.",
  },
  {
    category: "General",
    question: "What types of businesses do you typically work with?",
    answer:
      "We serve ambitious businesses across the spectrum: local businesses (gyms, salons, clinics, restaurants, real estate firms), startups, solo founders, influencers, educational institutions, and professional service companies that require a serious, high-performing digital presence.",
  },
  {
    category: "Process",
    question: "How long does a typical website or app project take?",
    answer:
      "A focused marketing website or local business flagship typically takes 2 to 4 weeks from discovery to live deployment. Custom web applications, booking portals, or complex software systems generally take 4 to 8 weeks depending on scope and integrations. We establish clear milestone deliverables before kickoff.",
  },
  {
    category: "Technical",
    question: "Do you build on templates or WordPress?",
    answer:
      "No. We build custom applications and websites using modern engineering stacks like Next.js, React, TypeScript, and Tailwind CSS. This guarantees near-instant load speeds, superior security, zero plugin bloat, complete design freedom, and high search engine performance.",
  },
  {
    category: "Pricing",
    question: "How does project pricing work?",
    answer:
      "We provide transparent, milestone-based quotes based on the actual scope, features, and technical requirements of your project. We have successfully delivered projects ranging from focused local business websites (under ₹50,000) to custom multi-feature web systems and corporate portals. You can select your budget range when submitting your project inquiry.",
  },
  {
    category: "Technical",
    question: "Do you handle domain setup, hosting, and business emails?",
    answer:
      "Yes. We take care of the entire lifecycle: domain registration assistance, Cloudflare DNS configuration, Google Workspace or Zoho business email setup with SPF/DKIM authentication, SSL certificates, and production hosting deployment on Vercel.",
  },
  {
    category: "General",
    question: "What happens after the website or application is launched?",
    answer:
      "We don't disappear after launch. We offer ongoing maintenance retainers covering security audits, dependency updates, uptime monitoring, performance checks, and rapid bug triage to ensure your digital asset stays in peak condition.",
  },
];
