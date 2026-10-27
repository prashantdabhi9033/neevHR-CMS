import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "hr-records-retention-india",
  title: "Employee records retention period in India: a practical schedule",
  excerpt:
    "Employee records retention period in India: how long to keep payroll, PF, ESI, TDS, attendance and exit records, how DPDP applies, and a retention schedule.",
  category: "compliance",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `There is no single law in India that sets one retention period for employee records. Each law sets its own, and the practical rule for payroll, tax and statutory contribution records is to keep them for at least eight financial years, because that is what the Companies Act, 2013 requires for books of account and vouchers. Personnel files, attendance and candidate data need their own periods, and once a record's purpose and legal period have ended, the DPDP Act, 2023 expects you to delete it.

This guide covers what each law requires, how the DPDP Act changes the picture, a retention schedule you can adapt, litigation holds and secure deletion. For the data protection basics, read [the DPDP Act for HR teams](/blog/dpdp-act-2023-for-hr-teams), and for where retention fits in a wider compliance review, see our [HR audit checklist](/blog/hr-audit-checklist-india).

## Is there one law on employee records retention in India?

No. Retention periods come from several laws, written for different purposes:

- **Company law** fixes how long accounting records are kept. Salary is an expense, so payroll records are part of the books.
- **Tax law** sets how long the department can examine or reopen a year, which decides how long you need TDS evidence.
- **Labour law** (now the four Labour Codes, in force since 21 Nov 2025) prescribes registers and the period for which they are preserved, through Central and state rules.
- **Limitation law** decides how long an employee or the government can bring a claim, which tells you how long you need the evidence to defend it.
- **Data protection law** pulls the other way: it says do not keep personal data longer than the purpose needs, unless a law requires you to.

The retention period for any record is the longest period that any applicable law or live risk requires, and no longer.

## What do the main laws say?

| Law | Records affected | Period (verify for your entity) |
| --- | --- | --- |
| Companies Act, 2013 | Books of account and relevant vouchers, which include payroll | Not less than eight financial years immediately preceding the current year |
| Income-tax law | Books, TDS records, declarations and proofs | As long as assessment or reassessment of the year is possible; the Income-tax Act, 2025 replaced the 1961 Act from 01 Apr 2026, so confirm the current period with your tax adviser |
| Code on Wages and OSH Code, with rules | Registers of employees, wages, attendance, overtime, deductions, leave | As prescribed by the Central or state rules that apply; rules are still being notified in some states |
| Code on Wages | Wage claims | Claims can usually be made within three years, so wage evidence must outlive that window |
| Code on Social Security | PF, ESI, gratuity and maternity records | Assessments of dues can look back several years; check the time limits in the Code and schemes |
| Limitation Act, 1963 | Civil claims, such as contract disputes | Generally three years for most claims, though the start date varies |
| Information Technology Act, 2000 | Any record kept electronically | A legal duty to retain a record can be met electronically if it stays accessible, accurate and traceable to its origin |
| DPDP Act, 2023 and DPDP Rules, 2025 | All personal data | Erase when the purpose is served, unless a law requires retention; the Rules also require certain processing logs to be kept for a minimum period |

Where a period is uncertain, the eight-year Companies Act rule is the usual anchor for anything connected to pay, because it covers most tax and statutory look-back windows. If a proceeding is pending for a year, keep its records until it is closed, however long that takes.

## How does the DPDP Act affect HR record retention?

The DPDP Act is not a retention law, but it makes over-retention a compliance risk. Under the DPDP Rules, 2025, the main obligations (notice, consent, security safeguards, breach notification and data principal rights) apply from 13 May 2027, so a retention schedule built now is preparation, not paperwork.

Four points matter for HR:

- **Employment is a legitimate use.** The Act lets an employer process personal data for employment purposes without fresh consent for each use. That covers running payroll and statutory compliance during employment.
- **The purpose ends.** When employment ends, many purposes end with it. What remains is what the law still requires (pay, tax, PF, gratuity records) and what you need to defend a likely claim.
- **Legal retention wins.** The duty to erase does not override a law that requires you to keep a record. That is why payroll can be kept for eight years while a rejected candidate's CV cannot.
- **Retention must be specific.** "Keep everything forever" fails the purpose test. "Keep the payroll register for eight financial years under the Companies Act" passes it.

A practical approach is to keep the statutory core and delete or anonymise the rest. Bank account numbers, home addresses and family details are needed for pay and PF while employed; seven years after exit, the payroll record may still need the account number used, but the employee's emergency contact does not need to exist.

## Employee records retention schedule

Adapt this to your entities and take advice before adopting it. Periods run from the trigger shown.

| Record | Examples | Suggested retention | Trigger | Basis |
| --- | --- | --- | --- | --- |
| Payroll register and payslips | Salary sheets, payslips, arrears, F&F | 8 financial years | End of the financial year of payment | Companies Act; tax |
| Bank transfer files | NEFT and RTGS files, bank confirmations | 8 financial years | End of the financial year of payment | Companies Act |
| TDS records | Form 24Q (now Form 138), challans, Form 16 (now Form 130), declarations, proofs | 8 financial years | End of the financial year | Tax look-back |
| PF records | ECRs, challans, KYC approvals, nominations | 8 financial years, and nominations until all dues are settled | End of the financial year | Code on Social Security; dues assessment |
| ESI records | Contribution files, challans, accident reports | 8 financial years | End of the financial year | Code on Social Security |
| PT and LWF records | Challans and returns by state | 8 financial years | End of the financial year | State law; tax practice |
| Labour Code registers | Employees, wages, attendance, overtime, deductions, leave | The period in your applicable rules, but not less than the payroll period where they support pay | Last entry | Code on Wages; OSH Code |
| Raw attendance data | Biometric punches, geolocation, selfies | 1 to 3 years, once summarised into the attendance register | Month closed | DPDP purpose limitation |
| Personnel file | Offer, appointment, confirmation, transfer, promotion and increment letters | Employment plus 8 years | Exit date | Contract claims; tax |
| Minimal service record | Name, employee code, dates, designation, last salary | Longer, as a policy choice, for service and pension queries | Exit date | Legitimate need; document it |
| Identity documents | Aadhaar (masked), PAN, passport copies | Employment plus the payroll period only where tied to statutory filings; otherwise delete at exit | Exit date | DPDP minimisation |
| Background verification reports | Education, employment, address checks | Up to 1 year after joining, unless a dispute exists | Joining date | DPDP purpose limitation |
| Disciplinary and POSH records | Notices, enquiry proceedings, findings, orders | 8 years from closure, or until any litigation ends | Case closure | Limitation; defence of claims |
| Exit records | Resignation, clearance, gratuity computation, relieving letter | 8 financial years | End of the financial year of F&F | Companies Act; gratuity claims |
| Rejected candidate data | CVs, interview notes, assessments | 6 to 12 months, longer only with consent | Decision date | DPDP purpose limitation |
| Exit interview notes | Interview forms, survey responses | 2 to 3 years, then anonymise | Exit date | Analytics need only |

## Worked example: working out a deletion date

Neha resigns, and her last working day is 15 Jan 2027. Her full and final settlement is paid on 10 Feb 2027, in FY 2026-27. She had 10 years of service and last-drawn Basic plus DA of ₹60,000 a month.

Her gratuity is ₹60,000 × 15 ÷ 26 × 10 = ₹3,46,154. If she later disputes the amount, you need the salary history, the service dates and the computation, which is why exit and payroll records follow the long period. (Our [gratuity calculator](/tools/gratuity-calculator) shows the same arithmetic.)

| Record | Retention rule | Earliest deletion |
| --- | --- | --- |
| F&F payroll record, gratuity computation, bank file | 8 financial years after FY 2026-27 (FY 2027-28 to FY 2034-35) | 01 Apr 2035 |
| TDS records for FY 2026-27 | Same 8-year rule | 01 Apr 2035 |
| Personnel file | Exit plus 8 years | 15 Jan 2035 |
| Background verification report from 2017 | 1 year after joining | Already due for deletion |
| Raw biometric punches for December 2026 | 2 years after month close (this company's policy) | 01 Jan 2029 |
| Exit interview notes | 3 years, then anonymise | 15 Jan 2030 |

The Companies Act counts back eight financial years from the current one. In FY 2035-36, the eight preceding years are FY 2027-28 to FY 2034-35, so FY 2026-27 records can go from 01 Apr 2035, provided nothing is pending.

## What is a litigation hold?

A litigation hold suspends deletion for records connected to a dispute, inspection or proceeding. Typical triggers: a legal notice from an employee, a labour court case, an EPF or ESI assessment, a tax notice for a year, or a POSH complaint that may go to court. When a hold is placed, tag every affected record, stop scheduled deletion for those records only, and release the hold in writing when the matter closes. A schedule with no hold mechanism will one day delete the evidence you need.

## How should HR records be deleted securely?

Deletion is a process, not a button. Build it into your schedule:

- **Delete on a calendar.** Run deletion quarterly or half-yearly, by record class, with an approval from HR and the data protection lead.
- **Cover every copy.** Primary systems, shared drives, email attachments, exported spreadsheets and vendor systems (payroll processors, verification agencies, insurers).
- **Handle backups honestly.** You cannot always edit a backup; let deleted data expire as backups rotate, and never restore it into live systems.
- **Shred paper properly.** Use cross-cut shredding or a vendor that issues a certificate of destruction for personnel files and payslips.
- **Log the deletion, not the data.** Record what class of record was deleted, for which period and when, without keeping the personal data itself.
- **Anonymise for analytics.** Attrition and pay analysis can use anonymised data indefinitely once names, codes and identifiers are removed.

## Paper or electronic: which counts?

Either, if the record is complete and accessible. The Information Technology Act, 2000 allows a legal duty to retain documents to be met with electronic records, provided they remain accessible, are retained in their original format or one that accurately represents it, and carry details of origin, destination and date where available. Scanning old personnel files and destroying the paper is usually fine for HR records; keep originals only where a specific law or a pending case demands them.

## Common mistakes

- Keeping everything forever because nobody owns the retention schedule.
- Deleting payroll records after three years because a labour rule said so, forgetting the eight-year company law rule.
- Holding rejected candidates' CVs for years "in case a role opens".
- Retaining unmasked Aadhaar copies long after exit.
- Deleting records under a pending EPF assessment or labour case.
- Clearing the HRMS but forgetting exported spreadsheets and vendor copies.

## FAQs

**How long should employee records be kept in India?** There is no single period. Keep payroll, tax and PF and ESI records for at least eight financial years, personnel files for the duration of employment plus a defined period, and delete purpose-limited data such as candidate CVs much sooner.

**How long should payroll records be retained?** At least eight financial years from the end of the year they relate to, which meets the Companies Act requirement and covers most tax and statutory look-back windows. Keep longer if a proceeding is pending.

**Can we delete an ex-employee's data on request under the DPDP Act?** You must erase data that is no longer needed, but not data a law requires you to keep. Explain what you are retaining, under which law and until when, and delete the rest.

**How long can we keep rejected candidates' data?** Only as long as the hiring purpose needs, commonly 6 to 12 months. To keep a CV for future roles, take the candidate's consent and set an expiry.

**Do electronic records satisfy retention requirements?** Generally yes. Electronic records meet a legal retention duty if they remain accessible, accurate and traceable, under the Information Technology Act, 2000.

## How NeevHR helps

NeevHR [documents](/features/documents) lets you set a retention class for each document category, keeps versions and tracks expiry, and [employee records](/features/employees) hold every change on an effective-dated timeline with field-level visibility by role. Our [DPDP page](/dpdp) explains how access control, masking and audit support a retention policy. To see it on your own record classes, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
