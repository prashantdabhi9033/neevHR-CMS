import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { site } from "@/lib/site";
import { moduleList } from "@/lib/modules";
import { tools } from "@/lib/tools";
import { industries } from "@/lib/industries";
import { guides } from "@/lib/guides";
import { glossary } from "@/lib/glossary";
import { states } from "@/lib/states";
import { LAST_REVIEWED_ISO } from "@/lib/seo";

type Entry = MetadataRoute.Sitemap[number];

async function blogEntries(now: Date): Promise<Entry[]> {
  try {
    const payload = await getPayload({ config });
    const { docs } = await payload.find({
      collection: "posts",
      where: { _status: { equals: "published" } },
      limit: 500,
      depth: 0,
      pagination: false,
    });
    return docs.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt ?? now),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  // Static pages carry the date their content was last reviewed, not the
  // build time, so lastmod stays a meaningful signal for crawlers.
  const reviewed = new Date(LAST_REVIEWED_ISO);
  const entry = (path: string, priority: number): Entry => ({
    url: `${site.url}${path}`,
    lastModified: reviewed,
    changeFrequency: "monthly",
    priority,
  });

  const home: Entry = { ...entry("", 1), changeFrequency: "weekly" };

  // Pillar and high-intent commercial pages.
  const primary = [
    "/hrms",
    "/payroll",
    "/india-payroll",
    "/features",
    "/pricing",
    "/demo",
    "/security",
    "/integrations",
    "/industries",
    "/compare",
    "/mobile",
  ].map((r) => entry(r, 0.9));

  const detail = [
    ...moduleList.filter((m) => m.slug !== "payroll").map((m) => `/features/${m.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...tools.map((t) => `/tools/${t.slug}`),
    ...guides.map((g) => `/${g.slug}`),
    ...states.map((st) => `/india/payroll/${st.slug}`),
  ].map((r) => entry(r, 0.7));

  const resources = [
    "/resources",
    "/tools",
    "/glossary",
    ...glossary.map((g) => `/glossary/${g.slug}`),
    "/blog",
    "/faq",
  ].map((r) => entry(r, 0.6));

  const company = ["/company", "/contact", "/privacy", "/terms", "/dpdp"].map((r) =>
    entry(r, 0.4)
  );

  const blog = await blogEntries(now);

  return [home, ...primary, ...detail, ...resources, ...company, ...blog];
}
