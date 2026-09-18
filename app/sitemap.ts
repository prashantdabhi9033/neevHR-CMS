import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { moduleList } from "@/lib/modules";
import { tools } from "@/lib/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/product",
    "/compare",
    "/security",
    "/integrations",
    "/mobile",
    "/pricing",
    "/blog",
    "/faq",
    "/tools",
    "/company",
    "/contact",
    "/demo",
    "/privacy",
    "/terms",
    "/dpdp",
    ...moduleList.map((m) => `/product/${m.slug}`),
    ...tools.map((t) => `/tools/${t.slug}`),
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
