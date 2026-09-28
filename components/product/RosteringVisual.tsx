import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Avatar, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's weekly shift-roster grid: employees x Mon-Sun, coloured shift chips, off/leave
// states, weekly hours, and assigned-vs-required coverage. Lifted pieces: a shift swap checked against the
// working-time rules, a rotation pattern just applied, and the weekly-cap breach that blocks publishing.
type Cell = "M" | "E" | "N" | "O" | "L";
const shifts: Record<Cell, { label: string; time: string; bg: string; fg: string }> = {
  M: { label: "Morning", time: "09:30", bg: "rgba(21,20,123,0.10)", fg: "var(--color-brand)" },
  E: { label: "Evening", time: "14:00", bg: "rgba(245,158,11,0.16)", fg: "#b45309" },
  N: { label: "Night", time: "22:00", bg: "rgba(139,92,246,0.14)", fg: "#7c3aed" },
  O: { label: "Off", time: "", bg: "var(--color-surface-soft)", fg: "var(--color-muted)" },
  L: { label: "Leave", time: "", bg: "rgba(245,158,11,0.10)", fg: "#b45309" },
};

// Morning and evening shifts are 9 h, nights 10 h.
const rows: { name: string; code: string; week: Cell[]; hours: number }[] = [
  { name: "Rohan Nair", code: "AIK071", week: ["M", "M", "M", "M", "M", "O", "O"], hours: 45 },
  { name: "Kavya Mehta", code: "AIK099", week: ["E", "E", "E", "O", "E", "E", "O"], hours: 45 },
  { name: "Sahil Jain", code: "AIK197", week: ["N", "N", "O", "N", "N", "N", "O"], hours: 50 },
  { name: "Isha Desai", code: "AIK194", week: ["M", "M", "L", "M", "M", "O", "O"], hours: 36 },
  { name: "Arjun Reddy", code: "AIK122", week: ["O", "O", "E", "E", "E", "E", "E"], hours: 45 },
  { name: "Meera Pillai", code: "AIK148", week: ["O", "M", "M", "M", "O", "M", "M"], hours: 45 },
  { name: "Vikram Singh", code: "AIK163", week: ["N", "O", "N", "O", "O", "N", "N"], hours: 40 },
  { name: "Neha Kulkarni", code: "AIK176", week: ["O", "E", "E", "E", "O", "M", "M"], hours: 45 },
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const required = [6, 6, 6, 6, 6, 4, 4];
const assigned = days.map((_, d) => rows.filter((r) => r.week[d] !== "O" && r.week[d] !== "L").length);
// The swap under review: Rohan and Kavya on Wed 23 Sep.
const SWAP_DAY = 2;
const SWAP = ["AIK071", "AIK099"];
const COLS = "grid-cols-[132px_repeat(7,1fr)_44px]";

// Lifted pieces: the swap decision, the rotation just applied, the weekly-cap block.
const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 104 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Shift swap request" title="Wed 23 Sep 2026" meta="Neither party can approve it" tag={<Tag tone="success">Rules pass</Tag>}>
        <div className="space-y-2">
          {[
            ["RN", "Rohan Nair", "Morning → Evening 14:00"],
            ["KM", "Kavya Mehta", "Evening → Morning 09:30"],
          ].map(([ini, name, change]) => (
            <div key={ini} className="flex items-center gap-2.5">
              <Avatar initials={ini} size={28} />
              <div className="min-w-0">
                <p className="text-[12.5px] font-semibold text-ink">{name}</p>
                <p className="text-[11px] text-slate-500">{change}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <Rows rows={[["Shortest rest after swap", "10h 30m"], ["Rest rule (min)", "10h"], ["Weekly hours", "45 h each, unchanged"]]} />
        </div>
        <Actions primary="Approve swap" secondary="Reject" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="brand" glyph="↻" title="Night crew rotation applied" sub="N-N-O-N-N-N-O · week of 28 Sep 2026" />,
  },
  {
    width: 276,
    pos: { left: 258, top: 0 },
    node: <Chip badge="48h" tone="error" title="Sahil Jain · 50 h of 48 h" sub="Publish blocked until resolved" />,
  },
];

export function RosteringVisual() {
  return (
    <ProductFrame
      title="NeevHR · Shifts & roster · Week of 21 Sep 2026"
      floaters={floaters}
      actions={<><WinButton>Apply rotation</WinButton><WinButton primary>Publish</WinButton></>}
    >
      <div className="rounded-xl border border-line bg-white p-3">
        {/* header */}
        <div className={`grid ${COLS} gap-1 text-center`}>
          <span className="text-left text-[10px] font-semibold uppercase text-muted">Employee</span>
          {days.map((d, i) => (
            <span key={d} className={`text-[10px] font-semibold uppercase ${i > 4 ? "text-red-400" : "text-muted"}`}>
              {d} <span className="tnum">{21 + i}</span>
            </span>
          ))}
          <span className="text-[10px] font-semibold uppercase text-muted">Hrs</span>
        </div>

        {/* rows */}
        <div className="mt-1.5 space-y-1">
          {rows.map((r) => (
            <div key={r.code} className={`grid ${COLS} items-center gap-1`}>
              <div className="min-w-0">
                <p className="truncate text-[11.5px] font-semibold text-ink">{r.name}</p>
                <p className="text-[9.5px] text-muted">{r.code}</p>
              </div>
              {r.week.map((c, i) => {
                const s = shifts[c];
                const swap = i === SWAP_DAY && SWAP.includes(r.code);
                return (
                  <div
                    key={i}
                    className={`flex h-9 flex-col items-center justify-center rounded-md text-[9.5px] font-semibold leading-tight ${
                      swap ? "outline-2 outline-offset-1 outline-dashed outline-[#5B45E8]" : ""
                    }`}
                    style={{ background: s.bg, color: s.fg }}
                  >
                    <span>{s.label.slice(0, c === "O" || c === "L" ? 5 : 3)}</span>
                    {s.time && <span className="tnum opacity-80">{s.time}</span>}
                  </div>
                );
              })}
              <span className={`tnum text-center text-[11.5px] font-semibold ${r.hours > 48 ? "text-red-500" : "text-ink"}`}>
                {r.hours}
              </span>
            </div>
          ))}
        </div>

        {/* coverage: assigned vs required */}
        <div className={`mt-2 grid ${COLS} items-center gap-1 border-t border-line pt-2`}>
          <span className="text-[11px] font-semibold text-ink">Coverage</span>
          {assigned.map((a, i) => (
            <span
              key={i}
              className={`tnum rounded-md py-1 text-center text-[10.5px] font-semibold ${
                a < required[i] ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-700"
              }`}
            >
              {a}/{required[i]}
            </span>
          ))}
          <span />
        </div>
      </div>

      <Soft className="mt-3 flex flex-wrap gap-3">
        {(["M", "E", "N", "O", "L"] as Cell[]).map((c) => (
          <span key={c} className="flex items-center gap-1.5 text-[11px] text-body">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: shifts[c].bg, boxShadow: `inset 0 0 0 1px ${shifts[c].fg}` }} />
            {shifts[c].label}
          </span>
        ))}
      </Soft>
    </ProductFrame>
  );
}
