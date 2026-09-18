"use client";

import { useState } from "react";
import { NumberField, SegField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

export function HikeCalculator() {
  const [mode, setMode] = useState<"new" | "pct">("new");
  const [current, setCurrent] = useState("800000");
  const [newSalary, setNewSalary] = useState("960000");
  const [pct, setPct] = useState("20");

  const cur = parseFloat(current) || 0;

  let resultNew: number;
  let resultPct: number;
  if (mode === "new") {
    resultNew = parseFloat(newSalary) || 0;
    resultPct = cur > 0 ? ((resultNew - cur) / cur) * 100 : 0;
  } else {
    resultPct = parseFloat(pct) || 0;
    resultNew = cur * (1 + resultPct / 100);
  }
  const increase = resultNew - cur;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <SegField
          label="Calculate by"
          value={mode}
          onChange={setMode}
          options={[
            { label: "New salary", value: "new" },
            { label: "Hike %", value: "pct" },
          ]}
        />
        <NumberField label="Current salary (CTC)" value={current} onChange={setCurrent} />
        {mode === "new" ? (
          <NumberField label="New salary (CTC)" value={newSalary} onChange={setNewSalary} />
        ) : (
          <NumberField label="Hike" value={pct} onChange={setPct} suffix="%" />
        )}
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {mode === "new" ? "Your hike" : "Your new salary"}
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">
          {mode === "new"
            ? `${resultPct >= 0 ? "+" : ""}${resultPct.toFixed(1)}%`
            : inr(resultNew)}
        </p>
        <div className="mt-5">
          <ResultRow label="Current" value={inr(cur)} />
          <ResultRow label="New" value={inr(resultNew)} />
          <ResultRow
            label="Increase"
            value={`${increase >= 0 ? "+" : ""}${inr(increase)}`}
          />
          <ResultRow
            label="Hike"
            value={`${resultPct >= 0 ? "+" : ""}${resultPct.toFixed(1)}%`}
            strong
          />
        </div>
        <p className="mt-4 text-xs text-muted">
          A simple percentage on annual CTC. Your in-hand change depends on the
          new structure and tax.
        </p>
      </div>
    </div>
  );
}
