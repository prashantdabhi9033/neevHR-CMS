// Calculators added 03 Nov 2026 (audit WEB-028), appended to the registry in lib/tools.ts.

import type { Tool } from "@/lib/tools";

export const moreTools: Tool[] = [
  {
    slug: "professional-tax-calculator",
    name: "Professional tax calculator",
    seoTitle: "Professional Tax Calculator by State: PT Slabs 2026",
    tagline: "Work out monthly and yearly professional tax for an employee by state.",
    metaDesc:
      "Free professional tax calculator for India. Pick the state and salary to see PT a month, the February amount and the yearly total, with sourced slabs.",
    explanation: [
      "Professional tax (PT) is a state tax on employment. The employer deducts it from salary and pays it to the state or the local body. Each state sets its own slab, so the same salary can attract ₹200 a month in one state and nothing in another.",
      "The Constitution caps PT at ₹2,500 a year per person (Article 276). States that reach the cap with ₹200 a month collect a higher amount in February, usually ₹300. Tamil Nadu and Kerala levy PT half-yearly on six months of income, collected by the local body.",
      "Delhi, Haryana, Uttar Pradesh and Rajasthan do not levy PT on salaried employees. The calculator covers the states with a NeevHR state payroll guide; each guide gives the source and review date of its slab.",
    ],
    formula: [
      "Monthly states: find the slab for the monthly gross salary; that is the deduction for the month",
      "Where the slab has a February amount, the year is 11 × the monthly amount + the February amount",
      "Half-yearly states: find the slab for six months of salary; the year is 2 × the half-yearly amount",
      "PT follows the state where the employee works",
    ],
    example: {
      title: "Monthly salary of ₹30,000",
      lines: [
        "Maharashtra (man): ₹200 a month, ₹300 in February, ₹2,500 a year",
        "Karnataka: ₹200 a month, ₹300 in February, ₹2,500 a year",
        "Gujarat: ₹200 a month, ₹2,400 a year",
        "Telangana: ₹200 a month, ₹2,400 a year",
        "Kerala: half-yearly income ₹1,80,000, so ₹1,250 a half-year, ₹2,500 a year",
        "Delhi: nil",
      ],
    },
    mistakes: [
      "Applying the head-office state's slab to employees who work in another state.",
      "Forgetting the higher February deduction where the state's slab has one.",
      "Deducting Maharashtra PT from a woman earning up to ₹25,000 a month, which is exempt.",
      "Treating Tamil Nadu or Kerala PT as monthly when it is levied on half-yearly income.",
      "Paying under the employee's registration (enrolment) instead of the employer's registration certificate.",
    ],
    faqs: [
      { q: "What is the maximum professional tax a year?", a: "₹2,500 per person a year, the limit in Article 276 of the Constitution. States reach it with ₹200 a month and ₹300 in February, or with ₹1,250 a half-year." },
      { q: "Which states have no professional tax?", a: "Among the states covered here, Delhi, Haryana, Uttar Pradesh and Rajasthan do not levy PT on salaried employees." },
      { q: "Is professional tax based on gross or basic salary?", a: "On the salary the state's Act defines, which is usually gross monthly salary. Check the state guide for the definition the state uses." },
      { q: "Are women exempt from professional tax?", a: "Only where the state's slab says so. In Maharashtra, women earning up to ₹25,000 a month pay nothing; most other states have one slab for everyone." },
    ],
    related: [
      { label: "Professional tax by state", href: "/blog/professional-tax-by-state-india" },
      { label: "What is professional tax?", href: "/glossary/pt" },
      { label: "Payroll compliance calendar FY 2026-27", href: "/payroll-compliance-calendar-2026-27" },
      { label: "India payroll rules", href: "/india-payroll" },
    ],
    sources: [
      { label: "Maharashtra GST: PT notifications", href: "https://www.mahagst.gov.in/en/profession-tax-and-allied-acts-notifications" },
      { label: "Karnataka Commercial Taxes: PT notifications", href: "https://gst.karnataka.gov.in/Profession.aspx" },
      { label: "Gujarat Commercial Tax: PT rates", href: "https://commercialtax.gujarat.gov.in/vatwebsite/download/schedule/Rate_of_Profession_Tax.pdf" },
      { label: "Telangana Commercial Taxes: PT schedule", href: "https://www.tgct.gov.in/tgportal/AllActs/APPT/APPTSchedule.aspx" },
      { label: "West Bengal PT schedule (from 1 April 2014)", href: "https://comtax.wb.gov.in/Ptax-Schedule-New_(w.e.f._1-4-2014).pdf" },
      { label: "Greater Chennai Corporation: professional tax", href: "https://chennaicorporation.gov.in/gcc/online-payment/profession-tax/" },
    ],
    statutory: true,
  },
];
