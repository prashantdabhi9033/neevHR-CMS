"use client";

import { useState } from "react";
import { NumberField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

const GRATUITY_CAP = 2000000;

export function FnfCalculator() {
  const [gross, setGross] = useState("60000");
  const [basic, setBasic] = useState("30000");
  const [daysWorked, setDaysWorked] = useState("12");
  const [monthDays, setMonthDays] = useState("30");
  const [leave, setLeave] = useState("15");
  const [years, setYears] = useState("6");
  const [months, setMonths] = useState("4");
  const [shortfall, setShortfall] = useState("0");
  const [loan, setLoan] = useState("0");
  const [otherDue, setOtherDue] = useState("0");

  const n = (v: string) => Math.max(0, parseFloat(v) || 0);
  const salary = (n(gross) / Math.max(1, n(monthDays))) * n(daysWorked);
  const encash = (n(basic) / 30) * n(leave);
  const y = n(years) + (n(months) > 6 ? 1 : 0);
  const gratEligible = n(years) >= 5;
  const gratuity = gratEligible ? Math.min((15 * n(basic) * y) / 26, GRATUITY_CAP) : 0;
  const noticeRecovery = (n(basic) / 30) * n(shortfall);
  const earnings = salary + encash + gratuity + n(otherDue);
  const recoveries = noticeRecovery + n(loan);
  const net = earnings - recoveries;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField label="Monthly gross salary" value={gross} onChange={setGross} />
        <NumberField label="Monthly basic + DA" value={basic} onChange={setBasic} />
        <div className="grid grid-cols-2 gap-3">
          <NumberField label="Days worked, last month" value={daysWorked} onChange={setDaysWorked} suffix="days" />
          <NumberField label="Days in that month" value={monthDays} onChange={setMonthDays} suffix="days" />
        </div>
        <NumberField label="Leave balance to encash" value={leave} onChange={setLeave} suffix="days" />
        <div className="grid grid-cols-2 gap-3">
          <NumberField label="Service: years" value={years} onChange={setYears} suffix="yrs" />
          <NumberField label="and months" value={months} onChange={setMonths} suffix="mo" />
        </div>
        <NumberField label="Notice shortfall to recover" value={shortfall} onChange={setShortfall} suffix="days" />
        <NumberField label="Loan or advance outstanding" value={loan} onChange={setLoan} />
        <NumberField label="Other amounts due (bonus, reimbursements)" value={otherDue} onChange={setOtherDue} />
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Net full and final settlement
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(net)}</p>
        <p className="mt-1 text-sm text-muted">Before TDS</p>
        <div className="mt-5">
          <ResultRow label="Salary for days worked" value={inr(salary)} />
          <ResultRow label="Leave encashment" value={inr(encash)} />
          <ResultRow label={gratEligible ? `Gratuity (${y} yrs)` : "Gratuity (under 5 yrs)"} value={inr(gratuity)} />
          <ResultRow label="Other dues" value={inr(n(otherDue))} />
          <ResultRow label="Less notice recovery" value={`−${inr(noticeRecovery)}`} />
          <ResultRow label="Less loan or advance" value={`−${inr(n(loan))}`} />
          <ResultRow label="Net payable" value={inr(net)} strong />
        </div>
        <p className="mt-4 text-xs text-muted">
          Leave encashment and notice recovery at basic ÷ 30 per day (some
          policies use gross). Gratuity uses the 5-year rule for permanent employees
          (fixed-term employees qualify after 1 year). Indicative only.
        </p>
      </div>
    </div>
  );
}
