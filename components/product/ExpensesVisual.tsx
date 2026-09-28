import { Card, Eyebrow, Paper, Phone, VisualStage } from "@/components/visuals/Stage";

// An expense claim means a piece of paper becoming money, with the policy checked on the way. So the image
// reads left to right: the hotel receipt, the claim with its policy checks (one flag: over the per-night
// cap), the partial sanction, and the employee's own app showing what was paid. Receipt: 2 nights x 3,238 =
// 6,476 + CGST 2.5% 162 + SGST 2.5% 162 = 6,800. Cap 3,250 a night x 2 = 6,500 sanctioned; 300 not paid.

function Receipt() {
  const lines: [string, string][] = [
    ["Room 2N × 3,238", "6,476.00"],
    ["CGST 2.5%", "162.00"],
    ["SGST 2.5%", "162.00"],
  ];
  return (
    <Paper rotate={-4} className="px-5 pb-5 pt-4">
      <p className="whitespace-nowrap text-center text-[12.5px] font-bold text-ink">HARBOUR CREST HOTEL</p>
      <p className="text-center text-[10.5px] text-slate-400">Fort, Mumbai</p>
      <p className="text-center text-[10.5px] text-slate-400">GSTIN 27AAB•••••1Z5</p>
      <p className="mt-3 border-y border-dashed border-slate-300 py-1.5 text-center text-[10.5px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        Tax invoice
      </p>
      <div className="mt-2 space-y-0.5 font-mono text-[10.5px] text-slate-500">
        <p>Guest: RUPAL SHARMA</p>
        <p>19 Aug to 21 Aug 2026</p>
      </div>
      <div className="mt-3 space-y-1.5">
        {lines.map(([k, v]) => (
          <div key={k} className="flex justify-between font-mono text-[10.5px] text-slate-600">
            <span>{k}</span>
            <span className="tnum">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex items-baseline justify-between border-t border-slate-800 pt-2">
        <span className="font-mono text-[11px] font-bold text-ink">TOTAL</span>
        <span className="tnum font-mono text-[15px] font-bold text-ink">₹6,800.00</span>
      </div>
      <div className="mt-3 flex h-6 gap-[2px]" aria-hidden>
        {Array.from({ length: 38 }).map((_, i) => (
          <span key={i} className="bg-slate-700" style={{ width: i % 3 === 0 ? 2 : 1 }} />
        ))}
      </div>
    </Paper>
  );
}

function Check({ ok, title, sub }: { ok: boolean; title: string; sub: string }) {
  return (
    <div className="flex gap-2.5">
      <span
        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10.5px] font-bold ${
          ok ? "bg-[#10B981] text-white" : "bg-[#F59E0B] text-white"
        }`}
      >
        {ok ? "✓" : "!"}
      </span>
      <div>
        <p className={`text-[12px] font-semibold ${ok ? "text-ink" : "text-[#92400E]"}`}>{title}</p>
        <p className="text-[11px] text-slate-500">{sub}</p>
      </div>
    </div>
  );
}

function ClaimCard() {
  return (
    <Card className="overflow-hidden">
      <div className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <Eyebrow>Claim · Accommodation</Eyebrow>
          <p className="mt-1 whitespace-nowrap text-[15px] font-bold text-ink">Hotel, Mumbai · 2 nights</p>
          <p className="text-[11px] text-slate-500">Rupal Sharma · statutory audit · 21 Aug 2026</p>
        </div>
        <span className="tnum text-[18px] font-bold text-ink">₹6,800</span>
      </div>
      <p className="mt-4 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-400">Policy checks</p>
      <div className="mt-2.5 space-y-3">
        <Check ok title="Receipt attached" sub="Tax invoice · required above ₹500" />
        <Check ok title="Within submission window" sub="Submitted 22 Aug · 1 day after, window 30 days" />
        <Check ok title="No matching claim pending" sub="Same category and amount" />
        <Check ok={false} title="Exceeds Accommodation cap ₹6,500" sub="₹3,250 per night × 2 nights" />
      </div>
      </div>
      <Sanction />
    </Card>
  );
}

function Sanction() {
  return (
    <div className="rounded-b-2xl bg-[#0C0B4A] px-5 py-4 text-white">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#A9A8E8]">Approved amount</p>
          <p className="tnum mt-1 text-[28px] font-bold leading-none tracking-tight">₹6,500</p>
        </div>
        <p className="tnum pb-0.5 text-[14px] text-white/50 line-through decoration-[#F59E0B] decoration-2">₹6,800</p>
      </div>
      <p className="mt-2 text-[11px] leading-snug text-[#A9A8E8]">Note: &quot;Capped at ₹3,250 a night.&quot; · ₹300 not sanctioned</p>
      <div className="mt-2.5 space-y-1 border-t border-white/10 pt-2 text-[11px]">
        <p className="flex justify-between"><span className="text-white/55">Approved by</span><span>Anil Kapoor</span></p>
        <p className="flex justify-between"><span className="text-white/55">Reimbursed by</span><span>Finance · never the approver</span></p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" aria-hidden className="self-center">
      <path d="M2 12 H30" stroke="#10B981" strokeWidth="2.2" strokeDasharray="4 4" />
      <path d="M26 6 L33 12 L26 18" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExpensesVisual() {
  return (
    <VisualStage
      backdrop="mint"
      estHeight={600}
      padding={40}
      label="A hotel receipt becoming an expense claim: policy checks with one over-cap flag, a partial sanction of 6,500 rupees against 6,800 claimed, and the employee app showing the claim approved and reimbursed."
    >
      <div className="flex items-center gap-3">
        <div className="w-[200px] shrink-0">
          <Receipt />
        </div>
        <Arrow />
        <div className="w-[292px] shrink-0">
          <ClaimCard />
        </div>
        <Arrow />
        {/* Real screenshot of the NeevHR employee app: Expenses & claims, the same claim "Approved for ₹6,500". */}
        <div style={{ transform: "rotate(2deg)" }}>
          <Phone src="/mobile/ess-expenses.png" alt="NeevHR employee app expense claims list with the Mumbai hotel claim approved for 6,500 rupees" width={184} />
        </div>
      </div>
    </VisualStage>
  );
}
