import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Avatar, Bar, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Designed project master: client, billable flag, budget in hours and rupees, lifecycle status. Rupee
// budgets are hours x bill rate (MER-PAY 2,000 h x ₹2,400 = ₹48.0 L). Lifted pieces: a project's budget
// burn with rates and members, a new member cleared to book time, and a lifecycle change.
const statusTone: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700",
  "On hold": "bg-amber-100 text-amber-700",
  Closed: "bg-slate-200 text-slate-600",
};
const rows: { code: string; name: string; client: string; billable: boolean; used: number; budget: number; inr: string; status: string }[] = [
  { code: "MER-PAY", name: "Meridian Pay", client: "Meridian Bank", billable: true, used: 1540, budget: 2000, inr: "₹48.0 L", status: "Active" },
  { code: "ATL-CRM", name: "Atlas CRM", client: "Atlas Retail", billable: true, used: 910, budget: 1500, inr: "₹36.0 L", status: "Active" },
  { code: "ORB-DAT", name: "Orbit Data", client: "Orbit Logistics", billable: true, used: 610, budget: 1000, inr: "₹19.5 L", status: "Active" },
  { code: "INT-OPS", name: "Internal ops", client: "Internal", billable: false, used: 3120, budget: 6000, inr: "-", status: "Active" },
  { code: "NOV-APP", name: "Nova App", client: "Internal", billable: false, used: 420, budget: 700, inr: "-", status: "On hold" },
  { code: "KES-MIG", name: "Kestrel Migration", client: "Kestrel Foods", billable: true, used: 1200, budget: 1200, inr: "₹26.4 L", status: "Closed" },
];
const fmt = (n: number) => n.toLocaleString("en-IN");

// Lifted pieces: the MER-PAY budget card, a member added, a lifecycle change.
const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 96 },
    mobile: true,
    node: (
      <FloatCard eyebrow="MER-PAY · Meridian Bank" title="Meridian Pay" meta="Billable · 9 members can book time" tag={<Tag tone="success">Active</Tag>}>
        <div className="space-y-2.5">
          <div>
            <div className="mb-1.5 flex justify-between text-[11.5px]">
              <span className="text-slate-500">Hours</span>
              <span className="tnum font-semibold text-ink">1,540 of 2,000 h · 77%</span>
            </div>
            <Bar pct={77} />
          </div>
          <div>
            <div className="mb-1.5 flex justify-between text-[11.5px]">
              <span className="text-slate-500">Budget</span>
              <span className="tnum font-semibold text-ink">₹36,96,000 of ₹48,00,000</span>
            </div>
            <Bar pct={77} tone="success" />
          </div>
        </div>
        <div className="mt-3">
          <Rows rows={[["Bill rate", "₹2,400 / h"], ["Cost rate", "₹1,150 / h"]]} />
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          {["RS", "KM", "AR"].map((i) => (
            <Avatar key={i} initials={i} size={26} />
          ))}
          <span className="text-[11.5px] text-slate-500">+6 members</span>
        </div>
        <Actions primary="Add member" secondary="Edit rates" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast title="Neha Kulkarni added" sub="Atlas CRM · books time from 28 Sep" />,
  },
  {
    width: 270,
    pos: { left: 262, top: 0 },
    node: <Chip badge="HOLD" tone="warning" title="NOV-APP put on hold" sub="Status change logged · 28 Sep" />,
  },
];

export function ProjectsVisual() {
  return (
    <ProductFrame
      title="NeevHR · Projects · 6 projects"
      floaters={floaters}
      actions={<><WinButton>Clients</WinButton><WinButton primary>New project</WinButton></>}
    >
      <div className="overflow-hidden rounded-xl border border-line bg-white">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-surface-soft text-[10px] uppercase text-muted">
              <th className="px-3 py-2 font-semibold">Project</th>
              <th className="px-3 py-2 font-semibold">Client</th>
              <th className="px-3 py-2 font-semibold">Type</th>
              <th className="px-3 py-2 font-semibold">Hours used</th>
              <th className="px-3 py-2 text-right font-semibold">Budget</th>
              <th className="px-3 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const pct = Math.round((r.used / r.budget) * 100);
              return (
                <tr key={r.code} className="border-t border-line">
                  <td className="px-3 py-2.5">
                    <p className="font-medium text-ink">{r.name}</p>
                    <p className="tnum text-[10.5px] text-muted">{r.code}</p>
                  </td>
                  <td className="px-3 py-2.5 text-body">{r.client}</td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${r.billable ? "bg-blue-100 text-blue-700" : "bg-slate-200 text-slate-600"}`}>
                      {r.billable ? "Billable" : "Internal"}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <p className="tnum text-[11.5px] text-ink">{fmt(r.used)} / {fmt(r.budget)} h</p>
                    <div className="mt-1 h-1.5 w-24 rounded-full bg-surface-soft">
                      <div className={`h-1.5 rounded-full ${pct >= 100 ? "bg-slate-400" : "bg-brand"}`} style={{ width: `${Math.min(100, pct)}%` }} />
                    </div>
                  </td>
                  <td className="tnum px-3 py-2.5 text-right text-ink">{r.inr}</td>
                  <td className="px-3 py-2.5">
                    <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${statusTone[r.status]}`}>{r.status}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Soft className="mt-2.5 text-[11px] text-muted">Membership decides who can book time; the billable flag drives utilisation reporting.</Soft>
    </ProductFrame>
  );
}
