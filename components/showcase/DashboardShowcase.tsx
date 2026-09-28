import type { ReactNode } from "react";
import { BrandMark } from "@/components/brand/BrandMark";
import { ShowcaseStage } from "./Showcase";

// HR Head dashboard, built in code as a real design screen (not a screenshot). Mirrors the product's
// HrHeadView: "Needs you today" actions, the six-tile Workforce pulse, the "Today at a glance" rail and
// the headcount/statutory band. Depth: focal cards are lifted out of the screen (.emboss), the rest of
// the UI sits back in soft focus (.depth-blur), and one notification is frosted glass (.glass).
// All figures are illustrative but internally consistent (payroll gross - deductions = net).

const STAGE_W = 1400;

const C = {
  brand: "#15147B",
  pebble: "#5B45E8",
  night: "#0C0B4A",
  lilac: "#EEEAFE",
  success: "#10B981",
  successDark: "#047857",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#0EA5E9",
  line: "#E2E8F0",
  muted: "#64748B",
  ink: "#24242B",
};

/* ------------------------------------------------------------------ mini charts */

function pathOf(values: number[], w: number, h: number, pad = 2) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = (w - pad * 2) / (values.length - 1);
  return values.map((v, i) => [pad + i * step, h - pad - ((v - min) / span) * (h - pad * 2)] as const);
}

function AreaTrend({ values, color }: { values: number[]; color: string }) {
  const w = 92;
  const h = 40;
  const pts = pathOf(values, w, h);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ");
  const id = `ag-${color.slice(1)}`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L${pts[pts.length - 1][0]},${h} L${pts[0][0]},${h} Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3" fill={color} />
    </svg>
  );
}

function LineVsTarget({ values, target }: { values: number[]; target: number }) {
  const w = 92;
  const h = 40;
  const lo = 0.6;
  const hi = 1.3;
  const y = (v: number) => h - 3 - ((v - lo) / (hi - lo)) * (h - 6);
  const step = (w - 4) / (values.length - 1);
  const line = values.map((v, i) => `${i ? "L" : "M"}${2 + i * step},${y(v)}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      <line x1="0" x2={w} y1={y(target)} y2={y(target)} stroke={C.warning} strokeDasharray="4 3" strokeWidth="1.5" />
      <path d={line} fill="none" stroke={C.error} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function Donut({ segments, center }: { segments: { v: number; c: string }[]; center: number }) {
  const r = 17;
  const circ = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.v, 0);
  let offset = 0;
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden>
      <g transform="rotate(-90 24 24)">
        {segments.map((s, i) => {
          const len = (s.v / total) * circ;
          const el = (
            <circle key={i} cx="24" cy="24" r={r} fill="none" stroke={s.c} strokeWidth="7"
              strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-offset} />
          );
          offset += len;
          return el;
        })}
      </g>
      <text x="24" y="28" textAnchor="middle" fontSize="12" fontWeight="700" fill={C.ink}>{center}</text>
    </svg>
  );
}

function MiniColumns({ values, color, highlight }: { values: number[]; color: string; highlight: number }) {
  const max = Math.max(...values);
  return (
    <div className="flex h-11 items-end gap-1.5" aria-hidden>
      {values.map((v, i) => (
        <span key={i} className="w-3 rounded-t-[3px]"
          style={{ height: `${(v / max) * 100}%`, background: color, opacity: i === highlight ? 1 : 0.32 }} />
      ))}
    </div>
  );
}

function Bullet({ value, target, prev }: { value: number; target: number; prev: number }) {
  const max = 4;
  return (
    <div className="w-[92px]" aria-hidden>
      <div className="relative h-3 rounded-full bg-slate-100">
        <span className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${(value / max) * 100}%`, background: C.warning }} />
        <span className="absolute -top-1 h-5 w-0.5 rounded bg-slate-500" style={{ left: `${(target / max) * 100}%` }} />
        <span className="absolute top-0.5 h-2 w-2 -translate-x-1 rounded-full border-2 border-white bg-slate-400" style={{ left: `${(prev / max) * 100}%` }} />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] text-slate-400"><span>0%</span><span>4%</span></div>
    </div>
  );
}

/* ------------------------------------------------------------------ screen pieces */

