import { Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Performance at sign-off means reading the whole cohort's ratings at once, so the image IS the product's
// rating distribution (bell curve) on Neev Night: A+ to C bars with the amber curve traced over the bar
// tops. It is display only: the curve reads the ratings as given (the approved rating once signed off),
// nothing is forced to fit. The calibration context sits beside it: the sign-off hub filters, the approved
// cycle cost and one rating re-set at sign-off, which reprices the increment.
// Counts: 9 + 31 + 58 + 34 + 10 = 142 rated. Cost at an average CTC of ₹12,00,000: previous 142 x 12 L =
// ₹17,04,00,000; increment 12 L x (9x15% + 31x12% + 58x8% + 34x6% + 10x0%) = 12 L x 11.75 = ₹1,41,00,000;
// new ₹18,45,00,000 (+8.3%). Kavya: ₹14,00,000 x 12% = ₹1,68,000 (was 8% = ₹1,12,000 at HR's B+).

const data = [
  { label: "A+", n: 9, inc: 15 },
  { label: "A", n: 31, inc: 12 },
  { label: "B+", n: 58, inc: 8 },
  { label: "B", n: 34, inc: 6 },
  { label: "C", n: 10, inc: 0 },
];
const TOTAL = data.reduce((s, d) => s + d.n, 0);

const W = 576;
const H = 408;
const PL = 34; // y-axis gutter
const PT = 34;
const PB = 92; // x labels, share and increment rows
const plotH = H - PT - PB;
const MAX = 60;
const slot = (W - PL) / data.length;
const BW = 62;

const bars = data.map((d, i) => {
  const cx = PL + slot * i + slot / 2;
  const h = (d.n / MAX) * plotH;
  return { ...d, cx, x: cx - BW / 2, y: PT + plotH - h, h };
});

// Smooth path (Catmull-Rom to Bezier) through the bar tops, like the product's smooth ECharts line.
function smooth(pts: { x: number; y: number }[]) {
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    d += ` C ${p1.x + (p2.x - p0.x) / 6} ${p1.y + (p2.y - p0.y) / 6}, ${p2.x - (p3.x - p1.x) / 6} ${p2.y - (p3.y - p1.y) / 6}, ${p2.x} ${p2.y}`;
  }
  return d;
}
const tops = bars.map((b) => ({ x: b.cx, y: b.y }));
const line = smooth(tops);
const area = `${line} L ${tops[tops.length - 1].x} ${PT + plotH} L ${tops[0].x} ${PT + plotH} Z`;

function Chart() {
  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Rating distribution: A+ 9, A 31, B+ 58, B 34, C 10">
      <defs>
        <linearGradient id="perf-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8B7BFF" />
          <stop offset="1" stopColor="#5B45E8" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="perf-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F59E0B" stopOpacity="0.22" />
          <stop offset="1" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 20, 40, 60].map((v) => {
        const y = PT + plotH - (v / MAX) * plotH;
        return (
          <g key={v}>
            <line x1={PL} x2={W} y1={y} y2={y} stroke="white" strokeOpacity={v === 0 ? 0.25 : 0.08} />
            <text x={PL - 10} y={y + 4} textAnchor="end" fontSize="11" fill="#A9A8E8" className="tnum">
              {v}
            </text>
          </g>
        );
      })}
      <path d={area} fill="url(#perf-area)" />
      {bars.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={BW} height={b.h} rx={6} fill="url(#perf-bar)" />
          <text x={b.cx} y={b.y - 12} textAnchor="middle" fontSize="15" fontWeight="700" fill="white" className="tnum">
            {b.n}
          </text>
          <text x={b.cx} y={PT + plotH + 26} textAnchor="middle" fontSize="16" fontWeight="700" fill="white">
            {b.label}
          </text>
          <text x={b.cx} y={PT + plotH + 45} textAnchor="middle" fontSize="11.5" fill="#A9A8E8" className="tnum">
            {Math.round((b.n / TOTAL) * 100)}% of rated
          </text>
          <rect x={b.cx - 30} y={PT + plotH + 58} width={60} height={22} rx={11} fill="white" fillOpacity={0.08} />
          <text x={b.cx} y={PT + plotH + 73} textAnchor="middle" fontSize="11.5" fontWeight="600" fill={b.inc ? "#6EE7B7" : "#A9A8E8"} className="tnum">
            {b.inc ? `+${b.inc}%` : "0%"}
          </text>
        </g>
      ))}
      <path d={line} fill="none" stroke="#F59E0B" strokeWidth={3} strokeLinecap="round" />
      {tops.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={5} fill="#F59E0B" stroke="#0C0B4A" strokeWidth={2} />
      ))}
    </svg>
  );
}

