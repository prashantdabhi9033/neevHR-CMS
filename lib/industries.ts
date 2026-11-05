// Industry landing pages (spec §13). Each industry has its own problems,
// relevant NeevHR capabilities and FAQs, so no two pages are the same page
// with the name swapped. Claims stay within verified product behaviour; the
// mobile app is built but not yet in the stores, and field tracking runs from it, so both say so.

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
  /** Statutory rules that matter most in this industry (audit WEB-019). Rows: rule, what it means for HR. */
  statutory?: {
    title: string;
    intro: string;
    rows: [string, string][];
    sections?: { title: string; body: string[] }[];
    example?: { title: string; lines: string[]; note: string };
    reading?: { label: string; href: string }[];
  };
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
    statutory: {
      title: "Factory compliance under the Labour Codes",
      intro: "Since 21 November 2025 factories are governed by the OSH Code, 2020 (which replaced the Factories Act, 1948 and the Contract Labour Act, 1970), the Code on Wages, 2019 and the Code on Social Security, 2020. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Factory definition", "20 or more workers with power, or 40 without (earlier 10 and 20)"],
        ["Working hours", "Not more than 8 hours a day; weekly limits and spread-over as your state notifies"],
        ["Overtime", "Twice the ordinary rate of wages, with the worker's consent, within a quarterly cap in state rules"],
        ["Annual leave", "One day for every 20 days worked, after 180 days of work in a calendar year"],
        ["Contract labour", "OSH Code provisions apply at 50 or more contract workers (earlier 20); the principal employer stays liable"],
        ["Women at night", "Permitted with consent and the safety conditions the government prescribes"],
        ["Minimum wages", "State rates by skill and area, revised with dearness allowance, never below the central floor wage"],
        ["Appointment letters and health checks", "An appointment letter for every worker, and a free annual health check-up at the age prescribed"],
      ],
      sections: [
        { title: "Contract labour and the principal employer", body: ["Most plants run on a mix of permanent and contract workers. Under the OSH Code a contractor supplying 50 or more contract workers needs a licence, and the principal employer must make sure wages are paid on time and that PF and ESI are deposited for contract workers; if the contractor defaults, the principal employer pays and recovers from the contractor.", "In practice that means keeping the contractor's registrations, monthly challans and wage registers on file and checking them before releasing the contractor's invoice. Our [contract labour checklist](/blog/contract-labour-compliance-principal-employer) covers each document."] },
        { title: "Overtime at twice the ordinary rate", body: ["For workers under the OSH Code, overtime is paid at twice the ordinary rate of wages and needs the worker's consent. The ordinary hourly rate is usually the month's wages divided by the working days and the daily hours your policy uses. States also notify a cap on total overtime in a quarter, so the roster has to watch cumulative hours, not only the day. Use the [overtime calculator](/tools/overtime-calculator) to check a figure."] },
        { title: "Night shifts for women", body: ["Women may work night shifts with their consent and the conditions the government prescribes, typically safe transport, security and adequate numbers on the shift. See [night shift rules for women employees](/blog/night-shift-women-employees)."] },
        { title: "Minimum wages by zone and skill", body: ["Minimum wages are set by the state, by skill level (unskilled, semi-skilled, skilled, highly skilled) and area, and most states revise the dearness allowance twice a year. A structure that is compliant in March can fall below the floor after an April or October revision. See [minimum wages in India](/blog/minimum-wages-in-india-explained) and the [state payroll guides](/india-payroll)."] },
      ],
      example: { title: "Worked example: one shop-floor worker's month (illustrative)", lines: ["Monthly wages ₹18,200, with 26 working days and an 8-hour day: daily rate ₹700, ordinary hourly rate ₹87.50", "Overtime: 10 approved hours at twice the rate, 10 × ₹175 = ₹1,750", "Gross for the month: ₹18,200 + ₹1,750 = ₹19,950, within the ₹21,000 ESI limit", "ESI employee share: 0.75% of ₹19,950 = ₹149.63, rounded up to ₹150; employer share 3.25% = ₹648.38, rounded up to ₹649", "PF: 12% of PF wages; overtime allowance is not part of wages for PF under the Code's definition"], note: "Figures are illustrative. The hourly divisor, rounding and the wage components that count for PF follow your policy and the Codes; confirm the overtime cap and minimum wage for your state." },
      reading: [
        { label: "Four Labour Codes summary", href: "/blog/four-labour-codes-summary" },
        { label: "Attendance and overtime rules", href: "/blog/attendance-and-overtime-rules-in-india" },
        { label: "Contract labour compliance", href: "/blog/contract-labour-compliance-principal-employer" },
        { label: "Standing orders under the IR Code", href: "/blog/standing-orders-industrial-relations-code" },
        { label: "Shift management and rostering", href: "/blog/shift-management-and-rostering" },
      ],
    },
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
        a: "Not to job boards. Recruitment in NeevHR covers requisitions, candidate pipelines, interviews, referrals and offers, and a company can switch on a public careers page and take applications from its own website.",
      },
    ],
    statutory: {
      title: "Rules that matter for IT and ITeS companies",
      intro: "IT offices are usually shops and commercial establishments under the state Act, and their people are mostly salaried professionals. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["State Shops and Establishments Act", "Working hours, weekly off, leave and night work for women; several states give IT and ITeS establishments conditional exemptions, so check yours"],
        ["PF at the ₹25,000 ceiling", "Freshers and junior staff earning up to ₹25,000 are now covered compulsorily from 17 September 2026"],
        ["Gratuity for fixed-term staff", "Payable after one year of service under the Code on Social Security, not five"],
        ["POSH", "An Internal Committee at every office with 10 or more employees, and an annual report"],
        ["DPDP Act, 2023", "Employee and candidate data handling, with the main duties applying from 13 May 2027"],
      ],
      reading: [
        { label: "Fixed-term employment under the Labour Codes", href: "/blog/fixed-term-employment-labour-codes" },
        { label: "POSH compliance", href: "/blog/posh-act-compliance-for-employers" },
        { label: "DPDP Act for HR teams", href: "/blog/dpdp-act-2023-for-hr-teams" },
      ],
    },
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
      "Mobile app for Android and iPhone",
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
        a: "The NeevHR mobile app for Android and iPhone is built and coming to the stores. Today, employees use self-service on the web from any phone browser.",
      },
    ],
    statutory: {
      title: "Rules that matter for retail and QSR chains",
      intro: "Stores and outlets fall under each state's Shops and Establishments Act, so a chain across states runs several rule sets at once. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Shops and Establishments Act per state", "Opening hours, weekly off, spread-over and leave differ by state"],
        ["Minimum wages", "State rates by skill and area apply to every store employee, including part-time staff in proportion to hours"],
        ["ESI", "Most store staff earn within the ₹21,000 limit, so ESI applies, with eligibility fixed for each contribution period"],
        ["PT and LWF", "Deducted by the store's state, at each state's rates and due dates"],
        ["Final wages", "Due within two working days of a resignation or exit under the Code on Wages, which matters in a high-turnover workforce"],
      ],
      reading: [
        { label: "ESI eligibility and contribution periods", href: "/blog/esi-eligibility" },
        { label: "Professional tax by state", href: "/blog/professional-tax-by-state-india" },
        { label: "Full and final settlement", href: "/blog/full-and-final-settlement-explained" },
      ],
    },
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
    statutory: {
      title: "Rules that matter for hospitals and healthcare",
      intro: "Hospitals run round the clock with large nursing and support teams, which brings working-hours, night-shift and ESI rules into every roster. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Working hours and overtime", "Daily and weekly limits and overtime at twice the rate under the OSH Code or the state Act, depending on how the establishment is covered"],
        ["Night shifts for women", "Permitted with consent and the prescribed safety conditions, which matter for nursing rosters"],
        ["ESI", "Many states have extended ESI to private medical institutions with 10 or more employees; check the notification for your district"],
        ["Maternity", "26 weeks for the first two children under the Code on Social Security, with a creche at 50 or more employees"],
        ["Minimum wages", "Support and housekeeping staff must be paid at least the state rate for their skill"],
      ],
      reading: [
        { label: "Maternity benefit for employers", href: "/blog/maternity-benefit-act-for-employers" },
        { label: "Night shift rules for women", href: "/blog/night-shift-women-employees" },
        { label: "Shift management and rostering", href: "/blog/shift-management-and-rostering" },
      ],
    },
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
      "NeevHR keeps a full change history with an audit log, controls access with roles, data scopes and field masking, enforces separation of duties on payroll and reimbursement, and supports DPDP Act 2023 processes.",
    ],
    challenges: [
      "An audit trail for every change, each saved with its date",
      "Access by role, and no one approves their own payroll or claim",
      "Protection of PAN, Aadhaar and bank details",
      "Incentive and variable-pay cycles for sales teams",
      "DPDP Act 2023 consent and data principal requests",
    ],
    features: [
      "Audit log and full change history",
      "Role-based access with data scopes",
      "Field-level masking",
      "Field-level encryption of sensitive identifiers",
      "MFA enforceable for all users",
      "Variable pay and incentives",
      "DPDP consent and data principal requests",
      "Reports that open the records behind each number",
    ],
    modules: [
      { slug: "variable-pay", name: "Variable pay", why: "Incentive plans, caps and approvals before anything reaches payroll." },
      { slug: "compliance", name: "Statutory compliance", why: "Returns, challans and Form 16 tracked against due dates." },
      { slug: "reports", name: "Reports & analytics", why: "Audit-ready reporting, from any chart to the records behind it." },
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
    statutory: {
      title: "Rules that matter for banks, NBFCs and insurers",
      intro: "Financial services combine large branch networks, incentive-heavy sales teams and strict data and audit expectations. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Appropriate government", "For banking and insurance companies the Central Government is usually the appropriate government under the Codes, so central rules apply"],
        ["Incentives and the wage definition", "Incentives sit outside wages, but excluded components above 50% of total remuneration are added back for PF, gratuity and bonus"],
        ["TDS on variable pay", "Incentives and bonuses change the year's projected tax; the employer deducts under section 392 of the Income-tax Act, 2025"],
        ["DPDP Act, 2023", "Employee data in a regulated business, with the main duties applying from 13 May 2027"],
      ],
      reading: [
        { label: "The 50% wage rule", href: "/blog/labour-codes-wage-definition-50-percent-rule" },
        { label: "Variable pay and incentive plans", href: "/blog/variable-pay-incentive-plan" },
        { label: "Salary TDS explained", href: "/blog/salary-tds-explained" },
      ],
    },
  },
  {
    slug: "logistics",
    name: "Logistics & transport",
    h1: "HRMS Software for Logistics & Transport Companies",
    tagline: "Hubs, drivers and field staff on one payroll.",
    intro:
      "Logistics and transport companies need an HRMS that handles hub-based shifts, staff who are rarely at a desk, multi-state payroll and statutory compliance. NeevHR covers hubs today. Field tracking is built and runs from the mobile app.",
    overview: [
      "Warehouses and hubs run in shifts, while drivers and delivery staff spend the day on the road. HR needs attendance for both, and payroll that respects each state's PT and LWF.",
      "NeevHR runs hub rosters and biometric attendance, and pays a distributed workforce with state-wise statutory deductions. Field tracking with geofences and consent is built into the platform and runs from the NeevHR mobile app.",
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
      "Field tracking with geofences (runs from the mobile app)",
      "Employee self-service",
    ],
    modules: [
      { slug: "attendance", name: "Attendance", why: "Biometric attendance and regularisation across hubs." },
      { slug: "field-tracking", name: "Field tracking", why: "Geofences, duty-hours location and alerts, from the mobile app." },
      { slug: "payroll", name: "Payroll", why: "State-wise PT and LWF with PF and ESI for a distributed workforce." },
    ],
    faqs: [
      {
        q: "Can NeevHR track drivers and field staff?",
        a: "Field tracking with geofences, duty-hours location and employee consent is built into NeevHR and runs from the mobile app.",
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
    statutory: {
      title: "Rules that matter for logistics and transport",
      intro: "Hubs, warehouses and drivers spread across states bring transport, contract labour and multi-state payroll rules together. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Motor transport workers", "Motor transport undertakings are covered by the OSH Code, with working hours, rest and records for drivers and crew"],
        ["Contract labour", "Warehouse and loading staff are often contract workers; OSH Code provisions apply at 50 or more and the principal employer stays liable"],
        ["Multi-state payroll", "PT and LWF follow each hub's state; minimum wages follow the state and skill"],
        ["ESI", "Most hub staff earn within the ₹21,000 limit, so ESI applies across many districts"],
      ],
      reading: [
        { label: "Contract labour compliance", href: "/blog/contract-labour-compliance-principal-employer" },
        { label: "Geo-fencing attendance for field staff", href: "/blog/geo-fencing-attendance-field-staff" },
        { label: "Labour welfare fund by state", href: "/blog/labour-welfare-fund-state-wise" },
      ],
    },
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
      "NeevHR runs plant rosters and attendance, keeps training completions in the learning module, manages target-linked incentives with approvals, and computes statutory payroll across plants and depots. Field-force tracking is built and runs from the NeevHR mobile app.",
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
      "Field tracking (runs from the mobile app)",
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
    statutory: {
      title: "Rules that matter for pharma and life sciences",
      intro: "Pharma combines factory compliance at the plant with a large field sales force on incentives. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Plants under the OSH Code", "Working hours, overtime at twice the rate, annual leave after 180 days and health check-ups"],
        ["Sales promotion employees", "Medical representatives are covered by the Labour Codes, which absorbed the Sales Promotion Employees Act, 1976"],
        ["Incentives", "Field incentives sit outside wages but count towards the 50% test for PF, gratuity and bonus"],
        ["Contract labour", "Packing and housekeeping contractors at 50 or more workers bring the principal employer duties"],
      ],
      reading: [
        { label: "Four Labour Codes summary", href: "/blog/four-labour-codes-summary" },
        { label: "Variable pay and incentive plans", href: "/blog/variable-pay-incentive-plan" },
        { label: "Contract labour compliance", href: "/blog/contract-labour-compliance-principal-employer" },
      ],
    },
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
      "Mobile app for Android and iPhone",
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
        a: "The NeevHR mobile app is built for Android and iPhone and coming to the stores. Employees can use web self-service from a phone browser today.",
      },
    ],
    statutory: {
      title: "Rules that matter for hotels and hospitality",
      intro: "Hotels run every department across shifts and seasons, with many employees near the ESI limit. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Shops and Establishments Act per state", "Hours, weekly off and spread-over for hotels and restaurants differ by state"],
        ["Overtime and night work", "Overtime at twice the rate, and women on night shifts with consent and safety conditions"],
        ["Minimum wages", "State rates for hotel and restaurant work by skill and area"],
        ["ESI", "Many staff earn within the ₹21,000 limit; eligibility is fixed for each six-month contribution period"],
        ["Seasonal and fixed-term staff", "Fixed-term staff get gratuity after one year and parity of wages with permanent staff"],
      ],
      reading: [
        { label: "Fixed-term employment under the Labour Codes", href: "/blog/fixed-term-employment-labour-codes" },
        { label: "ESI eligibility", href: "/blog/esi-eligibility" },
        { label: "Shift management and rostering", href: "/blog/shift-management-and-rostering" },
      ],
    },
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
    statutory: {
      title: "Rules that matter for professional services firms",
      intro: "Consulting firms and agencies are usually shops and establishments under the state Act, with salaried professionals and project-based contracts. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Shops and Establishments Act", "Working hours, leave and weekly off for the office's state"],
        ["Fixed-term contracts", "Recognised for all sectors, with parity of wages and gratuity after one year"],
        ["POSH", "An Internal Committee at every office with 10 or more employees"],
        ["DPDP Act, 2023", "Employee data, and often client data on employee devices, with the main duties from 13 May 2027"],
      ],
      reading: [
        { label: "Fixed-term employment under the Labour Codes", href: "/blog/fixed-term-employment-labour-codes" },
        { label: "POSH compliance", href: "/blog/posh-act-compliance-for-employers" },
        { label: "Timesheets", href: "/features/timesheets" },
      ],
    },
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
    statutory: {
      title: "Rules that matter for staffing firms and BPOs",
      intro: "Staffing firms are the contractor in most contract-labour arrangements, and BPOs run large shift operations, often at night. Labour is a concurrent subject, so the details below depend on the rules your state has notified; confirm them for each location.",
      rows: [
        ["Contractor licence", "A contractor supplying 50 or more contract workers needs a licence under the OSH Code, and a single licence can cover several states"],
        ["Deposits for deployed staff", "Wages, PF and ESI for deployed staff are the contractor's duty, and the principal employer checks them"],
        ["Night shifts", "Women on night shifts with consent and the prescribed safety conditions, including transport"],
        ["Final wages", "Due within two working days of an exit under the Code on Wages, at high attrition volumes"],
      ],
      reading: [
        { label: "Contract labour compliance", href: "/blog/contract-labour-compliance-principal-employer" },
        { label: "Night shift rules for women", href: "/blog/night-shift-women-employees" },
        { label: "Full and final settlement", href: "/blog/full-and-final-settlement-explained" },
      ],
    },
  },
];

export const industryBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
