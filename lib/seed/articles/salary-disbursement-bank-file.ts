import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "salary-disbursement-bank-file",
  title: "Salary bank transfer file: NEFT/RTGS disbursement done right",
  excerpt:
    "How to prepare a salary bank transfer file for NEFT and RTGS: file fields, maker-checker, IFSC checks, holds, failed credits, cut-offs and reconciliation.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `A salary bank transfer file is the bulk payment file that payroll generates after the run is approved, listing each employee's account number, IFSC, name and net pay, which the company uploads to its corporate banking portal to credit salaries through NEFT, RTGS or the bank's internal transfer. A safe process has four controls: validated bank details, a maker-checker release, a file total that matches net pay less holds, and same-day follow-up of failed credits. Salaries for a monthly wage period must reach employees before the end of the 7th day of the following month under the Code on Wages.

This guide covers the file fields, the release workflow, IFSC and account validation, holds, failed credits and reversals, bank cut-offs, the legal deadlines and the reconciliation, with a worked example. For where disbursement sits in the payroll cycle, see our [monthly payroll process](/blog/monthly-payroll-process-step-by-step) and the [wage payment deadlines under the Code on Wages](/blog/wage-payment-deadlines-and-deductions).

## How does salary disbursement through a bank file work?

1. **Payroll is approved** and the net pay register is frozen.
2. **Payroll generates the bank file** in the format the company's bank accepts.
3. **The maker uploads the file** to the corporate banking portal, or it is sent through a host-to-host (H2H) or SFTP connection.
4. **The checker (and often a second authoriser) approves** the upload in the bank portal.
5. **The bank debits the company's account** and processes each credit: internal transfer for accounts in the same bank, NEFT or RTGS for other banks.
6. **The bank returns a status file** showing success and failure for each row.
7. **Payroll reconciles** the status file with the register and handles failures.

## NEFT, RTGS, IMPS or internal transfer: which to use?

| Mode | Settlement | Limits | Best for |
| --- | --- | --- | --- |
| Internal (same bank) transfer | Immediate within the bank | Set by the bank | Employees who hold salary accounts with the company's bank |
| NEFT | Half-hourly batches, available 24x7 since Dec 2019 | No minimum or maximum set by RBI | The bulk of salary credits to other banks |
| RTGS | Real-time, gross, available 24x7 since Dec 2020 | Minimum ₹2,00,000 a transaction | Large individual payments, such as a high F&F amount |
| IMPS | Instant, 24x7 | Up to ₹5,00,000 a transaction | Urgent single re-payments after a failure |

RBI runs NEFT and RTGS round the clock, but your bank's bulk upload and approval process may have its own processing cut-offs, especially for large files and on bank holidays. Check the current rules on the [Reserve Bank of India](https://www.rbi.org.in/) website and get your bank's bulk-file cut-off times in writing.

Many companies open a corporate salary account relationship so that most employees bank with the same bank. That makes most credits internal and instant, and only the remainder goes through NEFT.

## What fields does a salary bank file contain?

Every bank publishes its own layout (fixed-width, CSV or Excel, with its own header and trailer). The content is broadly the same:

| Field | Level | Notes |
| --- | --- | --- |
| Debit account number | Header | The company's salary funding account |
| File or batch reference | Header | Unique; the bank rejects duplicates |
| Value date | Header | The date of credit, not the generation date |
| Number of records and control total | Header or trailer | Must equal the rows and their sum |
| Payment mode | Row | Internal, NEFT or RTGS, sometimes decided by the bank |
| Beneficiary name | Row | As in the bank account; some banks limit length and characters |
| Beneficiary account number | Row | Text field, so leading zeros are kept |
| IFSC | Row | 11 characters |
| Amount | Row | Net pay, two decimals, no thousands separator |
| Employee code | Row | As the payment reference, so returns can be matched |
| Narration | Row | For example "SALARY OCT 2026", appears on the employee's statement |
| Employee email or mobile | Row, optional | For the bank's credit advice |

Get the bank's specification and a sample file, test a small file with real accounts before the first live run, and keep the specification under version control; banks change layouts.

## How do you validate bank accounts and IFSC codes?

Most failed credits come from bad master data. Validate at the point of capture, not on pay day.

- **IFSC format:** 11 characters: the first four are letters (the bank code), the fifth is the digit zero, and the last six identify the branch. Check it against the current IFSC list, because merged banks retire codes.
- **Account number:** numeric (with a few exceptions), length plausible for the bank, and stored as text.
- **Account holder name:** compare with the employee's name. A penny-drop verification (a ₹1 credit that returns the name on the account) is the most reliable check and catches wrong digits.
- **Duplicate accounts:** two employees with the same account number is a red flag for fraud or a data entry error.
- **Joint or third-party accounts:** salary should go to an account in the employee's own name. Allow exceptions only with a written request and HR approval.

### Bank detail changes: the highest-risk transaction in payroll

A changed bank account is the classic route for payroll fraud. Controls that work:

- **Maker-checker:** an employee's change request is approved by a second person before it takes effect.
- **Cooling period:** a change made in the last few days before the run takes effect from the next month.
- **Independent confirmation:** notify the employee on their registered email and mobile when the account changes.
- **Exception report:** list every employee whose account changed since last month, and review it before release.

## How should you handle salary holds?

A hold stops a specific employee's salary from going into the file. Common reasons: absconding, a pending exit settlement, a bank detail under verification, or a legal attachment order.

