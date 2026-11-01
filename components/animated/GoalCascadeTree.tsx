"use client";

import { useOnScreenSteps } from "@/components/visuals/useOnScreenSteps";
import { SampleFrame } from "./Frame";

// A linked goal moves and the objectives above it follow, with the same arithmetic as components/product/GoalCascadeVisual:
// each level is the simple average of what sits under it. Team (60 + goal) / 2; company (team + 53) / 2.
const goalSteps = [62, 68, 74];

function Node({ level, title, owner, pct, tone, dim }: { level: string; title: string; owner: string; pct: number; tone: string; dim?: boolean }) {
  return (
    <div className={`rounded-xl bg-white p-3 ring-1 ring-line sm:p-3.5 ${dim ? "opacity-75" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: tone }}>{level}</p>
          <p className="mt-0.5 text-[13px] font-semibold leading-snug text-ink">{title}</p>
          <p className="text-[11px] text-muted">{owner}</p>
        </div>
        <span className="tnum shrink-0 text-lg font-bold text-ink">{pct}%</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-soft">
        <div className="h-full origin-left rounded-full transition-transform duration-700" style={{ background: tone, transform: `scaleX(${pct / 100})` }} />
      </div>
    </div>
  );
}

const Stem = () => <div className="ml-5 h-3.5 w-px bg-line" />;

export function GoalCascadeTree({ className = "" }: { className?: string }) {
  const { ref, step } = useOnScreenSteps<HTMLDivElement>(goalSteps.length, 1900, 3200);
  const goal = goalSteps[step];
  const team = Math.round((60 + goal) / 2);
  const company = Math.round((team + 53) / 2);
  return (
    <div ref={ref} className={className}>
      <SampleFrame
        title="Goal cascade, FY 2026-27"
        label="A sample goal cascade. As one person's linked goal moves from 62 to 74 percent, the team objective moves to 67 percent and the company objective to 60 percent."
        note="Sample goals. Progress rolls up per review cycle, and a goal the employee has not accepted does not count."
      >
        <div className="mt-4 rounded-xl bg-surface-soft p-3 sm:p-4">
          <Node level="Company objective" title="Make payroll queries a thing of the past" owner="Neha Kapoor" pct={company} tone="#15147B" />
          <Stem />
          <div className="ml-5 grid gap-3 sm:grid-cols-2">
            <div className="min-w-0">
              <Node level="Team objective, Payroll" title="Reduce monthly payroll queries" owner="Sanjay Menon" pct={team} tone="#5B45E8" />
              <Stem />
              <div className="ml-5 space-y-2">
                <Node level="Linked goal" title="Publish a payslip FAQ" owner="Divya Pillai" pct={goal} tone="#10B981" />
                <Node level="Linked goal" title="Close queries within 2 days" owner="Karan Iyer" pct={60} tone="#10B981" />
              </div>
            </div>
            <div className="min-w-0">
              <Node level="Team objective, HR Ops" title="Answer common questions in self-service" owner="Meera Nair" pct={53} tone="#5B45E8" dim />
            </div>
          </div>
        </div>
      </SampleFrame>
    </div>
  );
}
