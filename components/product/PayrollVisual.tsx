import { ProductFrame, StatTile } from "./ProductFrame";

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

export function PayrollVisual() {
  return (
    <ProductFrame title="NeevHR · Payroll · September 2026">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Employees paid" value="201" sub="0 on hold" tone="accent" />
        <StatTile label="Net disbursed" value="₹1.63 Cr" sub="NEFT ready" />
        <StatTile label="Statutory" value="₹34.7 L" sub="PF · ESI · PT · TDS" />
      </div>

      <div className="mt-4 rounded-xl border border-line">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <p className="text-sm font-semibold text-ink">
            Payslip · Ishita Gandhi
          </p>
          <span className="rounded-md bg-accent-tint px-2 py-0.5 text-xs font-semibold text-accent-dark">
            Finalised
          </span>
        </div>
        <div className="grid gap-x-6 gap-y-1 px-4 py-3 sm:grid-cols-2">
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
