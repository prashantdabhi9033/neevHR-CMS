"use client";

import { aiFeature, type AiFeatureKey } from "@/lib/ai-features";
import { AiCard, Alert, Btn, Fields, Note, ScreenFrame, Step, Tag, usePlay, useTyped } from "@/components/ai/AiScreenKit";

// One sample screen per AI feature. Labels and states are the product's own, read from the web components named on each.
// Names, firms and figures are samples: the frame says so, and no name reaches the AI provider where the product removes it.

const SUGGESTION = "A suggestion from AI. You decide.";

// web: recruitment/AiResumeMatchCard
function ResumeScreen() {
  const { ref, play } = usePlay(4);
  const a = aiFeature("resume");
  const on = play.phase === "ready" && play.shown > 0;
  const R = 22;
  const C = 2 * Math.PI * R;
  return (
    <ScreenFrame crumb="Recruitment / Candidates / Ananya Rao" alt={a.alt} frameRef={ref}>
      <p className="text-[13px] text-body">
        <span className="font-semibold text-ink">Ananya Rao</span> applied for Senior Payroll Executive
      </p>
      <AiCard title="Resume match" made="28 Oct 2026" play={play} runLabel="Check match">
        <div className="grid gap-2.5">
          <Step play={play} at={0} className="flex items-center gap-3">
            <svg width="56" height="56" viewBox="0 0 56 56" className="shrink-0" role="presentation">
              <circle cx="28" cy="28" r={R} fill="none" stroke="#f0f0f0" strokeWidth="5.5" />
              <circle
                cx="28"
                cy="28"
                r={R}
                fill="none"
                stroke="#5b45e8"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={on ? C * 0.22 : C}
                transform="rotate(-90 28 28)"
                className="transition-[stroke-dashoffset] duration-700 ease-out"
              />
              <text x="28" y="33" textAnchor="middle" fontSize="15" fontWeight="600" fill="#24242b" className="tnum">
                78
              </text>
            </svg>
            <p className="min-w-0 text-[13px] leading-snug text-ink">Strong on Indian payroll and statutory filing. Team leadership is not shown.</p>
          </Step>
          <Step play={play} at={1}>
            <Note>Shown in the resume</Note>
            <div className="mt-1 flex flex-wrap gap-1">
              {["Payroll processing", "PF and ESI returns", "Form 24Q", "Advanced Excel"].map((x) => (
                <Tag key={x} tone="green">{x}</Tag>
              ))}
            </div>
          </Step>
          <Step play={play} at={2}>
            <Note>Not shown in the resume</Note>
            <div className="mt-1 flex flex-wrap gap-1">
              {["Team leadership", "Tally Prime"].map((x) => (
                <Tag key={x}>{x}</Tag>
              ))}
            </div>
          </Step>
          <Step play={play} at={3}>
            <Note>{SUGGESTION}</Note>
          </Step>
        </div>
      </AiCard>
    </ScreenFrame>
  );
}

// web: payroll/AiPayrollExplainCard. The checks are the product's own labels (payroll-exceptions.util.ts).
function PayrollScreen() {
  const { ref, play } = usePlay(4);
  const a = aiFeature("payroll");
  return (
    <ScreenFrame crumb="Payroll / October 2026 / Exception report" alt={a.alt} frameRef={ref}>
      <p className="text-[13px] text-body">
        <span className="font-semibold text-ink">October 2026</span> run computed, 2 checks fired
      </p>
      <AiCard title="What these flags mean" made="29 Oct 2026" play={play} runLabel="Explain these flags">
        <div className="grid gap-2.5 text-[13px] leading-snug text-ink">
          <Step play={play} at={0}>
            <p>Both flags trace to attendance this month. Neither points to a change in the salary structure.</p>
          </Step>
          <Step play={play} at={1}>
            <Tag tone="gold">Excessive LOP · <span className="tnum">2</span></Tag>
            <p className="mt-1">Loss-of-pay days are at or above your threshold for two people.</p>
            <Note>Check first: whether a regularisation is still pending.</Note>
          </Step>
          <Step play={play} at={2}>
            <Tag tone="gold">Salary decrease over threshold · <span className="tnum">1</span></Tag>
            <p className="mt-1">Net pay fell mainly because of the loss-of-pay days above.</p>
            <p className="mt-0.5 text-[12.5px]">
              <span className="font-semibold">Rahul Verma (EMP-0142):</span> net pay down 18%, with 6 loss-of-pay days.
            </p>
          </Step>
          <Step play={play} at={3}>
            <Note>{SUGGESTION}</Note>
          </Step>
        </div>
      </AiCard>
    </ScreenFrame>
  );
}

