// Industry landing pages (spec §13). Each industry has its own problems,
// relevant NeevHR capabilities and FAQs, so no two pages are the same page
// with the name swapped. Claims stay within verified product behaviour; the
// mobile app (and so field tracking) is marked coming soon.

export type Industry = {
  slug: string;
  name: string;
  /** Page H1, e.g. "HRMS Software for Manufacturing Companies". */
  h1: string;
  tagline: string;
  intro: string;
  overview: string[];
  challenges: string[];
  features: string[];
  modules: { slug: string; name: string; why: string }[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    h1: "HRMS Software for Manufacturing Companies",
    tagline: "Shifts, overtime and factory compliance, handled.",
    intro:
      "Manufacturing organizations need HR software that can handle shift-based workforces, multiple locations, attendance, overtime, payroll, employee records and statutory compliance. NeevHR brings these processes together in one HRMS.",
    overview: [
      "A plant runs on rotating shifts, a large blue-collar workforce and biometric terminals at every gate. The HR problem is rarely the policy itself; it is turning thousands of punches into correct overtime, shift allowances and LOP before payroll closes.",
      "NeevHR ingests punches from biometric devices, applies each shift's grace, break and overtime rules, and closes the attendance day so payroll receives numbers it can use. PF, ESI, PT and LWF are then calculated per worker, per location.",
    ],
    challenges: [
      "Rotating and night shifts across plants and lines",
      "Biometric attendance for a large shop-floor workforce",
      "Overtime and shift allowances that must reach payroll accurately",
      "ESI coverage that changes as gross pay moves around ₹21,000",
      "PF, ESI, PT and LWF across multiple state locations",
    ],
    features: [
      "Shift management",
      "Roster management",
      "Biometric attendance",
      "Overtime",
      "Leave",
      "Payroll",
      "Worker records",
      "Multiple locations",
      "Employee documents",
      "Compliance",
      "Reports",
      "Employee self-service",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "Shift patterns, weekly rosters, coverage checks and weekly-off policies per plant." },
      { slug: "attendance", name: "Attendance", why: "Biometric punches over ADMS, overtime by day type and grade, and regularisation." },
      { slug: "payroll", name: "Payroll", why: "Overtime, shift pay, LOP, PF, ESI, PT and LWF in every monthly run." },
    ],
    faqs: [
      {
        q: "Can NeevHR take punches from our existing biometric machines?",
        a: "NeevHR accepts punches over the ADMS (iClock) push protocol used by many eSSL, ZKTeco and Matrix devices, and through punch file import. We confirm your device models during implementation.",
      },
      {
        q: "How is overtime calculated?",
        a: "Overtime rates are configured by day type (working day, weekly off, holiday), with grade multipliers and daily caps. Approved overtime is paid through payroll.",
      },
      {
        q: "Can we run different shift rules for different plants?",
        a: "Yes. Shifts, rosters, weekly-off policies and attendance rules are assigned to employee groups, so each plant or line can have its own rules.",
      },
    ],
  },
  {
    slug: "it-ites",
    name: "IT & ITES",
    h1: "HRMS Software for IT & ITES Companies",
    tagline: "Utilisation, hiring and reviews on one record.",
    intro:
      "IT and IT-enabled services companies need an HRMS that keeps up with hiring, tracks project time, and runs fair performance and compensation cycles for a salaried, tax-aware workforce. NeevHR covers these on one employee record.",
    overview: [
      "For services firms, people are the delivery capacity. HR has to hire quickly, onboard without friction, capture time against projects, and run review and increment cycles that employees trust.",
      "Salaried employees also care about tax. NeevHR handles old and new regime TDS with investment declarations and proofs, HRA and FBP, so the February and March TDS spike is not a surprise.",
    ],
    challenges: [
      "Accurate project time capture for utilisation reporting",
      "Fast hiring with structured interview feedback",
      "Performance and increment cycles across distributed teams",
      "Tax declarations, proofs and regime choice for salaried staff",
      "Self-service for a digital-first workforce",
    ],
    features: [
      "Timesheets and projects",
      "Recruitment and interview panels",
      "Onboarding",
      "Goals, reviews and 360 feedback",
      "Compensation cycles",
      "TDS with declarations and proofs",
      "Flexible benefits (FBP)",
      "Employee self-service",
    ],
    modules: [
      { slug: "timesheets", name: "Timesheets", why: "Weekly time against projects with submission locks and approvals." },
      { slug: "recruitment", name: "Recruitment", why: "Requisition to offer, with panels and feedback, then straight to onboarding." },
      { slug: "performance", name: "Performance", why: "Goals, 360 feedback and ratings that feed increment decisions." },
    ],
    faqs: [
      {
        q: "Does NeevHR support timesheets against projects?",
        a: "Yes. Employees log weekly time against projects, managers approve, and submitted periods can be locked. Reports show time by project and person.",
      },
      {
        q: "Does NeevHR handle old and new tax regime?",
        a: "Yes. TDS is projected under the employee's chosen regime, using declarations, proofs, HRA and previous-employer income where applicable.",
      },
      {
        q: "Does NeevHR publish jobs to job boards?",
        a: "Not today. Recruitment in NeevHR covers requisitions, candidate pipelines, interviews, referrals and offers inside the product. There is no public careers page or job-board integration yet.",
      },
    ],
  },
  {
    slug: "retail-qsr",
    name: "Retail & QSR",
    h1: "HRMS Software for Retail & QSR Chains",
    tagline: "Staff every store, every shift.",
    intro:
      "Retail and quick-service chains need an HRMS that rosters part-time and shift staff across many outlets, captures attendance at each store, and pays a high-turnover workforce correctly. NeevHR brings this together in one system.",
    overview: [
      "A retail chain is dozens of small workplaces with the same policies and different realities. Store managers need rosters that meet footfall, and HR needs attendance, joiners and leavers from every outlet before payroll.",
      "NeevHR keeps outlet rosters, attendance and payroll on one record, applies PT and LWF by each store's state, and handles the constant flow of onboarding and full and final settlements.",
    ],
    challenges: [
      "Multi-outlet rostering with part-time and shift staff",
      "High attrition, constant joiners and exits",
      "Attendance across dozens of outlets",
      "PT and LWF that differ by the store's state",
      "Quick full and final settlement for leavers",
    ],
    features: [
      "Shift and roster management",
      "Biometric attendance",
      "Multi-location PT and LWF",
      "Onboarding",
      "Exit and full & final settlement",
      "Payroll",
      "Employee self-service",
      "Mobile app (coming soon)",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "Coverage-aware weekly rosters for each outlet." },
      { slug: "attendance", name: "Attendance", why: "Biometric and web attendance with regularisation per store." },
      { slug: "exit", name: "Exit management", why: "Clearance and full and final settlement for a high-turnover workforce." },
    ],
    faqs: [
      {
        q: "Can each outlet have its own roster?",
        a: "Yes. Rosters are built per location or team with coverage checks, and shifts can be imported for the week.",
      },
      {
        q: "How does NeevHR handle PT for stores in different states?",
        a: "PT and LWF are calculated from each employee's work location using configurable state slab tables.",
      },
      {
        q: "Can store staff use a mobile app?",
        a: "The NeevHR mobile app is coming soon. Until then, employees use self-service on the web from any phone browser.",
      },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & hospitals",
    h1: "HRMS Software for Hospitals & Healthcare",
    tagline: "24x7 rosters and statutory accuracy for care teams.",
    intro:
      "Hospitals and healthcare providers need an HRMS that runs round-the-clock duty rosters, tracks attendance across departments, and keeps payroll and statutory contributions correct for large clinical and support teams. NeevHR does this in one platform.",
    overview: [
      "Care cannot pause for a rostering error. Nursing and duty rosters run 24x7 with night shifts, split shifts and minimum rest between duties, and every gap shows up on a ward.",
      "NeevHR plans rosters with coverage and cross-week rest checks, captures attendance by department, and carries shift allowances and overtime into payroll along with PF, ESI and PT.",
    ],
    challenges: [
      "Round-the-clock nursing and duty rosters",
      "Rest-hour and working-time rules between shifts",
      "Attendance across wards, departments and sites",
      "Shift allowances and overtime in payroll",
      "Credential and licence documents with expiry dates",
    ],
    features: [
      "24x7 shift and roster management",
      "Split and flexible shifts",
      "Overtime and shift allowances",
      "Department-wise attendance",
      "Employee documents with expiry tracking",
      "Payroll with PF, ESI and PT",
      "Employee self-service",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "24x7 rosters with coverage and rest-between-shifts checks." },
      { slug: "documents", name: "Documents", why: "Licences and certificates stored with expiry tracking." },
      { slug: "payroll", name: "Payroll", why: "Shift pay, overtime, PF, ESI and PT every cycle." },
    ],
    faqs: [
      {
        q: "Does NeevHR support night and split shifts?",
        a: "Yes. Shift patterns include night, split and flexible shifts, and rosters check coverage and rest between shifts.",
      },
      {
        q: "Can we track nursing licence expiry?",
        a: "Yes. Employee documents can carry expiry dates so HR can see what is due for renewal.",
      },
      {
        q: "Are shift allowances paid through payroll?",
        a: "Yes. Shift allowances and approved overtime flow into the monthly payroll run.",
      },
    ],
  },
  {
    slug: "bfsi",
    name: "Financial services (BFSI)",
    h1: "HRMS Software for Banks, NBFCs & Insurers",
    tagline: "Audit trail, access control and data protection.",
    intro:
      "Banks, NBFCs, insurers and brokers need an HRMS with a complete audit trail, fine-grained access control, strong data protection and incentive management for sales teams. NeevHR is built with these controls in the core.",
    overview: [
      "Financial services firms are audited on how they handle their own people data as well as their customers'. HR needs to show who changed what and when, and to keep salary and identity data visible only to those who need it.",
      "NeevHR records changes as effective-dated history with an audit log, controls access with roles, data scopes and field masking, enforces separation of duties on payroll and reimbursement, and supports DPDP Act 2023 processes.",
    ],
    challenges: [
      "An effective-dated audit trail for every change",
      "Fine-grained access control and separation of duties",
      "Protection of PAN, Aadhaar and bank details",
      "Incentive and variable-pay cycles for sales teams",
      "DPDP Act 2023 consent and data principal requests",
    ],
    features: [
      "Audit log and effective-dated history",
      "Role-based access with data scopes",
      "Field-level masking",
      "Field-level encryption of sensitive identifiers",
      "MFA enforceable for all users",
      "Variable pay and incentives",
      "DPDP consent and data principal requests",
      "Reports that drill to records",
    ],
    modules: [
      { slug: "variable-pay", name: "Variable pay", why: "Incentive plans, caps and approvals before anything reaches payroll." },
      { slug: "compliance", name: "Statutory compliance", why: "Returns, challans and Form 16 tracked against due dates." },
      { slug: "reports", name: "Reports & analytics", why: "Audit-ready reporting that drills from charts to records." },
    ],
    faqs: [
      {
        q: "Can we restrict who sees salary data?",
        a: "Yes. Role-based access with data scopes limits records by entity, department or team, and field-level masking can hide or mask salary and identity fields by role.",
      },
      {
        q: "Does NeevHR support MFA?",
        a: "Yes. Authenticator-app MFA is available for every user and can be made mandatory for the whole company.",
      },
      {
        q: "Does NeevHR hold SOC 2 or ISO 27001 certification?",
        a: "No, not currently. We walk your information security team through the controls in place during evaluation.",
      },
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & transport",
    h1: "HRMS Software for Logistics & Transport Companies",
    tagline: "Hubs, drivers and field staff on one payroll.",
    intro:
      "Logistics and transport companies need an HRMS that handles hub-based shifts, staff who are rarely at a desk, multi-state payroll and statutory compliance. NeevHR covers hubs today, with field tracking arriving with the mobile app.",
    overview: [
      "Warehouses and hubs run in shifts, while drivers and delivery staff spend the day on the road. HR needs attendance for both, and payroll that respects each state's PT and LWF.",
      "NeevHR runs hub rosters and biometric attendance, and pays a distributed workforce with state-wise statutory deductions. Field tracking with geofences and consent is built into the platform and becomes available with the NeevHR mobile app, which is coming soon.",
    ],
    challenges: [
      "Attendance for hub, warehouse and driver staff",
      "Shift rosters across hubs and sites",
      "PT and LWF across many states",
      "Overtime for peak-season operations",
      "Visibility of field staff during duty hours",
    ],
    features: [
      "Hub shift and roster management",
      "Biometric attendance",
      "Overtime",
      "Multi-state payroll",
      "Field tracking with geofences (with the mobile app, coming soon)",
      "Employee self-service",
    ],
    modules: [
      { slug: "attendance", name: "Attendance", why: "Biometric attendance and regularisation across hubs." },
      { slug: "field-tracking", name: "Field tracking", why: "Geofences, duty-hours location and alerts, with the mobile app (coming soon)." },
      { slug: "payroll", name: "Payroll", why: "State-wise PT and LWF with PF and ESI for a distributed workforce." },
    ],
    faqs: [
      {
        q: "Can NeevHR track drivers and field staff?",
        a: "Field tracking with geofences, duty-hours location and employee consent is built into NeevHR and runs from the mobile app, which is coming soon.",
      },
      {
        q: "Can we run payroll for employees in many states?",
        a: "Yes. PT and LWF follow each employee's work location using configurable state tables, alongside PF, ESI and TDS.",
      },
      {
        q: "Does NeevHR handle peak-season overtime?",
        a: "Yes. Overtime rules, caps and approvals are configurable, and approved overtime is paid through payroll.",
      },
    ],
  },
  {
    slug: "pharma",
    name: "Pharma & life sciences",
    h1: "HRMS Software for Pharma & Life Sciences Companies",
    tagline: "Plants, compliance and sales incentives in one place.",
    intro:
      "Pharma and life sciences companies combine shift-based manufacturing with large sales teams. They need an HRMS for plant rosters, training records, incentives and statutory compliance. NeevHR provides these on one employee record.",
    overview: [
      "A pharma business often runs regulated plants alongside a large medical-representative field force. Plant HR cares about shifts, training records and documentation; sales HR cares about targets and incentives.",
      "NeevHR runs plant rosters and attendance, keeps training completions in the learning module, manages target-linked incentives with approvals, and computes statutory payroll across plants and depots. Field-force tracking arrives with the NeevHR mobile app, which is coming soon.",
    ],
    challenges: [
      "Shift-based plant operations",
      "Training records and completions for plant staff",
      "Incentive schemes tied to sales targets",
      "Statutory compliance across plants and depots",
      "A large field force away from offices",
    ],
    features: [
      "Plant shift and roster management",
      "Learning with course completions",
      "Variable pay and incentives",
      "Payroll with PF, ESI, PT and LWF",
      "Employee documents",
      "Field tracking (with the mobile app, coming soon)",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "Plant rosters with coverage and rest checks." },
      { slug: "learning", name: "Learning", why: "Courses, quizzes and certificates with completion tracking." },
      { slug: "variable-pay", name: "Variable pay", why: "Target-linked incentives with caps and approvals." },
    ],
    faqs: [
      {
        q: "Can NeevHR hold training records for plant staff?",
        a: "Yes. The learning module records courses, quizzes, certificates and completions against each employee.",
      },
      {
        q: "Can we upload sales incentives each month?",
        a: "Yes. Incentives can be entered or uploaded by CSV, checked against plan caps and approved before they reach payroll.",
      },
      {
        q: "Is NeevHR validated for GxP?",
        a: "No. NeevHR is an HRMS and is not validated as a GxP system. Discuss your quality requirements with us during evaluation.",
      },
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    h1: "HRMS Software for Hotels & Hospitality",
    tagline: "Rosters and shift pay for hotels and resorts.",
    intro:
      "Hotels, resorts and hospitality groups need an HRMS that rosters every department across shifts and seasons, pays shift allowances and overtime correctly, and onboards seasonal staff quickly. NeevHR handles this in one platform.",
    overview: [
      "Front office, housekeeping, kitchens and banquets all run on shifts, and demand changes with the season. HR has to staff each department, onboard seasonal joiners fast, and keep service charge, allowances and overtime right in payroll.",
      "NeevHR plans department rosters with coverage checks, carries shift allowances and overtime into payroll, and moves new joiners through a guided onboarding journey.",
    ],
    challenges: [
      "Department-wise and seasonal shift rosters",
      "Shift allowances and overtime in payroll",
      "Fast onboarding for seasonal joiners",
      "Staff accommodation and asset issue",
      "Frontline employees without desks",
    ],
    features: [
      "Department shift and roster management",
      "Overtime and shift allowances",
      "Onboarding",
      "Asset issue and return",
      "Payroll",
      "Employee self-service",
      "Mobile app (coming soon)",
    ],
    modules: [
      { slug: "rostering", name: "Shifts & roster", why: "Department rosters with coverage checks." },
      { slug: "onboarding", name: "Onboarding", why: "Guided joining journeys for seasonal hires." },
      { slug: "assets", name: "Assets", why: "Uniforms, devices and keys issued and returned against the employee." },
    ],
    faqs: [
      {
        q: "Can we roster each hotel department separately?",
        a: "Yes. Rosters are built per department or team, with coverage checks and weekly-off policies.",
      },
      {
        q: "Can NeevHR track uniforms and devices issued to staff?",
        a: "Yes. Asset management records issue, custody and return, and outstanding items are recovered in full and final settlement.",
      },
      {
        q: "Is there a mobile app for frontline staff?",
        a: "The NeevHR mobile app is coming soon. Employees can use web self-service from a phone browser today.",
      },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional services",
    h1: "HRMS Software for Professional Services Firms",
    tagline: "Utilisation and delivery on one platform.",
    intro:
      "Consulting firms, agencies and professional practices need an HRMS that captures time against projects, supports performance tied to delivery, and lets a lean HR team configure policies without consultants. NeevHR is designed for that.",
    overview: [
      "Professional services firms sell their people's time and expertise. Utilisation, fair reviews and retention of senior talent matter more than headcount volume.",
      "NeevHR captures time against projects, runs goal and review cycles, and plans increments with budgets, while a small HR team configures leave, attendance and payroll policies itself.",
    ],
    challenges: [
      "Utilisation reporting from timesheets",
      "Project resourcing and budgets",
      "Performance tied to delivery outcomes",
      "Retaining and developing senior talent",
      "Lean HR teams that need configuration, not consultants",
    ],
    features: [
      "Timesheets and projects",
      "Goals, reviews and 360 feedback",
      "Compensation planning with budgets",
      "Succession and talent pools",
      "Learning",
      "Payroll",
    ],
    modules: [
      { slug: "timesheets", name: "Timesheets", why: "Time against projects with approvals and locks." },
      { slug: "projects", name: "Projects", why: "Projects, members and budgets for utilisation reporting." },
      { slug: "compensation", name: "Compensation", why: "Increment cycles with merit matrices and per-manager budgets." },
    ],
    faqs: [
      {
        q: "Does NeevHR create client invoices from timesheets?",
        a: "No. NeevHR captures and reports time against projects. Invoicing stays in your billing or accounting system.",
      },
      {
        q: "Can we run increment cycles with budgets?",
        a: "Yes. Compensation cycles use a merit matrix and per-manager budgets, and generate increment letters.",
      },
      {
        q: "Can a small HR team configure NeevHR?",
        a: "Yes. Policies are configured in settings and assigned to employee groups, without code.",
      },
    ],
  },
  {
    slug: "staffing-bpo",
    name: "Staffing & BPO",
    h1: "HRMS Software for Staffing Firms & BPOs",
    tagline: "High headcount, high velocity, under control.",
    intro:
      "Staffing firms and BPOs need an HRMS that handles volume hiring, fast onboarding, shift rosters, attendance and payroll for large, high-attrition workforces. NeevHR brings these processes together in one system.",
    overview: [
      "In a BPO or staffing business, the workforce turns over constantly. Every month brings batches of joiners, a steady flow of exits, and shift rosters that must match client service levels.",
      "NeevHR moves candidates from requisition to offer to onboarding without re-keying, rosters shifts with coverage checks, and closes exits with clearance and full and final settlement, all on one employee record.",
    ],
    challenges: [
      "Volume hiring and rapid onboarding",
      "Shift rosters and attendance for large teams",
      "High attrition with constant exits and F&F",
      "Night-shift allowances and overtime",
      "Bulk actions across large employee groups",
    ],
    features: [
      "Recruitment with referrals and talent pool",
      "Onboarding",
      "Shift and roster management",
      "Attendance and overtime",
      "Bulk employee actions",
      "Exit and full & final settlement",
      "Payroll",
    ],
    modules: [
      { slug: "recruitment", name: "Recruitment", why: "Pipelines, panels, referrals and offers, then handover to onboarding." },
      { slug: "rostering", name: "Shifts & roster", why: "Shift rosters and coverage for large teams." },
      { slug: "exit", name: "Exit management", why: "Clearance and full and final settlement for every leaver." },
    ],
    faqs: [
      {
        q: "Can we act on many employees at once?",
        a: "Yes. Bulk actions cover transfers, manager changes, shift assignment and mass separation for selected employees or groups.",
      },
      {
        q: "Does NeevHR support employee referrals?",
        a: "Yes. Referrals and a talent pool are part of recruitment.",
      },
      {
        q: "Can staffing firms run payroll for associates at client sites?",
        a: "NeevHR runs payroll for your own employees, with PT and LWF by work location. Discuss client-billing and associate-specific requirements with us during evaluation.",
      },
    ],
  },
];

export const industryBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
