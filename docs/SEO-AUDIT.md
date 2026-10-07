# NeevHR — Master SEO Audit Report

**Website:** https://www.neevhr.com  
**Audit Date:** 07 October 2026  
**Technology Stack:** Next.js 16.3.5 (App Router, Turbopack), React 19, Tailwind CSS v4, Payload CMS 3.89 on PostgreSQL  
**Hosting Environment:** Hostinger VPS (Ubuntu 24.04 LTS), Nginx reverse proxy, PM2  
**Analytics Engine:** Google Analytics 4 (`G-ZDBTJ2CRCZ`) with Next.js SPA event listeners  

---

## 1. Executive Summary

A comprehensive, automated crawl and source inspection was executed across the complete public surface of **https://www.neevhr.com**.

The website demonstrates an **exceptionally strong, production-grade technical SEO foundation**:
- **132 discoverable indexable URLs** crawled with **100% HTTP 200 OK** responses.
- **Zero broken internal links** across all 132 public pages.
- **Zero duplicate title tags** and **zero duplicate meta descriptions**.
- **100% single H1 compliance** (every page has exactly one semantic `<h1>` tag).
- **100% canonical tag alignment** with strict self-referencing canonicals.
- **Strict apex-to-www canonical host unification** (`neevhr.com` -> `https://www.neevhr.com` via permanent HTTP 308).
- **Google Analytics 4 is fully integrated and active** with automated tracking for SPA pageviews, scroll depth, CTAs, and conversions.

---

## 2. Technical SEO Baseline & Crawl Diagnostics

### Crawl Summary
| Metric | Audit Result | Status |
| :--- | :---: | :---: |
| **Total URLs Discovered in Sitemap** | 132 | PASS |
| **HTTP 200 Success Rate** | 132 / 132 (100%) | PASS |
| **4xx Client Errors** | 0 | PASS |
| **5xx Server Errors** | 0 | PASS |
| **Redirect Chains on Internal Links** | 0 | PASS |
| **Broken Internal Links** | 0 | PASS |
| **Missing Titles** | 0 | PASS |
| **Duplicate Titles** | 0 | PASS |
| **Missing Meta Descriptions** | 0 | PASS |
| **Duplicate Meta Descriptions** | 0 | PASS |
| **H1 Tag Violations** | 0 | PASS |
| **Canonical Tag Mismatches** | 0 | PASS |

### Host & Canonicalization Status
- **Apex Host:** `https://neevhr.com` redirects permanently (HTTP 308) to `https://www.neevhr.com`.
- **Insecure HTTP:** `http://neevhr.com` and `http://www.neevhr.com` redirect (HTTP 301) to `https://www.neevhr.com`.
- **Trailing Slash Consistency:** Next.js automatically normalizes trailing slashes (e.g. `/pricing/` redirects 308 to `/pricing`).
- **Mixed Content:** Zero mixed content detected; all internal assets are served over HTTPS.

### Robots.txt & Crawler Directives
- **File Location:** `https://www.neevhr.com/robots.txt`
- **Configuration:** Allows public crawling for all user agents (`*`), while explicitly disallowing private routes:
  - `/admin` (Payload CMS dashboard)
  - `/api/` (backend API endpoints)
- **AI Search Crawlers:** Explicitly whitelisted for modern search engines: `Googlebot`, `Bingbot`, `Google-Extended`, `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, and `Applebot`.
- **Sitemap Declaration:** Fully declared pointing to `https://www.neevhr.com/sitemap.xml`.

### XML Sitemap Assessment
- **File Location:** `https://www.neevhr.com/sitemap.xml`
- **Validity:** Valid XML following the Sitemaps.org 0.9 standard.
- **Hygiene:** Every URL declared in the sitemap is indexable, returns HTTP 200, and matches its self-referencing canonical. No redirected, noindex, or 404 URLs are included.
- **Review Timestamps:** Static pages use meaningful content review dates (`LAST_REVIEWED_ISO = "2026-09-24"`), while dynamic blog posts use accurate database publication timestamps.

---

## 3. Metadata & On-Page Semantic Hierarchy

