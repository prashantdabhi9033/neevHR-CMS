// Central content config for the NeevHR marketing site.
// Keep product claims honest: only list what the product actually does.
// Re-checked against the product on 31 Oct 2026. Notably NOT available:
// the mobile app in the stores (it is built, the store release is pending),
// Hindi for admin screens, SAML / Okta, selfie or face
// punch, a live Tally connection, job boards, bank payout API, earned wage access.
// Do not claim these as available.

export const site = {
  name: "NeevHR",
  tagline: "Foundation for Every HR Process",
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
  // Sales and support phone (owner, 05 Nov 2026).
  phone: "+91 92747 52634",
  phoneHref: "tel:+919274752634",
  addressCountry: "IN",
  // Legal entity and registered address, confirmed by the owner on 17 Oct 2026 (also on /privacy).
  legalName: "NeevHR Technologies LLP",
  address: {
    street: "L-1601, Aster, Adani Shantigram, near Shoppers Plaza, Vaishnodevi Circle",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "382421",
    country: "India",
  },
  // Owner, 01 Nov 2026: no go-live timeline on the site.
  implementation:
    "Implementation time depends on employee count, data quality, integrations and payroll complexity.",
  // Official profiles for schema.org sameAs and the footer social links.
  socials: [
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/neevhr/" },
    { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/neevhr" },
    { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/channel/UC4cUg0HifDHTwf0JqXYz4aw" },
    { label: "X", icon: "x", href: "https://x.com/neevhr" },
  ],
} as const;

export const differentiators = [
  {
    title: "Built for India",
    body: "PF, ESI, PT, LWF and TDS, gratuity, bonus and the DPDP Act 2023 are part of the core product, not an add-on. INR and the India financial year throughout.",
    icon: "flag",
  },
  {
    title: "Everything a large HR team needs, and easy to set up and run",
    body: "Statutory accuracy and clear processes for growing and mid-market companies, without the cost or long rollout of a large HR suite.",
    icon: "users",
  },
  {
    title: "A guided go-live",
    body: "Implementation time depends on employee count, data quality, integrations and payroll complexity.",
    icon: "bolt",
  },
  {
    title: "Your HR admin customises it",
    body: "Your HR admin can customise all policies and workflows for each employee group: leave, attendance, payroll, expense and appraisal. No certified consultant is needed.",
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
  { title: "Role-based access", body: "Each person sees only what their role allows. Sensitive fields can be hidden, and one person cannot hold two conflicting roles." },
  { title: "Audit trail", body: "Every change is recorded with its date, so records can be reported as they stood on any date." },
  { title: "Notifications", body: "In-app, email, SMS, WhatsApp and browser push from a single dispatcher, once each channel's provider is configured." },
  { title: "AI in every module", body: "Fully AI-enabled: suggestions on each module's own screen, and an assistant that answers within each person's role. A person decides, and your admin controls who uses it and how much." },
  { title: "Import & export", body: "Bulk CSV import with dry-run validation, and export from lists and reports." },
];

export type FaqItem = { q: string; a: string };

// Homepage FAQ: the questions buyers ask first.
const aiFaq: FaqItem = {
  q: "Does NeevHR have AI?",
  a: "Yes. NeevHR is fully AI-enabled. AI works inside each module, for example resume match, payroll change explanation, receipt and tax proof reading and helpdesk drafts, and the assistant answers questions within each person's role. Everything is a suggestion a person decides on. It is switched on per module, on prepaid credits.",
};

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
    a: "Organisations of roughly 500 to 5,000+ employees that have outgrown spreadsheets and disconnected HR tools, and need structured HR, attendance and payroll with Indian statutory compliance.",
  },
  {
    q: "Does NeevHR calculate PF, ESI, PT and TDS?",
    a: "Yes. Payroll computes PF, ESI, professional tax, LWF and TDS (old and new regime), and produces the PF ECR file, ESI contribution file, challans, Form 24Q return file and Form 16.",
  },
  {
    q: "How long does implementation take?",
    a: "Implementation time depends on employee count, data quality, integrations and payroll complexity. It usually includes configuration, data migration, a parallel payroll run and go-live.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes. The NeevHR mobile app for Android and iPhone is built and coming to Google Play and the App Store. Today, employees use self-service on the web, including from a phone browser, for attendance, leave, payslips, tax declarations, expenses and approvals.",
  },
  {
    q: "How is our employee data protected?",
    a: "Each company's data is kept separate inside the database (Postgres row-level security), sensitive identifiers such as PAN, Aadhaar and bank details are encrypted at the field level, access is controlled by roles and data scopes, and changes are audit-logged. Data is hosted in India.",
  },
  {
    q: "How does NeevHR pricing work?",
    a: "Pricing is based on employee count, modules, implementation requirements and integrations. NeevHR uses edition-based packaging priced in INR, and we prepare a quote for your team.",
  },
  aiFaq,
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
        q: "Is NeevHR suitable for small and medium businesses?",
        a: "NeevHR is designed for organisations from about 500 employees upward. A smaller company with simple payroll may need less than a full HRMS; the guide for small businesses on this site explains what to check first.",
      },
      {
        q: "Is NeevHR the best HRMS software in India?",
        a: "No single HRMS is best for every company. The right choice depends on your employee count, payroll complexity, locations, integrations and budget. NeevHR fits Indian organisations that want HR, attendance, leave and payroll with statutory compliance on one employee record. It does not hold SOC 2 or ISO 27001 certification, so check that against your requirements. Compare it on your own payroll data before you decide.",
      },
      {
        q: "How many employees can NeevHR support?",
        a: "NeevHR is designed for organisations from about 500 to 5,000+ employees. For larger workforces we size the deployment with you during evaluation rather than quote a fixed limit.",
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
        q: "What does AI send outside NeevHR?",
        a: "When a company switches a feature on, what that feature needs goes to our AI provider, Anthropic, which may process it outside India. That can include cleaned resume text and uploaded receipts or proofs as whole files, and a file can contain what is printed on it. Proofs on the 80D, 80DD, 80DDB and 80U lines are not sent. The AI page lists each feature.",
      },
      {
        q: "Does NeevHR support OKRs and goal cascading?",
        a: "Yes, in the Growth edition and up. Company and team objectives carry key results, each person's goal links to an objective, and progress rolls up for each review cycle.",
      },
      {
        q: "Does NeevHR handle disciplinary cases?",
        a: "Yes. Show-cause notices, charge sheets, replies, the inquiry and the outcome sit on one case record, with every step dated, under its own permission. Have letter wording checked by your adviser.",
      },
      {
        q: "Does NeevHR have a POSH complaint route?",
        a: "Yes. Employees can make a confidential complaint in self-service that only the Internal Committee reads, and the committee records each step of the case. HR, managers and Company Admins cannot read it.",
      },
      {
        q: "Can managers approve from Slack, Teams or WhatsApp?",
        a: "Yes, once your company connects the app. Each one is connected per company with its own setup guide, using your own Slack app, Teams bot or WhatsApp Business account. Money and pay requests, and anything that needs a second approver, are approved only inside NeevHR.",
      },
      {
        q: "Is NeevHR available in Hindi?",
        a: "Yes, for employees. Every self-service page and the mobile app are available in Hindi, and the AI assistant replies in Hindi or Gujarati. Admin screens are in English today. Notification emails can be set in Hindi too.",
      },
    ],
  },
  {
    group: "Payroll",
    items: [
      {
        q: "Does NeevHR calculate PF?",
        a: "Yes. Employee and employer PF, the EPS split, EDLI and admin charges are computed, with the ₹25,000 wage ceiling (from 17 Sep 2026) or actual basic as configured. The PF ECR text file and PF challan are generated from the published run.",
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
        a: "By file, yes. NeevHR makes vouchers for Tally Prime (XML) and journals for Zoho Books (CSV) from published payroll, which your accounts team imports. It is a file, not a live connection. A balanced journal voucher CSV with GL code mapping and cost-centre split is also available for other accounting software.",
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
        a: "Yes. Field-force tracking records location during duty hours with geofences, with employee consent. It runs from the mobile app.",
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
        a: "Data is encrypted in transit. Sensitive identifiers such as PAN, Aadhaar, UAN, ESI number and bank account details are encrypted at the field level with AES-256-GCM.",
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
        a: "Yes, Sign in with Google, and Sign in with Microsoft is being switched on. Each company turns it on for its own domain, and it works for people who already have a NeevHR login. SAML is not available.",
      },
      {
        q: "Where is data hosted?",
        a: "In India. NeevHR runs on servers in Mumbai.",
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
  { week: "Step 1", title: "Configure", body: "Entities, policies, pay structures and employee groups set up with your HR admin." },
  { week: "Step 2", title: "Migrate", body: "Employee master, opening balances and documents imported and validated with a dry run." },
  { week: "Step 3", title: "Parallel run", body: "Attendance and a parallel payroll cycle reconciled against your current process." },
  { week: "Step 4", title: "Go live", body: "First live payroll, self-service rollout and reports handover." },
];
