import { ProductFrame } from "./ProductFrame";

const plans = [
  { key: "GMC", name: "Group medical", insurer: "Star Health", sum: "5 L", enrolled: 96 },
  { key: "GPA", name: "Personal accident", insurer: "ICICI Lombard", sum: "25 L", enrolled: 100 },
  { key: "GTL", name: "Group term life", insurer: "HDFC Life", sum: "50 L", enrolled: 94 },
];
const fbp = [
  ["Fuel & vehicle", "₹1,800/mo", "Exempt with proof"],
  ["LTA", "% of basic", "Exempt"],
  ["Meal card", "₹2,200/mo", "Taxable"],
];

export function BenefitsVisual() {
  return (
    <ProductFrame title="NeevHR · Benefits · Policy year 2026-27">
      <div className="grid gap-2.5 sm:grid-cols-3">
        {plans.map((p) => (
          <div key={p.key} className="rounded-xl border border-line p-3">
            <div className="flex items-center justify-between">
              <span className="rounded-md bg-brand-tint px-1.5 py-0.5 text-[10px] font-bold text-brand">{p.key}</span>
              <span className="tnum text-[11px] font-semibold text-ink">₹{p.sum}</span>
            </div>
            <p className="mt-1.5 text-[12px] font-semibold text-ink">{p.name}</p>
            <p className="text-[10px] text-muted">{p.insurer}</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-soft">
              <div className="h-full rounded-full bg-accent" style={{ width: `${p.enrolled}%` }} />
            </div>
            <p className="mt-1 text-[10px] text-muted">{p.enrolled}% enrolled</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-line p-3">
        <p className="text-xs font-semibold text-ink">Flexible benefits (FBP)</p>
        <div className="mt-2 space-y-1.5">
          {fbp.map(([n, cap, tax]) => (
            <div key={n} className="flex items-center justify-between text-[12px]">
              <span className="text-body">{n}</span>
              <span className="flex items-center gap-2">
                <span className="tnum text-muted">{cap}</span>
                <span className={`rounded-md px-1.5 py-0.5 text-[9px] font-semibold ${
                  tax === "Taxable" ? "bg-slate-200 text-slate-600" : tax.includes("proof") ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                }`}>{tax}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </ProductFrame>
  );
}
