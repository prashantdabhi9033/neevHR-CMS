// Lightweight module navigation metadata (no component imports) so the
// header mega-menu and overview can list every module without pulling the
// designed Visual components into the client bundle.
// Slugs match the product's own module keys and the /features/[slug] routes.

export type ModuleNavItem = { slug: string; name: string; desc: string; href?: string };
export type ModuleNavGroup = { group: string; blurb: string; items: ModuleNavItem[] };

export const moduleGroups: ModuleNavGroup[] = [
  {
    group: "Core HR",
    blurb: "One employee profile, with full change history.",
    items: [
      { slug: "employees", name: "Employee records", desc: "One dated timeline per employee, with a 360 view." },
      { slug: "onboarding", name: "Onboarding", desc: "Offer to day-one as a guided journey." },
      { slug: "org-chart", name: "Org chart", desc: "Legal entities, business units and reporting lines." },
      { slug: "positions", name: "Positions", desc: "Position management and headcount control." },
      { slug: "planning", name: "Workforce planning", desc: "Headcount plans and open seats by department." },
      { slug: "exit", name: "Exit management", desc: "Notice, clearance, knowledge handover and F&F." },
      { slug: "full-and-final-settlement", name: "Full & final settlement", desc: "F&F worksheet paid through payroll." },
      { slug: "documents", name: "Documents", desc: "Policies and employee files with acknowledgement." },
      { slug: "alumni-portal", name: "Alumni portal", desc: "Ex-employees download payslips, Form 16 and F&F." },
      { slug: "disciplinary", name: "Disciplinary cases", desc: "Notices, replies, inquiry and outcome on one case record, with every step dated." },
      { slug: "posh", name: "POSH complaint route", desc: "Confidential complaints that only the Internal Committee reads." },
    ],
  },
  {
    group: "Time & attendance",
    blurb: "From punches to a payroll-ready day.",
    items: [
      { slug: "attendance", name: "Attendance", desc: "Biometric ingestion, regularisation, day-close." },
      { slug: "rostering", name: "Shifts & roster", desc: "Shifts, rosters, coverage and overtime." },
      { slug: "leave", name: "Leave", desc: "Configurable leave types, accrual and approvals." },
      { slug: "holidays", name: "Holiday calendar", desc: "Location-aware holiday calendars." },
      { slug: "field-tracking", name: "Field tracking", desc: "GPS attendance and routes for field staff." },
      { slug: "timesheets", name: "Timesheets", desc: "Weekly time capture against projects." },
      { slug: "projects", name: "Projects", desc: "Project and cost-centre time allocation." },
    ],
  },
  {
    group: "Payroll & pay",
    blurb: "Statutory-accurate pay, on time.",
    items: [
      { slug: "payroll", name: "Payroll", desc: "Configurable structures, LOP, arrears, payslips.", href: "/payroll" },
      { slug: "income-tax", name: "Income tax", desc: "Declarations, proofs, tracker and tax ledger." },
      { slug: "compliance", name: "Statutory compliance", desc: "PF, ESI, PT, LWF, TDS returns and challans." },
      { slug: "expenses", name: "Expenses", desc: "Claims and reimbursement. The payer never approves." },
      { slug: "loans", name: "Loans & advances", desc: "Loans, advances and EMI recovery in payroll." },
      { slug: "variable-pay", name: "Variable pay", desc: "Incentives and variable payout cycles." },
      { slug: "benefits", name: "Benefits and insurance", desc: "Flexible benefits, declarations and group insurance." },
    ],
  },
  {
    group: "Talent",
    blurb: "Hire, review, reward and grow.",
    items: [
      { slug: "recruitment", name: "Recruitment", desc: "Requisitions, panels, offers, hire-to-onboard." },
      { slug: "performance", name: "Performance", desc: "Goals, 360, 9-box, increment sign-off." },
      { slug: "goal-cascade", name: "OKR and goal cascade", desc: "Company, team and personal goals linked, with key results." },
      { slug: "development-plans", name: "Development plans", desc: "Focus areas, actions and approval for each person." },
      { slug: "360-feedback", name: "360 feedback", desc: "Competencies and anonymity on every cut." },
      { slug: "compensation", name: "Compensation", desc: "Increment and bonus planning with budgets." },
      { slug: "learning", name: "Learning", desc: "Courses, assignments and completions." },
      { slug: "succession", name: "Succession", desc: "Talent pools, 9-box and successors." },
      { slug: "talent-review", name: "Talent review", desc: "9-box calibration and potential.", href: "/features/succession" },
    ],
  },
  {
    group: "Employee experience",
    blurb: "Self-service for every employee.",
    items: [
      { slug: "mobile", name: "Self-service & mobile", desc: "ESS on the web today; mobile app for Android and iPhone.", href: "/mobile" },
      { slug: "engagement", name: "Engagement", desc: "Recognition, pulse and engagement scores." },
      { slug: "surveys", name: "Surveys", desc: "Pulse and eNPS surveys with analytics." },
      { slug: "manager-self-service", name: "Manager self-service", desc: "My Team, one Inbox, delegation and email approvals." },
      { slug: "approval-channels", name: "Approvals in Slack, Teams, WhatsApp", desc: "Approve from the apps your people use, connected per company." },
      { slug: "helpdesk", name: "HR helpdesk", desc: "Employee tickets with SLA tracking." },
      { slug: "travel", name: "Travel booking", desc: "Travel requests, approvals and travel advances." },
      { slug: "assets", name: "Assets", desc: "Asset issue, custody and return." },
    ],
  },
  {
    group: "Insights",
    blurb: "Every list a report, every report a chart.",
    items: [
      { slug: "reports", name: "Reports & analytics", desc: "Report builder, dashboards and drill-down." },
      { slug: "ai-assistant", name: "AI in NeevHR", desc: "AI inside each module, and an assistant within your own access." },
    ],
  },
  {
    group: "Platform and security",
    blurb: "How you configure, connect and protect it.",
    items: [
      { slug: "process-studio", name: "Process Studio", desc: "Your own HR flows, from templates." },
      { slug: "sign-in-security", name: "Sign-in and security", desc: "Google sign-in, MFA, encryption and audit.", href: "/security#sign-in" },
      { slug: "integrations", name: "Integrations", desc: "Devices, banks, Tally, Zoho Books, API and webhooks.", href: "/integrations" },
      { slug: "hindi", name: "Hindi for employees", desc: "Every self-service page in Hindi.", href: "/mobile" },
      { slug: "data-migration", name: "Data migration", desc: "Dry run, undo, parallel run and sign-off.", href: "/hrms-data-migration" },
    ],
  },
];

