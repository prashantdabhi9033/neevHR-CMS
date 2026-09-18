import { ProductFrame } from "./ProductFrame";

const statusTone: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  "On hold": "bg-amber-100 text-amber-700",
  Closed: "bg-slate-200 text-slate-600",
};
const rows = [
  ["MER-PAY", "Meridian Pay", "Meridian Bank", true, "48.0", "Active"],
  ["ATL-CRM", "Atlas CRM", "Atlas Retail", true, "36.0", "Active"],
  ["NOV-APP", "Nova App", "Internal", false, "28.0", "On hold"],
  ["ORB-DAT", "Orbit Data", "Orbit Logistics", true, "19.5", "Active"],
];

export function ProjectsVisual() {
  return (
    <ProductFrame title="NeevHR · Projects">
      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Code</th>
              <th className="px-3 py-2 font-semibold">Client</th>
              <th className="px-3 py-2 font-semibold">Billable</th>
              <th className="px-3 py-2 text-right font-semibold">Budget</th>
              <th className="px-3 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0] as string} className="border-t border-line">
                <td className="tnum px-3 py-2 font-medium text-ink">{r[0]}</td>
                <td className="px-3 py-2 text-body">{r[2]}</td>
                <td className="px-3 py-2">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${r[3] ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-600"}`}>
                    {r[3] ? "Billable" : "Internal"}
                  </span>
                </td>
                <td className="tnum px-3 py-2 text-right text-ink">₹{r[4]}L</td>
                <td className="px-3 py-2">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${statusTone[r[5] as string]}`}>{r[5]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11px] text-muted">Bill and cost rates drive billable utilisation and client invoicing.</p>
    </ProductFrame>
  );
}
