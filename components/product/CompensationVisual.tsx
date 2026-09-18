import { ProductFrame } from "./ProductFrame";

// Mirrors the product's merit matrix: ratings x compa-ratio bands, each cell a
// suggested increment % with a heat background by magnitude.
const ratings = ["A+", "A", "B+", "B", "C"];
const bands = ["Below", "Within", "Above"];
const matrix: number[][] = [
  [18, 14, 10],
  [14, 11, 8],
  [10, 8, 6],
  [7, 5, 4],
  [3, 0, 0],
];

function heat(v: number) {
  if (v >= 14) return { bg: "rgba(16,185,129,0.16)", fg: "#047857" };
  if (v >= 8) return { bg: "rgba(67,56,202,0.12)", fg: "var(--color-brand)" };
  if (v >= 4) return { bg: "rgba(245,158,11,0.16)", fg: "#b45309" };
  return { bg: "var(--color-surface-soft)", fg: "var(--color-muted)" };
}

export function CompensationVisual() {
  return (
    <ProductFrame title="NeevHR · Compensation · FY 2027-28 increment">
      <div className="rounded-xl border border-line p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">Merit matrix</p>
          <span className="text-xs text-muted">increment % · budget 9.0%</span>
        </div>
        <table className="mt-3 w-full border-separate border-spacing-1 text-center">
          <thead>
            <tr>
              <th className="text-[10px] font-semibold uppercase text-muted" />
              {bands.map((b) => (
                <th key={b} className="text-[10px] font-semibold uppercase text-muted">
                  {b}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ratings.map((r, i) => (
              <tr key={r}>
                <td className="text-xs font-semibold text-ink">{r}</td>
                {matrix[i].map((v, j) => {
                  const h = heat(v);
                  return (
                    <td
                      key={j}
                      className="tnum rounded-md py-2 text-[13px] font-bold"
                      style={{ background: h.bg, color: h.fg }}
                    >
                      {v ? `${v}%` : "—"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-[11px] leading-snug text-muted">
          Below-band (under-paid) high performers earn the most, the pay-equity
          lever.
        </p>
      </div>

      <div className="mt-3 rounded-xl border border-line p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-ink">Budget burn-down</span>
          <span className="tnum text-muted">₹2.1 Cr of ₹2.4 Cr</span>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-soft">
          <div className="h-full rounded-full bg-accent" style={{ width: "88%" }} />
        </div>
        <p className="mt-1.5 text-[11px] font-medium text-accent-dark">
          ₹30 L left in pool
        </p>
      </div>
    </ProductFrame>
  );
}
