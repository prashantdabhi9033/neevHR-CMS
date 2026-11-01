// Pricing page content: editions, the full feature comparison and the edition finder.
//
// Edition contents are the owner's commercial packaging. The headline allocation
// (Core: records, onboarding, attendance, leave, statutory payroll, web ESS;
// Growth: performance, recruitment, analytics and report builder; Enterprise:
// advanced workflows and RBAC, expenses, FBP and benefits, priority implementation
// support) is the owner's decision. Every other row below was placed to fit that
// split; change it only when the owner decides.
//
// Keep claims honest (see lib/site.ts): a row marked "store-pending" is built, but
// reaches people through the mobile app, which is not yet in the stores.

import type { FaqItem } from "@/lib/site";
import { site } from "@/lib/site";

export type EditionKey = "core" | "growth" | "enterprise";

export type Edition = {
  key: EditionKey;
  name: string;
  tagline: string;
  bestFor: string;
  plus?: string;
  recommended?: boolean;
  /** The few lines a buyer compares first. They add nothing beyond the feature rows below. */
  highlights: string[];
};

export const editions: Edition[] = [
  {
    key: "core",
    name: "Core",
    tagline: "Get the foundation live",
    bestFor: "Companies moving HR, attendance and payroll off spreadsheets onto one compliant system.",
    highlights: [
      "Employee records, onboarding, exit and full and final settlement",
      "Attendance, biometric devices, shifts, overtime and leave",
      "Payroll with PF, ESI, PT, LWF and TDS, returns and Form 16",
      "Self-service and one approvals inbox for managers",
      "Disciplinary cases and a POSH complaint route",
      "Ready reports, dashboards and multiple legal entities",
    ],
  },
  {
    key: "growth",
    name: "Growth",
    tagline: "Add talent and analytics",
    bestFor: "Growing teams that hire every month and want structured reviews and their own reports.",
    plus: "Everything in Core, plus",
    highlights: [
      "Recruitment, careers website applications and internal jobs",
      "Goals, reviews, OKR cascade and 1:1 meetings",
      "Custom report builder and workforce analytics",
      "Learning, surveys and eNPS",
      "Shift rosters with coverage and fairness checks",
      "Variable pay and asset tracking",
    ],
    recommended: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    tagline: "Full platform and control",
    bestFor: "Multi-entity, multi-location organisations that need spend control, benefits and fine-grained access.",
    plus: "Everything in Growth, plus",
    highlights: [
      "Expenses, travel and travel advance",
      "Flexible benefits and group insurance",
      "Process Studio, multi-step approvals and custom roles",
      "Compensation planning and succession",
      "Positions, workforce planning, timesheets and field tracking",
      "HR helpdesk, and priority implementation support",
    ],
  },
];

export const editionName = (k: EditionKey) => editions.find((e) => e.key === k)!.name;

export function isEditionKey(v: unknown): v is EditionKey {
  return v === "core" || v === "growth" || v === "enterprise";
}

// What every edition carries, whatever the headcount.
export const everyEdition = [
  { icon: "flag", title: "India statutory payroll", body: "PF, ESI, PT, LWF and TDS with returns and challans." },
  { icon: "layers", title: "One price, not a module maze", body: "Edition-based packaging, quoted in INR." },
  { icon: "bolt", title: "Live in 4 to 8 weeks", body: "Configuration, migration and a parallel payroll run." },
  { icon: "shield", title: "Data hosted in India", body: "Row-level isolation and field-level encryption." },
  { icon: "sparkle", title: "Fully AI enabled", body: "AI inside each module you have, plus the assistant, on prepaid credits." },
  { icon: "users", title: "Multiple entities", body: "Several legal entities and locations in one account." },
  { icon: "sliders", title: "Configured by HR", body: "Policies as rule sets your HR admin owns." },
];

// ---------------------------------------------------------------- AI on credits

export const aiCreditPoints = [
  { icon: "layers", title: "It rides your edition", body: "AI on a module's screens comes with that module's edition. The assistant works with every edition." },
  { icon: "wallet", title: "One prepaid balance", body: "Your company recharges from ₹500. There is no per-employee AI fee, and employees never see a price." },
  { icon: "bolt", title: "You pay for what runs", body: "Each answer uses credits by its length. The same input is not charged twice, and nothing runs when a page opens." },
  { icon: "sliders", title: "Your admin stays in control", body: "A switch per module, who may use it, the balance, and usage by person without the questions." },
  { icon: "shield", title: "When credits finish", body: "Stored results still show and no new run starts. The feature keeps working without AI." },
];

// ---------------------------------------------------------------- comparison

/** true = included; false = not in this edition; a string = included at that level. */
export type Cell = boolean | string;

export type Feature = {
  name: string;
  desc: string;
  href?: string;
  /** Core, Growth, Enterprise */
  tiers: [Cell, Cell, Cell];
  /** Built, and needs the mobile app, which is not yet in the stores. Included cells show this instead of a tick. */
  status?: "store-pending";
};

