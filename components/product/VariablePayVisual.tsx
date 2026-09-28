import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, FloatCard, Metric, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's variable-pay inputs for a payroll month (additions and recoveries, each
// approved before it reaches payroll) beside the statutory bonus plan.
// Lifted pieces: an incentive moving through its approval chain, a bulk commission batch and the
// Payment of Bonus Act disbursement.
const rows = [
  { who: "Kavya Mehta", comp: "Q3 incentive", type: "add", amt: "24,000", status: "HR review" },
  { who: "Rohan Nair", comp: "Sales commission", type: "add", amt: "18,500", status: "Approved" },
  { who: "Arjun Reddy", comp: "Referral bonus", type: "add", amt: "15,000", status: "Approved" },
  { who: "Neel Mishra", comp: "Notice recovery", type: "ded", amt: "12,000", status: "Approved" },
  { who: "Meera Iyer", comp: "Canteen recovery", type: "ded", amt: "1,850", status: "Approved" },
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 92 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Awaiting your approval" title="Q3 incentive · Kavya Mehta" meta="Raised by Anil Kapoor · Oct 2026 payroll" tag={<Tag tone="warning">HR review</Tag>}>
        <Steps steps={["Raised", "Manager", "HR", "Payroll"]} at={2} />
        <div className="mt-3.5">
          <Rows rows={[["Ring-fence", "₹5,000 to ₹50,000"], ["Frequency", "Quarterly"]]} total={["Addition", "+₹24,000"]} />
        </div>
        <Actions primary="Approve" secondary="Send back" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast title="Commission batch approved" sub="24 employees · ₹3,86,400 · Oct 2026 payroll" />,
  },
  {
    width: 240,
    pos: { right: 330, top: 0 },
    node: <Metric label="Statutory bonus · FY 2025-26" value="₹2.64 L" delta="38 eligible · 8.33% · Forms A to D" tone="brand" />,
  },
];

export function VariablePayVisual() {
  return (
    <ProductFrame
      title="NeevHR · Variable pay · October 2026 inputs"
      floaters={floaters}
      actions={<><WinButton>Bulk upload</WinButton><WinButton primary>Add input</WinButton></>}
    >
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="Inputs · Oct 2026" value="46" sub="8 awaiting approval" />
        <StatTile label="Additions" value="₹6.8 L" sub="incentive · commission" tone="accent" />
        <StatTile label="Recoveries" value="₹0.9 L" sub="notice · canteen · fines" />
      </Soft>

      <div className="mt-4 grid grid-cols-[1fr_224px] gap-4">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <table className="w-full text-left text-[12px]">
            <thead>
              <tr className="bg-surface-soft text-[10px] uppercase text-muted">
                <th className="px-2.5 py-2 font-semibold">Employee</th>
                <th className="px-2.5 py-2 font-semibold">Component</th>
                <th className="px-2.5 py-2 text-right font-semibold">Amount</th>
                <th className="px-2.5 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.who} className="border-t border-line">
                  <td className="whitespace-nowrap px-2.5 py-2 font-medium text-ink">{r.who}</td>
                  <td className="px-2.5 py-2">
                    <span className={`whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${r.type === "add" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                      {r.comp}
                    </span>
                  </td>
                  <td className={`tnum whitespace-nowrap px-2.5 py-2 text-right font-semibold ${r.type === "add" ? "text-success-dark" : "text-red-600"}`}>
                    {r.type === "add" ? "+" : "−"}₹{r.amt}
                  </td>
                  <td className={`whitespace-nowrap px-2.5 py-2 text-[11px] font-semibold ${r.status === "Approved" ? "text-success-dark" : "text-amber-600"}`}>
                    {r.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">Statutory bonus plan</p>
          <p className="text-[10px] text-muted">FY 2025-26 · Payment of Bonus Act, 1965</p>
          <div className="mt-3 space-y-2 text-[11px]">
            {[["Eligible", "38"], ["Rate", "8.33%"], ["Payable", "₹2.64 L"], ["Registers", "Forms A to D"]].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-muted">{k}</span>
                <span className="tnum font-semibold text-ink">{v}</span>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
