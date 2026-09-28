import { Avatar, Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// Variable pay means a payout anyone can recompute: target times achievement. So the image IS the equation
// in big number blocks (the plan's quarterly target, the achievement set on the assignment, the payout),
// with the plan's register underneath. Target = 10% of CTC a year, split over 4 quarterly cycles.
// Kavya 14,40,000 x 10% / 4 = 36,000 x 115% = 41,400; Rohan 9,60,000 -> 24,000 x 92% = 22,080;
// Arjun 12,00,000 -> 30,000 x 100% (default) = 30,000; Neel 8,40,000 -> 21,000 x 80% = 16,800.
// Register total 41,400 + 22,080 + 30,000 + 16,800 = 1,10,280.

const rows = [
  { ini: "KM", name: "Kavya Mehta", ctc: "14,40,000", target: "36,000", ach: "115%", pay: "41,400", status: "HR review", focus: true },
  { ini: "AR", name: "Arjun Reddy", ctc: "12,00,000", target: "30,000", ach: "100%", pay: "30,000", status: "Approved" },
  { ini: "RN", name: "Rohan Nair", ctc: "9,60,000", target: "24,000", ach: "92%", pay: "22,080", status: "Approved" },
  { ini: "NM", name: "Neel Mishra", ctc: "8,40,000", target: "21,000", ach: "80%", pay: "16,800", status: "Approved" },
];

function Block({ label, value, sub, tone = "white" }: { label: string; value: string; sub: string; tone?: "white" | "brand" }) {
  const brand = tone === "brand";
  return (
    <div
      className={`flex-1 rounded-3xl px-5 py-5 ${
        brand ? "bg-[#15147B] text-white shadow-[0_24px_50px_-20px_rgba(21,20,123,0.7)]" : "bg-white shadow-[0_14px_36px_-18px_rgba(21,20,123,0.35)]"
      }`}
    >
      <p className={`text-[10.5px] font-semibold uppercase tracking-[0.12em] ${brand ? "text-[#A9A8E8]" : "text-[#5B45E8]"}`}>{label}</p>
      <p className={`tnum mt-2 text-[40px] font-bold leading-none tracking-tight ${brand ? "text-white" : "text-ink"}`}>{value}</p>
      <p className={`mt-2.5 text-[11px] leading-snug ${brand ? "text-[#DAD9FA]" : "text-slate-500"}`}>{sub}</p>
    </div>
  );
}

function Op({ children }: { children: string }) {
  return <span className="grid h-11 w-11 shrink-0 place-items-center self-center rounded-full bg-white/70 text-[24px] font-bold text-[#5B45E8] ring-1 ring-[#5B45E8]/15">{children}</span>;
}

export function VariablePayVisual() {
  return (
    <VisualStage
      backdrop="lilac"
      estHeight={640}
      padding={40}
      label="A NeevHR variable pay plan shown as an equation: a quarterly target of 36,000 rupees times 115 percent achievement equals a payout of 41,400 rupees, with the plan register of four employees below."
    >
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-3">
          <Avatar initials="KM" size={44} ring />
          <div>
            <Eyebrow>Sales incentive · Q2 FY 2026-27</Eyebrow>
            <p className="mt-0.5 text-[20px] font-bold tracking-tight text-ink">Kavya Mehta · Jul-Sep 2026</p>
          </div>
        </div>
        <div className="flex gap-1.5 pb-1">
          {["Target: % of CTC", "Quarterly", "Sales department"].map((c) => (
            <span key={c} className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-[#4A34D1] ring-1 ring-[#5B45E8]/15">
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-stretch gap-3">
        <Block label="Target this cycle" value="₹36,000" sub="10% of CTC ₹14,40,000 a year ÷ 4 quarters" />
        <Op>×</Op>
        <Block label="Achievement" value="115%" sub="Set on Kavya's assignment · default is 100%" />
        <Op>=</Op>
        <Block label="Payout" value="₹41,400" sub="Goes to the Oct 2026 payroll once approved" tone="brand" />
      </div>

      <Card className="mt-7 overflow-hidden">
        <div className="flex items-baseline justify-between px-5 pb-2 pt-4">
          <p className="text-[13px] font-semibold text-ink">Plan register · 4 of 24 assigned</p>
          <p className="text-[11px] text-slate-400">Payout = target × achievement</p>
        </div>
        <div className="grid grid-cols-[1.6fr_1fr_0.9fr_0.9fr_0.9fr_0.9fr] gap-2 border-y border-slate-100 bg-slate-50 px-5 py-2 text-[10.5px] font-semibold uppercase tracking-wider text-slate-400">
          <span>Employee</span>
          <span className="text-right">CTC</span>
          <span className="text-right">Target</span>
          <span className="text-right">Achieved</span>
          <span className="text-right">Payout</span>
          <span className="text-right">Status</span>
        </div>
        {rows.map((r) => (
          <div
            key={r.name}
            className={`grid grid-cols-[1.6fr_1fr_0.9fr_0.9fr_0.9fr_0.9fr] items-center gap-2 border-b border-slate-100 px-5 py-2 text-[12px] last:border-0 ${r.focus ? "bg-[#F4F3FE]" : ""}`}
          >
            <span className="flex items-center gap-2 font-medium text-ink">
              <Avatar initials={r.ini} size={24} />
              {r.name}
            </span>
            <span className="tnum text-right text-slate-500">₹{r.ctc}</span>
            <span className="tnum text-right text-slate-600">₹{r.target}</span>
            <span className={`tnum text-right font-semibold ${parseInt(r.ach) >= 100 ? "text-[#047857]" : "text-[#B45309]"}`}>{r.ach}</span>
            <span className="tnum text-right font-bold text-ink">₹{r.pay}</span>
            <span className={`text-right text-[11px] font-semibold ${r.status === "Approved" ? "text-[#047857]" : "text-[#B45309]"}`}>{r.status}</span>
          </div>
        ))}
        <div className="flex items-center justify-between bg-slate-50 px-5 py-2.5 text-[12px]">
          <span className="font-semibold text-slate-600">Total · 4 shown</span>
          <span className="tnum font-bold text-ink">₹1,10,280</span>
        </div>
      </Card>
      <p className="mt-4 text-center text-[11.5px] text-slate-500">
        The same module runs the statutory bonus under the Payment of Bonus Act · 8.33% to 20% · Form C and Form D
      </p>
    </VisualStage>
  );
}
