import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "hrms-rfp-vendor-evaluation-questions",
  title: "HRMS RFP: questions to ask vendors before you buy",
  excerpt:
    "An HRMS RFP template for Indian companies: how to structure it, 50 questions to ask HRMS vendors by area, a weighted scoring matrix and scripted demo tips.",
  category: "product",
  author: "NeevHR Team",
  publishedAt: "2026-10-08",
  body: `An HRMS RFP (request for proposal) is a structured document that tells vendors what your organisation needs and asks each of them to answer the same questions in the same format. A good one has six parts: company context, scope, requirements, a question bank, a scripted demo and a commercial template. The questions that matter most for an Indian company are about payroll and statutory accuracy, configurability, integrations, security, implementation and the total cost over three years.

This guide gives you the structure, 50 questions grouped by area, a weighted scoring matrix and tips for running demos. Before you start, it helps to agree on scope using our guide to [what an HRMS should include](/blog/what-should-an-hrms-include), and to set a realistic budget with [HRMS cost in India](/blog/hrms-cost-in-india).

## Why write an HRMS RFP at all?

Most HRMS selections go wrong in the same way: each vendor shows its strongest screens, the evaluation team compares impressions rather than answers, and the gaps surface during implementation. An RFP fixes this by forcing every vendor to respond to your requirements, in your order, with evidence.

It also forces internal alignment. Writing the RFP makes HR, payroll, finance and IT agree on what "must have" means before anyone sees a demo.

## How should an HRMS RFP be structured?

| Section | What it contains | Who writes it |
| --- | --- | --- |
| 1. Company context | Headcount, legal entities, states, sites, employee types, current systems, growth plan | HR with finance |
| 2. Scope | Modules in scope now and later, users (HR, managers, employees), go-live target | HR head |
| 3. Requirements | Must-have, should-have and nice-to-have lists, each numbered | HR, payroll, IT |
| 4. Question bank | The questions below, answered in writing | All evaluators |
| 5. Demo script | Your scenarios, with your sample data, to be run live | Payroll and HR operations |
| 6. Commercials | A fixed template: subscription, implementation, integrations, support, renewal terms | Finance and procurement |
| 7. Process and timeline | Response deadline, demo dates, reference calls, decision date | Procurement |

Keep the requirements list short enough to evaluate. A list of 400 "must haves" teaches vendors to answer "yes" to everything. Twenty to forty genuine must-haves, each testable, is far more useful.

Ask vendors to answer every question with one of four responses: **available today**, **available by configuration**, **on the roadmap (with a date)**, or **not available**. Ban the word "customisable" unless they explain whether it means configuration by your HR admin or code written by the vendor.

## What questions should you ask an HRMS vendor?

The 50 questions below are grouped into seven areas. Delete what does not apply and add questions specific to your industry.

### Payroll and statutory compliance (10 questions)

1. Which statutory deductions are calculated in the core product: PF, ESI, professional tax, labour welfare fund and TDS on salary?
2. How does the system apply the EPF wage ceiling, now ₹25,000 a month from 17 September 2026, and can each entity choose to contribute on actual wages or the ceiling?
3. How are state-wise professional tax and LWF slabs maintained, and who updates them when a state changes its rates?
4. How was the product updated for the Labour Codes (in force since 21 November 2025) and the wage definition under the Code on Wages?
5. How does the product handle the Income-tax Act, 2025: tax year terminology, Form 130 (old Form 16) and Form 138 (old Form 24Q)?
6. Show how loss of pay, arrears, mid-month joiners and leavers, and loan recoveries flow into a payroll run.
7. What outputs are generated for filing: PF ECR, ESI contribution, PT and LWF returns, TDS returns, and bank transfer files?
8. Is there a verify-and-approve step with separation of duties between the person who runs payroll and the person who approves it?
9. How is full and final settlement calculated, including gratuity, leave encashment and notice recovery?
10. Are statutory updates included in the subscription, and how quickly are they released after a change is notified?

For background on what good looks like, see our [payroll compliance checklist for India](/blog/payroll-compliance-checklist-india).

### Configurability (8 questions)

11. Can an HR admin create a new leave type, attendance rule or salary structure without the vendor's help? Show it live.
12. Can different policies be assigned to different employee groups, such as by entity, location, grade or employment type?
13. Can we add custom fields to the employee record, and can they be used in reports and workflows?
14. How are approval workflows configured, and can they vary by department or amount?
15. Is the employee record effective-dated, so that a back-dated change keeps history rather than overwriting it?
16. Can we report "as of" a past date, for example headcount on 31 March?
17. What changes require a paid change request rather than configuration?
18. How are policy changes tested before they go live?

### Integrations (7 questions)

19. Which biometric attendance devices work with the product, and by what protocol?
20. How are bank salary files produced, and for which banks?
21. Can payroll produce a journal for our accounting system, and in what format?
22. Is there a documented API? How are API keys scoped?
23. Are outbound webhooks available for events such as new joiner or exit?
24. How do we import our existing data, and how do we export all of it if we leave?
25. Which integrations are standard and which are billed as custom work?

### Security and data protection (8 questions)

26. Where is our data hosted, and in which country and region?
27. How is one customer's data isolated from another's?
28. Which fields are encrypted at rest, beyond storage-level encryption?
29. Is multi-factor authentication available, and can we make it mandatory? Is single sign-on supported?
30. How do roles and data scopes limit what a manager or HR executive can see?
31. Which actions are recorded in the audit log, and can we export it?
32. Which certifications do you hold, and what evidence will you share during security review?
33. How does the product support our obligations under the DPDP Act, 2023, such as purpose, retention and access requests?

Our [HRMS security checklist](/blog/hrms-security-checklist) goes deeper on what evidence to ask for.

### Implementation (7 questions)

34. What is your typical implementation timeline for a company of our size and scope, and what does it depend on?
35. Who from your side runs the project, and how many hours a week will you need from our HR, payroll and IT teams?
36. What data do you migrate: employee master, leave balances, loan balances, year-to-date salary and tax?
37. How many parallel payroll runs do you recommend, and are they included?
38. How is training delivered for HR admins, managers and employees?
39. What does go-live support look like for the first two payroll cycles?
40. Can we speak to two customers of a similar size and industry?

### Pricing and commercials (5 questions)

41. Give a three-year cost with subscription, implementation, integrations, support and any usage charges, using our headcount plan.
42. Who counts as a billable employee: active, exited mid-month, contractors, interns?
43. How is renewal pricing set, and is the increase capped?
44. What is included in the subscription and what is chargeable later (new entities, new reports, policy changes)?
45. What are the exit terms, including data export format and fees?

### Support and roadmap (5 questions)

46. What are the support hours, channels and response times, especially in the days around payroll closure?
47. Is there a named account manager or support contact?
48. How are product updates released, and do they ever require downtime during payroll?
49. What is on the roadmap for the next twelve months, and which items are committed?
50. How do customers raise feature requests, and how are they prioritised?

## How do you score HRMS vendors? A weighted matrix

Agree on the weights before you see the first demo, so that a polished presentation cannot reshape your priorities. The weights below are an illustrative starting point for a mid-sized Indian employer where payroll is in scope; adjust them to your situation.

| Area | Weight | Vendor A score (1 to 5) | Vendor A weighted | Vendor B score (1 to 5) | Vendor B weighted |
| --- | --- | --- | --- | --- | --- |
| Payroll and statutory | 25% | 4 | 1.00 | 3 | 0.75 |
| Configurability | 15% | 3 | 0.45 | 4 | 0.60 |
| Core HR, attendance and leave | 15% | 4 | 0.60 | 4 | 0.60 |
| Integrations | 10% | 3 | 0.30 | 4 | 0.40 |
| Security and data protection | 10% | 4 | 0.40 | 3 | 0.30 |
| Implementation approach | 10% | 4 | 0.40 | 3 | 0.30 |
| Three-year cost | 10% | 3 | 0.30 | 4 | 0.40 |
| Support and references | 5% | 4 | 0.20 | 3 | 0.15 |
| **Total** | **100%** | | **3.65** | | **3.50** |

Two rules make the matrix trustworthy:

- **Define the scale.** For example, 5 = shown live with our data, 4 = shown live with demo data, 3 = available by configuration but not shown, 2 = roadmap with a date, 1 = not available.
- **Score independently, then discuss.** Each evaluator scores alone. Average the scores and discuss only where they differ by two points or more.

Treat any must-have scored 1 or 2 as a knockout, regardless of the total.

## How do you run a scripted HRMS demo?

A scripted demo means the vendor shows your scenarios, not their sales flow. Send the script one week before, with anonymised sample data.

| Scenario | What to ask the vendor to show | What a good answer looks like |
| --- | --- | --- |
| New joiner on the 18th | Offer to onboarding to first payroll, prorated | Prorated salary and statutory deductions without manual edits |
| Back-dated promotion | Promotion effective two months ago | Arrears calculated; history preserved, not overwritten |
| Employee in a new state | Transfer from Maharashtra to Karnataka | PT switches to the new state's slab from the right month |
| Leave policy change | New leave type for one location only | HR admin configures it live in minutes |
| Resignation | Notice, clearance, F&F with gratuity and encashment | One flow, with each line of the settlement explained |
| Payroll approval | Run, exceptions, approve, publish | Separate maker and checker; exceptions flagged before approval |
| Report | Attrition by department, last 12 months | Built live, with drill-down to the employees |

Practical tips:

- **Insist on live configuration.** Ask the presenter to hand control to their configuration consultant, not a pre-built screen.
- **Put your payroll head in the room.** They will spot a hand-waved statutory answer in seconds.
- **Time-box each scenario** to ten or fifteen minutes and note what was skipped.
- **Ask "show me" not "can it".** "Can it" always gets a yes.
- **Record which answers were demonstrated** and which were only stated, and score accordingly.

For a sense of how implementation actually runs once you have chosen, see our [HRMS implementation](/hrms-implementation) page and [HRMS data migration](/hrms-data-migration) guide.

## Common mistakes

- Copying a 400-line requirements list from the internet, which every vendor answers "yes" to.
- Letting the vendor run their standard demo instead of your script.
- Deciding the scoring weights after the demos, when the most impressive presentation sways them.
- Comparing first-year licence fees instead of three-year total cost.
- Leaving payroll and IT out of the evaluation until the contract stage.
- Accepting "customisable" without asking who does the work and who pays for it.
- Skipping reference calls with customers of a similar size and industry.

## FAQs

**What should an HRMS RFP include?** Company context, scope, a numbered requirements list, a question bank, a scripted demo, a commercial template and the evaluation timeline. Each vendor should answer in the same format so responses can be compared side by side.

**How many vendors should receive an HRMS RFP?** Four to six is a practical number. Fewer limits your comparison; more creates evaluation work without improving the decision. Shortlist two or three for scripted demos.

**What is the most important question to ask an HRMS vendor in India?** Ask how statutory changes are handled: who updates PF, ESI, PT, LWF and TDS rules, how quickly, and whether it is included in the subscription. Statutory change is constant, and its cost lands on you if it is not covered.

**How do you compare HRMS pricing across vendors?** Use your own three-year headcount plan and a fixed commercial template covering subscription, implementation, integrations, support, usage charges and renewal terms. Our [HRMS cost guide](/blog/hrms-cost-in-india) has a worked three-year example.

**Is an RFP necessary for a 500-employee company?** A full formal RFP may be more than you need, but the core of it, a short must-have list, a question bank and a scripted demo, is worth doing at any size. See our guide to [HRMS for 500 employees](/blog/hrms-for-500-employees).

## How NeevHR helps

NeevHR is built to be evaluated this way. We are happy to answer your RFP in writing and run your demo script with your scenarios. [Payroll](/payroll) covers PF, ESI, PT, LWF and TDS in the core with a compute, verify, approve and publish run; [statutory compliance](/features/compliance) tracks every filing on a due-date calendar; and [employee records](/features/employees) are effective-dated so history is never overwritten. Our [security](/security) page states plainly what is in place and what is not yet available, including single sign-on, and our [integrations](/integrations) page lists what works today. To see it against your own scenarios, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 17 Oct 2026.*`,
};

export default post;
