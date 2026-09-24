import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "form-24q-explained",
  title: "Form 24Q explained: the quarterly TDS return for salary",
  excerpt:
    "What Form 24Q, now Form 138, contains: Annexure I and II, quarterly due dates, preparing it with RPU and FVU, challan matching, corrections and late fees.",
  category: "compliance",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `Form 24Q is the quarterly statement in which an employer reports the tax it deducted from salaries and the challans through which that tax was paid. It is due four times a year, by 31 July, 31 October, 31 January and 31 May, and from tax year 2026-27 it is called Form 138 (formerly Form 24Q) under the Income-tax Act, 2025. What the employer reports in it is exactly what employees later see as tax credit against their PAN and in Part A of their Form 16.

If you want to understand how the monthly TDS figures are calculated in the first place, read [Salary TDS explained](/blog/salary-tds-explained) first. This guide is about reporting those figures correctly.

## The name change, and what stays the same

The Income-tax Act, 2025 took effect on 1 April 2026. Salary TDS moved to section 392 and the forms were renumbered: Form 24Q is now Form 138 and Form 16 is now Form 130. [Protean](https://www.protean-tinpan.com/), which runs the e-TDS system, lists Form 138 for tax year 2026-27 onwards and Form 24Q for FY 2025-26 and earlier years. So the statement for January to March 2026, due 31 May 2026, was still a Form 24Q, and the April to June 2026 quarter was the first Form 138. Corrections to older years stay in the old format.

The due dates, the annexure structure and the preparation and validation workflow carry over. This article uses "Form 24Q" as the familiar name throughout.

## What the return contains

| Block | What it holds |
| --- | --- |
| Deductor details | TAN, PAN, name, address, type of deductor and the person responsible for deduction |
| Challan details | Each tax payment for the quarter: BSR code, date of deposit, challan serial number, and the tax, interest and fee paid |
| Annexure I (every quarter) | Deductee-wise rows: for each employee and each payment, the PAN, name, amount paid, date of payment, tax deducted, tax deposited and the challan it belongs to |
| Annexure II (last quarter only) | The full-year salary and tax computation for each employee |

Under the new Form 138, a third annexure also appears in the last quarter for the pension and interest income of specified senior citizens. It is meant for specified banks and does not concern a normal employer.

## Annexure I: the deductee rows

Annexure I is where each rupee of TDS is attributed to a person and a challan. For a monthly payroll, that usually means three rows per employee per quarter, one for each salary payment. Each row carries the employee's PAN, the salary paid, the date of payment, the tax deducted and the challan through which it was deposited. Special cases are flagged on the row, for example deduction at a higher rate because the employee has no PAN.

Two rules drive most of the checking:

- The rows linked to a challan cannot add up to more than that challan's tax amount.
- The PAN on each row decides whose tax credit the deduction becomes. A wrong PAN gives the credit to someone else, and a missing PAN leaves the employee with none.

## Annexure II: the year in one row per employee

In the last quarter, Annexure II reports the complete computation for every employee: period of employment, the regime used, gross salary split into salary, perquisites and profits in lieu of salary, exemptions such as HRA, the standard deduction, professional tax, any house property loss or other income the employee declared, deductions (the old 80C, 80D and others under the old regime), salary and TDS from a previous employer, tax, rebate, cess and TDS deducted. Landlord PAN where annual rent exceeds ₹1,00,000 and lender details for a home loan are reported here too.

Annexure II must agree with Part B of Form 16, because both come from the same computation. If they differ, the employee's return, the department's records and the certificate tell three different stories.

## Due dates

| Quarter | Period | Due date |
| --- | --- | --- |
| Q1 | April to June | 31 July |
| Q2 | July to September | 31 October |
| Q3 | October to December | 31 January |
| Q4 | January to March | 31 May |

Form 16 is due by 15 June, after the Q4 statement has been filed and processed. The tax itself is due much earlier: by the 7th of the month after deduction, and by 30 April for March. If no tax was deducted in a quarter, a statement may not be required, but TRACES lets you record a declaration of non-filing so that the department does not treat the gap as a default.

## Preparing the return: RPU, CSI and FVU

1. **Close and reconcile the quarter.** Total TDS in the payroll register for each month should equal the challan paid for that month.
2. **Download the CSI file.** The Challan Status Inquiry file for your TAN, downloaded from the income tax e-filing portal, lists your challans as the banks reported them.
3. **Prepare the statement file.** Use Protean's free Return Preparation Utility (RPU), or export the file from payroll software in the prescribed format.
4. **Validate with the File Validation Utility (FVU).** The FVU checks structure, PAN formats and totals, and verifies challan details against the CSI file. It returns either an error report or a validated file ready to upload.
5. **File.** Upload the validated file on the e-filing portal from the TAN login, verified with a digital signature certificate or EVC, or submit it through a TIN Facilitation Centre.
6. **Track processing.** After processing, TRACES shows any defaults and lets you download a justification report explaining them.

Protean publishes separate RPU and FVU versions for tax year 2026-27 onwards and for older years, and updates them from time to time. Always download the current version for the year you are filing; a file validated with the wrong version will be rejected.

## Challan matching, where most defaults begin

TRACES matches each challan in your statement against the bank's record using the BSR code, date of deposit, challan serial number and amount. Any mismatch makes the challan "unmatched", and every deductee row tagged to it loses credit until it is fixed.

The other common problem is short payment. Take a Q2 with these figures:

| Month | TDS in Annexure I rows | Challan paid |
| --- | --- | --- |
| July | ₹4,20,000 | ₹4,20,000 |
| August | ₹4,35,000 | ₹4,30,000 |
| September | ₹4,50,000 | ₹4,50,000 |
| Total | ₹13,05,000 | ₹13,00,000 |

The August challan is ₹5,000 short of the tax reported as deducted. The statement will show a short payment default of ₹5,000, and employees whose rows exceed the challan will not get full credit. The fix is to deposit the ₹5,000 with interest for late payment through a fresh challan, and tag the affected rows to it: in the statement itself if it has not yet been filed, or through a correction if it has. The reconciliation in step 1 exists to catch exactly this before filing.

## Corrections

Errors found after filing are fixed with a correction statement, not a fresh return.

- Download the consolidated file for the original statement from TRACES. This needs the token number of the original statement and some challan or PAN details to authenticate.
- Prepare the correction in the RPU, validate it with the FVU, and file it the same way as a regular statement.
- Some fixes, such as certain PAN and challan tagging corrections, can be made online in TRACES with a digital signature.

Typical corrections are wrong PANs, challan details or tagging, missing deductee rows and Annexure II salary figures. Corrections are subject to a time limit under the Act, and every correction delays the employee's credit, so fix issues quarterly rather than letting them pile up until Form 16 season.

## Late fee, penalty and interest

Three separate costs can apply, and they are easy to confuse:

- **Late fee.** Filing after the due date attracts a fixed fee for every day of delay, capped at the tax deductible for that statement. The fee has to be paid before the late statement is accepted.
- **Penalty.** The Act separately provides a penalty for failing to file, or for filing incorrect particulars. Under the old Act it could be avoided in limited circumstances, where the tax, fee and interest were paid and the statement was filed within a short window after the due date. Do not plan around that relief.
- **Interest.** Interest for late deduction or late deposit is charged at monthly rates for every month or part of a month, and must be paid through a challan before the statement is filed. It is separate from both the fee and the penalty.

For employees, the cost of a late or wrong statement is missing tax credit and a Form 16 Part A that does not match what was deducted from their pay.

## How Form 24Q feeds Form 16

Form 16 has two parts. Part A is generated from TRACES using the challans and Annexure I rows you reported, so it can only be downloaded after the Q4 statement is processed. Part B is the employer's computation and must agree with Annexure II. Our [Form 16 guide](/blog/form-16-explained) covers the certificate and the reconciliation behind it in more detail.

## Common mistakes

- Typing challan details by hand, so a single wrong digit in a BSR code or date leaves a challan unmatched.
- Tagging more deductee rows to a challan than it can cover.
- Filing with unverified PANs collected at joining.
- Using an FVU version meant for a different year.
- Leaving previous-employer salary out of Annexure II, so it disagrees with Form 16 Part B.
- Starting on the due date, with no time to fix FVU errors.
- Never downloading the justification report after processing.

## FAQs

**Is Form 24Q the same as Form 16?** No. Form 24Q (now Form 138) is the employer's quarterly statement to the department. Form 16 (now Form 130) is the annual certificate the employer gives each employee, and its Part A is generated from the processed statements.

**Do we file if no TDS was deducted in a quarter?** A statement may not be needed, but record a declaration of non-filing on TRACES so the quarter is not flagged as a default.

**Can a filed return be revised?** Yes, through a correction statement prepared from the consolidated file downloaded from TRACES.

**Who signs and files the return?** The person responsible for deduction, from the TAN login on the e-filing portal, using a digital signature certificate or EVC.

**Did the switch to Form 138 change the process?** The flow is the same: prepare, validate with the FVU, file, then track on TRACES. What changed is the form number, the utilities for tax year 2026-27 onwards, and a third annexure that applies to specified banks.

## How NeevHR helps

NeevHR [payroll](/payroll) keeps salary, TDS and challan details together each month, so the deductee rows and Annexure II come from the same data as the payslips. It generates the Form 24Q return text file in the NSDL FVU format for you to validate with the FVU and file, and produces Form 16 Part A and Part B PDFs from the same records. See how it fits into your [compliance](/features/compliance) calendar; NeevHR generates the files, and you validate, upload and pay on the government portals.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
