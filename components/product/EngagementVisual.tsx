import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Engagement is people noticing each other, so the image is the kudos wall itself on a lilac wash: the
// company feed as a masonry of real kudos (giver to recipient, a core-value badge, who can see it, and the
// emoji reactions colleagues add), with the pulse read-out alongside: eNPS across monthly survey waves,
// +22 in Apr rising to +42 in Sep (up 4 on Aug), with the hub's kudos, participation and reach tiles.

type Kudo = {
  from: string;
  fi: string;
  to: string;
  badge: string;
  tone: string;
  note: string;
  period?: string;
  when: string;
  vis: string;
  reactions: { e: string; n: number; mine?: boolean }[];
};

const BADGE_TONE: Record<string, string> = {
  "Team player": "bg-blue-50 text-blue-700 ring-blue-200",
  "Customer first": "bg-indigo-50 text-indigo-700 ring-indigo-200",
  Innovation: "bg-purple-50 text-purple-700 ring-purple-200",
  Ownership: "bg-cyan-50 text-cyan-700 ring-cyan-200",
};

const left: Kudo[] = [
  {
    from: "Vikram Shah",
    fi: "VS",
    to: "Ananya Iyer",
    badge: "Team player",
    tone: BADGE_TONE["Team player"],
    period: "for Sep 2026",
    note: "Closed the September payroll two days early with zero variances. Thank you!",
    when: "2h ago",
    vis: "Everyone",
    reactions: [
      { e: "🎉", n: 18, mine: true },
      { e: "👏", n: 11 },
      { e: "❤️", n: 4 },
    ],
  },
  {
    from: "Rohan Desai",
    fi: "RD",
    to: "Sneha Kulkarni",
    badge: "Ownership",
    tone: BADGE_TONE.Ownership,
    note: "Covered two shifts during the audit week.",
    when: "Yesterday",
    vis: "Their team",
    reactions: [{ e: "🙏", n: 6 }],
  },
  {
    from: "Ananya Iyer",
    fi: "AI",
    to: "Suresh Nair",
    badge: "Customer first",
    tone: BADGE_TONE["Customer first"],
    note: "Cleared 40 payroll tickets inside SLA in the week of the run.",
    when: "3 days ago",
    vis: "Their location",
    reactions: [
      { e: "👍", n: 7 },
      { e: "🎉", n: 3 },
    ],
  },
];

const right: Kudo[] = [
  {
    from: "Meera Pillai",
    fi: "MP",
    to: "Arjun Patel",
    badge: "Customer first",
    tone: BADGE_TONE["Customer first"],
    note: "Turned around the Pune escalation in a day.",
    when: "5h ago",
    vis: "Everyone",
    reactions: [
      { e: "👏", n: 14 },
      { e: "🙌", n: 6 },
    ],
  },
  {
    from: "Kavya Nair",
    fi: "KN",
    to: "Imran Shaikh",
    badge: "Innovation",
    tone: BADGE_TONE.Innovation,
    note: "Automated the daily ops MIS, which saves the team an hour every morning.",
    when: "Yesterday",
    vis: "Their department",
    reactions: [
      { e: "💡", n: 9 },
      { e: "🔥", n: 5 },
    ],
  },
  {
    from: "Nikhil Jain",
    fi: "NJ",
    to: "Farah Khan",
    badge: "Team player",
    tone: BADGE_TONE["Team player"],
    note: "Onboarded 9 joiners without a single miss.",
    when: "2 days ago",
    vis: "Everyone",
    reactions: [{ e: "👏", n: 12 }],
  },
];

function KudoCard({ k, big = false }: { k: Kudo; big?: boolean }) {
  return (
    <Card className={big ? "p-5" : "p-4"}>
      <div className="flex gap-3">
        <Avatar initials={k.fi} size={big ? 38 : 32} />
        <div className="min-w-0 flex-1">
          <p className="text-[12.5px] leading-snug text-slate-500">
            <b className="font-semibold text-ink">{k.from}</b> → <b className="font-semibold text-ink">{k.to}</b>
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <span className={`rounded-md px-1.5 py-0.5 text-[10.5px] font-semibold ring-1 ${k.tone}`}>{k.badge}</span>
            {k.period && <span className="text-[11px] text-slate-400">{k.period}</span>}
          </div>
          <p className={`mt-2 leading-relaxed text-ink ${big ? "text-[14px]" : "text-[12.5px]"}`}>{k.note}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-2.5">
        <span className="text-[10.5px] text-slate-400">
          {k.when} · {k.vis}
        </span>
        <span className="flex items-center gap-1">
          {k.reactions.map((r) => (
            <span
              key={r.e}
              className={`tnum flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[11px] font-semibold ${
                r.mine ? "bg-[#EEEAFE] text-[#4A34D1] ring-1 ring-[#5B45E8]/40" : "bg-slate-100 text-slate-600"
              }`}
            >
              <span className="text-[12px] leading-none">{r.e}</span>
              {r.n}
            </span>
          ))}
          <span className="grid h-[22px] w-[22px] place-items-center rounded-full border border-dashed border-slate-300 text-[12px] leading-none text-slate-400">+</span>
        </span>
      </div>
    </Card>
  );
}

