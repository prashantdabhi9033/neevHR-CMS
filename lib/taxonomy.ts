// Product taxonomy shown on the homepage and /hrms (spec §4). Every item is a
// capability verified in the product code; `status` marks anything not yet
// generally available so it is never presented as live.

export type TaxItem = { name: string; href?: string; status?: "coming-soon" };
export type TaxGroup = { group: string; icon: string; items: TaxItem[] };

export const taxonomy: TaxGroup[] = [
  {
    group: "Core HR",
    icon: "users",
    items: [
      { name: "Employee Management", href: "/features/employees" },
      { name: "Organization Structure", href: "/features/org-chart" },
      { name: "Employee Onboarding", href: "/features/onboarding" },
      { name: "Workforce Planning", href: "/features/planning" },
      { name: "Employee Documents", href: "/features/documents" },
      { name: "Exit Management", href: "/features/exit" },
      { name: "Full & Final Settlement", href: "/features/full-and-final-settlement" },
    ],
  },
  {
    group: "Time & Attendance",
    icon: "clock",
    items: [
      { name: "Attendance Management", href: "/features/attendance" },
      { name: "Biometric Integration", href: "/integrations" },
      { name: "Shift Management", href: "/features/rostering" },
      { name: "Roster Management", href: "/features/rostering" },
      { name: "Leave Management", href: "/features/leave" },
      { name: "Holiday Calendar", href: "/features/holidays" },
      { name: "Timesheets", href: "/features/timesheets" },
      { name: "Field Tracking", href: "/features/field-tracking", status: "coming-soon" },
      { name: "Overtime", href: "/features/attendance" },
    ],
  },
  {
    group: "Payroll",
    icon: "wallet",
    items: [
      { name: "Payroll Processing", href: "/payroll" },
      { name: "Salary Structures", href: "/payroll" },
      { name: "Statutory Compliance", href: "/features/compliance" },
      { name: "Expenses", href: "/features/expenses" },
      { name: "Loans & Advances", href: "/features/loans" },
      { name: "Variable Pay", href: "/features/variable-pay" },
      { name: "Benefits / FBP", href: "/features/benefits" },
      { name: "Payroll Reports", href: "/features/reports" },
    ],
  },
  {
    group: "Talent",
    icon: "target",
    items: [
      { name: "Recruitment", href: "/features/recruitment" },
      { name: "Performance Management", href: "/features/performance" },
      { name: "Compensation", href: "/features/compensation" },
      { name: "Learning", href: "/features/learning" },
      { name: "Succession", href: "/features/succession" },
    ],
  },
  {
    group: "Employee Experience",
    icon: "sparkle",
    items: [
      { name: "Employee Self Service", href: "/mobile" },
      { name: "Mobile App", href: "/mobile", status: "coming-soon" },
      { name: "Engagement", href: "/features/engagement" },
      { name: "Surveys", href: "/features/surveys" },
      { name: "HR Helpdesk", href: "/features/helpdesk" },
      { name: "Travel", href: "/features/travel" },
      { name: "Asset Management", href: "/features/assets" },
    ],
  },
  {
    group: "Analytics",
    icon: "chart",
    items: [
      { name: "HR Reports", href: "/features/reports" },
      { name: "Payroll Reports", href: "/features/reports" },
      { name: "Attendance Reports", href: "/features/reports" },
      { name: "Custom Report Builder", href: "/features/reports" },
      { name: "Dashboards", href: "/features/reports" },
      { name: "Workforce Analytics", href: "/features/reports" },
    ],
  },
];

// "What is an HRMS?" capability list (spec §5).
export const hrmsIncludes = [
  "Employee information",
  "Organization structure",
  "Employee onboarding",
  "Attendance",
  "Shift management",
  "Leave",
  "Payroll",
  "Statutory compliance",
  "Recruitment",
  "Performance",
  "Compensation",
  "Expenses",
  "Employee documents",
  "Employee self-service",
  "HR reports",
  "Workforce analytics",
  "Employee exit and full & final settlement",
];

// Company-size segments (spec §6). No capacity claims.
export const sizeSegments = [
  {
    title: "Growing companies",
    body: "Build structured HR processes without introducing unnecessary complexity.",
  },
  {
    title: "Mid-market companies",
    body: "Manage multiple departments, locations, employee groups, approval workflows and payroll rules from one platform.",
  },
  {
    title: "Larger organizations",
    body: "Apply granular role-based access, data scopes, workflows, audit trails and configurable policies across your workforce.",
  },
];