### Title Tags
- Built via central helper [`lib/seo.ts`](file:///Users/prashantdabhi/Documents/HRMS/marketing-site/lib/seo.ts).
- Template: `%s | NeevHR`.
- Homepage title: *"NeevHR - India-first HRMS & Payroll Software"*.
- Commercial pillar titles are specific, brand-balanced, and search-intent-aligned without keyword stuffing (e.g., *"HRMS Software for Indian Companies | NeevHR"*, *"Payroll Software for Indian Companies | PF, ESI, TDS | NeevHR"*).

### Meta Descriptions
- Clamped via `clampDescription()` at sentence or word boundaries to prevent truncation in Google SERPs (~160 character limit).
- All 132 descriptions are unique and accurately summarize the specific page content.

### Heading Structure
- Every page has exactly one `<h1>` defining the primary page topic.
- Content sections use semantic `<h2>` and `<h3>` subheadings.
- Visual elements avoid using heading tags for pure styling.

---

## 4. Structured Data / Schema.org Audit

The structured data implementation adheres strictly to Google Search guidelines:

| Schema Type | Location | Purpose & Validation |
| :--- | :--- | :--- |
| **Organization** | Root Layout (`app/(frontend)/layout.tsx`) | Establishes company entity, 512x512 logo, Bangalore/India area served, contact point, and official social media profiles. |
| **WebSite** | Root Layout | Defines site name, domain URL, language (`en-IN`), and links to the publisher organization entity. |
| **SoftwareApplication** | Homepage (`app/(frontend)/page.tsx`) | Truthful definition: Web operating system, business application category, and core functional capabilities. No fabricated ratings or pricing. |
| **BreadcrumbList** | All Detail & Child Pages | Accurately describes visible hierarchical breadcrumb navigation. |
| **FAQPage** | Homepage, Pillars, & FAQs | Matches visible `<details>` accordion questions and answers. |
| **Article / BlogPosting** | Guides & Blog Posts | Author, publisher, datePublished, dateModified, and canonical URL. |
| **DefinedTerm** | Glossary Pages (`/glossary/*`) | Semantic terminology definitions for statutory and HR concepts. |
| **ContactPage** | `/contact` | Official contact and sales inquiries. |

---

## 5. Performance, Assets & Core Web Vitals

- **Rendering Model:** 127 static pages (SSG) generated at build time; instant TTFB from Nginx and Next.js cache (`x-nextjs-cache: HIT`).
- **Typography:** Self-hosted `Inter` font via `next/font/google` using `display: swap` to prevent FOIT (Flash of Invisible Text).
- **Images & Visuals:**
  - Product showcases use lightweight, responsive CSS/HTML mockups rather than heavy raster screenshots, minimizing page weight.
  - Real mobile screenshots in [`Stage.tsx`](file:///Users/prashantdabhi/Documents/HRMS/marketing-site/components/visuals/Stage.tsx) use explicit CSS container aspect ratios (`aspectRatio: "390 / 844"`), preventing Cumulative Layout Shift (CLS).
  - All 16 `<img>` tags across the site feature descriptive, human-readable `alt` attributes.
- **Cache Policy:** Static assets (fonts, images, icons) are served with far-future `Cache-Control: public, max-age=2592000`.

---

## 6. Security & Header Architecture

- **HTTPS Enforcement:** Strict-Transport-Security (HSTS) with `max-age=63072000; includeSubDomains; preload`.
- **Frame Protection:** `X-Frame-Options: SAMEORIGIN` prevents clickjacking.
- **MIME Sniffing:** `X-Content-Type-Options: nosniff`.
- **Referrer Policy:** `strict-origin-when-cross-origin`.
- **Content Security Policy (CSP):**
  - Drops `'unsafe-eval'` in production frontend.
  - Whitelists only required trusted connections (`googletagmanager.com`, `google-analytics.com`).

---

## 7. Analytics & Conversion Tracking

- **Google Analytics 4:** Successfully active on production with ID `G-ZDBTJ2CRCZ`.
- **SPA Navigation Tracking:** [`AnalyticsListener.tsx`](file:///Users/prashantdabhi/Documents/HRMS/marketing-site/components/site/AnalyticsListener.tsx) listens to `usePathname()` and `useSearchParams()` to trigger `page_view` events with updated document titles on client-side route changes.
- **Granular Conversion Events:**
  - `cta_click`: Captures button text, target URL, and page location (*header*, *footer*, *hero*, *modal*).
  - `scroll_depth`: Captures 25%, 50%, 75%, and 90% reader engagement per page.
  - `demo_start` / `demo_submit`: Full funnel tracking for lead generation.
  - `calculator_use`: Tracks utility calculator interactions.
  - `faq_expand`: Tracks accordion opens.
  - `contact_click`: Tracks clicks on support emails and phone numbers.
  - `store_badge_click`: Tracks interest in upcoming iOS and Android apps.

---

## 8. Prioritized SEO Backlog & Recommendations

| Finding ID | Severity | Item | Recommendation |
| :---: | :---: | :--- | :--- |
| **REC-001** | **P2** | **39 Pre-written Articles Awaiting Database Seeding** | The codebase contains 39 high-quality, comprehensive statutory articles in `marketing-site/lib/seed/articles/`. Run the authorized seed endpoint (`curl "https://www.neevhr.com/api/dev-seed?key=..."`) on the server to make them live on `/blog` and expand indexable content to 171 pages. |
| **REC-002** | **P2** | **Google Search Console Token Configuration** | The infrastructure is already wired to accept `NEXT_PUBLIC_GSC_VERIFICATION` in `.env`. Paste the verification token from Google Search Console into the server's `.env` when setting up Search Console. |
| **REC-003** | **P3** | **Periodic Statutory Review Dates** | Update `LAST_REVIEWED` in [`lib/seo.ts`](file:///Users/prashantdabhi/Documents/HRMS/marketing-site/lib/seo.ts) as new central labour circulars or state budget notifications are gazetted. |
