import type { ComponentType } from "react";
import { PayrollVisual } from "@/components/product/PayrollVisual";
import { AttendanceVisual } from "@/components/product/AttendanceVisual";
import { LeaveVisual } from "@/components/product/LeaveVisual";
import { PerformanceVisual } from "@/components/product/PerformanceVisual";
import { RecruitmentVisual } from "@/components/product/RecruitmentVisual";
import { OnboardingVisual } from "@/components/product/OnboardingVisual";
import { RosteringVisual } from "@/components/product/RosteringVisual";
import { CompensationVisual } from "@/components/product/CompensationVisual";
import { SuccessionVisual } from "@/components/product/SuccessionVisual";
import { ComplianceVisual } from "@/components/product/ComplianceVisual";
import { EmployeesVisual } from "@/components/product/EmployeesVisual";
import { ExitVisual } from "@/components/product/ExitVisual";
import { FnfVisual } from "@/components/product/FnfVisual";
import { LoansVisual } from "@/components/product/LoansVisual";
import { FieldTrackingVisual } from "@/components/product/FieldTrackingVisual";
import { SurveysVisual } from "@/components/product/SurveysVisual";
import { ReportsVisual } from "@/components/product/ReportsVisual";
import { AiAssistantVisual } from "@/components/product/AiAssistantVisual";
import { OrgVisual } from "@/components/product/OrgVisual";
import { PositionsVisual } from "@/components/product/PositionsVisual";
import { PlanningVisual } from "@/components/product/PlanningVisual";
import { DocumentsVisual } from "@/components/product/DocumentsVisual";
import { HolidaysVisual } from "@/components/product/HolidaysVisual";
import { TimesheetsVisual } from "@/components/product/TimesheetsVisual";
import { ProjectsVisual } from "@/components/product/ProjectsVisual";
import { ExpensesVisual } from "@/components/product/ExpensesVisual";
import { VariablePayVisual } from "@/components/product/VariablePayVisual";
import { BenefitsVisual } from "@/components/product/BenefitsVisual";
import { LearningVisual } from "@/components/product/LearningVisual";
import { EngagementVisual } from "@/components/product/EngagementVisual";
import { HelpdeskVisual } from "@/components/product/HelpdeskVisual";
import { TravelVisual } from "@/components/product/TravelVisual";
import { AssetsVisual } from "@/components/product/AssetsVisual";
import { GoalCascadeVisual } from "@/components/product/GoalCascadeVisual";
import { DisciplinaryVisual } from "@/components/product/DisciplinaryVisual";
import { PoshVisual } from "@/components/product/PoshVisual";
import { ApprovalChannelsVisual } from "@/components/product/ApprovalChannelsVisual";
import { DevelopmentPlanVisual } from "@/components/product/DevelopmentPlanVisual";
import { Feedback360Visual } from "@/components/product/Feedback360Visual";

export type ModuleContent = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  capabilities: { title: string; body: string }[];
  configPoints: string[];
  reports: string[];
  related: string[];
  Visual: ComponentType;
  /** Flagship modules show their product scene full-width under the hero (big, readable); the rest
   *  use the split hero with the scene beside the copy. Keep this list short so big images stay special. */
  showcase?: "wide";
};

