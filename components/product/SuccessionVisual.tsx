import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's succession skill-gap heatmap: pipeline members x leadership competencies,
// each cell a 1-5 score on a red->amber->green scale, beside a critical role's ranked bench.
// Lifted pieces: a committee calibration move on the 9-box, a HiPo flag and bench-depth cover.
const cols = ["Vision", "P&L", "People", "Domain", "Influence", "Delivery"];
const rows: { name: string; scores: number[] }[] = [
  { name: "Kavya Mehta", scores: [4, 3, 5, 5, 4, 5] },
  { name: "Rohan Nair", scores: [3, 2, 4, 5, 3, 4] },
  { name: "Isha Desai", scores: [5, 4, 4, 3, 5, 4] },
  { name: "Neel Mishra", scores: [2, 2, 3, 4, 3, 3] },
];
const bench = [
  ["Kavya Mehta", "Ready now"],
  ["Isha Desai", "Ready in 1-2 yrs"],
  ["Neel Mishra", "Ready in 3+ yrs"],
];

function cell(v: number) {
  if (v >= 5) return { bg: "#059669", fg: "#fff" };
  if (v === 4) return { bg: "#34d399", fg: "#064e3b" };
  if (v === 3) return { bg: "#fcd34d", fg: "#713f12" };
  if (v === 2) return { bg: "#fb923c", fg: "#7c2d12" };
  return { bg: "#f87171", fg: "#7f1d1d" };
}

// Mini 9-box: rows are potential (high at top), columns performance (low to high).
// Kavya moves from high performance / medium potential to high / high.
function NineBox() {
  return (
    <div className="flex items-stretch gap-2">
      <span className="flex items-center text-[9.5px] font-semibold uppercase tracking-wider text-slate-400 [writing-mode:vertical-rl] rotate-180">
        Potential
      </span>
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => {
            const row = Math.floor(i / 3);
            const col = i % 3;
            const to = row === 0 && col === 2;
            const from = row === 1 && col === 2;
            return (
              <span
                key={i}
                className={`grid h-7 place-items-center rounded-md text-[10px] font-bold ${
                  to
                    ? "bg-[#5B45E8] text-white"
                    : from
                      ? "border border-dashed border-[#5B45E8] bg-[#EEEAFE] text-[#4A34D1]"
                      : "bg-slate-100"
                }`}
              >
                {to ? "KM" : from ? "↑" : ""}
              </span>
            );
          })}
        </div>
        <p className="mt-1 text-center text-[9.5px] font-semibold uppercase tracking-wider text-slate-400">Performance</p>
      </div>
    </div>
  );
}

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 80 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Talent calibration" title="Move Kavya Mehta to HiPo" meta="Leadership committee · 30 Sep 2026" tag={<Tag tone="warning">Sign-off</Tag>}>
        <NineBox />
        <div className="mt-3">
          <Rows rows={[["Performance", "High · unchanged"], ["Potential", "Medium → High"], ["Rationale", "Led Pune expansion"]]} />
        </div>
        <Actions primary="Sign off move" secondary="Hold" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="brand" glyph="★" title="Isha Desai flagged HiPo" sub="HiPo rule met · added to 2 benches" />,
  },
  {
    width: 260,
    pos: { left: 260, top: 0 },
    node: <Chip badge="3/14" tone="warning" title="No ready-now successor" sub="3 of 14 critical roles · review bench" />,
  },
];

export function SuccessionVisual() {
  return (
    <ProductFrame
      title="NeevHR · Succession · Leadership bench"
      floaters={floaters}
      actions={<><WinButton>Critical roles</WinButton><WinButton primary>Start calibration</WinButton></>}
    >
      <div className="grid grid-cols-[410px_1fr] gap-6">
        <div className="rounded-xl border border-line bg-white p-4">
          <p className="mb-3 text-sm font-semibold text-ink">Skill-gap heatmap</p>
          <div className="grid grid-cols-[76px_repeat(6,1fr)] gap-1">
            <span />
            {cols.map((c) => (
              <span key={c} className="text-center text-[9.5px] font-semibold text-muted" title={c}>
                {c}
              </span>
            ))}
          </div>
          <div className="mt-1 space-y-1">
            {rows.map((r) => (
              <div key={r.name} className="grid grid-cols-[76px_repeat(6,1fr)] items-center gap-1">
                <span className="truncate text-[11px] font-semibold text-ink">{r.name.split(" ")[0]}</span>
                {r.scores.map((v, i) => {
                  const c = cell(v);
                  return (
                    <div
                      key={i}
                      className="tnum flex h-9 items-center justify-center rounded-md text-[11px] font-bold"
                      style={{ background: c.bg, color: c.fg }}
                    >
                      {v}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted">
            <span>Gap</span>
            {[1, 2, 3, 4, 5].map((v) => (
              <span key={v} className="h-3 w-4 rounded-sm" style={{ background: cell(v).bg }} />
            ))}
            <span>Strong</span>
          </div>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-ink">Head of Sales</p>
            <span className="rounded-md bg-red-100 px-1.5 py-0.5 text-[10px] font-semibold text-red-700">High loss risk</span>
          </div>
          <p className="mt-0.5 text-[11px] text-muted">Critical role · ranked bench</p>
          <ol className="mt-3 space-y-2.5">
            {bench.map(([name, ready], i) => (
              <li key={name} className="flex items-center gap-2 text-[11px]">
                <span className="tnum grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-tint text-[10px] font-bold text-brand">
                  {i + 1}
                </span>
                <span className="flex-1 truncate font-medium text-ink">{name}</span>
                <span className="text-muted">{ready}</span>
              </li>
            ))}
          </ol>
        </Soft>
      </div>

      <Soft className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ["Critical roles", "14"],
          ["Ready-now cover", "11"],
          ["HiPos", "9"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-lg bg-surface-soft py-2">
            <p className="tnum text-sm font-bold text-ink">{v}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </Soft>
    </ProductFrame>
  );
}
