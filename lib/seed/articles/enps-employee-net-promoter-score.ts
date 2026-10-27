import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "enps-employee-net-promoter-score",
  title: "eNPS (employee Net Promoter Score): formula and how to use it",
  excerpt:
    "eNPS explained for HR in India: the question, the formula with a worked example, how to read small-team scores, survey cadence, anonymity and acting on results.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `eNPS (employee Net Promoter Score) measures how likely employees are to recommend your organisation as a place to work. Employees answer one question on a 0 to 10 scale; those scoring 9 or 10 are promoters, 7 or 8 passives, and 0 to 6 detractors. eNPS is the percentage of promoters minus the percentage of detractors, giving a score between -100 and +100.

This guide goes beyond the formula: how to read eNPS correctly, why small-team scores swing, how often to survey, how to protect anonymity, which follow-up questions explain the number, and how to act on it. For a full engagement questionnaire built around eNPS, see our [employee engagement survey questions](/blog/employee-engagement-survey-questions), and for where eNPS sits among other people metrics, see [HR metrics and KPIs](/blog/hr-metrics-and-kpis).

## What is the eNPS question?

The standard question is:

"On a scale of 0 to 10, how likely are you to recommend [company name] as a place to work to a friend or family member?"

Keep the wording identical from survey to survey, or trends become meaningless. For frontline teams, offer the question in Hindi or the regional language, and test the translation with a few employees before launch so that the meaning of "recommend" does not shift.

Some companies add a second recommendation question about products or services ("How likely are you to recommend our products?"). That is useful in customer-facing businesses but should be reported separately.

## How do you calculate eNPS?

| Group | Scores | Counted as |
| --- | --- | --- |
| Promoters | 9 and 10 | Added |
| Passives | 7 and 8 | In the total only |
| Detractors | 0 to 6 | Subtracted |

**eNPS = % promoters minus % detractors**

Passives do not appear in the formula, but they reduce both percentages because they are part of the total.

### Worked example: a company-wide score

A company with 2,400 employees runs a quarterly pulse and receives 1,500 responses, a response rate of 1,500 ÷ 2,400 = 62.5%.

| Group | Responses | Share of 1,500 |
| --- | --- | --- |
| Promoters | 480 | 480 ÷ 1,500 = 32% |
| Passives | 570 | 570 ÷ 1,500 = 38% |
| Detractors | 450 | 450 ÷ 1,500 = 30% |

eNPS = 32 minus 30 = **+2**.

A score of +2 looks flat, but the distribution says more. Almost a third of respondents are detractors, and 38% are passives who could move either way. The action is not to "lift eNPS" in general but to find out which groups hold the detractors and why.

## How should you read an eNPS score?

### Look at the distribution, not just the number

Two teams can share the same eNPS with very different realities. A team with 50% promoters and 50% detractors scores 0, and so does a team with 100% passives. The first is polarised; the second is disengaged. Always show the three-way split next to the score.

### Be careful with small groups

In small teams, one person changes the score a lot. Take a team with 12 responses:

| Scenario | Promoters | Passives | Detractors | eNPS |
| --- | --- | --- | --- | --- |
| This quarter | 4 (33.3%) | 5 (41.7%) | 3 (25.0%) | 33.3 minus 25.0 = +8.3 |
| One detractor becomes a promoter | 5 (41.7%) | 5 (41.7%) | 2 (16.7%) | 41.7 minus 16.7 = +25.0 |

One person changing their mind moves the score by about 17 points. For a team of 12, a swing of that size between quarters is not evidence of anything. Report small segments with caution, look at trends over several waves, and use the anonymity threshold described below.

### Watch the response rate

eNPS describes the people who responded. If only 30% respond, the silent 70% may feel quite differently. A falling response rate is itself a signal, often of survey fatigue or doubts about anonymity.

## What is a good eNPS score?

There is no official Indian benchmark. Survey providers publish their own benchmarks, but they differ in method, industry mix and question wording, so treat any external figure with caution. A few principles are more reliable:

- **Above zero** means more promoters than detractors.
- **Your own trend** over survey waves is the most useful comparison.
- **The gap between segments** (your best and worst departments, locations or grades) usually tells you more than the company score.
- **Compare like with like.** A pulse taken a week after increment letters may differ from one taken in a quiet month.

## How often should you run an eNPS survey?

| Cadence | Suits | Watch out for |
| --- | --- | --- |
| Annual only | Smaller HR teams starting out | Too infrequent to see whether actions work |
| Quarterly | Most companies of 500 to 5,000 employees | Needs visible action between waves |
| Monthly | Fast-changing environments, large frontline workforces | Fatigue; small month-to-month changes are noise |
| Lifecycle points | After onboarding, around 90 days, and at exit | Small numbers per month; aggregate over a quarter |

