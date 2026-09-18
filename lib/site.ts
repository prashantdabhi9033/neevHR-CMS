// Central content config for the NeevHR marketing site.
// Keep product claims honest: only list what the product actually does.

export const site = {
  name: "NeevHR",
  tagline: "The HR foundation for growing Indian teams",
  description:
    "NeevHR is a configurable, India-only HRMS for companies with 500 to 5,000 employees. Payroll with PF, ESI, PT and TDS accuracy, attendance, leave, performance, recruitment and more, live in 4 to 8 weeks.",
  url: "https://www.neevhr.com",
  email: "hello@neevhr.com",
} as const;

export const primaryNav = [
  { label: "Product", href: "/product" },
  { label: "Why NeevHR", href: "/compare" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Company", href: "/company" },
] as const;

export const differentiators = [
  {
    title: "Built for India, only India",
    body: "PF, ESI, PT, TDS and LWF, gratuity, bonus, POSH and the DPDP Act 2023 are in the core, not an add-on. INR and the India financial year throughout.",
    icon: "flag",
  },
  {
    title: "Right-sized for the mid-market",
    body: "Process discipline and statutory accuracy for 500 to 5,000 employees, without the cost or the multi-year rollout of a tier-one suite.",
    icon: "users",
  },
  {
    title: "Live in 4 to 8 weeks",
    body: "A focused implementation measured in weeks, not quarters. You start running real payroll and attendance fast.",
    icon: "bolt",
  },
  {
    title: "Configured by your HR admin",
    body: "Leave, attendance, payroll, expense and appraisal are configurable rule sets assigned to employee groups. A trained HR admin owns it, no certified consultant required.",
    icon: "sliders",
  },
] as const;

export type ModuleGroup = {
  group: string;
  blurb: string;
  modules: { name: string; desc: string; slug?: string }[];
};

export const moduleMap: ModuleGroup[] = [
  {
    group: "Core HR",
    blurb: "One employee record, effective-dated, as the single source of truth.",
    modules: [
      { name: "Employee records", desc: "One dated timeline per employee. History is never overwritten." },
      { name: "Onboarding", desc: "Offer to day-one, dynamic forms, document collection and buddy assignment.", slug: "onboarding" },
      { name: "Documents", desc: "Policies, letters and employee files with acknowledgement tracking." },
      { name: "Org & positions", desc: "Legal entities, business units, departments and reporting lines." },
    ],
  },
  {
    group: "Time & attendance",
    blurb: "From biometric punches to a clean, payroll-ready attendance day.",
    modules: [
      { name: "Attendance", desc: "Biometric device ingestion, regularisation and configurable day-close.", slug: "attendance" },
      { name: "Leave", desc: "Configurable leave types, accrual, proration and approval flows.", slug: "leave" },
      { name: "Shift & roster", desc: "Shifts, weekly-off policies, rosters and overtime rules." },
    ],
  },
  {
    group: "Payroll & compliance",
    blurb: "Statutory-accurate payroll with a full audit trail.",
    modules: [
      { name: "Payroll", desc: "Configurable pay structures, LOP, loans, arrears and payslips.", slug: "payroll" },
      { name: "Statutory", desc: "PF, ESI, PT, LWF and TDS with ECR, challan and Form 16 outputs." },
      { name: "Expenses & FBP", desc: "Claims, reimbursement with separation of duties, flexible benefits." },
    ],
  },
  {
    group: "Talent",
    blurb: "Hire, review and grow, on the same employee record.",
    modules: [
      { name: "Recruitment", desc: "Requisitions, interview panels, offers and hire-to-onboard handover.", slug: "recruitment" },
      { name: "Performance", desc: "Goals, reviews, ratings and increment or bonus decisions with sign-off.", slug: "performance" },
      { name: "Exit", desc: "Notice, clearance, knowledge handover and full and final settlement." },
    ],
  },
  {
    group: "Experience & platform",
    blurb: "Self-service on web and mobile, on a configurable platform.",
    modules: [
      { name: "Self-service & mobile", desc: "ESS on web and a Flutter mobile app for every employee." },
      { name: "Workflows & approvals", desc: "Configurable approval chains per record type, role or person." },
      { name: "Analytics & reports", desc: "Every list becomes a report, every report a chart that drills to records." },
    ],
  },
];

export const compliancePoints = [
  "Provident Fund (PF)",
  "Employees' State Insurance (ESI)",
  "Professional Tax (PT)",
  "Labour Welfare Fund (LWF)",
  "TDS, Form 24Q and Form 16",
  "Gratuity & Bonus",
  "POSH",
  "DPDP Act 2023",
];

export const platformCapabilities = [
  { title: "Custom fields", body: "Extend any record with your own fields, governed by a catalog, without a code change." },
  { title: "Workflow & approvals", body: "Configurable approval chains per record type, routed to a role or a specific person." },
  { title: "Role-based access", body: "Fine-grained RBAC with data scopes, time-bound grants and separation-of-duties checks." },
  { title: "Audit trail", body: "Every change is recorded, effective-dated, and reportable as of any date." },
  { title: "Notifications", body: "In-app, email, SMS, WhatsApp and browser push, driven by a single dispatcher." },
  { title: "Import & export", body: "Bulk CSV import with dry-run validation and export from every list." },
];

export const faqs = [
  {
    q: "Is NeevHR only for India?",
    a: "Yes. NeevHR is built for Indian companies only, with INR, the India financial year and India statutory law (PF, ESI, PT, LWF, TDS, gratuity, bonus, POSH and the DPDP Act 2023) in the core. The product is available in English and Hindi.",
  },
  {
    q: "How long does implementation take?",
    a: "A focused rollout takes 4 to 8 weeks: configure, migrate your employee master, run a parallel payroll cycle to reconcile, then go live.",
  },
  {
    q: "Do we need a certified consultant to configure it?",
    a: "No. Leave, attendance, payroll, expense and appraisal are configurable rule sets a trained HR admin can own and assign to employee groups. No code change per business unit.",
  },
  {
    q: "What company size is NeevHR for?",
    a: "Mid-market companies with roughly 500 to 5,000 employees, large enough to need process discipline and statutory accuracy, without the cost of a tier-one suite.",
  },
  {
    q: "Does it handle PF, ESI, PT and TDS?",
    a: "Yes. Statutory deductions, thresholds and returns are built in, with ECR, challans, Form 24Q and Form 16 outputs, kept current with Indian law.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes. Employees get self-service on the web and a mobile app for attendance, leave, payslips, approvals and more.",
  },
  {
    q: "How is our employee data protected?",
    a: "Row-level tenant isolation, role-based access, an audit trail and DPDP Act 2023 alignment with consent and data-principal rights are built into the platform.",
  },
];

export const implementationSteps = [
  { week: "Week 1", title: "Configure", body: "Entities, policies, pay structures and employee groups set up with your HR admin." },
  { week: "Week 2-3", title: "Migrate", body: "Employee master, opening balances and documents imported and validated." },
  { week: "Week 4-6", title: "Parallel run", body: "Attendance and a parallel payroll cycle to reconcile against your current process." },
  { week: "Week 6-8", title: "Go live", body: "First live payroll, self-service rollout and analytics handover." },
];
