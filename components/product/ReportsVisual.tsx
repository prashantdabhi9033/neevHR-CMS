import type { ReactNode } from "react";
import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Reports mean "ask the data a question, then see who is behind the answer". So the image reads as an
// L-shaped path on a dotted canvas: the self-serve builder (one of its five entities, columns, a filter,
// group-by and aggregate) produces a chart, and one bar opens the exact records behind it.
// Active headcount 81 + 50 + 40 + 30 = 201; the Sales bar (40, 20%) drills to 40 employee records.

const entities = ["Employee", "Leave application", "Pay line", "Expense claim", "Asset"];
const depts = [
  { name: "Engineering", n: 81 },
  { name: "Operations", n: 50 },
  { name: "Sales", n: 40 },
  { name: "Support", n: 30 },
];
const TOTAL = depts.reduce((s, d) => s + d.n, 0);
const PICK = "Sales";

const records = [
  { n: "Rohan Desai", i: "RD", code: "EMP-0112", role: "Regional Sales Head", city: "Mumbai", doj: "04 Jul 2019" },
  { n: "Neha Agarwal", i: "NA", code: "EMP-0356", role: "Account Manager", city: "Pune", doj: "11 Jan 2022" },
  { n: "Siddharth Bhatt", i: "SB", code: "EMP-0418", role: "Sales Executive", city: "Ahmedabad", doj: "02 May 2023" },
  { n: "Aarti Joshi", i: "AJ", code: "EMP-0467", role: "Inside Sales Executive", city: "Mumbai", doj: "15 Feb 2024" },
];

function Chip({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "plain" }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-[11.5px] font-semibold ${
        tone === "brand" ? "bg-[#EEEAFE] text-[#4A34D1]" : "border border-slate-200 bg-white text-slate-600"
      }`}
    >
      {children}
    </span>
  );
}

function Shelf({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <div className="flex flex-wrap gap-1.5 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-2">{children}</div>
    </div>
  );
}

function Builder() {
  return (
    <Card className="p-5">
      <p className="text-[15px] font-bold text-ink">Report builder</p>
      <p className="text-[11px] text-slate-500">Pick an entity, filter, group, run</p>

      <p className="mb-1.5 mt-4 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-400">Entity</p>
      <div className="space-y-1">
        {entities.map((e, i) => (
          <div
            key={e}
            className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[12px] ${
              i === 0 ? "bg-[#15147B] font-semibold text-white" : "text-slate-600"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-[#E88938]" : "bg-slate-300"}`} />
            {e}
          </div>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        <Shelf label="Filters">
          <Chip tone="plain">Status</Chip>
          <Chip tone="plain">is</Chip>
          <Chip>Active</Chip>
        </Shelf>
        <Shelf label="Group by">
          <Chip>Department</Chip>
        </Shelf>
        <Shelf label="Aggregate">
          <Chip>Count</Chip>
        </Shelf>
      </div>

      <div className="mt-4 rounded-lg bg-[#E88938] py-2 text-center text-[12.5px] font-semibold text-[#24242B]">Run report</div>
    </Card>
  );
}

const CW = 560;
const CH = 172;
const BAR = 78;

