import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's expense approval queue with policy checks per claim.
// Lifted pieces: a partial sanction on an over-cap hotel claim, a payroll reimbursement and the
// approver / payer separation of duties.
const catTone: Record<string, string> = {
  Travel: "bg-blue-100 text-blue-700",
  Hotel: "bg-purple-100 text-purple-700",
  Meals: "bg-amber-100 text-amber-700",
};
const rows = [
  { who: "Rohan Nair", id: "EXP-0412", cat: "Travel", amt: "12,400", checks: "Clear" },
  { who: "Isha Desai", id: "EXP-0418", cat: "Hotel", amt: "18,000", checks: "Over cap" },
  { who: "Neel Mishra", id: "EXP-0421", cat: "Meals", amt: "2,150", checks: "Clear" },
  { who: "Arjun Reddy", id: "EXP-0423", cat: "Travel", amt: "6,800", checks: "Clear" },
  { who: "Meera Iyer", id: "EXP-0426", cat: "Meals", amt: "1,450", checks: "Late" },
];
const spend = [
  ["Travel", "₹2.9 L", 100],
  ["Hotel", "₹1.8 L", 62],
  ["Meals", "₹0.9 L", 31],
  ["Local conveyance", "₹0.6 L", 21],
] as const;

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 88 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Awaiting your approval" title="Hotel claim · Isha Desai" meta="EXP-0418 · Pune client visit · 3 nights" tag={<Tag tone="warning">Over cap</Tag>}>
        <Rows
          rows={[["Claimed", "₹18,000"], ["Cap · ₹5,000/night × 3", "₹15,000"], ["Receipts", "3 of 3 attached"]]}
          total={["Sanction", "₹15,000"]}
        />
        <p className="mt-2 text-[11px] text-slate-500">₹3,000 above cap not sanctioned · reason recorded</p>
        <Actions primary="Sanction ₹15,000" secondary="Return" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast glyph="₹" title="Claim reimbursed · Kavya Mehta" sub="₹8,640 · added to Oct 2026 payroll" />,
  },
  {
    width: 250,
    pos: { left: 250, top: 0 },
    node: <Chip badge="SoD" tone="info" title="Payer is never the approver" sub="Reimburse is a separate permission" />,
  },
];

export function ExpensesVisual() {
  return (
    <ProductFrame
      title="NeevHR · Expenses · Approval queue"
      floaters={floaters}
      actions={<><WinButton>Export</WinButton><WinButton primary>Reimburse</WinButton></>}
    >
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="Pending" value="₹3.4 L" sub="14 claims" />
        <StatTile label="Spend · Sep 2026" value="₹6.2 L" sub="within budget" tone="accent" />
        <StatTile label="Advances" value="₹2.1 L" sub="9 outstanding" />
      </Soft>

      <div className="mt-4 grid grid-cols-[1fr_224px] gap-4">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <table className="w-full text-left text-[12px]">
            <thead>
              <tr className="bg-surface-soft text-[10px] uppercase text-muted">
                <th className="px-2.5 py-2 font-semibold">Employee</th>
                <th className="px-2.5 py-2 font-semibold">Category</th>
                <th className="px-2.5 py-2 text-right font-semibold">Amount</th>
                <th className="px-2.5 py-2 font-semibold">Policy</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className={`border-t border-line ${r.checks === "Over cap" ? "bg-amber-50/60" : ""}`}>
                  <td className="px-2.5 py-2">
                    <p className="font-medium text-ink">{r.who}</p>
                    <p className="text-[10px] text-muted">{r.id}</p>
                  </td>
                  <td className="px-2.5 py-2">
                    <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${catTone[r.cat]}`}>{r.cat}</span>
                  </td>
                  <td className="tnum whitespace-nowrap px-2.5 py-2 text-right text-ink">₹{r.amt}</td>
                  <td className="px-2.5 py-2">
                    <span className={`text-[11px] font-semibold ${r.checks === "Clear" ? "text-success-dark" : "text-amber-600"}`}>
                      {r.checks}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">Spend by category</p>
          <p className="text-[10px] text-muted">Sep 2026 · ₹6.2 L</p>
          <div className="mt-3 space-y-2.5">
            {spend.map(([n, v, w]) => (
              <div key={n}>
                <div className="flex justify-between text-[11px]">
                  <span className="text-body">{n}</span>
                  <span className="tnum text-ink">{v}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-surface-soft">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${w}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
