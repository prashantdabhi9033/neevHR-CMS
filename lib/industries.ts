export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  challenges: string[];
  modules: { slug: string; name: string; why: string }[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Shifts, overtime and factory compliance, handled.",
    intro:
      "Factories run on rotating shifts, a mix of permanent and contract workers, and tight statutory obligations. NeevHR captures every punch from your biometric terminals, applies shift and overtime rules, and turns it into a payroll that is right the first time.",
    challenges: [
      "Rotating and night shifts across plants and lines",
      "Biometric attendance for a large blue-collar workforce",
      "Overtime and shift allowances that must reach payroll accurately",
      "PF, ESI and state factory compliance across locations",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "Plan and publish weekly rosters with coverage and working-time checks." },
      { slug: "attendance", name: "Attendance", why: "Ingest biometric punches and compute overtime and shift allowances." },
      { slug: "payroll", name: "Payroll", why: "PF, ESI, PT and overtime computed accurately for every cycle." },
    ],
  },
  {
    slug: "it-ites",
    name: "IT & ITES",
    tagline: "Bill every hour and hire at speed.",
    intro:
      "Technology and services companies live and die on utilisation and hiring velocity. NeevHR ties project timesheets to billing, runs a fast hiring pipeline, and keeps performance and compensation on one record.",
    challenges: [
      "Protecting margins with accurate billable utilisation",
      "Fast, high-volume hiring and smooth onboarding",
      "Continuous performance reviews across distributed teams",
      "Self-service for a digital-first workforce",
    ],
    modules: [
      { slug: "timesheets", name: "Timesheets", why: "Weekly project time capture with billable-utilisation analytics." },
      { slug: "recruitment", name: "Recruitment", why: "A pipeline from requisition to offer, then straight to onboarding." },
      { slug: "performance", name: "Performance", why: "Goals, 360 feedback and calibrated ratings that drive increments." },
    ],
  },
  {
    slug: "retail-qsr",
    name: "Retail & QSR",
    tagline: "Staff every store, every shift.",
    intro:
      "Stores and quick-service outlets juggle part-time staff, multi-location rosters and high attrition. NeevHR keeps every outlet staffed, pays shift workers correctly, and gives frontline teams self-service on their phones.",
    challenges: [
      "Multi-location rostering with part-time and shift staff",
      "High attrition and constant hiring and onboarding",
      "Attendance across dozens of outlets",
      "Mobile self-service for frontline employees",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "Coverage-aware rosters across every outlet." },
      { slug: "attendance", name: "Attendance", why: "Biometric and mobile check-in for distributed stores." },
      { slug: "mobile", name: "Self-service & mobile", why: "Leave, payslips and shifts in every employee's pocket." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & hospitals",
    tagline: "24x7 rosters and statutory accuracy for care teams.",
    intro:
      "Hospitals run round the clock with nursing and duty rosters that cannot slip. NeevHR builds compliant 24x7 rosters, captures attendance across departments, and keeps PF, ESI and payroll accurate for large clinical and support teams.",
    challenges: [
      "Round-the-clock nursing and duty rosters",
      "Rest-hour and working-time compliance",
      "Attendance across wards, departments and sites",
      "Statutory payroll for large mixed workforces",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "24x7 rosters with rest-hour and coverage compliance." },
      { slug: "attendance", name: "Attendance", why: "Department-wise attendance and regularisation." },
      { slug: "payroll", name: "Payroll", why: "Accurate PF, ESI and shift-pay every cycle." },
    ],
  },
  {
    slug: "bfsi",
    name: "Financial services (BFSI)",
    tagline: "Compliance, audit and data protection by design.",
    intro:
      "Banks, NBFCs and insurers answer to regulators and auditors. NeevHR gives you a complete audit trail, role-based access, DPDP-aligned data protection, and incentive management for large sales teams.",
    challenges: [
      "A complete, effective-dated audit trail",
      "Fine-grained access control and separation of duties",
      "Employee data protection under the DPDP Act 2023",
      "Incentive and variable-pay cycles for sales teams",
    ],
    modules: [
      { slug: "variable-pay", name: "Variable pay", why: "Incentive and bonus cycles with approval controls." },
      { slug: "compliance", name: "Statutory compliance", why: "Returns, challans and Form 16 without missed deadlines." },
      { slug: "reports", name: "Reports & analytics", why: "Audit-ready reporting that drills to the record." },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & transport",
    tagline: "Track and pay your field workforce.",
    intro:
      "Logistics runs on people who are rarely at a desk. NeevHR tracks field staff on a live map with geofencing, captures GPS-based attendance, and pays a distributed workforce accurately across sites.",
    challenges: [
      "Attendance for drivers and field staff on the move",
      "Geofenced check-in with consent handling",
      "Multi-site and contract workforce management",
      "Field-force visibility for supervisors",
    ],
    modules: [
      { slug: "field-tracking", name: "Field tracking", why: "Live map, geofences and GPS attendance for field teams." },
      { slug: "attendance", name: "Attendance", why: "Mobile and biometric attendance across hubs." },
      { slug: "payroll", name: "Payroll", why: "Accurate pay for a distributed, high-headcount workforce." },
    ],
  },
  {
    slug: "pharma",
    name: "Pharma & life sciences",
    tagline: "Plants, compliance and the field force in one place.",
    intro:
      "Pharma combines shift-based manufacturing with a large medical-representative field force. NeevHR runs plant rosters and compliance, tracks the field team on the map, and manages incentives, all on one record.",
    challenges: [
      "Shift-based manufacturing and GxP-adjacent discipline",
      "Field-force tracking for medical representatives",
      "Incentive schemes tied to targets",
      "Statutory compliance across plants and depots",
    ],
    modules: [
      { slug: "field-tracking", name: "Field tracking", why: "Map and geofenced attendance for the field force." },
      { slug: "rostering", name: "Shifts & roster", why: "Plant rosters with working-time compliance." },
      { slug: "variable-pay", name: "Variable pay", why: "Target-linked incentives with approvals." },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    tagline: "Rosters and shift pay for hotels and resorts.",
    intro:
      "Hotels flex with seasons and run every department on shifts. NeevHR staffs each department, handles shift allowances, and gives a large frontline team self-service, while keeping payroll and compliance clean.",
    challenges: [
      "Department-wise and seasonal shift rosters",
      "Shift allowances and overtime in payroll",
      "Frontline self-service on mobile",
      "High seasonal hiring and onboarding",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "Department rosters with coverage and allowances." },
      { slug: "mobile", name: "Self-service & mobile", why: "Shifts, leave and payslips for frontline staff." },
      { slug: "onboarding", name: "Onboarding", why: "Fast seasonal onboarding into the employee record." },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional services",
    tagline: "Utilisation and delivery on one platform.",
    intro:
      "Consulting, agencies and firms bill their people's time. NeevHR plans projects, tracks utilisation and timesheets against billing, and keeps performance and compensation aligned to delivery.",
    challenges: [
      "Billable utilisation and timesheet approvals",
      "Project resourcing and budgets",
      "Performance tied to delivery and client outcomes",
      "Lean HR teams that need configuration, not consultants",
    ],
    modules: [
      { slug: "timesheets", name: "Timesheets", why: "Time against projects with billable analytics." },
      { slug: "projects", name: "Projects", why: "Rates, budgets and members that drive invoicing." },
      { slug: "performance", name: "Performance", why: "Reviews and increments aligned to delivery." },
    ],
  },
  {
    slug: "staffing-bpo",
    name: "Staffing & BPO",
    tagline: "High headcount, high velocity, under control.",
    intro:
      "Staffing firms and BPOs run large, shift-based, high-attrition workforces. NeevHR handles bulk hiring and onboarding, shift rosters and attendance at scale, and payroll accuracy across thousands of employees.",
    challenges: [
      "Bulk hiring and rapid onboarding at scale",
      "Shift rosters and attendance for large teams",
      "High attrition and constant exits and F&F",
      "Payroll accuracy across high headcount",
    ],
    modules: [
      { slug: "recruitment", name: "Recruitment", why: "High-volume pipeline and hire-to-onboard handover." },
      { slug: "rostering", name: "Shifts & roster", why: "Shift rosters and coverage for large teams." },
      { slug: "exit", name: "Exit management", why: "Clean clearance and full and final at scale." },
    ],
  },
];

export const industryBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
