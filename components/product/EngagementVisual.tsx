import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Tag, Toast } from "@/components/showcase/parts";

// Designed engagement mock: eNPS over pulse waves, with the recognition feed alongside.
// Lifted pieces: a kudos being posted with a badge and audience, the pulse wave closing, and today's celebrations.
const series = [22, 28, 26, 34, 38, 42]; // eNPS over monthly pulse waves
const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const W = 340;
const H = 150;
const PAD = 14;
const max = 50;
const stepX = (W - PAD * 2) / (series.length - 1);
const x = (i: number) => PAD + i * stepX;
const y = (v: number) => H - (v / max) * (H - 20);
let d = `M ${x(0)} ${y(series[0])}`;
series.slice(1).forEach((v, i) => (d += ` L ${x(i + 1)} ${y(v)}`));

const feed = [
  { from: "Meera Pillai", to: "Arjun Patel", badge: "Customer first", note: "Turned around the Pune escalation in a day." },
  { from: "Rohan Desai", to: "Sneha Kulkarni", badge: "Above and beyond", note: "Covered two shifts during the audit week." },
  { from: "Nikhil Jain", to: "Farah Khan", badge: "Team player", note: "Onboarded 9 joiners without a single miss." },
];

const audiences = ["Recipient only", "Team", "Whole company"];

const floaters: Floater[] = [
  {
    width: 310,
    pos: { right: 0, top: 140 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Give kudos" title="To Ananya Iyer · Payroll" meta="from Vikram Shah" tag={<Tag tone="brand">Team player</Tag>}>
        <p className="rounded-xl bg-slate-50/80 p-3 text-[12px] leading-relaxed text-slate-700 ring-1 ring-slate-100">
          Closed the September payroll two days early with zero variances. Thank you!
        </p>
        <p className="mb-1.5 mt-3 text-[10.5px] font-semibold uppercase tracking-wider text-slate-400">Audience</p>
        <div className="flex gap-1.5">
          {audiences.map((a) => (
            <span
              key={a}
              className={`rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${
                a === "Whole company" ? "bg-[#5B45E8] text-white" : "bg-slate-100 text-slate-500"
              }`}
            >
              {a}
            </span>
          ))}
        </div>
        <Actions primary="Post kudos" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast tone="brand" glyph="↑" title="September pulse closed" sub="eNPS +42 · up 4 · 87% took part" />,
  },
  {
    width: 270,
    pos: { left: 270, top: 0 },
    node: <Chip badge="🎂" tone="warning" title="3 celebrations today" sub="2 birthdays · 1 work anniversary" />,
  },
];

export function EngagementVisual() {
  return (
    <ProductFrame title="NeevHR · Engagement · Culture hub" floaters={floaters} actions={<><WinButton>Announce</WinButton><WinButton primary>Give kudos</WinButton></>}>
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="eNPS" value="+42" sub="+4 vs last wave" tone="accent" />
        <StatTile label="Pulse participation" value="87%" sub="September wave" />
        <StatTile label="Kudos this month" value="312" />
      </Soft>

      <div className="mt-4 grid grid-cols-[1.15fr_1fr] gap-4">
        <div className="rounded-xl border border-line bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">eNPS trend</p>
            <span className="text-xs text-muted">Pulse waves · FY 2026-27</span>
          </div>
          <svg viewBox={`0 0 ${W} ${H + 20}`} className="mt-3 w-full" role="img" aria-label="eNPS trend from +22 in April to +42 in September">
            {[10, 30, 50].map((g) => (
              <line key={g} x1={0} x2={W} y1={y(g)} y2={y(g)} stroke="var(--color-line)" strokeDasharray="3 4" />
            ))}
            <path d={`${d} L ${x(series.length - 1)} ${H} L ${x(0)} ${H} Z`} fill="var(--color-brand)" opacity={0.07} />
            <path d={d} fill="none" stroke="var(--color-brand)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            {series.map((v, i) => (
              <g key={i}>
                <circle cx={x(i)} cy={y(v)} r={3.5} fill="var(--color-brand)" stroke="white" strokeWidth={1.5} />
                <text x={x(i)} y={y(v) - 9} textAnchor="middle" fontSize="11" fontWeight="600" className="fill-ink">+{v}</text>
              </g>
            ))}
            {months.map((m, i) => (
              <text key={m} x={x(i)} y={H + 16} textAnchor="middle" fontSize="11" className="fill-muted">{m}</text>
            ))}
          </svg>
        </div>

        <Soft className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Recognition feed</p>
          <div className="mt-3 space-y-2.5">
            {feed.map((k) => (
              <div key={k.to} className="rounded-lg border border-line px-3 py-2.5">
                <p className="text-[12px] text-body">
                  <span className="font-semibold text-ink">{k.from}</span> to <span className="font-semibold text-ink">{k.to}</span>
                </p>
                <p className="mt-0.5 text-[11px] text-muted">{k.note}</p>
                <span className="mt-1.5 inline-block rounded-md bg-brand-tint px-1.5 py-0.5 text-[10px] font-semibold text-brand">{k.badge}</span>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
