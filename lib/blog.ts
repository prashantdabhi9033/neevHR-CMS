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
