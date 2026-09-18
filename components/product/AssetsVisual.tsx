import { ProductFrame } from "./ProductFrame";

const cards = [
  { label: "Total", value: "1,340", tone: "bg-brand-tint text-brand" },
  { label: "Assigned", value: "1,120", tone: "bg-blue-100 text-blue-700" },
  { label: "In stock", value: "156", tone: "bg-emerald-100 text-emerald-700" },
  { label: "Reserved", value: "34", tone: "bg-purple-100 text-purple-700" },
  { label: "In repair", value: "18", tone: "bg-amber-100 text-amber-700" },
  { label: "Damaged", value: "12", tone: "bg-red-100 text-red-700" },
];
const timeline = [
  { t: "Issued to Ishita Gandhi", d: "12 Aug 2026", c: "bg-accent" },
  { t: "Reassigned to Rohan Nair", d: "02 Sep 2026", c: "bg-brand" },
  { t: "Sent to repair", d: "15 Sep 2026", c: "bg-amber-400" },
];

export function AssetsVisual() {
  return (
    <ProductFrame title="NeevHR · Assets · DELL-4471 (MacBook Pro)">
      <div className="grid grid-cols-3 gap-2">
        {cards.map((c) => (
          <div key={c.label} className="rounded-xl border border-line p-2.5 text-center">
            <span className={`inline-block rounded-md px-1.5 py-0.5 text-[9px] font-semibold ${c.tone}`}>{c.label}</span>
            <p className="tnum mt-1 text-base font-bold text-ink">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-line p-4">
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
    </ProductFrame>
  );
}