export const modules: Record<string, ModuleContent> = {
  // ---------------------------------------------------------------- Core HR
  employees: {
    slug: "employees",
    showcase: "wide",
    name: "Employee records",
    eyebrow: "Core HR",
    title: "A complete profile for each employee, with every change on record",
    intro:
      "A searchable directory backed by a full employee 360, job, pay, statutory, documents, assets and lifecycle, all on a single dated timeline you can report on as of any date.",
    capabilities: [
      { title: "Employee 360", body: "Overview, job & timeline, personal, statutory & bank, documents, leave, compensation, probation, performance, assets and income tax, in one profile." },
      { title: "Full change history", body: "Every promotion, transfer and pay change is saved with its date; nothing is ever overwritten." },
      { title: "Bulk actions", body: "Mass transfer, change manager, assign roles, set shift or employment type across selected employees or a whole group." },
      { title: "PII-safe import & export", body: "CSV import with validation and export with CTC redaction for users without the entitlement." },
      { title: "Digital ID cards", body: "An ID card for every employee, with a QR code, to view and print." },
      { title: "Probation", body: "Feedback, confirm or extend, and correct a decision." },
      { title: "ID card checks", body: "A public page shows only whether a card is active, with bulk A4 print, reissue and withdraw. Employees see My ID card in web self-service and in the mobile app." },
    ],
    configPoints: [
      "Custom fields on the employee record",
      "Employment types and grades",
      "Reporting lines and matrix managers",
      "Field-level visibility by role",
    ],
    reports: ["Headcount & attrition", "Pay & promotion progression", "Diversity & tenure"],
    related: ["org-chart", "onboarding", "exit"],
    Visual: EmployeesVisual,
  },
  onboarding: {
    slug: "onboarding",
    name: "Onboarding",
    eyebrow: "Core HR",
    title: "A smooth first day for every new joiner, with everything set up in advance",
    intro:
      "Turn an accepted offer into a ready employee. Collect documents, capture statutory and bank details, reserve assets and assign a buddy as a guided, trackable journey HR and the joiner share.",
    capabilities: [
      { title: "Guided joining journey", body: "A stage-by-stage journey owned by HR, IT, facilities and the hiring manager, with pre-join readiness tracking." },
      { title: "Dynamic intake forms", body: "Collect exactly the fields your policy needs; statutory, bank and personal details captured once and reused." },
      { title: "Assets & buddy", body: "Reserve and issue assets and assign a department buddy before the joiner arrives." },
      { title: "Policy acknowledgement", body: "Admin-authored policies the candidate reads and acknowledges, recorded for audit." },
    ],
    configPoints: ["Joining stages and checklist per role", "Intake form fields", "Asset categories and issue workflow", "Policies requiring acknowledgement"],
    reports: ["Onboarding status by joiner", "Pending documents & tasks", "Time-to-productive"],
    related: ["recruitment", "employees", "payroll"],
    Visual: OnboardingVisual,
  },
  "org-chart": {
    slug: "org-chart",
    name: "Org chart",
    eyebrow: "Core HR",
    title: "The living picture of how your company is organised",
    intro:
      "An interactive reporting structure with span-of-control insights, dotted-line reporting, open seats from the workforce plan and point-in-time reconstruction as of any date.",
    capabilities: [
      { title: "Tree & focused views", body: "Explore the whole tree or focus on one person and their chain, across all legal entities." },
      { title: "As-of-date reconstruction", body: "Rebuild the org exactly as it stood on any past date from reporting-line history." },
      { title: "Drag to reassign", body: "Reassign managers by drag, or bulk re-parent, and import reporting lines from CSV." },
      { title: "Open seats", body: "Open seats per department from the workforce plan appear alongside the tree." },
      { title: "Group and entity admins", body: "Admins confined to their own entities, with a read-only view across all entities for the group." },
      { title: "Future structure", body: "Model a future structure with moves and checks, preview the chart, send it for review and publish it. Moves take effect on their date as dated changes, and can be reversed until then." },
    ],
    configPoints: ["Legal entities and business units", "Dotted-line reporting", "Consolidated vs entity view", "Export as CSV, SVG or PNG"],
    reports: ["Span of control & layers", "Manager to IC ratio", "Headcount by unit"],
    related: ["employees", "positions", "planning"],
    Visual: OrgVisual,
  },
  positions: {
    slug: "positions",
    name: "Positions",
    eyebrow: "Core HR",
    title: "Manage approved seats, not just the people in them",
    intro:
      "The establishment view, positions as budgeted seats distinct from the people who fill them, tracking vacancy, incumbency, FTE and budget by seat.",
    capabilities: [
      { title: "Seat lifecycle", body: "Open, filled, on notice, frozen and closed, each with the right actions." },
      { title: "Incumbency & FTE", body: "See who fills each seat, at what FTE, and which seats sit vacant." },
      { title: "Budget by seat", body: "Attach a budgeted CTC per year to each position and control headcount cost." },
      { title: "Freeze & reopen", body: "Put a seat on budget hold and reopen it when the freeze lifts." },
    ],
    configPoints: ["Positions per department and grade", "Budgeted CTC per seat", "Freeze and closure rules", "Link to workforce plan"],
    reports: ["Vacancy & open seats", "Budgeted vs actual cost", "On-notice positions"],
    related: ["planning", "org-chart", "recruitment"],
    Visual: PositionsVisual,
  },
  planning: {
    slug: "planning",
    name: "Workforce planning",
    eyebrow: "Core HR",
    title: "Plan headcount and budget for the year ahead",
    intro:
      "An annual, financial-year headcount and hiring plan with cost-centre budgets. Open positions from the plan flow straight into the org chart and recruitment.",
    capabilities: [
      { title: "Headcount plan", body: "Approved headcount and budget per department, with open and over-plan flags." },
      { title: "Hiring plan", body: "Planned hires against requisitions actually raised, so you always see what is left to hire." },
      { title: "Cost-centre budgets", body: "Budget envelopes per cost centre with committed-cost tracking." },
      { title: "Roll forward", body: "Copy last year's plan and adjust, with an effective-dated change history per cell." },
      { title: "Drafts and scenarios", body: "Work on drafts of a year's headcount plan and compare them. The live plan does not change until a draft is approved." },
      { title: "Submit and approve", body: "A draft goes for approval, can be sent back, and becomes the one live plan, with earlier versions kept." },
      { title: "Monthly phasing and grade", body: "Phase a plan by month and by grade, to see what should be in place by when." },
    ],
    configPoints: ["Financial-year plan periods", "Department and cost-centre structure", "Budget envelopes", "Over-plan override permission"],
    reports: ["Plan vs actual headcount", "Open vs over plan", "Recruitment budget burn"],
    related: ["positions", "org-chart", "recruitment"],
    Visual: PlanningVisual,
  },
  exit: {
    slug: "exit",
    name: "Exit management",
    eyebrow: "Core HR",
    title: "Offboarding that is clean, compliant and complete",
    intro:
      "Resignation to clearance to full and final settlement, with notice periods, multi-stage approvals, department clearances, asset return and statutory F&F.",
    capabilities: [
      { title: "Clearance tracker", body: "Sequential or parallel department clearances with owners, asset return and reopen." },
      { title: "F&F settlement", body: "Earnings and recoveries worked out with gratuity, leave encashment and TDS, net in words." },
      { title: "Knowledge handover", body: "Early release, handover and replacement-manager team inheritance." },
      { title: "Statutory exits", body: "Gratuity forfeiture on misconduct, relieving and experience letters, rehire eligibility." },
      { title: "Retirement", body: "See who is retiring next and start the process in time." },
      { title: "Absconding", body: "A guided process with show-cause notices. HR drives each step; nothing happens by itself." },
      { title: "Layoff and mass separation", body: "Separate many people together, with severance handled by its tax type." },
      { title: "Retention and exit interviews", body: "Record retention talks, exit interviews and exit surveys." },
      { title: "Relieving letters your way", body: "Edit relieving, experience and service letter wording, and email an issued letter with an audit entry. A misconduct or absconding exit keeps a factual certificate. No third-party e-sign." },
    ],
    configPoints: ["Notice periods by grade", "Clearance departments and owners", "Severance and F&F rules", "Letter templates"],
    reports: ["Attrition & reasons", "F&F settlement register", "Clearance ageing"],
    related: ["employees", "payroll", "compliance"],
    Visual: ExitVisual,
  },
  "full-and-final-settlement": {
    slug: "full-and-final-settlement",
    name: "Full & final settlement",
    eyebrow: "Core HR",
    title: "Full and final settlement, computed and paid through payroll",
    intro:
      "An F&F worksheet that works out final salary, leave encashment, gratuity, pro-rata bonus and reimbursements, less notice, loan and asset recoveries and final-month statutory deductions, then posts to a full and final payroll run.",
    capabilities: [
      { title: "Earnings", body: "Salary to the last working day, leave encashment per leave type, gratuity with the ₹20 lakh ceiling, pro-rata statutory bonus, severance and unpaid approved expenses." },
      { title: "Recoveries", body: "Notice shortfall (waived or leave-adjusted lines shown at nil), loans and advances, unreturned assets at book value, excess salary and final-month LOP." },
      { title: "Statutory in the same step", body: "TDS on the settlement plus final-month PF, ESI, PT and LWF, with gratuity and leave-encashment exemptions calculated." },
      { title: "Controls", body: "Settlement is blocked while assets are still assigned, and the person who gave final sign-off cannot also settle." },
    ],
    configPoints: ["Leave encashment base and day divisor", "Gratuity, encashment and bonus on or off per entity", "Notice recovery policy by exit type", "F&F due days after the last working day"],
    reports: ["F&F settlement register", "Pending settlements", "Gratuity forfeiture approvals"],
    related: ["exit", "loans", "assets"],
    Visual: FnfVisual,
  },
  documents: {
    slug: "documents",
    name: "Documents",
    eyebrow: "Core HR",
    title: "The employee document vault, with letters and policies",
    intro:
      "A searchable vault plus letter templating and a policy library, with expiry tracking, verification and tamper-proofing built in.",
    capabilities: [
      { title: "Document vault", body: "KYC, contracts, letters, payslips, certificates and Form 16, categorised and searchable." },
      { title: "Letter generation", body: "Server-side mail-merge of employee data into offer, confirmation, increment and relieving letters." },
      { title: "Expiry & verification", body: "Track document expiry, verify authenticity and prove a letter has not been altered since issue." },
      { title: "Policy library", body: "Publish policies employees read and acknowledge." },
      { title: "AI letter template draft", body: "When switched on, wording for a letter template with merge fields, on a click. It uses no employee data. Issued letter PDFs cannot print Hindi yet, and disciplinary and POSH letters have no AI." },
      { title: "Policies read on the page", body: "Upload a policy as a PDF or Word file, and people read that same file on the page, with nothing converted. An old .doc is download only." },
    ],
    configPoints: ["Document categories and expiry lead-days", "Letter templates and merge tokens", "Verification rules", "Retention class per category"],
    reports: ["Expiring documents", "Letters issued", "Acknowledgement status"],
    related: ["employees", "onboarding", "compliance"],
    Visual: DocumentsVisual,
  },

  // ---------------------------------------------------------- Time & attendance
  attendance: {
    slug: "attendance",
    showcase: "wide",
    name: "Attendance",
    eyebrow: "Time & attendance",
    title: "From biometric punches to a clean, payroll-ready day",
    intro:
      "Capture attendance from biometric devices and the web, apply your shift and grace rules, and close each day into numbers payroll can trust, with regularisation and approvals where they belong.",
    capabilities: [
      { title: "Biometric device ingestion", body: "Punches arrive over the ADMS push protocol, with device last-seen status, deduplicated and mapped to the right employee and shift." },
      { title: "Configurable day-close", body: "Grace windows, half-day and short-day rules turn raw punches into present, absent, late and overtime." },
      { title: "Regularisation & approvals", body: "Employees raise regularisation for missed punches; managers approve in one inbox." },
      { title: "Pay at risk", body: "Unjustified exceptions surface as loss-of-pay before payroll runs." },
      { title: "Geofenced and web check-in", body: "Employees punch from the web or the mobile app, inside the geofence you set, with an office network allowlist for web punches. You choose which punch sources are allowed." },
      { title: "QR code attendance", body: "Employees scan a QR code at the site with the NeevHR mobile app, from a kiosk tablet whose code changes every 30 seconds or a printed poster in English and Hindi, with a geofence per point." },
      { title: "Device management", body: "Send employees to devices, remove leavers, set card numbers and location scope, compare each device's user list with NeevHR, and get an offline alert. Fingerprint and face templates stay on the device." },
      { title: "Bulk correction", body: "Correct attendance for many people, up to 31 days at a time." },
      { title: "Late-coming reports", body: "Late and habitual-late reports, with LOP where your policy says so." },
      { title: "Not punched today", body: "See who has not punched and send reminders, plus who has no shift and a no-punch list for leadership." },
      { title: "Statutory registers", body: "Attendance registers from your records. Form 25 and Form 12 use a common format, not a state-wise one." },
    ],
    configPoints: ["Shifts, grace windows and week-off policies", "Day-close rules per group", "Regularisation limits", "Overtime and shift allowances"],
    reports: ["Daily & monthly register", "Late, early-out & overtime", "Device health", "Muster roll"],
    related: ["rostering", "leave", "payroll"],
    Visual: AttendanceVisual,
  },
  rostering: {
    slug: "rostering",
    name: "Shifts & roster",
    eyebrow: "Time & attendance",
    title: "Build, staff and publish the weekly roster with confidence",
    intro:
      "Plan the weekly shift roster per location and department, keep coverage staffed, and enforce working-time compliance, rest hours, consecutive days and weekly caps, before you publish.",
    capabilities: [
      { title: "Weekly roster grid", body: "Assign shifts across employees and days with rotation patterns and bulk assignment." },
      { title: "Coverage & compliance", body: "See assigned versus required coverage, and publish only when rest and hours rules pass." },
      { title: "Rotation patterns", body: "Reusable Mon-Sun sequences applied to a crew in one click." },
      { title: "Shift change requests", body: "Employees request swaps; approvals block self-approval." },
      { title: "Auto-balance and fairness", body: "Balance a roster, see how fairly shifts fall, and edit your working-time rules." },
    ],
    configPoints: ["Shift types, colours and allowances", "Weekly-off policies and alternating rules", "Rotation patterns", "Working-time compliance rules"],
    reports: ["Coverage heatmap", "Fairness (night/weekend)", "Overtime by shift"],
    related: ["attendance", "leave", "payroll"],
    Visual: RosteringVisual,
  },
  leave: {
    slug: "leave",
    showcase: "wide",
    name: "Leave",
    eyebrow: "Time & attendance",
    title: "Leave policies configured once, applied everywhere",
    intro:
      "Model every leave type your company runs, with accrual, proration, carry-forward and encashment as rules, not spreadsheets. Employees see live balances; managers approve in a click.",
    capabilities: [
      { title: "Any leave type", body: "Privilege, casual, sick, maternity, paternity, comp-off and your own custom types." },
      { title: "Accrual & proration", body: "Monthly or annual accrual, proration for joiners and leavers, carry-forward caps and encashment." },
      { title: "Live balances & ledger", body: "Employees see balances; every accrual, hold, consume and lapse is in the ledger." },
      { title: "Sandwich & statutory rules", body: "Prefix/suffix rules and state statutory carry-forward floors are enforced." },
      { title: "Blackouts and staffing caps", body: "Block dates, cap how many can be away, and auto-approve within rules you set." },
      { title: "AI draft from a policy PDF", body: "When switched on, upload your leave policy and it fills a draft policy from what the document says. It does not say what the law requires, and nothing is saved until you save." },
    ],
    configPoints: ["Leave types, accrual and carry-forward", "Proration for mid-cycle joiners", "Approval chain per type", "Location-wise holidays"],
    reports: ["Leave balance & liability", "Leave trends by team", "Encashment & lapse"],
    related: ["attendance", "holidays", "payroll"],
    Visual: LeaveVisual,
  },
  holidays: {
    slug: "holidays",
    name: "Holiday calendar",
    eyebrow: "Time & attendance",
    title: "One location-aware holiday master for the whole company",
    intro:
      "The single holiday calendar attendance and leave both read from. Office and state-specific days layer over the national list, with schemes mapped to the right employees.",
    capabilities: [
      { title: "Location-aware calendar", body: "National plus office and state-specific holidays, by year and location." },
      { title: "Public, optional & restricted", body: "Model public, optional and restricted holidays the Indian way." },
      { title: "Holiday schemes", body: "Named holiday sets mapped to departments, locations or employees." },
      { title: "Import & export", body: "Atomic import with dry-run preview and round-trippable CSV export." },
      { title: "State templates", body: "Start from a state template, review a draft, then publish. Your company sets the festival dates." },
    ],
    configPoints: ["Holidays by location and year", "Holiday types", "Schemes and their mappings", "Financial-year alignment"],
    reports: ["Holiday list by location", "Scheme coverage", "Working-day calendar"],
    related: ["leave", "attendance"],
    Visual: HolidaysVisual,
  },
  "field-tracking": {
    slug: "field-tracking",
    name: "Field tracking",
    eyebrow: "Time & attendance",
    title: "GPS attendance and geofences for your field workforce",
    intro:
      "Location during duty hours, geofence boundaries, tracking policies and alerts for field staff, with consent handling and time-in-boundary reporting. Tracking runs from the NeevHR mobile app.",
    capabilities: [
      { title: "Live team map", body: "See every field worker on a map, coloured by inside, outside or stale location." },
      { title: "Geofences", body: "Draw polygon or circular boundaries and assign them to workers." },
      { title: "Consent-first", body: "Tracking is enabled only with recorded employee consent." },
      { title: "Alerts & trails", body: "Out-of-boundary, over-stay and no-signal alerts, plus a replayable day trail." },
    ],
    configPoints: ["Boundaries per site", "Sampling and dwell policies", "Consent capture", "Alert thresholds"],
    reports: ["Time in boundary", "Distance & routes", "Alert history"],
    related: ["attendance", "mobile"],
    Visual: FieldTrackingVisual,
  },
  timesheets: {
    slug: "timesheets",
    name: "Timesheets",
    eyebrow: "Time & attendance",
    title: "Weekly time capture against projects, approved and billable",
    intro:
      "Weekly time capture against assigned projects, with approval chains, submission locks and billable-utilisation analytics. Timesheets are kept separate from payroll.",
    capabilities: [
      { title: "Weekly time grid", body: "Employees log hours per project per day; submitted days lock." },
      { title: "Approvals", body: "Managers approve or send back, in an org-routed inbox with no self-approval." },
      { title: "Billable utilisation", body: "See billable versus non-billable share and hours by project." },
      { title: "Reminders & locks", body: "Overdue reminders, a grace period and a lock window after which late submissions are refused." },
    ],
    configPoints: ["Off, optional or mandatory mode", "Cadence, due day and lock window", "Minimum and maximum hours per day", "Approval chain"],
    reports: ["Utilisation %", "Billable vs non-billable", "Hours by project"],
    related: ["projects", "attendance"],
    Visual: TimesheetsVisual,
  },
  projects: {
    slug: "projects",
    name: "Projects",
    eyebrow: "Time & attendance",
    title: "The project master your timesheets book time against",
    intro:
      "Projects with clients, bill and cost rates, budgets and members. Membership controls who can book time, and the billable flag drives utilisation reporting.",
    capabilities: [
      { title: "Project master", body: "Code, client, billable flag, bill and cost rates, budget in hours and rupees." },
      { title: "Members", body: "Assign employees who can book time to each project." },
      { title: "Budgets", body: "Track budget in both hours and rupees with status." },
      { title: "Lifecycle", body: "Active, on hold and closed, archived rather than deleted." },
      { title: "My projects for employees", body: "Employees see their projects, team, booked hours and hours budget, linked with the timesheet. Money shows only to those allowed to see project figures." },
    ],
    configPoints: ["Clients and internal projects", "Bill and cost rates", "Budgets", "Members"],
    reports: ["Hours by project", "Billable vs non-billable", "Utilisation by project"],
    related: ["timesheets"],
    Visual: ProjectsVisual,
  },

  // -------------------------------------------------------------- Payroll & pay
  payroll: {
    slug: "payroll",
    showcase: "wide",
    name: "Payroll",
    eyebrow: "Payroll & pay",
    title: "Payroll that is statutory-accurate, on time, every cycle",
    intro:
      "Run monthly payroll with PF, ESI, PT, LWF and TDS in the core. Configure pay structures once, and let LOP, arrears, loans and reimbursements flow in automatically, with an audit trail behind every change.",
    capabilities: [
      { title: "Governed run", body: "Compute, verify, approve and publish, with separation of duties and a post-compute exception report of anomaly and statutory checks." },
      { title: "India statutory built in", body: "PF at the ₹25,000 wage ceiling, ESI to ₹21,000 gross, state PT, LWF and TDS, with ECR, challan and Form 16 outputs." },
      { title: "LOP, arrears & loans", body: "Loss of pay reduces the statutory base correctly; arrears recompute; loan EMIs appear only when active." },
      { title: "Bank-ready disbursement", body: "NEFT and RTGS files and a GL journal, with a payroll register and per-component YTD." },
      { title: "Daily-wage and hourly workers", body: "Pay by the day or hour from attendance, with weekly and fortnightly runs and the register of wages." },
      { title: "Tally Prime and Zoho Books", body: "Map pay heads to your ledgers once, preview, then download Tally Prime vouchers or Zoho Books journals from published payroll. Unmapped heads are blocked, a repeat export is flagged, and history is kept." },
      { title: "Trial run", body: "Run payroll as a trial before the real one." },
      { title: "Hold, off-cycle and supplementary", body: "Hold a salary, pay it off-cycle, or run a supplementary payment." },
      { title: "Why this amount", body: "Employees see how a payslip figure was reached." },
      { title: "Allowance lookup tables", body: "Pay an allowance or deduction by salary band, or by grade and city." },
      { title: "NPS, VPF and PF choice", body: "NPS and VPF, Form F nomination, and PF basis choice where your company allows it." },
      { title: "AI change explanation", body: "When switched on, plain words for the checks that fired on a computed run, and what to check first. It never changes, holds or releases a run." },
      { title: "Bank response import", body: "Map your bank's response file once, preview, then record UTRs and failed transfers. A second person can undo an import." },
      { title: "Failed payments and re-pay", body: "Failed transfers go to one list, and the person returns to the next bank file for the exact net." },
      { title: "Unusual pay flags", body: "Two more checks on the exception report: pay unusual for this person, or for the role. They flag only, and never block or change pay." },
    ],
    configPoints: ["Pay structures & components per group", "PF contribution basis election", "State-wise PT and LWF slabs", "Pay frequency and period lock"],
    reports: ["Payroll register & salary sheet", "ECR, ESI and PT challans", "Form 24Q and Form 16", "Exception & anomaly report"],
    related: ["attendance", "compliance", "loans"],
    Visual: PayrollVisual,
  },
  compliance: {
    slug: "compliance",
    showcase: "wide",
    name: "Statutory compliance",
    eyebrow: "Payroll & pay",
    title: "Every PF, ESI, PT, LWF and TDS due date in one calendar",
    intro:
      "Track every PF, ESI, PT, LWF and TDS obligation with a due-date calendar, drive returns from draft to filed, and generate Form 16 and Form 12BA for the completed financial year.",
    capabilities: [
      { title: "Obligation register", body: "Every filing with its due date, amount, statute and status, with late-charge estimates." },
      { title: "Returns workflow", body: "Create, prepare and file 24Q, PF ECR, ESI, PT and LWF returns with real portal references." },
      { title: "Form 16 & 12BA", body: "Generate and distribute Form 16 with quarter-wise deposit reconciliation, and Form 12BA perquisites." },
      { title: "Filing calendar", body: "A month calendar of what is due, filed, pending and overdue." },
      { title: "Rate changes on the right date", body: "When a statutory rate or limit changes, NeevHR applies it from its start date. Months already paid keep their old rates." },
      { title: "PF correction of a filed month", body: "Correct PF for a month already filed: arrears, a record of excess refunds, EPS to EPF transfers and bulk recompute, with a second person's approval and a supplementary ECR." },
      { title: "Manual PT and LWF", body: "Record PT and LWF liabilities outside payroll, with period, status, challan tracking and a second person's approval." },
      { title: "Statutory library updates", body: "PT, LWF and minimum wage updates apply only after a person reviews and saves them." },
      { title: "Minimum wage", body: "Tables by state and skill that you keep, with breaches flagged on the run." },
      { title: "Attendance registers", body: "Statutory registers from your records. Form 25 and Form 12 use a common format, not a state-wise one." },
      { title: "State starter pack", body: "When you add a first location in a state, NeevHR offers that state's PT, LWF, minimum wage and Shops and Establishments rows where it holds them, each with its official source and as-of date. HR reviews and accepts. A row with no confirmed source is left empty." },
      { title: "Overtime register", body: "A Nil entry for a period with no overtime, and a quarterly view against the limit you set." },
    ],
    configPoints: ["Statutory identities (PAN, TAN, PF, ESI)", "Filing calendar and lead-days", "Return preparers", "Reference formats"],
    reports: ["Filing calendar", "Returns status", "Form 16 register"],
    related: ["payroll", "exit"],
    Visual: ComplianceVisual,
  },
  expenses: {
    slug: "expenses",
    name: "Expenses",
    eyebrow: "Payroll & pay",
    title: "Expense claims and reimbursement, customised to your company policy",
    intro:
      "Expense and travel claims checked against your company's own policy, with receipts, policy checks, partial sanction and reimbursement through payroll or settled separately, with separation of duties between the approver and the payer.",
    capabilities: [
      { title: "Claims & receipts", body: "Employees submit claims with receipts; approvers sanction, return or reject." },
      { title: "Policy checks", body: "Per-category caps, submission windows and pre-approval, with a recorded override for breaches." },
      { title: "Separation of duties", body: "Approve and reimburse are separate permissions; the payer is never the approver." },
      { title: "Advances", body: "Issue and settle cash advances, netting against claims or recovering via payroll." },
      { title: "Travel advance", body: "Advances with a trip limit, adjusted on claim approval, with statement, ageing, bulk pay and recovery in F&F." },
      { title: "Mileage and per diem", body: "Mileage rates, per diem by grade and location, and GST on bills." },
      { title: "Spend analytics", body: "Spend by category, month and department, top claimants, policy breaks and approval speed." },
      { title: "AI receipt reading", body: "When switched on, the amount, date, vendor and category are read from an uploaded bill, with a warning if it may already be claimed. The person checks it before submitting." },
      { title: "Unusual claim flags", body: "The person deciding sees a flag when a claim is far from the person's own history or peers, comes unusually often, or is split on one day. Flags never block, and the claimant does not see them." },
    ],
    configPoints: ["Categories and per-day caps", "Per-diem grade × location matrix", "Submission window and receipt threshold", "Advance ceilings"],
    reports: ["Spend by category", "Pending & reimbursed", "Advances outstanding"],
    related: ["payroll", "travel", "loans"],
    Visual: ExpensesVisual,
  },
  loans: {
    slug: "loans",
    name: "Loans & advances",
    eyebrow: "Payroll & pay",
    title: "Staff loans recovered automatically through payroll",
    intro:
      "Issue salary-advance, personal and emergency loans with EMI schedules, recover instalments through monthly payroll, and collect or write off balances after an employee exits.",
    capabilities: [
      { title: "EMI schedules", body: "Flat or reducing-balance interest with a full amortization schedule and live preview." },
      { title: "Payroll recovery", body: "EMIs are recovered automatically in each monthly payroll run." },
      { title: "Policy caps", body: "Principal, tenure and rate caps, with approvals parked above a threshold." },
      { title: "Post-exit residuals", body: "Record external repayments or write off balances with second-approver controls." },
    ],
    configPoints: ["Loan types and policy caps", "Interest method", "Approval thresholds", "Write-off separation of duties"],
    reports: ["Outstanding by type", "EMI recovery schedule", "Write-offs"],
    related: ["payroll", "expenses"],
    Visual: LoansVisual,
  },
  "variable-pay": {
    slug: "variable-pay",
    name: "Variable pay",
    eyebrow: "Payroll & pay",
    title: "Incentives, recoveries and statutory bonus, done right",
    intro:
      "Ad-hoc pay additions and deductions with ring-fence limits and an approval chain, plus statutory annual bonus disbursement at 8.33% to 20% with the statutory registers.",
    capabilities: [
      { title: "Variable inputs", body: "Assign incentives, commissions, recoveries and fines, single or in bulk, with min/max ring-fencing." },
      { title: "Approval chain", body: "Every input is approved before it reaches payroll." },
      { title: "Statutory bonus", body: "Configure a bonus plan at 8.33% to 20% and disburse to eligible employees." },
      { title: "Bonus registers", body: "Forms A, B, C and D and the allocable-surplus computation." },
    ],
    configPoints: ["Components and frequency", "Ring-fence limits", "Bonus rate and eligibility", "Approval chain"],
    reports: ["Variable pay register", "Bonus disbursement", "Forms A to D"],
    related: ["payroll", "compensation"],
    Visual: VariablePayVisual,
  },
  benefits: {
    slug: "benefits",
    name: "Benefits (FBP)",
    eyebrow: "Payroll & pay",
    title: "Group insurance and flexible benefits, administered in one place",
    intro:
      "Group-insurance and flexible-benefit administration, a plan catalog across insurance, medical and wellness, an enrolment register, endorsement approvals, and the FBP declaration-to-proof workflow.",
    capabilities: [
      { title: "Plan catalog", body: "GMC, GPA and GTL plus OPD, health check-up and wellness, with contribution splits and dependent rules." },
      { title: "Enrolment register", body: "One row per employee per plan, single or bulk enrolment with eligibility checks." },
      { title: "Endorsements", body: "Dependent additions and corrections raised as endorsements, approved in NeevHR and queued for your insurer." },
      { title: "FBP workflow", body: "Declare, submit proof and verify to reduce taxable income from the next payroll run." },
    ],
    configPoints: ["Plans, insurers and premiums", "Eligibility and auto-enrol", "Dependent rules", "FBP components and tax treatment"],
    reports: ["Lives covered", "Enrolment %", "FBP utilisation"],
    related: ["payroll", "compliance"],
    Visual: BenefitsVisual,
  },

  // ------------------------------------------------------------------- Talent
  recruitment: {
    slug: "recruitment",
    showcase: "wide",
    name: "Recruitment",
    eyebrow: "Talent",
    title: "From requisition to a signed offer, then straight to onboarding",
    intro:
      "Raise requisitions, run interview panels, and release offers with the approved compensation, then hand the new hire to onboarding without re-keying a thing.",
    capabilities: [
      { title: "Requisitions & approvals", body: "Managers raise requisitions for their departments; a validation gate opens the role when it is ready." },
      { title: "Pipeline & panels", body: "Board or table pipeline, interview rounds and panels, and structured feedback." },
      { title: "Offers with a trail", body: "Offers show the approved compensation, carry a validity date and keep full history." },
      { title: "Hire to onboard", body: "An accepted offer flows into onboarding automatically." },
      { title: "Careers website applications", body: "An openings feed and application form for your own website, or an API key with WordPress field mapping. Duplicates are checked, every application is logged, and your web team gets a developer guide." },
      { title: "Resume parsing", body: "Upload a resume and NeevHR suggests each field with its confidence and source line, plus a skills match score, for you to accept. Rule based, with no AI or outside service." },
      { title: "Internal job posting", body: "Post an opening to employees with eligibility rules, a manager rule (informed or must approve), confidential applications and group-wide reach, on web and mobile. Selection raises a job change or transfer on the same record." },
      { title: "Agencies and vendors", body: "Keep your list of agencies and partners, and see candidates by agency." },
      { title: "Bulk resume import", body: "Import up to 50 resumes at once. Old .doc files are not read." },
      { title: "JD match score", body: "A word match between the resume and the job description, not AI." },
      { title: "Cost per hire", body: "Record hiring costs and see the cost per hire." },
      { title: "Interview kits", body: "Question kits, scorecards and My Interviews for panel members." },
      { title: "Add a resume in one step", body: "Drop a resume: name, mobile and email fill in by themselves, and anything missing is flagged for you to type. Pick one or more positions, or keep it in the Resume bank." },
      { title: "Resume bank", body: "Everyone not selected, rejected, withdrawn or saved, in one searchable list. Add anyone to a position, one at a time or in bulk." },
      { title: "Change stage from the pipeline", body: "A board or a list across all positions, with a stage dropdown on each candidate. Interview, feedback and offer rules still apply." },
      { title: "Referrals", body: "Track referrals with their reward." },
      { title: "Background verification", body: "Track each check. There is no connection to a verification vendor." },
      { title: "AI resume match", body: "When switched on, a score and reasons on the candidate page: what the resume shows against the opening and what it does not. A suggestion: it never rejects or moves a candidate." },
      { title: "Next step on the candidate page", body: "A banner says what to do next, from the candidate's status, with tabs for overview, interviews, offer and onboarding, BGV and activity." },
      { title: "Bulk shortlist and reject", body: "Select many on an opening's board or table. Reject takes one reason for all, and anyone who could not be moved is named and stays selected." },
      { title: "Matches from the Resume bank", body: "An open position lists the best matches from your Resume bank by required skills, to add in a click. Nothing is rejected by itself." },
    ],
    configPoints: ["Requisition approval chain", "Candidate sources and stages", "Interview rounds and panels", "Default offer validity"],
    reports: ["Funnel & conversion", "Time-to-fill & acceptance", "Source effectiveness"],
    related: ["onboarding", "planning", "performance"],
    Visual: RecruitmentVisual,
  },
  performance: {
    slug: "performance",
    showcase: "wide",
    name: "Performance",
    eyebrow: "Talent",
    title: "Goals, reviews, 360-degree feedback and increments in one cycle",
    intro:
      "Set weighted goals, run appraisal cycles with 360 feedback and a 9-box talent view, and turn ratings into increment and bonus decisions, with the right sign-off authority at every step.",
    capabilities: [
      { title: "Weighted goals", body: "Goals carry weights that sum to the plan; weighted achievement rolls up automatically." },
      { title: "360 & 9-box", body: "Question sets and competencies with anonymity on every cut, and calibration on a 9-box grid. See the 360 feedback page." },
      { title: "Rating distribution", body: "See how ratings spread across the A+ to C scale as a bell curve, to support calibration discussions at sign-off." },
      { title: "Increment & bonus", body: "Ratings map to increment and bonus matrices, with final sign-off repricing the number." },
      { title: "1:1 meetings", body: "Recurring 1:1s with a shared agenda that carries over, private notes, action items, a mood check-in, reminders and calendar invites, plus a coverage report for HR." },
      { title: "Improvement plans", body: "Run a performance improvement plan, with a register for HR." },
      { title: "Promotion recommendations", body: "Managers recommend, and HR reviews the list." },
      { title: "OKR and goal cascade", body: "Company and team objectives with key results, each person's goal linked under them, and progress that rolls up. See the goal cascade page." },
      { title: "AI drafts", body: "When switched on, feedback drafts on a goal, goal ideas and a 1:1 summary, on a click. They go into the normal box to edit, and AI gives no score or rating." },
      { title: "Goal check-ins", body: "Update a goal any time in the cycle, with a note. Every change is kept with who and when, and managers and HR see goals at risk, behind or with no recent check-in. A check-in never changes appraisal figures." },
      { title: "Development plans", body: "A plan for each person, started from a released appraisal, with focus areas, actions and manager approval. See the development plans page." },
    ],
    configPoints: ["Review cadence and stages", "Goal templates and weightings", "Rating scale and HiPo rule", "Increment matrices per department"],
    reports: ["Rating distribution & calibration", "9-box talent grid", "Multi-year performance history"],
    related: ["compensation", "succession", "recruitment"],
    Visual: PerformanceVisual,
  },
  compensation: {
    slug: "compensation",
    name: "Compensation",
    eyebrow: "Talent",
    title: "Merit increments with budget guardrails and pay equity",
    intro:
      "A merit-increment planning cycle with budget guardrails, a merit matrix, compa-ratio pay equity, multi-stage approval and bulk increment-letter generation.",
    capabilities: [
      { title: "Merit matrix", body: "Suggested increments by rating and compa band, so under-paid high performers get the most." },
      { title: "Budget guardrails", body: "A live budget burn-down with per-manager envelopes and out-of-policy flags." },
      { title: "Compa-ratio equity", body: "See where each employee sits against their grade midpoint before deciding." },
      { title: "Increment letters", body: "Approve the cycle and generate increment letters into the document vault." },
      { title: "ESOP and RSU tracking", body: "Record grants, vesting tranches and exercises, for HR and for the employee to read. It tracks them and flags an exercise for payroll to review. Perquisite tax and TDS are not computed." },
      { title: "Your wording on letters", body: "Edit the wording of increment and promotion letters from the Documents templates, keeping the letterhead and signatory. Issued letters never change." },
      { title: "Cycle templates", body: "Save a cycle's rules as a template and start the next one from it. A template keeps rules, never people or money." },
    ],
    configPoints: ["Cycle, effective date and budget pool", "Eligibility rules", "Merit matrix", "Approval stages"],
    reports: ["Increment cost model", "Spend by rating", "Out-of-policy cases"],
    related: ["performance", "payroll", "variable-pay"],
    Visual: CompensationVisual,
  },
  learning: {
    slug: "learning",
    name: "Learning",
    eyebrow: "Talent",
    title: "Training and compliance completion you can prove",
    intro:
      "A course catalog, mandatory compliance training with department completion tracking, quizzes and certificates, skills earned from courses and an annual training plan.",
    capabilities: [
      { title: "Course catalog", body: "E-learning and classroom courses, mandatory or elective, with a course builder and player." },
      { title: "Compliance tracking", body: "POSH, DPDP and code-of-conduct completion tracked by department." },
      { title: "Quizzes & certificates", body: "Pass marks on quizzes and a PDF certificate with optional expiry, which HR can verify in NeevHR." },
      { title: "Training plan", body: "An annual, per-department training plan with budgets." },
      { title: "AI learning suggestions", body: "When switched on, courses from your own catalogue for each person, from their role and skills. Nothing enrols anyone." },
      { title: "Classroom sessions and rooms", body: "Schedule sessions in your own rooms with a clash check, in a list or a calendar. Employees register or cancel before the start." },
      { title: "Attendance that completes a course", body: "Mark present or absent on the roster. Present completes the course, grants its skills and can lead to the certificate." },
      { title: "Career paths", body: "A path of steps with the skills, courses and months each needs, and a readiness figure for the person and their manager." },
      { title: "Your own categories", body: "Course categories and formats come from a list you control." },
    ],
    configPoints: ["Courses and mandatory flags", "Audiences and due dates", "Pass marks and certificate expiry", "Planned training budgets"],
    reports: ["Compliance completion by department", "Hours per employee", "Active learners"],
    related: ["performance", "onboarding"],
    Visual: LearningVisual,
  },
  succession: {
    slug: "succession",
    name: "Succession",
    eyebrow: "Talent",
    title: "Know who is ready for your critical roles",
    intro:
      "Succession planning with critical roles, ranked benches and readiness, a leadership skill-gap heatmap, HiPo identification and a committee talent-calibration workflow.",
    capabilities: [
      { title: "Critical roles & benches", body: "Track loss risk, ranked successors and readiness for every critical role." },
      { title: "Skill-gap heatmap", body: "Score pipeline members against leadership competencies to see gaps at a glance." },
      { title: "HiPo & 9-box", body: "Identify high-potentials on the same calibrated 9-box as performance." },
      { title: "Talent calibration", body: "Committee sessions that move people between boxes with rationale and sign-off." },
    ],
    configPoints: ["Critical-role criteria", "Competency catalog", "Readiness definitions", "HiPo rule"],
    reports: ["Bench depth & readiness", "Skill-gap heatmap", "High-risk incumbents"],
    related: ["performance", "planning"],
    Visual: SuccessionVisual,
  },

  // -------------------------------------------------------- Employee experience
  engagement: {
    slug: "engagement",
    name: "Engagement",
    eyebrow: "Employee experience",
    title: "Recognition, pulse and the culture hub",
    intro:
      "Announcements, celebrations, pulse surveys and peer recognition in one place, with eNPS and engagement scores you can act on.",
    capabilities: [
      { title: "Recognition (kudos)", body: "Peer-to-peer kudos with badges and a chosen audience, from the recipient only to the whole company." },
      { title: "Announcements", body: "Targeted announcements with read receipts." },
      { title: "Celebrations", body: "Birthdays and work anniversaries surfaced automatically." },
      { title: "Pulse & eNPS", body: "Pulse participation and eNPS trends over survey waves." },
    ],
    configPoints: ["Kudos badge labels", "Announcement audiences and expiry", "Kudos visibility", "Survey anonymity threshold"],
    reports: ["eNPS trend", "Pulse by dimension", "Recognition activity"],
    related: ["surveys", "mobile"],
    Visual: EngagementVisual,
  },
  surveys: {
    slug: "surveys",
    name: "Surveys",
    eyebrow: "Employee experience",
    title: "Listen to employees, with an anonymity threshold",
    intro:
      "Design and run eNPS, rating, Likert, choice and text surveys, with results for small groups suppressed below an anonymity threshold.",
    capabilities: [
      { title: "Survey builder", body: "eNPS, rating, agreement, choice and open-text questions with department targeting." },
      { title: "Anonymity threshold", body: "Results below a respondent floor are suppressed to protect identity." },
      { title: "eNPS analytics", body: "Promoter, passive and detractor breakdown with a distribution bar." },
      { title: "Segment analysis", body: "By-question and by-department analytics with suppression." },
      { title: "AI survey summary", body: "When switched on, the themes in a closed survey's open-text answers and actions to consider, with no names and no quotes." },
      { title: "Key drivers", body: "See which questions move with eNPS, on the whole survey with at least 30 paired answers. Worded as a link, never a cause." },
      { title: "Low scores to actions", body: "Low scores are marked, and each can become an action with an owner, a due date and reminders." },
      { title: "Compare with the last wave", body: "Change by question and department against an earlier survey. Your own waves only: there is no external benchmark, and small groups stay hidden in both waves." },
      { title: "Review at the next wave", body: "An action's outcome comes from the score moving between the two surveys, not from a tick." },
      { title: "Publish what you did", body: "Optionally show employees the actions taken, per survey, with no scores or owner names. Off by default." },
      { title: "Team result for managers", body: "One combined figure for a manager's line on closed surveys, above a respondent floor, with no breakdown." },
    ],
    configPoints: ["Question types", "Department targeting", "Anonymity floor", "Survey window"],
    reports: ["eNPS distribution", "Score by dimension", "By-department segments"],
    related: ["engagement", "mobile"],
    Visual: SurveysVisual,
  },
  helpdesk: {
    slug: "helpdesk",
    name: "HR helpdesk",
    eyebrow: "Employee experience",
    title: "Employee tickets, resolved within SLA",
    intro:
      "An internal HR and IT ticketing queue with SLA tracking, escalation tiers and threaded resolution, so nothing falls through the cracks.",
    capabilities: [
      { title: "Ticket queue", body: "Categorised tickets with priority, assignee and status." },
      { title: "SLA engine", body: "Live countdowns, first-response and resolution SLAs with breach flags." },
      { title: "Escalation", body: "Overdue tickets escalate automatically up a configured L1, L2, L3 ladder." },
      { title: "Threaded resolution", body: "A conversation thread per ticket with reassignment." },
      { title: "Attachments and internal notes", body: "Attach files and keep notes the employee does not see." },
      { title: "Confidential categories", body: "Limit who can open sensitive tickets." },
      { title: "Satisfaction rating", body: "Ask for a rating when a ticket closes, once a supervisor enables it, with an alert on a low rating and a satisfaction report." },
      { title: "Room and vehicle booking", body: "Employees book rooms and vehicles from self-service." },
      { title: "AI category and reply draft", body: "When switched on, a suggested category and, when an agent asks, a reply draft from your knowledge base. Nothing is sent until the agent presses Send reply." },
    ],
    configPoints: ["Categories and priorities", "SLA targets", "Escalation tiers", "Canned responses and knowledge base"],
    reports: ["Open & breaching SLA", "Resolution time", "Volume by category"],
    related: ["mobile", "assets"],
    Visual: HelpdeskVisual,
  },
  travel: {
    slug: "travel",
    name: "Travel booking",
    eyebrow: "Employee experience",
    title: "Business travel within entitlement, reconciled to expenses",
    intro:
      "Grade-based business-travel requests with entitlement caps, approval, booking and expense reconciliation, so travel spend stays on policy.",
    capabilities: [
      { title: "Entitlement caps", body: "A live grade × type × distance entitlement matrix on the request form." },
      { title: "Approval & booking", body: "Requests move from pending to approved to booked, with over-cap reasons." },
      { title: "Expense reconciliation", body: "Estimate versus claimed versus sanctioned, with a linked expense claim." },
      { title: "One trail", body: "Travel and its expenses stay linked end to end." },
    ],
    configPoints: ["Travel types and bands", "Grade entitlement caps", "Approval chain", "Expense link"],
    reports: ["Travel spend", "Estimate vs actual", "Pending to book"],
    related: ["expenses", "mobile"],
    Visual: TravelVisual,
  },
  assets: {
    slug: "assets",
    name: "Assets",
    eyebrow: "Employee experience",
    title: "Track every company asset from issue to return",
    intro:
      "IT and company-asset lifecycle from registration to assignment, repair and retirement, with warranty, depreciation and custody tracking.",
    capabilities: [
      { title: "Asset lifecycle", body: "Assigned, in stock, reserved, in repair, damaged, lost and retired, with safe state changes." },
      { title: "Custody & history", body: "A full custody timeline per asset: issue, reassign, repair and return." },
      { title: "Warranty & depreciation", body: "Warranty windows and straight-line book value per category." },
      { title: "Onboarding link", body: "Reserve an asset for a joiner and issue it on day one." },
      { title: "Asset QR labels", body: "Print QR labels for your assets. Scanning one opens the asset for someone with access." },
      { title: "Stock-take", body: "Verify assets against the register." },
      { title: "Damage recovery", body: "Recover the cost of damage from the employee." },
      { title: "Perquisite valuation", body: "A worksheet for the perquisite value of assets." },
    ],
    configPoints: ["Asset types and categories", "Depreciation rates", "Warranty windows", "Issue and return workflow"],
    reports: ["Assets by status", "Warranty expiring", "Book value"],
    related: ["onboarding", "helpdesk"],
    Visual: AssetsVisual,
  },

  // ------------------------------------------------------------------ Insights
  reports: {
    slug: "reports",
    showcase: "wide",
    name: "Reports & analytics",
    eyebrow: "Insights",
    title: "Every list a report, every report a chart",
    intro:
      "A report catalog across modules plus a self-serve builder. Pick a dataset, group and aggregate, visualise it, and click any chart to open the records behind it.",
    capabilities: [
      { title: "Report catalog", body: "Ready reports grouped by module, permission-filtered and searchable." },
      { title: "Custom builder", body: "Choose columns, filters, group-by and aggregate, then chart it live." },
      { title: "Drill-down", body: "Click a bar or slice to open the exact records behind it." },
      { title: "Export", body: "CSV, Excel and PDF, including password-protected PDF." },
      { title: "Role-based dashboards", body: "Each role sees its own dashboard, with attrition risk for Company Admins unless they grant it to others." },
      { title: "Saved and shared views", body: "Save a report view and share it with your team." },
      { title: "AI report from a sentence", body: "When switched on, type what you want and AI picks the report or sets up a custom one. The data is read under your own access, and nothing is saved by itself." },
      { title: "AI attrition reasons", body: "When switched on, plain words each month on department exit figures. It explains past trends, is not a prediction and says nothing about any person." },
      { title: "Dashboards by role", body: "Leadership, HR Ops, Payroll, Hiring and My team views open by role, with no setup. Pin the cards you use and keep your own default. Each view shows only what your access allows." },
      { title: "Joined data in the builder", body: "Add employee fields to leave, pay lines, expenses, exits, travel and loans, along set relationships. Masking and access follow every joined column." },
      { title: "Payroll month and calculated columns", body: "Pick a payroll month, and add up to five calculated columns." },
      { title: "Scheduled builder views", body: "Send a view on a schedule to people who can open that data. Each report runs under the recipient's own access." },
      { title: "Big Excel downloads", body: "Builder Excel files stream as they are made. PDF goes up to 10,000 rows." },
    ],
    configPoints: ["Datasets and columns", "Saved views", "Chart type", "Export formats"],
    reports: ["Headcount & cost dashboards", "Multi-year performance", "Any module, any dimension"],
    related: ["employees", "payroll", "performance"],
    Visual: ReportsVisual,
  },
  "ai-assistant": {
    slug: "ai-assistant",
    name: "AI assistant",
    eyebrow: "Insights",
    title: "Fully AI enabled: inside each module, and in a chat",
    intro:
      "Ask in plain words, and get answers from your own HR data. AI reads a resume against an opening, explains a payroll flag, reads a receipt or a tax proof and drafts a helpdesk reply, on the screen where the work happens. The assistant answers from your company's data within each person's role. Every result is a suggestion, and a person decides.",
    capabilities: [
      { title: "AI inside each module", body: "Resume match, payroll change explanation, receipt and tax proof reading, helpdesk drafts, report from a sentence, review and letter drafts, survey summary, attrition reasons, learning suggestions and setup from Excel or PDF. See them below." },
      { title: "Answers for every employee", body: "Leave balance, attendance, shift, holidays, expense claims, tickets, courses, and their own payslip summary, CTC, loans, goals and released rating." },
      { title: "Why is this blocked?", body: "Why payroll cannot be released and who must approve it, who a request is waiting on, why someone cannot see a record, and whether an approver has been set." },
      { title: "Drafts you confirm", body: "It prepares a leave request, a regularization or a helpdesk ticket as a review card. Managers review leave decisions by name. Nothing happens until the person confirms." },
      { title: "Help and policies", body: "How-to and policy answers from the Help Centre and your company's documents, with the article cited. When it is unsure it says so and points to HR." },
      { title: "English, Hindi and Gujarati", body: "It replies in the language the person writes in." },
      { title: "Read only where it matters", body: "In Payroll, Compensation, Variable pay, Benefits, Loans, Recruitment and Performance it only reads. It cannot run payroll, change a salary, make an offer or change a rating." },
    ],
    configPoints: ["AI on each module's screens: a switch per module", "Which modules the assistant works with, per company", "Which employees may use it", "Which roles may use it", "Which roles may draft actions"],
    reports: ["Credit balance", "Questions and credits by person, with date and module filters", "Export of usage"],
    related: ["recruitment", "payroll", "expenses", "helpdesk", "reports"],
    Visual: AiAssistantVisual,
  },
  "process-studio": {
    slug: "process-studio",
    name: "Process Studio",
    eyebrow: "Platform",
    title: "Design your own HR flows, without code",
    intro:
      "Start from one of 32 templates or build a simple flow of your own, with notices, time limits, rules and letters. Test it first, check it is ready, then publish it for your people.",
    capabilities: [
      { title: "Template gallery", body: "32 ready flows to start from and change to fit." },
      { title: "Simple flow designer", body: "Steps, approvers and branches, set up by your HR admin." },
      { title: "Notices and time limits", body: "Notifications and date reminders, with a reminder and then escalation when a time limit passes." },
      { title: "Rules and letters", body: "Act on conditions you set, and issue letters from a flow." },
      { title: "Test run", body: "See which way a request would go, and why, before anyone uses it." },
      { title: "My apps", body: "Published flows appear for employees in self-service." },
    ],
    configPoints: ["Steps and approvers", "Conditions", "Time limits", "Who may start a flow"],
    reports: ["Readiness check before publish", "Test-run explanation of each branch"],
    related: ["onboarding", "employees", "reports"],
    Visual: OnboardingVisual,
  },
  "alumni-portal": {
    slug: "alumni-portal",
    name: "Alumni portal",
    eyebrow: "Core HR",
    title: "Ex-employees get their documents without calling HR",
    intro:
      "After someone leaves, they sign in with a personal email and download their own payslips, Form 16 and full and final statement, so HR stops getting these requests.",
    capabilities: [
      { title: "Their own documents", body: "Payslips, Form 16 and the full and final statement." },
      { title: "Separate sign-in", body: "A personal email, because the work login has ended." },
      { title: "Set per entity", body: "On by default for each legal entity, and your HR can change it." },
    ],
    configPoints: ["On or off per entity", "How a contact is verified", "Which documents they see, and when"],
    reports: ["Documents available to each former employee"],
    related: ["exit", "full-and-final-settlement", "documents"],
    Visual: ExitVisual,
  },
  "manager-self-service": {
    slug: "manager-self-service",
    name: "Manager self-service",
    eyebrow: "Employee experience",
    title: "One place for a manager to run their team",
    intro:
      "My Team shows who is out and what is coming up, and one Inbox holds everything waiting for the manager, from leave to expenses. They can act for a team member, hand over when away, and approve from email if your company allows it.",
    capabilities: [
      { title: "My Team", body: "Who is out today, the leave planner and the team hierarchy." },
      { title: "One Inbox", body: "Every approval in one list, with how long each has waited." },
      { title: "Act on behalf", body: "A manager can raise a leave or regularization for a team member." },
      { title: "Delegation and out of office", body: "Hand approvals to someone else while away." },
      { title: "Approve from email", body: "Approve or reject from the request email, with a confirm page, once a Company Admin switches it on. Pay, F&F, offers and bank changes always need sign-in." },
      { title: "Approve from Slack, Teams or WhatsApp", body: "Each app is connected per company, with its own setup guide. The same rule as email decides which requests can be approved there." },
      { title: "1:1 meetings", body: "Recurring meetings with each team member, with a shared agenda that carries over, private notes, action items and calendar invites." },
    ],
    configPoints: ["What managers may approve", "Email approvals on or off", "Slack, Teams and WhatsApp connections", "Delegation rules"],
    reports: ["Pending by approver", "Approvals past their time limit"],
    related: ["approval-channels", "leave", "attendance", "performance"],
    Visual: LeaveVisual,
  },
  "income-tax": {
    slug: "income-tax",
    name: "Income tax",
    eyebrow: "Payroll & pay",
    title: "Declarations, proofs and TDS, without the chasing",
    intro:
      "Employees declare and upload proofs under the old or new regime. HR tracks who is done, sends reminders, reviews proofs and sees each person's tax ledger, and payroll projects TDS from it.",
    capabilities: [
      { title: "Declarations and proofs", body: "Old or new regime, within the window you set." },
      { title: "Tracker and reminders", body: "See who has not submitted, and remind them." },
      { title: "Proof review", body: "Accept or send back each proof, with the reason." },
      { title: "Tax ledger", body: "How each person's TDS was worked out through the year." },
      { title: "Editable tax rules", body: "Your admin can update the rules a new notification changes." },
      { title: "AI proof reading", body: "When switched on, the section, amount, year and issuer are read from an uploaded proof and set against the declaration. Proofs on the 80D, 80DD, 80DDB and 80U lines are not sent. It never approves a proof." },
    ],
    configPoints: ["Declaration and proof windows", "Tax rules", "Previous-employer income"],
    reports: ["Submission tracker", "Tax ledger"],
    related: ["payroll", "compliance", "benefits"],
    Visual: ComplianceVisual,
  },
  "development-plans": {
    slug: "development-plans",
    name: "Development plans",
    eyebrow: "Talent",
    title: "A development plan for each person, linked to the work behind it",
    intro:
      "An individual development plan with focus areas, actions, due dates, check-ins and manager approval. Start it from a released appraisal, a 360 round or a closed PIP, and let a finished course complete its action by itself.",
    capabilities: [
      { title: "Plan, focus and actions", body: "Focus areas from your skills or in your own words. Actions can be a course, a project, a mentor, a certification or on the job, each with a due date and progress." },
      { title: "Manager approval", body: "The employee or manager drafts, the manager approves or sends it back, and each step stays in the plan's history. Nobody approves their own plan." },
      { title: "Started from the record", body: "Start from a released appraisal, a 360 round, a Talent Review or a Succession entry. A closed PIP can lead to a plan, and the two stay separate records." },
      { title: "Learning linked", body: "A course action enrols the person on approval, and finishing the course completes the action." },
      { title: "Skill gaps as focus areas", body: "Skill gaps and low 360 competencies appear as suggested focus areas, for the manager or HR to pick." },
      { title: "Discussed in 1:1", body: "Open actions show in the 1:1, and an action item can link to one." },
      { title: "Right people, right view", body: "A mentor sees only their action. An employee never sees a talent or succession source. A private note stays with its author, HR included." },
      { title: "AI draft", body: "When switched on, a draft plan on a click, for a person to edit. It decides nothing." },
    ],
    configPoints: ["Manager approval on or off", "Suggest a plan on a low rating, off by default"],
    reports: ["Development plans register", "Plans by status and department", "Export and chart"],
    related: ["performance", "360-feedback", "learning"],
    Visual: DevelopmentPlanVisual,
  },
  "360-feedback": {
    slug: "360-feedback",
    name: "360 feedback",
    eyebrow: "Talent",
    title: "360 feedback by competency, with anonymity on every cut",
    intro:
      "Run 360 feedback inside an appraisal or as its own round. A ready question set works from the first day, reviewers answer by competency, and the server holds back figures below the anonymity threshold you set.",
    capabilities: [
      { title: "Question sets and competencies", body: "A standard set is ready on first use. Add your own questions, each a rating or text, tied to a competency from your Skill catalogue." },
      { title: "Standalone rounds", body: "Run a round outside an appraisal for one person or many, with a closing date and reminders." },
      { title: "Employee proposes, manager approves", body: "A person can propose reviewers, and the manager or HR decides who is invited." },
      { title: "Anonymity on every cut", body: "Averages, competencies and comments stay hidden until the threshold is met, for groups as well, so a hidden figure cannot be worked out by subtraction. Managers and HR see who answered, not what they said." },
      { title: "Your scale", body: "A scale of 3 to 10 points. Older answers keep the scale they were given on, and results are converted to the current one." },
      { title: "Result stays with HR by default", body: "The person does not see their own result unless the company chooses to show the combined result after release." },
      { title: "Linked to growth", body: "Competency results show on the appraisal, and low ones appear as focus areas for a development plan." },
      { title: "In the app", body: "Reviewers give feedback from My 360 reviews in the mobile app, and can propose reviewers there." },
    ],
    configPoints: ["Question sets", "Rating scale", "Anonymity threshold", "Show the result to the person after release"],
    reports: ["Results by competency", "Results by person"],
    related: ["performance", "development-plans", "succession"],
    Visual: Feedback360Visual,
  },
  "goal-cascade": {
    slug: "goal-cascade",
    name: "OKR and goal cascade",
    eyebrow: "Talent",
    title: "Link company, team and personal goals on one tree",
    intro:
      "Set company objectives, add team objectives under them, and link each person's goal to the objective it supports. Key results measure the work, and progress rolls up the tree for each review cycle.",
    capabilities: [
      { title: "Company and team objectives", body: "Objectives belong to a review cycle. A team objective names its department and an owner, who can update it." },
      { title: "Key results", body: "A start, a target and a unit. A target below the start also works, for example attrition from 20 down to 12." },
      { title: "Goals linked to objectives", body: "Choose the objective when you add or bulk assign a goal. Linking a goal given earlier does not change it, so the employee is not asked to accept it again." },
      { title: "Progress that rolls up", body: "An objective's progress is the plain average of its key results, team objectives and linked goals. A goal the employee has not accepted does not count, and Not started is not the same as 0%." },
      { title: "Goals not linked", body: "A card shows the goals that support no objective, so HR can link them." },
      { title: "Privacy by person", body: "Everyone with Performance view sees the objectives. A person's goal shows only to that person, their team and HR, and the row says how many are not shown." },
      { title: "Check-ins with history", body: "A person, their manager or HR records progress with a note, and each change stays in the goal's history." },
    ],
    configPoints: ["Objectives per review cycle", "Department and owner per team objective", "Key result unit, start and target"],
    reports: ["Company objectives and progress", "Goals linked and goals not linked", "Progress by objective"],
    related: ["performance", "compensation", "learning"],
    Visual: GoalCascadeVisual,
  },
  disciplinary: {
    slug: "disciplinary",
    name: "Disciplinary cases",
    eyebrow: "Core HR",
    title: "Every disciplinary case on record, from notice to outcome",
    intro:
      "Open a case, issue a show-cause notice or charge sheet, take the reply, run the inquiry and close with an outcome, with each step on the case's timeline and the employee able to read and answer their own notices.",
    capabilities: [
      { title: "Case register", body: "Cases by stage, category and severity, with counts for open, reply overdue, in inquiry, suspended and closed." },
      { title: "Notices and letters", body: "Show-cause notice, charge sheet, notice of domestic inquiry, suspension letter and order, from a starting text filled from the case, issued as a PDF. Have the wording checked by your adviser." },
      { title: "The employee's side", body: "Employees see notices issued to them, acknowledge receipt, which admits nothing, and reply in NeevHR. A reply on paper can be recorded too." },
      { title: "Inquiry and findings", body: "Start the inquiry, name the officer and record the findings." },
      { title: "Outcome with a check", body: "Close with an outcome from no action to dismissal. Dismissal, discharge or demotion is blocked until an inquiry has been held." },
      { title: "Suspension as a record", body: "Record a suspension pending inquiry and its end. NeevHR does not change pay from it: the terms are your company's to judge." },
      { title: "Its own permission", body: "Viewing cases needs its own permission, not implied by access to employees or exit." },
      { title: "No AI", body: "Disciplinary cases and letters have no AI features." },
    ],
    configPoints: ["Who may view and who may manage cases", "Reply date on each notice", "Category and severity on each case"],
    reports: ["Cases by stage", "Reply overdue", "Outcomes by category"],
    related: ["employees", "exit", "documents"],
    Visual: DisciplinaryVisual,
  },
  posh: {
    slug: "posh",
    name: "POSH complaint route",
    eyebrow: "Core HR",
    title: "A confidential route to your Internal Committee",
    intro:
      "Under the POSH Act 2013, employees can make a complaint in NeevHR that only the Internal Committee reads. HR, managers and Company Admins cannot open it. The committee records each step of the case, and the product shows the statutory dates to watch.",
    capabilities: [
      { title: "Complaint from self-service", body: "The employee sees who is on the committee and makes a complaint about someone in the company or someone outside it, then follows it and writes to the committee." },
      { title: "Committee only", body: "Setting up the committee opens no complaint, and a Company Admin cannot read cases. A committee member named in a complaint is kept out of that case, and a member can step aside for a conflict." },
      { title: "Committee set-up", body: "Name the Presiding Officer and members, with warnings for what is still missing against the Act. An external member has no login." },
      { title: "Case steps", body: "Admit or not admit with a written reason, record a settlement in conciliation, run the inquiry, record the report and the employer's action, and record interim relief." },
      { title: "Statutory dates on each case", body: "Each case shows its statutory dates and flags any that have passed. Take your adviser's reading on how they apply to your company." },
      { title: "Notes and messages", body: "Notes for the committee only, kept apart from messages to the complainant. Every read of a case is recorded." },
      { title: "Annual report", body: "Counts with no names for the committee's report, and a record of awareness programmes." },
      { title: "Local Committee", body: "Show your district's Local Committee details, for a complaint that cannot go to your own committee." },
      { title: "No AI", body: "POSH cases and letters have no AI features." },
    ],
    configPoints: ["Internal Committee members and terms", "Local Committee details and a note for employees", "Who may set up the committee"],
    reports: ["Annual report counts, with no names", "Cases by stage for the committee", "Awareness programmes"],
    related: ["learning", "helpdesk", "compliance"],
    Visual: PoshVisual,
  },
  "approval-channels": {
    slug: "approval-channels",
    name: "Approvals from Slack, Teams and WhatsApp",
    eyebrow: "Employee experience",
    title: "Approve from the apps your people already use",
    intro:
      "Approvers can approve or reject from Slack, Microsoft Teams or WhatsApp. Each app is your company's own connection, set up with its own step-by-step guide, and stays off until its test passes and a Company Admin switches it on.",
    capabilities: [
      { title: "Slack", body: "A direct message from your own Slack app, with Approve, Reject and Open in NeevHR. People are found by their work email." },
      { title: "Microsoft Teams", body: "A card in a personal chat with your own Teams bot. It needs your Microsoft 365 admin, and each approver connects once from the Inbox." },
      { title: "WhatsApp", body: "An approved template message on the mobile number on the approver's profile. It needs your own WhatsApp Business account on Meta, and Meta's charges apply." },
      { title: "One rule with email", body: "Which request types can be decided outside the app is one setting for email and these apps. Money and pay requests, and anything that needs a second approver, only show an Open in NeevHR button." },
      { title: "Safe buttons", body: "A button works once, only for the person it was sent to, with every check of the Inbox. Reject opens a short page, because a rejection needs a reason." },
      { title: "Little in the message", body: "The message shows who asked and what for, not the reason, since a leave reason can be medical." },
    ],
    configPoints: ["Each app connected per company", "Credentials stored encrypted, never shown again", "Test connection before switching on", "Which request types may be decided outside the app"],
    reports: ["Last test and last message per connection", "Approvals in the same audit trail as the Inbox"],
    related: ["manager-self-service", "leave", "process-studio"],
    Visual: ApprovalChannelsVisual,
  },
};

export const moduleList = Object.values(modules);
