import { ProductFrame, StatTile } from "./ProductFrame";

// Designed attendance mock: a month grid with day states + a summary.
type S = "p" | "l" | "w" | "wo" | "a" | "x";
// x = padding (before month start)
const days: S[] = [
  "x", "x", "p", "p", "p", "p", "wo",
  "wo", "p", "p", "l", "p", "p", "wo",
  "wo", "p", "w", "p", "p", "p", "wo",
  "wo", "p", "p", "p", "a", "p", "wo",
  "wo", "p", "p",
];

const tone: Record<S, string> = {
  p: "bg-accent text-white",
  l: "bg-amber-400 text-white",
  w: "bg-brand text-white",
  wo: "bg-line text-muted",
  a: "bg-red-400 text-white",
  x: "bg-transparent text-transparent",
};

const legend: [S, string][] = [
  ["p", "Present"],
  ["w", "Work from home"],
  ["l", "Leave"],
  ["a", "Absent"],
  ["wo", "Week off"],
];

export function AttendanceVisual() {
  let dateNum = 0;
  return (
    <ProductFrame title="NeevHR · Attendance · September 2026">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatTile label="Present" value="94.6%" sub="this month" tone="accent" />
        <StatTile label="Avg in-time" value="09:34" sub="grace 09:45" />
        <StatTile label="On leave today" value="7" sub="of 201" />
      </div>

      <div className="mt-4 rounded-xl border border-line p-4">
        <div className="mb-2 grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold uppercase text-muted">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((s, i) => {
            if (s !== "x") dateNum += 1;
            return (
              <div
                key={i}
                className={`tnum flex aspect-square items-center justify-center rounded-md text-xs font-semibold ${tone[s]}`}
              >
                {s === "x" ? "" : dateNum}
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {legend.map(([s, label]) => (
            <span key={s} className="flex items-center gap-1.5 text-xs text-body">
              <span className={`h-2.5 w-2.5 rounded-sm ${tone[s]}`} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </ProductFrame>
  );
}
