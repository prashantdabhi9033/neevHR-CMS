import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "what-should-an-hrms-include",
  title: "What should an HRMS include? A checklist for Indian companies",
  excerpt:
    "A module-by-module HRMS checklist for Indian companies: the must-haves, the nice-to-haves, and the statutory payroll capabilities you cannot do without.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `At minimum, an HRMS for an Indian company should include an effective-dated employee record, attendance and leave, payroll that computes PF, ESI, professional tax, LWF and TDS correctly and produces the statutory files, full and final settlement, employee self-service, role-based access and an audit trail. Performance, recruitment, compensation planning and advanced analytics are valuable, but many companies can phase them in after payroll is stable. The checklist below separates must-haves from nice-to-haves, module by module.

## How to use this checklist

Treat a **must-have** as something you cannot run a correct, compliant month without. Treat a **nice-to-have** as something that saves time or improves decisions but can wait. Adjust for your business: a manufacturer running three shifts will move several attendance items into must-have, and a company hiring 300 people a year will do the same for recruitment.

Use the list in two ways. First, to write your requirements before you speak to vendors. Second, as a script for demos: ask each vendor to show the item working, with your data where possible, rather than ticking a box on a spreadsheet.

## India statutory must-haves

These are non-negotiable for most Indian employers. If a product cannot do them natively, you will be doing them by hand outside the system.

