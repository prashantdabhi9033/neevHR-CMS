"use client";

import { useState } from "react";
import { DateField, NumberField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";

const DAY = 86400000;

function parse(d: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return null;
  const [y, m, dd] = d.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, dd));
}

function fmt(d: Date) {
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function NoticePeriodCalculator() {
  // No date default: the page is static, so "today" at build time would not
  // match the visitor's date.
  const [resigned, setResigned] = useState("");
  const [notice, setNotice] = useState("60");
  const [requested, setRequested] = useState("");
  const [gross, setGross] = useState("60000");

  const start = parse(resigned);
  const n = Math.max(0, parseInt(notice) || 0);
  const lwd = start ? new Date(start.getTime() + n * DAY) : null;
  const req = parse(requested);
  const shortfall = lwd && req && req < lwd ? Math.round((lwd.getTime() - req.getTime()) / DAY) : 0;
  const perDay = (Math.max(0, parseFloat(gross) || 0)) / 30;
  const buyout = shortfall * perDay;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <DateField label="Resignation date" value={resigned} onChange={setResigned} />
        <NumberField label="Notice period" value={notice} onChange={setNotice} suffix="days" hint="As per your appointment letter or policy (for example 30, 60 or 90 days)." />
        <DateField label="Requested last working day (optional)" value={requested} onChange={setRequested} hint="Leave blank to serve the full notice." />
        <NumberField label="Monthly gross salary (for buyout)" value={gross} onChange={setGross} />
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Last working day (full notice)
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">
          {lwd ? fmt(lwd) : <span className="text-lg font-semibold text-muted">Enter a resignation date</span>}
        </p>
        <div className="mt-5">
          <ResultRow label="Notice period" value={`${n} days`} />
          <ResultRow label="Requested last day" value={req ? fmt(req) : "Not set"} />
          <ResultRow label="Shortfall" value={`${shortfall} days`} />
          <ResultRow label="Buyout at gross ÷ 30 per day" value={inr(buyout)} strong />
        </div>
        <p className="mt-4 text-xs text-muted">
          Counts calendar days from the day after resignation. Whether a
          shortfall is recovered, waived or adjusted against leave depends on
          your policy. Indicative only.
        </p>
      </div>
    </div>
  );
}