- **Holds need a reason, an approver and a review date.** A hold with no end date becomes an unpaid wage.
- **Wages earned are still payable.** The Code on Wages requires payment within the time limits and allows deductions only for listed purposes. Holding salary for a short period while verifying an account is defensible; withholding it as a pressure tactic is not.
- **Release on time.** Release held salary as soon as the reason clears, through a supplementary file or IMPS.
- **For leavers,** wages are due within two working days of the last day under the Code on Wages; the [full and final settlement](/blog/full-and-final-settlement-explained) guide and the [F&F calculator](/tools/full-and-final-calculator) cover the rest of the dues.

## What happens when a salary credit fails?

Some credits always fail: closed accounts, dormant accounts, wrong account numbers, frozen accounts or invalid IFSC codes. Under RBI's NEFT rules, the beneficiary bank must credit or return the money within a short window after the batch, so returns usually reach you the same day.

1. **Read the status file the same day** and list failures with the return reason.
2. **Contact the employee,** get corrected details and verify them through the normal maker-checker route.
3. **Re-pay** by a supplementary file or IMPS once the returned amount is back in the account.
4. **Record the return and the re-payment** against the employee, so the register, bank statement and payslip agree.
5. **Do not re-pay before the return is credited back,** or a delayed credit can result in a double payment that has to be recovered.

## When must salary be paid?

| Situation | Deadline under the Code on Wages |
| --- | --- |
| Monthly wage period | Before the end of the 7th day of the following month |
| Weekly wage period | On the last working day of the week, before the weekly holiday |
| Removal, dismissal, retrenchment, resignation or closure | Within two working days |

Some state laws set an earlier date; pay by whichever is earlier. The 7th is a legal outer limit, not a target, and a bank holiday on the 7th means the credit must land earlier. Fix your file release date at least one working day before the pay date to leave time for failures.

## Worked example: a month's disbursement and reconciliation

A manufacturing company has 1,250 employees on the October 2026 payroll.

- **Net pay in the approved register:** ₹4,87,62,500.
- **Holds:** 6 employees (2 absconding, 3 in exit settlement, 1 bank account under verification), totalling ₹3,12,000.
- **Bank file:** ₹4,87,62,500 minus ₹3,12,000 = ₹4,84,50,500, across 1,250 minus 6 = 1,244 rows.

The bank's control check confirms 1,244 records and ₹4,84,50,500. Funding: finance transfers ₹4,84,50,500 to the salary account before the cut-off.

**Status file:** 1,241 credits succeed; 3 fail (one closed account, one invalid account number, one account frozen), totalling ₹1,05,400.

- **Credited on day 1:** ₹4,84,50,500 minus ₹1,05,400 = ₹4,83,45,100.
- **Returned and re-paid by IMPS on day 2** after corrected details are verified: ₹1,05,400.
- **Held salaries released later** as each case clears.

**Reconciliation:** credited ₹4,83,45,100 + re-paid ₹1,05,400 + held ₹3,12,000 = ₹4,87,62,500, equal to net pay in the register. The bank statement debits match the two payment dates. Our [payroll reconciliation guide](/blog/payroll-reconciliation-guide) shows how this ties into the journal voucher.

## Security for salary files

- **Never email salary files** or leave them on shared drives. Upload directly, or use H2H or SFTP with encryption.
- **Lock the file once generated.** If any row changes, regenerate it from payroll, never edit it in Excel.
- **Separate duties:** the person who prepares payroll should not be the one who authorises the bank release.
- **Keep the audit trail:** who generated, uploaded and approved, with timestamps.
- **Protect personal data:** account numbers and pay are personal data under the DPDP Act; restrict access and retention.

## Common mistakes

- Editing the bank file in Excel after it is generated, which breaks the control total and invites fraud.
- Storing account numbers as numbers, so leading zeros vanish.
- Accepting bank detail changes by email with no second approval.
- Re-paying a failed credit before the return is credited back.
- Holding salaries indefinitely with no reason or review date.
- Releasing the file on the 7th and leaving no time to fix failures.

## FAQs

**What is a salary bank file?** A bulk payment file, in the format your bank specifies, listing each employee's account details and net pay. It is uploaded to the corporate banking portal to credit salaries in one batch.

**Is NEFT or RTGS better for salary?** NEFT for most salaries, because it has no minimum amount and runs in half-hourly batches. RTGS has a ₹2,00,000 minimum per transaction and suits large individual payments.

**What is the deadline for salary payment in India?** For monthly wage periods, before the end of the 7th day of the following month under the Code on Wages, and within two working days on resignation, dismissal or retrenchment.

**What should we do if a salary credit fails?** Read the bank's status file the same day, get corrected details from the employee, verify them, and re-pay once the returned amount is back in your account.

**Can an employer hold an employee's salary?** Only briefly and for a documented reason, such as verifying a bank account. Earned wages remain payable within the legal deadline, and deductions are allowed only for purposes the Code on Wages lists.

## How NeevHR helps

NeevHR [payroll](/payroll) runs compute, verify, approve and publish with separation of duties and an exception report, then generates NEFT and RTGS bank files, the payroll register and a GL journal from the same approved figures. Bank detail changes go through maker-checker approval on the [employee record](/features/employees), and the [monthly payroll checklist](/blog/monthly-payroll-checklist) covers the steps around it. To see a run go from approval to bank file, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
