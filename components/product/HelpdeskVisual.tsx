import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, FloatCard, Metric, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";

// Designed helpdesk mock: the live SLA queue, with open volume by category behind.
// Lifted pieces: an SLA-breached ticket auto-escalated up the L1/L2/L3 ladder, a ticket just resolved,
// and the weekly within-SLA rate (120 of 128 resolved on time).
const rows = [
  { ref: "HD-4821", subj: "Payslip not visible", cat: "Payroll", sla: "2h 10m", breach: false, pri: "High" },
  { ref: "HD-4820", subj: "VPN access request", cat: "IT access", sla: "Overdue", breach: true, pri: "Normal" },
  { ref: "HD-4819", subj: "Form 16 correction", cat: "Payroll", sla: "5h 05m", breach: false, pri: "Normal" },
  { ref: "HD-4817", subj: "Leave balance query", cat: "Leave", sla: "6h 40m", breach: false, pri: "Normal" },
  { ref: "HD-4814", subj: "Address proof letter", cat: "Documents", sla: "1d 2h", breach: false, pri: "Low" },
  { ref: "HD-4812", subj: "Laptop replacement", cat: "IT access", sla: "Overdue", breach: true, pri: "High" },
];

// Open tickets by category (sums to the 46 open).
const cats = [
  { name: "Payroll", n: 14 },
  { name: "IT access", n: 11 },
  { name: "Leave", n: 9 },
  { name: "Documents", n: 7 },
  { name: "Other", n: 5 },
];

const floaters: Floater[] = [
  {
    width: 310,
    pos: { right: 0, top: 140 },
    mobile: true,
    node: (
      <FloatCard eyebrow="SLA breached · auto-escalated" title="HD-4820 · VPN access request" meta="Raised by Pooja Iyer · IT access" tag={<Tag tone="error">+1h 25m</Tag>}>
        <Steps steps={["L1", "L2", "L3"]} at={1} />
        <div className="mt-3.5">
          <Rows
            rows={[
              ["First response", "Met · 18 min"],
              ["Resolution target", "8h"],
              ["Now with", "Suresh Nair · IT L2"],
            ]}
          />
        </div>
        <Actions primary="Reply" secondary="Reassign" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast title="Ticket resolved" sub="HD-4815 · closed in 1h 50m" />,
  },
  {
    width: 220,
    pos: { left: 270, top: 0 },
    node: <Metric label="Resolved within SLA" value="94%" delta="Last 7 days · 120 of 128" />,
  },
];

export function HelpdeskVisual() {
  return (
    <ProductFrame title="NeevHR · HR helpdesk · SLA board" floaters={floaters} actions={<><WinButton>Knowledge base</WinButton><WinButton primary>New ticket</WinButton></>}>
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="Open tickets" value="46" />
        <StatTile label="Breaching SLA" value="3" sub="escalated" />
        <StatTile label="Resolved / week" value="128" tone="accent" />
      </Soft>

      <div className="mt-4 grid grid-cols-[1.35fr_1fr] gap-4">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <table className="w-full text-left text-[12.5px]">
            <thead>
              <tr className="bg-surface-soft text-[10px] uppercase text-muted">
                <th className="px-3 py-2 font-semibold">Ticket</th>
                <th className="px-3 py-2 font-semibold">Subject</th>
                <th className="px-3 py-2 font-semibold">SLA</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.ref} className={`border-t border-line ${r.breach ? "bg-red-50/60" : ""}`}>
                  <td className="tnum px-3 py-2.5 font-medium text-ink">{r.ref}</td>
                  <td className="px-3 py-2.5">
                    <p className="text-body">{r.subj}</p>
                    <p className="mt-0.5 text-[10.5px] text-muted">
                      {r.cat} · <span className={r.pri === "High" ? "font-semibold text-red-600" : ""}>{r.pri}</span>
                    </p>
                  </td>
                  <td className="px-3 py-2.5">
                    <span className={`tnum whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${r.breach ? "bg-red-100 text-red-700" : "bg-emerald-100 text-emerald-700"}`}>
                      {r.sla}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Soft className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Open by category</p>
          <div className="mt-3 space-y-3">
            {cats.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-[12px]">
                  <span className="text-body">{c.name}</span>
                  <span className="tnum font-semibold text-ink">{c.n}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-surface-soft">
                  <div className="h-1.5 rounded-full bg-brand" style={{ width: `${(c.n / 14) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-muted">Escalation ladder: L1 · L2 · L3</p>
        </Soft>
      </div>
    </ProductFrame>
  );
}
