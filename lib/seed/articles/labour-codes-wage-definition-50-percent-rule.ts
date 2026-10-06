import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "labour-codes-wage-definition-50-percent-rule",
  title: "The 50% wage rule under the Labour Codes, explained",
  excerpt:
    "The 50% wage rule under the Labour Codes explained: what wages include and exclude, a worked add-back example, the effect on PF and gratuity, and restructuring.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-06",
  body: `Under the Labour Codes, "wages" means all remuneration, including Basic pay, dearness allowance and retaining allowance, but excludes components such as HRA, conveyance, overtime, commission and the employer's PF contribution. If those excluded components exceed 50% of total remuneration, the excess is added back to wages. The rule, in force since 21 November 2025, raises the base for gratuity, PF, bonus and leave encashment wherever Basic is low.

This guide explains the rule and how to restructure pay around it. For how a CTC is built in the first place, see our [salary structure and CTC breakup guide](/blog/salary-structure-ctc-breakup-explained).

## What counts as wages under the Code on Wages?

Section 2(y) of the Code on Wages, 2019 defines wages as all remuneration, whether by way of salary, allowances or otherwise, expressed in money or capable of being so expressed, payable under the terms of employment. It expressly includes Basic pay, dearness allowance and retaining allowance. The Code on Social Security, 2020 and the other two Codes use the same definition, and the Ministry of Labour's FAQs confirm that this single definition applies across all four Codes.

### What the definition excludes

| Clause | Excluded component | Counted in the 50% test? |
| --- | --- | --- |
| (a) | Bonus payable under any law that is not part of remuneration under the terms of employment | Yes |
| (b) | Value of house accommodation, light, water, medical attendance or other amenity excluded by government order | Yes |
| (c) | Employer's contribution to any pension or provident fund, and interest on it | Yes |
| (d) | Conveyance allowance or the value of a travelling concession | Yes |
| (e) | Sums paid to meet special expenses arising from the nature of the job | Yes |
| (f) | House rent allowance | Yes |
| (g) | Remuneration under an award or settlement, or an order of a court or tribunal | Yes |
| (h) | Overtime allowance | Yes |
| (i) | Commission | Yes |
| (j) | Gratuity payable on termination | No |
| (k) | Retrenchment compensation, other retirement benefits or ex gratia on termination | No |

The Ministry's FAQs add that performance-based incentives, ESOPs, the variable part of pay and reimbursement-based payments are not part of wages, and that annual performance incentives do not count as wages for computations under the Codes. Separately, remuneration in kind (the FAQs give food coupons, ration items and mobile recharge as examples) is treated as wages up to 15% of total wages.

## The 50% add-back proviso explained

The first proviso to section 2(y) says that if the payments in clauses (a) to (i) exceed one half of all remuneration (or another percentage the Central Government notifies), the amount above that half is deemed to be remuneration and added to wages.

Two clarifications from the Ministry's additional FAQs of 16 March 2026 shape the arithmetic:

- **Total remuneration** for the test includes statutory components such as employer PF and pension contributions and statutory bonus. Gratuity, ESI and other retirement benefits are not included.
- **Overtime allowance** forms part of the calculation, so a month with heavy overtime can trigger or increase the add-back.

### What about special allowance?

This is the point most likely to be debated. A general "special allowance" is not in the exclusion list, so on a plain reading of the Code it is already part of wages. The Ministry's FAQs, however, explain the rule more simply: if payments other than Basic pay, dearness allowance and retaining allowance exceed 50% of all remuneration, the excess is added to wages. Many employers therefore test structures on that simpler basis. The two readings can give different wage figures, especially for gratuity, so take advice and document the basis you adopt.

## Worked example: calculating the add-back

An employee's monthly remuneration totals ₹1,00,000, with Basic set at 35%. The employer contributes PF on wages capped at ₹25,000. Gratuity accrual is part of CTC but is left out of total remuneration, as the FAQs require.

| Component | Monthly amount | Treatment |
| --- | --- | --- |
| Basic + DA | ₹35,000 | Wages |
| HRA | ₹17,500 | Excluded, clause (f) |
| Conveyance allowance | ₹3,000 | Excluded, clause (d) |
| Special allowance | ₹41,500 | Treated as an allowance, following the Ministry's FAQ wording |
| Employer PF (12% of ₹25,000) | ₹3,000 | Excluded, clause (c), but counted in total remuneration |
| **Total remuneration** | **₹1,00,000** | |

The calculation:

1. Components other than Basic + DA: ₹17,500 + ₹3,000 + ₹41,500 + ₹3,000 = ₹65,000.
2. Half of total remuneration: 50% × ₹1,00,000 = ₹50,000.
3. Excess over half: ₹65,000 minus ₹50,000 = ₹15,000.
4. Wages for statutory purposes: ₹35,000 + ₹15,000 = ₹50,000.

Notice the pattern: on this basis, whenever Basic + DA is below half of total remuneration, wages become exactly half of total remuneration. If special allowance were instead treated as wages already, the excluded components would be only ₹23,500, below ₹50,000, so there would be no add-back, and wages would be ₹35,000 + ₹41,500 = ₹76,500. That gap is why the basis needs a documented decision.

## What the 50% rule affects

| Calculation | How the wage definition matters | Effect in the example |
| --- | --- | --- |
| Gratuity | 15 days' wages per year of service on last drawn wages | 10 years: ₹2,01,923 on ₹35,000, ₹2,88,462 on ₹50,000 |
| Leave encashment | Where encashment is computed on wages, for example for workers under the OSH Code | 20 days: ₹26,923 on ₹35,000, ₹38,462 on ₹50,000 (26-day divisor) |
| PF | Contributions under the Code on Social Security are on wages as defined | No change here: wages are above ₹25,000 and PF is on capped wages |
| Statutory bonus | Calculated on wages within the bonus eligibility and calculation ceilings | Mostly affects lower-paid employees |
| Retrenchment compensation | Based on average pay for each completed year of service | Higher base on retrenchment |
| ESI | Uses the same definition; contributions were already on gross wages | Little change for most covered employees |

The gratuity arithmetic: ₹35,000 × 15 × 10 ÷ 26 = ₹2,01,923, and ₹50,000 × 15 × 10 ÷ 26 = ₹2,88,462, a difference of ₹86,539 for one employee. The Ministry's FAQs say gratuity on the revised definition applies from 21 November 2025, calculated on the wages last drawn at exit. For gratuity mechanics, see our [gratuity guide](/blog/gratuity-in-india-eligibility-formula-tax).

For PF, the effect depends on the employer's contribution basis and the ₹25,000 ceiling from 17 September 2026. Employers who contribute on capped wages see no change for employees whose wages already exceed the ceiling. Employees below the ceiling see higher PF. How EPFO applies the add-back to PF wages in practice is still settling, so follow current guidance on [epfindia.gov.in](https://www.epfindia.gov.in/) and our [EPF guide](/blog/epf-explained-contribution-uan-withdrawal).

## How the 50% rule affects take-home pay

Higher wages mean higher employee PF for anyone below the ceiling, and that reduces take-home. Take an employee with monthly gross pay of ₹30,000 and Basic of ₹12,000, with PF at 12% of actual Basic. To restructure:

- Setting Basic at 50% of gross (₹15,000) is not quite enough, because employer PF also counts in total remuneration. With Basic at ₹15,000, employer PF is ₹1,800, total remuneration ₹31,800, and other components ₹16,800, which is ₹900 above half of ₹31,800.
- Setting Basic at ₹16,000 works: employer PF is ₹1,920, total remuneration ₹31,920, and other components ₹14,000 + ₹1,920 = ₹15,920, within half of ₹31,920 (₹15,960).
- Employee PF rises from ₹1,440 (12% of ₹12,000) to ₹1,920 (12% of ₹16,000), so monthly take-home falls by ₹480, or ₹5,760 a year.
- Employer PF rises by the same ₹480 a month. If CTC is held constant, gross pay must come down to fund it.

The employee's retirement savings rise by ₹960 a month (both shares), and gratuity on exit rises too. For old-regime taxpayers, a higher Basic also lifts the HRA exemption limits, as our [HRA exemption guide](/blog/hra-exemption-explained) explains.

## How to restructure salary under the Labour Codes

1. **Model every grade.** For each pay structure, compute total remuneration, the excluded components and the resulting wages. Flag structures where Basic + DA is below half.
2. **Choose an approach.** Either raise Basic + DA (and reduce allowances) so that no add-back arises, or keep the structure and compute statutory amounts on deemed wages every month. Raising Basic is cleaner for payroll and easier to explain.
3. **Decide who absorbs the cost.** CTC-neutral changes reduce take-home; take-home-neutral changes raise CTC. Many employers split the difference by grade.
4. **Re-link dependent components.** HRA set as a percentage of Basic rises with it, so rebalance special allowance rather than HRA.
5. **Check the floor.** Restructured pay must still meet the applicable minimum wage, which our [minimum wages guide](/blog/minimum-wages-in-india-explained) covers.
6. **Communicate early.** Show each employee old and new payslips side by side, including the extra retirement savings.

## Transition and state rules

The definition of wages has applied since 21 November 2025, and the Ministry's FAQs confirm that date for gratuity. The Central Government can notify a percentage other than 50%. State rules under the Codes are being notified progressively, and the Ministry has said earlier rules continue during the transition to the extent they are consistent with the Codes. EPFO and ESIC operational guidance continues to evolve. Track updates on the [Ministry of Labour](https://labour.gov.in/) website before finalising structures.

## What not to change without legal advice

- **Cutting gross pay or CTC** to fund higher PF, which can amount to a reduction in wages.
- **Relabelling fixed allowances** as reimbursements or variable pay to keep them out of wages, when the substance has not changed.
- **Changing pay structures for workers** covered by the Industrial Relations Code without following its notice of change requirements, or in breach of a settlement.
- **Retrospective restructuring** that alters gratuity or leave encashment already accrued.
- **Stopping PF contributions above the ceiling** for employees whose contracts promise contributions on actual wages.

## Common mistakes

- **Testing against gross pay only,** forgetting that employer PF counts in total remuneration.
- **Leaving gratuity provisions on old Basic** after 21 November 2025.
- **Ignoring overtime,** which can trigger the add-back in a heavy month.
- **Not documenting the basis** adopted for special allowance.
- **Restructuring without communication,** so employees see a lower take-home with no explanation.

## FAQs

**What is the 50% rule in the new Labour Codes?** If excluded components such as HRA, conveyance, overtime, commission and employer PF exceed 50% of total remuneration, the excess is added back to wages for statutory calculations.

**Does Basic salary have to be 50% of CTC?** Not as such. The test compares the excluded components with total remuneration, which leaves out gratuity. Keeping Basic + DA at or slightly above half of total remuneration avoids an add-back.

**Is HRA part of wages under the Labour Codes?** No, HRA is excluded, but it counts towards the 50% test.

**Does the 50% rule increase PF deductions?** It can, for employees whose PF wages are below the ₹25,000 ceiling or whose employer contributes on actual wages.

**Are bonuses and incentives part of wages?** Statutory bonus is excluded and counts in the 50% test. The Ministry's FAQs say performance-based incentives and ESOPs are not part of wages.

## How NeevHR helps

NeevHR [payroll](/payroll) defines pay structures as components assigned to employee groups, so a revised Basic + DA split can be configured once for a grade and applied from an effective date, with the PF contribution basis (actual or capped wages) as a configuration point. Use the [CTC calculator](/tools/ctc-calculator) and the [gratuity calculator](/tools/gratuity-calculator) for quick what-if checks before you finalise a structure.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 06 Oct 2026.*`,
};

export default post;
