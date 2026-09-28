import { Avatar, Card, VisualStage } from "@/components/visuals/Stage";

// An org chart is a map of people, so the image is the canvas itself: no app window, just the tree on
// a dotted board with the chart's own tools (entity, as-of date, dotted lines, open seats, zoom). One
// manager is mid-drag from Isha's team to Jay's, a dotted line crosses subtrees and the workforce plan's
// open seats sit in the tree as dashed nodes. Reports read "direct / total"; 84 + 52 + 61 + 3 VPs = 200.

type Pos = { left: number; top: number };

const W = 800; // content width (stage 880 - 2 x 40 padding)
const COLS = [140, 400, 660]; // VP column centres
const VP_TOP = 196;
const VP_H = 80;
const MGR_TOP = 330;
const MGR_H = 46;
const MGR_GAP = 10;
const mgrTop = (row: number) => MGR_TOP + row * (MGR_H + MGR_GAP);

function PersonNode({ initials, name, role, reports, pos, root = false, target = false }: {
  initials: string; name: string; role: string; reports: string; pos: Pos; root?: boolean; target?: boolean;
}) {
  return (
    <div
      className={`absolute flex w-[160px] items-center gap-2.5 rounded-2xl border bg-white px-3 py-3 shadow-[0_10px_24px_-14px_rgba(21,20,123,0.45)] ${
        root ? "border-[#15147B]/40" : target ? "border-[#5B45E8] ring-4 ring-[#5B45E8]/15" : "border-slate-200"
      }`}
      style={{ ...pos, height: VP_H }}
    >
      <Avatar initials={initials} size={36} />
      <div className="min-w-0">
        <p className="truncate text-[13px] font-semibold text-ink">{name}</p>
        <p className="truncate text-[11px] text-slate-500">{role}</p>
        <span className="tnum mt-1 inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[10.5px] font-semibold text-slate-600">{reports}</span>
      </div>
    </div>
  );
}

function Mgr({ name, role, pos, kind = "person" }: { name: string; role: string; pos: Pos; kind?: "person" | "ghost" | "open" | "drop" }) {
  const look = {
    person: "border-slate-200 bg-white",
    ghost: "border-dashed border-slate-300 bg-white/50 opacity-60",
    open: "border-dashed border-[#E88938] bg-[#FFF7EF]",
    drop: "border-dashed border-[#5B45E8] bg-[#EEEAFE]",
  }[kind];
  return (
    <div className={`absolute w-[150px] rounded-xl border px-3 py-2 ${look}`} style={{ ...pos, height: MGR_H }}>
      <p className={`truncate text-[12px] font-semibold ${kind === "open" ? "text-[#B45309]" : kind === "drop" ? "text-[#4A34D1]" : "text-ink"}`}>{name}</p>
      <p className={`truncate text-[10.5px] ${kind === "open" ? "text-[#B45309]/80" : kind === "drop" ? "text-[#4A34D1]/80" : "text-slate-500"}`}>{role}</p>
    </div>
  );
}

function Toolbar() {
  return (
    <Card className="absolute left-0 right-0 top-0 flex h-[46px] items-center gap-2 px-3 text-[12px]">
      <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 font-semibold text-ink">Aikyora Pvt Ltd</span>
      <span className="rounded-lg border border-slate-200 px-2.5 py-1.5 text-slate-600">
        As of <b className="text-ink">28 Sep 2026</b>
      </span>
      <span className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-slate-600">
        <span className="h-0 w-4 border-t-2 border-dashed border-[#0EA5E9]" /> Dotted lines
      </span>
      <span className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 py-1.5 text-slate-600">
        <span className="h-2.5 w-2.5 rounded-sm border border-dashed border-[#E88938]" /> Open seats
      </span>
      <span className="ml-auto flex items-center overflow-hidden rounded-lg border border-slate-200 text-slate-600">
        <span className="px-2.5 py-1 text-[14px] leading-none">−</span>
        <span className="tnum border-x border-slate-200 px-2.5 py-1.5 text-[11px] font-semibold">100%</span>
        <span className="px-2.5 py-1 text-[14px] leading-none">+</span>
      </span>
    </Card>
  );
}

