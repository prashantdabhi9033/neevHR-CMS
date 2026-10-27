import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "loss-of-pay-lop-calculation",
  title: "LOP calculation: how to calculate loss of pay in salary",
  excerpt:
    "LOP calculation in payroll: what counts as loss of pay, calendar vs 26 vs working-day divisors, worked examples, LOP reversal and the PF, ESI and PT effect.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `LOP (loss of pay) is the salary not paid for days an employee was absent without approved paid leave. To calculate it, divide each monthly component by the divisor in your payroll policy (calendar days, a fixed 30 or 26, or working days) and multiply by the LOP days. The divisor changes the answer, so it must be written down and applied to everyone.

This guide covers LOP for employees who were on the rolls for the whole month: what counts as LOP, how each divisor behaves, reversals and the effect on PF, ESI, PT, bonus and gratuity. For employees who join or leave mid-month, see our guide to [prorated salary for mid-month joiners and leavers](/blog/prorated-salary-mid-month-joiners-leavers), and for how leave rules feed LOP, see our [leave management guide](/blog/leave-management-guide).

## What counts as loss of pay?

A day becomes LOP when the employee was expected to work, did not, and has no paid leave or approved exception to cover it. The usual sources are:

| Situation | LOP? | Note |
| --- | --- | --- |
| Absent with no leave applied and no regularisation | Yes | The commonest case; flag it before payroll closes |
| Leave applied but rejected | Yes | Record the rejection reason |
| Leave taken beyond the available balance | Yes, for the excess | Unless your policy allows a small negative balance |
| Leave without pay (LWP) approved in advance | Yes | Approved, but unpaid |
| Missed punch that the employee later regularises | No | Close the regularisation window before the payroll cut-off |
| Approved comp off, earned leave, sick leave | No | Paid leave |
| Weekly off or holiday between two LOP days | Depends on policy | See the sandwich rule below |
| Suspension pending enquiry | Not LOP | Subsistence allowance rules apply instead |

Two terms get mixed up. **Leave without pay** is an approved, planned absence, such as an extended personal break. **Unauthorised absence** is an absence nobody approved. Both reduce pay in the same way, but they mean different things in the employee's record. LWP is neutral; repeated unauthorised absence is a conduct matter that may need a [disciplinary process](/blog/disciplinary-action-domestic-enquiry). Keep them as separate attendance statuses, even if payroll treats them alike.

## What is the formula for LOP calculation?

**LOP amount = monthly component × LOP days ÷ divisor**

Apply it to each fixed component (Basic, DA, HRA, special allowance and other fixed allowances), not only to gross. If you deduct LOP from gross as a single line, Basic stays at its full figure and PF is overstated. Reimbursements against bills and one-time payments are not reduced for LOP.

Under the Code on Wages, a deduction for absence cannot be a larger share of the month's wages than the absence is of the period the employee was required to work. Our guide to [wage deductions under the Code on Wages](/blog/wage-payment-deadlines-and-deductions) explains this limit, and it is the test every divisor choice has to pass.

## Calendar days vs 30 vs 26 vs working days: which divisor?

Take an employee on a monthly gross of ₹45,000 (Basic ₹22,500, HRA ₹11,250, special allowance ₹11,250) with 3 LOP days in November 2026. November has 30 days, 5 Sundays and 21 weekdays (Monday to Friday). Assume no holidays.

| Divisor | Daily rate | Calculation | LOP deduction | Net gross |
| --- | --- | --- | --- | --- |
| Calendar days (30) | ₹1,500 | ₹45,000 × 3 ÷ 30 | ₹4,500 | ₹40,500 |
| Fixed 30 | ₹1,500 | ₹45,000 × 3 ÷ 30 | ₹4,500 | ₹40,500 |
| Fixed 26 | ₹1,731 | ₹45,000 × 3 ÷ 26 | ₹5,192 | ₹39,808 |
| Working days, five-day week (21) | ₹2,143 | ₹45,000 × 3 ÷ 21 | ₹6,429 | ₹38,571 |

The same 3 days cost between ₹4,500 and ₹6,429. In December 2026, with 31 days, the calendar-day deduction falls to ₹45,000 × 3 ÷ 31 = ₹4,355, while a fixed 30 stays at ₹4,500.

