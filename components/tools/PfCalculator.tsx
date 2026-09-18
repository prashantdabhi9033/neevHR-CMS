"use client";

import { useState } from "react";
import { NumberField, SegField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

const CEILING = 15000;

export function PfCalculator() {
  const [basic, setBasic] = useState("30000");
  const [cap, setCap] = useState<"cap" | "actual">("cap");

  const b = parseFloat(basic) || 0;
  const pfWage = cap === "cap" ? Math.min(b, CEILING) : b;
  const employee = 0.12 * pfWage;
  const employerTotal = 0.12 * pfWage;
  const eps = 0.0833 * Math.min(pfWage, CEILING); // ~ up to Rs 1,250
  const epf = Math.max(0, employerTotal - eps);
  const monthly = employee + employerTotal;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField label="Basic salary (+ DA), per month" value={basic} onChange={setBasic} />
        <SegField
          label="PF wage basis"
          value={cap}
          onChange={setCap}
          options={[
            { label: "Cap at ₹15,000", value: "cap" },
            { label: "On actual basic", value: "actual" },
          ]}
        />
        <p className="text-xs text-muted">
          Contribution rate is 12% each for employee and employer. Many
          employers cap PF wages at the ₹15,000 statutory ceiling.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Total monthly PF
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(monthly)}</p>
        <p className="mt-1 text-sm text-muted">{inr(monthly * 12)} per year</p>

        <div className="mt-5">
          <ResultRow label="PF wage" value={inr(pfWage)} />
          <ResultRow label="Employee (12%)" value={inr(employee)} />
          <ResultRow label="Employer · EPS" value={inr(eps)} />
          <ResultRow label="Employer · EPF" value={inr(epf)} />
          <ResultRow label="Total per month" value={inr(monthly)} strong />
        </div>
        <p className="mt-4 text-xs text-muted">
          Employer share splits into EPS (8.33%, up to ₹1,250) and EPF. EDLI and
          admin charges (~0.5%) are not shown. Indicative only.
        </p>
      </div>
    </div>
  );
}
