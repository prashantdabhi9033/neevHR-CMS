import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "applicant-tracking-system-guide",
  title: "Applicant tracking system (ATS): guide for Indian employers",
  excerpt:
    "What an applicant tracking system does, the requisition-to-onboarding pipeline, a must-have ATS checklist, hiring metrics and DPDP consent for candidates.",
  category: "recruitment",
  author: "NeevHR Team",
  publishedAt: "2026-10-15",
  body: `An applicant tracking system (ATS) is software that runs the hiring process from an approved job requisition to an accepted offer: it collects applications, moves candidates through screening and interview stages, records panel feedback, generates offers and hands the new hire to onboarding. For an Indian company hiring a few hundred people a year, an ATS replaces scattered spreadsheets, inboxes and WhatsApp threads with one auditable pipeline, and turns hiring into something you can measure.

This guide covers what an ATS should do and how to evaluate one. For what happens after the offer is accepted, see our guides on [reducing offer dropouts](/blog/reduce-offer-dropouts) and the [employee onboarding checklist](/blog/employee-onboarding-checklist).

## What does an applicant tracking system do?

At its core, an ATS is a database of candidates and jobs with a workflow on top. In practice it does six jobs:

- **Controls demand.** Hiring starts from an approved requisition tied to a budgeted position, not an email from a manager.
- **Captures candidates** from every source: job portals, the careers page, employee referrals, consultants, campus drives and walk-ins.
- **Moves candidates through stages** such as screening, assessment, interview rounds and HR discussion, with an owner and status at each step.
- **Records structured feedback** from every interviewer against the same criteria, so decisions are based on evidence rather than the loudest voice.
- **Generates offers** using the approved compensation, with an approval trail and a validity date.
- **Hands over to onboarding** so the joiner's data does not have to be keyed in again.

Everything else, such as job-board posting, scheduling and analytics, supports these six.

## The hiring pipeline, stage by stage

A typical mid-sized Indian company runs a pipeline like this. The stage names vary, but the control points should not.

| Stage | What happens | Owner | Control that matters |
| --- | --- | --- | --- |
| Requisition | Manager raises a request for a role, linked to a position and cost centre | Hiring manager | Approval chain; check against the headcount plan |
| Sourcing | Role published to portals, careers page, referrals and consultants | Recruiter | Source tagged on every candidate |
| Screening | CVs reviewed against must-have criteria; recruiter call | Recruiter | Reason recorded for every rejection |
| Assessment | Test, assignment or technical screen | Hiring team | Same assessment for all candidates for the role |
| Interviews | One or more rounds with a defined panel | Panel members | Feedback submitted before the next round |
| HR round | Expectations, notice period, current and expected CTC | HR | Notice period and joining date captured |
| Offer | Compensation proposed, approved and released | HR and approvers | Offer within the approved band; validity date |
| Pre-joining | Background verification, documents, engagement through notice | HR | Verification consent; joining date tracked |
| Onboarding | Accepted offer converts into a joiner record | HR, IT, admin | No re-keying of candidate data |

Two Indian realities shape this pipeline. First, notice periods of 30 to 90 days mean the gap between acceptance and joining is long, so the ATS has to keep tracking the candidate after the offer, not stop at "accepted". Second, current and expected CTC conversations are standard, so the offer stage needs the approved band visible to whoever releases the offer. Our [CTC calculator](/tools/ctc-calculator) helps translate a CTC into monthly in-hand during that conversation.

## ATS vs spreadsheets: when does it become worth it?

Many companies run hiring on Excel and email until volume forces a change. The table shows where spreadsheets usually break.

| Area | Spreadsheet and email | Applicant tracking system |
| --- | --- | --- |
| Candidate record | Rows in several files; CVs in mail attachments | One profile per candidate with CV, history and feedback |
| Duplicate candidates | Hard to spot across recruiters and consultants | Flagged on email or phone match |
| Consultant disputes | "Who sent this CV first?" argued by email | Source and timestamp recorded on arrival |
| Interview feedback | Verbal, or a few lines in a chat | Structured scorecards, stored against the round |
| Offer approval | Email chain, often after the offer is released | Approval inside the workflow, before release |
| Metrics | Rebuilt manually each month, if at all | Funnel, time-to-fill and source reports from live data |
| Data protection | CVs sitting in personal inboxes and laptops | Access by role; retention and deletion by policy |
| Handover to HR | Joiner details retyped into the HR system | Accepted offer flows into onboarding |

A useful rule of thumb: once you have more than two recruiters, use more than one consultant, or hire more than 10 to 15 people a month, the cost of the spreadsheet (lost candidates, duplicate consultant fees and missing data) usually exceeds the cost of the tool.

## Must-have ATS features: a checklist

Use this checklist when you evaluate a standalone ATS or the recruitment module of an HRMS. For a wider evaluation framework, see our [HRMS RFP and vendor evaluation questions](/blog/hrms-rfp-vendor-evaluation-questions).

### Requisition and planning

- Requisitions raised by managers and approved through a configurable chain.
- Link to approved positions and the headcount plan, so unbudgeted hiring is visible.
- Requisition status (draft, approved, open, on hold, filled, cancelled) with reasons.

### Candidate pipeline

- Configurable stages per role type, since campus, lateral and leadership hiring differ.
- Board and list views, with bulk moves and bulk rejection with reasons.
- Source tracking on every candidate, including the referring employee or consultant.
- Duplicate detection across jobs and sources.

### Interviews and evaluation

- Interview rounds and panels defined per role.
- Structured feedback forms with ratings against defined competencies.
- Feedback visibility rules, so the next interviewer is not biased by the last one.

### Offers

- Offer generation from templates, using the approved compensation.
- Approval before release, with an exception route for offers above band.
- Offer validity date, revision history and acceptance status.

### Handover and integration

- Accepted offer converts into an onboarding record with no re-keying.
- Candidate data (name, contact, role, department, location, CTC, joining date) reused in the HRMS.
- Background verification status visible before the joining date.

### Reporting and compliance

- Funnel, time-to-fill, source and offer acceptance reports.
- Role-based access to candidate data, especially compensation.
- Consent and retention controls for candidate personal data.

## Which recruitment metrics should an ATS report?

An ATS earns its keep when it tells you where hiring is slow, expensive or leaky. These are the metrics most mid-sized companies track.

| Metric | Formula | What it tells you |
| --- | --- | --- |
| Time-to-fill | Days from requisition approval to offer acceptance | Speed of the whole process, including approvals |
| Time-to-hire | Days from the candidate entering the pipeline to offer acceptance | Speed once a candidate is found |
| Source effectiveness | Hires from a source ÷ candidates from that source × 100 | Which channels produce joiners, not just CVs |
| Stage conversion | Candidates moving to the next stage ÷ candidates in the stage × 100 | Where the funnel leaks |
| Offer acceptance rate | Offers accepted ÷ offers released × 100 | Competitiveness of offers and candidate alignment |
| Joining ratio | Joined ÷ offers accepted × 100 | Dropouts during the notice period |
| Cost per hire | Total recruitment spend ÷ number of hires | Efficiency of spend across channels |

### Worked example: source effectiveness and cost per hire

In a quarter, a company hiring for sales and operations roles records the following.

| Source | Candidates | Hires | Conversion | Spend | Cost per hire |
| --- | --- | --- | --- | --- | --- |
| Job portal | 1,200 | 18 | 1.5% | ₹3,60,000 (subscription share) | ₹20,000 |
| Consultants | 240 | 20 | 8.3% | ₹9,60,000 (fees) | ₹48,000 |
| Employee referrals | 90 | 12 | 13.3% | ₹1,80,000 (referral bonus) | ₹15,000 |
| Careers page | 300 | 6 | 2.0% | ₹30,000 (hosting and ads) | ₹5,000 |
| Total | 1,830 | 56 | 3.1% | ₹15,30,000 | ₹27,321 |

Consultants produce many hires but at more than three times the cost of referrals. Shifting even 5 of the 20 consultant hires to referrals would save about 5 × (₹48,000 − ₹15,000) = ₹1,65,000 a quarter. Without source tagging in an ATS, this analysis is guesswork. The numbers above are illustrative; use your own spend and volumes.

## Candidate data and the DPDP Act

Candidates are data principals under the Digital Personal Data Protection Act, 2023. A CV, a phone number, current CTC, assessment scores and background verification results are all personal data. Under the DPDP Rules, 2025, the substantive obligations (notice, consent, security safeguards, breach notification and data principal rights) apply from 13 May 2027, but CVs collected now will still be in your system then. Check the current position with the [Ministry of Electronics and Information Technology](https://www.meity.gov.in/).

Practical steps for recruitment:

- **Notice at collection.** The careers page and application form should say what data is collected, why, who sees it (including consultants and verification agencies) and how long it is kept.
- **Consent for specific uses.** Keeping a CV for future openings, or running a background check, are distinct purposes. Ask for them separately and record the consent.
- **Retention.** Set a period for rejected candidates' data, for example 6 or 12 months, and delete or anonymise after it. Do not keep CVs forever "just in case".
- **Access.** Compensation fields and verification reports should be visible only to those who need them, not to every interviewer.
- **Consultants.** Your agreements should cover how consultants collect and share candidate data with you.

For the wider HR picture, see our guide to the [DPDP Act for HR teams](/blog/dpdp-act-2023-for-hr-teams), and for verification consent specifically, [employee background verification in India](/blog/employee-background-verification-india).

## Standalone ATS or HRMS recruitment module?

Both work. The decision usually turns on volume and integration.

- **A standalone ATS** suits very high-volume or specialised hiring (large campus programmes, mass hiring for retail or BPO operations) where sourcing automation and job-board depth matter most.
- **An HRMS recruitment module** suits companies whose bigger pain is the handover: requisitions tied to the headcount plan and positions, offers using approved compensation, and accepted offers flowing straight into onboarding, the employee record and payroll.

If you choose a standalone ATS, insist on a tested integration that pushes the accepted candidate into the HRMS with the joining date, role, location and compensation, and check who maintains that integration. See [what an HRMS should include](/blog/what-should-an-hrms-include) for the broader module list.

## Common mistakes

- Starting hiring without an approved requisition, so the ATS records activity but not whether the role was budgeted.
- Not tagging the source on every candidate, which makes source effectiveness and consultant fee disputes impossible to settle.
- Accepting verbal or chat feedback instead of structured scorecards.
- Releasing offers before approval and fixing the paperwork later.
- Stopping tracking at "offer accepted" when Indian notice periods leave months for dropouts.
- Keeping rejected candidates' CVs indefinitely with no retention rule.
- Running the ATS and the HRMS without integration, so joiner data is typed twice.

## FAQs

**What is the difference between an ATS and recruitment software?** The terms are often used interchangeably. Strictly, an ATS tracks applicants through a pipeline; recruitment software may add sourcing, assessments and requisition planning. Most modern tools do both.

**Does a 500-employee company need an ATS?** Usually yes, if it hires steadily. At a typical attrition rate plus growth, a 500-person company may hire 100 or more people a year, which is hard to manage cleanly on spreadsheets.

**How do you calculate time-to-fill?** Count the days from requisition approval to the candidate's offer acceptance. Some companies measure to the joining date instead; pick one definition and use it consistently.

**Can an ATS reduce offer dropouts?** It helps by tracking candidates through the notice period, flagging those who go silent, and showing which sources and roles have high dropout rates.

**Is candidate consent required under the DPDP Act?** Candidates must be given notice and their data processed for a lawful purpose. Consent should be recorded for uses beyond the current application, such as keeping a CV for future roles or running a background check.

**What should an ATS integrate with?** At minimum, the HRMS for onboarding and employee records, and email and calendars for scheduling. Job portals and background verification vendors are common additions.

## How NeevHR helps

NeevHR [recruitment](/features/recruitment) runs hiring from requisition to signed offer: managers raise requisitions through an approval chain, candidates move through a board or table pipeline with interview rounds, panels and structured feedback, and offers show the approved compensation with a validity date and full history. Reports cover funnel conversion, time-to-fill and acceptance, and source effectiveness. Requisitions connect to [workforce planning](/features/planning) and [positions](/features/positions), and an accepted offer flows into [onboarding](/features/onboarding) automatically. To see it with your own hiring stages, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 17 Oct 2026.*`,
};

export default post;
