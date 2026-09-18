import { ProductFrame } from "./ProductFrame";

// Designed recruitment mock: a hiring pipeline board.
const stages: { name: string; count: number; people: string[] }[] = [
  { name: "Applied", count: 48, people: ["AK", "RS", "MP"] },
  { name: "Screened", count: 19, people: ["VN", "TD"] },
  { name: "Interview", count: 7, people: ["SG", "KV"] },
  { name: "Offer", count: 2, people: ["NM"] },
];

const chip = "grid h-8 w-8 place-items-center rounded-full text-[11px] font-semibold ring-2 ring-white";
const tones = [
  "bg-brand-tint text-brand",
  "bg-accent-tint text-accent-dark",
  "bg-amber-100 text-amber-700",
];

export function RecruitmentVisual() {
  return (
    <ProductFrame title="NeevHR · Recruitment · Sales Manager (West)">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stages.map((s) => (
          <div key={s.name} className="rounded-xl border border-line bg-white p-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-ink">{s.name}</p>
              <span className="tnum rounded-md bg-surface-soft px-1.5 py-0.5 text-[11px] font-semibold text-muted">
                {s.count}
              </span>
            </div>
            <div className="mt-3 flex -space-x-2">
              {s.people.map((p, i) => (
                <span key={p} className={`${chip} ${tones[i % tones.length]}`}>
                  {p}
                </span>
              ))}
              {s.count > s.people.length && (
                <span className={`${chip} bg-surface-soft text-muted`}>
                  +{s.count - s.people.length}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-surface-soft px-4 py-3">
        <div>
          <p className="text-sm font-medium text-ink">Offer · Neel Mishra</p>
          <p className="text-xs text-muted">₹18.5 LPA · valid till 30 Sep 2026</p>
        </div>
        <span className="rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white">
          Release offer
        </span>
      </div>
    </ProductFrame>
  );
}
