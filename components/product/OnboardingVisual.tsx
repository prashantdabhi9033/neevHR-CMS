import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Steps, Tag, Toast } from "@/components/showcase/parts";
import { Icon } from "@/components/ui/Icon";

// Designed onboarding mock: a new joiner's owned joining checklist beside the day-1 cohort.
// Lifted pieces: IT's asset-issue step on the journey, a policy acknowledgement and cohort readiness.
const tasks = [
  { label: "Offer accepted", owner: "HR", done: true },
  { label: "Documents collected & verified", owner: "HR", done: true },
  { label: "Statutory & bank details", owner: "Joiner", done: true },
  { label: "Asset issued · Laptop (DELL-4471)", owner: "IT", done: false },
  { label: "Buddy assigned · Rupal Sharma", owner: "Manager", done: false },
];

// Everyone joining on 01 Oct 2026 (5 tasks each): 2 fully ready, 5 tasks still open.
const cohort = [
  { initials: "KT", name: "Khushi Trivedi", dept: "Sales", pct: 60 },
  { initials: "AB", name: "Aman Bhatt", dept: "Engineering", pct: 100 },
  { initials: "SK", name: "Sneha Kulkarni", dept: "Finance", pct: 100 },
  { initials: "FQ", name: "Farhan Qureshi", dept: "Operations", pct: 40 },
];

const floaters: Floater[] = [
  {
    width: 330,
    pos: { right: 0, top: 84 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Joining journey · IT" title="Issue laptop to Khushi Trivedi" meta="Before day 1 · due 30 Sep 2026" tag={<Tag tone="warning">Due in 2 days</Tag>}>
        <Steps steps={["Offer", "Documents", "Statutory", "Assets", "Buddy"]} at={3} />
        <div className="mt-3.5">
          <Rows rows={[["Asset", "Dell Latitude · DELL-4471"], ["Reserved on", "24 Sep 2026"], ["Owner", "IT · Arjun Patel"]]} />
        </div>
        <Actions primary="Mark issued" secondary="Swap asset" />
      </FloatCard>
    ),
  },
  {
    width: 270,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="brand" title="Policy acknowledged" sub="Khushi Trivedi · Code of conduct 2026" />,
  },
  {
    width: 250,
    pos: { left: 270, top: 0 },
    node: <Chip badge="2/4" tone="success" title="Ready for day 1" sub="01 Oct 2026 joiners · 5 tasks open" />,
  },
];

export function OnboardingVisual() {
  const done = tasks.filter((t) => t.done).length;
  const pct = Math.round((done / tasks.length) * 100);
  return (
    <ProductFrame
      title="NeevHR · Onboarding · Joining 01 Oct 2026"
      floaters={floaters}
      actions={<><WinButton>Joiners</WinButton><WinButton primary>Start onboarding</WinButton></>}
    >
      <div className="grid grid-cols-[400px_1fr] gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-semibold text-white">
              KT
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">Khushi Trivedi</p>
              <p className="text-xs text-muted">Executive · Sales · Joining 01 Oct 2026</p>
            </div>
            <span className="tnum rounded-lg bg-brand-tint px-2.5 py-1 text-xs font-semibold text-brand">
              {pct}% ready
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-soft">
            <div className="h-full rounded-full bg-success" style={{ width: `${pct}%` }} />
          </div>

          <ul className="mt-4 space-y-2">
            {tasks.map((t) => (
              <li key={t.label} className="flex items-center gap-3 rounded-lg border border-line bg-white px-3 py-2.5">
                <span
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                    t.done ? "bg-success text-white" : "bg-surface-soft text-muted"
                  }`}
                >
                  {t.done ? (
                    <Icon name="check" className="h-3.5 w-3.5" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-muted" />
                  )}
                </span>
                <span className={`flex-1 truncate text-sm ${t.done ? "text-body" : "font-medium text-ink"}`}>
                  {t.label}
                </span>
                <span className="rounded-md bg-surface-soft px-1.5 py-0.5 text-[10px] font-semibold text-muted">
                  {t.owner}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Joining 01 Oct 2026</p>
          <ul className="mt-3 space-y-3">
            {cohort.map((c) => (
              <li key={c.name} className="flex items-center gap-2.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-tint text-[10px] font-semibold text-brand">
                  {c.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-medium text-ink">{c.name}</p>
                  <p className="text-[10px] text-muted">{c.dept}</p>
                </div>
                <span className="tnum text-[11px] font-semibold text-body">{c.pct}%</span>
              </li>
            ))}
          </ul>
        </Soft>
      </div>

      <Soft className="mt-4 grid grid-cols-3 gap-3 text-center">
        {[
          ["Joiners this month", "9"],
          ["Pending documents", "3"],
          ["Avg time-to-productive", "11 days"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-lg bg-surface-soft py-2.5">
            <p className="tnum text-sm font-bold text-ink">{v}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </Soft>
    </ProductFrame>
  );
}
