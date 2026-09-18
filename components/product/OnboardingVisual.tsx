import { ProductFrame } from "./ProductFrame";
import { Icon } from "@/components/ui/Icon";

// Designed onboarding mock: a new joiner with a task checklist.
const tasks = [
  { label: "Offer accepted", done: true },
  { label: "Documents collected & verified", done: true },
  { label: "Statutory & bank details", done: true },
  { label: "Asset issued · Laptop (DELL-4471)", done: false },
  { label: "Buddy assigned · Rupal Sharma", done: false },
];

export function OnboardingVisual() {
  const done = tasks.filter((t) => t.done).length;
  const pct = Math.round((done / tasks.length) * 100);
  return (
    <ProductFrame title="NeevHR · Onboarding · Day 1">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-semibold text-white">
          KT
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-ink">Khushi Trivedi</p>
          <p className="text-xs text-muted">
            Executive · Sales · Joining 22 Sep 2026
          </p>
        </div>
        <span className="tnum rounded-lg bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand">
          {pct}% ready
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-soft">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${pct}%` }}
        />
      </div>

      <ul className="mt-4 space-y-2">
        {tasks.map((t) => (
          <li
            key={t.label}
            className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5"
          >
            <span
              className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                t.done ? "bg-accent text-white" : "bg-surface-soft text-muted"
              }`}
            >
              {t.done ? (
                <Icon name="check" className="h-3.5 w-3.5" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-muted" />
              )}
            </span>
            <span
              className={`text-sm ${
                t.done ? "text-body" : "font-medium text-ink"
              }`}
            >
              {t.label}
            </span>
          </li>
        ))}
      </ul>
    </ProductFrame>
  );
}
