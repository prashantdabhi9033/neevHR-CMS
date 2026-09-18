import { ProductFrame } from "./ProductFrame";

const days = ["M", "T", "W", "T", "F"];
const rows = [
  { p: "Meridian Pay", h: [8, 8, 6, 8, 7], billable: true },
  { p: "Atlas CRM", h: [0, 0, 2, 0, 1], billable: true },
  { p: "Internal", h: [0, 0, 0, 0, 0.5], billable: false },
];
// donut billable 68 / non 32
const C = 2 * Math.PI * 26;
const billLen = 0.68 * C;

export function TimesheetsVisual() {
  return (
    <ProductFrame title="NeevHR · Timesheets · Week 38 · Rupal Sharma">
      <div className="grid gap-4 sm:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-line p-3">
          <div className="grid grid-cols-[1fr_repeat(5,22px)_28px] items-center gap-1 text-center text-[10px] font-semibold uppercase text-muted">
            <span className="text-left">Project</span>
            {days.map((d, i) => <span key={i}>{d}</span>)}
            <span>Tot</span>
          </div>
          {rows.map((r) => {
            const tot = r.h.reduce((a, b) => a + b, 0);
            return (
              <div key={r.p} className="grid grid-cols-[1fr_repeat(5,22px)_28px] items-center gap-1 border-t border-line py-1.5 text-center text-[11px]">
                <span className="flex items-center gap-1 truncate text-left text-body">
                  <span className={`h-1.5 w-1.5 rounded-full ${r.billable ? "bg-brand" : "bg-slate-300"}`} />
                  {r.p}
                </span>
                {r.h.map((h, i) => (
                  <span key={i} className={`tnum ${h ? "text-ink" : "text-slate-300"}`}>{h || "-"}</span>
                ))}
                <span className="tnum font-semibold text-ink">{tot}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl border border-line p-3">
          <svg viewBox="0 0 64 64" className="h-24 w-24 -rotate-90">
            <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-surface-soft)" strokeWidth="9" />
            <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-brand)" strokeWidth="9" strokeDasharray={`${billLen} ${C - billLen}`} />
          </svg>
          <p className="mt-1 text-sm font-bold text-ink">68% billable</p>
          <p className="text-[11px] text-muted">of 47.5 h</p>
        </div>
      </div>
      <p className="mt-2 text-[11px] text-muted">Submitted days lock; approved time flows to invoicing.</p>
    </ProductFrame>
  );
}
