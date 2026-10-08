# AC Custom Labs Landing Skill v2

This skill is for building the official **AC Custom Labs** marketing
website as a premium, human-designed digital product studio site.

It is an interaction system, not a visual-template copier.

## 0. Source of truth

Always use this order:

1.  Existing AC Custom Labs project documents and explicit project
    instructions.
2.  Existing AC Custom Labs logo and approved brand assets.
3.  Existing project architecture, components, dependencies, and data.
4.  Installed project skills and relevant MCPs.
5.  This skill.
6.  The supplied reference prompts only as interaction/UX inspiration.
7.  General implementation knowledge.

A reference prompt can suggest **how an interaction works**. It cannot
override the AC Custom Labs brand, business facts, content rules,
technology requirements, security requirements, or existing project
documentation.

## 1. Business vision

AC Custom Labs is a freelancer-led digital product and development
studio with a working team. It serves local businesses, startups,
entrepreneurs, influencers, personal brands, and organizations that need
premium digital work.

Core capability areas include:

-   Premium websites and web apps
-   UI/UX and visual systems
-   Frontend and backend development
-   APIs and databases
-   Admin dashboards, CRM/ERP-style systems, booking and lead systems
-   SEO, technical SEO, local SEO, AEO, and GEO
-   AI integrations, LLM solutions, chatbots, and automation
-   Deployment, cloud setup, domains, DNS, SSL, analytics
-   Maintenance, security hardening, bug fixes, optimization, and
    post-launch support

Position AC Custom Labs as a capable independent studio with a real
team, not as a huge agency and not as an AI website generator.

## 2. Mandatory voice rules

Copy must sound human, direct, and specific.

Avoid AI-agency filler and overused luxury language. In particular, do
not use these words or phrases unless a user explicitly supplies them as
required copy:

-   bespoke
-   explore
-   transform
-   in the heart of
-   harness
-   delve
-   rooted
-   elevate
-   unparalleled
-   curated
-   timeless
-   immerse
-   discover
-   crafted
-   seamless
-   reimagine
-   world-class
-   iconic
-   unlock your potential
-   next-generation experiences
-   cutting-edge solutions
-   revolutionary

Never use an em dash character: **---**.

Prefer periods, commas, parentheses, or an en dash: **--**.

Do not invent:

-   clients
-   testimonials
-   awards
-   certifications
-   revenue
-   conversion rates
-   users
-   traffic
-   rankings
-   performance numbers
-   years of experience
-   project outcomes
-   technology claims

Public website copy is not a secret. API keys, credentials, tokens,
database URLs, private certificates, webhook secrets, and deployment
secrets are secrets.

## 3. Interactive commands

### `/ac-custom-labs-landing plan`

Inspect the project, docs, logo, skills, MCPs, dependencies, routes, and
current UI. Produce a concrete implementation plan without changing
code.

The plan must identify:

-   page architecture
-   hero concept
-   section order
-   interaction modules to reuse
-   typography hierarchy
-   responsive behavior
-   data sources
-   portfolio treatment
-   SEO/AEO/GEO requirements
-   security gates
-   QA gates

### `/ac-custom-labs-landing build`

Implement the website using the existing project stack and architecture.

Workflow:

READ → INSPECT → PLAN → IMPLEMENT → RUN → BROWSER INSPECT → SECURITY
CHECK → FIX → RE-RUN → RE-INSPECT → POLISH → TEST

Do not stop at a successful build. Inspect the rendered page.

### `/ac-custom-labs-landing polish`

Improve hierarchy, spacing, motion, typography, portfolio presentation,
and responsive details without unnecessary structural rewrites.

### `/ac-custom-labs-landing audit`

Audit visual quality, responsive behavior, accessibility, SEO, AEO/GEO,
performance, content accuracy, broken links, console errors, dependency
health, and security basics. Fix issues when execution is requested.

### `/ac-custom-labs-landing security`

Perform a focused security audit and remediation pass for frontend code,
configuration, dependencies, headers, forms, third-party resources,
environment variables, and GitHub hygiene.

### `/ac-custom-labs-landing content`

