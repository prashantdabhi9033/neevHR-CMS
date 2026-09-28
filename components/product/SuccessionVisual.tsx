import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Succession MEANS knowing who could step into a critical role, and how soon. So the image is the talent
// map itself: a large calibrated 9-box with people placed by performance and potential (one committee
// move shown in flight), beside the critical role it feeds, with its ranked successors and readiness.
// 9-box population: 2 + 2 + 1 + 3 + 5 + 1 + 2 + 1 + 1 = 18 people (Kavya still in High performer until sign-off).

type Cell = { perf: 1 | 2 | 3; pot: 1 | 2 | 3; name: string; people: string[] };

// Box names as the product labels them (Performance → 9-box).
const cells: Cell[] = [
  { perf: 1, pot: 3, name: "Rough diamond", people: ["TB"] },
  { perf: 2, pot: 3, name: "Emerging talent", people: ["ID", "PK"] },
  { perf: 3, pot: 3, name: "Star", people: ["AS", "VR"] },
  { perf: 1, pot: 2, name: "Inconsistent", people: ["YT"] },
  { perf: 2, pot: 2, name: "Core player", people: ["NM", "SG", "DV", "HP", "AK"] },
  { perf: 3, pot: 2, name: "High performer", people: ["RS", "MJ", "KM"] },
  { perf: 1, pot: 1, name: "Underperformer", people: ["BK"] },
  { perf: 2, pot: 1, name: "Solid performer", people: ["FQ"] },
  { perf: 3, pot: 1, name: "Trusted professional", people: ["LS", "GP"] },
];

const CW = 128;
const CH = 124;
const G = 8;

function tint(perf: number, pot: number) {
  const score = perf + pot;
  if (score >= 6) return "rgba(91,69,232,0.55)";
  if (score === 5) return "rgba(91,69,232,0.32)";
  if (score === 4) return "rgba(255,255,255,0.10)";
  return "rgba(255,255,255,0.05)";
}

const HIPO = new Set(["ID", "AS", "VR", "PK", "TB"]);

function StarBadge({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden>
      <circle cx={7} cy={7} r={7} fill="#E88938" />
      <path d="M7 3.2 L8.1 5.6 L10.7 5.8 L8.7 7.5 L9.3 10 L7 8.7 L4.7 10 L5.3 7.5 L3.3 5.8 L5.9 5.6 Z" fill="#24242B" />
    </svg>
  );
}

function NineBox() {
  // column x and row y (potential 3 at the top).
  const cx = (perf: number) => (perf - 1) * (CW + G);
  const cy = (pot: number) => (3 - pot) * (CH + G);
  // KM is the third avatar in High performer; the dashed ghost is the third slot in Star.
  const slotX = cx(3) + 10 + 2 * 34 + 14;
  const from = { x: slotX, y: cy(2) + 35 };
  const to = { x: slotX, y: cy(3) + 67 };
  return (
    <div className="flex gap-3">
      <div className="flex flex-col justify-between py-2 text-right text-[10.5px] font-semibold text-[#A9A8E8]" style={{ height: 3 * CH + 2 * G }}>
        <span>High</span>
        <span className="-rotate-90 whitespace-nowrap uppercase tracking-[0.16em]">Potential</span>
        <span>Low</span>
      </div>
      <div>
        <div className="relative" style={{ width: 3 * CW + 2 * G, height: 3 * CH + 2 * G }}>
          {cells.map((c) => (
            <div
              key={c.name}
              className={`absolute rounded-xl p-2.5 ring-1 ${c.name === "Star" ? "ring-[#8B7BFF]" : "ring-white/10"}`}
              style={{ left: cx(c.perf), top: cy(c.pot), width: CW, height: CH, background: tint(c.perf, c.pot) }}
            >
              <div className="flex items-baseline justify-between">
                <p className="text-[11px] font-semibold text-white">{c.name}</p>
                <p className="tnum text-[11px] font-semibold text-white/60">{c.people.length}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {c.people.map((p) => (
                  <span key={p} className="relative">
                    <Avatar initials={p} size={28} />
                    {HIPO.has(p) && c.pot === 3 && (
                      <span className="absolute -right-1 -top-1">
                        <StarBadge />
                      </span>
                    )}
                  </span>
                ))}
                {c.name === "Star" && (
                  <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-dashed border-white/40 text-[10px] font-semibold text-white/50">
                    KM
                  </span>
                )}
              </div>
            </div>
          ))}
          {/* Calibration move: Kavya Mehta, potential 2 → 3, pending committee sign-off. */}
          <svg className="pointer-events-none absolute inset-0" width={3 * CW + 2 * G} height={3 * CH + 2 * G} fill="none" aria-hidden>
            <path
              d={`M ${from.x} ${from.y} C ${from.x + 34} ${from.y - 30}, ${to.x + 34} ${to.y + 30}, ${to.x} ${to.y + 4}`}
              stroke="#E88938"
              strokeWidth={2}
              strokeDasharray="4 4"
            />
            <path d={`M ${to.x - 5} ${to.y + 12} L ${to.x} ${to.y + 4} L ${to.x + 7} ${to.y + 10}`} stroke="#E88938" strokeWidth={2} />
          </svg>
        </div>
        <div className="mt-2 flex justify-between px-1 text-[10.5px] font-semibold text-[#A9A8E8]" style={{ width: 3 * CW + 2 * G }}>
          <span>Low</span>
          <span className="uppercase tracking-[0.16em]">Performance</span>
          <span>High</span>
        </div>
      </div>
    </div>
  );
}