function ReceiptPaper({ scanning }: { scanning: boolean }) {
  return (
    <div className="relative w-[92px] shrink-0 overflow-hidden rounded bg-white px-2 py-2.5 font-mono text-[8px] leading-tight text-[#44444f] shadow-[0_6px_16px_-8px_rgba(21,20,123,0.5)] ring-1 ring-[#ececf1]">
      <p className="text-center font-bold">HOTEL SAI RESIDENCY</p>
      <p className="text-center">Pune</p>
      <p className="mt-1.5">21 Oct 2026</p>
      <p className="mt-1">Room, 1 night</p>
      <p className="flex justify-between"><span>Room</span><span>4,000.00</span></p>
      <p className="flex justify-between"><span>GST</span><span>720.00</span></p>
      <p className="mt-1 flex justify-between border-t border-dashed border-[#b8b8c4] pt-1 font-bold"><span>TOTAL</span><span>₹4,720.00</span></p>
      {scanning && <span className="ai-scan absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-transparent to-brand-soft/30" />}
    </div>
  );
}

// web: ess/AiReceiptCard
function ReceiptScreen() {
  const { ref, play } = usePlay(3, { idleMs: 900 });
  const a = aiFeature("receipt");
  return (
    <ScreenFrame crumb="Self-service / Expenses / New claim" alt={a.alt} frameRef={ref}>
      <div className="flex items-start gap-3">
        <ReceiptPaper scanning={play.phase === "running"} />
        <div className="min-w-0 flex-1 text-[13px]">
          <p className="font-semibold text-ink">Receipt</p>
          <p className="break-all text-[12.5px] text-muted">hotel-bill-pune.pdf</p>
        </div>
      </div>
      <AiCard title="Read from your receipt" made="22 Oct 2026" play={play}>
        <div className="grid gap-2.5">
          <Step play={play} at={0}>
            <Fields rows={[["Amount", "₹4,720.00"], ["Date", "21 Oct 2026"], ["Vendor", "Hotel Sai Residency"], ["Category", "Lodging"]]} />
          </Step>
          <Step play={play} at={1} className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <Btn>Use these details</Btn>
            <Note>You can change anything before you submit.</Note>
          </Step>
        </div>
      </AiCard>
      <Step play={play} at={2}>
        <Alert title="You may have already claimed this amount for this date">Lodging claim, submitted on 22 Oct 2026, now Pending. Check before you submit.</Alert>
      </Step>
    </ScreenFrame>
  );
}

// web: helpdesk/AiTicketAssist. The draft has no name in it: names are removed before the ticket goes.
function HelpdeskScreen() {
  const { ref, play } = usePlay(3);
  const a = aiFeature("helpdesk");
  return (
    <ScreenFrame crumb="Helpdesk / HD-4821" alt={a.alt} frameRef={ref}>
      <p className="rounded-lg bg-white px-3 py-2 text-[13px] leading-snug text-body ring-1 ring-[#f0f0f0]">
        <span className="font-semibold text-ink">Pooja Iyer:</span> My September payslip does not show the HRA exemption for the rent receipts I uploaded.
      </p>
      <div className="flex flex-wrap items-center gap-2 rounded-lg bg-white px-3 py-2 ring-1 ring-[#f0f0f0]">
        <span className="text-[13px] font-semibold text-ink">Suggested category</span>
        <Tag tone="purple">AI suggestion</Tag>
        <span className="text-[13px] text-ink">Payroll</span>
        <span className="ml-auto flex gap-1.5">
          <Btn kind="ghost">Move to this category</Btn>
          <Btn>Ignore</Btn>
        </span>
      </div>
      <AiCard title="Reply draft" made="30 Oct 2026" play={play} runLabel="Draft a reply">
        <div className="grid gap-2 text-[13px] leading-snug text-ink">
          <Step play={play} at={0}>
            <p>Hello, your receipts were verified after the September payroll cut-off, so the exemption applies from the October run. Any extra TDS is adjusted across the remaining months of the year.</p>
            <Note>Based on: HRA and rent receipts</Note>
          </Step>
          <Step play={play} at={1}>
            <Btn kind="ghost">Use this draft</Btn>
          </Step>
          <Step play={play} at={2}>
            <Note>Check and edit it before you send. Nothing is sent until you press Send reply.</Note>
          </Step>
        </div>
      </AiCard>
    </ScreenFrame>
  );
}

const SENTENCE = "attrition by department last quarter";

