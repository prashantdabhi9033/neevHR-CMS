import { ProductFrame, StatTile } from "./ProductFrame";

// Mirrors the product's employee-360 pay progression: a step-line of CTC over
// time with purple promotion pins.
const pts = [
  { x: 0, ctc: 6.5, promo: false },
  { x: 1, ctc: 7.2, promo: false },
  { x: 2, ctc: 9.0, promo: true },
  { x: 3, ctc: 9.8, promo: false },
  { x: 4, ctc: 12.5, promo: true },
  { x: 5, ctc: 13.4, promo: false },
];
const W = 300;
const H = 110;
const maxC = 15;
const stepX = W / (pts.length - 1);
const y = (c: number) => H - (c / maxC) * (H - 12);

// Step path (step-end).
let d = `M 0 ${y(pts[0].ctc)}`;
for (let i = 1; i < pts.length; i++) {
  d += ` L ${i * stepX} ${y(pts[i - 1].ctc)} L ${i * stepX} ${y(pts[i].ctc)}`;
}

export function EmployeesVisual() {
  return (
    <ProductFrame title="NeevHR · Employee 360 · Ishita Gandhi">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Active headcount" value="2,847" sub="+32 this month" tone="accent" />
        <StatTile label="Avg tenure" value="3.4 yrs" />
        <StatTile label="Setup complete" value="99.9%" />
      </div>

      <div className="mt-4 rounded-xl border border-line p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Pay & promotion progression</p>
          <span className="tnum text-xs text-muted">₹13.4 LPA</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H + 8}`} className="mt-2 w-full" role="img" aria-label="CTC progression">
          <path d={`${d} L ${W} ${H} L 0 ${H} Z`} fill="var(--color-brand)" opacity={0.06} />
          <path d={d} fill="none" stroke="var(--color-brand)" strokeWidth={2} />
          {pts.map((p, i) => (
            <g key={i}>
              <circle cx={i * stepX} cy={y(p.ctc)} r={3} fill="var(--color-brand)" />
              {p.promo && (
                <circle cx={i * stepX} cy={y(p.ctc)} r={6} fill="none" stroke="#7c3aed" strokeWidth={2} />
              )}
            </g>
          ))}
        </svg>
        <div className="mt-1 flex gap-4 text-[11px] text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-3 rounded-sm bg-brand" /> CTC
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-[#7c3aed]" /> Promotion
          </span>
        </div>
      </div>
    </ProductFrame>
  );
}
