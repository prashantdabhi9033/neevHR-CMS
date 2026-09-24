"use client";

import { useState } from "react";
import { NumberField, SegField } from "./CalcUI";
import { inr } from "@/lib/format";

import { PF_WAGE_CEILING as PF_CEILING } from "@/lib/statutory";

const ESI_LIMIT = 21000;
const ESI_EMPLOYER = 0.0325;
const GRATUITY_RATE = 0.0481;

// Builds a standard CTC breakup: basic and HRA as chosen, employer PF,
// gratuity provision and employer ESI (when eligible) inside CTC, and a
// special allowance that balances gross to the remainder.
export function CtcCalculator() {
  const [ctc, setCtc] = useState("600000");
  const [basicPct, setBasicPct] = useState<"40" | "50">("40");
  const [metro, setMetro] = useState<"metro" | "non">("metro");
  const [pfBasis, setPfBasis] = useState<"cap" | "actual">("cap");

  const annual = Math.max(0, parseFloat(ctc) || 0);
  const basicM = (annual * (parseInt(basicPct) / 100)) / 12;
  const hraM = basicM * (metro === "metro" ? 0.5 : 0.4);
  const pfM = 0.12 * (pfBasis === "cap" ? Math.min(basicM, PF_CEILING) : basicM);
  const gratM = basicM * GRATUITY_RATE;
  let grossM = annual / 12 - pfM - gratM;
  let esiM = 0;
  if (grossM / (1 + ESI_EMPLOYER) <= ESI_LIMIT) {
    grossM = grossM / (1 + ESI_EMPLOYER);
    esiM = grossM * ESI_EMPLOYER;
  }
  const specialM = Math.max(0, grossM - basicM - hraM);
  const negativeSpecial = grossM - basicM - hraM < 0;

  const rows: [string, number][] = [
    ["Basic", basicM],
    ["HRA", hraM],
    ["Special allowance", specialM],
  ];
  const employer: [string, number][] = [
    ["Employer PF (12%)", pfM],
    ["Gratuity provision (4.81%)", gratM],
    ...(esiM > 0 ? ([["Employer ESI (3.25%)", esiM]] as [string, number][]) : []),
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <NumberField label="Annual CTC" value={ctc} onChange={setCtc} />
        <SegField
          label="Basic as % of CTC"
          value={basicPct}
          onChange={setBasicPct}
          options={[
            { label: "40%", value: "40" },
            { label: "50%", value: "50" },
          ]}
        />
        <SegField
          label="HRA city"
          value={metro}
          onChange={setMetro}
          options={[
            { label: "Metro (50%)", value: "metro" },
            { label: "Non-metro (40%)", value: "non" },
          ]}
        />
        <SegField
          label="PF on"
          value={pfBasis}
          onChange={setPfBasis}
          options={[
            { label: "₹25,000 ceiling", value: "cap" },
            { label: "Actual basic", value: "actual" },
          ]}
        />
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Monthly gross salary
        </p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(grossM)}</p>
        <table className="mt-5 w-full text-sm">
          <caption className="sr-only">CTC breakup, monthly and annual</caption>
          <thead>
            <tr className="text-left text-xs text-muted">
              <th scope="col" className="py-1 font-medium">Component</th>
              <th scope="col" className="py-1 text-right font-medium">Monthly</th>
              <th scope="col" className="py-1 text-right font-medium">Annual</th>
            </tr>
          </thead>
          <tbody className="tnum">
            {rows.map(([k, v]) => (
              <tr key={k} className="border-t border-line/70">
                <th scope="row" className="py-2 text-left font-normal text-body">{k}</th>
                <td className="py-2 text-right font-semibold text-ink">{inr(v)}</td>
                <td className="py-2 text-right text-body">{inr(v * 12)}</td>
              </tr>
            ))}
            <tr className="border-t border-line">
              <th scope="row" className="py-2 text-left font-semibold text-ink">Gross salary</th>
              <td className="py-2 text-right font-bold text-ink">{inr(grossM)}</td>
              <td className="py-2 text-right text-body">{inr(grossM * 12)}</td>
            </tr>
            {employer.map(([k, v]) => (
              <tr key={k} className="border-t border-line/70">
                <th scope="row" className="py-2 text-left font-normal text-body">{k}</th>
                <td className="py-2 text-right font-semibold text-ink">{inr(v)}</td>
                <td className="py-2 text-right text-body">{inr(v * 12)}</td>
              </tr>
            ))}
            <tr className="border-t border-line">
              <th scope="row" className="py-2 text-left font-semibold text-brand">CTC</th>
              <td className="py-2 text-right font-bold text-brand">{inr(annual / 12)}</td>
              <td className="py-2 text-right font-bold text-brand">{inr(annual)}</td>
            </tr>
          </tbody>
        </table>
        {negativeSpecial && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">
            Basic and HRA exceed gross at this CTC. Lower the basic percentage
            or HRA for a workable structure.
          </p>
        )}
        <p className="mt-4 text-xs text-muted">
          A common structure, not the only one. Employer ESI applies while
          monthly gross is ₹21,000 or less. Indicative only.
        </p>
      </div>
    </div>
  );
}
