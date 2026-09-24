// Central content config for the NeevHR marketing site.
// Keep product claims honest: only list what the product actually does.
// Verified against the product code on 24 Sep 2026. Notably NOT built yet:
// Hindi UI, published mobile app (store listing), SSO, Tally sync, public
// careers page / job boards. Do not claim these as available.

export const site = {
  name: "NeevHR",
  tagline: "HR built on a stronger foundation",
  // Canonical entity statement (spec §2 / §47). Reuse verbatim.
  entity:
    "NeevHR is an India-first HRMS and payroll software platform for growing and mid-market businesses.",
  description:
    "NeevHR is an India-first HRMS and payroll software platform for growing and mid-market businesses. It brings employee management, attendance, leave, payroll, recruitment, performance, expenses, statutory compliance and employee self-service into one configurable platform.",
  // Kept under 160 chars so search snippets are not truncated.
  metaDescription:
    "NeevHR is an India-first HRMS and payroll platform. Manage employees, attendance, leave, payroll, recruitment, performance and statutory compliance in one system.",
  url: "https://www.neevhr.com",
  email: "hello@neevhr.com",
  phone: "+91 9274752634",
  addressCountry: "IN",
  // Qualified implementation claim (spec §45).
  implementation:
    "Typical implementation: 4 to 8 weeks, depending on employee count, data quality, integrations and payroll complexity.",
  // Official profiles for schema.org sameAs and the footer social links.
  socials: [
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/neevhr-37b432438/" },
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/neevhr" },
    { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/channel/UC4cUg0HifDHTwf0JqXYz4aw" },
    { label: "X", icon: "x", href: "https://x.com/neevhr" },
  ],
} as const;

export const differentiators = [
  {
    title: "Built for India, only India",
    body: "PF, ESI, PT, LWF and TDS, gratuity, bonus and the DPDP Act 2023 are part of the core product, not an add-on. INR and the India financial year throughout.",
    icon: "flag",
  },
  {
    title: "Depth without the drag",
    body: "Process discipline and statutory accuracy for growing and mid-market companies, without the cost or the multi-year rollout of a tier-one suite.",
    icon: "users",
  },
  {
    title: "Implemented in weeks",
    body: "A typical implementation takes 4 to 8 weeks, depending on employee count, data quality, integrations and payroll complexity.",
    icon: "bolt",
  },
  {
    title: "Configured by your HR admin",
    body: "Leave, attendance, payroll, expense and appraisal are configurable rule sets assigned to employee groups. A trained HR admin can own them, no certified consultant required.",
    icon: "sliders",
  },
] as const;

export const compliancePoints = [
  "Provident Fund (PF) and ECR",
  "Employees' State Insurance (ESI)",
  "Professional Tax (PT)",
  "Labour Welfare Fund (LWF)",
  "TDS, Form 24Q and Form 16",
  "Gratuity & statutory bonus",
  "Full & final settlement",
  "DPDP Act 2023",
];

export const platformCapabilities = [
  { title: "Custom fields", body: "Extend employee, candidate, asset, expense and helpdesk records with your own fields, without a code change." },
  { title: "Workflow & approvals", body: "Configurable approval chains per record type, routed to a role or a named person, with any, all or quorum rules." },
  { title: "Role-based access", body: "Fine-grained RBAC with data scopes, field-level masking, time-bound grants and separation-of-duties checks." },
  { title: "Audit trail", body: "Changes are recorded and effective-dated, so records can be reported as they stood on any date." },
  { title: "Notifications", body: "In-app, email, SMS, WhatsApp and browser push from a single dispatcher, once each channel's provider is configured." },
  { title: "Import & export", body: "Bulk CSV import with dry-run validation, and export from lists and reports." },
];

export type FaqItem = { q: string; a: string };

// Homepage FAQ: the questions buyers ask first.
export const faqs: FaqItem[] = [
  {
    q: "What is NeevHR?",
    a: "NeevHR is an India-first HRMS and payroll software platform for growing and mid-market businesses. It covers employee management, attendance, leave, payroll with PF, ESI, PT and TDS, recruitment, performance, expenses, compliance and employee self-service on one employee record.",
  },
  {
    q: "Is NeevHR only for India?",
    a: "Yes. NeevHR is built for Indian companies only, with INR, the India financial year and Indian statutory requirements such as PF, ESI, PT, LWF, TDS, gratuity, bonus and the DPDP Act 2023.",
  },
  {
    q: "Who is NeevHR for?",
    a: "Organisations of roughly 100 to several thousand employees that have outgrown spreadsheets and disconnected HR tools, and need structured HR, attendance and payroll with Indian statutory compliance.",
  },
  {
    q: "Does NeevHR calculate PF, ESI, PT and TDS?",
    a: "Yes. Payroll computes PF, ESI, professional tax, LWF and TDS (old and new regime), and produces the PF ECR file, ESI contribution file, challans, Form 24Q return file and Form 16.",
  },
  {
    q: "How long does implementation take?",
    a: "A typical implementation takes 4 to 8 weeks, depending on employee count, data quality, integrations and payroll complexity. It usually includes configuration, data migration, a parallel payroll run and go-live.",
  },
  {
    q: "Is there a mobile app?",
    a: "The NeevHR mobile app is coming soon. Employee self-service is available on the web today for attendance, leave, payslips, tax declarations, expenses and approvals.",
  },
  {
    q: "How is our employee data protected?",
    a: "Each company's data is isolated with Postgres row-level security, sensitive identifiers such as PAN, Aadhaar and bank details are encrypted at the field level, access is controlled by roles and data scopes, and changes are audit-logged. Data is hosted in India.",
  },
  {
    q: "How does NeevHR pricing work?",
    a: "Pricing is based on employee count, modules, implementation requirements and integrations. NeevHR uses edition-based packaging priced in INR, and we prepare a quote for your team.",
  },
];

// Full FAQ page (spec §19), grouped. Answers reflect verified product behaviour.
export const faqGroups: { group: string; items: FaqItem[] }[] = [
  {
    group: "Product",
    items: [
      faqs[0],
      {
        q: "What is an HRMS?",
        a: "An HRMS (Human Resource Management System) is software that manages employee information, attendance, leave, payroll, recruitment, performance, documents and HR reporting from one central system.",
      },
      faqs[2],
      {
        q: "How many employees can NeevHR support?",
        a: "NeevHR is designed for organisations from about 100 to several thousand employees. For larger workforces we size the deployment with you during evaluation rather than quote a fixed limit.",
      },
      {
        q: "Does NeevHR support multiple legal entities?",
        a: "Yes. You can run several legal entities in one account, each with its own statutory registrations, and transfer employees between entities.",
      },
      {
        q: "Does NeevHR support multiple locations and departments?",
        a: "Yes. Locations, business units, departments, grades and cost centres are configurable masters, and state-specific rules such as PT and LWF follow each employee's work location.",
      },
      {
        q: "Does NeevHR support employee groups?",
        a: "Yes. Policies for leave, attendance, pay structures, expenses and appraisals are assigned to groups of employees, for example by entity, department, grade or location.",
      },
      {
        q: "Is NeevHR available in Hindi?",
        a: "Not yet. The product interface is in English today. A Hindi interface is planned, and some notification templates are already available in Hindi.",
      },
    ],
  },
  {
    group: "Payroll",
    items: [
      {
        q: "Does NeevHR calculate PF?",
        a: "Yes. Employee and employer PF, the EPS split, EDLI and admin charges are computed, with the ₹15,000 wage ceiling or actual basic as configured. The PF ECR text file and PF challan are generated from the published run.",
      },
      {
        q: "Does NeevHR calculate ESI?",
        a: "Yes. ESI eligibility and employee and employer contributions are computed on gross wages, and the ESIC monthly contribution file is generated.",
      },
      {
        q: "Does NeevHR calculate PT and LWF?",
        a: "Yes. Professional tax and Labour Welfare Fund are computed per state from configurable slab tables, with PT and LWF challans.",
      },
      {
        q: "Does NeevHR calculate TDS?",
        a: "Yes. TDS is projected for the year under the old or new regime, using employee investment declarations, proofs and previous-employer income.",
      },
      {
        q: "Does NeevHR generate Form 16 and Form 24Q?",
        a: "Yes. NeevHR generates Form 16 (Part A and Part B) as employer-issued PDFs, and the Form 24Q quarterly return as a text file with Annexure II in the fourth quarter. The return file should be validated with the government's file validation utility before filing.",
      },
      {
        q: "Does NeevHR generate bank payment files?",
        a: "Yes. Salary payment files are generated as CSV in a generic layout and in layouts for several major banks, with NEFT or RTGS chosen by amount. Confirm your bank's upload format during implementation.",
      },
      {
        q: "Does NeevHR support salary arrears and LOP?",
        a: "Yes. Backdated revisions produce arrears that flow into PF and ESI. Loss of pay comes from attendance and leave, reduces statutory wages, and can be reversed in a later month.",
      },
      {
        q: "Does NeevHR support loans, variable pay and full & final settlement?",
        a: "Yes. Loans and advances recover EMIs through payroll, variable pay and incentives run as plans, and full & final settlement covers salary to the last day, leave encashment, gratuity, bonus and recoveries.",
      },
      {
        q: "Does NeevHR integrate with Tally or other accounting software?",
        a: "NeevHR exports a balanced payroll journal voucher as CSV, with GL code mapping and cost-centre split, for import into your accounting system. A direct Tally connector is not available.",
      },
    ],
  },
  {
    group: "Attendance",
    items: [
      {
        q: "Does NeevHR integrate with biometric machines?",
        a: "Yes. NeevHR accepts punches over the ADMS (iClock) push protocol used by many eSSL, ZKTeco and Matrix devices, and through punch file import. Compatibility is confirmed for your device models during implementation.",
      },
      {
        q: "Does it support shifts and rosters?",
        a: "Yes. Shift patterns, split and flexible shifts, weekly-off policies and weekly rosters with coverage checks are supported.",
      },
      {
        q: "Does it support overtime?",
        a: "Yes. Overtime rates by day type, grade multipliers and daily caps are configurable, and approved overtime is paid through payroll.",
      },
      {
        q: "Does it support attendance regularisation?",
        a: "Yes. Employees raise regularisation requests that route for approval, with optional auto-regularisation rules and locked periods after payroll closes.",
      },
      {
        q: "Does it support field staff?",
        a: "Yes. Field-force tracking records location during duty hours with geofences, with employee consent. It works from the mobile app, which is coming soon.",
      },
    ],
  },
  {
    group: "Security",
    items: [
      {
        q: "How is employee data isolated?",
        a: "Each company's data is separated by Postgres row-level security enforced in the database, and the application connects with a role that cannot bypass it.",
      },
      {
        q: "Is data encrypted?",
        a: "Data is encrypted in transit. Sensitive identifiers such as PAN, Aadhaar, UAN, ESI number and bank account details are encrypted at the field level with AES-256-GCM, on top of storage-level encryption from the managed database.",
      },
      {
        q: "Does NeevHR support RBAC and audit logs?",
        a: "Yes. Role-based access with data scopes and field-level masking controls who sees what, and administrative, payroll and permission changes are recorded in an audit log.",
      },
      {
        q: "Does NeevHR support MFA?",
        a: "Yes. Users can enable authenticator-app (TOTP) MFA with recovery codes, and administrators can make MFA mandatory for everyone in the company.",
      },
      {
        q: "Does NeevHR support single sign-on?",
        a: "Not yet. SSO with SAML or OpenID Connect identity providers is not available today.",
      },
      {
        q: "Where is data hosted?",
        a: "In India. NeevHR runs on cloud infrastructure in the Bengaluru region.",
      },
      {
        q: "Does NeevHR hold SOC 2 or ISO 27001 certification?",
        a: "No. NeevHR does not currently hold SOC 2 or ISO 27001 certification. We walk your IT and security team through the controls in place during evaluation.",
      },
    ],
  },
  {
    group: "Implementation",
    items: [
      faqs[4],
      {
        q: "Can existing employee data be migrated?",
        a: "Yes. Employee master data, org structure and documents are imported from CSV with a dry-run validation step before anything is saved.",
      },
      {
        q: "Can payroll history be migrated?",
        a: "Year-to-date opening balances (gross, TDS, PF, ESI), leave balances, loan balances and pending arrears are migrated so the current year computes correctly. Month-by-month historical payslips are not imported; keep them in your previous system or archive.",
      },
      {
        q: "Can HR configure policies without code?",
        a: "Yes. Leave, attendance, shifts, pay structures, expense and appraisal policies are configured in settings by an HR administrator and assigned to employee groups.",
      },
      {
        q: "Is a consultant required?",
        a: "No certified consultant is required. The NeevHR team supports the implementation, and a trained HR administrator owns configuration afterwards.",
      },
    ],
  },
];

export const implementationSteps = [
  { week: "Week 1", title: "Configure", body: "Entities, policies, pay structures and employee groups set up with your HR admin." },
  { week: "Weeks 2 to 3", title: "Migrate", body: "Employee master, opening balances and documents imported and validated with a dry run." },
  { week: "Weeks 4 to 6", title: "Parallel run", body: "Attendance and a parallel payroll cycle reconciled against your current process." },
  { week: "Weeks 6 to 8", title: "Go live", body: "First live payroll, self-service rollout and reports handover." },
];
