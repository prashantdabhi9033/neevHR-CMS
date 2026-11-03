// Statutory guides added 03 Nov 2026 (audit WEB-025 to WEB-027): the payroll compliance calendar, the
// Income-tax Act, 2025 changes for salary TDS, and the PF wage ceiling of ₹25,000. They render with the
// shared GuidePage template and are appended to lib/guides.ts, so the sitemap and Resources pick them up.
// Every rule names its source; anything not confirmed from an official text says so on the page.

import type { Guide } from "@/lib/guides";
import { calendarEvents, displayDate, CALENDAR_REVIEWED, CALENDAR_REVIEWED_ISO } from "@/lib/compliance-calendar";

const EPFO = { label: "EPFO: Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in/" };
const ESIC = { label: "ESIC: Employees' State Insurance Corporation", href: "https://www.esic.gov.in/" };
const EGAZETTE = { label: "eGazette of India (notification text)", href: "https://egazette.gov.in/" };
const ITD_FORMS = {
  label: "Income Tax Department: Forms as per Income-tax Rules, 2026 (old and new form numbers)",
  href: "https://wm.incometaxindia.gov.in/w/faqs-on-forms-as-per-income-tax-rules-2026-1",
};
const ITD_TDS = { label: "Income Tax Department e-filing: TDS compliance", href: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/tds-compliance" };

// Month-by-month table for the calendar guide, built from the same events as the .ics file.
const monthlyRows: string[][] = (() => {
  const byWage = new Map<string, { pf?: string; esi?: string; tds?: string }>();
  for (const e of calendarEvents) {
    const m = e.title.match(/for (\w+ \d{4}) wages|deducted in (\w+ \d{4})/);
    if (!m) continue;
    const wage = m[1] ?? m[2];
    const row = byWage.get(wage) ?? {};
    if (e.kind === "pf") row.pf = displayDate(e.date);
    if (e.kind === "esi") row.esi = displayDate(e.date);
    if (e.kind === "tds") row.tds = displayDate(e.date);
    byWage.set(wage, row);
  }
  return [...byWage.entries()].map(([wage, r]) => [wage, r.pf ?? "", r.esi ?? "", r.tds ?? ""]);
})();

const returnRows: string[][] = calendarEvents
  .filter((e) => e.kind === "return" || e.kind === "certificate")
  .map((e) => [e.title, displayDate(e.date)]);

export const statutoryGuides: Guide[] = [
  {
    slug: "payroll-compliance-calendar-2026-27",
    crumb: "Payroll compliance calendar FY 2026-27",
    eyebrow: "Compliance calendar",
    h1: "Payroll Compliance Calendar FY 2026-27: PF, ESI, TDS, PT and LWF Due Dates",
    seoTitle: "Payroll Compliance Calendar FY 2026-27",
    description:
      "Payroll due dates for FY 2026-27: PF and ESI by the 15th, salary TDS by the 7th, Form 138 quarters, Form 130, and state PT and LWF, with a calendar file.",
    published: "2026-11-03",
    reviewed: CALENDAR_REVIEWED,
    reviewedIso: CALENDAR_REVIEWED_ISO,
    lead:
      "Every payroll month in India ends with the same set of deposits and, each quarter, a return. This calendar lists the national due dates for wage months April 2026 to March 2027 and the returns that follow, then the state professional tax and labour welfare fund dates for the states we cover. Download the calendar file to add every date to Outlook or Google Calendar.",
    download: {
      label: "Download the calendar (.ics)",
      href: "/payroll-compliance-calendar-2026-27/calendar.ics",
      note: "National dates only: PF, ESI, salary TDS, Form 138 quarters and Form 130. State dates differ by state and employer size, so add those from the table below.",
    },
    sections: [
      {
        id: "monthly",
        title: "Monthly deposits: PF, ESI and salary TDS",
        body: [
          "PF and ESI for a wage month are both due by the 15th of the following month. Salary TDS deducted in a month is due by the 7th of the following month, except tax deducted in March, which is due by 30 April.",
          "The dates are the statutory last day. Pay a few days early: the EPFO and ESIC portals slow down near the 15th, and a challan generated on the due date can fail to clear the same day.",
        ],
        table: { head: ["Wage month", "PF (ECR)", "ESI", "Salary TDS"], rows: monthlyRows },
      },
      {
        id: "quarterly",
        title: "Quarterly and annual returns for salary TDS",
        body: [
          "From Tax Year 2026-27 the Income-tax Act, 2025 and the Income-tax Rules, 2026 apply. The quarterly statement of TDS on salary that was Form 24Q is now Form 138, and the salary certificate that was Form 16 is now Form 130 (Income Tax Department form list).",
          "The dates below are the ones published for the earlier Form 24Q and Form 16 and widely reported for Tax Year 2026-27. One compliance publication reports that the Income-tax Rules, 2026 revise the quarterly statement dates; we could not confirm a revision from an official text, so check the TRACES or e-filing portal before relying on them.",
        ],
        table: { head: ["Return or certificate", "Due date"], rows: returnRows },
      },
      {
        id: "states",
        title: "State professional tax and labour welfare fund",
        body: [
          "Professional tax (PT) and labour welfare fund (LWF) are state levies, so the due date depends on the state, the employer's size and sometimes the local body. The table summarises the states with a NeevHR state guide; each guide gives the slab, the rule and its source.",
          "State dates change by notification more often than national ones. Maharashtra moved its monthly PT return to the 15th of the following month by a notification of 28 February 2026, and West Bengal published a proposed new PT schedule from 1 October 2026 that was not final when we reviewed it.",
        ],
        table: {
          head: ["State", "Professional tax", "Labour welfare fund"],
          rows: [
            ["Gujarat", "Monthly by the 15th with Form 5 (20 or more employees); quarterly for fewer", "June and December wages; pay before 15 July and 15 January"],
            ["Maharashtra", "Monthly return by the 15th of the following month (from the 28 Feb 2026 notification); annual if last year's liability was under ₹1,00,000", "June and December wages; pay before 15 July and 15 January"],
            ["Karnataka", "Form 5-A within 20 days of the end of the month", "December wages; pay by 15 January"],
            ["Tamil Nadu", "Half-yearly: deduct from August and January salaries; pay by 30 September and 31 March", "December wages; pay before 31 January"],
            ["Kerala", "Half-yearly: commonly by 31 August and the end of February; confirm with your local body", "Shops and establishments fund: monthly"],
            ["Telangana", "Monthly return in Form V with the challan", "December wages; commonly paid with the annual return by 31 January"],
            ["West Bengal", "Monthly deposit; one annual return after the year ends", "Half-years ending 30 June and 31 December; confirm dates with the Labour Department"],
            ["Delhi", "Not levied", "Half-yearly; pay before 15 July and 15 January"],
            ["Haryana", "Not levied", "Pay both shares before 31 December each year (monthly payment also possible)"],
            ["Uttar Pradesh", "Not levied", "No regular contribution"],
            ["Rajasthan", "Not levied on salaried employees", "Not levied"],
          ],
        },
      },
      {
        id: "what-changed",
        title: "What changed in FY 2026-27",
        bullets: [
          "PF wage ceiling raised from ₹15,000 to ₹25,000 a month from 17 September 2026 (S.O. 5109(E)). September 2026 is a split month.",
          "The Income-tax Act, 2025 applies from 1 April 2026: salary TDS is under section 392, Form 24Q became Form 138 and Form 16 became Form 130.",
          "Karnataka LWF now covers establishments with 10 or more persons, from 7 January 2026, so more employers pay for calendar year 2026 by 15 January 2027.",
          "Maharashtra PT monthly return moved to the 15th of the following month.",
        ],
      },
      {
        id: "in-neevhr",
        title: "How an HRMS keeps these dates",
        body: [
          "In NeevHR every published payroll run creates its PF, ESI, TDS, PT and LWF obligations with the due date for that state and statute, and the compliance calendar shows what is due, paid and overdue. The dates follow the same rules as this page, including the 30 April date for March TDS and the last day of a short month.",
        ],
      },
    ],
    faqs: [
      { q: "When is PF due for October 2026 wages?", a: "By 15 November 2026, through the ECR on the EPFO unified portal. ESI for October 2026 wages is due the same day." },
      { q: "Is March TDS due on 7 April?", a: "No. TDS deducted in March is due by 30 April. Every other month is due by the 7th of the following month." },
      { q: "What are Form 138 and Form 130?", a: "From Tax Year 2026-27, Form 138 is the quarterly statement of TDS on salary that was Form 24Q, and Form 130 is the salary TDS certificate that was Form 16." },
      { q: "Does the calendar file include state PT and LWF?", a: "No. State dates differ by state, employer size and local body, so the file carries national dates only. Use the state table on this page and the state guides." },
    ],
    related: [
      { label: "India payroll rules", href: "/india-payroll" },
      { label: "Statutory compliance in NeevHR", href: "/features/compliance" },
      { label: "Payroll compliance checklist", href: "/blog/payroll-compliance-checklist-india" },
      { label: "PF wage ceiling ₹25,000", href: "/pf-wage-ceiling-25000" },
      { label: "Income-tax Act, 2025 payroll changes", href: "/income-tax-act-2025-payroll-changes" },
      { label: "Professional tax calculator", href: "/tools/professional-tax-calculator" },
    ],
    cta: "See every due date on your own payroll",
    sources: [
      EPFO,
      ESIC,
      ITD_FORMS,
      ITD_TDS,
      { label: "Maharashtra GST: PT notifications", href: "https://www.mahagst.gov.in/en/profession-tax-and-allied-acts-notifications" },
      { label: "Karnataka PT portal FAQ", href: "https://ptax.karnataka.gov.in/ptemployer/FAQ" },
      { label: "Gujarat Labour Welfare Board", href: "https://glwb.gujarat.gov.in" },
    ],
  },
  {
    slug: "income-tax-act-2025-payroll-changes",
    crumb: "Income-tax Act, 2025 for payroll",
    eyebrow: "Statutory guide",
    h1: "Income-tax Act, 2025: What Changes for Salary TDS and Payroll",
    seoTitle: "Income-tax Act, 2025: Payroll and Salary TDS Changes",
    description:
      "How the Income-tax Act, 2025 changes salary TDS from Tax Year 2026-27: section 392, Form 130 for 16, Form 138 for 24Q, Forms 123 and 124, and what stays.",
    published: "2026-11-03",
    reviewed: "03 Nov 2026",
    reviewedIso: "2026-11-03",
    lead:
      "The Income-tax Act, 2025 replaced the Income-tax Act, 1961 from 1 April 2026, and the Income-tax Rules, 2026 replaced the 1962 Rules. For payroll, most of the work is the same; what changes is the vocabulary: 'tax year' instead of 'previous year', new section numbers and new form numbers. This guide maps the old references to the new ones so payslips, declarations, challans and certificates use the right names.",
    sections: [
      {
        id: "form-map",
        title: "Old and new form numbers for payroll",
        body: [
          "The Income Tax Department publishes the full list of forms under the Income-tax Rules, 2026 with the 1962 form each one replaces. These are the ones a payroll team uses.",
        ],
        table: {
          head: ["Purpose", "Up to Tax Year 2025-26 (1962 Rules)", "From Tax Year 2026-27 (2026 Rules)"],
          rows: [
            ["Salary TDS certificate to the employee", "Form 16", "Form 130 (certificate under section 395)"],
            ["Quarterly statement of TDS on salary", "Form 24Q", "Form 138 (statement under section 397(3)(b))"],
            ["Perquisites and profits in lieu of salary", "Form 12BA", "Form 123"],
            ["Employee's claims for deductions and exemptions", "Form 12BB", "Form 124 (section 392(5)(b))"],
            ["Income from a previous employer or other heads, for salary TDS", "Form 12B and 12BAA", "Form 122 (section 392(4)(a))"],
            ["TDS certificate other than salary", "Form 16A", "Form 131"],
            ["Quarterly TDS statement other than salary", "Form 26Q", "Form 140"],
            ["Annual Information Statement", "Form 26AS", "Form 168"],
            ["Application for TAN", "Form 49B", "Form 134 and 135 (section 397)"],
            ["Lower or nil deduction certificate", "Form 13", "Form 128 (section 395(1))"],
          ],
        },
      },
      {
        id: "sections",
        title: "Section numbers payroll documents refer to",
        table: {
          head: ["Topic", "Income-tax Act, 1961", "Income-tax Act, 2025"],
          rows: [
            ["TDS on salary", "Section 192", "Section 392"],
            ["Employee's evidence of claims", "Section 192(2D)", "Section 392(5)(b)"],
            ["TDS certificates", "Section 203", "Section 395"],
            ["TAN and quarterly statements", "Sections 203A and 200(3)", "Section 397"],
            ["The year income is taxed in", "Previous year and assessment year", "Tax year"],
          ],
        },
        body: [
          "Section numbers in the form descriptions are taken from the department's form list. Check any section you quote in a letter or policy against the Act itself.",
        ],
      },
      {
        id: "same",
        title: "What stays the same",
        bullets: [
          "The employer still estimates the year's salary income, applies the regime the employee chooses, and deducts tax evenly over the remaining months.",
          "Salary TDS is still deposited monthly: by the 7th of the following month, and by 30 April for tax deducted in March.",
          "Employees still declare investments and rent at the start of the year and give proof before the last months, now on Form 124 instead of Form 12BB.",
          "Quarterly statements and an annual certificate to each employee continue, under the new form numbers.",
        ],
      },
      {
        id: "challan",
        title: "Challans and payment codes",
        body: [
          "Deposits for Tax Year 2026-27 are made under the Income-tax Act, 2025, so choose the salary code for section 392 on e-Pay Tax rather than the old section 192 code. The quarterly Form 138 statement carries the challan details, so each challan must match the deductions it covers.",
        ],
      },
      {
        id: "checklist",
        title: "Checklist for payroll from April 2026",
        steps: [
          { t: "Rename documents", b: "Payslips, declaration forms, letters and policies should say Form 130, Form 124 and Form 123, and 'tax year', for 2026-27 onwards." },
          { t: "Keep two sets for one year", b: "Certificates and corrections for Tax Year 2025-26 still use Form 16 and Form 24Q; only 2026-27 onwards uses the new forms." },
          { t: "Check payment codes", b: "Salary TDS deposited for 2026-27 uses the section 392 codes; reconcile each challan before the quarterly statement." },
          { t: "Re-collect declarations", b: "Ask employees to submit claims on Form 124 for Tax Year 2026-27." },
          { t: "Update your software", b: "The Form 138 file format and the Form 130 layout are new; confirm your payroll system generates them." },
        ],
      },
    ],
    faqs: [
      { q: "Is Form 16 replaced by Form 130?", a: "For Tax Year 2026-27 onwards, yes. The Income Tax Department's form list shows Form 130 as the certificate for tax deducted on salary under section 395, replacing Form 16. Form 16 still applies to Tax Year 2025-26 and earlier." },
      { q: "Which form replaces Form 12BB?", a: "Form 124, the statement of an employee's claims for deduction of tax under section 392(5)(b)." },
      { q: "Has the TDS deposit date changed?", a: "No. Salary TDS is still due by the 7th of the following month, and by 30 April for tax deducted in March." },
      { q: "What is a tax year?", a: "The Income-tax Act, 2025 uses 'tax year' for the financial year in which income is earned, in place of 'previous year' and 'assessment year'. Tax Year 2026-27 runs from 1 April 2026 to 31 March 2027." },
    ],
    related: [
      { label: "Income tax in NeevHR", href: "/features/income-tax" },
      { label: "TDS calculator", href: "/tools/tds-calculator" },
      { label: "Form 24Q explained", href: "/blog/form-24q-explained" },
      { label: "Payroll compliance calendar FY 2026-27", href: "/payroll-compliance-calendar-2026-27" },
    ],
    cta: "See salary TDS under the 2025 Act in NeevHR",
    sources: [ITD_FORMS, ITD_TDS, { label: "Income Tax Department", href: "https://www.incometaxindia.gov.in/" }],
  },
  {
    slug: "pf-wage-ceiling-25000",
    crumb: "PF wage ceiling ₹25,000",
    eyebrow: "Statutory update",
    h1: "PF Wage Ceiling Raised to ₹25,000: What Employers Must Change",
    seoTitle: "PF Wage Ceiling ₹25,000 from 17 Sep 2026: Employer Guide",
    description:
      "The PF wage ceiling is ₹25,000 a month from 17 September 2026: what it means for EPF, EPS and EDLI, the September split month, a worked example and policy.",
    published: "2026-11-03",
    reviewed: "03 Nov 2026",
    reviewedIso: "2026-11-03",
    lead:
      "From 17 September 2026 the wage ceiling for provident fund under the Code on Social Security, 2020 is ₹25,000 a month, up from ₹15,000. More employees fall within compulsory coverage, contributions for capped employees rise, and September 2026 straddles two ceilings. This guide explains what changed, how NeevHR reads the pension part, and what to update in payroll and policy.",
    sections: [
      {
        id: "notification",
        title: "What the notifications say",
        bullets: [
          "S.O. 5109(E), dated 17 September 2026, sets ₹25,000 a month as the wage ceiling for Chapter III of the Code on Social Security, 2020 (provident fund), replacing the ₹15,000 figure.",
          "G.S.R. 847(E), dated 25 September 2026 and effective from 17 September 2026, amends the Employees' Pension Scheme so that EPF members who were outside EPS, and whose wages were within the new ceiling when it was notified, become EPS members.",
          "G.S.R. 890(E), dated 15 October 2026, keeps the Central Government's own 1.16% pension contribution on wages up to ₹15,000.",
        ],
        body: [
          "We read these from published summaries of the notifications. Read the notification text on the eGazette and EPFO's circulars before you change payroll.",
        ],
      },
      {
        id: "eps",
        title: "EPS on ₹25,000: NeevHR's reading",
        body: [
          "Published commentary differs on one point: whether the employer's 8.33% diversion to the Employees' Pension Scheme is now worked out on wages up to ₹25,000 or stays on ₹15,000. NeevHR applies the new ceiling to EPS as well from 17 September 2026, so the most an employer diverts to EPS is ₹2,083 a month (8.33% of ₹25,000, rounded). The Central Government's 1.16% stays on ₹15,000 under G.S.R. 890(E).",
          "This is our reading of the notifications, not legal advice. Confirm the EPS basis with your CA or PF consultant before you file. In NeevHR the EPS ceiling is a dated setting, so a different reading is a settings change, not a code change.",
        ],
      },
      {
        id: "coverage",
        title: "Who is newly covered",
        bullets: [
          "Employees whose PF wages are up to ₹25,000 a month are within compulsory coverage. Before 17 September 2026 the line was ₹15,000.",
          "EPF members who were excluded from EPS because their wages were above ₹15,000 when they joined, and who were within ₹25,000 when the new ceiling was notified, come into EPS under G.S.R. 847(E).",
          "Employees above ₹25,000 when they first join are still not compulsorily covered, though employers may extend membership.",
        ],
      },
      {
        id: "example",
        title: "Worked example: PF wages of ₹30,000, contributions capped at the ceiling",
        table: {
          head: ["Line", "Ceiling ₹15,000 (to 16 Sep 2026)", "Ceiling ₹25,000 (from 17 Sep 2026)"],
          rows: [
            ["PF wage used", "₹15,000", "₹25,000"],
            ["Employee PF, 12%", "₹1,800", "₹3,000"],
            ["Employer EPS, 8.33%", "₹1,250", "₹2,083"],
            ["Employer EPF, the rest of 12%", "₹550", "₹917"],
            ["EDLI, 0.5%", "₹75", "₹125"],
            ["EPF admin charges, 0.5%", "₹75", "₹125"],
            ["Employer cost per month", "₹1,950", "₹3,250"],
          ],
        },
        body: [
          "The employee's take-home falls by ₹1,200 a month and the employer's cost rises by ₹1,300 when the contribution is capped at the ceiling. Where an employer already contributes on actual wages above the ceiling, the employee and employer 12% do not change; only the EPS and EPF split moves.",
        ],
      },
      {
        id: "september",
        title: "September 2026, a split month",
        body: [
          "The new ceiling applies from 17 September 2026, so 1 to 16 September falls under ₹15,000 and 17 to 30 September under ₹25,000. NeevHR apportions the ceiling by calendar days for September 2026: ₹15,000 × 16/30 + ₹25,000 × 14/30 = ₹19,666.67. Check EPFO's instructions for the September ECR; if EPFO prescribes a different treatment, the ECR should follow it.",
        ],
      },
      {
        id: "policy",
        title: "Policy and payroll wording to change",
        steps: [
          { t: "Replace '₹15,000'", b: "Offer letters, CTC structures and PF policies that say contributions are 'capped at ₹15,000' should say 'capped at the PF wage ceiling (₹25,000 from 17 September 2026)'." },
          { t: "Check CTC carve-outs", b: "Employer PF inside CTC rises for capped employees, so the balancing component falls unless CTC is revised." },
          { t: "Review EPS membership", b: "Identify members outside EPS who come in under G.S.R. 847(E) and update their records." },
          { t: "Recompute open months", b: "Months not yet published from 17 September 2026 should use the new ceiling; published months stay as filed unless your CA advises a correction." },
        ],
      },
    ],
    faqs: [
      { q: "What is the PF wage ceiling now?", a: "₹25,000 a month from 17 September 2026, under S.O. 5109(E). It was ₹15,000 before that date." },
      { q: "Is EPS also calculated on ₹25,000?", a: "NeevHR applies ₹25,000 to EPS from 17 September 2026, so the employer's EPS share is at most ₹2,083 a month. Commentary differs on this point, so confirm it with your CA." },
      { q: "Do employees earning more than ₹25,000 have to join PF?", a: "Not compulsorily if their PF wages are above ₹25,000 when they first join. Existing members stay members." },
      { q: "How should September 2026 be handled?", a: "It straddles two ceilings. NeevHR apportions by calendar days (16 days at ₹15,000 and 14 days at ₹25,000). Follow EPFO's instruction for the ECR if it differs." },
    ],
    related: [
      { label: "PF calculator", href: "/tools/pf-calculator" },
      { label: "What is PF?", href: "/glossary/pf" },
      { label: "What is EPS?", href: "/glossary/eps" },
      { label: "ECR explained", href: "/blog/ecr-explained" },
      { label: "Payroll with PF, ESI, PT and TDS", href: "/payroll" },
      { label: "Payroll compliance calendar FY 2026-27", href: "/payroll-compliance-calendar-2026-27" },
    ],
    cta: "See the new PF ceiling applied to your payroll",
    sources: [EGAZETTE, EPFO],
  },
];
