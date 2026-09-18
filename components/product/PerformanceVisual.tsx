import { ProductFrame } from "./ProductFrame";

// Designed to mirror the product's PMS "Rating distribution (bell curve)":
// indigo bars over the A+/A/B+/B/C scale with a smooth amber line over the
// bar tops, the calibration visual used at final review and sign-off.
const data = [
  { label: "A+", n: 9 },
  { label: "A", n: 31 },
  { label: "B+", n: 58 },
  { label: "B", n: 34 },
  { label: "C", n: 10 },
];

const W = 320;
const H = 150;
const max = 64;
const bw = 42;
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

export function PerformanceVisual() {
  return (
    <ProductFrame title="NeevHR · Performance · FY 2026 calibration">
      <div className="rounded-xl border border-line p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-ink">
            Rating distribution (bell curve)
          </p>
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
              <rect
                x={b.x}
                y={b.y}
                width={bw}
                height={b.h}
                rx={4}
                fill="var(--color-brand)"
                opacity={0.85}
              />
              <text
                x={b.cx}
                y={b.y - 6}
                textAnchor="middle"
                className="fill-ink"
                fontSize="11"
                fontWeight="600"
              >
                {b.n}
              </text>
              <text
                x={b.cx}
                y={H + 15}
                textAnchor="middle"
                className="fill-muted"
                fontSize="11"
                fontWeight="600"
              >
                {b.label}
              </text>
            </g>
          ))}
          <path
            d={smoothLine(linePts)}
            fill="none"
            stroke="#f59e0b"
            strokeWidth={2.5}
            strokeLinecap="round"
          />
          {linePts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="#f59e0b" stroke="white" strokeWidth={1.5} />
          ))}
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {["9-box calibration", "360° feedback", "Self → manager → sign-off", "A+ to C scale"].map(
          (t) => (
            <span
              key={t}
              className="rounded-lg bg-surface-soft px-2.5 py-1 text-xs font-medium text-body"
            >
              {t}
            </span>
          )
        )}
      </div>
    </ProductFrame>
  );
}
