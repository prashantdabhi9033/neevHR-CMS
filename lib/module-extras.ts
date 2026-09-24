// Extra SEO content for the priority module pages (spec §10): a spec-aligned
// title, the workflow, benefits, who uses it and FAQs. Modules without an
// entry render the base template only. Claims verified against product code.

export type ModuleExtra = {
  /** Absolute <title>. */
  seoTitle: string;
  metaDesc: string;
  workflow: { step: string; body: string }[];
  benefits: string[];
  whoUses: { role: string; does: string }[];
  faqs: { q: string; a: string }[];
};

export const moduleExtras: Record<string, ModuleExtra> = {
  employees: {
    seoTitle: "Employee Management Software for Indian Companies | NeevHR",
    metaDesc:
      "Employee management software with one effective-dated employee record: job, pay, statutory IDs, documents and history, reportable as of any date. Built for Indian companies.",
    workflow: [
      { step: "Create", body: "Add employees individually, by CSV import with dry-run validation, or from an accepted offer." },
      { step: "Change", body: "Record promotions, transfers and revisions as dated events, singly or in bulk." },
      { step: "Govern", body: "Sensitive changes such as bank or statutory details go through maker-checker approval." },
      { step: "Report", body: "Run headcount, attrition and master reports as of any date." },
    ],
    benefits: [
      "One record feeds attendance, payroll and reports, so data is entered once",
      "History is never overwritten, which keeps audits and arrears straightforward",
      "Field-level masking keeps salary and identity data to those who need it",
    ],
    whoUses: [
      { role: "HR operations", does: "Maintains the employee master, org changes and documents." },
      { role: "Managers", does: "See their team's records within their data scope." },
      { role: "Employees", does: "View their profile and request changes in self-service." },
    ],
    faqs: [
      {
        q: "What does effective-dated mean?",
        a: "Each change carries the date it takes effect. The old value is kept, so you can see and report the record as it stood on any date.",
      },
      {
        q: "Can we import our existing employee data?",
        a: "Yes. Employee master data is imported from CSV with a dry-run step that validates every row before anything is saved.",
      },
      {
        q: "Can we add our own fields?",
        a: "Yes. Custom fields can be added to the employee record without code.",
      },
    ],
  },
  onboarding: {
    seoTitle: "Employee Onboarding Software India | NeevHR",
    metaDesc:
      "Employee onboarding software that turns an accepted offer into a guided joining journey: documents, statutory and bank details, policies to acknowledge and tasks for every team.",
    workflow: [
      { step: "Offer accepted", body: "The candidate record and approved compensation carry into onboarding." },
      { step: "Pre-joining", body: "The joiner submits documents, statutory and bank details, and acknowledges policies." },
      { step: "Tasks", body: "HR, IT, facilities and the manager complete their joining tasks." },
      { step: "Day one", body: "The employee record goes live with pay structure, shift and holiday calendar assigned." },
    ],
    benefits: [
      "No re-keying between recruitment and the employee record",
      "Default pay structure, shift and holiday calendar assigned by grade, department or location",
      "HR sees pre-joining readiness at a glance",
    ],
    whoUses: [
      { role: "HR", does: "Owns the journey and verifies documents." },
      { role: "IT and facilities", does: "Complete asset and access tasks." },
      { role: "Joiners", does: "Submit documents and read policies before day one." },
    ],
    faqs: [
      {
        q: "Can candidates fill in their details before joining?",
        a: "Yes. Joiners complete a candidate intake with personal, statutory and bank details and document uploads.",
      },
      {
        q: "Can we make joiners acknowledge policies?",
        a: "Yes. HR can publish onboarding policies that joiners read and acknowledge.",
      },
    ],
  },
  attendance: {
    seoTitle: "Attendance Management Software | Biometric HRMS | NeevHR",
    metaDesc:
      "Attendance management software with biometric device integration, shifts, overtime, regularisation and LOP that flows into payroll. Built for Indian companies.",
    workflow: [
      { step: "Capture", body: "Punches arrive from biometric devices over ADMS, web check-in or file import." },
      { step: "Apply rules", body: "Shift, grace, break and overtime rules turn punches into an attendance status." },
      { step: "Regularise", body: "Employees raise corrections; managers approve them in the inbox." },
      { step: "Close", body: "The attendance period closes and LOP and overtime flow into payroll." },
    ],
    benefits: [
      "Fewer manual corrections before payroll",
      "LOP and overtime reach payroll without re-entry",
      "Locked periods stop changes after payroll closes",
    ],
    whoUses: [
      { role: "HR and payroll", does: "Configure rules and close attendance each month." },
      { role: "Managers", does: "Approve regularisation and overtime for their teams." },
      { role: "Employees", does: "Check attendance and raise corrections." },
    ],
    faqs: [
      {
        q: "Which biometric devices work with NeevHR?",
        a: "NeevHR accepts punches over the ADMS (iClock) push protocol used by many eSSL, ZKTeco and Matrix devices, plus punch file import. We confirm your device models during implementation.",
      },
      {
        q: "Can employees correct missed punches?",
        a: "Yes. Employees raise regularisation requests that route for approval, and auto-regularisation rules can handle common cases.",
      },
      {
        q: "How does attendance affect payroll?",
        a: "Closed attendance produces LOP days and approved overtime, which payroll reads directly.",
      },
    ],
  },
  leave: {
    seoTitle: "Leave Management Software for HR Teams | NeevHR",
    metaDesc:
      "Leave management software with configurable leave types, accrual, proration, carry-forward, encashment and approvals, connected to attendance and payroll.",
    workflow: [
      { step: "Configure", body: "Define leave types, accrual, proration, carry-forward and encashment rules." },
      { step: "Assign", body: "Attach leave policies to employee groups by entity, department, grade or location." },
      { step: "Apply", body: "Employees apply against live balances; managers approve." },
      { step: "Settle", body: "Approved leave updates attendance, and unpaid leave becomes LOP in payroll." },
    ],
    benefits: [
      "Every accrual and deduction is recorded in a balance ledger",
      "Rules are rechecked at approval, not only when applying",
      "Leave encashment flows into full and final settlement",
    ],
    whoUses: [
      { role: "HR", does: "Configures leave policies and holiday calendars." },
      { role: "Managers", does: "Approve leave and see team availability." },
      { role: "Employees", does: "Check balances and apply for leave." },
    ],
    faqs: [
      {
        q: "Can different employee groups have different leave policies?",
        a: "Yes. Leave policies are assigned to employee groups, for example by entity, department, grade or location.",
      },
      {
        q: "Does NeevHR prorate leave for mid-year joiners?",
        a: "Yes. Proration rules are part of the leave type configuration.",
      },
      {
        q: "Is leave encashment supported?",
        a: "Yes. Encashment rules can be configured, and encashment is included in full and final settlement.",
      },
    ],
  },
  rostering: {
    seoTitle: "Shift & Roster Management Software India | NeevHR",
    metaDesc:
      "Shift and roster management software: shift patterns, split and flexible shifts, weekly rosters with coverage checks, weekly-off policies and overtime rules.",
    workflow: [
      { step: "Define shifts", body: "Create shift patterns with timings, grace, breaks and overtime rules." },
      { step: "Build rosters", body: "Plan weekly rosters by team or location, or import the week." },
      { step: "Check coverage", body: "See gaps and rest-between-shifts issues before publishing." },
      { step: "Run", body: "Attendance is evaluated against the rostered shift." },
    ],
    benefits: [
      "Coverage gaps are visible before the week starts",
      "Shift allowances and overtime reach payroll from the roster",
      "Weekly-off policies assigned by group",
    ],
    whoUses: [
      { role: "Operations managers", does: "Plan and publish team rosters." },
      { role: "HR", does: "Maintains shift masters and policies." },
      { role: "Employees", does: "See their assigned shifts." },
    ],
    faqs: [
      {
        q: "Does NeevHR support night and split shifts?",
        a: "Yes. Shift patterns include night, split and flexible shifts.",
      },
      {
        q: "Can we import a roster?",
        a: "Yes. A week's roster can be imported from a file.",
      },
    ],
  },
  compliance: {
    seoTitle: "Payroll Compliance Software India: PF, ESI, PT, TDS | NeevHR",
    metaDesc:
      "Payroll compliance software for India: PF ECR, ESIC contribution file, PT and LWF challans, TDS challans, Form 24Q and Form 16, with a filing calendar.",
    workflow: [
      { step: "Compute", body: "Statutory amounts are calculated in the payroll run." },
      { step: "Generate", body: "ECR, ESI file, challans and return files are produced from the published run." },
      { step: "File", body: "Your team uploads and pays on the government portals and records references." },
      { step: "Track", body: "The filing calendar shows what is due, filed, pending and overdue." },
    ],
    benefits: [
      "Filing outputs come from the same run as payslips, so they reconcile",
      "Due dates are visible in one calendar",
      "Form 16 is available to employees in self-service",
    ],
    whoUses: [
      { role: "Payroll", does: "Generates files and challans each month." },
      { role: "Finance", does: "Pays challans and reconciles." },
      { role: "Employees", does: "Download Form 16." },
    ],
    faqs: [
      {
        q: "Does NeevHR file returns on the portals?",
        a: "No. NeevHR generates the files and challans; filing and payment are done on the EPFO, ESIC and income tax portals.",
      },
      {
        q: "Is the Form 24Q file ready to upload?",
        a: "NeevHR generates the Form 24Q text file in the NSDL FVU format. Validate it with the government file validation utility before filing.",
      },
    ],
  },
  recruitment: {
    seoTitle: "Recruitment & Applicant Tracking Software | NeevHR",
    metaDesc:
      "Recruitment and applicant tracking inside NeevHR: requisitions with approvals, candidate pipelines, interview panels, structured feedback, offers and hire-to-onboard handover.",
    workflow: [
      { step: "Requisition", body: "Managers raise a requisition that is approved and validated before it opens." },
      { step: "Pipeline", body: "Candidates move through stages on a board, from sourcing to offer." },
      { step: "Interview", body: "Panels are scheduled and every panelist records structured feedback." },
      { step: "Offer and hire", body: "The offer carries approved compensation, and acceptance starts onboarding." },
    ],
    benefits: [
      "Hiring stays tied to approved positions and plans",
      "Panelists see full candidate context",
      "No re-keying from candidate to employee",
    ],
    whoUses: [
      { role: "Recruiters", does: "Manage pipelines, interviews and offers." },
      { role: "Hiring managers", does: "Raise requisitions and give feedback." },
      { role: "Interview panel", does: "See their interviews and submit feedback." },
    ],
    faqs: [
      {
        q: "Does NeevHR have a careers page or job-board integration?",
        a: "Not today. Recruitment covers requisitions, pipelines, interviews, referrals and offers inside NeevHR; there is no public careers page or job-board posting yet.",
      },
      {
        q: "Does NeevHR support background verification?",
        a: "Yes. Background verification can be tracked as part of the candidate process.",
      },
    ],
  },
  performance: {
    seoTitle: "Performance Management Software | Goals, Reviews & 360° | NeevHR",
    metaDesc:
      "Performance management software with weighted goals, review cycles, 360 feedback, a 9-box talent view, rating distribution and increment decisions linked to ratings.",
    workflow: [
      { step: "Set goals", body: "Employees and managers agree weighted goals, approved in the cycle." },
      { step: "Review", body: "Self, manager and 360 reviewers rate goals and competencies." },
      { step: "Calibrate", body: "Leaders review the rating distribution and 9-box before sign-off." },
      { step: "Reward", body: "Signed-off ratings drive increment and bonus decisions." },
    ],
    benefits: [
      "Goals, reviews and rewards on one record",
      "Manager ratings stay confidential until release",
      "Final authority can adjust ratings with an audit trail",
    ],
    whoUses: [
      { role: "HR", does: "Configures cycles, forms and rating scales." },
      { role: "Managers", does: "Approve goals and rate their team." },
      { role: "Employees", does: "Set goals and complete self-reviews." },
    ],
    faqs: [
      {
        q: "Does NeevHR force a bell curve?",
        a: "No. NeevHR shows the rating distribution against a reference curve to support calibration; it does not force ratings into it.",
      },
      {
        q: "Does NeevHR support 360 feedback?",
        a: "Yes. Peer, manager and report reviewers can be nominated for 360 feedback.",
      },
    ],
  },
  expenses: {
    seoTitle: "Expense Management Software for Employees | NeevHR",
    metaDesc:
      "Employee expense management: policy-checked claims with receipts, approvals, partial sanction, advances and reimbursement through payroll, with separation of duties.",
    workflow: [
      { step: "Claim", body: "Employees submit claims with receipts against category policy." },
      { step: "Approve", body: "Approvers sanction in full or in part, return or reject." },
      { step: "Reimburse", body: "Approved claims are picked up by payroll or settled separately." },
      { step: "Report", body: "Spend is reported by category, team and status." },
    ],
    benefits: [
      "Policy caps are checked when the claim is made",
      "The approver cannot also be the payer",
      "Advances are netted against claims",
    ],
    whoUses: [
      { role: "Employees", does: "Submit claims and track status." },
      { role: "Managers and finance", does: "Approve and reimburse." },
      { role: "HR and finance", does: "Configure categories and caps." },
    ],
    faqs: [
      {
        q: "Are expenses paid through payroll?",
        a: "Approved, unsettled claims are picked up by the next payroll automatically, or they can be settled separately and marked reimbursed.",
      },
    ],
  },
  loans: {
    seoTitle: "Employee Loan & Salary Advance Management | NeevHR",
    metaDesc:
      "Employee loans and salary advances with EMI schedules, policy caps and approvals, automatic EMI recovery in payroll, foreclosure and recovery at exit.",
    workflow: [
      { step: "Apply", body: "Employees apply within policy limits shown on the form." },
      { step: "Approve", body: "Approvals route by amount and loan type." },
      { step: "Recover", body: "EMIs are deducted in each payroll run." },
      { step: "Close", body: "Foreclose, write off with a second approver, or recover in F&F." },
    ],
    benefits: [
      "No manual EMI entries in payroll",
      "Balances are recovered in full and final settlement",
      "Write-offs need a second approver",
    ],
    whoUses: [
      { role: "Employees", does: "Apply and see their schedule." },
      { role: "HR and finance", does: "Approve and administer loans." },
      { role: "Payroll", does: "Sees EMIs deducted automatically." },
    ],
    faqs: [
      {
        q: "Can an employee have more than one loan?",
        a: "Yes. Multiple loans per employee are supported, each with its own EMI schedule.",
      },
    ],
  },
  compensation: {
    seoTitle: "Compensation Management & Salary Revision Software | NeevHR",
    metaDesc:
      "Compensation management for Indian companies: increment cycles with a merit matrix, per-manager budgets, approvals and increment letters, applied as effective-dated revisions.",
    workflow: [
      { step: "Plan", body: "Open a cycle with a merit matrix and budgets per manager." },
      { step: "Propose", body: "Managers propose increments within guidelines." },
      { step: "Approve", body: "Proposals go through approval with out-of-policy flags." },
      { step: "Apply", body: "Revisions take effect on the record and increment letters are issued." },
    ],
    benefits: [
      "Budgets are visible while proposing",
      "Revisions become effective-dated pay changes, including arrears",
      "Letters are generated from the approved numbers",
    ],
    whoUses: [
      { role: "HR and rewards", does: "Configure cycles and matrices." },
      { role: "Managers", does: "Propose increments for their team." },
      { role: "Leadership", does: "Approve within budget." },
    ],
    faqs: [
      {
        q: "Are backdated increments paid as arrears?",
        a: "Yes. A revision effective from an earlier date produces arrears in payroll.",
      },
    ],
  },
  reports: {
    seoTitle: "HR Analytics & Reporting Software | NeevHR",
    metaDesc:
      "HR analytics and reporting: a report catalog across modules, persona dashboards, a self-serve report builder, drill-down to records and scheduled email reports.",
    workflow: [
      { step: "Pick", body: "Start from the report catalog or a dataset in the builder." },
      { step: "Shape", body: "Filter, group and aggregate, then choose a chart." },
      { step: "Drill", body: "Click through from a chart to the records behind it." },
      { step: "Share", body: "Save the view, export it or schedule it by email." },
    ],
    benefits: [
      "Reports respect each user's data scope",
      "As-of-date master reports from effective-dated history",
      "Attrition risk with visible, rule-based reasons",
    ],
    whoUses: [
      { role: "HR leaders", does: "Track headcount, attrition and cost." },
      { role: "Payroll and finance", does: "Run payroll and statutory reports." },
      { role: "Managers", does: "See their team's dashboards." },
    ],
    faqs: [
      {
        q: "Which data can the report builder use?",
        a: "The self-serve builder covers employee, leave, payroll line, expense and asset datasets. Many more reports are available in the pre-built catalog.",
      },
    ],
  },
  documents: {
    seoTitle: "Employee Document Management Software | NeevHR",
    metaDesc:
      "Employee document management: policies with acknowledgement tracking, employee files with versions and expiry dates, and letters generated as PDFs.",
    workflow: [
      { step: "Upload", body: "Store employee files and company policies against the record." },
      { step: "Publish", body: "Share policies with groups and track acknowledgement." },
      { step: "Generate", body: "Create letters as PDFs from templates." },
      { step: "Renew", body: "See documents approaching expiry." },
    ],
    benefits: [
      "One place for every employee file",
      "Proof of policy acknowledgement",
      "Expiry tracking for licences and certificates",
    ],
    whoUses: [
      { role: "HR", does: "Manages files, templates and policies." },
      { role: "Employees", does: "Read and acknowledge policies and download letters." },
    ],
    faqs: [
      {
        q: "Does NeevHR keep document versions?",
        a: "Yes. Documents are versioned, and expiry dates can be recorded.",
      },
    ],
  },
  exit: {
    seoTitle: "Exit Management & Full and Final Settlement Software | NeevHR",
    metaDesc:
      "Exit management and full and final settlement: resignation approvals, notice, clearance from every team, and an F&F worksheet with leave encashment, gratuity, bonus and recoveries.",
    workflow: [
      { step: "Resign", body: "The resignation routes through the exit approval chain." },
      { step: "Notice", body: "Notice period, buyout or shortfall is tracked; login stays until the last working day." },
      { step: "Clear", body: "Each department signs off its clearance items." },
      { step: "Settle", body: "The F&F worksheet computes dues and recoveries and flows into payroll." },
    ],
    benefits: [
      "Clearance owners see only their own items",
      "Gratuity, leave encashment and bonus on one worksheet",
      "Loans and unreturned assets recovered automatically",
    ],
    whoUses: [
      { role: "HR", does: "Manages exits and F&F." },
      { role: "Managers and departments", does: "Approve and clear." },
      { role: "Payroll", does: "Pays the settlement." },
    ],
    faqs: [
      {
        q: "What does the full and final settlement include?",
        a: "Salary to the last day, leave encashment, gratuity if eligible, pro-rata bonus and reimbursements, less recoveries such as notice shortfall, loans and assets.",
      },
      {
        q: "How quickly must F&F be paid?",
        a: "The Code on Wages, 2019, in force from 21 November 2025, requires wages to be paid within two working days of separation. Review your policy against it.",
      },
    ],
  },
  "org-chart": {
    seoTitle: "Org Chart Software with As-of-Date History | NeevHR",
    metaDesc:
      "Interactive org chart software: live reporting tree across entities, dotted-line reporting, span-of-control insights, as-of-date history and drag-to-reassign managers.",
    workflow: [
      { step: "Explore", body: "Search the live tree across entities and see anyone's reporting path and team size." },
      { step: "Look back", body: "Switch to any past date to see the org as it stood, read-only." },
      { step: "Reassign", body: "Drag a person onto a new manager, or bulk-import reporting lines with a validate-only dry run." },
      { step: "Re-route", body: "Pending approvals waiting on the old manager are flagged to the new one." },
    ],
    benefits: [
      "One reporting structure that attendance, leave and approvals all use",
      "History is kept, so past structures can be reproduced for audits",
      "Span-of-control and layer insights for org design discussions",
    ],
    whoUses: [
      { role: "HR", does: "Maintains reporting lines and structure." },
      { role: "Leaders and managers", does: "View their organisation and reporting paths." },
    ],
    faqs: [
      {
        q: "Can we see the org as it was on a past date?",
        a: "Yes. The as-of-date view rebuilds the tree from reporting-line history. It is read-only.",
      },
      {
        q: "Can we model a future reorganisation?",
        a: "Not as a draft scenario. Structure changes in NeevHR apply to the live org as dated events.",
      },
    ],
  },
  positions: {
    seoTitle: "Position Management Software: Seats, Vacancies & Budget | NeevHR",
    metaDesc:
      "Position management: budgeted seats separate from the people in them, with vacancy, incumbency, FTE and budgeted CTC per seat, checked against the workforce plan.",
    workflow: [
      { step: "Create a seat", body: "Set department, designation, grade, location, reports-to seat, FTE and budgeted CTC." },
      { step: "Check the plan", body: "Seats beyond the workforce plan are blocked unless someone with override permission approves it, which is audited." },
      { step: "Fill", body: "Assign a person; the seat moves from open to filled." },
      { step: "Vacate or freeze", body: "Seats move to on notice and back to open when people leave, and empty seats can be frozen or closed." },
    ],
    benefits: [
      "Headcount cost controlled at the seat level",
      "Seats update automatically on joining, exit and entity transfer",
      "A history of who held each seat",
    ],
    whoUses: [
      { role: "HR and finance", does: "Create and budget seats." },
      { role: "Workforce planners", does: "Keep seats in line with the plan." },
    ],
    faqs: [
      {
        q: "Does creating a position need approval?",
        a: "Creation is direct for users with position permissions; the workforce plan check is the gate, and exceeding the plan needs an override permission.",
      },
    ],
  },
  planning: {
    seoTitle: "Workforce Planning Software: Headcount & Hiring Plan | NeevHR",
    metaDesc:
      "Workforce planning for Indian companies: financial-year headcount and budget by department and designation, hiring plans checked against requisitions, and cost-centre budgets.",
    workflow: [
      { step: "Choose the year", body: "Plans run by financial year." },
      { step: "Set headcount", body: "Enter planned headcount and annual budget per department and designation." },
      { step: "Track", body: "Filled headcount is counted live; open and over-plan cells are flagged." },
      { step: "Plan hires", body: "Set planned hires; approved requisitions are checked against them." },
      { step: "Roll forward", body: "Copy the plan into the next year and adjust." },
    ],
    benefits: [
      "The plan is enforced on both new positions and requisitions",
      "Change history on every plan cell",
      "Cost-centre budgets alongside headcount",
    ],
    whoUses: [
      { role: "HR and finance", does: "Build and maintain the plan." },
      { role: "Recruiters", does: "Hire within planned numbers." },
    ],
    faqs: [
      {
        q: "Is the recruitment budget enforced?",
        a: "Headcount is enforced against the plan. The recruitment budget is tracked for visibility but not used to block hiring.",
      },
    ],
  },
  holidays: {
    seoTitle: "Holiday Calendar Management by Location | NeevHR",
    metaDesc:
      "Holiday calendar management for Indian companies: company-wide and office-specific calendars, holiday schemes, public, optional and restricted holidays, with CSV import.",
    workflow: [
      { step: "Create calendars", body: "Set up company-wide and per-office calendars, or holiday schemes, for the year." },
      { step: "Add holidays", body: "Add public, optional or restricted holidays one by one or by import with a dry run." },
      { step: "Map employees", body: "Assign employees to schemes in bulk." },
      { step: "Pick restricted days", body: "Employees choose restricted holidays in self-service within the quota." },
    ],
    benefits: [
      "Leave and working-day counts use each employee's own holidays",
      "Attendance recomputes when holidays change",
      "Holidays cannot be changed inside a period whose payroll is published",
    ],
    whoUses: [
      { role: "HR", does: "Maintains calendars and schemes." },
      { role: "Employees", does: "See their holidays and choose restricted ones." },
    ],
    faqs: [
      {
        q: "Does NeevHR pre-load state holiday lists?",
        a: "No. HR enters or imports each year's holidays, so the calendar matches the company's own declared list.",
      },
    ],
  },
  "field-tracking": {
    seoTitle: "Field Force Tracking with Geofences | NeevHR",
    metaDesc:
      "Field force tracking for Indian field teams: consent-based location during duty hours, geofences, alerts and time-in-boundary reports. Runs on the NeevHR mobile app, coming soon.",
    workflow: [
      { step: "Consent", body: "The employee gives consent; tracking cannot be enabled without it." },
      { step: "Configure", body: "HR enables the field worker and assigns boundaries and a tracking policy." },
      { step: "Track", body: "The mobile app sends location with an offline buffer; points outside duty hours are dropped." },
      { step: "Act on alerts", body: "Managers acknowledge out-of-boundary, long-stay and no-signal alerts." },
    ],
    benefits: [
      "Duty-hours-only tracking with recorded consent",
      "Managers see only their own reporting line",
      "Time-in-boundary and distance reports",
    ],
    whoUses: [
      { role: "Field managers", does: "Watch the team map and act on alerts." },
      { role: "Field employees", does: "Share location during duty hours from the app." },
    ],
    faqs: [
      {
        q: "Is field tracking available now?",
        a: "Field tracking runs from the NeevHR mobile app, which is coming soon.",
      },
      {
        q: "Does it plan customer visits or routes?",
        a: "No. It covers location during duty hours, boundaries and alerts, not visit or beat planning.",
      },
    ],
  },
  timesheets: {
    seoTitle: "Timesheet Software: Project Time & Utilisation | NeevHR",
    metaDesc:
      "Timesheet software for Indian companies: weekly time against assigned projects, approval chains, reminders and lock windows, and billable utilisation reports.",
    workflow: [
      { step: "Configure", body: "Choose off, optional or mandatory mode, cadence, due day, lock window and hour limits." },
      { step: "Log time", body: "Employees fill a weekly grid against projects they are assigned to." },
      { step: "Submit", body: "Submitted timesheets route through the approval chain, by default the manager." },
      { step: "Approve", body: "Approvers approve or reject; late submissions after the lock window are refused." },
    ],
    benefits: [
      "Utilisation and billable split by project and person",
      "Managers see only their own team",
      "Reminders cut chasing for missing timesheets",
    ],
    whoUses: [
      { role: "Employees", does: "Log weekly time." },
      { role: "Managers", does: "Approve their team's timesheets." },
      { role: "Delivery and finance leads", does: "Review utilisation." },
    ],
    faqs: [
      {
        q: "Do timesheets feed payroll?",
        a: "No. Timesheets are kept separate from payroll; attendance drives pay.",
      },
      {
        q: "Does NeevHR create client invoices?",
        a: "No. It captures and reports time; invoicing stays in your billing system.",
      },
    ],
  },
  projects: {
    seoTitle: "Project Master for Timesheets | NeevHR",
    metaDesc:
      "Project master for timesheets: clients, billable flag, bill and cost rates, budget hours and members, with active, on-hold and closed status.",
    workflow: [
      { step: "Create", body: "Add code, client, billable flag, rates, budget and members." },
      { step: "Book time", body: "Only members can log time against the project." },
      { step: "Close", body: "Move to on hold or closed; closed projects keep their timesheet history." },
    ],
    benefits: [
      "Membership keeps time on the right projects",
      "Non-billable projects cannot carry a bill rate",
      "History preserved when projects close",
    ],
    whoUses: [{ role: "Delivery managers", does: "Maintain projects and members." }],
    faqs: [
      {
        q: "Does NeevHR manage project tasks?",
        a: "No. Projects exist to organise time capture; tasks and milestones stay in your project tool.",
      },
    ],
  },
  "variable-pay": {
    seoTitle: "Variable Pay & Statutory Bonus Software | NeevHR",
    metaDesc:
      "Variable pay and statutory bonus: incentive plans, limits and approvals before payroll, CSV uploads, and an annual bonus run at 8.33% to 20% with Forms A, B, C and D.",
    workflow: [
      { step: "Configure", body: "Set components, frequency, minimum and maximum limits and the approval chain." },
      { step: "Assign", body: "Assign singly, in bulk or by CSV, with achievement percentage." },
      { step: "Approve", body: "Limits are rechecked at every approval stage." },
      { step: "Pay", body: "Approved amounts flow into that month's payroll." },
    ],
    benefits: [
      "Nothing reaches payroll without approval",
      "Incentives kept out of PF, ESI and PT wages",
      "Statutory bonus run nets off bonus already paid in F&F",
    ],
    whoUses: [
      { role: "Compensation and payroll", does: "Configure plans and run bonus." },
      { role: "Sales and business leads", does: "Upload incentive achievement." },
    ],
    faqs: [
      {
        q: "Does the statutory bonus run follow the eligibility rules?",
        a: "Yes. It applies the ₹21,000 eligibility limit, the 30-day minimum service, the ₹7,000 or minimum-wage calculation ceiling and the 8.33% to 20% range, and produces Forms A, B, C and D.",
      },
      {
        q: "Is incentive achievement pulled from performance goals?",
        a: "No. Achievement is entered or uploaded, or taken from the plan default.",
      },
    ],
  },
  benefits: {
    seoTitle: "Employee Benefits & Flexible Benefit Plan (FBP) Software | NeevHR",
    metaDesc:
      "Employee benefits and FBP: group medical, accident and term life plans, enrolment windows, endorsement approvals, and flexible benefit declarations with verified proofs.",
    workflow: [
      { step: "Define plans", body: "Set up GMC, GPA, GTL and wellness plans with eligibility and dependent limits." },
      { step: "Enrol", body: "Employees enrol in the window, or HR enrols them singly or in bulk." },
      { step: "Endorse", body: "Dependent changes are raised as endorsements and approved." },
      { step: "FBP", body: "Employees declare FBP amounts and upload proof; only verified proof reduces taxable pay." },
    ],
    benefits: [
      "Employee premium share deducted in payroll",
      "Enrolments end automatically at exit",
      "FBP exemption prorated to months on payroll",
    ],
    whoUses: [
      { role: "HR and benefits", does: "Run plans, windows and approvals." },
      { role: "Employees", does: "Enrol, add dependants and declare FBP." },
    ],
    faqs: [
      {
        q: "Does NeevHR send endorsements to the insurer automatically?",
        a: "No. Approved endorsements are queued for your insurer, and HR shares them with the insurer or TPA.",
      },
    ],
  },
  learning: {
    seoTitle: "Learning Management & Compliance Training Software | NeevHR",
    metaDesc:
      "Learning management for Indian companies: e-learning courses with quizzes, mandatory compliance training with due dates, certificates with verification, and training plans.",
    workflow: [
      { step: "Build", body: "L&D builds a course with sections, lessons and quizzes." },
      { step: "Publish", body: "Mandatory courses enrol their audience automatically with a due date." },
      { step: "Learn", body: "Employees enrol or are nominated by their manager, and track progress." },
      { step: "Certify", body: "Completing with a pass issues a PDF certificate with a verification link." },
    ],
    benefits: [
      "Compliance completion by department, with overdue tracking",
      "Skills earned from courses feed succession views",
      "Expiring certificates visible in advance",
    ],
    whoUses: [
      { role: "L&D", does: "Build courses and track completion." },
      { role: "Managers", does: "Nominate team members." },
      { role: "Employees", does: "Complete courses and download certificates." },
    ],
    faqs: [
      {
        q: "Does NeevHR support SCORM content?",
        a: "No. Courses are built in NeevHR with video by link, reading and quizzes.",
      },
    ],
  },
  succession: {
    seoTitle: "Succession Planning Software: Critical Roles & Benches | NeevHR",
    metaDesc:
      "Succession planning: critical roles with risk, ranked successor benches, readiness from performance ratings, calibration sessions, talent pools and a nine-box grid.",
    workflow: [
      { step: "Mark critical roles", body: "Record the incumbent and risk level." },
      { step: "Nominate", body: "Build a ranked bench of planned, emergency and interim successors." },
      { step: "Assess readiness", body: "Readiness is suggested from released ratings and can be overridden by assessment." },
      { step: "Calibrate and act", body: "Sign off in calibration sessions, then promote a ready successor or raise a backfill requisition." },
    ],
    benefits: [
      "Nine-box built only from real ratings",
      "Skills heatmap includes skills earned in learning",
      "Sensitive fields hidden from users without PII access",
    ],
    whoUses: [
      { role: "HR and talent leaders", does: "Run benches and calibration." },
      { role: "Leadership", does: "Review readiness and risk." },
    ],
    faqs: [
      {
        q: "Does promoting a successor change their pay?",
        a: "Promotion creates a designation change. Pay changes go through compensation as a separate revision.",
      },
    ],
  },
  engagement: {
    seoTitle: "Employee Engagement Software: Kudos & Announcements | NeevHR",
    metaDesc:
      "Employee engagement: targeted announcements with read receipts, peer kudos with badges and reactions, birthdays and anniversaries, and eNPS from real survey responses.",
    workflow: [
      { step: "Announce", body: "Post to everyone or a chosen audience with an expiry; read receipts show reach." },
      { step: "Recognise", body: "Employees give kudos with a badge and choose who can see it." },
      { step: "React", body: "Colleagues react with emoji, and the recipient is notified." },
      { step: "Measure", body: "eNPS and pulse scores come from survey responses." },
    ],
    benefits: [
      "Announcements reach the right audience",
      "Recognition visibility respects each audience choice",
      "No self-kudos",
    ],
    whoUses: [
      { role: "HR and internal comms", does: "Publish announcements." },
      { role: "Employees", does: "Give and receive kudos." },
    ],
    faqs: [
      {
        q: "Does kudos include points or rewards?",
        a: "No. Kudos is recognition with badges and reactions; there are no points or redemption.",
      },
    ],
  },
  surveys: {
    seoTitle: "Employee Survey & eNPS Software | NeevHR",
    metaDesc:
      "Employee surveys and eNPS: rating, Likert, choice and text questions, department targeting, an anonymity threshold for small groups, and per-question analytics.",
    workflow: [
      { step: "Build", body: "Add eNPS, rating, Likert, choice or text questions and choose departments." },
      { step: "Launch", body: "The audience is frozen and invitations go out." },
      { step: "Respond", body: "Employees answer once in self-service." },
      { step: "Analyse", body: "Close the survey and review per-question, eNPS and department results." },
    ],
    benefits: [
      "Segments below the anonymity threshold are suppressed",
      "The threshold cannot be lowered after launch",
      "Response rate tracked live",
    ],
    whoUses: [
      { role: "HR", does: "Design and run surveys." },
      { role: "Employees", does: "Respond in self-service." },
    ],
    faqs: [
      {
        q: "Are survey responses anonymous?",
        a: "Results are shown in aggregate, and groups smaller than the threshold are hidden. Responses are stored against the respondent and masked when read, so this is confidential rather than fully anonymous.",
      },
    ],
  },
  helpdesk: {
    seoTitle: "HR Helpdesk Ticketing Software with SLAs | NeevHR",
    metaDesc:
      "HR helpdesk ticketing: categorised tickets with SLA due times, first-response and resolution tracking, automatic escalation, canned responses and a knowledge base.",
    workflow: [
      { step: "Raise", body: "Employees raise a ticket with category, priority and custom fields; the SLA clock starts." },
      { step: "Assign", body: "HR or IT assigns the ticket." },
      { step: "Resolve", body: "Agents reply and move it through in progress, waiting and resolved." },
      { step: "Escalate", body: "Overdue tickets escalate automatically up the L1, L2, L3 ladder." },
    ],
    benefits: [
      "SLA breaches recorded permanently",
      "Knowledge base reduces repeat questions",
      "Room and vehicle booking with clash checks",
    ],
    whoUses: [
      { role: "Employees", does: "Raise and track tickets." },
      { role: "HR and IT agents", does: "Resolve within SLA." },
    ],
    faqs: [
      {
        q: "Can employees raise tickets by email?",
        a: "No. Tickets are raised in NeevHR self-service.",
      },
    ],
  },
  travel: {
    seoTitle: "Business Travel Request & Approval Software | NeevHR",
    metaDesc:
      "Business travel requests with grade-based entitlement checks, multi-stage approvals, travel desk booking references and estimated versus actual cost from expense claims.",
    workflow: [
      { step: "Request", body: "Employees raise a trip by type and band." },
      { step: "Check entitlement", body: "Ineligible trips are blocked and over-cap costs flagged." },
      { step: "Approve", body: "A multi-stage chain approves or rejects; requesters cannot approve their own trips." },
      { step: "Book", body: "The travel desk books and records the PNR or voucher reference." },
    ],
    benefits: [
      "Entitlement enforced at request time",
      "Actual cost reconciled from linked expense claims",
      "Duplicate-request guard",
    ],
    whoUses: [
      { role: "Employees", does: "Request travel." },
      { role: "Approvers and travel desk", does: "Approve and book." },
    ],
    faqs: [
      {
        q: "Does NeevHR book tickets online?",
        a: "No. The travel desk books through your usual channel and records the reference in NeevHR.",
      },
    ],
  },
  assets: {
    seoTitle: "Employee Asset Management Software | NeevHR",
    metaDesc:
      "Employee asset management: register assets, handle requests and approvals, issue, return, repair and retire, with depreciation, warranty tracking and recovery at exit.",
    workflow: [
      { step: "Register", body: "Add assets singly or by CSV into stock." },
      { step: "Request and issue", body: "Employees request assets; approved requests are issued or reserved for a joiner." },
      { step: "Maintain", body: "Return, reassign, repair or retire, each logged as an event." },
      { step: "Recover at exit", body: "Unreturned assets block settlement by default." },
    ],
    benefits: [
      "Custody history for every asset",
      "Straight-line depreciation and warranty expiry list",
      "Damage recovery through payroll during employment",
    ],
    whoUses: [
      { role: "IT and admin", does: "Manage stock and issue assets." },
      { role: "Employees", does: "Request and hold assets." },
    ],
    faqs: [
      {
        q: "Does NeevHR support QR code asset tags?",
        a: "No. Assets are tracked by record and serial details, not QR or barcode scanning.",
      },
    ],
  },
  "full-and-final-settlement": {
    seoTitle: "Full and Final Settlement Software (F&F) India | NeevHR",
    metaDesc:
      "Full and final settlement software: F&F worksheet with final salary, leave encashment, gratuity, bonus and recoveries, statutory deductions, and payment through payroll.",
    workflow: [
      { step: "Resignation approved", body: "The exit moves through its approval chain and notice period." },
      { step: "Clearance", body: "Departments complete clearance tasks, in sequence or in parallel." },
      { step: "Final sign-off", body: "The final authority signs off once mandatory clearance is complete." },
      { step: "Worksheet", body: "Earnings, recoveries and statutory deductions are computed on the F&F worksheet." },
      { step: "Settle", body: "Settlement posts to a full and final payroll run, so the register, ECR, TDS challan, Form 24Q and Form 16 include the leaver." },
    ],
    benefits: [
      "No separate spreadsheet for F&F",
      "Loans, assets and leave updated in the same step",
      "Gratuity forfeiture only through an approved request, for termination for cause",
    ],
    whoUses: [
      { role: "HR", does: "Runs the exit and settles." },
      { role: "Department owners", does: "Clear their items." },
      { role: "Payroll and finance", does: "Pay and account for the settlement." },
    ],
    faqs: [
      {
        q: "What does the F&F worksheet include?",
        a: "Salary to the last working day, leave encashment, gratuity if eligible, pro-rata bonus, severance and unpaid approved expenses, less notice shortfall, loans, unreturned assets, excess salary, final-month LOP and statutory deductions including TDS.",
      },
      {
        q: "How soon must F&F be paid?",
        a: "The Code on Wages, 2019, in force from 21 November 2025, requires wages to be paid within two working days of separation. Set your F&F due days to match.",
      },
      {
        q: "Are relieving and experience letters generated?",
        a: "Yes. The relieving letter is available after F&F is posted and the experience certificate from the last working day, generated for printing. The F&F statement is a PDF.",
      },
    ],
  },
};
