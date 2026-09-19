import type { MetadataRoute } from "next";
import { getPayload } from "payload";
import config from "@payload-config";
import { site } from "@/lib/site";
import { moduleList } from "@/lib/modules";
import { tools } from "@/lib/tools";
import { industries } from "@/lib/industries";

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

  const home: Entry = {
    url: site.url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  };

  // High-intent commercial pages.
  const primary: Entry[] = [
    "/features",
    "/pricing",
    "/compare",
    "/security",
    "/mobile",
    "/integrations",
    "/industries",
    "/tools",
    "/demo",
    "/contact",
  ].map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const secondary: Entry[] = [
    "/blog",
    "/faq",
    "/company",
    "/privacy",
    "/terms",
    "/dpdp",
  ].map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const detail: Entry[] = [
    ...moduleList.map((m) => `/features/${m.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...tools.map((t) => `/tools/${t.slug}`),
  ].map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blog = await blogEntries(now);

  return [home, ...primary, ...detail, ...secondary, ...blog];
}