// Anchor of a capability card on a module page, so a feature can be linked to directly.
export const capabilityId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Capabilities inside the modules, listed on /features. Those with a menuGroup also appear in the header menus
// under that group, as a link to the capability on its module page.
export type NewFeature = { name: string; desc: string; href: string; menuGroup?: string };

export const newFeatures: NewFeature[] = [
  { name: "AI inside each module", desc: "Resume match, payroll flags, receipts, tax proofs, helpdesk drafts and more, as suggestions a person decides on.", href: "/features/ai-assistant#ai-in-modules" },
  { name: "AI assistant", desc: "Answers from your own records, with your admin in control of who uses it and how much.", href: "/features/ai-assistant" },
  { name: "Development plans", desc: "Focus areas, actions and approval, linked to appraisals and learning.", href: "/features/development-plans" },
  { name: "360 feedback by competency", desc: "Question sets, standalone rounds and anonymity on every cut.", href: "/features/360-feedback" },
  { name: "OKR and goal cascade", desc: "Company, team and personal goals linked, with key results.", href: "/features/goal-cascade" },
  { name: "Disciplinary cases", desc: "Notices, replies, inquiry and outcome on one case record, with every step dated.", href: "/features/disciplinary" },
  { name: "POSH complaint route", desc: "Confidential complaints that only the Internal Committee reads.", href: "/features/posh" },
  { name: "Approvals in Slack, Teams, WhatsApp", desc: "Connected per company, each with a setup guide.", href: "/features/approval-channels" },
  { name: "Approve from email", desc: "Decide from the request email, once a Company Admin switches it on.", href: `/features/manager-self-service#${capabilityId("Approve from email")}` },
  { name: "QR code attendance", desc: "Kiosk or poster, scanned with the mobile app.", href: `/features/attendance#${capabilityId("QR code attendance")}`, menuGroup: "Time & attendance" },
  { name: "Biometric device sync", desc: "Send employees to devices, remove leavers and compare each device's user list.", href: `/features/attendance#${capabilityId("Device management")}`, menuGroup: "Time & attendance" },
  { name: "Daily-wage and hourly payroll", desc: "Weekly and fortnightly runs from attendance.", href: "/payroll" },
  { name: "Tally and Zoho Books entries", desc: "Vouchers and journals from published payroll, by file.", href: "/payroll" },
  { name: "PF correction of a filed month", desc: "Arrears, refunds, EPS to EPF transfers and a supplementary ECR.", href: `/features/compliance#${capabilityId("PF correction of a filed month")}`, menuGroup: "Payroll & pay" },
  { name: "Manual PT and LWF", desc: "Record liabilities outside payroll, with challan tracking.", href: `/features/compliance#${capabilityId("Manual PT and LWF")}` },
  { name: "Careers website applications", desc: "From your own website into Recruitment.", href: `/features/recruitment#${capabilityId("Careers website applications")}`, menuGroup: "Talent" },
  { name: "Internal job posting", desc: "Open roles for employees, with eligibility and manager rules.", href: `/features/recruitment#${capabilityId("Internal job posting")}`, menuGroup: "Talent" },
  { name: "Resume parsing", desc: "Details suggested from a resume, rule based, for you to accept.", href: `/features/recruitment#${capabilityId("Resume parsing")}`, menuGroup: "Talent" },
  { name: "1:1 meetings", desc: "Manager and team member, with a shared agenda and action items.", href: `/features/performance#${capabilityId("1:1 meetings")}`, menuGroup: "Employee experience" },
  { name: "Digital ID cards", desc: "ID cards to view and print, with a public verify page.", href: `/features/employees#${capabilityId("Digital ID cards")}`, menuGroup: "Employee experience" },
  { name: "Asset QR labels", desc: "Print labels; scanning one opens the asset for someone with access.", href: `/features/assets#${capabilityId("Asset QR labels")}` },
  { name: "Helpdesk attachments and CSAT", desc: "Files on tickets, internal notes and a rating when a ticket closes.", href: `/features/helpdesk#${capabilityId("Satisfaction rating")}` },
  { name: "Google and Microsoft sign-in", desc: "Your company's own accounts, turned on per company. Microsoft is being switched on.", href: "/security#sign-in" },
  { name: "Process Studio", desc: "Your own HR flows, from templates.", href: "/features/process-studio" },
  { name: "Travel advance", desc: "Trip limits, auto-adjust and recovery.", href: `/features/expenses#${capabilityId("Travel advance")}` },
  { name: "Data migration workspace", desc: "Dry run, undo, parallel run and sign-off.", href: "/hrms-data-migration" },
];

// Menu links for a group: its modules, then the capabilities placed in it.
export type MenuLink = { key: string; name: string; href: string; desc: string };
export const menuLinks = (group: string): MenuLink[] => [
  ...(moduleGroups.find((g) => g.group === group)?.items ?? []).map((i) => ({
    key: i.slug,
    name: i.name,
    href: i.href ?? `/features/${i.slug}`,
    desc: i.desc,
  })),
  ...newFeatures
    .filter((n) => n.menuGroup === group)
    .map((n) => ({ key: n.href, name: n.name, href: n.href, desc: n.desc })),
];

// Flat set of slugs that have their own /features/[slug] page.
export const moduleSlugs = moduleGroups.flatMap((g) => g.items.map((i) => i.slug));

// Canonical URL for a module slug (a few modules live outside /features).
const hrefOverrides = Object.fromEntries(
  moduleGroups.flatMap((g) => g.items.filter((i) => i.href).map((i) => [i.slug, i.href as string]))
) as Record<string, string>;
export const moduleHref = (slug: string) => hrefOverrides[slug] ?? `/features/${slug}`;
