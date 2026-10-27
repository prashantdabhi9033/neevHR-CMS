import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "esop-taxation-employees",
  title: "ESOP taxation in India: perquisite at exercise, tax on sale",
  excerpt:
    "ESOP taxation for employees in India: perquisite tax at exercise through payroll TDS, capital gains on sale, FMV rules, startup deferral and a worked example.",
  category: "payroll",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `ESOPs are taxed twice in India. When the employee exercises the options and the shares are allotted, the difference between the fair market value (FMV) of the shares and the exercise price is a perquisite, taxed as salary with TDS deducted by the employer. When the employee later sells the shares, the gain over that FMV is taxed as capital gains, short-term or long-term depending on how long the shares were held.

This guide covers both stages, how FMV is determined for listed and unlisted shares, the deferral available to employees of eligible startups, and how payroll should process an exercise, with a worked example. For how perquisites fit into monthly TDS, see our [salary TDS guide](/blog/salary-tds-explained) and our guide to [perquisite valuation](/blog/perquisite-valuation-salary).

## How does an ESOP work?

| Stage | What happens | Tax event? |
| --- | --- | --- |
| Grant | The company grants options to buy shares at a fixed exercise price | No |
| Vesting | After the vesting period (often 1 to 4 years, with a cliff), options become exercisable | No |
| Exercise | The employee pays the exercise price and the shares are allotted | Yes: perquisite taxed as salary |
| Sale | The employee sells the shares | Yes: capital gains |

Most plans have a one-year cliff and then monthly or quarterly vesting over the following three years. Unvested options usually lapse when the employee leaves; vested options must be exercised within a window set by the plan.

## Stage 1: how is the perquisite at exercise calculated?

The perquisite is:

**(FMV per share on the date of exercise minus the exercise price per share) × number of shares allotted**

It is taxed as salary in the tax year of allotment, under both the old and new regimes, at the employee's slab rate. The employer must include it in salary and deduct TDS. The rule continues under the Income-tax Act, 2025, which took effect from 01 Apr 2026; section and rule numbers changed from the 1961 Act, so check the current references before quoting them in employee communication.

Under the Labour Codes, the Ministry's FAQs say ESOPs are not part of wages, so the perquisite does not attract PF, and it is not wages for gratuity. Our guide to the [50% wage rule](/blog/labour-codes-wage-definition-50-percent-rule) explains the wage definition.

## How is FMV determined?

Under the rules made under the 1961 Act, FMV for ESOP purposes was defined as follows. The Income-tax Rules, 2026 are understood to carry the same approach, but verify the current rule before relying on it.

| Type of share | FMV on the date of exercise |
| --- | --- |
| Listed on a recognised stock exchange in India | The average of the opening and closing price on the date of exercise on the exchange with the higher trading volume; if not traded that day, the closing price on the nearest earlier trading day |
| Unlisted, or listed only outside India | The value determined by a SEBI-registered Category I merchant banker, as on the date of exercise or a date not more than 180 days earlier |

For unlisted companies, this means the company needs a current merchant banker valuation report before every exercise window. A stale report (more than 180 days old) is a common audit finding. Agree a calendar with finance: if exercise windows are quarterly, refresh the valuation at least every six months.

## Stage 2: how are ESOP shares taxed on sale?

When the employee sells, the cost of acquisition is the FMV that was taxed as a perquisite, not the exercise price. This prevents the same gain being taxed twice. The holding period runs from the date of allotment.

| Type of share | Short-term if held | Long-term if held | Rates applying since 23 Jul 2024 |
| --- | --- | --- | --- |
| Listed equity shares sold on an Indian exchange (securities transaction tax paid) | Up to 12 months | More than 12 months | Short-term 20%; long-term 12.5% on gains above ₹1,25,000 a year |
| Unlisted shares (including shares of foreign companies) | Up to 24 months | More than 24 months | Short-term at slab rates; long-term 12.5% without indexation |

These are the rates set by the Finance (No. 2) Act, 2024 under the 1961 Act, plus surcharge and cess. Confirm the rates and the annual exemption under the 2025 Act for the year of sale. Capital gains are the employee's own liability, paid through advance tax or with the return; the employer does not deduct TDS on the sale of shares the employee holds.

## Worked example: unlisted company ESOP

Kavya works for an unlisted technology company. She was granted 2,000 options at an exercise price of ₹50. They vest fully, and she exercises all 2,000 in August 2026. The merchant banker's valuation, dated May 2026 (within 180 days), puts FMV at ₹450 a share.

**Perquisite at exercise:** (₹450 minus ₹50) × 2,000 = ₹400 × 2,000 = ₹8,00,000.

**Cash she pays to exercise:** ₹50 × 2,000 = ₹1,00,000.

**TDS on the perquisite:** her other salary already places her in the new regime's 30% slab. Tax = ₹8,00,000 × 30% = ₹2,40,000, plus 4% cess of ₹9,600, a total of ₹2,49,600 (ignoring surcharge). If payroll deducts it all in August, her August salary cannot absorb it, so the company collects the balance from her (see the payroll section below).

**Sale:** in March 2029, 31 months after allotment, the company is acquired and she sells all 2,000 shares at ₹900 each, still as unlisted shares.

- Sale value: ₹900 × 2,000 = ₹18,00,000.
- Cost of acquisition (FMV at exercise): ₹450 × 2,000 = ₹9,00,000.
- Long-term capital gain (held more than 24 months): ₹18,00,000 minus ₹9,00,000 = ₹9,00,000.
- Tax at 12.5%: ₹1,12,500, plus 4% cess of ₹4,500, a total of ₹1,17,000.

**Total tax across both stages:** ₹2,49,600 + ₹1,17,000 = ₹3,66,600 on a total gain of ₹17,00,000 (sale value ₹18,00,000 minus the ₹1,00,000 she paid).

If she had sold within 24 months of allotment, the ₹9,00,000 gain would have been short-term and taxed at her slab rate, about ₹2,80,800 at 30% plus cess.

## Can employees of startups defer ESOP tax?

Yes, under a specific relief for eligible startups. Under the 1961 Act, employees of a startup that was eligible for the startup profit deduction (broadly, a DPIIT-recognised startup holding the inter-ministerial board certificate) could defer the tax on the ESOP perquisite. The employer deducted and paid the TDS within 14 days of the earliest of:

- 48 months from the end of the relevant assessment year;
- the date the employee sells the shares; or
- the date the employee leaves the company.

The tax was computed at the rates in force in the year of allotment. Only companies meeting the eligibility conditions qualified; a startup recognised by DPIIT but without the board certificate did not. Check whether and how this relief is carried into the Income-tax Act, 2025, and confirm the company's eligibility, before telling employees their tax is deferred.

## ESOP vs RSU vs SAR: how are they taxed?

| Instrument | What the employee gets | When salary tax arises | Capital gains |
| --- | --- | --- | --- |
| ESOP | Option to buy at an exercise price | On exercise and allotment: FMV minus price paid | On sale, over FMV at allotment |
| RSU | Shares on vesting, usually at nil price | On vesting and allotment: full FMV | On sale, over FMV at allotment |
| ESPP | Shares bought at a discount | On purchase: FMV minus discounted price | On sale, over FMV at purchase |
| Cash-settled SAR or phantom stock | Cash equal to the share price gain | When the cash is paid, as salary | None, no shares are held |

**RSUs from a foreign parent** are common in Indian subsidiaries of multinationals. The perquisite is taxable in India on vesting, converted to rupees at the exchange rate the rules prescribe. The Indian employer must deduct TDS even though the shares come from the parent. Employees who hold foreign shares must also report them in the foreign assets schedule of their return; remind them, because the penalty for non-disclosure is significant.

## How should payroll process an ESOP exercise?

1. **Get the exercise data in the month it happens.** The plan administrator or company secretary sends payroll a list of employees, shares allotted, exercise price, FMV and the allotment date. Fix a cut-off in the [monthly payroll checklist](/blog/monthly-payroll-checklist).
2. **Add the perquisite to that month's salary** as a non-cash earning and recompute TDS for the year; the [TDS calculator](/tools/tds-calculator) gives a quick check.
3. **Decide how the tax is funded.** The perquisite is non-cash, so the month's salary often cannot cover the TDS. Common options:
   - The employee pays the tax amount to the company before allotment.
   - "Sell to cover": the company or a trust sells enough shares (listed companies) to fund the tax.
   - Recover over a few months, if the plan allows and the employee agrees.
4. **Deposit the TDS** by the normal due date and report it in the quarterly TDS return (Form 138, formerly Form 24Q).
5. **Report it at year end.** The perquisite appears in the annual TDS certificate (Form 130, formerly Form 16) and in the statement of perquisites (Form 123, formerly Form 12BA), under stock options. Our [Form 16 guide](/blog/form-16-explained) covers Part B.
6. **For leavers,** make sure an exercise after the last working day is still reported; tax on a post-exit exercise is a common gap in the [full and final settlement](/blog/full-and-final-settlement-explained) process.

## Common mistakes

- Using a merchant banker valuation more than 180 days old.
- Taking the exercise price, instead of the FMV taxed at exercise, as the cost when computing capital gains.
- Learning about an exercise only at year end, then deducting a year's ESOP tax in March.
- Telling employees their tax is deferred without checking the company's startup eligibility.
- Forgetting RSUs from a foreign parent in Indian payroll.
- Counting holding period from the grant or vesting date instead of allotment.

## FAQs

**When is ESOP taxed in India?** Twice: on exercise, when FMV minus the exercise price is taxed as salary with TDS, and on sale, when the gain over that FMV is taxed as capital gains.

**Is ESOP taxable under the new tax regime?** Yes. The perquisite at exercise is salary under both regimes. Capital gains rates do not depend on the regime chosen.

**What is the cost of acquisition of ESOP shares?** The FMV on the date of exercise that was used for the perquisite, not the exercise price you paid.

**Is TDS deducted when I sell ESOP shares?** Not by your employer. Capital gains on shares you hold are your own liability, paid through advance tax or with your return.

**Do ESOPs attract PF or gratuity?** The Ministry's FAQs on the Labour Codes say ESOPs are not part of wages, so they do not count for PF or gratuity.

**Can startup employees defer ESOP tax?** Employees of startups that meet the eligibility conditions have been able to defer the TDS to the earliest of 48 months from the end of the relevant year, sale or leaving the company. Check the current provision and your company's eligibility.

## How NeevHR helps

NeevHR [payroll](/payroll) projects TDS under both regimes and re-projects it every month as new income comes in, and [statutory compliance](/features/compliance) generates Form 16 and Form 12BA perquisites for the completed year and the Form 24Q return file. NeevHR does not administer ESOP grants or vesting; your plan administrator supplies the exercise data, and payroll applies the tax. To walk through a year-end with large one-time income, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
