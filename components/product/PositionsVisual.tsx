import { ProductFrame } from "./ProductFrame";

const tone: Record<string, string> = {
  Filled: "bg-blue-100 text-blue-700",
  Open: "bg-emerald-100 text-emerald-700",
  "On notice": "bg-amber-100 text-amber-700",
  Frozen: "bg-slate-200 text-slate-600",
};
const rows = [
  ["ENG-014", "Senior Engineer", "Filled", "Kavya Mehta", "1.0", "24.0"],
  ["ENG-021", "Engineer", "Open", "Vacant", "1.0", "14.0"],
  ["SAL-008", "Sales Manager", "On notice", "Rohan Nair", "1.0", "18.5"],
  ["OPS-003", "Ops Lead", "Frozen", "Vacant", "0.5", "12.0"],
];

export function PositionsVisual() {
  return (
    <ProductFrame title="NeevHR · Positions · Establishment">
      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Code</th>
              <th className="px-3 py-2 font-semibold">Position</th>
              <th className="px-3 py-2 font-semibold">Status</th>
              <th className="px-3 py-2 font-semibold">Incumbent</th>
              <th className="px-3 py-2 text-right font-semibold">FTE</th>
              <th className="px-3 py-2 text-right font-semibold">Budget</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-line">
                <td className="tnum px-3 py-2 text-muted">{r[0]}</td>
                <td className="px-3 py-2 font-medium text-ink">{r[1]}</td>
                <td className="px-3 py-2">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${tone[r[2]]}`}>{r[2]}</span>
                </td>
                <td className={`px-3 py-2 ${r[3] === "Vacant" ? "text-amber-600" : "text-body"}`}>{r[3]}</td>
                <td className="tnum px-3 py-2 text-right text-ink">{r[4]}</td>
                <td className="tnum px-3 py-2 text-right text-ink">₹{r[5]}L</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center">
        {[["214", "Positions"], ["12", "Open"], ["6", "On notice"], ["3", "Frozen"]].map(([v, l]) => (
          <div key={l} className="rounded-lg bg-surface-soft py-2">
            <p className="tnum text-sm font-bold text-ink">{v}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}
