import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "payroll-reconciliation-guide",
  title: "Payroll reconciliation: how to reconcile payroll every month",
  excerpt:
    "How to reconcile payroll each month in India: headcount, gross to net, variance, PF, ESI and TDS, bank file and the journal voucher, with a worked example.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `Payroll reconciliation is the monthly check that the figures in your payroll register agree with everywhere they end up: the headcount, last month's payroll, the PF, ESI and TDS filings, the bank file and the general ledger. Do it in a fixed order every month, before approval and again after payment, and make sure every difference is either corrected or explained in writing. A reconciled payroll is one where the numbers tie, not one where they are merely close.

This guide sets out six reconciliations, a worked example and the controls that keep the process honest, building on the verify stage described in our [monthly payroll process](/blog/monthly-payroll-process-step-by-step).

## The six reconciliations

| # | Reconciliation | Compares | When |
| --- | --- | --- | --- |
| 1 | Headcount | Last month's paid count, joiners, leavers, this month's count | Before compute |
| 2 | Gross to net | Earnings, deductions and net pay in the register | After compute |
| 3 | Month-on-month variance | This month's gross and net with last month's | Before approval |
| 4 | Statutory | Register with the PF ECR, ESI file, TDS challan and returns | Before filing |
| 5 | Bank file | Net pay with the bank upload file | Before release |
| 6 | General ledger | Journal voucher with the register and payments | After payment |

## 1. Headcount reconciliation

Start with people, not money. Last month's paid headcount plus joiners, minus leavers, should equal this month's payroll headcount. Then split this month's count into employees paid, employees held and employees settled separately through full and final settlement. Anyone active in HR but missing from payroll, or the reverse, is a finding.

## 2. Gross-to-net reconciliation

For the register as a whole, total earnings minus total deductions must equal total net pay. Check the component totals as well: basic, HRA, allowances, overtime, arrears and variable pay on the earnings side, and PF, ESI, PT, LWF, TDS, loan recoveries and other deductions on the other. Keep employer contributions (employer PF, EDLI, admin charges and employer ESI) in a separate section: they are a cost to the company, not a deduction from the employee.

## 3. Month-on-month variance

Build a bridge from last month's gross to this month's gross. Each movement should be attributed to a known cause: joiners, leavers, increments, arrears, LOP, overtime, variable pay, one-time payments. Whatever cannot be attributed is the unexplained variance, and it should be investigated until it is zero. Many teams also review every employee whose net pay moved by more than a set percentage, such as 10%.

## 4. Statutory reconciliation

### PF

