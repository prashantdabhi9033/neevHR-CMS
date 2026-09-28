import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// A timesheet means a week of hours, split by project, that a manager signs off. So the image is the week
// itself as stacked day bars (one colour per project, half-hour steps) with the running total climbing to
// the 40 h week used for utilisation, then the sheet's path from Draft to Submitted to Approved.
// MER-PAY 6+5.5+4+6+3.5 = 25, ACM-PORT 2+2+1+1.5+1.5 = 8, INT-OPS 1+1+2+1+2 = 7; days 9, 8.5, 7, 8.5, 7 = 40.
// Running total 9, 17.5, 24.5, 33, 40. Billable 25 + 8 = 33 of 40 = 82.5%.

const projects = [
  { code: "MER-PAY", name: "Meridian Pay", billable: true, color: "#15147B", h: [6, 5.5, 4, 6, 3.5] },
  { code: "ACM-PORT", name: "Acme Portal", billable: true, color: "#5B45E8", h: [2, 2, 1, 1.5, 1.5] },
  { code: "INT-OPS", name: "Internal ops", billable: false, color: "#A5B4C8", h: [1, 1, 2, 1, 2] },
];
const days = ["Mon 21", "Tue 22", "Wed 23", "Thu 24", "Fri 25"];
const dayTotals = days.map((_, d) => projects.reduce((a, p) => a + p.h[d], 0));
const running = dayTotals.map((_, i) => dayTotals.slice(0, i + 1).reduce((a, b) => a + b, 0));
const TOTAL = running[running.length - 1]; // 40
const WEEK = 40;
const billable = projects.filter((p) => p.billable).reduce((a, p) => a + p.h.reduce((x, y) => x + y, 0), 0); // 33

// Chart geometry (design px)
const CW = 470;
const CH = 300;
const PAD_L = 34;
const PAD_B = 34;
const plotW = CW - PAD_L - 40;
const plotH = CH - PAD_B - 10;
const DAY_MAX = 10; // left axis: hours per day
const barW = 44;
const slot = plotW / days.length;
const xOf = (i: number) => PAD_L + slot * i + slot / 2;
const yDay = (h: number) => 10 + plotH - (h / DAY_MAX) * plotH;
const yRun = (h: number) => 10 + plotH - (h / WEEK) * plotH; // right axis: 0 to 40 h running

function WeekChart() {
  const runPts = running.map((r, i) => `${xOf(i) + barW / 2 + 6},${yRun(r)}`).join(" ");
  return (
    <svg width={CW} height={CH} viewBox={`0 0 ${CW} ${CH}`} fill="none" aria-hidden>
      {[0, 2, 4, 6, 8, 10].map((h) => (
        <g key={h}>
          <line x1={PAD_L} x2={CW - 40} y1={yDay(h)} y2={yDay(h)} stroke="#15147B" strokeOpacity={h === 0 ? 0.25 : 0.07} />
          <text x={PAD_L - 8} y={yDay(h) + 4} textAnchor="end" fontSize="10.5" fill="#94A3B8">{h}h</text>
        </g>
      ))}
      {[10, 20, 30, 40].map((h) => (
        <text key={h} x={CW - 34} y={yRun(h) + 4} fontSize="10.5" fill="#E88938">{h}</text>
      ))}
      {days.map((d, i) => {
        let acc = 0;
        return (
          <g key={d}>
            {projects.map((p, pi) => {
              const h = p.h[i];
              const y0 = yDay(acc + h);
              const hPx = yDay(acc) - y0;
              acc += h;
              const top = pi === projects.length - 1;
              return <rect key={p.code} x={xOf(i) - barW / 2} y={y0} width={barW} height={hPx - 1.5} rx={top ? 6 : 2} fill={p.color} />;
            })}
            <text x={xOf(i)} y={yDay(dayTotals[i]) - 8} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#24242B">
              {dayTotals[i]}
            </text>
            <text x={xOf(i)} y={CH - 12} textAnchor="middle" fontSize="11" fontWeight="600" fill="#64748B">{d}</text>
          </g>
        );
      })}
      {/* even-pace guide to the 40 h week, and the running total */}
      <line x1={PAD_L} y1={yRun(0)} x2={xOf(4) + barW / 2 + 6} y2={yRun(WEEK)} stroke="#E88938" strokeOpacity="0.45" strokeDasharray="4 5" strokeWidth="1.5" />
      <polyline points={runPts} stroke="#E88938" strokeWidth="2.5" strokeLinejoin="round" />
      {running.map((r, i) => (
        <circle key={i} cx={xOf(i) + barW / 2 + 6} cy={yRun(r)} r="4" fill="#fff" stroke="#E88938" strokeWidth="2" />
      ))}
    </svg>
  );
}

