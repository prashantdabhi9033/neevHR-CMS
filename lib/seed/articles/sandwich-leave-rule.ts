import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "sandwich-leave-rule",
  title: "Sandwich leave rule: how weekends and holidays are counted",
  excerpt:
    "The sandwich leave rule explained: when weekends and holidays between leave days count as leave, prefix and suffix rules, examples, a sample policy and payroll.",
  category: "time",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `The sandwich leave rule counts weekly offs and holidays that fall between two days of leave as leave too. An employee who takes Friday and Monday off is debited four days, not two, because the Saturday and Sunday are "sandwiched" between leave days. There is no national law requiring or banning it in India; it is a company policy choice that must be written down, applied consistently and checked against the leave law that covers each location.

This guide covers how the rule works, prefix and suffix holidays, which leave types it should apply to, a sample policy, an examples table, employee-relations considerations and payroll treatment. For the wider design of leave rules, see our [leave management guide](/blog/leave-management-guide) and our guide to [leave types in India](/blog/leave-types-in-india-explained).

## Why do companies use a sandwich rule?

The rule exists to stop one pattern: stretching a short leave into a long break by placing leave around weekends and holidays. Without it, two days of leave on Friday and Monday buy four days away, and a well-placed day of leave around a festival can buy a week.

That matters most where coverage is tight, such as a plant, a branch or a contact centre in festival season. It matters much less in teams where work is planned in sprints and people take long breaks openly. Before adopting the rule, ask whether the pattern is actually a problem in your company. If it is not, the rule creates resentment and administration for little gain.

## How does the sandwich rule work?

The rule turns on three questions:

1. **Is there leave on both sides?** The classic sandwich needs leave immediately before and immediately after the off-days.
2. **Which off-days count?** Weekly offs, declared holidays, or both.
3. **Which leave types trigger it?** Usually earned or privilege leave, and sometimes loss of pay.

### Prefix and suffix holidays

Some policies go further and count off-days at either end of a leave, not only in the middle:

- **Prefix:** off-days immediately before the first day of leave. Leave on Monday after a weekend; the Saturday and Sunday are a prefix.
- **Suffix:** off-days immediately after the last day of leave. Leave on Friday before a weekend; the Saturday and Sunday are a suffix.

Prefix and suffix rules are much harsher than the middle sandwich, because almost every leave touches a weekend. Most mid-sized companies that use a sandwich rule apply it only in the middle, and allow prefix and suffix off-days to be combined freely. If you do count prefix or suffix days, limit it to long leave, such as five days or more.

## Sandwich rule examples

Assume a Monday to Friday week with Saturday and Sunday off, and a policy that counts weekly offs and holidays in the middle only. Dates are illustrative; check your own holiday calendar.

| Leave applied | Off-days involved | Leave debited with sandwich | Without sandwich |
| --- | --- | --- | --- |
| Fri 4 Dec and Mon 7 Dec 2026 | Sat 5, Sun 6 between leave days | 4 days | 2 days |
| Mon 7 Dec to Fri 11 Dec 2026 | Weekends at either end only (prefix and suffix) | 5 days | 5 days |
| Fri 4 Dec to Mon 14 Dec 2026 | Two weekends, both inside the leave | 11 days (4 Dec to 14 Dec) | 7 days |
| Wed 11 Nov and Fri 13 Nov 2026, with a declared holiday on Thu 12 Nov | Holiday between leave days | 3 days | 2 days |
| Fri 4 Dec (leave), Mon 7 Dec (worked), Tue 8 Dec (leave) | Weekend not between leave days | 2 days | 2 days |
| Fri 4 Dec (second-half leave) and Mon 7 Dec (first-half leave) | Weekend between two half days | Policy choice; most do not sandwich half days | 1 day |

In the third row, the sandwich debit is every calendar day from 4 to 14 December: 11 days. Without it, the employee uses only the 7 weekdays.

## Which leave types should the sandwich rule apply to?

| Leave type | Apply the sandwich rule? | Reasoning |
| --- | --- | --- |
| Earned or privilege leave | Commonly yes | Planned leave, where stretching is a real pattern |
| Casual leave | Usually no | Short, unplanned needs; many policies cap CL at 2 or 3 consecutive days anyway |
| Sick leave | Usually no, especially with a medical certificate | Illness does not respect weekends; sandwiching it looks punitive |
| Maternity leave | No | Statutory leave of 26 weeks in calendar terms; it is not debited from a balance |
| Comp off | Usually no | Short and earned for extra work |
| Loss of pay (LWP or unauthorised) | Often yes | Prevents an unpaid Friday and Monday from becoming a free paid weekend |
| Bereavement or special leave | No | Compassion first |

Apply the rule to as few leave types as you can while still solving the problem you have.

## Is the sandwich rule legal?

There is no national provision that prohibits a sandwich rule as a matter of company policy, but statutory leave rules can limit it.

- The old Factories Act provided that annual leave with wages was exclusive of holidays falling during or at either end of the leave period. Some state Shops and Establishments Acts and holiday laws have used similar language for leave or holidays.
- The OSH Code, in force since 21 November 2025, now governs annual leave for workers in covered establishments. Whether your state's rules under the OSH Code carry the same principle should be checked before you apply a sandwich rule to workers' statutory annual leave.
- State National and Festival Holidays laws make certain holidays compulsory paid holidays. Debiting a compulsory paid holiday as leave may be challenged as taking away that paid holiday.

The safest approach: apply the sandwich rule to policy leave above the statutory floor and to employees outside the statutory definition of "worker", check each state's position with the [Ministry of Labour and Employment](https://labour.gov.in/) or the state labour department, and take advice before applying it to statutory leave of workers.

## How does payroll treat sandwiched days?

If the employee has enough leave balance, sandwiched days are simply debited from the balance and pay is unaffected. Payroll is affected only when the balance runs out and the days become loss of pay.

### Worked example: sandwich days as LOP

An employee on a monthly gross of ₹39,000, paid on a calendar-day basis, has no earned leave left and is absent without paid leave on Friday 4 December and Monday 7 December 2026. December has 31 days, so the daily rate is ₹39,000 ÷ 31 = ₹1,258.06.

- **With the sandwich rule applied to LOP:** 4 days × ₹1,258.06 = ₹5,032.
- **Without it:** 2 days × ₹1,258.06 = ₹2,516.

The difference is ₹2,516 for one weekend. Two cautions follow:

1. **Divisor fit.** On a calendar-day divisor, weekends are part of the divisor, so counting them as LOP is consistent. On a 26-day or working-day divisor, weekends are not working days, and counting them as LOP deducts more than the absence. The Code on Wages limits a deduction for absence to the proportion of the period the employee was required to work. Our guide to [wage deductions under the Code on Wages](/blog/wage-payment-deadlines-and-deductions) explains the limit.
2. **PF, ESI and PT follow the reduced wages.** LOP reduces the PF wages actually earned, ESI is on wages paid, and professional tax in most states follows the month's salary. Our guide to [LOP calculation](/blog/loss-of-pay-lop-calculation) works through the statutory effect.

## Sample sandwich leave policy

Adapt these clauses to your locations and take advice before adopting them.

1. **Scope.** This rule applies to earned leave and to leave without pay. It does not apply to casual leave, sick leave, maternity leave, comp off or bereavement leave.
2. **Middle sandwich.** Where weekly offs or declared holidays fall between two days of earned leave or leave without pay, those days are counted as part of the leave.
3. **Prefix and suffix.** Weekly offs and holidays immediately before the first day or after the last day of leave are not counted.
4. **Half days.** The rule applies only where the leave on both sides is a full day.
5. **Mixed leave.** If the leave on one side is earned leave and on the other side is casual or sick leave, the rule does not apply.
6. **Statutory leave.** Where applicable law provides that holidays are excluded from statutory leave, that law prevails over this policy.
7. **Approvals.** The leave application will show the total days to be debited, including sandwiched days, before the employee submits it.

Clause 7 matters as much as the rule itself. An employee who sees "4 days" before submitting rarely complains later; one who finds it on the payslip almost always does.

## Employee-relations considerations

- **Explain the purpose.** Frame it as fair coverage during peak periods, not a penalty.
- **Announce it in advance.** Introduce or change the rule from the start of a leave year, with notice, not in the middle of festival season.
- **Apply it to everyone.** A rule waived for senior staff and enforced on the shop floor damages trust quickly.
- **Consider a lighter version.** Some companies apply the sandwich rule only in declared peak periods, or only to leave of three or more days.
- **Watch the side effects.** Employees may shift to sick leave or unauthorised absence to avoid the rule. Track that pattern in your [absenteeism reports](/blog/absenteeism-rate-bradford-factor).

## Common mistakes

- **Leaving the rule unwritten** and applying it case by case.
- **Applying it to sick leave and casual leave,** which feels punitive and changes little.
- **Counting prefix and suffix days for short leave,** so almost every leave touches the rule.
- **Sandwiching compulsory paid holidays** without checking state law.
- **Using a 26-day or working-day divisor** and still counting weekends as LOP.
- **Not showing the debit at the time of application,** so employees find out from the payslip.
- **Introducing the rule mid-year,** in the middle of a holiday season.

## FAQs

**What is the sandwich leave rule?** A policy that counts weekly offs and holidays falling between two leave days as leave. Leave on Friday and Monday is debited as four days.

**Is the sandwich rule legal in India?** No national law bans it as a company policy, but statutory leave rules for workers and state holiday laws can limit it. Check each state before applying it to statutory leave.

**Does the sandwich rule apply to casual leave?** It is a policy choice. Most companies do not apply it to casual or sick leave and use it only for earned leave and leave without pay.

**Are holidays counted in the sandwich rule?** Under most sandwich policies, a declared holiday between two leave days counts, just like a weekly off. Write down whether holidays, weekly offs or both are covered.

**What are prefix and suffix holidays?** Off-days immediately before the first day of leave (prefix) or after the last day (suffix). Most policies count only the off-days in the middle.

**Does the sandwich rule apply to half-day leave?** Usually not. Most policies apply it only where full-day leave falls on both sides of the off-days.

## How NeevHR helps

NeevHR [leave](/features/leave) enforces sandwich rules with prefix and suffix settings per leave type, and every debit is recorded in the leave ledger. It counts working days against each employee's own [holiday calendar](/features/holidays), and unpaid leave flows into [payroll](/payroll) as LOP. To see your sandwich policy configured on your own calendar, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
