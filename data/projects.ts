export interface ProjectItem {
  id: string;
  name: string;
  slug: string;
  category: "Fitness" | "Healthcare" | "Beauty" | "Real Estate";
  industry: string;
  tagline: string;
  liveUrl: string;
  displayUrl: string;
  services: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  outcome: string;
  features: string[];
  highlight: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "vikings-gym",
    name: "Vikings Gym & Spa",
    slug: "vikings-gym",
    category: "Fitness",
    industry: "Health, Fitness & Wellness",
    tagline: "High-intensity fitness facility with Moroccan steam spa and dedicated training zones.",
    liveUrl: "https://vikingsgym.in",
    displayUrl: "vikingsgym.in",
    services: [
      "Custom Website Development",
      "Local SEO & Geo-Targeting",
      "UI/UX Design",
      "WhatsApp Lead Routing",
    ],
    technologies: ["Next.js / HTML5", "Tailwind CSS", "Schema.org LocalBusiness", "Responsive Web"],
    challenge:
      "A premium physical gym with high-end imported machines, Moroccan steam spa, and Zumba/yoga programs needed a digital presence that matched its in-person facility standard and dominated local search in Aurangabad, Bihar.",
    solution:
      "Engineered a high-contrast, performance-first website highlighting gym amenities, membership tiers, trainer credibility, and integrated direct WhatsApp booking pathways with verified geo-coordinate local SEO tags.",
    outcome:
      "Established an authoritative local digital presence that enables direct customer inquiry and membership exploration directly from mobile and desktop searches.",
    features: [
      "Membership tier breakdowns & transparent pricing",
      "Geo-coordinate local business metadata (IN-BR)",
      "Direct WhatsApp inquiry integration",
      "High-contrast dark visual design matching fitness brand",
    ],
    highlight: "Delivered complete brand alignment with integrated local SEO and rapid inquiry routing.",
  },
  {
    id: "bbc-pro",
    name: "BBC Pro Gym",
    slug: "bbc-pro",
    category: "Fitness",
    industry: "Athletic Conditioning & Strength Training",
    tagline: "Purpose-driven strength training and athletic conditioning facility.",
    liveUrl: "https://bbcpro.vercel.app",
    displayUrl: "bbcpro.vercel.app",
    services: [
      "Frontend Development",
      "Performance Optimization",
      "Responsive Layout Engineering",
      "Cloud Deployment",
    ],
    technologies: ["Vite / React", "Tailwind CSS", "Vercel Edge Network", "Modern CSS"],
    challenge:
      "A dedicated strength and athletic conditioning gym required an energetic, lightning-fast digital flagship to onboard prospective trainees and showcase coaching philosophy without sluggish page bloat.",
    solution:
      "Built a lean, dark-mode web application deployed on Vercel's global edge network, emphasizing training disciplines, facility equipment, and streamlined action triggers for walk-in consultations.",
    outcome:
      "A frictionless mobile-first experience that loads near-instantaneously on mobile networks and communicates training intensity clearly.",
    features: [
      "Fast mobile load times across cellular networks",
      "Structured equipment and conditioning sections",
      "Modern typography and high-contrast dark aesthetic",
      "Seamless Vercel edge deployment",
    ],
    highlight: "Ultra-lean architecture engineered for instant mobile consultation onboarding.",
  },
  {
    id: "real-looks",
    name: "Real Looks Unisex Salon",
    slug: "real-looks",
    category: "Beauty",
    industry: "Grooming, Beauty & Personal Care",
    tagline: "Boutique unisex salon offering haircutting, beard grooming, skin care, and bridal artistry.",
    liveUrl: "https://reallooks.vercel.app",
    displayUrl: "reallooks.vercel.app",
    services: [
      "Luxury UI/UX Design",
      "Frontend Engineering",
      "Service Menu Architecture",
      "Appointment Booking Pathways",
    ],
    technologies: ["React", "Tailwind CSS", "Schema.org HairSalon", "Vercel Hosting"],
    challenge:
      "A unisex salon with diverse services spanning hair, beard, skincare, and bridal styling needed an editorial digital experience that presented its services with sophistication rather than like a standard service catalog.",
    solution:
      "Crafted a refined warm-neutral editorial aesthetic with Cormorant and Plus Jakarta typography, clear service menus with pricing tiers, and embedded appointment booking contact points.",
    outcome:
      "Elevated the salon's brand perception into a boutique grooming sanctuary, clarifying services and facilitating direct client bookings.",
    features: [
      "Curated service menus for hair, beard, skincare, and bridal styling",
      "Structured schema markup for local beauty salon discovery",
      "Warm editorial typography and balanced whitespace",
      "Mobile-friendly appointment contact triggers",
    ],
    highlight: "Editorial elegance combined with structured service menus for seamless appointment requests.",
  },
  {
    id: "mars-remedies",
    name: "Mars Remedies",
    slug: "mars-remedies",
    category: "Healthcare",
    industry: "Pharmaceuticals & Healthcare Formulations",
    tagline: "WHO-GMP & ISO 9001:2015 certified pharmaceutical company with 110+ formulations.",
    liveUrl: "https://marsremedies.co.in",
    displayUrl: "marsremedies.co.in",
    services: [
      "Corporate Portal Development",
      "Catalog Architecture (110+ Formulations)",
      "B2B Inquiry Workflows",
      "Technical Compliance & SEO",
    ],
    technologies: ["Next.js / Modern Web", "Tailwind CSS", "JSON-LD MedicalBusiness", "Domain & DNS Setup"],
    challenge:
      "A pharmaceutical enterprise with 110+ formulations across tablets, syrups, injectables, and ointments needed a professional digital platform to support PCD franchise inquiries and institutional manufacturing contracts across India.",
    solution:
      "Architected a comprehensive corporate portal featuring categorization across therapeutic segments, certification verification (WHO-GMP & ISO), downloadable product sheets, and direct B2B franchise lead capture.",
    outcome:
      "A verified institutional platform that builds supplier credibility and centralizes nationwide distributor and third-party manufacturing inquiries.",
    features: [
      "Structured catalog covering 110+ certified formulations",
      "WHO-GMP & ISO 9001:2015 compliance proof sections",
      "Dedicated PCD pharma franchise and contract manufacturing intake",
      "MedicalOrganization JSON-LD structured data",
    ],
    highlight: "High-credibility B2B corporate architecture supporting catalog exploration and franchise inquiry.",
  },
  {
    id: "bb-real-estate",
    name: "BB Real Estate",
    slug: "bb-real-estate",
    category: "Real Estate",
    industry: "Property Development & Land Plotting",
    tagline: "Verified residential plotting and strategic land development opportunities.",
    liveUrl: "https://bbrealestate.vercel.app",
    displayUrl: "bbrealestate.vercel.app",
    services: [
      "Land Showcase Platform",
      "Real Estate UI/UX",
      "Lead Capture Architecture",
      "Bilingual Brand Styling",
    ],
    technologies: ["React", "Tailwind CSS", "Schema.org RealEstateAgent", "Vercel Hosting"],
    challenge:
      "A property plotting firm needed a credible digital showcase for residential plot layouts and verified land investment projects in South Bihar, bridging traditional regional trust with digital accessibility.",
    solution:
      "Developed an authoritative real estate platform featuring verified plotting documentation, location connectivity highlights, transparent project milestones, and instant direct-to-agent lead inquiry channels.",
    outcome:
      "Empowered land buyers and families to review verified project details with clarity, establishing direct digital lines of communication with sales representatives.",
    features: [
      "Transparent plot layout and location connectivity highlights",
      "Corporate identifier and registration verification indicators",
      "Direct consultation and site visit request flows",
      "Bilingual classical typography and high-trust composition",
    ],
    highlight: "Trust-centric layout presenting verified land assets with immediate contact pathways.",
  },
];
