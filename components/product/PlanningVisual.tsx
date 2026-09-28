import { Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Workforce planning MEANS deciding next year's headcount and cost before the hiring starts. So the
// image is the plan itself as a working sheet (department and role rows, one cell being edited with its
// dated history underneath) under plan-vs-actual bars. Engineering roles 24+48+12+8 = 92 planned,
// 20+42+10+7 = 79 in seat, 86 positions, budget 5.76+6.72+3.36+0.96 = ₹16.8 Cr. Org: 226 planned,
// 201 in seat, 26 open (Eng 13 · Ops 7 · Sales 6), 1 over (Support), 216 positions, ₹36.4 Cr.

type Line = { name: string; planned: number; strength: number; positions: number; budgetCr: number };

const depts: (Line & { roles?: Line[] })[] = [
  {
    name: "Engineering",
    planned: 92,
    strength: 79,
    positions: 86,
    budgetCr: 16.8,
    roles: [
      { name: "Senior Engineer", planned: 24, strength: 20, positions: 22, budgetCr: 5.76 },
      { name: "Engineer", planned: 48, strength: 42, positions: 45, budgetCr: 6.72 },
      { name: "Lead Engineer", planned: 12, strength: 10, positions: 11, budgetCr: 3.36 },
      { name: "QA Engineer", planned: 8, strength: 7, positions: 8, budgetCr: 0.96 },
    ],
  },
  { name: "Operations", planned: 66, strength: 59, positions: 64, budgetCr: 7.9 },
  { name: "Sales", planned: 58, strength: 52, positions: 55, budgetCr: 10.4 },
  { name: "Support", planned: 10, strength: 11, positions: 11, budgetCr: 1.3 },
];

const total = depts.reduce(
  (t, d) => ({
    planned: t.planned + d.planned,
    strength: t.strength + d.strength,
    positions: t.positions + d.positions,
    budget: t.budget + d.budgetCr,
    open: t.open + Math.max(0, d.planned - d.strength),
    over: t.over + Math.max(0, d.strength - d.planned),
  }),
  { planned: 0, strength: 0, positions: 0, budget: 0, open: 0, over: 0 },
);

const cr = (v: number) => `₹${v.toFixed(v < 10 ? 2 : 1).replace(/\.?0+$/, "")} Cr`;

function Gap({ planned, strength }: { planned: number; strength: number }) {
  const g = planned - strength;
  return g >= 0 ? (
    <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10.5px] font-semibold text-amber-800">{g} open</span>
  ) : (
    <span className="rounded bg-red-100 px-1.5 py-0.5 text-[10.5px] font-semibold text-red-700">{-g} over</span>
  );
}

