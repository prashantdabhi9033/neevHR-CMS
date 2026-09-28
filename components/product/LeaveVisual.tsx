import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Designed leave mock: an employee's live balances and casual-leave ledger, beside the manager's pending
// requests. Lifted pieces: a request where the sandwich rule counts the enclosed week-off, and a comp-off
// credited for weekend work.
const balances = [
  { name: "Casual leave", used: 4, total: 12, color: "var(--color-brand)" },
  { name: "Sick leave", used: 2, total: 8, color: "var(--color-success)" },
  { name: "Earned leave", used: 6, total: 18, color: "#f59e0b" },
];

// Casual leave ledger: 12 credited, 4 consumed, 8 left (matches the balance above).
const ledger = [
  ["01 Apr 2026", "Annual credit", "+12", "12"],
  ["22 May 2026", "Consumed · 21-22 May", "-2", "10"],
  ["11 Aug 2026", "Consumed · 10-11 Aug", "-2", "8"],
];

// 20 Oct 2026 is Dussehra on the holiday calendar, so Isha's Mon-Fri counts 4 days.
const pending = [
  ["RN", "Rohan Nair", "Casual · 09-12 Oct 2026", "4 days"],
  ["KM", "Kavya Mehta", "Sick · 28 Sep 2026", "1 day"],
  ["ID", "Isha Desai", "Earned · 19-23 Oct 2026", "4 days"],
  ["DR", "Deepak Rao", "Comp-off · 05 Oct 2026", "1 day"],
];

// Lifted pieces: the sandwich-rule approval and a comp-off credit.
const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 92 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Leave request · awaiting you" title="Rohan Nair" meta="Casual leave · applied 28 Sep 2026" tag={<Tag tone="warning">Sandwich rule</Tag>}>
        <Rows rows={[["Applied days", "Fri 09, Mon 12 Oct"], ["Sandwiched week-off", "Sat 10, Sun 11"]]} total={["Days debited", "4"]} />
        <div className="mt-3 flex items-center justify-between text-[12px]">
          <span className="text-slate-500">Casual leave balance</span>
          <span className="tnum font-semibold text-ink">8 → 4</span>
        </div>
        <Actions primary="Approve" secondary="Reject" />
      </FloatCard>
    ),
  },
  {
    width: 284,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="brand" glyph="+1" title="Comp-off credited · 1 day" sub="Deepak Rao · worked Sun 27 Sep" />,
  },
];

export function LeaveVisual() {
  return (
    <ProductFrame
      title="NeevHR · Leave · FY 2026-27"
      floaters={floaters}
      actions={<><WinButton>Ledger</WinButton><WinButton primary>Apply leave</WinButton></>}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">Rohan Nair · balances</p>
          {balances.map((b) => {
            const pct = Math.round((b.used / b.total) * 100);
            return (
              <div key={b.name} className="rounded-xl border border-line bg-white p-4">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-ink">{b.name}</p>
                  <p className="tnum text-sm text-body">
                    <span className="font-semibold text-ink">{b.total - b.used}</span> of {b.total} left
                  </p>
                </div>
                <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-surface-soft">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: b.color }} />
                </div>
              </div>
            );
          })}
        </div>

        <Soft className="space-y-3">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">Pending with you · 4</p>
          <div className="divide-y divide-line rounded-xl border border-line bg-white">
            {pending.map(([ini, name, what, days]) => (
              <div key={ini} className="flex items-center gap-3 px-4 py-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-tint text-[11px] font-semibold text-brand">{ini}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-ink">{name}</p>
                  <p className="truncate text-[11px] text-muted">{what}</p>
                </div>
                <span className="tnum text-[11px] font-semibold text-body">{days}</span>
              </div>
            ))}
          </div>
        </Soft>
      </div>

      <div className="mt-4 rounded-xl border border-line bg-white">
        <p className="border-b border-line px-4 py-2.5 text-sm font-semibold text-ink">Ledger · Casual leave</p>
        {ledger.map(([date, what, delta, bal]) => (
          <div key={date} className="grid grid-cols-[110px_1fr_60px_60px] items-center gap-2 px-4 py-2 text-[12px]">
            <span className="tnum text-muted">{date}</span>
            <span className="text-body">{what}</span>
            <span className={`tnum text-right font-semibold ${delta.startsWith("+") ? "text-success-dark" : "text-ink"}`}>{delta}</span>
            <span className="tnum text-right text-muted">{bal}</span>
          </div>
        ))}
      </div>
    </ProductFrame>
  );
}