Compare the ECR with the register: number of members, EPF wages, EPS and EDLI wages, the employee share, and the employer share split into EPS and EPF. The challan must also include EDLI and administration charges. Differences usually come from a late LOP correction or a missing UAN. See the [PF glossary entry](/glossary/pf) and [EPFO](https://www.epfindia.gov.in/) for current rates.

Note that the EPF wage ceiling rose from ₹15,000 to ₹25,000 from 17 September 2026, so September 2026 is a split month and ceiling-based figures (the employee share at the ceiling rises from ₹1,800 to ₹3,000) change from then on. EPFO guidance on the split month was still awaited at the time of writing. Rates and the 15th due date are unchanged under the EPF Scheme, 2026.

### ESI

Compare the number of insured persons, ESI wages, the 0.75% employee share and the 3.25% employer share with the monthly contribution filed with [ESIC](https://www.esic.gov.in/). Watch for employees who crossed ₹21,000 during a contribution period: they remain covered until the period ends, so they should still appear in the file.

### TDS

Each month, TDS deducted in the register must equal the TDS challan deposited by the 7th of the following month. Each quarter, the total of the three monthly registers must equal the challans mapped in Form 24Q and the sum of the deductee rows. Under the Income-tax Act, 2025, in force from 1 April 2026, Form 24Q has been renumbered as Form 138 (and Form 16 as Form 130), but the reconciliation logic is unchanged. Returns are prepared with the utilities published through [Protean](https://www.protean-tinpan.com/).

### PT and LWF

Reconcile PT and LWF state by state, because each state has its own challan and schedule.

## 5. Bank file versus net pay

The bank file total must equal the register's net pay less held salaries, and the number of rows must equal the number of employees paid. Also confirm that changed bank accounts were verified and returned payments are tracked.

## 6. General ledger and journal voucher

The payroll journal voucher must balance, and each account must tie back to the register: salary expense equals gross earnings, employer contribution expense equals employer PF, EDLI, admin and ESI, and each liability equals what will be paid to the authority or the employee. After payment, the salary payable account should hold only held salaries, and each statutory payable should clear to zero when the challan is paid.

## Worked example: August 2026

A company paid 248 employees in July 2026. In August, 6 people joined and 4 left. The leavers are settled through full and final settlement, so they are not in the regular run. The EPF wage ceiling in August was still ₹15,000.

### Headcount

| Item | Count |
| --- | --- |
| Paid in July | 248 |
| Add: joiners | 6 |
| Less: leavers | 4 |
| **On August payroll** | **250** |
| Of which held (bank details under verification) | 2 |
| Of which paid through the bank | 248 |

### Gross to net

| Item | Amount |
| --- | --- |
| Gross earnings | ₹1,25,00,000 |
| Employee PF (12% of EPF wages of ₹32,90,000) | ₹3,94,800 |
| Employee ESI (0.75% of ESI wages of ₹16,00,000) | ₹12,000 |
| Professional Tax (220 employees x ₹200) | ₹44,000 |
| TDS | ₹8,40,000 |
| Loan EMI recoveries | ₹60,000 |
| **Total deductions** | **₹13,50,800** |
| **Net pay** | **₹1,11,49,200** |

Check: 3,94,800 + 12,000 + 44,000 + 8,40,000 + 60,000 = 13,50,800, and 1,25,00,000 minus 13,50,800 = 1,11,49,200. The other 30 employees have no PT because of their state or wage band.

### Month-on-month bridge

| Movement | Amount |
| --- | --- |
| July gross | ₹1,22,00,000 |
| Add: 6 joiners, prorated | ₹2,10,000 |
| Less: 4 leavers' July pay | (₹1,80,000) |
| Add: increments effective 1 August | ₹1,50,000 |
| Add: arrears for a promotion backdated to 1 June | ₹40,000 |
| Less: higher LOP than July | (₹30,000) |
| Add: higher variable pay than July | ₹60,000 |
| Add: night shift allowance for a new roster | ₹50,000 |
| **August gross** | **₹1,25,00,000** |

When the bridge was first built, the ₹50,000 line was unexplained. It was traced to a new night shift roster starting 1 August, confirmed with the plant head and accepted. Only then was the variance fully explained.

### Statutory

In this example the two held salaries stay in the register and statutory files, because the wages are due and only the payment is waiting.

| PF item | Register | ECR and challan | Difference |
| --- | --- | --- | --- |
| Members | 246 | 246 | 0 |
| EPF wages | ₹32,90,000 | ₹32,90,000 | 0 |
| Employee share (12%) | ₹3,94,800 | ₹3,94,800 | 0 |
| Employer share (EPS plus EPF, 12%) | ₹3,94,800 | ₹3,94,800 | 0 |
| EDLI (0.5% of ₹32,90,000) | ₹16,450 | ₹16,450 | 0 |
| Admin charges (0.5% of ₹32,90,000) | ₹16,450 | ₹16,450 | 0 |
| **Total PF payable** | **₹8,22,500** | **₹8,22,500** | **0** |

This company calculates PF on wages capped at the ceiling, so EPF and EDLI wages are the same: 166 members at ₹15,000 (₹24,90,000) and 80 members on a basic of ₹10,000 (₹8,00,000), a total of ₹32,90,000 for 246 members. Four employees are not PF members because they joined with wages above the ceiling and were not previously members. Where PF is paid on actual basic above the ceiling, EPF wages will exceed EDLI wages.

| Other item | Register | Filing | Difference |
| --- | --- | --- | --- |
| ESI: 80 insured persons, employee ₹12,000 plus employer ₹52,000 (3.25% of ₹16,00,000) | ₹64,000 | ₹64,000 | 0 |
| TDS challan, deposited by 7 September 2026 | ₹8,40,000 | ₹8,40,000 | 0 |
| PT, by state | ₹44,000 | ₹44,000 | 0 |

PF and ESI for August are due by 15 September 2026. For the quarterly check, suppose TDS for April, May and June 2026 was ₹8,10,000, ₹8,25,000 and ₹8,40,000. The Form 24Q for that quarter, due 31 July 2026, should show challans and deductee totals of ₹24,75,000.

### Bank file

Net pay of ₹1,11,49,200 less held salaries of ₹1,10,000 gives a bank file total of ₹1,10,39,200 across 248 rows.

### Journal voucher

| Account | Debit | Credit |
| --- | --- | --- |
| Salaries and wages expense | ₹1,25,00,000 | |
| Employer PF contribution | ₹3,94,800 | |
| PF EDLI and admin charges | ₹32,900 | |
| Employer ESI contribution | ₹52,000 | |
| Net salary payable | | ₹1,11,49,200 |
| PF payable | | ₹8,22,500 |
| ESI payable | | ₹64,000 |
| PT payable | | ₹44,000 |
| TDS payable | | ₹8,40,000 |
| Employee loans receivable | | ₹60,000 |
| **Total** | **₹1,29,79,700** | **₹1,29,79,700** |

After the bank payment of ₹1,10,39,200, net salary payable shows ₹1,10,000, exactly the two held salaries. When the challans are paid, the PF, ESI, PT and TDS payables clear to zero.

## Controls that make reconciliation stick

- **Maker and checker.** The person who prepares the reconciliation is not the person who approves payroll.
- **Reconcile before approval**, not after payment, so errors are fixed before money moves.
- **Zero unexplained variance.** Tolerances are for rounding only, and every other difference has a written reason.
- **Lock the period** once approved, so the register cannot change after the files are generated.
- **Verify bank account changes** independently before the bank file is created.
- **Keep the evidence:** register, files, challans, bank confirmation and the signed reconciliation, filed by month.

## Common mistakes

- Reconciling totals only, so offsetting errors between employees go unnoticed.
- Regenerating the ECR after a late change without updating the register, or the reverse.
- Mapping challans to the wrong quarter in Form 24Q.
- Posting the JV at net pay instead of gross, which hides employer costs and statutory liabilities.
- Treating a held salary as paid in the ledger.

## FAQs

**How often should payroll be reconciled?** Every month, for every run including off-cycle runs, with an extra quarterly TDS check before Form 24Q is filed.

**Who should own payroll reconciliation?** Payroll prepares it and finance reviews it. The approver should see the signed reconciliation before approving.

**What tolerance is acceptable?** Only rounding differences. Anything else should be corrected or explained.

**What if the ECR does not match the register?** Find the employees who differ, correct the source (usually a late LOP change or a missing UAN), and regenerate the file from the corrected run rather than editing the file by hand.

## How NeevHR helps

NeevHR produces the salary register, a payroll exception report, the PF ECR file, ESIC contribution file, challans, the Form 24Q text file for validation with FVU, bank payment files and a balanced journal voucher CSV from the same approved run, so the figures start out consistent. Separation of duties across compute, verify, approve and publish, together with the audit log, gives you the control trail auditors ask for. See [NeevHR Payroll](/payroll) or [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
