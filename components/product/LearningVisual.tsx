import type { ReactNode } from "react";
import { Avatar, Card, Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// Learning MEANS progress a person makes, course by course, that the company can prove. So the image is
// one learner's trail: her assigned courses as stops with progress rings (a finished course, a mandatory
// compliance course with a due date and its lessons, one not started, a classroom session), ending in the
// completion certificate she earned. POSH: 3 of 5 lessons = 60%. 28 Sep to 15 Oct 2026 = 17 days left.

type Stop = {
  title: string;
  meta: string;
  pct: number | null; // null = classroom session (no progress ring)
  h: number;
  tag?: ReactNode;
  body?: ReactNode;
};

const lessons: { name: string; kind: "Video" | "Reading" | "Quiz"; done: boolean; next?: boolean }[] = [
  { name: "What counts as harassment", kind: "Video", done: true },
  { name: "The Internal Committee", kind: "Reading", done: true },
  { name: "Your rights and duties", kind: "Video", done: true },
  { name: "Raising a complaint", kind: "Video", done: false, next: true },
  { name: "Quiz · pass mark 80%", kind: "Quiz", done: false },
];

const stops: Stop[] = [
  {
    title: "Code of Conduct",
    meta: "Mandatory · e-learning · 1.5 hrs",
    pct: 100,
    h: 78,
    tag: <Tag tone="bg-emerald-50 text-emerald-700">Passed · 92%</Tag>,
  },
  {
    title: "POSH awareness 2026",
    meta: "Mandatory · e-learning · 2 hrs",
    pct: 60,
    h: 200,
    tag: <Tag tone="bg-amber-50 text-amber-800">Due 15 Oct · 17 days</Tag>,
    body: (
      <ol className="mt-2.5 space-y-1.5 border-t border-slate-100 pt-2.5">
        {lessons.map((l, i) => (
          <li key={l.name} className="flex items-center gap-2 text-[11px]">
            <span
              className={`grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10.5px] font-bold ${
                l.done ? "bg-[#10B981] text-white" : l.next ? "border-2 border-[#5B45E8] text-[#5B45E8]" : "border border-slate-300 text-slate-400"
              }`}
            >
              {l.done ? "✓" : ""}
            </span>
            <span className={`flex-1 ${l.done ? "text-slate-500" : l.next ? "font-semibold text-ink" : "text-slate-600"}`}>
              {i + 1}. {l.name}
            </span>
            <span className="text-[10.5px] text-slate-400">{l.kind}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    title: "DPDP Act 2023 basics",
    meta: "Mandatory · e-learning · 1 hr",
    pct: 0,
    h: 78,
    tag: <Tag tone="bg-slate-100 text-slate-600">Due 31 Oct</Tag>,
  },
  {
    title: "Negotiation skills",
    meta: "Classroom · 08 Oct 2026 · Baner, Pune",
    pct: null,
    h: 78,
    tag: <Tag tone="bg-[#EEEAFE] text-[#4A34D1]">Registered · 18 / 24 seats</Tag>,
  },
];

function Tag({ tone, children }: { tone: string; children: ReactNode }) {
  return <span className={`shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${tone}`}>{children}</span>;
}

const GAP = 16;
const NODE_X = [34, 70, 34, 70];
const NODE_DY = 32; // node centre below a card's top
const tops = stops.reduce<number[]>((acc, s, i) => [...acc, i === 0 ? 0 : acc[i - 1] + stops[i - 1].h + GAP], []);
const trailH = tops[tops.length - 1] + stops[stops.length - 1].h;

function Ring({ pct }: { pct: number | null }) {
  const r = 20;
  const c = 2 * Math.PI * r;
  if (pct === null)
    return (
      <g>
        <circle r={24} fill="#fff" stroke="#C7C3F4" strokeWidth={2} />
        <rect x={-9} y={-8} width={18} height={16} rx={3} fill="none" stroke="#5B45E8" strokeWidth={2} />
        <path d="M -9 -3 H 9 M -4 -11 V -6 M 4 -11 V -6" stroke="#5B45E8" strokeWidth={2} />
      </g>
    );
  return (
    <g>
      <circle r={24} fill="#fff" />
      <circle r={r} fill="none" stroke="#E4E0FB" strokeWidth={6} />
      {pct > 0 && (
        <circle
          r={r}
          fill="none"
          stroke={pct === 100 ? "#10B981" : "#5B45E8"}
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={`${(pct / 100) * c} ${c}`}
          transform="rotate(-90)"
        />
      )}
      <text y={4} textAnchor="middle" fontSize={11} fontWeight={700} fill="#24242B" className="tnum">
        {pct}%
      </text>
    </g>
  );
}

function Trail() {
  const pts = stops.map((_, i) => ({ x: NODE_X[i], y: tops[i] + NODE_DY }));
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    const my = (a.y + b.y) / 2;
    d += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
  }
  return (
    <svg className="absolute left-0 top-0" width={110} height={trailH} viewBox={`0 0 110 ${trailH}`} fill="none" aria-hidden>
      <path d={d} stroke="#5B45E8" strokeOpacity={0.3} strokeWidth={5} strokeLinecap="round" strokeDasharray="1 10" />
      {pts.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y})`}>
          <Ring pct={stops[i].pct} />
        </g>
      ))}
    </svg>
  );
}

export function LearningVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={680}
      backdrop="lilac"
      label="One employee's NeevHR learning trail: a completed course, a mandatory POSH course with its due date and lessons, a course not yet started and a classroom session, with the completion certificate she earned."
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar initials="RJ" size={46} ring />
          <div>
            <Eyebrow>My learning · FY 2026-27</Eyebrow>
            <p className="mt-0.5 text-[18px] font-bold tracking-tight text-ink">Ritika Joshi</p>
            <p className="text-[12px] text-slate-500">Customer Support Executive · Support</p>
          </div>
        </div>
        <div className="flex gap-2.5">
          {[
            ["Mandatory done", "1 of 3"],
            ["Learning hours", "6.5"],
            ["Certificates", "2"],
          ].map(([k, v]) => (
            <Card key={k} className="px-3.5 py-2">
              <p className="text-[10.5px] text-slate-500">{k}</p>
              <p className="tnum text-[15px] font-bold text-ink">{v}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-7">
        <div className="relative" style={{ width: 470, height: trailH }}>
          <Trail />
          {stops.map((s, i) => (
            <Card
              key={s.title}
              className={`absolute px-4 py-3 ${s.pct === 60 ? "ring-2 ring-[#5B45E8]/40" : ""}`}
              style={{ top: tops[i], left: 116, right: 0, height: s.h }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[13.5px] font-semibold text-ink">{s.title}</p>
                  <p className="text-[11px] text-slate-500">{s.meta}</p>
                </div>
                {s.tag}
              </div>
              {s.body}
            </Card>
          ))}
        </div>

        <div className="flex flex-1 flex-col gap-5 pt-2">
          <Paper rotate={2} className="relative overflow-hidden px-6 pb-5 pt-6 text-center">
            <span className="absolute inset-2 rounded-[4px] border border-[#C7B98E]/70" />
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#8a6d3b]">Certificate of completion</p>
            <p className="mt-3 text-[11px] text-slate-500">This certifies that</p>
            <p className="mt-0.5 text-[19px] font-bold tracking-tight text-[#15147B]">Ritika Joshi</p>
            <p className="mt-1 text-[11px] text-slate-500">has completed</p>
            <p className="text-[14px] font-semibold text-ink">Code of Conduct</p>
            <div className="mx-auto mt-3 grid max-w-[220px] grid-cols-3 gap-2 text-[10.5px]">
              {[
                ["Score", "92%"],
                ["Hours", "1.5"],
                ["Issued", "12 Sep 2026"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-slate-400">{k}</p>
                  <p className="tnum font-semibold text-ink">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10.5px] text-slate-500">Valid until 12 Sep 2027 · Aikyora Pvt Ltd</p>
            <p className="mt-1 text-[10.5px] text-slate-400">Genuine certificates carry a serial your L&D team can verify.</p>
          </Paper>

          <Card className="p-4">
            <p className="text-[12px] font-semibold text-ink">Skills from completed courses</p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {["Business ethics", "Workplace conduct"].map((s) => (
                <span key={s} className="rounded-full bg-[#EEEAFE] px-2.5 py-1 text-[11px] font-medium text-[#4A34D1]">
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-2.5 text-[10.5px] leading-snug text-slate-500">Mandatory courses are assigned automatically, with a due date from enrolment.</p>
          </Card>
        </div>
      </div>
    </VisualStage>
  );
}
