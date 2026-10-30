"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/track";
import { editions, featureGroups, type Cell, type Feature } from "@/lib/pricing";

// Edition columns: each lists what it adds over the previous edition, under
// section headings, and every feature expands in place to its description.

type Item = Feature & { level?: string };
type Section = { group: string; items: Item[] };

const label = (c: Cell) => (typeof c === "string" ? c : undefined);

// Features an edition adds: first edition that includes it, or a new level ("Advanced").
function sectionsFor(i: number): Section[] {
  return featureGroups
    .map((g) => ({
      group: g.group,
      items: g.features
        .filter((f) => {
          const c = f.tiers[i];
          if (c === false || c === "Quoted") return false;
          return i === 0 || f.tiers[i - 1] === false || String(f.tiers[i - 1]) !== String(c);
        })
        .map((f) => ({ ...f, level: label(f.tiers[i]) })),
    }))
    .filter((s) => s.items.length > 0);
}

const plans = editions.map((e, i) => ({ ...e, sections: sectionsFor(i) }));

function FeatureRow({ f, edition }: { f: Item; edition: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => {
          setOpen(!open);
          if (!open) track("pricing_feature_expand", { edition, feature: f.name });
        }}
        className="group flex w-full items-start gap-2 py-1.5 text-left text-sm text-body hover:text-ink"
      >
        <svg
          viewBox="0 0 24 24"
          className={`mt-[3px] h-3.5 w-3.5 shrink-0 text-accent transition-transform ${open ? "rotate-90" : ""}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9 6.5v11l8-5.5-8-5.5Z" />
        </svg>
        <span className="flex flex-1 flex-wrap items-center gap-x-1.5 gap-y-1">
          <span className={open ? "font-medium text-ink" : ""}>{f.name}</span>
          {f.level && (
            <span className="rounded bg-accent-tint px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide text-accent-dark">
              {f.level}
            </span>
          )}
          {f.status && (
            <span className="rounded bg-cream px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide text-muted">
              {f.status === "soon" ? "Coming soon" : "Planned"}
            </span>
          )}
        </span>
      </button>
      {open && (
        <div className="mb-2 ml-[22px] rounded-lg bg-surface-soft px-3 py-2.5 text-[13px] leading-relaxed text-body">
          {f.desc}
          {f.href && (
            <Link href={f.href} className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-brand hover:underline">
              Learn more <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      )}
    </li>
  );
}

export function EditionPlans() {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-3">
      {plans.map((e) => {
        const count = e.sections.reduce((n, s) => n + s.items.length, 0);
        return (
          <div
            key={e.key}
            className={`relative flex flex-col rounded-2xl border bg-white ${
              e.recommended
                ? "border-brand shadow-[var(--shadow-float)] ring-1 ring-brand"
                : "border-line shadow-[var(--shadow-card)]"
            }`}
          >
            {e.recommended && (
              <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                Recommended
              </span>
            )}
            <div className="border-b border-line p-7">
              <h2 className="text-xl font-bold text-ink">{e.name}</h2>
              <p className="mt-0.5 text-sm font-medium text-accent-dark">{e.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-body lg:min-h-[66px]">{e.bestFor}</p>
              <Button
                href={`/demo?intent=quote&edition=${e.key}`}
                variant={e.recommended ? "primary" : "secondary"}
                className="mt-5 w-full"
                onClick={() => track("pricing_quote_click", { edition: e.key, location: "plans" })}
              >
                Get a {e.name} quote
              </Button>
            </div>

            <div className="p-7 pt-6">
              <p className="text-sm font-bold text-ink">
                {e.plus ?? "Everything to run HR and payroll"}
                <span className="ml-1.5 font-medium text-muted">({count})</span>
              </p>
              {e.sections.map((s) => (
                <div key={s.group} className="mt-5">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-brand">{s.group}</h3>
                  <ul className="mt-1.5">
                    {s.items.map((f) => (
                      <FeatureRow key={f.name} f={f} edition={e.key} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
