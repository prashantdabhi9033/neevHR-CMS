// Lightweight module navigation metadata (no component imports) so the
// header mega-menu and overview can list every module without pulling the
// designed Visual components into the client bundle.
// Slugs match the product's own module keys and the /product/[slug] routes.

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
      { slug: "documents", name: "Documents", desc: "Policies and employee files with acknowledgement." },
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
      { slug: "payroll", name: "Payroll", desc: "Configurable structures, LOP, arrears, payslips." },
      { slug: "compliance", name: "Statutory compliance", desc: "PF, ESI, PT, LWF, TDS returns and challans." },
      { slug: "expenses", name: "Expenses", desc: "Claims and reimbursement with separation of duties." },
      { slug: "loans", name: "Loans & advances", desc: "Loans, advances and EMI recovery in payroll." },
      { slug: "variable-pay", name: "Variable pay", desc: "Incentives and variable payout cycles." },
      { slug: "benefits", name: "Benefits (FBP)", desc: "Flexible benefits and declarations." },
    ],
  },
  {
    group: "Talent",
    blurb: "Hire, review, reward and grow.",
    items: [
      { slug: "recruitment", name: "Recruitment", desc: "Requisitions, panels, offers, hire-to-onboard." },
      { slug: "performance", name: "Performance", desc: "Goals, 360, calibration, increment sign-off." },
      { slug: "compensation", name: "Compensation", desc: "Increment and bonus planning with budgets." },
      { slug: "learning", name: "Learning", desc: "Courses, assignments and completions." },
      { slug: "succession", name: "Succession", desc: "Talent pools, 9-box and successors." },
    ],
  },
  {
    group: "Employee experience",
    blurb: "Self-service on web and mobile.",
    items: [
      { slug: "mobile", name: "Self-service & mobile", desc: "ESS on web and a mobile app for everyone.", href: "/mobile" },
      { slug: "engagement", name: "Engagement", desc: "Recognition, pulse and engagement scores." },
      { slug: "surveys", name: "Surveys", desc: "Pulse and eNPS surveys with analytics." },
      { slug: "helpdesk", name: "HR helpdesk", desc: "Employee tickets with SLA tracking." },
      { slug: "travel", name: "Travel booking", desc: "Travel requests and approvals." },
      { slug: "assets", name: "Assets", desc: "Asset issue, custody and return." },
    ],
  },
  {
    group: "Insights",
    blurb: "Every list a report, every report a chart.",
    items: [
      { slug: "reports", name: "Reports & analytics", desc: "Report builder, dashboards and drill-down." },
    ],
  },
];

// Flat set of slugs that have their own /product/[slug] page.
export const moduleSlugs = moduleGroups.flatMap((g) => g.items.map((i) => i.slug));
