import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Public marketing pages are open to every search engine and AI crawler; only
// the CMS admin and API are closed. Named AI/search agents get an explicit
// rule so a future blanket change cannot silently block them.
const privatePaths = ["/admin", "/api/"];
const namedCrawlers = [
  "Googlebot",
  "Bingbot",
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: privatePaths },
      { userAgent: namedCrawlers, allow: "/", disallow: privatePaths },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
