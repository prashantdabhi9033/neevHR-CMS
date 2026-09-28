import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";

// Designed to mirror the product's PMS "Rating distribution (bell curve)":
// indigo bars over the A+/A/B+/B/C scale with a smooth amber line over the
// bar tops, the calibration visual used at final review and sign-off. Display only (no forced curve).
// Lifted pieces: a final sign-off that drives the increment, a completed 360, and the 9-box top box.
const data = [
  { label: "A+", n: 9 },
  { label: "A", n: 31 },
  { label: "B+", n: 58 },
  { label: "B", n: 34 },
  { label: "C", n: 10 },
];

// Increment matrix used by the sign-off queue: A+ 15%, A 12%, B+ 8%, B 6%, C 0%.
const queue = [
  { name: "Kavya Nair", role: "Senior Engineer", rating: "A", inc: "12%" },
  { name: "Devika Sharma", role: "Product Lead", rating: "A+", inc: "15%" },
  { name: "Rahul Menon", role: "Account Manager", rating: "B+", inc: "8%" },
  { name: "Pranav Kulkarni", role: "QA Engineer", rating: "B+", inc: "8%" },
  { name: "Imran Shaikh", role: "Ops Executive", rating: "B", inc: "6%" },
];

const W = 340;
const H = 200;
const max = 64;
const bw = 44;
const gap = (W - data.length * bw) / (data.length + 1);

const bars = data.map((d, i) => {
  const x = gap + i * (bw + gap);
  const h = (d.n / max) * (H - 24);
  return { ...d, x, h, y: H - h, cx: x + bw / 2 };
});

// Smooth path (Catmull-Rom -> Bezier) through the bar tops.
function smoothLine(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}
const linePts = bars.map((b) => ({ x: b.cx, y: b.y }));

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 130 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Final sign-off" title="Kavya Nair · Senior Engineer" meta="FY 2026-27 annual review · Engineering" tag={<Tag tone="brand">Rating A</Tag>}>
        <Steps steps={["Self", "Manager", "HR", "Sign-off"]} at={3} />
        <div className="mt-3.5">
          <Rows
            rows={[
              ["Weighted goal score", "108%"],
              ["360 feedback (6 reviewers)", "4.3 / 5"],
              ["Current CTC", "₹14,00,000"],
              ["Increment (A · 12%)", "+ ₹1,68,000"],
            ]}
            total={["Revised CTC", "₹15,68,000"]}
          />
        </div>
        <Actions primary="Sign off" secondary="Send back" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 20 },
    look: "glass",
    node: <Toast tone="brand" glyph="360" title="360 feedback complete" sub="Rahul Menon · 5 of 5 reviewers" />,
  },
  {
    width: 270,
    pos: { left: 260, top: 0 },
    node: <Chip badge="9-box" title="11 in the top box" sub="High performance · high potential" />,
  },
];

export function PerformanceVisual() {
  return (
    <ProductFrame title="NeevHR · Performance · FY 2026-27 calibration" floaters={floaters} actions={<><WinButton>9-box</WinButton><WinButton primary>Release increments</WinButton></>}>
      <div className="grid grid-cols-[1.15fr_1fr] gap-4">
        <div>
          <div className="rounded-xl border border-line bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Rating distribution (bell curve)</p>
              <span className="text-xs text-muted">142 rated</span>
            </div>

            <svg
              viewBox={`0 0 ${W} ${H + 22}`}
              className="mt-3 w-full"
              role="img"
              aria-label="Rating distribution bell curve"
            >
              {bars.map((b) => (
                <g key={b.label}>
                  <rect x={b.x} y={b.y} width={bw} height={b.h} rx={4} fill="var(--color-brand)" opacity={0.85} />
                  <text x={b.cx} y={b.y - 6} textAnchor="middle" className="fill-ink" fontSize="12" fontWeight="600">
                    {b.n}
                  </text>
                  <text x={b.cx} y={H + 16} textAnchor="middle" className="fill-muted" fontSize="12" fontWeight="600">
                    {b.label}
                  </text>
                </g>
              ))}
              <path d={smoothLine(linePts)} fill="none" stroke="#f59e0b" strokeWidth={2.5} strokeLinecap="round" />
              {linePts.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="#f59e0b" stroke="white" strokeWidth={1.5} />
              ))}
            </svg>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {["Weighted goals", "360 feedback", "9-box calibration", "Self · manager · sign-off", "A+ to C scale"].map((t) => (
              <span key={t} className="rounded-lg bg-surface-soft px-2.5 py-1 text-xs font-medium text-body">
                {t}
              </span>
            ))}
          </div>
        </div>

        <Soft className="rounded-xl border border-line bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Awaiting final sign-off</p>
            <span className="tnum text-xs text-muted">18</span>
          </div>
          <div className="mt-3 divide-y divide-line">
            {queue.map((q) => (
              <div key={q.name} className="flex items-center justify-between py-2.5">
                <div className="min-w-0">
                  <p className="truncate text-[12.5px] font-semibold text-ink">{q.name}</p>
                  <p className="truncate text-[11px] text-muted">{q.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-brand-tint px-1.5 py-0.5 text-[11px] font-bold text-brand">{q.rating}</span>
                  <span className="tnum w-9 text-right text-[12px] font-semibold text-success-dark">{q.inc}</span>
                </div>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
