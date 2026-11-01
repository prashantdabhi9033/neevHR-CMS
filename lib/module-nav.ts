// Lightweight module navigation metadata (no component imports) so the
// header mega-menu and overview can list every module without pulling the
// designed Visual components into the client bundle.
// Slugs match the product's own module keys and the /features/[slug] routes.

export type ModuleNavItem = { slug: string; name: string; desc: string; href?: string };
export type ModuleNavGroup = { group: string; blurb: string; items: ModuleNavItem[] };

export const moduleGroups: ModuleNavGroup[] = [
  {
    group: "Core HR",
    blurb: "One effective-dated employee record.",
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
      { slug: "disciplinary", name: "Disciplinary cases", desc: "Notices, replies, inquiry and outcome on one dated case." },
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
      { slug: "expenses", name: "Expenses", desc: "Claims and reimbursement with separation of duties." },
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
      { slug: "mobile", name: "Self-service & mobile", desc: "ESS on the web today; mobile app coming soon.", href: "/mobile" },
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

// Flat set of slugs that have their own /features/[slug] page.
export const moduleSlugs = moduleGroups.flatMap((g) => g.items.map((i) => i.slug));

// Canonical URL for a module slug (a few modules live outside /features).
const hrefOverrides = Object.fromEntries(
  moduleGroups.flatMap((g) => g.items.filter((i) => i.href).map((i) => [i.slug, i.href as string]))
) as Record<string, string>;
export const moduleHref = (slug: string) => hrefOverrides[slug] ?? `/features/${slug}`;
