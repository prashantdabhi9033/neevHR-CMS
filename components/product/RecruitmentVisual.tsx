import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";

// Designed recruitment mock: the hiring funnel for one requisition, with this week's interview panels.
// Lifted pieces: the approved offer for Neel Mishra, a panel scorecard landing, and the validated requisition.
const stages: { name: string; count: number; people: string[]; conv?: number }[] = [
  { name: "Applied", count: 48, people: ["AK", "RS", "MP"] },
  { name: "Screened", count: 19, people: ["VN", "TD"], conv: 40 },
  { name: "Interview", count: 7, people: ["SG", "KV"], conv: 37 },
  { name: "Offer", count: 2, people: ["NM"], conv: 29 },
];

const panels = [
  { name: "Sneha Gupta", round: "Round 2 · Functional", when: "29 Sep, 11:00", status: "Scheduled" },
  { name: "Karan Verma", round: "Round 1 · Screening", when: "26 Sep, 15:30", status: "Feedback 3/3" },
  { name: "Aditya Rao", round: "Round 2 · Functional", when: "30 Sep, 10:00", status: "Scheduled" },
  { name: "Farhan Qureshi", round: "Round 1 · Screening", when: "01 Oct, 14:00", status: "Scheduled" },
];

const chip = "grid h-7 w-7 place-items-center rounded-full text-[10px] font-semibold ring-2 ring-white";
const tones = [
  "bg-brand-tint text-brand",
  "bg-success-tint text-success-dark",
  "bg-amber-100 text-amber-700",
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 120 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Offer · approved compensation" title="Neel Mishra" meta="Sales Manager (West) · joins 02 Nov 2026" tag={<Tag tone="success">Approved</Tag>}>
        <Steps steps={["Approved", "Released", "Accepted", "Onboard"]} at={1} />
        <div className="mt-3.5">
          <Rows rows={[["Fixed pay", "₹16,50,000"], ["Variable pay", "₹2,00,000"]]} total={["Annual CTC", "₹18,50,000"]} />
        </div>
        <p className="mt-2.5 text-[11px] text-slate-500">Valid till 30 Sep 2026 · full offer history kept</p>
        <Actions primary="Release offer" secondary="Letter" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast tone="info" glyph="★" title="Panel feedback complete" sub="Karan Verma · Round 1 · Hire" />,
  },
  {
    width: 260,
    pos: { left: 260, top: 0 },
    node: <Chip badge="REQ" tone="success" title="Requisition validated" sub="REQ-0142 · 2 openings · West" />,
  },
];

export function RecruitmentVisual() {
  return (
    <ProductFrame title="NeevHR · Recruitment · Sales Manager (West)" floaters={floaters} actions={<><WinButton>Board view</WinButton><WinButton primary>Add candidate</WinButton></>}>
      <Soft className="mb-4 flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-2.5 text-[12px] text-body">
        <span className="font-semibold text-ink">REQ-0142</span>
        <span>Sales · Mumbai</span>
        <span>2 openings</span>
        <span>Hiring manager: Rohan Desai</span>
      </Soft>

      <div className="grid grid-cols-[1.15fr_1fr] gap-4">
        <div className="rounded-xl border border-line bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Pipeline</p>
            <span className="text-xs text-muted">Stage conversion</span>
          </div>
          <div className="mt-3 space-y-3">
            {stages.map((s) => (
              <div key={s.name} className="rounded-lg border border-line bg-surface-soft/60 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-ink">{s.name}</p>
                  <div className="flex items-center gap-2">
                    {s.conv !== undefined && <span className="tnum text-[10.5px] font-medium text-muted">{s.conv}% from prev</span>}
                    <span className="tnum rounded-md bg-white px-1.5 py-0.5 text-[11px] font-semibold text-ink">{s.count}</span>
                  </div>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white">
                  <div className="h-1.5 rounded-full bg-brand" style={{ width: `${(s.count / 48) * 100}%` }} />
                </div>
                <div className="mt-2 flex -space-x-2">
                  {s.people.map((p, i) => (
                    <span key={p} className={`${chip} ${tones[i % tones.length]}`}>{p}</span>
                  ))}
                  {s.count > s.people.length && (
                    <span className={`${chip} bg-white text-muted`}>+{s.count - s.people.length}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Soft className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Interview panels · this week</p>
          <div className="mt-3 space-y-2.5">
            {panels.map((p) => (
              <div key={p.name} className="rounded-lg border border-line px-3 py-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-[12.5px] font-semibold text-ink">{p.name}</p>
                  <span className="text-[10.5px] font-semibold text-brand">{p.status}</span>
                </div>
                <p className="mt-0.5 text-[11px] text-muted">{p.round} · {p.when}</p>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