Review all visible text against AC Custom Labs' voice and content rules.
Remove cliché wording, unsupported claims, and em dashes.

### `/ac-custom-labs-landing portfolio`

Inspect and refine the real AC Custom Labs portfolio. Use only verified
project names, URLs, services, screenshots, and functionality.

### `/ac-custom-labs-landing inspire`

Show which reference interaction patterns are appropriate for the
current AC Custom Labs page, then implement only the selected patterns.

## 4. Reference interaction library

The user supplied multiple high-end landing-page prompts. The useful
patterns below are intentionally separated from their original
identities.

### Reference A: fintech-style product landing page

Useful patterns:

-   full-screen hero with one strong visual/video
-   navbar layered over hero
-   compact announcement pill
-   strong left-aligned headline
-   CTA with a circular trailing arrow
-   duplicated horizontal marquee with seamless looping
-   editorial section cards
-   restrained content density

Do NOT copy:

-   fintech wording
-   stablecoin concepts
-   partner names
-   fake funding/credit claims
-   unrelated CloudFront/Higgs assets
-   product-specific metrics

Implementation preference:

Use one marquee only when it adds real information, such as service
families, capabilities, or a small proof strip. Duplicate the item list
to make the loop seamless. Use `transform: translate3d(...)` and
`will-change: transform` only where useful.

### Reference B: liquid-glass creative agency

Useful patterns:

-   cinematic hero composition
-   selective frosted surfaces
-   reusable fading-video wrapper
-   word-level blur-in text
-   magnetic CTA interaction
-   capability cards
-   stats only when data is verified
-   restrained hover micro-interactions

The supplied reference specifically describes `liquid-glass` and
`liquid-glass-strong` variants, a `FadingVideo` component, and
`BlurText`/Framer Motion reveal behavior. Use these only as technical
inspiration and only where the AC Custom Labs design system supports
them. fileciteturn6file0L48-L62

Never force glassmorphism across the whole site.

For AC Custom Labs, a glass effect is optional, local, and subordinate
to the logo/brand system.

### Reference C: 3D creator / portfolio page

Useful patterns:

-   oversized typography
-   strong section numerals
-   scroll-responsive horizontal image rows
-   mouse-following magnetic interaction
-   sticky/stacking project cards
-   editorial project layouts
-   section-specific motion systems

The source prompt uses a large hero heading, magnetic portrait behavior,
two scrolling image rows, and stacked project cards.
fileciteturn6file0L15-L28 fileciteturn6file0L57-L62
fileciteturn6file0L97-L106

For AC Custom Labs:

-   replace the fictional creator with the studio
-   replace fictional projects with the five real AC Custom Labs
    projects
-   keep project descriptions short
-   use the stacking effect only if it improves scanning and mobile
    usability
-   do not use 3D imagery just because the reference did

### Reference D: futuristic AI / cinematic systems page

Useful patterns:

-   cinematic video-led hero
-   mouse-scrubbed video when the hero concept genuinely benefits from
    it
-   scramble text reveal
-   custom SVG logo motion
-   spring-based hamburger animation
-   scroll-driven large-text transitions
-   metric grids
-   architecture/capability sections
-   footer media

The source prompt defines a mouse-scrubbed hero video, `ScrambleIn`,
`ScrambleText`, and a spring-based hamburger, plus scroll-linked
sections. fileciteturn6file1L48-L74 fileciteturn6file1L83-L109

For AC Custom Labs:

-   never invent "AI" as the company's primary identity
-   do not use fake metrics such as latency or model size
-   use scramble text sparingly for a hero eyebrow, small nav item, or
    CTA label if it remains readable
-   use mouse-scrubbed video only after verifying performance and mobile
    fallback
-   do not animate the actual logo artwork destructively

### Additional supplied editorial/reference pattern

The supplied material also contains a museum/editorial landing-page
system built around large typography, restrained mono labels, delayed
background media, chapter-like content, responsive navigation, and
scroll-aware image transitions. Its strongest transferable ideas are:

-   editorial section labelling
-   number + title hierarchy
-   image-led content transitions
-   compact mobile navigation
-   highly intentional spacing
-   controlled reveal timing

