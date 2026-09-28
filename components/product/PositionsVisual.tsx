import { ProductFrame } from "./ProductFrame";
import { Soft, WinButton, type Floater } from "@/components/showcase/Showcase";
import { Actions, FloatCard, Metric, Rows, Tag, Toast } from "@/components/showcase/parts";

// The establishment view: budgeted seats distinct from the people in them. Lifted pieces: the
// open-or-freeze decision on a seat whose incumbent is on notice, a budget hold that just landed
// and the vacancy rate. 216 seats = 201 filled (6 of them on notice) + 12 open + 3 frozen.
const tone: Record<string, string> = {
  Filled: "bg-blue-100 text-blue-700",
  Open: "bg-emerald-100 text-emerald-700",
  "On notice": "bg-amber-100 text-amber-700",
  Frozen: "bg-slate-200 text-slate-600",
};
const rows = [
  ["ENG-014", "Senior Engineer", "Filled", "Kavya Mehta", "1.0", "24.0"],
  ["ENG-021", "Engineer", "Open", "Vacant", "1.0", "14.0"],
  ["SAL-008", "Sales Manager", "On notice", "Rohan Nair", "1.0", "18.5"],
  ["OPS-003", "Ops Lead", "Frozen", "Vacant", "0.5", "12.0"],
  ["SUP-005", "Support Executive", "Filled", "Pooja Singh", "1.0", "4.8"],
];

const floaters: Floater[] = [
  {
    width: 320,
    pos: { right: 0, top: 80 },
    mobile: true,
    node: (
      <FloatCard eyebrow="Seat on notice" title="SAL-008 · Sales Manager" meta="Rohan Nair · last working day 31 Oct 2026" tag={<Tag tone="warning">On notice</Tag>}>
        <Rows
          rows={[
            ["Budgeted CTC", "₹18.5 L / year"],
            ["FTE", "1.0"],
            ["Workforce plan", "Sales · FY 2026-27"],
          ]}
        />
        <p className="mt-3 text-[11.5px] text-slate-500">When the seat falls vacant on 01 Nov 2026:</p>
        <Actions primary="Open for hiring" secondary="Freeze" tone="brand" />
      </FloatCard>
    ),
  },
  {
    width: 280,
    pos: { left: 0, bottom: 22 },
    look: "glass",
    node: <Toast tone="info" title="OPS-003 put on budget hold" sub="Ops Lead · 0.5 FTE · frozen 25 Sep 2026" />,
  },
  {
    width: 230,
    pos: { left: 270, top: 0 },
    node: <Metric label="Vacancy rate" value="5.6%" delta="12 open of 216 seats" tone="warning" />,
  },
];

export function PositionsVisual() {
  return (
    <ProductFrame
      title="NeevHR · Positions · Establishment"
      floaters={floaters}
      actions={<><WinButton>Freeze</WinButton><WinButton primary>New position</WinButton></>}
    >
      <div className="grid grid-cols-[410px_1fr] gap-6">
        <div className="overflow-hidden rounded-xl border border-line bg-white">
          <table className="w-full text-left text-[12.5px]">
            <thead>
              <tr className="bg-surface-soft text-[10px] uppercase text-muted">
                <th className="px-3 py-2 font-semibold">Position</th>
                <th className="px-3 py-2 font-semibold">Status</th>
                <th className="px-3 py-2 font-semibold">Incumbent</th>
                <th className="px-3 py-2 text-right font-semibold">Budget</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-line">
                  <td className="px-3 py-2">
                    <p className="font-medium text-ink">{r[1]}</p>
                    <p className="tnum text-[10px] text-muted">
                      {r[0]} · {r[4]} FTE
                    </p>
                  </td>
                  <td className="px-3 py-2">
                    <span className={`whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${tone[r[2]]}`}>{r[2]}</span>
                  </td>
                  <td className={`px-3 py-2 ${r[3] === "Vacant" ? "text-amber-600" : "text-body"}`}>{r[3]}</td>
                  <td className="tnum px-3 py-2 text-right text-ink">₹{r[5]} L</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Soft strong className="rounded-xl border border-line bg-white p-4">
          <p className="text-sm font-semibold text-ink">Seat budget · FY 2026-27</p>
          <div className="mt-3 space-y-2 text-[11px]">
            {[
              ["Budgeted", "₹36.4 Cr"],
              ["Committed (filled seats)", "₹33.9 Cr"],
              ["Open & frozen seats", "₹2.5 Cr"],
            ].map(([k, v]) => (
              <p key={k} className="flex justify-between gap-2">
                <span className="text-muted">{k}</span>
                <span className="tnum font-semibold text-ink">{v}</span>
              </p>
            ))}
          </div>
          <div className="mt-3 h-2 rounded-full bg-surface-soft">
            <div className="h-2 rounded-full bg-brand" style={{ width: "93%" }} />
          </div>
          <p className="mt-1.5 text-[10px] text-muted">93% of seat budget committed</p>
        </Soft>
      </div>

      <Soft className="mt-4 grid grid-cols-4 gap-2 text-center">
        {[["216", "Positions"], ["12", "Open"], ["6", "On notice"], ["3", "Frozen"]].map(([v, l]) => (
          <div key={l} className="rounded-lg bg-surface-soft py-2">
            <p className="tnum text-sm font-bold text-ink">{v}</p>
            <p className="text-[10px] text-muted">{l}</p>
          </div>
        ))}
      </Soft>
    </ProductFrame>
  );
}
