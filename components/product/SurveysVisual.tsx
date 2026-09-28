import { Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// A survey is one honest answer becoming a trustworthy number, so the image runs left to right on mint:
// an employee answering the 0-10 eNPS question, the answer passing through the anonymity gate, and the
// live results it lands in (eNPS split and the by-department view, where a group under the threshold is
// hidden). 175 of 201 responded (87%): 105 promoters (60%), 39 passives (22%), 31 detractors (18%),
// eNPS = (105 - 31) / 175 = +42. Departments 68 + 44 + 42 + 18 + 3 = 175; Legal (3) sits under the floor of 5.

const likert = ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"];

const segments: { dept: string; n: number; enps: number; hidden?: boolean }[] = [
  { dept: "Engineering", n: 68, enps: 49 },
  { dept: "Operations", n: 44, enps: 41 },
  { dept: "Sales", n: 42, enps: 36 },
  { dept: "Support", n: 18, enps: 33 },
  { dept: "Legal", n: 3, enps: 0, hidden: true },
];

function Lock({ size = 12, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      <rect x="2" y="5.2" width="8" height="5.6" rx="1.4" fill={color} />
      <path d="M3.9 5.2V3.9a2.1 2.1 0 0 1 4.2 0v1.3" stroke={color} strokeWidth="1.3" />
    </svg>
  );
}

function Respond() {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-bold text-ink">Q3 pulse</p>
        <span className="text-[11px] text-slate-400">closes 30 Sep 2026</span>
      </div>
      <p className="mt-4 text-[13px] font-semibold leading-snug text-ink">
        1. How likely are you to recommend Aikyora as a place to work? <span className="text-red-500">*</span>
      </p>
      <div className="mt-3 grid grid-cols-11 gap-1">
        {Array.from({ length: 11 }).map((_, i) => (
          <span
            key={i}
            className={`tnum grid h-[27px] place-items-center rounded-md text-[11.5px] font-semibold ${
              i === 9 ? "bg-[#15147B] text-white shadow-[0_6px_14px_-6px_rgba(21,20,123,0.7)]" : "border border-slate-200 text-slate-600"
            }`}
          >
            {i}
          </span>
        ))}
      </div>

      <p className="mt-5 text-[13px] font-semibold leading-snug text-ink">2. My manager supports my growth.</p>
      <div className="mt-2.5 space-y-1.5">
        {likert.map((l, i) => (
          <div key={l} className="flex items-center gap-2 text-[12px] text-slate-600">
            <span className={`grid h-3.5 w-3.5 place-items-center rounded-full border ${i === 3 ? "border-[#15147B]" : "border-slate-300"}`}>
              {i === 3 && <span className="h-2 w-2 rounded-full bg-[#15147B]" />}
            </span>
            <span className={i === 3 ? "font-semibold text-ink" : ""}>{l}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3.5">
        <span className="flex items-center gap-1.5 text-[11.5px] text-slate-500">
          <Lock size={11} color="#64748B" />
          Your response is anonymous.
        </span>
        <span className="rounded-lg bg-[#15147B] px-3.5 py-1.5 text-[12px] font-semibold text-white">Submit</span>
      </div>
    </Card>
  );
}

function Gate() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center">
      <svg className="absolute inset-0" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 60 100" aria-hidden>
        <line x1="0" y1="50" x2="60" y2="50" stroke="#10B981" strokeWidth="0.8" strokeDasharray="2 2.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(4,120,87,0.55)] ring-4 ring-emerald-100">
        <Lock size={16} color="#047857" />
      </span>
      <span className="relative mt-2 rounded-full bg-emerald-600 px-2 py-0.5 text-[10.5px] font-bold text-white">≥ 5</span>
    </div>
  );
}

function Results() {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <Eyebrow>Live results</Eyebrow>
          <p className="mt-1 text-[14px] font-bold text-ink">How likely are you to recommend Aikyora?</p>
        </div>
        <span className="tnum shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">87% · 175 of 201</span>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div>
          <p className="text-[11px] text-slate-500">eNPS</p>
          <p className="tnum text-[36px] font-bold leading-none text-emerald-600">+42</p>
        </div>
        <div className="flex-1">
          <div className="flex h-7 overflow-hidden rounded-md text-[11px] font-semibold">
            <span className="grid place-items-center bg-red-500 text-white" style={{ width: "18%" }}>18%</span>
            <span className="grid place-items-center bg-slate-200 text-slate-600" style={{ width: "22%" }}>22%</span>
            <span className="grid place-items-center bg-emerald-500 text-white" style={{ width: "60%" }}>60%</span>
          </div>
          <div className="mt-1.5 flex justify-between text-[10.5px] text-slate-500">
            <span>Detractors 31</span>
            <span>Passives 39</span>
            <span>Promoters 105</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-[12.5px] font-semibold text-ink">By department</p>
        <span className="text-[10.5px] text-slate-400">Responses · eNPS</span>
      </div>
      <div className="mt-2 divide-y divide-slate-100 rounded-xl ring-1 ring-slate-100">
        {segments.map((s) => (
          <div key={s.dept} className={`flex items-center gap-3 px-3 py-2 text-[12px] ${s.hidden ? "bg-slate-50" : ""}`}>
            <span className={`w-[82px] shrink-0 ${s.hidden ? "text-slate-400" : "text-slate-700"}`}>{s.dept}</span>
            {s.hidden ? (
              <>
                <span className="tnum w-7 text-right text-slate-400">&lt;5</span>
                <span className="ml-1 flex items-center gap-1.5 rounded-md bg-slate-200/70 px-2 py-0.5 text-[10.5px] font-semibold text-slate-500">
                  <Lock size={10} color="#64748B" />
                  Hidden, below threshold
                </span>
              </>
            ) : (
              <>
                <span className="tnum w-7 text-right text-slate-500">{s.n}</span>
                <span className="tnum ml-1 w-8 font-bold text-emerald-600">+{s.enps}</span>
                <span className="h-1.5 flex-1 rounded-full bg-slate-100">
                  <span className="block h-full rounded-full bg-emerald-500" style={{ width: `${(s.enps + 100) / 2}%` }} />
                </span>
              </>
            )}
          </div>
        ))}
      </div>
      <p className="mt-2.5 text-[11px] text-slate-500">Anonymity threshold 5: a group with fewer responses is never shown.</p>
    </Card>
  );
}

export function SurveysVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={620}
      backdrop="mint"
      padding={52}
      label="An employee answering a NeevHR eNPS survey question, the anonymity threshold, and the live results with a department hidden below the threshold."
    >
      <div className="grid grid-cols-[330px_58px_1fr] items-stretch">
        <div className="self-center">
          <Respond />
        </div>
        <Gate />
        <Results />
      </div>
    </VisualStage>
  );
}
