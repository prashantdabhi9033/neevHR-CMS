import { marked } from "marked";

export type CategoryMeta = { label: string; from: string; to: string; fg: string };

const CATEGORY: Record<string, CategoryMeta> = {
  payroll: { label: "Payroll", from: "#4338ca", to: "#6366f1", fg: "#fff" },
  compliance: { label: "Compliance", from: "#059669", to: "#10b981", fg: "#fff" },
  time: { label: "Attendance & leave", from: "#0891b2", to: "#22d3ee", fg: "#fff" },
  performance: { label: "Performance", from: "#7c3aed", to: "#a78bfa", fg: "#fff" },
  recruitment: { label: "Recruitment", from: "#b45309", to: "#f59e0b", fg: "#fff" },
  "hr-strategy": { label: "HR strategy", from: "#0f172a", to: "#334155", fg: "#fff" },
  product: { label: "Product", from: "#4338ca", to: "#10b981", fg: "#fff" },
};

export function categoryOf(c?: string | null): CategoryMeta {
  return CATEGORY[c ?? "hr-strategy"] ?? CATEGORY["hr-strategy"];
}

export function readMins(md?: string | null): number {
  const words = (md ?? "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}

marked.setOptions({ gfm: true, breaks: false });

export function mdToHtml(md: string): string {
  return marked.parse(md) as string;
}

export type TocItem = { id: string; text: string; level: 2 | 3 };

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

// Renders markdown and injects stable id anchors on h2/h3 headings, returning
// the HTML plus a table of contents for in-page passage navigation.
export function renderArticle(md: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();
  const html = (marked.parse(md) as string).replace(
    /<h([23])>([\s\S]*?)<\/h\1>/g,
    (_m, lvl: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      let id = slugify(text) || "section";
      const base = id;
      let n = 2;
      while (used.has(id)) id = `${base}-${n++}`;
      used.add(id);
      toc.push({ id, text, level: Number(lvl) as 2 | 3 });
      return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
    },
  );
  return { html, toc };
}
