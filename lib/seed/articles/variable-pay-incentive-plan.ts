import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "variable-pay-incentive-plan",
  title: "Variable pay: how to design incentive and bonus plans in India",
  excerpt:
    "Variable pay design for Indian companies: target bonus %, company and individual weightage, payout curves, accrual, TDS on payout, clawbacks and an example.",
  category: "performance",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `Variable pay is the part of an employee's pay that depends on performance: the company's results, the team's results, the individual's results, or a mix. A well-designed variable pay plan fixes a target amount (usually a percentage of fixed pay or CTC), the measures and their weightage, a payout curve with a threshold and a cap, the payout frequency, and the rules for joiners, leavers and clawbacks. The payout is taxable salary in the month it is paid.

This guide covers plan design, a worked payout example, payroll and tax treatment, and the common traps. It is not about statutory bonus, which is a legal entitlement with its own formula; for that, see our guide to [statutory bonus under the Payment of Bonus Act](/blog/statutory-bonus-payment-of-bonus-act). For how variable pay sits inside a CTC, see [salary structure and CTC breakup](/blog/salary-structure-ctc-breakup-explained).

## What is variable pay, and how is it different from statutory bonus?

The two are often both called "bonus" on the payslip, which causes confusion with employees and auditors. They are different things.

| Feature | Variable pay (performance bonus or incentive) | Statutory bonus |
| --- | --- | --- |
| Source | Company policy and the offer letter | Bonus provisions of the law (the Payment of Bonus Act, carried into the Code on Wages, 2019) |
| Who is covered | Whoever the plan names, often all staff or specific grades | Employees within the statutory wage limit, currently ₹21,000 a month (Basic + DA) |
| Amount | Linked to performance against targets | 8.33% to 20% of the calculation wage, linked to allocable surplus |
| Can it be zero? | Yes, if thresholds are not met | No, the minimum is payable even without profit, subject to the law's conditions |
| Timing | Monthly, quarterly, half-yearly or annual, as the plan says | Within the statutory time limit after the accounting year |

Do not label a performance bonus as statutory bonus, or the reverse. Some payments may be adjustable against statutory bonus only in limited situations the law allows, so take advice before you net one against the other.

## How much of CTC should be variable?

There is no legal rule. Practice in India varies by level and function:

| Level or function | Typical target variable as % of CTC | Usual measures |
| --- | --- | --- |
| Staff and junior officers | 0% to 10% | Company results, attendance, quality |
| Middle management | 10% to 20% | Company, function and individual goals |
| Senior management | 20% to 35% | Company financials, strategic goals |
| CXO | 30% to 50% or more | Company financials, often with long-term incentives |
| Sales (frontline) | 20% to 50% | Revenue, collections, margin, new accounts |

Two cautions. First, a high variable share on a low CTC hurts take-home and hiring; candidates compare fixed pay. Second, the Ministry's FAQs on the Labour Codes say performance-based incentives are not wages, but excluded components still count in the 50% test. Our guide to the [50% wage rule](/blog/labour-codes-wage-definition-50-percent-rule) explains the arithmetic.

## How do you design a variable pay plan?

### 1. Set the target amount

Express the target as a percentage of annual fixed pay or of CTC, and write down which. "15% of CTC" and "15% of fixed" give different numbers. Fix the base as on a stated date, such as 01 Apr, and decide whether mid-year increments change it (prorated by months is the fairest rule).

### 2. Choose the measures and weightage

Most companies use two or three layers:

- **Company performance**, such as revenue, EBITDA or profit before tax against budget.
- **Business unit or function performance**, such as plant output or delivery margin.
- **Individual performance**, usually the appraisal rating or goal score.

Senior roles carry more company weight; junior roles carry more individual weight. A common pattern is 70:30 (company:individual) for leadership, 50:50 for managers and 30:70 for staff.

### 3. Draw the payout curve

A payout curve converts achievement into a payout percentage. It has three points:

| Point | Achievement of target | Payout % for that measure |
| --- | --- | --- |
| Threshold | 80% | 50% |
| Target | 100% | 100% |
| Cap | 120% or more | 150% |

Below threshold the payout is zero. Between points, interpolate in a straight line. In this curve, each percentage point of achievement between 80% and 100% adds 2.5 points of payout (50 points spread over 20).

For individual performance, a rating multiplier is simpler than a curve, for example: Outstanding 150%, Exceeds 120%, Meets 100%, Partially meets 50%, Does not meet 0%. Keep the rating scale the same one your [performance appraisal process](/blog/performance-appraisal-process) uses.

### 4. Add a gate, if you need one

A gate (or "circuit breaker") says no variable pay is paid unless a minimum company result is reached, for example 85% of budgeted profit. Many companies apply the gate only to the company component, so strong individual performers are not wiped out.

### 5. Decide the frequency

| Frequency | Suits | Watch out for |
| --- | --- | --- |
| Monthly | Frontline sales, collections, production incentives | High admin effort; disputes every month |
| Quarterly | Sales managers, service delivery | Targets that ignore seasonality |
| Half-yearly | Mixed roles | Two appraisal-like exercises a year |
| Annual | Managers and leadership | Payout far from the effort; retention hook only once a year |

A hybrid is common: quarterly payouts of 60% to 70% of the earned amount, with the balance trued up after the year.

### 6. Write the eligibility rules

- **Joiners:** prorate by months or days of service in the plan period; set a minimum service (for example 3 months) to qualify.
- **Leavers:** decide whether employees who resign before the payout date get anything. Many plans require the employee to be on the rolls on the payout date; others pay prorated amounts to good leavers (retirement, death, redundancy).
- **Long leave:** prorate for unpaid leave; do not reduce for statutory maternity leave, which must not disadvantage the employee.

## Worked example: an annual performance bonus

Ankita is a manager with annual CTC of ₹18,00,000. Her plan has a target variable of 15% of CTC, weighted 60% company and 40% individual, with the payout curve above.

**Target variable:** ₹18,00,000 × 15% = ₹2,70,000.

**Company component:** the company achieved 92% of budgeted profit. Payout = 50% + (92 minus 80) × 2.5 = 50% + 30% = 80%.

**Individual component:** Ankita is rated Exceeds, a 120% multiplier.

**Weighted payout factor:** (60% × 80%) + (40% × 120%) = 48% + 48% = 96%.

**Payout:** ₹2,70,000 × 96% = ₹2,59,200.

**If she had joined on 01 Jul:** she served 9 of 12 months, so ₹2,59,200 × 9 ÷ 12 = ₹1,94,400.

**If the company had achieved 78%:** below threshold, so the company component pays nothing. Payout factor = 0% + (40% × 120%) = 48%, and the payout is ₹2,70,000 × 48% = ₹1,29,600.

## Sales incentive vs performance bonus

Sales incentives need their own plan because they are tied to measurable transactions.

| Design point | Sales incentive | Performance bonus |
| --- | --- | --- |
| Measure | Revenue booked, collected or margin | Company and individual goals |
| Frequency | Monthly or quarterly | Annual or half-yearly |
| Payout curve | Often uncapped above target, with accelerators | Usually capped at 150% to 200% |
| Earned when | On booking, invoicing or collection, as defined | After results are audited or approved |
| Clawback | On cancellation, non-payment or returns | Rare, mainly for misstatement or misconduct |

Define "achievement" precisely. Paying on collection rather than booking avoids most clawbacks. Fix crediting rules for shared deals and territory changes before the year starts.

## How should payroll accrue variable pay?

Variable pay is earned through the year but often paid once. Finance should accrue it monthly so that profit is not overstated before the payout month.

- **Monthly provision:** accrue target variable ÷ 12 for each eligible employee, adjusted each quarter to the expected achievement.
- **True-up:** at payout, reverse the provision and book the actual amount. Under-accrual hits the payout month's profit.
- **Leavers:** release the provision for employees who forfeit.
- **Payroll's role:** payroll pays the approved amount as an earning in the payout month. The provision is an accounting entry, not a deduction from the employee.

## How is variable pay taxed?

Variable pay is salary. It is taxed in the year it is received, not the year it relates to, under both the old and new regimes, and the employer deducts TDS on it.

For Ankita, suppose her income keeps the whole ₹2,59,200 in the 20% slab of the new regime. The extra tax is ₹2,59,200 × 20% = ₹51,840, plus 4% cess of ₹2,074, about ₹53,914. If payroll deducts this entirely in the payout month, her take-home that month falls sharply. The alternative is to include the expected payout in the annual projection from the start of the year, so TDS is spread. Our [salary TDS guide](/blog/salary-tds-explained) explains both methods, and you can check the numbers with the [TDS calculator](/tools/tds-calculator).

Two other points:

- **PF and ESI:** the Ministry's FAQs on the Labour Codes say performance-based incentives are not wages, so they do not normally attract PF. Check how your plan is worded, because a "variable" component paid every month regardless of performance can be treated as wages.
- **Arrears of earlier years:** a payout for an earlier year received in this year can qualify for relief on arrears. See our [salary arrears guide](/blog/salary-arrears-calculation).

## Can you claw back variable pay?

A clawback recovers variable pay already paid, for example when a sales deal is cancelled or results are restated. Plan it carefully:

- **Write it into the plan and get the employee's acceptance** before the year starts.
- **Prefer holdbacks to clawbacks.** Deferring 20% to 30% of a sales incentive until the customer pays is easier than recovering money later.
- **Recovery through payroll is a deduction from wages.** The Code on Wages permits only the deductions it lists, with an overall cap of 50% of wages in a wage period. A clawback of a paid incentive is not obviously one of the permitted heads, so take advice, and consider recovering it as an advance repaid with the employee's written consent. Our guide to [wage payment deadlines and deductions](/blog/wage-payment-deadlines-and-deductions) lists the permitted heads.
- **Tax:** recovering an amount in a later year does not automatically reduce the tax already deducted in the earlier year. Check the position with a tax adviser before promising employees a refund.

## Common mistakes

- Not stating whether the target is a percentage of fixed pay or of CTC.
- Calling a performance bonus "statutory bonus" on the payslip, or the reverse.
- Paying a "variable" amount every month regardless of performance, which looks like wages.
- Reducing variable pay for statutory maternity leave.
- Deducting all the tax in the payout month without warning employees.
- Recovering clawbacks through payroll without a valid basis or consent.

## FAQs

**Is variable pay part of CTC?** Usually yes. The offer letter shows target variable within CTC, and the employee receives it only if the performance conditions are met. Make the "at target" wording clear so employees do not read it as guaranteed.

**Is variable pay guaranteed?** No, unless the offer letter guarantees it. Some companies guarantee the first year's variable for senior hires to make up for a bonus forfeited at the previous employer. Write any guarantee down.

**Is performance bonus taxable in India?** Yes. It is salary, taxed in the year of receipt under both regimes, with TDS deducted by the employer.

**Do employees who resign get their variable pay?** Only if the plan says so. Many plans require the employee to be on the rolls on the payout date; some pay prorated amounts to good leavers. If the plan is silent, expect a dispute.

**What is a good payout curve for a bonus plan?** A common curve pays 50% at 80% achievement, 100% at target and 150% at 120% achievement, with nothing below threshold. Sales plans often add accelerators above target.

## How NeevHR helps

NeevHR [variable pay](/features/variable-pay) assigns incentives and commissions singly, in bulk or by CSV with achievement percentages, applies minimum and maximum limits, and routes every input through an approval chain before it reaches that month's payroll, kept out of PF, ESI and PT wages. The same module runs the statutory bonus at 8.33% to 20% with Forms A to D, and [compensation](/features/compensation) handles the merit cycle that sets the fixed pay variable is based on. To see a plan go from upload to payslip, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
