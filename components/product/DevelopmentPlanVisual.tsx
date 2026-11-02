import { Avatar, Card, VisualStage } from "@/components/visuals/Stage";

// A development plan MEANS a person, what they will grow in, and what they will do by when. So the image is the plan
// itself: the source it started from, focus areas from skill gaps, actions with their type and progress, and the
// manager's approval. Progress: 100, 40 and 0, shown per action as in the product. Sample data.

const actions = [
  { type: "Course", title: "Finance for non-finance managers", due: "15 Dec 2026", pct: 100, status: "Completed", tone: "#1F7A4D" },
  { type: "Mentor", title: "Monthly review with Sanjay Menon", due: "31 Jan 2027", pct: 40, status: "In progress", tone: "#5B45E8" },
  { type: "Project", title: "Lead the Pune plant roster change", due: "28 Feb 2027", pct: 0, status: "Not started", tone: "#94A3B8" },
];

export function DevelopmentPlanVisual() {
  return (
    <VisualStage
      backdrop="lilac"
      width={760}
      estHeight={610}
      label="A sample development plan for one employee: started from a released appraisal, two focus areas from skill gaps, three actions with due dates and progress, approved by the manager"
    >
      <Card className="px-5 py-4">
        <div className="flex items-center gap-3">
          <Avatar initials="RS" size={44} />
          <div className="min-w-0 flex-1">
            <p className="text-[17px] font-bold leading-tight text-ink">Rohan Shah</p>
            <p className="text-[12.5px] text-slate-500">Assistant Manager, Operations · FY 2026-27 plan</p>
          </div>
          <span className="rounded-full bg-[#E4F1E9] px-3 py-1 text-[12px] font-semibold text-[#1F7A4D]">Approved by manager</span>
        </div>
        <p className="mt-3 rounded-lg bg-[#F7F7FB] px-3 py-2 text-[12.5px] text-slate-600">
          Started from <span className="font-semibold text-ink">Appraisal 2026-27</span>
        </p>
      </Card>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {[
          ["Focus area", "Financial acumen", "Skill gap from Skills"],
          ["Focus area", "Leading a team", "Discussed in 1:1 on 14 Nov 2026"],
        ].map(([k, t, s]) => (
          <Card key={t} className="px-4 py-3">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#5B45E8]">{k}</p>
            <p className="mt-0.5 text-[14px] font-semibold text-ink">{t}</p>
            <p className="mt-0.5 text-[11.5px] text-slate-500">{s}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-3 px-5 py-3">
        <p className="mb-2 text-[13px] font-semibold text-ink">Actions</p>
        {actions.map((a) => (
          <div key={a.title} className="border-t border-[#EDEDF4] py-2.5 first:border-0">
            <div className="flex items-center justify-between gap-3">
              <p className="min-w-0 text-[13px] font-medium text-ink">
                <span className="mr-2 rounded bg-[#EEEAFE] px-1.5 py-0.5 text-[10.5px] font-semibold text-[#15147B]">{a.type}</span>
                {a.title}
              </p>
              <p className="tnum shrink-0 text-[11.5px] text-slate-500">Due {a.due}</p>
            </div>
            <div className="mt-1.5 flex items-center gap-2">
              <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-[#EDEDF4]">
                <div className="h-full rounded-full" style={{ width: `${a.pct}%`, background: a.tone }} />
              </div>
              <span className="w-24 text-right text-[11.5px] font-semibold" style={{ color: a.tone === "#94A3B8" ? "#64748B" : a.tone }}>{a.status}</span>
            </div>
          </div>
        ))}
      </Card>
    </VisualStage>
  );
}
