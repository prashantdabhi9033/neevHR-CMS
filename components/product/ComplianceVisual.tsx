import { ProductFrame, StatTile } from "./ProductFrame";

// Mirrors the product's statutory compliance register: obligations with due
// dates, statute tags and filing status.
const statuteTone: Record<string, string> = {
  PF: "bg-blue-100 text-blue-700",
  ESI: "bg-slate-200 text-slate-700",
  PT: "bg-purple-100 text-purple-700",
  LWF: "bg-cyan-100 text-cyan-700",
  TDS: "bg-indigo-100 text-indigo-700",
};

const rows = [
  { due: "07 Oct", ob: "TDS challan · Sep", st: "TDS", amt: "9,84,200", status: "Due", tone: "text-amber-600" },
  { due: "15 Oct", ob: "PF ECR · Sep", st: "PF", amt: "12,46,900", status: "Due", tone: "text-amber-600" },
  { due: "15 Oct", ob: "ESI return · Sep", st: "ESI", amt: "3,18,400", status: "Due", tone: "text-amber-600" },
  { due: "21 Oct", ob: "PT return · Sep", st: "PT", amt: "40,000", status: "Upcoming", tone: "text-muted" },
  { due: "15 Sep", ob: "PF ECR · Aug", st: "PF", amt: "12,11,700", status: "Filed", tone: "text-accent-dark" },
];

export function ComplianceVisual() {
  return (
    <ProductFrame title="NeevHR · Compliance · FY 2026-27">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Due in 7 days" value="₹22.5 L" sub="3 filings" />
        <StatTile label="Filed this FY" value="46" sub="on time" tone="accent" />
        <StatTile label="Form 16" value="98%" sub="generated" />
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Due</th>
              <th className="px-3 py-2 font-semibold">Obligation</th>
              <th className="px-3 py-2 font-semibold">Statute</th>
              <th className="px-3 py-2 text-right font-semibold">Amount</th>
              <th className="px-3 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-line">
                <td className="tnum whitespace-nowrap px-3 py-2 text-ink">{r.due}</td>
                <td className="px-3 py-2 text-body">{r.ob}</td>
                <td className="px-3 py-2">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${statuteTone[r.st]}`}>
                    {r.st}
                  </span>
                </td>
                <td className="tnum whitespace-nowrap px-3 py-2 text-right text-ink">₹{r.amt}</td>
                <td className={`px-3 py-2 text-xs font-semibold ${r.tone}`}>{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProductFrame>
  );
}
