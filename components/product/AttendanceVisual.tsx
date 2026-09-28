import { Card, Eyebrow, Phone, VisualStage } from "@/components/visuals/Stage";

// Attendance means many ways to punch, ONE record per person per day. So the image converges: three
// capture sources on the left (a biometric gate pushing over ADMS, the real employee app, a web check-out)
// are wired into the day record in the middle, where first-in to last-out becomes worked hours and the
// grace rule is applied; the month those records build sits on the right. Fri 25 Sep: 09:32 to 18:41 =
// 9h 09m gross; 09:32 is inside the 09:30 + 15 min grace, so no late mark. Month to 28 Sep matches the
// app screenshot: 17 Present + 1 WFH + 1 On Leave + 1 Holiday + 8 Weekend = 28 days.

type S = "P" | "WFH" | "L" | "H" | "W" | "F";
// 01 Sep 2026 is a Tuesday. Late-in on 22 Sep, missing out-punch with regularization pending on 23 Sep.
const month: S[] = [
  "P", "P", "P", "P", "W", "W", "P", "P", "WFH", "P", "P", "W", "W", "H", "P", "P", "P", "L", "W", "W",
  "P", "P", "P", "P", "P", "W", "W", "P", "F", "F",
];
const LATE = 22;
const REG = 23;
const RECORD = 25;
const TODAY = 28;

const tone: Record<S, string> = {
  P: "bg-[#10B981] text-white",
  WFH: "bg-[#0EA5E9] text-white",
  L: "bg-[#F59E0B] text-white",
  H: "bg-[#5B45E8] text-white",
  W: "bg-[#E2E8F0] text-slate-500",
  F: "border border-dashed border-slate-300 bg-white/60 text-slate-300",
};
const legend: [S, string, number][] = [
  ["P", "Present", 17],
  ["WFH", "WFH", 1],
  ["L", "On Leave", 1],
  ["H", "Holiday", 1],
  ["W", "Weekend", 8],
];

// Left column geometry (design px); connector ends are computed from these.
const BIO_H = 112;
const WEB_H = 112;
const COL_GAP = 20;
const PHONE_W = 172;
const PHONE_H = Math.round(((PHONE_W - 18) * 844) / 390) + 18;
const LEFT_H = BIO_H + WEB_H + PHONE_H + COL_GAP * 2;
const srcY = { bio: BIO_H / 2, web: BIO_H + COL_GAP + WEB_H / 2, phone: BIO_H + WEB_H + COL_GAP * 2 + PHONE_H / 2 };
// Where each punch row sits inside the record card (row centres).
const rowY = { in25: 150, out25: 206, in28: 462 };

function SourceTag({ kind }: { kind: "Biometric" | "Web" | "Mobile" }) {
  const c = kind === "Biometric" ? "bg-[#E4E8FF] text-[#15147B]" : kind === "Web" ? "bg-[#EDE7FF] text-[#4A34D1]" : "bg-[#DDF3FB] text-[#0E6A8A]";
  return <span className={`rounded-md px-1.5 py-0.5 text-[10.5px] font-semibold ${c}`}>{kind}</span>;
}

function PunchRow({ dir, time, kind, where, y }: { dir: "IN" | "OUT"; time: string; kind: "Biometric" | "Web" | "Mobile"; where: string; y: number }) {
  return (
    <div className="absolute inset-x-5 flex items-center gap-3" style={{ top: y - 22, height: 44 }}>
      <span className={`w-9 text-[10.5px] font-bold tracking-wider ${dir === "IN" ? "text-[#047857]" : "text-slate-500"}`}>{dir}</span>
      <span className="tnum w-[52px] text-[17px] font-bold text-ink">{time}</span>
      <div className="min-w-0 flex-1">
        <SourceTag kind={kind} />
        <p className="mt-0.5 truncate text-[11px] text-slate-500">{where}</p>
      </div>
    </div>
  );
}

