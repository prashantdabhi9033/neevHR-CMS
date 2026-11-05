// Long-form guide pages (spec §15, §27). Neutral, practical content: no
// rankings, no "No. 1" claims, NeevHR presented as one documented option.

import { site } from "@/lib/site";
import { statutoryGuides } from "@/lib/statutory-guides";

export type Guide = {
  slug: string;
  crumb: string;
  eyebrow: string;
  h1: string;
  seoTitle: string;
  description: string;
  published: string;
  lead: string;
  sections: {
    id: string;
    title: string;
    body?: string[];
    bullets?: string[];
    steps?: { t: string; b: string }[];
    table?: { head: string[]; rows: string[][] };
  }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  cta: string;
  /** Official sources shown under the article, newest rule first. */
  sources?: { label: string; href: string }[];
  /** A file the reader can download (for example a calendar). */
  download?: { label: string; href: string; note?: string };
  /** This guide's own statutory review date, when newer than the site-wide one. */
  reviewed?: string;
  reviewedIso?: string;
};

export const guides: Guide[] = [
  {
    slug: "best-hrms-software-india",
    crumb: "Choosing an HRMS in India",
    eyebrow: "Buyer's guide",
    h1: "How to Choose the Best HRMS Software in India",
    seoTitle: "Best HRMS Software in India: Selection Guide",
    description:
      "How to choose HRMS software in India: what to check for employee count, payroll and statutory compliance, attendance, integrations, implementation, security, pricing, support and reporting.",
    published: "2026-09-24",
    lead:
      "There is no single best HRMS for every Indian company. The right choice depends on your headcount, how complex your payroll is, how people clock in, and how much configuration your HR team wants to own. This guide sets out what to check, so you can compare vendors on evidence rather than rankings.",
    sections: [
      {
        id: "employee-count",
        title: "Start with employee count and structure",
        body: [
          "Headcount shapes almost every other requirement. A 100-person company in one office needs clean payroll and self-service. A 2,000-person company across states and legal entities needs multi-entity payroll, state-wise PT and LWF, data scopes and approval workflows.",
        ],
        table: {
          head: ["Size", "Typical priorities"],
          rows: [
            ["Up to 100 employees", "Accurate payroll and statutory filings, leave, basic attendance, self-service"],
            ["100 to 500", "Biometric attendance, shifts, approval workflows, reports, onboarding and exits"],
            ["500 to 1,000", "Multiple locations and states, data scopes by department, performance cycles"],
            ["1,000 and above", "Multiple entities, bulk actions, audit trails, integrations, field-level access control"],
          ],
        },
      },
      {
        id: "payroll",
        title: "Payroll complexity and statutory compliance",
        body: [
          "For an Indian company, payroll is where an HRMS proves itself. Ask each vendor to show a full cycle on your structures, not a slide.",
        ],
        bullets: [
          "Are PF, ESI, PT, LWF and TDS calculated natively, including old and new regime TDS with declarations and proofs?",
          "Which outputs are generated: ECR, ESI contribution file, challans, Form 24Q return file, Form 16?",
          "How are LOP, arrears, loans, variable pay and full and final settlement handled?",
          "Can state PT and LWF tables be updated in settings when rules change?",
          "Is there separation of duties between computing and approving payroll?",
        ],
      },
      {
        id: "attendance",
        title: "Attendance and time",
        bullets: [
          "Which biometric devices and protocols are supported, and how is compatibility confirmed?",
          "Can shifts, rosters, weekly-off policies and overtime rules be configured by group?",
          "How do regularisation, LOP and overtime flow into payroll?",
          "Is there a mobile app for attendance, and what does it cover?",
        ],
      },
      {
        id: "compliance",
        title: "Compliance and privacy",
        body: [
          "Beyond payroll statutes, employee data falls under the Digital Personal Data Protection Act, 2023. Check how consent, data principal requests, retention and deletion are handled.",
          "The four Labour Codes came into force on 21 November 2025, and rules are still being finalised in places. Ask how the vendor handles changes such as the wage definition and gratuity for fixed-term employees.",
        ],
      },
      {
        id: "integrations",
        title: "Integrations",
        bullets: [
          "Bank payment files for your banks",
          "Accounting export or connector for your finance system",
          "API and webhooks for your own systems",
          "Single sign-on, if your IT policy requires it",
          "Email, SMS or WhatsApp notifications",
        ],
        body: [
          "Ask which integrations are live today and which are planned. Plans are not integrations.",
        ],
      },
      {
        id: "implementation",
        title: "Implementation",
        body: [
          "Implementation time depends on employee count, data quality, integrations and payroll complexity. A credible plan includes configuration, data migration with validation, at least one parallel payroll run, and go-live.",
          "Ask who configures the system after go-live. If every policy change needs the vendor, your costs continue long after implementation.",
        ],
      },
      {
        id: "security",
        title: "Security",
        bullets: [
          "How is each customer's data isolated from others?",
          "Are PAN, Aadhaar and bank details encrypted?",
          "Is MFA available, and can it be enforced?",
          "Are administrative and payroll changes audit-logged?",
          "Where is data hosted?",
          "Which certifications are held today, as opposed to planned?",
        ],
      },
      {
        id: "pricing",
        title: "Pricing",
        body: [
          "HRMS pricing in India is usually per employee per month, by module, or by edition. Compare the total for your headcount and scope, including implementation, integrations and support, rather than the headline rate.",
        ],
      },
      {
        id: "support-reporting",
        title: "Support and reporting",
        bullets: [
          "What support is included during implementation and after go-live?",
          "Can HR build reports without the vendor, and click a chart to see the records behind it?",
          "Can reports be run as of a past date?",
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          `${site.entity} It is designed for organisations from about 500 to 5,000+ employees and covers employee management, attendance, leave, payroll with PF, ESI, PT, LWF and TDS, recruitment, performance, expenses and self-service on one effective-dated employee record.`,
          "Worth knowing when you compare: the NeevHR mobile app is built for Android and iPhone, single sign-on covers Google with Microsoft being switched on but not SAML, and NeevHR does not currently hold SOC 2 or ISO 27001 certification.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best HRMS for an Indian company?",
        a: "The best fit depends on your headcount, payroll complexity, attendance setup and integrations. Shortlist vendors that handle Indian statutory payroll natively, then ask each to run your own structures in a demo.",
      },
      {
        q: "What HRMS is suitable for 500 employees?",
        a: "At around 500 employees, look for biometric attendance with shifts, multi-location PT and LWF, approval workflows, data scopes by department, and payroll with statutory outputs, plus a realistic implementation plan.",
      },
      {
        q: "What HRMS is suitable for 1,000 employees?",
        a: "At 1,000 and above, add multi-entity support, bulk actions, audit trails, field-level access control and integrations with banks and accounting to the list.",
      },
      {
        q: "How much does HRMS software cost in India?",
        a: "Pricing is usually per employee per month, per module or by edition, plus implementation. Compare total cost for your scope rather than headline rates.",
      },
    ],
    related: [
      { label: "HRMS software for Indian companies", href: "/hrms" },
      { label: "HRMS comparison", href: "/compare" },
      { label: "HRMS implementation guide", href: "/hrms-implementation" },
      { label: "Payroll software", href: "/payroll" },
    ],
    cta: "Put NeevHR through this checklist",
  },
  {
    slug: "hrms-implementation",
    crumb: "HRMS implementation",
    eyebrow: "Implementation guide",
    h1: "HRMS Implementation: A Practical Guide for Indian Companies",
    seoTitle: "HRMS Implementation Guide: Steps and Timeline",
    description:
      "How an HRMS implementation works in India: preparation, configuration, data migration, parallel payroll, go-live and handover, with a realistic timeline and checklist.",
    published: "2026-09-24",
    lead:
      "A good HRMS implementation is mostly about data and decisions, not software. This guide explains the phases, what your team needs to prepare, and how to reach a first live payroll with confidence.",
    sections: [
      {
        id: "go-live-tools",
        title: "Tools in NeevHR that help you go live",
        bullets: [
          "Setup assistant: eight questions that shape your configuration",
          "Copy setup from one legal entity to another",
          "Preview as employee, to see what a person will see",
          "Go-live checks and an implementation tracker",
          "A readiness score per legal entity, with a link to fix each gap and a sign-off per area",
          "A state starter pack with official sources, for HR to review and accept",
          "Cut-over steps, and a go-live kit of scheduled welcome emails",
          "Help Centre inside the product",
        ],
      },
      {
        id: "timeline",
        title: "How long does it take?",
        body: [
          `${site.implementation} Companies with clean data, one legal entity and standard biometric devices tend to go faster. Multiple entities and states, messy historical data and custom integrations push it longer.`,
        ],
      },
      {
        id: "prepare",
        title: "What to prepare",
        bullets: [
          "Legal entities, statutory registrations (PAN, TAN, PF, ESI, PT, LWF) and locations",
          "Organisation structure: departments, grades, designations, cost centres and reporting lines",
          "Policies: leave, attendance and shifts, overtime, expenses, loans, appraisal",
          "Salary structures and components, and the PF basis you use",
          "Employee master data, current leave and loan balances, and year-to-date payroll figures",
          "Biometric device models and locations",
        ],
      },
      {
        id: "phases",
        title: "The phases",
        steps: [
          { t: "Configure", b: "Set up entities, masters, policies and pay structures, and assign them to employee groups." },
          { t: "Migrate", b: "Import the employee master, documents and opening balances with dry-run validation, then fix exceptions." },
          { t: "Connect", b: "Register biometric devices, notification channels and any API or webhook consumers." },
          { t: "Parallel run", b: "Run at least one payroll cycle in the new system alongside your current process and reconcile every difference." },
          { t: "Go live", b: "Run the first live payroll, open self-service to employees, and hand over reports." },
        ],
      },
      {
        id: "roles",
        title: "Who needs to be involved",
        table: {
          head: ["Role", "Responsibility"],
          rows: [
            ["HR lead", "Owns policies, data and sign-off"],
            ["Payroll", "Validates structures and reconciles the parallel run"],
            ["Finance", "Confirms GL mapping, bank files and approvals"],
            ["IT", "Devices, network, access and security review"],
            ["Vendor team", "Configuration support, migration and training"],
          ],
        },
      },
      {
        id: "risks",
        title: "Common risks and how to avoid them",
        bullets: [
          "Unclear policies: write down leave, attendance and pay rules before configuration starts.",
          "Dirty data: clean the employee master first; migration only moves what you give it.",
          "Skipping the parallel run: it is the only reliable way to catch payroll differences.",
          "Late device testing: register and test biometric devices early.",
          "No owner after go-live: name the HR admin who will own configuration.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does HRMS implementation take?",
        a: site.implementation,
      },
      {
        q: "Do we need a consultant?",
        a: "Not a certified consultant. The vendor's team supports implementation, and a trained HR administrator owns configuration afterwards.",
      },
      {
        q: "Why run a parallel payroll?",
        a: "Running the same month in both systems and reconciling differences confirms structures, statutory settings and inputs are right before employees are paid from the new system.",
      },
    ],
    related: [
      { label: "HRMS data migration", href: "/hrms-data-migration" },
      { label: "Switching from Excel", href: "/switch-from-excel" },
      { label: "Monthly payroll process", href: "/blog/monthly-payroll-checklist" },
      { label: "HRMS software", href: "/hrms" },
    ],
    cta: "Plan your NeevHR implementation",
  },
  {
    slug: "hrms-data-migration",
    crumb: "HRMS data migration",
    eyebrow: "Migration guide",
    h1: "HRMS Data Migration: What Moves, and How",
    seoTitle: "HRMS Data Migration Guide: Employee and Payroll",
    description:
      "What data moves into a new HRMS and how: employee master, salary structures, attendance, leave balances, documents, payroll opening balances, loans and statutory details, with a validation workflow.",
    published: "2026-09-24",
    lead:
      "Migration decides how quickly a new HRMS becomes trustworthy. This guide lists what data to bring across, what NeevHR imports, and the workflow that gets you from spreadsheets to a reconciled first payroll.",
    sections: [
      {
        id: "workspace",
        title: "The data migration workspace",
        body: [
          "NeevHR has a workspace for this, so opening balances are not loaded blind. Historical payslips are not imported, and gratuity service and a few other items are entered differently.",
        ],
        bullets: [
          "A server check previews every file and row before anything is saved",
          "Undo a loaded batch, as long as nothing yet depends on it",
          "A parallel run compares NeevHR with your current payroll",
          "Sign-off records who accepted the figures before go-live",
        ],
      },
      {
        id: "what-moves",
        title: "What data moves into NeevHR",
        table: {
          head: ["Data", "How it is handled"],
          rows: [
            ["Employee master", "CSV import with dry-run validation of every row"],
            ["Organisation structure", "Entities, locations, departments, grades and cost centres as masters"],
            ["Salary structure", "Pay structures configured, then assigned to employees with effective dates"],
            ["Attendance", "Attendance history import where needed; live punches from devices after go-live"],
            ["Leave balances", "Opening balances imported per leave type"],
            ["Documents", "Employee documents uploaded against the record"],
            ["Payroll history", "Year-to-date opening balances (gross, TDS, PF, ESI) so the current year computes correctly"],
            ["Loans", "Outstanding loan balances and remaining EMIs"],
            ["Statutory information", "PAN, UAN, ESI number and bank details, encrypted at field level"],
            ["Pending arrears", "Arrears owed from before go-live imported for payment"],
          ],
        },
        body: [
          "Month-by-month historical payslips are not imported. Keep them in your previous system or an archive for reference.",
        ],
      },
      {
        id: "workflow",
        title: "The migration workflow",
        steps: [
          { t: "Data assessment", b: "List every source (spreadsheets, old HRMS, payroll bureau) and decide what is needed in the new system." },
          { t: "Mapping", b: "Map source fields to NeevHR fields and masters, and decide how to handle gaps." },
          { t: "Validation", b: "Run each import as a dry run; every error is reported by row before anything is saved." },
          { t: "Dry run", b: "Load a full data set into a test setup and compute a payroll month." },
          { t: "Reconciliation", b: "Compare employee by employee against your current payroll and fix the causes of differences." },
          { t: "Parallel payroll", b: "Run a live month in both systems and reconcile again." },
          { t: "Go live", b: "Pay from NeevHR and retire the old process." },
        ],
      },
      {
        id: "tips",
        title: "Practical tips",
        bullets: [
          "Fix duplicate employee IDs, missing joining dates and inconsistent department names before import.",
          "Confirm each employee's work location, because PT and LWF depend on it.",
          "Take year-to-date figures from the last closed payroll month.",
          "Freeze master changes in the old system during the final import window.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can payroll history be migrated?",
        a: "Year-to-date opening balances are migrated so the current financial year computes correctly. Month-by-month historical payslips are not imported.",
      },
      {
        q: "What happens if the import file has errors?",
        a: "The dry run reports errors by row without saving anything, so you fix the file and re-run until it is clean.",
      },
    ],
    related: [
      { label: "HRMS implementation guide", href: "/hrms-implementation" },
      { label: "Switching from Excel", href: "/switch-from-excel" },
      { label: "Security", href: "/security" },
      { label: "Payroll software", href: "/payroll" },
    ],
    cta: "Talk to us about your migration",
  },
  {
    slug: "switch-from-excel",
    crumb: "Switch from Excel",
    eyebrow: "Switching guide",
    h1: "Moving HR and Payroll from Excel to an HRMS",
    seoTitle: "Switch from Excel to HRMS: Signs and Steps",
    description:
      "When to move HR and payroll off Excel, what changes when you do, and how to switch to an HRMS like NeevHR without disrupting monthly payroll.",
    published: "2026-09-24",
    lead:
      "Spreadsheets are a reasonable way to start. They stop being reasonable when payroll depends on one person's formulas, attendance arrives in five formats, and statutory deadlines are tracked in a calendar reminder. This page explains the signs and the switch.",
    sections: [
      {
        id: "signs",
        title: "Signs you have outgrown Excel",
        bullets: [
          "Payroll takes days and depends on one or two people who know the formulas.",
          "Attendance, leave and salary sit in separate files that have to be reconciled every month.",
          "PT, LWF or ESI errors appear when employees move locations or cross thresholds.",
          "Employees email HR for payslips, leave balances and Form 16.",
          "There is no record of who changed a salary or when.",
          "Reports for leadership are rebuilt by hand each month.",
        ],
      },
      {
        id: "what-changes",
        title: "What changes after the switch",
        table: {
          head: ["Today in Excel", "In NeevHR"],
          rows: [
            ["Separate attendance, leave and salary files", "One employee record feeding payroll"],
            ["Formulas for PF, ESI, PT and TDS", "Statutory calculations in each payroll run"],
            ["Manual ECR and challan preparation", "ECR, ESI file, challans and Form 24Q generated"],
            ["Emails for payslips and leave", "Employee self-service"],
            ["Overwritten cells", "Effective-dated history and audit log"],
            ["Hand-built reports", "Reports and dashboards from live data"],
          ],
        },
      },
      {
        id: "how",
        title: "How to switch",
        steps: [
          { t: "Tidy the master sheet", b: "One row per employee, with IDs, joining dates, locations, departments and statutory numbers." },
          { t: "Write down your rules", b: "Leave, attendance, overtime and pay structure rules you currently apply in formulas." },
          { t: "Import and validate", b: "Load the master and opening balances with dry-run validation." },
          { t: "Run payroll in parallel", b: "Compute a month in NeevHR and compare it with your spreadsheet." },
          { t: "Go live", b: "Pay from NeevHR and open self-service to employees." },
        ],
      },
    ],
    faqs: [
      {
        q: "Can we keep using Excel for some things?",
        a: "Yes. Every list and report exports to CSV, and imports accept CSV, so spreadsheets remain useful for analysis without being the system of record.",
      },
      {
        q: "How long does the switch take?",
        a: site.implementation,
      },
    ],
    related: [
      { label: "HRMS data migration", href: "/hrms-data-migration" },
      { label: "HRMS implementation guide", href: "/hrms-implementation" },
      { label: "What is an HRMS?", href: "/glossary/hrms" },
      { label: "Payroll software", href: "/payroll" },
    ],
    cta: "See your spreadsheet payroll in NeevHR",
  },
  {
    slug: "switch-from-manual-payroll",
    crumb: "Switch from manual payroll",
    eyebrow: "Switching guide",
    h1: "Switching from Manual Payroll to Payroll Software",
    seoTitle: "Switch from Manual Payroll to Software, India",
    description:
      "Why manual payroll breaks as Indian companies grow, the statutory risks it carries, and a step-by-step plan to move to payroll software without missing a pay date.",
    published: "2026-09-24",
    lead:
      "Manual payroll usually means spreadsheets, a tax calculator, a PF and ESI portal login and one person who knows how it all fits together. It works until the first missed deposit, the first wrong TDS projection, or the day that person is on leave. This guide covers the risks and a safe way to switch.",
    sections: [
      {
        id: "risks",
        title: "Where manual payroll goes wrong",
        bullets: [
          "Statutory deposits: PF and ESI are due by the 15th and TDS by the 7th of the following month. Late deposits attract interest and damages.",
          "Thresholds: ESI coverage, the PF wage ceiling and bonus eligibility change as pay changes, and spreadsheets rarely track them per employee.",
          "TDS projection: declarations, proofs, regime choice and mid-year joiners' previous income need a monthly recalculation.",
          "Inputs: attendance, LOP, overtime and reimbursements arrive late or in different formats.",
          "Key-person risk: the process lives in one person's formulas.",
          "Audit trail: there is no reliable record of who changed a salary and when.",
        ],
      },
      {
        id: "what-software-does",
        title: "What payroll software takes over",
        table: {
          head: ["Manual task", "With payroll software"],
          rows: [
            ["Copying attendance and LOP into the salary sheet", "Payroll reads closed attendance and approved leave"],
            ["PF, ESI, PT and LWF formulas", "Calculated per employee in each run"],
            ["TDS projections in a separate sheet", "Projected from declarations and proofs every month"],
            ["Preparing ECR, ESI file and challans", "Generated from the published run"],
            ["Emailing payslips", "Payslips in employee self-service"],
            ["Checking last month's totals by hand", "Exception report of anomalies and statutory checks"],
          ],
        },
      },
      {
        id: "plan",
        title: "A safe switching plan",
        steps: [
          { t: "Pick the start month", b: "Start at the beginning of a quarter or the financial year if you can; it simplifies TDS and returns." },
          { t: "Document every rule", b: "Pay structures, PF basis, PT states, overtime, LOP divisor, reimbursements and loans." },
          { t: "Load the master and YTD figures", b: "Employee master, statutory numbers, bank details and year-to-date gross, TDS, PF and ESI." },
          { t: "Run in parallel", b: "Compute one month in the software alongside your spreadsheet and reconcile employee by employee." },
          { t: "Go live", b: "Pay from the software, generate statutory files, and retire the spreadsheet as the system of record." },
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          `${site.entity} Payroll calculates PF, ESI, PT, LWF and TDS, and generates the PF ECR file, ESIC contribution file, challans, the Form 24Q return file and Form 16. Filing and payment on government portals remain with your team.`,
        ],
      },
    ],
    faqs: [
      {
        q: "When should a company move off manual payroll?",
        a: "Usually once you have employees in more than one state, a mix of ESI and non-ESI staff, or when payroll depends on one person. Many companies switch somewhere between 50 and 200 employees.",
      },
      {
        q: "Can we switch in the middle of the financial year?",
        a: "Yes. Load year-to-date figures for each employee so TDS and annual forms stay correct.",
      },
    ],
    related: [
      { label: "Moving from separate point tools", href: "/switch-from-point-solutions" },
      { label: "Payroll software", href: "/payroll" },
      { label: "Monthly payroll process", href: "/blog/monthly-payroll-checklist" },
      { label: "Switching from Excel", href: "/switch-from-excel" },
      { label: "HRMS data migration", href: "/hrms-data-migration" },
    ],
    cta: "Run a parallel payroll on NeevHR",
  },
  {
    slug: "switch-from-legacy-hrms",
    crumb: "Switch from a legacy HRMS",
    eyebrow: "Switching guide",
    h1: "Replacing a Legacy HRMS: A Practical Guide",
    seoTitle: "Switch from a Legacy HRMS: When and How",
    description:
      "Signs your legacy or on-premise HRMS is holding HR back, what to carry across, what to archive, and how to replace it with a modern India-first HRMS safely.",
    published: "2026-09-24",
    lead:
      "Many Indian companies run an HRMS that was customised years ago, is hard to upgrade, and depends on the vendor for every policy change. Replacing it is a bigger decision than moving off spreadsheets, because history and integrations are involved. This guide helps you plan it.",
    sections: [
      {
        id: "signs",
        title: "Signs it is time to replace your HRMS",
        bullets: [
          "Every policy change needs a vendor change request or custom code.",
          "Upgrades are avoided because customisations break.",
          "Employee changes overwrite history, so past reports cannot be reproduced.",
          "Self-service is limited or missing, so HR handles routine requests.",
          "Statutory changes arrive late or as paid patches.",
          "Reporting needs exports into spreadsheets.",
        ],
      },
      {
        id: "carry-archive",
        title: "What to carry across and what to archive",
        table: {
          head: ["Data", "Recommendation"],
          rows: [
            ["Current employee master and org structure", "Migrate"],
            ["Salary structures and current pay", "Rebuild as configured structures, then assign"],
            ["Leave and loan balances", "Migrate as opening balances"],
            ["Year-to-date payroll (gross, TDS, PF, ESI)", "Migrate as opening balances"],
            ["Historical payslips and old returns", "Archive in the old system or a document store"],
            ["Exited employees", "Archive; migrate only if needed for re-hire or pending F&F"],
            ["Documents", "Migrate current employees' key documents"],
          ],
        },
      },
      {
        id: "plan",
        title: "Replacement plan",
        steps: [
          { t: "Inventory customisations", b: "List every custom rule, report and integration in the old system, and decide which are still needed." },
          { t: "Map to configuration", b: "Express each needed rule as configuration in the new system rather than code." },
          { t: "Plan integrations", b: "Biometric devices, bank files, accounting export and any systems reading HR data." },
          { t: "Migrate and reconcile", b: "Import with validation and run at least one parallel payroll." },
          { t: "Cut over and archive", b: "Go live, keep read-only access to the old system for the retention period, then decommission." },
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          `${site.entity} Policies are configured by an HR administrator rather than coded, employee changes are kept as a full change history, and integrations include biometric ADMS, API keys, webhooks, bank files and a payroll journal export. Month-by-month historical payslips are not imported, so plan to archive them.`,
        ],
      },
    ],
    faqs: [
      {
        q: "How long does replacing an HRMS take?",
        a: site.implementation,
      },
      {
        q: "Do we lose history when we switch?",
        a: "Current records, balances and year-to-date figures move across. Detailed history such as old payslips is best kept in an archive of the old system.",
      },
    ],
    related: [
      { label: "HRMS data migration", href: "/hrms-data-migration" },
      { label: "HRMS implementation guide", href: "/hrms-implementation" },
      { label: "HRMS comparison", href: "/compare" },
      { label: "Integrations", href: "/integrations" },
    ],
    cta: "Plan your move from a legacy HRMS",
  },
  {
    slug: "switch-from-point-solutions",
    crumb: "Switch from point solutions",
    eyebrow: "Switching guide",
    h1: "From Separate HR Tools to One HRMS",
    seoTitle: "Replace Separate HR Tools with One HRMS Platform",
    description:
      "The hidden cost of running separate attendance, payroll, recruitment and performance tools, and how to consolidate them into one HRMS on a single employee record.",
    published: "2026-09-24",
    lead:
      "A separate attendance app, a payroll tool, an applicant tracker and a performance tool can each be good at one job. Together they create four employee masters, four logins and a monthly reconciliation. This guide looks at when consolidation makes sense and how to do it.",
    sections: [
      {
        id: "cost",
        title: "The hidden cost of point solutions",
        bullets: [
          "The same employee is created and updated in several tools, and the copies drift apart.",
          "Attendance and LOP have to be exported from one tool and imported into payroll every month.",
          "A promotion in the performance tool does not reach payroll without re-entry.",
          "Access control and audit trails differ tool by tool.",
          "Licences, renewals and vendor contacts multiply.",
          "Reports need data stitched together in spreadsheets.",
        ],
      },
      {
        id: "compare",
        title: "Point tools vs one HRMS",
        table: {
          head: ["Area", "Separate tools", "One HRMS"],
          rows: [
            ["Employee master", "One per tool", "One record with full change history"],
            ["Attendance to payroll", "Monthly export and import", "Payroll reads closed attendance"],
            ["Hire to payroll", "Re-keyed from the ATS", "Offer flows into onboarding and payroll"],
            ["Access and audit", "Different per tool", "One RBAC model and audit log"],
            ["Reporting", "Stitched in spreadsheets", "Reports across modules"],
          ],
        },
      },
      {
        id: "plan",
        title: "How to consolidate",
        steps: [
          { t: "Start with the core", b: "Move the employee master, attendance, leave and payroll first; they share the most data." },
          { t: "Add talent modules", b: "Bring recruitment and performance across at the end of their current cycle, not mid-cycle." },
          { t: "Retire tools deliberately", b: "Export each tool's data for your records before its renewal date." },
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          `${site.entity} It covers employee records, attendance, leave, payroll, recruitment, performance, expenses and self-service on one employee record, so consolidation removes the monthly reconciliation between tools.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Is one HRMS always better than best-of-breed tools?",
        a: "Not always. If one function has very specialised needs, a dedicated tool can make sense. For most Indian companies, the payroll, attendance and employee master benefit most from being on one record.",
      },
    ],
    related: [
      { label: "HRMS software", href: "/hrms" },
      { label: "What should an HRMS include?", href: "/glossary/hrms" },
      { label: "HRMS comparison", href: "/compare" },
      { label: "Integrations", href: "/integrations" },
    ],
    cta: "See every module on one record",
  },
  {
    slug: "best-hrms-for-small-business",
    crumb: "HRMS for small businesses",
    eyebrow: "Buyer's guide",
    h1: "Choosing an HRMS for a Small Business in India",
    seoTitle: "Best HRMS for Small Business in India",
    description:
      "What a small Indian business actually needs from an HRMS: accurate payroll and statutory filings, leave and attendance, self-service, simple setup and predictable cost.",
    published: "2026-09-24",
    lead:
      "A small business needs less HR software than it is usually sold. The priority is getting salary, PF, ESI, PT and TDS right every month, with leave and attendance that feed it, and employees who can see their own payslips. This guide explains what to look for and what can wait.",
    sections: [
      {
        id: "must-have",
        title: "Must-haves",
        bullets: [
          "Payroll with PF, ESI, PT, LWF and TDS, and the statutory files (ECR, ESI, challans, Form 16 and Form 24Q)",
          "Leave and attendance that feed LOP into payroll",
          "Employee self-service for payslips, leave and tax declarations",
          "Simple onboarding and exit, including full and final settlement",
          "Setup your team can do without a consultant",
        ],
      },
      {
        id: "can-wait",
        title: "What can usually wait",
        bullets: [
          "Succession planning and workforce planning",
          "Complex multi-level approval chains",
          "Custom report builders beyond standard reports",
          "Multi-entity structures, unless you already have them",
        ],
      },
      {
        id: "cost",
        title: "Thinking about cost",
        body: [
          "For a small business, total cost includes the subscription, any implementation fee, and the time your team spends running payroll each month. A tool that saves two days of payroll work and prevents one late deposit often pays for itself.",
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          "NeevHR is designed for organisations from about 500 employees upwards. If you have fewer employees and simple payroll in one state, a lighter payroll-only tool may suit you better today. If you expect to grow past 500, operate in several states, or need attendance and approvals, NeevHR is worth evaluating.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do small businesses need an HRMS or just payroll software?",
        a: "Under about 50 employees in one location, payroll software with basic leave is often enough. As headcount, locations and approvals grow, an HRMS that connects attendance, leave and payroll saves more time.",
      },
      {
        q: "Is PF mandatory for small businesses?",
        a: "EPF generally applies to establishments with 20 or more employees, and ESI to those with 10 or more (20 in some states) in notified areas. Check the rules for your establishment.",
      },
    ],
    related: [
      { label: "Choosing an HRMS for a mid-sized business", href: "/best-hrms-for-mid-sized-business" },
      { label: "How to choose an HRMS in India", href: "/best-hrms-software-india" },
      { label: "Switching from Excel", href: "/switch-from-excel" },
      { label: "Pricing", href: "/pricing" },
      { label: "Payroll software", href: "/payroll" },
    ],
    cta: "Check whether NeevHR fits your size",
  },
  {
    slug: "best-hrms-for-mid-sized-business",
    crumb: "HRMS for mid-sized businesses",
    eyebrow: "Buyer's guide",
    h1: "Choosing an HRMS for a Mid-Sized Business in India",
    seoTitle: "Best HRMS for Mid-Sized Business in India",
    description:
      "HRMS for mid-sized Indian companies: multi-location payroll, shifts and biometrics, approvals and data scopes, with a checklist and a worked rollout.",
    published: "2026-09-24",
    lead:
      "Between roughly 200 and 1,000 employees, HR changes character. There are several locations and states, managers who approve things, shift-based teams, and leadership that wants reports. The HRMS has to carry process, not just records.",
    sections: [
      {
        id: "what-changes",
        title: "What changes at around 500 employees",
        body: [
          "Most companies reach 500 people with tools chosen at 50: a payroll spreadsheet, a separate attendance system, email approvals and an employee master in Excel. Each works alone; what breaks is the joins between them.",
          "More locations and states bring state rules into every run: PT slabs and filing frequency, LWF, minimum wages and location holiday calendars. Shift and plant teams bring biometric devices, rosters, night shifts, overtime and regularisation. With 50 to 70 people managers, approvals move from HR to managers. Access has to be scoped so a plant HR executive sees only the plant. Increments need a defensible performance cycle, and leadership wants headcount, attrition and cost reports that match the payroll register.",
        ],
      },
      {
        id: "volume",
        title: "Worked example: monthly volume at 500 employees",
        body: [
          "The assumptions are illustrative, not benchmarks; replace them with your own. With a span of control of 8 there are about 62 managers, so each approves around 12 items a month. Add 7 to 8 full and final settlements and about 12 onboarding cases a month, and re-keying all of it into payroll is where errors come from.",
        ],
        table: {
          head: [
            "Item",
            "Assumption",
            "Monthly volume",
          ],
          rows: [
            [
              "Exits",
              "18% annual attrition: 90 a year",
              "7 to 8",
            ],
            [
              "Joiners",
              "Replace 90 exits and grow by 50: 140 a year",
              "about 12",
            ],
            [
              "Leave applications",
              "1 per employee per month",
              "500",
            ],
            [
              "Attendance regularisations",
              "10% of employees raise 2 a month",
              "100",
            ],
            [
              "Expense claims",
              "30% of employees file 1 a month",
              "150",
            ],
            [
              "Manager approvals",
              "500 + 100 + 150",
              "750",
            ],
          ],
        },
      },
      {
        id: "requirements",
        title: "Requirements and what to check in a demo",
        table: {
          head: [
            "Area",
            "What you need",
            "What to check live",
          ],
          rows: [
            [
              "Employee record",
              "One record with full change history",
              "Change a department with a past date and see history and as-of reports update",
            ],
            [
              "Organisation",
              "Legal entities, locations, departments",
              "Two entities with different statutory registrations in one tenant",
            ],
            [
              "Attendance",
              "Biometric integration, shifts, rosters, overtime, regularisation, LOP",
              "Your device models; a night shift crossing midnight",
            ],
            [
              "Leave",
              "Accrual, proration, carry-forward, encashment, location holidays",
              "A mid-year joiner's prorated balance",
            ],
            [
              "Payroll",
              "Structures, arrears, LOP reversal, loans, variable pay",
              "A backdated increment producing correct arrears",
            ],
            [
              "Statutory",
              "PF, ESI, PT and LWF by state; TDS under both regimes",
              "The ECR, ESIC file and Form 138 (formerly 24Q) file from a run",
            ],
            [
              "Access",
              "Role-based access, data scopes, masking, MFA, audit log",
              "A plant HR login that cannot see another plant",
            ],
            [
              "Performance",
              "Goals, reviews, 360 feedback, calibration",
              "A rating distribution across departments",
            ],
            [
              "Exit",
              "F&F with gratuity, leave encashment and recoveries",
              "An F&F statement with a loan outstanding",
            ],
          ],
        },
      },
      {
        id: "not-yet",
        title: "What you probably do not need yet",
        body: [
          "Be wary of paying for complexity you will not use: a multi-year transformation programme, a certified consultant to change a leave rule, or heavy custom development. Leave, attendance, pay structures and appraisals should be configuration a trained HR administrator can change.",
        ],
      },
      {
        id: "approach",
        title: "Implementation approach",
        steps: [
          {
            t: "Design",
            b: "Document entities, locations, pay structures, leave and attendance policies and approval chains.",
          },
          {
            t: "Data",
            b: "Clean the employee master, statutory numbers, bank details and year-to-date payroll figures.",
          },
          {
            t: "Configure",
            b: "Set up policies, structures, devices, roles and data scopes with your HR administrator.",
          },
          {
            t: "Parallel payroll",
            b: "Run one month in both systems and reconcile employee by employee.",
          },
          {
            t: "Go live",
            b: "Pay from the new system, open self-service, retire the spreadsheets. Introduce performance at a cycle boundary.",
          },
        ],
      },
      {
        id: "questions",
        title: "Questions to ask vendors",
        bullets: [
          "How do you apply PT and LWF when an employee transfers between states mid-month?",
          "Which biometric device models and protocols are supported today, and how are missed punches handled?",
          "Can a manager approve leave and attendance without seeing salary data?",
          "How do you restrict an HR user to one entity or location?",
          "When a salary change is backdated, how are arrears calculated and shown?",
          "Which checks run before payroll is approved, and who can approve?",
          "Which statutory files do you generate, and which portal steps remain with us?",
          "What is live today, and what is on the roadmap? Ask for this in writing.",
        ],
      },
      {
        id: "pitfalls",
        title: "Common pitfalls",
        bullets: [
          "Buying an enterprise suite whose implementation outlasts the budget.",
          "Buying a small-business tool that cannot handle multiple states or approvals.",
          "Skipping the parallel payroll run to save time.",
          "Letting every department keep its own spreadsheet after go-live.",
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          `${site.entity} It is built for this band: multi-location PT and LWF, biometric attendance with shifts and rosters, configurable approvals, role-based data scopes, performance and compensation cycles, and reports on one record. ${site.implementation}`,
        ],
      }
    ],
    faqs: [
      {
        q: "Is 500 employees too small for a full HRMS?",
        a: "No. This is usually the size at which a connected HRMS pays for itself, because approvals, attendance data and payroll changes outgrow spreadsheets and point tools.",
      },
      {
        q: "Should payroll and HR be in the same system?",
        a: "At this size it helps: when attendance, leave, joiners and exits feed payroll directly, the monthly re-keying that causes most payroll errors goes away.",
      },
      {
        q: "How long does implementation take for 500 employees?",
        a: "It depends on data quality, the number of entities and states, integrations such as biometric devices, and payroll complexity.",
      },
      {
        q: "What HRMS is suitable for 500 employees?",
        a: "One that handles multi-location statutory payroll, shift and biometric attendance, approval workflows and role-based data scopes, with a realistic implementation plan and a parallel payroll run.",
      },
    ],
    related: [
      { label: "How to choose an HRMS in India", href: "/best-hrms-software-india" },
      { label: "HRMS for 1,000+ employees", href: "/best-hrms-for-1000-employees" },
      { label: "HRMS software", href: "/hrms" },
      { label: "Pricing", href: "/pricing" },
    ],
    cta: "See NeevHR at your scale",
  },
  {
    slug: "best-hrms-for-1000-employees",
    crumb: "HRMS for 1,000+ employees",
    eyebrow: "Buyer's guide",
    h1: "Choosing an HRMS for 1,000+ Employees in India",
    seoTitle: "Best HRMS for 1,000+ Employees in India",
    description:
      "How to evaluate an HRMS for 1,000 or more employees in India: multiple entities, bulk operations, security and audit, integrations, performance at scale and implementation risk.",
    published: "2026-09-24",
    lead:
      "At 1,000 employees and above, an HRMS decision involves the CHRO, CFO and CIO together. The questions shift from features to governance: several legal entities in one system, bulk changes that keep history, separation of duties, an audit trail, a security review, and a rollout de-risked by a pilot and a reconciled parallel payroll.",
    sections: [
      {
        id: "entities",
        title: "Multiple legal entities in one system",
        body: [
          "Large Indian employers are rarely one company: an operating company, a services subsidiary, a manufacturing unit, sometimes an acquired business. Each legal entity has its own PAN and TAN (so its own TDS deposits, Form 138 returns and Form 130 certificates, formerly Form 24Q and Form 16), its own PF establishment code and ESI employer code, PT registrations in each state, salary bank accounts and general ledger.",
          "The HRMS must keep these apart for statutory purposes while giving HR one view of the workforce. Ask to see two entities with different registrations running payroll in the same period, each producing its own ECR, ESIC file, TDS return and journal voucher.",
          "An inter-entity transfer is usually a change of employer for income tax: each entity reports the salary it paid, and the new entity takes the earlier income and TDS into its projection. The UAN stays the same while the PF establishment changes. Decide and document service continuity for gratuity and leave before the first transfer, and record the move as a dated event on one employee record.",
        ],
      },
      {
        id: "bulk",
        title: "Bulk operations without breaking history",
        body: [
          "At this size change arrives in batches: a reorganisation moves 200 people to new managers, an annual revision changes everyone's pay, a site closure separates a team. Look for bulk import with a dry run that reports errors before saving, mass actions for transfers, manager changes and separations that create proper dated events, compensation cycles with review and approval, and an audit entry for every bulk change.",
        ],
      },
      {
        id: "duties",
        title: "Separation of duties",
        body: [
          "Payroll fraud and payroll errors share a root cause: one person who can change data, run payroll and release payment. Auditors expect the duties split, and the system should enforce it, not only document it.",
        ],
        table: {
          head: [
            "Activity",
            "Maker",
            "Checker",
          ],
          rows: [
            [
              "Salary revision or new structure",
              "HR operations",
              "HR head or compensation team",
            ],
            [
              "Bank account change",
              "Employee or HR",
              "Payroll or HR reviewer",
            ],
            [
              "Payroll compute",
              "Payroll executive",
              "Payroll lead (verify)",
            ],
            [
              "Payroll approval",
              "Not the person who computed",
              "Finance or payroll head",
            ],
            [
              "Publish, bank file and payslips",
              "Payroll",
              "Finance releases payment",
            ],
            [
              "Role and permission changes",
              "IT or HRIS admin",
              "Separate approver",
            ],
          ],
        },
      },
      {
        id: "audit",
        title: "Audit trail",
        body: [
          "For any change the log should show what changed, from what to what, who made it and when. At this size it should cover employee master, salary and bank changes, payroll runs and approvals, statutory settings, roles and permissions, and data exports. Ask to see the log for a salary change made last week, and how long logs are kept.",
        ],
      },
      {
        id: "security",
        title: "The security review",
        table: {
          head: [
            "Question",
            "Why it matters",
          ],
          rows: [
            [
              "How is our data isolated from other customers?",
              "Isolation should hold at the database layer, not only in application code",
            ],
            [
              "Which fields are encrypted at rest?",
              "PAN, Aadhaar, UAN and bank details are high-risk if exposed",
            ],
            [
              "Can MFA be enforced for all users?",
              "Password-only access to salary data is hard to defend",
            ],
            [
              "Is single sign-on available?",
              "Your identity team may require it",
            ],
            [
              "Where is data hosted?",
              "Many Indian employers prefer or require hosting in India",
            ],
            [
              "Which certifications are held today?",
              "Some procurement policies require SOC 2 or ISO 27001",
            ],
            [
              "How are DPDP requests handled?",
              "The DPDP Act, 2023 applies to employee data; its main duties apply from 13 May 2027 under the DPDP Rules, 2025",
            ],
            [
              "What retention and legal hold controls exist?",
              "Records must be kept for statutory periods and some preserved during disputes",
            ],
          ],
        },
        body: [
          "Get answers in writing, and ask for what is available today rather than what is planned.",
        ],
      },
      {
        id: "integrations",
        title: "Integrations",
        body: [
          "Expect to connect biometric devices across many sites (ideally over a standard push protocol), bank payment files in your banks' formats, your accounting system through a journal export or an API, and your own data platform through APIs and webhooks. Ask for the integrations live today and test the ones you depend on during the pilot.",
        ],
      },
      {
        id: "rollout",
        title: "Phased rollout with a pilot and parallel payroll",
        table: {
          head: [
            "Phase",
            "Scope",
            "Exit criterion",
          ],
          rows: [
            [
              "1. Foundation",
              "All entities: employee master, organisation, roles and data scopes",
              "Master data reconciled to current payroll headcount",
            ],
            [
              "2. Pilot entity",
              "One entity or location: attendance, leave, payroll",
              "One parallel payroll fully reconciled",
            ],
            [
              "3. Pilot go-live",
              "Pay the pilot entity from the new system",
              "Statutory files accepted and bank payment successful",
            ],
            [
              "4. Remaining entities",
              "Waves, each with its own parallel run",
              "Each wave reconciled before go-live",
            ],
            [
              "5. Talent modules",
              "Performance, recruitment, compensation cycles",
              "Introduced at a cycle boundary",
            ],
          ],
        },
        body: [
          "Choose a pilot that is representative but not the most complex: it should include shifts, more than one state and a mix of ESI and non-ESI employees.",
        ],
      },
      {
        id: "parallel-example",
        title: "Worked example: reconciling a parallel run",
        body: [
          "A group has three entities: A with 650 employees, B with 400 and C with 250, 1,300 in all. The team pilots Entity C for one month in parallel. The rule: every employee's net pay must match the legacy payroll to the rupee, or the difference must be explained and accepted. Of 250 employees, 243 match and 7 differ.",
          "Three differences were configuration errors in the new system, now fixed; four were errors or timing issues in the legacy payroll. That is typical: a parallel run tests both systems. After the fix the team reran the month, got 250 of 250 matched or explained, and went live the following month.",
        ],
        table: {
          head: [
            "Cause",
            "Employees",
            "Resolution",
          ],
          rows: [
            [
              "LOP divisor: legacy used 30 days, the new setup calendar days",
              "3",
              "Policy confirmed as 30 days; configuration corrected",
            ],
            [
              "PT state: mid-month transfers, legacy applied the old state",
              "2",
              "New system correct; legacy error noted",
            ],
            [
              "Arrears: a backdated promotion missed in legacy",
              "1",
              "New system correct",
            ],
            [
              "TDS: a declaration updated after the legacy cut-off",
              "1",
              "Timing difference; accepted",
            ],
          ],
        },
      },
      {
        id: "mistakes",
        title: "Common mistakes",
        bullets: [
          "Treating all entities as one for statutory purposes, so returns and challans mix registrations.",
          "Making bulk changes outside the system, which breaks effective-dated history.",
          "Granting one person compute and approve rights because the team is busy at go-live.",
          "Accepting a security questionnaire on trust without checking what is live.",
          "Going live across every entity at once with no pilot and no parallel payroll.",
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          `${site.entity} It supports multiple entities, bulk actions, separation of duties, an audit log, Postgres row-level tenant isolation, field-level encryption of sensitive identifiers and enforceable MFA. Worth knowing: single sign-on covers Google with Microsoft being switched on but not SAML, and NeevHR does not currently hold SOC 2 or ISO 27001 certification.`,
        ],
      }
    ],
    faqs: [
      {
        q: "How long does an HRMS rollout take for 1,000 or more employees?",
        a: "It depends on entities, states, data quality and integrations. A multi-entity programme is usually delivered in waves, each with its own parallel run.",
      },
      {
        q: "Should we pilot HR or payroll first?",
        a: "Load the employee master for everyone first, then pilot attendance, leave and payroll together for one entity, because the three feed each other.",
      },
      {
        q: "How many parallel payroll runs do we need?",
        a: "At least one fully reconciled run per wave, and a second if the first reveals configuration changes.",
      },
      {
        q: "Can one HRMS handle several legal entities?",
        a: "It should. Each entity needs its own statutory registrations, returns and journal entries, with one employee record for the workforce view.",
      },
      {
        q: "What HRMS is suitable for 1,000 employees?",
        a: "One with multi-entity support, bulk operations, strong access control and audit, the integrations you need live today, and an implementation plan that includes a pilot and a parallel payroll.",
      },
    ],
    related: [
      { label: "Security & compliance", href: "/security" },
      { label: "HRMS implementation guide", href: "/hrms-implementation" },
      { label: "Integrations", href: "/integrations" },
      { label: "HRMS comparison", href: "/compare" },
    ],
    cta: "Take NeevHR through your security review",
  },
  {
    slug: "best-payroll-software-india",
    crumb: "Choosing payroll software",
    eyebrow: "Buyer's guide",
    h1: "How to Choose Payroll Software in India",
    seoTitle: "Best Payroll Software in India: Checklist",
    description:
      "A practical checklist for choosing payroll software in India: statutory coverage, filing outputs, accuracy controls, arrears and F&F, bank and accounting outputs, security and support.",
    published: "2026-09-24",
    lead:
      "Payroll software is judged on one thing: whether every employee is paid correctly and every statutory deposit and return is right, every month. This checklist helps you test that before you sign.",
    sections: [
      {
        id: "statutory",
        title: "Statutory coverage",
        table: {
          head: ["Requirement", "What to confirm"],
          rows: [
            ["PF / EPF", "Employee and employer shares, EPS split, capped or actual basis, ECR file"],
            ["ESI", "Gross-wage eligibility, contribution-period rule, ESIC file"],
            ["Professional Tax", "State slabs by work location, challans"],
            ["Labour Welfare Fund", "State frequency and months"],
            ["TDS", "Old and new regime, declarations, proofs, previous employer income"],
            ["Returns and certificates", "Form 24Q return file and Form 16"],
            ["Gratuity and bonus", "Computed in F&F and annual bonus runs"],
          ],
        },
      },
      {
        id: "accuracy",
        title: "Accuracy controls",
        bullets: [
          "Separation of duties between computing and approving payroll",
          "An exception report that flags anomalies before approval",
          "Period locks after payroll closes",
          "Arrears for backdated revisions that flow into PF and ESI",
          "LOP from attendance, with reversal in a later month",
        ],
      },
      {
        id: "outputs",
        title: "Payments and accounting",
        bullets: [
          "Bank payment files in your bank's format",
          "A balanced journal voucher with GL mapping for your accounting system",
          "Payslips in self-service, and a salary register",
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          `${site.entity} It covers the statutory items above, generates the files and challans, and makes accounting files for Tally Prime and Zoho Books that your team imports. Filing and payment on government portals remain with your team.`,
        ],
      },
    ],
    faqs: [
      {
        q: "What payroll software supports Indian statutory requirements?",
        a: "Look for native PF, ESI, PT, LWF and TDS calculation plus the ECR, ESI file, challans, Form 24Q and Form 16. Ask the vendor to run your own structures in a demo.",
      },
      {
        q: "Does payroll software file returns automatically?",
        a: "Most payroll software prepares the files; uploading and paying on government portals is usually done by the employer. Confirm what is automated and what is not.",
      },
    ],
    related: [
      { label: "Payroll software for a growing business", href: "/best-payroll-software-for-growing-business" },
      { label: "Payroll software", href: "/payroll" },
      { label: "India payroll", href: "/india-payroll" },
      { label: "Salary TDS calculator", href: "/tools/tds-calculator" },
      { label: "Switch from manual payroll", href: "/switch-from-manual-payroll" },
    ],
    cta: "Test NeevHR payroll on your structures",
  },
  {
    slug: "best-payroll-software-for-growing-business",
    crumb: "Payroll for growing businesses",
    eyebrow: "Buyer's guide",
    h1: "Payroll Software for a Growing Business in India",
    seoTitle: "Payroll Software for Growing Businesses in India",
    description:
      "What changes in payroll as an Indian business grows from tens to hundreds of employees, and which payroll software capabilities keep up: states, structures, attendance, approvals and self-service.",
    published: "2026-09-24",
    lead:
      "Payroll that worked for 40 people in one city starts to strain at 150 people in three states. New structures, shift workers, ESI and non-ESI staff, and managers approving inputs all arrive at once. This guide lists what to plan for.",
    sections: [
      {
        id: "what-changes",
        title: "What changes as you grow",
        table: {
          head: ["Growth step", "Payroll impact"],
          rows: [
            ["Second state", "Different PT and LWF rules"],
            ["Crossing 20 employees", "EPF applicability for most establishments"],
            ["Shift or factory teams", "Overtime, shift allowances, biometric inputs"],
            ["Mixed salary bands", "ESI for some, not others; PF basis choices"],
            ["Managers in the loop", "Approvals for leave, attendance and expenses"],
            ["First exits at scale", "F&F with gratuity and leave encashment"],
          ],
        },
      },
      {
        id: "capabilities",
        title: "Capabilities that keep up",
        bullets: [
          "Pay structures assigned to employee groups, not built per person",
          "PT and LWF by work location",
          "Attendance and leave feeding LOP and overtime",
          "Self-service for payslips and tax declarations",
          "Approvals routed to managers",
          "Full and final settlement in the same system",
        ],
      },
      {
        id: "neevhr",
        title: "Where NeevHR fits",
        body: [
          `${site.entity} It is designed for companies from about 500 employees upwards, so it suits a business that is growing into multi-state payroll, shift teams and manager approvals.`,
        ],
      },
    ],
    faqs: [
      {
        q: "At what size should we move to dedicated payroll software?",
        a: "When you add a second state, shift teams or a mix of ESI and non-ESI employees, spreadsheets become risky. For many businesses that is between 50 and 150 employees.",
      },
    ],
    related: [
      { label: "Choosing payroll software in India", href: "/best-payroll-software-india" },
      { label: "Payroll software", href: "/payroll" },
      { label: "HRMS for small businesses", href: "/best-hrms-for-small-business" },
      { label: "Switch from manual payroll", href: "/switch-from-manual-payroll" },
    ],
    cta: "See NeevHR payroll for a growing team",
  },
];

guides.push(...statutoryGuides);

export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
