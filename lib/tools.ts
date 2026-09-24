// Free calculator registry. Every tool page renders the same sections from
// this data (spec §17): calculator, explanation, formula, worked example,
// common mistakes, FAQ, related links, CTA, review date and sources.
// Keep statutory figures here in step with the calculator components.

export type Link = { label: string; href: string };

export type Tool = {
  slug: string;
  name: string;
  /** SEO title (the layout appends "| NeevHR"). */
  seoTitle: string;
  tagline: string;
  metaDesc: string;
  explanation: string[];
  formula: string[];
  example: { title: string; lines: string[] };
  mistakes: string[];
  faqs: { q: string; a: string }[];
  related: Link[];
  sources: Link[];
  statutory: boolean;
};

const EPFO = { label: "EPFO", href: "https://www.epfindia.gov.in/" };
const ESIC = { label: "ESIC", href: "https://www.esic.gov.in/" };
const ITD = { label: "Income Tax Department", href: "https://www.incometax.gov.in/" };
const MOLE = { label: "Ministry of Labour & Employment", href: "https://labour.gov.in/" };

export const tools: Tool[] = [
  {
    slug: "gratuity-calculator",
    name: "Gratuity calculator",
    seoTitle: "Gratuity Calculator India: Formula, Eligibility & Example",
    tagline: "Estimate gratuity payable from last drawn basic + DA and years of service.",
    metaDesc:
      "Free gratuity calculator for India. Estimate gratuity from last drawn basic + DA and years of service using the 15/26 formula, with eligibility rules and the ₹20 lakh ceiling.",
    explanation: [
      "Gratuity is a lump sum paid to an employee who leaves after at least five years of continuous service (the condition does not apply on death or disablement). It was governed by the Payment of Gratuity Act, 1972 and is now part of the Code on Social Security, 2020, in force from 21 November 2025. The Code also extends gratuity to fixed-term employees after one year of service.",
      "The calculator applies the standard formula for covered establishments and caps the result at the statutory ceiling of ₹20 lakh.",
    ],
    formula: [
      "Gratuity = 15 × last drawn wages × completed years of service ÷ 26",
      "Wages = basic + dearness allowance (DA)",
      "A part year of more than six months counts as a full year",
      "Maximum payable: ₹20,00,000",
    ],
    example: {
      title: "Basic + DA of ₹50,000, service of 10 years 7 months",
      lines: [
        "Service rounded up to 11 years (7 months is more than six months)",
        "15 × ₹50,000 × 11 ÷ 26 = ₹3,17,308",
        "Below the ₹20 lakh ceiling, so ₹3,17,308 is payable",
      ],
    },
    mistakes: [
      "Using gross or CTC instead of basic + DA as the wage.",
      "Dividing by 30 instead of 26 for an establishment covered by the statute.",
      "Forgetting to round a part year of more than six months up to a full year.",
      "Ignoring the one-year rule for fixed-term employees under the Code on Social Security.",
    ],
    faqs: [
      {
        q: "Who is eligible for gratuity?",
        a: "An employee who completes at least five years of continuous service with the employer, and a fixed-term employee after one year under the Code on Social Security, 2020. On death or disablement the service condition does not apply.",
      },
      {
        q: "Why is the divisor 26?",
        a: "The statute treats a month as 26 working days, so 15 ÷ 26 of monthly wages represents 15 days of wages for each year of service.",
      },
      {
        q: "Is gratuity taxable?",
        a: "For most private-sector employees, gratuity received up to ₹20 lakh over a lifetime is exempt from income tax. Amounts above that are taxable as salary. Confirm current limits with the Income Tax Department.",
      },
      {
        q: "When must gratuity be paid?",
        a: "Gratuity must be paid within 30 days of becoming payable. Delayed payment attracts simple interest.",
      },
    ],
    related: [
      { label: "What is gratuity?", href: "/glossary/gratuity" },
      { label: "Gratuity in India: eligibility, formula and tax", href: "/blog/gratuity-in-india-eligibility-formula-tax" },
      { label: "Full and final settlement in NeevHR", href: "/features/exit" },
      { label: "Payroll software for Indian companies", href: "/payroll" },
    ],
    sources: [MOLE, ITD],
    statutory: true,
  },
  {
    slug: "hra-calculator",
    name: "HRA exemption calculator",
    seoTitle: "HRA Exemption Calculator: Old Regime Rules & Example",
    tagline: "Work out the tax-exempt part of your house rent allowance (old regime).",
    metaDesc:
      "Free HRA exemption calculator for India. Find tax-exempt house rent allowance from basic, HRA, rent and city, using the least-of-three rule for the old tax regime.",
    explanation: [
      "House Rent Allowance can be partly exempt from income tax for salaried employees who pay rent and choose the old tax regime. Under the new regime HRA is fully taxable.",
      "From 1 April 2026 the Income-tax Act, 2025 replaces the Income-tax Act, 1961, so the familiar section number 10(13A) is renumbered. The least-of-three test used here is the basis of the exemption.",
    ],
    formula: [
      "Exempt HRA = least of the three amounts below",
      "1. Actual HRA received",
      "2. 50% of basic + DA (Delhi, Mumbai, Kolkata, Chennai) or 40% (other cities)",
      "3. Rent paid − 10% of basic + DA",
      "Taxable HRA = HRA received − exempt HRA",
    ],
    example: {
      title: "Basic ₹50,000, HRA ₹25,000, rent ₹22,000, Mumbai (monthly)",
      lines: [
        "Actual HRA: ₹25,000",
        "50% of basic: ₹25,000",
        "Rent − 10% of basic: ₹22,000 − ₹5,000 = ₹17,000",
        "Exempt HRA = ₹17,000 a month, taxable HRA = ₹8,000 a month",
      ],
    },
    mistakes: [
      "Claiming HRA exemption under the new tax regime, where it is not available.",
      "Treating Bengaluru, Hyderabad or Pune as metro for the 50% limb; only four cities qualify.",
      "Not submitting rent receipts or the landlord's PAN (required when annual rent exceeds ₹1 lakh).",
      "Paying rent to a spouse, which tax authorities generally disallow.",
    ],
    faqs: [
      {
        q: "Can I claim HRA under the new tax regime?",
        a: "No. HRA exemption is available only under the old regime. Under the new regime the full HRA is taxable.",
      },
      {
        q: "Which cities count as metro for HRA?",
        a: "Delhi, Mumbai, Kolkata and Chennai. Every other city uses the 40% limb.",
      },
      {
        q: "What if I live in my own house?",
        a: "No rent is paid, so the third limb is zero and the full HRA is taxable.",
      },
      {
        q: "Can I pay rent to my parents?",
        a: "Yes, if the arrangement is genuine, rent is actually paid, and the parent reports it as income. Keep a rent agreement and bank records.",
      },
    ],
    related: [
      { label: "What is HRA?", href: "/glossary/hra" },
      { label: "HRA exemption explained", href: "/blog/hra-exemption-explained" },
      { label: "TDS on salary: old vs new regime", href: "/blog/tds-on-salary-old-vs-new-regime-fy-2026-27" },
      { label: "Payroll and TDS in NeevHR", href: "/payroll" },
    ],
    sources: [ITD],
    statutory: true,
  },
  {
    slug: "pf-calculator",
    name: "PF calculator",
    seoTitle: "PF Calculator: EPF & EPS Contribution with ₹15,000 Ceiling",
    tagline: "Estimate monthly EPF and EPS contributions for employee and employer.",
    metaDesc:
      "Free EPF / PF calculator for India. Estimate employee and employer provident fund contributions at 12%, the EPS split and the ₹15,000 wage ceiling, with a worked example.",
    explanation: [
      "Employees' Provident Fund (EPF) is a statutory retirement scheme run by EPFO. Employee and employer each contribute 12% of PF wages (basic + DA). The employer's share is split between the Employees' Pension Scheme (EPS) and EPF.",
      "The statutory wage ceiling is ₹15,000 a month. Employers can contribute on the capped wage or on actual basic; the choice should be applied consistently.",
    ],
    formula: [
      "PF wage = basic + DA (capped at ₹15,000 if the employer caps)",
      "Employee PF = 12% × PF wage",
      "Employer EPS = 8.33% × min(PF wage, ₹15,000), so at most ₹1,250",
      "Employer EPF = 12% × PF wage − employer EPS",
      "Employer also pays EDLI at 0.5% (on wages up to ₹15,000) and admin charges at 0.5%",
    ],
    example: {
      title: "Basic + DA of ₹30,000, contribution on actual basic",
      lines: [
        "Employee PF: 12% × ₹30,000 = ₹3,600",
        "Employer EPS: 8.33% × ₹15,000 = ₹1,250",
        "Employer EPF: ₹3,600 − ₹1,250 = ₹2,350",
        "Total to EPF and EPS: ₹7,200 a month, plus EDLI and admin charges",
      ],
    },
    mistakes: [
      "Computing EPS on wages above ₹15,000 for members not eligible for higher pension.",
      "Leaving allowances out of PF wages when the Labour Codes' 50% wage rule applies.",
      "Switching between capped and actual basis mid-year without a documented policy.",
      "Forgetting EDLI and admin charges when budgeting employer cost.",
    ],
    faqs: [
      {
        q: "Is PF mandatory above ₹15,000 basic?",
        a: "Employees whose PF wages exceed ₹15,000 when they first join are not compulsorily covered, but employers commonly extend membership. Once a member, contributions continue.",
      },
      {
        q: "What is the minimum PF contribution?",
        a: "When wages are capped at ₹15,000, the employee contribution is ₹1,800 a month, matched by the employer.",
      },
      {
        q: "When is PF due?",
        a: "PF for a month is due by the 15th of the following month, filed through the ECR on the EPFO portal.",
      },
      {
        q: "What is VPF?",
        a: "Voluntary Provident Fund lets an employee contribute more than 12%. The employer is not required to match it.",
      },
    ],
    related: [
      { label: "What is PF?", href: "/glossary/pf" },
      { label: "EPF explained", href: "/blog/epf-explained-contribution-uan-withdrawal" },
      { label: "India payroll with PF, ESI, PT and TDS", href: "/india-payroll" },
      { label: "Statutory compliance in NeevHR", href: "/features/compliance" },
    ],
    sources: [EPFO],
    statutory: true,
  },
  {
    slug: "esi-calculator",
    name: "ESI calculator",
    seoTitle: "ESI Calculator: Employee 0.75% & Employer 3.25% Contribution",
    tagline: "Check ESI eligibility and estimate employee and employer contributions.",
    metaDesc:
      "Free ESI calculator for India. Check eligibility against the ₹21,000 gross wage limit and estimate employee (0.75%) and employer (3.25%) ESI contributions.",
    explanation: [
      "Employees' State Insurance (ESI) is a health and social security scheme run by ESIC. Employees in covered establishments whose gross wages are up to ₹21,000 a month (₹25,000 for persons with disability) are covered.",
      "Eligibility is assessed for a contribution period. An employee who is covered at the start of a period stays covered until it ends, even if pay rises above the limit.",
    ],
    formula: [
      "Coverage: gross monthly wages ≤ ₹21,000 (₹25,000 for persons with disability)",
      "Employee ESI = 0.75% × gross wages",
      "Employer ESI = 3.25% × gross wages",
      "Employees with an average daily wage up to ₹176 do not pay their share; the employer still does",
      "Contribution periods: 1 April to 30 September, and 1 October to 31 March",
    ],
    example: {
      title: "Gross wages of ₹19,500 a month",
      lines: [
        "Covered: ₹19,500 is within the ₹21,000 limit",
        "Employee ESI: 0.75% × ₹19,500 = ₹146.25",
        "Employer ESI: 3.25% × ₹19,500 = ₹633.75",
        "Total deposit: ₹780 for the month",
      ],
    },
    mistakes: [
      "Stopping ESI mid-period when an increment takes gross above ₹21,000.",
      "Testing eligibility on basic or CTC instead of gross wages.",
      "Leaving overtime out of wages for contribution when it is paid.",
      "Missing the 15th-of-the-month deposit deadline.",
    ],
    faqs: [
      {
        q: "What is the ESI wage limit?",
        a: "₹21,000 a month in gross wages, or ₹25,000 for persons with disability.",
      },
      {
        q: "What happens if salary crosses ₹21,000 mid-year?",
        a: "The employee stays covered, and contributions continue, until the end of the current contribution period. Coverage stops from the next period.",
      },
      {
        q: "Is ESI deducted on overtime?",
        a: "Overtime paid is generally part of wages for contribution, but it is not used to decide coverage. Confirm the treatment for your case with ESIC guidance.",
      },
      {
        q: "When is ESI due?",
        a: "Contributions for a month are due by the 15th of the following month.",
      },
    ],
    related: [
      { label: "What is ESI?", href: "/glossary/esi" },
      { label: "ESI explained", href: "/blog/esi-explained-eligibility-benefits-contribution" },
      { label: "India payroll", href: "/india-payroll" },
      { label: "Payroll software", href: "/payroll" },
    ],
    sources: [ESIC],
    statutory: true,
  },
  {
    slug: "take-home-salary-calculator",
    name: "Take-home salary calculator",
    seoTitle: "In-Hand Salary Calculator: CTC to Take-Home (New Regime)",
    tagline: "Estimate monthly in-hand pay from annual CTC under the new tax regime.",
    metaDesc:
      "Free in-hand salary calculator for India. Convert annual CTC to monthly take-home pay after employer PF, gratuity, employee PF, professional tax and new-regime TDS.",
    explanation: [
      "CTC is not what an employee receives. Employer PF and a gratuity provision often sit inside CTC, and employee PF, professional tax and TDS come out of gross pay.",
      "This calculator assumes a standard structure with basic at 40% or 50% of CTC and the new tax regime. Real structures, declarations and state PT slabs change the result.",
    ],
    formula: [
      "Basic = 40% or 50% of CTC",
      "Employer PF = 12% × min(monthly basic, ₹15,000) × 12",
      "Gratuity provision = 4.81% × basic",
      "Gross = CTC − employer PF − gratuity provision",
      "Taxable = gross − ₹75,000 standard deduction; tax nil up to ₹12 lakh taxable after rebate",
      "In-hand = gross − employee PF − PT (₹2,400 assumed) − TDS",
    ],
    example: {
      title: "Annual CTC of ₹12,00,000 with basic at 50%",
      lines: [
        "Basic: ₹6,00,000; employer PF: ₹21,600; gratuity: ₹28,860",
        "Gross: ₹11,49,540",
        "Taxable after standard deduction: ₹10,74,540, so TDS is nil after the rebate",
        "In-hand: about ₹93,795 a month after employee PF and PT",
      ],
    },
    mistakes: [
      "Dividing CTC by 12 and calling it take-home.",
      "Forgetting that professional tax varies by state and some states levy none.",
      "Ignoring marginal relief for income just above the rebate limit.",
      "Comparing offers on CTC when one includes variable pay and the other does not.",
    ],
    faqs: [
      {
        q: "Why is my in-hand lower than CTC ÷ 12?",
        a: "CTC includes employer costs you never receive, such as employer PF and gratuity provision, and your own PF, PT and TDS are deducted from gross.",
      },
      {
        q: "Does this use the old or new tax regime?",
        a: "The new regime, with the ₹75,000 standard deduction and the rebate that makes tax nil up to ₹12 lakh of taxable income. Old-regime deductions are not modelled.",
      },
      {
        q: "Is variable pay included?",
        a: "Enter only fixed CTC for a monthly estimate. Variable pay is usually paid separately and taxed when paid.",
      },
    ],
    related: [
      { label: "What is CTC?", href: "/glossary/ctc" },
      { label: "Salary structure and CTC breakup", href: "/blog/salary-structure-ctc-breakup-explained" },
      { label: "TDS on salary: old vs new regime", href: "/blog/tds-on-salary-old-vs-new-regime-fy-2026-27" },
      { label: "Payroll software", href: "/payroll" },
    ],
    sources: [ITD, EPFO],
    statutory: true,
  },
  {
    slug: "bonus-calculator",
    name: "Statutory bonus calculator",
    seoTitle: "Statutory Bonus Calculator: 8.33% to 20% Payable Bonus",
    tagline: "Estimate annual statutory bonus at 8.33% to 20% of the calculation wage.",
    metaDesc:
      "Free statutory bonus calculator for India. Estimate annual bonus at 8.33% to 20% of the calculation wage, with the ₹21,000 eligibility limit and ₹7,000 or minimum wage ceiling.",
    explanation: [
      "Statutory bonus was governed by the Payment of Bonus Act, 1965 and is now covered by the Code on Wages, 2019, in force from 21 November 2025. Employees earning up to ₹21,000 a month (basic + DA) who have worked at least 30 days in the year are eligible.",
      "Bonus is computed on a calculation wage: the lower of actual basic + DA and ₹7,000, or the applicable minimum wage if that is higher.",
    ],
    formula: [
      "Eligibility: basic + DA ≤ ₹21,000 a month and at least 30 working days",
      "Calculation wage = min(basic + DA, higher of ₹7,000 and minimum wage)",
      "Bonus = calculation wage × rate × months worked",
      "Rate: minimum 8.33%, maximum 20%, based on allocable surplus",
    ],
    example: {
      title: "Basic + DA of ₹18,000, 12 months, 8.33%",
      lines: [
        "Calculation wage: ₹7,000 (assuming the minimum wage is lower)",
        "Bonus: ₹7,000 × 8.33% × 12 = ₹6,997",
      ],
    },
    mistakes: [
      "Computing bonus on actual basic instead of the capped calculation wage.",
      "Using ₹7,000 where the state minimum wage is higher and should be the ceiling.",
      "Excluding employees who are eligible because they joined mid-year.",
      "Paying bonus after the statutory time limit of eight months from the close of the accounting year.",
    ],
    faqs: [
      {
        q: "Is statutory bonus mandatory?",
        a: "For covered establishments and eligible employees, the minimum bonus of 8.33% is payable even if there is no allocable surplus, subject to the statute's conditions.",
      },
      {
        q: "What is the maximum bonus?",
        a: "20% of the calculation wage.",
      },
      {
        q: "Can monthly bonus be paid in advance?",
        a: "Some employers pay bonus monthly as part of salary. It must still meet the statutory minimum for the year when reconciled.",
      },
    ],
    related: [
      { label: "Statutory bonus explained", href: "/blog/statutory-bonus-payment-of-bonus-act" },
      { label: "Minimum wages in India", href: "/blog/minimum-wages-in-india-explained" },
      { label: "India payroll", href: "/india-payroll" },
    ],
    sources: [MOLE],
    statutory: true,
  },
  {
    slug: "salary-hike-calculator",
    name: "Salary hike calculator",
    seoTitle: "Salary Hike Calculator: Percentage Increase & New Salary",
    tagline: "Work out your percentage hike, or your new salary after a raise.",
    metaDesc:
      "Free salary hike calculator. Find the percentage increment from current and new salary, or the new salary from a hike percentage, with a worked example.",
    explanation: [
      "A salary hike is usually expressed as a percentage of current CTC. This calculator works both ways: from two salaries to a percentage, or from a percentage to the new salary.",
      "In-hand pay will not rise by the same percentage, because PF, tax and the salary structure change with it.",
    ],
    formula: [
      "Hike % = (new salary − current salary) ÷ current salary × 100",
      "New salary = current salary × (1 + hike % ÷ 100)",
    ],
    example: {
      title: "Current CTC ₹8,00,000, hike of 12%",
      lines: [
        "New CTC = ₹8,00,000 × 1.12 = ₹8,96,000",
        "Increase = ₹96,000 a year, about ₹8,000 a month before deductions",
      ],
    },
    mistakes: [
      "Comparing a hike on CTC with a change in in-hand pay.",
      "Including one-time joining or retention bonus in the base.",
      "Forgetting that a higher basic increases PF and may move the employee out of ESI.",
    ],
    faqs: [
      {
        q: "Is the hike calculated on CTC or gross?",
        a: "Most Indian companies express increments on annual CTC. Check your letter to see which base is used.",
      },
      {
        q: "Why did my in-hand rise less than the hike?",
        a: "Higher pay increases employee PF and TDS, and may change PT, so the net increase is smaller than the percentage on CTC.",
      },
    ],
    related: [
      { label: "Take-home salary calculator", href: "/tools/take-home-salary-calculator" },
      { label: "Compensation planning in NeevHR", href: "/features/compensation" },
      { label: "Performance management", href: "/features/performance" },
    ],
    sources: [],
    statutory: false,
  },

  {
    slug: "tds-calculator",
    name: "Salary TDS calculator",
    seoTitle: "Salary TDS Calculator: Old vs New Tax Regime (FY 2026-27)",
    tagline: "Compare TDS on salary under the old and new tax regimes.",
    metaDesc:
      "Free salary TDS calculator for India. Compare tax under the old and new regimes with standard deduction, 80C, 80D, HRA and home loan interest, and see monthly TDS.",
    explanation: [
      "Employers deduct tax from salary (TDS) every month based on the employee's estimated income for the year and the regime they choose. The new regime has lower rates and a ₹75,000 standard deduction but few deductions; the old regime keeps deductions such as HRA, 80C and 80D.",
      "From 1 April 2026 the Income-tax Act, 2025 replaces the Income-tax Act, 1961. Section numbers you may know (such as 80C, 80D and 87A) are renumbered; this calculator uses the familiar names.",
    ],
    formula: [
      "New regime taxable = gross salary − ₹75,000",
      "New regime slabs: 0 to 4L nil, 4 to 8L 5%, 8 to 12L 10%, 12 to 16L 15%, 16 to 20L 20%, 20 to 24L 25%, above 24L 30%",
      "New regime rebate: no tax up to ₹12 lakh taxable, with marginal relief just above it",
      "Old regime taxable = gross − ₹50,000 − PT − exempt HRA − 80C (max ₹1.5L) − 80D − home loan interest (max ₹2L) − others",
      "Old regime slabs: 0 to 2.5L nil, 2.5 to 5L 5%, 5 to 10L 20%, above 10L 30%; rebate up to ₹12,500 when taxable income is ₹5 lakh or less",
      "Add surcharge above ₹50 lakh (with marginal relief) and 4% cess; monthly TDS ≈ annual tax ÷ 12",
    ],
    example: {
      title: "Gross salary ₹15,00,000, 80C ₹1,50,000, 80D ₹25,000, PT ₹2,400",
      lines: [
        "New regime: taxable ₹14,25,000, tax ₹93,750 + cess = ₹97,500 (₹8,125 a month)",
        "Old regime: taxable ₹12,72,600, tax ₹1,94,280 + cess = ₹2,02,051",
        "The new regime is lower by about ₹1,04,551 a year for this employee",
      ],
    },
    mistakes: [
      "Choosing a regime without comparing both on the employee's actual deductions.",
      "Claiming HRA, 80C or 80D under the new regime, where they are not allowed.",
      "Ignoring marginal relief for income just above ₹12 lakh.",
      "Not recomputing TDS when proofs fall short of declarations, causing a spike in the last quarter.",
    ],
    faqs: [
      {
        q: "Which regime applies if an employee does not choose?",
        a: "The new regime is the default. Employees who want the old regime must opt for it with their employer.",
      },
      {
        q: "Is income up to ₹12 lakh tax-free under the new regime?",
        a: "Taxable income up to ₹12 lakh has no tax after the rebate. For a salaried employee, the ₹75,000 standard deduction means gross salary up to ₹12,75,000 attracts no tax, if there is no other income.",
      },
      {
        q: "Can an employee switch regimes every year?",
        a: "Salaried employees without business income can choose the regime each year when filing their return, even if they told the employer otherwise for TDS.",
      },
      {
        q: "Why does TDS change during the year?",
        a: "TDS is re-projected each month as salary, arrears, bonus and verified proofs change, so the remaining months absorb the difference.",
      },
    ],
    related: [
      { label: "TDS on salary: old vs new regime", href: "/blog/tds-on-salary-old-vs-new-regime-fy-2026-27" },
      { label: "HRA calculator", href: "/tools/hra-calculator" },
      { label: "Form 16 explained", href: "/blog/form-16-explained" },
      { label: "India payroll: TDS and Form 24Q", href: "/india-payroll#tds" },
    ],
    sources: [ITD],
    statutory: true,
  },
  {
    slug: "ctc-calculator",
    name: "CTC calculator",
    seoTitle: "CTC Calculator: Salary Breakup from CTC (Basic, HRA, PF)",
    tagline: "Break an annual CTC into basic, HRA, special allowance and employer costs.",
    metaDesc:
      "Free CTC calculator for India. Split annual CTC into basic, HRA and special allowance, with employer PF, gratuity and employer ESI shown inside CTC.",
    explanation: [
      "Cost to Company (CTC) includes the employer's own costs, so the salary an employee earns (gross) is lower than CTC. This calculator builds a common Indian structure: basic as a share of CTC, HRA as a share of basic, employer PF and a gratuity provision inside CTC, and a special allowance that balances the rest.",
      "Where monthly gross is ₹21,000 or less, the employer's 3.25% ESI contribution is also carved out of CTC.",
    ],
    formula: [
      "Basic = 40% or 50% of CTC",
      "HRA = 50% of basic (metro) or 40% (non-metro)",
      "Employer PF = 12% of basic, or of ₹15,000 if capped",
      "Gratuity provision = 4.81% of basic",
      "Gross = CTC − employer PF − gratuity (− employer ESI if gross ≤ ₹21,000 a month)",
      "Special allowance = gross − basic − HRA",
    ],
    example: {
      title: "Annual CTC ₹6,00,000, basic 40%, metro, PF capped",
      lines: [
        "Monthly CTC ₹50,000; basic ₹20,000; HRA ₹10,000",
        "Employer PF ₹1,800; gratuity provision ₹962",
        "Gross ₹47,238; special allowance ₹17,238",
      ],
    },
    mistakes: [
      "Setting basic so low that allowances exceed half of pay, which the Labour Codes' wage definition adds back for PF and gratuity.",
      "Forgetting employer ESI inside CTC for lower-paid employees.",
      "Quoting CTC without explaining that take-home is lower.",
      "Building structures that differ between offer letters and payroll.",
    ],
    faqs: [
      {
        q: "Is gratuity part of CTC?",
        a: "Many employers include a gratuity provision (commonly 4.81% of basic) in CTC; others do not. It is a policy choice that should be stated in the offer.",
      },
      {
        q: "What is the difference between CTC and gross salary?",
        a: "Gross is what the employee earns before deductions. CTC adds the employer's costs such as employer PF, gratuity provision and employer ESI.",
      },
      {
        q: "How do I get take-home from CTC?",
        a: "Deduct employee PF, professional tax and TDS from gross. The take-home salary calculator does this for you.",
      },
    ],
    related: [
      { label: "Take-home salary calculator", href: "/tools/take-home-salary-calculator" },
      { label: "What is CTC?", href: "/glossary/ctc" },
      { label: "Salary structure and CTC breakup", href: "/blog/salary-structure-ctc-breakup-explained" },
      { label: "Payroll software", href: "/payroll" },
    ],
    sources: [EPFO, ESIC],
    statutory: true,
  },
  {
    slug: "leave-encashment-calculator",
    name: "Leave encashment calculator",
    seoTitle: "Leave Encashment Calculator: Formula, Tax & Example",
    tagline: "Estimate the value of unused leave paid out in service or at exit.",
    metaDesc:
      "Free leave encashment calculator for India. Estimate encashment from basic + DA and leave days, with the formula, tax treatment and the ₹25 lakh exemption limit.",
    explanation: [
      "Leave encashment pays an employee for unused earned leave, either during service (if the policy allows) or at exit. The amount is usually the daily rate of basic + DA multiplied by the days encashed; the daily rate uses 30 or 26 days depending on policy.",
      "Encashment during service is fully taxable. At retirement or resignation, a non-government employee's encashment is exempt up to the least of several limits, with an overall cap of ₹25 lakh.",
    ],
    formula: [
      "Per-day rate = monthly basic + DA ÷ 30 (or 26, per policy)",
      "Encashment = per-day rate × leave days encashed",
    ],
    example: {
      title: "Basic + DA ₹40,000, 24 days, 30-day month",
      lines: ["Per-day rate: ₹40,000 ÷ 30 = ₹1,333.33", "Encashment: ₹1,333.33 × 24 = ₹32,000"],
    },
    mistakes: [
      "Using gross when the policy says basic + DA, or the reverse.",
      "Encashing leave types the policy does not allow to be encashed.",
      "Treating in-service encashment as tax-exempt.",
      "Leaving encashment out of the full and final settlement.",
    ],
    faqs: [
      {
        q: "Is leave encashment mandatory?",
        a: "Encashment of unused earned leave at exit is common and required by many state laws for covered establishments. Encashment during service depends on company policy.",
      },
      {
        q: "Is leave encashment taxable?",
        a: "During service, yes. At retirement or resignation, non-government employees get an exemption up to the least of the statutory limits, capped at ₹25 lakh over their working life.",
      },
    ],
    related: [
      { label: "Full and final settlement calculator", href: "/tools/full-and-final-calculator" },
      { label: "Leave types in India", href: "/blog/leave-types-in-india-explained" },
      { label: "Leave management software", href: "/features/leave" },
    ],
    sources: [ITD],
    statutory: true,
  },
  {
    slug: "overtime-calculator",
    name: "Overtime calculator",
    seoTitle: "Overtime Calculator India: Twice the Ordinary Rate",
    tagline: "Work out overtime pay from monthly wages and overtime hours.",
    metaDesc:
      "Free overtime calculator for India. Convert monthly wages to an hourly rate and calculate overtime at twice the ordinary rate, with a worked example.",
    explanation: [
      "Where statutory overtime applies, such as factories under the Occupational Safety, Health and Working Conditions Code, 2020 (in force from 21 November 2025) and many shops and establishments under state law, overtime is paid at twice the ordinary rate of wages.",
      "The ordinary rate is usually derived from monthly wages divided by working days and normal daily hours. State rules and your policy decide which allowances count as wages and the limits on overtime hours.",
    ],
    formula: [
      "Hourly ordinary rate = monthly ordinary wages ÷ (working days × normal hours per day)",
      "Overtime pay = hourly rate × 2 × overtime hours",
    ],
    example: {
      title: "Wages ₹18,000, 26 days of 8 hours, 20 overtime hours",
      lines: [
        "Hourly rate: ₹18,000 ÷ 208 = ₹86.54",
        "Overtime rate: ₹173.08 an hour",
        "Overtime pay: ₹173.08 × 20 = ₹3,462",
      ],
    },
    mistakes: [
      "Paying overtime at the ordinary rate instead of twice the rate where the law requires double.",
      "Leaving allowances out of the ordinary rate when they form part of wages.",
      "Exceeding the permitted overtime hours in a quarter.",
      "Not recording overtime approvals, which makes payroll hard to defend in an inspection.",
    ],
    faqs: [
      {
        q: "Is overtime always paid at double rate?",
        a: "Where statutory overtime provisions apply, yes. Employees outside those provisions, such as many managerial staff, are governed by their contract and company policy.",
      },
      {
        q: "Does overtime count for PF and ESI?",
        a: "Overtime is generally excluded from PF wages. For ESI, overtime paid is part of wages for contribution but not for deciding coverage.",
      },
    ],
    related: [
      { label: "Attendance and overtime rules in India", href: "/blog/attendance-and-overtime-rules-in-india" },
      { label: "Attendance management", href: "/features/attendance" },
      { label: "Shift and roster management", href: "/features/rostering" },
    ],
    sources: [MOLE],
    statutory: true,
  },
  {
    slug: "notice-period-calculator",
    name: "Notice period calculator",
    seoTitle: "Notice Period Calculator: Last Working Day & Buyout",
    tagline: "Find the last working day and the buyout for a shorter notice.",
    metaDesc:
      "Free notice period calculator. Find the last working day from the resignation date and notice period, and the buyout amount if the employee leaves early.",
    explanation: [
      "The notice period is set by the appointment letter or company policy, commonly 30, 60 or 90 days. The last working day is counted from the resignation date.",
      "If an employee leaves before completing notice, the shortfall is usually recovered (bought out) at a daily rate of salary, unless the employer waives it or adjusts it against leave.",
    ],
    formula: [
      "Last working day = resignation date + notice period (calendar days)",
      "Shortfall = full-notice last day − requested last day",
      "Buyout = shortfall days × monthly gross ÷ 30",
    ],
    example: {
      title: "Resigned 1 Oct 2026, 60-day notice, leaving 31 Oct 2026",
      lines: [
        "Full-notice last working day: 30 Nov 2026",
        "Shortfall: 30 days",
        "Buyout at ₹60,000 gross: 30 × ₹2,000 = ₹60,000",
      ],
    },
    mistakes: [
      "Counting working days when the contract says calendar days, or the reverse.",
      "Recovering notice on basic instead of the amount the contract specifies.",
      "Forgetting to record a waiver, which later looks like an unexplained recovery.",
    ],
    faqs: [
      {
        q: "Can leave be adjusted against notice?",
        a: "Only if the policy allows it. Many policies do not allow earned leave to shorten the notice period.",
      },
      {
        q: "Is notice pay recovery taxable?",
        a: "The recovery reduces what the employee receives in full and final settlement. Treat it as your tax adviser recommends.",
      },
    ],
    related: [
      { label: "Notice period and buyout explained", href: "/blog/notice-period-and-buyout-explained" },
      { label: "Full and final settlement calculator", href: "/tools/full-and-final-calculator" },
      { label: "Exit management", href: "/features/exit" },
    ],
    sources: [],
    statutory: false,
  },
  {
    slug: "full-and-final-calculator",
    name: "Full and final settlement calculator",
    seoTitle: "Full and Final Settlement Calculator: F&F Amount",
    tagline: "Estimate the net F&F: salary, leave encashment and gratuity, less recoveries.",
    metaDesc:
      "Free full and final settlement calculator for India. Estimate net F&F from salary for days worked, leave encashment and gratuity, less notice and loan recoveries.",
    explanation: [
      "Full and final settlement (F&F) is the last payment to an employee who leaves. It adds salary for the days worked in the last month, leave encashment, gratuity if eligible, and other dues, then deducts recoveries such as notice shortfall and loan balances.",
      "The Code on Wages, 2019, in force from 21 November 2025, requires wages to be paid within two working days of separation. Review your F&F timelines against it.",
    ],
    formula: [
      "Salary = monthly gross ÷ days in month × days worked",
      "Leave encashment = basic + DA ÷ 30 × leave days",
      "Gratuity = 15 × basic + DA × years ÷ 26 (if eligible, max ₹20 lakh)",
      "Notice recovery = basic + DA ÷ 30 × shortfall days (some policies use gross)",
      "Net = earnings − notice recovery − loans − other recoveries",
    ],
    example: {
      title: "Gross ₹60,000, basic ₹30,000, 12 days worked, 15 leave days, 6 years 4 months",
      lines: [
        "Salary for 12 days: ₹24,000",
        "Leave encashment: ₹15,000",
        "Gratuity for 6 years: ₹1,03,846",
        "Net before TDS: ₹1,42,846",
      ],
    },
    mistakes: [
      "Missing the gratuity rounding rule (more than six months counts as a year).",
      "Forgetting unreturned assets and outstanding advances.",
      "Not recomputing TDS on the final figures.",
      "Delaying payment beyond the statutory timeline.",
    ],
    faqs: [
      {
        q: "What is included in full and final settlement?",
        a: "Salary to the last working day, leave encashment, gratuity if eligible, pro-rata bonus and reimbursements, less recoveries such as notice shortfall, loans and assets.",
      },
      {
        q: "How soon must F&F be paid?",
        a: "The Code on Wages requires wages to be paid within two working days of separation. Gratuity is due within 30 days of becoming payable.",
      },
    ],
    related: [
      { label: "Full and final settlement explained", href: "/blog/full-and-final-settlement-explained" },
      { label: "Gratuity calculator", href: "/tools/gratuity-calculator" },
      { label: "Full and final settlement in NeevHR", href: "/features/full-and-final-settlement" },
    ],
    sources: [MOLE, ITD],
    statutory: true,
  },
];

export const toolBySlug = Object.fromEntries(tools.map((t) => [t.slug, t]));
