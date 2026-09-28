import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// An employee record MEANS one person on one dated timeline: every change is an event, nothing is
// overwritten, so the record can be read "as of" any date. The canvas shows today's profile, the
// timeline ribbon of employment events under the CTC step line (purple promotion pins), and an as-of
// pin whose card rebuilds the record on 15 Jan 2024. Promotion 01 Oct 2026: 13.4 L to 15.3 L = +14.2%.

type Kind = "joined" | "confirmed" | "pay" | "promotion" | "transfer";

const TONE: Record<Kind, string> = {
  joined: "#15147B",
  confirmed: "#10B981",
  pay: "#64748B",
  promotion: "#7C3AED",
  transfer: "#0EA5E9",
};

// Timeline geometry (design px inside the ribbon card).
const TW = 584;
const T0 = 2021.45;
const T1 = 2027.0;
const x = (t: number) => ((t - T0) / (T1 - T0)) * TW;
const dt = (y: number, m: number, d: number) => y + (m - 1) / 12 + (d - 1) / 365;

const CHART_TOP = 26;
const CHART_BOT = 200;
const yC = (lakh: number) => CHART_BOT - ((lakh - 5) / (16 - 5)) * (CHART_BOT - CHART_TOP - 10);
const RIBBON_Y = 268;
const H = 336;

// ctc in lakh per year after the event (null = no pay change). row: label above (a) or below (b) the ribbon.
const events: {
  t: number;
  date: string;
  kind: Kind;
  title: string;
  detail: string;
  ctc: number | null;
  row: "a" | "b";
  scheduled?: boolean;
}[] = [
  { t: dt(2021, 7, 5), date: "05 Jul 2021", kind: "joined", title: "Joined", detail: "Engineer", ctc: 6.5, row: "a" },
  { t: dt(2021, 10, 3), date: "03 Oct 2021", kind: "confirmed", title: "Confirmed", detail: "Probation 90 days", ctc: null, row: "b" },
  { t: dt(2022, 4, 1), date: "01 Apr 2022", kind: "pay", title: "Pay revision", detail: "₹7.2 L", ctc: 7.2, row: "a" },
  { t: dt(2023, 4, 1), date: "01 Apr 2023", kind: "promotion", title: "Promoted · L3", detail: "Engineer II", ctc: 9.0, row: "a" },
  { t: dt(2024, 4, 1), date: "01 Apr 2024", kind: "pay", title: "Pay revision", detail: "₹9.8 L", ctc: 9.8, row: "b" },
  { t: dt(2024, 7, 15), date: "15 Jul 2024", kind: "transfer", title: "Transfer", detail: "Pune → Bengaluru", ctc: null, row: "a" },
  { t: dt(2025, 4, 1), date: "01 Apr 2025", kind: "promotion", title: "Promoted · L4", detail: "Senior Engineer", ctc: 12.5, row: "b" },
  { t: dt(2026, 4, 1), date: "01 Apr 2026", kind: "pay", title: "Pay revision", detail: "₹13.4 L", ctc: 13.4, row: "a" },
  { t: dt(2026, 10, 1), date: "01 Oct 2026", kind: "promotion", title: "Lead · L5", detail: "Scheduled", ctc: 15.3, row: "b", scheduled: true },
];

const AS_OF = dt(2024, 1, 15);

function stepPath() {
  const pay = events.filter((e) => e.ctc !== null && !e.scheduled);
  let d = `M ${x(pay[0].t)} ${yC(pay[0].ctc!)}`;
  for (let i = 1; i < pay.length; i++) d += ` H ${x(pay[i].t)} V ${yC(pay[i].ctc!)}`;
  const sched = events[events.length - 1];
  d += ` H ${x(sched.t)}`;
  return { d, lastX: x(sched.t), lastY: yC(13.4) };
}

