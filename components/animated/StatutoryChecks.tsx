"use client";

import { useOnScreenSteps } from "@/components/visuals/useOnScreenSteps";
import { SampleFrame, Tick } from "./Frame";

// The checks a month goes through, in the product's order: the readiness checklist, the exception report, the ECR checks
// and the tie-out. Wording follows web/src/features/help/content/payroll.
const groups = [
  { title: "Before compute", items: ["Pending leave and regularisations cleared", "No days without attendance", "Bank details on every line", "A PT rule for every state"] },
  { title: "After compute", items: ["PAN and UAN present", "Pay swings against last month reviewed", "No negative net pay"] },
  { title: "ECR checks", items: ["UAN is 12 digits", "Names in English letters", "EPF wages within gross", "EPF at the ceiling in force, EPS within its own"] },
  { title: "Tie-out before filing", items: ["Register net equals the bank file", "Challans match the register"] },
];
const total = groups.reduce((n, g) => n + g.items.length, 0);
// Where each group's items start in the running order.
const offsets = groups.map((_, i) => groups.slice(0, i).reduce((n, g) => n + g.items.length, 0));
const files = ["PF ECR", "ESIC file", "PF challan", "PT and LWF challans", "Form 24Q", "Form 16"];

export function StatutoryChecks({ className = "" }: { className?: string }) {
  const { ref, step } = useOnScreenSteps<HTMLDivElement>(total + 1, 600, 3600);
  return (
    <div ref={ref} className={className}>
      <SampleFrame
        title="Statutory checks for October 2026"
        label="A sample month of statutory checks ticking through: the readiness checklist, the exception report, the ECR checks and the tie-out, ending with the PF, ESI, PT, LWF and TDS files ready."
        note="Sample month. Your team reviews each flag and files on the government portals; NeevHR prepares and checks the files."
      >
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-soft ring-1 ring-line">
          <div className="h-full origin-left rounded-full bg-accent transition-transform duration-500" style={{ transform: `scaleX(${step / total})` }} />
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {groups.map((g, gi) => (
            <div key={g.title}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">{g.title}</p>
              <ul className="mt-2 space-y-2">
                {g.items.map((t, ti) => {
                  const on = offsets[gi] + ti < step;
                  return (
                    <li key={t} className={`flex items-start gap-2.5 text-[13px] leading-snug transition-colors duration-300 ${on ? "text-ink" : "text-muted"}`}>
                      <Tick on={on} />
                      <span className="min-w-0">{t}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-1.5 rounded-xl bg-surface-soft p-3">
          <span className="w-full text-xs font-medium text-muted">Ready for your team to upload</span>
          {files.map((f) => (
            <span key={f} className={`rounded-lg px-2.5 py-1 text-xs font-semibold ring-1 transition-colors duration-500 ${step === total ? "bg-white text-ink ring-accent/40" : "bg-transparent text-muted ring-line"}`}>{f}</span>
          ))}
        </div>
      </SampleFrame>
    </div>
  );
}
