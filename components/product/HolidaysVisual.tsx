import { ProductFrame } from "./ProductFrame";

const typeTone: Record<string, string> = {
  Public: "bg-red-100 text-red-700",
  Optional: "bg-amber-100 text-amber-700",
  Restricted: "bg-blue-100 text-blue-700",
};
const rows = [
  ["02 Oct", "Thu", "Gandhi Jayanti", "Public", "All"],
  ["20 Oct", "Mon", "Diwali", "Public", "All"],
  ["05 Nov", "Wed", "Kannada Rajyotsava", "Optional", "Bengaluru"],
  ["25 Dec", "Thu", "Christmas", "Public", "All"],
];

export function HolidaysVisual() {
  return (
    <ProductFrame title="NeevHR · Holiday calendar · 2026">
      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Date</th>
              <th className="px-3 py-2 font-semibold">Day</th>
              <th className="px-3 py-2 font-semibold">Holiday</th>
              <th className="px-3 py-2 font-semibold">Type</th>
              <th className="px-3 py-2 font-semibold">Location</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[2]} className="border-t border-line">
                <td className="tnum whitespace-nowrap px-3 py-2 font-semibold text-ink">{r[0]}</td>
                <td className="px-3 py-2 text-muted">{r[1]}</td>
                <td className="px-3 py-2 text-body">{r[2]}</td>
                <td className="px-3 py-2">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${typeTone[r[3]]}`}>{r[3]}</span>
                </td>
                <td className="px-3 py-2">
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${r[4] === "All" ? "bg-purple-100 text-purple-700" : "bg-surface-soft text-body"}`}>
                    {r[4]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-body">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-red-400" /> Public</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-amber-400" /> Optional</span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-blue-400" /> Restricted (RH)</span>
      </div>
    </ProductFrame>
  );
}
