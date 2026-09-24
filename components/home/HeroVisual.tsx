// Stylised product illustration (not a screenshot): a branded dashboard panel
// that signals what NeevHR does without misrepresenting the live UI.
const bars = [42, 58, 51, 67, 60, 74, 69];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-float)]">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-line bg-surface-soft px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 text-xs font-medium text-muted">
            NeevHR · HR Dashboard
          </span>
          <span className="ml-auto rounded-full border border-line bg-white px-2 py-0.5 text-[10px] font-medium text-muted">
            Illustrative data
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2">
          {/* stat tiles */}
          <div className="rounded-xl border border-line bg-white p-4">
            <p className="text-xs text-muted">Active headcount</p>
            <p className="tnum mt-1 text-2xl font-bold text-ink">2,847</p>
            <p className="mt-1 text-xs font-medium text-accent-dark">
              +32 this month
            </p>
          </div>
          <div className="rounded-xl border border-line bg-white p-4">
            <p className="text-xs text-muted">September payroll</p>
            <p className="tnum mt-1 text-2xl font-bold text-ink">₹4,12,67,900</p>
            <p className="mt-1 text-xs font-medium text-muted">
              PF · ESI · PT · TDS reconciled
            </p>
          </div>

          {/* mini bar chart */}
          <div className="rounded-xl border border-line bg-white p-4 sm:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-ink">Attendance this week</p>
              <p className="text-xs text-muted">94.6% present</p>
            </div>
            <div className="mt-4 flex h-24 items-end gap-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{
                    height: `${h}%`,
                    background:
                      i === bars.length - 1
                        ? "var(--color-accent)"
                        : "var(--color-brand)",
                    opacity: i === bars.length - 1 ? 1 : 0.28 + i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* approval row */}
          <div className="flex items-center justify-between rounded-xl border border-line bg-white p-4 sm:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-tint text-sm font-semibold text-brand">
                AK
              </span>
              <div>
                <p className="text-sm font-medium text-ink">Leave approval</p>
                <p className="text-xs text-muted">Ananya Kulkarni · 2 days</p>
              </div>
            </div>
            <span className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white">
              Approve
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
