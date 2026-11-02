import type { Metadata } from "next";
import { site } from "@/lib/site";

// One place that builds per-page metadata so every indexable page gets a
// unique title + description, a self-referencing canonical, and complete
// Open Graph + X (Twitter) tags with the shared social image. Child segments
// replace parent metadata keys shallowly, so a page that sets `openGraph`
// without images would otherwise lose og:image entirely.

export const OG_IMAGE = {
  url: `${site.url}/og.png`,
  width: 1200,
  height: 630,
  alt: "NeevHR, India-first HRMS and payroll software",
};

// Keep descriptions within what search results display (~160 chars): cut at
// the last full sentence if that leaves enough, otherwise at a word boundary.
export function clampDescription(d: string, max = 160): string {
  if (d.length <= max) return d;
  const cut = d.slice(0, max);
  const sentence = cut.lastIndexOf(". ");
  if (sentence >= 90) return cut.slice(0, sentence + 1);
  return `${cut.slice(0, cut.lastIndexOf(" ", max - 3)).replace(/[,;:]$/, "")}...`;
}

const TITLE_MAX = 65;

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  absoluteTitle = false,
  noindex = false,
  publishedTime,
  modifiedTime,
  authors,
  image,
}: {
  /** Page title without the "| NeevHR" suffix (added by the layout template). */
  title: string;
  description: string;
  /** Path beginning with "/" (canonical is built from site.url + path). */
  path: string;
  type?: "website" | "article";
  /** When true the title is used verbatim (no template suffix). */
  absoluteTitle?: boolean;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  image?: string;
}): Metadata {
  description = clampDescription(description);
  // A long title loses the brand suffix rather than being cut off in search results.
  if (!absoluteTitle && `${title} | ${site.name}`.length > TITLE_MAX) absoluteTitle = true;
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const url = `${site.url}${path === "/" ? "" : path}`;
  const images = image
    ? [{ url: image, alt: title }]
    : [OG_IMAGE];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_IN",
      siteName: site.name,
      url,
      title: fullTitle,
      description,
      images,
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: images.map((i) => i.url),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** The last date the public pages as a whole were changed, for the sitemap. Not a statutory review date. */
export const CONTENT_UPDATED_ISO = "2026-11-01";

/** Pages changed after CONTENT_UPDATED_ISO keep their own date, so lastmod stays honest. */
export const PAGE_UPDATED_ISO: Record<string, string> = {
  "": "2026-11-03",
  "/faq": "2026-11-03",
  "/resources": "2026-11-03",
};

/** SoftwareApplication data shared by the pillar pages. No ratings or reviews: there are none to state. */
export const softwareJsonLd = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${site.url}/#software`,
  name: site.name,
  url: site.url,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Human Resource Management Software",
  operatingSystem: "Web",
  description,
  areaServed: { "@type": "Country", name: "India" },
  inLanguage: "en-IN",
  publisher: { "@id": `${site.url}/#organization` },
});

/** Review date shown on statutory / compliance content (DD MMM YYYY). */
export const LAST_REVIEWED = "29 Oct 2026";
export const LAST_REVIEWED_ISO = "2026-10-29";
