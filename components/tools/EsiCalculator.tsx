"use client";

import { useState } from "react";
import { NumberField, SegField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

const LIMIT = 21000;
const LIMIT_PWD = 25000;
const EMPLOYEE_RATE = 0.0075;
const EMPLOYER_RATE = 0.0325;
const EXEMPT_DAILY = 176; // average daily wage at or below which the employee share is waived

// Paise-exact two-decimal display for ESI, where rupee rounding hides the result.
function inr2(n: number) {
  return "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function EsiCalculator() {
  const [gross, setGross] = useState("19500");
  const [pwd, setPwd] = useState<"no" | "yes">("no");

  const g = parseFloat(gross) || 0;
  const limit = pwd === "yes" ? LIMIT_PWD : LIMIT;
  const covered = g > 0 && g <= limit;
  const lowWage = g / 26 <= EXEMPT_DAILY;
  const employee = covered && !lowWage ? g * EMPLOYEE_RATE : 0;
  const employer = covered ? g * EMPLOYER_RATE : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField label="Gross wages, per month" value={gross} onChange={setGross} />
        <SegField
          label="Person with disability"
          value={pwd}
          onChange={setPwd}
          options={[
            { label: "No (limit ₹21,000)", value: "no" },
            { label: "Yes (limit ₹25,000)", value: "yes" },
          ]}
        />
        <p className="text-xs text-muted">
          Coverage is tested on gross wages at the start of each contribution
          period (April to September, October to March).
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Total monthly ESI
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr2(employee + employer)}</p>
        <p className="mt-1 text-sm text-muted">
          {covered ? "Covered under ESI" : `Not covered: gross exceeds ${inr(limit)}`}
        </p>
        {covered && lowWage && (
          <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
            Average daily wage is ₹{EXEMPT_DAILY} or less, so the employee share
            is waived. The employer still contributes.
          </p>
        )}
        <div className="mt-5">
          <ResultRow label="Gross wages" value={inr(g)} />
          <ResultRow label="Employee (0.75%)" value={inr2(employee)} />
          <ResultRow label="Employer (3.25%)" value={inr2(employer)} />
          <ResultRow label="Total per month" value={inr2(employee + employer)} strong />
        </div>
        <p className="mt-4 text-xs text-muted">
          Indicative only. The daily-wage test here assumes 26 working days.
        </p>
      </div>
    </div>
  );
}
