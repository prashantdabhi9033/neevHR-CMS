import { ProductFrame } from "./ProductFrame";

// Mirrors the product's reducing-balance EMI amortization schedule.
const rows = [
  ["1", "Oct 26", "9,264", "1,000", "8,264", "91,736"],
  ["2", "Nov 26", "9,264", "917", "8,347", "83,389"],
  ["3", "Dec 26", "9,264", "834", "8,430", "74,959"],
  ["4", "Jan 27", "9,264", "750", "8,514", "66,445"],
];

export function LoansVisual() {
  return (
    <ProductFrame title="NeevHR · Loans · Personal loan · Rohan Nair">
      <div className="mb-3 rounded-xl border border-line p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-ink">Repaid</span>
          <span className="tnum text-muted">₹8,264 of ₹1,00,000 · 12% p.a.</span>
        </div>
        <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-soft">
          <div className="h-full rounded-full bg-accent" style={{ width: "8%" }} />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[12px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-2 py-2 font-semibold">#</th>
              <th className="px-2 py-2 font-semibold">Period</th>
              <th className="px-2 py-2 text-right font-semibold">EMI</th>
              <th className="px-2 py-2 text-right font-semibold">Interest</th>
              <th className="px-2 py-2 text-right font-semibold">Principal</th>
              <th className="px-2 py-2 text-right font-semibold">Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-line">
                <td className="tnum px-2 py-1.5 text-muted">{r[0]}</td>
                <td className="whitespace-nowrap px-2 py-1.5 text-body">{r[1]}</td>
                <td className="tnum px-2 py-1.5 text-right text-ink">₹{r[2]}</td>
                <td className="tnum px-2 py-1.5 text-right text-muted">₹{r[3]}</td>
                <td className="tnum px-2 py-1.5 text-right text-ink">₹{r[4]}</td>
                <td className="tnum px-2 py-1.5 text-right text-ink">₹{r[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11px] text-muted">
        EMIs recovered automatically through monthly payroll.
      </p>
    </ProductFrame>
  );
}
