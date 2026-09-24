import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "hrms-security-checklist",
  title: "HRMS security checklist: questions to ask before you buy",
  excerpt:
    "The security questions to ask an HRMS vendor before you buy: data isolation, encryption, MFA, SSO, access control, audit logs, backups, hosting and DPDP.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `Before you buy an HRMS, ask the vendor to show, not just state, how it separates your data from other customers, encrypts sensitive fields such as PAN, Aadhaar and bank details, controls who can see what, logs every change, backs up and restores data, and supports your duties under the Digital Personal Data Protection Act, 2023. Treat security review as a gate in the buying process, not a formality at the end, and use the questions below as your checklist.

## Why HRMS security deserves its own review

An HRMS stores identity numbers, bank accounts, salaries, tax declarations, family details, medical leave records and disciplinary notes for every employee, past and present. A leak harms real people and is hard to undo: you can reset a password, but not a PAN.

Accountability also stays with you. Under the DPDP Act, your company is the data fiduciary for employee data and the HRMS vendor is a data processor acting for you. The Act allows penalties of up to ₹250 crore for failing to take reasonable security safeguards, and the obligation to take those safeguards rests with the fiduciary, even when a processor holds the data. See [MeitY](https://www.meity.gov.in/) for the Act and the Rules.

## 1. Data isolation

Most cloud HRMS products are multi-tenant: many customers share the same application and database. That is normal and can be secure, but you need to know how separation is enforced.

- Is tenant separation enforced only in application code, or also in the database, for example through row-level security that the application cannot bypass?
- How is isolation tested, and how often?
- Are production and test environments separate, and is real customer data ever copied into testing?
- Can vendor staff query production data, and if so, how is that access approved and logged?

## 2. Encryption

Ask about three layers:

- **In transit.** All traffic, including APIs and any mobile app, should be served over HTTPS.
- **At rest.** The database, file storage and backups should be encrypted at the storage level.
- **Field level.** PAN, Aadhaar, UAN and bank account numbers deserve separate encryption on top of storage encryption, so that someone with database or backup access does not see them in plain text. Ask which fields are covered, which algorithm is used, who holds the keys and how keys are rotated.

Encryption protects stored data; masking protects what people see on screen. Ask whether sensitive fields can be masked or hidden by role, so a recruiter or line manager never sees a full bank account number.

## 3. Authentication: MFA and SSO

- **Multi-factor authentication.** Can MFA be enforced for every user, or at least for HR, payroll and admin roles? Which methods are supported, such as authenticator-app codes, and how are recovery codes handled?
- **Password and session controls.** Minimum length, lockout after failed attempts, session timeouts and the ability to revoke sessions.
- **Single sign-on.** Many companies want SSO through their identity provider so that joiners get access and leavers lose it from one place. If SSO is a requirement for you, confirm the protocol and identity providers supported and whether it is included or priced separately. If a product does not offer SSO, check the compensating controls, including enforced MFA, strong password policy and a reliable process to disable access at exit.

## 4. Access control: roles and data scopes

Role-based access control decides what actions a person can take. Data scopes decide whose records they can see. You need both.

- Can a role be limited to specific legal entities, locations, departments or a reporting line?
- Can salary and identity fields be masked for roles that do not need them?
- Is payroll split into separate steps, such as compute, verify, approve and publish, so that one person cannot both prepare and release a payroll?
- Can access be granted for a limited period, for example to an auditor?
- How do you review who has access to what?

During evaluation, log in as a manager, a recruiter and a payroll executive and check that each sees only what they should. This takes an hour and catches more than any questionnaire. Repeat the test with your real roles during user acceptance testing in your [implementation plan](/hrms-implementation).

## 5. Audit logs

- Does the log record who changed what, when, and the old and new values?
- Are administrative actions covered: role changes, permission grants, policy and settings changes?
- Are payroll approvals and bank detail changes logged?
- Can logs be searched and exported, and how long are they kept?

India's CERT-In directions of 28 April 2022 require service providers and body corporates to keep logs of their ICT systems for a rolling 180 days within India and to report specified cyber incidents within 6 hours of noticing them. Ask the vendor how it meets these requirements. See [CERT-In](https://www.cert-in.org.in/).

## 6. Backups and disaster recovery

- How often are backups taken, how long are they kept, and are they encrypted?
- When was a restore last tested?
- What are the recovery point objective (how much data could be lost) and recovery time objective (how long until service returns), in writing?
- What happens if an outage hits on payroll day?

A recovery point objective of 24 hours, for example, means a full day of attendance corrections and payroll inputs could need re-entering after a failure. Decide whether that is acceptable around payroll dates.

## 7. Hosting location

- In which country and cloud region is production data hosted? Where are backups kept?
- Which subprocessors handle your data, such as cloud hosting, email or SMS providers?
- From where do support staff access the system?

The DPDP Act permits transfers outside India except to countries the government restricts by notification, and sector regulators can impose stricter rules. Many Indian employers still prefer India hosting because it simplifies their compliance position.

## 8. DPDP Act 2023 readiness

The DPDP Act was enacted on 11 August 2023, and the DPDP Rules, 2025 were notified on 13 November 2025 with an 18-month phased commencement. Consent manager provisions follow on 13 November 2026, and the substantive obligations, including notice, consent, security safeguards, breach notification and data principal rights, apply from 13 May 2027. Check readiness now, during evaluation. Ask how the HRMS supports:

- **Lawful basis and consent.** The Act allows certain processing for employment purposes as a legitimate use; other purposes need consent. You need a record of which applies and, where consent is used, a consent register. Take legal advice on which basis fits each purpose.
- **Data principal rights.** Employees can request access, correction, updating and erasure, and can nominate someone to act for them. The Rules require such requests to be addressed within 90 days, so requests should be logged and tracked to closure.
- **Retention and erasure.** Personal data should be erased once its purpose is served unless a law requires you to keep it, and payroll and tax records do carry retention requirements. A retention schedule, with legal hold for records under dispute, lets you apply both rules.
- **Breach notification.** A breach must be reported to the Data Protection Board and to affected individuals. Agree in the contract how quickly the vendor will tell you about an incident.

## 9. Certifications and independent assurance

Certifications are useful evidence, but only if you read them carefully.

- Ask what is actually held today, not what the vendor is "aligned with" or "working towards".
- For ISO/IEC 27001, ask for the certificate and check the scope, the certification body and the validity dates. Confirm the product and hosting you will use are within scope.
- For a SOC 2 report, ask whether it is Type I or Type II, the period covered and any exceptions noted.
- Ask for the date and summary of the most recent independent penetration test and what was remediated.

If a vendor holds no certification, that is not automatically disqualifying for a mid-sized buyer, but you should expect more direct evidence instead: a completed security questionnaire, a penetration test summary, written policies and a live walk-through of controls.

## 10. Vendor due diligence and contract

- A data processing agreement that sets out purpose, security obligations, subprocessors, breach notification timelines and audit rights.
- Background checks and access controls for vendor staff.
- Data export at the end of the contract in a usable format, and written confirmation of deletion afterwards. The same questions apply in reverse when you move in: see our guide to [HRMS data migration](/hrms-data-migration).
- Support and uptime commitments, especially around payroll dates.

## One-page summary

| Area | Ask | A good answer looks like |
| --- | --- | --- |
| Isolation | How is my data kept separate? | Database-level controls, tested, not just application code |
| Encryption | Which fields are encrypted beyond storage? | PAN, Aadhaar, UAN and bank encrypted at field level, keys rotated |
| MFA | Can we enforce it for all users? | Yes, with recovery codes and admin enforcement |
| SSO | Is it supported, and at what cost? | A clear yes or no, with compensating controls if no |
| Access | Can roles be limited by entity, department or team? | Data scopes plus field masking, tested in the demo |
| Payroll controls | Can one person prepare and release payroll? | No: separate compute, verify, approve and publish steps |
| Audit | Are old and new values logged? | Yes, including admin and permission changes |
| Backups | What are the RPO and RTO? | Stated in writing, with restore tests |
| Hosting | Where is data hosted and backed up? | Named country and region, subprocessor list |
| DPDP | How are consent, requests and retention handled? | Built-in registers and workflows, not spreadsheets |
| Assurance | Which certifications are held today? | Certificates or reports you can read, or direct evidence |

## Common mistakes

- **Accepting "bank-grade security" as an answer.** Ask for specifics: which controls, where, and how you can verify them.
- **Treating a certificate as proof of everything.** Check its scope and dates, and still test access control yourself.
- **Not testing roles with real users.** Most exposure in HR systems comes from people seeing records they should not, not from outside attacks.
- **Leaving salary sheets outside the system.** If payroll files still circulate by email after go-live, the HRMS controls protect only part of your data.

## FAQs

**Is a cloud HRMS less secure than an on-premise one?** Not inherently. A well-run cloud service often has stronger controls than an in-house server. What matters is the specific controls, and whether the vendor can evidence them.

**Do we need SSO?** It depends on how you manage identities. If you already run a central identity provider and want one place to grant and remove access, SSO is valuable. If not, enforced MFA and a disciplined exit process can be adequate.

**Does the DPDP Act apply to employee data?** Yes. It applies to digital personal data, including employee data held in an HRMS. Certain employment purposes may qualify as legitimate uses, which affects whether consent is needed, but security safeguards and breach duties apply either way.

**Who is responsible if the vendor has a breach?** Your company remains the data fiduciary and is accountable to employees and the regulator. The contract with the vendor should allocate responsibilities, notification timelines and cooperation.

## How NeevHR helps

NeevHR separates each company's data with Postgres row-level security, encrypts PAN, Aadhaar, UAN and bank details at the field level, supports TOTP-based MFA, and applies role-based access with data scopes, field-level masking, payroll separation of duties and an audit log, all hosted in India. For the DPDP Act it provides consent records, data principal request tracking, retention schedules and legal hold. Single sign-on is not currently available, and NeevHR does not currently hold SOC 2 or ISO 27001 certification, so we walk your IT team through the controls directly; see our [security overview](/security) or [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
