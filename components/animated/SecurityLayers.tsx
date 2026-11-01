"use client";

import { useOnScreenSteps } from "@/components/visuals/useOnScreenSteps";
import { SampleFrame, Tick } from "./Frame";

// One request through the controls listed on the security page, in the order they apply.
const layers = [
  { t: "Sign-in", b: "Password or single sign-on, with MFA where your company requires it" },
  { t: "Company isolation", b: "Postgres row-level security keeps each company's rows apart" },
  { t: "Role and data scope", b: "Only the entities, departments or teams in this role's scope" },
  { t: "Field masking and encryption", b: "PAN, Aadhaar, UAN and bank details are encrypted, and masked without the permission" },
  { t: "Audit log", b: "Who viewed sensitive data, and when" },
];

const fields = [
  { k: "Employee", plain: "Rohan Mehta", masked: "Rohan Mehta" },
  { k: "PAN", plain: "ABCPM1234K", masked: "••••••234K" },
  { k: "Bank account", plain: "50100123454521", masked: "••••••••••4521" },
];

export function SecurityLayers({ className = "" }: { className?: string }) {
  const { ref, step } = useOnScreenSteps<HTMLDivElement>(layers.length, 1500, 2800);
  const masked = step >= 3;
  return (
    <div ref={ref} className={className}>
      <SampleFrame
        title="A manager opens an employee's record"
        label="A sample request passing through sign-in, company isolation, role and data scope, field masking and the audit log. The manager sees the name, and PAN and bank account stay masked."
        note="Sample person and sample numbers."
      >
        <div className="mt-4 grid gap-4 md:grid-cols-[1.25fr_1fr]">
          <ol className="space-y-2">
            {layers.map((l, i) => (
              <li key={l.t} className={`flex items-start gap-2.5 rounded-xl px-3 py-2 ring-1 transition-colors duration-300 ${i === step ? "bg-brand-tint ring-brand/25" : "ring-line"}`}>
                <Tick on={i <= step} />
                <span className="min-w-0">
                  <span className="block text-[13px] font-semibold text-ink">{l.t}</span>
                  <span className="block text-xs leading-relaxed text-muted">{l.b}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="self-start rounded-xl bg-surface-soft p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">What the manager sees</p>
            <dl className="mt-3 space-y-2.5">
              {fields.map((f) => (
                <div key={f.k}>
                  <dt className="text-xs text-muted">{f.k}</dt>
                  <dd className="tnum truncate text-sm font-semibold text-ink">{masked ? f.masked : step >= 1 ? f.masked.replace(/./g, "•") : "•".repeat(10)}</dd>
                </div>
              ))}
            </dl>
            <p className={`mt-4 flex items-center gap-2 text-xs font-medium transition-colors duration-300 ${step === layers.length - 1 ? "text-ink" : "text-muted"}`}>
              <Tick on={step === layers.length - 1} /> View written to the log
            </p>
          </div>
        </div>
      </SampleFrame>
    </div>
  );
}
