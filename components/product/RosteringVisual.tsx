import { ProductFrame } from "./ProductFrame";

// Mirrors the product's weekly shift-roster grid: employees x Mon-Sun,
// coloured shift chips, off/leave states, and a weekly hours column.
type Cell = "M" | "E" | "N" | "O" | "L";
const shifts: Record<Cell, { label: string; time: string; bg: string; fg: string }> = {
  M: { label: "Morning", time: "09:30", bg: "rgba(67,56,202,0.12)", fg: "var(--color-brand)" },
  E: { label: "Evening", time: "14:00", bg: "rgba(245,158,11,0.16)", fg: "#b45309" },
  N: { label: "Night", time: "22:00", bg: "rgba(139,92,246,0.14)", fg: "#7c3aed" },
  O: { label: "Off", time: "", bg: "var(--color-surface-soft)", fg: "var(--color-muted)" },
  L: { label: "Leave", time: "", bg: "rgba(245,158,11,0.10)", fg: "#b45309" },
};

const rows: { name: string; code: string; week: Cell[]; hours: number }[] = [
  { name: "Rohan Nair", code: "AIK071", week: ["M", "M", "M", "M", "M", "O", "O"], hours: 45 },
  { name: "Kavya Mehta", code: "AIK099", week: ["E", "E", "E", "O", "E", "E", "O"], hours: 45 },
  { name: "Sahil Jain", code: "AIK197", week: ["N", "N", "O", "N", "N", "N", "O"], hours: 50 },
  { name: "Isha Desai", code: "AIK194", week: ["M", "M", "L", "M", "M", "O", "O"], hours: 36 },
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function RosteringVisual() {
  return (
    <ProductFrame title="NeevHR · Shifts & roster · Week of 21 Sep 2026">
      <div className="overflow-x-auto">
        <div className="min-w-[420px]">
          {/* header */}
          <div className="grid grid-cols-[84px_repeat(7,1fr)_44px] gap-1 text-center">
            <span />
            {days.map((d, i) => (
              <span
                key={d}
                className={`text-[10px] font-semibold uppercase ${
                  i > 4 ? "text-red-400" : "text-muted"
                }`}
              >
                {d}
              </span>
            ))}
            <span className="text-[10px] font-semibold uppercase text-muted">Hrs</span>
          </div>

          {/* rows */}
          <div className="mt-1 space-y-1">
            {rows.map((r) => (
              <div
                key={r.code}
                className="grid grid-cols-[84px_repeat(7,1fr)_44px] items-center gap-1"
              >
                <div className="truncate">
                  <p className="truncate text-[11px] font-semibold text-ink">
                    {r.name.split(" ")[0]}
                  </p>
                  <p className="text-[9px] text-muted">{r.code}</p>
                </div>
                {r.week.map((c, i) => {
                  const s = shifts[c];
                  return (
                    <div
                      key={i}
                      className="flex h-9 flex-col items-center justify-center rounded-md text-[9px] font-semibold leading-tight"
                      style={{ background: s.bg, color: s.fg }}
                    >
                      <span>{s.label.slice(0, c === "O" || c === "L" ? 4 : 3)}</span>
                      {s.time && <span className="tnum opacity-80">{s.time}</span>}
                    </div>
                  );
                })}
                <span
                  className={`tnum text-center text-[11px] font-semibold ${
                    r.hours > 48 ? "text-red-500" : "text-ink"
                  }`}
                >
                  {r.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-3">
        {(["M", "E", "N", "O", "L"] as Cell[]).map((c) => (
          <span key={c} className="flex items-center gap-1.5 text-[11px] text-body">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: shifts[c].bg, boxShadow: `inset 0 0 0 1px ${shifts[c].fg}` }} />
            {shifts[c].label}
          </span>
        ))}
      </div>
    </ProductFrame>
  );
}
