import { Card, Eyebrow, VisualStage } from "@/components/visuals/Stage";

// A flexible benefit plan means carving tax-efficient pockets out of your own salary. So the image is a
// wallet: the components the employee picked stack like cards in it, the wallet itself is the Special
// allowance they are carved from, and beside it the year's declared, verified and pending amounts.
// Monthly picks 2,200 + 1,800 + 1,200 + 500 + 3,200 (LTA = 8% of basic 40,000) = 8,900 of 18,000 Special;
// 9,100 stays as taxable cash. Year 8,900 x 12 = 1,06,800. Verified 13,200 + 5,400 + 7,200 = 25,800;
// awaiting verification 5,400 + 1,850 = 7,250; still to claim 1,06,800 - 25,800 - 7,250 = 73,750.

const comps = [
  { name: "Meal card", pick: 2200, cap: "₹2,200 / mo", color: "#10B981" },
  { name: "Fuel & vehicle", pick: 1800, cap: "₹1,800 / mo", color: "#0EA5E9" },
  { name: "Telephone & internet", pick: 1200, cap: "₹1,500 / mo", color: "#5B45E8" },
  { name: "Books & periodicals", pick: 500, cap: "₹1,000 / mo", color: "#E88938" },
  { name: "LTA", pick: 3200, cap: "8% of basic", color: "#EC4899" },
];
const SPECIAL = 18000;
const FBP = comps.reduce((a, c) => a + c.pick, 0); // 8,900
const CASH = SPECIAL - FBP; // 9,100
const inr = (n: number) => n.toLocaleString("en-IN");

const CARD_H = 132;
const STEP = 52;
const POCKET_H = 196;
const WALLET_W = 336;
const stackH = STEP * (comps.length - 1) + CARD_H;
const WALLET_H = stackH - 40 + POCKET_H;

function Wallet() {
  return (
    <div className="relative" style={{ width: WALLET_W, height: WALLET_H }}>
      {comps.map((c, i) => (
        <div
          key={c.name}
          className="absolute inset-x-3 rounded-2xl p-4 text-white shadow-[0_-6px_18px_-8px_rgba(12,11,74,0.35)]"
          style={{ top: i * STEP, height: CARD_H, background: `linear-gradient(135deg, ${c.color}, ${c.color}cc)` }}
        >
          <div className="flex items-baseline justify-between">
            <span className="text-[13px] font-semibold">{c.name}</span>
            <span className="tnum text-[15px] font-bold">₹{inr(c.pick)}</span>
          </div>
          <p className="mt-0.5 text-[10.5px] text-white/80">Cap {c.cap} · exempt with proof</p>
        </div>
      ))}
      {/* the pocket: Special allowance the picks are carved from */}
      <div
        className="absolute inset-x-0 rounded-[26px] bg-[#0C0B4A] p-5 text-white shadow-[0_30px_60px_-24px_rgba(12,11,74,0.8)]"
        style={{ top: stackH - 40, height: POCKET_H }}
      >
        <span className="absolute inset-x-5 top-0 h-px bg-white/15" />
        <div className="flex items-baseline justify-between">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#A9A8E8]">Special allowance</p>
          <p className="tnum text-[13px] font-semibold">₹{inr(SPECIAL)} / mo</p>
        </div>
        <p className="tnum mt-2 text-[30px] font-bold leading-none tracking-tight">
          ₹{inr(FBP)}
          <span className="ml-2 text-[12px] font-medium text-[#A9A8E8]">in FBP a month</span>
        </p>
        <div className="mt-4 flex h-3 overflow-hidden rounded-full">
          {comps.map((c) => (
            <span key={c.name} style={{ width: `${(c.pick / SPECIAL) * 100}%`, background: c.color }} className="border-r border-[#0C0B4A]" />
          ))}
          <span className="flex-1 bg-white/20" />
        </div>
        <div className="mt-2 flex justify-between text-[11px]">
          <span className="text-[#DAD9FA]">5 components picked</span>
          <span className="tnum text-white/60">₹{inr(CASH)} stays taxable cash</span>
        </div>
        <p className="mt-3 text-[10.5px] text-white/50">Inside CTC · picks open in the FBP selection window</p>
      </div>
    </div>
  );
}

function YearCard() {
  const stats: [string, string, string][] = [
    ["Declared for the year", "₹1,06,800", "text-ink"],
    ["Proofs verified", "₹25,800", "text-[#047857]"],
    ["Awaiting verification", "₹7,250", "text-[#B45309]"],
    ["Still to claim", "₹73,750", "text-slate-500"],
  ];
  const proofs: [string, string, "verified" | "submitted" | "declared"][] = [
    ["Meal card", "₹13,200", "verified"],
    ["Telephone & internet", "₹7,200", "verified"],
    ["Fuel & vehicle · Apr-Jun", "₹5,400", "verified"],
    ["Fuel & vehicle · Jul-Sep", "₹5,400", "submitted"],
    ["Books & periodicals", "₹1,850", "submitted"],
    ["LTA", "No claim yet", "declared"],
  ];
  const tone = { verified: "bg-[#ECFDF5] text-[#047857]", submitted: "bg-[#FFF4EA] text-[#B45309]", declared: "bg-slate-100 text-slate-500" };
  return (
    <Card className="p-5">
      <Eyebrow>Rohan Nair · FY 2026-27</Eyebrow>
      <p className="mt-1 text-[17px] font-bold text-ink">What reaches your taxable income</p>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {stats.map(([k, v, c]) => (
          <div key={k} className="rounded-xl bg-slate-50 px-3 py-2.5">
            <p className={`tnum text-[18px] font-bold leading-none ${c}`}>{v}</p>
            <p className="mt-1 text-[11px] text-slate-500">{k}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {proofs.map(([n, amt, st]) => (
          <div key={n} className="flex items-center justify-between gap-2 text-[12px]">
            <span className="text-slate-600">{n}</span>
            <span className="flex items-center gap-2">
              <span className="tnum text-ink">{amt}</span>
              <span className={`w-[74px] rounded-md py-0.5 text-center text-[10.5px] font-semibold ${tone[st]}`}>{st[0].toUpperCase() + st.slice(1)}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-lg bg-[#ECFDF5] px-3 py-2 text-[11px] leading-snug text-[#065F46]">
        Only verified proofs reduce taxable income. An employee can never verify their own proof.
      </p>
    </Card>
  );
}

export function BenefitsVisual() {
  return (
    <VisualStage
      backdrop="mint"
      estHeight={640}
      padding={40}
      label="A flexible benefit plan as a wallet: meal card, fuel, telephone, books and LTA picks stacked like cards and carved out of the Special allowance, beside the year's declared, verified and pending amounts."
    >
      <div className="grid items-center gap-8" style={{ gridTemplateColumns: `${WALLET_W}px 1fr` }}>
        <Wallet />
        <YearCard />
      </div>
    </VisualStage>
  );
}
