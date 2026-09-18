# NeevHR Marketing Website — Build Plan

> Public marketing + lead-generation website for **NeevHR**, an India-only, mid-market (500–5,000 employees) HRMS product competing with Keka, Darwinbox, and greytHR.
> This site is **separate from the product app** (`web/`, `backend/`) — its own Next.js app, its own stack. It does not touch the locked product stack.

**Status:** Phases A-D complete (18 Sep 2026) — launch-ready. Repo: https://github.com/prashantdabhi9033/neevHR-CMS
Pages live: home, /product (+6 module deep pages: payroll, attendance, leave, performance, recruitment, onboarding), /compare, /security, /integrations, /mobile, /pricing, /blog (Payload CMS), /faq, /company, /contact, /demo (leads to Payload), legal. GA4 ready via NEXT_PUBLIC_GA_ID. All module visuals are designed in-code (not screenshots).
**Location:** `marketing-site/` (sibling to `web/`, `backend/`, `mobile/`).

### Local dev
- `pnpm dev --port 3100` (env in `.env`, gitignored). Postgres DB `neevhr_cms` (owner role `prashantdabhi`, local).
- Admin panel: `/admin` — create the first user manually (Claude cannot set passwords). Blog posts + leads managed there.
- Sample posts: `GET /api/dev-seed` (dev only). Package is ESM (`"type": "module"`); regenerate types with `pnpm generate:types` after schema changes.
- Node 24 breaks the Payload CLI unless the package is ESM; that is handled. `pnpm build` needs `DATABASE_URI` set (blog is ISR and reads at build).

---

## 1. Purpose & audience

This is a **lead-generation engine**, not a brochure. Primary CTA everywhere: **Book a Demo**. Secondary: See Pricing / Download brochure.

Three buyer personas (from product positioning):
- **CHRO / HR Head** — sponsor. Cares about configurability, HR accuracy, lifecycle depth.
- **CFO** — payroll cost + statutory compliance.
- **CIO / IT** — security, data residency, integration.

**Four differentiators, repeated on every page:**
1. India-only, India statutory accuracy (PF/ESI/PT/TDS/LWF, gratuity, bonus, POSH, DPDP 2023).
2. Mid-market fit (500–5,000 employees).
3. 4–8 week implementation.
4. Configurable by a trained HR admin — no certified consultant needed.

---

## 2. Honesty guardrails (we are an early-stage startup)

- **Do** present the founder's real background: an HR practitioner with 15 years of HR experience + pre-sales/BD. This is personal credibility and is true.
- **Do NOT** fabricate company maturity: no fake customer logos, no invented testimonials, no "trusted by N companies", no review/rating counts, no "X employees managed". Add these only when real customers exist.
- **Integrations:** show **only what is actually built** — biometric device ingestion (ADMS). Do **not** list bank NEFT/RTGS or Tally (not built). No "coming soon" that sets false expectations.
- Positioning voice: "new-gen India HRMS, built by HR people for HR teams" — an honest fresh startup, not a pretend incumbent.

---

## 3. Stack (locked)

| Concern | Choice |
|---|---|
| Framework | **Next.js** (App Router, TypeScript) |
| Styling | Tailwind CSS + small design-token layer |
| CMS | **Payload CMS** (self-hosted, Postgres) — blog + leads in one admin panel |
| DB | Postgres (same engine as product; separate database) |
| Hosting | **DigitalOcean** (separate app from the product) |
| Analytics | **GA4** (free) — dashboard at analytics.google.com; Cloudflare Web Analytics as simpler alt |
| Fonts | Inter (matches product) + optional display face for headings |

**Why Payload:** owner requirement is to **post blog + view leads without a full redeploy**. Payload gives an admin panel (`/admin`) where blog posts and demo-form leads both live; Next.js **ISR / on-demand revalidate** publishes new content live without a rebuild.

**Why not the product's React+Vite SPA:** SPA is weak for SEO; a marketing site must be server-rendered. Marketing site stack is intentionally independent (product stack stays locked and untouched).

---

## 4. Brand

