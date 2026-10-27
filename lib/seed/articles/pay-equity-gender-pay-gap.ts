import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "pay-equity-gender-pay-gap",
  title: "Gender pay gap in India: how to run a pay equity analysis",
  excerpt:
    "How to measure and fix the gender pay gap in India: equal pay under the Code on Wages, like-for-like groups, compa-ratio, median gap and a remediation budget.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `The gender pay gap is the difference between what men and women in an organisation are paid, usually expressed as the gap in median or mean pay as a percentage of men's pay. In India, the Code on Wages, 2019 prohibits discrimination on the ground of gender in wages for the same work or work of a similar nature, so employers need to check pay within like-for-like groups, not just the company-wide average. A pay equity analysis does that: it compares people in comparable roles, explains the differences that have a legitimate reason, and fixes the ones that do not.

This guide covers the legal position, how to run the analysis step by step, a worked example with a remediation budget, and how to communicate the outcome. Pay equity work fits naturally into the annual increment cycle, so read it with our guide to the [merit increase matrix](/blog/merit-increase-matrix) and the [performance appraisal process](/blog/performance-appraisal-process).

## What does Indian law say about equal pay?

The Equal Remuneration Act, 1976 was one of the four laws consolidated into the Code on Wages, 2019, which came into force on 21 Nov 2025. The Code carries the equal pay principle forward:

- **No gender discrimination in wages.** An employer shall not discriminate among employees on the ground of gender in matters relating to wages, for the same work or work of a similar nature.
- **Same or similar work** is broadly work where the skill, effort, experience and responsibility required are the same, when performed under similar working conditions. The test is the work actually done, not the job title.
- **No discrimination in recruitment.** The Code also prohibits gender discrimination in recruitment for the same or similar work, and in conditions of employment, except where the law restricts employment of women in a particular role.
- **No reduction to comply.** An employer cannot cut anyone's pay to remove a difference; the lower-paid side must be brought up.

