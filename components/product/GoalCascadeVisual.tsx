import { Card, VisualStage } from "@/components/visuals/Stage";

// A cascade is a tree whose progress climbs it, so the image is the tree: one company objective, a team objective and a
// person's goal under it, each with its own bar. As in the product, progress is the plain average of what sits under an
// objective, each counting once: team (60 + 74) / 2 = 67; company (67 + 53) / 2 = 60. A goal not yet accepted does not count.

function Bar({ pct, tone = "#5B45E8" }: { pct: number; tone?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-[#EDEDF4]">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: tone }} />
      </div>
      <span className="tnum w-9 text-right text-[12px] font-semibold text-ink">{pct}%</span>
    </div>
  );
}

function Node({ level, title, owner, pct, children, tone }: { level: string; title: string; owner: string; pct?: number; children?: React.ReactNode; tone?: string }) {
  return (
    <Card className="px-4 py-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#5B45E8]">{level}</p>
          <p className="mt-0.5 text-[14px] font-semibold leading-snug text-ink">{title}</p>
        </div>
        <p className="shrink-0 text-right text-[11px] text-slate-500">{owner}</p>
      </div>
      {pct !== undefined ? (
        <div className="mt-2">
          <Bar pct={pct} tone={tone} />
        </div>
      ) : (
        <p className="mt-2 text-[12px] font-medium text-slate-500">Not started</p>
      )}
      {children}
    </Card>
  );
}

const Stem = ({ inset = 0 }: { inset?: number }) => <div className="h-4 w-px bg-[#C8C7EC]" style={{ marginLeft: 24 + inset }} />;

export function GoalCascadeVisual() {
  return (
    <VisualStage
      backdrop="canvas"
      width={760}
      estHeight={700}
      label="A sample goal cascade for a review cycle: a company objective at 60 percent, a team objective at 67 percent with a key result, an employee's linked goal, and a goal not yet linked."
    >
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[18px] font-bold text-ink">Goal cascade</p>
          <p className="text-[12px] text-slate-500">Review cycle: FY 2026-27</p>
        </div>
        <div className="flex gap-2 text-center">
          {[["Company objectives", "1"], ["Team objectives", "2"], ["Goals linked", "14"], ["Goals not linked", "3"]].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white px-3 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
              <p className="tnum text-[16px] font-bold leading-none text-ink">{v}</p>
              <p className="mt-1 text-[10px] text-slate-500">{k}</p>
            </div>
          ))}
        </div>
      </div>

      <Node level="Company" title="Make payroll queries a thing of the past" owner="Neha Kapoor" pct={60} tone="#15147B" />
      <Stem />
      <div className="ml-6">
        <Node level="Team · Payroll" title="Reduce monthly payroll queries" owner="Sanjay Menon" pct={67}>
          <div className="mt-2.5 rounded-lg bg-[#F7F7FB] px-3 py-2">
            <p className="text-[11px] font-semibold text-slate-500">Key result</p>
            <div className="mt-1 flex items-center justify-between gap-3 text-[12px] text-ink">
              <span>Queries a month, from 200 down to 80</span>
              <span className="tnum font-semibold">128 now · 60%</span>
            </div>
          </div>
        </Node>
        <Stem />
        <div className="ml-6">
          <Node level="Person · Linked goal" title="Publish a payslip FAQ for employees" owner="Divya Pillai" pct={74} tone="#10B981" />
        </div>
      </div>
      <Stem />
      <div className="ml-6">
        <Node level="Team · IT" title="Answer access requests inside the helpdesk" owner="Farhan Ali" pct={53} />
      </div>
    </VisualStage>
  );
}
