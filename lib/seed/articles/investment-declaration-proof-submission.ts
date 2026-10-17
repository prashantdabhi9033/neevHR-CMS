import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "investment-declaration-proof-submission",
  title: "Investment declaration and proof submission: HR guide",
  excerpt:
    "How to run investment declaration and proof submission in payroll: regime choice, Form 124, HRA and 80C proofs, common rejections and an HR calendar.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-16",
  body: `Investment declaration and proof submission is the two-step process payroll uses to give employees credit for tax-saving claims during the year. In April, employees choose a tax regime and declare the rent, investments, insurance and home loan interest they expect; payroll deducts TDS on that basis. Between roughly December and February, they submit proofs; anything not proved is removed, and the extra tax is recovered from the remaining months, usually January to March.

This guide is about running that process well as HR and payroll. For how monthly TDS is projected, see [salary TDS explained](/blog/salary-tds-explained), and for the rent calculation, [HRA exemption explained](/blog/hra-exemption-explained).

## A note on the new Income-tax Act

The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026, and the year is now the tax year. The statement employees use to report claims to the employer is **Form 124 (formerly Form 12BB)**. Section 80C is now section 123 and 80D is section 126; salary TDS is section 392 (old 192). Other provisions, such as home loan interest and the additional NPS deduction, also carry new numbers; confirm them on the [Income Tax Department](https://www.incometax.gov.in/) website. This article uses both old and new names because most employees still search by the old ones.

## Who needs to declare and prove?

Mostly employees on the old regime. The new regime, which is the default, allows almost none of the deductions this process exists for. New-regime employees still have things to declare, but far fewer:

| Item | Old regime | New regime |
| --- | --- | --- |
| Regime choice | Required | Required (default if not intimated) |
| HRA (rent) | Declare and prove | Not available |
| LTA | Declare and prove | Not available |
| 80C / section 123 investments | Declare and prove | Not available |
| 80D / section 126 health insurance | Declare and prove | Not available |
| Home loan interest, self-occupied | Declare and prove | Not available |
| Additional NPS (old 80CCD(1B)) | Declare and prove | Not available |
| Employer NPS contribution | Through payroll | Through payroll |
| Previous employer salary (Form 122, formerly 12B) | Declare | Declare |
| Other income the employee wants considered | Optional | Optional |

So the proof cycle is largely an old-regime workload. Knowing how many employees chose the old regime tells you how big the January queue will be.

## Stage 1: the April declaration

In the first payroll cycle of the tax year, ask every employee for:

- **Regime intimation.** Under CBDT guidance issued for the old Act, an employee who does not intimate a choice is taxed under the default new regime. The choice is for TDS; the employee can still choose either regime in the return. Your policy should say whether the intimation can be changed during the year, and by when.
- **Declared amounts** under each head, as realistic estimates, not wishful ones.
- **Previous employer details** for anyone who joined after April.

New joiners declare at onboarding. Without a declaration, payroll should project TDS with no deductions, which is safe but makes early take-home lower than it needs to be.

## Stage 2: the proof window

Most employers open the proof window in December or early January and close it in late January or February. The goal is to leave at least two payroll cycles before March, so that any shortfall is spread rather than crammed into one month.

### What proofs are needed for each claim?

| Claim | Proofs commonly required | Watch points |
| --- | --- | --- |
| HRA | Rent receipts or rent agreement; landlord's PAN where annual rent exceeds ₹1,00,000 | Form 124 reportedly also asks about the relationship with the landlord; receipts must cover the months claimed |
| LTA | Tickets and boarding passes for the employee and family | Domestic travel only; the block-year rules limit the number of journeys |
| 80C / section 123 (up to ₹1,50,000) | Premium receipts, PPF passbook or statement, ELSS statement, tuition fee receipts, home loan principal certificate | Payments must fall in the tax year; tuition fees cover the tuition component only |
| 80D / section 126 | Health insurance premium receipts; preventive check-up bills | Limits differ for self, family and senior citizen parents; confirm current amounts |
| Home loan interest | Lender's certificate showing interest and principal for the year | Self-occupied interest up to ₹2,00,000 under the old regime; separate pre-construction interest rules |
| Additional NPS (old 80CCD(1B)) | NPS transaction statement | Up to ₹50,000 under the old regime; confirm the renumbered section |
| Previous employment | Form 122 with salary and TDS, ideally backed by payslips or the previous Form 130 (Form 16) | Standard deduction and rebate only once for the year |

Where a landlord genuinely has no PAN, employers commonly accept a declaration from the landlord to that effect. Set the rule in your policy rather than deciding case by case.

## Stage 3: verification and true-up

The employer must be satisfied with the evidence before allowing a claim. In practice:

1. **Verify** each proof against the declared head, the employee's name (or the eligible family member's), the amount and the period.
2. **Approve, partly approve or reject**, with a reason the employee can see.
3. **Recompute** the annual tax with the approved figures.
4. **Re-spread** the tax still due over the remaining months, counting the current month.
5. **Communicate** the revised TDS before the payslip arrives, so nobody is surprised.

### Worked example: a missing landlord PAN in January

Rohit works in Mumbai on the old regime. His annual basic is ₹6,00,000, HRA ₹3,00,000 and special allowance ₹5,40,000, so gross salary is ₹14,40,000. He pays rent of ₹30,000 a month and declared ₹1,50,000 under 80C and ₹25,000 under 80D. Professional tax is ₹2,500 for the year.

His HRA exemption is the least of HRA received (₹3,00,000), rent minus 10% of basic (₹3,60,000 − ₹60,000 = ₹3,00,000) and 50% of basic (₹3,00,000): ₹3,00,000.

| Line | Declared (April) | After proofs (January) |
| --- | --- | --- |
| Gross salary | ₹14,40,000 | ₹14,40,000 |
| Less HRA exemption | ₹3,00,000 | ₹0 (no landlord PAN) |
| Less standard deduction | ₹50,000 | ₹50,000 |
| Less professional tax | ₹2,500 | ₹2,500 |
| Less 80C / section 123 | ₹1,50,000 | ₹1,00,000 (proofs short) |
| Less 80D / section 126 | ₹25,000 | ₹25,000 |
| Taxable income | ₹9,12,500 | ₹12,62,500 |
| Tax with 4% cess | ₹98,800 | ₹1,98,900 |

From April to December payroll deducted about ₹8,233 a month, or ₹74,097 in total. After the January true-up, ₹1,98,900 − ₹74,097 = ₹1,24,803 is left for three months: about ₹41,601 a month, five times his usual TDS. Rohit's rent is above ₹1,00,000 a year, so without the PAN (or an accepted declaration) the exemption cannot be allowed. He can still claim it in his return if he has the evidence, but his take-home in January to March has already taken the hit. This is why HR should flag missing landlord PANs in December, not discover them in the January verification.

## The HR communication calendar

| When | What HR sends or does | Audience |
| --- | --- | --- |
| Early April | Regime intimation and declaration window opens; explain the default regime | All employees |
| Mid to late April | Declaration closes; first TDS on declared figures | All employees |
| At every joining | Declaration and Form 122 at onboarding | New joiners |
| July | Reminder that declared investments need to be made, not just declared | Old-regime employees |
| October | Proof checklist published; reminder on landlord PAN and rent agreements | Old-regime employees |
| November | Regime change cut-off, if your policy allows one | All employees |
| December | Proof window opens; pre-check of missing landlord PANs | Old-regime employees |
| Mid to late January | Proof window closes; verification starts | Old-regime employees |
| February | Rejections communicated with reasons; one resubmission window | Affected employees |
| February to March | TDS re-spread over the remaining payroll cycles | Payroll |
| March | Final payroll of the year; no new proofs accepted | Payroll |
| By 15 June | Form 130 (formerly Form 16) issued, reflecting approved claims | All employees |

## Common rejection reasons

| Reason | Example | Prevention |
| --- | --- | --- |
| Landlord PAN missing | Rent above ₹1,00,000 a year, no PAN or declaration | Ask for PAN at the April declaration |
| Wrong period | Insurance premium paid in the previous tax year | Check payment dates against the tax year |
| Wrong person | Policy in a parent's name claimed under 80C | Publish who is an eligible person for each head |
| Incomplete document | Home loan certificate without the interest-principal split | Ask lenders for the provisional certificate early |
| Non-eligible component | School fee receipt including development or transport fees | Accept only the tuition portion |
| Unreadable or altered proof | Blurred scans, edited PDFs | Require clear uploads; verify suspicious documents |
| Claim above limit | 80C claims totalling ₹2,10,000 | Cap at the statutory limit automatically |
| Declared, never invested | ELSS declared in April, no purchase made | July and October reminders |

## Common mistakes

- Opening the proof window in March, so every shortfall lands in one payslip.
- Asking new-regime employees for investment proofs they cannot use.
- Accepting the April declaration as proof and never recomputing.
- Rejecting proofs without a reason, which floods the helpdesk.
- Missing the landlord PAN check until verification.
- Storing proofs in shared drives or email, with no access control. Proofs contain addresses, PAN and family details, which are personal data under the DPDP Act.

## FAQs

**What is Form 124?** It is the statement of claims an employee gives the employer for HRA, LTA, deductions and home loan interest, with evidence. It replaced Form 12BB under the Income-tax Act, 2025.

**What if an employee misses the proof deadline?** Payroll removes the unproved claims and recovers the extra tax from the remaining months. The employee can still claim eligible deductions when filing the return, with the evidence.

**Is landlord PAN mandatory for HRA?** It is required where annual rent exceeds ₹1,00,000. Where the landlord has no PAN, employers commonly accept a declaration from the landlord.

**Do new-regime employees need to submit investment proofs?** Generally no, because the new regime does not allow those deductions. They may still need to declare previous employment income and confirm their regime.

**Can an employee switch regime after declaring?** Many employers allow one change before a cut-off. The final choice can still be made in the return.

**Why did my TDS jump in January?** Usually because some declared claims were not proved, so the annual tax rose and the balance was spread over the last three months.

## How NeevHR helps

NeevHR [payroll](/payroll) computes TDS under each employee's chosen regime from their declaration, re-projects it every month as proofs, previous-employer income, arrears and variable pay come in, and spreads the balance over the months that remain. The [benefits](/features/benefits) module runs a declare, submit proof and verify workflow for FBP, with verified amounts reducing taxable income from the next payroll run, and Form 16 is generated and distributed through [compliance](/features/compliance). Check an employee's numbers with the [TDS calculator](/tools/tds-calculator), or [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 17 Oct 2026.*`,
};

export default post;
