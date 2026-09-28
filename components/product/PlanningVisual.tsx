import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, Chip, FloatCard, Rows, Tag, Toast } from "@/components/showcase/parts";

// FY headcount plan with editable planned cells and open / over-plan flags. Lifted pieces: the
// over-plan gate on a requisition, an effective-dated plan-cell edit and hiring plan vs requisitions.
// Strength totals 201; 226 planned = 26 open (Eng 13 · Ops 7 · Sales 6) less 1 over plan (Support).
const rows = [
  { dept: "Engineering", planned: 92, strength: 79, budget: "16.8" },
  { dept: "Operations", planned: 66, strength: 59, budget: "7.9" },
  { dept: "Sales", planned: 58, strength: 52, budget: "10.4" },
  { dept: "Support", planned: 10, strength: 11, budget: "1.3" },
];
const planned = rows.reduce((s, r) => s + r.planned, 0);
const strength = rows.reduce((s, r) => s + r.strength, 0);
const open = rows.reduce((s, r) => s + Math.max(0, r.planned - r.strength), 0);
const over = rows.reduce((s, r) => s + Math.max(0, r.strength - r.planned), 0);

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 84 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Hiring plan gate" title="Requisition over plan" meta="Support · Customer Support Executive × 2" tag={<Tag tone="error">Over plan</Tag>}>
        <Rows
          rows={[
            ["Planned", "10"],
            ["Current strength", "11"],
            ["Requested", "+2"],
          ]}
          total={["After hiring", "13 · 3 over"]}
        />
        <p className="mt-3 text-[11.5px] text-slate-500">Needs a role with over-plan override permission.</p>
        <Actions primary="Approve override" secondary="Reject" tone="warning" />
      </FloatCard>
    ),
  },
  {
    width: 270,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="brand" title="Plan cell updated" sub="Engineering · 88 → 92 · history kept" />,
  },
  {
    width: 260,
    pos: { left: 260, top: 0 },
    node: <Chip badge="19/26" tone="info" title="Requisitions raised" sub="7 open seats still to hire for" />,
  },
];

export function PlanningVisual() {
  return (
    <ProductFrame
      title="NeevHR · Workforce planning · FY 2026-27"
      floaters={floaters}
      actions={<><WinButton>Roll forward</WinButton><WinButton primary>Save plan</WinButton></>}
    >
      <div className="flex items-center justify-between rounded-xl bg-brand px-4 py-3 text-white">
        <span className="text-xs text-white/80">Planned headcount</span>
        <span className="tnum text-lg font-bold">
          {planned} · {strength} in seat · {open} open · {over} over
        </span>
      </div>

      <div className="mt-4 grid grid-cols-[410px_1fr] gap-6">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="bg-surface-soft text-[10px] uppercase text-muted">
                <th className="px-3 py-2 font-semibold">Department</th>
                <th className="px-3 py-2 text-right font-semibold">Planned</th>
                <th className="px-3 py-2 text-right font-semibold">Strength</th>
                <th className="px-3 py-2 text-center font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const gap = r.planned - r.strength;
                return (
                  <tr key={r.dept} className="border-t border-line">
                    <td className="px-3 py-2.5 font-medium text-ink">{r.dept}</td>
                    <td className="px-3 py-2.5 text-right">
                      <span className="tnum inline-block min-w-9 rounded-md border border-line bg-white px-2 py-0.5 text-right text-ink">
                        {r.planned}
                      </span>
                    </td>
                    <td className="tnum px-3 py-2.5 text-right text-body">{r.strength}</td>
                    <td className="px-3 py-2.5 text-center">
                      {gap >= 0 ? (
                        <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">
                          {gap} open
                        </span>
                      ) : (
                        <span className="rounded-md bg-red-100 px-1.5 py-0.5 text-[10px] font-semibold text-red-700">
                          {-gap} over
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Cost-centre budgets</p>
          <div className="mt-3 space-y-2 text-[11px]">
            {rows.map((r) => (
              <p key={r.dept} className="flex justify-between gap-2">
                <span className="text-muted">{r.dept}</span>
                <span className="tnum font-semibold text-ink">₹{r.budget} Cr</span>
              </p>
            ))}
            <p className="flex justify-between gap-2 border-t border-dashed border-line pt-2">
              <span className="font-semibold text-ink">Total</span>
              <span className="tnum font-bold text-ink">₹36.4 Cr</span>
            </p>
          </div>
        </Soft>
      </div>

      <Soft className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ["Planned cost", "₹36.4 Cr"],
          ["Committed", "₹33.9 Cr"],
          ["Headroom", "₹2.5 Cr"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-lg bg-surface-soft py-2">
            <p className="tnum text-sm font-bold text-ink">{v}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </Soft>
    </ProductFrame>
  );
}