function Pulse({
  name, value, unit, delta, good, ctx, chart, tint,
}: {
  name: string; value: string; unit?: string; delta: string; good: boolean; ctx: string; chart: ReactNode; tint: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4">
      <div className="flex items-center gap-2">
        <span className="h-7 w-7 shrink-0 rounded-lg" style={{ background: tint }} />
        <p className="truncate text-[13px] font-medium text-slate-600">{name}</p>
      </div>
      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <p className="tnum whitespace-nowrap text-[26px] font-bold leading-none tracking-tight text-ink">
            {value}{unit && <span className="ml-0.5 text-lg font-semibold text-slate-500">{unit}</span>}
          </p>
          <p className={`mt-2 whitespace-nowrap text-xs font-semibold ${good ? "text-success-dark" : "text-red-600"}`}>{delta}</p>
        </div>
        {chart}
      </div>
      <p className="mt-2.5 truncate border-t border-slate-100 pt-2 text-[11px] text-slate-500">{ctx}</p>
    </div>
  );
}

function ActTile({ tone, count, label, sub }: { tone: string; count: string; label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5">
      <span className="tnum grid h-10 w-10 place-items-center rounded-xl text-[15px] font-bold" style={{ background: `${tone}1A`, color: tone }}>{count}</span>
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold text-ink">{label}</p>
        <p className="truncate text-[11px] text-slate-500">{sub}</p>
      </div>
    </div>
  );
}

const NAV = [
  "Dashboard", "Inbox", "Employees", "Org Chart", "Attendance", "Leave",
  "Payroll", "Compliance", "Recruitment", "Performance", "Expenses", "Reports",
];