### How each divisor behaves

- **Calendar days.** Every day of the month is worth the same. Weekly offs inside an LOP stretch can be counted as LOP, because the divisor includes them. A full month always pays in full. Its drawback is that the daily rate changes every month, which employees notice in February.
- **Fixed 30.** A constant daily rate all year, which is easy to explain. It needs a rule for 31-day months and February, and a cap so that an employee absent all of a 31-day month does not end up with negative pay.
- **Fixed 26.** Reflects a six-day week and is common for wage-rated and factory staff. LOP should then be counted on working days only, so a Sunday is never an LOP day. Cap the deduction at the monthly rate: a month with 27 working days and 27 days of absence would otherwise deduct 27 ÷ 26 of salary.
- **Working days.** Matches the proportion test most closely, but the daily rate moves with the holiday calendar of each location and month, which makes payslips hard to explain across a multi-state workforce.

### Which one should you choose?

For a mid-sized company with monthly-rated staff, calendar days or a fixed 30 are the most common and the easiest to defend. A fixed 26 suits a plant workforce on a six-day week. Whatever you pick, use the same divisor for LOP, proration of joiners and leavers, and leave encashment where the policy links them, and state it in the payroll policy. A different divisor for LOP than for proration produces payslips nobody can reconcile.

## Worked example: an LOP payslip, component by component

The employee above, on a calendar-day basis, has 3 LOP days in November 2026:

| Component | Monthly rate | LOP (3 ÷ 30) | Paid |
| --- | --- | --- | --- |
| Basic | ₹22,500 | ₹2,250 | ₹20,250 |
| HRA | ₹11,250 | ₹1,125 | ₹10,125 |
| Special allowance | ₹11,250 | ₹1,125 | ₹10,125 |
| **Gross** | **₹45,000** | **₹4,500** | **₹40,500** |
| Employee PF (12% of ₹20,250) | | | ₹2,430 |

Without LOP, PF would have been 12% of ₹22,500 = ₹2,700, so LOP reduced PF by ₹270 on each side. The payslip should show the days paid (27 of 30) and the LOP days, as every payslip should. You can check the resulting net pay with our [take-home salary calculator](/tools/take-home-salary-calculator).

## Does LOP reduce PF, ESI and professional tax?

### PF

PF is calculated on the Basic + DA actually earned, so LOP reduces it, with one exception. The wage ceiling is ₹25,000 a month from 17 September 2026 (₹15,000 before). If the employer contributes on capped wages and earned Basic stays above the ceiling, PF does not change. An employee on Basic ₹30,000 with 3 LOP days in November earns Basic of ₹30,000 × 27 ÷ 30 = ₹27,000, still above ₹25,000, so PF remains 12% of ₹25,000 = ₹3,000.

The ECR also carries **non-contributory period (NCP) days**, the days for which no wages were paid. Report LOP days there accurately, because EPFO uses them in the member's service record.

### ESI

ESI contributions are on wages actually paid in the month, while coverage is fixed for the contribution period on the employee's wage rate. A covered employee on ₹19,500 a month with 2 LOP days in November earns ₹19,500 × 28 ÷ 30 = ₹18,200. The employee pays 0.75%, or ₹137, and the employer 3.25%, or ₹592, each rounded up to the next rupee. LOP never takes an employee out of ESI mid-period, and it never brings a ₹25,000 employee into it. Our [ESI calculator](/tools/esi-calculator) shows the split.

### Professional tax and LWF

Most states with professional tax apply the slab to salary paid in the month, so heavy LOP can drop an employee into a lower slab or below the threshold. Some states work on annual figures or have a special rule for one month of the year. Check the slab rules for each location. LWF is usually a flat amount and is not affected by LOP, subject to state rules.

## Does LOP affect gratuity, bonus and leave accrual?

| Item | Effect of LOP | Why |
| --- | --- | --- |
| Gratuity | Usually none on the amount | Gratuity uses the last drawn monthly wage rate and completed years of service, not the pay after LOP. Very long unauthorised absence can raise questions about continuous service, so take advice in such cases |
| Statutory bonus | Reduces it | Bonus is calculated on the wages actually earned in the accounting year |
| Earned leave accrual | Can reduce it | Under the OSH Code, workers earn annual leave on days worked; many policies also stop or prorate accrual for months with heavy LOP |
| Leave encashment rate | None | Encashment uses the daily rate, not the reduced month |
| Variable pay | As the plan says | Many plans prorate for long LOP; write it in the plan document |

