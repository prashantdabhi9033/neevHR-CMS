import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "hrms-for-500-employees",
  title: "HRMS for 500 employees: what a company your size needs",
  excerpt:
    "What changes in HR at around 500 employees in India, the HRMS capabilities that matter at that size, a requirements table and the questions to ask vendors.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `A company of around 500 employees needs an HRMS that runs process, not just stores records: several locations and states, shift teams on biometric devices, managers approving leave and attendance, access that is scoped by role, a formal performance cycle and reports leadership can trust. The system should hold all of this on one employee record, calculate payroll and statutory deductions correctly for every state you operate in, and be implementable in weeks rather than quarters.

This guide explains what actually changes at this size, lists the requirements that matter, and gives you an implementation approach and a set of evaluation questions.

## What changes at around 500 employees

Most companies reach 500 people with tools that were chosen at 50: a payroll spreadsheet or a basic payroll tool, a separate attendance system, email approvals and an employee master in Excel. Each of these works on its own. What breaks is the joins between them, because at 500 the volume and the variety both go up.

### More locations, more states

At this size you usually have a head office plus branches, plants, warehouses or sales offices, often in more than one state. That brings state-specific rules into every payroll run: Professional Tax slabs and filing frequency, Labour Welfare Fund contributions, minimum wages, and holiday calendars that differ by location. Your HRMS must know each employee's work location and apply the right rules automatically.

### Shift and plant teams

Operations, manufacturing, logistics and support teams work in shifts. That means biometric devices at each site, rosters, night shifts, weekly offs that are not always Sunday, overtime, and a regularisation process for missed punches. Attendance stops being a monthly upload and becomes a daily data flow into payroll through [attendance management](/features/attendance).

### Managers become approvers

With 50 to 70 people managers, HR can no longer approve every leave application or attendance correction itself. Managers approve, HR sets the policy and handles exceptions. The system needs clear approval chains and a record of who approved what.

### Data has to be scoped

At 50 employees, the HR manager sees everything and that is fine. At 500, a plant HR executive should see only their plant, a business HR partner only their business unit, and a manager only their team. Salary, bank details, PAN and Aadhaar need tighter handling still.

### Performance becomes a cycle

Increments and promotions need a defensible process: goals set at the start of the year, reviews by managers, calibration so that ratings are comparable across teams, and a link from ratings to compensation.

### Reporting becomes a leadership ask

The CEO and CFO start asking for headcount by location, attrition, overtime cost and payroll cost per department, and they want the numbers to match the payroll register.

## Worked example: monthly volume at 500 employees

The assumptions below are illustrative, not benchmarks. Replace them with your own numbers.

| Item | Assumption | Monthly volume |
| --- | --- | --- |
| Exits | 18% annual attrition: 500 x 18% = 90 a year | 7 to 8 a month |
| Joiners | Replace 90 exits plus grow by 50 people: 140 a year | about 12 a month |
| Leave applications | 1 per employee per month | 500 |
| Attendance regularisations | 10% of employees raise 2 a month | 100 |
| Expense claims | 30% of employees file 1 a month | 150 |
| Manager approvals | 500 + 100 + 150 | 750 |

With a span of control of 8, you have about 62 managers (500 divided by 8 is 62.5), so each manager approves around 12 items a month (750 divided by 62.5). None of this is hard in isolation. Doing it through email and spreadsheets, and then re-keying the results into payroll every month, is where errors and delays come from. Add 7 to 8 full and final settlements and about 12 onboarding cases a month, and the case for one connected system becomes clear.

## Requirements for a 500-employee company

Use this table as a starting checklist. The third column is what to ask a vendor to show you live, on your own data where possible.

| Area | What you need at this size | What to check in a demo |
| --- | --- | --- |
| Employee record | One record per person, with effective-dated history for transfers, promotions and pay changes | Change a department with a past date and see the history and "as of" reports update |
| Organisation | Legal entities, locations and departments | Two entities with different statutory registrations in one tenant |
| Attendance | Biometric integration, shifts, rosters, overtime, regularisation, LOP | Device protocol support for your models, a night shift crossing midnight |
| Leave | Accrual, proration for joiners, carry-forward, encashment, location holidays | A mid-year joiner's prorated balance |
| Payroll | Configurable structures, arrears, LOP reversal, loans, variable pay | A backdated increment producing correct arrears |
| Statutory | PF, ESI, PT and LWF by state, TDS under both regimes | The PF ECR file, ESIC file and Form 24Q (now Form 138) file generated from a run |
| Access | Role-based access with data scopes, field masking, MFA, audit log | A plant HR login that cannot see another plant |
| Performance | Goals, reviews, 360 feedback, calibration view | A rating distribution across departments |
| Self-service | Payslips, leave, tax declarations for employees | The employee view on a normal laptop browser |
| Data | Bulk import with validation, API or webhooks | A CSV import with a dry run that reports errors before saving |
| Exit | Full and final settlement with gratuity, leave encashment and recoveries | An F&F statement for an employee with a loan outstanding |

