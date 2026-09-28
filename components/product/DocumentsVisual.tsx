import type { ReactNode } from "react";
import { Avatar, Card, Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// Documents MEANS paper HR issues and keeps. So the image is a desk: a letter template with its merge
// fields on the left sheet, the server-side merge in the middle, and the issued letter on the right sheet,
// filed to the employee's vault with a tamper-evidence code. Aman Bhatt joined 01 Jul 2026; 90-day
// probation ends 29 Sep 2026, the letter's date. Only the curated merge fields the product supports appear.

function Tok({ children }: { children: ReactNode }) {
  return <span className="rounded bg-[#EEEAFE] px-1 py-px font-mono text-[10.5px] font-semibold text-[#4A34D1]">{`{{${children}}}`}</span>;
}

function Val({ children }: { children: ReactNode }) {
  return <span className="rounded-sm bg-[#FFF1DC] px-0.5 font-semibold text-ink shadow-[inset_0_-2px_0_#E88938]">{children}</span>;
}

const SHEET_W = 292;

function Arrow({ className }: { className: string }) {
  return (
    <svg className={className} width={24} height={16} viewBox="0 0 24 16" fill="none" aria-hidden>
      <path d="M1 8 H21" stroke="#5B45E8" strokeWidth={2} strokeDasharray="4 4" />
      <path d="M16 3 L22 8 L16 13" stroke="#5B45E8" strokeWidth={2} />
    </svg>
  );
}

export function DocumentsVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={640}
      backdrop="cream"
      label="A NeevHR letter template with merge fields becoming an issued confirmation letter for one employee, filed to their document vault with a verification code."
    >
      <div className="flex items-start justify-between">
        <Paper rotate={-2} className="px-6 pb-7 pt-5" style={{ width: SHEET_W }}>
          <div className="flex items-center justify-between">
            <Eyebrow>Letter template</Eyebrow>
            <span className="rounded bg-slate-100 px-1.5 py-px text-[10.5px] font-semibold text-slate-600">Confirmation</span>
          </div>
          <p className="mt-1 text-[14px] font-semibold text-ink">Confirmation letter</p>
          <div className="mt-4 space-y-3 text-[11.5px] leading-[1.75] text-slate-600">
            <p>
              <Tok>companyName</Tok>
              <br />
              <Tok>companyAddress</Tok>
            </p>
            <p>
              Date: <Tok>today</Tok>
            </p>
            <p>
              Dear <Tok>name</Tok> (<Tok>code</Tok>),
            </p>
            <p>
              With reference to your appointment as <Tok>designation</Tok> in <Tok>department</Tok> from <Tok>doj</Tok>, we
              are pleased to confirm your services on successful completion of probation.
            </p>
            <p>
              You will continue to report to <Tok>managerName</Tok>.
            </p>
          </div>
        </Paper>

        <div className="flex w-[172px] flex-col items-center pt-24">
          <Card className="w-full p-3.5">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#5B45E8]">Generate for</p>
            <div className="mt-2 flex items-center gap-2">
              <Avatar initials="AB" size={28} />
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-ink">Aman Bhatt</p>
                <p className="text-[10.5px] text-slate-500">EMP-0231</p>
              </div>
            </div>
          </Card>
          <div className="relative mt-4 w-full rounded-xl bg-[#15147B] px-3.5 py-3 text-white">
            <Arrow className="absolute -left-[27px] top-1/2 -translate-y-1/2" />
            <Arrow className="absolute -right-[27px] top-1/2 -translate-y-1/2" />
            <p className="text-[12px] font-semibold">Merged on the server</p>
            <p className="mt-1 text-[10.5px] leading-snug text-[#C9C8F2]">16 curated fields from the employee record. An unknown field is rejected when the template is saved.</p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <Paper rotate={1.5} className="px-6 pb-7 pt-5" style={{ width: SHEET_W }}>
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-bold text-[#15147B]">Aikyora Pvt Ltd</p>
              <p className="text-[10.5px] text-slate-400">Baner, Pune</p>
            </div>
            <div className="mt-4 space-y-3 text-[11.5px] leading-[1.75] text-slate-600">
              <p>
                Date: <Val>29 Sep 2026</Val>
              </p>
              <p>
                Dear <Val>Aman Bhatt</Val> (<Val>EMP-0231</Val>),
              </p>
              <p>
                With reference to your appointment as <Val>Engineer</Val> in <Val>Engineering</Val> from <Val>01 Jul 2026</Val>,
                we are pleased to confirm your services on successful completion of probation.
              </p>
              <p>
                You will continue to report to <Val>Meera Krishnan</Val>.
              </p>
            </div>
            <div className="mt-5 border-t border-slate-100 pt-2 text-[10.5px] text-slate-400">For Aikyora Pvt Ltd · Human Resources</div>
          </Paper>

          <Card className="-mt-3 mr-3 w-[276px] p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[12px] font-semibold text-ink">Filed to Aman&apos;s vault</p>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-700">Company-issued</span>
            </div>
            <div className="mt-2 rounded-lg bg-slate-50 px-2.5 py-2">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-[10.5px] text-slate-500">SHA-256 verify code</p>
                <p className="tnum whitespace-nowrap font-mono text-[12px] font-semibold text-ink">7F3A-91C2-0D4E</p>
              </div>
              <p className="mt-1 flex items-center gap-1 text-[10.5px] font-semibold text-emerald-700">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-[#10B981] text-[10.5px] text-white">✓</span>
                Unaltered since issue
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-[11px] font-semibold text-slate-500">Letter types</span>
        {["Offer", "Appointment", "Confirmation", "Increment", "Transfer", "Relieving", "Experience", "Warning", "Asset handover"].map((t) => (
          <span
            key={t}
            className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
              t === "Confirmation" ? "bg-[#15147B] text-white" : "bg-white text-slate-600 ring-1 ring-slate-200"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </VisualStage>
  );
}
