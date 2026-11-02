import { Card, VisualStage } from "@/components/visuals/Stage";

// 360 feedback MEANS many views combined so nobody's answer can be picked out. So the image is the combined result:
// who was asked (status only, never a person's rating), competency scores on the 5-point scale, and a group held back
// below the threshold. Overall = (4.2 + 3.6 + 3.1) / 3 = 3.6. Sample data, threshold 3.

const competencies = [
  { name: "Communication", score: 4.2 },
  { name: "Teamwork", score: 3.6 },
  { name: "Decision making", score: 3.1 },
];
const reviewers = [
  ["Priya Sharma", "Manager", "Answered"],
  ["Aditi Rao", "Peer", "Answered"],
  ["Karan Desai", "Peer", "Answered"],
  ["Neha Joshi", "Direct report", "Pending"],
];

export function Feedback360Visual() {
  return (
    <VisualStage
      backdrop="canvas"
      width={760}
      estHeight={560}
      label="A sample 360 feedback round: three competency scores out of five, an overall of 3.6, a relationship group held back below the anonymity threshold, and a reviewer list that shows status only"
    >
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[18px] font-bold text-ink">360 round, Rohan Shah</p>
          <p className="text-[12px] text-slate-500">Standard 360 · Closes 30 Nov 2026 · Anonymity threshold 3</p>
        </div>
        <div className="rounded-xl bg-white px-4 py-2 text-center shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
          <p className="tnum text-[20px] font-bold leading-none text-ink">3.6 / 5</p>
          <p className="mt-1 text-[10px] text-slate-500">Combined result</p>
        </div>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr] gap-3">
        <Card className="px-5 py-4">
          <p className="mb-3 text-[13px] font-semibold text-ink">By competency</p>
          {competencies.map((c) => (
            <div key={c.name} className="mb-3 last:mb-0">
              <div className="flex justify-between text-[12.5px]">
                <span className="text-ink">{c.name}</span>
                <span className="tnum font-semibold text-ink">{c.score}</span>
              </div>
              <div className="mt-1 h-[7px] overflow-hidden rounded-full bg-[#EDEDF4]">
                <div className="h-full rounded-full bg-[#15147B]" style={{ width: `${(c.score / 5) * 100}%` }} />
              </div>
            </div>
          ))}
          <p className="mt-3 rounded-lg bg-[#F7F7FB] px-3 py-2 text-[11.5px] text-slate-600">
            Direct reports: 1 answer, held back below the threshold
          </p>
        </Card>
        <Card className="px-5 py-4">
          <p className="mb-2 text-[13px] font-semibold text-ink">Who was asked</p>
          {reviewers.map(([n, r, s]) => (
            <div key={n} className="flex items-center justify-between border-t border-[#EDEDF4] py-2 first:border-0">
              <div>
                <p className="text-[12.5px] font-medium text-ink">{n}</p>
                <p className="text-[11px] text-slate-500">{r}</p>
              </div>
              <span className={`text-[11px] font-semibold ${s === "Answered" ? "text-[#1F7A4D]" : "text-[#8a4a10]"}`}>{s}</span>
            </div>
          ))}
          <p className="mt-1 text-[10.5px] text-slate-500">Status only. No person&apos;s rating is shown.</p>
        </Card>
      </div>
    </VisualStage>
  );
}
