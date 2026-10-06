import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "employee-attrition-rate",
  title: "Employee attrition rate: how to calculate and reduce it",
  excerpt:
    "How to calculate employee attrition rate, monthly and annualised, with a worked example, plus regretted and early attrition, cohorts, cost and retention levers.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-10-06",
  body: `Employee attrition rate is the number of employees who left in a period divided by the average headcount for that period, multiplied by 100. A company with 24 exits in a month and an average headcount of 1,190 has a monthly attrition rate of 2.02%, or roughly 24% annualised. It becomes useful when split into voluntary, regretted and early attrition and tracked by team, tenure and manager.

This guide covers how to calculate attrition and how to reduce it. Attrition often starts with a weak first 90 days, so it pairs well with our guide to [probation and confirmation](/blog/probation-and-confirmation-best-practices).

## The attrition rate formula

**Attrition rate = separations in the period ÷ average headcount in the period × 100**

- **Separations** are employees whose last working day fell in the period: resignations, terminations, retirements, deaths and contract ends. Count each exit once, on the last working day, not on the resignation date.
- **Average headcount** is usually (opening headcount + closing headcount) ÷ 2. For a year, the average of the twelve monthly figures is more accurate.
- **Scope** should be stated: employees on the payroll only, or contract staff too. Report them separately if both matter.

Write the definitions down once and use them every month. Most arguments about attrition numbers are really arguments about definitions.

## Monthly vs annualised attrition: a worked example

A company starts April 2026 with 1,200 employees. During April, 24 employees leave and 4 join, so it closes the month at 1,180.

- Average headcount: (1,200 + 1,180) ÷ 2 = 1,190
- Monthly attrition: 24 ÷ 1,190 × 100 = 2.02%
- Simple annualised attrition: 2.02% × 12 = 24.2%

One month annualised is volatile, because a single bad month gets multiplied by twelve. Two steadier measures:

- **Year to date, annualised.** From April to September 2026 the company has 132 separations and an average headcount of 1,200. Six-month attrition is 132 ÷ 1,200 × 100 = 11.0%, and annualised it is 11.0% × 12 ÷ 6 = 22.0%.
- **Rolling twelve months.** Separations in the last twelve months ÷ average headcount over those twelve months × 100. It moves slowly and is the best single number for a board pack.

## Voluntary, involuntary and regretted attrition

The headline rate mixes very different events. Split it.

| Type | What it covers | April example | Rate |
| --- | --- | --- | --- |
| Voluntary | Resignations | 18 of 24 | 18 ÷ 1,190 = 1.51% |
| Involuntary | Terminations, end of contract, retirement | 6 of 24 | 6 ÷ 1,190 = 0.50% |
| Regretted | Voluntary exits of people you wanted to keep | 7 of the 18 | 7 ÷ 1,190 = 0.59% |

Regretted attrition is the number leadership should watch most closely. Define "regretted" before the exit happens, for example any employee rated in the top two performance bands or in a critical role, so the label is not decided after the fact.

## Early attrition: the first 90 or 180 days

Early attrition is exits within the first 90 or 180 days of joining, measured against the joiners of a period. If 60 people joined between April and June 2026 and 9 of them left within 90 days, early attrition is 9 ÷ 60 × 100 = 15%.

High early attrition usually points to the hiring and joining experience rather than pay: a role that was oversold, a weak first week, an absent manager or a mismatch the interview missed. Our [employee onboarding checklist](/blog/employee-onboarding-checklist) covers the first 90 days stage by stage, and early exits are often preceded by candidates who nearly did not join, which our guide to [reducing offer dropouts](/blog/reduce-offer-dropouts) covers.

## Cohort analysis

A cohort groups employees by when they joined and follows them over time. It shows whether retention is improving, which a single monthly rate cannot.

| Joining quarter | Joiners | Still employed after 6 months | 6-month retention |
| --- | --- | --- | --- |
| Apr to Jun 2025 | 70 | 59 | 84.3% |
| Jul to Sep 2025 | 64 | 50 | 78.1% |
| Oct to Dec 2025 | 58 | 51 | 87.9% |
| Jan to Mar 2026 | 66 | 60 | 90.9% |

The July to September 2025 cohort stands out. The next question is what was different about it: a hiring surge, a new recruiter, a particular location or a single manager.

## Attrition by department, tenure and manager

Break the rolling twelve-month rate down. The figures below are illustrative.

| Department | Average headcount | Separations | Attrition |
| --- | --- | --- | --- |
| Sales | 300 | 84 | 28.0% |
| Operations | 450 | 90 | 20.0% |
| Technology | 250 | 35 | 14.0% |
| Corporate functions | 200 | 20 | 10.0% |
| Total | 1,200 | 229 | 19.1% |

Then cut the same data by tenure band (under 6 months, 6 to 12 months, 1 to 3 years, over 3 years) and by reporting manager. Manager-level views need care: small teams make percentages jumpy, so look at counts over at least two quarters before drawing conclusions, and keep the view restricted to HR and the manager's own leadership.

## The cost of attrition: an illustration

There is no universal figure for the cost of an exit, so build your own from your numbers. An illustration for a role with a CTC of ₹6,00,000 a year (₹50,000 a month):

| Cost item | Assumption | Amount |
| --- | --- | --- |
| Recruitment | Sourcing, referral or agency fee, interviewer time | ₹50,000 |
| Vacancy | 45 days of work covered by overtime or left undone | ₹30,000 |
| Onboarding and training | Induction, training time, equipment set-up | ₹20,000 |
| Ramp-up | 3 months at 50% productivity: 3 × ₹50,000 × 50% | ₹75,000 |
| Total | | ₹1,75,000 |

That is about 29% of annual CTC for one exit. If 150 avoidable exits a year each cost ₹1,75,000, the total is ₹2,62,50,000. Preventing 30 of them saves 30 × ₹1,75,000 = ₹52,50,000. The value of the exercise is less in the exact number than in showing finance that retention has a price.

## Leading indicators to watch

Attrition is a lagging number. These signals tend to move first:

| Indicator | What to look for |
| --- | --- |
| Absenteeism | Rising unplanned absence, especially single days |
| Leave patterns | Frequent short leave around weekends, often a sign of interviews |
| Engagement scores | Falling pulse or eNPS scores in a team |
| Time since last increment or promotion | High performers past their expected cycle |
| Manager change | Exits often follow a change in reporting manager |
| Overtime and workload | Sustained overtime in a team |
| Internal moves | Applications for transfers that go nowhere |

Treat these as prompts for a conversation, not as grounds for action against anyone. No single signal predicts an exit.

## Retention levers that work in practice

- **Fix the first 90 days.** A clear role, a ready workspace, a named buddy and 30, 60 and 90-day check-ins.
- **Train managers.** Regular one-to-ones, clear expectations and timely feedback do more than most programmes.
- **Pay on time and transparently.** Correct payslips, predictable increments and a visible [merit increase matrix](/blog/merit-increase-matrix) reduce a common source of frustration.
- **Show a path.** Internal job postings, promotion criteria and lateral moves give ambitious people a reason to stay.
- **Listen and act.** Run short pulse [surveys](/features/surveys), share the results and fix two or three things each quarter.
- **Stay interviews.** Ask high performers what keeps them and what might make them leave, before they resign.
- **Recognise work.** Peer recognition and manager thanks are cheap and noticed.

## Exit interviews done well

Exit interviews are useful only if people answer honestly and the answers are used.

- Have someone other than the direct manager run them, ideally in the last week rather than the last day.
- Use a fixed set of reason codes plus open questions, so reasons can be counted.
- Record a primary reason and a secondary reason, not a long list.
- Report reasons in aggregate, by quarter and department, never as quotes attributed to individuals.
- Treat exit data as personal data under the Digital Personal Data Protection Act, 2023: tell the employee why it is collected, restrict access and set a retention period. The [Ministry of Electronics and Information Technology](https://www.meity.gov.in/) publishes the Act and rules, and our [DPDP guide for HR teams](/blog/dpdp-act-2023-for-hr-teams) covers the practical steps.

## A monthly attrition dashboard

| Panel | What it shows |
| --- | --- |
| Headline | Monthly, year-to-date annualised and rolling twelve-month attrition |
| Split | Voluntary, involuntary and regretted, with counts |
| Early attrition | 90-day and 180-day exits against joiners |
| Breakdown | By department, location, grade and tenure band |
| Cohorts | 6 and 12-month retention by joining quarter |
| Reasons | Top exit reasons this quarter against last |
| Signals | Engagement score trend and leave patterns by team |

Every panel should drill down to the list of employees behind it, for the people authorised to see it.

## Common mistakes

- Counting exits on the resignation date instead of the last working day.
- Annualising a single month and reacting to the noise.
- Reporting only total attrition, with no voluntary or regretted split.
- Deciding who was "regretted" after they have left.
- Quoting industry benchmarks with no source instead of tracking your own trend.
- Running exit interviews and never reporting the reasons.

## FAQs

**How do you calculate attrition rate in HR?** Divide the number of separations in a period by the average headcount for that period and multiply by 100. Average headcount is usually the opening plus closing headcount divided by two.

**What is the difference between attrition and turnover?** The terms are often used interchangeably. Some companies use turnover for all exits and attrition for exits where the role is not immediately refilled. Define your usage and stick to it.

**How do you calculate annual attrition from monthly data?** Use year-to-date separations ÷ average headcount × 12 ÷ months elapsed, or a rolling twelve-month figure. Multiplying one month by twelve is quick but volatile.

**What is a good attrition rate?** It depends on industry, role mix and location, so the most useful comparison is your own trend over time and between your teams. Focus on regretted and early attrition rather than the headline rate.

**What is regretted attrition?** Voluntary exits of employees the company wanted to keep, usually defined in advance as high performers or people in critical roles.

## How NeevHR helps

NeevHR [reports](/features/reports) include headcount and attrition dashboards, attrition risk with visible rule-based reasons and drill-down from any chart to the records behind it. [Exit management](/features/exit) records exits and reasons for attrition reporting, and [engagement](/features/engagement) tracks pulse and eNPS trends with an anonymity threshold on survey results.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 06 Oct 2026.*`,
};

export default post;
