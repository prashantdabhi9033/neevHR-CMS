import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "monthly-payroll-checklist",
  title: "Monthly payroll checklist for Indian companies",
  excerpt:
    "Monthly payroll checklist for India: input cut-off, joiners, leavers, LOP, arrears, run checks, bank file, JV, and PF, ESI, TDS, PT and LWF due dates.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `A monthly payroll checklist for an Indian company has four parts: collect and freeze inputs before a fixed cut-off, run and verify the payroll, complete the post-payroll outputs (bank file, payslips, register and journal voucher), and meet the statutory deadlines that follow, mainly TDS by the 7th and PF and ESI by the 15th of the next month, with PT and LWF on each state's schedule. Tick every item every month, even the ones that "never change".

This is a working checklist you can copy into your own process. For the underlying five-stage cycle (inputs, compute, verify, approve, publish), read our companion article on the [monthly payroll process, step by step](/blog/monthly-payroll-process-step-by-step).

## A sample payroll calendar

Dates depend on your pay date. The example below assumes salaries are paid on the last working day of the month. Under the Code on Wages, 2019, monthly wages must be paid before the expiry of the 7th day of the following month, so a later pay date is possible, but the statutory deadlines stay the same.

| When | Activity |
| --- | --- |
| 20th to 22nd | Input cut-off: attendance, leave, overtime, joiners, exits, revisions, claims |
| 23rd to 25th | Compute and verify, resolve exceptions |
| 26th to 27th | Approval by a named approver who did not compute the run |
| 27th to last working day | Bank file uploaded, payslips published, JV sent to finance |
| By 7th of next month | TDS deposited |
| By 15th of next month | PF (ECR) and ESI contributions paid |
| State due dates | PT and LWF deposited and returns filed |

Some companies close attendance on the 20th and carry the last 10 days into the next month's payroll (lagged attendance). That is fine if it is consistent, documented and applied to LOP and overtime alike.

## Part 1: Pre-payroll inputs

### Joiners

- [ ] Date of joining, entity, location, department and grade confirmed
- [ ] Salary structure assigned and CTC breakup checked
- [ ] PAN, bank account and IFSC verified
- [ ] UAN captured for employees who had one, or new UAN generation planned
- [ ] ESI insurance number for covered employees
- [ ] Tax regime choice and previous-employer income and TDS for the current tax year
- [ ] PT state set from the work location

### Leavers

- [ ] Last working day confirmed and salary to that date calculated
- [ ] Notice period shortfall or buyout recovery decided
- [ ] Leave encashment, gratuity eligibility and statutory bonus reviewed
- [ ] Outstanding loans, advances and asset recoveries listed
- [ ] Wages due paid within 2 working days of separation under section 17(2) of the Code on Wages; plan full and final settlement accordingly and confirm how your state rules apply

### Time and attendance

- [ ] Attendance closed for the period, missed punches regularised
- [ ] Pending leave applications approved or rejected (unapproved absence becomes [loss of pay](/glossary/lop))
- [ ] LOP days computed per employee, using your documented divisor
- [ ] LOP reversals for earlier months identified
- [ ] Overtime approved and within your state's limits

### Pay changes

- [ ] Salary revisions and promotions with effective dates, including backdated ones for arrears
- [ ] Variable pay, incentives and one-time payments, each with approval
- [ ] Reimbursement claims approved
- [ ] New loans, EMIs due and closures
- [ ] Other deductions such as canteen, transport or recoveries
- [ ] Transfers that change the PT or LWF state

### Tax inputs

- [ ] New or revised investment declarations
- [ ] Proofs verified (usually January to March)
- [ ] Regime changes applied where your policy allows them

| Input | Typical source | Owner |
| --- | --- | --- |
| Attendance, overtime, LOP | Attendance system, managers | HR operations |
| Joiners and exits | Recruitment, onboarding, exit workflow | HR operations |
| Revisions and arrears | Compensation team | HR head |
| Variable pay | Business heads | Finance or HR |
| Reimbursements | Expense approvals | Finance |
| Tax declarations | Employees | Payroll |

## Part 2: Run and verify

- [ ] Headcount: last month's paid count plus joiners minus leavers equals this month's count
- [ ] Joiner and leaver proration correct
- [ ] LOP reduces both earnings and the PF and ESI base
- [ ] Arrears calculated against the correct earlier months
- [ ] PF calculated on the right wage base and ceiling
- [ ] ESI applied to eligible employees, respecting the contribution period
- [ ] PT applied by work state; LWF deducted in the months your states require
- [ ] TDS projection updated for revisions, declarations and variable pay
- [ ] No employee below the applicable minimum wage
- [ ] No negative or zero net pay without a reason
- [ ] Month-on-month variance reviewed and large movements explained
- [ ] Held salaries recorded with a reason
- [ ] Approved by someone other than the person who computed the run

### PF wage ceiling change from 17 September 2026