function Chart() {
  const slot = CW / depts.length;
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <Eyebrow>Result</Eyebrow>
          <p className="mt-1 text-[15px] font-bold text-ink">Employee · count by department</p>
          <p className="tnum text-[11px] text-slate-500">Status is Active · {TOTAL} employees</p>
        </div>
        <div className="flex gap-1.5">
          <Chip tone="plain">Save view</Chip>
          <Chip tone="plain">Export · Excel, CSV</Chip>
        </div>
      </div>
      <svg width={CW} height={CH + 28} viewBox={`0 0 ${CW} ${CH + 28}`} className="mt-3" role="img" aria-label="Headcount by department: Engineering 81, Operations 50, Sales 40, Support 30">
        {[0, 30, 60, 90].map((v) => {
          const y = CH - (v / 90) * (CH - 24);
          return <line key={v} x1={0} x2={CW} y1={y} y2={y} stroke="#E2E8F0" strokeDasharray={v ? "3 4" : undefined} />;
        })}
        {depts.map((d, i) => {
          const h = (d.n / 90) * (CH - 24);
          const cx = slot * i + slot / 2;
          const on = d.name === PICK;
          return (
            <g key={d.name}>
              {on && <rect x={cx - BAR / 2 - 6} y={CH - h - 6} width={BAR + 12} height={h + 6} rx={9} fill="#E88938" opacity={0.18} />}
              <rect x={cx - BAR / 2} y={CH - h} width={BAR} height={h} rx={6} fill={on ? "#E88938" : "#5B45E8"} opacity={on ? 1 : 0.85} />
              <text x={cx} y={CH - h - 12} textAnchor="middle" fontSize="14" fontWeight="700" fill="#24242B" className="tnum">
                {d.n}
              </text>
              <text x={cx} y={CH + 20} textAnchor="middle" fontSize="12" fill={on ? "#24242B" : "#64748B"} fontWeight={on ? 700 : 400}>
                {d.name}
              </text>
            </g>
          );
        })}
        {/* pointer on the Sales bar */}
        <g transform={`translate(${slot * 2 + slot / 2 + 6} ${CH - 70}) scale(1.4)`}>
          <path d="M0 0 l 11 8 -5 .7 2.7 5.6 -2.2 1 -2.7 -5.6 -3.8 3.4 z" fill="#24242B" stroke="white" strokeWidth="1" strokeLinejoin="round" />
        </g>
      </svg>
    </Card>
  );
}

function Drill() {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#FFF4EA] text-[#B45309]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2 3h10M4 7h6M6 11h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="text-[13px] font-bold text-ink">Employee master</p>
            <p className="text-[11px] text-slate-500">
              Department is <b className="font-semibold text-[#B45309]">Sales</b> · 40 records
            </p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <Chip tone="plain">Excel</Chip>
          <Chip tone="plain">PDF · password</Chip>
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_0.8fr_1.4fr_0.9fr_0.9fr] gap-3 bg-slate-50 px-5 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-slate-400">
        <span>Name</span>
        <span>Code</span>
        <span>Designation</span>
        <span>Location</span>
        <span>DOJ</span>
      </div>
      {records.map((r) => (
        <div key={r.code} className="grid grid-cols-[1.5fr_0.8fr_1.4fr_0.9fr_0.9fr] items-center gap-3 border-t border-slate-100 px-5 py-2 text-[12px]">
          <span className="flex items-center gap-2 font-semibold text-ink">
            <Avatar initials={r.i} size={22} />
            <span className="truncate">{r.n}</span>
          </span>
          <span className="tnum text-slate-500">{r.code}</span>
          <span className="truncate text-slate-700">{r.role}</span>
          <span className="text-slate-700">{r.city}</span>
          <span className="tnum text-slate-500">{r.doj}</span>
        </div>
      ))}
      <p className="border-t border-slate-100 px-5 py-2 text-[11px] font-medium text-slate-400">+ 36 more records</p>
    </Card>
  );
}

export function ReportsVisual() {
  return (
    <VisualStage
      width={1000}
      estHeight={700}
      backdrop="canvas"
      label="The NeevHR report builder with an entity, filter, group-by and aggregate producing a headcount chart, and a drill from the Sales bar into its 40 employee records."
    >
      <div className="grid grid-cols-[250px_52px_1fr] items-start">
        <Builder />
        <svg width="52" height="120" viewBox="0 0 52 120" className="mt-24" aria-hidden>
          <path d="M4 60 H 44" stroke="#5B45E8" strokeWidth="2" strokeDasharray="4 5" />
          <path d="M40 54 l 8 6 -8 6" fill="none" stroke="#5B45E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="relative">
          <Chart />
          <svg className="absolute" style={{ left: 362, top: 292 }} width="120" height="76" viewBox="0 0 120 76" aria-hidden>
            <path d="M8 0 C 8 40, 60 34, 60 76" stroke="#E88938" strokeWidth="2" strokeDasharray="4 5" fill="none" />
            <circle cx="8" cy="3" r="4" fill="#E88938" />
          </svg>
          <div className="mt-12">
            <Drill />
          </div>
        </div>
      </div>
    </VisualStage>
  );
}
