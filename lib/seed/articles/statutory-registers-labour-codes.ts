import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "statutory-registers-labour-codes",
  title: "Statutory registers under the Labour Codes: what to maintain",
  excerpt:
    "Statutory registers under India's Labour Codes: which registers to keep, what each must show, electronic maintenance, display notices and what inspectors ask.",
  category: "compliance",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `Statutory registers are the records an employer must keep under labour law: who is employed, what they were paid, when they attended, what was deducted, the overtime they worked and the leave they took. Under the four Labour Codes, in force since 21 Nov 2025, the number of registers is smaller and they can be kept electronically, but the exact forms depend on the Central or state rules that apply to each establishment. An inspector expects them to be complete, current and available on demand.

This guide covers which registers to keep, what goes into each, electronic maintenance, display notices and how inspections work. It is narrower than our [HR audit checklist for India](/blog/hr-audit-checklist-india), which treats registers as one of eight audit areas. For the monthly filing routine, see the [payroll compliance checklist](/blog/payroll-compliance-checklist-india).

## What are statutory registers?

A statutory register is a record the law requires you to maintain in a prescribed form and keep available for inspection. It is different from a return (which you file with the government) and a challan (which proves a payment). Registers are the evidence behind both: the wage register supports your PF and ESI contributions, and the attendance register supports the wages.

Two features matter in practice:

- **They are per establishment.** Each factory, office, store or warehouse keeps its own registers, or must be able to produce its own extract from a central system.
- **They are contemporaneous.** Entries should be made as events happen, or generated from the systems that recorded them, not written up before an inspection.

## Why did the Labour Codes reduce the number of registers?

Under the older laws, each Act had its own registers: the Minimum Wages Act, the Payment of Wages Act, the Factories Act, the Contract Labour Act, the Maternity Benefit Act, the Payment of Bonus Act and more. The same employee details were written into a dozen formats. The Ease of Compliance to Maintain Registers under various Labour Laws Rules, 2017 had already allowed establishments covered by those Central rules to keep a small set of common registers (usually cited as five) in place of dozens.

The Codes continue that direction. The Code on Wages and the OSH Code each require the employer to maintain registers in the manner the rules prescribe, and the rules provide for electronic registers. State rules are being notified progressively, and older state rules continue where they are not inconsistent with the Codes. So the honest answer to "which forms?" is: the forms in the rules your establishment falls under. Record which rules you follow for each location and check the current position with the [Ministry of Labour and Employment](https://labour.gov.in/) and your state labour department.

## Which registers must an employer maintain under the Labour Codes?

The forms vary, but the content is consistent. These are the registers almost every establishment needs, with the Code that drives each.

| Register | Main source | Key contents | Applies to |
| --- | --- | --- | --- |
| Register of employees | Code on Wages, OSH Code | Name, parent or spouse name, gender, date of birth, date of joining, designation, category, UAN, ESI number, date and reason of exit | Every establishment |
| Wage register | Code on Wages | Rate of wages, days worked, earnings by component, overtime, gross, each deduction, net pay, date and mode of payment | Every establishment |
| Attendance register or muster roll | Code on Wages, OSH Code | Daily attendance, shift, in and out times, weekly off, holiday, leave | Every establishment |
| Overtime register | OSH Code, Code on Wages | Hours beyond the daily or weekly limit, overtime rate, amount paid | Where workers work overtime |
| Deductions, fines and advances | Code on Wages | Nature of deduction, amount, date, approval; fines with the opportunity to explain | Where any such deduction is made |
| Leave and leave wages | OSH Code, state Shops Act | Leave earned, availed, balance and encashed | Every establishment |
| Bonus registers | Code on Wages (bonus chapter) | Allocable surplus, set-on and set-off, bonus due and paid | Establishments covered by the bonus provisions |
| Contract labour records | OSH Code | Contractors engaged, workers deployed, wages paid by contractors | Principal employers above the threshold |
| Accidents and dangerous occurrences | OSH Code | Date, nature, injured person, action taken | Factories and other covered establishments |

Statutory contribution records for PF and ESI now live mainly on the EPFO and ESIC portals (ECR, contribution files), but the wage register must reconcile to them. For the PF side, see [ECR explained](/blog/ecr-explained).

## What details does each register need?

### Register of employees

Treat this as the master. Every other register keys off it, so an employee missing here will be missing everywhere. Include past employees with exit dates; an inspector checking a wage claim from last year needs to see the person was on your rolls. Keep the record effective-dated, so a designation or category change shows when it happened rather than overwriting the old value.

### Wage register

The wage register is the register an inspector reads most closely, because it proves minimum wages, equal pay, deductions within limits and payment on time. Each row should let a reader rebuild the net pay from the rates.

### Worked example: one wage register row

Ramesh Patil is a machine operator in a Pune plant. His September 2026 inputs: Basic plus DA of ₹16,500 a month, HRA of ₹4,000, 26 paid days in the month, 24 days present, 2 days of loss of pay and 6 hours of approved overtime. This company's written policy computes the ordinary hourly rate as Basic plus DA ÷ 26 ÷ 8.

| Item | Working | Amount |
| --- | --- | --- |
| Basic plus DA earned | ₹16,500 × 24 ÷ 26 | ₹15,231 |
| HRA earned | ₹4,000 × 24 ÷ 26 | ₹3,692 |
| Overtime | 6 × (₹16,500 ÷ 26 ÷ 8 = ₹79.33) × 2 | ₹952 |
| Gross | ₹15,231 + ₹3,692 + ₹952 | ₹19,875 |
| PF (employee, 12%) | ₹15,231 × 12% | ₹1,828 |
| ESI (employee, 0.75%) | ₹19,875 × 0.75%, rounded up | ₹150 |
| Professional tax (Maharashtra) | Monthly slab | ₹200 |
| Net pay | ₹19,875 − ₹1,828 − ₹150 − ₹200 | ₹17,697 |

The 50% test does not bite here: HRA and overtime (₹4,644) are below half of total remuneration (₹9,937.50), so PF wages stay at ₹15,231, well under the ₹25,000 ceiling that applies from 17 Sep 2026. The register row should also show the date of payment and the bank reference. An inspector can now check every number: the overtime rate is twice the ordinary rate, the deductions are authorised, and wages were paid by the 7th. For the overtime arithmetic, our [overtime calculator](/tools/overtime-calculator) does the same calculation.

### Attendance register

Record what actually happened: punches, shift, late marks, weekly off and leave. The attendance register should agree with the wage register to the day. If they disagree, the inspector will ask which one is false. Our guide to [attendance and overtime rules in India](/blog/attendance-and-overtime-rules-in-india) covers hours and overtime limits.

### Deductions and fines register

The Code on Wages allows only authorised deductions and caps the total. Fines need prior notice of the acts that attract them and a chance for the employee to explain. Every fine, damage recovery and advance recovery should appear here with its approval. See [wage payment deadlines and deductions](/blog/wage-payment-deadlines-and-deductions) for the limits.

## Can statutory registers be maintained electronically?

Yes. The Codes and the rules made under them provide for registers in electronic form, and most mid-sized employers already generate them from payroll and attendance systems. An electronic register is only as good as its controls, so make sure it meets these tests:

| Test | What it means |
| --- | --- |
| Complete | Every covered employee and every month, including leavers and contract workers where you are the principal employer |
| Tamper-evident | Changes leave an audit trail of who changed what and when; past months cannot be silently edited |
| Retrievable | You can produce any month, for any establishment, on screen or in print, within minutes |
| Consistent | The wage, attendance and leave registers come from the same data and agree with each other |
| Backed up | Copies are kept so that a system failure does not destroy the record |
| Authenticated | Signed or approved in the way the applicable rules require |

If your rules still prescribe a specific layout, configure the report to match it rather than handing the inspector a generic payroll export.

## What notices must be displayed at the workplace?

Display requirements sit alongside registers. Typical items:

| Notice | Usual source | Practical note |
| --- | --- | --- |
| Abstract of the Code and the name and address of the Inspector-cum-Facilitator | Code on Wages and its rules | In English and the language understood by most employees, where the rules say so |
| Wage period, date of payment and rates of wages | Code on Wages rules | Update after every minimum wage revision |
| Working hours, intervals and weekly holidays | OSH Code, state Shops Act | Per shift where you run shifts |
| Holiday list | State holiday laws, Shops Act | Publish before the calendar year starts |
| Consequences of sexual harassment and Internal Committee details | POSH Act | Each office or unit with an Internal Committee |
| Registration certificate | State Shops and Establishments Act or OSH Code | At the establishment it relates to |

Some rules allow notices to be displayed electronically or on an intranet; check before you rely on that, because a shop floor without screens still needs a physical board. See our [Shops and Establishments Act guide](/blog/shops-and-establishments-act-registration) for state-level display rules.

## What do inspectors ask for during an inspection?

Under the Codes, the inspector is an Inspector-cum-Facilitator, and inspections are largely selected through a web-based scheme rather than at the inspector's discretion. The facilitator role includes advising employers on compliance. That does not make inspections lighter. A typical document request:

1. Registration certificates for the establishment.
2. Register of employees, including leavers for the period under review.
3. Wage registers and payslips for a sample of months.
4. Attendance and overtime registers for the same months.
5. Proof of payment dates (bank statements or transfer files).
6. Deductions and fines register.
7. Minimum wage notifications applied, and the category of each employee.
8. Leave registers and leave encashment on exit.
9. Contractor documents, if you engage contract labour.
10. Display notices, inspected on site.

Inspectors often start with the lowest-paid employees and test minimum wages first. Keep at least three years of registers ready by establishment.

## How long should statutory registers be kept?

The period depends on the rules that apply to you, and it is not the same for every register. Older labour rules commonly required preservation for a few years after the last entry. Wage claims under the Code on Wages can usually be made within three years, and tax and company law require longer periods for payroll records, so most employers keep registers well beyond the labour minimum. Our guide to [HR records retention in India](/blog/hr-records-retention-india) sets out a full schedule.

## Multi-state and contractor registers

Registers follow the establishment, so a company with 12 locations in six states keeps 12 sets, each in the format of its state rules where those differ. As a principal employer, you should also hold, or be able to call for, the contractor's registers of workers and wages for your premises, because unpaid contractor wages can become your liability. See our guide to [contract labour compliance](/blog/contract-labour-compliance-principal-employer).

## Common mistakes

- Keeping one head office register for all locations, when each establishment needs its own.
- Writing registers up before an inspection instead of generating them from live data.
- Attendance and wage registers that disagree on days worked.
- Deleting leavers from the employee register at year end.
- Recording fines and recoveries with no approval or opportunity to explain.
- Assuming the 2017 Central forms apply everywhere without checking the state rules under the Codes.
- Display notices that still show old minimum wage rates or an old inspector's name.

## FAQs

**What are statutory registers in HR?** They are records the law requires an employer to keep in a prescribed form for inspection, mainly the registers of employees, wages, attendance, overtime, deductions and leave, plus bonus and contract labour records where those apply.

**Are registers mandatory under the Labour Codes?** Yes. The Code on Wages and the OSH Code require employers to maintain registers in the manner the applicable rules prescribe. The exact forms depend on the Central or state rules for your establishment.

**Can we keep statutory registers in electronic form?** Yes. The Codes and rules provide for electronic registers. They should be complete, tamper-evident, retrievable on demand and authenticated as the rules require.

**Is a payroll register the same as a wage register?** Not always. A payroll export may lack fields the prescribed wage register needs, such as rates of wages, date of payment or the employee's category. Map your payroll output to the prescribed format.

**Do registers have to be kept for contract workers?** The contractor keeps registers for the workers it deploys, and the principal employer keeps records of contractors engaged and should check the contractor's registers, because liability can pass to the principal employer.

## How NeevHR helps

NeevHR [attendance](/features/attendance) produces daily and monthly attendance registers and a muster roll from closed attendance, and [payroll](/payroll) produces the payroll register and salary sheet, with an audit trail behind every change. [Employee records](/features/employees) keep every joining, transfer and exit on an effective-dated timeline, and [variable pay](/features/variable-pay) maintains the statutory bonus registers. To see how these reports come out of one dataset, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
