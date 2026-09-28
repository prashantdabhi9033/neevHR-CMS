import { ProductFrame } from "./ProductFrame";
import { Icon } from "@/components/ui/Icon";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's travel request: request -> approval -> booking -> expense reconciliation,
// with the grade entitlement check on the form.
// Lifted pieces: an over-cap request approved with a reason, a booking confirmation and the
// pending-to-book count.
const flow = [
  { label: "Requested", done: true },
  { label: "Approved", done: true },
  { label: "Booked", done: true },
  { label: "Reconciled", done: true },
];
const queue = [
  ["Arjun Reddy", "Bengaluru → Delhi", "Over cap"],
  ["Karan Malhotra", "Bengaluru → Chennai", "Booked"],
  ["Sneha Kulkarni", "Bengaluru → Hyderabad", "Approved"],
  ["Rahul Verma", "Bengaluru → Pune", "Approved"],
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 88 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Awaiting your approval" title="Arjun Reddy · Bengaluru → Delhi" meta="Grade M3 · air · long-haul · 12 Oct to 14 Oct 2026" tag={<Tag tone="warning">Over cap</Tag>}>
        <Rows rows={[["Entitlement cap", "₹18,000"], ["Estimate", "₹21,400"]]} total={["Over cap by", "₹3,400"]} />
        <div className="mt-2.5 rounded-lg bg-amber-50 px-3 py-2 text-[11px] text-amber-800 ring-1 ring-amber-100">
          <span className="font-semibold">Reason:</span> client meeting confirmed 09 Oct 2026, late booking
        </div>
        <Actions primary="Approve with reason" secondary="Send back" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast title="Booking confirmed · Karan Malhotra" sub="Bengaluru → Chennai · 06 Oct 2026 · within cap" />,
  },
  {
    width: 250,
    pos: { left: 250, top: 0 },
    node: <Chip badge="6" tone="info" title="Pending to book" sub="Approved requests awaiting booking" />,
  },
];

export function TravelVisual() {
  return (
    <ProductFrame
      title="NeevHR · Travel · Mumbai client visit · Priya Menon"
      floaters={floaters}
      actions={<><WinButton>Entitlements</WinButton><WinButton primary>New request</WinButton></>}
    >
      <div className="grid grid-cols-[1fr_224px] gap-4">
        <div>
          <div className="rounded-xl border border-line bg-white p-4">
            <div className="flex items-baseline justify-between">
              <p className="text-sm font-semibold text-ink">Bengaluru → Mumbai</p>
              <span className="tnum text-[11px] text-muted">22 Sep to 24 Sep 2026</span>
            </div>
            <p className="text-[11px] text-muted">Grade M3 · air · long-haul · linked claim EXP-0409 · closed</p>
            <div className="mt-4 flex items-center justify-between">
              {flow.map((s, i) => (
                <div key={s.label} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center">
                    <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${s.done ? "bg-success text-white" : "bg-brand text-white ring-4 ring-brand/20"}`}>
                      {s.done ? <Icon name="check" className="h-4 w-4" /> : i + 1}
                    </span>
                    <span className={`mt-1 text-[11px] font-medium ${s.done ? "text-ink" : "text-brand"}`}>{s.label}</span>
                  </div>
                  {i < flow.length - 1 && <div className={`mx-1 h-0.5 flex-1 ${flow[i + 1].done ? "bg-success" : "bg-line"}`} />}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success-dark" />
            <p className="text-xs text-body">
              <span className="font-semibold text-ink">Within entitlement.</span> Grade M3 · air · long-haul: up to <span className="tnum">₹18,000</span>. Estimated <span className="tnum">₹14,200</span>.
            </p>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2 rounded-xl border border-line bg-white p-3 text-center">
            {[["Estimate", "₹14,200"], ["Claimed", "₹13,650"], ["Sanctioned", "₹13,650"], ["Variance", "−₹550"]].map(([l, v], i) => (
              <div key={l}>
                <p className={`tnum text-sm font-bold ${i === 3 ? "text-success-dark" : "text-ink"}`}>{v}</p>
                <p className="text-[10px] text-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">Travel requests</p>
          <p className="text-[10px] text-muted">Oct 2026</p>
          <div className="mt-3 space-y-2.5">
            {queue.map(([who, route, st]) => (
              <div key={who} className="flex items-start justify-between gap-2 text-[11px]">
                <div className="min-w-0">
                  <p className="font-medium text-ink">{who}</p>
                  <p className="text-[10px] text-muted">{route}</p>
                </div>
                <span className={`shrink-0 text-[10px] font-semibold ${st === "Over cap" ? "text-amber-600" : st === "Booked" ? "text-success-dark" : "text-muted"}`}>{st}</span>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