export type FeatureGroup = { group: string; icon: string; features: Feature[] };

const ALL: [Cell, Cell, Cell] = [true, true, true];
const GROWTH_UP: [Cell, Cell, Cell] = [false, true, true];
const ENT_ONLY: [Cell, Cell, Cell] = [false, false, true];
// AI on a module's screens rides that module's edition, and runs on prepaid credits.
export const AI_LEVEL = "Prepaid credits";
const AI = AI_LEVEL;
const AI_ALL: [Cell, Cell, Cell] = [AI, AI, AI];
const AI_GROWTH_UP: [Cell, Cell, Cell] = [false, AI, AI];
const AI_ENT_ONLY: [Cell, Cell, Cell] = [false, false, AI];

export const featureGroups: FeatureGroup[] = [
  {
    group: "Core HR",
    icon: "users",
    features: [
      { name: "Employee 360 profile", desc: "Job, pay, statutory, bank, documents, leave, assets and income tax in one profile.", href: "/features/employees", tiers: ALL },
      { name: "Effective-dated history", desc: "Every promotion, transfer and pay change is a dated event. Report on any past date.", tiers: ALL },
      { name: "Multiple legal entities and locations", desc: "Several entities in one account, each with its own statutory registrations.", tiers: ALL },
      { name: "Org chart", desc: "Tree and focused views, with the org rebuilt as it stood on any date.", href: "/features/org-chart", tiers: ALL },
      { name: "Onboarding journeys", desc: "Pre-join tasks, intake forms, buddy and asset reservation before day one.", href: "/features/onboarding", tiers: ALL },
      { name: "Documents and letters", desc: "Document vault, mail-merge letters and policies employees acknowledge.", href: "/features/documents", tiers: ALL },
      { name: "Digital ID cards", desc: "An ID card for every employee, with a QR code, to view and print, and a public page that shows only whether a card is active.", href: "/features/employees#digital-id-cards", tiers: ALL },
      { name: "Holiday calendars", desc: "Location-aware public, optional and restricted holidays.", href: "/features/holidays", tiers: ALL },
      { name: "Exit and clearance", desc: "Notice, department clearances, handover, relieving and experience letters.", href: "/features/exit", tiers: ALL },
      { name: "Alumni portal", desc: "Former employees download their own payslips, Form 16 and F&F statement.", href: "/features/alumni-portal", tiers: ALL },
      { name: "Disciplinary cases", desc: "Show-cause notices, charge sheets, replies, inquiry and outcome as one dated case, under its own permission.", href: "/features/disciplinary", tiers: ALL },
      { name: "POSH complaint route", desc: "A confidential complaint that only the Internal Committee reads, committee set-up, case steps and an annual report with no names.", href: "/features/posh", tiers: ALL },
      { name: "Retirement and absconding", desc: "See upcoming retirements, and a guided absconding process with show-cause notices.", href: "/features/exit", tiers: ALL },
      { name: "Layoff and mass separation", desc: "Separate many people together, with severance by tax type.", href: "/features/exit", tiers: ALL },
      { name: "Bulk employee actions", desc: "Mass transfer, change manager, set shift or employment type in one step.", tiers: ALL },
      { name: "Asset tracking", desc: "Issue, custody, repair and return, with warranty and book value.", href: "/features/assets", tiers: GROWTH_UP },
      { name: "Asset stock-take and recovery", desc: "Verify assets, recover damage and value perquisites.", href: "/features/assets", tiers: GROWTH_UP },
      { name: "Asset QR labels", desc: "Print QR labels for your assets. Scanning one opens the asset for someone with access.", href: "/features/assets#asset-qr-labels", tiers: GROWTH_UP },
      { name: "Position management", desc: "Approved seats with incumbency, FTE, freeze and budgeted CTC.", href: "/features/positions", tiers: ENT_ONLY },
      { name: "Workforce planning", desc: "Headcount and budget plans per department and cost centre.", href: "/features/planning", tiers: ENT_ONLY },
    ],
  },
  {
    group: "Time and attendance",
    icon: "clock",
    features: [
      { name: "Biometric device integration", desc: "Punches over the ADMS push protocol used by many eSSL, ZKTeco and Matrix devices, or by file import.", href: "/features/attendance", tiers: ALL },
      { name: "Biometric device management", desc: "Send employees to devices, remove leavers, set card numbers and location scope, compare each device's user list with NeevHR, and get an offline alert. Fingerprint and face templates stay on the device.", href: "/features/attendance", tiers: ALL },
      { name: "Geofenced and web check-in", desc: "Punch from the web or the mobile app, inside the geofence you set, with an office network allowlist for web punches.", href: "/features/attendance#geofenced-and-web-check-in", tiers: ALL },
      { name: "QR code attendance", desc: "Employees scan a QR code at the site with the NeevHR mobile app, from a kiosk tablet whose code changes every 30 seconds or a printed poster in English and Hindi, with a geofence per point. The app's store release is pending.", href: "/features/attendance", tiers: ALL, status: "store-pending" },
      { name: "Attendance rules and day-close", desc: "Grace, half-day and short-day rules turn punches into a payroll-ready day.", tiers: ALL },
      { name: "Bulk attendance correction", desc: "Correct many people, up to 31 days at a time.", href: "/features/attendance", tiers: ALL },
      { name: "Late-coming and not-punched reports", desc: "Habitual-late reports with LOP, not-punched lists and reminders.", href: "/features/attendance", tiers: ALL },
      { name: "Statutory attendance registers", desc: "From your records. Form 25 and Form 12 use a common format, not a state-wise one.", href: "/features/attendance", tiers: ALL },
      { name: "Regularisation and approvals", desc: "Missed-punch requests approved from one inbox, with locked periods after payroll.", tiers: ALL },
      { name: "Leave policies", desc: "Any leave type, accrual, proration, carry-forward, encashment and sandwich rules.", href: "/features/leave", tiers: ALL },
      { name: "Leave blackouts and staffing caps", desc: "Block dates, cap who is away and auto-approve within your rules.", href: "/features/leave", tiers: ALL },
      { name: "Shifts and weekly offs", desc: "Shift patterns, split and flexible shifts, and weekly-off policies.", tiers: ALL },
      { name: "Overtime", desc: "Rates by day type, grade multipliers and daily caps, paid through payroll.", tiers: ALL },
      { name: "Roster planning", desc: "Weekly roster grid, rotation patterns, coverage checks and swap requests.", href: "/features/rostering", tiers: GROWTH_UP },
      { name: "Roster auto-balance and fairness", desc: "Balance shifts and see how fairly they fall.", href: "/features/rostering", tiers: GROWTH_UP },
      { name: "Timesheets and projects", desc: "Weekly time against projects, approvals and billable utilisation.", href: "/features/timesheets", tiers: ENT_ONLY },
      { name: "Field tracking and geofences", desc: "Live team map, geofences and day trails, with employee consent.", href: "/features/field-tracking", tiers: ENT_ONLY },
    ],
  },
  {
    group: "Payroll",
    icon: "wallet",
    features: [
      { name: "Configurable pay structures", desc: "Salary components and structures assigned to employee groups.", href: "/payroll", tiers: ALL },
      { name: "Daily-wage and hourly workers", desc: "Pay by the day or hour from attendance, with weekly and fortnightly runs, statutory, offers and the register of wages.", href: "/payroll", tiers: ALL },
      { name: "Governed payroll run", desc: "Compute, verify, approve and publish, with separation of duties and an exception report.", tiers: ALL },
      { name: "Trial payroll run", desc: "Run payroll as a trial before the real one.", href: "/payroll", tiers: ALL },
      { name: "Hold, off-cycle and supplementary runs", desc: "Hold a salary, pay off-cycle or run a supplementary payment.", href: "/payroll", tiers: ALL },
      { name: "Why this amount on payslips", desc: "Employees see how a figure was reached.", href: "/payroll", tiers: ALL },
      { name: "LOP and arrears", desc: "LOP from attendance reduces statutory wages; backdated revisions produce arrears.", tiers: ALL },
      { name: "Payslips and YTD", desc: "Payslips on self-service, payroll register and component-wise YTD.", tiers: ALL },
      { name: "Income tax, old and new regime", desc: "Declarations, proofs and previous-employer income drive the yearly TDS projection.", tiers: ALL },
      { name: "Tax tracker and ledger", desc: "Who has submitted, reminders, proof review and each person's tax ledger.", href: "/features/income-tax", tiers: ALL },
      { name: "Loans and salary advances", desc: "EMI schedules recovered automatically in each payroll run.", href: "/features/loans", tiers: ALL },
      { name: "Bank payment files", desc: "NEFT and RTGS files in a generic layout and for several major banks.", tiers: ALL },
      { name: "Accounting journal export", desc: "A balanced GL journal as CSV, with GL mapping and cost-centre split.", tiers: ALL },
      { name: "Tally Prime and Zoho Books entries", desc: "A ledger map screen, then vouchers for Tally Prime and journals for Zoho Books from published payroll, with a preview, a block on unmapped heads and a repeat-export warning. You download a file and import it.", href: "/integrations", tiers: ALL },
      { name: "Full and final settlement", desc: "Salary to the last day, leave encashment, gratuity, bonus and recoveries in one step.", href: "/features/full-and-final-settlement", tiers: ALL },
      { name: "Variable pay and incentives", desc: "Incentives, commissions and recoveries, approved before they reach payroll.", href: "/features/variable-pay", tiers: GROWTH_UP },
    ],
  },
  {
    group: "Statutory compliance",
    icon: "flag",
    features: [
      { name: "Provident Fund and ECR", desc: "Employee and employer PF, EPS, EDLI and admin charges, the ECR file and challan.", href: "/features/compliance", tiers: ALL },
      { name: "ESI", desc: "Eligibility on gross wages, contributions and the ESIC monthly file.", tiers: ALL },
      { name: "Professional Tax and LWF", desc: "State-wise slabs that follow each employee's work location, with challans.", tiers: ALL },
      { name: "Form 24Q, Form 16 and 12BA", desc: "Quarterly 24Q return file, Form 16 Part A and B, and Form 12BA perquisites.", tiers: ALL },
      { name: "Gratuity and statutory bonus", desc: "Gratuity in F&F, and bonus at 8.33% to 20% with registers in Forms A to D.", tiers: ALL },
      { name: "Compliance calendar", desc: "Every filing with its due date, status and a late-charge estimate.", tiers: ALL },
      { name: "PF correction of a filed month", desc: "Correct PF for a month already filed: arrears, a record of excess refunds, EPS to EPF transfers and bulk recompute, with a second person's approval and a supplementary ECR.", href: "/features/compliance", tiers: ALL },
      { name: "Manual PT and LWF register", desc: "Record PT and LWF liabilities outside payroll, with period, status, challan tracking and a second person's approval.", href: "/features/compliance", tiers: ALL },
    ],
  },
  {
    group: "Expenses, travel and benefits",
    icon: "layers",
    features: [
      { name: "Expense claims and advances", desc: "Receipts, policy caps, pre-approval and reimbursement by a separate payer.", href: "/features/expenses", tiers: ENT_ONLY },
      { name: "Mileage, per diem and GST on bills", desc: "Rates by grade and location.", href: "/features/expenses", tiers: ENT_ONLY },
      { name: "Spend analytics", desc: "Spend by category, month and department, top claimants and policy breaks.", href: "/features/expenses", tiers: ENT_ONLY },
      { name: "Travel requests", desc: "Grade-based entitlements, approvals and booking, linked to the expense claim.", href: "/features/travel", tiers: ENT_ONLY },
      { name: "Travel advance", desc: "Advances with a trip limit, adjusted on claim approval, with statement, ageing, bulk pay and recovery in F&F.", href: "/features/expenses#travel-advance", tiers: ENT_ONLY },
      { name: "Flexible benefits (FBP)", desc: "Declare, submit proof and verify, reducing taxable income from the next run.", href: "/features/benefits", tiers: ENT_ONLY },
      { name: "Group insurance", desc: "GMC, GPA and GTL enrolment, dependants and endorsements for your insurer.", tiers: ENT_ONLY },
    ],
  },
  {
    group: "Talent",
    icon: "target",
    features: [
      { name: "Recruitment pipeline", desc: "Requisitions, pipeline, interview panels and structured feedback.", href: "/features/recruitment", tiers: GROWTH_UP },
      { name: "Agency, referral and talent pool tracking", desc: "Your agencies, referrals with reward, and re-engaging past candidates.", href: "/features/recruitment", tiers: GROWTH_UP },
      { name: "Bulk resume import and JD match", desc: "Up to 50 resumes at once, and a word match score, not AI.", href: "/features/recruitment", tiers: GROWTH_UP },
      { name: "Cost per hire and background checks", desc: "Hiring costs, and tracking of checks with no vendor connection.", href: "/features/recruitment", tiers: GROWTH_UP },
      { name: "Careers website applications", desc: "An openings feed and application form for your own website, or an API key with WordPress field mapping. Duplicates are checked, every application is logged, and your web team gets a developer guide.", href: "/features/recruitment", tiers: GROWTH_UP },
      { name: "Resume parsing", desc: "Upload a resume and NeevHR suggests each field with its confidence and source line, plus a skills match score, for you to accept. Rule based, with no AI or outside service.", href: "/features/recruitment", tiers: GROWTH_UP },
      { name: "Internal job posting", desc: "Post an opening to employees with eligibility rules, a manager rule (informed or must approve), confidential applications and group-wide reach, on web and mobile. Selection raises a job change or transfer on the same record.", href: "/features/recruitment", tiers: GROWTH_UP },
      { name: "Offers and hire-to-onboard", desc: "Offers carry the approved compensation and flow into onboarding.", tiers: GROWTH_UP },
      { name: "Goals and performance reviews", desc: "Weighted goals, review cycles and manager sign-off.", href: "/features/performance", tiers: GROWTH_UP },
      { name: "OKR and goal cascade", desc: "Company and team objectives with key results, each person's goal linked under them, and progress that rolls up.", href: "/features/goal-cascade", tiers: GROWTH_UP },
      { name: "Improvement plans and promotions", desc: "PIP register and promotion recommendations.", href: "/features/performance", tiers: GROWTH_UP },
      { name: "1:1 meetings", desc: "Recurring 1:1s with a shared agenda that carries over, private notes, action items, a mood check-in, reminders and calendar invites, plus a coverage report for HR.", href: "/features/performance", tiers: GROWTH_UP },
      { name: "360 feedback and 9-box", desc: "Peer, manager and report reviewers, and calibration on a 9-box grid.", tiers: GROWTH_UP },
      { name: "Increment and bonus matrices", desc: "Ratings mapped to increment and bonus outcomes at sign-off.", tiers: GROWTH_UP },
      { name: "Learning and compliance training", desc: "Courses, quizzes, certificates and POSH or DPDP completion tracking.", href: "/features/learning", tiers: GROWTH_UP },
      { name: "Compensation planning", desc: "Merit matrix, budget guardrails, compa-ratio and increment letters.", href: "/features/compensation", tiers: ENT_ONLY },
      { name: "Succession and talent pools", desc: "Critical roles, ranked successors, readiness and high-potentials.", href: "/features/succession", tiers: ENT_ONLY },
    ],
  },
  {
    group: "Employee experience",
    icon: "sparkle",
    features: [
      { name: "Employee self-service (web)", desc: "Attendance, leave, payslips, tax declarations and approvals.", href: "/mobile", tiers: ALL },
      { name: "Manager self-service", desc: "My Team, one Inbox, delegation and acting on behalf.", href: "/features/manager-self-service", tiers: ALL },
      { name: "Mobile app", desc: "Self-service, approvals and attendance for Android and iPhone. Built, with the release to Google Play and the App Store pending.", href: "/mobile", tiers: ALL, status: "store-pending" },
      { name: "Announcements and recognition", desc: "Targeted announcements, peer kudos, birthdays and work anniversaries.", href: "/features/engagement", tiers: ALL },
      { name: "Surveys and eNPS", desc: "Anonymous surveys with a respondent floor and eNPS analytics.", href: "/features/surveys", tiers: GROWTH_UP },
      { name: "HR helpdesk", desc: "Ticket queue, SLA timers and L1 to L3 escalation.", href: "/features/helpdesk", tiers: ENT_ONLY },
      { name: "Room and vehicle booking", desc: "Book from self-service.", href: "/features/helpdesk", tiers: ENT_ONLY },
      { name: "Helpdesk satisfaction rating (CSAT)", desc: "A rating when a ticket closes, with an alert on a low rating and a satisfaction report, once a supervisor enables it.", href: "/features/helpdesk", tiers: ENT_ONLY },
      { name: "Ticket attachments and confidential categories", desc: "Files on tickets and replies, internal agent notes and sensitive categories.", href: "/features/helpdesk", tiers: ENT_ONLY },
    ],
  },
  {
    group: "Reports and analytics",
    icon: "chart",
    features: [
      { name: "Ready reports library", desc: "Reports by module, filtered to what each role may see.", href: "/features/reports", tiers: ALL },
      { name: "Dashboards", desc: "Headcount, attendance and payroll cost at a glance.", tiers: ALL },
      { name: "Export to CSV, Excel and PDF", desc: "Including password-protected PDF.", tiers: ALL },
      { name: "Custom report builder", desc: "Pick columns, filters, grouping and a chart, without IT.", tiers: GROWTH_UP },
      { name: "Drill-down to records", desc: "Click a bar or slice to open the exact records behind it.", tiers: GROWTH_UP },
      { name: "Workforce analytics", desc: "Headcount, attrition, diversity and tenure trends.", tiers: GROWTH_UP },
    ],
  },
  {
    group: "Platform and control",
    icon: "sliders",
    features: [
      { name: "Policies by employee group", desc: "Leave, attendance, pay, expense and appraisal rules assigned to groups, no code.", tiers: ALL },
      { name: "Custom fields", desc: "Add your own fields to employee, candidate, asset, expense and helpdesk records.", tiers: ALL },
      { name: "Approval workflows", desc: "Standard: built-in manager and HR approvals. Advanced: your own multi-step chains with any, all or quorum rules.", tiers: ["Standard", "Standard", "Advanced"] },
      { name: "Process Studio", desc: "Design your own HR flows from templates, with notices, time limits, rules and letters, and test them before you publish.", href: "/features/process-studio", tiers: ENT_ONLY },
      { name: "Approve from email", desc: "Approvers can approve or reject from the request email, once a Company Admin switches it on.", href: "/features/manager-self-service#approve-from-email", tiers: ALL },
      { name: "Approve from Slack, Teams or WhatsApp", desc: "Each app is connected per company with a setup guide, using your own app or business account. WhatsApp charges are Meta's. Money and pay requests only open in NeevHR.", href: "/features/approval-channels", tiers: ALL },
      { name: "Roles and permissions", desc: "Advanced adds custom roles, data scopes, field-level masking, time-bound grants and separation-of-duties checks.", tiers: ["Standard", "Standard", "Advanced"] },
      { name: "Access reviews and second-admin approval", desc: "Confirm who can reach what, and require a second admin for role and workflow changes.", href: "/security#audit", tiers: ENT_ONLY },
      { name: "Audit trail", desc: "Administrative, payroll and permission changes are logged.", tiers: ALL },
      { name: "Sensitive data view log", desc: "Who viewed salary, PAN, Aadhaar and bank details.", href: "/security#audit", tiers: ALL },
      { name: "Notification templates and delivery log", desc: "Edit templates and see what was delivered.", href: "/integrations", tiers: ALL },
      { name: "Setup assistant and go-live checks", desc: "Eight questions, copy setup between entities, preview as employee and go-live checks.", href: "/hrms-implementation", tiers: ALL },
      { name: "Notifications", desc: "In-app and email, plus SMS, WhatsApp and browser push once each provider is configured.", tiers: ALL },
      { name: "Bulk import with dry run", desc: "CSV import validated before anything is saved.", tiers: ALL },
      { name: "API keys and webhooks", desc: "Connect NeevHR to your own systems.", href: "/integrations", tiers: ALL },
      { name: "Hindi for employees", desc: "Employees can switch self-service to Hindi. Admin screens and the mobile app screens are in English today.", tiers: ALL },
    ],
  },
  {
    group: "AI",
    icon: "sparkle",
    features: [
      { name: "AI assistant for employees and managers", desc: "Answers from your own records within each person's role, in English, Hindi or Gujarati.", href: "/features/ai-assistant", tiers: ["Prepaid credits", "Prepaid credits", "Prepaid credits"] },
      { name: "Why is this blocked?", desc: "Explains what is stopping a payroll run or an approval, and why someone cannot see something, for people whose role allows it.", href: "/features/ai-assistant", tiers: ["Prepaid credits", "Prepaid credits", "Prepaid credits"] },
      { name: "Drafts you confirm", desc: "Leave, regularization and helpdesk requests as a review card. Nothing happens until the person confirms.", href: "/features/ai-assistant", tiers: ["Prepaid credits", "Prepaid credits", "Prepaid credits"] },
      { name: "Resume match", desc: "A score and reasons on the candidate page. It never rejects or moves a candidate.", href: "/features/ai-assistant#ai-resume", tiers: AI_GROWTH_UP },
      { name: "Payroll change explanation", desc: "Plain words for the checks that fired on a run, and what to check first.", href: "/features/ai-assistant#ai-payroll", tiers: AI_ALL },
      { name: "Expense receipt reading", desc: "Amount, date, vendor and category read from a bill, for the person to check.", href: "/features/ai-assistant#ai-receipt", tiers: AI_ENT_ONLY },
      { name: "Helpdesk category and reply draft", desc: "A suggested category, and a draft the agent edits. Nothing is sent until they send it.", href: "/features/ai-assistant#ai-helpdesk", tiers: AI_ENT_ONLY },
      { name: "Report from a sentence", desc: "Picks a report from what you type. Setting up a custom report needs the report builder, in Growth and up.", href: "/features/ai-assistant#ai-report", tiers: AI_ALL },
      { name: "Tax proof reading", desc: "Section, amount, year and issuer set against the declaration. Proofs on the health-related lines are not sent.", href: "/features/ai-assistant#ai-taxProof", tiers: AI_ALL },
      { name: "Review, goal and 1:1 drafts", desc: "Drafts on a click, into the normal box to edit. AI gives no score or rating.", href: "/features/ai-assistant#ai-drafts", tiers: AI_GROWTH_UP },
      { name: "Letter template draft", desc: "Wording with merge fields, using no employee data. Issued letter PDFs cannot print Hindi yet.", href: "/features/ai-assistant#ai-drafts", tiers: AI_ALL },
      { name: "Survey summary", desc: "Themes and actions from a closed survey's comments, with no names or quotes.", href: "/features/ai-assistant#ai-survey", tiers: AI_GROWTH_UP },
      { name: "Attrition reasons", desc: "Department figures in plain words. Not a prediction, and nothing about any person.", href: "/features/ai-assistant#ai-attrition", tiers: AI_GROWTH_UP },
      { name: "Learning suggestions", desc: "Courses from your own catalogue, from a person's role and skills. Nothing enrols anyone.", href: "/features/ai-assistant#ai-learning", tiers: AI_GROWTH_UP },
      { name: "Setup from Excel or PDF", desc: "Column suggestions for an import, and a draft leave policy from your PDF. Nothing is saved by itself.", href: "/features/ai-assistant#ai-setup", tiers: AI_ALL },
      { name: "Admin controls and usage report", desc: "A switch per module, who may use it, which modules it works with, the credit balance, and usage by person without the questions.", href: "/features/ai-assistant", tiers: ALL },
    ],
  },
  {
    group: "Security and data protection",
    icon: "shield",
    features: [
      { name: "Data hosted in India", desc: "The application and database run on servers in India. If your company switches on AI, what each feature needs, including uploaded receipts and proofs, goes to its provider, which may process it outside India.", href: "/security", tiers: ALL },
      { name: "Tenant isolation", desc: "Each company's data separated by Postgres row-level security in the database.", tiers: ALL },
      { name: "Field-level encryption", desc: "PAN, Aadhaar, UAN, ESI number and bank details encrypted with AES-256-GCM.", tiers: ALL },
      { name: "Single sign-on: Google and Microsoft", desc: "Your company turns it on for its own domain, for people who already have a login, and can make it required. Google is available and Microsoft is built and being switched on. SAML and Okta are not built.", href: "/security#sign-in", tiers: ALL },
      { name: "Multi-factor authentication", desc: "Authenticator-app MFA that admins can make mandatory for everyone.", tiers: ALL },
      { name: "DPDP Act 2023 controls", desc: "Access scopes, masking, encryption and audit logs that support your DPDP duties.", href: "/features/compliance", tiers: ALL },
    ],
  },
  {
    group: "Implementation and support",
    icon: "bolt",
    features: [
      { name: "Guided implementation", desc: site.implementation, href: "/hrms-implementation", tiers: ALL },
      { name: "Data migration", desc: "Employee master, org structure, documents and opening balances (leave, payroll year to date, loans, declarations) in a guided workspace: row-level checks in a dry run, undo, and sign-off.", href: "/hrms-data-migration", tiers: ALL },
      { name: "Parallel payroll run", desc: "Compare a payroll cycle with your current process before go-live, with column mapping, a tolerance, a reason per difference and sign-off.", href: "/hrms-data-migration", tiers: ALL },
      { name: "Priority implementation support", desc: "Priority handling from configuration through go-live.", tiers: ENT_ONLY },
      { name: "Custom integrations", desc: "Connectors beyond the standard set are scoped and quoted separately.", tiers: ["Quoted", "Quoted", "Quoted"] },
    ],
  },
];

