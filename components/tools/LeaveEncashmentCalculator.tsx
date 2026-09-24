"use client";

import { useState } from "react";
import { NumberField, SegField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

export function LeaveEncashmentCalculator() {
  const [basic, setBasic] = useState("40000");
  const [days, setDays] = useState("24");
  const [divisor, setDivisor] = useState<"30" | "26">("30");

  const b = Math.max(0, parseFloat(basic) || 0);
  const d = Math.max(0, parseFloat(days) || 0);
  const perDay = b / parseInt(divisor);
  const amount = perDay * d;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField label="Basic + DA, per month" value={basic} onChange={setBasic} />
        <NumberField label="Leave days to encash" value={days} onChange={setDays} suffix="days" />
        <SegField
          label="Days in a month (per company policy)"
          value={divisor}
          onChange={setDivisor}
          options={[
            { label: "30 days", value: "30" },
            { label: "26 working days", value: "26" },
          ]}
        />
        <p className="text-xs text-muted">
          Most policies encash on basic + DA; some use gross. Use the base your
          leave policy specifies.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Leave encashment
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(amount)}</p>
        <div className="mt-5">
          <ResultRow label="Per-day rate" value={inr(perDay)} />
          <ResultRow label="Days encashed" value={String(d)} />
          <ResultRow label="Amount" value={inr(amount)} strong />
        </div>
        <p className="mt-4 text-xs text-muted">
          Encashment during service is taxable as salary. On retirement or
          resignation, a non-government employee&apos;s encashment is exempt
          up to the least of the statutory limits, with a lifetime cap of
          ₹25 lakh. Indicative only.
        </p>
      </div>
    </div>
  );
}
