import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Leave means "configure the policy once, it applies everywhere". So the image reads left to right as
// cause and effect: one Casual leave policy (its rules), fanned out to the departments it applies to
// (each showing a rule taking effect), then the Sales team calendar where the sandwich rule turns
// Rohan's Fri 09 + Mon 12 Oct 2026 into 4 days debited (Sat 10, Sun 11 enclosed). CL 12 a year:
// Rohan has 8 left, 8 - 4 = 4. 28 Sep 2026 is a Monday, so 05 Oct is a Monday.

const rules = [
  ["Accrual", "1 day on the 1st of each month"],
  ["New joiners", "Prorated if joining after the 15th"],
  ["Year end", "Lapses, no carry-forward"],
  ["Sandwich rule", "Enclosed week-offs count"],
  ["Approval", "Reporting manager"],
];

const groups = [
  {
    dept: "Engineering",
    people: 84,
    faces: ["ID", "TJ", "AK"],
    effect: "Aditi Kulkarni joined 18 Sep 2026",
    result: "First credit 01 Oct",
  },
  {
    dept: "Sales",
    people: 52,
    faces: ["JS", "RN", "PI"],
    effect: "Rohan Nair applied Fri 09 + Mon 12 Oct",
    result: "4 days debited",
  },
  {
    dept: "Operations",
    people: 61,
    faces: ["KV", "DM", "HV"],
    effect: "Monthly credit on 01 Oct 2026",
    result: "+1 day each",
  },
];

const CARD_H = 104;
const GAP = 14;
const colH = groups.length * CARD_H + (groups.length - 1) * GAP;

// 14 days from Mon 05 Oct 2026.
const days = Array.from({ length: 14 }, (_, i) => {
  const d = 5 + i;
  return { d, dow: "MTWTFSS"[i % 7], weekend: i % 7 >= 5 };
});

// [name, initials, start day, end day, kind]
const team: [string, string, number, number, "leave" | "sandwich" | "pending"][] = [
  ["Rohan Nair", "RN", 9, 12, "sandwich"],
  ["Priya Iyer", "PI", 14, 15, "leave"],
  ["Varun Sethi", "VS", 5, 5, "leave"],
  ["Sneha Pillai", "SP", 16, 16, "pending"],
];

const DAY_W = 44;

