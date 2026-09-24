# NeevHR website: technical SEO, AI-search and content audit

**Scope:** https://www.neevhr.com (repository `marketing-site/`)
**Baseline audited:** commit `307ba5f` (19 Sep 2026), before the SEO/GEO master specification work
**Audit date:** 24 Sep 2026
**Specification:** *NeevHR Website AI SEO GEO Master Specification* (sections 1 to 85)

This is the audit required by §82 of the specification. It records the state of the site **before** implementation. What was changed is in the companion [SEO implementation report](SEO-IMPLEMENTATION-REPORT-2026-09.md).

---

## A. Existing website structure

| Item | Finding |
|---|---|
| Framework | Next.js 16.3.5 (App Router, Turbopack), React 19, Tailwind CSS v4, TypeScript |
| CMS / blog | Payload CMS 3.89 on PostgreSQL. `posts` collection (Markdown body or Lexical), `leads`, `media`, `users`. Admin at `/admin` |
| Route groups | `app/(frontend)` (marketing site, own root layout) and `app/(payload)` (admin and API, separate root layout) |
| Hosting / deploy | Hostinger VPS behind nginx, PM2; GitHub Action on push to `main` runs `deploy.sh` (pull, install, `payload migrate`, build, restart) |
| Rendering | Almost all pages static (SSG); blog index ISR (60 s); blog posts rendered on demand |
| Page count at baseline | 27 `page.tsx` files producing about 73 static pages plus 19 blog posts |
| Content architecture | Registries in `lib/` (`site.ts`, `modules.tsx` with 31 modules, `industries.ts` with 10 industries, `tools.ts` with 6 calculators, `seed/posts.ts` with 19 articles) |
| Key components | Header with product and industries mega-menus, Footer, PageHeader, Faq (native `<details>`), designed product mockups (`components/product/*Visual.tsx`), calculators (`components/tools`) |

