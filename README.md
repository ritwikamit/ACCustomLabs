# AC Custom Labs

Official website and digital flagship for **AC Custom Labs** — an independent, freelancer-led digital product studio with a working team.

Built with **Next.js 16+ (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Deployed on **Vercel**.

---

## Brand Rule

> **Red is the signal. Black is the environment. White is the information.**

- Background: Obsidian `#050505`, `#0B0B0D`, `#111114`
- Accent: Signal Red `#FF1738` (matching the official AC Custom Labs logo arc)
- Typography: Space Grotesk (Headings) & Inter (Body)

---

## Verified Portfolio Deployments

All projects featured on this platform are live client deliverables:

1. **[Vikings Gym & Spa](https://vikingsgym.in)** — Fitness & Moroccan steam spa flagship with local SEO & WhatsApp inquiry flows.
2. **[BBC Pro Gym](https://bbcpro.vercel.app)** — High-intensity strength training & athletic conditioning presence.
3. **[Real Looks Unisex Salon](https://reallooks.vercel.app)** — Editorial unisex grooming & beauty salon with service menus & booking triggers.
4. **[Mars Remedies](https://marsremedies.co.in)** — WHO-GMP & ISO 9001:2015 certified pharmaceutical company (110+ formulations & franchise intake).
5. **[BB Real Estate](https://bbrealestate.vercel.app)** — Verified residential plotting and strategic land development opportunities in South Bihar.

---

## Core Services

- **01. Websites & Web Apps** — High-performance bespoke flagships engineered for conversions.
- **02. Apps & Custom Software** — Mobile apps, internal tools, CRM dashboards, and operational utilities.
- **03. UI/UX Design** — High-contrast design systems, tokens, and accessible responsive interfaces.
- **04. Backend & Databases** — Relational schemas (PostgreSQL), REST/GraphQL APIs, and serverless handlers.
- **05. SEO, AEO & GEO** — Traditional search rankings, AI answer engine citations, and local map discovery.
- **06. AI & Automation** — Custom RAG chatbots, automated document processing, and LLM integrations.
- **07. Deployment & Infrastructure** — Production Vercel edge hosting, GitHub Actions CI/CD, and Cloudflare DNS.
- **08. Maintenance & Security** — Scheduled dependency updates, OWASP hardening, and rapid bug triage.
- **09. Domains & Business Infrastructure** — Domain setup, SSL provisioning, and Google Workspace / Zoho email authentication (SPF, DKIM, DMARC).

---

## Local Development

### Prerequisites

- Node.js 18+ (tested on Node v24)
- npm 10+

### Setup

```bash
# Clone the repository
git clone https://github.com/ritwikamit/ACCustomLabs.git
cd ACCustomLabs

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000`.

### Production Verification

```bash
# Typecheck
npm run typecheck

# Lint
npm run lint

# Production Build
npm run build
```

---

## Security & Architecture Highlights

- **Content-Security-Policy (CSP)**: Hardened headers configured in `next.config.ts`.
- **Honeypot Anti-Spam**: Invisible form trap protecting `/api/enquiry` without degrading UX.
- **Zero Secret Commits**: Environment template in `.env.example`, credentials strictly git-ignored.
- **Semantic SEO**: Organization and ProfessionalService JSON-LD schemas embedded in `app/layout.tsx`.
- **Accessibility**: Mobile-first responsive layouts, focus visible indicators, and `prefers-reduced-motion` compliance.

---

## License

© 2026 AC Custom Labs. All rights reserved.