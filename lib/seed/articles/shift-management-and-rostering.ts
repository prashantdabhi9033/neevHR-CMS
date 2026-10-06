import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "shift-management-and-rostering",
  title: "Shift management and rostering: a practical guide for HR",
  excerpt:
    "Shift management and rostering in India: shift masters, rotation patterns, night shift rules, rest and weekly offs, cross-midnight punches and payroll linkage.",
  category: "time",
  author: "NeevHR Team",
  publishedAt: "2026-10-06",
  body: `Shift management is defining the shifts a business runs, and rostering is assigning people to those shifts week by week. Done well, it keeps every shift staffed, respects working-hour, rest and weekly-off rules, attributes night-shift punches to the right day and sends shift allowances and overtime to payroll. The foundation is a clean shift master and a rotation pattern that is fair and checkable before it is published.

This guide covers designing shifts and running rosters. For the legal framework on hours and overtime, see [attendance and overtime rules in India](/blog/attendance-and-overtime-rules-in-india).

## Types of shifts

| Shift type | What it means | Typical use |
| --- | --- | --- |
| General | One fixed daytime shift, such as 09:30 to 18:30 | Offices, support functions |
| Rotational | Employees move between morning, evening and night shifts on a cycle | Plants, warehouses, contact centres |
| Split | Two working blocks in a day with a long unpaid gap | Retail, hospitality, transport |
| Night | A shift that runs across midnight, such as 22:00 to 06:00 | Continuous process plants, hospitals, global support |
| Flexible | Fixed daily hours with a window to start, plus core hours | Knowledge work, hybrid teams |

Many mid-market companies run a mix: a general shift for staff, rotational shifts for operations and a handful of night or split shifts for specific teams.

## Designing the shift master

Every shift needs the same set of fields, so attendance can be evaluated the same way for everyone on it.

| Field | Example (general shift) | Why it matters |
| --- | --- | --- |
| Start and end | 09:30 to 18:30 | Defines the scheduled day |
| Grace | 10 minutes | An in-punch at 09:40 is on time, 09:41 is late |
| Break | 60 minutes, unpaid | Net working time is 8 hours |
| Half-day threshold | 4.5 hours worked | Below this, the day is absent |
| Full-day threshold | 7.5 hours worked | Between 4.5 and 7.5 hours is a half day |
| Overtime start | After 9 hours worked, with approval | Stops casual overtime from leaking into payroll |
| Punch window | 2 hours before start to 4 hours after end | Decides which punches belong to this shift |
| Weekly off | Sunday, or as rostered | Feeds the weekly-off and comp off rules |

Keep the number of shifts small. Ten shifts that differ by fifteen minutes are harder to roster, audit and explain than three well-defined ones.

## Working hours, intervals and spread-over

The OSH Code, 2020 (in force since 21 November 2025) limits a worker to eight hours of work in a day, with intervals and spread-over as notified by the appropriate government, whose rules also set weekly limits and overtime caps. State Shops and Establishments Acts set their own limits for offices and shops, and some have changed recently. Delhi's 2026 amendment, for example, allows a 10-hour working day with a 12-hour spread-over. Check the current rules for each location with the [Ministry of Labour and Employment](https://labour.gov.in/) and your state labour department.

Two terms matter for rostering:

- **Interval (rest break).** A break after a set number of hours of continuous work, typically around five. The length varies by law.
- **Spread-over.** The span from the start to the end of the working day, including breaks. A split shift of 07:00 to 11:00 and 17:00 to 21:00 has a spread-over of 14 hours, which many laws do not allow.

## Rotation patterns: a 4-week example

A common 24x7 pattern uses four crews and three 8-hour shifts: Morning (06:00 to 14:00), Evening (14:00 to 22:00) and Night (22:00 to 06:00). The fourth crew works a relief week on the general shift, covering weekly offs, leave and training.

| Week | Crew A | Crew B | Crew C | Crew D |
| --- | --- | --- | --- | --- |
| 1 | Morning | Evening | Night | Relief |
| 2 | Evening | Night | Relief | Morning |
| 3 | Night | Relief | Morning | Evening |
| 4 | Relief | Morning | Evening | Night |

Each crew rotates forward, morning to evening to night, which is generally easier on sleep than rotating backwards. Every shift is covered every week, and nobody works more than one night week in four. Weekly offs are staggered inside each crew, so a shift never loses all its people on the same day.

### Rest between shifts

Avoid "quick returns", where an employee finishes one shift and starts the next with too little rest. A night shift ending at 06:00 followed by an evening shift at 14:00 the same day leaves only 8 hours. Many employers set a minimum of 11 or 12 hours between shifts as policy, and the OSH Code restricts a worker in a factory or mine from working there after working in another such establishment within the preceding twelve hours. Schedule the weekly off between a night week and the next week, not in the middle.

## Coverage planning and minimum staffing

Start from required coverage, not from the people you have.

Suppose a packing line needs 12 operators on each of three shifts, seven days a week:

- Shift slots a week: 12 × 3 × 7 = 252
- Each operator works 6 shifts a week, so the base requirement is 252 ÷ 6 = 42 operators
- Add a buffer for leave, absence and training. At 12%, 42 × 1.12 = 47.04, so plan for 48 operators

Then set a minimum staffing level per shift, for example 11 of 12, below which the supervisor must arrange cover. Publish the roster only when every shift meets its minimum and no one breaches rest or weekly-off rules.

## Night shift allowance and pay

Night shift allowance is not generally set by central law; it is a policy or settlement term, usually a fixed amount per night worked or a percentage of basic.

Take Meena, a line operator on monthly wages of ₹20,800 for 26 days of 8 hours, so ₹20,800 ÷ 208 = ₹100 an hour. In September she works 12 night shifts at ₹250 a night and 6 approved overtime hours at twice the ordinary rate.

| Item | Calculation | Amount |
| --- | --- | --- |
| Night shift allowance | 12 × ₹250 | ₹3,000 |
| Overtime | 6 × ₹100 × 2 | ₹1,200 |
| Total additions | ₹3,000 + ₹1,200 | ₹4,200 |

Check how each allowance is treated under the Labour Code wage definition, because it affects PF, ESI and the 50% add-back. Our guide to the [wage definition and the 50% rule](/blog/labour-codes-wage-definition-50-percent-rule) explains how. For overtime arithmetic, use the [overtime calculator](/tools/overtime-calculator).

## Women in night shifts

Under the OSH Code, women are entitled to be employed in all establishments for all types of work, and may be employed before 6 a.m. and beyond 7 p.m. with their consent, subject to conditions on safety, holidays and working hours that the appropriate government prescribes. Several state Shops and Establishments Acts carry similar provisions with conditions such as written consent and safe transport.

In practice:

- Record written consent before rostering a woman on a night shift, and let her withdraw it.
- Provide the safeguards your state requires, which commonly include secure transport, adequate lighting and security, and more than one woman on the shift.
- Make sure night-shift reporting channels connect to your internal committee under the [POSH Act](/blog/posh-act-compliance-for-employers).

State conditions differ and are being updated under the Labour Codes, so confirm the rules for each location.

## Weekly offs and shift swaps

A weekly off does not have to be Sunday. Rostered weekly offs work well if every employee gets the required weekly rest and the off day is published in advance. Workers who lose a weekly holiday under an exemption are owed a compensatory holiday; see our [comp off policy guide](/blog/comp-off-policy).

Shift swaps keep rosters flexible without HR chasing every change. Good rules:

- The employee requests the swap with a named colleague who accepts it.
- The manager approves, and nobody approves their own swap.
- The swap is checked for rest, weekly off and coverage before it is approved.
- Approved swaps update the roster, so attendance is evaluated against the shift actually worked.

## Biometric punches for overnight shifts

Night shifts break the simple rule that a punch belongs to the calendar day it happened on. The OSH Code helps here: for a worker whose shift extends beyond midnight, the hours worked after midnight are counted in the previous day, and a weekly holiday means 24 consecutive hours starting when the shift ends.

Example: Arjun is rostered on the night shift of Monday 5 October 2026, 22:00 to 06:00.

- In-punch: 21:52 on 5 October
- Out-punch: 06:07 on 6 October
- Time worked: 8 hours 15 minutes, all attributed to 5 October

The system makes this work by assigning punches to a shift through its punch window, not to the calendar date. If the out-punch is missing, the day is flagged for regularisation instead of splitting into an absent Monday and a stray punch on Tuesday.

## Payroll linkage

- **Shift allowance** counted from shifts actually worked, after swaps and leave.
- **Overtime** only from approved hours, at the rate the law or policy requires.
- **Weekly-off and holiday work** routed to overtime, comp off or both, by employee category.
- **LOP** for absent rostered days not covered by leave.
- **Period lock** after attendance closes, so roster changes after payroll go to the next month as arrears.

## Reports that help

- Coverage by shift and day, planned against required.
- Fairness: night shifts and weekend shifts per employee over the quarter.
- Overtime by shift and team.
- Rest-rule and weekly-off exceptions.
- Late arrivals and early exits by shift.
- Night shift consent records for women employees, by location.

## Common mistakes

- Too many near-identical shifts in the master.
- Attributing night-shift punches by calendar date.
- Publishing a roster without checking rest, weekly offs and minimum staffing.
- Paying night allowance from the planned roster instead of shifts actually worked.
- Rostering women on night shifts without recorded consent and safeguards.
- Allowing swaps that nobody approves.

## FAQs

**What is the difference between shift management and rostering?** Shift management defines the shifts, their timings and rules. Rostering assigns employees to those shifts for each day or week.

**How are night shift hours counted when the shift crosses midnight?** For workers under the OSH Code, hours after midnight are counted in the previous day, so the whole shift belongs to the day it started.

**Is night shift allowance mandatory in India?** It is not generally set by central law. It comes from company policy, a settlement or a standing order, so check what applies to you.

**Can women work night shifts in India?** Yes, with their consent and subject to the safety and other conditions the appropriate government prescribes. Conditions vary by state.

**How much rest should there be between shifts?** Many employers set 11 or 12 hours as policy. Check the interval, spread-over and rest rules for each location.

## How NeevHR helps

NeevHR [shifts and rosters](/features/rostering) let you define shift types with allowances, apply rotation patterns to a crew, check coverage and rest rules before publishing, and approve shift change requests with no self-approval. [Attendance](/features/attendance) ingests biometric punches, maps them to the right employee and shift, and sends LOP, overtime and shift allowances to [payroll](/features/payroll).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 06 Oct 2026.*`,
};

export default post;
