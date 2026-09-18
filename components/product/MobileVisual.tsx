import { Icon } from "@/components/ui/Icon";

// Designed phone mockup of the NeevHR employee self-service app.
const tiles = [
  { label: "Attendance", value: "In · 09:32" },
  { label: "Leave", value: "14 left" },
  { label: "Payslip", value: "Sep 2026" },
  { label: "Approvals", value: "3 pending" },
];

export function MobileVisual() {
  return (
    <div className="relative mx-auto w-[260px]">
      <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-brand/10 blur-2xl" />
      <div className="relative rounded-[2.2rem] border-[6px] border-ink bg-ink p-2 shadow-[var(--shadow-float)]">
        <div className="overflow-hidden rounded-[1.7rem] bg-surface-soft">
          {/* app header */}
          <div className="bg-brand px-4 pb-5 pt-5 text-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white/80">
                Good morning
              </span>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-[11px] font-semibold">
                RS
              </span>
            </div>
            <p className="mt-1 text-lg font-bold">Rupal Sharma</p>
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-sm font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Punch in
            </button>
          </div>

          {/* tiles */}
          <div className="grid grid-cols-2 gap-2.5 p-3">
            {tiles.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-line bg-white p-3"
              >
                <p className="text-[11px] text-muted">{t.label}</p>
                <p className="tnum mt-0.5 text-sm font-semibold text-ink">
                  {t.value}
                </p>
              </div>
            ))}
          </div>

          {/* payslip row */}
          <div className="px-3 pb-4">
            <div className="flex items-center justify-between rounded-xl border border-line bg-white p-3">
              <div>
                <p className="text-[11px] text-muted">Latest payslip</p>
                <p className="tnum text-sm font-semibold text-ink">₹78,940</p>
              </div>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-tint text-accent-dark">
                <Icon name="arrow" className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
