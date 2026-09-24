// HR & payroll glossary (spec §18). Each term: a plain definition, how it
// works, why HR cares, a worked example, and links into the product and the
// related guides. Statutory figures carry the review date in lib/seo.ts and
// the page shows a disclaimer; keep them in sync with the calculators.

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** Expanded name, e.g. "Employees' Provident Fund". */
  full?: string;
  /** One-sentence definition used as the meta description and lead. */
  short: string;
  definition: string;
  howItWorks: string[];
  whyHrCares: string;
  example: { title: string; lines: string[] };
  /** True when the term carries statutory rates or thresholds. */
  statutory?: boolean;
  product: { label: string; href: string }[];
  related: { label: string; href: string }[];
  sources?: { label: string; href: string }[];
};

export const glossary: GlossaryTerm[] = [
  {
    slug: "hrms",
    term: "HRMS",
    full: "Human Resource Management System",
    short:
      "An HRMS is software that manages employee records, attendance, leave, payroll, recruitment, performance and HR reporting from one central system.",
    definition:
      "A Human Resource Management System (HRMS) is the software an organisation uses to run its people processes end to end. It holds the employee master and then layers the operational HR functions on top: attendance and leave, payroll and statutory deductions, recruitment and onboarding, performance and compensation, documents, exits and reporting.",
    howItWorks: [
      "Every module reads from and writes to the same employee record, so a transfer or salary revision entered once is visible to payroll, attendance and reports.",
      "Policies such as leave rules, shift timings and pay structures are configured once and assigned to groups of employees.",
      "Managers approve requests in a workflow, and employees see their own data through self-service.",
      "Reports and dashboards are built on the same data, so HR, finance and leadership look at one version of the numbers.",
    ],
    whyHrCares:
      "Without an HRMS, the same employee exists in several spreadsheets and point tools that drift apart. Payroll errors, missed statutory deadlines and slow month-end closes usually trace back to that duplication. An HRMS removes the re-keying and gives an audit trail for every change.",
    example: {
      title: "One change, many effects",
      lines: [
        "An employee is promoted with effect from 1 October.",
        "The HRMS records the new grade and salary as a dated event.",
        "October payroll picks up the revised salary and statutory deductions automatically.",
        "The org chart, headcount report and cost reports reflect the change from the same date.",
      ],
    },
    product: [
      { label: "HRMS software for Indian companies", href: "/hrms" },
      { label: "Employee records", href: "/features/employees" },
      { label: "All modules", href: "/features" },
    ],
    related: [
      { label: "HRIS", href: "/glossary/hris" },
      { label: "Employee self-service", href: "/glossary/employee-self-service" },
      { label: "How to choose an HRMS in India", href: "/best-hrms-software-india" },
    ],
  },
  {
    slug: "hris",
    term: "HRIS",
    full: "Human Resource Information System",
    short:
      "An HRIS is a system of record for employee information. In practice the term overlaps heavily with HRMS, which usually implies broader process coverage such as payroll and talent.",
    definition:
      "A Human Resource Information System (HRIS) stores and organises employee data: personal details, job history, organisation structure, documents and basic HR transactions. The term is older and narrower than HRMS. Vendors use HRIS, HRMS and HCM loosely, so compare actual capabilities rather than labels.",
    howItWorks: [
      "An HRIS centres on the employee master: who works here, in which role, reporting to whom, on what terms.",
      "An HRMS usually adds operational processes on top of that record, such as attendance, leave, payroll and performance.",
      "HCM (Human Capital Management) is often used for suites that add strategic talent functions such as succession and workforce planning.",
    ],
    whyHrCares:
      "When evaluating software, the label matters less than coverage. A buyer who needs payroll with PF, ESI, PT and TDS should confirm those are native rather than assume them from the word HRIS or HRMS.",
    example: {
      title: "Reading a vendor claim",
      lines: [
        "Vendor A calls its product an HRIS and covers employee records and leave.",
        "Vendor B calls its product an HRMS and covers records, attendance, payroll and statutory filing outputs.",
        "For an Indian company running monthly payroll, Vendor B's scope is the relevant comparison.",
      ],
    },
    product: [
      { label: "HRMS software", href: "/hrms" },
      { label: "Employee records", href: "/features/employees" },
    ],
    related: [
      { label: "HRMS", href: "/glossary/hrms" },
      { label: "HRMS comparison guide", href: "/compare" },
    ],
  },
  {
    slug: "pf",
    term: "PF",
    full: "Employees' Provident Fund (EPF)",
    short:
      "PF (EPF) is India's mandatory retirement savings scheme run by EPFO, funded by employee and employer contributions of 12% of PF wages each.",
    statutory: true,
    definition:
      "The Employees' Provident Fund is a statutory retirement savings scheme administered by the Employees' Provident Fund Organisation (EPFO). Covered establishments deduct the employee's share from salary, add the employer's share, and remit both every month through an Electronic Challan cum Return (ECR).",
    howItWorks: [
      "Employee contribution: 12% of PF wages (basic plus dearness allowance).",
      "Employer contribution: 12% of PF wages, of which 8.33% goes to the Employees' Pension Scheme (EPS) on wages up to ₹15,000 (a maximum of ₹1,250 a month) and the balance to EPF.",
      "The statutory wage ceiling is ₹15,000 a month. Employers may contribute on actual wages above the ceiling if they choose.",
      "Employers also pay EDLI (0.5%, on wages up to ₹15,000) and EPF administration charges (0.5%).",
      "Each member has a Universal Account Number (UAN) that stays with them across employers.",
    ],
    whyHrCares:
      "PF is due monthly, is audited by EPFO, and attracts interest and damages when paid late. The choice of PF basis (capped at ₹15,000 or on actual basic) also changes take-home pay and cost to company, so it must be applied consistently.",
    example: {
      title: "Basic of ₹25,000, contribution capped at ₹15,000",
      lines: [
        "Employee PF: 12% × ₹15,000 = ₹1,800",
        "Employer EPS: 8.33% × ₹15,000 = ₹1,250",
        "Employer EPF: ₹1,800 − ₹1,250 = ₹550",
        "Total remitted to EPF and EPS: ₹3,600, plus EDLI and admin charges",
      ],
    },
    product: [
      { label: "Payroll with PF, ESI, PT and TDS", href: "/payroll" },
      { label: "Statutory compliance", href: "/features/compliance" },
      { label: "India payroll", href: "/india-payroll" },
    ],
    related: [
      { label: "PF calculator", href: "/tools/pf-calculator" },
      { label: "EPF explained", href: "/blog/epf-explained-contribution-uan-withdrawal" },
      { label: "Basic salary", href: "/glossary/basic-salary" },
    ],
    sources: [{ label: "EPFO", href: "https://www.epfindia.gov.in/" }],
  },
  {
    slug: "esi",
    term: "ESI",
    full: "Employees' State Insurance",
    short:
      "ESI is a contributory health and social security scheme run by ESIC for employees earning up to ₹21,000 a month in gross wages.",
    statutory: true,
    definition:
      "Employees' State Insurance provides medical care and cash benefits (sickness, maternity, disablement and dependants' benefits) to insured employees and their families. It is administered by the Employees' State Insurance Corporation (ESIC) and funded by employee and employer contributions.",
    howItWorks: [
      "Coverage applies to employees with gross wages up to ₹21,000 a month (₹25,000 for persons with disability) in covered establishments.",
      "Employee contribution: 0.75% of gross wages. Employer contribution: 3.25% of gross wages.",
      "Employees whose average daily wage is up to ₹176 are exempt from their share; the employer still contributes.",
      "Eligibility is fixed for a contribution period (April to September, October to March). An employee who crosses ₹21,000 mid-period stays covered until the period ends.",
      "Contributions are due by the 15th of the following month.",
    ],
    whyHrCares:
      "ESI applicability moves with gross pay, so increments, overtime and arrears can change who is covered. Getting the contribution-period rule wrong is a common source of under-deduction.",
    example: {
      title: "Gross wages of ₹18,000 a month",
      lines: [
        "Employee ESI: 0.75% × ₹18,000 = ₹135",
        "Employer ESI: 3.25% × ₹18,000 = ₹585",
        "Total deposit: ₹720 for the month",
      ],
    },
    product: [
      { label: "Payroll", href: "/payroll" },
      { label: "Statutory compliance", href: "/features/compliance" },
    ],
    related: [
      { label: "ESI calculator", href: "/tools/esi-calculator" },
      { label: "ESI explained", href: "/blog/esi-explained-eligibility-benefits-contribution" },
      { label: "Gross salary", href: "/glossary/gross-salary" },
    ],
    sources: [{ label: "ESIC", href: "https://www.esic.gov.in/" }],
  },
  {
    slug: "pt",
    term: "PT",
    full: "Professional Tax",
    short:
      "Professional Tax is a state-levied tax on employment, deducted from salary by employers in states that impose it, capped at ₹2,500 a year by the Constitution.",
    statutory: true,
    definition:
      "Professional Tax is levied by state governments under Article 276 of the Constitution, which caps it at ₹2,500 per person per year. Slabs, deduction months and filing frequency differ by state, and several states and union territories do not levy it at all.",
    howItWorks: [
      "The employer deducts PT from salary according to the slab for the state where the employee works.",
      "Some states vary the amount by month, for example a higher deduction in February or March so the annual total reaches the cap.",
      "Employers register, deposit and file PT returns with the state authority on the state's schedule.",
    ],
    whyHrCares:
      "A company with offices in several states runs several PT regimes at once. The work location on the employee record, not the head office, decides which slab applies.",
    example: {
      title: "Two employees, same salary, different states",
      lines: [
        "Employee A works in a state that levies PT: the state slab is deducted each month.",
        "Employee B works in a state with no PT: nothing is deducted.",
        "The payroll must pick the slab from each employee's work location.",
      ],
    },
    product: [
      { label: "India payroll", href: "/india-payroll" },
      { label: "Statutory compliance", href: "/features/compliance" },
    ],
    related: [
      { label: "Professional Tax by state", href: "/blog/professional-tax-by-state-india" },
      { label: "LWF", href: "/glossary/lwf" },
    ],
  },
  {
    slug: "lwf",
    term: "LWF",
    full: "Labour Welfare Fund",
    short:
      "Labour Welfare Fund is a state-level contribution, made by employees and employers in states that have an LWF Act, to fund welfare schemes for workers.",
    statutory: true,
    definition:
      "Labour Welfare Fund contributions are set by individual state Acts. The amounts are small, but the rules differ by state: who is covered, the employee and employer shares, and whether the contribution is monthly, half-yearly or annual.",
    howItWorks: [
      "The employer deducts the employee's share from salary in the months the state specifies and adds the employer's share.",
      "Contributions are deposited with the state Labour Welfare Board by the state's due dates.",
      "Some states apply a wage limit; others cover all employees in covered establishments.",
    ],
    whyHrCares:
      "LWF is easy to miss because it is infrequent. A payroll that handles it state by state avoids year-end surprises during labour inspections.",
    example: {
      title: "A half-yearly LWF state",
      lines: [
        "Deductions happen only in the two months the state specifies, for example June and December.",
        "In other months no LWF appears on the payslip.",
      ],
    },
    product: [
      { label: "India payroll", href: "/india-payroll" },
      { label: "Statutory compliance", href: "/features/compliance" },
    ],
    related: [
      { label: "PT", href: "/glossary/pt" },
      { label: "Payroll compliance", href: "/payroll" },
    ],
  },
  {
    slug: "gratuity",
    term: "Gratuity",
    short:
      "Gratuity is a lump-sum benefit paid to an employee on leaving after at least five years of continuous service, calculated as 15/26 of last drawn wages for each completed year.",
    statutory: true,
    definition:
      "Gratuity rewards long service. It was governed by the Payment of Gratuity Act, 1972 and is now part of the Code on Social Security, 2020, which the Government brought into force from 21 November 2025. The Code also extends gratuity to fixed-term employees after one year of service. State and central rules under the Code are still being finalised in places, so confirm the rule that applies to your establishment.",
    howItWorks: [
      "Formula for covered employees: 15 × last drawn wages (basic plus DA) × completed years of service ÷ 26.",
      "A part year of more than six months is usually rounded up to a full year.",
      "The five-year condition does not apply on death or disablement.",
      "The statutory ceiling is ₹20 lakh, which is also the income-tax exemption limit for most private-sector employees.",
    ],
    whyHrCares:
      "Gratuity is a real liability that grows every year. It must be paid within 30 days of becoming payable, and it feeds full and final settlement.",
    example: {
      title: "Last drawn basic + DA of ₹40,000, 7 years 8 months of service",
      lines: [
        "Service rounded to 8 years (the 8 months exceed six months).",
        "Gratuity = 15 × ₹40,000 × 8 ÷ 26 = ₹1,84,615",
      ],
    },
    product: [
      { label: "Exit and full & final settlement", href: "/features/exit" },
      { label: "Payroll", href: "/payroll" },
    ],
    related: [
      { label: "Gratuity calculator", href: "/tools/gratuity-calculator" },
      { label: "Gratuity in India", href: "/blog/gratuity-in-india-eligibility-formula-tax" },
      { label: "Full and final settlement", href: "/glossary/full-and-final-settlement" },
    ],
    sources: [
      { label: "Ministry of Labour & Employment", href: "https://labour.gov.in/" },
    ],
  },
  {
    slug: "ctc",
    term: "CTC",
    full: "Cost to Company",
    short:
      "CTC is the total annual cost an employer incurs for an employee: gross salary plus employer contributions such as PF, and sometimes gratuity and insurance.",
    definition:
      "Cost to Company is the figure most Indian offer letters quote. It is not what the employee receives. It adds the employer's statutory contributions and some benefits to the gross salary, so take-home pay is always lower than CTC ÷ 12.",
    howItWorks: [
      "Gross salary = the earnings paid to the employee (basic, HRA, allowances).",
      "CTC = gross salary + employer PF + other employer-paid items the company chooses to include, such as gratuity provision or insurance.",
      "Net (take-home) pay = gross salary − employee deductions such as employee PF, ESI, PT and TDS.",
    ],
    whyHrCares:
      "Which employer costs sit inside CTC is a policy choice. It must be applied the same way in offers, salary revisions and payroll, or employees see numbers that do not reconcile.",
    example: {
      title: "Annual CTC of ₹9,00,000",
      lines: [
        "Employer PF of ₹21,600 a year is included in CTC.",
        "Gross salary = ₹9,00,000 − ₹21,600 = ₹8,78,400 (₹73,200 a month).",
        "Take-home is gross minus employee PF, PT and TDS.",
      ],
    },
    product: [
      { label: "Compensation", href: "/features/compensation" },
      { label: "Payroll", href: "/payroll" },
    ],
    related: [
      { label: "Take-home salary calculator", href: "/tools/take-home-salary-calculator" },
      { label: "CTC breakup explained", href: "/blog/salary-structure-ctc-breakup-explained" },
      { label: "Gross salary", href: "/glossary/gross-salary" },
      { label: "Net salary", href: "/glossary/net-salary" },
    ],
  },
  {
    slug: "gross-salary",
    term: "Gross salary",
    short:
      "Gross salary is the total of all earnings paid to an employee in a period, before any deductions such as PF, ESI, PT or TDS.",
    definition:
      "Gross salary covers basic pay, HRA, special and other allowances, overtime and any other earnings for the period. It is the base for ESI eligibility and contributions, and the starting point for computing net pay.",
    howItWorks: [
      "Gross = sum of all earning components for the month, after loss-of-pay adjustments.",
      "Employer contributions (for example employer PF) are not part of gross; they sit in CTC.",
      "ESI applicability is tested on gross wages, not on CTC.",
    ],
    whyHrCares:
      "Whether an allowance counts in gross decides ESI coverage and can affect PF and bonus. Structures should be designed with those tests in mind.",
    example: {
      title: "Monthly earnings",
      lines: [
        "Basic ₹30,000 + HRA ₹15,000 + Special allowance ₹20,000 = Gross ₹65,000",
      ],
    },
    product: [{ label: "Payroll", href: "/payroll" }],
    related: [
      { label: "CTC", href: "/glossary/ctc" },
      { label: "Net salary", href: "/glossary/net-salary" },
      { label: "ESI", href: "/glossary/esi" },
    ],
  },
  {
    slug: "net-salary",
    term: "Net salary",
    short:
      "Net salary (take-home pay) is what the employee actually receives: gross salary minus deductions such as employee PF, ESI, PT, TDS and loan recoveries.",
    definition:
      "Net salary is the amount credited to the employee's bank account. It is gross earnings less statutory deductions (employee PF, ESI, PT, LWF, TDS) and any other recoveries such as loan EMIs, advances or notice-period recovery.",
    howItWorks: [
      "Net = gross − employee PF − employee ESI − PT − LWF − TDS − other recoveries.",
      "Payroll teams usually compare this month's net with last month's to catch errors before approval.",
    ],
    whyHrCares:
      "Net pay is what employees notice. Unexplained swings from arrears, LOP or tax changes generate most payroll queries.",
    example: {
      title: "From gross to net",
      lines: [
        "Gross ₹65,000 − PF ₹1,800 − PT ₹200 − TDS ₹3,000 = Net ₹60,000",
      ],
    },
    product: [
      { label: "Payroll", href: "/payroll" },
      { label: "Employee self-service", href: "/mobile" },
    ],
    related: [
      { label: "Take-home salary calculator", href: "/tools/take-home-salary-calculator" },
      { label: "Gross salary", href: "/glossary/gross-salary" },
    ],
  },
  {
    slug: "basic-salary",
    term: "Basic salary",
    short:
      "Basic salary is the fixed core component of pay. Many statutory calculations, including PF, gratuity and HRA exemption, are based on it.",
    statutory: true,
    definition:
      "Basic salary is the foundation of an Indian salary structure. It usually forms a significant share of gross pay. The Labour Codes define 'wages' so that, if excluded allowances exceed 50% of total remuneration, the excess is added back to wages, which pushes structures towards a higher basic.",
    howItWorks: [
      "PF is computed on basic plus DA (subject to the ₹15,000 ceiling where the employer caps it).",
      "Gratuity uses last drawn basic plus DA.",
      "HRA exemption uses basic as one of its three limbs.",
    ],
    whyHrCares:
      "Changing the basic percentage changes PF, gratuity and tax for every employee. It should be a deliberate, documented structure decision.",
    example: {
      title: "Basic at 50% of gross",
      lines: [
        "Gross ₹60,000, basic ₹30,000.",
        "PF on actual basic: 12% × ₹30,000 = ₹3,600; PF capped: ₹1,800.",
      ],
    },
    product: [
      { label: "Payroll structures", href: "/payroll" },
      { label: "Compensation", href: "/features/compensation" },
    ],
    related: [
      { label: "PF", href: "/glossary/pf" },
      { label: "HRA", href: "/glossary/hra" },
      { label: "Gratuity", href: "/glossary/gratuity" },
    ],
  },
  {
    slug: "hra",
    term: "HRA",
    full: "House Rent Allowance",
    short:
      "HRA is a salary allowance for rented housing. Under the old tax regime part of it can be exempt: the least of actual HRA, 50% or 40% of basic, and rent paid minus 10% of basic.",
    statutory: true,
    definition:
      "House Rent Allowance is paid to help employees meet rent. Its exemption is available only to employees who pay rent and choose the old tax regime. Under the new regime HRA is fully taxable. From 1 April 2026 the Income-tax Act, 2025 replaces the 1961 Act, so the section numbers you may know (such as 10(13A)) are renumbered; the three-limb test is carried forward.",
    howItWorks: [
      "Exempt HRA is the least of: (1) actual HRA received, (2) 50% of basic for metro cities or 40% for others, (3) rent paid minus 10% of basic.",
      "Metro cities for this rule are Delhi, Mumbai, Kolkata and Chennai.",
      "Employees declare rent during the year and submit proof before the year-end so TDS can reflect the exemption.",
    ],
    whyHrCares:
      "HRA exemption is one of the largest drivers of old-regime TDS. Proof collection and regime choice must be handled before the last quarter to avoid a TDS spike in February and March.",
    example: {
      title: "Basic ₹40,000, HRA ₹20,000, rent ₹18,000, non-metro",
      lines: [
        "Actual HRA: ₹20,000",
        "40% of basic: ₹16,000",
        "Rent − 10% of basic: ₹18,000 − ₹4,000 = ₹14,000",
        "Exempt HRA = ₹14,000 a month; taxable HRA = ₹6,000",
      ],
    },
    product: [
      { label: "Payroll and TDS", href: "/payroll" },
      { label: "Benefits and declarations", href: "/features/benefits" },
    ],
    related: [
      { label: "HRA calculator", href: "/tools/hra-calculator" },
      { label: "HRA exemption explained", href: "/blog/hra-exemption-explained" },
    ],
    sources: [{ label: "Income Tax Department", href: "https://www.incometax.gov.in/" }],
  },
  {
    slug: "lop",
    term: "LOP",
    full: "Loss of Pay",
    short:
      "LOP (loss of pay) is unpaid absence. Salary is reduced in proportion to the days of LOP, which also reduces PF, ESI and other wage-linked amounts.",
    definition:
      "Loss of Pay applies when an employee is absent without paid leave to cover it, or takes leave the policy treats as unpaid. The month's salary is prorated for the payable days.",
    howItWorks: [
      "Payable days = days in the pay period − LOP days (the divisor, calendar days or a fixed 26 or 30, is a policy choice).",
      "Each earning component is reduced in proportion, and wage-linked statutory contributions fall with it.",
      "LOP discovered after payroll closes is usually reversed or recovered in a later month as an arrear.",
    ],
    whyHrCares:
      "LOP depends on attendance and leave being final before payroll runs. Late regularisations are the main reason for LOP reversals.",
    example: {
      title: "Gross ₹31,000, 31-day month, 2 LOP days",
      lines: [
        "Payable days = 29",
        "Gross payable = ₹31,000 × 29 ÷ 31 = ₹29,000",
      ],
    },
    product: [
      { label: "Attendance", href: "/features/attendance" },
      { label: "Leave", href: "/features/leave" },
      { label: "Payroll", href: "/payroll" },
    ],
    related: [
      { label: "Attendance and overtime rules", href: "/blog/attendance-and-overtime-rules-in-india" },
      { label: "Monthly payroll process", href: "/blog/monthly-payroll-process-step-by-step" },
    ],
  },
  {
    slug: "full-and-final-settlement",
    term: "Full and final settlement",
    full: "F&F",
    short:
      "Full and final settlement is the last payment to a leaving employee: pending salary, leave encashment, gratuity and bonus, minus recoveries such as notice shortfall and loans.",
    statutory: true,
    definition:
      "Full and final settlement closes the financial relationship with a departing employee. The Code on Wages, 2019, in force from 21 November 2025, requires wages to be paid within two working days of separation. Company policy and older timelines of 30 to 45 days should be reviewed against it.",
    howItWorks: [
      "Earnings: salary for days worked in the last month, leave encashment, gratuity if eligible, bonus and any reimbursements due.",
      "Recoveries: notice-period shortfall, outstanding loans and advances, unreturned assets and excess leave taken.",
      "TDS is recomputed on the final figures, and Form 16 is issued for the year.",
    ],
    whyHrCares:
      "F&F depends on clearance from several teams. Delays create disputes and, under the Labour Codes, compliance exposure.",
    example: {
      title: "A simple F&F",
      lines: [
        "Salary for 12 days: ₹24,000",
        "Leave encashment: ₹18,000",
        "Loan balance recovered: −₹10,000",
        "Net payable: ₹32,000 (before TDS)",
      ],
    },
    product: [
      { label: "Full & final settlement in NeevHR", href: "/features/full-and-final-settlement" },
      { label: "Exit management", href: "/features/exit" },
    ],
    related: [
      { label: "Full and final settlement explained", href: "/blog/full-and-final-settlement-explained" },
      { label: "Gratuity calculator", href: "/tools/gratuity-calculator" },
      { label: "Notice period and buyout", href: "/blog/notice-period-and-buyout-explained" },
    ],
    sources: [
      { label: "Ministry of Labour & Employment", href: "https://labour.gov.in/" },
    ],
  },
  {
    slug: "employee-self-service",
    term: "Employee self-service",
    full: "ESS",
    short:
      "Employee self-service (ESS) lets employees view and update their own HR information, apply for leave, see payslips and raise requests without going through HR.",
    definition:
      "Employee self-service is the part of an HRMS employees use directly. Instead of emailing HR for a payslip or a leave balance, they log in and do it themselves, and managers approve requests in the same system.",
    howItWorks: [
      "Employees see their profile, attendance, leave balances, payslips and tax declarations.",
      "Requests (leave, regularisation, expenses, profile changes) route to the right approver through configured workflows.",
      "Sensitive changes, such as bank details, can require HR approval before they take effect.",
    ],
    whyHrCares:
      "ESS removes the routine queries that consume HR time and gives employees a record of every request and approval.",
    example: {
      title: "Leave without email",
      lines: [
        "The employee checks the balance and applies for two days of leave.",
        "The manager approves from the inbox.",
        "Attendance and payroll see the approved leave automatically.",
      ],
    },
    product: [
      { label: "Self-service and mobile", href: "/mobile" },
      { label: "Leave", href: "/features/leave" },
    ],
    related: [
      { label: "HRMS", href: "/glossary/hrms" },
      { label: "Leave types in India", href: "/blog/leave-types-in-india-explained" },
    ],
  },
];

export const glossaryBySlug = Object.fromEntries(glossary.map((g) => [g.slug, g]));
