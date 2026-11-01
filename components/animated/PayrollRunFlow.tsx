"use client";

import { useOnScreenSteps } from "@/components/visuals/useOnScreenSteps";
import { Panel, SampleFrame, Stack, Tick } from "./Frame";

// One payroll run through its five stages, the same five as the product (inputs, compute, verify, approve, publish).
// Sample figures: 1,42,38,500 - 9,88,200 - 14,320 - 78,400 - 11,46,900 = 1,20,10,680.
const stages = ["Inputs", "Compute", "Verify", "Approve", "Publish"];

const Row = ({ k, v, strong }: { k: string; v: string; strong?: boolean }) => (
  <div className={`flex items-baseline justify-between gap-3 py-1.5 text-[13px] ${strong ? "mt-1 border-t border-line pt-2.5 font-semibold text-ink" : "text-body"}`}>
    <span className="min-w-0">{k}</span>
    <span className="tnum shrink-0 text-ink">{v}</span>
  </div>
);

export function PayrollRunFlow({ className = "" }: { className?: string }) {
  const { ref, step } = useOnScreenSteps<HTMLDivElement>(stages.length, 2400);
  return (
    <div ref={ref} className={className}>
      <SampleFrame
        title="October 2026 payroll, sample company"
        label="A sample payroll run moving through five stages. Inputs are checked, pay is computed, exceptions are verified, a different person approves, and payslips and statutory files are published."
        note="Sample names and figures. The person who computed or verified a run cannot approve it."
      >
        <ol className="mt-5 grid grid-cols-5 gap-1 sm:gap-2">
          {stages.map((s, i) => (
            <li key={s} className="text-center">
              <span className={`block h-1.5 rounded-full transition-colors duration-500 ${i <= step ? "bg-brand" : "bg-surface-soft ring-1 ring-line"}`} />
              <span className={`mt-2 block text-[11px] font-semibold transition-colors duration-300 sm:text-[13px] ${i === step ? "text-brand" : "text-muted"}`}>{s}</span>
            </li>
          ))}
        </ol>

        <Stack className="mt-5 rounded-xl bg-surface-soft p-4 sm:p-5">
          <Panel on={step === 0}>
            <p className="text-[13px] font-semibold text-ink">Readiness checklist before compute</p>
            <ul className="mt-3 space-y-2 text-[13px] text-body">
              {["Pending leave and regularisations", "Overtime and expense claims", "Days with no attendance", "Missing bank details", "States with no PT rule"].map((t) => (
                <li key={t} className="flex items-center gap-2.5"><Tick on />{t}</li>
              ))}
            </ul>
          </Panel>
          <Panel on={step === 1}>
            <p className="text-[13px] font-semibold text-ink">412 employees computed</p>
            <div className="mt-2">
              <Row k="Gross" v="₹1,42,38,500" />
              <Row k="PF" v="₹9,88,200" />
              <Row k="ESI" v="₹14,320" />
              <Row k="PT" v="₹78,400" />
              <Row k="TDS" v="₹11,46,900" />
              <Row k="Net pay" v="₹1,20,10,680" strong />
            </div>
          </Panel>
          <Panel on={step === 2}>
            <p className="text-[13px] font-semibold text-ink">Exception report, 3 lines to look at</p>
            <ul className="mt-3 space-y-2 text-[13px] text-body">
              {[["Net pay down more than the threshold", "Checked: LOP"], ["UAN missing on a new joiner", "Added"], ["Loss of pay above the threshold", "Checked: on leave"]].map(([a, b]) => (
                <li key={a} className="flex items-start gap-2.5">
                  <Tick on tone="warn" />
                  <span className="min-w-0 flex-1">{a}<span className="block text-xs text-muted">{b}</span></span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel on={step === 3}>
            <p className="text-[13px] font-semibold text-ink">Separate people at each stage</p>
            <ul className="mt-3 space-y-3 text-[13px] text-body">
              {[["NK", "Computed by Neha Kapoor", "28 Oct 2026"], ["SM", "Verified by Sanjay Menon", "29 Oct 2026"], ["PS", "Approved by Priya Shah", "30 Oct 2026"]].map(([i, t, d]) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-[10px] font-bold text-white">{i}</span>
                  <span className="min-w-0 flex-1">{t}</span>
                  <span className="shrink-0 text-xs text-muted">{d}</span>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel on={step === 4}>
            <p className="text-[13px] font-semibold text-ink">Published, with the files generated</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Payslips", "Bank file", "PF ECR", "ESIC file", "PF challan", "PT and LWF challans", "Salary register", "Journal voucher"].map((f) => (
                <span key={f} className="inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium text-ink ring-1 ring-line">
                  <Tick on /> {f}
                </span>
              ))}
            </div>
          </Panel>
        </Stack>
      </SampleFrame>
    </div>
  );
}