| Requirement | What the HRMS should do |
| --- | --- |
| PF | 12% employee and 12% employer on PF wages; employer EPS share of 8.33% capped at the wage ceiling, which is ₹25,000 a month from 17 September 2026 (maximum about ₹2,083; it was ₹15,000 and ₹1,250 before); EDLI 0.5% and admin 0.5%; a choice of contributing on actual wages or on the ceiling; ECR file for deposit by the 15th of the following month ([EPFO](https://www.epfindia.gov.in/)) |
| ESI | 0.75% employee and 3.25% employer for employees with gross wages up to ₹21,000 (₹25,000 for persons with disability); coverage continued to the end of the contribution period (April to September, October to March) when wages cross the limit mid-period; contribution file for deposit by the 15th ([ESIC](https://www.esic.gov.in/)) |
| Professional tax | State slabs applied by each employee's work location, only in states that levy PT, with state-specific deduction months and challans |
| LWF | State-specific employee and employer amounts and periods, half-yearly in some states and annual in others |
| TDS on salary | Old and new regime calculation, regime choice, investment declarations (Form 12BB, now Form 124) and proof verification, previous-employer income, monthly projection; deposit by the 7th of the following month (30 April for March) ([Income Tax Department](https://www.incometax.gov.in/)) |
| Tax returns and certificates | Quarterly TDS return file, Form 24Q (now Form 138), due 31 July, 31 October, 31 January and 31 May, that validates in the official validation utility ([Protean](https://www.protean-tinpan.com/)); Form 16 (now Form 130) for employees by 15 June |
| Gratuity | 15/26 formula on last drawn wages, 5 years of service (1 year for fixed-term employees under the Code on Social Security), ₹20 lakh ceiling |
| Statutory bonus | Bonus between the statutory minimum of 8.33% and maximum of 20% for eligible employees (the eligibility limit is currently notified at ₹21,000 a month), using the calculation ceiling that applies to your establishment |
| Maternity | 26 weeks of maternity leave for eligible employees (12 weeks where there are already two or more surviving children), reflected in leave and payroll |
| Minimum wages | State and category-wise minimum wages checked against actual pay |

Recent legal changes make configurability essential. The four Labour Codes came into force on 21 November 2025: the Code on Social Security, 2020 now covers EPF, ESI, gratuity and maternity, and the Code on Wages, 2019 covers minimum wages, payment of wages and bonus. The EPF Act, 1952 has been repealed, and EPFO now runs the EPF Scheme 2026, EPS 2026 and EDLI Scheme 2026 under the Code, with the same contribution rates and the same 15th-of-the-month due date.

The Codes also introduce a uniform definition of wages, under which excluded allowances beyond half of total remuneration are added back to wages. The Ministry of Labour's FAQs indicate this definition applies to PF, ESI and gratuity, so the contribution base can change even when salaries do not. Central Rules were notified in May 2026, but State rules are being notified progressively. On top of that, the EPF wage ceiling rose to ₹25,000 from 17 September 2026, which makes September 2026 a split month (₹15,000 up to 16 September and ₹25,000 from 17 September); EPFO's operational guidance on handling that split was still awaited at the time of writing. Your HRMS must let you change wage bases, ceilings and effective dates without a software release. Track updates on the [Ministry of Labour](https://labour.gov.in/) site.

Separately, the Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026. Familiar names such as Form 16, Form 24Q and the 87A rebate are still widely used, but section and form numbers have changed (Form 16 is now Form 130, Form 24Q is Form 138 and Form 12BB is Form 124), so confirm your vendor has updated both the calculation logic and the references on employee documents.

## Module-by-module checklist

| Module | Must-have | Nice-to-have |
| --- | --- | --- |
| Core HR | One record per employee; effective-dated history; multiple legal entities, locations and departments; document storage | Custom fields; org chart; bulk changes |
| Onboarding | Collection of PAN, UAN, bank and ID details; joining checklist; data flows into payroll without re-keying | Pre-joining portal; welcome tasks for IT and admin |
| Attendance | Biometric or web punches; shifts; LOP calculation; regularisation with approval | Rosters; overtime rules; geo-fenced mobile punches |
| Leave | Policy-based accrual, proration for joiners, carry-forward, encashment; approvals | Leave calendar; team availability views |
| Payroll | Configurable salary structures; arrears; LOP reversal; loans with EMI recovery; payslips; bank payment file | Variable pay; payroll exception report; salary simulation |
| Statutory outputs | PF ECR, ESI file, PT and LWF challans, Form 24Q file, Form 16 | Pre-filled registers for inspections |
| Controls | Separate compute, verify, approve and publish steps; audit log of changes | Maker-checker on sensitive changes such as bank details |
| Exit | Resignation and approval; clearance; full and final settlement including gratuity, leave encashment and recoveries | Exit interviews; attrition analytics |
| Self-service | Payslips, leave, attendance correction and tax declarations on the web | Mobile app; approvals on mobile |
| Performance | Can wait for phase two for many companies | Goals, reviews, 360 feedback, 9-box |
| Recruitment | Needed early only if hiring volume is high | Requisitions, pipeline, interviews, offers, referrals |
| Compensation | Increment letters and effective-dated revisions | Merit cycles with budgets and guidelines |
| Expenses | Needed if claims are frequent | Policy limits, approvals, reimbursement through payroll |
| Reports | Headcount, payroll cost, statutory and leave reports; export | Custom report builder; dashboards |
| Security | Role-based access with data scopes; field-level masking of PAN, Aadhaar and bank details; MFA | Single sign-on (a must-have for some IT teams); IP restrictions |
| Integrations and data | Accounting journal export; CSV import with validation | API and webhooks for other systems |

## Where the checklist matters most: payroll and exit

Payroll gets the attention, but exit is where missing capabilities hurt quietly. A full and final settlement combines salary, leave, gratuity and recoveries in one statement, often under time pressure: under the Code on Wages, wages due on resignation, removal or retrenchment must be paid within two working days. If the HRMS cannot produce the settlement, HR rebuilds it in a spreadsheet for every leaver.

Here is a worked example. An employee resigns with a last working day of 12 September 2026, after 7 years and 8 months of service. Last drawn basic plus DA is ₹40,000 a month and monthly gross is ₹70,000. The company pays salary on a 30-day basis, encashes leave on basic divided by 30, and the employee has 18 days of leave to encash and a ₹15,000 loan outstanding.

- Salary for 12 days: ₹70,000 × 12 ÷ 30 = ₹28,000
- Leave encashment: ₹40,000 ÷ 30 × 18 = ₹24,000
- Gratuity: service of 7 years and 8 months counts as 8 years, because more than six months in the final year rounds up. ₹40,000 × 15 ÷ 26 × 8 = ₹1,84,615 (rounded)
- Loan recovery: minus ₹15,000

Net settlement before statutory deductions and TDS: ₹28,000 + ₹24,000 + ₹1,84,615 minus ₹15,000 = ₹2,21,615.

For simplicity this example uses basic plus DA as the gratuity base. Under the Labour Codes, the wage base follows the new definition of wages, so confirm how it applies to your salary structure. A capable HRMS calculates each of these lines from the employee record, applies PF, PT and TDS where they apply, and produces the settlement statement. You can check figures like these with the [gratuity calculator](/tools/gratuity-calculator), and see how exit works in NeevHR on the [exit and full and final page](/features/exit).

## Common mistakes

- **Treating statutory outputs as optional.** A payroll that computes PF correctly but cannot produce the ECR file leaves you re-keying data into another format every month.
- **Checking for a module, not a capability.** "Has attendance" means little. Ask whether punches from your devices arrive automatically and whether LOP flows into payroll.
- **Ignoring multi-state rules.** PT and LWF depend on work location. A single-state setup copied across states produces wrong deductions.
- **Buying everything in phase one.** Launching performance, recruitment and payroll together stretches a small HR team. Stabilise payroll first.
- **Skipping controls.** Without separation between the person who computes payroll and the person who approves it, errors and fraud are harder to catch.

## FAQs

**Should payroll be inside the HRMS or a separate tool?** Inside, where possible. Payroll depends on attendance, leave and the employee record, and every hand-off between systems is a place where data can go out of sync.

**Is a mobile app a must-have?** For a largely desk-based workforce, web self-service covers most needs. For shop-floor, field or retail staff without laptops, a mobile app moves closer to a must-have, so weigh it against your workforce mix.

**Do we need performance management in phase one?** Usually not. Most companies get more value from a correct, on-time payroll first and introduce goals and reviews in the next cycle.

**How do we test statutory accuracy before buying?** Run a parallel payroll: give the vendor a recent month's real inputs and compare every employee's PF, ESI, PT and TDS with what you actually paid. See [India payroll](/india-payroll) for the rules to check against.

## How NeevHR helps

NeevHR covers the must-have list above in one system: an effective-dated employee record across multiple entities, attendance with biometric devices, leave, payroll with PF, ESI, PT, LWF and TDS, and statutory outputs including the PF ECR, ESIC file, challans, Form 24Q text file and Form 16. Payroll runs through separate compute, verify, approve and publish steps, and exit includes full and final settlement with gratuity, leave encashment and recoveries. Web self-service is available today; the mobile app is coming soon. [Book a demo](/demo) and bring this checklist.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
