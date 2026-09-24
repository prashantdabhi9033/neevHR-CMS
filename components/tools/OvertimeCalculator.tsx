"use client";

import { useState } from "react";
import { NumberField, SegField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

export function OvertimeCalculator() {
  const [wages, setWages] = useState("18000");
  const [days, setDays] = useState("26");
  const [hours, setHours] = useState("8");
  const [ot, setOt] = useState("20");
  const [rate, setRate] = useState<"2" | "1.5">("2");

  const w = Math.max(0, parseFloat(wages) || 0);
  const dd = Math.max(1, parseFloat(days) || 26);
  const hh = Math.max(1, parseFloat(hours) || 8);
  const o = Math.max(0, parseFloat(ot) || 0);
  const hourly = w / (dd * hh);
  const pay = hourly * parseFloat(rate) * o;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField
          label="Ordinary monthly wages"
          value={wages}
          onChange={setWages}
          hint="Basic, DA and allowances that count as ordinary wages; excludes bonus and overtime."
        />
        <NumberField label="Working days in the month" value={days} onChange={setDays} suffix="days" />
        <NumberField label="Normal hours per day" value={hours} onChange={setHours} suffix="hrs" />
        <NumberField label="Overtime hours worked" value={ot} onChange={setOt} suffix="hrs" />
        <SegField
          label="Overtime rate"
          value={rate}
          onChange={setRate}
          options={[
            { label: "2× (statutory)", value: "2" },
            { label: "1.5× (policy)", value: "1.5" },
          ]}
        />
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Overtime pay
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(pay)}</p>
        <div className="mt-5">
          <ResultRow label="Hourly ordinary rate" value={`₹${hourly.toFixed(2)}`} />
          <ResultRow label="Overtime rate per hour" value={`₹${(hourly * parseFloat(rate)).toFixed(2)}`} />
          <ResultRow label="Overtime hours" value={String(o)} />
          <ResultRow label="Overtime pay" value={inr(pay)} strong />
        </div>
        {rate === "1.5" && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
            Where statutory overtime applies (factories and many shops and
            establishments), the rate is twice the ordinary rate. Use 1.5× only
            where your policy lawfully allows it.
          </p>
        )}
        <p className="mt-4 text-xs text-muted">
          Hourly rate = monthly wages ÷ (working days × hours per day).
          Indicative only.
        </p>
      </div>
    </div>
  );
}
