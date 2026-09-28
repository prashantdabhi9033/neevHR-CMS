import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's merit matrix: ratings x compa-ratio bands, each cell a suggested increment %
// with a heat background by magnitude, plus the budget burn-down and per-manager envelopes.
// Lifted pieces: one increment recommendation priced off the matrix (A x Below = 14%), an
// out-of-policy flag and the Engineering envelope.
const ratings = ["A+", "A", "B+", "B", "C"];
const bands = ["Below", "Within", "Above"];
const matrix: number[][] = [
  [18, 14, 10],
  [14, 11, 8],
  [10, 8, 6],
  [7, 5, 4],
  [3, 0, 0],
];
const focus = { r: 1, b: 0 };
const envelopes = [
  ["Engineering", "₹62.4 L", "₹68 L", 92],
  ["Sales", "₹48.1 L", "₹52 L", 93],
  ["Operations", "₹41.6 L", "₹48 L", 87],
  ["Finance & HR", "₹35.9 L", "₹46 L", 78],
] as const;

function heat(v: number) {
  if (v >= 14) return { bg: "rgba(16,185,129,0.16)", fg: "#047857" };
  if (v >= 8) return { bg: "rgba(21,20,123,0.10)", fg: "var(--color-brand)" };
  if (v >= 4) return { bg: "rgba(245,158,11,0.16)", fg: "#b45309" };
  return { bg: "var(--color-surface-soft)", fg: "var(--color-muted)" };
}

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 86 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Manager recommendation" title="Ananya Rao · Senior Engineer" meta="Rating A · compa-ratio 0.86 → 0.98" tag={<Tag tone="success">In policy</Tag>}>
        <Rows
          rows={[["Current CTC", "₹14,40,000"], ["Matrix · A × Below band", "14%"], ["Increment", "+₹2,01,600"]]}
          total={["New CTC", "₹16,41,600"]}
        />
        <Actions primary="Approve 14%" secondary="Adjust" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast tone="warning" glyph="!" title="Out-of-policy · Vikram Sethi" sub="22% proposed · matrix suggests 8% (B+ · Within)" />,
  },
  {
    width: 260,
    pos: { left: 250, top: 0 },
    node: <Chip badge="ENG" title="Engineering envelope" sub="₹62.4 L of ₹68 L · ₹5.6 L left" />,
  },
];

export function CompensationVisual() {
  return (
    <ProductFrame
      title="NeevHR · Compensation · Increment cycle · effective 01 Oct 2026"
      floaters={floaters}
      actions={<><WinButton>Cost model</WinButton><WinButton primary>Generate letters</WinButton></>}
    >
      <div className="grid grid-cols-[1fr_224px] gap-4">
        <div>
          <div className="rounded-xl border border-line bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-ink">Merit matrix</p>
              <span className="text-xs text-muted">increment % · budget 9.0%</span>
            </div>
            <table className="mt-3 w-full border-separate border-spacing-1 text-center">
              <thead>
                <tr>
                  <th className="text-[10px] font-semibold uppercase text-muted" />
                  {bands.map((b) => (
                    <th key={b} className="text-[10px] font-semibold uppercase text-muted">
                      {b}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ratings.map((r, i) => (
                  <tr key={r}>
                    <td className="text-xs font-semibold text-ink">{r}</td>
                    {matrix[i].map((v, j) => {
                      const h = heat(v);
                      const on = i === focus.r && j === focus.b;
                      return (
                        <td
                          key={j}
                          className={`tnum rounded-md py-2 text-[13px] font-bold ${on ? "ring-2 ring-[#5B45E8]" : ""}`}
                          style={{ background: h.bg, color: h.fg }}
                        >
                          {v ? `${v}%` : "-"}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-[11px] leading-snug text-muted">
              Below-band (under-paid) high performers earn the most, the pay-equity lever.
            </p>
          </div>

          <div className="mt-3 rounded-xl border border-line bg-white p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-ink">Budget burn-down</span>
              <span className="tnum text-muted">₹1.88 Cr of ₹2.14 Cr</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-soft">
              <div className="h-full rounded-full bg-success" style={{ width: "88%" }} />
            </div>
            <p className="mt-1.5 text-[11px] font-medium text-success-dark">₹26 L left in pool</p>
          </div>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">Manager envelopes</p>
          <p className="text-[10px] text-muted">used of allocated</p>
          <div className="mt-3 space-y-3">
            {envelopes.map(([d, used, cap, pct]) => (
              <div key={d}>
                <div className="flex justify-between text-[11px]">
                  <span className="text-body">{d}</span>
                  <span className="tnum text-ink">{used} / {cap}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-surface-soft">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
