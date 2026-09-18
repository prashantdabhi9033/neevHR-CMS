"use client";

import { useState } from "react";
import { NumberField, SegField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

const PF_CEILING = 15000;

// New regime FY 2026-27: standard deduction 75,000; 87A rebate makes tax nil
// up to taxable 12,00,000; slabs 5/10/15/20/25/30% in 4L bands; 4% cess.
function newRegimeTax(taxable: number): number {
  if (taxable <= 1200000) return 0;
  const bounds = [400000, 800000, 1200000, 1600000, 2000000, 2400000, Infinity];
  const rates = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3];
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < bounds.length; i++) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, bounds[i]) - prev) * rates[i];
    prev = bounds[i];
  }
  return tax * 1.04;
}

export function TakeHomeCalculator() {
  const [ctc, setCtc] = useState("1200000");
  const [basicPct, setBasicPct] = useState<"50" | "40">("50");

  const c = parseFloat(ctc) || 0;
  const basic = (parseInt(basicPct) / 100) * c;
  const basicMonthly = basic / 12;
  const pfWageM = Math.min(basicMonthly, PF_CEILING);
  const employerPf = 0.12 * pfWageM * 12;
  const gratuity = 0.0481 * basic;
  const gross = Math.max(0, c - employerPf - gratuity);

  const employeePf = 0.12 * pfWageM * 12;
  const pt = 2400;
  const taxable = Math.max(0, gross - 75000);
  const tds = newRegimeTax(taxable);
  const inHandAnnual = Math.max(0, gross - employeePf - pt - tds);
  const inHandMonthly = inHandAnnual / 12;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField label="Annual CTC" value={ctc} onChange={setCtc} />
        <SegField
          label="Basic as % of CTC"
          value={basicPct}
          onChange={setBasicPct}
          options={[
            { label: "50%", value: "50" },
            { label: "40%", value: "40" },
          ]}
        />
        <p className="text-xs text-muted">
          A simplified estimate using the new tax regime and a standard salary
          structure. Your actual structure and declarations will differ.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Estimated monthly in-hand
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(inHandMonthly)}</p>
        <p className="mt-1 text-sm text-muted">{inr(inHandAnnual)} per year</p>

        <div className="mt-5">
          <ResultRow label="Gross (CTC − employer PF − gratuity)" value={inr(gross)} />
          <ResultRow label="− Employee PF" value={inr(employeePf)} />
          <ResultRow label="− Professional tax" value={inr(pt)} />
          <ResultRow label="− TDS (new regime)" value={inr(tds)} />
          <ResultRow label="In-hand per year" value={inr(inHandAnnual)} strong />
        </div>
        <p className="mt-4 text-xs text-muted">
          Indicative only, not tax advice. TDS assumes the new regime with the
          ₹75,000 standard deduction and the Section 87A rebate.
        </p>
      </div>
    </div>
  );
}
