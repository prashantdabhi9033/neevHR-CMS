import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "salary-tds-explained",
  title: "Salary TDS explained: how employers calculate tax every month",
  excerpt:
    "How employers work out monthly TDS on salary: the projection method, regime choice, declarations and proofs, bonus months, and old and new regime examples.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `Employers calculate TDS on salary by estimating each employee's taxable salary for the full tax year, working out the annual tax under the regime the employee has chosen, and deducting that tax in instalments across the year. Each month the estimate is refreshed for pay changes, bonuses, declarations and proofs, and the tax still due is spread over the months that remain. The amount deducted is deposited with the government by the 7th of the following month.

For slab rates and help choosing a regime, see our [old vs new regime guide for FY 2026-27](/blog/tds-on-salary-old-vs-new-regime-fy-2026-27). This guide covers the monthly mechanics.

## A note on the new Income-tax Act

From 1 April 2026, the Income-tax Act, 2025 replaced the 1961 Act and the year became the tax year. Salary TDS is now section 392 (old 192), the rebate section 156 (old 87A), and 80C and 80D are sections 123 and 126. Forms are renumbered too: Form 124 (formerly 12BB), Form 122 (formerly 12B), Form 123 (formerly 12BA), Form 130 (formerly Form 16) and Form 138 (formerly Form 24Q). Slabs, the rebate and due dates are unchanged. Current forms are on the [Income Tax Department](https://www.incometax.gov.in/) website.

## The projection method

The law asks the employer to deduct tax at the average rate on the employee's estimated salary income for the year. Payroll turns that into a monthly formula:

**Monthly TDS = (projected annual tax minus TDS already deducted this year) ÷ months remaining, counting the current month**

The projected annual income is built from:

- Salary paid so far this year (including arrears and loss of pay deductions), the current month, and the remaining months at the current rate.
- One-time payments already known, such as a bonus paid this month.
- Salary and TDS from a previous employer in the same year, if declared.
- Taxable perquisites.
- Less the exemptions and deductions the employee's regime allows.

Because the formula subtracts what has already been deducted, it corrects itself: a raise in October or a rejected proof in January is absorbed by the months that are left. The flip side is that late information lands hard, because a change found in March has one month to absorb it.

## Step 1: confirm the regime

The new regime is the default. At the start of each year, ask every employee which regime they intend to use. Under CBDT guidance issued for the old Act (Circular 4 of 2023), an employee who does not intimate a choice is taxed under the default new regime, and the intimation is for TDS only: a salaried employee can still choose either regime when filing the return. Publish your policy on whether, and by what cut-off, the intimation can be changed during the year.

The regime decides which items payroll may use:

| Item | New regime | Old regime |
| --- | --- | --- |
| Standard deduction | ₹75,000 | ₹50,000 |
| HRA and LTA exemptions | Not available | Available, within the rules |
| Professional tax deduction | Not available | Available |
| 80C, 80D and similar deductions | Not available, except the employer's NPS contribution within its limit | Available |
| Home loan interest, self-occupied house | Not available | Up to ₹2,00,000 |
| Rebate | Tax nil up to ₹12 lakh taxable, with marginal relief just above | Tax nil up to ₹5 lakh taxable |

## Step 2: declarations first, proofs later

At the start of the year, old-regime employees declare the rent, leave travel, home loan interest and investments they expect (Form 124, formerly Form 12BB). Payroll computes TDS on the declared figures so that tax is not over-deducted early in the year.

Later, usually between December and February, employees submit evidence: rent receipts and the landlord's PAN where annual rent exceeds ₹1,00,000 (the new Form 124 also reportedly asks about the relationship with the landlord), home loan interest certificates, and investment or premium receipts. The employer must be satisfied with the evidence before allowing a claim. Anything unsupported is removed and the extra tax falls on the remaining months, as worked example 2 shows. Set a proof deadline that leaves at least two payroll cycles before March, and store the documents with restricted access.

## Step 3: salary from a previous employer

A mid-year joiner may already have earned salary and suffered TDS elsewhere in the same year. The employee can declare this to the new employer in Form 122 (formerly Form 12B). If declared, the new employer adds the previous salary to the projection, gives credit for tax already deducted, and allows the standard deduction and rebate only once for the year.

If it is not declared, each employer applies the slabs, the standard deduction and possibly the rebate as if it were the only one. An employee who earns ₹8 lakh at each of two employers in the new regime can end the year with little or no TDS, because each employer sees income within the rebate limit, yet on the combined ₹16 lakh the tax is ₹1,13,100 including cess, payable with the return. Ask for the declaration during onboarding.

## Step 4: perquisites

Non-cash benefits are part of salary: rent-free accommodation, a company car used privately, concessional loans above the exempt limit, gifts above the exempt value, and ESOP shares, where the difference between fair market value and the price paid is taxed in the year of allotment. Valuation follows Rule 15 of the Income-tax Rules, 2026 (the old Rule 3), which revised several thresholds from 1 April 2026, so check current values before configuring them. Perquisites are reported to the employee in Form 123 (formerly Form 12BA). ESOP exercises can cause the biggest TDS spike of the year, so the plan administrator must tell payroll in the month they happen.

## Step 5: arrears, bonuses and other one-time months

- **Current-year arrears**, such as a backdated increment or an LOP reversal, are added to this year's salary and the projection is refreshed.
- **Arrears for earlier years** are taxed when received, which can push the employee into a higher slab. The employee can claim relief (the familiar Section 89 relief, renumbered under the 2025 Act) by filing the prescribed form, Form 10E under the old rules.
- **Bonus, incentives and variable pay** can be handled in two ways: deduct the extra tax in the month of payment, or re-spread the new annual tax over the remaining months. The first keeps regular take-home pay steady. Pick one and apply it consistently.

## Worked example 1: new regime, ₹15 lakh gross

An employee under the new regime earns a gross salary of ₹15,00,000 (₹1,25,000 a month), with no other income and no employer NPS contribution.

| Line | Amount |
| --- | --- |
| Gross salary | ₹15,00,000 |
| Less standard deduction | ₹75,000 |
| Taxable income | ₹14,25,000 |
| Up to ₹4,00,000 at nil | ₹0 |
| ₹4,00,001 to ₹8,00,000 at 5% | ₹20,000 |
| ₹8,00,001 to ₹12,00,000 at 10% | ₹40,000 |
| ₹12,00,001 to ₹14,25,000 at 15% | ₹33,750 |
| Tax before cess | ₹93,750 |
| Health and education cess at 4% | ₹3,750 |
| Annual tax | ₹97,500 |
| Monthly TDS (÷ 12) | ₹8,125 |

Taxable income is above ₹12 lakh, so no rebate applies. Just above the threshold, marginal relief caps the tax: at ₹12,10,000 taxable, slab tax of ₹61,500 is limited to ₹10,000 (the excess over ₹12 lakh), before cess.

**The bonus month.** Suppose the same employee receives a ₹1,00,000 bonus in October. Taxable income becomes ₹15,25,000, the 15% slab portion becomes ₹3,25,000 (₹48,750), and the annual tax rises to ₹1,08,750 plus ₹4,350 cess, or ₹1,13,100. The extra tax is ₹15,600, which is simply 15% plus 4% cess on the bonus.

- Deduct in the month: ₹8,125 + ₹15,600 = ₹23,725 in October, and ₹8,125 in every other month. Twelve months of ₹8,125 plus ₹15,600 equals ₹1,13,100.
- Re-spread: April to September deducted 6 × ₹8,125 = ₹48,750. The balance of ₹64,350 is spread over October to March at ₹10,725 a month.

## Worked example 2: old regime, when proofs fall short

Another employee on the same ₹15,00,000 gross (monthly basic ₹62,500, HRA ₹25,000, special allowance ₹37,500) opts for the old regime, pays rent of ₹25,000 a month, and declares ₹1,50,000 under 80C and ₹25,000 under 80D. Professional tax is ₹2,500 for the year (it depends on the state).

The HRA exemption is the lowest of three figures: HRA received (₹3,00,000), rent paid minus 10% of basic (₹3,00,000 minus ₹75,000 = ₹2,25,000), and 40% or 50% of basic depending on the city (at least ₹3,00,000 either way). The exemption is therefore ₹2,25,000. The Income-tax Rules, 2026 reportedly extend the 50% limit to more cities, so check the current list before configuring HRA.

| Line | Declared (April) | After proofs (January) |
| --- | --- | --- |
| Gross salary | ₹15,00,000 | ₹15,00,000 |
| Less HRA exemption | ₹2,25,000 | ₹2,25,000 |
| Less standard deduction | ₹50,000 | ₹50,000 |
| Less professional tax | ₹2,500 | ₹2,500 |
| Less 80C | ₹1,50,000 | ₹1,00,000 |
| Less 80D | ₹25,000 | ₹25,000 |
| Taxable income | ₹10,47,500 | ₹10,97,500 |
| Tax before cess | ₹1,26,750 | ₹1,41,750 |
| Cess at 4% | ₹5,070 | ₹5,670 |
| Annual tax | ₹1,31,820 | ₹1,47,420 |

The tax before cess on ₹10,47,500 is ₹12,500 (5% of ₹2,50,000) plus ₹1,00,000 (20% of ₹5,00,000) plus ₹14,250 (30% of ₹47,500).

From April to December, payroll deducts ₹1,31,820 ÷ 12 = ₹10,985 a month, or ₹98,865 over nine months. In January the employee proves only ₹1,00,000 of 80C investments. The revised annual tax is ₹1,47,420, leaving ₹48,555 to recover from January to March, or ₹16,185 a month. That jump is why proof deadlines need to be early and clearly communicated.

Notice also that this employee pays ₹1,31,820 a year under the old regime even with ₹4,52,500 of exemptions and deductions, against ₹97,500 under the new regime on the same salary. Let employees model both with the [TDS calculator](/tools/tds-calculator) before they commit.

## Depositing TDS, and what delay costs

Tax deducted in a month is deposited by the 7th of the next month, and March deductions by 30 April, through the e-Pay Tax service on the e-filing portal. Record the BSR code, deposit date and challan serial number of every payment: the quarterly return, Form 138 (formerly Form 24Q), ties each deduction to a challan, as our [Form 24Q guide](/blog/form-24q-explained) explains.

Delays cost interest, charged separately for two failures. Tax not deducted when due attracts interest at a monthly rate until it is deducted; tax deducted but deposited late attracts a higher monthly rate until it is deposited. Part of a month counts as a full month, and the interest must be paid before the quarterly statement is filed. Deducting tax and not depositing it at all can lead to penalties and prosecution. Where an employee has not furnished a PAN, TDS is deducted at a higher rate.

## Common mistakes

- Dividing the annual tax by 12 in April and never re-projecting.
- Ignoring previous-employer salary, so the standard deduction and rebate are given twice.
- Allowing HRA, 80C or professional tax to a new-regime employee.
- Treating declarations as proofs and never recomputing after the proof window.
- Letting a bonus or ESOP exercise surface only in March.
- Losing challan details, which later breaks the quarterly return and Form 16.

## FAQs

**Why did an employee's TDS jump in January?** Usually because some declared investments or rent were not proved, so the annual tax went up and only three months remained to recover it.

**Is TDS deducted if new-regime taxable income is under ₹12 lakh?** No tax is payable after the rebate, so TDS is nil, but keep projecting: a raise or bonus can push income over the threshold.

**Who is responsible if TDS was short?** The employer bears interest for short deduction or late deposit. The employee still owes any balance tax and pays it when filing the return.

**What does the employee receive at year end?** Form 130 (formerly Form 16), issued by 15 June. Our [Form 16 guide](/blog/form-16-explained) explains Part A, Part B and the reconciliation behind them.

## How NeevHR helps

NeevHR [payroll](/payroll) computes TDS under both regimes from each employee's declaration and re-projects it every month, taking in proofs, previous-employer income, arrears, LOP reversals and variable pay. It produces TDS challans, the quarterly TDS return text file for validation with the FVU, and Form 16 PDFs; you pay and file on the government portals.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
