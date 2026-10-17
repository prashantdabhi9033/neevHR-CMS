import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "leave-encashment-tax-exemption",
  title: "Leave encashment tax exemption: rules and calculation",
  excerpt:
    "Leave encashment tax exemption in India explained: taxable during service, the ₹25 lakh limit on exit, the least-of test, average salary and TDS in payroll.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-12",
  body: `Leave encashment received while you are still in service is fully taxable as salary. Leave encashment received on retirement or resignation is exempt for non-government employees up to the least of four amounts: the actual amount received, ₹25,00,000, ten months' average salary, and the cash equivalent of unavailed leave calculated at no more than 30 days for each completed year of service. Central and state government employees get a full exemption on retirement.

This guide goes deep on the tax only. For designing the encashment rules themselves, such as caps, divisors and carry-forward, see our [leave management guide](/blog/leave-management-guide), and for the rest of the exit maths, see [full and final settlement explained](/blog/full-and-final-settlement-explained).

## Where does the exemption sit in the law now?

For years, the exemption was known as section 10(10AA) of the Income-tax Act, 1961. The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026 and carries the salary exemptions forward in renumbered provisions, and "previous year" is now "tax year". Most payroll teams and employees still say "10(10AA)", and this article uses that name for clarity. Confirm the current section reference and any notified changes on the [Income Tax Department](https://www.incometax.gov.in/) website before you cite it in a policy or a tax computation.

The ₹25,00,000 limit for non-government employees has applied since 1 April 2023, when it was raised from ₹3,00,000.

## Leave encashment during service vs on exit

| Situation | Tax treatment | How payroll handles it |
| --- | --- | --- |
| Year-end encashment of excess leave while employed | Fully taxable as salary | Add to taxable salary; TDS through the year's computation |
| Encashment on resignation (non-government employee) | Exempt up to the least of four limits; balance taxable | Exemption worked out in the full and final settlement |
| Encashment on retirement or superannuation (non-government) | Same four-limit test | As above |
| Encashment on retirement (central or state government employee) | Fully exempt | No tax on the encashment |
| Encashment on termination by the employer | Commonly treated like other exits under the four-limit test; take advice on specific facts | As above |
| Encashment paid to legal heirs after an employee's death | Generally understood not to be taxable as salary in the heirs' hands; confirm with an advisor | Pay through F&F with documentation |

Employees of public sector undertakings, local authorities and most statutory bodies are treated as non-government employees for this purpose, so the four-limit test applies to them.

## How is leave encashment exemption calculated?

For a non-government employee, the exempt amount is the **least of**:

1. **The actual amount received** as leave encashment.
2. **₹25,00,000**, reduced by any exemption already claimed on leave encashment from earlier employers. It is a lifetime limit.
3. **Ten months' average salary.**
4. **Cash equivalent of unavailed leave**, where leave entitlement is counted at no more than 30 days for each completed year of service with the employer from whose service the employee retires or resigns, less leave taken or encashed during service, valued at the average salary.

Anything above the least of the four is taxable salary.

### What counts as "salary" and "average salary"?

- **Salary** for this purpose means basic salary, plus dearness allowance if the terms of employment treat it as part of retirement benefits, plus commission paid as a fixed percentage of turnover. HRA, special allowance and other allowances are excluded.
- **Average salary** is the average of salary for the 10 months immediately before retirement or resignation.
- **Completed years** ignore part years. Twenty-four years and nine months is 24 completed years.

Note the difference between the employer's encashment formula and the tax formula. The employer may encash on last drawn basic, gross, or Labour Code "wages". The tax test always values unavailed leave on the 10-month average of basic plus eligible DA and commission. The two numbers often differ, and the difference is taxable.

## Worked example: encashment on retirement

Meera retires from a private sector company on 31 October 2026 after 24 years and 9 months of service. Her salary for tax purposes (basic plus DA forming part of retirement benefits) was ₹1,18,000 a month from January to June 2026 and ₹1,28,000 a month from July 2026.

**Step 1: average salary.** The ten months before retirement are January to October 2026: six months at ₹1,18,000 and four at ₹1,28,000.

(6 × ₹1,18,000 + 4 × ₹1,28,000) ÷ 10 = (₹7,08,000 + ₹5,12,000) ÷ 10 = **₹1,22,000**

**Step 2: amount paid.** Company policy encashes leave on last drawn basic plus DA ÷ 30. Her leave balance is 280 days.

₹1,28,000 ÷ 30 × 280 = **₹11,94,667** (rounded)

**Step 3: unavailed leave for the tax test.** She earned 30 days a year under the policy. Entitlement for tax is capped at 30 days × 24 completed years = 720 days. She took or encashed 440 days during service, so unavailed leave is 720 − 440 = 280 days.

**Step 4: the four limits.**

| Limit | Calculation | Amount |
| --- | --- | --- |
| 1. Actual amount received | From step 2 | ₹11,94,667 |
| 2. Statutory limit | No earlier exemption claimed | ₹25,00,000 |
| 3. Ten months' average salary | 10 × ₹1,22,000 | ₹12,20,000 |
| 4. Cash equivalent of unavailed leave | 280 × (₹1,22,000 ÷ 30) | ₹11,38,667 |

**Exempt amount: ₹11,38,667. Taxable amount: ₹11,94,667 − ₹11,38,667 = ₹56,000.**

The taxable ₹56,000 arises only because the employer encashed at the last drawn salary while the tax test uses the ten-month average.

### Variant: when the policy is more generous than 30 days a year

If Meera's company credited 36 days a year, her policy balance could be higher, but the tax entitlement is still capped at 30 days for each completed year. Extra leave earned above the cap increases the taxable portion, not the exemption.

### Variant: an earlier exemption

If Meera had claimed ₹15,00,000 of leave encashment exemption on leaving a previous employer, limit 2 becomes ₹25,00,000 − ₹15,00,000 = ₹10,00,000. That is now the lowest limit, so only ₹10,00,000 is exempt and ₹1,94,667 is taxable. Payroll can only apply this if the employee declares the earlier claim, so ask for it in the exit declaration.

## Worked example: encashment during service

Rahul has 42 days of earned leave at the end of the leave year and a carry-forward cap of 30. The policy encashes the 12 excess days at basic of ₹39,000 a month ÷ 26, which is ₹1,500 a day, so he receives 12 × ₹1,500 = ₹18,000.

The full ₹18,000 is taxable salary in that tax year. There is no exemption for encashment while in service, under either regime. Payroll adds it to his projected taxable income, and TDS is recalculated for the remaining months. For the overall TDS method, see [salary TDS explained](/blog/salary-tds-explained).

## Does the new tax regime allow the leave encashment exemption?

Under the 1961 Act, the leave encashment exemption on retirement or resignation remained available to employees in the new regime under section 115BAC, unlike exemptions such as HRA and LTA. The new regime is now the default, and the general understanding is that this treatment continues under the Income-tax Act, 2025. Confirm against the current law before relying on it for a large settlement. For the regime choice itself, see [TDS on salary: old vs new regime](/blog/tds-on-salary-old-vs-new-regime-fy-2026-27).

| Item | Old regime | New regime |
| --- | --- | --- |
| Encashment during service | Fully taxable | Fully taxable |
| Encashment on retirement or resignation (non-government) | Exempt up to the least of four limits | Exempt up to the least of four limits, as generally understood; verify |
| Encashment on retirement (government) | Fully exempt | Fully exempt |

## TDS on leave encashment in payroll and F&F

Salary TDS is deducted under section 392 of the Income-tax Act, 2025 (section 192 under the old Act). In practice:

- **During service:** treat encashment as a one-time taxable payment. Recompute annual tax and spread the extra tax over the remaining months, or deduct it in the month of payment if few months remain.
- **On exit:** compute the exemption inside the full and final settlement, deduct TDS on the taxable portion along with the final month's salary, and show both the exempt and taxable parts in Form 130 (Form 16 under the old Act).
- **Collect declarations:** earlier leave encashment exemptions claimed, and the employee's regime choice.
- **Report:** the payment flows into the quarterly TDS return in Form 138 (Form 24Q under the old Act). See our [Form 24Q explained](/blog/form-24q-explained) guide.

Use our [leave encashment calculator](/tools/leave-encashment-calculator) to check the amount, and the [full and final calculator](/tools/full-and-final-calculator) for the whole settlement.

## Relief for arrears and lump-sum payments

When salary for earlier years is received in a later year, an employee can claim relief so that the higher slab in the year of receipt does not increase tax unfairly. Under the old Act this was section 89, claimed through Form 10E; the 2025 Act carries an equivalent relief, so confirm the current section and form. Whether leave encashment received during service qualifies depends on whether it is genuinely salary for earlier years, which is a question of facts. Employees usually claim it in their own return; payroll can consider it only where the employee provides the computation. See [salary arrears calculation](/blog/salary-arrears-calculation) for arrears in general.

## Common mistakes

- Applying the exemption to year-end encashment while the employee is still in service.
- Using the employer's encashment base, such as gross salary, in the tax test instead of basic plus eligible DA and commission.
- Counting part years as completed years.
- Ignoring the 30-days-a-year cap when the policy credits more leave.
- Forgetting the lifetime ₹25 lakh limit when the employee has claimed an exemption before.
- Showing the full encashment as exempt in Form 16 without a working.
- Assuming the new regime removes the exemption altogether.

## FAQs

**Is leave encashment taxable on resignation?** It is exempt up to the least of the four limits for non-government employees; any excess is taxable. Resignation is treated like retirement for this exemption.

**Is the ₹25 lakh leave encashment limit per employer?** No. It is a lifetime limit across all employers, reduced by any exemption claimed earlier.

**Is leave encashment taxable for government employees?** Central and state government employees get a full exemption on retirement. Encashment during service is taxable for everyone.

**Is DA included in average salary for leave encashment?** Only if the terms of employment treat DA as part of retirement benefits. Commission counts only when it is a fixed percentage of turnover.

**Is leave encashment exempt under the new tax regime?** The exemption on retirement or resignation has been generally available in the new regime, and this is understood to continue under the 2025 Act. Verify the current position for large amounts.

**Is leave encashment included in gratuity?** No. They are separate payments with separate tax exemptions. See our guide to [gratuity in India](/blog/gratuity-in-india-eligibility-formula-tax).

## How NeevHR helps

NeevHR [leave](/features/leave) keeps encashment and lapse in the balance ledger, with a leave liability report finance can value every month. The [full and final settlement](/features/full-and-final-settlement) worksheet works out leave encashment per leave type using your configured base and day divisor, calculates the leave-encashment and gratuity exemptions, and deducts TDS on the settlement in the same step before posting to a full and final run in [payroll](/payroll). To see an encashment worked through end to end, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 17 Oct 2026.*`,
};

export default post;
