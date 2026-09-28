import { Card, Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// Compensation is a decision made on a grid and written down as a letter. So the hero is the product's
// merit matrix (rating x compa-ratio band, suggested % with its guide range) as a heat grid on a paper
// desk, flanked by the budget it spends (cycle burn-down and per-manager envelopes) and the increment
// letter the chosen cell produces. Ananya: ₹14,40,000 x 14% (A x Below) = ₹2,01,600, so ₹16,41,600;
// compa-ratio vs a ₹16,74,400 midpoint: 0.86 to 0.98. Budget: ₹1.88 Cr of ₹2.14 Cr = 88%, ₹26 L left.
// Envelopes: 12,00,000 - 11,10,000 = 90,000 left; 18,50,000 - 19,20,000 = over 70,000; 9,80,000 - 8,45,000 = 1,35,000.

const ratings = ["A+", "A", "B+", "B", "C"];
const bands = ["Below", "Within", "Above"];
// [suggested, min, max]
const matrix: [number, number, number][][] = [
  [[18, 15, 22], [14, 12, 17], [10, 8, 12]],
  [[14, 12, 17], [11, 9, 13], [8, 6, 10]],
  [[10, 8, 12], [8, 6, 10], [6, 4, 8]],
  [[7, 5, 9], [5, 3, 7], [4, 2, 6]],
  [[3, 0, 5], [0, 0, 2], [0, 0, 0]],
];
const FOCUS = { r: 1, b: 0 };

function heat(v: number) {
  if (v >= 14) return { bg: "#15147B", fg: "#FFFFFF", sub: "rgba(255,255,255,0.7)" };
  if (v >= 10) return { bg: "#5B45E8", fg: "#FFFFFF", sub: "rgba(255,255,255,0.75)" };
  if (v >= 7) return { bg: "#A99BF7", fg: "#1E1A6B", sub: "rgba(30,26,107,0.7)" };
  if (v >= 4) return { bg: "#DCD5FD", fg: "#312B8F", sub: "rgba(49,43,143,0.7)" };
  return { bg: "#F1EEFE", fg: "#64748B", sub: "#94A3B8" };
}

const envelopes = [
  { name: "Rohan Desai", team: 14, cap: "₹12,00,000", spent: "₹11,10,000", left: "₹90,000 left", pct: 93, over: false },
  { name: "Meera Pillai", team: 22, cap: "₹18,50,000", spent: "₹19,20,000", left: "Over ₹70,000", pct: 100, over: true },
  { name: "Nikhil Jain", team: 17, cap: "₹9,80,000", spent: "₹8,45,000", left: "₹1,35,000 left", pct: 86, over: false },
];

function Matrix() {
  return (
    <Card className="p-5">
      <div className="flex items-baseline justify-between">
        <p className="text-[15px] font-bold text-ink">Merit matrix, suggested increment %</p>
        <span className="text-[11px] text-slate-500">guide range below</span>
      </div>
      <div className="mt-4 grid grid-cols-[44px_repeat(3,1fr)] gap-1.5">
        <span />
        {bands.map((b) => (
          <span key={b} className="pb-1 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {b} band
          </span>
        ))}
        {ratings.map((r, ri) => (
          <div key={r} className="contents">
            <span className="grid place-items-center">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[12px] font-bold text-ink">{r}</span>
            </span>
            {matrix[ri].map(([v, lo, hi], bi) => {
              const h = heat(v);
              const on = ri === FOCUS.r && bi === FOCUS.b;
              return (
                <div
                  key={bi}
                  className={`relative rounded-lg py-2 text-center ${on ? "ring-[3px] ring-[#E88938] ring-offset-2" : ""}`}
                  style={{ background: h.bg }}
                >
                  <p className="tnum text-[17px] font-bold leading-tight" style={{ color: h.fg }}>{v}%</p>
                  <p className="tnum text-[10.5px]" style={{ color: h.sub }}>{lo}-{hi}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
        <span>Compa-ratio band: pay vs grade midpoint</span>
        <span className="flex items-center gap-1">
          low
          {["#F1EEFE", "#DCD5FD", "#A99BF7", "#5B45E8", "#15147B"].map((c) => (
            <span key={c} className="h-2.5 w-4 rounded-sm" style={{ background: c }} />
          ))}
          high
        </span>
      </div>
    </Card>
  );
}

export function CompensationVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={680}
      backdrop="cream"
      label="A NeevHR merit matrix of suggested increments by rating and compa-ratio band, the cycle budget and manager envelopes, and the increment letter it produces."
    >
      <div className="flex items-end justify-between">
        <div>
          <Eyebrow>Increment cycle · effective 01 Oct 2026</Eyebrow>
          <p className="mt-1 text-[21px] font-bold tracking-tight text-ink">FY 2026-27 merit cycle</p>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-slate-600 ring-1 ring-slate-200">
          9.0% budget pool · Planning
        </span>
      </div>

      <div className="mt-5 grid grid-cols-[430px_1fr] gap-6">
        <div className="flex flex-col gap-4">
          <Matrix />
          <Card className="flex items-center gap-3 px-4 py-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-100 text-[14px] font-bold text-amber-700">!</span>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-semibold text-ink">Vikram Sethi · B+ · Within band</p>
              <p className="text-[11px] text-slate-500">Proposed 22% · outside the guided 6-10% range</p>
            </div>
            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-200">Out of policy</span>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-baseline justify-between">
              <p className="text-[13px] font-semibold text-ink">Budget burn-down</p>
              <p className="tnum text-[12px] font-semibold text-emerald-600">₹26 L left</p>
            </div>
            <p className="tnum mt-0.5 text-[11.5px] text-slate-500">Budget ₹2.14 Cr · allocated ₹1.88 Cr</p>
            <div className="mt-3 flex h-3 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-[#15147B]" style={{ width: "88%" }} />
            </div>
            <p className="tnum mt-1.5 text-right text-[11px] font-semibold text-[#15147B]">88%</p>
          </Card>

          <Card className="p-4">
            <p className="text-[13px] font-semibold text-ink">Manager budgets</p>
            <div className="mt-3 space-y-3">
              {envelopes.map((e) => (
                <div key={e.name}>
                  <div className="flex items-baseline justify-between text-[12px]">
                    <span className="font-semibold text-ink">
                      {e.name} <span className="font-normal text-slate-400">· team {e.team}</span>
                    </span>
                    <span className={`tnum text-[11.5px] font-semibold ${e.over ? "text-red-600" : "text-emerald-600"}`}>{e.left}</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${e.over ? "bg-red-500" : "bg-[#5B45E8]"}`} style={{ width: `${e.pct}%` }} />
                  </div>
                  <p className="tnum mt-1 text-[10.5px] text-slate-500">
                    {e.spent} of {e.cap}
                    {e.over && <span className="font-semibold text-red-600"> · blocks submit</span>}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          <Paper rotate={-1.5} className="p-4">
            <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-2">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">Increment letter</p>
              <p className="text-[10.5px] text-slate-400">Aikyora Pvt Ltd</p>
            </div>
            <p className="mt-2.5 text-[12.5px] text-slate-600">
              Dear <b className="text-ink">Ananya Rao</b>, your annual CTC is revised from 01 Oct 2026.
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              <span className="tnum text-[14px] font-semibold text-slate-400 line-through">₹14,40,000</span>
              <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden>
                <path d="M1 5h14m-4-4 4 4-4 4" stroke="#E88938" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              </svg>
              <span className="tnum text-[20px] font-bold text-[#15147B]">₹16,41,600</span>
              <span className="tnum ml-auto rounded-full bg-emerald-50 px-2 py-0.5 text-[11.5px] font-bold text-emerald-700">+14%</span>
            </div>
            <p className="tnum mt-2 text-[11px] text-slate-500">Rating A · Below band · compa-ratio 0.86 → 0.98</p>
          </Paper>
        </div>
      </div>
    </VisualStage>
  );
}
