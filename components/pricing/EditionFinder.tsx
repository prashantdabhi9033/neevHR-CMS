"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/track";
import { editions, needs, type EditionKey } from "@/lib/pricing";

// "Which edition fits?": tick what you need, get the lowest edition that covers it all.

const rank: Record<EditionKey, number> = { core: 0, growth: 1, enterprise: 2 };

export function EditionFinder() {
  const [picked, setPicked] = useState<Set<string>>(new Set());

  const chosen = needs.filter((n) => picked.has(n.label));
  const fit = chosen.reduce<EditionKey>((best, n) => (rank[n.edition] > rank[best] ? n.edition : best), "core");
  const edition = editions.find((e) => e.key === fit)!;
  const drivers = chosen.filter((n) => n.edition === fit && fit !== "core");

  function toggle(label: string) {
    setPicked((s) => {
      const next = new Set(s);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  }

  return (
    <div className="grid gap-6 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)] sm:p-7 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
      <div>
        <p className="text-sm font-semibold text-ink">What do you need? Tick all that apply.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {needs.map((n) => {
            const on = picked.has(n.label);
            return (
              <button
                key={n.label}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(n.label)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm transition-colors ${
                  on
                    ? "bg-brand text-white"
                    : "bg-surface-soft text-body ring-1 ring-line hover:ring-brand/40"
                }`}
              >
                {on && <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />}
                {n.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col rounded-xl bg-brand p-6 text-white" aria-live="polite">
        {chosen.length === 0 ? (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-mist">Your edition</p>
            <p className="mt-2 text-xl font-bold">Pick a few needs</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-mist">
              We will show the edition that covers all of them, so your quote starts in the right place.
            </p>
          </>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-mist">Your edition</p>
            <p className="mt-2 text-3xl font-bold">{edition.name}</p>
            <p className="mt-1 text-sm text-brand-mist">{edition.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              {fit === "core"
                ? `All ${chosen.length} of your needs are covered from Core.`
                : `${drivers.map((d) => d.label).join(", ")} ${drivers.length > 1 ? "need" : "needs"} ${edition.name}. Everything else you picked is included too.`}
            </p>
            <div className="mt-auto pt-6">
              <Button
                href={`/demo?intent=quote&edition=${fit}`}
                variant="inverse"
                className="w-full"
                onClick={() => track("pricing_finder_quote", { edition: fit, needs: chosen.map((n) => n.label).join("|") })}
              >
                Get a {edition.name} quote
              </Button>
              <button type="button" onClick={() => setPicked(new Set())} className="mt-3 w-full text-xs font-medium text-brand-mist hover:text-white">
                Start again
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
