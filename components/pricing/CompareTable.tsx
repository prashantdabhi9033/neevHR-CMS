"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/track";
import { editions, featureCount, featureGroups, type Cell, type Feature } from "@/lib/pricing";

// Full edition comparison: search, "differences only", collapsible groups,
// sticky edition header under the site header (h-16).

const statusLabel = { soon: "Coming soon", planned: "Planned" } as const;

function CellMark({ cell, status }: { cell: Cell; status?: Feature["status"] }) {
  if (cell === false) {
    return (
      <span className="text-line" aria-label="Not included">
        <span aria-hidden="true" className="inline-block h-0.5 w-3.5 rounded bg-slate-300" />
      </span>
    );
  }
  if (status) {
    return (
      <span className="inline-flex rounded-full bg-cream px-2 py-0.5 text-[11px] font-semibold text-muted">
        {status === "soon" ? "Soon" : "Planned"}
      </span>
    );
  }
  if (cell === true) {
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-accent-tint text-accent-dark" aria-label="Included">
        <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
      </span>
    );
  }
  return <span className="text-xs font-semibold text-accent-dark">{cell}</span>;
}

const differs = (f: Feature) => new Set(f.tiers.map(String)).size > 1;

export function CompareTable() {
  const [query, setQuery] = useState("");
  const [diffOnly, setDiffOnly] = useState(false);
  const [closed, setClosed] = useState<Set<string>>(new Set());

  const q = query.trim().toLowerCase();
  const groups = useMemo(
    () =>
      featureGroups
        .map((g) => ({
          ...g,
          features: g.features.filter(
            (f) =>
              (!diffOnly || differs(f)) &&
              (!q || `${g.group} ${f.name} ${f.desc}`.toLowerCase().includes(q))
          ),
        }))
        .filter((g) => g.features.length > 0),
    [q, diffOnly]
  );
  const shown = groups.reduce((n, g) => n + g.features.length, 0);
  const searching = q.length > 0;

  function toggle(group: string) {
    setClosed((s) => {
      const next = new Set(s);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search features</span>
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => q && track("pricing_compare_search", { query: q })}
            placeholder={`Search ${featureCount} features, e.g. Form 16`}
            className="h-11 w-full rounded-xl border border-line bg-white pl-9 pr-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            role="switch"
            aria-checked={diffOnly}
            onClick={() => {
              setDiffOnly(!diffOnly);
              track("pricing_compare_diff", { on: !diffOnly });
            }}
            className="inline-flex h-11 items-center gap-2.5 rounded-xl px-3 text-sm font-medium text-ink ring-1 ring-line hover:bg-surface-soft"
          >
            <span className={`relative h-5 w-9 rounded-full transition-colors ${diffOnly ? "bg-brand" : "bg-slate-300"}`}>
              <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${diffOnly ? "left-[18px]" : "left-0.5"}`} />
            </span>
            Show differences only
          </button>
          <button
            type="button"
            onClick={() => setClosed(closed.size ? new Set() : new Set(featureGroups.map((g) => g.group)))}
            className="inline-flex h-11 items-center rounded-xl px-3 text-sm font-medium text-brand hover:bg-brand-tint"
          >
            {closed.size ? "Expand all" : "Collapse all"}
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
        {/* Sticky edition header */}
        <div className="sticky top-16 z-20 grid grid-cols-[minmax(0,1fr)_repeat(3,60px)] items-end gap-1 rounded-t-2xl border-b border-line bg-white/95 px-4 py-3 backdrop-blur sm:grid-cols-[minmax(0,1fr)_repeat(3,128px)] sm:px-6 lg:grid-cols-[minmax(0,1fr)_repeat(3,168px)]">
          <p className="text-xs font-medium text-muted">
            {shown === featureCount ? `${featureCount} features` : `${shown} of ${featureCount} features`}
          </p>
          {editions.map((e) => (
            <div key={e.key} className="text-center">
              <p className={`text-xs font-bold sm:text-sm ${e.recommended ? "text-brand" : "text-ink"}`}>{e.name}</p>
              <Link
                href={`/demo?intent=quote&edition=${e.key}`}
                onClick={() => track("pricing_quote_click", { edition: e.key, location: "compare" })}
                className="mt-1 hidden text-xs font-semibold text-accent-dark hover:underline sm:inline-block"
              >
                Get a quote
              </Link>
            </div>
          ))}
        </div>

        {groups.length === 0 && (
          <div className="px-6 py-14 text-center">
            <p className="font-semibold text-ink">No features match &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-sm text-muted">Try another word, or ask us: we will tell you how NeevHR handles it.</p>
            <div className="mt-5 flex justify-center gap-3">
              <Button variant="secondary" onClick={() => { setQuery(""); setDiffOnly(false); }}>
                Clear filters
              </Button>
              <Button href="/demo">Ask in a demo</Button>
            </div>
          </div>
        )}

        {groups.map((g, gi) => {
          const open = searching || !closed.has(g.group);
          return (
            <section key={g.group} className={gi > 0 ? "border-t border-line" : ""}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => toggle(g.group)}
                  className="flex w-full items-center gap-3 bg-surface-soft px-4 py-3 text-left sm:px-6"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-brand ring-1 ring-line">
                    <Icon name={g.icon} className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-[15px] font-semibold text-ink">{g.group}</span>
                  <span className="text-xs text-muted">{g.features.length}</span>
                  <svg viewBox="0 0 24 24" className={`h-4 w-4 text-muted transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </h3>
              {open && (
                <ul className="divide-y divide-line/70">
                  {g.features.map((f) => (
                    <li
                      key={f.name}
                      className="grid grid-cols-[minmax(0,1fr)_repeat(3,60px)] items-center gap-1 px-4 py-3.5 hover:bg-surface-soft/60 sm:grid-cols-[minmax(0,1fr)_repeat(3,128px)] sm:px-6 lg:grid-cols-[minmax(0,1fr)_repeat(3,168px)]"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-ink">
                          {f.href ? (
                            <Link href={f.href} className="hover:text-brand hover:underline">
                              {f.name}
                            </Link>
                          ) : (
                            f.name
                          )}
                          {f.status && (
                            <span className="rounded-full bg-cream px-2 py-0.5 text-[11px] font-semibold text-muted">
                              {statusLabel[f.status]}
                            </span>
                          )}
                        </p>
                        <p className="mt-0.5 hidden text-xs leading-relaxed text-muted sm:block">{f.desc}</p>
                      </div>
                      {f.tiers.map((c, i) => (
                        <div key={editions[i].key} className="flex justify-center">
                          <CellMark cell={c} status={f.status} />
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-muted">
        &ldquo;Soon&rdquo; and &ldquo;Planned&rdquo; items are not available today. Your quote confirms exactly what is included for your team.
      </p>
    </div>
  );
}
