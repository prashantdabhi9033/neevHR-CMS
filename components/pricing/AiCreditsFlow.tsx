"use client";

import { Icon } from "@/components/ui/Icon";
import { useOnScreenSteps } from "@/components/visuals/useOnScreenSteps";

// A sample of how AI credits move. The figures are illustrative, not a rate card. Every row is always laid out and only
// its emphasis changes, so nothing jumps while it plays.
const rows = [
  { title: "Your company recharges", sub: "Paid once, online, by your AI admin", change: "+ ₹500.00", balance: "₹500.00" },
  { title: "A receipt is read", sub: "Charged at what this answer used", change: "- ₹0.30", balance: "₹499.70" },
  { title: "Someone opens the same receipt", sub: "Stored result, no new call", change: "₹0.00", balance: "₹499.70" },
  { title: "An employee asks the assistant", sub: "Employees never see a price", change: "- ₹0.14", balance: "₹499.56" },
];

export function AiCreditsFlow() {
  const { ref, step } = useOnScreenSteps<HTMLDivElement>(rows.length);
  return (
    <div ref={ref} className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
      <p className="sr-only">
        A sample credit statement. A company recharges ₹500. Reading a receipt uses a small amount, opening the same receipt again costs nothing, and an employee question uses a small amount.
      </p>
      <div aria-hidden="true">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">AI credit balance</p>
            <p className="tnum mt-1 text-3xl font-bold text-ink">{rows[step].balance}</p>
          </div>
          <span className="rounded-full bg-surface-soft px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-line">Sample figures</span>
        </div>
        <ul className="mt-5 space-y-2">
          {rows.map((r, i) => {
            const now = i === step;
            const done = i <= step;
            return (
              <li
                key={r.title}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ring-1 transition-colors duration-300 ${now ? "bg-brand-tint ring-brand/25" : "bg-white ring-line"} ${done ? "opacity-100" : "opacity-45"}`}
              >
                <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full transition-colors duration-300 ${done ? "bg-accent-tint text-accent-dark" : "bg-surface-soft text-muted"}`}>
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium text-ink">{r.title}</span>
                  <span className="block truncate text-xs text-muted">{r.sub}</span>
                </span>
                <span className="tnum shrink-0 text-sm font-semibold text-ink">{r.change}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
