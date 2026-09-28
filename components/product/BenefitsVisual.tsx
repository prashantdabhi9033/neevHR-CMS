import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, FloatCard, Metric, Rows, Tag, Toast } from "@/components/showcase/parts";

// Mirrors the product's benefits workspace: group-insurance plan catalog with enrolment, the FBP
// components with tax treatment, and the endorsements queue (201 employees).
// Lifted pieces: a dependent-addition endorsement for approval, a verified FBP proof and GMC lives.
const plans = [
  { key: "GMC", name: "Group medical", insurer: "Health insurer · family floater", sum: "5 L", enrolled: 193 },
  { key: "GPA", name: "Personal accident", insurer: "General insurer", sum: "25 L", enrolled: 201 },
  { key: "GTL", name: "Group term life", insurer: "Life insurer", sum: "50 L", enrolled: 189 },
];
const HEADCOUNT = 201;
const fbp = [
  ["Fuel & vehicle", "₹1,800/mo", "Exempt with proof"],
  ["LTA", "% of basic", "Exempt"],
  ["Meal card", "₹2,200/mo", "Taxable"],
];
const endorsements = [
  ["Ishita Gandhi", "Add child · GMC"],
  ["Meera Iyer", "Add spouse · GMC"],
  ["Rohan Nair", "Name correction · GTL"],
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 90 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Endorsement · awaiting approval" title="Dependent addition · Ishita Gandhi" meta="Raised 22 Sep 2026 · mid-term addition" tag={<Tag tone="brand">GMC</Tag>}>
        <Rows
          rows={[["Plan", "Group medical · ₹5 L floater"], ["Dependent", "Daughter · born 14 Sep 2026"], ["Premium", "Employer-paid"], ["Proof", "Birth certificate"]]}
        />
        <p className="mt-2 text-[11px] text-slate-500">On approval, queued for the insurer</p>
        <Actions primary="Approve endorsement" secondary="Return" />
      </FloatCard>
    ),
  },
  {
    width: 290,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast title="FBP proof verified · Rohan Nair" sub="Fuel & vehicle ₹5,400 · from Oct 2026 payroll" />,
  },
  {
    width: 240,
    pos: { right: 330, top: 0 },
    node: <Metric label="GMC lives covered" value="612" delta="193 employees + 419 dependents" tone="brand" />,
  },
];

export function BenefitsVisual() {
  return (
    <ProductFrame
      title="NeevHR · Benefits · Policy year 2026-27"
      floaters={floaters}
      actions={<><WinButton>Enrolment register</WinButton><WinButton primary>Enrol</WinButton></>}
    >
      <div className="grid grid-cols-[1fr_224px] gap-4">
        <div>
          <div className="space-y-2">
            {plans.map((p) => (
              <div key={p.key} className="flex items-center gap-3 rounded-xl border border-line bg-white p-3">
                <span className="rounded-md bg-brand-tint px-1.5 py-0.5 text-[10px] font-bold text-brand">{p.key}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-[12px] font-semibold text-ink">{p.name}</p>
                    <span className="tnum text-[11px] font-semibold text-ink">₹{p.sum}</span>
                  </div>
                  <p className="text-[10px] text-muted">{p.insurer}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-soft">
                      <div className="h-full rounded-full bg-success" style={{ width: `${Math.round((p.enrolled / HEADCOUNT) * 100)}%` }} />
                    </div>
                    <span className="tnum text-[10px] text-muted">{p.enrolled} of {HEADCOUNT}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Soft className="mt-3 rounded-xl border border-line bg-white p-3">
            <p className="text-xs font-semibold text-ink">Flexible benefits (FBP)</p>
            <div className="mt-2 space-y-1.5">
              {fbp.map(([n, cap, tax]) => (
                <div key={n} className="flex items-center justify-between text-[12px]">
                  <span className="text-body">{n}</span>
                  <span className="flex items-center gap-2">
                    <span className="tnum text-muted">{cap}</span>
                    <span className={`rounded-md px-1.5 py-0.5 text-[9px] font-semibold ${
                      tax === "Taxable" ? "bg-slate-200 text-slate-600" : tax.includes("proof") ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                    }`}>{tax}</span>
                  </span>
                </div>
              ))}
            </div>
          </Soft>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-3">
          <p className="text-xs font-semibold text-ink">Endorsements</p>
          <p className="text-[10px] text-muted">3 awaiting approval</p>
          <div className="mt-3 space-y-2.5">
            {endorsements.map(([who, what]) => (
              <div key={who} className="text-[11px]">
                <p className="font-medium text-ink">{who}</p>
                <p className="text-[10px] text-muted">{what}</p>
              </div>
            ))}
          </div>
        </Soft>
      </div>
    </ProductFrame>
  );
}
