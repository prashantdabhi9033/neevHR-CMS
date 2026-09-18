"use client";

import { useState } from "react";
import { NumberField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

const CAP = 2000000; // Rs 20 lakh max under the Payment of Gratuity Act

export function GratuityCalculator() {
  const [salary, setSalary] = useState("60000");
  const [years, setYears] = useState("7");

  const s = parseFloat(salary) || 0;
  const y = parseFloat(years) || 0;
  const raw = (15 * s * y) / 26;
  const payable = Math.min(raw, CAP);
  const eligible = y >= 5;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField
          label="Last drawn salary (Basic + DA), per month"
          value={salary}
          onChange={setSalary}
        />
        <NumberField
          label="Years of service"
          value={years}
          onChange={setYears}
          suffix="yrs"
          hint="6 months or more counts as a full year."
        />
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Gratuity payable
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(payable)}</p>
        {!eligible && (
          <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
            Gratuity is generally payable only after 5 years of continuous
            service.
          </p>
        )}
        <div className="mt-5">
          <ResultRow label="Formula" value="15 × salary × years ÷ 26" />
          <ResultRow label="Computed" value={inr(raw)} />
          {raw > CAP && (
            <ResultRow label="Statutory cap" value={inr(CAP)} />
          )}
          <ResultRow label="Payable" value={inr(payable)} strong />
        </div>
        <p className="mt-4 text-xs text-muted">
          Based on the Payment of Gratuity Act, 1972 (covered establishments).
          The maximum is {inr(CAP)}. Indicative only.
        </p>
      </div>
    </div>
  );
}
