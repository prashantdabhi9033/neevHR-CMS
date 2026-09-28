import { Avatar, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Rostering means planning TIME for a team: who works which shift on which day, within the working-time
// rules. So the image is the week board itself, no app chrome: people x days with coloured shift chips,
// a shift swap drawn as an arrow between two cells, and a weekly-hours gauge per person against the
// 48 h cap. Shifts: MOR 06:00-14:30 and AFT 14:00-22:30 = 8.5 h, GEN 09:30-18:30 = 9 h, NGT 22:00-06:00 = 8 h.
// Rohan 3 GEN + 2 AFT = 44, Isha 4 MOR = 34, Kavya 4 GEN + 1 AFT = 44.5, Arjun 5 AFT = 42.5,
// Sahil on the Continental rotation 4 x 8.5 + 2 x 8 = 50 (over 48), Meera 5 GEN = 45, Vikram 5 NGT = 40,
// Neha 5 x 8.5 = 42.5. Swap on Wed: Rohan GEN -> AFT, Kavya AFT -> GEN; shortest rest after it is
// Kavya's 18:30 Wed to 09:30 Thu = 15 h, above the 11 h rule.

type Cell = "MOR" | "GEN" | "AFT" | "NGT" | "O" | "L";
const SHIFT: Record<Cell, { label: string; time: string; bg: string; fg: string; bar: string }> = {
  MOR: { label: "Morning", time: "06:00", bg: "#DDF3FB", fg: "#0E6A8A", bar: "#0EA5E9" },
  GEN: { label: "General", time: "09:30", bg: "#E4E8FF", fg: "#15147B", bar: "#15147B" },
  AFT: { label: "Afternoon", time: "14:00", bg: "#FFEFD9", fg: "#B45309", bar: "#E88938" },
  NGT: { label: "Night", time: "22:00", bg: "#EDE7FF", fg: "#5B21B6", bar: "#5B45E8" },
  O: { label: "Week off", time: "", bg: "transparent", fg: "#94A3B8", bar: "transparent" },
  L: { label: "Leave", time: "", bg: "#FEF3C7", fg: "#92400E", bar: "#F59E0B" },
};

const people: { ini: string; name: string; code: string; week: Cell[]; hours: number }[] = [
  { ini: "RN", name: "Rohan Nair", code: "AIK071", week: ["GEN", "GEN", "GEN", "AFT", "AFT", "O", "O"], hours: 44 },
  { ini: "ID", name: "Isha Desai", code: "AIK194", week: ["MOR", "MOR", "L", "MOR", "MOR", "O", "O"], hours: 34 },
  { ini: "KM", name: "Kavya Mehta", code: "AIK099", week: ["GEN", "GEN", "AFT", "GEN", "GEN", "O", "O"], hours: 44.5 },
  { ini: "AR", name: "Arjun Reddy", code: "AIK122", week: ["O", "O", "AFT", "AFT", "AFT", "AFT", "AFT"], hours: 42.5 },
  { ini: "SJ", name: "Sahil Jain", code: "AIK197", week: ["MOR", "MOR", "AFT", "AFT", "NGT", "NGT", "O"], hours: 50 },
  { ini: "MP", name: "Meera Pillai", code: "AIK148", week: ["O", "GEN", "GEN", "GEN", "O", "GEN", "GEN"], hours: 45 },
  { ini: "VS", name: "Vikram Singh", code: "AIK163", week: ["NGT", "O", "NGT", "NGT", "O", "NGT", "NGT"], hours: 40 },
  { ini: "NK", name: "Neha Kulkarni", code: "AIK176", week: ["O", "AFT", "AFT", "AFT", "O", "MOR", "MOR"], hours: 42.5 },
];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const CAP = 48;
const required = [6, 6, 6, 6, 6, 4, 4];
const assigned = days.map((_, d) => people.filter((p) => p.week[d] !== "O" && p.week[d] !== "L").length);

// Board geometry (design px) so the swap arrow can be drawn over exact cells.
const NAME_W = 164;
const CELL_W = 64;
const HOURS_W = 128;
const GAP = 6;
const ROW_H = 46;
const COLS = `${NAME_W}px repeat(7, ${CELL_W}px) ${HOURS_W}px`;
const cellX = (d: number) => NAME_W + GAP + d * (CELL_W + GAP);
const rowY = (r: number) => r * (ROW_H + GAP);

// The swap under review: Rohan (row 0) and Kavya (row 2) exchange shifts on Wed 23 Sep 2026.
const SWAP_DAY = 2;
const SWAP_ROWS = [0, 2];

function ShiftChip({ c, swap }: { c: Cell; swap: boolean }) {
  const s = SHIFT[c];
  if (c === "O") {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-slate-300 text-[10.5px] font-medium text-slate-400">
        Off
      </div>
    );
  }
  return (
    <div
      className={`relative flex h-full flex-col justify-center overflow-hidden rounded-lg pl-2.5 ${swap ? "ring-2 ring-[#5B45E8] ring-offset-2 ring-offset-[#EEF4FF]" : ""}`}
      style={{ background: s.bg, color: s.fg }}
    >
      <span className="absolute inset-y-0 left-0 w-[3px]" style={{ background: s.bar }} />
      <span className="text-[11px] font-semibold leading-tight">{c === "L" ? "Leave" : c}</span>
      {s.time && <span className="tnum text-[10.5px] leading-tight opacity-75">{s.time}</span>}
    </div>
  );
}