function BiometricCard() {
  return (
    <Card className="flex items-center gap-3 p-4" style={{ height: BIO_H }}>
      <svg width="44" height="60" viewBox="0 0 44 60" aria-hidden>
        <rect x="1" y="1" width="42" height="58" rx="8" fill="#15147B" />
        <rect x="7" y="7" width="30" height="18" rx="3" fill="#A9A8E8" />
        <text x="22" y="19.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#15147B">09:32</text>
        <g stroke="#A9A8E8" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <path d="M16 46 a6 6 0 0 1 12 0" />
          <path d="M13 47 a9 9 0 0 1 18 0" />
          <path d="M19 47 a3 3 0 0 1 6 0" />
        </g>
      </svg>
      <div className="min-w-0">
        <p className="text-[13px] font-semibold text-ink">eSSL · Gate 1</p>
        <p className="text-[11px] text-slate-500">Biometric · ADMS push</p>
        <p className="mt-1.5 flex items-center gap-1.5 text-[10.5px] font-medium text-[#047857]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> Last seen 09:52
        </p>
      </div>
    </Card>
  );
}

function WebCard() {
  return (
    <Card className="overflow-hidden" style={{ height: WEB_H }}>
      <div className="flex items-center gap-1 border-b border-slate-100 bg-slate-50 px-3 py-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        ))}
        <span className="ml-2 text-[10.5px] text-slate-400">Self-service · web</span>
      </div>
      <div className="px-4 py-2.5">
        <span className="inline-flex rounded-lg bg-[#15147B] px-3 py-1.5 text-[11.5px] font-semibold text-white">Check out</span>
        <p className="mt-1.5 text-[10.5px] leading-snug text-slate-500">Browser location + office IP allowlist</p>
      </div>
    </Card>
  );
}

function RecordCard() {
  return (
    <Card className="relative h-full">
      <div className="px-5 pt-5">
        <Eyebrow>Day record</Eyebrow>
        <p className="mt-1 text-[16px] font-bold text-ink">Aarav Shah · AIK042</p>
        <p className="text-[11px] text-slate-500">General 09:30-18:30 · Late-in grace 15 min</p>
      </div>
      <p className="absolute left-5 top-[100px] text-[11px] font-semibold text-slate-400">Fri 25 Sep 2026</p>
      <PunchRow dir="IN" time="09:32" kind="Biometric" where="eSSL · Gate 1" y={rowY.in25} />
      <PunchRow dir="OUT" time="18:41" kind="Web" where="Check out · office IP" y={rowY.out25} />
      <div className="absolute inset-x-5 rounded-xl bg-[#F4F3FE] p-3.5" style={{ top: 244 }}>
        <div className="flex items-baseline justify-between">
          <span className="text-[11.5px] text-slate-600">First in to last out</span>
          <span className="tnum text-[20px] font-bold text-[#15147B]">9h 09m</span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-[#15147B]/10 pt-2">
          <span className="text-[11px] text-slate-600">09:32 within grace (09:45)</span>
          <span className="text-[11px] font-semibold text-[#047857]">No late mark</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-[11px] text-slate-600">Day status</span>
          <span className="rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10.5px] font-semibold text-[#047857]">Present</span>
        </div>
      </div>
      <div className="absolute inset-x-5 border-t border-dashed border-slate-200" style={{ top: rowY.in28 - 56 }} />
      <p className="absolute left-5 text-[11px] font-semibold text-slate-400" style={{ top: rowY.in28 - 44 }}>
        Mon 28 Sep 2026 · today
      </p>
      <PunchRow dir="IN" time="09:12" kind="Mobile" where="Punch in · Hinjewadi geofence" y={rowY.in28} />
      <div className="absolute inset-x-5 flex items-center justify-between" style={{ top: rowY.in28 + 30 }}>
        <span className="text-[11px] text-slate-500">Out · awaiting punch</span>
        <span className="rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10.5px] font-semibold text-[#047857]">Checked in</span>
      </div>
      <div className="absolute inset-x-5 bottom-5 rounded-xl border border-dashed border-slate-200 px-3 py-2.5">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-400">Also lands in the same record</p>
        <div className="mt-1.5 flex gap-1.5">
          {["Regularization", "Admin entry", "Offline sync"].map((t) => (
            <span key={t} className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10.5px] font-semibold text-slate-600">{t}</span>
          ))}
        </div>
      </div>
    </Card>
  );
}