function Bars() {
  const pct = (v: number) => `${v}%`; // track runs 0 to 100 heads
  return (
    <div className="mt-4 space-y-3">
      {depts.map((d) => {
        const over = d.strength > d.planned;
        return (
          <div key={d.name} className="flex items-center gap-3">
            <span className="w-[86px] shrink-0 text-[11.5px] font-medium text-ink">{d.name}</span>
            <div className="relative h-[18px] flex-1">
              <div className="absolute inset-y-0 left-0 right-0 rounded bg-slate-100/70" />
              {/* plan envelope */}
              <div
                className="absolute inset-y-0 left-0 rounded border-2 border-dashed border-[#15147B]/35 bg-white"
                style={{ width: pct(d.planned) }}
              />
              {/* in seat */}
              <div
                className={`absolute left-0 top-[4px] h-[10px] rounded-sm ${over ? "bg-red-400" : "bg-[#15147B]"}`}
                style={{ width: pct(d.strength) }}
              />
            </div>
            <span className="tnum w-[92px] shrink-0 text-right text-[11px] text-slate-600">
              <b className="text-ink">{d.strength}</b> / {d.planned}
              <span className={`ml-1.5 font-semibold ${over ? "text-red-600" : "text-[#B45309]"}`}>
                {over ? `+${d.strength - d.planned}` : `-${d.planned - d.strength}`}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

const cell = "tnum px-3 text-right text-[12px]";

export function PlanningVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={720}
      backdrop="sky"
      label="A NeevHR FY 2026-27 headcount plan: plan-vs-actual bars by department above an editable plan sheet by department and role, with one edited cell and its dated change history."
    >
      <div className="grid grid-cols-[1fr_236px] gap-5">
        <Card className="px-5 pb-4 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <Eyebrow>Headcount plan · FY 2026-27</Eyebrow>
              <p className="mt-0.5 text-[15px] font-semibold text-ink">Plan vs in seat</p>
            </div>
            <div className="flex gap-4 text-[10.5px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-3.5 rounded-sm border-2 border-dashed border-[#15147B]/40" /> Planned
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-3.5 rounded-sm bg-[#15147B]" /> In seat
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-3.5 rounded-sm bg-red-400" /> Over plan
              </span>
            </div>
          </div>
          <Bars />
        </Card>

        <div className="grid grid-cols-2 gap-2.5">
          {[
            ["Planned", String(total.planned), "text-ink"],
            ["In seat", String(total.strength), "text-[#047857]"],
            ["Open", String(total.open), "text-[#B45309]"],
            ["Over plan", String(total.over), "text-red-600"],
          ].map(([l, v, c]) => (
            <Card key={l} className="px-3.5 py-3">
              <p className="text-[10.5px] text-slate-500">{l}</p>
              <p className={`tnum text-[22px] font-bold leading-tight ${c}`}>{v}</p>
            </Card>
          ))}
          <Card className="col-span-2 px-3.5 py-3">
            <div className="flex items-baseline justify-between">
              <p className="text-[11px] font-semibold text-ink">Hiring plan</p>
              <p className="tnum text-[11px] text-slate-500">19 / 26 raised</p>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-[#5B45E8]" style={{ width: `${(19 / 26) * 100}%` }} />
            </div>
            <p className="mt-1.5 text-[10.5px] text-slate-500">7 planned hires still need a requisition</p>
          </Card>
        </div>
      </div>

      <Card className="mt-5 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-[10.5px] uppercase tracking-wider text-slate-500">
              <th className="px-4 py-2.5 text-left font-semibold">Department / role</th>
              <th className="px-3 py-2.5 text-right font-semibold">Planned</th>
              <th className="px-3 py-2.5 text-right font-semibold">In seat</th>
              <th className="px-3 py-2.5 text-right font-semibold">Open / over</th>
              <th className="px-3 py-2.5 text-right font-semibold">Positions</th>
              <th className="px-4 py-2.5 text-right font-semibold">Budget (CTC / yr)</th>
            </tr>
          </thead>
          <tbody>
            {depts.map((d) => (
              <FragmentRows key={d.name} d={d} />
            ))}
            <tr className="bg-[#F4F3FE] text-[12.5px] font-bold text-ink">
              <td className="px-4 py-2.5">Total · Aikyora Pvt Ltd</td>
              <td className={cell}>{total.planned}</td>
              <td className={cell}>{total.strength}</td>
              <td className="px-3 py-2.5 text-right text-[11px] font-semibold text-slate-600">
                {total.open} open · {total.over} over
              </td>
              <td className={cell}>{total.positions}</td>
              <td className="tnum px-4 text-right">{cr(total.budget)}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </VisualStage>
  );
}

function FragmentRows({ d }: { d: (typeof depts)[number] }) {
  return (
    <>
      <tr className="border-b border-slate-100 text-[12.5px]">
        <td className="px-4 py-2 font-semibold text-ink">
          {d.roles ? "▾ " : "▸ "}
          {d.name}
        </td>
        <td className={`${cell} font-semibold text-ink`}>{d.planned}</td>
        <td className={`${cell} text-slate-600`}>{d.strength}</td>
        <td className="px-3 py-2 text-right">
          <Gap planned={d.planned} strength={d.strength} />
        </td>
        <td className={`${cell} text-slate-600`}>{d.positions}</td>
        <td className="tnum px-4 text-right text-[12px] text-ink">{cr(d.budgetCr)}</td>
      </tr>
      {d.roles?.map((r) => {
        const editing = r.name === "Senior Engineer";
        return (
          <RoleRow key={r.name} r={r} editing={editing} />
        );
      })}
    </>
  );
}

function RoleRow({ r, editing }: { r: Line; editing: boolean }) {
  return (
    <>
      <tr className={`border-b border-slate-100 text-[12px] ${editing ? "bg-[#EEF4FF]" : ""}`}>
        <td className="py-1.5 pl-9 pr-4 text-slate-600">{r.name}</td>
        <td className="px-3 py-1.5 text-right">
          <span
            className={`tnum inline-flex min-w-[46px] items-center justify-end rounded-md px-2 py-0.5 ${
              editing ? "border-2 border-[#2563EB] bg-white font-semibold text-ink shadow-[0_0_0_3px_rgba(37,99,235,0.15)]" : "border border-slate-200 bg-white text-ink"
            }`}
          >
            {r.planned}
            {editing && <span className="ml-0.5 inline-block h-3.5 w-px bg-[#2563EB]" />}
          </span>
        </td>
        <td className={`${cell} text-slate-600`}>{r.strength}</td>
        <td className="px-3 py-1.5 text-right">
          <Gap planned={r.planned} strength={r.strength} />
        </td>
        <td className={`${cell} text-slate-600`}>{r.positions}</td>
        <td className="tnum px-4 text-right text-[12px] text-slate-600">{cr(r.budgetCr)}</td>
      </tr>
      {editing && (
        <tr className="border-b border-slate-100 bg-[#EEF4FF]">
          <td colSpan={6} className="pb-2.5 pl-9 pr-4">
            <div className="flex items-center gap-3 rounded-lg border border-[#2563EB]/20 bg-white px-3 py-2 text-[11px]">
              <span className="font-semibold text-[#1D4ED8]">Change history</span>
              <span className="tnum text-slate-600">
                22 Sep 2026 · planned <b className="text-ink">20 → 24</b> · Neha Joshi
              </span>
              <span className="text-slate-300">|</span>
              <span className="tnum text-slate-500">01 Apr 2026 · rolled forward from FY 2025-26</span>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
