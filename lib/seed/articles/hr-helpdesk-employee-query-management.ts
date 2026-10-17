import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "hr-helpdesk-employee-query-management",
  title: "HR helpdesk: how to manage employee queries at scale",
  excerpt:
    "How to set up an HR helpdesk for employee queries: ticket categories, an SLA table, routing and escalation, knowledge base, metrics and the salary-day peak.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-10-09",
  body: `An HR helpdesk is a single, tracked channel where employees raise questions and requests to HR, payroll and related teams, and where each query becomes a ticket with a category, an owner, a priority and a deadline. A good one has five parts: clear categories, SLA targets by priority, routing and escalation rules, a knowledge base that answers repeat questions, and a few metrics reviewed every month. In Indian companies, it also needs a plan for the predictable surge of payroll queries around salary day.

This guide explains how to set one up for a company of 500 to 5,000 employees. Many helpdesk queries are payslip and tax questions, so it pairs well with our guides to [payslip format in India](/blog/payslip-format-india) and [salary TDS](/blog/salary-tds-explained).

## Why do you need an HR helpdesk?

Without a helpdesk, employee queries arrive through email, chat messages, phone calls and corridor conversations. The symptoms are familiar:

- The same question is answered twenty times a month by different people, sometimes differently.
- Queries sit in one person's inbox while they are on leave.
- Nobody can say how many queries arrived, what they were about or how long they took.
- Sensitive issues, such as a salary dispute or a grievance, are discussed on open channels.
- Payroll staff lose the days before salary closure to interruptions.

A helpdesk turns this into a queue that can be measured, shared, escalated and improved.

## What categories should an HR helpdesk have?

Keep categories few enough that employees pick the right one and specific enough to route and report on. Two levels work well: a category and a sub-category.

| Category | Typical sub-categories | Usual owner |
| --- | --- | --- |
| Payroll | Payslip query, missing component, LOP dispute, arrears, bank account change | Payroll team |
| Tax | Investment declaration, proof submission, TDS query, Form 130 (old Form 16) | Payroll or tax team |
| Statutory | UAN, PF transfer or withdrawal, ESI card, nominee update | Payroll or HR operations |
| Leave and attendance | Balance query, missed punch, regularisation, comp off | HR operations |
| Employee records | Address, name, emergency contact, document update | HR operations |
| Letters | Employment verification, salary certificate, address proof | HR operations |
| Benefits | Insurance enrolment, dependant addition, claims, reimbursements | Benefits team |
| Policies | Clarification on a policy | HR business partner |
| Exit | Clearance status, F&F, relieving and experience letters | HR operations and payroll |
| IT and assets | Laptop, access, asset return | IT or admin |
| Confidential | Grievance, harassment, ethics concern | Designated senior HR only |

Two rules for the confidential category. First, restrict visibility to the named owners, not the whole HR team. Second, sexual harassment complaints must also follow the statutory route through the Internal Committee under the POSH Act; a helpdesk ticket can be the entry point but does not replace that process. See our [POSH compliance guide](/blog/posh-act-compliance-for-employers).

## How should SLAs be set for HR tickets?

Set two clocks for every ticket: **first response** (someone acknowledges and owns it) and **resolution** (the issue is fixed or answered). Measure them in working hours, and pause the clock only when you are waiting on the employee.

| Priority | Examples | First response | Resolution |
| --- | --- | --- | --- |
| P1 Critical | Salary not credited, wrong bank account used, statutory deduction error affecting many employees | 1 working hour | 1 working day |
| P2 High | Individual salary short-paid, LOP error, letter needed for a visa appointment within days | 4 working hours | 2 working days |
| P3 Standard | Payslip clarification, leave balance query, PF transfer help | 1 working day | 3 working days |
| P4 Low | Policy clarification, record update, general information | 1 working day | 5 working days |
| Confidential | Grievance or ethics concern | 1 working day, by a named senior | Per the grievance or POSH procedure |

These targets are a starting point, not a benchmark. Set yours from your current volumes and team size, then tighten them once you can meet them consistently. An SLA you routinely breach teaches employees to bypass the helpdesk.

## How should tickets be routed and escalated?

Routing decides who owns a ticket; escalation decides what happens when the owner does not act in time.

**Routing.** Map each category and sub-category to a team queue, then to an individual. For multi-location companies, add location or entity so that, for example, a professional tax query reaches someone who knows that state's rules. Avoid routing everything to a single HR generalist who then forwards it.

**Escalation.** A three-tier ladder is common:

- **L1:** the HR operations or payroll executive who owns the queue.
- **L2:** the team lead or specialist, triggered automatically when the first-response or resolution SLA is breached, or when L1 needs help.
- **L3:** the HR or payroll head, for repeated breaches, P1 incidents or sensitive cases.

**Reassignment.** When a ticket moves between teams, it should carry its full thread so the employee never has to repeat the question.

## How do you build an HR knowledge base?

A knowledge base deflects repeat questions before they become tickets. Start with the questions you receive most, not with your policy manual.

| Article | What it should answer | Useful link to include |
| --- | --- | --- |
| How to read your payslip | Each component, deductions, net pay | [Payslip format guide](/blog/payslip-format-india) |
| Why is my take-home different this month? | LOP, arrears, tax changes, PF changes | [Take-home salary calculator](/tools/take-home-salary-calculator) |
| How is my TDS worked out? | Regime, declarations, monthly projection | [TDS calculator](/tools/tds-calculator) |
| How do I submit investment proofs? | Deadlines, accepted documents, what happens if missed | [Proof submission guide](/blog/investment-declaration-proof-submission) |
| What is my UAN and how do I activate it? | UAN, KYC, transfer | [UAN explained](/blog/uan-explained) |
| How is my leave balance calculated? | Accrual, carry forward, encashment | Your leave policy |
| When will my F&F be paid? | Timeline, components, documents | [Full and final settlement](/blog/full-and-final-settlement-explained) |

Good practice for knowledge base articles:

- One question per article, with the answer in the first two lines.
- Written in plain English, and in Hindi or regional languages where much of the workforce prefers it.
- An owner and a review date on each article, especially those touching tax or statutory rules.
- Canned responses for agents that link to the article, so answers stay consistent.

## The salary-day peak: plan for it

Payroll queries are not evenly spread. They cluster in the two or three working days after payslips are published and salary is credited, and again around investment declaration and proof deadlines. Treat these as planned peaks.

### Worked example: sizing for the peak

A company has 1,200 employees. Its ticket log, kept for three months, shows:

- About 360 tickets a month in total, or 0.3 per employee.
- 55% are payroll and tax, so around 198 a month.
- 60% of payroll tickets arrive in the first three working days after salary credit, so about 119 tickets in three days, roughly 40 a day.
- Average handling time for a payroll ticket is 15 minutes.

Forty tickets at 15 minutes is 600 minutes, or 10 hours of handling a day, against a payroll team of three who are also closing the month. Without a plan, the SLA collapses.

Practical responses:

- **Publish a "what changed this month" note** with the payslip, covering arrears, revisions, new deductions and any statutory change, such as the move of the EPF wage ceiling to ₹25,000 from 17 September 2026.
- **Release payslips a day before salary credit** where your process allows, so queries start earlier and spread out.
- **Roster an extra handler** from HR operations for the peak days, using canned responses.
- **Fix root causes**: if 30 tickets ask about the same LOP calculation, the issue is attendance data or communication, not the helpdesk.

Also note the cost side. If an HR executive's loaded cost is ₹60,000 a month and they spend 40 hours a month on payroll queries, against roughly 176 working hours that is about 23% of their time, or around ₹13,600 a month spent on answering questions. These are illustrative figures; reducing repeat queries by a third saves time that can go to accuracy checks before the next run. Our [monthly payroll process](/blog/monthly-payroll-process-step-by-step) guide shows where those checks fit.

## Which helpdesk metrics should you track?

| Metric | Formula | What it tells you |
| --- | --- | --- |
| Ticket volume per 100 employees | Tickets in month ÷ headcount × 100 | Overall demand; rising volume often signals unclear policies |
| First-response SLA met | Tickets acknowledged within SLA ÷ total tickets × 100 | Responsiveness |
| Resolution SLA met | Tickets resolved within SLA ÷ total resolved × 100 | Capacity and process health |
| Average resolution time | Total resolution hours ÷ tickets resolved | Speed, by category |
| Reopen rate | Tickets reopened ÷ tickets resolved × 100 | Quality of answers |
| Volume by category | Count by category and sub-category | Where to fix root causes or add articles |
| Backlog ageing | Open tickets by age band | Hidden delays |
| Employee satisfaction | Average rating on closure | Experience, if response rates are reasonable |

Review them monthly with HR and payroll leads. The single most useful habit is looking at the top five sub-categories each month and asking which could be eliminated at source. For more on building HR dashboards, see our guide to [HR metrics and KPIs](/blog/hr-metrics-and-kpis).

## Rolling out the helpdesk

1. **Pick the categories and owners** with each team, and agree SLAs.
2. **Write the first 15 to 20 knowledge base articles** from your most common questions.
3. **Announce one channel** and stop answering queries elsewhere, politely redirecting to the helpdesk.
4. **Train agents** on categories, priorities, canned responses and confidentiality.
5. **Review after the first two salary cycles**, adjust SLAs and add articles.

## Common mistakes

- Creating 40 categories, so employees pick "Other" and routing fails.
- Letting HR keep answering on chat and email, so the helpdesk never becomes the single channel.
- Setting SLAs the team cannot meet in the salary-day peak.
- Giving the whole HR team visibility of confidential and grievance tickets.
- Treating a POSH complaint as an ordinary ticket instead of routing it to the Internal Committee.
- Measuring only closure speed, which rewards closing tickets without answering them.
- Never reviewing ticket categories for root causes.

## FAQs

**What is an HR helpdesk?** A tracked channel where employees raise HR, payroll and related queries as tickets, each with a category, owner, priority and deadline. It replaces scattered email and chat with a measurable queue.

**What SLA should an HR helpdesk have?** A common structure is first response within one working day and resolution within three to five working days for standard queries, with much shorter targets for salary not credited or other critical issues. Set targets from your own volumes and capacity.

**How do you reduce payroll queries after salary day?** Publish a short note on what changed in the month, release payslips early, keep knowledge base articles on common payslip and TDS questions, and fix the root causes behind repeat tickets.

**Should grievances go through the HR helpdesk?** The helpdesk can be an entry point with restricted visibility, but grievances must follow your grievance procedure, and sexual harassment complaints must go to the Internal Committee under the POSH Act.

**How many HR helpdesk agents do we need?** Work it out from ticket volume, average handling time and your SLA, and size for the salary-day peak rather than the monthly average.

**What is a good HR helpdesk reopen rate?** There is no universal figure. Track your own trend; a rising reopen rate in a category usually means unclear answers or a recurring process error.

## How NeevHR helps

The NeevHR [HR helpdesk](/features/helpdesk) gives employees a categorised ticket queue with priorities and assignees, first-response and resolution SLAs with live countdowns and breach flags, automatic escalation up a configured L1, L2 and L3 ladder, and a conversation thread per ticket with reassignment. Categories, priorities, SLA targets, escalation tiers and canned responses are configured by your HR admin, and reports show open and breaching tickets, resolution time and volume by category. Because [payroll](/payroll) and [leave](/features/leave) live in the same system, the payslip, leave and attendance data behind most queries sits in the same system the helpdesk team works in. To see it with your own categories, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 17 Oct 2026.*`,
};

export default post;