// web: reports/AiReportAsk
function ReportScreen() {
  const { ref, play } = usePlay(3, { idleMs: 2300 });
  const a = aiFeature("report");
  const typing = play.phase === "idle";
  const typed = useTyped(SENTENCE, play);
  return (
    <ScreenFrame crumb="Reports / Catalog" alt={a.alt} frameRef={ref}>
      <div className="rounded-lg border border-[#f0f0f0] bg-white">
        <div className="flex flex-wrap items-center gap-2 border-b border-[#f0f0f0] px-3 py-2">
          <span className="text-sm font-semibold text-ink">Ask for a report</span>
          <Tag tone="purple">AI suggestion</Tag>
        </div>
        <div className="flex flex-wrap gap-2 p-3">
          <span className="min-h-[28px] min-w-0 flex-[1_1_180px] rounded-md border border-[#d9d9d9] px-2.5 py-[3px] text-[13px] text-ink">
            {typed}
            {typing && <span className="ml-px inline-block h-3.5 w-px animate-pulse bg-ink align-middle" />}
          </span>
          <Btn pressed={play.phase === "press"}>Find the report</Btn>
        </div>
      </div>
      <AiCard title="What AI picked" made="31 Oct 2026" play={play} afterAsk>
        <div className="grid gap-2.5">
          <Step play={play} at={0}>
            <Fields rows={[["Report", "Attrition trend"], ["Period", "01 Jul 2026 to 30 Sep 2026"]]} />
          </Step>
          <Step play={play} at={1}>
            <p className="text-[13px] leading-snug text-muted">This report shows exits and rate by department for the period you asked for.</p>
          </Step>
          <Step play={play} at={2} className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <Btn kind="primary">Open this report</Btn>
            <Note>You can change the filters there. Nothing is saved.</Note>
          </Step>
        </div>
      </AiCard>
    </ScreenFrame>
  );
}

