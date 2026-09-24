import { ProductFrame, StatTile } from "./ProductFrame";

const depts = [
  { name: "Engineering", pct: 96 },
  { name: "Operations", pct: 92 },
  { name: "Sales", pct: 88 },
  { name: "Support", pct: 84 },
];
const ORG = 92;
// scale 60..100 across the track
const pos = (v: number) => `${((v - 60) / 40) * 100}%`;
const zone = (v: number) => (v >= 93 ? "bg-emerald-500" : v >= 87 ? "bg-amber-400" : "bg-red-400");

export function LearningVisual() {
  return (
    <ProductFrame title="NeevHR · Learning · Mandatory compliance">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Completion" value="94%" tone="accent" />
        <StatTile label="Hrs / employee" value="11.4" />
        <StatTile label="Certificates" value="46" sub="issued this month" />
      </div>

      <div className="mt-4 rounded-xl border border-line p-4">
        <p className="text-sm font-semibold text-ink">POSH · DPDP · Code of conduct by department</p>
        <div className="relative mt-4 space-y-3">
          {/* org reference line */}
          <div
            className="absolute inset-y-0 z-10 border-l border-dashed border-brand"
            style={{ left: pos(ORG) }}
          >
            <span className="absolute -top-3 -translate-x-1/2 rounded bg-brand px-1 text-[9px] font-semibold text-white">
              Org {ORG}%
            </span>
          </div>
          {depts.map((d) => (
            <div key={d.name} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-xs text-body">{d.name}</span>
              <div className="relative h-3 flex-1 rounded-full bg-surface-soft">
                <div className={`h-full rounded-full ${zone(d.pct)}`} style={{ width: pos(d.pct) }} />
              </div>
              <span className="tnum w-9 text-right text-xs font-semibold text-ink">{d.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </ProductFrame>
  );
}
