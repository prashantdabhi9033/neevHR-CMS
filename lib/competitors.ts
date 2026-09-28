// Factual comparison pages (SEO spec §14). Competitor facts come only from
// each vendor's own public website, with the source URL per row and the date
// checked. Re-check before republishing; never add "better than" claims.

export type Competitor = {
  slug: string;
  name: string;
  checked: string;
  checkedIso: string;
  checkedMonth: string;
  metaDesc: string;
  intro: string;
  rows: { capability: string; neevhr: string; them: string; source?: string }[];
  themFit: string[];
  neevFit: string[];
  faqs: { q: string; a: string }[];
};

export const competitors: Competitor[] = [];

export const competitorBySlug: Record<string, Competitor> = Object.fromEntries(
  competitors.map((c) => [c.slug, c])
);
