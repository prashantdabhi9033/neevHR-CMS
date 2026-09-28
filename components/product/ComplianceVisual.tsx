import type { ReactNode } from "react";
import { Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// Compliance means dates you cannot miss and papers you must be able to produce. So the image is a desk:
// the October 2026 filing strip with each statutory due date (scene date 09 Oct 2026), and a fan of the
// actual returns and challans with their Filed / Due state and the portal reference recorded against them.
// PF ECR Sep: 201 x 1,800 employee + 201 x 1,800 employer + EDLI 15,075 + admin 15,075 = 7,53,750.
// ESI Sep: 12 IPs x 18,000 = 2,16,000 wages x 4% = 8,640. PT Karnataka Sep: 64 x 200 = 12,800.

const TODAY = 9;
// 01 Oct 2026 is a Thursday.
const WD = ["T", "F", "S", "S", "M", "T", "W"];
type St = "Filed" | "Due" | "Upcoming";
const due: { day: number; title: string; sub: string; st: St }[] = [
  { day: 7, title: "TDS challan", sub: "Sep 2026 · paid 06 Oct", st: "Filed" },
  { day: 15, title: "PF ECR · ESI", sub: "Sep 2026 contributions", st: "Due" },
  { day: 20, title: "PT · Karnataka", sub: "Sep 2026 · ₹12,800", st: "Upcoming" },
  { day: 31, title: "TDS return · Q2", sub: "Jul-Sep 2026", st: "Upcoming" },
];
const dueByDay = new Map(due.map((d) => [d.day, d]));
const TONE: Record<St, { dot: string; pill: string }> = {
  Filed: { dot: "#10B981", pill: "bg-[#ECFDF5] text-[#047857]" },
  Due: { dot: "#E88938", pill: "bg-[#FFF4EA] text-[#B45309]" },
  Upcoming: { dot: "#5B45E8", pill: "bg-[#EEEAFE] text-[#4A34D1]" },
};

const CELL = 27;
const GAP = 2;
const xOfDay = (d: number) => (d - 1) * (CELL + GAP) + CELL / 2;

function Strip() {
  return (
    <div className="relative">
      <div className="flex" style={{ gap: GAP }}>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => {
          const hit = dueByDay.get(d);
          const wk = WD[(d - 1) % 7];
          const sunday = (d - 1) % 7 === 3;
          return (
            <div
              key={d}
              className={`flex flex-col items-center rounded-lg py-1.5 ${hit ? "bg-white shadow-[0_6px_16px_-8px_rgba(36,36,43,0.35)]" : ""} ${d === TODAY ? "ring-2 ring-[#15147B]" : ""}`}
              style={{ width: CELL }}
            >
              <span className={`text-[10.5px] font-semibold ${sunday ? "text-[#DC2626]/60" : "text-slate-400"}`}>{wk}</span>
              <span className={`tnum text-[12px] font-bold ${hit ? "text-ink" : d < TODAY ? "text-slate-400" : "text-slate-600"}`}>{d}</span>
              <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: hit ? TONE[hit.st].dot : "transparent" }} />
            </div>
          );
        })}
      </div>
      {/* flags hanging from each due date */}
      <div className="relative h-[70px]">
        {due.map((d) => {
          const x = xOfDay(d.day);
          const right = d.day > 25;
          return (
            <div key={d.day} className="absolute top-0" style={{ left: x }}>
              <span className="absolute left-0 top-0 h-3 w-px" style={{ background: TONE[d.st].dot }} />
              <div className={`absolute top-3 w-[146px] ${right ? "-translate-x-full" : "-translate-x-3"}`}>
                <div className="flex items-center gap-1.5">
                  <span className="tnum text-[11.5px] font-bold text-ink">{String(d.day).padStart(2, "0")} Oct</span>
                  <span className={`rounded-full px-1.5 py-px text-[10.5px] font-semibold ${TONE[d.st].pill}`}>{d.st}</span>
                </div>
                <p className="text-[11px] font-semibold text-slate-700">{d.title}</p>
                <p className="text-[10.5px] text-slate-500">{d.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="absolute -top-6 text-[10.5px] font-semibold text-[#15147B]" style={{ left: xOfDay(TODAY) - 16 }}>
        Today
      </p>
    </div>
  );
}

function Stamp({ st, children }: { st: "Filed" | "Due" | "Paid" | "Issued"; children: ReactNode }) {
  const good = st !== "Due";
  return (
    <span
      className={`inline-block rotate-[-6deg] rounded-md border-2 px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-[0.14em] ${
        good ? "border-[#10B981] text-[#047857]" : "border-[#E88938] text-[#C2410C]"
      }`}
    >
      {children}
    </span>
  );
}

function Sheet({
  kind,
  title,
  period,
  rows,
  stamp,
  refLabel,
  refValue,
  rotate,
  z,
  top,
}: {
  kind: string;
  title: string;
  period: string;
  rows: [string, string][];
  stamp: ReactNode;
  refLabel: string;
  refValue: string;
  rotate: number;
  z: number;
  top: number;
}) {
  return (
    <Paper rotate={rotate} className="w-[184px] p-4" style={{ position: "relative", zIndex: z, marginTop: top }}>
      <div className="flex items-center justify-between">
        <span className="rounded bg-[#15147B] px-1.5 py-0.5 text-[10.5px] font-bold tracking-wider text-white">{kind}</span>
        <span className="text-[10.5px] text-slate-400">Aikyora Pvt Ltd</span>
      </div>
      <p className="mt-2.5 text-[14px] font-bold leading-tight text-ink">{title}</p>
      <p className="text-[11px] text-slate-500">{period}</p>
      <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-2.5">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-2 text-[11px]">
            <span className="text-slate-500">{k}</span>
            <span className="tnum font-semibold text-ink">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-md bg-slate-50 px-2 py-1.5">
        <p className="text-[10.5px] text-slate-400">{refLabel}</p>
        <p className="tnum font-mono text-[11px] font-semibold text-slate-700">{refValue}</p>
      </div>
      <div className="mt-3">{stamp}</div>
    </Paper>
  );
}

export function ComplianceVisual() {
  return (
    <VisualStage
      width={1000}
      estHeight={720}
      backdrop="cream"
      padding={44}
      label="The October 2026 statutory filing calendar with TDS, PF, ESI, professional tax and quarterly TDS return due dates, above a fan of PF ECR, ESI, TDS challan, Form 24Q and Form 16 papers with their filed or due status and portal references."
    >
      <div className="flex items-end justify-between">
        <div>
          <Eyebrow>Statutory filing calendar</Eyebrow>
          <p className="mt-1 text-[22px] font-bold tracking-tight text-ink">October 2026</p>
        </div>
        <div className="flex gap-2 pb-1 text-[11px] font-semibold">
          <span className="rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[#047857]">1 filed</span>
          <span className="rounded-full bg-[#FFF4EA] px-2.5 py-1 text-[#B45309]">2 due by 15 Oct</span>
          <span className="rounded-full bg-[#EEEAFE] px-2.5 py-1 text-[#4A34D1]">2 upcoming</span>
        </div>
      </div>
      <div className="mt-9">
        <Strip />
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex">
          <Sheet
            kind="ECR"
            title="PF ECR"
            period="Sep 2026 · due 15 Oct 2026"
            rows={[["Members", "201"], ["Employee share", "₹3,61,800"], ["Employer + charges", "₹3,91,950"]]}
            refLabel="PF TRRN"
            refValue="Pending payment"
            stamp={<Stamp st="Due">Due 15 Oct</Stamp>}
            rotate={-6}
            z={1}
            top={18}
          />
          <div className="-ml-3">
            <Sheet
              kind="ESI"
              title="ESI contribution"
              period="Sep 2026 · due 15 Oct 2026"
              rows={[["Insured persons", "12"], ["Wages", "₹2,16,000"], ["Contribution", "₹8,640"]]}
              refLabel="ESIC acknowledgement no"
              refValue="Pending payment"
              stamp={<Stamp st="Due">Due 15 Oct</Stamp>}
              rotate={-3}
              z={2}
              top={4}
            />
          </div>
          <div className="-ml-3">
            <Sheet
              kind="TDS"
              title="TDS challan"
              period="Sep 2026 · due 07 Oct 2026"
              rows={[["Tax deposited", "₹12,88,600"], ["Deposited on", "06 Oct 2026"]]}
              refLabel="Challan CIN"
              refValue="BSR 0510308 · Sr 00417"
              stamp={<Stamp st="Paid">Paid</Stamp>}
              rotate={0}
              z={5}
              top={0}
            />
          </div>
          <div className="-ml-3">
            <Sheet
              kind="24Q"
              title="Form 24Q · Q4"
              period="FY 2025-26 · Jan-Mar 2026"
              rows={[["Deductees", "196"], ["Tax deposited", "₹38,64,300"]]}
              refLabel="Provisional Receipt Number"
              refValue="020000471385926"
              stamp={<Stamp st="Filed">Filed 28 May</Stamp>}
              rotate={3}
              z={3}
              top={4}
            />
          </div>
          <div className="-ml-3">
            <Sheet
              kind="F16"
              title="Form 16 · Part A + B"
              period="FY 2025-26"
              rows={[["Employees", "196"], ["Distributed", "12 Jun 2026"]]}
              refLabel="Generated with"
              refValue="Form 12BA · perquisites"
              stamp={<Stamp st="Issued">Issued</Stamp>}
              rotate={6}
              z={1}
              top={18}
            />
          </div>
        </div>
      </div>
    </VisualStage>
  );
}
