import { Avatar, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Projects mean the portfolio that time is booked against: each project with its client, billable flag,
// budget and rates, and who can book time. So the image is a canvas of project cards around the month's
// billable share, each wired in with a line as thick as the hours its members logged in September.
// Budgets = hours x bill rate: MER-PAY 1,200 x 2,400 = 28,80,000; ACM-PORT 900 x 2,200 = 19,80,000.
// Sep 2026 hours 186 + 124 + 64 + 0 = 374; billable 186 + 124 = 310; 310 / 374 = 82.9%.

type P = {
  code: string;
  name: string;
  client: string;
  billable: boolean;
  status: "Active" | "On hold";
  budgetH: string;
  budgetAmt?: string;
  bill?: string;
  cost: string;
  members: string[];
  more: number;
  sepH: number;
  color: string;
};
const projects: P[] = [
  { code: "MER-PAY", name: "Meridian Pay", client: "Meridian Bank", billable: true, status: "Active", budgetH: "1,200 h", budgetAmt: "₹28,80,000", bill: "₹2,400", cost: "₹1,150", members: ["RS", "KM", "AR"], more: 6, sepH: 186, color: "#15147B" },
  { code: "ACM-PORT", name: "Acme Portal", client: "Acme Retail", billable: true, status: "Active", budgetH: "900 h", budgetAmt: "₹19,80,000", bill: "₹2,200", cost: "₹1,050", members: ["NK", "MP"], more: 4, sepH: 124, color: "#5B45E8" },
  { code: "INT-OPS", name: "Internal ops", client: "Internal", billable: false, status: "Active", budgetH: "400 h", cost: "₹900", members: ["ID", "VS", "SJ"], more: 9, sepH: 64, color: "#94A3B8" },
  { code: "NOV-APP", name: "Nova App", client: "Internal", billable: false, status: "On hold", budgetH: "300 h", cost: "₹950", members: ["AR"], more: 2, sepH: 0, color: "#CBD5E1" },
];
const TOTAL_H = projects.reduce((a, p) => a + p.sepH, 0); // 374
const BILL_H = projects.filter((p) => p.billable).reduce((a, p) => a + p.sepH, 0); // 310

// Canvas geometry (design px)
const BOARD_W = 800;
const BOARD_H = 470;
const CARD_W = 262;
const CARD_H = 212;
const pos = [
  { x: 0, y: 0 },
  { x: BOARD_W - CARD_W, y: 0 },
  { x: 0, y: BOARD_H - CARD_H },
  { x: BOARD_W - CARD_W, y: BOARD_H - CARD_H },
];
const C = { x: BOARD_W / 2, y: BOARD_H / 2 };
const R = 78;

function ProjectCard({ p }: { p: P }) {
  const hold = p.status === "On hold";
  return (
    <div className={`h-full rounded-2xl border border-white bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.06),0_12px_32px_-12px_rgba(21,20,123,0.25)] ${hold ? "opacity-80" : ""}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="tnum text-[10.5px] font-semibold tracking-wider text-slate-400">{p.code}</p>
          <p className="truncate text-[15px] font-bold text-ink">{p.name}</p>
          <p className="text-[11px] text-slate-500">{p.client}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className={`rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${p.billable ? "bg-[#E4E8FF] text-[#15147B]" : "bg-slate-100 text-slate-600"}`}>
            {p.billable ? "Billable" : "Non-billable"}
          </span>
          <span className={`text-[10.5px] font-semibold ${hold ? "text-[#B45309]" : "text-[#047857]"}`}>● {p.status}</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 rounded-xl bg-slate-50 p-2.5 text-[11px]">
        <div>
          <p className="text-slate-400">Budget hours</p>
          <p className="tnum font-semibold text-ink">{p.budgetH}</p>
        </div>
        <div>
          <p className="text-slate-400">Budget amount</p>
          <p className="tnum font-semibold text-ink">{p.budgetAmt ?? "-"}</p>
        </div>
        <div>
          <p className="text-slate-400">Bill rate / hour</p>
          <p className="tnum font-semibold text-ink">{p.bill ?? "-"}</p>
        </div>
        <div>
          <p className="text-slate-400">Cost rate / hour</p>
          <p className="tnum font-semibold text-ink">{p.cost}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center">
          {p.members.map((m, i) => (
            <span key={m} style={{ marginLeft: i ? -6 : 0 }}>
              <Avatar initials={m} size={24} ring />
            </span>
          ))}
          <span className="ml-1.5 text-[10.5px] text-slate-500">+{p.more} members</span>
        </div>
        <span className="tnum text-[12px] font-bold" style={{ color: !p.sepH ? "#94A3B8" : p.billable ? p.color : "#475569" }}>
          {p.sepH} h in Sep
        </span>
      </div>
    </div>
  );
}

const CIRC = 2 * Math.PI * R;
// Donut segments: each project's share of the month's hours, laid end to end.
const segments = projects
  .filter((p) => p.sepH)
  .map((p, i, arr) => ({
    p,
    len: (p.sepH / TOTAL_H) * CIRC,
    off: arr.slice(0, i).reduce((a, q) => a + (q.sepH / TOTAL_H) * CIRC, 0),
  }));

function Hub() {
  return (
    <div className="absolute grid place-items-center" style={{ left: C.x - 110, top: C.y - 110, width: 220, height: 220 }}>
      <div className="absolute inset-[18px] rounded-full bg-white shadow-[0_18px_40px_-18px_rgba(21,20,123,0.45)]" />
      <svg width="220" height="220" viewBox="0 0 220 220" className="absolute -rotate-90" aria-hidden>
        <circle cx="110" cy="110" r={R} stroke="#F1F5F9" strokeWidth="16" fill="none" />
        {segments.map(({ p, len, off }) => (
          <circle key={p.code} cx="110" cy="110" r={R} stroke={p.color} strokeWidth="16" fill="none" strokeDasharray={`${len - 3} ${CIRC - len + 3}`} strokeDashoffset={-off} />
        ))}
      </svg>
      <div className="relative text-center">
        <p className="tnum text-[30px] font-bold leading-none tracking-tight text-[#15147B]">82.9%</p>
        <p className="mt-1 text-[11px] font-semibold text-ink">Billable share</p>
        <p className="tnum text-[10.5px] text-slate-500">
          {BILL_H} of {TOTAL_H} h · Sep 2026
        </p>
      </div>
    </div>
  );
}

export function ProjectsVisual() {
  const maxH = Math.max(...projects.map((p) => p.sepH));
  return (
    <VisualStage
      backdrop="canvas"
      estHeight={640}
      padding={40}
      label="A canvas of four NeevHR projects with client, billable flag, budget hours and amount, bill and cost rates and members, each connected to the September billable share by a line sized by the hours logged."
    >
      <div className="mb-6 flex items-end justify-between">
        <div>
          <Eyebrow>Projects · Aikyora Pvt Ltd</Eyebrow>
          <p className="mt-1 text-[22px] font-bold tracking-tight text-ink">Where September&apos;s hours went</p>
        </div>
        <p className="pb-1 text-[11.5px] text-slate-500">Lines sized by hours from submitted and approved timesheets</p>
      </div>
      <div className="relative" style={{ width: BOARD_W, height: BOARD_H }}>
        <svg className="absolute inset-0" width={BOARD_W} height={BOARD_H} fill="none" aria-hidden>
          {projects.map((p, i) => {
            const left = pos[i].x === 0;
            const sx = left ? CARD_W : BOARD_W - CARD_W;
            const sy = pos[i].y + CARD_H / 2;
            const ex = C.x + (left ? -R - 8 : R + 8);
            const ey = C.y + (sy < C.y ? -30 : 30);
            const w = p.sepH ? 3 + (p.sepH / maxH) * 11 : 1.5;
            const mx = (sx + ex) / 2;
            return (
              <path
                key={p.code}
                d={`M${sx} ${sy} C ${mx} ${sy}, ${mx} ${ey}, ${ex} ${ey}`}
                stroke={p.sepH ? p.color : "#94A3B8"}
                strokeOpacity={p.sepH ? 0.55 : 0.8}
                strokeWidth={w}
                strokeLinecap="round"
                strokeDasharray={p.sepH ? undefined : "4 5"}
              />
            );
          })}
        </svg>
        {projects.map((p, i) => (
          <div key={p.code} className="absolute" style={{ left: pos[i].x, top: pos[i].y, width: CARD_W, height: CARD_H }}>
            <ProjectCard p={p} />
          </div>
        ))}
        <Hub />
      </div>
    </VisualStage>
  );
}
