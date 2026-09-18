import { ProductFrame } from "./ProductFrame";

// Mirrors the product's full & final settlement worksheet.
const earnings = [
  ["Salary till LWD", "58,400"],
  ["Leave encashment", "42,300"],
  ["Gratuity", "1,24,000"],
];
const recoveries = [
  ["Notice shortfall", "22,000"],
  ["Loan balance", "18,500"],
  ["TDS", "9,700"],
];

export function ExitVisual() {
  return (
    <ProductFrame title="NeevHR · Exit · Full & final settlement">
      <div className="rounded-xl border border-line">
        <div className="grid gap-x-6 px-4 py-3 sm:grid-cols-2">
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
              Recoveries
            </p>
            {recoveries.map(([k, v]) => (
              <div key={k} className="flex justify-between py-1 text-sm">
                <span className="text-body">{k}</span>
                <span className="tnum text-ink">₹{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-line bg-surface-soft px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink">Net settlement</span>
            <span className="tnum text-base font-bold text-brand">₹1,74,500</span>
          </div>
          <p className="mt-0.5 text-[11px] italic text-muted">
            Rupees one lakh seventy four thousand five hundred only
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Gratuity s.10(10)", "Leave encashment s.10(10AA)", "Clearance tracker", "TDS → Form 16"].map(
          (t) => (
            <span key={t} className="rounded-lg bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-body">
              {t}
            </span>
          )
        )}
      </div>
    </ProductFrame>
  );
}