const series = [22, 28, 26, 34, 38, 42];
const months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const CW = 176;
const CH = 110;
const cx = (i: number) => 14 + (i * (CW - 28)) / (series.length - 1);
const cy = (v: number) => CH - 8 - (v / 50) * (CH - 24);
const path = series.map((v, i) => `${i ? "L" : "M"} ${cx(i)} ${cy(v)}`).join(" ");

function Enps() {
  return (
    <Card className="p-4">
      <p className="text-[11px] font-semibold text-slate-500">eNPS · monthly pulse</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="tnum text-[30px] font-bold leading-none text-[#15147B]">+42</span>
        <span className="tnum text-[11.5px] font-semibold text-emerald-600">+4 vs Aug</span>
      </div>
      <p className="tnum mt-1 text-[10.5px] text-slate-500">promoters 60% · detractors 18%</p>
      <svg width={CW} height={CH + 18} viewBox={`0 0 ${CW} ${CH + 18}`} className="mt-2" role="img" aria-label="eNPS from +22 in April to +42 in September">
        {[10, 30, 50].map((g) => (
          <line key={g} x1={0} x2={CW} y1={cy(g)} y2={cy(g)} stroke="#E2E8F0" strokeDasharray="3 4" />
        ))}
        <path d={`${path} L ${cx(5)} ${CH - 8} L ${cx(0)} ${CH - 8} Z`} fill="#5B45E8" opacity={0.1} />
        <path d={path} fill="none" stroke="#5B45E8" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        {series.map((v, i) => (
          <circle key={i} cx={cx(i)} cy={cy(v)} r={i === 5 ? 4.5 : 3} fill={i === 5 ? "#E88938" : "#5B45E8"} stroke="white" strokeWidth={1.5} />
        ))}
        {months.map((m, i) => (
          <text key={m} x={cx(i)} y={CH + 14} textAnchor="middle" fontSize="10.5" fill="#94A3B8">
            {m}
          </text>
        ))}
      </svg>
    </Card>
  );
}

export function EngagementVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={640}
      backdrop="lilac"
      label="A NeevHR kudos wall with badges, audiences and emoji reactions, beside the eNPS trend from monthly pulse surveys."
    >
      <div className="flex items-end justify-between">
        <div>
          <Eyebrow>Recognition · company feed</Eyebrow>
          <p className="mt-1 text-[21px] font-bold tracking-tight text-ink">Kudos wall</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-600">
            Month <b className="font-semibold text-ink">Sep 2026</b>
          </span>
          <span className="rounded-lg bg-[#15147B] px-3.5 py-1.5 text-[12px] font-semibold text-white">Give kudos</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_1fr_200px] items-start gap-4">
        <div className="flex flex-col gap-4">
          <KudoCard k={left[0]} big />
          <KudoCard k={left[1]} />
          <KudoCard k={left[2]} />
        </div>
        <div className="flex flex-col gap-4 pt-7">
          {right.map((k) => (
            <KudoCard key={k.from} k={k} />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <Enps />
          <Card className="divide-y divide-slate-100 px-4 py-1">
            {[
              ["Kudos this month", "312", "Sep 2026"],
              ["Pulse participation", "87%", "September wave"],
              ["Announcement reach", "91%", "average read rate"],
            ].map(([k, v, sub]) => (
              <div key={k} className="py-3">
                <p className="text-[11px] font-semibold text-slate-500">{k}</p>
                <div className="mt-0.5 flex items-baseline justify-between">
                  <span className="tnum text-[22px] font-bold leading-tight text-ink">{v}</span>
                  <span className="text-[10.5px] text-slate-400">{sub}</span>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </VisualStage>
  );
}
