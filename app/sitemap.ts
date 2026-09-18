import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { moduleList } from "@/lib/modules";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/demo",
    "/pricing",
    "/blog",
    "/company",
    "/contact",
    "/privacy",
    "/terms",
    "/dpdp",
    ...moduleList.map((m) => `/product/${m.slug}`),
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
