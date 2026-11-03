// Glossary terms added 03 Nov 2026 (audit WEB-029), appended to lib/glossary.ts. Each `short` is the
// meta description, so keep it between 140 and 155 characters.

import type { GlossaryTerm } from "@/lib/glossary";

const EPFO = { label: "EPFO", href: "https://www.epfindia.gov.in/" };
const ITD_FORMS = { label: "Income Tax Department: forms under the Income-tax Rules, 2026", href: "https://wm.incometaxindia.gov.in/w/faqs-on-forms-as-per-income-tax-rules-2026-1" };

export const moreGlossary: GlossaryTerm[] = [
  {
    slug: "eps",
    term: "EPS",
    full: "Employees' Pension Scheme",
    short:
      "EPS is the pension part of PF: 8.33% of the employer's 12% PF share goes to the Employees' Pension Scheme, which pays a monthly pension after service.",
    statutory: true,
    definition:
      "The Employees' Pension Scheme is the pension scheme run by EPFO alongside the Employees' Provident Fund. The employee does not contribute to it separately: 8.33% of PF wages is carved out of the employer's 12% PF contribution and credited to EPS, and the rest of the employer's share goes to EPF. The Central Government adds 1.16% on wages up to ₹15,000.",
    howItWorks: [
      "Employer EPS = 8.33% of PF wages up to the EPS wage ceiling; employer EPF = the employer's 12% minus EPS.",
      "From 17 September 2026 NeevHR applies the ₹25,000 PF wage ceiling to EPS as well, so the most diverted to EPS is ₹2,083 a month. Before that date the ceiling was ₹15,000 (at most ₹1,250). Confirm the EPS basis with your CA, as commentary differs.",
      "EPS membership: members who joined above the ceiling were outside EPS; G.S.R. 847(E) brings in those within the new ceiling when it was notified.",
      "A member with 10 years of eligible service can draw a monthly pension from age 58; with less, a withdrawal benefit is paid on leaving.",
    ],
    whyHrCares:
      "The EPS and EPF split changes what goes into each account in the ECR, and the wrong ceiling produces a mismatch EPFO will flag. It also decides whether a joiner is an EPS member at all.",
    example: {
      title: "PF wages of ₹25,000 from October 2026",
      lines: [
        "Employer 12%: ₹3,000",
        "EPS: 8.33% × ₹25,000 = ₹2,083 (rounded)",
        "EPF: ₹3,000 − ₹2,083 = ₹917",
        "Under the earlier ₹15,000 ceiling: EPS ₹1,250, EPF ₹1,750",
      ],
    },
    product: [
      { label: "Payroll with PF, ESI, PT and TDS", href: "/payroll" },
      { label: "Statutory compliance", href: "/features/compliance" },
    ],
    related: [
      { label: "PF wage ceiling ₹25,000", href: "/pf-wage-ceiling-25000" },
      { label: "What is PF?", href: "/glossary/pf" },
      { label: "PF calculator", href: "/tools/pf-calculator" },
    ],
    sources: [EPFO],
  },
  {
    slug: "edli",
    term: "EDLI",
    full: "Employees' Deposit Linked Insurance",
    short:
      "EDLI is the life cover attached to PF: the employer pays 0.5% of PF wages and EPFO pays a lump sum to the nominee if a member dies while in service.",
    statutory: true,
    definition:
      "The Employees' Deposit Linked Insurance Scheme gives every PF member life insurance without a separate policy. The employer alone contributes, at 0.5% of PF wages up to the wage ceiling, and the benefit is paid by EPFO to the nominee or legal heir when a member dies in service.",
    howItWorks: [
      "Employer EDLI = 0.5% of PF wages up to the PF wage ceiling (₹25,000 from 17 September 2026), so at most ₹125 a month.",
      "Nothing is deducted from the employee's salary for EDLI.",
      "The benefit is linked to the member's recent wages and PF balance, within the minimum and maximum the scheme sets.",
      "Employers with an approved group scheme giving better cover can apply for exemption.",
    ],
    whyHrCares:
      "EDLI is paid with the monthly ECR, so it is part of employer cost in every CTC. Nominations matter: the claim goes to the nominee recorded with EPFO.",
    example: {
      title: "PF wages of ₹30,000, ceiling ₹25,000",
      lines: ["EDLI wages: ₹25,000", "Employer EDLI: 0.5% × ₹25,000 = ₹125 a month", "Employee deduction for EDLI: nil"],
    },
    product: [{ label: "Payroll with PF, ESI, PT and TDS", href: "/payroll" }],
    related: [
      { label: "What is PF?", href: "/glossary/pf" },
      { label: "PF wage ceiling ₹25,000", href: "/pf-wage-ceiling-25000" },
    ],
    sources: [EPFO],
  },
  {
    slug: "vpf",
    term: "VPF",
    full: "Voluntary Provident Fund",
    short:
      "VPF is an extra PF contribution an employee chooses above the mandatory 12%, credited to their EPF account at the EPF interest rate with no employer match.",
    statutory: true,
    definition:
      "The Voluntary Provident Fund lets an employee put more than the mandatory 12% of PF wages into their EPF account. The employer deducts the extra amount from salary and remits it with the regular PF; the employer is not required to match it.",
    howItWorks: [
      "The employee chooses a percentage or amount above 12%, up to 100% of basic plus DA.",
      "It earns the same interest as EPF and follows the same withdrawal rules.",
      "Interest on an employee's own contributions above the limit set in the Income-tax Act is taxable.",
      "The choice is usually made once for the year and changed through HR.",
    ],
    whyHrCares:
      "VPF reduces take-home pay and must be shown separately on the payslip and in the ECR. Employees often ask HR to stop or change it mid-year.",
    example: {
      title: "Basic of ₹40,000 with VPF of 8%",
      lines: ["Mandatory employee PF: 12% × ₹40,000 = ₹4,800", "VPF: 8% × ₹40,000 = ₹3,200", "Total employee deduction: ₹8,000 a month", "Employer share: unchanged"],
    },
    product: [{ label: "Payroll with PF, ESI, PT and TDS", href: "/payroll" }],
    related: [
      { label: "What is PF?", href: "/glossary/pf" },
      { label: "Take-home salary calculator", href: "/tools/take-home-salary-calculator" },
    ],
    sources: [EPFO],
  },
  {
    slug: "form-12bb",
    term: "Form 12BB",
    full: "now Form 124",
    short:
      "Form 12BB, now Form 124 from Tax Year 2026-27, is the employee's statement of HRA, LTA, home loan and other claims the employer uses to work out TDS.",
    statutory: true,
    definition:
      "Form 12BB is the statement an employee gives the employer listing the claims that reduce tax on salary: house rent, leave travel, interest on a home loan and deductions such as investments and insurance. Under the Income-tax Rules, 2026 it is Form 124, a statement of claims under section 392(5)(b) of the Income-tax Act, 2025.",
    howItWorks: [
      "The employee declares expected claims at the start of the year so TDS is spread correctly.",
      "Before the last months of the year the employee gives proof; claims without proof are dropped and TDS is recomputed.",
      "Rent above the limit needs the landlord's PAN; a home loan claim needs the lender's details.",
      "Claims only reduce TDS under the regime the employee chooses; the new regime allows few of them.",
    ],
    whyHrCares:
      "Wrong or late declarations cause large TDS in February and March. Form 124 must be kept as evidence for the deductions shown in the quarterly statement.",
    example: {
      title: "Rent of ₹25,000 a month",
      lines: ["Annual rent ₹3,00,000; a rent claim above the limit in the form needs the landlord's PAN", "HRA exemption is allowed only under the old regime", "Without proof by the cut-off, the HRA claim is removed and TDS rises"],
    },
    product: [{ label: "Income tax and declarations", href: "/features/income-tax" }],
    related: [
      { label: "Income-tax Act, 2025 payroll changes", href: "/income-tax-act-2025-payroll-changes" },
      { label: "HRA calculator", href: "/tools/hra-calculator" },
      { label: "What is HRA?", href: "/glossary/hra" },
    ],
    sources: [ITD_FORMS],
  },
  {
    slug: "tan",
    term: "TAN",
    full: "Tax Deduction and Collection Account Number",
    short:
      "TAN is the ten-character number an employer that deducts TDS on salary must hold and quote on each challan, quarterly statement and salary certificate.",
    statutory: true,
    definition:
      "The Tax Deduction and Collection Account Number identifies a deductor to the Income Tax Department. An employer deducting tax at source must apply for one and quote it on every TDS payment, statement and certificate. Under the Income-tax Rules, 2026 the application is Form 134 or 135, under section 397 of the Income-tax Act, 2025.",
    howItWorks: [
      "It has ten characters: four letters, five digits and a letter.",
      "Each deducting branch or division may hold its own TAN, or one TAN can cover the company.",
      "TAN is different from PAN; quoting a PAN where a TAN is needed causes the payment to fail to match.",
      "Salary TDS paid under one TAN must be reported in that TAN's quarterly statement.",
    ],
    whyHrCares:
      "A wrong TAN on a challan or statement leaves tax unmatched, so employees' tax credits do not appear and they receive notices.",
    example: {
      title: "Two offices, one company",
      lines: ["Mumbai office deducts salary TDS under its TAN", "Pune office has a separate TAN", "Each TAN files its own quarterly Form 138 for its employees"],
    },
    product: [{ label: "Income tax and declarations", href: "/features/income-tax" }],
    related: [
      { label: "Income-tax Act, 2025 payroll changes", href: "/income-tax-act-2025-payroll-changes" },
      { label: "Form 24Q explained", href: "/blog/form-24q-explained" },
    ],
    sources: [ITD_FORMS],
  },
  {
    slug: "regularisation",
    term: "Regularisation",
    full: "attendance regularisation",
    short:
      "Attendance regularisation is an employee's request to correct a missed or wrong punch, approved by the manager so the day counts correctly for payroll.",
    definition:
      "Regularisation is the process of correcting an attendance record after the fact. When a punch is missed, a device fails or an employee works off-site, the employee raises a request with the right times and reason, and the manager approves or rejects it.",
    howItWorks: [
      "The employee selects the day, the corrected in and out times and a reason.",
      "The request goes to the approver set in the attendance policy, often with a monthly limit.",
      "Once approved, the day is recalculated: present, half-day, late mark or overtime.",
      "Requests must be closed before the payroll cut-off, or the day stays as recorded.",
    ],
    whyHrCares:
      "Unapproved regularisations are a common cause of wrong loss-of-pay. A clear limit and cut-off keeps payroll on time and stops attendance being rewritten after pay is processed.",
    example: {
      title: "Forgot to punch out",
      lines: ["Recorded: in 09:32, no out punch, so the day is incomplete", "Request: out 18:40, reason 'forgot to punch'", "Manager approves; the day becomes present with 9 hours 8 minutes"],
    },
    product: [{ label: "Attendance", href: "/features/attendance" }],
    related: [
      { label: "What is LOP?", href: "/glossary/lop" },
      { label: "Late coming policy and grace period", href: "/blog/late-coming-policy-grace-period" },
    ],
  },
  {
    slug: "ecr",
    term: "ECR",
    full: "Electronic Challan cum Return",
    short:
      "The ECR is the monthly file an employer uploads to EPFO listing each member's wages and PF, EPS and EDLI amounts, which generates the PF challan to pay.",
    statutory: true,
    definition:
      "The Electronic Challan cum Return is the monthly PF return. The employer uploads one line per member, with gross wages, EPF wages, EPS wages, EDLI wages and the contributions, to the EPFO unified portal. EPFO validates it and generates the challan for the month.",
    howItWorks: [
      "One line per member, identified by UAN.",
      "EPF, EPS and EDLI wages are each capped at their ceiling; NeevHR applies ₹25,000 to all three from 17 September 2026.",
      "The challan covers four accounts: EPF, EPS, EDLI and administration charges.",
      "Payment is due by the 15th of the month after the wage month.",
    ],
    whyHrCares:
      "A rejected or late ECR means the PF credit does not reach members' accounts, and damages and interest apply. The ECR must agree with the payroll register for the month.",
    example: {
      title: "One member, PF wages ₹25,000",
      lines: ["EPF wages ₹25,000; EPS wages ₹25,000; EDLI wages ₹25,000", "Employee share ₹3,000; EPS ₹2,083; employer EPF ₹917", "EDLI ₹125 and admin ₹125 on the challan"],
    },
    product: [{ label: "Payroll with PF, ESI, PT and TDS", href: "/payroll" }],
    related: [
      { label: "ECR explained", href: "/blog/ecr-explained" },
      { label: "What is EPS?", href: "/glossary/eps" },
      { label: "Payroll compliance calendar FY 2026-27", href: "/payroll-compliance-calendar-2026-27" },
    ],
    sources: [EPFO],
  },
];
