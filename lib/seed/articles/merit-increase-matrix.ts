import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "merit-increase-matrix",
  title: "Merit increase matrix: planning salary increments fairly",
  excerpt:
    "How a merit increase matrix sets increments by rating and compa-ratio, with a 5x4 matrix, a worked 9% budget check, and the PF and gratuity knock-on effects.",
  category: "performance",
  author: "NeevHR Team",
  publishedAt: "2026-10-06",
  body: `A merit increase matrix is a grid that sets each employee's salary increment from two inputs: their performance rating and their position in the pay range, usually measured by compa-ratio. Strong performers paid below the midpoint get the highest percentage, and those paid well above it get less, so pay moves towards the market rate over time. The percentages are tuned so that the total cost equals the increment budget.

This guide shows how to build, budget and communicate a merit matrix. For how ratings are produced, see our [performance appraisal process](/blog/performance-appraisal-process) guide.

## What a merit increase matrix is

A flat increment table (for example, 12% for rating 5 and 8% for rating 3) treats two people with the same rating the same, even if one is paid ₹3,00,000 less than the other for the same job. A merit matrix adds a second axis so that the increment also corrects position in the range.

The two inputs are:

- **Performance rating**, after calibration.
- **Position in range**, measured by compa-ratio against the midpoint of the salary range for the grade.

## How to calculate compa-ratio

Compa-ratio = Current salary / Midpoint of the salary range for the grade

Suppose the range for a grade runs from ₹9,60,000 to ₹14,40,000 a year, so the midpoint is ₹12,00,000.

| Employee | Current CTC | Compa-ratio |
| --- | --- | --- |
| Asha | ₹10,20,000 | ₹10,20,000 / ₹12,00,000 = 0.85 |
| Rohan | ₹12,60,000 | ₹12,60,000 / ₹12,00,000 = 1.05 |
| Farhan | ₹13,80,000 | ₹13,80,000 / ₹12,00,000 = 1.15 |

A compa-ratio below 1.00 means the employee is paid below the midpoint, which is usually treated as the market rate for a fully competent person in that grade. Ranges should be built from salary survey data or market benchmarks you trust, and refreshed every year or two.

## A sample 5x4 merit matrix

The percentages below are illustrative. Your own numbers depend on budget, market movement and how far pay has drifted from the midpoints.

| Rating | Below 0.90 | 0.90 to 0.99 | 1.00 to 1.09 | 1.10 and above |
| --- | --- | --- | --- | --- |
| 5 Outstanding | 16% | 14% | 12% | 10% |
| 4 Exceeds | 12% | 10% | 9% | 7% |
| 3 Meets | 9% | 8% | 7% | 5% |
| 2 Needs improvement | 5% | 4% | 3% | 2% |
| 1 Unsatisfactory | 0% | 0% | 0% | 0% |

Reading it: Asha (compa-ratio 0.85) rated 4 gets 12%, which is ₹10,20,000 x 12% = ₹1,22,400, taking her to ₹11,42,400 and a compa-ratio of 0.952. Farhan (compa-ratio 1.15) also rated 4 gets 7%, which is ₹13,80,000 x 7% = ₹96,600, taking him to ₹14,76,600. Both are rewarded for the same rating, but Asha closes the gap to the midpoint faster.

Some organisations cap increments at the range maximum, paying anything above it as a one-time lump sum. That keeps the range meaningful without denying a strong performer a reward.

## Fitting the matrix to a 9% budget

A matrix is only fair if it is affordable. The test is simple: the payroll-weighted average increment must equal the pool.

Take a company with annual payroll of ₹10,00,00,000 and a merit pool of 9%, which is ₹90,00,000. After calibration, payroll sits across the grid as follows (₹ lakh):

| Rating | Below 0.90 | 0.90 to 0.99 | 1.00 to 1.09 | 1.10 and above | Row payroll |
| --- | --- | --- | --- | --- | --- |
| 5 | 40 | 60 | 50 | 20 | 170 |
| 4 | 80 | 140 | 110 | 50 | 380 |
| 3 | 70 | 130 | 110 | 60 | 370 |
| 2 | 10 | 30 | 30 | 10 | 80 |
| 1 | 0 | 0 | 0 | 0 | 0 |

No employee was rated 1 in this example.

### First draft: over budget

The first draft used the matrix above but with rating 4 at 13%, 11%, 10% and 8%, and rating 3 at 10%, 9%, 8% and 6%. That draft cost ₹97,50,000, or 9.75% of payroll, which is ₹7,50,000 over the pool.

Trimming every cell in ratings 4 and 3 by one percentage point saves 1% of their combined payroll: 1% x (₹3,80,00,000 + ₹3,70,00,000) = ₹7,50,000. That brings the cost to ₹90,00,000, and gives the final matrix shown earlier.

### Final check: cost by rating

Rating 4 as a worked row: (₹80 lakh x 12%) + (₹140 lakh x 10%) + (₹110 lakh x 9%) + (₹50 lakh x 7%) = ₹9.6 lakh + ₹14.0 lakh + ₹9.9 lakh + ₹3.5 lakh = ₹37.0 lakh.

| Rating | Payroll | Increment cost | Average increment |
| --- | --- | --- | --- |
| 5 | ₹1,70,00,000 | ₹22,80,000 | 13.4% |
| 4 | ₹3,80,00,000 | ₹37,00,000 | 9.7% |
| 3 | ₹3,70,00,000 | ₹27,40,000 | 7.4% |
| 2 | ₹80,00,000 | ₹2,80,000 | 3.5% |
| **Total** | **₹10,00,00,000** | **₹90,00,000** | **9.0%** |

The weighted average is ₹90,00,000 / ₹10,00,00,000 = 9.0%, exactly the pool. If the result had been under the pool, the surplus could go to the highest cells or to a market correction fund.

Give managers a little discretion, such as plus or minus 2 percentage points around the matrix value, with any increment outside that range flagged for approval. Track spend against each manager's share of the pool as decisions are entered.

## Promotions and market corrections are separate pools

Keep three kinds of increase apart:

| Type | Purpose | Typical funding |
| --- | --- | --- |
| Merit increment | Reward for performance in the current role | The merit pool, through the matrix |
| Promotion increase | Move to a higher grade and its range | A separate promotion budget |
| Market correction | Fix pay well below the range for reasons unrelated to performance | A separate correction fund, often small and targeted |

Mixing them makes the matrix look generous in one cell and stingy in another, and hides the true cost of each decision.

## Minimum wages, the Labour Code wage definition and statutory costs

Increments do not happen in isolation from statutory pay rules.

**Minimum wages.** After increments, every employee's wages must still be at or above the applicable minimum wage for their state, skill category and zone. Many states revise the variable dearness allowance during the year, so a low-paid employee can fall below the floor between appraisal cycles. Check the bottom of each range against current notifications; our [minimum wages](/blog/minimum-wages-in-india-explained) guide explains how the floor is set.

**The wage definition.** Under the Labour Codes, in force since 21 November 2025, "wages" excludes certain allowances, but if the excluded components exceed 50% of total remuneration, the excess is added back to wages. If an increment is loaded mostly into allowances, it can push the excluded share over 50% and raise the wage base anyway. Our guide to the [Labour Code wage definition and 50% rule](/blog/labour-codes-wage-definition-50-percent-rule) has worked examples.

**PF and gratuity.** Raising Basic raises statutory costs that are often missed in the increment budget:

- **PF:** for an employee whose Basic moves from ₹20,000 to ₹22,000 a month, the employer's 12% contribution rises by ₹2,000 x 12% = ₹240 a month. The PF wage ceiling is ₹25,000 a month from 17 September 2026, so more employees now see their PF rise with each increment than under the earlier ₹15,000 ceiling. Contribution rules are published on the [EPFO website](https://www.epfindia.gov.in/).
- **Gratuity:** gratuity is 15/26 of last drawn monthly wages for each completed year of service, so ₹2,000 more in monthly wages adds ₹2,000 x 15 / 26 = about ₹1,154 to the liability for every completed year. For an employee with 8 years of service, that is about ₹9,231 of extra liability from one increment.

Budget the cost to company, not just the gross increase. The Code on Wages, 2019 and the other codes are available on the [Ministry of Labour and Employment](https://labour.gov.in/) website.

## Effective date and arrears

Most companies make increments effective from 1 April or 1 July. If the effective date is 1 April but the cycle closes in June, April and May are paid as arrears in the June payroll. PF on those arrears is due for the month in which they are actually paid. Our guide to [salary arrears calculation](/blog/salary-arrears-calculation) walks through the payroll and TDS side.

## Communicating increments

- **Rating first, money second.** The employee should already know their rating and the reasons before the increment is discussed.
- **Explain the two axes.** If a strong performer gets a smaller percentage because they are high in the range, say so. It is a fair reason when it is explained, and a grievance when it is not.
- **Show the full picture.** State the new CTC, the monthly gross, any change to variable pay, and the effective date.
- **Give a route for questions.** Name the person to approach and a time window.

## What an increment letter should include

- Employee name, employee code, designation and grade.
- The effective date of the revision.
- Previous and revised CTC, with an annexure showing the revised component breakup.
- Any change in designation or grade, if a promotion is included.
- A note that other terms of employment remain unchanged.
- Signature of an authorised signatory, and a confidentiality line.

Generate letters from the approved data, not from a separate spreadsheet, so the letter, the payroll master and the appraisal record all show the same number.

## Common mistakes

- Using a single increment percentage per rating and ignoring position in range.
- Building the matrix without checking the weighted cost against the pool.
- Funding promotions and market corrections from the merit pool.
- Budgeting the gross increase but not the extra PF and gratuity cost.
- Letting low-paid employees fall below a revised minimum wage between cycles.
- Issuing letters before the final approval, then having to reissue them.

## FAQs

**What is a merit matrix in compensation?** It is a grid that sets the increment percentage from the employee's performance rating and their position in the salary range, usually measured by compa-ratio.

**How do you calculate compa-ratio?** Divide the employee's current salary by the midpoint of the salary range for their grade. A result of 0.85 means they are paid 15% below the midpoint.

**How do you make a merit matrix fit the budget?** Multiply each cell's percentage by the payroll in that cell, add them up, and divide by total payroll. Adjust the percentages until the result equals the merit pool.

**Why do high performers high in the range get a smaller percentage?** Because the matrix balances reward with pay position. They may still get a lump-sum award, and a promotion moves them into a higher range.

**Do increments increase PF and gratuity?** Yes, where the increase falls in Basic or other components that count as wages. PF rises for employees whose PF wages are below the ceiling, and gratuity liability rises with last drawn wages.

## How NeevHR helps

NeevHR [compensation](/features/compensation) runs a merit increment cycle with a configurable merit matrix by rating and compa band, a live budget burn-down with per-manager envelopes and out-of-policy flags, compa-ratio views against the grade midpoint, multi-stage approval and bulk increment letter generation into the document vault. Ratings come from the [performance](/features/performance) module, and you can test individual cases with the [salary hike calculator](/tools/salary-hike-calculator).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 06 Oct 2026.*`,
};

export default post;
