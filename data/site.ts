export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: "AC Custom Labs",
  legalName: "AC Custom Labs Digital Product Studio",
  shortName: "AC Custom Labs",
  tagline: "We build digital products that work.",
  description:
    "AC Custom Labs is an independent, freelancer-led digital product studio with a working team. We design, develop, deploy, and optimize custom websites, web apps, mobile apps, business software, and SEO systems for ambitious businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://accustomlabs.com",
  ogImage: "/brand/logo.png",
  logo: "/brand/logo.png",
  primaryCta: {
    label: "Start a Project",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Our Work",
    href: "/#gate",
  },
  contact: {
    email: "accustomlabs@gmail.com",
    phone: "+91 9113445763",
    whatsapp: "https://wa.me/919113445763?text=Hi%20AC%20Custom%20Labs%2C%20I%20would%20like%20to%20enquire%20about%20a%20project.",
    location: "India (Serving Global & Local Clients)",
    github: "https://github.com/ritwikamit/ACCustomLabs",
    availability: "Accepting select client projects for this quarter",
  },
  navLinks: [
    { label: "Services", href: "/#pathways" },
    { label: "Work", href: "/#gate" },
    { label: "Disciplines", href: "/#lessons" },
    { label: "Contact", href: "/#eternity" },
  ] as NavLink[],
  socials: [
    { name: "GitHub", href: "https://github.com/ritwikamit/ACCustomLabs" },
    { name: "LinkedIn", href: "https://linkedin.com/company/accustomlabs" },
    { name: "Twitter/X", href: "https://x.com/accustomlabs" },
  ],
};
