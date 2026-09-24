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
import { LoansVisual } from "@/components/product/LoansVisual";
import { FieldTrackingVisual } from "@/components/product/FieldTrackingVisual";
import { SurveysVisual } from "@/components/product/SurveysVisual";
import { ReportsVisual } from "@/components/product/ReportsVisual";
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
};

export const modules: Record<string, ModuleContent> = {
  // ---------------------------------------------------------------- Core HR
  employees: {
    slug: "employees",
    name: "Employee records",
    eyebrow: "Core HR",
    title: "One employee record, effective-dated, for everything",
    intro:
      "A searchable directory backed by a full employee 360, job, pay, statutory, documents, assets and lifecycle, all on a single dated timeline you can report on as of any date.",
    capabilities: [
      { title: "Employee 360", body: "Overview, job & timeline, personal, statutory & bank, documents, leave, compensation, probation, performance, assets and income tax, in one profile." },
      { title: "Effective-dated timeline", body: "Every promotion, transfer and pay change is a dated event; history is never overwritten." },
      { title: "Bulk actions", body: "Mass transfer, change manager, assign roles, set shift or employment type across selected employees or a whole group." },
      { title: "PII-safe import & export", body: "CSV import with validation and export with CTC redaction for users without the entitlement." },
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
    title: "New hires productive from day one, not week three",
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
      { title: "Headcount plan", body: "Editable planned headcount and budget per department, with open and over-plan flags." },
      { title: "Hiring plan", body: "Planned hires against requisitions actually raised, so you always see what is left to hire." },
      { title: "Cost-centre budgets", body: "Budget envelopes per cost centre with committed-cost tracking." },
      { title: "Roll forward", body: "Copy last year's plan and adjust, with an effective-dated change history per cell." },
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
    Visual: ExitVisual,
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
    ],
    configPoints: ["Document categories and expiry lead-days", "Letter templates and merge tokens", "Verification rules", "Retention class per category"],
    reports: ["Expiring documents", "Letters issued", "Acknowledgement status"],
    related: ["employees", "onboarding", "compliance"],
    Visual: DocumentsVisual,
  },

  // ---------------------------------------------------------- Time & attendance
  attendance: {
    slug: "attendance",
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
    ],
    configPoints: ["Shift types, colours and allowances", "Weekly-off policies and alternating rules", "Rotation patterns", "Working-time compliance rules"],
    reports: ["Coverage heatmap", "Fairness (night/weekend)", "Overtime by shift"],
    related: ["attendance", "leave", "payroll"],
    Visual: RosteringVisual,
  },
  leave: {
    slug: "leave",
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
      "Location during duty hours, geofence boundaries, tracking policies and alerts for field staff, with consent handling and time-in-boundary reporting. Tracking runs from the NeevHR mobile app, which is coming soon.",
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
    ],
    configPoints: ["Clients and internal projects", "Bill and cost rates", "Budgets", "Members"],
    reports: ["Hours by project", "Billable vs non-billable", "Utilisation by project"],
    related: ["timesheets"],
    Visual: ProjectsVisual,
  },

  // -------------------------------------------------------------- Payroll & pay
  payroll: {
    slug: "payroll",
    name: "Payroll",
    eyebrow: "Payroll & pay",
    title: "Payroll that is statutory-accurate, on time, every cycle",
    intro:
      "Run monthly payroll with PF, ESI, PT, LWF and TDS in the core. Configure pay structures once, and let LOP, arrears, loans and reimbursements flow in automatically, with an audit trail behind every change.",
    capabilities: [
      { title: "Governed run", body: "Compute, verify, approve and publish, with separation of duties and a post-compute exception report of anomaly and statutory checks." },
      { title: "India statutory built in", body: "PF at the ₹15,000 ceiling, ESI to ₹21,000 gross, state PT, LWF and TDS, with ECR, challan and Form 16 outputs." },
      { title: "LOP, arrears & loans", body: "Loss of pay reduces the statutory base correctly; arrears recompute; loan EMIs appear only when active." },
      { title: "Bank-ready disbursement", body: "NEFT and RTGS files and a GL journal, with a payroll register and per-component YTD." },
    ],
    configPoints: ["Pay structures & components per group", "PF contribution basis election", "State-wise PT and LWF slabs", "Pay frequency and period lock"],
    reports: ["Payroll register & salary sheet", "ECR, ESI and PT challans", "Form 24Q and Form 16", "Exception & anomaly report"],
    related: ["attendance", "compliance", "loans"],
    Visual: PayrollVisual,
  },
  compliance: {
    slug: "compliance",
    name: "Statutory compliance",
    eyebrow: "Payroll & pay",
    title: "Never miss a statutory filing again",
    intro:
      "Track every PF, ESI, PT, LWF and TDS obligation with a due-date calendar, drive returns from draft to filed, and generate Form 16 and Form 12BA for the completed financial year.",
    capabilities: [
      { title: "Obligation register", body: "Every filing with its due date, amount, statute and status, with late-charge estimates." },
      { title: "Returns workflow", body: "Create, prepare and file 24Q, PF ECR, ESI, PT and LWF returns with real portal references." },
      { title: "Form 16 & 12BA", body: "Generate and distribute Form 16 with quarter-wise deposit reconciliation, and Form 12BA perquisites." },
      { title: "Filing calendar", body: "A month calendar of what is due, filed, pending and overdue." },
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
    title: "Policy-checked claims, reimbursed with control",
    intro:
      "Expense and travel claims with receipts, policy checks, partial sanction and reimbursement through payroll or settled separately, with separation of duties between the approver and the payer.",
    capabilities: [
      { title: "Claims & receipts", body: "Employees submit claims with receipts; approvers sanction, return or reject." },
      { title: "Policy checks", body: "Per-category caps, submission windows and pre-approval, with a recorded override for breaches." },
      { title: "Separation of duties", body: "Approve and reimburse are separate permissions; the payer is never the approver." },
      { title: "Advances", body: "Issue and settle cash advances, netting against claims or recovering via payroll." },
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
    ],
    configPoints: ["Requisition approval chain", "Candidate sources and stages", "Interview rounds and panels", "Default offer validity"],
    reports: ["Funnel & conversion", "Time-to-fill & acceptance", "Source effectiveness"],
    related: ["onboarding", "planning", "performance"],
    Visual: RecruitmentVisual,
  },
  performance: {
    slug: "performance",
    name: "Performance",
    eyebrow: "Talent",
    title: "Reviews, calibration and increments on one record",
    intro:
      "Set weighted goals, run appraisal cycles with 360 feedback and a 9-box talent view, and turn ratings into increment and bonus decisions, with the right sign-off authority at every step.",
    capabilities: [
      { title: "Weighted goals", body: "Goals carry weights that sum to the plan; weighted achievement rolls up automatically." },
      { title: "360 & 9-box", body: "Nominate peer, manager and report reviewers, and calibrate talent on a 9-box grid." },
      { title: "Rating distribution", body: "See ratings across the A+ to C scale against the expected curve to support calibration discussions at sign-off." },
      { title: "Increment & bonus", body: "Ratings map to increment and bonus matrices, with final sign-off repricing the number." },
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
      { title: "Quizzes & certificates", body: "Pass marks on quizzes and a PDF certificate with a verification link and optional expiry." },
      { title: "Training plan", body: "An annual, per-department training plan with budgets." },
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
    ],
    configPoints: ["Asset types and categories", "Depreciation rates", "Warranty windows", "Issue and return workflow"],
    reports: ["Assets by status", "Warranty expiring", "Book value"],
    related: ["onboarding", "helpdesk"],
    Visual: AssetsVisual,
  },

  // ------------------------------------------------------------------ Insights
  reports: {
    slug: "reports",
    name: "Reports & analytics",
    eyebrow: "Insights",
    title: "Every list a report, every report a chart",
    intro:
      "A report catalog across modules plus a self-serve builder. Pick a dataset, group and aggregate, visualise it, and drill from any chart straight to the underlying records.",
    capabilities: [
      { title: "Report catalog", body: "Ready reports grouped by module, permission-filtered and searchable." },
      { title: "Custom builder", body: "Choose columns, filters, group-by and aggregate, then chart it live." },
      { title: "Drill-down", body: "Click a bar or slice to open the exact records behind it." },
      { title: "Export", body: "CSV, Excel and PDF, including password-protected PDF." },
    ],
    configPoints: ["Datasets and columns", "Saved views", "Chart type", "Export formats"],
    reports: ["Headcount & cost dashboards", "Multi-year performance", "Any module, any dimension"],
    related: ["employees", "payroll", "performance"],
    Visual: ReportsVisual,
  },
};

export const moduleList = Object.values(modules);