function Sidebar() {
  return (
    <aside className="flex w-[220px] shrink-0 flex-col px-4 py-5" style={{ background: C.night }}>
      <div className="px-2">
        <BrandMark href={null} tone="white" height={26} />
      </div>
      <nav className="depth-blur-soft mt-7 space-y-1">
        {NAV.map((n, i) => (
          <div key={n}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] ${i === 0 ? "bg-white/12 font-semibold text-white" : "text-white/65"}`}>
            <span className={`h-4 w-4 rounded-[5px] ${i === 0 ? "bg-[#8B7BFF]" : "bg-white/25"}`} />
            {n}
            {n === "Inbox" && <span className="ml-auto rounded-full bg-[#E88938] px-1.5 text-[10px] font-bold text-[#24242B]">23</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function AppScreen() {
  return (
    <div className="flex h-full overflow-hidden rounded-[22px] border border-white/70 bg-white shadow-[0_50px_120px_-40px_rgba(12,11,74,0.55),0_0_0_1px_rgba(21,20,123,0.06)]">
      <Sidebar />
      <div className="relative flex min-w-0 flex-1 flex-col bg-[#FAFAFD]">
        {/* top bar */}
        <header className="flex h-[60px] shrink-0 items-center gap-4 border-b border-slate-200/80 bg-white px-6">
          <div className="flex w-[340px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-[13px] text-slate-400">
            <span className="h-3.5 w-3.5 rounded-full border-2 border-slate-300" />
            Search people, pages and actions
            <span className="ml-auto rounded border border-slate-200 bg-white px-1.5 text-[10px] font-semibold text-slate-500">⌘K</span>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="rounded-lg border border-slate-200 px-3 py-1.5 text-[12px] font-medium text-slate-600">All entities</span>
            <span className="relative h-5 w-5 rounded-full border-2 border-slate-300">
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
            </span>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full text-[13px] font-semibold text-white" style={{ background: C.pebble }}>PS</span>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-ink">Priya Sharma</p>
                <p className="text-[11px] text-slate-500">HR Head</p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 gap-5 px-6 pt-5">
          {/* main column */}
          <div className="min-w-0 flex-1">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-[22px] font-bold tracking-tight text-ink">Good morning, Priya</h3>
                <p className="mt-0.5 text-[13px] text-slate-500">Monday, 28 Sep 2026 · FY 2026-27</p>
              </div>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-600">Sep 2026 ▾</span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-[15px] font-semibold text-ink">Needs you today</p>
              <p className="text-[12px] font-semibold" style={{ color: C.pebble }}>View all →</p>
            </div>
            <div className="mt-2.5 grid grid-cols-3 gap-3">
              <ActTile tone={C.pebble} count="23" label="Regularisations" sub="Before payroll cut-off" />
              <ActTile tone={C.info} count="14" label="Leave approvals" sub="3 overlap a holiday" />
              <ActTile tone={C.warning} count="6" label="Confirmations due" sub="Probation overdue" />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-[15px] font-semibold text-ink">Workforce pulse</p>
              <p className="text-[12px] text-slate-500">Sep 2026 month-end · vs prior period and target</p>
            </div>
            <div className="mt-2.5 grid grid-cols-3 gap-3">
              <Pulse name="Active headcount" value="2,847" delta="+32 net" good tint={C.lilac}
                chart={<AreaTrend color={C.pebble} values={[2690, 2702, 2711, 2725, 2738, 2749, 2760, 2774, 2789, 2801, 2815, 2847]} />}
                ctx="plan 3,000 · 95%" />
              <Pulse name="Attrition · TTM" value="11.8" unit="%" delta="within target" good tint="#FEE2E2"
                chart={<LineVsTarget target={1} values={[0.92, 1.02, 0.9, 0.98, 1.08, 0.96, 1.0, 1.04, 0.9, 0.97, 0.94, 0.96]} />}
                ctx="target ≤ 12% a year" />
              <Pulse name="Regretted exits" value="18" unit="%" delta="▼ 4 pts vs prior" good tint="#FEF3C7"
                chart={<Donut center={61} segments={[{ v: 9, c: C.error }, { v: 41, c: "#5FB3A5" }, { v: 11, c: "#C9CEDC" }]} />}
                ctx="90 days · 9 of 50 assessed" />
            </div>
            <div className="depth-blur-soft mt-3 grid grid-cols-3 gap-3">
              <Pulse name="Open positions" value="46" delta="17 offers out" good tint="#E0F2FE"
                chart={<MiniColumns color={C.info} highlight={2} values={[58, 12, 46, 17]} />}
                ctx="time-to-fill 38 d" />
              <Pulse name="Unplanned absence" value="2.4" unit="%" delta="▼ 0.5 pts" good tint="#FEF3C7"
                chart={<Bullet value={2.4} target={3} prev={2.9} />}
                ctx="Sep · target 3%" />
              <Pulse name="People cost / month" value="₹4.13 Cr" delta="97% of budget" good tint="#D1FAE5"
                chart={<MiniColumns color={C.success} highlight={5} values={[3.98, 4.02, 4.05, 4.07, 4.1, 4.13]} />}
                ctx="gross payroll, 6 months" />
            </div>
          </div>

          {/* right rail, sits behind the lifted payroll card */}
          <aside className="depth-blur w-[210px] shrink-0">
            <p className="text-[15px] font-semibold text-ink">Today at a glance</p>
            <div className="mt-2.5 space-y-2 rounded-2xl border border-slate-200/80 bg-white p-3">
              {[
                ["28 Sep 2026", "Monday", "#D1FAE5"],
                ["64", "On leave today", C.lilac],
                ["5", "Interviews today", "#FEF3C7"],
                ["7", "Exits this week", "#E0F2FE"],
              ].map(([v, l, t]) => (
                <div key={l} className="flex items-center gap-3 rounded-xl px-2 py-2">
                  <span className="h-9 w-9 rounded-xl" style={{ background: t }} />
                  <div>
                    <p className="tnum text-[15px] font-bold text-ink">{v}</p>
                    <p className="text-[11px] text-slate-500">{l}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[15px] font-semibold text-ink">Quick actions</p>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              {["Add employee", "Run payroll", "Raise requisition", "Announcement"].map((q) => (
                <span key={q} className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-[12px] font-medium text-slate-600">{q}</span>
              ))}
            </div>
          </aside>
        </div>

        {/* soft fade at the bottom edge, the screen continues below the fold */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAFAFD] to-transparent" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ lifted (embossed) cards */

function Step({ label, state }: { label: string; state: "done" | "now" | "next" }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5">
      <span className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ${
        state === "done" ? "bg-success text-white" : state === "now" ? "bg-[#5B45E8] text-white ring-4 ring-[#5B45E8]/20" : "border-2 border-slate-200 bg-white text-slate-400"}`}>
        {state === "done" ? "✓" : ""}
      </span>
      <span className={`text-[11px] font-medium ${state === "next" ? "text-slate-400" : "text-slate-700"}`}>{label}</span>
    </div>
  );
}

function PayrollCard() {
  const rows: [string, string][] = [
    ["Gross earnings", "₹4,86,32,400"],
    ["Employee PF", "- ₹38,41,200"],
    ["ESI", "- ₹1,12,450"],
    ["Professional tax", "- ₹5,48,600"],
    ["TDS", "- ₹28,62,250"],
  ];
  return (
    <div className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: C.pebble }}>Awaiting your approval</p>
          <p className="mt-1 text-[17px] font-bold text-ink">September 2026 payroll</p>
          <p className="text-[12px] text-slate-500">2,812 employees · 3 entities</p>
        </div>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">Pay date 30 Sep</span>
      </div>

      <div className="relative mt-4 flex">
        <span className="absolute left-[12%] right-[12%] top-3 h-0.5 bg-slate-200" />
        <span className="absolute left-[12%] top-3 h-0.5 w-[50%] bg-success" />
        <div className="relative flex w-full">
          <Step label="Compute" state="done" />
          <Step label="Verify" state="done" />
          <Step label="Approve" state="now" />
          <Step label="Publish" state="next" />
        </div>
      </div>

      <div className="mt-4 space-y-1.5 rounded-xl bg-slate-50/80 p-3 ring-1 ring-slate-100">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between text-[12.5px]">
            <span className="text-slate-500">{k}</span>
            <span className="tnum font-medium text-slate-700">{v}</span>
          </div>
        ))}
        <div className="!mt-2.5 flex items-baseline justify-between border-t border-dashed border-slate-200 pt-2.5">
          <span className="text-[13px] font-semibold text-ink">Net pay</span>
          <span className="tnum text-[20px] font-bold text-ink">₹4,12,67,900</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2.5">
        <span className="flex-1 rounded-xl bg-success py-2.5 text-center text-[13px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(16,185,129,0.7),inset_0_1px_0_rgba(255,255,255,0.35)]">Approve run</span>
        <span className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-600">Review variances</span>
      </div>
      <p className="mt-3 text-[11px] text-slate-500">Computed by Rohan Mehta · Verified by Neha Iyer</p>
    </div>
  );
}