Our [gratuity calculator](/tools/gratuity-calculator) and [bonus calculator](/tools/bonus-calculator) show the base calculations.

## How does LOP reversal work in the next month?

LOP is often applied wrongly: leave approved after the payroll cut-off, a regularisation that arrived late, a biometric device that failed for a day. The month is already paid and cannot be reopened, so the fix is an **LOP reversal** in the next payroll, paid as arrears.

Example: an employee on ₹62,000 a month (Basic ₹31,000) was marked LOP for 2 days in October 2026, a 31-day month, because her sick leave was approved on 3 November, after October payroll closed.

- Reversal of gross: ₹62,000 × 2 ÷ 31 = ₹4,000, paid in November 2026 as "LOP reversal (Oct 2026)".
- Basic within it: ₹31,000 × 2 ÷ 31 = ₹2,000.
- PF on the reversal, if the employer contributes on actual Basic: 12% of ₹2,000 = ₹240 from each side, reported with the November return.
- Reverse the NCP days for October through the correction route EPFO allows, or record why not.

Use the rate in force in the month of the LOP, not the current rate, and keep the original month on the payslip line. Our [salary arrears guide](/blog/salary-arrears-calculation) covers PF, ESI and TDS on arrears in detail.

The reverse also happens: an absence discovered after payroll closed. Recover it as LOP in the next month, show it as a separate "LOP (Oct 2026)" line, and keep the total deductions within the Code on Wages limit for that month.

## LOP and the sandwich rule

If an employee is absent without leave on Saturday and Monday, is the Sunday LOP? Under a calendar-day divisor many policies say yes, because the employee did not return between the two absences. Under a 26-day or working-day divisor the Sunday is not a working day and should not be counted. Either way, write the rule down, apply it consistently, and check it against the proportion limit in the Code on Wages. Our guide to the [sandwich leave rule](/blog/sandwich-leave-rule) covers the leave side.

## Common mistakes

- **Deducting LOP from gross only,** which leaves Basic and PF overstated.
- **Using one divisor for LOP and another for proration,** so no two payslips reconcile.
- **No cap on the deduction,** letting a 26-day or 30-day divisor produce negative pay in a long month.
- **Counting weekly offs as LOP under a working-day divisor,** which deducts more than the absence.
- **Reversing LOP at the current salary rate** instead of the rate in the month affected.
- **Forgetting NCP days in the ECR,** or leaving them unchanged after a reversal.
- **Treating repeated unauthorised absence as a payroll matter only,** with no conversation or record.

## FAQs

**How is LOP calculated in salary?** Divide each monthly component by the divisor in your policy and multiply by the LOP days. On a ₹45,000 monthly gross in a 30-day month, 3 LOP days cost ₹4,500 on a calendar-day basis.

**Is LOP calculated on gross or on Basic?** On each fixed component, which together make up gross. Calculating component by component keeps Basic, and therefore PF, correct.

**Is LOP calculated on 26 days or 30 days?** Either is lawful if it is written in policy and does not deduct more than the proportion of absence. A fixed 30 or calendar days suits monthly-rated staff; 26 suits a six-day week.

**Does LOP reduce PF?** Yes, because PF is on Basic + DA earned. The exception is an employee whose earned Basic stays above the ₹25,000 ceiling where the employer contributes on capped wages.

**Can LOP be reversed?** Yes. If leave is approved after payroll closed, reverse the LOP in the next payroll as arrears, at the rate in force in the original month, with PF adjusted.

**Are Sundays counted in LOP?** Under a calendar-day divisor, policies often count a weekly off that falls between two absent days. Under a 26-day or working-day divisor, Sundays should not be LOP days.

## How NeevHR helps

NeevHR [attendance](/features/attendance) turns punches, leave and regularisations into a closed attendance period, and the LOP days it produces flow into [payroll](/payroll) without re-entry. Payroll reduces the statutory base for PF, ESI and PT correctly and recomputes arrears, and [leave](/features/leave) settles unpaid leave as LOP automatically. To see an LOP month and its reversal end to end, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
