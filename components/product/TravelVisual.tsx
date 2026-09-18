import { ProductFrame } from "./ProductFrame";
import { Icon } from "@/components/ui/Icon";

const flow = [
  { label: "Requested", done: true },
  { label: "Approved", done: true },
  { label: "Booked", done: false },
];

export function TravelVisual() {
  return (
    <ProductFrame title="NeevHR · Travel · Mumbai client visit">
      <div className="flex items-center justify-between rounded-xl border border-line p-4">
        {flow.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${s.done ? "bg-accent text-white" : "bg-surface-soft text-muted"}`}>
                {s.done ? <Icon name="check" className="h-4 w-4" /> : i + 1}
              </span>
              <span className={`mt-1 text-[11px] font-medium ${s.done ? "text-ink" : "text-muted"}`}>{s.label}</span>
            </div>
            {i < flow.length - 1 && <div className={`mx-1 h-0.5 flex-1 ${flow[i + 1].done ? "bg-accent" : "bg-line"}`} />}
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
        <p className="text-xs text-body">
          <span className="font-semibold text-ink">Within entitlement.</span> Grade M3 · air · long-haul: up to <span className="tnum">₹18,000</span>. Estimated <span className="tnum">₹14,200</span>.
        </p>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 rounded-xl border border-line p-3 text-center">
        {[["Estimate", "₹14,200"], ["Claimed", "₹13,650"], ["Variance", "−₹550"]].map(([l, v], i) => (
          <div key={l}>
            <p className={`tnum text-sm font-bold ${i === 2 ? "text-accent-dark" : "text-ink"}`}>{v}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}
