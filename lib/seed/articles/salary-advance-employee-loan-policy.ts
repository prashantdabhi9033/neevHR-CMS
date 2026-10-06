import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "salary-advance-employee-loan-policy",
  title: "Salary advance and employee loan policy: tax and recovery",
  excerpt:
    "How to write a salary advance and employee loan policy: limits, EMI caps, perquisite tax on interest-free loans, payroll recovery limits and recovery on exit.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-06",
  body: `A salary advance is a short-term payment against wages not yet earned, usually recovered within one to three months. An employee loan is a larger sum repaid in EMIs over a longer tenure, with or without interest. Both are recovered through payroll within the Code on Wages limits on deductions, and an interest-free or concessional loan above the exempt limit creates a taxable perquisite for the employee.

This guide covers policy design, tax and recovery. For how outstanding balances are settled when someone leaves, see our guide to [full and final settlement](/blog/full-and-final-settlement-explained).

## Salary advance vs employee loan: what is the difference?

| Feature | Salary advance | Employee loan |
| --- | --- | --- |
| Purpose | Short-term cash need before payday | Larger needs: medical, education, housing deposit, family events |
| Typical size | Up to one month's net pay | A multiple of monthly gross, within a policy cap |
| Tenure | One to three months | Six months to a few years |
| Interest | Usually none | None, concessional or market-linked |
| Documentation | Request and approval | Application, sanction letter, signed loan agreement, EMI schedule |
| Tax | Usually none if structured as a short interest-free advance within the exempt limit | Perquisite on interest-free or concessional loans above the exempt limit |

In practice, many employers treat a salary advance as a short interest-free loan recovered from the next few salaries, and the salary is taxed as it is earned. If instead you pay salary before it falls due (advance salary in the strict sense), it is generally taxable when received. Decide which one your policy describes and keep the payroll treatment consistent with it.

## Designing a salary advance and loan policy

A good policy answers every question an approver would otherwise improvise. The sizes below are illustrative ranges, not benchmarks; set your own based on cash flow and risk appetite.

| Policy element | What to decide | Illustrative setting |
| --- | --- | --- |
| Eligibility | Who can apply | Confirmed employees, not serving notice, no default on an earlier loan |
| Loan types | Categories with separate rules | Salary advance, emergency or medical loan, personal loan |
| Limit | Maximum principal | Advance up to 1 month's net pay; loan up to 3 to 6 months' gross |
| Tenure | Maximum repayment period | Advance 3 months; loan up to 24 months, and never beyond a fixed-term contract end |
| EMI cap | Maximum instalment relative to pay | EMI not more than 25% to 30% of monthly net pay |
| Interest | Rate and method | Interest-free, a concessional rate, or a benchmark-linked rate; flat or reducing balance |
| Approvals | Who sanctions | Manager, then HR, then finance above a set amount |
| Concurrent loans | How many at once | One advance and one loan at most |
| Exit | What happens on resignation or termination | Balance recovered from the final settlement, with written consent in the agreement |
| Waiver | Who can write off | Only with two approvals, never by the person who sanctioned the loan |

Two rules prevent most problems. First, cap the EMI as a share of net pay, so that recovery never pushes total deductions near the legal limit. Second, keep the tenure inside the expected employment: a loan for a fixed-term employee should end before the contract does.

## How interest-free and concessional loans are taxed

When an employer lends to an employee (or a member of the employee's household) at no interest or below a benchmark rate, the interest saved is a taxable perquisite. Under the Income-tax Rules made under the 1961 Act, the long-standing method was:

- Take the interest at the State Bank of India rate for the same type of loan, as on the first day of the year.
- Apply it to the maximum outstanding monthly balance, meaning the balance on the last day of each month.
- Subtract the interest actually recovered from the employee. The difference is the perquisite.

Two exemptions applied: loans for medical treatment of specified diseases (subject to conditions), and small loans where the aggregate outstanding did not exceed ₹20,000.

The Income-tax Act, 2025 continues to tax perquisites, with valuation set by the Income-tax Rules, 2026 (Rule 15, which replaced the old Rule 3). Published summaries of the Rules, notified on 20 March 2026, say the small-loan exemption has been raised from ₹20,000 to ₹2,00,000 from 1 April 2026, with an exemption for loans for medical treatment of specified diseases continuing (check its current limit and conditions) and the SBI rate still the benchmark. Verify the current rule text on the [Income Tax Department](https://www.incometax.gov.in/) website before configuring payroll. The perquisite is taxed as salary under both regimes and reported in Form 123 (formerly Form 12BA).

### Worked example: perquisite on an interest-free loan

An employee takes an interest-free personal loan of ₹3,00,000 in April 2026, repaid in 12 EMIs of ₹25,000 from April 2026 payroll. Assume, for illustration only, an SBI rate of 11% a year for that type of loan. The aggregate exceeds ₹2,00,000, so no small-loan exemption applies.

| Step | Calculation | Amount |
| --- | --- | --- |
| Month-end balances | ₹2,75,000, ₹2,50,000 and so on down to nil | Sum ₹16,50,000 |
| Interest at 11% on those balances | ₹16,50,000 × 11% ÷ 12 | ₹15,125 |
| Interest recovered | Nil | ₹0 |
| Taxable perquisite for FY 2026-27 | ₹15,125 minus ₹0 | ₹15,125 |

The sum of balances is ₹25,000 × (11 + 10 + ... + 1 + 0) = ₹25,000 × 66 = ₹16,50,000. If the employer charged 6% instead, the perquisite would be the 5% gap: ₹16,50,000 × 5% ÷ 12 = ₹6,875. Payroll adds the perquisite to taxable salary and recalculates TDS; our [salary TDS guide](/blog/salary-tds-explained) explains the projection.

## Recovering advances and loans through payroll

The Code on Wages, 2019 permits deductions from wages for advances (with the interest due on them) and for certain loans, and caps the total of authorised deductions in any wage period at 50% of wages. The central rules provide that where authorised deductions exceed that limit, the excess is carried forward and recovered in instalments in later wage periods. Statutory deductions such as PF and income tax are themselves authorised deductions, so they use up part of the same headroom. Our guide to [wage payment deadlines and deductions](/blog/wage-payment-deadlines-and-deductions) covers the limit in more detail, and state rules may add conditions on how advances are recovered.

### Worked example: EMI and the deduction check

A loan of ₹1,50,000 at 8% a year on a reducing balance, repaid over 12 months, has an EMI of ₹13,048 (using the standard EMI formula). The first three months look like this:

| Month | Opening balance | Interest (8% ÷ 12) | Principal | Closing balance |
| --- | --- | --- | --- | --- |
| 1 | ₹1,50,000 | ₹1,000 | ₹12,048 | ₹1,37,952 |
| 2 | ₹1,37,952 | ₹920 | ₹12,128 | ₹1,25,824 |
| 3 | ₹1,25,824 | ₹839 | ₹12,209 | ₹1,13,615 |

Total interest over the year is about ₹6,579. A flat 8% would charge ₹1,50,000 × 8% = ₹12,000 on the original principal, an EMI of ₹13,500, nearly double the interest. Say which method you use in the sanction letter.

Now the deduction check. The employee's monthly gross is ₹70,000. Monthly deductions are PF ₹3,000, PT ₹200 and TDS ₹1,500, a total of ₹4,700, plus the EMI of ₹13,048, giving ₹17,748. That is 25.4% of gross pay (₹17,748 ÷ ₹70,000), well inside the 50% limit. Net pay is ₹70,000 minus ₹17,748 = ₹52,252.

If 8% is below the SBI benchmark for that type of loan, this is a concessional loan. At ₹1,50,000, though, the aggregate is within the ₹2,00,000 small-loan limit reported for the 2026 Rules, so no perquisite would arise, provided the employee has no other loans outstanding and the limit is confirmed. On the payslip, show the EMI and the balance outstanding after the deduction; see our guide to the [payslip format](/blog/payslip-format-india).

## Recovering a loan when the employee leaves

Resignations are where loan policies get tested.

- **Get consent up front.** The loan agreement should authorise recovery of any outstanding balance from the final settlement.
- **Recover through the F&F.** Net the balance against final salary and leave encashment, and show it as a separate line.
- **Be careful with gratuity.** Gratuity has special legal protection. Take advice before netting a loan balance against it.
- **Mind the deduction limits.** The 50% cap applies to wages for the wage period, so a large balance may not be fully recoverable from the final month's wages alone.
- **Plan for a shortfall.** If the settlement does not cover the balance, agree a repayment schedule with the employee, record external repayments, or write it off with proper approvals.
- **Treat waivers carefully.** A loan waived by the employer is generally a taxable benefit for the employee. Confirm the treatment before you approve it.

## Accounting and audit trail

Employee loans are a receivable on the balance sheet, and auditors will test them. Keep:

- The application, sanction letter with approvals and signed agreement.
- The amortisation schedule, with the rate and method.
- A loans ledger reconciled every month to the EMIs actually deducted in payroll, as part of your [payroll reconciliation](/blog/payroll-reconciliation-guide).
- Interest income booked separately from principal recovered.
- The perquisite valuation, its inclusion in TDS and its reporting in Form 123.
- Write-off approvals, showing that the person who approved the write-off was not the person who sanctioned the loan.

## Common mistakes

- **No written policy,** so every advance is negotiated and approvals are inconsistent.
- **EMIs set without a cap,** pushing total deductions close to the legal limit.
- **Ignoring the perquisite** on interest-free loans above the exempt limit, which leaves TDS short.
- **Using an outdated exempt limit** after the 2026 Rules came into force.
- **No consent clause** for recovery from the final settlement.
- **Loan tenure beyond a fixed-term contract,** guaranteeing a shortfall on exit.
- **Write-offs approved by the sanctioning manager,** with no second approver.

## FAQs

**Is an interest-free loan from an employer taxable?** The interest saved is a taxable perquisite unless an exemption applies, such as a loan for treatment of specified diseases or a small aggregate loan within the current exempt limit.

**How much salary advance can an employer give?** The law does not fix a limit. The policy should, for example up to one month's net pay, recovered within a few months.

**What is the maximum EMI that can be deducted from salary?** Total authorised deductions in a wage period cannot exceed 50% of wages under the Code on Wages, and PF, tax and other deductions count towards that limit. Most policies set the EMI cap far lower.

**Can an employer recover a loan from the full and final settlement?** Yes, with the employee's written consent in the loan agreement, within the deduction rules. Take advice before adjusting against gratuity.

**Is a salary advance shown on Form 16?** Not as income if it is a recoverable advance. Any perquisite on interest-free or concessional loans appears in the salary figures and in Form 123.

## How NeevHR helps

NeevHR [loans and advances](/features/loans) issues salary-advance, personal and emergency loans with flat or reducing-balance EMI schedules, enforces principal, tenure and rate caps, and parks approvals above a threshold. EMIs are recovered automatically in each monthly [payroll](/payroll) run, and outstanding balances flow into the [full and final settlement](/features/full-and-final-settlement), where any residual can be recorded as repaid externally or written off with second-approver controls.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 06 Oct 2026.*`,
};

export default post;
