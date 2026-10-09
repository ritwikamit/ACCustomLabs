# Dark Portfolio Landing Page Reference Specification

This prompt defines a high-performance single-page dark portfolio landing page architecture using React + Vite/Next.js + Tailwind CSS + TypeScript + GSAP + Framer Motion + hls.js.

---

## Global Design System

### Fonts
Google Fonts import: Inter (300–700) and Instrument Serif (italic, 400).
- `--font-body`: 'Inter', sans-serif → Tailwind font-body
- `--font-display`: 'Instrument Serif', serif → Tailwind font-display

### CSS Custom Properties (HSL)
```css
:root {
  --bg: 0 0% 4%;
  --surface: 0 0% 8%;
  --text: 0 0% 96%;
  --muted: 0 0% 53%;
  --stroke: 0 0% 12%;
  --accent: 0 0% 96%;
}
```

### Tailwind Custom Colors
- `bg`: "hsl(var(--bg))"
- `surface`: "hsl(var(--surface))"
- `text-primary`: "hsl(var(--text))"
- `muted`: "hsl(var(--muted))"
- `stroke`: "hsl(var(--stroke))"

### Accent Gradient
`linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)` — used on logo ring, hover borders, progress bars. CSS utility class `.accent-gradient`.

### Custom Animations
- `@keyframes scroll-down`: translateY(-100%) → translateY(200%), 1.5s ease-in-out infinite
- `@keyframes role-fade-in`: opacity 0 + translateY(8px) → opacity 1 + translateY(0), 0.4s ease-out
- `@keyframes gradient-shift`: background-position 0% 50% → 100% 50% → 0% 50%, 6s ease infinite

---

## 7-Section Architecture & Interaction System

### Section 1: Loading Screen
Full-screen overlay (`fixed inset-0 z-[9999] bg-bg`).
- RAF counter from 000 → 100 over ~1500–2400ms.
- Top-left: Studio portfolio tracking label.
- Center: Rotating words `["Design", "Engineer", "Deploy"]` cycling every ~500–800ms with AnimatePresence `y: 20 → 0 → -20`.
- Bottom-right: Counter in `font-display tabular-nums`.
- Bottom progress bar: `.accent-gradient` with `scaleX(count / 100)`.
- Skip interaction + session bypass to prevent blocking repeat visits.

### Section 2: Hero
Full-viewport section with background HLS streaming video (`hls.js`), 3D perspective grid, and centered content.
- Video: `autoPlay muted loop playsInline`, object-cover with dark overlay and bottom gradient fade.
- Center pill Navbar: Official brand logo `/brand/logo.png`, smooth-scroll navigation links, and action button with `.accent-gradient` hover ring.
- Headline in Instrument Serif italic animated via GSAP entrance timeline (`.name-reveal` and `.blur-in`).
- Cycling role line: `A {role} based in India, building worldwide.` cycling through studio roles.
- Interactive Magnetic CTA buttons with spring mouse physics.
- Verified live deployment badges.
- Scroll indicator: "SCROLL" with animated highlight line.

### Section 3: Selected Works (Bento Grid)
- Framer Motion `whileInView` staggered entry.
- Alternate column spans: **7 / 5 / 5 / 7**.
- Halftone overlay (`radial-gradient`), dark surface cards, and backdrop-blur hover overlay with animated gradient pill `View • [Title] ↗`.

### Section 4: Journal / Build Logs
- Header: `Recent *breakdowns*` in Instrument Serif italic.
- Horizontal rounded pills with category tags, dates, read times, and arrow interactions.

### Section 5: Explorations (Technical Playground)
- Center pinned header + GitHub code trigger.
- Interactive capability cards with organic tilts and interactive specification modal/lightbox on click.

### Section 6: Stats
- 3-column stats grid with large numbers in `font-display italic` and border-left accent highlights.

### Section 7: Contact / Footer
- Inverted HLS background video (`scale-y-[-1]`) with `bg-black/75` dark overlay.
- Continuous GSAP ticker marquee: `"BUILDING THE FUTURE OF DIGITAL PRODUCTS • HIGH-PERFORMANCE WEB & APPS • "`.
- Direct email CTA button with `.accent-gradient` hover border ring.
- Footer bottom bar with social links, pulsing green availability indicator, and copyright.

---

## Brand Protection Rules
- Keep the official AC Custom Labs logo (`/brand/logo.png`).
- Never introduce banned fluff words (`bespoke`, `explore`, `transform`, `elevate`, `seamless`, `crafted`).
- Strictly showcase real verified client builds (Vikings Gym, BBC Pro Gym, Real Looks Salon, Mars Remedies, BB Real Estate).
