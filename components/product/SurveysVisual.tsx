import { ProductFrame, StatTile } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { FloatCard, Tag, Toast } from "@/components/showcase/parts";

// Designed survey results mock: the eNPS distribution and dimension scores, with the question set behind.
// Lifted pieces: by-department segments with a group suppressed under the anonymity floor, and the survey closing.
// 175 of 201 responded (87%): 105 promoters (60%), 39 passives (22%), 31 detractors (18%) = eNPS +42.
const dims = [
  { label: "Leadership", score: 4.2 },
  { label: "Growth", score: 3.6 },
  { label: "Recognition", score: 3.9 },
  { label: "Work-life", score: 4.4 },
];

const questions = [
  { q: "How likely are you to recommend Aikyora as a place to work?", type: "eNPS 0-10" },
  { q: "My manager supports my growth.", type: "Agreement" },
  { q: "I am recognised for good work.", type: "Rating 1-5" },
  { q: "What one thing should we change?", type: "Open text" },
];

// By-department eNPS: (promoters - detractors) / responses. Legal has 3 responses, below the floor of 5.
const segments: { dept: string; n: number; enps: string; hidden?: boolean }[] = [
  { dept: "Engineering", n: 68, enps: "+49" },
  { dept: "Operations", n: 44, enps: "+41" },
  { dept: "Sales", n: 42, enps: "+36" },
  { dept: "Support", n: 18, enps: "+33" },
  { dept: "Legal", n: 3, enps: "", hidden: true },
];

const floaters: Floater[] = [
  {
    width: 300,
    pos: { right: 0, top: 150 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Segment analysis" title="eNPS by department" meta="Q3 pulse · anonymity floor 5 responses" tag={<Tag tone="info">Protected</Tag>}>
        <div className="rounded-xl bg-slate-50/80 p-3 ring-1 ring-slate-100">
          <div className="mb-1.5 flex justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            <span>Department</span>
            <span>Responses · eNPS</span>
          </div>
          {segments.map((s) => (
            <div key={s.dept} className="flex items-center justify-between py-1 text-[12px]">
              <span className={s.hidden ? "text-slate-400" : "text-slate-600"}>{s.dept}</span>
              {s.hidden ? (
                <span className="rounded-md bg-slate-200/70 px-1.5 py-0.5 text-[10.5px] font-semibold text-slate-500">Suppressed · under 5</span>
              ) : (
                <span className="tnum font-medium text-slate-700">
                  {s.n} · <span className="font-bold text-emerald-700">{s.enps}</span>
                </span>
              )}
            </div>
          ))}
          <div className="mt-2 flex items-baseline justify-between border-t border-dashed border-slate-200 pt-2">
            <span className="text-[12.5px] font-semibold text-ink">All responses · 175</span>
            <span className="tnum text-[18px] font-bold text-ink">+42</span>
          </div>
        </div>
        <p className="mt-2.5 text-[11px] text-slate-500">Groups under 5 responses are hidden to protect identity.</p>
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 24 },
    look: "glass",
    node: <Toast tone="info" glyph="✓" title="Q3 pulse closed" sub="175 of 201 responded · 87%" />,
  },
];

export function SurveysVisual() {
  return (
    <ProductFrame title="NeevHR · Surveys · Q3 pulse" floaters={floaters} actions={<><WinButton>Duplicate</WinButton><WinButton primary>New survey</WinButton></>}>
      <Soft className="grid grid-cols-3 gap-4">
        <StatTile label="eNPS" value="+42" sub="promoters minus detractors" tone="accent" />
        <StatTile label="Response rate" value="87%" sub="175 of 201" />
        <StatTile label="Anonymity floor" value="5" sub="responses per group" />
      </Soft>

      <div className="mt-4 grid grid-cols-[1.15fr_1fr] gap-4">
        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-white p-4">
            <p className="text-sm font-semibold text-ink">eNPS distribution</p>
            <div className="mt-3 flex h-8 overflow-hidden rounded-lg">
              <div className="flex items-center justify-center bg-red-400 text-[11px] font-semibold text-white" style={{ width: "18%" }}>18%</div>
              <div className="flex items-center justify-center bg-slate-200 text-[11px] font-semibold text-slate-600" style={{ width: "22%" }}>22%</div>
              <div className="flex items-center justify-center bg-success text-[11px] font-semibold text-white" style={{ width: "60%" }}>60%</div>
            </div>
            <div className="mt-2 flex justify-between text-[11px] text-muted">
              <span>Detractors 31</span><span>Passives 39</span><span>Promoters 105</span>
            </div>
          </div>

          <div className="rounded-xl border border-line bg-white p-4">
            <p className="text-sm font-semibold text-ink">Score by dimension</p>
            <div className="mt-3 space-y-2.5">
              {dims.map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 text-xs text-body">{d.label}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-soft">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${(d.score / 5) * 100}%` }} />
                  </div>
                  <span className="tnum w-7 text-right text-xs font-semibold text-ink">{d.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Soft className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Questions · 4</p>
          <div className="mt-3 space-y-2.5">
            {questions.map((q, i) => (
              <div key={q.q} className="rounded-lg border border-line px-3 py-2.5">
                <p className="text-[12px] text-ink">
                  <span className="mr-1 font-semibold text-muted">Q{i + 1}</span>
                  {q.q}
                </p>
                <span className="mt-1.5 inline-block rounded-md bg-surface-soft px-1.5 py-0.5 text-[10px] font-semibold text-muted">{q.type}</span>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