// web: incomeTax/AiTaxProofCard
function TaxProofScreen() {
  const { ref, play } = usePlay(3, { idleMs: 900 });
  const a = aiFeature("taxProof");
  return (
    <ScreenFrame crumb="Self-service / Income tax / Submit your proofs" alt={a.alt} frameRef={ref}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 rounded-lg bg-white px-3 py-2 text-[13px] ring-1 ring-[#f0f0f0]">
        <span className="font-semibold text-ink">Section 80C, life insurance premium</span>
        <span className="tnum text-muted">Declared ₹1,50,000.00</span>
      </div>
      <AiCard title="Read from your proof" made="24 Oct 2026" play={play}>
        <div className="grid gap-2.5">
          <Step play={play} at={0}>
            <Fields
              rows={[
                ["Section", <span key="s" className="flex flex-wrap items-center gap-2">80C <Tag tone="green">Same as declared</Tag></span>],
                ["Amount", <span key="a" className="flex flex-wrap items-center gap-2">₹1,35,000.00 <Tag tone="gold">₹15,000.00 less than the ₹1,50,000.00 declared</Tag></span>],
                ["Financial year", <span key="f" className="flex flex-wrap items-center gap-2">2026-27 <Tag tone="green">Same as declared</Tag></span>],
                ["Issued by", "Bharat Life Assurance"],
              ]}
            />
          </Step>
          <Step play={play} at={1} className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <Btn>Use this amount</Btn>
            <Note>You can change it. Nothing is saved or approved by itself.</Note>
          </Step>
        </div>
      </AiCard>
      <Step play={play} at={2}>
        <Note>Proofs on the health-related lines (80D, 80DD, 80DDB, 80U) are not sent to AI.</Note>
      </Step>
    </ScreenFrame>
  );
}

// web: performance/AiPerformanceDrafts, documents/AiLetterDraftCard
function DraftsScreen() {
  const { ref: reviewRef, play: reviewPlay } = usePlay(3);
  const { ref: letterRef, play: letterPlay } = usePlay(3, { delayMs: 1200 });
  const a = aiFeature("drafts");
  return (
    <div ref={reviewRef} className="h-full">
      <div ref={letterRef} className="h-full">
        <ScreenFrame crumb="Performance / Review, Documents / Letter templates" alt={a.alt}>
          <AiCard title="Feedback draft" made="27 Oct 2026" play={reviewPlay} runLabel="Draft my feedback">
            <div className="grid gap-1.5 text-[13px] leading-snug text-ink">
              <Step play={reviewPlay} at={0}>
                <p className="text-[12.5px] font-semibold">Reduce payroll queries by 20%</p>
                <p className="mt-0.5">The self note describes a new query log and a monthly FAQ for employees. Ask for the closing figure before finalising this feedback.</p>
              </Step>
              <Step play={reviewPlay} at={1}>
                <Btn kind="ghost">Use this draft</Btn>
              </Step>
              <Step play={reviewPlay} at={2}>
                <Note>It goes into the Feedback box to edit. AI gives no score or rating, and nothing is submitted until you submit the review.</Note>
              </Step>
            </div>
          </AiCard>
          <AiCard title="Template draft" made="27 Oct 2026" play={letterPlay} runLabel="Draft this template">
            <div className="grid gap-1.5 text-[13px] leading-snug text-ink">
              <Step play={letterPlay} at={0}>
                <p>
                  Dear {"{{name}}"}, we are pleased to confirm your appointment as {"{{designation}}"} with effect from <span className="rounded bg-[#fffbe6] px-1">[fill in]</span>.
                </p>
              </Step>
              <Step play={letterPlay} at={1}>
                <Btn kind="ghost">Use this draft</Btn>
              </Step>
              <Step play={letterPlay} at={2}>
                <Note>It goes into the template box to edit. Replace every [fill in] and have it checked before use.</Note>
              </Step>
            </div>
          </AiCard>
        </ScreenFrame>
      </div>
    </div>
  );
}

// web: surveys/AiSurveySummaryCard
function SurveyScreen() {
  const { ref, play } = usePlay(4);
  const a = aiFeature("survey");
  return (
    <ScreenFrame crumb="Surveys / Pulse, October 2026 / Results" alt={a.alt} frameRef={ref}>
      <AiCard title="What people are saying" made="26 Oct 2026" play={play} runLabel="Summarise the comments">
        <div className="grid gap-2.5 text-[13px] leading-snug text-ink">
          <Step play={play} at={0}>
            <p>Most comments are positive about managers. The strongest concern is how far ahead shifts are published.</p>
          </Step>
          <Step play={play} at={1}>
            <p className="font-semibold">Themes</p>
            <p className="mt-1 font-medium">Shift notice</p>
            <p>People want rosters earlier, mainly in plant locations.</p>
            <p className="mt-1 font-medium">Growth paths</p>
            <p>Several ask what the next role looks like.</p>
          </Step>
          <Step play={play} at={2}>
            <p className="font-semibold">Actions to consider</p>
            <ul className="mt-1 list-disc pl-[18px]">
              <li>Publish rosters a week earlier in a trial location</li>
              <li>Share role ladders by department</li>
            </ul>
          </Step>
          <Step play={play} at={3}>
            <Note>Built from <span className="tnum">184</span> comments, with no names or quotes. A suggestion from AI: you decide.</Note>
          </Step>
        </div>
      </AiCard>
    </ScreenFrame>
  );
}

// web: reports/AiAttritionCard. 96 / 1,120 = 8.6%; 41 / 220 = 18.6%; 22 / 200 = 11.0%.
function AttritionScreen() {
  const { ref, play } = usePlay(5);
  const a = aiFeature("attrition");
  return (
    <ScreenFrame crumb="Reports / Attrition trend" alt={a.alt} frameRef={ref}>
      <AiCard title="Why people left" made="01 Nov 2026" play={play} runLabel="Explain the figures again">
        <div className="grid gap-2.5 text-[13px] leading-snug text-ink">
          <Step play={play} at={0}>
            <p className="font-semibold">This explains past trends by department. It is not a prediction, and it says nothing about any person.</p>
            <p className="tnum mt-1 text-[12.5px] text-muted">12 months to Oct 2026, whole company: 96 exits over an average headcount of 1,120, 8.6%.</p>
          </Step>
          <Step play={play} at={1}>
            <p><span className="font-semibold">Customer Support</span> <Tag tone="gold">Exits rising</Tag></p>
            <p className="tnum text-[12.5px]">41 exits · 18.6% · average headcount 220</p>
            <p className="mt-0.5">Most exits are resignations in the first year, with better opportunity as the top stated reason.</p>
            <Note>Check first: the first-year pay band against the local market.</Note>
          </Step>
          <Step play={play} at={2}>
            <p><span className="font-semibold">Sales</span> <Tag>Exits steady</Tag></p>
            <p className="tnum text-[12.5px]">22 exits · 11.0% · average headcount 200</p>
          </Step>
          <Step play={play} at={3}>
            <Note>Left out, to keep people from being identified: 2 small departments, with fewer than 5 people.</Note>
          </Step>
          <Step play={play} at={4}>
            <Note>{SUGGESTION}</Note>
          </Step>
        </div>
      </AiCard>
    </ScreenFrame>
  );
}

// web: ess/AiLearningSuggestionsCard
function LearningScreen() {
  const { ref, play } = usePlay(4);
  const a = aiFeature("learning");
  const courses = [
    ["Advanced Excel for HR", "Your role uses payroll reports, and this skill is not on your profile yet."],
    ["Statutory payroll basics", "Builds on the PF and ESI skills you already have."],
    ["Coaching for new team leads", "Fits the next step from your designation."],
  ];
  return (
    <ScreenFrame crumb="Self-service / My learning" alt={a.alt} frameRef={ref}>
      <AiCard title="Courses for you" made="01 Nov 2026" play={play} runLabel="Suggest courses for me">
        <div className="grid gap-2.5">
          {courses.map(([title, reason], i) => (
            <Step key={title} play={play} at={i} className="flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0 flex-[1_1_170px] text-[13px] leading-snug">
                <p className="font-semibold text-ink">{title}</p>
                <p className="text-body">{reason}</p>
              </div>
              <Btn>Open course</Btn>
            </Step>
          ))}
          <Step play={play} at={3}>
            <Note>Suggested from your role and skills. Nothing enrols you: you decide.</Note>
          </Step>
        </div>
      </AiCard>
    </ScreenFrame>
  );
}

// web: ai/AiImportMapping, leave/AiLeavePolicyDraft
function SetupScreen() {
  const { ref: mappingRef, play: mappingPlay } = usePlay(3, { idleMs: 900 });
  const { ref: policyRef, play: policyPlay } = usePlay(3, { idleMs: 900, delayMs: 1500 });
  const a = aiFeature("setup");
  const columns = [
    ["DOJ", "Date of joining"],
    ["Dept", "Department"],
    ["Desig.", "Designation"],
  ];
  const leave = [
    ["Casual leave", "1 a month", "Not stated", "No"],
    ["Earned leave", "1.5 a month", "30", "Yes, up to 15 days"],
    ["Sick leave", "7 a year", "Not stated", "No"],
  ];
  return (
    <div ref={mappingRef} className="h-full">
      <div ref={policyRef} className="h-full">
        <ScreenFrame crumb="Data migration / Employees, Leave policies" alt={a.alt}>
          <AiCard title="Column suggestions" made="20 Oct 2026" play={mappingPlay}>
            <div className="grid gap-2 text-[13px]">
              <Step play={mappingPlay} at={0} className="grid gap-1">
                {columns.map(([col, field]) => (
                  <p key={col} className="flex flex-wrap items-center gap-2">
                    <span className="w-12 shrink-0 text-muted">{col}</span>
                    <Tag tone="purple">AI suggestion: {field}</Tag>
                    <span className="text-brand">Use</span>
                  </p>
                ))}
              </Step>
              <Step play={mappingPlay} at={1}>
                <Btn kind="ghost">Use all 3 suggestions</Btn>
              </Step>
              <Step play={mappingPlay} at={2}>
                <Note>From the column headings and masked samples only. A column changes only when you choose it, and nothing imports until you do.</Note>
              </Step>
            </div>
          </AiCard>
          <AiCard title="Read from your document" made="20 Oct 2026" play={policyPlay}>
            <div className="grid gap-2">
              <Step play={policyPlay} at={0} className="overflow-hidden rounded-md border border-[#f0f0f0]">
                <table className="w-full text-left text-[12px]">
                  <thead className="bg-[#fafafa] text-ink">
                    <tr>
                      {["Leave", "Days", "Carry forward", "Encashment"].map((h) => (
                        <th key={h} className="px-1.5 py-1 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="tnum text-body">
                    {leave.map((r) => (
                      <tr key={r[0]} className="border-t border-[#f0f0f0]">
                        {r.map((c) => (
                          <td key={c} className="px-1.5 py-1 align-top">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Step>
              <Step play={policyPlay} at={1}>
                <Note>These values are what the document says. They are not checked against the law: check each one. Nothing is saved until you save the draft.</Note>
              </Step>
              <Step play={policyPlay} at={2}>
                <Btn kind="primary">Open as a draft policy</Btn>
              </Step>
            </div>
          </AiCard>
        </ScreenFrame>
      </div>
    </div>
  );
}

const SCREENS: Record<AiFeatureKey, () => React.JSX.Element> = {
  resume: ResumeScreen,
  payroll: PayrollScreen,
  receipt: ReceiptScreen,
  helpdesk: HelpdeskScreen,
  report: ReportScreen,
  taxProof: TaxProofScreen,
  drafts: DraftsScreen,
  survey: SurveyScreen,
  attrition: AttritionScreen,
  learning: LearningScreen,
  setup: SetupScreen,
};

export function AiScreen({ name }: { name: AiFeatureKey }) {
  const Screen = SCREENS[name];
  return <Screen />;
}