// One short line for the comparison table, where a description would otherwise run long. The full description opens in place.
const shortLines: Record<string, string> = {
  "Digital ID cards": "An ID card with a QR code, to view, print and verify.",
  "Disciplinary cases": "Notices, replies, inquiry and outcome on one dated case.",
  "POSH complaint route": "A confidential complaint that only the Internal Committee reads.",
  "Biometric device management": "Send employees to devices, remove leavers and compare user lists.",
  "Geofenced and web check-in": "Punch from the web or the app, inside the boundary you set.",
  "QR code attendance": "Scan at the site, from a kiosk tablet or a printed poster.",
  "Daily-wage and hourly workers": "Pay by the day or hour, with weekly and fortnightly runs.",
  "Tally Prime and Zoho Books entries": "Vouchers and journals from published payroll, by file.",
  "PF correction of a filed month": "Arrears, refund records and a supplementary ECR, with a second approval.",
  "Manual PT and LWF register": "Liabilities outside payroll, with challan tracking.",
  "Travel advance": "Trip limits, adjustment on claim approval and recovery in F&F.",
  "Careers website applications": "Applications from your own website into Recruitment.",
  "Resume parsing": "Fields suggested from a resume for you to accept. Rule based, no AI.",
  "Internal job posting": "Openings for employees, with eligibility and manager rules.",
  "OKR and goal cascade": "Company, team and personal goals linked, with key results.",
  "1:1 meetings": "A shared agenda that carries over, private notes and action items.",
  "Mobile app": "Self-service, approvals and attendance for Android and iPhone.",
  "Helpdesk satisfaction rating (CSAT)": "A rating when a ticket closes, with a low-rating alert.",
  "Approval workflows": "Built-in approvals, or your own multi-step chains in Advanced.",
  "Process Studio": "Your own HR flows from templates, tested before you publish.",
  "Approve from Slack, Teams or WhatsApp": "Connected per company with a setup guide for each.",
  "Roles and permissions": "Advanced adds custom roles, data scopes and field-level masking.",
  "Hindi for employees": "Employees can switch self-service to Hindi.",
  "Why is this blocked?": "What is stopping a payroll run or an approval, in plain words.",
  "Tax proof reading": "Section, amount, year and issuer set against the declaration.",
  "Admin controls and usage report": "A switch per module, the credit balance and usage by person.",
  "Data hosted in India": "The application and database run on servers in India.",
  "Single sign-on: Google and Microsoft": "Your own accounts, turned on per company.",
  "Data migration": "Masters and opening balances with a dry run, undo and sign-off.",
  "Parallel payroll run": "Compare a cycle with your current process before go-live.",
};

