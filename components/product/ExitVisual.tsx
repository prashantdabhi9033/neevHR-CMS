import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's full & final settlement worksheet. Lifted pieces: final F&F sign-off (settled
// by a different approver), the last clearance landing and the gratuity 15/26 working.
// Case: Vikram Shah, basic ₹41,600, gross ₹87,600 (₹2,920 a day), 5 yrs 4 mths service, resigned
// 29 Aug 2026 on 60 days' notice (due 28 Oct), released 20 Oct 2026, so 8 days short.
const earnings = [
  ["Salary till LWD (20 days)", "58,400"],
  ["Leave encashment (18 days)", "28,800"],
  ["Gratuity (5 yrs)", "1,20,000"],
];
const recoveries = [
  ["Notice shortfall (8 days)", "23,360"],
  ["Loan balance", "18,500"],
  ["TDS", "9,700"],
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 80 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Awaiting final sign-off" title="F&F · Vikram Shah" meta="LWD 20 Oct 2026 · October F&F run" tag={<Tag tone="success">Cleared</Tag>}>
        <Steps steps={["Resigned", "Clearance", "Sign-off", "Settle"]} at={2} />
        <div className="mt-3.5">
          <Rows rows={[["Clearances", "4 of 4 done"], ["Assets still assigned", "None"]]} total={["Net settlement", "₹1,55,640"]} />
        </div>
        <p className="mt-3 text-[11.5px] text-slate-500">Settlement is posted by a different approver.</p>
        <Actions primary="Sign off F&F" secondary="Send back" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast title="IT clearance complete" sub="Laptop DELL-3310 returned · 4 of 4 cleared" />,
  },
  {
    width: 250,
    pos: { left: 260, top: 0 },
    node: <Chip badge="15/26" title="Gratuity ₹1,20,000" sub="₹41,600 × 15/26 × 5 yrs" />,
  },
];

function Section({ title, items, total }: { title: string; items: string[][]; total: string }) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">{title}</p>
      {items.map(([k, v]) => (
        <div key={k} className="flex justify-between py-1 text-sm">
          <span className="text-body">{k}</span>
          <span className="tnum text-ink">₹{v}</span>
        </div>
      ))}
      <div className="mt-1 flex justify-between border-t border-dashed border-line pt-1.5 text-sm font-semibold">
        <span className="text-ink">Total</span>
        <span className="tnum text-ink">₹{total}</span>
      </div>
    </div>
  );
}

export function ExitVisual() {
  return (
    <ProductFrame
      title="NeevHR · Exit · Full & final settlement"
      floaters={floaters}
      actions={<><WinButton>Clearances</WinButton><WinButton primary>Settle F&F</WinButton></>}
    >
      <div className="grid grid-cols-[410px_1fr] gap-6">
        <div className="rounded-xl border border-line bg-white">
          <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
            <p className="text-sm font-semibold text-ink">F&F worksheet · Vikram Shah</p>
            <span className="rounded-md bg-brand-tint px-2 py-0.5 text-xs font-semibold text-brand">Computed</span>
          </div>
          <div className="space-y-3 px-4 py-3">
            <Section title="Earnings" items={earnings} total="2,07,200" />
            <Section title="Recoveries" items={recoveries} total="51,560" />
          </div>
          <div className="border-t border-line bg-surface-soft px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-ink">Net settlement</span>
              <span className="tnum text-base font-bold text-brand">₹1,55,640</span>
            </div>
            <p className="mt-0.5 text-[11px] italic text-muted">
              Rupees one lakh fifty five thousand six hundred and forty only
            </p>
          </div>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Separation</p>
          <div className="mt-3 space-y-2 text-[11px]">
            {[
              ["Resigned", "29 Aug 2026"],
              ["Notice period", "60 days"],
              ["Notice due", "28 Oct 2026"],
              ["Last working day", "20 Oct 2026"],
              ["Shortfall", "8 days"],
              ["Service", "5 yrs 4 mths"],
              ["Rehire eligible", "Yes"],
            ].map(([k, v]) => (
              <p key={k} className="flex justify-between gap-2">
                <span className="text-muted">{k}</span>
                <span className="font-medium text-ink">{v}</span>
              </p>
            ))}
          </div>
        </Soft>
      </div>

      <Soft className="mt-3 flex flex-wrap gap-2">
        {["Gratuity exemption", "Leave encashment exemption", "Clearance tracker", "Relieving letter"].map((t) => (
          <span key={t} className="rounded-lg bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-body">
            {t}
          </span>
        ))}
      </Soft>
    </ProductFrame>
  );
}
