// Seed blog content. Accurate India HR/payroll/compliance articles in Markdown.
// Figures are indicative and were correct for FY 2026-27 at the time of writing;
// always confirm current thresholds before acting.

export type SeedPost = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "payroll"
    | "compliance"
    | "time"
    | "performance"
    | "recruitment"
    | "hr-strategy"
    | "product";
  author: string;
  publishedAt: string;
  body: string;
};

export const seedPosts: SeedPost[] = [
  {
    slug: "epf-explained-contribution-uan-withdrawal",
    title: "EPF explained: contributions, UAN and withdrawal",
    excerpt:
      "How the Employees' Provident Fund works in India, what each side contributes, and how the EPS split and UAN fit together.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-02",
    body: `The Employees' Provident Fund (EPF) is the backbone of retirement savings for salaried Indians. If you run payroll for an establishment with 20 or more employees, EPF is almost certainly mandatory for you. This guide walks through how contributions are split, what the wage ceiling means, and how the UAN ties everything together.

## Who is covered

EPF applies to establishments with 20 or more employees. An employee earning basic wages of ₹15,000 per month or less must be enrolled. Employees above that threshold can still be covered if the employer agrees, and most established employers do cover everyone.

## How the 12% split works

Both the employee and the employer contribute 12% of PF wages, where PF wages usually means Basic + Dearness Allowance. The employee's full 12% goes to the provident fund. The employer's 12%, however, is split.

| Component | Rate | On |
| --- | --- | --- |
| Employee PF | 12% | PF wages |
| Employer EPS (pension) | 8.33% | PF wages capped at ₹15,000 (so up to ₹1,250) |
| Employer EPF | Balance of 12% | Remainder after EPS |

On top of this, the employer pays EDLI and administrative charges of roughly 0.5% each. Many employers cap PF wages at the ₹15,000 ceiling, which makes the minimum monthly contribution ₹1,800 per side.

## The UAN

The Universal Account Number (UAN) is a 12-digit number that stays with an employee for life, across employers. All the member IDs from different jobs link under one UAN, so an employee sees their full PF history in one place and can transfer balances online when they switch jobs.

## Withdrawal and interest

EPF earns interest declared each year by the EPFO. The balance can be withdrawn fully on retirement or after a set period of unemployment, and partial advances are allowed for specific reasons such as housing, medical needs or education. Withdrawals before five years of continuous service can attract tax, so timing matters.

## Getting it right in payroll

The common mistakes are applying the wrong wage base, not capping the EPS portion at ₹15,000, and forgetting the ECR filing and challan each month. A payroll system that computes PF at source and generates the ECR keeps this clean. In NeevHR, PF is computed for every employee with the correct EPS and EPF split, and the ECR is ready to file each cycle.`,
  },
  {
    slug: "esi-explained-eligibility-benefits-contribution",
    title: "ESI explained: eligibility, benefits and contribution",
    excerpt:
      "Who ESI covers, the ₹21,000 wage limit, the employee and employer rates, and the benefits your team gets in return.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-08-05",
    body: `The Employees' State Insurance (ESI) scheme gives medical and cash benefits to lower-paid workers and their dependants. For HR, it is a monthly obligation that is easy to get wrong when salaries cross the threshold mid-year.

## Who is eligible

ESI covers employees earning gross wages of up to ₹21,000 per month (₹25,000 for employees with disabilities) in establishments the scheme applies to. Eligibility is checked at the start of a contribution period, and an employee who is covered stays covered until the end of that period even if their wages rise.

## Contribution rates

| Contributor | Rate | On |
| --- | --- | --- |
| Employee | 0.75% | Gross wages |
| Employer | 3.25% | Gross wages |

The contribution is due by the 15th of the following month, along with the ESI return.

## What the scheme provides

ESI is not just a deduction. Covered employees and their families get access to a network of ESIC hospitals and dispensaries, plus cash benefits during sickness, maternity, and in the event of employment injury or disablement. This is often the most valued benefit for frontline staff.

## The mid-year threshold trap

The most common error is dropping an employee out of ESI the moment a mid-year increment pushes them over ₹21,000. Because eligibility is fixed for the contribution period, you must continue deductions until the period ends. Getting this wrong triggers shortfalls and interest.

## Keeping it clean

A payroll system that tracks the contribution period and applies the wage limit correctly avoids both over-deduction and under-remittance. NeevHR computes ESI on gross wages, respects the contribution period, and produces the return each month.`,
  },
  {
    slug: "professional-tax-by-state-india",
    title: "Professional Tax in India: a state-by-state guide",
    excerpt:
      "Professional Tax is a state subject, so the slabs differ everywhere. Here is how a few major states compare, and what payroll needs to handle.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-08-08",
    body: `Professional Tax (PT) is a tax on income from a profession, trade or employment, levied by state governments. Because it is a state subject, the slabs, the maximum, and even whether PT exists at all vary across India. If you employ people in multiple states, payroll has to apply the right slab to each.

## States with and without PT

Several states do not levy PT at all, including Delhi, Haryana, Uttar Pradesh, Rajasthan and Uttarakhand. Where PT does apply, the annual maximum is capped at ₹2,500 per person.

## How a few states compare

The figures below are indicative monthly PT for salaried employees. Always confirm current slabs with the state authority.

| State | Indicative monthly PT |
| --- | --- |
| Maharashtra | Nil up to ₹7,500; ₹175 up to ₹10,000; ₹200 above (₹300 in the last month) |
| Karnataka | ₹200 above ₹25,000 |
| West Bengal | Banded from ₹110 to ₹200 |
| Gujarat | ₹80 to ₹200 by band |
| Tamil Nadu | Half-yearly, ₹135 to ₹690 |
| Telangana / Andhra Pradesh | ₹150 to ₹200 |

## Filing and due dates

PT is deducted from salary and deposited with the state, typically by the 21st of the following month, along with a return. Some states file half-yearly rather than monthly.

## The multi-state challenge

The hard part is not the deduction, it is applying the correct state slab to each employee based on their work location, and keeping up when a state revises its bands. A payroll system with state-wise PT logic removes the guesswork. NeevHR holds PT slabs per state and applies them by work location automatically.`,
  },
  {
    slug: "gratuity-in-india-eligibility-formula-tax",
    title: "Gratuity in India: eligibility, formula and tax",
    excerpt:
      "When gratuity is payable, the 15/26 formula, the ₹20 lakh cap, and how gratuity is taxed on exit.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-11",
    body: `Gratuity is a lump sum an employer pays for long service, governed by the Payment of Gratuity Act, 1972. It is one of the larger numbers in a full and final settlement, so getting the calculation right matters.

## Who is eligible

An employee generally becomes eligible for gratuity after five years of continuous service with the same employer. The five-year rule is waived if service ends due to death or disablement.

## The formula

For establishments covered by the Act, gratuity is calculated as:

> Gratuity = (15 × last drawn salary × years of service) ÷ 26

Here salary means Basic + Dearness Allowance, and 26 represents the working days in a month. Any part of a year beyond six months counts as a full year, so 7 years and 8 months is treated as 8 years.

## A worked example

For a last drawn Basic + DA of ₹60,000 and 8 years of service:

| Step | Value |
| --- | --- |
| 15 × 60,000 × 8 | 72,00,000 |
| ÷ 26 | ₹2,76,923 |

## The cap and the tax

The maximum gratuity payable under the Act is ₹20,00,000. On the tax side, gratuity received is exempt up to prescribed limits under Section 10(10), with the exemption depending on whether the employee is covered by the Act. Amounts above the exempt limit are taxable.

## In payroll

Gratuity is accrued over the employment and paid at exit as part of the full and final settlement. NeevHR works out gratuity in the F&F settlement, applies the exemption, and shows the net in words for the letter.`,
  },
  {
    slug: "statutory-bonus-payment-of-bonus-act",
    title: "Statutory bonus under the Payment of Bonus Act",
    excerpt:
      "Who is eligible, the 8.33% to 20% range, the ₹7,000 calculation ceiling, and the registers you must keep.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-08-14",
    body: `The Payment of Bonus Act, 1965 requires eligible employers to share a minimum bonus with employees, linked loosely to profits. It is an annual obligation that many growing companies overlook until an audit.

## Who is eligible

Employees drawing wages (Basic + DA) up to ₹21,000 per month are eligible, provided they have worked at least 30 days in the year. Above that wage, employees fall outside the Act, though employers may still pay a discretionary bonus.

## How much

The bonus is a minimum of 8.33% and a maximum of 20% of the calculation wage. The calculation wage is the lower of the employee's Basic + DA and ₹7,000 (or the minimum wage for the employment, whichever is higher).

| Item | Value |
| --- | --- |
| Minimum bonus | 8.33% |
| Maximum bonus | 20% |
| Calculation ceiling | ₹7,000 or minimum wage |
| Eligibility ceiling | ₹21,000 per month |

## Allocable surplus

The exact percentage between 8.33% and 20% depends on the allocable surplus, computed under the Act's schedules from gross profit after prescribed prior charges. Loss-making units still pay the 8.33% minimum.

## Registers and returns

The Act requires Forms A, B, C and D to be maintained: the computation of allocable surplus, set-on and set-off, the bonus paid register, and the annual return. These are the documents an inspector will ask for.

## In practice

NeevHR configures the statutory bonus plan, previews eligible employees, and generates Forms A to D, so the annual bonus run is a few clicks rather than a spreadsheet marathon.`,
  },
  {
    slug: "tds-on-salary-old-vs-new-regime-fy-2026-27",
    title: "TDS on salary: old vs new regime for FY 2026-27",
    excerpt:
      "The new-regime slabs, the standard deduction, the Section 87A rebate, and how to think about which regime suits an employee.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-18",
    body: `Every employer deducts tax at source (TDS) on salary and deposits it monthly. The choice between the old and new tax regimes changes how much you deduct, so payroll needs both.

## The new regime slabs

The new regime is now the default. Indicative slabs for FY 2026-27 are below. Confirm the current year's numbers before finalising payroll.

| Taxable income | Rate |
| --- | --- |
| Up to ₹4,00,000 | Nil |
| ₹4,00,001 to ₹8,00,000 | 5% |
| ₹8,00,001 to ₹12,00,000 | 10% |
| ₹12,00,001 to ₹16,00,000 | 15% |
| ₹16,00,001 to ₹20,00,000 | 20% |
| ₹20,00,001 to ₹24,00,000 | 25% |
| Above ₹24,00,000 | 30% |

The new regime allows a standard deduction of ₹75,000 from salary, and the Section 87A rebate effectively makes tax nil for resident individuals with taxable income up to ₹12,00,000.

## The old regime

The old regime has slabs of 5%, 20% and 30%, a standard deduction of ₹50,000, and a rebate that makes tax nil up to ₹5,00,000 of taxable income. Its advantage is that it allows deductions like 80C (up to ₹1,50,000), HRA exemption, and home loan interest.

## Which regime suits whom

There is no universal answer. Employees with significant deductions, such as high HRA, home loan interest and 80C investments, may still come out ahead on the old regime. Employees with few deductions usually pay less under the new regime. Most payroll teams let employees declare their choice at the start of the year and switch once if allowed.

## In payroll

TDS should be spread evenly across the year based on projected income and declarations, then trued up. NeevHR computes TDS under both regimes from the employee's declaration and reconciles through Form 24Q and Form 16.`,
  },
  {
    slug: "hra-exemption-explained",
    title: "HRA exemption explained, with examples",
    excerpt:
      "The least-of-three rule under Section 10(13A), how metro and non-metro differ, and a worked example.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-21",
    body: `House Rent Allowance (HRA) is one of the most useful exemptions for salaried employees who pay rent, available under the old tax regime. The exemption is not simply the HRA you receive, it is the least of three amounts.

## The least-of-three rule

Under Section 10(13A), the exempt HRA is the lowest of:

1. The actual HRA received
2. Rent paid minus 10% of Basic + DA
3. 50% of Basic + DA for metro cities, or 40% for non-metro

Only the metro cities of Delhi, Mumbai, Kolkata and Chennai get the 50% figure.

## A worked example

Take a monthly Basic + DA of ₹40,000, HRA received of ₹20,000, and rent paid of ₹22,000 in a metro.

| Test | Amount |
| --- | --- |
| Actual HRA | ₹20,000 |
| Rent minus 10% of basic | ₹18,000 |
| 50% of basic (metro) | ₹20,000 |
| Exempt (least of three) | ₹18,000 |

So ₹18,000 is exempt and ₹2,000 of HRA is taxable each month.

## Documentation

Employees claiming HRA must actually pay rent and, above a threshold of annual rent, provide the landlord's PAN. Rent paid to family members is allowed but is scrutinised, so genuine arrangements and receipts matter.

## In payroll

The exemption is best computed on declared rent and trued up with proofs. NeevHR captures the declaration, computes the exemption, and reduces taxable income accordingly, so TDS reflects it through the year.`,
  },
  {
    slug: "salary-structure-ctc-breakup-explained",
    title: "Salary structure and CTC breakup, explained",
    excerpt:
      "What sits inside Cost to Company, how Basic drives everything, and a sample breakup from CTC to in-hand.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-24",
    body: `Cost to Company (CTC) is the total an employer spends on an employee in a year. It is not the same as take-home pay, and the gap surprises new joiners every time. Understanding the structure helps HR design fair, tax-efficient packages.

## What CTC includes

CTC bundles together fixed pay, allowances, employer statutory contributions and often variable pay. The key point is that employer PF and gratuity are part of CTC but never hit the employee's bank account as salary.

## Why Basic matters

Basic salary is the anchor. PF, gratuity, HRA limits and bonus calculations all key off Basic. A very low Basic reduces statutory contributions but also reduces retirement savings and can fall foul of the Code on Wages, which expects allowances to not exceed half of total remuneration.

## A sample breakup

For a CTC of ₹12,00,000 with Basic at 50%:

| Component | Amount per year |
| --- | --- |
| Basic (50% of CTC) | ₹6,00,000 |
| HRA and other allowances | ₹5,49,540 |
| Employer PF | ₹21,600 |
| Gratuity accrual | ₹28,860 |
| Gross (CTC minus employer PF and gratuity) | ₹11,49,540 |

From gross, the employee's own PF, professional tax and TDS are deducted to arrive at in-hand pay.

## Designing structures

Good structures balance take-home, tax efficiency and statutory adequacy. Flexible benefit plans let employees allocate parts of their pay to tax-friendly heads. NeevHR lets you define pay structures as reusable components and assign them to employee groups, so a new grade or entity does not need a new spreadsheet.`,
  },
  {
    slug: "form-16-explained",
    title: "Form 16 explained: what it is and what to check",
    excerpt:
      "Part A and Part B, when Form 16 is due, and how it reconciles with the TDS you deposited during the year.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-08-27",
    body: `Form 16 is the certificate of tax deducted at source on salary that an employer issues to each employee for a financial year. Employees use it to file their income tax returns, so accuracy and timeliness matter.

## Part A and Part B

Form 16 has two parts.

- Part A shows the employer and employee details, the period of employment, and a quarter-by-quarter summary of tax deducted and deposited. It is generated from the TRACES portal and reflects the TDS challans you actually filed.
- Part B is the detailed computation of salary, exemptions, deductions and tax, prepared by the employer.

## When it is due

Form 16 for a financial year (April to March) is generally issued by 15 June of the following year, after the fourth-quarter TDS return is filed.

## What to reconcile

The most common issue is a mismatch between the tax shown in Part A and the tax actually deposited. If a quarter's challan was short or filed late, Part A will show it, and the employee's return will not match. Reconciling TDS deposited against payroll each quarter avoids this.

## Employees without PAN

An employee without a valid PAN cannot be issued a proper Form 16, and TDS on their salary is deducted at a higher rate. Collecting PAN at onboarding prevents a year-end scramble.

## In practice

NeevHR generates Form 16 per employee, reconciles Part A deposits from filed challans, and flags any shortfall or missing PAN before you distribute.`,
  },
  {
    slug: "leave-types-in-india-explained",
    title: "Leave types in India, explained",
    excerpt:
      "Earned, casual and sick leave, plus maternity and paternity, and how accrual, carry-forward and encashment usually work.",
    category: "time",
    author: "NeevHR Team",
    publishedAt: "2026-08-30",
    body: `Leave policy is where HR flexibility meets statutory floors. India has no single national leave law for private employment, so most rules come from state Shops and Establishments Acts and the Factories Act, with company policy layered on top.

## The common leave types

| Type | Typical purpose |
| --- | --- |
| Earned or Privilege leave (EL/PL) | Planned time off, accrues monthly, usually carries forward and can be encashed |
| Casual leave (CL) | Short, unplanned absences, usually lapses each year |
| Sick leave (SL) | Illness, may need a certificate beyond a few days |
| Maternity leave | Statutory, 26 weeks under the Maternity Benefit Act |
| Paternity leave | Company policy, no central statutory mandate for private firms |
| Comp-off | Time off in lieu of working a holiday or week-off |
| Leave without pay (LWP) | Unpaid absence when balances are exhausted |

## Accrual and carry-forward

Earned leave typically accrues monthly and carries forward up to a cap set by state law and policy. Casual and sick leave often lapse annually. Encashment usually applies to earned leave, valued on Basic + DA and paid on exit or once a year.

## Sandwich and holiday rules

Policies differ on whether holidays and week-offs that fall inside or around a leave count as leave (the sandwich rule). This choice materially affects balances and payroll, so it should be explicit.

## In practice

The value of a good leave system is that policy is enforced consistently: accrual, proration for joiners and leavers, carry-forward caps and encashment all as rules, not manual math. NeevHR models every leave type with its own accrual and rules, and employees see live balances.`,
  },
  {
    slug: "maternity-benefit-act-for-employers",
    title: "The Maternity Benefit Act: what employers must do",
    excerpt:
      "The 26-week entitlement, eligibility, work-from-home and creche provisions, and the practical HR steps.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-09-01",
    body: `The Maternity Benefit Act, as amended, gives women employees paid leave and protections around childbirth. For employers, compliance is both a legal duty and a retention lever.

## The core entitlement

Eligible women are entitled to 26 weeks of paid maternity leave for the first two children, of which up to 8 weeks can be taken before the expected delivery. For a third child, the entitlement is 12 weeks.

## Eligibility

A woman must have worked for the employer for at least 80 days in the 12 months preceding the expected date of delivery to be eligible for the benefit.

## Beyond leave

The Act also covers:

- Adoption and commissioning mothers, with 12 weeks of leave
- An optional work-from-home arrangement after leave, where the role allows and by mutual agreement
- A creche facility requirement for establishments above a headcount threshold, with visits permitted during the day

## Protections

An employer cannot dismiss or disadvantage a woman because of maternity leave, and the leave period counts as continuous service for benefits like gratuity.

## The HR checklist

Track eligibility from the 80-day rule, plan the leave and cover, keep pay running through the period, and handle the return smoothly. NeevHR models maternity as a leave type with its own rules and keeps service continuity intact for downstream benefits.`,
  },
  {
    slug: "posh-act-compliance-for-employers",
    title: "POSH compliance: a practical guide for employers",
    excerpt:
      "The Internal Committee, the policy, mandatory training, and the annual report every covered employer must file.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-09-03",
    body: `The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, known as POSH, requires every employer with 10 or more employees to build a safe, accountable workplace. Compliance is not optional, and gaps carry penalties.

## The four pillars

1. A written POSH policy, communicated to all employees
2. An Internal Committee (IC) with the required composition, including an external member
3. Awareness and training for employees, and orientation for IC members
4. A defined complaint, inquiry and redressal process with strict timelines

## The Internal Committee

The IC must be constituted at each location with 10 or more employees. It is chaired by a senior woman employee and includes an external member from an NGO or with relevant experience, to ensure independence.

## Training and awareness

Regular awareness sessions for all employees and specific training for IC members are expected. Many organisations run POSH as a mandatory annual training, tracked to completion by department.

## The annual report

Covered employers must file an annual report on the number of complaints received and disposed of with the district officer, and reflect it in the board's report where applicable.

## Making it routine

POSH works best when it is part of onboarding and an annual cycle, not a one-time exercise. NeevHR can run POSH as mandatory training with department-wise completion tracking, and capture policy acknowledgements at onboarding.`,
  },
  {
    slug: "dpdp-act-2023-for-hr-teams",
    title: "The DPDP Act 2023: what HR teams need to know",
    excerpt:
      "Consent, purpose limitation and data-principal rights, applied to the employee data HR handles every day.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-09-05",
    body: `The Digital Personal Data Protection Act, 2023 (DPDP) is India's data protection law, and HR is one of its biggest touchpoints. HR systems hold some of the most sensitive personal data in any company: identity documents, bank details, salary, health and performance.

## The core ideas

- Personal data should be processed for a lawful, specified purpose
- Consent, or another lawful basis, is needed to process it
- Data should be accurate, kept only as long as needed, and protected
- Individuals (data principals) have rights over their data

## Employee data-principal rights

Employees can ask to access their data, have it corrected, and have it erased when it is no longer needed. HR needs a way to receive and act on these requests within reasonable timelines.

## Practical HR steps

| Area | What to do |
| --- | --- |
| Collection | Collect only what you need, with a clear purpose |
| Consent | Capture consent where required, and record it |
| Access | Restrict who can see sensitive fields |
| Retention | Set schedules and delete or archive when the purpose ends |
| Requests | Have a process to handle access, correction and erasure |

## Security by design

Row-level isolation, role-based access, field masking and an audit trail are the technical controls that make DPDP compliance practical rather than aspirational. NeevHR builds these in, with consent capture and data-principal request handling for employees.`,
  },
  {
    slug: "minimum-wages-in-india-explained",
    title: "Minimum wages in India, explained",
    excerpt:
      "Why minimum wage varies by state, skill and scheduled employment, and what payroll must check before every run.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-09-08",
    body: `Minimum wages in India are not a single number. They are set by both central and state governments, vary by scheduled employment, skill level and sometimes zone, and are revised periodically, often twice a year for the dearness allowance component.

## What drives the rate

| Factor | Effect |
| --- | --- |
| State | Each state notifies its own rates |
| Scheduled employment | Different industries have different schedules |
| Skill level | Unskilled, semi-skilled, skilled and highly skilled differ |
| Zone | Some states have zonal variations by city size |

## Why it matters to payroll

Two things trip employers up. First, the wage actually paid (Basic plus applicable allowances that count toward minimum wage) must not fall below the floor for the employee's state and skill. Second, the floor changes, so a compliant structure can slip out of compliance after a revision if no one is watching.

## The Code on Wages

The Code on Wages consolidates minimum wage, payment of wages, bonus and equal remuneration into one code, and introduces a national floor wage concept. It also defines wages in a way that expects allowances not to exceed 50% of total remuneration, which affects how CTC is structured.

## Staying compliant

The safe approach is to check every payroll against the current state and skill floor, and to flag any breach before disbursement. NeevHR surfaces minimum-wage warnings at the verify and publish steps, so a stale rate does not become an underpayment.`,
  },
  {
    slug: "full-and-final-settlement-explained",
    title: "Full and final settlement, explained",
    excerpt:
      "What goes into the F&F, how gratuity and leave encashment are taxed, and how to close it cleanly and on time.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-09-10",
    body: `Full and final settlement (F&F) is the last payroll event for a departing employee. Done well, it closes the relationship cleanly. Done badly, it is the top source of ex-employee disputes.

## What the F&F includes

The settlement nets earnings against recoveries.

| Earnings | Recoveries |
| --- | --- |
| Salary up to the last working day | Notice-period shortfall, if any |
| Leave encashment | Outstanding loan or advance balance |
| Gratuity, if eligible | Unreturned asset value |
| Pending reimbursements and bonus | TDS on taxable components |

## Tax on the big items

Gratuity is exempt up to the limits under Section 10(10). Leave encashment on retirement or resignation is exempt up to the limit under Section 10(10AA), with the balance taxable. Notice-pay recovery is handled per policy and the tax treatment should be applied consistently.

## Timelines and clearance

Most F&F settlements are expected to be completed within a defined window after the last working day, often 30 to 45 days, once department clearances and asset returns are done. Delays are usually caused by pending clearances, not payroll.

## Closing it cleanly

A clear F&F worksheet with the net in words, plus relieving and experience letters, leaves the employee with a good final impression. NeevHR computes the F&F with gratuity and leave-encashment exemptions, tracks clearances, and generates the letters.`,
  },
  {
    slug: "notice-period-and-buyout-explained",
    title: "Notice period and buyout, explained",
    excerpt:
      "How notice periods are set, what a buyout means for both sides, and how to keep the exit clean and fair.",
    category: "hr-strategy",
    author: "NeevHR Team",
    publishedAt: "2026-09-12",
    body: `Notice period is the time between an employee's resignation and their last working day. It exists so work can be handed over and a replacement found. How you handle it shapes both the exit experience and your employer brand.

## How notice is set

Notice periods are contractual, commonly ranging from 30 to 90 days depending on seniority. Many companies set longer notice for senior or hard-to-replace roles. The period should be clear in the appointment letter and applied consistently.

## Buyout, both ways

Sometimes the notice is not served in full.

- If the employee leaves early, the employer may recover the shortfall as a notice-pay recovery, usually calculated on Basic or on gross per policy.
- If the employer wants the employee to leave sooner, it may buy out the notice by paying for the unserved days.

The policy should state the basis (Basic or gross) and apply it the same way for everyone.

## Garden leave and early release

Some employers place exiting employees on garden leave, keeping them on payroll but away from work. Others grant early release with a proper knowledge handover. Both are fine if handled transparently.

## Keeping it fair

A clean exit protects both sides. Document the last working day, run the knowledge handover, and settle notice recovery or buyout in the F&F. NeevHR manages notice periods by grade, supports early release and handover, and settles the numbers in the final settlement.`,
  },
  {
    slug: "monthly-payroll-process-step-by-step",
    title: "The monthly payroll process, step by step",
    excerpt:
      "A repeatable five-stage payroll cycle that turns attendance into a reconciled, statutory-accurate disbursement.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-09-14",
    body: `Payroll feels chaotic when it is a monthly scramble and calm when it is a repeatable process. Here is a five-stage cycle that works for mid-market companies.

## 1. Inputs

Freeze attendance and leave for the period, and gather variable inputs: new joiners, exits, salary revisions, loss of pay, arrears, reimbursements, incentives and loan EMIs. The quality of payroll is set here.

## 2. Compute

Run the calculation: apply salary structures, compute gross, then statutory deductions (PF, ESI, PT, TDS) and other deductions. Loss of pay should reduce both pay and the statutory base correctly.

## 3. Verify

This is the step teams skip and regret. Compare each employee's net against last month, review the largest movements, and check exceptions and minimum-wage breaches before anyone is paid.

| Check | Why |
| --- | --- |
| Net variance vs last month | Catch structure and LOP errors |
| New joiners and exits | Proration and F&F correctness |
| Statutory deductions present | Avoid shortfalls |
| Minimum-wage floor | Prevent underpayment |

## 4. Approve

A single sign-off gate between verification and payment creates accountability. The approver confirms the run is reconciled.

## 5. Publish

Generate the bank file (NEFT or RTGS), payslips and the GL journal, then file the statutory returns and challans by their due dates.

## Making it repeatable

The more of this the system does automatically, the fewer late nights. NeevHR runs exactly this five-stage cycle, with a verify grid, a sign-off gate, and ready outputs for the bank and the authorities.`,
  },
  {
    slug: "attendance-and-overtime-rules-in-india",
    title: "Attendance and overtime rules in India",
    excerpt:
      "How working hours, overtime and shift work are governed, and what a clean day-close needs to capture.",
    category: "time",
    author: "NeevHR Team",
    publishedAt: "2026-09-16",
    body: `Attendance is where payroll accuracy begins. In India, working hours and overtime are governed by the Factories Act and state Shops and Establishments Acts, so the specifics vary, but the principles are consistent.

## Working hours and overtime

The typical framework limits daily and weekly hours, requires a weekly off, and mandates overtime pay, often at twice the ordinary rate, beyond the daily or weekly limit. There are also caps on total overtime in a quarter under the Factories Act.

## What a clean day-close needs

Turning raw punches into a payroll-ready day means applying rules consistently.

| Element | What to define |
| --- | --- |
| Grace period | How late an in-punch can be before it counts as late |
| Half-day and short-day | Hours thresholds that trigger each |
| Overtime | When it starts and at what rate |
| Weekly off and holidays | How they interact with attendance and pay |

## Shift work

Rotating and night shifts add rest-hour and consecutive-day rules to respect. A published roster that checks coverage and working-time compliance before it goes live prevents both understaffing and violations.

## Pay at risk

The most useful output of attendance is an early view of pay at risk: unjustified absences and missing punches that will become loss of pay if not regularised. Surfacing this before payroll runs avoids surprises.

## In practice

NeevHR ingests biometric punches, applies a configurable day-close, routes regularisation for approval, and shows pay at risk before the payroll cycle closes.`,
  },
  {
    slug: "probation-and-confirmation-best-practices",
    title: "Probation and confirmation: getting it right",
    excerpt:
      "How to set a fair probation, what to assess, and how a structured confirmation decision beats a silent auto-confirm.",
    category: "hr-strategy",
    author: "NeevHR Team",
    publishedAt: "2026-09-17",
    body: `Probation is the window to confirm that a new hire is the right fit, for both sides. Handled well, it improves quality and reduces early attrition. Handled as a date that quietly passes, it wastes the opportunity.

## Setting the period

Probation is commonly 90 days, though it varies by role and can be extended once where a decision needs more time. The period and its terms should be clear in the appointment letter.

## What to assess

A good confirmation decision looks at more than attendance. Define a short set of criteria up front: role competence, reliability, collaboration and alignment with values. A simple structured feedback form from the manager, a few days before the probation ends, turns a gut call into a documented decision.

## The confirmation decision

There are three honest outcomes: confirm, extend, or part ways. A structured process with a manager recommendation and an HR review is fairer than a silent auto-confirm, and it protects the company if a separation is needed.

## Communicate it

Whatever the outcome, tell the employee. A confirmation letter is a small moment that signals the company is organised and cares. An extension conversation, done early and kindly, gives a struggling hire a real chance.

## In practice

NeevHR makes probation a configurable period, prompts the manager for structured feedback before it ends, and supports a confirm, extend or exit decision, so the date never just slips by.`,
  },
];
