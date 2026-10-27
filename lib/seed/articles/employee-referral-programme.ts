import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "employee-referral-programme",
  title: "Employee referral program: bonus design, tax and tracking",
  excerpt:
    "How to design an employee referral program in India: eligible roles, bonus bands, the 90-day payout rule, TDS on referral bonus, fairness and source tracking.",
  category: "recruitment",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `An employee referral program rewards employees who recommend candidates that the company goes on to hire. A good one sets out which roles qualify, who can refer, a bonus band per role level, when the bonus is paid (commonly after the new joiner completes 90 days or probation) and how source of hire is recorded. In India the referral bonus is taxable salary for the employee, so it goes through payroll with TDS like any other payment.

This guide covers design choices, bonus amounts and timing, tax treatment, fairness, tracking and the metrics that tell you whether the program is working. For where referrals sit in the wider hiring pipeline, see our [applicant tracking system guide](/blog/applicant-tracking-system-guide), and for the hiring metrics referenced below, see [HR metrics and KPIs](/blog/hr-metrics-and-kpis).

## Why run an employee referral program?

Referrals tend to do well on three counts that matter to a mid-sized Indian company:

- **Cost.** A referral bonus is usually well below a consultant's fee for the same role.
- **Speed.** A referred candidate often arrives pre-screened by someone who knows both the person and the job.
- **Fit and retention.** The referrer has a reputation at stake, and the joiner has a friend inside from day one. Many HR teams find referral hires settle faster, though you should confirm this with your own retention data rather than assume it.

The risks are just as real: referrals can narrow the talent pool to the networks your current employees already have, and a badly run program creates disputes about who gets credit.

## Which roles and employees should be eligible?

Start by deciding which roles are open for referral. Most companies open all permanent roles below a senior leadership grade, and some exclude roles where volume hiring through campus or contractors is cheaper.

Then decide who can refer. Common exclusions protect the integrity of the process.

| Person | Usually eligible? | Reason |
| --- | --- | --- |
| Permanent employees | Yes | The core audience |
| Employees on probation | Policy choice | Some companies allow it; others wait until confirmation |
| Recruiters and HR business partners for the role | No | They source candidates as part of their job |
| Hiring manager for their own team | Often no | Conflict of interest in the selection decision |
| Interview panel members for that role | Policy choice | Allow the referral but remove them from that candidate's panel |
| Senior leadership above a set grade | Often no | Expected as part of the role |
| Contract staff, interns, alumni | Policy choice | A separate, smaller reward if allowed |

Write down what happens when the referred candidate is a former employee. Many policies say a rehire within 12 months of exit does not earn a referral bonus.

## How much should a referral bonus be?

Set the bonus with reference to what the alternative would cost, usually a consultant's fee, and to how hard the role is to fill. A flat amount per level is easier to administer than a percentage of the joiner's CTC, and it avoids revealing the joiner's salary.

The bands below are illustrative. Your figures depend on your market, roles and budget.

| Role level | Typical experience | Illustrative bonus band |
| --- | --- | --- |
| Entry and junior | 0 to 3 years | ₹10,000 to ₹20,000 |
| Mid level | 3 to 8 years | ₹25,000 to ₹50,000 |
| Senior individual contributor or manager | 8 to 15 years | ₹50,000 to ₹1,00,000 |
| Hard-to-fill or niche roles | Any | A premium on the band, for a fixed period |

Some companies add non-cash recognition, such as a mention in the company announcement feed or a quarterly draw for top referrers. These help participation but should not replace a clear cash reward.

## When should the referral bonus be paid?

Pay the bonus after the joiner has stayed long enough to show the hire was sound. The common options are:

| Payout rule | How it works | Trade-off |
| --- | --- | --- |
| On joining | Paid in the joining month's payroll | Strongest motivation, but no protection if the joiner leaves in week two |
| After 90 days | Paid once the joiner completes 90 days of service | A common middle ground |
| After confirmation | Paid when the joiner is confirmed after probation | Ties the reward to a successful probation |
| Split | 50% after 90 days, 50% after 6 or 12 months | Rewards retention; more admin |

Two conditions belong in every policy:

1. **The referrer must be on the rolls on the payout date.** If the referrer resigns before then, say clearly whether the bonus is paid in the full and final settlement or forfeited.
2. **The joiner must still be employed on the qualifying date.** If the joiner leaves on day 80, no bonus is due under a 90-day rule.

## How is a referral bonus taxed?

For an employee, a referral bonus is paid by the employer because of the employment, so it is taxable as salary. It is added to the employee's salary for the tax year, TDS is calculated on it under section 392 of the Income-tax Act, 2025 (formerly section 192), and it appears on the payslip and in Form 130 (formerly Form 16). There is no specific exemption for referral bonuses.

### Worked example: TDS on a referral bonus

Neha is a software engineer under the new regime whose projected taxable salary for the year is ₹14,25,000, which puts her in the 15% slab. She refers a mid-level candidate who joins on 03 Aug 2026. Under a 90-day rule, the bonus of ₹40,000 becomes payable in the November 2026 payroll.

- Extra tax at the marginal rate: ₹40,000 × 15% = ₹6,000
- Health and education cess: ₹6,000 × 4% = ₹240
- Extra tax in total: ₹6,240
- Net referral bonus in her hand if the tax is deducted in that month: ₹40,000 minus ₹6,240 = ₹33,760

If payroll re-spreads tax over the remaining months instead, the ₹6,240 is recovered across November to March. Either method is acceptable if applied consistently, as explained in our guide to [salary TDS](/blog/salary-tds-explained). Use the [TDS calculator](/tools/tds-calculator) to check the effect for different salary levels.

A few related points to settle with your payroll and tax advisers:

- **PF and other wage-linked items.** A one-time referral bonus is generally treated as outside wages for PF, much like performance incentives. Confirm this under the Labour Codes wage basis your company has adopted, explained in our guide to the [50% wage rule](/blog/labour-codes-wage-definition-50-percent-rule).
- **Payments to non-employees.** If you reward alumni or other outsiders for referrals, the payment is not salary for them and different TDS rules may apply. Take advice before launching such a scheme.
- **Gross-up.** Some companies pay the bonus "net of tax". That is a policy choice that raises the real cost; state it explicitly if you do it.

## How do you keep referrals fair and diverse?

Referrals can quietly reduce diversity, because people tend to refer people like themselves. Five practical controls:

- **Same bar, same process.** Referred candidates go through the same assessments and interview rounds as everyone else. A referral gets a candidate a fair look, not a shortcut.
- **Track the mix.** Compare the gender, location and education profile of referral hires with hires from other sources each quarter.
- **Balance the sources.** If referrals become a very large share of hires in a team, deliberately widen sourcing for that team's next roles.
- **Targeted drives.** Some companies run time-bound referral drives for specific talent pools, such as women returning to work after a career break. Keep the selection standard identical.
- **Keep it lawful.** The Code on Wages prohibits gender discrimination in recruitment for the same work or work of a similar nature, so no referral rule should favour or exclude candidates by gender. Our guide to [pay equity and the gender pay gap](/blog/pay-equity-gender-pay-gap) covers the wider picture.

## How should source of hire be tracked?

Most referral disputes are about credit. Fix the rules before launch:

1. **Tag at entry.** The source is recorded when the candidate first enters the pipeline, with the referrer's employee ID.
2. **First valid source wins.** If the candidate was already in the pipeline from another source in, say, the last 6 months, the referral does not earn a bonus.
3. **One referrer per candidate per role.** If two employees refer the same person, the first submission counts.
4. **Validity window.** A referral is valid for a fixed period, often 6 months, for the role it was made against or any role the candidate is hired into within that window.
5. **Consent.** The referrer should confirm the candidate has agreed to be referred. Candidate data is personal data under the DPDP Act, 2023.

Source tags only help if they sit in the same system as the pipeline, so that a referral becomes a hire, and the hire becomes a payroll payment, without retyping.

## What metrics show a referral program is working?

| Metric | Formula | What it tells you |
| --- | --- | --- |
| Referral share of hires | Referral hires ÷ total hires × 100 | How much hiring relies on referrals |
| Referral conversion rate | Referral hires ÷ referred candidates × 100 | Quality of referrals compared with other sources |
| Participation rate | Employees who referred at least once ÷ eligible employees × 100 | Reach and awareness of the program |
| Time to hire | Days from entering the pipeline to offer acceptance | Speed against other sources |
| 90-day and 12-month retention | Referral hires still employed ÷ referral hires × 100 | Whether referrals really stay longer |
| Cost per referral hire | Bonuses plus program costs ÷ referral hires | Comparison with consultant and job-board hires |

### Worked example: cost per hire

A 1,800-employee company hires 120 people in a year: 30 through referrals and 40 through consultants.

- Referral cost: 30 bonuses averaging ₹30,000 = ₹9,00,000, plus ₹60,000 for recognition and communication, total ₹9,60,000. Cost per referral hire: ₹9,60,000 ÷ 30 = ₹32,000.
- Consultant cost: the average consultant hire has a CTC of ₹9,00,000 and the agreed fee is 8.33% of annual CTC, so ₹75,000 per hire.
- If 10 more roles had been filled through referrals instead of consultants, the saving would be 10 × (₹75,000 minus ₹32,000) = ₹4,30,000.

The numbers are illustrative. Run the same calculation on your own data, and look at retention alongside cost.

## Common mistakes

- Paying the bonus on joining, then chasing recovery when the joiner leaves in the first month.
- Letting hiring managers earn a bonus for hiring into their own team.
- No rule for duplicate referrals, so the program generates arguments instead of hires.
- Fast-tracking referred candidates past assessments.
- Paying referral bonuses outside payroll, so no TDS is deducted and the payment is missing from Form 130.
- Never reviewing the diversity of referral hires.
- Leaving the policy unchanged for years while hiring needs shift.

## FAQs

**Is an employee referral bonus taxable in India?** Yes. For an employee, it is part of taxable salary, and the employer deducts TDS on it through payroll. There is no specific exemption for referral bonuses.

**When is the referral bonus usually paid?** Commonly after the new joiner completes 90 days of service or is confirmed after probation. Some companies split the payment across 90 days and 6 or 12 months.

**Can HR employees get a referral bonus?** Usually not for roles they recruit for, since sourcing is part of their job. Some policies allow HR staff to earn a bonus for roles outside their own remit.

**What happens to the bonus if the referrer resigns?** It depends on the policy. Many policies require the referrer to be on the rolls on the payout date; others pay it in the full and final settlement if the qualifying date has passed.

**How much should a referral bonus be?** Many companies set flat amounts by role level, benchmarked against what a consultant would charge for the same role, with a premium for hard-to-fill roles.

## How NeevHR helps

NeevHR [recruitment](/features/recruitment) records referrals alongside other configurable candidate sources, runs the pipeline with interview panels and structured feedback, and reports source effectiveness and time-to-fill. An accepted offer flows into [onboarding](/features/onboarding), and the referral bonus can be paid through [NeevHR payroll](/payroll) with TDS like any other earning. To see it with your own sources and stages, [book a NeevHR demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