function AttritionCard() {
  const rows: [string, number, string, boolean][] = [
    ["Inside Sales", 21.4, "▲ 3.1", false],
    ["Customer Support", 16.8, "▲ 1.2", false],
    ["Warehouse Ops", 12.5, "▼ 0.8", true],
    ["Engineering", 8.9, "▼ 1.6", true],
  ];
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <p className="text-[15px] font-bold text-ink">Attrition hotspots</p>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">annualised · worst first</span>
      </div>
      <div className="mt-4 space-y-3.5">
        {rows.map(([dept, pct, d, good]) => (
          <div key={dept}>
            <div className="flex items-baseline justify-between text-[12.5px]">
              <span className="font-medium text-slate-700">{dept}</span>
              <span className="tnum">
                <span className="font-bold text-ink">{pct}%</span>
                <span className={`ml-2 text-[11px] font-semibold ${good ? "text-success-dark" : "text-red-600"}`}>{d}</span>
              </span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full" style={{
                width: `${(pct / 25) * 100}%`,
                background: pct > 15 ? "linear-gradient(90deg,#F87171,#EF4444)" : pct > 10 ? "linear-gradient(90deg,#FBBF24,#F59E0B)" : "linear-gradient(90deg,#34D399,#10B981)",
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatutoryChip() {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-[11px] font-bold text-white" style={{ background: `linear-gradient(135deg, ${C.pebble}, ${C.brand})` }}>ECR</span>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold text-ink">PF ECR for Sep 2026 ready</p>
        <p className="text-[11px] text-slate-500">Due 15 Oct 2026 · 2,690 members</p>
      </div>
    </div>
  );
}

function LeaveToast() {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-success text-[15px] font-bold text-white">✓</span>
      <div>
        <p className="text-[13px] font-semibold text-ink">Leave approved</p>
        <p className="text-[11px] text-slate-600">Kavya Nair · 2 days · Casual</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ scene */

export function DashboardShowcase() {
  return (
    <ShowcaseStage
      width={STAGE_W}
      estHeight={900}
      bleed={{ top: 50, right: 140, bottom: 90, left: 100 }}
      label="The NeevHR HR Head dashboard: pending approvals, workforce pulse metrics, the September payroll awaiting approval and attrition hotspots by department."
      floaters={[
        { node: <PayrollCard />, width: 380, pos: { right: 4, top: 190 }, motion: "a", mobile: true },
        { node: <AttritionCard />, width: 340, pos: { left: 30, bottom: 34 }, motion: "b" },
        { node: <StatutoryChip />, width: 290, pos: { right: 330, top: 0 }, motion: "c" },
        { node: <LeaveToast />, width: 270, pos: { left: 36, top: 300 }, look: "glass", motion: "b" },
      ]}
    >
      <div className="h-[760px]">
        <AppScreen />
      </div>
    </ShowcaseStage>
  );
}
