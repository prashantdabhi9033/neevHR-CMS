import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

// Content-Security-Policy. The front end drops 'unsafe-eval' (Next's client
// runtime and GA do not need eval); 'unsafe-inline' stays because Next injects
// nonce-less inline bootstrap scripts on static pages, and removing it would
// require per-request nonces (forcing dynamic rendering). The Payload admin
// and API keep a more permissive policy so their bundles are not broken.
const cspFor = (allowEval: boolean) =>
  [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "style-src 'self' 'unsafe-inline'",
    `script-src 'self' 'unsafe-inline'${allowEval ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
    "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com",
    "frame-src 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

// React dev tooling needs eval; production builds never do.
const frontendCsp = cspFor(process.env.NODE_ENV === "development");
const adminCsp = cspFor(true);

const baseSecurityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      // Strict front-end policy everywhere (no 'unsafe-eval').
      {
        source: "/:path*",
        headers: [
          ...baseSecurityHeaders,
          { key: "Content-Security-Policy", value: frontendCsp },
        ],
      },
      // Payload admin + API keep 'unsafe-eval'. A later matching rule overrides
      // the same header key, so these replace only the CSP above.
      {
        source: "/admin/:path*",
        headers: [{ key: "Content-Security-Policy", value: adminCsp }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "Content-Security-Policy", value: adminCsp }],
      },
      // Far-future cache for static asset files (fonts, images, icons) served
      // from the app or /public. Excludes /_next, which Next.js already serves
      // immutable, so no duplicate Cache-Control is emitted there.
      {
        source: "/:path((?!_next/).*)\\.(svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf|otf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000" },
        ],
      },
    ];
  },
  async redirects() {
    // Descriptive /hrms/<topic> URLs (the SEO spec's naming) resolve to the
    // canonical pages that already exist, instead of duplicating content.
    const hrmsAliases: Record<string, string> = {
      "employee-management": "/features/employees",
      onboarding: "/features/onboarding",
      attendance: "/features/attendance",
      "leave-management": "/features/leave",
      "shift-management": "/features/rostering",
      payroll: "/payroll",
      "payroll-compliance": "/features/compliance",
      recruitment: "/features/recruitment",
      "performance-management": "/features/performance",
      "expense-management": "/features/expenses",
      "loan-management": "/features/loans",
      compensation: "/features/compensation",
      "employee-self-service": "/mobile",
      "hr-analytics": "/features/reports",
      "employee-documents": "/features/documents",
      "exit-management": "/features/exit",
      "full-and-final-settlement": "/features/full-and-final-settlement",
      manufacturing: "/industries/manufacturing",
      "it-ites": "/industries/it-ites",
      retail: "/industries/retail-qsr",
      healthcare: "/industries/healthcare",
      bfsi: "/industries/bfsi",
      logistics: "/industries/logistics",
      pharma: "/industries/pharma",
      hospitality: "/industries/hospitality",
      "professional-services": "/industries/professional-services",
      staffing: "/industries/staffing-bpo",
    };
    const toolAliases = [
      "pf-calculator",
      "esi-calculator",
      "gratuity-calculator",
      "hra-calculator",
      "bonus-calculator",
      "salary-hike-calculator",
      "tds-calculator",
      "ctc-calculator",
      "leave-encashment-calculator",
      "overtime-calculator",
      "notice-period-calculator",
      "full-and-final-calculator",
    ];
    return [
      // Single canonical host: apex -> www (the canonical tags use www).
      {
        source: "/:path*",
        has: [{ type: "host", value: "neevhr.com" }],
        destination: "https://www.neevhr.com/:path*",
        permanent: true,
      },
      { source: "/about", destination: "/company", permanent: true },
      { source: "/features/payroll", destination: "/payroll", permanent: true },
      { source: "/hrms-comparison", destination: "/compare", permanent: true },
      { source: "/full-and-final-settlement", destination: "/features/full-and-final-settlement", permanent: true },
      { source: "/employee-management", destination: "/features/employees", permanent: true },
      { source: "/attendance", destination: "/features/attendance", permanent: true },
      { source: "/leave-management", destination: "/features/leave", permanent: true },
      { source: "/recruitment", destination: "/features/recruitment", permanent: true },
      { source: "/performance-management", destination: "/features/performance", permanent: true },
      { source: "/employee-self-service", destination: "/mobile", permanent: true },
      { source: "/hr-analytics", destination: "/features/reports", permanent: true },
      { source: "/industries/retail", destination: "/industries/retail-qsr", permanent: true },
      { source: "/industries/staffing", destination: "/industries/staffing-bpo", permanent: true },
      { source: "/in-hand-salary-calculator", destination: "/tools/take-home-salary-calculator", permanent: true },
      { source: "/tools/in-hand-salary-calculator", destination: "/tools/take-home-salary-calculator", permanent: true },
      ...toolAliases.map((t) => ({
        source: `/${t}`,
        destination: `/tools/${t}`,
        permanent: true,
      })),
      ...Object.entries(hrmsAliases).map(([from, to]) => ({
        source: `/hrms/${from}`,
        destination: to,
        permanent: true,
      })),
    ];
  },
};

export default withPayload(nextConfig);
