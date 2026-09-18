"use client";

import { useState } from "react";
import { NumberField, SegField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

export function HraCalculator() {
  const [basic, setBasic] = useState("40000");
  const [hra, setHra] = useState("20000");
  const [rent, setRent] = useState("22000");
  const [metro, setMetro] = useState<"metro" | "non">("metro");

  const b = parseFloat(basic) || 0;
  const h = parseFloat(hra) || 0;
  const r = parseFloat(rent) || 0;
  const pctOfBasic = (metro === "metro" ? 0.5 : 0.4) * b;
  const rentMinus10 = Math.max(0, r - 0.1 * b);
  const exempt = Math.max(0, Math.min(h, rentMinus10, pctOfBasic));
  const taxable = Math.max(0, h - exempt);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField label="Basic salary (+ DA), per month" value={basic} onChange={setBasic} />
        <NumberField label="HRA received, per month" value={hra} onChange={setHra} />
        <NumberField label="Rent paid, per month" value={rent} onChange={setRent} />
        <SegField
          label="City"
          value={metro}
          onChange={setMetro}
          options={[
            { label: "Metro (50%)", value: "metro" },
            { label: "Non-metro (40%)", value: "non" },
          ]}
        />
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          HRA exempt (per month)
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(exempt)}</p>
        <p className="mt-1 text-sm text-muted">{inr(exempt * 12)} per year</p>

        <div className="mt-5">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
            Least of the three is exempt
          </p>
          <ResultRow label="Actual HRA" value={inr(h)} />
          <ResultRow label="Rent − 10% of basic" value={inr(rentMinus10)} />
          <ResultRow label={`${metro === "metro" ? "50%" : "40%"} of basic`} value={inr(pctOfBasic)} />
          <ResultRow label="Exempt" value={inr(exempt)} strong />
        </div>
        <p className="mt-4 text-sm text-body">
          Taxable HRA: <span className="tnum font-semibold text-ink">{inr(taxable)}</span> / month
        </p>
        <p className="mt-2 text-xs text-muted">
          Section 10(13A) of the Income Tax Act (old regime). Indicative only.
        </p>
      </div>
    </div>
  );
}