function Timeline() {
  const { d, lastX, lastY } = stepPath();
  const years = [2022, 2023, 2024, 2025, 2026];
  const pinX = x(AS_OF);
  return (
    <div className="relative" style={{ width: TW, height: H }}>
      <svg width={TW} height={H} viewBox={`0 0 ${TW} ${H}`} className="absolute inset-0" fill="none" aria-hidden>
        {years.map((yr) => (
          <g key={yr}>
            <line x1={x(yr)} x2={x(yr)} y1={CHART_TOP} y2={CHART_BOT} stroke="#15147B" strokeOpacity={0.07} />
            <text x={x(yr) - 4} y={CHART_BOT - 4} textAnchor="end" fontSize={10.5} fill="#94A3B8" className="tnum">
              {yr}
            </text>
          </g>
        ))}
        <path d={`${d} V ${CHART_BOT} H ${x(events[0].t)} Z`} fill="#15147B" opacity={0.06} />
        <path d={d} stroke="#15147B" strokeWidth={2.25} />
        <path d={`M ${lastX} ${lastY} V ${yC(15.3)} H ${TW}`} stroke="#7C3AED" strokeWidth={2} strokeDasharray="4 4" />
        {events
          .filter((e) => e.ctc !== null)
          .map((e) => (
            <g key={e.date}>
              {e.kind === "promotion" && !e.scheduled && (
                <circle cx={x(e.t)} cy={yC(e.ctc!)} r={7} stroke="#7C3AED" strokeWidth={2} fill="#fff" />
              )}
              <circle cx={x(e.t)} cy={yC(e.ctc!)} r={3} fill={e.kind === "promotion" ? "#7C3AED" : "#15147B"} />
              <text
                x={e.scheduled ? TW : x(e.t) + 6}
                y={yC(e.ctc!) - 10}
                textAnchor={e.scheduled ? "end" : "start"}
                fontSize={10.5}
                fontWeight={600}
                fill={e.scheduled ? "#7C3AED" : "#24242B"}
                className="tnum"
              >
                ₹{e.ctc!.toFixed(1)} L
              </text>
            </g>
          ))}

        {/* The as-of pin: a date on the timeline, not a separate report. */}
        <line x1={pinX} x2={pinX} y1={14} y2={RIBBON_Y} stroke="#E88938" strokeWidth={1.5} strokeDasharray="3 3" />
        <circle cx={pinX} cy={yC(9.0)} r={4} fill="#E88938" stroke="#fff" strokeWidth={1.5} />

        {/* Ribbon */}
        <line x1={0} x2={TW} y1={RIBBON_Y} y2={RIBBON_Y} stroke="#15147B" strokeOpacity={0.14} strokeWidth={6} strokeLinecap="round" />
        <line x1={x(events[0].t)} x2={x(dt(2026, 9, 28))} y1={RIBBON_Y} y2={RIBBON_Y} stroke="#15147B" strokeOpacity={0.55} strokeWidth={6} strokeLinecap="round" />
        {events.map((e) => (
          <g key={e.date}>
            <line
              x1={x(e.t)}
              x2={x(e.t)}
              y1={e.row === "a" ? RIBBON_Y - 16 : RIBBON_Y + 7}
              y2={e.row === "a" ? RIBBON_Y - 7 : RIBBON_Y + 16}
              stroke={TONE[e.kind]}
              strokeWidth={1.5}
            />
            <circle
              cx={x(e.t)}
              cy={RIBBON_Y}
              r={6}
              fill={e.scheduled ? "#fff" : TONE[e.kind]}
              stroke={e.scheduled ? TONE[e.kind] : "#fff"}
              strokeWidth={2}
              strokeDasharray={e.scheduled ? "3 2" : undefined}
            />
          </g>
        ))}
      </svg>

      <span
        className="absolute -translate-x-1/2 whitespace-nowrap rounded-full bg-[#E88938] px-2 py-0.5 text-[10.5px] font-semibold text-[#24242B]"
        style={{ left: pinX, top: 0 }}
      >
        As of 15 Jan 2024
      </span>

      {events.map((e) => {
        const alignEnd = e.scheduled;
        return (
          <div
            key={e.date}
            className={`absolute leading-tight ${alignEnd ? "text-right" : ""}`}
            style={{
              left: alignEnd ? undefined : x(e.t) - 3,
              right: alignEnd ? 0 : undefined,
              top: e.row === "a" ? RIBBON_Y - 60 : RIBBON_Y + 18,
            }}
          >
            <p className="tnum whitespace-nowrap text-[10.5px] text-slate-400">{e.date}</p>
            <p className="whitespace-nowrap text-[11.5px] font-semibold" style={{ color: TONE[e.kind] === "#64748B" ? "#24242B" : TONE[e.kind] }}>
              {e.title}
            </p>
            <p className="whitespace-nowrap text-[10.5px] text-slate-500">{e.detail}</p>
          </div>
        );
      })}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 py-[5px] text-[12px]">
      <span className="text-slate-500">{k}</span>
      <span className="tnum text-right font-medium text-ink">{v}</span>
    </div>
  );
}

