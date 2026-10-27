import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "structured-interview-scorecard",
  title: "Interview scorecard: how to run structured interviews",
  excerpt:
    "Build an interview scorecard for structured interviews: competencies, behavioural questions, anchored 1 to 5 ratings, panel calibration and a scored example.",
  category: "recruitment",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `An interview scorecard is a standard form on which every interviewer rates a candidate against the same pre-agreed competencies, using a rating scale with written descriptions (anchors) for each score. Combined with a structured interview, where every candidate for a role is asked the same core questions, it makes hiring decisions comparable, faster to defend and less dependent on gut feel. Each panelist scores independently, and the panel then compares evidence before deciding.

This guide shows how to choose competencies, write questions, build an anchored rating scale, weight and combine scores, calibrate a panel and reduce bias, with a sample scorecard and a scored example. For the system that holds scorecards and the rest of the pipeline, see our [applicant tracking system guide](/blog/applicant-tracking-system-guide), and for what happens after a yes, see [how to reduce offer dropouts](/blog/reduce-offer-dropouts).

## What is a structured interview?

A structured interview has four features:

- **Defined competencies.** The skills and behaviours the role needs are agreed before the first interview.
- **Common questions.** Every candidate for the role gets the same core questions, in roughly the same order. Follow-up probes are allowed.
- **A common rating scale.** Answers are scored on the same scale, with anchors describing what each score looks like.
- **Independent scoring.** Each interviewer records scores and evidence before talking to the others.

An unstructured interview is a conversation that goes wherever the interviewer takes it. It feels natural, but two candidates for the same job can end up being judged on completely different things.

| Aspect | Unstructured interview | Structured interview with scorecard |
| --- | --- | --- |
| Questions | Chosen by each interviewer on the day | Agreed in advance for the role |
| What is assessed | Whatever comes up | Defined competencies |
| Rating | Overall impression, "strong hire" or "no" | Score per competency against anchors |
| Evidence | Rarely written down | Notes recorded against each score |
| Comparison across candidates | Difficult | Straightforward |
| Defending a decision | Relies on memory | Written record |

## How do you choose the competencies?

Work with the hiring manager to pick four to six competencies. More than six and interviewers start skimming. Use three sources:

1. **The job description and requisition.** What will this person actually do in the first year?
2. **High performers in the role.** What separates them from average performers?
3. **Company values or a leadership framework**, if you have one, for one behavioural competency.

Mark each competency as **must-have** or **trainable**. A fresher can learn a tool; it is much harder to teach ownership. Assign each competency to a specific round so that two interviewers are not asking the same thing while a third area is missed.

## What questions should a structured interview use?

Use two question types for most roles.

- **Behavioural questions** ask about past behaviour: "Tell me about a time when..." Probe with the STAR pattern: Situation, Task, Action, Result. Past behaviour in a similar situation is useful evidence.
- **Situational questions** describe a realistic scenario and ask what the candidate would do. They work well for freshers who have limited work history.

Add a **work sample** where possible: a short case, a data exercise, a payroll reconciliation, a piece of code. It often tells you more than any question.

Sample questions for an Assistant Manager, Payroll:

| Competency | Question | Probe for |
| --- | --- | --- |
| Payroll and statutory knowledge | Walk me through how you would handle an employee whose salary crosses the ESI wage ceiling in the middle of a contribution period. | Accuracy on contribution periods, not just the ceiling figure |
| Problem solving | Tell me about a payroll variance you could not explain at first. How did you find the cause? | Structured approach, use of reconciliation, root cause |
| Stakeholder communication | Describe a time you had to tell a senior leader their pay was processed wrongly. | Ownership, clarity, timing |
| Ownership | Tell me about a process you changed without being asked. | Initiative, measurable result |

Avoid questions about marital status, pregnancy or family plans, religion, caste or age. They are not job-related, they invite bias, and they expose the company to complaints.

## How do you build an anchored rating scale?

A 1 to 5 scale is common. The anchors are what make it work: without them, a "3" means different things to different interviewers. Write anchors for each competency in terms of observable behaviour.

Example anchors for **payroll and statutory knowledge**:

| Score | Label | Anchor |
| --- | --- | --- |
| 1 | No evidence | Cannot explain basic PF, ESI or TDS treatment; answers are vague or wrong |
| 2 | Below the bar | Knows headline rules but makes errors on application, such as contribution periods or proration |
| 3 | Meets the bar | Applies the main rules correctly and knows where to check what they do not know |
| 4 | Strong | Handles edge cases correctly and explains the reasoning; has fixed real errors |
| 5 | Exceptional | Anticipates edge cases, has designed controls or checklists others use |

Keep "3" as the hiring bar for the role, not as a polite average. Interviewers who give 3 to everyone should be coached.

## Sample interview scorecard

| Field | Content |
| --- | --- |
| Candidate, role, requisition | Name, Assistant Manager Payroll, requisition reference |
| Round and interviewer | Technical round, interviewer name |
| Competency 1 (must-have, weight 35%) | Payroll and statutory knowledge: score 1 to 5, evidence notes |
| Competency 2 (must-have, weight 25%) | Problem solving: score 1 to 5, evidence notes |
| Competency 3 (weight 20%) | Stakeholder communication: score 1 to 5, evidence notes |
| Competency 4 (weight 20%) | Ownership: score 1 to 5, evidence notes |
| Overall recommendation | Strong hire, hire, no hire, strong no hire |
| Concerns to probe in later rounds | Free text |
| Submitted on | Date and time |

The evidence notes matter more than the numbers. "Explained mid-period ESI continuation correctly and gave an example of a fix" is useful. "Good candidate" is not.

## How do you combine scores? A worked example

Three panelists interview a candidate. The hire rule agreed before interviews is: weighted average of at least 3.5, and no score below 3 on a must-have competency.

| Competency (weight) | Panelist A | Panelist B | Panelist C |
| --- | --- | --- | --- |
| Statutory knowledge (35%) | 4 | 4 | 3 |
| Problem solving (25%) | 3 | 4 | 3 |
| Communication (20%) | 4 | 3 | 4 |
| Ownership (20%) | 3 | 4 | 4 |

Weighted scores:

- Panelist A: (4 × 0.35) + (3 × 0.25) + (4 × 0.20) + (3 × 0.20) = 1.40 + 0.75 + 0.80 + 0.60 = 3.55
- Panelist B: 1.40 + 1.00 + 0.60 + 0.80 = 3.80
- Panelist C: 1.05 + 0.75 + 0.80 + 0.80 = 3.40

Panel average: (3.55 + 3.80 + 3.40) ÷ 3 = 3.58. No must-have score is below 3, so the candidate clears the bar.

Now a second candidate with scores of 5, 4, 5 and 5 from Panelist A, but a 2 on statutory knowledge from Panelist B. The average may look high, yet the must-have rule triggers a discussion. The panel looks at Panelist B's evidence: if the gap is real, the rule says no hire, however strong the other scores. That is the point of agreeing rules before interviews.

When the decision moves to an offer, use the [CTC calculator](/tools/ctc-calculator) to check the offer structure before it is released.

## How do you calibrate an interview panel?

Calibration makes sure that a 4 from one interviewer means the same as a 4 from another.

- **Kick-off meeting.** Before the first interview, the hiring manager, recruiter and panel agree competencies, round ownership, questions and the hire rule.
- **Shadowing.** New interviewers observe two or three interviews and score silently, then compare their scores with the lead interviewer's.
- **Debrief after scoring.** Each panelist submits scores before the debrief. In the debrief, the most junior panelist speaks first, so seniority does not anchor the discussion.
- **Periodic review.** Each quarter, HR reviews score patterns by interviewer. An interviewer whose scores are always 4 and 5, or whose "hire" candidates often fail probation, needs a conversation.

## How do you avoid bias in interviews?

| Bias | What it looks like | Control |
| --- | --- | --- |
| Halo effect | One strong answer lifts every score | Score each competency against its own anchors |
| Similarity bias | Higher scores for candidates from the same college, city or background | Evidence notes required for every score |
| First impression | Decision made in the first five minutes | Same questions for all; score only at the end of each answer |
| Contrast effect | A candidate scored against the previous one rather than the bar | Anchors describe the bar, not other candidates |
| Group think | Panel converges on the loudest voice | Independent scores submitted before the debrief |
| Language bias | Fluency in English mistaken for competence | Assess the competency, and allow Hindi or the regional language where the role does not need English |

## How quickly should interview feedback be given?

Speed is part of candidate experience, and slow decisions lose good candidates to faster employers.

- **Panelist feedback:** submitted within 24 hours of the interview, ideally the same day.
- **Panel decision:** within 2 working days of the last round.
- **Candidate communication:** a decision, or an honest update, within 3 to 5 working days of the final round.
- **Rejected candidates:** a short, respectful message. Detailed feedback is a policy choice; if you give it, keep it factual and tied to the competencies.

Scorecards are personal data under the [DPDP Act](/blog/dpdp-act-2023-for-hr-teams). Keep them only as long as your retention policy allows, and restrict access to the panel, the recruiter and HR.

## Common mistakes

- Writing competencies after the interviews, to fit the candidate the panel already likes.
- Using a rating scale with no anchors.
- Letting panelists see each other's scores before submitting their own.
- Every round asking about the same competency while another goes untested.
- Treating the weighted average as the decision and ignoring a failed must-have.
- Feedback arriving a week later, by which time the candidate has accepted elsewhere.
- No review of interviewer scoring patterns.

## FAQs

**What is an interview scorecard?** A standard form on which each interviewer rates a candidate on pre-agreed competencies, using a rating scale with written anchors, and records evidence for each score.

**What rating scale is best for interview scorecards?** A 1 to 5 scale with behavioural anchors for each point is common and easy to use. What matters most is that each score is described, not the number of points.

**How many competencies should a scorecard have?** Four to six. Fewer may miss important areas; more tends to produce rushed, shallow scoring.

**Should interviewers discuss candidates before scoring?** No. Each interviewer should submit scores independently first, then the panel discusses the evidence in a debrief.

**Are structured interviews suitable for campus hiring?** Yes. Situational questions and short work samples work well for freshers. See our guide to [campus hiring](/blog/campus-hiring-freshers).

## How NeevHR helps

NeevHR [recruitment](/features/recruitment) lets you configure interview rounds and panels per role, so each panelist sees their interviews and the full candidate context and records structured feedback against the candidate. Funnel, time-to-fill and acceptance reports show where decisions slow down, and an accepted offer flows straight into [onboarding](/features/onboarding). [See a demo of the hiring workflow](/demo) with your own rounds.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
