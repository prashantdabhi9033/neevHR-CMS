import { ProductFrame, StatTile } from "./ProductFrame";

const rows = [
  { who: "Kavya Mehta", comp: "Q3 incentive", type: "add", amt: "24,000" },
  { who: "Rohan Nair", comp: "Sales commission", type: "add", amt: "18,500" },
  { who: "Neel Mishra", comp: "Notice recovery", type: "ded", amt: "12,000" },
];

export function VariablePayVisual() {
  return (
    <ProductFrame title="NeevHR · Variable pay · FY 2025-26 bonus">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Eligible" value="176" />
        <StatTile label="Bonus payable" value="₹41.2 L" tone="accent" />
        <StatTile label="Rate" value="8.33%" sub="Bonus Act" />
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Employee</th>
              <th className="px-3 py-2 font-semibold">Component</th>
              <th className="px-3 py-2 text-right font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.who} className="border-t border-line">
                <td className="px-3 py-2 font-medium text-ink">{r.who}</td>
                <td className="px-3 py-2">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${r.type === "add" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                    {r.comp}
                  </span>
                </td>
                <td className={`tnum px-3 py-2 text-right font-semibold ${r.type === "add" ? "text-accent-dark" : "text-red-600"}`}>
                  {r.type === "add" ? "+" : "−"}₹{r.amt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11px] text-muted">Statutory bonus under the Payment of Bonus Act, 1965 with Forms A to D.</p>
    </ProductFrame>
  );
}
