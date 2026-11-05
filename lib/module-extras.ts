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
  /** H1 with the category search term; the module's slogan title then shows as the subhead. */
  h1?: string;
  /** India-specific context shown in place of the shared platform band. */
  india?: { title: string; intro: string; points: { t: string; b: string }[] };
};

export const moduleExtras: Record<string, ModuleExtra> = {
  employees: {
    seoTitle: "Employee Management Software for Indian Companies | NeevHR",
    metaDesc:
      "Employee management software with one effective-dated employee record: job, pay, statutory IDs, documents and history, reportable as of any date. Built for Indian companies.",
    workflow: [
      { step: "Create", body: "Add employees individually, by CSV import with dry-run validation, or from an accepted offer." },
      { step: "Change", body: "Record promotions, transfers and revisions, each saved with its date, singly or in bulk." },
      { step: "Govern", body: "Sensitive changes such as bank or statutory details need a second person to approve them." },
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
      { q: "Which statutory details does the employee record hold?", a: "PAN, Aadhaar, UAN, ESI number and bank details, encrypted at field level, plus the PF and ESI settings that payroll uses." },
      { q: "Can we see the organisation as it was on a past date?", a: "Yes. Because every change is saved with its date, headcount, master reports and the org chart can be produced as of any date." },
      { q: "Who can see salary and identity data?", a: "Only roles you allow. Access follows data scopes by entity, location or department, and sensitive fields are masked for everyone else." },
    ],
    h1: "Employee management software for Indian companies",
    india: {
      title: "Built for Indian employee records",
      intro: "An Indian employee record carries statutory identity as well as job and pay: PAN, Aadhaar, UAN, ESI number and bank details, the PF and ESI coverage that follows from them, and the dated history auditors and courts ask for.",
      points: [
        { t: "Statutory identity", b: "PAN, Aadhaar, UAN, ESI number and bank details are held once, encrypted at field level and masked for roles that do not need them." },
        { t: "Full change history", b: "Promotions, transfers and pay changes are saved with their dates, so registers and reports can be produced as they stood on any date." },
        { t: "Several entities", b: "One person can move between legal entities with their own registrations while keeping one record and one UAN." },
        { t: "Retention", b: "Records stay available for the periods labour and tax law require after an employee leaves." },
      ],
    },
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
      { q: "Does onboarding capture UAN and bank details?", a: "Yes. Joiners enter statutory and bank details in their onboarding tasks, and they land in the employee record that payroll uses." },
      { q: "Can an accepted offer start the onboarding journey?", a: "Yes. An accepted offer creates the joining journey, so details from recruitment are not keyed in again." },
      { q: "Can we issue the appointment letter from NeevHR?", a: "Yes. Letters are generated from templates with the joiner's details, ready to sign and share." },
      { q: "Can a buddy or IT team get tasks before day one?", a: "Yes. Pre-join tasks can go to HR, the manager, IT or a buddy, with due dates before the joining date." },
    ],
    h1: "Employee onboarding software for Indian companies",
    india: {
      title: "What Indian onboarding has to capture",
      intro: "A joiner in India brings statutory details that payroll needs in the first month: PAN, Aadhaar, the existing UAN or the steps to generate one, bank details, and the declarations and nominations that go with PF and ESI. The OSH Code, 2020 also requires an appointment letter for every employee.",
      points: [
        { t: "UAN before the first payroll", b: "Collect the existing UAN, or share the face-authentication steps so the joiner generates one before day one; the first ECR needs it." },
        { t: "Identity and bank details", b: "PAN, Aadhaar and bank details captured once, encrypted and masked, and checked before they reach payroll." },
        { t: "Appointment letter", b: "Issue the appointment letter the OSH Code requires, with the probation terms written in." },
        { t: "Policies acknowledged", b: "Joiners read and accept the policies that apply to them, with the acknowledgement recorded." },
      ],
    },
  },
  attendance: {
    seoTitle: "Attendance Management Software India | NeevHR",
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
        q: "Can employees punch by QR code?",
        a: "Yes. Scan QR is built into the NeevHR mobile app. Set up a punch point as a kiosk tablet whose code changes every 30 seconds, or a printed poster in English and Hindi, with a geofence per point.",
      },
      {
        q: "Can employees correct missed punches?",
        a: "Yes. Employees raise regularisation requests that route for approval, and auto-regularisation rules can handle common cases.",
      },
      {
        q: "How does attendance affect payroll?",
        a: "Closed attendance produces LOP days and approved overtime, which payroll reads directly.",
      },
      { q: "Does NeevHR apply the OSH Code overtime rules?", a: "Overtime rules are configured per group: when overtime starts, the rate (twice the ordinary rate for workers under the OSH Code) and an optional quarterly cap from your state's rules. Approved overtime flows into payroll." },
      { q: "Can attendance work for field staff?", a: "Yes. Field staff can mark attendance with geofencing, alongside biometric devices at sites and web check-in for office staff." },
      { q: "Can we set a grace period for late arrival?", a: "Yes. Grace, half-day and short-day thresholds are part of the shift rules, applied the same way for everyone in the group." },
    ],
    h1: "Attendance management software for Indian companies",
    india: {
      title: "Attendance rules in India, built in",
      intro: "Since 21 November 2025 working hours, overtime and leave for workers are governed by the OSH Code, 2020, with the details in state rules; shops and offices also follow their state Shops and Establishments Act. Attendance has to apply those rules before payroll does.",
      points: [
        { t: "Daily and weekly limits", b: "No worker works more than 8 hours a day under the OSH Code; weekly limits and spread-over follow your state's rules." },
        { t: "Overtime at twice the rate", b: "Overtime is paid at twice the ordinary rate with the worker's consent, within the quarterly cap your state notifies." },
        { t: "Weekly holiday", b: "At least one day off in seven, with rosters checked before they are published." },
        { t: "Pay at risk before payroll", b: "Missing punches and unjustified absences surface while there is still time to regularise them, so loss of pay is never a surprise." },
      ],
    },
  },
  leave: {
    seoTitle: "Leave Management Software India | NeevHR",
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
      { q: "Can we apply a sandwich rule?", a: "Yes, per leave type: choose whether weekly offs and holidays between leave days count as leave, so the rule is explicit rather than decided case by case." },
      { q: "Does NeevHR handle comp-off?", a: "Yes. Comp-off can be set up as a leave type earned for working a holiday or weekly off, with its own validity and approval." },
      { q: "Can leave policies differ by state or location?", a: "Yes. Policies are assigned to employee groups, so a plant in one state and an office in another can follow different minimums and holiday calendars." },
      { q: "How does unpaid leave reach payroll?", a: "Approved leave without pay and unregularised absences become loss of pay days in the month's payroll, which reduce both pay and the PF and ESI base." },
    ],
    h1: "Leave management software for Indian companies",
    india: {
      title: "Leave rules in India, built in",
      intro: "India has no single leave law for private employers. Minimum leave comes from the OSH Code, 2020 for factories and covered establishments, from state Shops and Establishments Acts for shops and offices, and from the Code on Social Security, 2020 for maternity. Company policy sits on top and must not fall below them.",
      points: [
        { t: "Annual leave under the OSH Code", b: "A worker who has worked 180 days in a calendar year earns one day of leave for every 20 days worked (the Factories Act needed 240 days)." },
        { t: "Maternity", b: "26 weeks for the first two children, 12 weeks from the third child and for adoption or surrogacy, after 80 days of work in the preceding 12 months." },
        { t: "State minimums", b: "Shops and Establishments Acts set earned, casual and sick leave minimums that differ by state, so policies can differ by location." },
        { t: "Encashment tax", b: "Earned leave encashed at exit is exempt up to ₹25 lakh under section 19(1) of the Income-tax Act, 2025." },
      ],
    },
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
    seoTitle: "PF, ESI, PT, TDS Compliance Software India | NeevHR",
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
        a: "A careers page, yes. Each company can switch on a public careers page and take applications from its own website into Recruitment; only openings you publish appear, and it is not an embedded frame. Your web team can also use the openings feed, or send applications with an API key, with WordPress field mapping and a developer guide. Job-board posting is not available.",
      },
      {
        q: "Can employees apply for internal jobs?",
        a: "Yes, once a recruiter turns it on. You set who is eligible, whether the current manager is informed or must approve, and whether applications are confidential. Selecting an employee raises a job change or transfer on their existing record, not a new employee.",
      },
      {
        q: "Does NeevHR support background verification?",
        a: "Yes. Background verification can be tracked as part of the candidate process.",
      },
      { q: "Does NeevHR have a careers website?", a: "Yes. Openings can be published on a careers page where candidates apply directly into the pipeline." },
      { q: "Can NeevHR read resumes?", a: "Yes. Resumes are parsed into candidate fields, and where AI is switched on a resume match suggests fit against the job. The recruiter decides; nothing is rejected automatically." },
      { q: "Can interviewers give structured feedback?", a: "Yes. Panels score candidates on scorecards per round, and the feedback stays with the candidate's record." },
    ],
    h1: "Recruitment software and applicant tracking for Indian companies",
    india: {
      title: "Hiring the way Indian companies hire",
      intro: "Indian hiring runs through requisitions with budget approval, high applicant volumes from job portals, referrals and campus drives, notice periods of 30 to 90 days that cause offer dropouts, and background verification before joining.",
      points: [
        { t: "Approved requisitions", b: "Every opening starts from a requisition checked against the approved headcount and budget." },
        { t: "Volume and sources", b: "Candidates from the careers page, referrals and agencies in one pipeline, with source tracked for cost per hire." },
        { t: "Long notice periods", b: "Offers carry the approved compensation and the joining date, so dropout risk during notice is visible." },
        { t: "Hand-over to onboarding", b: "An accepted offer becomes the onboarding journey and the employee record, with nothing re-keyed." },
      ],
    },
  },
  performance: {
    seoTitle: "Performance Management Software India | NeevHR",
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
        a: "No. NeevHR shows how ratings are distributed, as a bell curve, to support calibration; it does not force ratings into a set distribution.",
      },
      {
        q: "Does NeevHR support 360 feedback?",
        a: "Yes. Peer, manager and report reviewers can be nominated for 360 feedback.",
      },
      {
        q: "Does NeevHR support 1:1 meetings?",
        a: "Yes. Managers run recurring 1:1s with a shared agenda that carries over, private notes, action items and a mood check-in, and HR sees a coverage report.",
      },
      { q: "Can goals cascade from company to team?", a: "Yes. Company objectives can cascade to departments and individuals, with weighted goals that must add up to 100%." },
      { q: "How do ratings reach increments?", a: "At final sign-off the rating sets the increment through your merit grid, and the approved increment is applied in compensation and payroll." },
      { q: "Can employees see their own review?", a: "Yes, when the cycle releases it. Employees see their goals, self-review and the final outcome in self-service." },
    ],
    h1: "Performance management software for Indian companies",
    india: {
      title: "How appraisal cycles run in Indian companies",
      intro: "Most Indian companies run one annual appraisal aligned to the financial year, with increments from April. The cycle has to link goals, reviews, calibration and the increment decision, so ratings can be defended when an increment is questioned.",
      points: [
        { t: "Financial-year cycle", b: "Goals set at the start of the year, mid-year and annual reviews, and increments effective from April or your cycle date." },
        { t: "Calibration", b: "Rating distribution and a 9-box view across departments, without forcing a bell curve." },
        { t: "Increment link", b: "Final ratings reprice increments at sign-off and flow into compensation and payroll." },
        { t: "Development", b: "360 feedback and development plans built on the same record." },
      ],
    },
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
  "process-studio": {
    seoTitle: "HR Workflow Builder Without Code | NeevHR Process Studio",
    metaDesc: "Process Studio lets your HR admin design HR flows from 32 templates, with notices, time limits, rules and letters, and test them before publishing.",
    workflow: [
      { step: "Pick", body: "Start from a template or a blank flow." },
      { step: "Shape", body: "Set the steps, approvers, conditions and time limits." },
      { step: "Test", body: "Run a test that explains each branch by field name." },
      { step: "Publish", body: "Check readiness, then publish it for your people." },
    ],
    benefits: ["New processes without a code change", "A test run before anyone is affected", "Time limits remind, then escalate"],
    whoUses: [
      { role: "HR admin", does: "Designs, tests and publishes flows." },
      { role: "Employees", does: "Start published flows from self-service." },
    ],
    faqs: [
      { q: "Do we need a developer?", a: "No. Flows are built from templates and a simple designer by your HR admin." },
      { q: "Which edition has it?", a: "Process Studio is part of the Enterprise edition." },
    ],
  },
  "alumni-portal": {
    seoTitle: "Alumni Portal for Former Employees | NeevHR",
    metaDesc: "Former employees sign in with a personal email and download their own payslips, Form 16 and full and final statement from the NeevHR alumni portal.",
    workflow: [
      { step: "Exit", body: "The employee's exit completes in NeevHR." },
      { step: "Sign in", body: "They use the alumni portal with a personal email." },
      { step: "Download", body: "Payslips, Form 16 and the full and final statement." },
    ],
    benefits: ["Fewer document requests reach HR", "Former employees reach only their own records"],
    whoUses: [
      { role: "Former employees", does: "Download their own documents." },
      { role: "HR", does: "Sets it per legal entity." },
    ],
    faqs: [{ q: "What does a former employee need?", a: "A personal email on their record, because the work login has ended." }],
  },
  "manager-self-service": {
    seoTitle: "Manager Self-Service in HRMS | NeevHR",
    metaDesc: "My Team, one approvals Inbox, delegation, acting on behalf and email approvals give managers one place to run their team in NeevHR.",
    workflow: [
      { step: "See", body: "My Team shows who is out and what is coming." },
      { step: "Decide", body: "One Inbox holds every approval waiting for the manager." },
      { step: "Hand over", body: "Delegate approvals while away." },
    ],
    benefits: ["Approvals stop getting lost across modules", "Requests keep moving when a manager is away"],
    whoUses: [
      { role: "Managers", does: "Run their team and decide requests." },
      { role: "HR", does: "Sets what managers may approve." },
    ],
    faqs: [
      { q: "Can managers approve from email?", a: "Yes, once a Company Admin switches it on. They confirm on a page before anything is decided. Pay, F&F, offers and bank changes always need sign-in." },
      { q: "Is this on mobile?", a: "On the web, including a phone browser. Attendance, leave, payslips and approvals are also built into the NeevHR mobile app." },
    ],
  },
  "income-tax": {
    seoTitle: "Income Tax Declaration and TDS Software | NeevHR",
    metaDesc: "Employee tax declarations and proofs under the old and new regime, with a submission tracker, reminders, proof review and a tax ledger in NeevHR.",
    workflow: [
      { step: "Declare", body: "Employees declare and choose a regime in the window." },
      { step: "Prove", body: "They upload proofs, and HR accepts or sends back." },
      { step: "Compute", body: "Payroll projects TDS from what is declared and proved." },
    ],
    benefits: ["See who has not submitted without a spreadsheet", "Each person's TDS can be explained from the ledger"],
    whoUses: [
      { role: "Employees", does: "Declare and upload proofs." },
      { role: "Payroll team", does: "Tracks, reviews and runs TDS." },
    ],
    faqs: [{ q: "Are both tax regimes covered?", a: "Yes. TDS is projected under the regime the employee chooses." }],
  },
  "ai-assistant": {
    seoTitle: "AI in HRMS and Payroll Software India | NeevHR",
    metaDesc:
      "NeevHR is fully AI enabled: AI inside each module for resumes, payroll flags, receipts, tax proofs and helpdesk replies, plus an assistant within each person's role. A person decides.",
    workflow: [
      { step: "Switch on", body: "NeevHR switches it on for your company, module by module, and your AI admin can turn a module off. Your Company Admin has it from the start." },
      { step: "Choose people", body: "Your admin decides who may use it. Each person reads a notice on what is sent before first use." },
      { step: "Ask or work", body: "People ask in plain words, or see a suggestion on the record they are working on, with the same permissions they have on screen." },
      { step: "Confirm", body: "Anything that would change a record comes back as a review card, and only the person's confirmation carries it out." },
    ],
    benefits: [
      "Routine questions get answered without waiting for HR",
      "A stuck payroll or approval names the real cause and who can fix it",
      "No per-employee AI fee: your company buys prepaid credits and uses them as needed",
      "AI works on the module's own screen, and the same input is never charged twice",
    ],
    whoUses: [
      { role: "Employees", does: "Ask about their own leave, attendance, payslip and requests." },
      { role: "Managers", does: "See who is on leave and what is waiting, and review decisions by name." },
      { role: "HR and payroll", does: "Find out what is blocking a run or an approval, and why someone cannot see something." },
      { role: "Recruiters, agents and approvers", does: "See resume, ticket and proof suggestions on the record they already work on." },
      { role: "Company Admin", does: "Decide who may use it, watch the credit balance and read the usage report." },
    ],
    faqs: [
      {
        q: "Can someone use it to see another person's salary?",
        a: "No. It never gives another person's individual pay, for any role, whoever asks. Company pay appears only as totals, and small groups are hidden so nobody's pay can be worked out.",
      },
      {
        q: "Can an employee find out why a colleague cannot see something?",
        a: "No. Each check follows the permission of the screen behind it. Only people who manage users or roles can check another person's access. Anyone else is told to ask their HR admin.",
      },
      {
        q: "What data goes to the AI provider?",
        a: "The provider is Anthropic, which may process data outside India. For the assistant: the question and the record data needed to answer it; its tools do not read bank account, IFSC, PAN, Aadhaar, UAN, ESI number, address, health or disciplinary data. For a module's AI, when your company switches it on: cleaned resume text, and uploaded receipts or proofs as whole files. A file can contain what is printed on it, so it can show a name, PAN or account number. Proofs on the health-related lines (80D, 80DD, 80DDB, 80U) are not sent. The table on this page lists each feature.",
      },
      {
        q: "Does AI decide anything by itself?",
        a: "No. It never rejects, approves, pays or changes a record. Each result is labelled as an AI suggestion, and a person uses it or ignores it.",
      },
      {
        q: "Are we charged again when a page is opened or nothing has changed?",
        a: "No. Nothing calls the model when a page opens, and the same record with the same input reuses the stored result at no charge. Some features run by themselves once switched on, such as resume match when an application arrives; these use credits and have a monthly limit per feature.",
      },
      {
        q: "Is every AI feature on by default?",
        a: "No. NeevHR switches a module's AI on for your company, and your AI admin can turn it off. With it off, the screen is the normal complete screen, with nothing about AI.",
      },
      {
        q: "Can our HR team read employees' questions?",
        a: "No. The usage report shows how many questions a person asked and the credits used, never the questions or the answers.",
      },
      {
        q: "How is it charged?",
        a: "Your company buys prepaid credits. Each answer uses credits according to its length, and only the company recharges, never the employee. See the pricing page.",
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
      "As-of-date master reports from full change history",
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
    seoTitle: "Exit Management and F&F Settlement Software | NeevHR",
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
        a: "Not as a draft scenario. Structure changes in NeevHR apply to the live org, each saved with its date.",
      },
    ],
  },
  positions: {
    seoTitle: "Position Management Software: Seats & Budget | NeevHR",
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
    seoTitle: "Workforce Planning Software: Headcount Plan | NeevHR",
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
      "Field force tracking for Indian field teams: consent-based location during duty hours, geofences, alerts and time-in-boundary reports. Runs from the NeevHR mobile app.",
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
        a: "Field tracking runs from the NeevHR mobile app, which is built. Supervisors see the team map on the web.",
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
    seoTitle: "Employee Benefits and FBP Software India | NeevHR",
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
    seoTitle: "Succession Planning Software India | NeevHR",
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
      {
        q: "Can employees rate the help they got?",
        a: "Yes, once a supervisor enables it. Employees rate a ticket when it closes, a low rating raises an alert, and a report shows satisfaction over time. Agents can also keep internal notes the employee does not see.",
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
        a: "Yes. You can print QR labels for your assets, and scanning one opens the asset for someone with access.",
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
  "development-plans": {
    seoTitle: "Individual Development Plan Software India | NeevHR",
    metaDesc: "Employee development plans with focus areas, actions, manager approval and check-ins, linked to appraisals, 360 feedback, learning, skills and 1:1s in NeevHR.",
    workflow: [
      { step: "Start", body: "From a released appraisal, a 360 round or a blank plan, with skill gaps offered as focus areas." },
      { step: "Agree", body: "The manager approves or sends it back, and course actions enrol the person on approval." },
      { step: "Do", body: "Update actions, check in with a note and discuss them in the 1:1." },
      { step: "Close", body: "Finished courses complete their actions, and the manager closes the plan." },
    ],
    benefits: ["A rating leads to something the person will actually do", "Courses, skills and 1:1s stay linked instead of living in separate sheets", "HR sees plans by status and department in one register"],
    whoUses: [
      { role: "Employees", does: "Draft their plan, update actions and check in." },
      { role: "Managers", does: "Start, approve, send back and close plans for their team." },
      { role: "HR", does: "See plans within their scope, with the report and settings." },
    ],
    faqs: [
      { q: "What is an individual development plan?", a: "A written plan for one person: what they will grow in, the actions they will take, by when, and who agrees it." },
      { q: "Is a development plan the same as a PIP?", a: "No. A PIP deals with a performance gap and has its own register. A closed PIP can lead to a development plan, and the two stay separate." },
      { q: "Will an employee learn they are a successor from their plan?", a: "No. An employee's view never shows a talent or succession source." },
    ],
  },
  "360-feedback": {
    seoTitle: "360 Degree Feedback Software India | NeevHR",
    metaDesc: "360 degree feedback with question sets, competencies, standalone rounds, reminders and anonymity on every cut, linked to appraisals and development plans in NeevHR.",
    workflow: [
      { step: "Set up", body: "Use the standard question set, or add your own by competency." },
      { step: "Invite", body: "The manager or HR picks reviewers, and a person can propose them." },
      { step: "Answer", body: "Reviewers answer on the web or in the app, with reminders before the date." },
      { step: "Use", body: "Combined results feed the appraisal and suggest focus areas for a development plan." },
    ],
    benefits: ["Figures stay hidden below the anonymity threshold you set, which helps reviewers be candid", "Works with nothing to configure", "Results lead to a development action, not just a score"],
    whoUses: [
      { role: "Managers", does: "Run rounds for their team and read combined results." },
      { role: "HR", does: "Sets question sets, the scale and the threshold, and reads reports." },
      { role: "Reviewers", does: "Answer on the web or in the app." },
    ],
    faqs: [
      { q: "How is anonymity protected?", a: "The server holds back averages, competency figures and comments until the threshold is met, including for groups. With a low threshold and very few reviewers, people may still guess, so a higher threshold protects more." },
      { q: "Can managers see who said what?", a: "No. Managers and HR see who was asked and whether they answered, not their rating or comment." },
      { q: "Does the employee see their result?", a: "Not by default. A company can choose to show the combined result after release." },
    ],
  },
  "goal-cascade": {
    seoTitle: "OKR and Goal Cascade Software India | NeevHR",
    metaDesc: "Link company, team and personal goals with key results and rolled-up progress for each review cycle, on one employee record in NeevHR.",
    workflow: [
      { step: "Set", body: "HR adds one to three company objectives for the review cycle." },
      { step: "Cascade", body: "Add team objectives with a department and an owner." },
      { step: "Link", body: "Link each person's goal to the objective it supports." },
      { step: "Measure", body: "Update key results, and progress rolls up the tree." },
    ],
    benefits: ["People see how their goal supports the company's", "HR sees which goals support nothing", "Progress comes from the work recorded, each item counting once"],
    whoUses: [
      { role: "HR", does: "Builds the cascade for each cycle." },
      { role: "Objective owners", does: "Update their objective and its key results." },
      { role: "Employees", does: "See the objectives and add key results to their goal." },
    ],
    faqs: [
      { q: "Is this OKR?", a: "Yes, in the way most companies use it: objectives with measurable key results, cascaded from company to team to person." },
      { q: "Does it replace performance goals?", a: "No. It links the goals you already set in Performance to objectives. Linking does not change a goal, so it is not sent for acceptance again." },
    ],
  },
  disciplinary: {
    seoTitle: "Disciplinary Case Management Software India | NeevHR",
    metaDesc: "Run show-cause notices, charge sheets, replies, domestic inquiries and outcomes as one dated case in NeevHR, under its own permission, with no AI.",
    workflow: [
      { step: "Open", body: "Open a case with the allegation, category and severity." },
      { step: "Notice", body: "Issue a show-cause notice or charge sheet, and the employee is told." },
      { step: "Inquiry", body: "Take the reply, name the officer and record the findings." },
      { step: "Close", body: "Close with an outcome and an order." },
    ],
    benefits: ["One record of what was issued, and when", "A check against dismissal without an inquiry", "Employees read and answer their own notices"],
    whoUses: [
      { role: "HR", does: "Opens and runs cases." },
      { role: "Inquiry officer", does: "Records the inquiry and findings." },
      { role: "Employees", does: "Read notices, acknowledge and reply." },
    ],
    faqs: [
      { q: "Does acknowledging a notice admit anything?", a: "No. It records only that the employee received the notice." },
      { q: "Can the letters be used as they are?", a: "They are starting text filled from the case. Have the wording checked by your adviser." },
      { q: "Does AI read disciplinary cases?", a: "No. Disciplinary cases and letters have no AI features." },
    ],
  },
  posh: {
    seoTitle: "POSH Complaint Management Software India | NeevHR",
    metaDesc: "A confidential POSH complaint route in NeevHR: employees complain from self-service, only the Internal Committee reads the case, and the annual report has no names.",
    workflow: [
      { step: "Set up", body: "Name the Internal Committee and the Local Committee details." },
      { step: "Complain", body: "The employee makes a confidential complaint from self-service." },
      { step: "Decide", body: "The committee admits it, and records conciliation or the inquiry." },
      { step: "Close", body: "The committee records the report, and the employer's action closes the case." },
    ],
    benefits: ["A route that HR and managers cannot read", "Statutory dates shown on each case", "An annual report with counts and no names"],
    whoUses: [
      { role: "Employees", does: "Make a complaint and follow it." },
      { role: "Internal Committee", does: "Runs each case." },
      { role: "Company Admin", does: "Sets up the committee, and cannot read cases." },
    ],
    faqs: [
      { q: "Who can read a complaint?", a: "Only the Internal Committee. HR, the person's manager and Company Admins cannot, and a member who is named in a complaint is kept out of that case." },
      { q: "Does this make us compliant with the POSH Act?", a: "It records the process. Compliance also rests on your committee, policy and conduct of each case, so take your adviser's reading." },
      { q: "Does AI read POSH cases?", a: "No. POSH cases and letters have no AI features." },
    ],
  },
  "approval-channels": {
    seoTitle: "Approve HR Requests in Slack, Teams, WhatsApp | NeevHR",
    metaDesc: "Approvers can decide HR requests from Slack, Microsoft Teams or WhatsApp. Each app is connected per company, with its own setup guide, under the same rule as email approvals.",
    workflow: [
      { step: "Connect", body: "Follow the app's setup guide and enter its details in NeevHR." },
      { step: "Test", body: "Test the connection. Saving new details turns the channel off until it is tested again." },
      { step: "Switch on", body: "A Company Admin switches the app on." },
      { step: "Decide", body: "The approver presses Approve, and the Inbox's own checks run." },
    ],
    benefits: ["Approvers answer where they already are", "No request details beyond who asked and what for", "Money and pay stay inside NeevHR"],
    whoUses: [
      { role: "Company Admin", does: "Connects each app, with whoever manages that service." },
      { role: "Approvers", does: "Approve from the message, or open the request in NeevHR." },
    ],
    faqs: [
      { q: "Do these work without setup?", a: "No. Each app is connected per company, using your own Slack app, Teams bot or WhatsApp Business account, with a setup guide for each in the Help Centre." },
      { q: "Who pays for WhatsApp messages?", a: "Your company, to Meta, on your own WhatsApp Business account." },
      { q: "Can payroll be approved from a chat app?", a: "No. Payroll, pay and anything that needs a second approver can be approved only inside NeevHR. The message shows an Open in NeevHR button." },
    ],
  },
};
