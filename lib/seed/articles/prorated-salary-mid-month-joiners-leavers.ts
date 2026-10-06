import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "prorated-salary-mid-month-joiners-leavers",
  title: "Prorated salary: how to pay mid-month joiners and leavers",
  excerpt:
    "How to calculate prorated salary for mid-month joiners and leavers: calendar, 30-day and working-day divisors, worked examples, and PF, ESI, PT and TDS rules.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-06",
  body: `Prorated salary pays a mid-month joiner or leaver only for the days they were employed in that month. Payroll divides each fixed monthly component by a divisor (calendar days, a fixed 30 or 26, or working days) and multiplies it by the days payable. The divisor must be written into policy and applied to everyone. PF, ESI, PT and TDS then follow the prorated earnings.

This guide covers salary in the joining and leaving months. For how leave is prorated for the same employees, see our [leave management guide](/blog/leave-management-guide).

## How to calculate prorated salary

The formula is simple:

**Prorated component = monthly rate × days payable ÷ divisor**

Apply it component by component, not only to the gross, so that Basic (and therefore PF) is right. Days payable usually means calendar days from the date of joining to the month end, or from the 1st to the last working day for a leaver, less any LOP days.

The decisions that matter are which divisor you use, which components you prorate, and how you handle the edge cases. All three belong in the payroll policy.

## Calendar days vs 30 days vs working days: which divisor?

Take a joiner with a monthly gross of ₹60,000 who joins on Monday, 19 October 2026. October has 31 days, so the employee is on the rolls for 13 days (19 to 31 October). The same joiner gets a different first salary under each method:

| Divisor | How days payable are counted | Calculation | First month's gross |
| --- | --- | --- | --- |
| Calendar days | 13 of 31 days | ₹60,000 × 13 ÷ 31 | ₹25,161 |
| Fixed 30 days | 13 days, divided by 30 | ₹60,000 × 13 ÷ 30 | ₹26,000 |
| Fixed 26 days | 12 days, excluding Sunday 25 October | ₹60,000 × 12 ÷ 26 | ₹27,692 |
| Actual working days (five-day week) | 10 of 22 weekdays | ₹60,000 × 10 ÷ 22 | ₹27,273 |

The spread from ₹25,161 to ₹27,692 is ₹2,531 for one employee in one month. None of these is wrong in itself, but mixing them is.

- **Calendar days** is the most defensible: every day of the month is worth the same, and a full month always pays in full. Its drawback is that a day is worth more in February than in October.
- **Fixed 30 days** keeps the daily rate constant across the year, which employees find easy to understand and which suits LOP. It needs a rule for months that are not 30 days long (see below).
- **Fixed 26 days** reflects a six-day working week and is common in factories and among wage-rated staff. Sundays (or the weekly off) are excluded from days payable.
- **Actual working days** varies with the holiday calendar by location and month, so it is the hardest to explain and audit.

Whichever you choose, use the same divisor for joiners, leavers and LOP, and state it in the policy. A different divisor for LOP than for proration produces payslips nobody can reconcile.

### The 30-day basis: two ways to apply it

There are two common readings of a 30-day basis, and they give different answers in short and long months:

- **Count days employed and divide by 30.** A joiner on 2 February 2027 is employed for 27 days and gets 27 ÷ 30, or 90%, although they worked 27 of 28 days.
- **Start from 30 and deduct the days not employed.** The same joiner missed 1 day, so gets 29 ÷ 30, or about 96.7%.

The second reading is fairer in February but breaks at month ends (see joining on the 31st, below). Pick one, write it down, and cap the result at the full monthly rate.

## Which salary components are prorated?

| Component | Prorate? | Why |
| --- | --- | --- |
| Basic, DA, HRA, special allowance, fixed allowances | Yes | Earned for days of service |
| Shift, night or attendance-linked allowances | Calculated on days actually worked | They are earned per shift or day, not per month |
| Reimbursements against bills (fuel, phone, internet) | No; pay actuals within the limit | Some policies prorate the monthly limit for part months |
| Joining bonus, relocation, notice buyout | No | One-time payments, paid as the offer letter states |
| Performance incentives and variable pay | As the plan document says | Often prorated by months or days of service in the plan period |
| Statutory bonus | Follows wages earned | It is calculated on wages for the days worked in the year |
| Employer PF and ESI | Follow the prorated wages | Contributions are on wages actually paid |

## Worked example: a mid-month joiner's first payslip

The joiner above has a monthly structure of Basic ₹30,000, HRA ₹15,000 and special allowance ₹15,000. On the calendar-day basis, October earnings are:

| Component | Monthly rate | October 2026 (13 of 31 days) |
| --- | --- | --- |
| Basic | ₹30,000 | ₹12,581 |
| HRA | ₹15,000 | ₹6,290 |
| Special allowance | ₹15,000 | ₹6,290 |
| **Gross** | **₹60,000** | **₹25,161** |
| Employee PF (12% of ₹12,581) | | ₹1,510 |

Basic is ₹30,000 × 13 ÷ 31 = ₹12,580.65, rounded to ₹12,581. HRA and special allowance are each ₹15,000 × 13 ÷ 31 = ₹6,290. The components add to ₹25,161, matching the gross calculation. PF is 12% of ₹12,581 = ₹1,509.72, rounded to ₹1,510. Professional tax and TDS then come off as described below.

## PF on prorated wages

PF is calculated on the Basic + DA actually earned in the month, so a part month gives a smaller PF figure. The wage ceiling of ₹25,000 a month (from 17 September 2026) applies to the wages earned in the month; it is not itself prorated.

This matters for higher earners. A joiner with a monthly Basic of ₹50,000 joining on 19 October 2026 earns Basic of ₹50,000 × 13 ÷ 31 = ₹20,968. That is below the ₹25,000 ceiling, so even where the employer contributes on capped wages, PF is 12% of ₹20,968 = ₹2,516 from each side, not the usual ₹3,000. EPS is 8.33% of ₹20,968 = ₹1,747, and the rest of the employer's share goes to EPF. Our guide to [employee vs employer PF contribution](/blog/employee-vs-employer-pf-contribution) explains the split.

## ESI for mid-month joiners

Decide ESI coverage on the employee's monthly wages, not on the smaller amount paid for a part month. A joiner on ₹60,000 a month does not become ESI-eligible because the first month's pay was ₹25,161.

For a joiner who is covered, the first contribution period starts on the date of joining and ends with the current period, as our [ESI eligibility guide](/blog/esi-eligibility) explains. For a joiner on 19 October 2026, that is 31 March 2027. Contributions are on the prorated wages: a joiner on ₹18,000 a month earns ₹18,000 × 13 ÷ 31 = ₹7,548 in October, so the employee pays 0.75%, or ₹57, and the employer 3.25%, or ₹246, each rounded up to the next rupee as ESIC does. Register the joiner on the [ESIC portal](https://www.esic.gov.in/) promptly so they can access benefits.

## Professional tax and LWF in a partial month

Most states with professional tax levy it on the salary paid in the month, so a prorated first or last month can fall in a lower slab, or below the threshold altogether. A few states work on annual figures or fixed instalments, and some have a different rule for the last month of the year. Check the slab rules in our [professional tax by state](/blog/professional-tax-by-state-india) guide for each location.

Labour welfare fund is usually a flat amount deducted for employees on the rolls in a specified month or period. Whether a part-month joiner or leaver is included depends on the state rules.

## TDS for mid-year joiners

TDS for a joiner is projected from the joining month to March. Without more information, the new employer applies the slabs, the standard deduction and the rebate as if its salary were the employee's only income for the year, which often means little or no TDS for a mid-year joiner.

The fix is the declaration of previous employment income (Form 122, formerly Form 12B), in which the employee reports salary and TDS from earlier employers in the same tax year. The new employer adds that salary to the projection, gives credit for the tax already deducted and allows the standard deduction only once. Collect it at onboarding, along with the regime choice; our [salary TDS guide](/blog/salary-tds-explained) shows what happens when it is missed.

## Mid-month leavers and the full and final settlement

For a leaver, salary is prorated from the 1st to the last working day, using the same divisor. An employee on ₹60,000 a month whose last working day is 12 October 2026 earns ₹60,000 × 12 ÷ 31 = ₹23,226 on the calendar-day basis, or ₹24,000 on a 30-day basis.

That prorated salary is the first line of the [full and final settlement](/blog/full-and-final-settlement-explained), alongside leave encashment, gratuity and recoveries. PF, ESI and PT are calculated on the final month's wages in the usual way. Under the Code on Wages, wages due on resignation, removal or retrenchment must be paid within two working days, so the final month's salary cannot wait for the next regular payroll.

## Edge cases: joining on the 31st, weekends and late joiners

### Joining on the 31st

A joiner on 31 October is employed for 1 day. On the calendar-day basis they earn 1 ÷ 31 of the monthly rate, and on a 30-day basis that counts days employed, 1 ÷ 30. On a 30-day basis that deducts days not employed, the result is 30 minus 30, or zero, which is plainly wrong. Write the rule so that days payable can never be less than the days actually employed.

### Joining after a weekend or holiday

Pay starts from the date of joining in the appointment letter. The weekend before a Monday joining is not payable. If the joining date is a holiday, decide in policy whether it counts, and keep the date of joining consistent across payroll, PF and ESI records.

### Joiners after the payroll cut-off

Many employers set an input cut-off, such as the 20th, and pay later joiners with the next month's salary. Wages for a month must still be paid by the 7th of the following month under the Code on Wages, so deferring a late joiner's pay to the next regular payroll can breach that deadline. An off-cycle payment is safer. Our [onboarding checklist](/blog/employee-onboarding-checklist) covers getting joiners into payroll on time.

## Common mistakes

- **Prorating gross only,** so Basic and PF are wrong even when the net looks right.
- **Using one divisor for joiners and another for LOP,** which makes payslips impossible to reconcile.
- **Applying the full ₹3,000 PF to a part month** when earned Basic is below the ₹25,000 ceiling.
- **Prorating one-time payments** such as a joining bonus, or reimbursements against actual bills.
- **Deciding ESI coverage on part-month pay** instead of the monthly wage.
- **Skipping the previous employment income declaration,** leaving a large tax shortfall at year end.
- **No rule for the 31st,** so the 30-day basis produces zero pay.

## FAQs

**How is salary calculated for a mid-month joiner?** Multiply each monthly component by the days employed and divide by the divisor in your policy, usually the calendar days in the month or a fixed 30.

**Is a 30-day or a calendar-day basis better?** Both are acceptable. Calendar days always pays a full month in full; a fixed 30 keeps the daily rate constant. Choose one and apply it consistently to joiners, leavers and LOP.

**Is PF deducted on a prorated salary?** Yes, on the Basic + DA actually earned in the month, subject to the ₹25,000 ceiling where the employer contributes on capped wages.

**Do new joiners get paid for the weekend before they join?** No. Pay starts from the date of joining.

**How is TDS calculated for an employee who joins mid-year?** It is projected from the joining month to March. If the employee declares previous employment income, the new employer includes it and credits the tax already deducted.

## How NeevHR helps

NeevHR [payroll](/payroll) calculates the joining and leaving months from the dates on the effective-dated employee record, and computes PF, ESI, PT, LWF and TDS on the wages actually earned, taking in previous-employer income declared by a joiner. A leaver's final month flows into the [full and final settlement](/features/full-and-final-settlement) worksheet, which computes salary to the last working day alongside leave encashment, gratuity and recoveries.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 06 Oct 2026.*`,
};

export default post;
