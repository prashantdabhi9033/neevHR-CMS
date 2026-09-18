import { ProductFrame, StatTile } from "./ProductFrame";

// Designed performance mock: weighted goals + overall rating.
const goals = [
  { title: "Revenue target (West region)", weight: 40, score: 92 },
  { title: "Team hiring & ramp", weight: 30, score: 85 },
  { title: "Process automation", weight: 30, score: 78 },
];

export function PerformanceVisual() {
  return (
    <ProductFrame title="NeevHR · Performance · FY 2026 appraisal">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Overall rating" value="4.3 / 5" sub="Exceeds" tone="accent" />
        <StatTile label="Goals weight" value="100%" sub="3 goals" />
        <StatTile label="Increment" value="9.5%" sub="signed off" />
      </div>

      <div className="mt-4 space-y-2.5">
        {goals.map((g) => (
          <div key={g.title} className="rounded-xl border border-line p-4">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-ink">{g.title}</p>
              <span className="shrink-0 rounded-md bg-brand-tint px-2 py-0.5 text-xs font-semibold text-brand">
                {g.weight}%
              </span>
            </div>
            <div className="mt-2.5 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-soft">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${g.score}%` }}
                />
              </div>
              <span className="tnum text-xs font-semibold text-ink">
                {g.score}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}