export const featureLine = (f: Feature) => shortLines[f.name] ?? f.desc;

export const featureCount = featureGroups.reduce((n, g) => n + g.features.length, 0);

// ---------------------------------------------------------------- finder

// Each need maps to the lowest edition that covers it.
export const needs: { label: string; edition: EditionKey }[] = [
  { label: "Payroll and statutory compliance", edition: "core" },
  { label: "Attendance, shifts and leave", edition: "core" },
  { label: "Biometric devices", edition: "core" },
  { label: "Onboarding and exit", edition: "core" },
  { label: "Multiple legal entities", edition: "core" },
  { label: "Disciplinary cases and POSH complaints", edition: "core" },
  { label: "Approvals from Slack, Teams or WhatsApp", edition: "core" },
  { label: "Recruitment", edition: "growth" },
  { label: "Performance reviews and goals", edition: "growth" },
  { label: "OKR and goal cascade", edition: "growth" },
  { label: "Custom reports and analytics", edition: "growth" },
  { label: "Shift rosters", edition: "growth" },
  { label: "Incentives and variable pay", edition: "growth" },
  { label: "Surveys and learning", edition: "growth" },
  { label: "Expense claims and travel", edition: "enterprise" },
  { label: "Insurance and FBP", edition: "enterprise" },
  { label: "Multi-step approval workflows", edition: "enterprise" },
  { label: "Custom roles and field-level access", edition: "enterprise" },
  { label: "Compensation and succession planning", edition: "enterprise" },
  { label: "Positions and headcount planning", edition: "enterprise" },
  { label: "Timesheets and projects", edition: "enterprise" },
  { label: "HR helpdesk", edition: "enterprise" },
];