export function OrgVisual() {
  const line = "#C7CBE0";
  const ceoBottom = 70 + VP_H;
  const bus = 172;
  const lastRow = mgrTop(2) + MGR_H / 2;
  return (
    <VisualStage
      width={880}
      estHeight={660}
      backdrop="canvas"
      label="The NeevHR org chart as a canvas: reporting tree, a manager being dragged to a new VP, a dotted-line relationship and open seats from the workforce plan."
    >
      <div className="relative" style={{ width: W, height: 580 }}>
        {/* connectors */}
        <svg className="absolute inset-0" width={W} height={580} fill="none" aria-hidden>
          <path d={`M400 ${ceoBottom} V${bus} M${COLS[0]} ${bus} H${COLS[2]}`} stroke={line} strokeWidth="2" />
          {COLS.map((x) => (
            <g key={x}>
              <path d={`M${x} ${bus} V${VP_TOP}`} stroke={line} strokeWidth="2" />
              <path d={`M${x} ${VP_TOP + VP_H} V${x === COLS[1] ? mgrTop(3) : lastRow}`} stroke={line} strokeWidth="2" />
            </g>
          ))}
          {/* dotted line: Harsh Vora (Operations) also reports to Jay Shukla (Sales) */}
          <path
            d={`M${COLS[2] - 75} ${mgrTop(1) + MGR_H / 2} C 540 ${mgrTop(1) + MGR_H / 2}, 540 ${VP_TOP + VP_H / 2}, ${COLS[1] + 80} ${VP_TOP + VP_H / 2}`}
            stroke="#0EA5E9"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
          {/* drag path from the ghost slot to the drop slot */}
          <path d={`M${COLS[0] + 75} ${mgrTop(1) + MGR_H / 2} C 260 ${mgrTop(1) + 40}, 280 ${mgrTop(3) - 10}, ${COLS[1] - 75} ${mgrTop(3) + MGR_H / 2}`} stroke="#5B45E8" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
        </svg>

        <Toolbar />

        <PersonNode initials="MB" name="Meera Batra" role="Chief Executive" reports="3 / 200" pos={{ left: 320, top: 70 }} root />
        <PersonNode initials="ID" name="Isha Desai" role="VP Engineering" reports="5 / 84" pos={{ left: COLS[0] - 80, top: VP_TOP }} />
        <PersonNode initials="JS" name="Jay Shukla" role="VP Sales" reports="4 / 52" pos={{ left: COLS[1] - 80, top: VP_TOP }} target />
        <PersonNode initials="KV" name="Komal Verma" role="VP Operations" reports="6 / 61" pos={{ left: COLS[2] - 80, top: VP_TOP }} />

        <Mgr name="Tanvi Joshi" role="Engineering Manager" pos={{ left: COLS[0] - 75, top: mgrTop(0) }} />
        <Mgr name="Nikhil Rao" role="Pre-sales lead" pos={{ left: COLS[0] - 75, top: mgrTop(1) }} kind="ghost" />
        <Mgr name="Open seat · 13" role="Engineering · from plan" pos={{ left: COLS[0] - 75, top: mgrTop(2) }} kind="open" />

        <Mgr name="Priya Iyer" role="Regional Sales" pos={{ left: COLS[1] - 75, top: mgrTop(0) }} />
        <Mgr name="Varun Sethi" role="Inside Sales" pos={{ left: COLS[1] - 75, top: mgrTop(1) }} />
        <Mgr name="Open seat · 6" role="Sales · from plan" pos={{ left: COLS[1] - 75, top: mgrTop(2) }} kind="open" />
        <Mgr name="Drop to reassign" role="Nikhil moves with 3 reports" pos={{ left: COLS[1] - 75, top: mgrTop(3) }} kind="drop" />

        <Mgr name="Deepa Menon" role="Plant Operations" pos={{ left: COLS[2] - 75, top: mgrTop(0) }} />
        <Mgr name="Harsh Vora" role="Supply chain" pos={{ left: COLS[2] - 75, top: mgrTop(1) }} />
        <Mgr name="Open seat · 7" role="Operations · from plan" pos={{ left: COLS[2] - 75, top: mgrTop(2) }} kind="open" />

        <span className="absolute rounded-full bg-[#E0F2FE] px-2 py-0.5 text-[10.5px] font-semibold text-[#0369A1]" style={{ left: 506, top: 300 }}>
          dotted line
        </span>

        {/* the manager being dragged */}
        <div className="absolute" style={{ left: 96, top: mgrTop(3) + 6, transform: "rotate(-4deg)" }}>
          <div className="flex items-center gap-2.5 whitespace-nowrap rounded-xl border border-[#5B45E8] bg-white px-3 py-2.5 shadow-[0_24px_40px_-14px_rgba(21,20,123,0.55)]">
            <Avatar initials="NR" size={30} />
            <div className="min-w-0">
              <p className="text-[12.5px] font-semibold text-ink">Nikhil Rao</p>
              <p className="text-[10.5px] text-slate-500">Pre-sales lead · 3 reports</p>
            </div>
          </div>
          <svg className="absolute -bottom-4 right-3" width="18" height="22" viewBox="0 0 18 22" aria-hidden>
            <path d="M1 1 L1 17 L5.5 13 L8.5 20 L11.5 18.6 L8.6 12 L14.5 12 Z" fill="#24242B" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        </div>

        <Card className="absolute bottom-0 right-0 flex items-center gap-5 px-4 py-2.5">
          {[
            ["201", "people"],
            ["5", "layers"],
            ["4.2", "avg span"],
            ["26", "open seats"],
          ].map(([v, l]) => (
            <p key={l} className="text-[11px] text-slate-500">
              <b className="tnum mr-1 text-[14px] text-ink">{v}</b>
              {l}
            </p>
          ))}
        </Card>
      </div>
    </VisualStage>
  );
}
