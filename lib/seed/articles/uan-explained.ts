import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "uan-explained",
  title: "UAN explained: what employers and employees need to know",
  excerpt:
    "How the PF Universal Account Number is generated and activated through face authentication, KYC seeding, transfers on job change, and employer duties.",
  category: "compliance",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `The Universal Account Number (UAN) is the 12-digit number EPFO gives each PF member for life. Every employer the person works for opens a new member ID under the same UAN, so the whole PF history sits in one place. Since 1 August 2025, a new UAN is generated only by the employee through Aadhaar-based face authentication in the UMANG app, except in a few special cases where the employer still generates it.

This article is the practical guide to UAN for HR teams: generation, activation, KYC, transfers, and what goes wrong. For how PF contributions work, see our [EPF overview](/blog/epf-explained-contribution-uan-withdrawal).

## UAN versus member ID

These two are often confused:

| | UAN | Member ID (PF account number) |
| --- | --- | --- |
| Issued to | The person | The person's employment with one establishment |
| Changes on job change | No, it stays for life | Yes, each employer creates a new one |
| Used for | Passbook across employers, KYC, claims, transfers | Posting contributions from one employer |

When an employee joins, the employer links a new member ID to the employee's existing UAN. The ECR is filed against the UAN, and contributions post to that employment's member ID.

## How a UAN is generated now

### The FAT route (the default)

In April 2025, EPFO introduced three services in the UMANG app using Aadhaar-based Face Authentication Technology (FAT): direct UAN allotment and activation, activation of existing UANs, and face authentication for already activated UANs. By a circular dated 30 July 2025, EPFO made FAT the only route for allotting new UANs from 1 August 2025.

What the employee needs:

- a valid Aadhaar number, and access to the Aadhaar-linked mobile number for OTP;
- the UMANG app and the Aadhaar Face RD app on a smartphone.

The steps, per EPFO's user manual:

1. In UMANG, open UAN Allotment and Activation, enter Aadhaar and mobile number, and give consent.
2. Enter the OTP. The system checks whether a UAN already exists for that Aadhaar. If one does, the employee is told, and no new UAN is created.
3. Complete the face scan.
4. The UAN is generated from Aadhaar data and sent by SMS, already activated. The employee can download the e-UAN card to give to the employer.

Because details are pulled straight from Aadhaar, name, date of birth and gender mismatches, a frequent source of trouble in the past, are much less likely.

### When the employer still generates the UAN

EPFO kept the employer route for exceptional cases, such as international workers and citizens of Nepal and Bhutan. For everyone else, the employer's job is to collect the UAN, not create it.

## Activation

A UAN must be activated before the member can log in to the [member portal](https://unifiedportal-mem.epfindia.gov.in/), see the passbook, update KYC or file claims. A UAN generated through FAT is activated at the same time. For an older UAN that was never activated, the employee uses UAN Activation in UMANG: enter UAN, Aadhaar and mobile, verify the OTP and complete the face scan. The system sends a temporary password by SMS.

EPFO's procedures in this area have changed several times since 2024, so check the current process on the [EPFO website](https://www.epfindia.gov.in/) before issuing joining instructions.

## KYC seeding

KYC links the UAN to the documents EPFO relies on for payments and verification.

| KYC item | Why it matters | Current process |
| --- | --- | --- |
| Aadhaar | ECR can be filed only for members whose Aadhaar is seeded and verified | Seeded at FAT generation; otherwise via the employer's KYC function or a joint declaration |
| Bank account | Claims are paid only to a seeded, verified account | Employee seeds it; verified by the bank or NPCI, with no employer approval since 3 April 2025 |
| PAN | Affects TDS on taxable PF withdrawals | Added through KYC and verified against income-tax records |

A few specifics from EPFO circulars:

- **Aadhaar is a hard gate for ECR.** Filing ECR only for Aadhaar-verified members has applied since 1 June 2021, and EPFO ended the last extensions for specified regions and industries after 31 October 2025.
- **Where name, gender and date of birth in the UAN match Aadhaar exactly,** the employer can seed Aadhaar through the KYC function on the employer portal, with no separate EPFO approval (circular of 13 August 2025).
- **Where they do not match,** or a wrong Aadhaar is linked, the correction goes through the joint declaration function, which the employer files and the regional office approves.
- **Members with Aadhaar-verified UANs** can correct many profile fields themselves under the simplified joint declaration process introduced in January 2025.
- **Bank details** no longer need a cheque leaf or passbook image for claims when the account is validated by the bank or NPCI.

## Transfers on job change

With one UAN, a job change no longer means a new account balance to chase. The old balance still has to be transferred to the new member ID, though:

- The employee files a transfer claim (Form 13) online from the member portal, choosing whether the previous or present employer attests, where attestation is needed.
- Since April 2025, a transfer approved at the source office posts the PF balance and pension service to the new account automatically, without separate processing at the destination office. The revamped Form 13 also splits taxable and non-taxable parts of the accumulation.
- The transfer certificate (Annexure K) is available to members in the member portal.

Exits matter here. If the previous employer never marked a date of exit, the old member ID looks active and transfers and new contributions run into trouble. Mark exits on the employer portal as soon as the employee leaves.

## Employer responsibilities

For HR and payroll, the UAN checklist is:

1. **At offer or joining,** ask whether the joiner has a UAN. Most people with any prior formal employment do.
2. **If not,** send them the FAT steps before day one so the UAN exists before the first payroll.
3. **Register the employee on the employer portal** against the UAN, with the correct date of joining.
4. **Verify Aadhaar seeding** before the first ECR; otherwise the member cannot be included.
5. **Collect nomination.** Under the EPF Scheme 2026, nominations are electronic.
6. **Mark the date of exit** promptly when someone leaves.
7. **Protect the data.** UAN, Aadhaar, PAN and bank details are personal data under the DPDP Act, 2023. Limit who can see them.

## Common issues and fixes

| Issue | Likely cause | What to do |
| --- | --- | --- |
| Employee has two UANs | A previous employer generated a new one instead of reusing the old | The member raises a request through the member portal or EPFO grievance channel to merge; do not add a third |
| Wrong member ID linked to a UAN | Error at registration | EPFO has a process for de-linking erroneously linked member IDs through the regional office |
| ECR rejects a new joiner | Aadhaar not verified, or date of joining missing | Complete KYC seeding and check the joining date before re-uploading |
| Transfer stuck | Previous exit not marked, or profile mismatch | Ask the previous employer to mark exit; fix profile through a joint declaration |
| Face authentication fails | Lighting, app version, or Aadhaar data issue | Retry; EPFO lists UMANG and EPFO support as next steps |

## Common mistakes

- Generating or requesting a new UAN when the joiner already has one.
- Running the first payroll before the UAN is linked and Aadhaar verified, then scrambling at ECR time.
- Forgetting to mark exits, which later blocks both ECR and the employee's transfer.
- Keeping UAN and Aadhaar in open spreadsheets shared across the HR team.
- Treating KYC as the employee's problem alone. Several fixes need the employer's action on the portal.

## FAQs

**Can an employer still generate a UAN?** Only in exceptional cases such as international workers and citizens of Nepal and Bhutan. Other new UANs are generated by the employee through face authentication in UMANG.

**Does a UAN change when the employee changes jobs?** No. The UAN stays the same; the new employer creates a new member ID under it.

**Does the employer approve bank seeding?** Not any more. Since 3 April 2025, bank details are verified by the bank or NPCI without employer approval.

**Does the new ₹25,000 wage ceiling affect UAN?** Not directly, but more employees now fall within mandatory PF coverage, so more joiners will need a UAN before their first payroll.

## How NeevHR helps

NeevHR captures UAN, Aadhaar, PAN and bank details once in the employee record during [onboarding](/features/onboarding), with field-level encryption and masking so only authorised roles see them. The UAN flows into the PF ECR file generated from [payroll](/payroll), and exit dates recorded in the [exit workflow](/features/exit) tell you when to mark exits on the EPFO portal. The employer completes portal actions such as KYC approval and exit marking directly with EPFO.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
