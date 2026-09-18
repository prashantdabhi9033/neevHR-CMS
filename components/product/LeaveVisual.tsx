import { ProductFrame } from "./ProductFrame";
import { Icon } from "@/components/ui/Icon";

// Designed leave mock: balances with usage + a pending approval.
const balances = [
  { name: "Casual leave", used: 4, total: 12, color: "var(--color-brand)" },
  { name: "Sick leave", used: 2, total: 8, color: "var(--color-accent)" },
  { name: "Earned leave", used: 6, total: 18, color: "#f59e0b" },
];

export function LeaveVisual() {
  return (
    <ProductFrame title="NeevHR · Leave · FY 2026-27">
      <div className="space-y-3">
        {balances.map((b) => {
          const pct = Math.round((b.used / b.total) * 100);
          return (
            <div key={b.name} className="rounded-xl border border-line p-4">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-ink">{b.name}</p>
                <p className="tnum text-sm text-body">
                  <span className="font-semibold text-ink">
                    {b.total - b.used}
                  </span>{" "}
                  of {b.total} left
                </p>
              </div>
              <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-surface-soft">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: b.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-surface-soft p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-tint text-sm font-semibold text-brand">
            RN
          </span>
          <div>
            <p className="text-sm font-medium text-ink">
              Rohan Nair · Casual leave
            </p>
            <p className="text-xs text-muted">24-25 Sep 2026 · 2 days</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white">
          <Icon name="check" className="h-3.5 w-3.5" />
          Approve
        </span>
      </div>
    </ProductFrame>
  );
}
