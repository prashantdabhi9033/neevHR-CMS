import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's asset register (status counts) and a single asset's custody timeline, with
// warranty and straight-line book value: ₹1,80,000 over 3 years = ₹5,000/month, 18 months to
// Sep 2026 = ₹90,000 book value.
// Lifted pieces: the repair-closed decision for this asset, a joiner reservation and expiring warranties.
const cards = [
  { label: "Total", value: "478", tone: "bg-brand-tint text-brand" },
  { label: "Assigned", value: "402", tone: "bg-blue-100 text-blue-700" },
  { label: "In stock", value: "51", tone: "bg-emerald-100 text-emerald-700" },
  { label: "Reserved", value: "12", tone: "bg-purple-100 text-purple-700" },
  { label: "In repair", value: "9", tone: "bg-amber-100 text-amber-700" },
  { label: "Damaged", value: "4", tone: "bg-red-100 text-red-700" },
];
const timeline = [
  { t: "Issued to Ishita Gandhi", d: "24 Mar 2025", c: "bg-success" },
  { t: "Reassigned to Rohan Nair", d: "02 Sep 2026", c: "bg-brand" },
  { t: "Sent to repair · keyboard, warranty claim", d: "15 Sep 2026", c: "bg-amber-400" },
];
const specs = [
  ["Category", "Laptop"],
  ["Serial", "C02XK4471"],
  ["Purchased", "18 Mar 2025"],
  ["Cost", "₹1,80,000"],
  ["Depreciation", "3 yrs · straight-line"],
  ["Warranty till", "17 Mar 2028"],
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 92 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Back from repair" title="LAP-4471 · MacBook Pro 14" meta="Returned 26 Sep 2026 · keyboard replaced" tag={<Tag tone="success">Under warranty</Tag>}>
        <Rows rows={[["Repair cost", "₹0 · warranty claim"], ["Book value", "₹90,000"], ["Last custodian", "Rohan Nair"]]} />
        <Actions primary="Reissue to Rohan Nair" secondary="To stock" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast tone="brand" glyph="✓" title="Reserved for joiner · Aditi Bhatt" sub="LAP-4502 · issue on day one, 05 Oct 2026" />,
  },
  {
    width: 260,
    pos: { left: 250, top: 0 },
    node: <Chip badge="7" tone="warning" title="7 warranties expire in 30 days" sub="5 laptops · 2 monitors" />,
  },
];

export function AssetsVisual() {
  return (
    <ProductFrame
      title="NeevHR · Assets · LAP-4471 (MacBook Pro 14)"
      floaters={floaters}
      actions={<><WinButton>Register</WinButton><WinButton primary>Issue asset</WinButton></>}
    >
      <div className="grid grid-cols-[1fr_224px] gap-4">
        <div>
          <Soft className="grid grid-cols-3 gap-2">
            {cards.map((c) => (
              <div key={c.label} className="rounded-xl border border-line bg-white p-2.5 text-center">
                <span className={`inline-block rounded-md px-1.5 py-0.5 text-[9px] font-semibold ${c.tone}`}>{c.label}</span>
                <p className="tnum mt-1 text-base font-bold text-ink">{c.value}</p>
              </div>
            ))}
          </Soft>

          <div className="mt-4 rounded-xl border border-line bg-white p-4">
            <p className="text-sm font-semibold text-ink">Custody history</p>
            <div className="mt-3 space-y-3">
              {timeline.map((e, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <span className={`h-2.5 w-2.5 rounded-full ${e.c}`} />
                    {i < timeline.length - 1 && <span className="mt-1 h-6 w-px bg-line" />}
                  </div>
                  <div className="-mt-0.5">
                    <p className="text-[13px] text-ink">{e.t}</p>
                    <p className="text-[11px] text-muted">{e.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">Asset details</p>
          <div className="mt-3 space-y-2 text-[11px]">
            {specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-2">
                <span className="text-muted">{k}</span>
                <span className="tnum text-right font-medium text-ink">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 border-t border-dashed border-line pt-2 text-[11px]">
            <div className="flex justify-between">
              <span className="text-muted">Book value</span>
              <span className="tnum font-semibold text-ink">₹90,000</span>
            </div>
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