The source uses a `SandTransitionImage` concept built with an SVG filter
and requestAnimationFrame. fileciteturn6file2L255-L270

Do not copy its dinosaur/museum content or assets. Do not use the SVG
distortion effect unless there is a real AC Custom Labs image-transition
need. A normal mask/fade is often the better choice.

## 5. AC Custom Labs interaction system

The site should use a small number of high-quality interaction modules
rather than many unrelated effects.

Preferred system:

### Hero

Choose one:

-   cinematic static image
-   approved video background
-   subtle image sequence

Use one primary hero motion pattern:

-   staggered fade/reveal
-   blur-in
-   scramble-in
-   or restrained text/image mask

Do not combine all four.

Hero CTA may use:

-   arrow-circle button
-   subtle magnetic effect
-   soft hover fill transition

Choose one.

### Navigation

Desktop:

-   clean left/center/right hierarchy or centered nav pill, depending on
    brand docs
-   one clear CTA
-   hover transitions around 200--300ms

Mobile:

-   animated hamburger
-   full-screen or compact overlay based on existing design
-   keyboard accessible
-   body scroll lock while open
-   closes on navigation selection

### Work / portfolio

Primary portfolio interaction options:

1.  horizontal scroll row
2.  sticky stacked cards
3.  large case-study cards with hover motion

Use one primary pattern and optional secondary micro-interactions.

### Services

Use clear groups rather than a wall of text.

Possible groups:

-   Websites & Web Apps
-   Apps & Software
-   UI/UX Design
-   Backend & Databases
-   SEO, AEO & GEO
-   AI & Automation
-   Deployment & Infrastructure
-   Maintenance & Security
-   Domains & Business Infrastructure

### Marquee

Use a marquee only for meaningful content.

Good examples:

`Web Development · UI/UX · SEO · AEO · GEO · Backend · AI · Deployment`

Do not present invented partners as proof.

### Magnetic interaction

Use only for one or two important CTAs.

Implementation requirements:

-   calculate pointer offset from element center
-   limit translation to a small amount
-   return smoothly on leave
-   disable or simplify under `prefers-reduced-motion`
-   do not rely on hover alone for functionality

### Video

Create a reusable video component only if the site actually uses
multiple videos.

Minimum behavior:

-   `autoPlay muted playsInline` where appropriate
-   `preload` chosen intentionally
-   fade in after media is ready
-   handle media failure
-   poster/fallback image where appropriate
-   no autoplay with sound
-   reduced-motion fallback

Mouse-scrubbed video is opt-in, not default.

## 6. Visual design rules

Follow the existing AC Custom Labs Design Doc first.

Do not automatically inherit reference palettes.

The final page should feel:

-   premium
-   minimal
-   technical
-   editorial
-   human
-   confident
-   client-facing

Avoid:

-   generic purple SaaS gradients
-   excessive glassmorphism
-   excessive glow
-   random 3D objects
-   too many floating UI elements
-   fake dashboards
-   decorative elements with no purpose
-   giant blocks of copy
-   over-animated backgrounds

Premium comes from composition, typography, art direction, interaction
quality, and real project proof.

## 7. Typography

The existing project docs decide the approved fonts.

Do not copy the reference prompts' fonts automatically. The supplied
references use very different type systems, including TT Norms Pro,
Instrument Serif/Barlow, Kanit, Space Mono/Anton SC, and Inter/JetBrains
Mono. Their type choices are reference-only.
fileciteturn6file2L14-L24 fileciteturn6file0L3-L8
fileciteturn6file1L3-L8

Use large display typography selectively.

Do not make every heading enormous.

## 8. Real portfolio data

Known real projects:

-   Vikings Gym --- https://vikingsgym.in
-   BBC Pro --- https://bbcpro.vercel.app
-   Real Looks --- https://reallooks.vercel.app
-   Mars Remedies --- https://marsremedies.co.in
-   BB Real Estate --- https://bbrealestate.vercel.app

Where browser access is available, inspect the live sites before
creating detailed descriptions. Only state visible or documented
functionality. Never fabricate case-study results.

## 9. Data architecture

