"use client";

import { useState } from "react";
import Link from "next/link";
import { NumberField, SegField, ResultRow } from "./CalcUI";
import { inr } from "@/lib/format";
import { ptStates, professionalTax } from "@/lib/pt-calc";

export function PtCalculator() {
  const [slug, setSlug] = useState("maharashtra");
  const [salary, setSalary] = useState("30000");
  const [gender, setGender] = useState<"man" | "woman">("man");

  const state = ptStates.find((s) => s.slug === slug) ?? ptStates[0];
  const pay = parseFloat(salary) || 0;
  const r = professionalTax(state, pay, gender);
  const hasGenderSlab = state.kind === "monthly" && !!state.women;
  const guideSlug = state.slug;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <label className="block">
          <span className="text-sm font-medium text-ink">State of work</span>
          <select
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1.5 h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            {ptStates.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <NumberField
          label="Gross salary, per month"
          value={salary}
          onChange={setSalary}
          hint={state.kind === "half-yearly" ? "Tested on half-yearly income (six months of this salary)." : undefined}
        />
        {hasGenderSlab && (
          <SegField
            label="Employee"
            value={gender}
            onChange={setGender}
            options={[
              { label: "Man", value: "man" },
              { label: "Woman", value: "woman" },
            ]}
          />
        )}
        <p className="text-xs text-muted">
          PT follows the state where the employee works, not where the company is registered.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-surface-soft p-6" aria-live="polite">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">Professional tax a year</p>
        <p className="tnum mt-1 text-3xl font-bold text-ink">{inr(r.annual)}</p>
        <p className="mt-1 text-sm text-muted">{state.kind === "none" ? state.note : state.name}</p>
        {state.kind !== "none" && (
          <div className="mt-5">
            {state.kind === "monthly" ? (
              <>
                <ResultRow label="Monthly deduction" value={inr(r.monthly)} />
                <ResultRow label="February deduction" value={inr(r.february)} />
              </>
            ) : (
              <ResultRow label="Per half-year (April to September, October to March)" value={inr(r.halfYearly)} />
            )}
            <ResultRow label="Total for the year" value={inr(r.annual)} strong />
          </div>
        )}
        {"note" in state && state.note && state.kind !== "none" && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700">{state.note}</p>
        )}
        <p className="mt-4 text-xs text-muted">
          Indicative only. See the{" "}
          <Link href={`/india/payroll/${guideSlug}`} className="text-brand hover:underline">
            {state.name.replace(/ \(.*\)$/, "")} payroll guide
          </Link>{" "}
          for the slab, exemptions and the source.
        </p>
      </div>
    </div>
  );
}