- Product: **NeevHR** ("Neev" = foundation). Story = stability, trust, the base you build HR on.
- Palette: **Indigo `#4338CA`** + **Emerald `#10B981`**.
- Logo: "N" on an emerald foundation bar.
- Look: clean, light, enterprise-trust. White space, crisp type, subtle shadows. Modern but not over-designed. WCAG AA contrast.

---

## 5. Pages

### Phase 1 — launch (must-have)
- Home
- Product overview (20-module map)
- Module deep pages (top 6 first: Payroll, Attendance, Leave, PMS, Recruitment, Onboarding) — these are the SEO workhorses
- Why NeevHR / vs competitors (honest, factual comparison)
- Pricing (edition-based; "Talk to sales" + range)
- Security & Compliance (DPDP 2023, tenant isolation, statutory accuracy, India data residency)
- Request Demo (lead capture form → Payload Leads)
- About / Company (founder credibility, honest)
- Contact
- Legal: Privacy, Terms, DPDP notice, Cookie policy

### Phase 2
- Remaining module pages (Expenses, ESS/Mobile, Analytics, etc.)
- Blog / Resources (CMS)
- Integrations (only what is built: biometric)
- Mobile app page (Flutter ESS)
- Help/Docs hub, FAQ
- India statutory guides (SEO)
- Case studies (when customers exist)

### Phase 3
- Resource hub + calculators (PF/gratuity/PT — lead magnets + SEO)
- Hindi version
- SEO polish, careers

---

## 6. SEO

- SSR/SSG via Next.js. Unique title + meta description + Open Graph + Twitter card + canonical per page.
- Schema.org: SoftwareApplication, Organization, FAQPage, BreadcrumbList (Review/AggregateRating only when real).
- Core Web Vitals (LCP < 2.5s), WebP + lazy images, sitemap.xml, robots.txt, mobile-first.
- Keyword tiers:
  - Mid (sweet spot): "HRMS for 500 employees", "greytHR alternative", "Keka vs Darwinbox", "payroll software with PF ESI compliance", "attendance management software India".
  - Long-tail / statutory (easiest, high intent): "ESI wage limit", "PF calculation India", "gratuity calculator", "DPDP Act HR compliance", "Form 16 software", "professional tax slab <state>".
- Local SEO: Google Business Profile + city landing pages (Ahmedabad, Mumbai, Bangalore, Pune) if targeted.

---

## 7. Media strategy

- **Screenshots:** hybrid. Polished **real** product screenshots (demo tenant, realistic Indian data) for hero + key modules, placed in clean browser/phone frames. Simplified **custom** product-style graphics where a real screen is too busy. Never a misleading screenshot of something the product lacks.
- **High-level graphics (yes, but as communication not decoration):** module architecture map, 4–8 week implementation timeline, "one employee record, effective-dated" timeline, integration/data-flow diagram, analytics hero. Line-style icons in indigo/emerald.
- **Avoid:** 3D blobs, meaningless animation, stock handshake photos, generic AI office images. Subtle fade-up scroll only.

---

## 8. Analytics — how the owner checks it

- **GA4:** add measurement script; view at `https://analytics.google.com` → property → Reports (visitors, pages, sources, conversions).
- Wire demo-form submit as a GA4 conversion event.
- Alt: Cloudflare Web Analytics (one script, privacy-friendly, dashboard in Cloudflare) if GA4 feels heavy.

---

## 9. Build sequence

- **A (now):** scaffold Next.js + Tailwind + design tokens; build design system primitives (buttons, cards, section shells) + Home page (hero, differentiators, module overview, competitor angle, CTA) + Demo form (posts to an API route; store wired to Payload in B). Get it building and previewable.
- **B:** integrate Payload CMS (Postgres) — Blog + Leads collections; wire demo form to Leads; ISR for blog.
- **C:** module pages, Pricing, Security, vs-competitor, legal.
- **D:** blog content, statutory guides, resource hub, Hindi, GA4 + SEO polish, DO deploy.

Real screenshots get captured once the owner logs into the demo app (Claude cannot type passwords into login fields).