A common rhythm is eNPS in every quarterly pulse plus the annual engagement survey. Avoid scheduling surveys during appraisal communication or increment release, unless you deliberately want to measure the reaction.

## How do you protect anonymity in an eNPS survey?

People answer honestly only when they trust that their answer cannot be traced.

- **Set a minimum group size.** Results for any segment below a threshold, commonly 5 to 10 responses, are suppressed and rolled up into the next level.
- **Apply the threshold after every filter.** Department plus location plus tenure can narrow a group to two people.
- **Handle comments carefully.** Show open-text answers only at levels above the threshold, and remove names and identifying details.
- **Be honest about the model.** If responses are stored against employee IDs and masked in reports, call the survey "confidential", not "anonymous". Employees notice the difference.
- **Follow the DPDP Act.** Responses linked to an employee are personal data. Tell employees what is collected, who sees results and how long data is kept. See our guide to the [DPDP Act for HR teams](/blog/dpdp-act-2023-for-hr-teams).

## Which follow-up questions explain the score?

eNPS tells you how people feel, not why. Add two or three follow-ups:

1. **"What is the main reason for your score?"** (open text). The single most useful question you can ask.
2. **"What one change would make you more likely to recommend us?"** (open text). Points straight at actions.
3. **A short driver list**, for example: "Which of these most affects your score?" with options such as manager, growth, pay, workload, recognition, colleagues, and policies.

Code the open-text answers into themes and count them by segment. If 40% of detractors in one plant mention shift scheduling, you have a specific problem to fix.

## How should you act on eNPS results?

1. **Share results quickly**, within two to three weeks of closing the survey, at company and team level above the threshold.
2. **Pick two or three actions per team**, not ten. Each action has an owner and a date.
3. **Tell people what changed** because of the last survey before you launch the next one. "You said, we did" is what keeps response rates up.
4. **Connect eNPS to outcomes.** Compare segment scores with [attrition rates](/blog/employee-attrition-rate), absenteeism and referral activity. Teams with many promoters often produce more employee referrals; see our guide to the [employee referral program](/blog/employee-referral-programme).
5. **Review trends at leadership level** each quarter, with the three-way split and the main themes.

### Worked example: tracking a segment over three waves

A warehouse network of 300 employees had an eNPS of -18 in Q1, driven by comments about late shift rosters. The operations head committed to publishing rosters a week in advance. The next two pulses showed:

| Wave | Responses | Promoters | Detractors | eNPS |
| --- | --- | --- | --- | --- |
| Q1 | 200 | 50 (25%) | 86 (43%) | 25 minus 43 = -18 |
| Q2 | 210 | 63 (30%) | 76 (36.2%) | 30 minus 36.2 = -6.2 |
| Q3 | 220 | 77 (35%) | 66 (30%) | 35 minus 30 = +5 |

The improvement held across two waves and the share of comments about rosters fell, which is much stronger evidence than a single jump.

## Common mistakes

- Reporting only the score without the promoter, passive and detractor split.
- Treating a swing in a team of ten as a trend.
- Calling a survey anonymous when responses are traceable.
- Changing the question wording between waves.
- Running surveys with no visible action afterwards.
- Linking managers' bonuses to their team's eNPS, which invites pressure on employees and inflated scores.
- Chasing an external benchmark instead of your own trend.

## FAQs

**How is eNPS calculated?** eNPS = percentage of promoters (scores 9 to 10) minus percentage of detractors (scores 0 to 6). Passives (7 to 8) count in the total but not in either percentage.

**What is a good eNPS score?** Any score above zero means more promoters than detractors. Your own trend over time and the gap between segments matter more than external benchmarks, which vary by method.

**How often should eNPS be measured?** Many companies measure it quarterly in a short pulse survey, plus once a year in the full engagement survey.

**Is eNPS the same as engagement?** No. eNPS is a single indicator of advocacy. Engagement surveys measure several drivers, such as manager quality, growth and recognition, that explain the eNPS score.

**What is the minimum group size for reporting eNPS?** A common threshold is 5 to 10 responses. Below that, results should be suppressed to protect anonymity, and small-group scores are statistically unstable anyway.

## How NeevHR helps

NeevHR [surveys](/features/surveys) include an eNPS question type alongside rating, Likert, choice and open-text questions, with department targeting, a configurable anonymity threshold that suppresses small segments, and a promoter, passive and detractor breakdown. Responses are stored against the respondent and masked when read, so results are confidential rather than fully anonymous. [Engagement](/features/engagement) shows eNPS trends across survey waves alongside recognition activity. [Book a demo](/demo) to see the eNPS analytics.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