const flow = [
  { name: "Draft", note: "Logged daily · half-hour steps", when: "21-25 Sep", state: "done" },
  { name: "Submitted", note: "Rupal Sharma · 40 h", when: "25 Sep 2026", state: "done" },
  { name: "Approved", note: "Anil Kapoor · sheet locked", when: "26 Sep 2026", state: "active" },
] as const;

export function TimesheetsVisual() {
  return (
    <VisualStage
      backdrop="sky"
      estHeight={620}
      padding={40}
      label="A weekly timesheet as stacked bars of hours per project for Monday to Friday, a running total reaching the 40 hour week, and the sheet moving from draft to submitted to approved."
    >
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-3">
          <Avatar initials="RS" size={40} />
          <div>
            <Eyebrow>Timesheet · week of 21 Sep 2026</Eyebrow>
            <p className="mt-0.5 text-[20px] font-bold tracking-tight text-ink">Rupal Sharma</p>
          </div>
        </div>
        <div className="flex items-baseline gap-5 pb-1">
          <p className="text-[12px] text-slate-500">
            Total <b className="tnum text-[22px] font-bold text-ink">{TOTAL} h</b>
          </p>
          <p className="text-[12px] text-slate-500">
            Billable <b className="tnum text-[22px] font-bold text-[#15147B]">{billable} h</b>
            <span className="tnum ml-1 text-[12px]">· 82.5%</span>
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-[1fr_250px] gap-6">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex gap-3.5">
              {projects.map((p) => (
                <span key={p.code} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                  <span className="h-2.5 w-2.5 rounded-sm" style={{ background: p.color }} />
                  {p.code}
                  <span className="tnum font-semibold text-ink">{p.h.reduce((a, b) => a + b, 0)} h</span>
                </span>
              ))}
            </div>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#B45309]">
              <span className="h-[3px] w-4 rounded bg-[#E88938]" /> Running total
            </span>
          </div>
          <div className="mt-3">
            <WeekChart />
          </div>
        </Card>

        <div className="flex flex-col">
          <p className="mb-3 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#5B45E8]">Sign-off</p>
          <div className="relative flex flex-1 flex-col gap-3">
            {flow.map((s, i) => (
              <div key={s.name} className="relative flex gap-3">
                {i < flow.length - 1 && <span className="absolute left-[15px] top-8 h-[calc(100%-12px)] w-[2px] bg-[#10B981]" />}
                <span
                  className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full text-[12px] font-bold ${
                    s.state === "active" ? "bg-[#10B981] text-white ring-[5px] ring-[#10B981]/20" : "bg-white text-[#047857] ring-2 ring-[#10B981]"
                  }`}
                >
                  ✓
                </span>
                <Card className={`flex-1 px-3.5 py-2.5 ${s.state === "active" ? "ring-2 ring-[#10B981]" : ""}`}>
                  <div className="flex items-baseline justify-between">
                    <p className="text-[13px] font-semibold text-ink">{s.name}</p>
                    <p className="tnum text-[10.5px] text-slate-400">{s.when}</p>
                  </div>
                  <p className="text-[11px] text-slate-500">{s.note}</p>
                </Card>
              </div>
            ))}
            <p className="mt-1 rounded-xl bg-white/70 px-3.5 py-2.5 text-[11px] leading-snug text-slate-500 ring-1 ring-[#15147B]/[0.06]">
              A rejected sheet goes back to <b className="font-semibold text-ink">Draft</b> for revision, never lost.
            </p>
          </div>
        </div>
      </div>
    </VisualStage>
  );
}
