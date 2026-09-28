import { Card, Eyebrow, Paper, VisualStage } from "@/components/visuals/Stage";

// A salary loan means a balance that shrinks every payday without anyone chasing it. So the image tells the
// amortization story: the loan on the left, the outstanding balance stepping down month by month on the
// right, and the EMI landing on the September payslip as a "Loan EMI" deduction with its loan details.
// Reducing balance, 1,00,000 at 12% p.a. (1% a month) over 12 months: EMI 8,885 (last one 8,884);
// interest totals 6,619. Sep payslip: 45,000 gross - PF 2,160 - PT 200 - Loan EMI 8,885 = 33,755 net.

const schedule = [
  { m: "Sep", int: 1000, bal: 92115 },
  { m: "Oct", int: 921, bal: 84151 },
  { m: "Nov", int: 842, bal: 76108 },
  { m: "Dec", int: 761, bal: 67984 },
  { m: "Jan", int: 680, bal: 59779 },
  { m: "Feb", int: 598, bal: 51492 },
  { m: "Mar", int: 515, bal: 43122 },
  { m: "Apr", int: 431, bal: 34668 },
  { m: "May", int: 347, bal: 26130 },
  { m: "Jun", int: 261, bal: 17506 },
  { m: "Jul", int: 175, bal: 8796 },
  { m: "Aug", int: 88, bal: 0 },
];
const PRINCIPAL = 100000;
const EMI = 8885;
const inr = (n: number) => n.toLocaleString("en-IN");

// Chart geometry (design px)
const CW = 492;
const CH = 330;
const TOP = 20;
const BASE = 250;
const barW = 26;
const slot = (CW - 50) / 13; // slot 0 is the opening balance
const xOf = (i: number) => 44 + slot * i + slot / 2;
const yOf = (v: number) => BASE - (v / PRINCIPAL) * (BASE - TOP);

function BalanceChart() {
  const bars = [{ m: "Start", bal: PRINCIPAL, int: 0 }, ...schedule];
  return (
    <svg width={CW} height={CH} viewBox={`0 0 ${CW} ${CH}`} fill="none" aria-hidden>
      {[0, 25000, 50000, 75000, 100000].map((v) => (
        <g key={v}>
          <line x1="40" x2={CW} y1={yOf(v)} y2={yOf(v)} stroke="#fff" strokeOpacity={v ? 0.07 : 0.2} />
          <text x="34" y={yOf(v) + 4} textAnchor="end" fontSize="10.5" fill="#A9A8E8">{v ? `${v / 1000}k` : "0"}</text>
        </g>
      ))}
      {bars.map((b, i) => {
        const paid = i === 1;
        const start = i === 0;
        const h = BASE - yOf(b.bal);
        return (
          <g key={b.m}>
            {h > 0 && (
              <rect
                x={xOf(i) - barW / 2}
                y={yOf(b.bal)}
                width={barW}
                height={h}
                rx="4"
                fill={start ? "rgba(255,255,255,0.18)" : paid ? "#10B981" : "#5B45E8"}
                fillOpacity={start || paid ? 1 : 0.35 + 0.65 * (1 - i / 12)}
              />
            )}
            {/* EMI marker: each step down is one payroll recovery */}
            {!start && <circle cx={xOf(i)} cy={yOf(b.bal)} r={paid ? 5 : 3.5} fill={paid ? "#10B981" : "#E88938"} stroke="#0C0B4A" strokeWidth="2" />}
            <text x={xOf(i)} y={BASE + 18} textAnchor="middle" fontSize="10.5" fontWeight={paid ? 700 : 500} fill={paid ? "#6EE7B7" : "#A9A8E8"}>
              {b.m}
            </text>
            {/* interest share of each EMI, shrinking */}
            {!start && (
              <rect x={xOf(i) - barW / 2} y={BASE + 30} width={barW} height={Math.max(2, (b.int / 1000) * 34)} rx="2" fill="#E88938" fillOpacity="0.8" />
            )}
          </g>
        );
      })}
      <text x="44" y={BASE + 76} fontSize="10.5" fill="#A9A8E8">Interest in each EMI: ₹1,000 in Sep down to ₹88 in Aug</text>
      <text x={xOf(0) - barW / 2} y={yOf(PRINCIPAL) - 8} fontSize="11" fontWeight="700" fill="#fff">₹1,00,000</text>
      <text x={xOf(1) + barW / 2 + 6} y={yOf(92115) + 14} fontSize="11" fontWeight="700" fill="#6EE7B7">₹92,115 after Sep</text>
      <text x={xOf(12)} y={BASE - 8} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#fff">₹0</text>
    </svg>
  );
}