The Code is available on the [Ministry of Labour and Employment](https://labour.gov.in/) website. Penalties, inspection and claims procedures follow the Code's general enforcement chapter and the rules your state notifies, which are still being finalised in places, so check the current position for your locations.

Listed companies have an added reason to measure the gap. The Business Responsibility and Sustainability Report that SEBI requires from the largest listed companies asks for remuneration data by gender. Check the current format with your company secretary.

## Gender pay gap vs equal pay: what is the difference?

These two terms are often mixed up.

| Measure | What it compares | What it tells you | Legal relevance |
| --- | --- | --- | --- |
| Unadjusted (raw) gender pay gap | Median or mean pay of all women vs all men | Representation: are women concentrated in lower-paid roles and levels? | Not a breach by itself |
| Adjusted gap or equal pay gap | Pay of women vs men in the same grade, role and location | Whether comparable people are paid differently | Directly relevant to the Code on Wages |

A company can have a large raw gap with no equal pay problem (few women in senior roles), or a small raw gap that hides unequal pay within grades. You need both numbers: the raw gap drives your hiring and promotion agenda, and the adjusted gap drives pay corrections.

## How do you calculate the gender pay gap?

Use these formulas, with pay defined consistently (see step 2 below):

- **Median gap** = (median men's pay minus median women's pay) ÷ median men's pay × 100
- **Mean gap** = (mean men's pay minus mean women's pay) ÷ mean men's pay × 100
- **Compa-ratio** = employee's pay ÷ midpoint of the pay band for their grade

The median is less distorted by a few very high earners, so it is the headline figure most analysts use. Compa-ratio puts everyone on a common scale within a grade: 1.00 means paid at the midpoint, 0.90 means 10% below it.

## How to run a pay equity analysis: step by step

### Step 1: fix the scope and the date

Pick a snapshot date, such as 01 Apr, and include everyone on the rolls. Decide how to treat part-timers (annualise to full-time equivalent), employees on long leave (use their contractual rate) and new joiners (include them; starting pay is where gaps often begin).

### Step 2: define pay

Use the same definition across the analysis and write it down.

| Pay element | Include? | Why |
| --- | --- | --- |
| Fixed annual pay (Basic, HRA, allowances) | Yes, always | The core comparison |
| Target variable | Yes, as a separate view | Targets can differ by gender |
| Actual variable paid | Separate view | Shows rating and payout bias |
| Employer PF and gratuity | No for the main view | Driven by Basic; adds noise |
| Reimbursements | No | Not pay for work |
| One-time joining bonus | Separate view | Negotiation gaps show here |

### Step 3: build like-for-like groups

Group employees by grade, job family and, where pay markets differ, location. A group of "Grade M2, Software Engineering, Pune" is comparable; "all managers" is not. Very small groups (fewer than three of either gender) cannot be analysed statistically; review those individually.

### Step 4: compare and explain

For each group, calculate the median gap and each person's compa-ratio. Then look at the legitimate factors that can explain a difference:

- Time in grade and total relevant experience.
- Performance ratings over two or three cycles.
- Scarce skills or certifications that the company pays a documented premium for.
- Location, where bands differ by city.

Factors that are not legitimate explanations include "she did not negotiate", "he had a higher previous salary" (prior pay often carries an earlier employer's gap forward), and career breaks for maternity or caregiving.

### Step 5: decide the remediation

Set a rule, apply it consistently and cost it before approving. A common rule: anyone in a group with an unexplained gap whose compa-ratio is below a floor (for example 0.95) is brought up to the floor.

## Worked example: one grade, one location

Grade M2, software engineering, Pune. The band midpoint is ₹15,60,000 annual fixed pay. The group has six men and four women.

| Employee | Gender | Annual fixed pay | Compa-ratio |
| --- | --- | --- | --- |
| M1 | Man | ₹14,40,000 | 0.92 |
| M2 | Man | ₹15,00,000 | 0.96 |
| M3 | Man | ₹15,60,000 | 1.00 |
| M4 | Man | ₹16,20,000 | 1.04 |
| M5 | Man | ₹16,80,000 | 1.08 |
| M6 | Man | ₹18,00,000 | 1.15 |
| W1 | Woman | ₹13,20,000 | 0.85 |
| W2 | Woman | ₹14,40,000 | 0.92 |
| W3 | Woman | ₹15,00,000 | 0.96 |
| W4 | Woman | ₹15,60,000 | 1.00 |

**Median men's pay:** the middle two of six are ₹15,60,000 and ₹16,20,000, so the median is ₹15,90,000.

**Median women's pay:** the middle two of four are ₹14,40,000 and ₹15,00,000, so the median is ₹14,70,000.

**Median gap:** (₹15,90,000 minus ₹14,70,000) ÷ ₹15,90,000 = ₹1,20,000 ÷ ₹15,90,000 = 7.5%.

**Mean gap:** men total ₹96,00,000 ÷ 6 = ₹16,00,000; women total ₹58,20,000 ÷ 4 = ₹14,55,000. Gap = ₹1,45,000 ÷ ₹16,00,000 = 9.1%.

**Explaining the differences.** M6 has 9 years in the role and three consecutive Outstanding ratings; that premium is documented. W1 has the same experience and ratings as M2 but was hired after a career break at a low offer. W2 is rated Exceeds, the same as M3 and M4. Neither W1's nor W2's position is explained by a legitimate factor.

**Remediation to a 0.95 floor:** the floor is ₹15,60,000 × 0.95 = ₹14,82,000.

- W1: ₹14,82,000 minus ₹13,20,000 = ₹1,62,000.
- W2: ₹14,82,000 minus ₹14,40,000 = ₹42,000.
- M1 is also below the floor; check whether his position is explained (here, he joined four months ago as a lateral hire at the band minimum, which the policy allows).

**Remediation budget:** ₹1,62,000 + ₹42,000 = ₹2,04,000 a year in fixed pay, which is 1.3% of the group's total fixed pay of ₹1,54,20,000. Add the knock-on cost of employer PF and gratuity on any increase in Basic; the [salary hike calculator](/tools/salary-hike-calculator) helps model each change.

**After remediation**, women's pay is ₹14,82,000, ₹14,82,000, ₹15,00,000 and ₹15,60,000, so the median is ₹14,91,000 and the median gap falls to ₹99,000 ÷ ₹15,90,000 = 6.2%. The remaining gap is explained by tenure and performance (M5 and M6). The aim is to remove unexplained differences, not to force the median gap to zero in every group.

## How much should you budget for pay equity remediation?

Most companies find that a first-time correction costs between 0.5% and 2% of the payroll of affected groups, depending on how long pay has drifted. Three ways to fund it:

| Approach | How it works | Trade-off |
| --- | --- | --- |
| Separate equity pool | A fixed budget outside the merit pool | Clean and visible; needs CFO approval |
| Carve-out from the merit pool | Reserve, say, 10% of the merit budget for equity adjustments | No extra cost; smaller merit increases for others |
| Phased correction | Close large gaps over two cycles | Lower cost now; the gap persists for a year |

Apply corrections effective from a fixed date and do not offset them against the employee's merit increase for the same year; otherwise the correction disappears into a normal increment.

## How do you stop the gap coming back?

Gaps usually reopen at three points:

- **Hiring offers.** Set offer ranges by grade and require approval for offers above the band midpoint. Do not ask for, or base offers on, previous salary.
- **Increments.** Run the gender check during calibration, before letters are issued. Our guide to [promotion policy](/blog/promotion-policy) covers fair promotion criteria.
- **Ratings.** Check rating distributions by gender, and make sure employees returning from maternity leave are not rated down for time away. Our [Maternity Benefit Act guide](/blog/maternity-benefit-act-for-employers) covers their protections.

## How should you communicate pay equity results?

- **To leadership:** raw and adjusted gaps, remediation cost and root causes.
- **To affected employees:** a private conversation from the manager and HR explaining the adjustment as a correction to bring pay in line with the role. Avoid language that admits wrongdoing by a named manager; focus on the outcome.
- **To all employees:** a short note that the company reviews pay by grade every year and corrects unexplained differences. Publishing the raw gap is a choice; if you do, explain what drives it.
- **Confidentiality:** pay data is personal data. Restrict access to the analysis files and share only aggregates. Our guide to the [DPDP Act for HR teams](/blog/dpdp-act-2023-for-hr-teams) covers handling.

## Common mistakes

- Reporting only the company-wide raw gap and concluding there is "no problem".
- Comparing by job title instead of the work actually done.
- Using previous salary to justify a lower offer.
- Correcting pay by reducing the higher-paid employee, which the law does not allow.
- Folding equity corrections into the merit increase so they vanish.
- Running the analysis once and never again.

## FAQs

**Is equal pay for equal work a legal requirement in India?** Yes. The Code on Wages, 2019, which subsumed the Equal Remuneration Act, prohibits discrimination on the ground of gender in wages for the same work or work of a similar nature.

**How do you calculate the gender pay gap?** Subtract the median pay of women from the median pay of men and divide by the median pay of men. Calculate it company-wide for the raw gap and within each comparable group for the adjusted gap.

**Is a gender pay gap illegal?** A raw gap is not illegal by itself; it often reflects fewer women in senior roles. Paying a woman less than a man for the same or similar work, without a legitimate reason, is unlawful.

**What is a good compa-ratio?** Around 1.00 for a fully competent employee in role. Employees new to a grade typically sit at 0.85 to 0.95, and strong long-tenured performers at 1.05 to 1.15.

**How often should we run a pay equity analysis?** At least once a year, ideally just before the increment cycle so corrections can be built into the same budget and letters.

## How NeevHR helps

NeevHR [compensation](/features/compensation) runs the increment cycle with compa-ratio against the grade midpoint for each employee, a merit matrix by rating and compa band, per-manager budgets and out-of-policy flags, so equity corrections are visible before approval. Approved revisions become effective-dated pay changes and increment letters, and [reports](/features/reports) let you slice pay by grade, location and gender. To see a cycle end to end, [request a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
