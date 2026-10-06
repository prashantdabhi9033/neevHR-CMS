import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "hybrid-work-attendance-policy",
  title: "Hybrid work attendance policy: rules, tracking and fairness",
  excerpt:
    "How to write a hybrid work attendance policy: office and WFH days, hybrid models, marking WFH, core hours, allowances, PT, location data and a worked example.",
  category: "time",
  author: "NeevHR Team",
  publishedAt: "2026-10-06",
  body: `A hybrid work attendance policy sets how many days employees work from the office and from home, how each type of day is recorded, which hours everyone must be reachable, and how office attendance affects allowances and pay. A fair policy measures presence the same way for everyone, records WFH as approved work rather than leave, and judges people on outcomes, not on how often they badge in.

This guide covers designing and running hybrid attendance. For the underlying rules on working hours and overtime, see [attendance and overtime rules in India](/blog/attendance-and-overtime-rules-in-india).

## Office days vs WFH days: define them first

Most disputes in hybrid policies start with loose definitions. Write down what each day type means.

- **Office day.** The employee works from an assigned company location, recorded by a punch at that location.
- **WFH day.** The employee works a full day from an approved remote location, usually home, with an approved request or a recorded remote check-in.
- **Client or field day.** Work at a client site or on travel. Treat it as a separate day type, not as WFH.
- **Leave and holidays.** Neither office nor WFH. They reduce the days available, not the days attended.

A WFH day is a working day. It is paid, it counts for leave accrual, and it is not loss of pay. The question for attendance is only how it is recorded and approved.

## Hybrid models compared

| Model | How it works | Suits | Watch out for |
| --- | --- | --- | --- |
| Fixed days | Everyone in on set days, such as Tuesday to Thursday | Collaboration-heavy teams | Desk shortages on peak days, empty offices on others |
| Team-anchored days | Each team picks its own office days | Cross-functional companies | Teams that never overlap |
| Minimum days per month | For example, 10 office days a month, any days | Mixed roles, longer commutes | Clustering at month end |
| Fully flexible | No minimum, office as needed | Senior, independent roles | Isolation, uneven expectations |

Many mid-market companies combine a minimum per month with one or two team-anchored days, so people meet their team without rigid company-wide rules.

## How to mark WFH in attendance

| Method | How it works | Strengths | Limits |
| --- | --- | --- | --- |
| WFH request | Employee applies for a WFH day; manager approves | Clear intent and approval trail | Shows approval, not that work happened |
| Web punch | Employee checks in and out from a browser | Records start and end times | Does not show location |
| Geofenced mobile punch | Check-in allowed only inside a defined boundary | Strong proof of office presence | Location data needs consent and care |
| Office biometric punch | Punch at the office device | Reliable for office days | Only covers office days |

A simple, defensible combination is an office punch for office days and an approved WFH request plus a web check-in for WFH days. Missing records go through regularisation, the same as missed punches in the office.

## Core hours and availability

Flexibility on location works better with some structure on time.

- **Core hours.** A window when everyone is reachable, for example 11:00 to 16:00, whether in the office or at home.
- **Daily hours.** The same net hours apply on office and WFH days. Do not set a longer day for WFH.
- **Response norms.** Reasonable response times for chat and calls during core hours, not round-the-clock availability.
- **Overtime.** For employees covered by statutory overtime, hours beyond the limit on a WFH day are still overtime if they were required or approved. Track them the same way.

## Approvals that do not become a bottleneck

- **Recurring approval** for a standard pattern, such as WFH every Monday and Friday, instead of a request every week.
- **Single-day requests** for exceptions, approved by the reporting manager.
- **A cut-off** for applying, for example by 10:00 on the day, with regularisation as the fallback.
- **Escalation** for requests that sit unapproved, so WFH days do not turn into absences at payroll.
- **Close everything before payroll cut-off,** so the month's attendance is final when pay is computed.

## Impact on allowances

Some allowances exist because of the commute or the office. Decide how they behave in a hybrid month.

| Allowance | Common approach | Note |
| --- | --- | --- |
| Conveyance | Paid per office day, or a reduced fixed amount | Check the tax treatment of the chosen structure |
| Meal or canteen | Per office day | Only where meals are tied to the office |
| Internet or WFH allowance | Fixed monthly amount | Keep it modest and documented |
| Shift or night allowance | Per shift worked, wherever worked | Location does not change the shift |

Changing an allowance that forms part of the salary structure is a change in terms of employment, so communicate it and follow the process your appointment letters and standing orders require. For how allowances sit within CTC, see our [salary structure guide](/blog/salary-structure-ctc-breakup-explained).

## Worked example: a 22-working-day month

September 2026 has 22 working days for an office running Monday to Friday, assuming no holiday at that location. Kavya has a monthly gross of ₹66,000. Her policy requires 10 office days a month, reduced in proportion to approved leave and rounded down, and pays meal allowance of ₹150 and conveyance of ₹200 per office day on top of gross.

Her month:

| Day type | Days |
| --- | --- |
| Office (punched) | 10 |
| WFH (approved) | 9 |
| Approved earned leave | 2 |
| Unrecorded absence, not regularised | 1 |
| Total | 22 |

- Days available: 22 minus 2 days of leave = 20
- Office days required: 10 × 20 ÷ 22 = 9.09, rounded down to 9. She worked 10, so she meets the policy.
- Meal allowance: 10 × ₹150 = ₹1,500
- Conveyance: 10 × ₹200 = ₹2,000
- LOP for the unrecorded day, on a calendar-day basis: ₹66,000 × 1 ÷ 30 = ₹2,200

The 9 WFH days are fully paid working days. Only the single unrecorded, unregularised day becomes [loss of pay](/glossary/lop). If she raises a regularisation that her manager approves before the cut-off, the LOP is reversed.

## PT, LWF and the work location on record

Professional Tax and Labour Welfare Fund are state levies, and payroll applies them based on the work location recorded for the employee. Hybrid work within one city does not change that. An employee who moves to another state and works from there permanently may be a different case: the PT and LWF obligation may follow the state where they now work, and some states have no PT at all. The rules differ by state and the position for remote workers is not always settled, so update the work location on record when the arrangement changes and confirm the treatment with your advisor. See our guides to [Professional Tax by state](/blog/professional-tax-by-state-india) and [Labour Welfare Fund state-wise](/blog/labour-welfare-fund-state-wise).

A permanent move can also affect which state's Shops and Establishments Act, holiday calendar and minimum wage apply, so treat it as a transfer, not as WFH.

## Location data and the DPDP Act

Geofenced punches and location checks collect personal data, so the Digital Personal Data Protection Act, 2023 applies. Practical rules:

- **Purpose.** Use location only to verify attendance or field work, and say so in a clear notice.
- **Minimise.** Capture location at check-in and check-out, not continuously, unless the role genuinely needs tracking.
- **Consent where it is the basis.** Record it, and let employees withdraw it as easily as they gave it.
- **Not at home.** Do not collect or store the precise location of employees' homes beyond what the purpose needs.
- **Retention and access.** Keep location data only as long as needed, and restrict who can see it.

Our guide to the [DPDP Act for HR teams](/blog/dpdp-act-2023-for-hr-teams) covers the wider obligations, and the [Ministry of Electronics and Information Technology](https://www.meity.gov.in/) publishes the Act and rules.

## Measure outcomes, not presence

Attendance tells you where someone worked. It does not tell you whether the work was good. Use attendance for pay, compliance and planning office space, and use goals, deliverables and manager check-ins for performance. Avoid making office days a performance rating input unless the role genuinely requires on-site work, and apply the policy consistently, so it is not quietly stricter for some teams or people.

## Sample policy clauses

Adapt these and take advice before adopting them.

1. **Office presence.** Employees in eligible roles work from their assigned office for at least 10 days a month, reduced in proportion to approved leave and holidays.
2. **Recording.** Office days are recorded by a punch at the office. WFH days require an approved WFH request and a check-in and check-out through the company's attendance system.
3. **Core hours.** All employees are available between 11:00 and 16:00 on working days, wherever they work.
4. **Approval.** Recurring WFH patterns are approved by the reporting manager each quarter. Single WFH days are requested by 10:00 on the day.
5. **Allowances.** Meal and conveyance allowances are paid per office day as set out in the salary structure.
6. **Location change.** Working from another city or state for more than 30 days needs prior HR approval, because it may change statutory and tax obligations.

## Common mistakes

- Treating WFH days as leave or as LOP.
- Requiring more hours on WFH days than on office days.
- Collecting continuous location data when check-in data would do.
- Letting an employee work from another state for months with the old work location on record.
- Changing allowances without communicating the change in terms.
- Judging performance by badge-ins.

## FAQs

**Is WFH counted as a working day for leave and pay?** Yes. An approved WFH day is a working day, paid in full, and it counts for leave accrual like an office day.

**How do companies track work from home attendance?** Usually with an approved WFH request plus a web check-in and check-out. Missing records go through regularisation.

**Can an employer reduce conveyance allowance for WFH days?** It can if the salary structure or policy ties the allowance to office days. If it is a fixed part of salary, changing it is a change in terms and needs proper communication.

**Does PT change if an employee works from home in another state?** It may, if they work from that state permanently. Update the work location on record and confirm the treatment, because PT and LWF are state levies with different rules.

**Can we use GPS to check WFH attendance?** Location checks are personal data under the DPDP Act. Use them only for a clear purpose, minimise what you collect, and record consent where consent is the basis.

## How NeevHR helps

NeevHR [attendance](/features/attendance) captures web check-in alongside biometric punches, applies shift and grace rules by employee group, and routes regularisation to managers before LOP reaches payroll. [Leave](/features/leave) and location-wise holiday calendars set the days available, and consent-first [field tracking](/features/field-tracking) with geofences runs on the NeevHR mobile app, which is coming soon.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 06 Oct 2026.*`,
};

export default post;