const bench = [
  { i: "KM", name: "Kavya Mehta", ready: "Ready now", type: "Planned", tone: "bg-emerald-100 text-emerald-800", dev: "Shadow the quarterly business reviews" },
  { i: "ID", name: "Isha Desai", ready: "1-2 years", type: "Planned", tone: "bg-sky-100 text-sky-800", dev: "Lead the Pune key accounts" },
  { i: "NM", name: "Neel Mishra", ready: "3+ years", type: "Emergency cover", tone: "bg-amber-100 text-amber-800", dev: "Regional P&L exposure" },
];

export function SuccessionVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={620}
      backdrop="night"
      label="A NeevHR calibrated 9-box with 18 people placed by performance and potential, one committee move in progress, and the Head of Sales critical role with three ranked successors and their readiness."
    >
      <div className="flex items-start gap-6">
        <div>
          <Eyebrow dark>Talent map · leadership pipeline</Eyebrow>
          <p className="mb-4 mt-1 text-[18px] font-bold tracking-tight text-white">Calibrated 9-box</p>
          <NineBox />
        </div>

        <div className="flex flex-1 flex-col gap-4 pt-1">
          <Card className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Eyebrow>Critical role</Eyebrow>
                <p className="mt-0.5 text-[16px] font-bold text-ink">Head of Sales</p>
                <p className="text-[11px] text-slate-500">Incumbent Sunil Menon · Customer relationship</p>
              </div>
              <span className="shrink-0 rounded-full bg-red-50 px-2 py-0.5 text-[10.5px] font-semibold text-red-700">High loss risk</span>
            </div>
            <ol className="mt-3 space-y-2.5">
              {bench.map((b, idx) => (
                <li key={b.name} className="rounded-lg border border-slate-100 p-2.5">
                  <div className="flex items-center gap-2">
                    <span className="tnum w-3 text-[11px] font-bold text-slate-400">{idx + 1}</span>
                    <Avatar initials={b.i} size={26} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12px] font-semibold text-ink">{b.name}</p>
                      <p className="text-[10.5px] text-slate-500">{b.type}</p>
                    </div>
                    <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10.5px] font-semibold ${b.tone}`}>{b.ready}</span>
                  </div>
                  <p className="mt-1.5 pl-5 text-[10.5px] text-slate-500">Development: {b.dev}</p>
                </li>
              ))}
            </ol>
          </Card>

          <div className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[12px] font-semibold text-white">Talent calibration</p>
              <span className="whitespace-nowrap rounded-full bg-[#E88938] px-2 py-0.5 text-[10.5px] font-semibold text-[#24242B]">Awaiting sign-off</span>
            </div>
            <p className="mt-0.5 text-[10.5px] text-[#A9A8E8]">Leadership committee · 30 Sep 2026</p>
            <p className="mt-1.5 text-[11.5px] text-[#C9C8F2]">
              Kavya Mehta · potential 2 → 3 · High performer to Star
            </p>
            <p className="mt-1 text-[10.5px] text-[#A9A8E8]">Rationale: led the Pune expansion. Sign-off stamps the 9-box and the bench.</p>
            <p className="mt-2.5 flex items-center gap-1.5 text-[10.5px] text-[#A9A8E8]">
              <StarBadge />
              HiPo by the configured 9-box rule
            </p>
          </div>
        </div>
      </div>
    </VisualStage>
  );
}
