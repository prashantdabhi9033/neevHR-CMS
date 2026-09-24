import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "payroll-compliance-checklist-india",
  title: "Payroll compliance checklist for India: registrations, deposits and returns",
  excerpt:
    "The registrations, monthly deposits, quarterly returns and annual filings an Indian employer must track, with due dates, records to keep and common lapses.",
  category: "compliance",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `Payroll compliance in India comes down to three things: hold the right registrations (PF, ESI, professional tax, labour welfare fund, TAN and shops and establishments), deposit deductions on time every month (TDS by the 7th, PF and ESI by the 15th), and file the periodic returns (quarterly TDS returns, Form 16, state PT and LWF returns). Miss a registration and every later month is a default; miss a due date and interest and damages start running. This checklist sets out what to register, what to pay and file each month, quarter and year, and where employers usually slip.

## Before the first payroll: registrations

Registrations are triggered by headcount, location and the type of establishment. Check them when you set up a new entity, open a new state location, or cross a headcount threshold.

| Registration | Who needs it | Where | Notes |
| --- | --- | --- | --- |
| EPF (establishment code) | Establishments with 20 or more employees; voluntary below that | [EPFO](https://www.epfindia.gov.in/) employer portal | Once covered, stays covered even if headcount falls |
| ESI (employer code) | Establishments with 10 or more employees in notified areas | [ESIC](https://www.esic.gov.in/) employer portal | Coverage of some establishment types is by state or central notification |
| Professional tax | Employers in states that levy PT | State commercial tax or PT portal | Some states issue separate employer registration and enrolment certificates |
| Labour welfare fund | Employers in states with an LWF law | State welfare board | Thresholds, amounts and periodicity differ by state |
| TAN | Any employer deducting TDS on salary | Apply through [Protean](https://www.protean-tinpan.com/) | Needed before the first TDS deposit |
| Shops and establishments | Shops, offices and commercial establishments | State labour department or municipal portal | Many states now use online, sometimes one-time, registration |

A few practical points:

- **Registration is per entity, and sometimes per location.** PF and ESI are registered at establishment level; PT and LWF follow the state where the employee works, not where head office sits.
- **The Labour Codes add their own registration.** The Code on Social Security, 2020 and the Occupational Safety, Health and Working Conditions Code, 2020 provide for establishment registration, with rules being notified progressively by states. Existing registrations generally continue, but check what your state now requires.
- **Coverage for PF and ESI is automatic once the threshold is crossed.** The duty to register and contribute starts from the date of applicability, not from the date you notice.

## The legal backdrop in 2026

The four Labour Codes came into force on 21 November 2025. The Code on Social Security, 2020 subsumes the EPF, ESI, gratuity and maternity laws, and the Code on Wages, 2019 subsumes minimum wages, payment of wages and bonus. Central Rules under all four Codes were notified in May 2026, and EPFO now operates new schemes framed under the Code (EPF Scheme 2026, EPS 2026 and EDLI 2026). State rules are still being notified progressively, and older state rules continue where they are not inconsistent with the Codes.

Three changes matter directly for payroll:

- **The uniform definition of wages.** If excluded components such as HRA, conveyance and overtime allowance exceed 50% of total remuneration, the excess is added back to wages. This affects the base for PF, gratuity and ESI.
- **The EPF wage ceiling rose to ₹25,000 a month from 17 September 2026** (earlier ₹15,000). Employees earning up to ₹25,000 now fall within mandatory coverage, and the employee share at the ceiling rises from ₹1,800 to ₹3,000. See our [EPF overview](/blog/epf-explained-contribution-uan-withdrawal) for the basics.
- **Payment timelines under the Code on Wages.** Monthly wages must be paid before the 7th of the following month, and wages due on resignation, dismissal or retrenchment must be paid within 2 working days.

The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026. Form 16 is now Form 130 and Form 24Q is now Form 138. This article uses the familiar names.

## The compliance calendar

| Frequency | Obligation | Due date |
| --- | --- | --- |
| Monthly | Pay salaries | Before the 7th of the next month (Code on Wages) |
| Monthly | Deposit TDS on salary | 7th of the next month; 30 April for March |
| Monthly | PF: file ECR and pay | 15th of the next month |
| Monthly | ESI: file contribution and pay | 15th of the next month |
| Monthly or other | Professional tax deposit and return | Varies by state and by the size of the employer's liability |
| Quarterly | Form 24Q (Form 138) TDS return | 31 July, 31 October, 31 January, 31 May |
| Half-yearly or annual | Labour welfare fund | Varies by state; many states collect in June and December |
| Annual | Form 16 (Form 130) to employees | 15 June after the tax year |
| Annual | Statutory bonus | Within 8 months of the close of the accounting year |
| Annual | PT annual return, where the state requires one | Varies by state |
| Event-based | Final wages on exit | Within 2 working days of separation |
| Event-based | Gratuity on exit | Within 30 days of becoming payable |

Two dates cause most of the pressure: the 7th, when TDS and salary deadlines coincide, and the 15th, when PF and ESI are due together. If payroll closes late in the month, build the ECR and ESI file in the same run rather than a week later.

### Monthly routine, in order

1. Lock attendance, leave and loss of pay, so wages are final. See [attendance](/features/attendance) for how loss of pay feeds payroll.
2. Run payroll and compute PF, ESI, PT, LWF where due, and TDS.
3. Review exceptions: negative net pay, statutory base changes, new joiners without UAN, leavers without an exit date.
4. Approve, pay salaries, and release payslips.
5. Deposit TDS by the 7th.
6. File the PF ECR and ESI contribution, then pay both by the 15th.
7. Pay PT and file the PT return where the state requires it that month.
8. Reconcile: payroll deductions should equal the challans paid, head by head.

For a fuller walk-through, see our [monthly payroll process guide](/blog/monthly-payroll-process-step-by-step).

## Records to keep

Inspectors and auditors ask for the same evidence: what was paid, what was deducted, and proof that it reached the government.

- **Wage and attendance registers.** The Labour Codes consolidate the older registers; the exact forms depend on the Central or state rules that apply to you.
- **Salary register and payslips** for every month, with component-level detail.
- **PF records:** ECR files, return statements, challans with TRRN, and payment receipts.
- **ESI records:** monthly contribution files, challans, and employee registration details.
- **TDS records:** challans, quarterly return acknowledgements, Form 16, and employee declarations and proofs.
- **PT and LWF challans and returns**, state by state.
- **Employee master data:** joining and exit dates, UAN, ESI insurance number, PAN, bank details, and nominations.
- **Policy documents:** the salary structure, bonus policy and any PF capping policy, since these explain how the numbers were derived.

Keep records for at least the period your applicable labour rules and the income-tax law require. Because tax reassessment windows run for several years, a longer retention period is usually the safer choice; confirm the period that applies to you.

## Common lapses

- **Registering late.** A company grows from 18 to 25 people and nobody applies for PF coverage. Arrears then run from the date of applicability, with interest and damages.
- **Wrong wage base.** PF computed on a basic that is only a small fraction of CTC, with no check against the 50% wages test.
- **Not updating for the new EPF ceiling.** Employers whose policy caps PF at "₹15,000" need to decide whether the policy means a fixed amount or the statutory ceiling, which is now ₹25,000.
- **Missing the ESI contribution-period rule.** Stopping ESI the month an increment crosses ₹21,000, instead of at the end of the contribution period.
- **PT registered only at head office.** Employees in other states then have PT deducted at the wrong rate, or not at all.
- **Exits not marked on the EPFO portal.** Under the revamped ECR, unmarked exits keep members active and can block later filings.
- **Challan and return mismatch.** Paying TDS under the wrong section or quarter, or quoting the wrong PAN, creates notices long after the payroll closed.
- **Late full and final settlement.** The 2-working-day rule for wages due on separation is stricter than many older exit policies.

## Common mistakes in how teams run compliance

Beyond individual lapses, the process itself tends to fail in predictable ways:

- **Compliance runs on one person's memory.** Keep a written calendar by entity and state, with a named owner and a backup.
- **No maker-checker.** The person who computes payroll should not be the only person who approves and pays it.
- **Reconciliation happens once a year.** Mismatches found in May, when Form 16 is due, are hard to trace back to the month they started.
- **State variation is ignored.** PT and LWF are state subjects with their own slabs and due dates. Treat each state as a separate checklist line.

## FAQs

**Do we need PF registration below 20 employees?** It is not mandatory, but an establishment can opt in voluntarily. Once covered, it stays covered even if headcount later falls.

**Is there still a separate half-yearly ESI return?** ESI contributions are filed and paid monthly on the ESIC portal. Check the ESIC portal for any return your establishment is specifically required to file.

**Are PT and LWF the same in every state?** No. Both are state laws, so whether they apply, the amounts and the due dates all vary. PT is capped at ₹2,500 a year by the Constitution.

**What changed with the new Income-tax Act?** The rules on salary TDS largely carried over, but sections and forms are renumbered. Form 24Q is now Form 138 and Form 16 is now Form 130, with the same due dates.

**Do the Labour Codes replace our existing registrations?** Existing PF and ESI registrations continue. Additional registration under the Codes depends on your state's rules, which are still being notified in many states.

## How NeevHR helps

NeevHR computes PF, ESI, PT, LWF and TDS in the same [payroll](/payroll) run, with compute, verify, approve and publish kept as separate steps, and a payroll exception report before anything is paid. It generates the PF ECR file, ESIC contribution file, PF, TDS, PT and LWF challans, and the Form 24Q text file for validation with the FVU. The employer then uploads and pays on the government portals. See how the [compliance features](/features/compliance) fit together, or [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
