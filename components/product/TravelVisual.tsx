import { Paper, VisualStage } from "@/components/visuals/Stage";

// Business travel is a trip that has to be allowed, approved, booked and then squared up. So the image is a
// paper desk: the flight request as a boarding-pass style card (the travel desk's booking reference on the
// stub), the grade x band entitlement it was checked against, and the approval trail through to the
// expense reconciliation. Estimate ₹11,850 is within the E3 domestic flight cap of ₹12,000; claimed and
// sanctioned ₹11,420, so the variance is ₹11,420 - ₹11,850 = -₹430.

const grades = ["E1", "E2", "E3", "M1", "M2"];
const bands = ["Local (intra-city)", "Domestic", "International"];
const caps: (string | null)[][] = [
  [null, null, null],
  [null, "₹9,000", null],
  [null, "₹12,000", "₹75,000"],
  [null, "₹16,000", "₹90,000"],
  [null, "₹22,000", "₹1,20,000"],
];

const trail = [
  { title: "Stage 1 · Reporting manager", note: "Approved by Rohan Desai · 16 Sep 2026", tone: "bg-emerald-500" },
  { title: "Stage 2 · Finance Manager", note: "Approved by Kavita Rao · 17 Sep 2026", tone: "bg-emerald-500" },
  { title: "Booked by travel desk", note: "PNR K7Q2ZM recorded · 17 Sep 2026", tone: "bg-[#5B45E8]" },
];

function Plane() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M21.5 15.5v-2l-8-5V3.2a1.5 1.5 0 0 0-3 0v5.3l-8 5v2l8-2.5v5.2l-2 1.5V21l3.5-1 3.5 1v-1.3l-2-1.5V13z"
        fill="#15147B"
        transform="rotate(90 12 12)"
      />
    </svg>
  );
}

function Pass() {
  const fields = [
    ["Passenger", "Priya Menon"],
    ["Grade", "E3"],
    ["Class", "Economy"],
    ["Round trip?", "Yes"],
    ["Depart", "22 Sep 2026"],
    ["Return", "24 Sep 2026"],
  ];
  return (
    <Paper rotate={-1} className="relative flex overflow-hidden">
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">Flight ticket request · Domestic</p>
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">Booked</span>
        </div>
        <div className="mt-3 flex items-center gap-5">
          <div>
            <p className="text-[44px] font-bold leading-none tracking-tight text-[#15147B]">BOM</p>
            <p className="mt-1 text-[12px] text-slate-500">Mumbai</p>
          </div>
          <div className="flex flex-1 items-center gap-2">
            <span className="h-px flex-1 border-t-2 border-dashed border-slate-300" />
            <Plane />
            <span className="h-px flex-1 border-t-2 border-dashed border-slate-300" />
          </div>
          <div className="text-right">
            <p className="text-[44px] font-bold leading-none tracking-tight text-[#15147B]">BLR</p>
            <p className="mt-1 text-[12px] text-slate-500">Bengaluru</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-6 gap-3 border-t border-slate-100 pt-3">
          {fields.map(([k, v]) => (
            <div key={k}>
              <p className="text-[10.5px] uppercase tracking-wider text-slate-400">{k}</p>
              <p className="tnum mt-0.5 text-[12px] font-semibold text-ink">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Perforation */}
      <div className="relative w-0">
        <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-[#F7F3EB]" />
        <span className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-[#F7F3EB]" />
        <span className="absolute inset-y-4 left-0 border-l-2 border-dashed border-slate-200" />
      </div>

      <div className="w-[210px] bg-[#FBFAF6] p-6">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-400">Travel desk</p>
        <p className="mt-2 text-[11px] text-slate-500">Booking reference</p>
        <p className="font-mono text-[22px] font-bold tracking-[0.12em] text-ink">K7Q2ZM</p>
        <div className="mt-3 space-y-1 text-[12px]">
          <div className="flex justify-between">
            <span className="text-slate-500">Estimate</span>
            <span className="tnum font-semibold text-ink">₹11,850</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">E3 cap</span>
            <span className="tnum font-semibold text-ink">₹12,000</span>
          </div>
        </div>
        <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-500 text-[10px] text-white">✓</span>
          Within entitlement
        </p>
      </div>
    </Paper>
  );
}

function Entitlements() {
  return (
    <Paper rotate={0.8} className="p-5">
      <p className="text-[13px] font-bold text-ink">Entitlement · Flight ticket</p>
      <p className="text-[11px] text-slate-500">Grade × band · allowed and cap</p>
      <table className="mt-3 w-full border-separate border-spacing-y-1 text-[11.5px]">
        <thead>
          <tr className="text-left text-[10.5px] uppercase tracking-wider text-slate-400">
            <th className="font-semibold">Grade</th>
            {bands.map((b) => (
              <th key={b} className="text-right font-semibold">
                {b.replace(" (intra-city)", "")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {grades.map((g, gi) => (
            <tr key={g} className={g === "E3" ? "bg-[#EEEAFE]" : ""}>
              <td className={`rounded-l-md py-1 pl-1.5 font-semibold ${g === "E3" ? "text-[#4A34D1]" : "text-ink"}`}>{g}</td>
              {caps[gi].map((c, bi) => {
                const hit = g === "E3" && bi === 1;
                return (
                  <td key={bi} className={`tnum py-1 pr-1.5 text-right ${bi === 2 ? "rounded-r-md" : ""}`}>
                    {c ? (
                      <span className={hit ? "rounded-md bg-[#15147B] px-1.5 py-0.5 font-bold text-white" : "text-slate-700"}>{c}</span>
                    ) : (
                      <span className="text-slate-300">Not entitled</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
}

function Trail() {
  return (
    <Paper rotate={-0.6} className="p-5">
      <p className="text-[13px] font-bold text-ink">Approval trail</p>
      <div className="mt-3 space-y-3">
        {trail.map((t, i) => (
          <div key={t.title} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className={`mt-1 h-2.5 w-2.5 rounded-full ${t.tone}`} />
              {i < trail.length - 1 && <span className="mt-1 w-px flex-1 bg-slate-200" />}
            </div>
            <div>
              <p className="text-[12px] font-semibold text-ink">{t.title}</p>
              <p className="text-[11px] text-slate-500">{t.note}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-[#F7F3EB] p-3">
        <p className="text-[11px] font-semibold text-slate-600">Reconciled · expense claim EXP-0409</p>
        <div className="mt-2 grid grid-cols-4 gap-2 text-center">
          {[
            ["Estimate", "₹11,850", "text-ink"],
            ["Claimed", "₹11,420", "text-ink"],
            ["Sanctioned", "₹11,420", "text-ink"],
            ["Variance", "-₹430", "text-emerald-600"],
          ].map(([k, v, tone]) => (
            <div key={k}>
              <p className={`tnum text-[12.5px] font-bold ${tone}`}>{v}</p>
              <p className="text-[10.5px] text-slate-500">{k}</p>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
}

export function TravelVisual() {
  return (
    <VisualStage
      width={880}
      estHeight={640}
      backdrop="cream"
      label="A NeevHR flight request from Mumbai to Bengaluru shown as a boarding pass with the booking reference, the grade entitlement matrix it was checked against, and its approval trail and expense reconciliation."
    >
      <Pass />
      <div className="mt-7 grid grid-cols-[1fr_1fr] gap-6">
        <Entitlements />
        <Trail />
      </div>
    </VisualStage>
  );
}
