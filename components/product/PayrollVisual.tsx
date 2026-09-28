import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";

// Designed payslip mock. India statutory deductions, INR with Indian grouping.
const earnings = [
  ["Basic", "72,000"],
  ["HRA", "28,800"],
  ["Special allowance", "34,200"],
];
const deductions = [
  ["Provident Fund (PF)", "8,640"],
  ["Professional Tax (PT)", "200"],
  ["TDS", "9,500"],
];

// Lifted pieces: the run's maker-checker approval, the bank file and the TDS challan.
const floaters: Floater[] = [
  {
    width: 330,
    pos: { right: 0, top: 70 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Awaiting your approval" title="September 2026 run" meta="201 employees · pay date 30 Sep" tag={<Tag tone="warning">Approve</Tag>}>
        <Steps steps={["Compute", "Verify", "Approve", "Publish"]} at={2} />
        <div className="mt-3.5">
          <Rows rows={[["Gross earnings", "₹1,98,16,300"], ["Statutory deductions", "- ₹34,73,500"]]} total={["Net pay", "₹1,63,42,800"]} />
        </div>
        <Actions primary="Approve run" secondary="Variances" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 20 },
    look: "glass",
    node: <Toast title="Bank file generated" sub="HDFC · 201 NEFT transfers" />,
  },
  {
    width: 270,
    pos: { left: 250, top: 0 },
    node: <Chip badge="TDS" title="TDS challan ready" sub="Sep 2026 · due 07 Oct 2026" />,
  },
];

export function PayrollVisual() {
  return (
    <ProductFrame title="NeevHR · Payroll · September 2026" floaters={floaters} actions={<><WinButton>Export</WinButton><WinButton primary>Run payroll</WinButton></>}>
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="Employees paid" value="201" sub="0 on hold" tone="accent" />
        <StatTile label="Net disbursed" value="₹1.63 Cr" sub="NEFT ready" />
        <StatTile label="Statutory" value="₹34.7 L" sub="PF · ESI · PT · TDS" />
      </Soft>

      <div className="mt-4 rounded-xl border border-line">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <p className="text-sm font-semibold text-ink">
            Payslip · Ishita Gandhi
          </p>
          <span className="rounded-md bg-success-tint px-2 py-0.5 text-xs font-semibold text-success-dark">
            Finalised
          </span>
        </div>
        <div className="grid gap-x-6 gap-y-1 px-4 py-3 grid-cols-2">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
              Earnings
            </p>
            {earnings.map(([k, v]) => (
              <div key={k} className="flex justify-between py-1 text-sm">
                <span className="text-body">{k}</span>
                <span className="tnum text-ink">₹{v}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
              Deductions
            </p>
            {deductions.map(([k, v]) => (
              <div key={k} className="flex justify-between py-1 text-sm">
                <span className="text-body">{k}</span>
                <span className="tnum text-ink">₹{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-line bg-surface-soft px-4 py-2.5">
          <span className="text-sm font-semibold text-ink">Net pay</span>
          <span className="tnum text-base font-bold text-brand">₹1,16,660</span>
        </div>
      </div>
    </ProductFrame>
  );
}
