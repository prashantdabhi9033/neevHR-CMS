import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// Designed attendance mock: one employee's September 2026 month grid (01 Sep 2026 is a Tuesday) beside the
// ADMS biometric device panel. Lifted pieces: a missed-punch regularisation awaiting the manager, a device
// coming back online with its buffered punches, and pay-at-risk flagged before payroll.
type S = "p" | "l" | "w" | "wo" | "m" | "f" | "x";
// x = padding (before month start), f = future day (today is 28 Sep 2026)
const days: S[] = [
  "x", "p", "p", "p", "p", "wo", "wo",
  "p", "p", "p", "l", "p", "wo", "wo",
  "p", "p", "w", "p", "p", "wo", "wo",
  "p", "p", "m", "p", "p", "wo", "wo",
  "p", "f", "f",
];
const TODAY = 28;

const tone: Record<S, string> = {
  p: "bg-success text-white",
  l: "bg-amber-400 text-white",
  w: "bg-brand text-white",
  wo: "bg-line text-muted",
  m: "bg-white text-amber-600 ring-2 ring-inset ring-amber-400",
  f: "border border-dashed border-slate-200 bg-white text-slate-300",
  x: "bg-transparent text-transparent",
};

const legend: [S, string][] = [
  ["p", "Present"],
  ["w", "Work from home"],
  ["l", "Leave"],
  ["m", "Missed punch"],
  ["wo", "Week off"],
];

const devices = [
  ["eSSL · Gate 1", "09:52"],
  ["eSSL · Gate 2", "09:51"],
  ["ZKTeco · Plant gate", "09:52"],
  ["Matrix · Warehouse", "09:50"],
];

// Lifted pieces: the regularisation decision, the ADMS device sync and pay at risk.
const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 96 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Regularisation · awaiting you" title="Aarav Shah" meta="Wed 23 Sep 2026 · shift 09:30-18:30" tag={<Tag tone="warning">Missed punch</Tag>}>
        <Rows rows={[["In-punch", "09:41 · eSSL Gate 1"], ["Out-punch", "Missing"], ["Requested out", "18:52"]]} total={["Worked if approved", "9h 11m"]} />
        <p className="mt-2.5 text-[11.5px] text-slate-500">Reason: left through the basement exit, no reader there.</p>
        <Actions primary="Approve" secondary="Reject" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast tone="info" glyph="↻" title="Plant gate device back online" sub="ZKTeco · 64 buffered punches via ADMS" />,
  },
  {
    width: 280,
    pos: { left: 256, top: 0 },
    node: <Chip badge="LOP" tone="warning" title="Pay at risk · 9 people" sub="14 unjustified days · Sep payroll" />,
  },
];

export function AttendanceVisual() {
  let dateNum = 0;
  return (
    <ProductFrame
      title="NeevHR · Attendance · September 2026"
      floaters={floaters}
      actions={<><WinButton>Muster roll</WinButton><WinButton primary>Regularisations</WinButton></>}
    >
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="Present" value="94.6%" sub="this month" tone="accent" />
        <StatTile label="Avg in-time" value="09:34" sub="grace 09:45" />
        <StatTile label="On leave today" value="7" sub="of 201" />
      </Soft>

      <div className="mt-4 grid grid-cols-[1fr_212px] gap-4">
        <div className="rounded-xl border border-line bg-white p-4">
          <div className="mb-3 flex items-baseline justify-between">
            <p className="text-sm font-semibold text-ink">Aarav Shah · AIK042</p>
            <p className="text-[11px] text-muted">General shift</p>
          </div>
          <div className="mb-1.5 grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold uppercase text-muted">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {days.map((s, i) => {
              if (s !== "x") dateNum += 1;
              const today = s !== "x" && dateNum === TODAY;
              return (
                <div
                  key={i}
                  className={`tnum flex h-10 items-center justify-center rounded-md text-xs font-semibold ${tone[s]} ${
                    today ? "ring-2 ring-[#5B45E8] ring-offset-2" : ""
                  }`}
                >
                  {s === "x" ? "" : dateNum}
                </div>
              );
            })}
          </div>
          <div className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5">
            {legend.map(([s, label]) => (
              <span key={s} className="flex items-center gap-1.5 text-xs text-body">
                <span className={`h-2.5 w-2.5 rounded-sm ${tone[s]}`} />
                {label}
              </span>
            ))}
          </div>
          <p className="tnum mt-2.5 text-[11px] text-muted">To date: 17 present · 1 WFH · 1 leave · 1 missed punch</p>
        </div>

        <Soft className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Biometric devices</p>
          <p className="text-[11px] text-muted">ADMS push · last seen</p>
          <div className="mt-3 space-y-2.5">
            {devices.map(([name, seen]) => (
              <div key={name} className="flex items-center justify-between gap-2 text-[12px]">
                <span className="flex min-w-0 items-center gap-1.5 text-body">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-success" />
                  <span className="truncate">{name}</span>
                </span>
                <span className="tnum text-muted">{seen}</span>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
