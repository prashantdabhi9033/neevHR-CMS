import type { ReactNode } from "react";
import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Onboarding MEANS a journey HR, IT, Facilities, the manager and the joiner walk together, from an
// accepted offer to a confirmed employee. So the image is a road: five stops (offer, pre-boarding, day 1,
// the 30-day check-in, probation confirmation) with each task tagged to its owner and the joiner's overall
// progress. Tasks after the offer: 8 pre-boarding + 3 day-1 + 1 check-in + 2 confirmation = 14; 6 done = 43%.

type Owner = "HR" | "IT" | "Facilities" | "Manager" | "Joiner";
type State = "done" | "active" | "todo";

const OWNER: Record<Owner, string> = {
  HR: "bg-[#EEEAFE] text-[#4A34D1]",
  IT: "bg-sky-100 text-sky-700",
  Facilities: "bg-amber-100 text-amber-800",
  Manager: "bg-emerald-100 text-emerald-800",
  Joiner: "bg-pink-100 text-pink-700",
};

type Task = { label: string; owner: Owner; state: State; note?: string };

const preboarding: Task[] = [
  { label: "Documents collection", owner: "HR", state: "done" },
  { label: "Background verification", owner: "HR", state: "done" },
  { label: "IT & asset allocation", owner: "IT", state: "active", note: "Laptop DELL-4471 · due today" },
  { label: "Workspace & access", owner: "Facilities", state: "todo", note: "Seat, ID card · due 30 Sep" },
  { label: "Acknowledge Employee Handbook", owner: "Joiner", state: "done" },
  { label: "Acknowledge Code of Conduct", owner: "Joiner", state: "done" },
  { label: "Upload ID proof", owner: "Joiner", state: "done" },
  { label: "Upload bank proof", owner: "Joiner", state: "done" },
];
const dayOne: Task[] = [
  { label: "Day-1 & buddy", owner: "Manager", state: "todo", note: "Buddy: Rupal Sharma" },
  { label: "Meet your buddy", owner: "Joiner", state: "todo" },
  { label: "Convert to employee", owner: "HR", state: "todo" },
];
const dayThirty: Task[] = [{ label: "30-day check-in", owner: "Manager", state: "todo", note: "Against the 30-60-90 plan" }];
const probation: Task[] = [
  { label: "Probation feedback", owner: "Manager", state: "todo", note: "Requested 25 Dec 2026" },
  { label: "Confirm employee", owner: "HR", state: "todo" },
];

const all = [...preboarding, ...dayOne, ...dayThirty, ...probation];
const doneCount = all.filter((t) => t.state === "done").length;
const pct = Math.round((doneCount / all.length) * 100);

function Tick({ state }: { state: State }) {
  if (state === "done")
    return <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[#10B981] text-[10.5px] font-bold text-white">✓</span>;
  if (state === "active") return <span className="block h-4 w-4 shrink-0 rounded-full border-[3px] border-[#E88938] bg-white" />;
  return <span className="block h-4 w-4 shrink-0 rounded-full border-2 border-slate-300 bg-white" />;
}

function TaskRow({ t }: { t: Task }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-[1px]">
        <Tick state={t.state} />
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-[11.5px] leading-tight ${t.state === "done" ? "text-slate-500" : "font-medium text-ink"}`}>{t.label}</p>
        {t.note && <p className="text-[10.5px] leading-tight text-slate-400">{t.note}</p>}
      </div>
      <span className={`shrink-0 rounded px-1.5 py-px text-[10px] font-semibold ${OWNER[t.owner]}`}>{t.owner}</span>
    </li>
  );
}

function Stop({ when, title, children, className = "" }: { when: string; title: string; children: ReactNode; className?: string }) {
  return (
    <Card className={`p-3.5 ${className}`}>
      <p className="tnum text-[10.5px] font-semibold text-[#5B45E8]">{when}</p>
      <p className="text-[13px] font-semibold text-ink">{title}</p>
      <div className="mt-2">{children}</div>
    </Card>
  );
}

// Road geometry (design px inside an 800-wide container).
const W = 800;
const TOP = 170; // height of the band holding the cards above the road
const ROAD = 84;
const MID = TOP + ROAD / 2;
const stops = [
  { x: 60, up: true, state: "done" as State },
  { x: 245, up: false, state: "active" as State },
  { x: 430, up: true, state: "todo" as State },
  { x: 600, up: false, state: "todo" as State },
  { x: 740, up: true, state: "todo" as State },
];
const ny = (up: boolean) => (up ? MID - 12 : MID + 12);

function seg(i: number) {
  const a = stops[i];
  const b = stops[i + 1];
  const dx = (b.x - a.x) / 2;
  return `M ${a.x} ${ny(a.up)} C ${a.x + dx} ${ny(a.up)}, ${b.x - dx} ${ny(b.up)}, ${b.x} ${ny(b.up)}`;
}

function Road() {
  return (
    <svg width={W} height={TOP + ROAD + 10} viewBox={`0 0 ${W} ${TOP + ROAD + 10}`} className="absolute left-0 top-0" fill="none" aria-hidden>
      <path d={`M 0 ${ny(true)} H ${stops[0].x}`} stroke="#10B981" strokeWidth={4} strokeLinecap="round" />
      {stops.slice(0, -1).map((_, i) => (
        <path
          key={i}
          d={seg(i)}
          stroke={i === 0 ? "#10B981" : i === 1 ? "#E88938" : "#15147B"}
          strokeOpacity={i > 1 ? 0.22 : 1}
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={i > 1 ? "2 9" : i === 1 ? "10 8" : undefined}
        />
      ))}
      {stops.map((s, i) => (
        <g key={i}>
          <line
            x1={s.x}
            x2={s.x}
            y1={s.up ? TOP - 6 : ny(false) + 12}
            y2={s.up ? ny(true) - 12 : TOP + ROAD + 10}
            stroke="#5B45E8"
            strokeOpacity={0.35}
            strokeWidth={1.5}
            strokeDasharray="3 3"
          />
          <circle
            cx={s.x}
            cy={ny(s.up)}
            r={s.state === "active" ? 13 : 11}
            fill={s.state === "done" ? "#10B981" : s.state === "active" ? "#E88938" : "#fff"}
            stroke={s.state === "todo" ? "#C7C3F4" : "#fff"}
            strokeWidth={3}
          />
          {s.state === "active" && <circle cx={s.x} cy={ny(s.up)} r={20} stroke="#E88938" strokeOpacity={0.25} strokeWidth={6} />}
          <text
            x={s.x}
            y={ny(s.up) + 4}
            textAnchor="middle"
            fontSize={11}
            fontWeight={700}
            fill={s.state === "todo" ? "#5B45E8" : "#fff"}
          >
            {s.state === "done" ? "✓" : i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

function Ring() {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <svg width={76} height={76} viewBox="0 0 76 76" aria-hidden>
      <circle cx={38} cy={38} r={r} stroke="#E4E0FB" strokeWidth={8} fill="none" />
      <circle
        cx={38}
        cy={38}
        r={r}
        stroke="#5B45E8"
        strokeWidth={8}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * c} ${c}`}
        transform="rotate(-90 38 38)"
      />
      <text x={38} y={43} textAnchor="middle" fontSize={16} fontWeight={700} fill="#24242B" className="tnum">
        {pct}%
      </text>
    </svg>
  );
}

