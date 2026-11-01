import { Card, VisualStage } from "@/components/visuals/Stage";

// The POSH route is two views that do not touch: what an employee sees, and the committee's own case list. Labels are the
// product's (features/ess/EssPoshPage, features/posh). No statutory day limit appears here: adviser review is pending.

const members = [
  ["Sunita Rao", "Presiding Officer"],
  ["Kiran Desai", "Member"],
  ["Aarti Bhatt", "Member"],
  ["Meenal Shah", "External member"],
];

const cases = [
  { ref: "IC-2026-004", stage: "Inquiry", next: "12 Nov 2026" },
  { ref: "IC-2026-003", stage: "Conciliation", next: "20 Nov 2026" },
  { ref: "IC-2026-002", stage: "Report issued", next: "Employer's action" },
];

const timeline = ["Complaint received", "Complaint admitted, notice sent to the respondent", "Inquiry started"];

export function PoshVisual() {
  return (
    <VisualStage
      backdrop="lilac"
      width={860}
      estHeight={560}
      label="A sample POSH route. On the left, the employee's page names the Internal Committee and offers Make a complaint. On the right, the committee's own list of three cases, with case references instead of names, and one case's timeline."
    >
      <div className="grid grid-cols-[1fr_1.2fr] items-start gap-4">
        <Card className="px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5B45E8]">What an employee sees</p>
          <p className="mt-1 text-[16px] font-bold text-ink">Make a complaint</p>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-slate-600">
            Only the Internal Committee reads this. HR, your manager and company admins cannot see it.
          </p>
          <p className="mt-3.5 text-[12.5px] font-semibold text-ink">Your Internal Committee</p>
          <ul className="mt-1.5 space-y-1.5">
            {members.map(([n, r]) => (
              <li key={n} className="flex items-center justify-between gap-3 text-[12.5px]">
                <span className="text-ink">{n}</span>
                <span className="text-slate-500">{r}</span>
              </li>
            ))}
          </ul>
          <span className="mt-4 inline-block rounded-lg bg-[#15147B] px-3.5 py-1.5 text-[12.5px] font-semibold text-white">Make a complaint</span>
          <p className="mt-3 text-[11.5px] leading-snug text-slate-500">If your complaint cannot go to this committee, the page shows your district&apos;s Local Committee.</p>
        </Card>
        <div className="space-y-3">
          <Card className="overflow-hidden">
            <p className="px-4 pt-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5B45E8]">The committee only</p>
            <table className="mt-1.5 w-full text-left text-[12.5px]">
              <thead className="text-[11px] font-semibold text-slate-500">
                <tr>
                  {["Case", "Stage", "Next date"].map((h) => (
                    <th key={h} className="px-4 py-1.5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cases.map((c, i) => (
                  <tr key={c.ref} className={`border-t border-slate-100 ${i === 0 ? "bg-[#F3F0FF]" : ""}`}>
                    <td className="tnum px-4 py-2 font-semibold text-ink">{c.ref}</td>
                    <td className="px-4 py-2 text-slate-600">{c.stage}</td>
                    <td className="tnum px-4 py-2 text-slate-600">{c.next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <Card className="px-4 py-3.5">
            <p className="text-[13px] font-bold text-ink">IC-2026-004 timeline</p>
            <ol className="mt-2 space-y-2">
              {timeline.map((t) => (
                <li key={t} className="flex gap-2.5 text-[12px] text-ink">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#5B45E8]" />
                  {t}
                </li>
              ))}
            </ol>
            <p className="mt-3 flex items-center gap-1.5 text-[11.5px] text-slate-500">Every read is recorded. Annual report: counts with no names.</p>
          </Card>
        </div>
      </div>
    </VisualStage>
  );
}
