import type { ReactNode } from "react";
import { Card, Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// Payroll means ONE governed run that produces EVERY output. So the image is a flow on Neev Night: the
// maker-checker stage rail (Compute, Verify, Approve, Publish), the September run at the approval gate,
// and the files the same run fans out into: payslips, the bank transfer file, the PF ECR and the TDS
// challan. Ishita's payslip: 1,35,000 gross - PF 8,640 - PT 200 - TDS 9,500 = 1,16,660 net.

const stages = [
  { name: "Compute", note: "201 employees", state: "done" },
  { name: "Verify", note: "Exceptions cleared", state: "done" },
  { name: "Approve", note: "Awaiting you", state: "active" },
  { name: "Publish", note: "Payslips + files", state: "next" },
] as const;

const OUT_H = 104;
const OUT_GAP = 14;
const outputs = 4;
const columnH = outputs * OUT_H + (outputs - 1) * OUT_GAP;

function StageRail() {
  return (
    <div className="flex items-center">
      {stages.map((s, i) => (
        <div key={s.name} className="flex flex-1 items-center">
          <div className="flex items-center gap-3">
            <span
              className={`grid h-9 w-9 place-items-center rounded-full text-[13px] font-bold ${
                s.state === "done"
                  ? "bg-[#10B981] text-white"
                  : s.state === "active"
                    ? "bg-[#E88938] text-[#24242B] ring-[6px] ring-[#E88938]/25"
                    : "border-2 border-white/25 text-white/50"
              }`}
            >
              {s.state === "done" ? "✓" : i + 1}
            </span>
            <div>
              <p className={`text-[14px] font-semibold ${s.state === "next" ? "text-white/55" : "text-white"}`}>{s.name}</p>
              <p className="text-[11px] text-[#A9A8E8]">{s.note}</p>
            </div>
          </div>
          {i < stages.length - 1 && (
            <span className={`mx-4 h-[2px] flex-1 rounded ${s.state === "done" ? "bg-[#10B981]" : "bg-white/15"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function RunCard() {
  const rows = [
    ["Gross earnings", "₹1,98,16,300"],
    ["PF · ESI · PT · LWF", "- ₹21,84,900"],
    ["TDS", "- ₹12,88,600"],
  ];
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <Eyebrow>September 2026 run</Eyebrow>
          <p className="mt-1 text-[20px] font-bold tracking-tight text-ink">Aikyora Pvt Ltd</p>
          <p className="text-[12px] text-slate-500">201 employees · pay date 30 Sep 2026</p>
        </div>
        <span className="rounded-full bg-[#FFF4EA] px-2.5 py-1 text-[11px] font-semibold text-[#B45309]">Approve</span>
      </div>
      <div className="mt-5 space-y-2.5">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between text-[13px]">
            <span className="text-slate-600">{k}</span>
            <span className="tnum font-medium text-ink">{v}</span>
          </div>
        ))}
        <div className="flex items-baseline justify-between border-t border-slate-200 pt-3">
          <span className="text-[13px] font-semibold text-ink">Net pay</span>
          <span className="tnum text-[22px] font-bold text-[#15147B]">₹1,63,42,800</span>
        </div>
      </div>
      <div className="mt-5 rounded-xl bg-[#F4F3FE] p-3.5">
        <p className="text-[11px] font-semibold text-[#4A34D1]">Exception report · 18 checks</p>
        <div className="mt-2 flex gap-1.5">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={`h-2 flex-1 rounded-full ${i === 11 ? "bg-[#F59E0B]" : "bg-[#10B981]"}`} />
          ))}
        </div>
        <p className="mt-2 text-[11px] text-slate-500">17 passed · 1 reviewed: new joiner paid 12 of 30 days</p>
      </div>
      <div className="mt-5 flex gap-2">
        <span className="flex-1 rounded-xl bg-[#15147B] py-2.5 text-center text-[13px] font-semibold text-white">Approve run</span>
        <span className="rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] font-semibold text-slate-600">Variances</span>
      </div>
    </Card>
  );
}

function Artifact({ kind, name, meta, children }: { kind: string; name: string; meta: string; children: ReactNode }) {
  return (
    <Paper className="flex gap-4 p-4" style={{ height: OUT_H }}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#EEEAFE] text-[10px] font-bold text-[#4A34D1]">{kind}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <p className="truncate text-[13px] font-semibold text-ink">{name}</p>
          <p className="shrink-0 text-[10.5px] text-slate-400">{meta}</p>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </Paper>
  );
}

const mono = "font-mono text-[10.5px] leading-[1.55] text-slate-500";

export function PayrollVisual() {
  return (
    <VisualStage
      width={1000}
      estHeight={720}
      backdrop="night"
      padding={44}
      label="A NeevHR payroll run moving through compute, verify, approve and publish, and the payslips, bank file, PF ECR and TDS challan it produces."
    >
      <StageRail />
      <div className="mt-9 grid grid-cols-[380px_96px_1fr] items-center">
        <RunCard />
        <svg width="96" height={columnH} viewBox={`0 0 96 ${columnH}`} fill="none" aria-hidden>
          {Array.from({ length: outputs }).map((_, i) => {
            const y = i * (OUT_H + OUT_GAP) + OUT_H / 2;
            const mid = columnH / 2;
            return (
              <g key={i}>
                <path d={`M0 ${mid} C 48 ${mid}, 48 ${y}, 96 ${y}`} stroke="#8B7BFF" strokeWidth="2" strokeDasharray="4 5" opacity="0.8" />
                <circle cx="94" cy={y} r="3.5" fill="#8B7BFF" />
              </g>
            );
          })}
          <circle cx="3" cy={columnH / 2} r="5" fill="#E88938" />
        </svg>
        <div className="flex flex-col" style={{ gap: OUT_GAP }}>
          <Artifact kind="PDF" name="Payslips · 201" meta="Ishita Gandhi">
            <div className="grid grid-cols-3 gap-2 text-[11px]">
              <span className="text-slate-500">Gross <b className="tnum block text-ink">₹1,35,000</b></span>
              <span className="text-slate-500">Deductions <b className="tnum block text-ink">₹18,340</b></span>
              <span className="text-slate-500">Net pay <b className="tnum block text-[#15147B]">₹1,16,660</b></span>
            </div>
          </Artifact>
          <Artifact kind="NEFT" name="HDFC_SAL_SEP2026.csv" meta="201 transfers">
            <p className={mono}>N,HDFC0000240,••••7812,116660.00,ISHITA GANDHI</p>
            <p className={mono}>N,ICIC0001856,••••3390,78940.00,RUPAL SHARMA</p>
          </Artifact>
          <Artifact kind="ECR" name="PF_ECR_SEP2026.txt" meta="EPFO upload">
            <p className={mono}>UAN#~#MEMBER NAME#~#GROSS WAGES#~#EPF WAGES…</p>
            <p className={mono}>1009••••5678#~#ISHITA GANDHI#~#135000#~#72000…</p>
          </Artifact>
          <Artifact kind="TDS" name="TDS challan · Sep 2026" meta="due 07 Oct 2026">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-500">TDS on salaries · 201 deductees</span>
              <span className="tnum font-semibold text-ink">₹12,88,600</span>
            </div>
          </Artifact>
        </div>
      </div>
    </VisualStage>
  );
}