export function LeaveVisual() {
  return (
    <VisualStage
      width={1000}
      estHeight={760}
      backdrop="sky"
      padding={44}
      label="One NeevHR leave policy and its rules, applied to three departments, and its effect on a team calendar where the sandwich rule counts the enclosed weekend."
    >
      <div className="grid grid-cols-[360px_90px_1fr] items-center">
        <Card className="p-6">
          <Eyebrow>Leave policy</Eyebrow>
          <p className="mt-1 text-[20px] font-bold tracking-tight text-ink">Casual leave · 12 a year</p>
          <p className="text-[12px] text-slate-500">Effective 01 Apr 2026 · FY 2026-27</p>
          <div className="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-200">
            {rules.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-[12px]">
                <span className="text-slate-500">{k}</span>
                <span className={`text-right font-medium ${k === "Sandwich rule" ? "text-[#4A34D1]" : "text-ink"}`}>{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#F4F3FE] px-3.5 py-2.5">
            <span className="text-[12px] font-semibold text-[#4A34D1]">Applies to 3 departments</span>
            <span className="tnum text-[12px] text-slate-500">197 people</span>
          </div>
        </Card>

        <svg width="90" height={colH} viewBox={`0 0 90 ${colH}`} fill="none" aria-hidden>
          {groups.map((_, i) => {
            const y = i * (CARD_H + GAP) + CARD_H / 2;
            const mid = colH / 2;
            return (
              <g key={i}>
                <path d={`M0 ${mid} C 45 ${mid}, 45 ${y}, 90 ${y}`} stroke="#5B45E8" strokeWidth="2" opacity="0.55" />
                <circle cx="88" cy={y} r="3.5" fill="#5B45E8" />
              </g>
            );
          })}
          <circle cx="3" cy={colH / 2} r="5" fill="#5B45E8" />
        </svg>

        <div className="flex flex-col" style={{ gap: GAP }}>
          {groups.map((g) => (
            <Card key={g.dept} className="flex items-center gap-4 px-5" style={{ height: CARD_H }}>
              <div className="w-[120px] shrink-0">
                <p className="text-[14px] font-semibold text-ink">{g.dept}</p>
                <div className="mt-2 flex items-center">
                  {g.faces.map((f, i) => (
                    <span key={f} style={{ marginLeft: i ? -8 : 0 }}>
                      <Avatar initials={f} size={26} ring />
                    </span>
                  ))}
                  <span className="tnum ml-2 text-[11px] text-slate-500">{g.people}</span>
                </div>
              </div>
              <div className="min-w-0 flex-1 border-l border-slate-100 pl-4">
                <p className="text-[12px] text-slate-600">{g.effect}</p>
                <p className="mt-1 text-[14px] font-bold text-[#15147B]">{g.result}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* the effect on the team calendar */}
      <Card className="mt-8 p-5">
        <div className="flex items-baseline justify-between">
          <p className="text-[14px] font-semibold text-ink">Sales team calendar · 05-18 Oct 2026</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-4 rounded bg-[#5B45E8]" />Approved</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-4 rounded border border-dashed border-[#E88938] bg-[#FFF4EA]" />Pending</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-4 rounded bg-[repeating-linear-gradient(135deg,#C4B8FF_0_3px,#EEEAFE_3px_6px)]" />Sandwiched week-off</span>
          </div>
        </div>
        <div className="mt-4 grid" style={{ gridTemplateColumns: `140px repeat(14, ${DAY_W}px) 1fr` }}>
          <span />
          {days.map((d) => (
            <div key={d.d} className={`pb-2 text-center ${d.weekend ? "text-slate-400" : "text-slate-600"}`}>
              <p className="text-[10.5px]">{d.dow}</p>
              <p className="tnum text-[12px] font-semibold">{String(d.d).padStart(2, "0")}</p>
            </div>
          ))}
          <span />
          {team.map(([name, ini, from, to, kind]) => (
            <div key={name} className="contents">
              <div className="flex items-center gap-2 border-t border-slate-100 py-2">
                <Avatar initials={ini} size={24} />
                <span className="truncate text-[12px] font-medium text-ink">{name}</span>
              </div>
              {days.map((d) => {
                const on = d.d >= from && d.d <= to;
                const first = d.d === from;
                const last = d.d === to;
                let cls = "";
                if (on && kind === "pending") cls = "border border-dashed border-[#E88938] bg-[#FFF4EA]";
                else if (on && kind === "sandwich" && d.weekend) cls = "bg-[repeating-linear-gradient(135deg,#C4B8FF_0_3px,#EEEAFE_3px_6px)]";
                else if (on) cls = "bg-[#5B45E8]";
                return (
                  <div key={d.d} className={`flex items-center border-t border-slate-100 py-2 ${d.weekend ? "bg-slate-50" : ""}`}>
                    {on && <span className={`h-5 w-full ${cls} ${first ? "ml-1 rounded-l-md" : ""} ${last ? "mr-1 rounded-r-md" : ""}`} />}
                  </div>
                );
              })}
              <div className="flex items-center border-t border-slate-100 pl-3">
                {kind === "sandwich" && (
                  <span className="whitespace-nowrap rounded-full bg-[#EEEAFE] px-2.5 py-1 text-[11px] font-semibold text-[#4A34D1]">4 days · CL 8 → 4</span>
                )}
                {kind === "pending" && (
                  <span className="whitespace-nowrap rounded-full bg-[#FFF4EA] px-2.5 py-1 text-[11px] font-semibold text-[#B45309]">Awaiting Jay</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </VisualStage>
  );
}