// ---------------------------------------------------------------- quote

export const quoteSteps = [
  { title: "Tell us your setup", body: "Headcount, entities, locations and the modules you need." },
  { title: "See it on your structure", body: "A guided demo on a setup close to yours, not a generic deck." },
  { title: "Get a quote in INR", body: "Edition, implementation scope and plan, in writing." },
  { title: "Go live", body: "Configuration, migration and a parallel payroll run, typically in 4 to 8 weeks." },
];

export const quoteFactors = [
  { t: "How pricing is set", b: "Pricing is based on employee count, edition, implementation requirements and integrations." },
  { t: "Currency and billing", b: "Priced in INR. Billing frequency is agreed in your quote." },
  { t: "Implementation", b: "Implementation scope and any fee are set out in the quote, based on entities, data migration and integrations." },
  { t: "Integrations", b: "Standard integrations (biometric ADMS, CSV import and export, API keys, webhooks) are part of the platform. Custom integration work is quoted separately." },
  { t: "Support", b: "The support model during implementation and after go-live is described in your quote." },
  { t: "Minimum size", b: "NeevHR is designed for organisations from about 100 employees. Tell us your headcount and we will advise." },
  { t: "Changing edition", b: "Start on the edition you need today and move up as you grow. Your data and configuration stay as they are." },
  { t: "Trial", b: "We run a guided demo on a structure close to yours. A trial or pilot can be discussed for your case." },
];