Keep public business content centralized where useful:

-   `site`
-   `services`
-   `projects`
-   `navigation`
-   `seo`

Do not create an architecture framework for its own sake.

Use local data files or the existing project pattern.

The public site can contain public business text. Secrets must never be
embedded in client-side code.

## 10. SEO / AEO / GEO

Build technical SEO:

-   title
-   description
-   canonical
-   Open Graph
-   robots
-   sitemap
-   semantic HTML
-   valid structured data where appropriate

AEO/GEO structure should make these facts easy for answer systems to
extract:

-   who AC Custom Labs is
-   what it does
-   who it serves
-   capabilities
-   industries
-   real projects
-   contact/start-project path

Never promise guaranteed rankings or guaranteed AI visibility.

## 11. Security

Security is a first-class gate.

Before GitHub:

-   scan for API keys
-   scan for tokens
-   scan for passwords
-   scan for database URLs with credentials
-   inspect `.env*`
-   inspect `NEXT_PUBLIC_*`
-   inspect third-party scripts
-   inspect unsafe HTML
-   inspect forms
-   inspect redirects
-   inspect dependencies
-   inspect security headers
-   inspect `.gitignore`
-   inspect staged Git diff

Never commit:

-   `.env`
-   `.env.local`
-   `.env.production`
-   service account JSON
-   private keys
-   deployment tokens
-   credential exports
-   database credentials

If a secret was committed in the past, treat it as compromised and
request rotation. Do not silently rewrite Git history.

## 12. GitHub and Vercel

Repository:

`https://github.com/ritwikamit/ACCustomLabs`

The repository is intended to hold the source and later deploy to
Vercel.

Before pushing:

1.  inspect `git status`
2.  inspect `git diff`
3.  inspect staged diff
4.  scan secrets
5.  review `.gitignore`
6.  review dependencies
7.  run build/lint/typecheck/tests that exist
8.  inspect final file list
9.  commit intentionally
10. push normally

Never force-push. Never blindly run `git add .`. Never upload
`node_modules`, build output, caches, temporary files, or secrets.

## 13. Performance

Prefer:

-   CSS transforms for motion
-   requestAnimationFrame only for continuous pointer/scroll effects
-   passive scroll listeners
-   `will-change` only where justified
-   lazy loading for below-fold media
-   optimized image formats
-   minimal JavaScript

Do not use a continuous animation loop when a CSS animation or
IntersectionObserver will do.

For video, verify actual memory and bandwidth implications.

## 14. Accessibility

All interactive effects must preserve usability.

Requirements:

-   keyboard-accessible navigation
-   visible focus state
-   correct labels
-   semantic headings
-   alt text
-   reduced-motion support
-   no hover-only critical information
-   accessible mobile menu
-   readable contrast

## 15. Responsive QA

Verify at:

320px 375px 390px 414px 768px 1024px 1280px 1440px 1920px

Pay special attention to:

-   oversized headings
-   sticky cards
-   horizontal marquees
-   hero videos
-   mobile menu
-   CTA hit areas
-   portfolio image cropping
-   form usability

## 16. Implementation principle

Reference interactions should be chosen because they improve the AC
Custom Labs story.

Use this decision ladder:

1.  Does this interaction communicate something useful?
2.  Does it fit the current brand system?
3.  Can an existing component do it?
4.  Can CSS/native browser behavior do it?
5.  Is an installed dependency already available?
6.  Only then add custom logic or dependency.

Do not add an effect just because the reference prompt had it.

## 17. Completion standard

The website is complete only when it is:

-   visually premium
-   recognizably AC Custom Labs
-   based on real portfolio evidence
-   responsive
-   accessible
-   performant
-   SEO-ready
-   AEO-ready
-   GEO-ready
-   security-reviewed
-   GitHub-safe
-   Vercel-ready

Final loop:

DISCOVER → READ DOCS → INSPECT SKILLS/MCPs → PLAN → BUILD → RUN →
BROWSER REVIEW → SECURITY REVIEW → FIX → RE-RUN → RE-INSPECT → POLISH →
QA → GITHUB CHECK → DONE
