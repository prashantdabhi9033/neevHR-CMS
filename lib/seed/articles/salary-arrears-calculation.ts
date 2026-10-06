import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "salary-arrears-calculation",
  title: "Salary arrears: how to calculate, pay and tax them",
  excerpt:
    "Salary arrears calculation with a month-by-month worked example: PF and ESI on arrears, TDS in the month paid, relief for earlier-year arrears and payslips.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-06",
  body: `Salary arrears are the difference between what an employee should have been paid for past months and what was actually paid. To calculate them, recompute each affected month at the correct rate using that month's paid days, and subtract what was paid. Arrears attract PF in the month they are paid and are taxed in the year of receipt, with relief available for arrears of earlier years.

This guide walks through the calculation and the statutory treatment. For where arrears fit in the monthly cycle, see our [monthly payroll checklist](/blog/monthly-payroll-checklist).

## What creates salary arrears?

Arrears arise whenever pay for a past period changes after that period has been paid. The common causes:

| Cause | Typical example | What to recompute |
| --- | --- | --- |
| Backdated increment or promotion | Appraisal letters issued in October, effective 1 July | Every component that changed, for each month since the effective date |
| LOP reversal | Leave approved after payroll closed, so the day was wrongly marked LOP | Only the reversed days, at the rate in force that month |
| Revised DA or minimum wage | A state notifies a revised variable DA with a retrospective date | Basic + DA, and anything calculated on it |
| Missed allowance | A shift or night allowance submitted after the cut-off | The allowance for the months it was earned |
| Late joiner | Added to payroll after the cut-off of the joining month | The full prorated first month |
| Settlements and awards | A wage settlement with a retrospective effective date | As the settlement specifies |

Arrears can also be negative, for example when a pay change is reversed. Recovering an overpayment is a deduction from wages and must stay within the limits the Code on Wages allows.

## How to calculate arrears month by month

Never calculate arrears as "new monthly pay minus old monthly pay, times the number of months". That shortcut ignores LOP, prorated months and components that depend on attendance. The reliable method is:

1. List every month from the effective date to the last month already paid.
2. For each month, recompute every component at the revised rate, using that month's actual paid days.
3. Subtract what was actually paid for that component in that month.
4. Add up the differences by component, so the payslip and the statutory calculations can use them.
5. Recompute anything derived from the changed components: PF, overtime rates, and any allowance calculated as a percentage of Basic.

### Worked example: a backdated increment

An employee's monthly fixed pay is ₹1,20,000: Basic ₹60,000, HRA ₹30,000 and special allowance ₹30,000. In October 2026 the appraisal cycle closes and a 10% increase is approved with effect from 1 July 2026, taking pay to ₹1,32,000: Basic ₹66,000, HRA ₹33,000 and special allowance ₹33,000. July, August and September were paid at the old rate. The employee had 3 days of LOP in September, a 30-day month, so 27 days were paid.

| Month | Paid days | Basic arrears | HRA arrears | Special allowance arrears | Total |
| --- | --- | --- | --- | --- | --- |
| July 2026 | 31 of 31 | ₹6,000 | ₹3,000 | ₹3,000 | ₹12,000 |
| August 2026 | 31 of 31 | ₹6,000 | ₹3,000 | ₹3,000 | ₹12,000 |
| September 2026 | 27 of 30 | ₹5,400 | ₹2,700 | ₹2,700 | ₹10,800 |
| **Total** | | **₹17,400** | **₹8,700** | **₹8,700** | **₹34,800** |

For September, each monthly difference is prorated: Basic ₹6,000 × 27 ÷ 30 = ₹5,400, and HRA and special allowance ₹3,000 × 27 ÷ 30 = ₹2,700 each. The shortcut of ₹12,000 × 3 = ₹36,000 would have overpaid by ₹1,200, exactly the September LOP on the increase.

October payroll pays the new rate of ₹1,32,000 plus arrears of ₹34,800, shown as separate lines.

## PF on salary arrears

EPFO treats the month in which arrears are actually paid as the due month for PF on those arrears, so PF on arrears paid in October 2026 is due with the October return, by 15 November 2026. Our [ECR guide](/blog/ecr-explained) covers the filing itself. Only arrears of components that form part of PF wages attract PF; in the example, that is the Basic arrears of ₹17,400, not HRA.

How much PF is due depends on your contribution basis and the wage ceiling:

- **PF on actual Basic.** If the employer contributes on actual Basic + DA, PF on the arrears is 12% of ₹17,400 = ₹2,088 from the employee and ₹2,088 from the employer. This employee's EPS was already at the ceiling, so the employer's share on the arrears goes entirely to EPF.
- **PF on capped wages.** If contributions are restricted to the ceiling, this employee was already at the cap in every month, so the arrears add no PF.

The ceiling matters most for lower-paid employees. Suppose Basic rises from ₹14,000 to ₹16,000 with effect from 1 July 2026, with PF on capped wages. For July and August, when the ceiling was ₹15,000, PF wages rise only from ₹14,000 to ₹15,000, so PF on arrears is 12% of ₹1,000 = ₹120 a month from each side. The ceiling rose to ₹25,000 from 17 September 2026, and September 2026 straddles both ceilings, so check EPFO's guidance on reporting arrears for that month before filing.

## ESI on salary arrears

ESI contributions are generally paid on wages in the month they are paid, and arrears for a period of coverage are treated as wages. Coverage itself is fixed for each contribution period, as our [ESI eligibility guide](/blog/esi-eligibility) explains. Two cases need care: arrears that would take an employee's monthly wages above ₹21,000, and arrears relating to a period when the employee was covered but who has since moved out of coverage. ESIC's treatment depends on the nature and period of the payment, so check current ESIC guidance before deciding either case.

## Professional tax and LWF on arrears

Most states levy professional tax on the salary paid in the month, so arrears can push a lower-paid employee into a higher slab for the month they are paid. Employees already in the top slab are unaffected. The rules, including annual caps and how arrears are treated, differ from state to state; see our [professional tax by state](/blog/professional-tax-by-state-india) guide. Labour welfare fund contributions are usually flat amounts and are rarely affected.

## TDS on arrears in the month of payment

Salary is taxed when it is due or received, whichever is earlier, and arrears that were not due before are taxed in the year they are paid. For arrears of the current tax year, payroll simply adds them to the year's salary and refreshes the TDS projection.

In the example, the employee is on the new regime. Projected gross for FY 2026-27, including the arrears, is ₹15,34,800 (April to June at ₹1,20,000, eight months at ₹1,32,000, and September at ₹1,18,800 after LOP), and taxable income after the ₹75,000 standard deduction is ₹14,59,800. Without the arrears it would be ₹14,25,000. Both sit in the 15% slab, so the arrears add ₹34,800 × 15% = ₹5,220 of tax, plus 4% cess of ₹209, a total of ₹5,429.

Payroll can deduct the ₹5,429 in October, or spread it over the six remaining months from October to March at about ₹905 a month. Either is acceptable if applied consistently; our [salary TDS guide](/blog/salary-tds-explained) explains the projection method.

## Relief for arrears of earlier years

When arrears relate to an earlier tax year, for example a wage settlement covering FY 2025-26 paid in FY 2026-27, taxing them all in the year of receipt can push the employee into a higher slab. The law gives relief for salary received in arrears. Under the 1961 Act this was the section 89 relief, claimed by filing Form 10E; the Income-tax Act, 2025 continues the relief under renumbered provisions, so check the current form on the [Income Tax Department](https://www.incometax.gov.in/) website.

The relief works as follows:

1. Tax for the year of receipt, with the arrears, minus tax for that year without them.
2. Tax for the year the arrears relate to, as if they had been paid then, minus the tax actually payable for that year.
3. If the first figure is higher, the difference is the relief.

As an illustration, if the arrears add ₹15,600 of tax in the year of receipt but would have added only ₹10,400 in the year they relate to, the relief is ₹15,600 minus ₹10,400 = ₹5,200.

The employee normally claims the relief in their return, after filing the prescribed form. Under the 1961 Act, an employee could also give the employer the particulars so that TDS reflected the relief. Confirm how the current provisions handle this before building it into payroll.

## Showing arrears on the payslip

Arrears should be clear to the employee and to any auditor. On the [payslip](/blog/payslip-format-india):

- Show arrears as separate earning lines by component, never merged into the current month's Basic.
- Label the period and the reason, for example "Basic arrears, July to September 2026, increment".
- Show PF on arrears within the month's PF line, and keep a working that splits it out.
- Keep an arrears register: employee, months covered, component, old rate, new rate, paid days and amount.

## Reporting arrears in Form 16

Arrears paid during the year are part of that year's gross salary and appear in the salary details of Form 16 (now Form 130 under the 2025 Act) and in the year-end salary annexure of the quarterly TDS return. Where an employer has factored relief for earlier-year arrears into TDS, the computation should show it. Make sure the arrears in the payroll register, the TDS return and Form 16 match exactly; our [Form 16 guide](/blog/form-16-explained) covers the certificate.

## Common mistakes

- **Using the months-times-difference shortcut,** which overpays whenever there was LOP or a prorated month.
- **Forgetting derived components,** such as PF, overtime rates or allowances calculated as a percentage of Basic.
- **Paying PF on HRA or special allowance arrears** when only PF wages attract PF, or missing PF on Basic arrears.
- **Treating arrears as belonging to the original months** for PF, instead of the month they are paid.
- **Not refreshing the TDS projection,** so the extra tax falls on March.
- **Merging arrears into Basic** on the payslip, which hides the period they relate to.
- **No register of arrears,** leaving no audit trail behind a large one-time amount.

## FAQs

**How do you calculate salary arrears?** Recompute each affected month at the revised rate using that month's paid days, subtract what was actually paid, and add the differences by component.

**Is PF deducted on salary arrears?** Yes, on the arrears of components that form PF wages, such as Basic and DA. EPFO treats the month the arrears are paid as the due month. If you contribute on capped wages and the employee was already at the ceiling, no extra PF arises.

**Are salary arrears taxable?** Yes, in the year they are received. If they relate to an earlier year, the employee can claim relief for salary received in arrears by filing the prescribed form before claiming it in the return.

**Can arrears be paid in a separate off-cycle run?** Yes. Large arrears, for example from a wage settlement, are often paid off-cycle. PF, ESI, PT and TDS still apply for the month of payment.

**What happens to arrears if the employee has left?** They are paid through the full and final settlement or a separate payment, with the same statutory treatment. Keep the exit date in mind when reporting PF.

## How NeevHR helps

Every pay change in NeevHR is an effective-dated event on the employee record, so a backdated increment, whether from a [compensation](/features/compensation) cycle or an individual revision, is recorded with its real effective date and the next [payroll](/payroll) run recomputes the earlier months as arrears. PF, ESI, PT and TDS are calculated on the arrears in the month they are paid, LOP reversals come through from attendance and leave, and arrears appear on their own lines on the payslip and in the payroll register.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 06 Oct 2026.*`,
};

export default post;
