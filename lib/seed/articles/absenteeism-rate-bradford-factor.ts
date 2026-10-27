import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "absenteeism-rate-bradford-factor",
  title: "Absenteeism rate and Bradford factor: formulas and examples",
  excerpt:
    "How to calculate absenteeism rate and the Bradford factor in India: worked examples, trigger bands, fairness cautions and return-to-work conversations.",
  category: "time",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `Absenteeism rate is the share of scheduled working time lost to unplanned absence: total days of unplanned absence divided by (average headcount × working days in the period), multiplied by 100. The Bradford factor complements it at individual level: B = S × S × D, where S is the number of separate absence spells and D the total days absent, usually over a rolling 12 months. It weights frequent short absences more heavily than one long one.

This guide covers both measures with worked examples, how to read them, trigger bands as a starting point, the fairness cautions that matter in India, and the return-to-work conversation that makes the numbers useful. For other workforce measures, see our guide to [HR metrics and KPIs](/blog/hr-metrics-and-kpis), and for the related problem of punctuality, see our [late coming policy guide](/blog/late-coming-policy-grace-period).

## What counts as absence?

The measure is only as good as the definition. Most HR teams measure **unplanned** absence, because planned leave is not a problem to solve.

| Type of time off | Count in absenteeism? | Why |
| --- | --- | --- |
| Unauthorised absence (no leave applied) | Yes | The core of the measure |
| Sick leave taken on the day | Yes | Unplanned, even if genuine |
| Casual leave applied on the same day | Yes | Unplanned by definition |
| Earned leave approved in advance | No | Planned |
| Weekly offs and declared holidays | No | Not scheduled working time |
| Maternity leave | No | Statutory and protected |
| Absence due to a workplace injury | No, track separately | Different cause, different action |
| Absence linked to a declared disability, under reasonable accommodation | No, track separately | Protected; see fairness below |
| Approved comp off, bereavement leave, jury or election duty | No | Approved and planned or protected |
| Half days | Yes, as 0.5 | Keep units consistent |

Write the definition down and keep it stable. A rate that changes because someone reclassified casual leave is not a trend.

## How do you calculate absenteeism rate?

**Absenteeism rate (%) = unplanned absence days ÷ (average headcount × working days in the period) × 100**

### Worked example

A plant with an average headcount of 400 runs a six-day week. November 2026 has 25 working days (30 days less 5 Sundays). The attendance register shows 520 days of unplanned absence in the month.

- Scheduled working days: 400 × 25 = 10,000.
- Absenteeism rate: 520 ÷ 10,000 × 100 = **5.2%**.

Translate that into money for the CFO. If the average daily cost of a production employee (salary plus employer PF and ESI) is ₹1,100, the direct pay cost of the absence is 520 × ₹1,100 = ₹5,72,000 for the month. That understates the real cost, because it leaves out overtime paid to cover gaps, temporary labour, lost output and supervisors' time. Our [overtime calculator](/tools/overtime-calculator) helps estimate the cover cost.

### Variants worth tracking

- **By employee group:** shop floor, office, field sales. Mixing them hides the problem.
- **Frequency rate:** number of absence spells per employee in the period. It tells you whether absence is a few long spells or many short ones.
- **Rolling 12 months:** smooths out the monsoon and festival spikes that every Indian workforce sees.
- **Monday and post-holiday rate:** unplanned absence on the day after a weekly off or festival, compared with other days.

## What is a good absenteeism rate in India?

There is no authoritative national benchmark, and figures quoted online usually come from small surveys with different definitions. As a practical guide only:

- Office and knowledge roles often sit in the low single digits.
- Manufacturing, warehousing and other blue-collar workforces commonly run higher, with seasonal peaks around harvest, festivals and the monsoon.

The more useful comparison is your own trend: by month, by site, by team and against the same month last year. A plant whose rate climbs from 4% to 6% over two quarters has a problem regardless of what any survey says.

## What is the Bradford factor?

The Bradford factor scores each employee's absence record so that frequent short absences, which disrupt planning most, stand out.

**B = S × S × D**

- **S** = number of separate spells of absence in the period.
- **D** = total days of absence in the period.
- The period is usually a rolling 12 months (52 weeks).

A spell is a continuous absence, however long. Three consecutive days off sick is one spell of three days.

### Worked examples: same days, very different scores

Three employees each lost 10 days in the last 12 months:

| Employee | Pattern | S | D | Calculation | Bradford score |
| --- | --- | --- | --- | --- | --- |
| Meena | One spell of 10 days (surgery and recovery) | 1 | 10 | 1 × 1 × 10 | 10 |
| Rajesh | Five spells of 2 days each | 5 | 10 | 5 × 5 × 10 | 250 |
| Arif | Ten single days, mostly Mondays | 10 | 10 | 10 × 10 × 10 | 1,000 |

The absenteeism rate treats all three the same. The Bradford factor shows that Arif's pattern disrupts the roster far more than Meena's single planned recovery, which is the point of the measure.

### Trigger bands as a starting point

Many employers attach review stages to score bands. The bands below are illustrative; set your own after looking at your score distribution.

| Score band | Suggested action |
| --- | --- |
| 0 to 49 | None |
| 50 to 124 | Informal conversation with the manager |
| 125 to 399 | Documented review meeting |
| 400 to 649 | Formal stage under the attendance or disciplinary policy |
| 650 and above | Final stage review, with HR |

Treat a band as a reason to look and talk, never as an automatic penalty. A score is a prompt for a conversation, not a verdict.

## Fairness cautions: what must not feed the score

This is where most Bradford programmes go wrong. A mechanical score that penalises protected absence creates legal risk and destroys trust.

- **Maternity and pregnancy-related absence.** Maternity leave of 26 weeks is a statutory entitlement, and penalising a woman for it, or for pregnancy-related illness, is not permitted. Keep these absences out of the score entirely. Our guide to the [maternity benefit rules for employers](/blog/maternity-benefit-act-for-employers) covers the protections.
- **Disability.** The Rights of Persons with Disabilities Act, 2016 prohibits discrimination against persons with disabilities in employment. Absence linked to a disability, such as regular treatment appointments, should be recorded separately and handled through reasonable accommodation, not triggers.
- **Workplace injury.** Absence caused by an accident at work is a safety issue, not an attendance issue.
- **Long-term illness.** One long spell already scores low, but recurring absences from a known chronic condition can push the score up. Handle these through a medical review, with the employee's consent for any medical information.
- **Statutory and approved absence.** ESI-certified sickness, approved leave of any kind, court or election duty, and leave under a POSH interim measure should not be counted as unplanned absence.
- **Personal data.** Reasons for absence, especially medical ones, are sensitive. Limit who can see them and collect only what the purpose needs, in line with our guide to the [DPDP Act for HR teams](/blog/dpdp-act-2023-for-hr-teams).

Before you go live, run the scores on the last year's data and check who lands in the higher bands. If they skew towards women, older employees or one site with a known transport problem, fix the definition first.

## The return-to-work conversation

The single most effective intervention against short-term absence is a brief return-to-work conversation after every spell, held by the line manager. It is not a disciplinary meeting.

A simple structure:

1. **Welcome back and check wellbeing.** Is the employee fit to work? Is anything needed?
2. **Confirm the record.** Dates, reason, whether leave has been applied and any certificate.
3. **Ask about causes.** Work-related causes (shift pattern, workload, a conflict) are things the company can act on.
4. **Note the pattern, if there is one.** Show the record factually: "this is your fourth Monday absence since August".
5. **Agree next steps.** Support, a schedule change, a referral, or simply a note that the record will be reviewed if the pattern continues.

Record the conversation in two or three lines. When an attendance case later reaches the formal stage, these notes show that the employee knew about the concern and had a chance to explain. If repeated absence becomes a conduct matter, follow the [disciplinary process](/blog/disciplinary-action-domestic-enquiry) with natural justice.

## Using the numbers well

- **Report absenteeism rate monthly** by site and team; report Bradford scores only to the managers and HR partners who need them.
- **Read it alongside attrition.** Unplanned absence often rises before resignations, so watch it alongside your [employee attrition rate](/blog/employee-attrition-rate).
- **Separate unpaid absence for payroll.** Unauthorised absence becomes [loss of pay](/blog/loss-of-pay-lop-calculation); sick leave within balance does not. The attendance status, not the analytics, drives pay.

## Common mistakes

- **Counting planned earned leave** as absence, which punishes people for using their entitlement.
- **Including maternity, disability-related or injury absence** in Bradford scores.
- **Applying bands mechanically** without a conversation or a look at the cause.
- **Comparing rates across sites** that define absence differently.
- **Quoting an external benchmark** instead of tracking your own trend.
- **Sharing individual scores widely,** which turns a management tool into public shaming.
- **Skipping return-to-work conversations** and then relying on the score alone at the formal stage.

## FAQs

**How do you calculate absenteeism rate?** Divide unplanned absence days by average headcount multiplied by working days in the period, then multiply by 100. 520 absence days for 400 employees over 25 working days is 5.2%.

**What is the Bradford factor formula?** B = S × S × D, where S is the number of absence spells and D the total days absent, usually over a rolling 12 months. Ten single-day absences score 1,000; one 10-day absence scores 10.

**What is a good Bradford factor score?** Lower is better, and many employers take no action below about 50. Bands are a policy choice, so set them after checking your own score distribution.

**Is the Bradford factor fair?** It is fair only if protected absence is excluded, such as maternity, disability-related and workplace-injury absence, and if a score leads to a conversation, not an automatic penalty.

**Should sick leave count in absenteeism?** Yes, unplanned sick leave is usually included in the absenteeism rate, even when genuine, because it measures disruption. Long-term and protected sickness should be handled separately.

## How NeevHR helps

NeevHR [attendance](/features/attendance) records each day as present, absent, half day or on leave from punches and approved leave, with daily and monthly registers. [Leave](/features/leave) keeps every leave type separate, so planned and unplanned absence can be told apart, and the [reports](/features/reports) builder lets you group leave data by team, location and month and drill from a chart to the employees behind it. To see your own absence data reported this way, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
