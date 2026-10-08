# AC CUSTOM LABS --- TECHNICAL REQUIREMENTS DOCUMENT (TRD)

## 1. Recommended Technology Stack

### Frontend

-   Next.js 15+
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Lucide React
-   Motion / Framer Motion

### Backend

For the initial marketing website, backend complexity should be minimal.

Future: - Next.js API routes/server actions or NestJS - PostgreSQL -
Prisma - Auth.js - Object storage

------------------------------------------------------------------------

## 2. Architecture

### Phase 1

``` text
Next.js
  |
  +-- Static pages
  +-- Typed content data
  +-- Contact/enquiry handoff
  +-- Portfolio
  +-- SEO
```

### Phase 2

``` text
Next.js
   ↓
API
   ↓
PostgreSQL
   ↓
CRM / CMS / Client Portal
```

------------------------------------------------------------------------

## 3. Project Structure

``` text
ac-custom-labs/
├── app/
│   ├── page.tsx
│   ├── services/
│   ├── work/
│   ├── about/
│   ├── contact/
│   ├── blog/
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── navigation/
│   ├── hero/
│   ├── services/
│   ├── portfolio/
│   ├── process/
│   ├── testimonials/
│   ├── contact/
│   └── ui/
│
├── data/
│   ├── company.ts
│   ├── services.ts
│   ├── projects.ts
│   └── technologies.ts
│
├── types/
├── lib/
│   ├── seo/
│   ├── analytics/
│   └── validation/
│
└── public/
    ├── brand/
    ├── projects/
    └── og/
```

------------------------------------------------------------------------

## 4. Content Architecture

Business content must not be duplicated in components.

``` ts
export const company = {
  name: "AC Custom Labs",
  tagline: "Custom digital solutions",
  primaryCta: "Start a Project"
};
```

Services should be data-driven.

``` ts
type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  isFeatured: boolean;
};
```

------------------------------------------------------------------------

## 5. Routing

Required:

``` text
/
/services
/services/[slug]
/work
/work/[slug]
/about
/contact
```

Future:

``` text
/blog
/blog/[slug]
/careers
/client
/admin
```

------------------------------------------------------------------------

## 6. Contact Form

Fields:

``` text
name
email
phone
company
service
budget
timeline
message
website
```

Use Zod validation.

Do not store contact data in the browser as a permanent record.

------------------------------------------------------------------------

## 7. Contact Processing

Phase 1 options:

### Option A

Form → email service.

### Option B

Form → server action/API → email provider.

### Option C

Form → CRM/webhook.

The implementation should isolate this behind:

``` ts
submitLead(data)
```

so the provider can change later.

------------------------------------------------------------------------

## 8. SEO

Implement:

-   Metadata API
-   Open Graph
-   Canonical
-   sitemap
-   robots
-   JSON-LD
-   Semantic headings

Organization schema should contain only verified company information.

------------------------------------------------------------------------

## 9. Performance

Target:

-   Excellent Core Web Vitals
-   LCP \< 2.5s where practical
-   CLS close to 0
-   Minimal JS
-   Optimized WebP/AVIF images
-   Responsive images
-   Lazy loading below fold

Avoid autoplay video unless compressed and genuinely valuable.

------------------------------------------------------------------------

## 10. Animation

Use motion selectively:

-   Hero entrance
-   Section reveal
-   Service card hover
-   Portfolio image reveal
-   CTA hover
-   Page transitions

Respect:

``` css
@media (prefers-reduced-motion: reduce) {
  /* disable non-essential animation */
}
```

------------------------------------------------------------------------

## 11. Analytics

Recommended events:

``` text
view_service
view_project
click_start_project
contact_form_start
contact_form_submit
click_email
click_phone
click_whatsapp
click_social
```

Do not send unnecessary personal information to analytics.

------------------------------------------------------------------------

## 12. Deployment

Recommended:

-   GitHub
-   Vercel
-   Custom domain
-   Preview deployments
-   Production deployment from main branch

------------------------------------------------------------------------

## 13. Environment Variables

``` env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ANALYTICS_ID=
EMAIL_API_KEY=
CONTACT_EMAIL=
```

Never expose private secrets through `NEXT_PUBLIC_*`.

------------------------------------------------------------------------

## 14. Image Requirements

Logo: - Original master asset - Transparent version - Dark-background
version - Light-background version

Portfolio: - WebP/AVIF - Responsive dimensions - Meaningful alt text

------------------------------------------------------------------------

## 15. Browser Support

Support current versions of:

-   Chrome
-   Edge
-   Firefox
-   Safari
-   Mobile Chrome
-   Mobile Safari

------------------------------------------------------------------------

## 16. Testing

Before deployment:

-   TypeScript
-   ESLint
-   Unit tests for utilities
-   Form validation tests
-   E2E contact-flow test
-   Responsive testing
-   Accessibility audit
-   Lighthouse
-   Broken-link check

------------------------------------------------------------------------

## 17. Future Backend

Potential entities:

``` text
Company
Service
Project
CaseStudy
Lead
Client
User
BlogPost
Testimonial
Technology
ContactMessage
```

The marketing website should not require a database until content
management or lead storage requires it.
