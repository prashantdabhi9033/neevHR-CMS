import { Card, Paper, VisualStage } from "@/components/visuals/Stage";

// A disciplinary case is a dated paper trail, so the image is the case register with one open case's trail and the notice
// it issued. Stages and labels are the product's own (features/disciplinary). Wording of the sample notice is a sample.

const cards = [
  ["Open", "6"],
  ["Reply overdue", "1"],
  ["In inquiry", "2"],
  ["Suspended", "1"],
  ["Closed", "14"],
];

const rows = [
  { no: "DC-0031", who: "Rakesh Yadav", dept: "Plant", cat: "Attendance", sev: "Minor", stage: "Show-cause", on: true },
  { no: "DC-0029", who: "Imran Sheikh", dept: "Stores", cat: "Policy", sev: "Major", stage: "Inquiry" },
  { no: "DC-0027", who: "Nitin Joshi", dept: "Sales", cat: "Conduct", sev: "Minor", stage: "Reply received" },
  { no: "DC-0024", who: "Geeta Bisht", dept: "Plant", cat: "Safety", sev: "Major", stage: "Decision pending" },
];

const trail = [
  ["02 Oct 2026", "Case opened"],
  ["06 Oct 2026", "Show-cause notice issued"],
  ["07 Oct 2026", "Employee acknowledged a notice"],
];

export function DisciplinaryVisual() {
  return (
    <VisualStage
      backdrop="cream"
      width={860}
      estHeight={620}
      label="A sample disciplinary register with counts by stage and four cases, one open case's timeline, and the show-cause notice issued on it."
    >
      <p className="text-[18px] font-bold text-ink">Disciplinary</p>
      <div className="mt-3 flex gap-2.5">
        {cards.map(([k, v]) => (
          <div key={k} className="flex-1 rounded-xl bg-white px-3.5 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
            <p className="tnum text-[20px] font-bold leading-none text-ink">{v}</p>
            <p className="mt-1 text-[11px] text-slate-500">{k}</p>
          </div>
        ))}
      </div>
      <Card className="mt-3 overflow-hidden">
        <table className="w-full text-left text-[12.5px]">
          <thead className="bg-[#FAFAFC] text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              {["Case", "Employee", "Department", "Category", "Severity", "Stage"].map((h) => (
                <th key={h} className="px-3.5 py-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.no} className={`border-t border-slate-100 ${r.on ? "bg-[#F3F0FF]" : ""}`}>
                <td className="tnum px-3.5 py-2 font-semibold text-ink">{r.no}</td>
                <td className="px-3.5 py-2 text-ink">{r.who}</td>
                <td className="px-3.5 py-2 text-slate-600">{r.dept}</td>
                <td className="px-3.5 py-2 text-slate-600">{r.cat}</td>
                <td className="px-3.5 py-2 text-slate-600">{r.sev}</td>
                <td className="px-3.5 py-2">
                  <span className="rounded bg-[#EEEAFE] px-2 py-0.5 text-[11.5px] font-medium text-[#4A34D1]">{r.stage}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="mt-4 grid grid-cols-[1fr_1.15fr] items-start gap-4">
        <Card className="px-4 py-3.5">
          <p className="text-[13px] font-bold text-ink">DC-0031 timeline</p>
          <ol className="mt-2.5 space-y-2.5">
            {trail.map(([d, t]) => (
              <li key={t} className="flex gap-2.5 text-[12px]">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#5B45E8]" />
                <span>
                  <span className="block font-medium text-ink">{t}</span>
                  <span className="tnum text-slate-500">{d}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[11.5px] font-medium">
            <span className="rounded-md border border-slate-200 px-2 py-1 text-ink">Issue a notice</span>
            <span className="rounded-md border border-slate-200 px-2 py-1 text-ink">Start inquiry</span>
            <span className="rounded-md border border-slate-200 px-2 py-1 text-ink">Close with outcome</span>
          </div>
        </Card>
        <Paper rotate={0.6} className="px-5 py-4 text-[11.5px] leading-relaxed text-[#3a3a44]">
          <p className="text-center text-[12.5px] font-bold tracking-wide text-ink">SHOW-CAUSE NOTICE</p>
          <p className="tnum mt-2 flex justify-between text-slate-500"><span>Case DC-0031</span><span>06 Oct 2026</span></p>
          <p className="mt-2">To Rakesh Yadav, Plant. It is alleged that you were absent without leave on several days in September 2026.</p>
          <p className="mt-1.5">Please reply in writing by the date on this notice, explaining why action should not be taken. You may reply in NeevHR or on paper.</p>
        </Paper>
      </div>
    </VisualStage>
  );
}