export const pricingFaqs: FaqItem[] = [
  {
    q: "How is AI priced?",
    a: "It works on prepaid credits, separate from your edition, and it can be added to any edition. AI inside a module comes with that module's edition. Your company recharges and each answer or result uses credits according to its length, and a stored result is reused at no charge. There is no per-employee AI fee, employees never pay, and your admin sees the balance and who used how much. Recharge plans start at ₹500.",
  },
  {
    q: "Why is NeevHR pricing not listed publicly?",
    a: "Price depends on employee count, edition, implementation requirements and integrations, which vary a lot between companies. We prepare a quote in INR once we understand your setup.",
  },
  {
    q: "Is payroll included in every edition?",
    a: "Yes. Payroll with PF, ESI, PT, LWF and TDS, the statutory returns and challans, Form 16 and full and final settlement are part of every edition, starting with Core.",
  },
  {
    q: "Is there a per-module fee?",
    a: "No. NeevHR is packaged in three editions, so you are not assembling a price module by module.",
  },
  {
    q: "Can we start on Core and move up later?",
    a: "Yes. Moving from Core to Growth or Enterprise switches on the extra modules. Employee records, history and configuration carry over unchanged.",
  },
  {
    q: "Do multiple legal entities cost extra?",
    a: "Multiple legal entities and locations are supported in every edition. The number of entities affects implementation scope, which is set out in your quote.",
  },
  {
    q: "Is there an implementation fee?",
    a: "Implementation scope and any fee are stated in the quote. They depend on the number of entities, the data to migrate and integrations.",
  },
  {
    q: "Is the mobile app included?",
    a: "Yes, in every edition. The app for Android and iPhone is built, and its release to Google Play and the App Store is pending. Web self-service is included and works today, including from a phone browser.",
  },
  {
    q: "How long does it take to go live?",
    a: site.implementation,
  },
];
