import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Bar, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Designed weekly timesheet: hours per project per day (40 h, 31 h billable = 78%), submitted days locked.
// Lifted pieces: the manager's approve-or-send-back decision, and the overdue reminder ahead of the lock.
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const rows = [
  { p: "Meridian Pay", h: [6, 6, 5, 6, 4], billable: true },
  { p: "Atlas CRM", h: [1, 1, 1, 0, 1], billable: true },
  { p: "Internal ops", h: [1, 1, 2, 2, 3], billable: false },
];
const dayTotals = days.map((_, i) => rows.reduce((a, r) => a + r.h[i], 0));
const total = dayTotals.reduce((a, b) => a + b, 0); // 40
const billable = rows.filter((r) => r.billable).reduce((a, r) => a + r.h.reduce((x, y) => x + y, 0), 0); // 31
const billPct = Math.round((billable / total) * 100); // 78
const C = 2 * Math.PI * 26;
const billLen = (billable / total) * C;

const history = [
  ["Week of 14 Sep 2026", "40 h", "Approved"],
  ["Week of 07 Sep 2026", "38.5 h", "Approved"],
  ["Week of 31 Aug 2026", "40 h", "Approved"],
];
const COLS = "grid-cols-[1fr_repeat(5,40px)_40px]";

// Lifted pieces: the approval and the overdue reminder.
const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 96 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Timesheet · awaiting you" title="Rupal Sharma · 40 h" meta="Week of 21 Sep 2026 · submitted 25 Sep" tag={<Tag tone="warning">Pending</Tag>}>
        <Rows rows={[["Meridian Pay", "27 h"], ["Atlas CRM", "4 h"], ["Internal ops", "9 h"]]} total={["Total", "40 h"]} />
        <div className="mt-3">
          <div className="mb-1.5 flex justify-between text-[11.5px]">
            <span className="text-slate-500">Billable</span>
            <span className="tnum font-semibold text-ink">{billable} h · {billPct}%</span>
          </div>
          <Bar pct={billPct} />
        </div>
        <Actions primary="Approve" secondary="Send back" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="warning" glyph="!" title="Reminder sent · 6 overdue" sub="Week of 21 Sep locks on 30 Sep 2026" />,
  },
];

export function TimesheetsVisual() {
  return (
    <ProductFrame
      title="NeevHR · Timesheets · Rupal Sharma · Week of 21 Sep 2026"
      floaters={floaters}
      actions={<><WinButton>Reminders</WinButton><WinButton primary>Team approvals</WinButton></>}
    >
      <div className="grid grid-cols-[1fr_216px] gap-4">
        <div className="rounded-xl border border-line bg-white p-3">
          <div className={`grid ${COLS} items-center gap-1 text-center text-[10px] font-semibold uppercase text-muted`}>
            <span className="text-left">Project</span>
            {days.map((d, i) => (
              <span key={d}>
                {d} <span className="tnum">{21 + i}</span>
              </span>
            ))}
            <span>Tot</span>
          </div>
          {rows.map((r) => (
            <div key={r.p} className={`grid ${COLS} items-center gap-1 border-t border-line py-2 text-center text-[12px]`}>
              <span className="flex items-center gap-1.5 truncate text-left text-body">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${r.billable ? "bg-brand" : "bg-slate-300"}`} />
                {r.p}
              </span>
              {r.h.map((h, i) => (
                <span key={i} className={`tnum ${h ? "text-ink" : "text-slate-300"}`}>{h || "-"}</span>
              ))}
              <span className="tnum font-semibold text-ink">{r.h.reduce((a, b) => a + b, 0)}</span>
            </div>
          ))}
          <div className={`grid ${COLS} items-center gap-1 border-t border-line pt-2 text-center text-[12px]`}>
            <span className="text-left font-semibold text-ink">Day total</span>
            {dayTotals.map((t, i) => (
              <span key={i} className="tnum font-semibold text-ink">{t}</span>
            ))}
            <span className="tnum font-bold text-brand">{total}</span>
          </div>
          <p className="mt-2.5 flex items-center gap-1.5 text-[11px] text-muted">
            <span className="h-2 w-2 rounded-sm bg-slate-300" /> Submitted 25 Sep 2026 · days locked
          </p>
        </div>

        <Soft strong className="flex flex-col items-center justify-center rounded-xl border border-line bg-white p-3">
          <svg viewBox="0 0 64 64" className="h-24 w-24 -rotate-90">
            <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-surface-soft)" strokeWidth="9" />
            <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-brand)" strokeWidth="9" strokeDasharray={`${billLen} ${C - billLen}`} />
          </svg>
          <p className="mt-1 text-sm font-bold text-ink">{billPct}% billable</p>
          <p className="tnum text-[11px] text-muted">{billable} of {total} h</p>
        </Soft>
      </div>

      <Soft className="mt-4 rounded-xl border border-line bg-white">
        <p className="border-b border-line px-4 py-2.5 text-sm font-semibold text-ink">Earlier weeks</p>
        {history.map(([wk, hrs, st]) => (
          <div key={wk} className="flex items-center justify-between px-4 py-2 text-[12px]">
            <span className="text-body">{wk}</span>
            <span className="flex items-center gap-3">
              <span className="tnum text-ink">{hrs}</span>
              <span className="rounded-md bg-success-tint px-2 py-0.5 text-[10.5px] font-semibold text-success-dark">{st}</span>
            </span>
          </div>
        ))}
      </Soft>
    </ProductFrame>
  );
}
