import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "ecr-explained",
  title: "ECR explained: filing the PF electronic challan cum return",
  excerpt:
    "What the PF ECR is, what the file contains, how the revamped return and payment flow works on the EPFO portal, TRRN, rejections, revisions and the due date.",
  category: "compliance",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `The Electronic Challan cum Return (ECR) is the monthly PF return an employer uploads on the EPFO employer portal. It lists every member's wages and contributions for the wage month and becomes the basis for the challan the employer pays. The return and payment for a wage month are due by the 15th of the following month. Since the wage month of September 2025, EPFO has run a revamped ECR system that separates return filing from payment, validates the file more strictly, and calculates interest and damages automatically.

This article covers the mechanics of the ECR itself. For the basics of PF contributions, see our [EPF overview](/blog/epf-explained-contribution-uan-withdrawal).

## What the ECR does

The ECR does two jobs in one filing:

- **Return:** member-wise wages and contributions, which EPFO posts to each member's account against their UAN.
- **Challan:** the account-wise amount the establishment owes for the month (EPF, EPS, EDLI and administrative charges), which the employer then pays online.

Because the posting is member-wise, the ECR is also how an employee's passbook gets updated. A wrong or late ECR shows up directly as a missing or wrong entry in the employee's PF account.

## What goes into the ECR file

The ECR is uploaded as a text file (.txt) in the layout EPFO publishes. The portal's Help button on the upload screen has the current format and field details. EPFO confirmed that the file format did not change with the revamp.

At a high level, each row describes one member for the wage month:

| Field group | What it captures |
| --- | --- |
| Member identity | UAN and member name |
| Wages | Gross wages, EPF wages, EPS wages and EDLI wages |
| Contributions | Employee EPF share, EPS contribution, and the employer's EPF share (the difference between 12% and EPS) |
| Service | Non-contributory period (NCP) days, such as unpaid absence |
| Adjustments | Refund of advances, where applicable |

Some practical rules on the file itself, from EPFO's upload guidance: use only letters and numbers in the file name, keep the text file within the size limit (larger files are compressed into a zip containing only that one text file), and do not bundle other files.

Wages must be consistent with how contributions are calculated. EPS wages are capped at the ceiling, which is ₹25,000 a month from 17 September 2026 (earlier ₹15,000), and EDLI wages are capped the same way. EPF wages can exceed the ceiling if the employer contributes on actual basic. September 2026 straddles the change (1 to 16 September at ₹15,000, 17 to 30 September at ₹25,000), and EPFO's operational guidance on reporting that split in the ECR was still awaited at the time of writing, so check the portal before filing that month. EPFO has also asked employers to report accurate gross wages, because gross wages feed schemes such as the Employment Linked Incentive.

## The monthly process on the revamped portal

EPFO's user manual for the re-engineered ECR describes the flow on the [employer portal](https://unifiedportal-emp.epfindia.gov.in/):

1. **Log in** and go to Payments, then Return Filing.
2. **Open the Return Monthly Dashboard**, pick the wage month and choose View/Upload. You can download the active member list here, which is a useful check before uploading.
3. **Upload the return file**, choose the return type (Regular, Supplementary or Revised) and the contribution rate (12% or 10%).
4. **Fix errors if any.** A failed upload produces an error file; correct and re-upload.
5. **Download and check the return statement**, then Approve or Reject. An approved return cannot be cancelled; later corrections need a Revised Return.
6. **Review the Due Deposit Balance Summary.** It shows account-wise dues, amounts paid, balance, and any interest and damages.
7. **Prepare the challan.** Choose Full Payment or Part Payment. Separate options exist for administrative and inspection charges and for interest and damages.
8. **Pay online** using the TRRN, selecting your bank from the list.
9. **Download the receipt** from View/Pay Challan and keep the TRRN, challan and bank receipt on file.

### The three return types

| Return type | When to use it | Key conditions |
| --- | --- | --- |
| Regular | The main monthly return for active members | Months must be filed in order |
| Supplementary | Members registered after the regular return was approved, or missed in it | Needs an approved regular return; a member cannot appear twice for the month |
| Revised | Correcting wages or contributions already reported | Only for members needing change; no other return or payment in process; downward revision only before payment starts |

## TRRN and payment

The TRRN (Temporary Return Reference Number) is generated when the challan is prepared. It identifies that challan for payment and for later queries. EPFO allows more than one challan for a wage month, which helps with part payments, but it also means you must track which TRRN paid what. Unpaid challans created under the pre-revamp system are not valid in the new one and must be regenerated.

For a wage month with no active members, the employer pays administrative and inspection charges through Direct Challan Entry, which is enabled only when there are no active members for that month.

## Due date, interest and damages

The contribution for a wage month is due within 15 days of the month's close, so September 2026 wages are due by 15 October 2026. The EPF Scheme 2026 under the Code on Social Security, 2020 retains this timeline.

Late payment carries two costs:

- **Interest:** simple interest at 12% a year on the delayed amount. The revamped system calculates it automatically and makes it payable with the contribution.
- **Damages:** under the EPF Scheme 2026, damages are 0.25%, 0.5% or 1% of the arrears per month, depending on how long the default lasts. The portal lets the employer pay damages immediately or later, but they are shown in the dues summary.

The portal labels still refer to 7Q (interest) and 14B (damages), the section numbers under the repealed 1952 Act.

For arrears of wages, such as a backdated increment, EPFO treats the month in which the arrears are actually paid as the due month for PF on those arrears.

## Common rejection reasons

Most rejections come from member data, not arithmetic:

- **Aadhaar not seeded or verified against the UAN.** Filing ECR only for Aadhaar-verified members has been mandatory since 1 June 2021, and EPFO ended the last extensions after 31 October 2025.
- **UAN not linked to your establishment, or date of joining missing.** Contributions are accepted only between a valid date of joining and date of exit.
- **Date of exit already marked.** If an exit date was entered, even by mistake, contributions after it are refused until the date is corrected through a joint declaration.
- **Ineligible EPS contributions.** The system blocks pension contributions after age 58 unless the member is flagged for deferred pension, and flags members not eligible for EPS.
- **Contribution below the statutory rate.** Contributions can be at the statutory rate or higher, not lower.
- **Duplicate members** within a return or across supplementary returns for the same month.
- **Sequence breaks.** A later month cannot be filed until earlier months are filed.
- **Exits not marked.** After the initial four-month relaxation, a regular return is allowed only if returns for all active members of the month four months earlier were filed. Leavers who were never marked as exited keep causing trouble.

## Corrections

- **Before approval:** reject the return and upload a corrected file.
- **After approval, before payment:** file a Revised Return for the affected members. Downward revision is allowed only before payment starts.
- **After payment:** upward revision is generally allowed through a Revised Return. Downward corrections after payment are restricted, so check the return statement carefully before approving.
- **Missed employees:** use a Supplementary Return.
- **Member data errors** (name, date of birth, gender, Aadhaar): use the KYC or joint declaration functions, not the ECR.

## Common mistakes

- Approving the return without reading the return statement against payroll.
- Uploading before new joiners have a UAN linked and Aadhaar verified.
- Not marking exits on the portal in the month the employee leaves.
- Using a Supplementary Return to fix wages, or a Revised Return to add a new joiner.
- Losing track of TRRNs when several challans exist for one month.
- Keeping the old ₹15,000 EPS and EDLI cap in payroll after 17 September 2026.

## FAQs

**Is the ECR the same as the PF challan?** The ECR is the return. The challan is generated from it after approval and carries the TRRN used to pay.

**Can we file ECR for only some employees?** A regular return should cover all active members. Members added later go in a supplementary return, and the four-month relaxation for partial filing has ended.

**What if we have no employees in a month?** Pay administrative and inspection charges through Direct Challan Entry.

**Did the file format change with the revamp?** No. EPFO confirmed the text layout is unchanged; the validations and workflow are stricter.

## How NeevHR helps

NeevHR generates the PF ECR file and challan from the approved [payroll](/payroll) run, so the wages and contributions in the file match what was deducted. The payroll exception report flags issues before approval, and exits recorded in NeevHR's [exit workflow](/features/exit) give you the dates to mark on the portal. The employer uploads the file, approves the return and pays on the EPFO portal.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
