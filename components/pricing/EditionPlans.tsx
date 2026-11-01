"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/track";
import { editions, featureGroups, type Cell, type Feature } from "@/lib/pricing";

// Edition cards: the promise and the highlights first, so the three can be read side by side. The full list of what an
// edition adds sits under one collapsible heading per module, and each feature opens in place to its description.

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

function Chevron({ open, className = "" }: { open: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""} ${className}`} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
        className="flex w-full items-start gap-2 py-1.5 text-left text-sm text-body hover:text-ink"
      >
        <Icon name="check" className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.4} />
        <span className="flex flex-1 flex-wrap items-center gap-x-1.5 gap-y-1">
          <span className={open ? "font-medium text-ink" : ""}>{f.name}</span>
          {f.level && (
            <span className="rounded bg-accent-tint px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide text-accent-dark">
              {f.level}
            </span>
          )}
          {f.status && (
            <span className="rounded bg-cream px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide text-muted">
              Store release pending
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

function GroupBlock({ s, edition }: { s: Section; edition: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-line first:border-t-0">
      <h4>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-2 py-2.5 text-left text-[13px] font-semibold text-ink hover:text-brand"
        >
          <span className="flex-1">{s.group}</span>
          <span className="tnum text-xs font-medium text-muted">{s.items.length}</span>
          <Chevron open={open} className="text-muted" />
        </button>
      </h4>
      <ul hidden={!open} className="pb-2.5">
        {s.items.map((f) => (
          <FeatureRow key={f.name} f={f} edition={edition} />
        ))}
      </ul>
    </div>
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
            <div className="p-6 sm:p-7">
              <h2 className="text-xl font-bold text-ink">{e.name}</h2>
              <p className="mt-0.5 text-sm font-medium text-accent-dark">{e.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-body lg:min-h-[66px]">{e.bestFor}</p>
              <Button
                href={`/demo?intent=quote&edition=${e.key}`}
                variant={e.recommended ? "primary" : "secondary"}
                className="mt-5 w-full"
                onClick={() => track("pricing_quote_click", { edition: e.key, location: "plans" })}
              >
                Get {e.key === "enterprise" ? "an" : "a"} {e.name} quote
              </Button>

              <p className="mt-6 text-sm font-bold text-ink">{e.plus ?? "Everything to run HR and payroll"}</p>
              <ul className="mt-3 space-y-2.5 lg:min-h-[238px]">
                {e.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm leading-snug text-body">
                    <span className="mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-tint text-accent-dark">
                      <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line px-6 pb-3 pt-4 sm:px-7">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                {e.plus ? `All ${count} additions, by module` : `All ${count} features, by module`}
              </h3>
              <div className="mt-1">
                {e.sections.map((s) => (
                  <GroupBlock key={s.group} s={s} edition={e.key} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

