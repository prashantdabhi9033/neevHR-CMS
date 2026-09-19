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

const frontendCsp = cspFor(false);
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
    ];
  },
  async redirects() {
    return [{ source: "/about", destination: "/company", permanent: true }];
  },
};

export default withPayload(nextConfig);