**Routes at baseline:** `/`, `/features`, `/features/[31 modules]`, `/industries`, `/industries/[10]`, `/tools`, `/tools/[6]`, `/blog`, `/blog/[slug]`, `/pricing`, `/compare`, `/security`, `/integrations`, `/mobile`, `/faq`, `/company`, `/contact`, `/demo`, `/privacy`, `/terms`, `/dpdp`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/manifest.webmanifest`. Redirect: `/about` to `/company`.

## B. Current SEO (baseline)

| Area | Finding | Severity |
|---|---|---|
| Titles | Template `%s · NeevHR`; home "NeevHR - India-first HRMS for growing teams". Titles unique but not keyword-aligned with the spec (for example "Payroll software for India · NeevHR", "The platform · NeevHR") | Medium |
| Descriptions | Present on most pages; several generic ("Get in touch with the NeevHR team.", "How NeevHR handles personal data.") | Low |
| Open Graph | **Child pages had no `og:image`**: a page-level `openGraph` object replaced the parent's, so only the home page carried the image. `og:type`, `og:site_name` missing on child pages | High |
| X / Twitter card | **Every page repeated the home page's `twitter:title` and `twitter:description`** (only set in the root layout) | High |
| H1 / H2 | One H1 per page; footer headings used `h3`/`h4` out of sequence | Low |
| Canonicals | Self-referencing canonicals on each page. **Apex `neevhr.com` returned 200 instead of redirecting to `www`**, creating a duplicate host | High |
| Sitemap | `/sitemap.xml` 200, 83 URLs, blog posts pulled from Payload. `lastModified` set to build time for every page | Low |
| Robots | Allow all, disallow `/admin` and `/api/`; non-standard `Host:` line | Low |
| Structured data | Organization (with placeholder `legalName: "NeevHR (NeevHR)"` and an SVG 64 px logo, below Google's raster minimum), WebSite, SoftwareApplication (`operatingSystem: "Web, Android, iOS"` although no app is published; `offers` without a price), FAQPage on home and `/faq`, BreadcrumbList on module/industry/blog pages (not visible on the page), BlogPosting with the "NeevHR Team" byline typed as a `Person` | High |
| Internal links | Strong module mega-menu; weak links from blog posts and calculators to commercial pages; no glossary or guides | Medium |
| Indexability | All marketing pages indexable; admin/API disallowed | OK |

## C. AI-search readiness

| Area | Finding |
|---|---|
| Entity clarity | Name used consistently ("NeevHR"; no misspellings found). No single canonical entity sentence; category wording varied ("HR and payroll platform", "HRMS for growing teams") |
| Product clarity | Rich module pages, but key facts were **contradicted or overstated**: "first-class in English and Hindi" (no Hindi UI exists), FAQ "Is there a mobile app? Yes" while store badges said "coming soon", `SoftwareApplication` listing Android/iOS |
| Organization clarity | No legal name, founder name, founding year or address published (none documented anywhere in the repository) |
| Crawlability | Static HTML, fast, `llms.txt` present. No explicit AI-crawler rules (covered by `*`) |
| Public documentation | None (no docs, API reference, changelog) |
| External authority | Social profiles (LinkedIn URL is a personal `/in/` profile, not a company page), Instagram, YouTube, X; no reviews, directories or press |

## D. Performance (baseline)

| Metric | Finding |
|---|---|
| Home HTML | 244 KB uncompressed, 35 KB gzip; served from Next cache (`x-nextjs-cache: HIT`) |
| JavaScript | 9 script chunks, about 187 KB transferred on the home page |
| Images | No raster images; product visuals are HTML/CSS mockups (no LCP image cost) |
| Fonts | Inter via `next/font` (self-hosted, `display: swap`) |
| Caching | HTML `s-maxage=31536000`; static assets far-future cached |
| Mobile | **Bug:** on 375 px screens, the hero copy on every module page was clipped (a wide mockup stretched the single grid column to about 409 px) |
| Core Web Vitals | Not measured (no field data, Search Console not verified) |

## E. Content gaps

- No `/hrms`, `/payroll` pillar (payroll only as a module page) or `/india-payroll` page
- No glossary, no guides (selection, implementation, migration, switching), no comparison pages beyond a generic table
- Module pages lacked workflow, "who uses it" and FAQ sections
- Industry pages short (tagline, four challenges, three modules)
- 6 of 13 calculators in the spec; calculators lacked formula, example, mistakes, FAQ, sources and review date
- 19 articles against the spec's 56-article plan; statutory articles predate the Labour Codes (in force 21 Nov 2025) and the Income-tax Act, 2025 (from 1 Apr 2026) in places
- No state payroll pages

## F. Trust gaps

- No customers, case studies, testimonials or reviews (none exist yet; must not be fabricated)
- No named author, founder profile, legal entity, address
- Security page accurate in tone but light on specifics; "certifications on our roadmap" without stating none are held
- Contradictory mobile and language claims (see C)
- Mock dashboard figures not labelled as illustrative

## G. Conversion gaps

- Demo form lacked current HRMS, primary requirement and preferred date; size bands started at 500 employees
- GA4 wired but no ID set; no conversion events (demo, pricing, calculator, blog)
- Calculator pages had a single CTA and weak links to product pages

## H. Recommended implementation order (as executed)

1. **P0 technical:** metadata helper (titles, descriptions, canonical, OG, X), stable OG image, raster logo, apex redirect, robots, sitemap, breadcrumbs, schema corrections, mobile clipping fix, remove false claims
2. **P1 product architecture:** `/hrms`, `/payroll`, `/india-payroll`, module page depth, industry rewrite, integrations, security, pricing, demo, company
3. **P2 organic:** glossary, calculators to spec, guides, comparison, articles, state pages, internal linking
4. **Owner actions:** Search Console and GA4 IDs, company facts, customers and reviews, off-site profiles
