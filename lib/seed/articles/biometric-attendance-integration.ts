import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "biometric-attendance-integration",
  title: "Biometric attendance integration with HRMS and payroll",
  excerpt:
    "How biometric attendance integration with HRMS and payroll works in India: device types, push vs file sync, punch-to-payroll rules, missed punches and DPDP.",
  category: "time",
  author: "NeevHR Team",
  publishedAt: "2026-10-10",
  body: `Biometric attendance integration connects your fingerprint, face or card terminals to the HRMS so that every punch reaches the employee's attendance record without manual exports. The HRMS then applies shift, grace, overtime and loss-of-pay (LOP) rules to turn raw punches into a closed attendance day that payroll can use. A good integration is judged less by the device and more by what happens to missing, duplicate and late punches before payroll closes.

This guide covers the integration itself, from device to payslip. For the legal rules on working hours and overtime, see [attendance and overtime rules in India](/blog/attendance-and-overtime-rules-in-india), and for rosters and rotating shifts, see [shift management and rostering](/blog/shift-management-and-rostering).

## What does a biometric attendance integration actually do?

A biometric terminal only knows three things: a user ID enrolled on the device, a timestamp and sometimes a direction (in or out). Everything else is the HRMS's job. The integration has four layers:

1. **Capture.** The device verifies the person (fingerprint, face, card or PIN) and records a punch.
2. **Transport.** The punch travels from the device to the HRMS, either pushed by the device over the network or uploaded as a file.
3. **Mapping.** The device user ID is matched to an employee code, and the punch is assigned to the right shift and attendance date.
4. **Processing.** Day-close rules convert punches into present, absent, half day, late, early-out and overtime, and exceptions go to regularisation.

If any layer is weak, payroll inherits the problem as wrong LOP or missing overtime.

## Fingerprint, face or card: which device type fits?

| Device type | How it verifies | Works well for | Watch out for |
| --- | --- | --- | --- |
| Fingerprint | Matches a fingerprint template stored on the device | Offices and plants with stable staff | Worn or wet fingers on the shop floor, hygiene concerns, queues at shift change |
| Face recognition | Matches a face template, usually contactless | High-volume gates, hygiene-sensitive sites | Lighting, masks and helmets; enrolment quality matters |
| RFID or proximity card | Reads a card number | Large contract workforces, low cost | Buddy punching, since a card can be lent |
| Card plus biometric | Card identifies, biometric verifies | Secure areas, high-value sites | Slower throughput |
| PIN | Employee keys in a code | Fallback only | Easily shared |

Many sites mix types: face terminals at the main gate and card readers in canteens or secondary entrances. The HRMS should treat all of them as punch sources and apply the same rules.

## Push vs pull vs file import: how punches reach the HRMS

| Method | How it works | Strengths | Limits |
| --- | --- | --- | --- |
| Push (for example, the ADMS or iClock protocol) | The device calls the HRMS server over the internet and sends punches as they happen, then retries anything unsent | Near real time; no software on a local PC; scales across many locations | Needs outbound internet from the device and the server address configured on it |
| Pull | Middleware on a local PC polls each device over the LAN and forwards data | Works where devices cannot reach the internet | A local PC becomes a single point of failure; harder to scale |
| File import | Punch logs exported from the device or its software and uploaded | Works with almost any device | Manual, delayed and easy to forget |

The ADMS push protocol is supported by many devices from common Indian vendors such as eSSL, ZKTeco and Matrix, but support varies by model and firmware, so confirm each model before you buy or migrate. A practical setup is push as the primary route and file import as the fallback when a device has been offline.

## The punch-to-payroll flow, step by step

1. **Enrol** each employee on the device with a user ID that equals, or maps to, the employee code in the HRMS. Do this on the joining day, as part of the [employee onboarding checklist](/blog/employee-onboarding-checklist).
2. **Receive and deduplicate.** Employees often punch twice. Keep the first in and last out by default, and discard repeat punches within a short window, such as two minutes.
3. **Assign to a shift and date.** Night shifts are the classic trap: a 22:00 to 06:00 shift has its out-punch on the next calendar date. The shift definition, not the calendar, decides the attendance date.
4. **Apply day-close rules** for grace, half day, short day, overtime and weekly offs.
5. **Raise exceptions** for single punches, absent days without leave and late marks beyond the allowance.
6. **Regularise** through an employee request and manager approval, within a set window.
7. **Lock the period** a few days before payroll cut-off, and pass present days, LOP days, overtime hours and shift allowances to payroll.

Everything after the lock date goes into next month's payroll as an adjustment or arrear, not as an edit to a closed month.

## Shift, overtime and LOP rules that sit on top of punches

These are policy settings, configured per employee group, and the most common ones are:

| Rule | Typical setting | Effect |
| --- | --- | --- |
| Grace period | 10 to 15 minutes after shift start | Punches inside grace are on time |
| Late-mark allowance | 3 late marks a month, then half-day deduction | Deters habitual lateness without docking pay for every minute |
| Half day | Worked hours between 4 and 6 | Half day present, half day LOP or leave |
| Minimum hours for full day | 8 hours in a 9-hour shift | Short day flagged |
| Overtime start | After the shift's hours, often in blocks of 30 minutes | OT hours for covered workers |
| Single punch | No out-punch | Exception, not automatic absence |

Overtime for workers covered by the OSH Code is paid at twice the ordinary rate of wages, so the overtime rule must be right for that group. For the arithmetic, use our [overtime calculator](/tools/overtime-calculator).

## Worked example: one month from punches to pay

Suresh is a machine operator on a gross salary of ₹31,200 a month. September 2026 has 30 days, and the company pays on calendar days, so one day's pay is ₹31,200 ÷ 30 = ₹1,040. His ordinary hourly rate for overtime, on 26 working days of 8 hours, is ₹31,200 ÷ 208 = ₹150, and the overtime rate is ₹300.

| Item from attendance | Count | Payroll effect |
| --- | --- | --- |
| Days with in and out punches | 23 | Paid |
| Single-punch days, regularised and approved | 2 | Paid |
| Single-punch day, not regularised by cut-off | 1 | 1 day LOP: ₹1,040 |
| Absent, no leave applied | 1 | 1 day LOP: ₹1,040 |
| Weekly offs | 3 | Paid |
| Approved overtime | 6 hours | 6 × ₹300 = ₹1,800 |

Gross payable is ₹31,200 − ₹2,080 + ₹1,800 = ₹30,920. LOP also reduces the base for PF and ESI, which is why it must be final before payroll computes. If the unregularised punch is approved after cut-off, the ₹1,040 is paid back as an arrear next month. For more on arrears, see [salary arrears calculation](/blog/salary-arrears-calculation).

## How do you troubleshoot missing punches?

Most missing-punch complaints have a short list of causes. Start with the device health view, not with the employee.

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| No punches from a whole site since a time | Device offline: power, network or changed server address | Check last-seen time; restore connectivity; device pushes the backlog when back online |
| One employee's punches missing | User ID on the device does not map to an employee code | Correct the mapping; reprocess the period |
| Punches present but on the wrong day | Night shift or device clock wrong | Fix the shift definition; sync the device clock |
| Duplicate days or double hours | Same device registered twice, or file import on top of push | Deduplicate by device and timestamp |
| Out-punch missing for many people | Exit gate device not working or bypassed | Raise a bulk exception; regularise with the supervisor's confirmation |
| New joiner absent all week | Not enrolled on the device | Enrol on day one; regularise the gap |

Two habits prevent most issues: check device last-seen status every morning, and reconcile the daily register before day close instead of at month end.

## Regularisation: rules that are fair and auditable

Regularisation lets an employee correct a missed or wrong punch. Keep it controlled:

- **Reason codes:** forgot to punch, device not working, on duty outside, client visit, work from home.
- **Window:** requests within a few working days of the date, and none after the payroll lock.
- **Monthly limit:** for example, three self-reported regularisations a month, beyond which HR approval is needed.
- **Approver:** the reporting manager, with no self-approval.
- **Evidence:** a supervisor note for gate failures; a visit report for on-duty claims.

Hybrid teams may punch at the office on some days and check in on the web on others. Our [hybrid work attendance policy guide](/blog/hybrid-work-attendance-policy) covers how to treat WFH days.

## Biometric data and the DPDP Act

Fingerprints and face templates identify a person, so they are personal data under the Digital Personal Data Protection Act, 2023. The Act does not create a separate "sensitive" category, but biometric data is the kind whose misuse is hard to reverse, so treat it with care.

- **Lawful basis.** The Act allows certain processing for employment purposes as a legitimate use, and otherwise relies on consent. Which basis applies to biometric attendance is a judgement for your legal advisor. Many employers also take explicit consent and offer a card or PIN alternative for employees who object.
- **Notice.** Tell employees what is collected, why, how long it is kept and how to raise a grievance.
- **Minimise.** Most terminals store a mathematical template, not a photograph or fingerprint image. Prefer that, and do not copy templates into the HRMS. The HRMS needs only the punch and the user ID.
- **Security.** Restrict device admin access, change default passwords and keep firmware current.
- **Retention and deletion.** Delete an employee's templates from every device when they exit, and record that it was done as part of offboarding.

The DPDP Rules, 2025 bring obligations into force in phases, so check the current position on the [Ministry of Electronics and Information Technology](https://www.meity.gov.in/) website. Our [DPDP Act guide for HR teams](/blog/dpdp-act-2023-for-hr-teams) covers notices, consent and breach reporting in more detail.

## Common mistakes

- Using device user IDs that do not match employee codes, and fixing the mapping by hand every month.
- Treating a single punch as an absence without giving the employee a chance to regularise.
- Assigning night-shift out-punches to the wrong date.
- Running push and file import on the same device and double-counting hours.
- Allowing attendance edits after payroll has closed instead of passing arrears.
- Forgetting to delete biometric templates from devices on exit.
- Buying devices before confirming the HRMS supports the model and firmware.

## FAQs

**Can an HRMS work with our existing biometric machines?** Usually, if the devices support a push protocol such as ADMS or can export punch logs. Confirm each model and firmware version during implementation.

**What happens to punches when the internet is down?** Push-capable devices store punches locally and send the backlog when the connection returns. Check device last-seen status so you know a site has been offline.

**Is a single punch counted as absent?** Not by default in a well-designed policy. It is an exception that the employee regularises within the window. If it is not regularised by the payroll lock, the policy decides whether it becomes LOP or a half day.

**Do employees have to consent to biometric attendance?** Biometric data is personal data under the DPDP Act. Whether you rely on consent or a legitimate use for employment depends on your facts, so take advice. Offering a non-biometric alternative reduces friction.

**Is face recognition better than fingerprint?** It is faster and contactless at busy gates, but more sensitive to lighting and masks. Many sites use face at main gates and cards elsewhere.

**How often should attendance sync to payroll?** Punches should arrive continuously, but payroll should read only the locked period after regularisation closes, typically a few days before the payroll cut-off.

## How NeevHR helps

NeevHR [attendance](/features/attendance) receives punches from biometric devices over the ADMS push protocol, with punch file import as an alternative, and shows each device's last-seen status. Punches are deduplicated and mapped to the right employee and shift, and configurable day-close rules for grace, half day and short day turn them into present, absent, late and overtime. Employees raise regularisation for missed punches, managers approve in one inbox, and unjustified exceptions surface as loss of pay before [payroll](/payroll) runs. [Shifts and rosters](/features/rostering) hold the shift and weekly-off patterns the rules depend on. To see the flow with your device models, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 17 Oct 2026.*`,
};

export default post;