export function OnboardingVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={700}
      backdrop="lilac"
      label="A new joiner's onboarding journey in NeevHR from offer accepted through pre-boarding, day 1 and the 30-day check-in to probation confirmation, with each task owned by HR, IT, Facilities, the manager or the joiner."
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <Avatar initials="KT" size={52} ring />
          <div>
            <Eyebrow>Joining journey</Eyebrow>
            <p className="mt-0.5 text-[19px] font-bold tracking-tight text-ink">Khushi Trivedi</p>
            <p className="text-[12px] text-slate-500">Executive · Sales · Pune · joins 01 Oct 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-wrap justify-end gap-1.5" style={{ maxWidth: 250 }}>
            {(Object.keys(OWNER) as Owner[]).map((o) => (
              <span key={o} className={`rounded px-1.5 py-px text-[10.5px] font-semibold ${OWNER[o]}`}>
                {o}
              </span>
            ))}
          </div>
          <Card className="flex items-center gap-3 py-2 pl-2 pr-4">
            <Ring />
            <div>
              <p className="tnum text-[13px] font-semibold text-ink">
                {doneCount} of {all.length} tasks
              </p>
              <p className="text-[11px] text-slate-500">Pre-join readiness 6 / 8</p>
            </div>
          </Card>
        </div>
      </div>

      <div className="relative mt-7" style={{ width: W, height: TOP + ROAD + 262 }}>
        <Road />

        <div className="absolute left-0" style={{ bottom: `calc(100% - ${TOP}px)`, width: 200 }}>
          <Stop when="12 Sep 2026" title="Offer accepted">
            <p className="text-[11px] leading-snug text-slate-500">Hired from the Sales Executive requisition. The onboarding case opens with the offer&apos;s details.</p>
            <span className={`mt-2 inline-block rounded px-1.5 py-px text-[10px] font-semibold ${OWNER.HR}`}>HR</span>
          </Stop>
        </div>

        <div className="absolute" style={{ left: 430 - 110, bottom: `calc(100% - ${TOP}px)`, width: 220 }}>
          <Stop when="01 Oct 2026" title="Day 1">
            <ul className="space-y-1.5">
              {dayOne.map((t) => (
                <TaskRow key={t.label} t={t} />
              ))}
            </ul>
          </Stop>
        </div>

        <div className="absolute right-0" style={{ bottom: `calc(100% - ${TOP}px)`, width: 244 }}>
          <Stop when="30 Dec 2026 · 90 days" title="Probation confirmation">
            <ul className="space-y-1.5">
              {probation.map((t) => (
                <TaskRow key={t.label} t={t} />
              ))}
            </ul>
          </Stop>
        </div>

        <div className="absolute" style={{ left: 245 - 140, top: TOP + ROAD + 10, width: 280 }}>
          <Stop when="Before 01 Oct 2026" title="Pre-boarding" className="ring-2 ring-[#E88938]/50">
            <ul className="space-y-1.5">
              {preboarding.map((t) => (
                <TaskRow key={t.label} t={t} />
              ))}
            </ul>
          </Stop>
        </div>

        <div className="absolute" style={{ left: 600 - 115, top: TOP + ROAD + 10, width: 230 }}>
          <Stop when="31 Oct 2026" title="Day 30">
            <ul className="space-y-1.5">
              {dayThirty.map((t) => (
                <TaskRow key={t.label} t={t} />
              ))}
            </ul>
          </Stop>
          <p className="mt-3 px-1 text-[11px] leading-snug text-slate-500">
            Overdue blocking tasks can be chased from the list; every owner sees only their own queue.
          </p>
        </div>
      </div>
    </VisualStage>
  );
}