The EPF wage ceiling was raised from ₹15,000 to ₹25,000 a month with effect from 17 September 2026 ([PIB release](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2310811)). September 2026 is therefore a split month, and employees whose PF is calculated at the ceiling will see a higher deduction from October. At the new ceiling the employee share is up to ₹3,000 a month, against ₹1,800 before, and employees earning up to ₹25,000 are now mandatorily covered. EPFO guidance on handling the September split in the ECR was still awaited at the time of writing, so check [EPFO](https://www.epfindia.gov.in/) before filing. The EPF and MP Act, 1952 has been repealed; EPFO now runs the EPF Scheme, 2026 under the Code on Social Security, 2020, with the same rates and the same 15th-of-the-month due date.

### Worked example: a mid-month joiner with LOP

An employee joins on 11 November 2026 with a monthly gross of ₹20,000: basic ₹10,000, HRA ₹5,000 and special allowance ₹5,000. November has 30 days, so the employee is on the rolls for 20 days (11 to 30 November). They have 2 days of unapproved absence, so payable days are 18. The company uses calendar days as the divisor, and PF is calculated on basic.

| Item | Calculation | Amount |
| --- | --- | --- |
| Basic | 10,000 x 18 / 30 | ₹6,000 |
| HRA | 5,000 x 18 / 30 | ₹3,000 |
| Special allowance | 5,000 x 18 / 30 | ₹3,000 |
| **Gross earned** | | **₹12,000** |
| Employee PF | 12% of ₹6,000 | ₹720 |
| Employee ESI | 0.75% of ₹12,000 | ₹90 |
| PT | Assumed nil for this state and wage | ₹0 |
| TDS | Projected annual income below the taxable limit | ₹0 |
| **Net pay** | 12,000 minus 720 minus 90 | **₹11,190** |

The employer also pays PF of ₹720 (12% of ₹6,000) and ESI of ₹390 (3.25% of ₹12,000). ESI applies because the monthly wage of ₹20,000 is within the ₹21,000 limit. Try the numbers with our [PF calculator](/tools/pf-calculator) and [ESI calculator](/tools/esi-calculator).

## Part 3: Post-payroll

- [ ] Bank file total equals total net pay less held salaries
- [ ] Bank file count equals employees paid; changed bank accounts re-verified
- [ ] Payslips published to employees
- [ ] Salary register saved for the period
- [ ] Journal voucher generated, balanced and sent to finance
- [ ] Payroll period locked; later changes go to the next run or an off-cycle run
- [ ] Held salaries and full and final settlements scheduled
- [ ] Failed or returned bank credits tracked and repaid

## Part 4: Statutory deadlines

| Obligation | Due | What you prepare | Where |
| --- | --- | --- | --- |
| TDS on salary | 7th of next month (30 April for March) | TDS challan | [Income Tax Department](https://www.incometax.gov.in/) |
| PF | 15th of next month | ECR file and challan | [EPFO](https://www.epfindia.gov.in/) |
| ESI | 15th of next month | Monthly contribution file | [ESIC](https://www.esic.gov.in/) |
| Professional Tax | Varies by state: monthly, half-yearly or annual | State challan and return | State PT portal |
| Labour Welfare Fund | Varies by state: often half-yearly or annual | State LWF challan | State welfare board |
| Form 24Q | 31 July, 31 October, 31 January, 31 May | Quarterly TDS return file | Via [Protean](https://www.protean-tinpan.com/) utilities and TIN facilitation |
| Form 16 | 15 June after the tax year | Part A and Part B | Issued to employees |

Under the Income-tax Act, 2025, in force from 1 April 2026, forms are renumbered: Form 24Q is now Form 138 and Form 16 is now Form 130, though most teams still use the familiar names. For state levies, check each state's rules. As one example, Maharashtra LWF is deducted from June and December wages and paid before 15 July and 15 January.

### Periodic items to add to the monthly list

- [ ] **April:** new tax year, regime choices, ESI contribution period starts
- [ ] **October:** ESI contribution period starts; recheck eligibility
- [ ] **Each quarter end:** Form 24Q prepared from the three months' registers and challans
- [ ] **January to March:** proof collection and final TDS true-up by March
- [ ] **Within 8 months of the accounting year end:** statutory bonus paid

## Common mistakes

- **No hard cut-off**, so inputs keep arriving after compute and the run is recalculated repeatedly.
- **LOP reducing net pay only**, leaving PF and ESI on unearned wages.
- **Stopping ESI mid-period** when an employee's wages cross ₹21,000; coverage continues until the contribution period ends.
- **Ignoring the Code's wage definition.** Where excluded allowances exceed 50% of total remuneration, the excess counts as wages for PF, gratuity and other purposes.
- **Paying salaries, then missing the 7th or the 15th** because deposits sit with a different team.
- **Same person computes and approves**, so no one checks the run.

## FAQs

**What is a good payroll input cut-off date?** Five to seven working days before the pay date is common. It leaves time to compute, verify and approve without rushing.

**Should leavers be paid in the regular run or separately?** Either works, provided wages due are paid on time. Many companies settle leavers through a separate full and final run so the regular payroll is not held up.

**What if an input arrives after the cut-off?** Process it in the next month as arrears or an adjustment, or in an off-cycle run if the amount is significant.

**Is PT deducted every month?** It depends on the state. Some states deduct monthly, some half-yearly, and some states do not levy PT at all.

## How NeevHR helps

NeevHR pulls closed attendance, approved leave, joiners, exits, arrears, loans and variable pay into payroll, calculates PF, ESI, PT, LWF and TDS, and flags anomalies in a payroll exception report before a separate approver signs off. After approval it generates the bank files, salary register, balanced journal voucher, PF ECR file, ESIC contribution file, challans and the Form 24Q text file for FVU validation; your team uploads and pays on the government portals. See [NeevHR Payroll](/payroll) for details.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
