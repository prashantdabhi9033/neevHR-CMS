import { ProductFrame } from "./ProductFrame";

const rows = [
  { dept: "Engineering", planned: 104, strength: 92, budget: "18.4" },
  { dept: "Operations", planned: 70, strength: 63, budget: "9.1" },
  { dept: "Sales", planned: 58, strength: 52, budget: "11.2" },
  { dept: "Support", planned: 34, strength: 29, budget: "3.8" },
];

export function PlanningVisual() {
  return (
    <ProductFrame title="NeevHR · Workforce planning · FY 2026-27">
      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Department</th>
              <th className="px-3 py-2 text-right font-semibold">Planned</th>
              <th className="px-3 py-2 text-right font-semibold">Strength</th>
              <th className="px-3 py-2 text-center font-semibold">Open</th>
              <th className="px-3 py-2 text-right font-semibold">Budget</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const open = r.planned - r.strength;
              return (
                <tr key={r.dept} className="border-t border-line">
                  <td className="px-3 py-2 font-medium text-ink">{r.dept}</td>
                  <td className="px-3 py-2 text-right">
                    <span className="tnum inline-block min-w-9 rounded-md border border-line bg-white px-2 py-0.5 text-right text-ink">
                      {r.planned}
                    </span>
                  </td>
                  <td className="tnum px-3 py-2 text-right text-body">{r.strength}</td>
                  <td className="px-3 py-2 text-center">
                    <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">
                      {open} open
                    </span>
                  </td>
                  <td className="tnum px-3 py-2 text-right text-ink">₹{r.budget} Cr</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-brand px-4 py-3 text-white">
        <span className="text-xs text-white/80">Planned headcount</span>
        <span className="tnum text-lg font-bold">236 · 35 open</span>
      </div>
    </ProductFrame>
  );
}
