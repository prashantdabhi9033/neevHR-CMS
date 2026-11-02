import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Public marketing pages are open to search engines and AI search crawlers; only
// the CMS admin and API are closed. Named agents get an explicit rule so a future
// blanket change cannot silently block them. GPTBot is OpenAI's training crawler
// and is closed by owner decision (03 Nov 2026); OAI-SearchBot, which ChatGPT Search
// uses, stays open and is a separate agent. Other crawler rules are unchanged.
const privatePaths = ["/admin", "/api/"];
const namedCrawlers = [
  "Googlebot",
  "Bingbot",
  "Google-Extended",
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
      { userAgent: "GPTBot", disallow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