### What you probably do not need yet

Be wary of paying for complexity you will not use. At 500 employees you rarely need a multi-year transformation programme, a certified consultant to change a leave rule, or heavy custom development. Policies for leave, attendance, pay structures and appraisals should be configuration that a trained HR administrator can change.

## Implementation approach

A company of this size can usually go live in 4 to 8 weeks if the data is reasonably clean and the payroll rules are documented. A practical sequence looks like this.

| Phase | Typical timing | What happens | Owner |
| --- | --- | --- | --- |
| Design | Week 1 | Document entities, locations, pay structures, leave and attendance policies, approval chains | HR and payroll |
| Data | Weeks 1 to 3 | Clean the employee master, statutory numbers, bank details and year-to-date payroll figures | HR, payroll, finance |
| Configure | Weeks 2 to 4 | Set up policies, structures, devices, roles and data scopes | Vendor with HR admin |
| Parallel payroll | Weeks 4 to 6 | Run one month in both systems and reconcile employee by employee | Payroll and finance |
| Go live | Weeks 6 to 8 | Pay from the new system, open self-service, retire spreadsheets | All |

Two points matter most. First, the parallel payroll run is not optional: it is the only reliable way to prove the new system pays everyone correctly. Second, introduce the performance module at a cycle boundary, such as the start of the appraisal year, rather than midway through a review. Our [HRMS implementation guide](/hrms-implementation) covers each phase in more detail.

## Questions to ask vendors

1. How do you apply PT and LWF when an employee transfers from one state to another mid-month?
2. Which biometric device models and protocols do you support today, and how are missed punches handled?
3. Can a manager approve leave and attendance for their team without seeing salary data?
4. How do you restrict an HR user to one entity or location?
5. When a salary change is backdated, how are arrears calculated and shown on the payslip?
6. What checks run before payroll is approved, and who can approve?
7. Which statutory files do you generate, and which steps remain with us on government portals?
8. How is a performance rating linked to the increment and compensation cycle?
9. Can we see history "as of" a past date for headcount and cost?
10. What does a typical implementation plan look like for our size, and what do you need from us?
11. What is live today, and what is on the roadmap? Ask for this in writing.

## Common mistakes

- **Choosing on the feature list alone.** A long list matters less than whether your three hardest payroll scenarios work on your data.
- **Skipping the parallel run** to save a month. Any error then reaches employees directly.
- **Leaving approvals on email** after go-live, so the system never becomes the source of truth.
- **Giving everyone full access** because data scopes feel like extra setup.
- **Migrating dirty data.** Duplicate employee codes, missing UANs and wrong bank details travel straight into the new system unless they are fixed first.

## FAQs

**Is 500 employees too small for a full HRMS?** No. This is the size at which a connected HRMS usually pays for itself, because the volume of approvals, attendance data and payroll changes outgrows spreadsheets and point tools.

**Should payroll and HR be in the same system?** At this size it helps. When attendance, leave, joiners and exits feed payroll directly, you remove the monthly re-keying that causes most payroll errors.

**How long does implementation take for 500 employees?** Typically 4 to 8 weeks, depending on data quality, the number of entities and states, integrations such as biometric devices, and payroll complexity.

**Do we need mobile access?** Many shift and field employees prefer a phone. Check what the vendor offers today rather than what is planned, and confirm how employees without a work laptop will use self-service.

## How NeevHR helps

NeevHR is built for organisations from about 100 employees and handles this band well: one effective-dated employee record across multiple entities and locations, biometric attendance over the ADMS push protocol with shifts, rosters and overtime, and payroll that calculates PF, ESI, PT, LWF and TDS and generates the statutory files. Role-based access with data scopes, field-level masking and an audit log keep data where it belongs, and performance, 360 feedback and compensation cycles run on the same record. Typical implementation takes 4 to 8 weeks; see [NeevHR HRMS](/hrms) or [book a demo](/demo) to test it on your own scenarios.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