function MonthCard() {
  return (
    <Card className="p-5">
      <div className="flex items-baseline justify-between">
        <p className="text-[15px] font-bold text-ink">September 2026</p>
        <p className="text-[11px] text-slate-400">Pune</p>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1.5 text-center text-[10.5px] font-semibold text-slate-400">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
        <span />
        {month.map((s, i) => {
          const d = i + 1;
          return (
            <span
              key={d}
              className={`tnum relative grid h-[30px] place-items-center rounded-md text-[11px] font-semibold ${tone[s]} ${
                d === RECORD ? "ring-2 ring-[#15147B] ring-offset-2" : ""
              } ${d === TODAY ? "ring-2 ring-[#E88938] ring-offset-2" : ""} ${d === REG ? "!bg-white !text-[#B45309] ring-2 ring-inset ring-[#F59E0B]" : ""}`}
            >
              {d}
              {d === LATE && <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-[#DC2626] ring-1 ring-white" />}
            </span>
          );
        })}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {legend.map(([s, label, n]) => (
          <span key={s} className="flex items-center gap-1.5 text-[11px] text-slate-600">
            <span className={`h-2.5 w-2.5 rounded-sm ${tone[s]}`} />
            {label}
            <b className="tnum ml-auto font-semibold text-ink">{n}</b>
          </span>
        ))}
        <span className="flex items-center gap-1.5 text-[11px] text-slate-600">
          <span className="h-2 w-2 rounded-full bg-[#DC2626]" /> Late in
          <b className="tnum ml-auto font-semibold text-ink">1</b>
        </span>
      </div>
      <p className="mt-3 text-[11px] text-slate-500">
        <b className="font-semibold text-[#5B45E8]">14 Sep</b> Ganesh Chaturthi · Pune calendar
      </p>
      <div className="mt-3 rounded-xl bg-[#FFF7ED] p-3 ring-1 ring-[#F59E0B]/30">
        <p className="text-[11.5px] font-semibold text-[#92400E]">23 Sep · Missing out-punch</p>
        <p className="mt-0.5 text-[11px] text-slate-600">Regularization pending · &quot;Forgot to punch&quot; · out 18:52</p>
      </div>
    </Card>
  );
}

export function AttendanceVisual() {
  const connW = 64;
  const recordTop = 0;
  const target = (y: number) => recordTop + y;
  const lines = [
    { from: srcY.bio, to: target(rowY.in25), color: "#15147B" },
    { from: srcY.web, to: target(rowY.out25), color: "#5B45E8" },
    { from: srcY.phone, to: target(rowY.in28), color: "#0EA5E9" },
  ];
  return (
    <VisualStage
      width={1000}
      estHeight={760}
      backdrop="sky"
      padding={44}
      label="Three attendance capture sources, a biometric gate device, the NeevHR employee app and a web check-out, converging into one day record with worked hours and the grace rule, beside the month of attendance statuses."
    >
      <div className="mb-4 grid grid-cols-[180px_64px_326px_40px_1fr] text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#5B45E8]">
        <span>Capture</span>
        <span />
        <span>One record</span>
        <span />
        <span>The month</span>
      </div>
      <div className="grid grid-cols-[180px_64px_326px_40px_1fr] items-start">
        <div className="flex flex-col" style={{ gap: COL_GAP, height: LEFT_H }}>
          <BiometricCard />
          <WebCard />
          {/* Real screenshot of the NeevHR employee app (Attendance tab, Mon 28 Sep 2026, in 09:12). */}
          <Phone src="/mobile/ess-attendance.png" alt="NeevHR employee app attendance screen showing checked in at 09:12" width={PHONE_W} className="self-center" />
        </div>
        <svg width={connW} height={LEFT_H} viewBox={`0 0 ${connW} ${LEFT_H}`} fill="none" aria-hidden>
          {lines.map((l, i) => (
            <g key={i}>
              <path d={`M0 ${l.from} C ${connW / 2} ${l.from}, ${connW / 2} ${l.to}, ${connW} ${l.to}`} stroke={l.color} strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="3" cy={l.from} r="3.5" fill={l.color} />
              <circle cx={connW - 3} cy={l.to} r="3.5" fill={l.color} />
            </g>
          ))}
        </svg>
        <div style={{ height: LEFT_H }}>
          <RecordCard />
        </div>
        <span />
        <MonthCard />
      </div>
    </VisualStage>
  );
}
