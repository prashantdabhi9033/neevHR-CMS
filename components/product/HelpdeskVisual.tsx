import { ProductFrame, StatTile } from "./ProductFrame";

const rows = [
  { ref: "HD-4821", subj: "Payslip not visible", cat: "Payroll", sla: "2h 10m", breach: false, pri: "High" },
  { ref: "HD-4820", subj: "VPN access request", cat: "IT access", sla: "Overdue", breach: true, pri: "Normal" },
  { ref: "HD-4817", subj: "Leave balance query", cat: "Leave", sla: "6h 40m", breach: false, pri: "Normal" },
];

export function HelpdeskVisual() {
  return (
    <ProductFrame title="NeevHR · HR helpdesk · SLA board">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Open tickets" value="46" />
        <StatTile label="Breaching SLA" value="3" />
        <StatTile label="Resolved / week" value="128" tone="accent" />
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Ticket</th>
              <th className="px-3 py-2 font-semibold">Subject</th>
              <th className="px-3 py-2 font-semibold">SLA</th>
              <th className="px-3 py-2 font-semibold">Priority</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.ref} className="border-t border-line">
                <td className="tnum px-3 py-2 font-medium text-ink">{r.ref}</td>
                <td className="px-3 py-2 text-body">
                  {r.subj}
                  <span className="ml-1 rounded bg-surface-soft px-1 py-0.5 text-[9px] text-muted">{r.cat}</span>
                </td>
                <td className="px-3 py-2">
                  <span className={`tnum rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${r.breach ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>
                    {r.sla}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className={`text-[11px] font-semibold ${r.pri === "High" ? "text-red-600" : "text-muted"}`}>{r.pri}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11px] text-muted">Live SLA countdown with automatic escalation to the next tier.</p>
    </ProductFrame>
  );
}