function LoanCard() {
  const rows: [string, string][] = [
    ["Interest", "12% p.a. · reducing balance"],
    ["Tenure", "12 months · to Aug 2027"],
    ["Total interest", "₹6,619"],
  ];
  return (
    <Card className="p-5">
      <Eyebrow>Personal loan · Rohan Nair</Eyebrow>
      <p className="tnum mt-1.5 text-[26px] font-bold leading-none tracking-tight text-ink">₹1,00,000</p>
      <div className="mt-3 flex items-baseline gap-2 rounded-xl bg-[#F4F3FE] px-3 py-2">
        <span className="text-[11px] font-semibold text-[#4A34D1]">EMI</span>
        <span className="tnum text-[18px] font-bold text-[#15147B]">₹{inr(EMI)}</span>
        <span className="text-[11px] text-slate-500">/ month</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 text-[11.5px]">
            <span className="text-slate-500">{k}</span>
            <span className="tnum text-right font-medium text-ink">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-3.5">
        <div className="flex justify-between text-[11px]">
          <span className="text-slate-500">Paid 1 of 12</span>
          <span className="tnum font-semibold text-[#047857]">₹7,885 principal</span>
        </div>
        <div className="mt-1.5 flex gap-[3px]">
          {schedule.map((s, i) => (
            <span key={s.m} className={`h-1.5 flex-1 rounded-full ${i === 0 ? "bg-[#10B981]" : "bg-slate-200"}`} />
          ))}
        </div>
      </div>
    </Card>
  );
}

function PayslipSlice() {
  const ded: [string, string, boolean?][] = [
    ["Provident Fund", "2,160"],
    ["Professional Tax", "200"],
    ["Loan EMI", "8,885", true],
  ];
  return (
    <Paper rotate={-2} className="p-4">
      <div className="flex items-baseline justify-between">
        <p className="text-[12.5px] font-bold text-ink">Payslip · Sep 2026</p>
        <p className="text-[10.5px] text-slate-400">Rohan Nair · AIK071</p>
      </div>
      <p className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-400">Deductions</p>
      <div className="mt-1 space-y-1">
        {ded.map(([k, v, hi]) => (
          <div key={k} className={`flex justify-between rounded px-1.5 py-0.5 text-[11.5px] ${hi ? "bg-[#FFF4EA] font-semibold text-[#B45309]" : "text-slate-600"}`}>
            <span>{k}</span>
            <span className="tnum">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between border-t border-slate-200 px-1.5 pt-1.5 text-[12px] font-bold text-ink">
        <span>Net pay</span>
        <span className="tnum">₹33,755</span>
      </div>
      <p className="mt-2.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-400">Loan details</p>
      <div className="mt-1 grid grid-cols-3 gap-1 text-[10.5px]">
        <span className="text-slate-400">Principal</span>
        <span className="text-slate-400">EMI</span>
        <span className="text-slate-400">Balance</span>
        <span className="tnum font-semibold text-ink">1,00,000</span>
        <span className="tnum font-semibold text-ink">8,885</span>
        <span className="tnum font-semibold text-ink">92,115</span>
      </div>
    </Paper>
  );
}

export function LoansVisual() {
  return (
    <VisualStage
      backdrop="night"
      estHeight={640}
      padding={40}
      label="A NeevHR personal loan of 1,00,000 rupees at 12 percent reducing balance: the outstanding balance stepping down over twelve monthly EMIs, and the 8,885 rupee EMI appearing as a Loan EMI deduction on the September payslip."
    >
      <div className="grid grid-cols-[262px_1fr] gap-x-6">
        <div className="flex flex-col gap-6">
          <LoanCard />
          <div className="relative">
            <PayslipSlice />
          </div>
        </div>
        <div className="relative">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#A9A8E8]">Outstanding balance · recovered through payroll</p>
          <p className="mt-1 text-[20px] font-bold tracking-tight text-white">12 EMIs, one step down each payday</p>
          <div className="mt-4">
            <BalanceChart />
          </div>
          {/* the Sep EMI dropping onto the payslip line */}
          <svg className="pointer-events-none absolute left-[-56px] top-[90px]" width="170" height="360" viewBox="0 0 170 360" fill="none" aria-hidden>
            <path d="M151 16 C 150 130, 110 300, 36 341" stroke="#10B981" strokeWidth="2" strokeDasharray="4 5" />
            <circle cx="36" cy="341" r="4" fill="#10B981" />
          </svg>
        </div>
      </div>
    </VisualStage>
  );
}