const totals = [
  ["Previous salary total", "₹17,04,00,000", "text-ink"],
  ["Appraisal increment", "+₹1,41,00,000", "text-emerald-600"],
  ["New salary total", "₹18,45,00,000", "text-ink"],
] as const;

export function PerformanceVisual() {
  return (
    <VisualStage
      width={1000}
      estHeight={640}
      backdrop="night"
      padding={44}
      label="A NeevHR performance rating distribution bell curve for 142 employees across A+ to C, with sign-off filters, the approved cycle cost and a rating re-set at sign-off."
    >
      <div className="grid grid-cols-[1fr_300px] gap-9">
        <div>
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow dark>FY 2026-27 annual review · sign-off hub</Eyebrow>
              <p className="mt-1.5 text-[24px] font-bold tracking-tight text-white">Rating distribution (bell curve)</p>
              <p className="text-[12.5px] text-[#A9A8E8]">Employees who cleared HR rating · Aikyora Pvt Ltd</p>
            </div>
            <span className="tnum rounded-full bg-[#F59E0B] px-3 py-1 text-[12.5px] font-bold text-[#24242B]">{TOTAL} rated</span>
          </div>
          <div className="mt-4">
            <Chart />
          </div>
          <div className="flex items-center justify-between pl-[34px] text-[11.5px] text-[#A9A8E8]">
            <span className="flex items-center gap-2">
              <span className="h-[3px] w-5 rounded bg-[#F59E0B]" />
              Curve traced over ratings as given, nothing forced
            </span>
            <span className="flex items-center gap-1.5">
              <span className="rounded-full bg-white/10 px-2 font-semibold text-[#6EE7B7]">+%</span>
              increment at that rating
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-1">
          <div>
            <p className="text-[11px] font-semibold text-[#A9A8E8]">Curve follows the filter</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[
                ["Department", "All"],
                ["Grade", "All"],
                ["Location", "All"],
              ].map(([k, v]) => (
                <span key={k} className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-[11.5px] text-[#A9A8E8]">
                  {k} <b className="font-semibold text-white">{v}</b>
                </span>
              ))}
            </div>
          </div>

          <Card className="p-4">
            <p className="text-[11px] text-slate-500">Approved cycle cost · 142 employees</p>
            <div className="mt-2.5 space-y-2">
              {totals.map(([k, v, tone]) => (
                <div key={k} className="flex items-baseline justify-between text-[12.5px]">
                  <span className="text-slate-600">{k}</span>
                  <span className={`tnum font-semibold ${tone}`}>{v}</span>
                </div>
              ))}
              <div className="flex items-baseline justify-between border-t border-slate-200 pt-2.5">
                <span className="text-[12.5px] font-semibold text-ink">Overall increase</span>
                <span className="tnum text-[20px] font-bold text-emerald-600">+8.3%</span>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[13px] font-bold text-ink">Kavya Nair</p>
                <p className="text-[11px] text-slate-500">Senior Engineer · Engineering</p>
              </div>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700 ring-1 ring-blue-200">Signed off</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[12px]">
              <span className="rounded-md bg-slate-100 px-2 py-1 font-semibold text-slate-500 line-through">HR · B+</span>
              <svg width="18" height="10" viewBox="0 0 18 10" aria-hidden>
                <path d="M1 5h14m-4-4 4 4-4 4" stroke="#5B45E8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
              <span className="rounded-md bg-[#EEEAFE] px-2 py-1 font-bold text-[#4A34D1]">Sign-off · A</span>
            </div>
            <div className="mt-3 space-y-1.5 text-[12px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Increment repriced</span>
                <span className="tnum font-semibold text-ink">8% → 12%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">On ₹14,00,000 CTC</span>
                <span className="tnum font-semibold text-emerald-600">+₹1,68,000</span>
              </div>
            </div>
            <p className="mt-2.5 text-[11px] leading-snug text-slate-500">Employee is not notified until you release.</p>
          </Card>
        </div>
      </div>
    </VisualStage>
  );
}