function HoursGauge({ hours }: { hours: number }) {
  const over = hours > CAP;
  const max = 56;
  return (
    <div className="pl-3">
      <div className="flex items-baseline justify-between">
        <span className={`tnum text-[13px] font-bold ${over ? "text-red-600" : "text-ink"}`}>{hours} h</span>
        {over && <span className="rounded-full bg-red-100 px-1.5 py-px text-[10.5px] font-semibold text-red-700">over 48</span>}
      </div>
      <div className="relative mt-1.5 h-1.5 rounded-full bg-white ring-1 ring-slate-200">
        <div className={`h-full rounded-full ${over ? "bg-red-500" : "bg-[#15147B]/70"}`} style={{ width: `${(hours / max) * 100}%` }} />
        <span className="absolute -top-1 h-3.5 w-[2px] rounded bg-slate-500" style={{ left: `${(CAP / max) * 100}%` }} />
      </div>
    </div>
  );
}

export function RosteringVisual() {
  const boardH = rowY(people.length) - GAP;
  const x0 = cellX(SWAP_DAY) + CELL_W;
  const [ya, yb] = SWAP_ROWS.map((r) => rowY(r) + ROW_H / 2);
  const bulge = x0 + 46;
  return (
    <VisualStage
      backdrop="sky"
      estHeight={640}
      padding={40}
      label="A NeevHR weekly shift roster: eight people across Monday to Sunday with morning, evening and night shifts, a shift swap between two people on Wednesday, and weekly hours against the 48 hour cap."
    >
      {/* Board header */}
      <div className="flex items-end justify-between">
        <div>
          <Eyebrow>Roster · Vatva plant · Packing line</Eyebrow>
          <p className="mt-1 text-[22px] font-bold tracking-tight text-ink">Week of 21 Sep 2026</p>
        </div>
        <div className="flex items-center gap-3 pb-1">
          {(["MOR", "GEN", "AFT", "NGT", "L"] as Cell[]).map((c) => (
            <span key={c} className="flex items-center gap-1.5 text-[11px] text-slate-600">
              <span className="h-3 w-3 rounded-[4px]" style={{ background: SHIFT[c].bg, boxShadow: `inset 3px 0 0 ${SHIFT[c].bar}` }} />
              {SHIFT[c].label}
            </span>
          ))}
        </div>
      </div>

      {/* Day header */}
      <div className="mt-6 grid items-end" style={{ gridTemplateColumns: COLS, columnGap: GAP }}>
        <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-400">Team · 8</span>
        {days.map((d, i) => (
          <div key={d} className={`text-center ${i === SWAP_DAY ? "text-[#4A34D1]" : i > 4 ? "text-slate-400" : "text-slate-600"}`}>
            <p className="text-[10.5px] font-semibold uppercase tracking-wider">{d}</p>
            <p className="tnum text-[15px] font-bold leading-tight">{21 + i}</p>
          </div>
        ))}
        <span className="pl-3 text-[10.5px] font-semibold uppercase tracking-wider text-slate-400">Weekly hours</span>
      </div>

      {/* Rows + swap overlay */}
      <div className="relative mt-3">
        <div className="flex flex-col" style={{ rowGap: GAP }}>
          {people.map((p, r) => (
            <div key={p.code} className="grid items-center" style={{ gridTemplateColumns: COLS, columnGap: GAP, height: ROW_H }}>
              <div className="flex min-w-0 items-center gap-2.5">
                <Avatar initials={p.ini} size={30} />
                <div className="min-w-0">
                  <p className="truncate text-[12.5px] font-semibold text-ink">{p.name}</p>
                  <p className="tnum text-[10.5px] text-slate-400">{p.code}</p>
                </div>
              </div>
              {p.week.map((c, d) => (
                <div key={d} style={{ height: ROW_H - 4 }}>
                  <ShiftChip c={c} swap={d === SWAP_DAY && SWAP_ROWS.includes(r)} />
                </div>
              ))}
              <HoursGauge hours={p.hours} />
            </div>
          ))}
        </div>

        <svg className="pointer-events-none absolute left-0 top-0" width={NAME_W + 7 * (CELL_W + GAP) + HOURS_W} height={boardH} fill="none" aria-hidden>
          <defs>
            <marker id="rs-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" fill="#5B45E8" />
            </marker>
          </defs>
          <path d={`M${x0 + 4} ${ya} C ${bulge} ${ya}, ${bulge} ${yb}, ${x0 + 4} ${yb}`} stroke="#EEF4FF" strokeWidth="7" strokeLinecap="round" />
          <path
            d={`M${x0 + 6} ${ya} C ${bulge} ${ya}, ${bulge} ${yb}, ${x0 + 6} ${yb}`}
            stroke="#5B45E8"
            strokeWidth="2.2"
            strokeDasharray="5 4"
            markerStart="url(#rs-arrow)"
            markerEnd="url(#rs-arrow)"
          />
        </svg>

        {/* Swap label, anchored at the arrow's bulge */}
        <div
          className="absolute flex items-center gap-2 rounded-full bg-[#5B45E8] py-1 pl-1 pr-3 text-white shadow-[0_10px_24px_-10px_rgba(91,69,232,0.8)]"
          style={{ left: bulge - 12, top: (ya + yb) / 2 - 14 }}
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[10.5px] font-bold text-[#5B45E8]">⇅</span>
          <span className="whitespace-nowrap text-[11px] font-semibold">Swap request · rest 15 h, rule 11 h</span>
        </div>
      </div>

      {/* Coverage row */}
      <div className="mt-4 grid items-center border-t border-[#15147B]/10 pt-3" style={{ gridTemplateColumns: COLS, columnGap: GAP }}>
        <div>
          <p className="text-[12px] font-semibold text-ink">Coverage</p>
          <p className="text-[10.5px] text-slate-400">assigned / required</p>
        </div>
        {assigned.map((a, i) => (
          <span
            key={i}
            className={`tnum rounded-lg py-1.5 text-center text-[12px] font-semibold ${
              a < required[i] ? "bg-red-50 text-red-600 ring-1 ring-red-200" : "bg-white text-emerald-700 ring-1 ring-emerald-200"
            }`}
          >
            {a}/{required[i]}
          </span>
        ))}
        <span />
      </div>

      {/* Publish gate */}
      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-[#15147B]/[0.08]">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-red-100 text-[13px] font-bold text-red-600">!</span>
        <p className="flex-1 text-[12.5px] text-slate-600">
          <b className="font-semibold text-ink">This roster breaches 1 working-time rule:</b> Sahil Jain, weekly hours 50 exceed 48.
        </p>
        <span className="rounded-full bg-[#EDE7FF] px-2.5 py-1 text-[11px] font-semibold text-[#5B21B6]">Continental · MOR MOR AFT AFT NGT NGT OFF</span>
      </div>
    </VisualStage>
  );
}