export function EmployeesVisual() {
  return (
    <VisualStage
      width={1000}
      estHeight={640}
      backdrop="canvas"
      label="One effective-dated NeevHR employee record: today's profile, a timeline of employment events under a CTC step line with promotion pins, and the same record rebuilt as of 15 Jan 2024."
    >
      <div className="grid grid-cols-[264px_1fr] gap-7">
        <div className="flex flex-col gap-4">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Avatar initials="AR" size={52} />
              <div>
                <p className="text-[16px] font-bold tracking-tight text-ink">Aditi Rao</p>
                <p className="text-[12px] text-slate-500">Senior Engineer · L4</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["EMP-0142", "Engineering"].map((c) => (
                <span key={c} className="rounded-md bg-[#F4F3FE] px-2 py-0.5 text-[10.5px] font-semibold text-[#4A34D1]">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-3 border-t border-slate-100 pt-2">
              <Row k="Location" v="Bengaluru" />
              <Row k="Reports to" v="Meera Krishnan" />
              <Row k="Joined" v="05 Jul 2021" />
              <Row k="Tenure" v="5 yrs 2 mths" />
              <Row k="Annual CTC" v="₹13.4 L" />
            </div>
            <p className="mt-2 text-[10.5px] text-slate-400">Today · 28 Sep 2026</p>
          </Card>

          <Card className="p-5" style={{ borderColor: "rgba(232,137,56,0.65)", borderWidth: 2 }}>
            <Eyebrow>
              <span className="text-[#B45309]">As of 15 Jan 2024</span>
            </Eyebrow>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                ["Designation", "Engineer II"],
                ["Grade", "L3"],
                ["Location", "Pune"],
                ["Annual CTC", "₹9.0 L"],
                ["Department", "Engineering"],
                ["Reports to", "Sanjay Kulkarni"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[10.5px] text-slate-400">{k}</p>
                  <p className="tnum whitespace-nowrap text-[12.5px] font-semibold text-ink">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10.5px] leading-snug text-slate-500">Rebuilt from dated history. Nothing was overwritten.</p>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="px-6 pb-5 pt-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <Eyebrow>Job & timeline</Eyebrow>
                <p className="mt-1 text-[15px] font-semibold text-ink">Every change is a dated event</p>
              </div>
              <div className="flex gap-3 text-[10.5px] text-slate-500">
                {(
                  [
                    ["joined", "Joined"],
                    ["confirmed", "Confirmed"],
                    ["promotion", "Promotion"],
                    ["transfer", "Transfer"],
                    ["pay", "Pay revision"],
                  ] as [Kind, string][]
                ).map(([k, l]) => (
                  <span key={k} className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full" style={{ background: TONE[k] }} />
                    {l}
                  </span>
                ))}
              </div>
            </div>
            <Timeline />
          </Card>

          <Card className="flex items-center gap-4 px-5 py-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-dashed border-[#7C3AED] text-[11px] font-bold text-[#7C3AED]">
              L5
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold text-ink">Promotion to Lead Engineer · effective 01 Oct 2026</p>
              <p className="text-[11.5px] text-slate-500">Saved as a scheduled event. Payroll and reports pick it up on the date.</p>
            </div>
            <div className="text-right">
              <p className="tnum text-[13px] font-semibold text-ink">₹13.4 L → ₹15.3 L</p>
              <p className="tnum text-[11px] font-semibold text-[#7C3AED]">+14.2% · L4 → L5</p>
            </div>
          </Card>
        </div>
      </div>
    </VisualStage>
  );
}
