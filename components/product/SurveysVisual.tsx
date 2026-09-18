import { ProductFrame, StatTile } from "./ProductFrame";

const dims = [
  { label: "Leadership", score: 4.2 },
  { label: "Growth", score: 3.6 },
  { label: "Recognition", score: 3.9 },
  { label: "Work-life", score: 4.4 },
];

export function SurveysVisual() {
  return (
    <ProductFrame title="NeevHR · Surveys · Q3 pulse">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="eNPS" value="+42" sub="promoters − detractors" tone="accent" />
        <StatTile label="Response rate" value="87%" />
        <StatTile label="Anonymity" value="≥5" sub="threshold" />
      </div>

      <div className="mt-4 rounded-xl border border-line p-4">
        <p className="text-sm font-semibold text-ink">eNPS distribution</p>
        <div className="mt-3 flex h-7 overflow-hidden rounded-lg">
          <div className="flex items-center justify-center bg-red-400 text-[11px] font-semibold text-white" style={{ width: "18%" }}>18%</div>
          <div className="flex items-center justify-center bg-slate-200 text-[11px] font-semibold text-slate-600" style={{ width: "22%" }}>22%</div>
          <div className="flex items-center justify-center bg-accent text-[11px] font-semibold text-white" style={{ width: "60%" }}>60%</div>
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-muted">
          <span>Detractors 18%</span><span>Passives 22%</span><span>Promoters 60%</span>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-line p-4">
        <p className="text-sm font-semibold text-ink">Score by dimension</p>
        <div className="mt-3 space-y-2">
          {dims.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-xs text-body">{d.label}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-soft">
                <div className="h-full rounded-full bg-brand" style={{ width: `${(d.score / 5) * 100}%` }} />
              </div>
              <span className="tnum w-8 text-right text-xs font-semibold text-ink">{d.score}</span>
            </div>
          ))}
        </div>
      </div>
    </ProductFrame>
  );
}
