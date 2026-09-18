import { ProductFrame, StatTile } from "./ProductFrame";

// Product-accurate default panel: a KPI stat row + a horizontal bar chart +
// a tag row. Mirrors the product's universal "MetricCard row + chart" rhythm.
// Each module supplies its own real metrics so the panel stays on-message.
export type ShowcaseData = {
  title: string;
  stats: { label: string; value: string; sub?: string; accent?: boolean }[];
  barTitle: string;
  bars: { label: string; value: number }[];
  tags?: string[];
  money?: boolean;
};

export function ShowcaseVisual({ data }: { data: ShowcaseData }) {
  const max = Math.max(...data.bars.map((b) => b.value)) || 1;
  return (
    <ProductFrame title={data.title}>
      <div className="grid gap-4 sm:grid-cols-3">
        {data.stats.map((s) => (
          <StatTile
            key={s.label}
            label={s.label}
            value={s.value}
            sub={s.sub}
            tone={s.accent ? "accent" : "muted"}
          />
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-line p-4">
        <p className="text-sm font-semibold text-ink">{data.barTitle}</p>
        <div className="mt-3 space-y-2.5">
          {data.bars.map((b, i) => (
            <div key={b.label} className="flex items-center gap-3">
              <span className="w-28 shrink-0 truncate text-xs text-body">
                {b.label}
              </span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface-soft">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.max(6, (b.value / max) * 100)}%`,
                    background: i === 0 ? "var(--color-brand)" : "var(--color-brand-soft)",
                    opacity: i === 0 ? 1 : 0.5 + 0.5 * (b.value / max),
                  }}
                />
              </div>
              <span className="tnum w-14 shrink-0 text-right text-xs font-semibold text-ink">
                {data.money ? "₹" : ""}
                {b.value.toLocaleString("en-IN")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {data.tags && data.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {data.tags.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-surface-soft px-2.5 py-1 text-xs font-medium text-body"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </ProductFrame>
  );
}
