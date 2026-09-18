import { ProductFrame, StatTile } from "./ProductFrame";

const catTone: Record<string, string> = {
  Travel: "bg-blue-100 text-blue-700",
  Hotel: "bg-purple-100 text-purple-700",
  Meals: "bg-amber-100 text-amber-700",
};
const rows = [
  { who: "Rohan Nair", cat: "Travel", amt: "12,400", sanctioned: null, checks: "Clear" },
  { who: "Isha Desai", cat: "Hotel", amt: "18,000", sanctioned: "15,000", checks: "1 flag" },
  { who: "Neel Mishra", cat: "Meals", amt: "2,150", sanctioned: null, checks: "Clear" },
];

export function ExpensesVisual() {
  return (
    <ProductFrame title="NeevHR · Expenses · Approval queue">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Pending" value="₹3.4 L" sub="14 claims" />
        <StatTile label="Spend MTD" value="₹18.9 L" tone="accent" />
        <StatTile label="Advances" value="₹2.1 L" />
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Employee</th>
              <th className="px-3 py-2 font-semibold">Category</th>
              <th className="px-3 py-2 text-right font-semibold">Amount</th>
              <th className="px-3 py-2 font-semibold">Policy</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.who} className="border-t border-line">
                <td className="px-3 py-2 font-medium text-ink">{r.who}</td>
                <td className="px-3 py-2">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${catTone[r.cat]}`}>{r.cat}</span>
                </td>
                <td className="tnum px-3 py-2 text-right">
                  {r.sanctioned ? (
                    <span>
                      <span className="text-muted line-through">₹{r.amt}</span>{" "}
                      <span className="font-semibold text-ink">₹{r.sanctioned}</span>
                    </span>
                  ) : (
                    <span className="text-ink">₹{r.amt}</span>
                  )}
                </td>
                <td className="px-3 py-2">
                  <span className={`text-[11px] font-semibold ${r.checks === "Clear" ? "text-accent-dark" : "text-amber-600"}`}>
                    {r.checks}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11px] text-muted">Partial sanction shown struck-through; approver and payer are separate roles.</p>
    </ProductFrame>
  );
}
