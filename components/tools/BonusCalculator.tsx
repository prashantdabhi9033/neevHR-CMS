"use client";

import { useState } from "react";
import { NumberField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

const ELIGIBILITY_CEILING = 21000; // monthly Basic + DA
const CALC_CEILING = 7000; // or minimum wage, whichever is higher

export function BonusCalculator() {
  const [basic, setBasic] = useState("18000");
  const [rate, setRate] = useState("8.33");
  const [months, setMonths] = useState("12");

  const b = parseFloat(basic) || 0;
  const r = Math.min(20, Math.max(8.33, parseFloat(rate) || 0));
  const m = Math.min(12, Math.max(0, parseFloat(months) || 0));
  const eligible = b <= ELIGIBILITY_CEILING;
  const bonusWage = Math.min(b, CALC_CEILING);
  const bonus = bonusWage * (r / 100) * m;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField
          label="Basic + DA, per month"
          value={basic}
          onChange={setBasic}
          hint={`Eligible if ≤ ${inr(ELIGIBILITY_CEILING)} per month.`}
        />
        <NumberField
          label="Bonus rate"
          value={rate}
          onChange={setRate}
          suffix="%"
          hint="Between 8.33% (minimum) and 20% (maximum)."
        />
        <NumberField
          label="Months worked in the year"
          value={months}
          onChange={setMonths}
          suffix="mo"
        />
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Annual bonus payable
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(bonus)}</p>
        {!eligible && (
          <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
            Employees earning above {inr(ELIGIBILITY_CEILING)} per month are
            generally outside the Act&apos;s eligibility.
          </p>
        )}
        <div className="mt-5">
          <ResultRow label="Calculation wage" value={inr(bonusWage)} />
          <ResultRow label="Rate" value={`${r}%`} />
          <ResultRow label="Months" value={String(m)} />
          <ResultRow label="Bonus" value={inr(bonus)} strong />
        </div>
        <p className="mt-4 text-xs text-muted">
          Payment of Bonus Act, 1965. Bonus is computed on the lower of Basic +
          DA and {inr(CALC_CEILING)} (or the minimum wage, if higher). Indicative
          only.
        </p>
      </div>
    </div>
  );
}
