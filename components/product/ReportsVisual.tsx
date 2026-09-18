import { ProductFrame } from "./ProductFrame";

const segs = [
  { label: "Engineering", pct: 40, color: "var(--color-brand)" },
  { label: "Operations", pct: 25, color: "var(--color-brand-soft)" },
  { label: "Sales", pct: 20, color: "var(--color-accent)" },
  { label: "Support", pct: 15, color: "#f59e0b" },
];
const C = 2 * Math.PI * 40;
let acc = 0;
const arcs = segs.map((s) => {
  const len = (s.pct / 100) * C;
  const arc = { ...s, dash: `${len} ${C - len}`, offset: -acc };
  acc += len;
  return arc;
});

export function ReportsVisual() {
  return (
    <ProductFrame title="NeevHR · Reports · Custom report builder">
      <div className="mb-3 flex flex-wrap gap-2">
        {["Dataset: Employees", "Group by: Department", "Metric: Headcount", "Chart: Donut"].map((t) => (
          <span key={t} className="rounded-lg bg-brand-tint px-2.5 py-1 text-[11px] font-medium text-brand">
            {t}
          </span>
        ))}
      </div>

      <div className="grid items-center gap-4 rounded-xl border border-line p-4 sm:grid-cols-[auto_1fr]">
        <svg viewBox="0 0 100 100" className="mx-auto h-32 w-32 -rotate-90">
          {arcs.map((a) => (
            <circle
              key={a.label}
              cx="50" cy="50" r="40"
              fill="none"
              stroke={a.color}
              strokeWidth="14"
              strokeDasharray={a.dash}
              strokeDashoffset={a.offset}
            />
          ))}
          <circle cx="50" cy="50" r="27" fill="white" />
        </svg>
        <div className="space-y-2">
          {segs.map((s) => (
            <div key={s.label} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-body">
                <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
                {s.label}
              </span>
              <span className="tnum font-semibold text-ink">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2 text-[11px] text-muted">
        Every list becomes a report; click any slice to drill to the records.
      </p>
    </ProductFrame>
  );
}
