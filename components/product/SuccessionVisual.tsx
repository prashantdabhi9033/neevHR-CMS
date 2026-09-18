import { ProductFrame } from "./ProductFrame";

// Mirrors the product's succession skill-gap heatmap: pipeline members x
// leadership competencies, each cell a 1-5 score on a red->amber->green scale.
const cols = ["Strategy", "P&L", "People", "Domain", "Stakeholder", "Execution"];
const rows: { name: string; scores: number[] }[] = [
  { name: "Kavya Mehta", scores: [4, 3, 5, 5, 4, 5] },
  { name: "Rohan Nair", scores: [3, 2, 4, 5, 3, 4] },
  { name: "Isha Desai", scores: [5, 4, 4, 3, 5, 4] },
  { name: "Neel Mishra", scores: [2, 2, 3, 4, 3, 3] },
];

function cell(v: number) {
  if (v >= 5) return { bg: "#059669", fg: "#fff" };
  if (v === 4) return { bg: "#34d399", fg: "#064e3b" };
  if (v === 3) return { bg: "#fcd34d", fg: "#713f12" };
  if (v === 2) return { bg: "#fb923c", fg: "#7c2d12" };
  return { bg: "#f87171", fg: "#7f1d1d" };
}

export function SuccessionVisual() {
  return (
    <ProductFrame title="NeevHR · Succession · Leadership bench">
      <div className="overflow-x-auto">
        <div className="min-w-[420px]">
          <div className="grid grid-cols-[92px_repeat(6,1fr)] gap-1">
            <span />
            {cols.map((c) => (
              <span
                key={c}
                className="truncate text-center text-[9px] font-semibold uppercase text-muted"
                title={c}
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-1 space-y-1">
            {rows.map((r) => (
              <div key={r.name} className="grid grid-cols-[92px_repeat(6,1fr)] items-center gap-1">
                <span className="truncate text-[11px] font-semibold text-ink">
                  {r.name.split(" ")[0]}
                </span>
                {r.scores.map((v, i) => {
                  const c = cell(v);
                  return (
                    <div
                      key={i}
                      className="tnum flex h-9 items-center justify-center rounded-md text-[11px] font-bold"
                      style={{ background: c.bg, color: c.fg }}
                    >
                      {v}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-muted">
          <span>Gap</span>
          {[1, 2, 3, 4, 5].map((v) => (
            <span key={v} className="h-3 w-4 rounded-sm" style={{ background: cell(v).bg }} />
          ))}
          <span>Strong</span>
        </div>
        <span className="rounded-lg bg-brand-tint px-2.5 py-1 text-[11px] font-semibold text-brand">
          9-box · readiness
        </span>
      </div>
    </ProductFrame>
  );
}
