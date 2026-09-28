import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's reducing-balance EMI amortization schedule: ₹1,00,000 at 12% p.a. over
// 12 months = EMI ₹8,885 (interest = 1% of opening balance, rounded to the rupee).
// Lifted pieces: a new loan parked above the approval threshold, the Sep 2026 payroll EMI recovery
// and a post-exit write-off awaiting its second approver.
const rows = [
  { n: "1", m: "Sep 2026", emi: "8,885", int: "1,000", prin: "7,885", bal: "92,115", done: true },
  { n: "2", m: "Oct 2026", emi: "8,885", int: "921", prin: "7,964", bal: "84,151", done: false },
  { n: "3", m: "Nov 2026", emi: "8,885", int: "842", prin: "8,043", bal: "76,108", done: false },
  { n: "4", m: "Dec 2026", emi: "8,885", int: "761", prin: "8,124", bal: "67,984", done: false },
  { n: "5", m: "Jan 2027", emi: "8,885", int: "680", prin: "8,205", bal: "59,779", done: false },
  { n: "6", m: "Feb 2027", emi: "8,885", int: "598", prin: "8,287", bal: "51,492", done: false },
];
const book = [
  ["Personal", "₹14.6 L", "23 loans"],
  ["Salary advance", "₹3.2 L", "17 advances"],
  ["Emergency", "₹1.1 L", "4 loans"],
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 84 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Parked above threshold" title="Personal loan · Kavya Mehta" meta="Applied 05 Oct 2026 · reducing balance" tag={<Tag tone="warning">2nd approval</Tag>}>
        <Rows
          rows={[["Principal", "₹2,50,000"], ["Interest", "10% p.a."], ["Tenure", "24 months · Nov 2026 to Oct 2028"], ["Auto-approve limit", "₹1,50,000"]]}
          total={["Monthly EMI", "₹11,536"]}
        />
        <Actions primary="Approve & schedule" secondary="Preview EMIs" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 20 },
    look: "glass",
    node: <Toast glyph="₹" title="EMI recovered · Sep 2026 payroll" sub="Rohan Nair · ₹8,885 · balance ₹92,115" />,
  },
  {
    width: 270,
    pos: { left: 250, top: 0 },
    node: <Chip badge="2nd" tone="warning" title="Write-off needs a 2nd approver" sub="Amit Joshi (exited) · ₹18,400 residual" />,
  },
];

export function LoansVisual() {
  return (
    <ProductFrame
      title="NeevHR · Loans · Personal loan · Rohan Nair"
      floaters={floaters}
      actions={<><WinButton>Record repayment</WinButton><WinButton primary>New loan</WinButton></>}
    >
      <div className="grid grid-cols-[1fr_224px] gap-4">
        <div>
          <div className="rounded-xl border border-line bg-white p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-ink">Principal repaid</span>
              <span className="tnum text-muted">₹7,885 of ₹1,00,000</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-soft">
              <div className="h-full rounded-full bg-success" style={{ width: "8%" }} />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
              {[["EMI", "₹8,885"], ["Rate", "12% p.a. reducing"], ["Tenure", "1 of 12 paid"]].map(([l, v]) => (
                <div key={l}>
                  <p className="text-muted">{l}</p>
                  <p className="tnum font-semibold text-ink">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border border-line bg-white">
            <table className="w-full text-left text-[12px]">
              <thead>
                <tr className="bg-surface-soft text-[10px] uppercase text-muted">
                  <th className="px-2 py-2 font-semibold">#</th>
                  <th className="px-2 py-2 font-semibold">Month</th>
                  <th className="px-2 py-2 text-right font-semibold">EMI</th>
                  <th className="px-2 py-2 text-right font-semibold">Interest</th>
                  <th className="px-2 py-2 text-right font-semibold">Principal</th>
                  <th className="px-2 py-2 text-right font-semibold">Balance</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.n} className={`border-t border-line ${r.done ? "bg-success-tint/60" : ""}`}>
                    <td className={`tnum px-2 py-1.5 ${r.done ? "font-bold text-success-dark" : "text-muted"}`}>{r.done ? "✓" : r.n}</td>
                    <td className="whitespace-nowrap px-2 py-1.5 text-body">{r.m}</td>
                    <td className="tnum px-2 py-1.5 text-right text-ink">₹{r.emi}</td>
                    <td className="tnum px-2 py-1.5 text-right text-muted">₹{r.int}</td>
                    <td className="tnum px-2 py-1.5 text-right text-ink">₹{r.prin}</td>
                    <td className="tnum px-2 py-1.5 text-right text-ink">₹{r.bal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-muted">EMIs recovered automatically through monthly payroll.</p>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">Outstanding by type</p>
          <p className="tnum text-[10px] text-muted">₹18.9 L · 44 active</p>
          <div className="mt-3 space-y-3">
            {book.map(([t, v, c]) => (
              <div key={t} className="flex items-center justify-between text-[11px]">
                <div>
                  <p className="text-body">{t}</p>
                  <p className="text-[10px] text-muted">{c}</p>
                </div>
                <span className="tnum font-semibold text-ink">{v}</span>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
