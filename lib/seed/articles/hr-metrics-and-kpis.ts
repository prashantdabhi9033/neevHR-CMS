import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "hr-metrics-and-kpis",
  title: "HR metrics and KPIs every Indian HR team should track",
  excerpt:
    "The HR metrics and KPIs Indian HR teams should track, with a formulas table, worked ₹ examples for a 1,200-employee company and how to design an HR dashboard.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-10-10",
  body: `HR metrics are standard measures of your workforce, such as headcount, attrition, time to hire, absenteeism and payroll cost. HR KPIs are the handful of those metrics you set targets for because they tie to business goals. Most Indian HR teams of 500 to 5,000 employees need about fifteen metrics across five areas: workforce, hiring, retention, time and attendance, and cost and compliance, each with a fixed formula, an owner and a monthly review.

This guide gives the formulas, works through them for a hypothetical 1,200-employee company, and shows how to design a dashboard people actually use. Attrition gets its own detailed treatment in our guide to [employee attrition rate](/blog/employee-attrition-rate), and hiring metrics connect closely to [reducing offer dropouts](/blog/reduce-offer-dropouts).

## What is the difference between an HR metric and an HR KPI?

| | HR metric | HR KPI |
| --- | --- | --- |
| What it is | Any consistent measure of the workforce or HR process | A metric chosen to track progress on a specific goal |
| Number tracked | Dozens | Five to ten at leadership level |
| Has a target? | Not necessarily | Yes, with an owner and a time frame |
| Example | Average tenure | Reduce regretted attrition in sales from 18% to 14% this year |

Every KPI is a metric; few metrics deserve to be KPIs. Start by defining the metrics properly, then pick KPIs that match this year's priorities.

## Which HR metrics should you track? The formulas table

| Area | Metric | Formula |
| --- | --- | --- |
| Workforce | Headcount | Employees on payroll on the last day of the period (state whether contract staff are included) |
| Workforce | Average headcount | (Opening headcount + closing headcount) ÷ 2 |
| Workforce | Span of control | Employees with a manager ÷ number of managers |
| Workforce | Gender diversity | Women employees ÷ headcount × 100, overall and by level |
| Hiring | Time to fill | Days from requisition approval to offer acceptance |
| Hiring | Time to hire | Days from candidate's application to offer acceptance |
| Hiring | Offer acceptance rate | Offers accepted ÷ offers made × 100 |
| Hiring | Offer dropout rate | Accepted offers where the candidate did not join ÷ offers accepted × 100 |
| Hiring | Cost per hire | (External recruiting costs + internal recruiting costs) ÷ hires |
| Retention | Attrition rate | Separations ÷ average headcount × 100 |
| Retention | Early attrition | Exits within 90 or 180 days of joining ÷ joiners in the cohort × 100 |
| Retention | Internal fill rate | Roles filled by internal candidates ÷ total roles filled × 100 |
| Time | Absenteeism rate | Unplanned absence days ÷ scheduled working days × 100 |
| Time | Overtime ratio | Overtime hours ÷ scheduled hours × 100 |
| Cost | Payroll cost % of revenue | Total employee cost ÷ revenue × 100 |
| Cost | Revenue per employee | Revenue ÷ average headcount |
| Cost | Average CTC | Total annual CTC ÷ headcount, by grade |
| Compliance | Statutory deposits on time | Deposits made by due date ÷ deposits due × 100 |
| Compliance | Payroll accuracy | Payslips needing no correction ÷ payslips issued × 100 |

Define each formula once, write it down, and do not change it mid-year. Most disagreements about HR numbers are really disagreements about definitions: who counts as an employee, which date an exit is counted on, whether interns are in the denominator.

## Worked examples for a 1,200-employee company

**The figures below are illustrative assumptions for a hypothetical company, chosen to show the arithmetic. They are not benchmarks.**

The company has an average headcount of 1,200 for the year ending 31 March 2026, annual revenue of ₹4,80,00,00,000 (₹480 crore) and a total employee cost of ₹96,00,00,000 (₹96 crore).

### Hiring metrics

During the year it made 150 offers, of which 126 were accepted and 120 candidates joined. External recruiting costs (agency fees, job boards, assessments, referral bonuses) were ₹27,00,000, and internal costs (the recruiting team's share of CTC and tools) were ₹9,00,000.

- Offer acceptance rate: 126 ÷ 150 × 100 = **84%**
- Offer dropout rate: 6 ÷ 126 × 100 = **4.8%**
- Cost per hire: (₹27,00,000 + ₹9,00,000) ÷ 120 = **₹30,000**

Track time to fill and time to hire as medians as well as averages. One role open for nine months can distort an average for the whole year.

### Retention metrics

It had 216 separations in the year: 216 ÷ 1,200 × 100 = **18%** annual attrition. Of 120 joiners, 12 left within 90 days, an early attrition of 12 ÷ 120 × 100 = **10%**. For monthly versus annualised attrition, voluntary and regretted splits and cohort analysis, use the method in our [attrition rate guide](/blog/employee-attrition-rate) rather than a single headline number.

### Absenteeism

In one month with 22 working days, scheduled working days are 1,200 × 22 = 26,400. Unplanned absences, meaning sick leave taken without notice and unapproved absence, total 528 days.

- Absenteeism rate: 528 ÷ 26,400 × 100 = **2.0%**

Exclude planned leave such as earned leave and holidays. Absenteeism is meant to capture disruption, not entitlement. For how attendance data feeds this, see [attendance and overtime rules in India](/blog/attendance-and-overtime-rules-in-india).

### Cost metrics

- Payroll cost % of revenue: ₹96,00,00,000 ÷ ₹4,80,00,00,000 × 100 = **20%**
- Revenue per employee: ₹4,80,00,00,000 ÷ 1,200 = **₹40,00,000**
- Average cost per employee: ₹96,00,00,000 ÷ 1,200 = **₹8,00,000** a year

State what "employee cost" includes. A consistent definition is gross salary plus employer PF, employer ESI, gratuity provision, statutory bonus, insurance premiums and variable pay. Note that the EPF wage ceiling rose from ₹15,000 to ₹25,000 a month from 17 September 2026, which raises employer PF cost for employees earning above ₹15,000 where the employer contributes on wages up to the ceiling; any year-on-year comparison of payroll cost should call this out. Our [CTC calculator](/tools/ctc-calculator) shows how employer contributions build up CTC.

### Compliance metrics

The company had 60 statutory deposits and returns due in the year across PF, ESI, PT, LWF and TDS, and made 58 by their due dates.

- Statutory deposits on time: 58 ÷ 60 × 100 = **96.7%**

This is one metric where the only acceptable target is 100%. See the [payroll compliance checklist](/blog/payroll-compliance-checklist-india) for the calendar behind it.

## Which HR KPIs matter most to leadership?

Pick KPIs by audience. The same metric can matter to different people for different reasons.

| Audience | Typical KPIs | Why they care |
| --- | --- | --- |
| CEO and board | Headcount vs plan, regretted attrition, revenue per employee | Capacity, talent risk, productivity |
| CFO | Payroll cost % of revenue, average CTC by grade, cost per hire, headcount vs budget | Cost control and forecasting |
| CHRO | Regretted and early attrition, time to fill critical roles, internal fill rate, diversity | Talent health |
| HR operations | Payroll accuracy, statutory deposits on time, helpdesk SLA met | Operational reliability |
| Line managers | Team attrition, absenteeism, overdue reviews and confirmations | Running their team |

Five to seven KPIs per audience is plenty. A dashboard with forty tiles gets glanced at once and ignored.

## How do you design an HR dashboard?

### Principles

- **Start with questions, not charts.** "Are we hiring fast enough for the plan?" leads to time to fill and open positions by department, shown against plan.
- **Show trends, not snapshots.** A twelve-month line tells you more than this month's number.
- **Always show the comparison.** Against plan, last year or target, so the reader knows whether a number is good.
- **Let every number drill down.** A headline attrition figure should open into departments, managers and the exits behind it.
- **Respect access rules.** Pay and performance data should follow role-based access; a manager sees their team, not the company.

### A one-page layout

| Row | Content |
| --- | --- |
| Top tiles | Headcount vs plan, annualised attrition, open positions, payroll cost % of revenue |
| Row 2 | Twelve-month trend of headcount and attrition, by department |
| Row 3 | Hiring funnel: requisitions, offers, acceptances, joiners, with time to fill |
| Row 4 | Absenteeism and overtime by location |
| Row 5 | Compliance: statutory deposits on time, payroll corrections this month |

Refresh it monthly after payroll closes, so headcount and cost come from the same run. Our [monthly payroll checklist](/blog/monthly-payroll-checklist) covers the closure steps that make the data reliable.

## Data quality: the part nobody budgets for

HR metrics are only as good as the records behind them. The common problems:

- **Exits recorded late**, so headcount is overstated for a month or two.
- **Back-dated changes that overwrite history**, so last year's report changes when re-run.
- **Department and location names in free text**, so the same team appears under three spellings.
- **Contract staff in a spreadsheet**, outside the system, so total workforce is unknown.
- **Recruitment costs held only in finance**, so cost per hire is never calculated.

Fix these before investing in dashboards. An effective-dated employee record, where each change is a dated event, is what allows you to report headcount as of any past date and get the same answer every time.

## Common mistakes

- Changing a formula mid-year, so trends become meaningless.
- Reporting monthly attrition multiplied by twelve as the annual figure without saying so.
- Counting planned leave in absenteeism.
- Leaving internal recruiting costs out of cost per hire.
- Comparing payroll cost year on year without adjusting for statutory changes such as the EPF wage ceiling revision.
- Building a forty-tile dashboard with no targets or comparisons.
- Publishing pay and performance metrics without role-based access.

## FAQs

**What are the most important HR metrics?** For most mid-sized Indian companies: headcount vs plan, attrition (especially regretted and early), time to fill, offer acceptance, absenteeism, payroll cost as a percentage of revenue and statutory deposits on time.

**How do you calculate cost per hire?** Add external recruiting costs, such as agency fees and job boards, to internal costs, such as the recruiting team's time and tools, and divide by the number of hires in the period.

**What is the difference between time to hire and time to fill?** Time to fill runs from requisition approval to offer acceptance and measures the whole process. Time to hire runs from the candidate's application to offer acceptance and measures how fast you move a candidate through.

**How do you calculate absenteeism rate?** Divide unplanned absence days by scheduled working days and multiply by 100. Exclude planned leave and holidays.

**How often should HR metrics be reported?** Monthly for operational metrics, after payroll closes, and quarterly for leadership KPIs with twelve-month trends.

**What is a good revenue per employee?** It varies widely by industry and business model, so compare against your own trend and your own plan rather than a generic figure.

## How NeevHR helps

NeevHR [reports and analytics](/features/reports) offers a report catalog across modules plus a self-serve builder: choose a dataset, group and aggregate it, chart it, and click any bar or slice to open the records behind it. [Employee records](/features/employees) are effective-dated, so headcount and attrition can be reported as of any date, while [recruitment](/features/recruitment) reports cover funnel, time to fill and acceptance, and [workforce planning](/features/planning) shows plan versus actual headcount. [Payroll](/payroll) supplies the cost side from the same data. To see your own metrics on one page, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 17 Oct 2026.*`,
};

export default post;
