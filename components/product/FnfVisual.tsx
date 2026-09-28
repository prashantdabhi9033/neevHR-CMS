import type { ReactNode } from "react";
import { Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// Full & final settlement MEANS a statement a leaver can check line by line. So the image is the printed
// F&F statement on a desk, with the workings pencilled in the margin beside each line and the relieving
// letter waiting underneath. Vikram Shah: gross ₹87,600, basic ₹41,600, joined 12 Jun 2021, LWD 20 Oct 2026.
// Earnings 56,516 (87,600 × 20/31) + 24,960 (41,600 × 18/30) + 1,20,000 (41,600 × 15/26 × 5) = 2,01,476.
// Recoveries 11,093 (41,600 × 8/30) + 0 + 5,650 + 1,800 + 200 + 18,500 = 37,243. Net 1,64,233.

type Line = { label: string; amount: string; note?: ReactNode; muted?: boolean };

const earnings: Line[] = [
  { label: "Salary, 20 days (Oct 2026)", amount: "56,516", note: "₹87,600 gross × 20 / 31 days" },
  { label: "Leave encashment, 18 EL days (basic/30)", amount: "24,960", note: "₹41,600 basic × 18 / 30" },
  {
    label: "Gratuity, 5 yrs (15/26 × basic)",
    amount: "1,20,000",
    note: "₹41,600 × 15/26 × 5 · 5 yrs 4 mths, the 4 months do not round up",
  },
];
const recoveries: Line[] = [
  { label: "Notice shortfall recovery, 8 days", amount: "11,093", note: "₹41,600 basic × 8 / 30 · notice due 28 Oct" },
  { label: "Asset recovery, none assigned", amount: "0", note: "Settlement is blocked while any asset is assigned", muted: true },
  { label: "TDS (income tax) on settlement", amount: "5,650", note: "On ₹56,516 taxable; gratuity and encashment exempt" },
  { label: "Provident Fund (PF), final month", amount: "1,800", note: "12% of the ₹15,000 wage ceiling" },
  { label: "Professional Tax (PT), final month", amount: "200" },
  { label: "Loan / advance recovery, 1 loan(s), recovered in full", amount: "18,500" },
];

const identity = [
  ["Employee", "Vikram Shah"],
  ["Employee code", "EMP-0087"],
  ["Designation", "Regional Sales Manager"],
  ["Department", "Sales"],
  ["Date of joining", "12 Jun 2021"],
  ["Last working day", "20 Oct 2026"],
  ["Exit type", "resignation"],
  ["Settled on", "30 Oct 2026"],
];

const PAPER_W = 480;
const PAD = "px-7";

function Note({ children }: { children?: ReactNode }) {
  if (!children) return <div />;
  return (
    <div className="flex items-center">
      <span className="h-px w-7 shrink-0 border-t border-dashed border-[#8a6d3b]/60" />
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8a6d3b]/70" />
      <p className="ml-2 text-[11px] leading-snug text-[#6b5530]" style={{ fontStyle: "italic" }}>
        {children}
      </p>
    </div>
  );
}

function Row({ l, sign = "" }: { l: Line; sign?: string }) {
  return (
    <>
      <div className={`${PAD} flex items-baseline justify-between gap-4 py-[5px] text-[12px]`}>
        <span className={l.muted ? "text-slate-400" : "text-slate-700"}>{l.label}</span>
        <span className={`tnum shrink-0 ${l.muted ? "text-slate-400" : "text-ink"}`}>
          {sign}₹{l.amount}
        </span>
      </div>
      <Note>{l.note}</Note>
    </>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={`${PAD} pb-1 pt-4 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#15147B]`}>{children}</div>
      <div />
    </>
  );
}

function Total({ label, value }: { label: string; value: string }) {
  return (
    <>
      <div className={PAD}>
        <div className="flex items-baseline justify-between border-t border-slate-200 pt-1.5 text-[12px] font-semibold text-ink">
          <span>{label}</span>
          <span className="tnum">{value}</span>
        </div>
      </div>
      <div />
    </>
  );
}

export function FnfVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={760}
      backdrop="cream"
      label="A NeevHR full and final settlement statement for a leaver, with earnings, recoveries and the net settlement, and the working behind each line noted in the margin."
    >
      <div className="relative">
        {/* The relieving letter waits under the statement; it is issued once the F&F is settled. */}
        <Paper rotate={-3} className="absolute left-5 top-0 px-7 py-4" style={{ width: PAPER_W - 30 }}>
          <div className="flex items-baseline justify-between">
            <p className="text-[12px] font-bold text-[#15147B]">Relieving Letter</p>
            <p className="text-[10.5px] text-slate-400">Aikyora Pvt Ltd</p>
          </div>
          <div className="mt-2 space-y-1.5 pb-10">
            {[96, 88, 92].map((w, i) => (
              <span key={i} className="block h-[3px] rounded bg-slate-200" style={{ width: `${w}%` }} />
            ))}
          </div>
        </Paper>

        <div className="relative pt-[52px]">
          <Paper className="absolute bottom-0 left-0 top-[52px]" style={{ width: PAPER_W }}>
            <span />
          </Paper>

          <div className="relative grid" style={{ gridTemplateColumns: `${PAPER_W}px 1fr` }}>
            <div className={`${PAD} pt-6`}>
              <p className="text-[11px] font-semibold text-slate-500">Aikyora Pvt Ltd</p>
              <p className="mt-1 text-[20px] font-bold tracking-tight text-ink">Full & final settlement</p>
              <p className="text-[11.5px] text-slate-500">Last working day 20 Oct 2026</p>
              <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 border-y border-slate-100 py-2.5">
                {identity.map(([k, v]) => (
                  <p key={k} className="flex justify-between gap-2 text-[11px]">
                    <span className="text-slate-400">{k}</span>
                    <span className="text-right font-medium text-ink">{v}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-end pb-2 pl-7">
              <div>
                <Eyebrow>
                  <span className="text-[#8a6d3b]">Workings</span>
                </Eyebrow>
                <p className="mt-1 text-[11px] leading-snug text-[#6b5530]">
                  Every figure below comes from the sealed F&F worksheet; nothing is recomputed on the statement.
                </p>
              </div>
            </div>

            <Heading>Earnings & entitlements</Heading>
            {earnings.map((l) => (
              <Row key={l.label} l={l} />
            ))}
            <Total label="Total earnings" value="₹2,01,476" />

            <Heading>Recoveries</Heading>
            {recoveries.map((l) => (
              <Row key={l.label} l={l} sign="- " />
            ))}
            <Total label="Total recoveries" value="- ₹37,243" />

            <div className={`${PAD} pt-4`}>
              <div className="rounded-md bg-[#F4F3FE] px-4 py-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-[12px] font-semibold text-ink">Net settlement</span>
                  <span className="tnum text-[22px] font-bold text-[#15147B]">₹1,64,233</span>
                </div>
                <p className="text-[10.5px] text-slate-500">Settled 30 Oct 2026 · payroll period Oct 2026</p>
              </div>
            </div>
            <div className="flex items-center pt-4">
              <Note>On the worksheet: Rupees One Lakh Sixty-Four Thousand Two Hundred Thirty-Three Only</Note>
            </div>

            <div className={`${PAD} pb-6 pt-3`}>
              <p className="text-[10.5px] leading-snug text-slate-400">
                This is a computer-generated statement and does not require a signature.
              </p>
            </div>
            <div />
          </div>
        </div>
      </div>
    </VisualStage>
  );
}
