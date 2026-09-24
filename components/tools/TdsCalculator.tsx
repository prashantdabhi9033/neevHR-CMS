"use client";

import { useState } from "react";
import { NumberField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";
import {
  newRegimeTax,
  oldRegimeTax,
  NEW_STD_DEDUCTION,
  OLD_STD_DEDUCTION,
} from "@/lib/tax";

const CAP_80C = 150000;
const CAP_80D = 100000;
const CAP_HOME_LOAN = 200000;

const n = (v: string) => Math.max(0, parseFloat(v) || 0);

export function TdsCalculator() {
  const [gross, setGross] = useState("1500000");
  const [pt, setPt] = useState("2400");
  const [hra, setHra] = useState("0");
  const [c80, setC80] = useState("150000");
  const [d80, setD80] = useState("25000");
  const [homeLoan, setHomeLoan] = useState("0");
  const [other, setOther] = useState("0");

  const g = n(gross);
  const newRes = newRegimeTax(g - NEW_STD_DEDUCTION);
  const oldDeductions =
    OLD_STD_DEDUCTION +
    n(pt) +
    n(hra) +
    Math.min(n(c80), CAP_80C) +
    Math.min(n(d80), CAP_80D) +
    Math.min(n(homeLoan), CAP_HOME_LOAN) +
    n(other);
  const oldRes = oldRegimeTax(g - oldDeductions);
  const better = newRes.total <= oldRes.total ? "new" : "old";
  const saving = Math.abs(newRes.total - oldRes.total);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField label="Annual gross salary" value={gross} onChange={setGross} />
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Old regime deductions (ignored in the new regime)
        </p>
        <NumberField label="Professional tax paid in the year" value={pt} onChange={setPt} />
        <NumberField label="Exempt HRA for the year" value={hra} onChange={setHra} hint="Use the HRA calculator to work this out." />
        <NumberField label="Section 80C investments" value={c80} onChange={setC80} hint="Capped at ₹1,50,000." />
        <NumberField label="Section 80D health insurance" value={d80} onChange={setD80} hint="Capped at ₹1,00,000 here; the real limit depends on ages covered." />
        <NumberField label="Home loan interest (self-occupied)" value={homeLoan} onChange={setHomeLoan} hint="Capped at ₹2,00,000." />
        <NumberField label="Other deductions" value={other} onChange={setOther} hint="For example 80CCD(1B) NPS or 80E." />
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Lower tax: {better === "new" ? "new regime" : "old regime"}
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">
          {inr(Math.min(newRes.total, oldRes.total) / 12)}
          <span className="text-base font-medium text-muted"> TDS per month</span>
        </p>
        <p className="mt-1 text-sm text-muted">
          Saves {inr(saving)} a year compared with the {better === "new" ? "old" : "new"} regime
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-ink">New regime</p>
            <ResultRow label="Taxable" value={inr(newRes.taxable)} />
            <ResultRow label="Rebate" value={inr(newRes.rebate)} />
            <ResultRow label="Cess 4%" value={inr(newRes.cess)} />
            <ResultRow label="Annual tax" value={inr(newRes.total)} strong />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Old regime</p>
            <ResultRow label="Taxable" value={inr(oldRes.taxable)} />
            <ResultRow label="Rebate" value={inr(oldRes.rebate)} />
            <ResultRow label="Cess 4%" value={inr(oldRes.cess)} />
            <ResultRow label="Annual tax" value={inr(oldRes.total)} strong />
          </div>
        </div>
        <p className="mt-4 text-xs text-muted">
          Indicative only, not tax advice. Includes surcharge with marginal
          relief above ₹50 lakh. Does not model perquisites, arrears, other
          income or employer NPS.
        </p>
      </div>
    </div>
  );
}
