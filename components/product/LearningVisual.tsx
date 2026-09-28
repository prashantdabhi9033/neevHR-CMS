import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Bar, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Designed learning mock: mandatory POSH completion by department against the org line.
// Lifted pieces: the course's due-date nudge, a certificate just issued, and the annual training plan.
// Mandatory audience: Engineering 72/75, Operations 46/50, Sales 44/50, Support 21/25 = 183/200 (92%).
const depts = [
  { name: "Engineering", done: 72, of: 75 },
  { name: "Operations", done: 46, of: 50 },
  { name: "Sales", done: 44, of: 50 },
  { name: "Support", done: 21, of: 25 },
].map((d) => ({ ...d, pct: Math.round((d.done / d.of) * 100) }));
const ORG = 92;

const courses = [
  { name: "POSH awareness 2026", pct: 92 },
  { name: "DPDP Act 2023 basics", pct: 88 },
  { name: "Code of conduct", pct: 97 },
];

// scale 60..100 across the track
const pos = (v: number) => `${((v - 60) / 40) * 100}%`;
const zone = (v: number) => (v >= 93 ? "bg-emerald-500" : v >= 87 ? "bg-amber-400" : "bg-red-400");

const floaters: Floater[] = [
  {
    width: 310,
    pos: { right: 0, top: 150 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Mandatory course" title="POSH awareness 2026" meta="All employees · pass mark 80%" tag={<Tag tone="warning">Due 15 Oct</Tag>}>
        <div className="mb-1.5 flex justify-between text-[11.5px]">
          <span className="text-slate-500">Completion</span>
          <span className="tnum font-semibold text-ink">183 / 200</span>
        </div>
        <Bar pct={91.5} tone="success" />
        <div className="mt-3.5">
          <Rows rows={[["Completed", "183"], ["Pending", "17"], ["Average quiz score", "86%"]]} />
        </div>
        <Actions primary="Remind 17 pending" secondary="Course" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast title="Certificate issued" sub="Ritika Joshi · POSH · scored 92%" />,
  },
  {
    width: 270,
    pos: { right: 300, top: 0 },
    node: <Chip badge="PLAN" tone="info" title="Training plan FY 2026-27" sub="₹4,80,000 budget · 38% used" />,
  },
];

export function LearningVisual() {
  return (
    <ProductFrame title="NeevHR · Learning · Mandatory compliance" floaters={floaters} actions={<><WinButton>Catalog</WinButton><WinButton primary>New course</WinButton></>}>
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="POSH completion" value="92%" sub="183 of 200" tone="accent" />
        <StatTile label="Hrs / employee" value="11.4" sub="FY 2026-27" />
        <StatTile label="Certificates" value="46" sub="issued this month" />
      </Soft>

      <div className="mt-4 grid grid-cols-[1.15fr_1fr] gap-4">
        <div className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">POSH awareness · by department</p>
          <div className="relative mt-7 space-y-5">
            {/* org reference line, aligned to the bar track */}
            <div className="pointer-events-none absolute inset-y-0 left-[88px] right-[44px]">
              <div className="absolute inset-y-0 z-10 border-l border-dashed border-brand" style={{ left: pos(ORG) }}>
                <span className="absolute -top-4 -translate-x-1/2 whitespace-nowrap rounded bg-brand px-1 text-[9px] font-semibold text-white">
                  Org {ORG}%
                </span>
              </div>
            </div>
            {depts.map((d) => (
              <div key={d.name} className="flex items-center gap-3">
                <span className="w-[76px] shrink-0 text-xs text-body">{d.name}</span>
                <div className="relative h-3 flex-1 rounded-full bg-surface-soft">
                  <div className={`h-full rounded-full ${zone(d.pct)}`} style={{ width: pos(d.pct) }} />
                </div>
                <span className="tnum w-8 shrink-0 text-right text-xs font-semibold text-ink">{d.pct}%</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-line pt-3 text-[11px] text-muted">
            <span className="tnum">183 of 200 completed · 17 pending</span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> 93%+
              <span className="ml-1.5 h-2 w-2 rounded-full bg-amber-400" /> 87%+
            </span>
          </div>
        </div>

        <Soft className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Mandatory courses</p>
          <div className="mt-3 space-y-3">
            {courses.map((c) => (
              <div key={c.name} className="rounded-lg border border-line px-3 py-2.5">
                <div className="flex items-center justify-between text-[12px]">
                  <span className="font-semibold text-ink">{c.name}</span>
                  <span className="tnum font-semibold text-ink">{c.pct}%</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-surface-soft">
                  <div className="h-1.5 rounded-full bg-brand" style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
