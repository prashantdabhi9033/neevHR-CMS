// Seed blog content. Accurate India HR/payroll/compliance articles in Markdown.
// Figures are indicative and were correct for FY 2026-27 at the time of writing;
// always confirm current thresholds before acting.

export type SeedPost = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "payroll"
    | "compliance"
    | "time"
    | "performance"
    | "recruitment"
    | "hr-strategy"
    | "product";
  author: string;
  publishedAt: string;
  body: string;
};

export const seedPosts: SeedPost[] = [
  {
    slug: "epf-explained-contribution-uan-withdrawal",
    title: "EPF and UAN explained: contributions, UAN, KYC and withdrawal",
    excerpt:
      "EPF and UAN for employers: coverage, the 12% split and EPS on the ₹25,000 ceiling, UAN generation and KYC, transfers, interest and tax on withdrawal.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-02",
    body: `The Employees' Provident Fund (EPF) is the backbone of retirement savings for salaried Indians. It is a forced-savings scheme with a generous, government-declared interest rate, run by the Employees' Provident Fund Organisation (EPFO). For an HR or payroll team, it is also a monthly obligation with real penalties for getting it wrong. This guide covers everything you need to run EPF confidently: coverage, the contribution split, the pension share, the UAN, interest, and the tax treatment of withdrawals.

## Who is covered by EPF

EPF runs under Chapter III of the Code on Social Security, 2020, in force since 21 November 2025, and applies to establishments employing 20 or more people, and to smaller ones that are notified or opt in. Once an establishment is covered, it stays covered even if the headcount later drops below 20.

Within a covered establishment, any employee earning basic wages up to the wage ceiling at the time of joining must be enrolled. The ceiling is ₹25,000 per month from 17 September 2026 (notification S.O. 5109(E) under the Code on Social Security, 2020); it was ₹15,000 before that, so employees earning between ₹15,001 and ₹25,000 are now covered compulsorily. Employees earning above that threshold are called "excluded employees" and are not compulsorily covered, but the employer can, and usually does, extend membership to them voluntarily. In practice most established employers cover their entire workforce, because a split scheme is harder to administer and worse for the employee.

## How the 12% contribution is split

Both the employee and the employer contribute 12% of PF wages. PF wages generally mean Basic salary plus Dearness Allowance (and retaining allowance, where it applies). The employee's entire 12% goes into the provident fund account. The employer's 12%, however, is not all provident fund; part of it funds the pension scheme.

| Component | Rate | Applied on |
| --- | --- | --- |
| Employee share (EPF) | 12% | PF wages |
| Employer share to pension (EPS) | 8.33% | PF wages, capped at ₹25,000 (so up to ₹2,083) |
| Employer share to EPF | 3.67% and any balance | Remainder after EPS |

On top of the 12% each, the employer also pays small charges: EDLI (a life insurance component) and administrative charges, together roughly 0.5% of PF wages. Because the EPS portion is capped at 8.33% of the ₹25,000 ceiling, a high earner's pension contribution is capped at ₹2,083 a month, with the rest of the employer share flowing to EPF. EPS and EDLI use the same ₹25,000 ceiling. The Central Government's separate 1.16% pension share stays on ₹15,000 under G.S.R. 890(E) and is not deducted by the employer. September 2026 is a split month: the old ceiling applies to 1 to 16 September and the new one from 17 September, as our [monthly payroll checklist](/blog/monthly-payroll-checklist) explains. EPFO's operational guidance on the split month was awaited at the time of review.

Many employers choose to cap PF wages at the ₹25,000 statutory ceiling even for employees whose basic exceeds it. That makes the contribution for such employees ₹3,000 per side per month. Others contribute on actual basic, which builds a larger retirement corpus. Both are valid; what matters is that the policy is consistent and correctly reflected in payroll.

## What is the UAN

The Universal Account Number (UAN) is the 12-digit number EPFO gives each PF member for life. Every employer the person works for opens a new member ID under the same UAN, so the whole PF history sits in one place.

### UAN versus member ID

These two are often confused:

| | UAN | Member ID (PF account number) |
| --- | --- | --- |
| Issued to | The person | The person's employment with one establishment |
| Changes on job change | No, it stays for life | Yes, each employer creates a new one |
| Used for | Passbook across employers, KYC, claims, transfers | Posting contributions from one employer |

When an employee joins, the employer links a new member ID to the employee's existing UAN. The ECR is filed against the UAN, and contributions post to that employment's member ID.

### How a UAN is generated now

#### The FAT route (the default)

In April 2025, EPFO introduced three services in the UMANG app using Aadhaar-based Face Authentication Technology (FAT): direct UAN allotment and activation, activation of existing UANs, and face authentication for already activated UANs. By a circular dated 30 July 2025, EPFO made FAT the only route for allotting new UANs from 1 August 2025.

What the employee needs:

- a valid Aadhaar number, and access to the Aadhaar-linked mobile number for OTP;
- the UMANG app and the Aadhaar Face RD app on a smartphone.

The steps, per EPFO's user manual:

1. In UMANG, open UAN Allotment and Activation, enter Aadhaar and mobile number, and give consent.
2. Enter the OTP. The system checks whether a UAN already exists for that Aadhaar. If one does, the employee is told, and no new UAN is created.
3. Complete the face scan.
4. The UAN is generated from Aadhaar data and sent by SMS, already activated. The employee can download the e-UAN card to give to the employer.

Because details are pulled straight from Aadhaar, name, date of birth and gender mismatches, a frequent source of trouble in the past, are much less likely.

#### When the employer still generates the UAN

EPFO kept the employer route for exceptional cases, such as international workers and citizens of Nepal and Bhutan. For everyone else, the employer's job is to collect the UAN, not create it.

### Activation

A UAN must be activated before the member can log in to the [member portal](https://unifiedportal-mem.epfindia.gov.in/), see the passbook, update KYC or file claims. A UAN generated through FAT is activated at the same time. For an older UAN that was never activated, the employee uses UAN Activation in UMANG: enter UAN, Aadhaar and mobile, verify the OTP and complete the face scan. The system sends a temporary password by SMS.

EPFO's procedures in this area have changed several times since 2024, so check the current process on the [EPFO website](https://www.epfindia.gov.in/) before issuing joining instructions.

### KYC seeding

KYC links the UAN to the documents EPFO relies on for payments and verification.

| KYC item | Why it matters | Current process |
| --- | --- | --- |
| Aadhaar | ECR can be filed only for members whose Aadhaar is seeded and verified | Seeded at FAT generation; otherwise via the employer's KYC function or a joint declaration |
| Bank account | Claims are paid only to a seeded, verified account | Employee seeds it; verified by the bank or NPCI, with no employer approval since 3 April 2025 |
| PAN | Affects TDS on taxable PF withdrawals | Added through KYC and verified against income-tax records |

A few specifics from EPFO circulars:

- **Aadhaar is a hard gate for ECR.** Filing ECR only for Aadhaar-verified members has applied since 1 June 2021, and EPFO ended the last extensions for specified regions and industries after 31 October 2025.
- **Where name, gender and date of birth in the UAN match Aadhaar exactly,** the employer can seed Aadhaar through the KYC function on the employer portal, with no separate EPFO approval (circular of 13 August 2025).
- **Where they do not match,** or a wrong Aadhaar is linked, the correction goes through the joint declaration function, which the employer files and the regional office approves.
- **Members with Aadhaar-verified UANs** can correct many profile fields themselves under the simplified joint declaration process introduced in January 2025.
- **Bank details** no longer need a cheque leaf or passbook image for claims when the account is validated by the bank or NPCI.

### Transfers on job change

With one UAN, a job change no longer means a new account balance to chase. The old balance still has to be transferred to the new member ID, though:

- The employee files a transfer claim (Form 13) online from the member portal, choosing whether the previous or present employer attests, where attestation is needed.
- Since April 2025, a transfer approved at the source office posts the PF balance and pension service to the new account automatically, without separate processing at the destination office. The revamped Form 13 also splits taxable and non-taxable parts of the accumulation.
- The transfer certificate (Annexure K) is available to members in the member portal.

Exits matter here. If the previous employer never marked a date of exit, the old member ID looks active and transfers and new contributions run into trouble. Mark exits on the employer portal as soon as the employee leaves.

### Employer responsibilities

For HR and payroll, the UAN checklist is:

1. **At offer or joining,** ask whether the joiner has a UAN. Most people with any prior formal employment do.
2. **If not,** send them the FAT steps before day one so the UAN exists before the first payroll.
3. **Register the employee on the employer portal** against the UAN, with the correct date of joining.
4. **Verify Aadhaar seeding** before the first ECR; otherwise the member cannot be included.
5. **Collect nomination.** Under the EPF Scheme 2026, nominations are electronic.
6. **Mark the date of exit** promptly when someone leaves.
7. **Protect the data.** UAN, Aadhaar, PAN and bank details are personal data under the DPDP Act, 2023. Limit who can see them.

### Common issues and fixes

| Issue | Likely cause | What to do |
| --- | --- | --- |
| Employee has two UANs | A previous employer generated a new one instead of reusing the old | The member raises a request through the member portal or EPFO grievance channel to merge; do not add a third |
| Wrong member ID linked to a UAN | Error at registration | EPFO has a process for de-linking erroneously linked member IDs through the regional office |
| ECR rejects a new joiner | Aadhaar not verified, or date of joining missing | Complete KYC seeding and check the joining date before re-uploading |
| Transfer stuck | Previous exit not marked, or profile mismatch | Ask the previous employer to mark exit; fix profile through a joint declaration |
| Face authentication fails | Lighting, app version, or Aadhaar data issue | Retry; EPFO lists UMANG and EPFO support as next steps |

## Interest and how the corpus grows

EPF earns interest at a rate declared each year by the EPFO, credited annually. The interest is calculated on the running monthly balance. Because both sides contribute and the money compounds tax-free while it stays in the fund, EPF is one of the most effective long-term savings tools available to salaried employees.

The pension portion (EPS) works differently. It does not earn a declared interest rate in the same way; instead it funds a monthly pension after retirement, based on pensionable service and pensionable salary.

## How withdrawals are taxed

EPF is meant for retirement, and the tax rules encourage keeping it invested.

- If an employee has completed five years of continuous service (across employers counts, as long as the balance was transferred), withdrawal is tax-free.
- If withdrawal happens before five years of continuous service, the amount can be taxable, and TDS may apply, especially where the taxable amount exceeds a threshold and PAN is not linked.

Partial advances are allowed without closing the account, for specific reasons such as buying or building a house, medical treatment, marriage, or education. These have their own eligibility rules based on years of membership.

## The monthly compliance cycle

Running EPF in payroll is a rhythm:

1. Compute the employee and employer contributions for every member.
2. Generate the Electronic Challan cum Return (ECR) with the wage and contribution details.
3. Deposit the challan by the 15th of the following month.

The ECR is the single filing that reconciles wages and contributions, so it must match what payroll actually deducted and what the bank actually paid.

## Common mistakes to avoid

- Applying PF on gross instead of on Basic + DA.
- Still applying the old ₹15,000 ceiling after 17 September 2026, or not capping the EPS share at 8.33% of ₹25,000 for high earners.
- Missing the UAN for a new joiner, which delays transfers later.
- Filing the ECR late, which triggers interest and damages.
- Inconsistent policy on capping versus contributing on actual basic across employee groups.

## Frequently asked questions

**Is EPF compulsory above ₹25,000 basic?** Not strictly. Employees above the ceiling when they join are excluded, but most employers cover them voluntarily. Up to ₹25,000, coverage is compulsory from 17 September 2026.

**Can an employee opt out of EPF?** Only an employee who has never been an EPF member and joins above the wage threshold can be treated as excluded. An existing member generally cannot opt out.

**Does a UAN change when the employee changes jobs?** No. The UAN stays the same; the new employer creates a new member ID under it.

**Can an employer still generate a UAN?** Only in exceptional cases such as international workers and citizens of Nepal and Bhutan. Other new UANs are generated by the employee through face authentication in UMANG.

**What is VPF?** Voluntary Provident Fund is the employee choosing to contribute more than 12% of their own share. It goes into the same account and earns the same interest, but the employer share does not increase.

## Key takeaways

- EPF is mandatory for establishments with 20 or more employees, and for members earning up to ₹25,000 basic (₹15,000 before 17 September 2026).
- Both sides contribute 12%; the employer's share splits into EPS (pension, capped) and EPF.
- The UAN unifies an employee's PF across jobs.
- Withdrawals after five years of continuous service are tax-free.

A payroll system that computes PF at source with the correct EPS and EPF split, and generates the ECR each month, removes almost all of this risk. In NeevHR, PF is computed for every employee with the right pension split, the ECR is ready to file, and the UAN travels with the employee record.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "esi-explained-eligibility-benefits-contribution",
    title: "ESI explained: eligibility, benefits, contribution and the mid-year trap",
    excerpt:
      "Who ESI covers, the ₹21,000 wage limit, the 0.75% and 3.25% rates, the benefits your team receives, and the contribution-period rule that catches everyone out.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-08-05",
    body: `The Employees' State Insurance (ESI) scheme is India's social security net for lower-paid workers. It provides medical care and cash benefits to covered employees and their dependants, funded by small contributions from both the employee and the employer. For HR, ESI is a monthly obligation that looks simple until a mid-year increment pushes someone over the wage limit, at which point the rules surprise people.

## What ESI is for

Unlike EPF, which is a savings scheme, ESI is an insurance scheme. In exchange for a modest contribution, covered employees and their families get access to medical care through a network of ESIC hospitals and dispensaries, plus cash benefits when they cannot work due to sickness, maternity or injury. For frontline and factory workers, this is often the most valuable benefit an employer provides.

## Who is eligible

ESI applies to non-seasonal establishments in notified areas, typically those employing 10 or more people (some states set the threshold at 20). Within a covered establishment, employees earning gross wages of up to ₹21,000 per month are covered. For employees with disabilities, the limit is higher, at ₹25,000.

"Gross wages" here is broader than the PF definition; it includes most regular allowances, not just Basic and DA. That is why an employee can be inside PF on basic but outside ESI on gross, or the other way around.

## The contribution rates

| Contributor | Rate | Applied on |
| --- | --- | --- |
| Employee | 0.75% | Gross wages |
| Employer | 3.25% | Gross wages |

The combined 4% is deposited with the ESIC by the 15th of the following month, along with the return. The rates are low precisely because the benefit is a shared social pool rather than an individual savings balance.

## The benefits your team actually gets

ESI is not just a deduction on the payslip. Covered employees are entitled to:

- Medical benefit: full medical care for the employee and dependants from day one of employment.
- Sickness benefit: cash during certified sickness, at a percentage of wages for a defined number of days a year.
- Maternity benefit: paid leave for confinement, subject to contribution conditions.
- Disablement benefit: cash for temporary or permanent disablement due to employment injury.
- Dependants' benefit: a pension to dependants if an employee dies due to employment injury.

Explaining these benefits to new joiners changes how they see the deduction. It is protection, not just a cut.

## The mid-year contribution-period trap

This is the single most common ESI mistake. ESI runs in two fixed contribution periods each year (broadly April to September and October to March). Eligibility is tested at the start of a contribution period, and once an employee is covered, they remain covered until the end of that period, even if a mid-year increment takes their gross above ₹21,000.

So if an employee earning ₹20,000 gets a raise to ₹23,000 in July, you must continue ESI deductions until September, and only drop them from the next period. Employers who stop deductions the moment wages cross the limit create shortfalls, which attract interest and damages.

## Common mistakes to avoid

- Computing ESI on Basic instead of gross wages.
- Dropping an employee mid-period after an increment.
- Missing new joiners who start below the limit.
- Late deposit of the contribution and return.
- Forgetting to update wages when a variable allowance changes gross.

## Frequently asked questions

**Does ESI apply if we have fewer than 10 employees?** Generally no, but the applicability threshold and notified areas vary by state, so confirm locally.

**What happens when someone permanently crosses ₹21,000?** They exit ESI from the start of the next contribution period, not immediately.

**Is the employer contribution part of CTC?** It is an employer cost, so it usually sits in CTC, but it is never deducted from the employee's salary.

## Key takeaways

- ESI covers employees earning gross up to ₹21,000 (₹25,000 for disability).
- Employee pays 0.75%, employer pays 3.25%, on gross wages.
- Eligibility is fixed for the contribution period, so mid-year raises do not end coverage immediately.
- The real value is medical and cash benefits for the employee and family.

A payroll system that tracks the contribution period and applies the wage limit correctly avoids both over-deduction and under-remittance. NeevHR computes ESI on gross wages, respects the contribution period, and produces the return each month.`,
  },
  {
    slug: "professional-tax-by-state-india",
    title: "Professional Tax in India: a complete state-by-state guide",
    excerpt:
      "Why Professional Tax varies by state, how the major states compare, the ₹2,500 annual cap, filing due dates, and how multi-state payroll handles it.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-08-08",
    body: `Professional Tax (PT) is a small but persistent payroll obligation that trips up companies the moment they hire across state lines. It is a tax on income earned from a profession, trade, calling or employment, and crucially, it is levied by state governments, not the centre. That single fact explains almost everything confusing about PT.

## Why PT is different in every state

Because PT is a state subject, each state decides whether to levy it, what the slabs are, what the maximum is, and how often it is filed. There is no national PT rate. What is common across all states that levy it is the constitutional cap: the maximum PT any individual can be charged is ₹2,500 per year (Article 276 of the Constitution).

Some states do not levy PT at all. These include Delhi, Haryana, Uttar Pradesh, Rajasthan and Uttarakhand, among others. An employer with staff only in these states has no PT obligation for them.

## How the major states compare

The table below summarises PT for salaried employees in the states we cover in detail; each state guide has the full slab table, due dates and the notification it relies on. Slabs change, so confirm the current notification with the state authority before finalising payroll.

| State | Indicative monthly PT |
| --- | --- |
| [Maharashtra](/india/payroll/maharashtra) | Men: nil up to ₹7,500, ₹175 up to ₹10,000, ₹200 above (₹300 in February). Women: nil up to ₹25,000, ₹200 above (₹300 in February) |
| [Karnataka](/india/payroll/karnataka) | Nil below ₹25,000; ₹200 a month from ₹25,000 (₹300 in February) |
| [West Bengal](/india/payroll/west-bengal) | ₹110 to ₹200 a month by salary band |
| [Gujarat](/india/payroll/gujarat) | Nil up to ₹12,000; ₹200 a month above |
| [Tamil Nadu](/india/payroll/tamil-nadu) | Half-yearly, by local body; up to ₹1,250 a half-year in Greater Chennai |
| [Telangana](/india/payroll/telangana) | Nil up to ₹15,000; ₹150 up to ₹20,000; ₹200 above |
| [Kerala](/india/payroll/kerala) | Half-yearly, by local body; up to ₹1,250 a half-year |
| [Delhi](/india/payroll/delhi), [Haryana](/india/payroll/haryana), [Uttar Pradesh](/india/payroll/uttar-pradesh), [Rajasthan](/india/payroll/rajasthan) | No professional tax |

Notice that Maharashtra and Karnataka charge ₹300 in February so the annual total reaches ₹2,500, and Tamil Nadu and Kerala collect half-yearly through the local body rather than monthly. These per-state quirks are exactly what makes multi-state PT fiddly.

## How PT is deducted and filed

PT is deducted from the employee's salary and deposited with the state government. Most states expect the deposit and return by around the 21st of the following month, though some file half-yearly. Employers also usually need a PT registration (an enrolment certificate for the employer and a registration certificate to deduct from employees).

## The multi-state challenge

For a single-location company, PT is trivial: one slab, one filing. The difficulty appears when you employ people across several states. Now payroll must:

- Determine each employee's PT state, usually their work location.
- Apply that state's current slab.
- File separate PT returns in each state, on each state's schedule.
- Keep up when any state revises its bands.

Doing this in a spreadsheet is error-prone, especially at year-end when Maharashtra's higher final-month deduction and Tamil Nadu's half-yearly cycle collide.

## Common mistakes to avoid

- Applying one state's slab to employees who actually work in another.
- Missing that some states have no PT, and deducting anyway.
- Forgetting the ₹300 February deduction where a state uses it to reach the annual cap.
- Missing a half-yearly filing state's due date.
- Not updating slabs after a state revision.

## Frequently asked questions

**Is PT based on where the employee lives or works?** Generally the place of work, but confirm the specific state's rule.

**What is the maximum PT per year?** ₹2,500 per person, across all states.

**Do directors and consultants pay PT?** PT can apply to professionals and traders too, not just salaried employees, under the employer or self enrolment.

## Key takeaways

- PT is a state tax, so slabs, maximums and filing frequency differ everywhere.
- Several states levy no PT at all.
- The annual cap is ₹2,500 per person.
- Multi-state employers must apply the right slab per work location and file per state.

A payroll system with state-wise PT logic removes the guesswork entirely. NeevHR holds PT slabs per state, applies them by work location, and produces each state's PT return on schedule.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "gratuity-in-india-eligibility-formula-tax",
    title: "Gratuity in India: eligibility, formula, tax and worked examples",
    excerpt:
      "Gratuity under the Code on Social Security, 2020: who must pay, five years or one year for fixed-term staff, the 15/26 formula, the ₹20 lakh cap and tax.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-11",
    body: `Gratuity is a lump-sum payment for long service and one of the larger numbers in any full and final settlement. Since 21 November 2025 it is governed by Chapter V of the Code on Social Security, 2020, which replaced the Payment of Gratuity Act, 1972. The 15/26 formula and the ₹20 lakh ceiling carried over; what changed is the wage base and the rule for fixed-term employees.

## Who must pay gratuity

The Code applies gratuity to every factory, mine, oilfield, plantation, port, railway company, and every shop or establishment in which 10 or more employees are employed, or were employed on any day of the preceding twelve months. Once it applies, it continues to apply even if headcount later falls below 10.

## Who is eligible

| Situation | Service needed |
| --- | --- |
| Regular employee leaving on superannuation, retirement, resignation or termination | 5 years of continuous service |
| Death or disablement due to accident or disease | No minimum |
| Fixed-term employee whose contract ends | 1 year, paid pro rata for the service |

The one-year rule for fixed-term employees is the change HR teams most often miss. Under the 1972 Act a fixed-term employee with less than five years got nothing; under the Code they qualify after one year. Our guide to [fixed-term employment under the Labour Codes](/blog/fixed-term-employment-labour-codes) covers the contract side.

"Continuous service" includes authorised leave, sickness, accident and lay-off periods, so it is not the same as days present.

## The formula

> Gratuity = 15 × last drawn wages × completed years of service ÷ 26

- **Wages** now means wages as defined in the Code: broadly basic pay, dearness allowance and retaining allowance, with excluded allowances above 50% of total remuneration added back. A low-basic structure can therefore produce a higher gratuity than before. See [the 50% wage rule](/blog/labour-codes-wage-definition-50-percent-rule).
- **26** is the number of working days in a month; **15** is the days of wages per year. Seasonal establishments use 7 days per season.
- **Part years:** a final part year of more than six months counts as a full year.

## Worked examples

A regular employee with last drawn wages of ₹60,000 and 8 years of service:

| Step | Calculation | Value |
| --- | --- | --- |
| Formula | 15 × 60,000 × 8 ÷ 26 | ₹2,76,923 |

The same wages with 12 years and 7 months of service round up to 13 years: 15 × 60,000 × 13 ÷ 26 = ₹4,50,000.

A fixed-term employee on wages of ₹30,000 whose 14-month contract ends: 15 × 30,000 × 1 ÷ 26 = ₹17,308. Whether the two months beyond the first year count on a pro-rata basis depends on the rules that apply to you, so confirm before settling.

For a quick figure, use the [gratuity calculator](/tools/gratuity-calculator).

## The ceiling and the payment deadline

The ceiling is the amount the Central Government notifies; it is ₹20,00,000 as last notified. An employer may pay more under a contract or scheme, but anything above the tax exemption is taxable.

Gratuity must be paid within 30 days of becoming payable. A late payment carries simple interest at the rate the government notifies.

## Forfeiture

Gratuity can be forfeited, wholly or partly, only on the grounds the Code lists: termination for wilful omission or negligence causing damage (to the extent of the damage), and termination for riotous or disorderly conduct, violence, or an offence involving moral turpitude committed in the course of employment. A domestic enquiry and a written order are the minimum.

## How gratuity is taxed

From tax year 2026-27 the exemption sits in section 19(1) of the Income-tax Act, 2025 (formerly section 10(10) of the 1961 Act). For employees covered by the Code, the exempt amount is the least of:

1. The gratuity actually received.
2. ₹20,00,000 (a lifetime limit across employers).
3. The formula amount.

The excess is salary income and taxed through TDS in the final settlement. The exemption is available under both tax regimes.

## Common mistakes

- Paying fixed-term employees nothing because they have less than five years.
- Using basic pay alone after the Code's wage definition adds allowances back.
- Ignoring the six-month rounding on the final part year.
- Paying after 30 days without interest.
- Citing the repealed 1972 Act in letters and policies.

## FAQs

**Is gratuity payable if someone resigns before five years?** Not for a regular employee, unless employment ends by death or disablement. A fixed-term employee qualifies after one year.

**Does notice period count as service?** Yes. Service runs to the last working day.

**Is gratuity paid on gross salary?** No. It is paid on wages as the Code defines them, which can be more than basic plus DA where allowances exceed 50% of total remuneration.

**Do we still need the Payment of Gratuity Act forms?** The Ministry of Labour has said rules under the old Acts continue during the transition to the extent they are consistent with the Codes. Check the forms your state has notified under the Code.

## Key takeaways

- Gratuity is now under the Code on Social Security, 2020.
- Five years for regular employees, one year for fixed-term employees, none on death or disablement.
- 15 × wages × years ÷ 26, on the Code's wage definition, capped at ₹20 lakh as last notified.
- Pay within 30 days; the exemption is section 19(1) of the Income-tax Act, 2025.

NeevHR computes gratuity in the full and final settlement on the configured wage basis, applies the fixed-term rule, cites the section in force for the tax year, and shows the amount in words on the settlement letter. See [full and final settlement](/features/full-and-final-settlement).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "statutory-bonus-payment-of-bonus-act",
    title: "Statutory bonus under the Code on Wages, explained",
    excerpt:
      "Statutory bonus under the Code on Wages, 2019: who is covered, eligibility, the 8.33% to 20% range, the calculation ceiling, allocable surplus and records.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-08-14",
    body: `Statutory bonus is an annual payment the law requires covered employers to make to eligible employees, loosely linked to profit. Since 21 November 2025 it is governed by Chapter IV of the Code on Wages, 2019, which replaced the Payment of Bonus Act, 1965. The 8.33% minimum and 20% maximum, the allocable surplus method and the eight-month payment deadline carried over.

## Who the bonus provisions cover

Every establishment in which 20 or more persons are employed on any day of the accounting year, including factories. Once covered, it stays covered even if headcount later falls below 20. Within a covered establishment, bonus is a statutory right for eligible employees, not a discretionary payout.

## Who is eligible

An employee is eligible when:

- their wages do not exceed the amount the appropriate Government notifies for bonus (₹21,000 a month as last notified, the figure carried from the 1965 Act), and
- they worked at least 30 working days in the accounting year.

An employee dismissed for fraud, riotous or violent behaviour on the premises, theft, misappropriation or sabotage of property, or sexual harassment is disqualified. The Code added sexual harassment to the list.

## How much bonus is payable

| Item | Value |
| --- | --- |
| Minimum bonus | 8.33% of wages earned, or ₹100, whichever is higher |
| Maximum bonus | 20% of wages earned |
| Eligibility limit | As notified; ₹21,000 a month as last notified |
| Calculation ceiling | As notified; ₹7,000 a month or the minimum wage, whichever is higher, as last notified |

Where an employee's wages exceed the calculation ceiling, the bonus is worked out as if their wages were the ceiling. "Wages" follows the Code's single definition, including the 50% add-back for excluded allowances.

Confirm both figures in the notification your appropriate Government has issued under the Code before you run the year's bonus, and record the reference with the run.

## Worked example

An eligible employee with monthly wages of ₹18,000, a calculation ceiling of ₹7,000, 12 months worked and a bonus rate of 8.33%:

- Calculation wage = min(₹18,000, ₹7,000) = ₹7,000 a month
- Annual bonus = ₹7,000 × 12 × 8.33% = ₹6,997

At the 20% maximum the same employee receives ₹16,800. If the state minimum wage for the employee's skill were ₹12,000, the ceiling would be ₹12,000 and the minimum bonus ₹11,995.

Use the [bonus calculator](/tools/bonus-calculator) to check a figure.

## Allocable surplus: what sets the rate

Whether you pay 8.33% or more depends on the allocable surplus, computed from gross profit under the schedules to the Code: subtract the prior charges (depreciation, direct taxes, return on capital and the other items listed), then apply the allocable percentage. A loss-making unit still pays the minimum. Set-on and set-off carry surplus or shortfall across years, which is why the year-by-year record matters.

## Records and payment

- Pay within eight months of the close of the accounting year, unless the authority extends the time.
- Keep the computation of allocable surplus, the set-on and set-off record, and the bonus paid to each employee, with the annual return. These are the registers known as Forms A to D under the earlier Bonus Rules; the Ministry of Labour has said rules under the old Acts continue during the transition to the extent they are consistent with the Codes, so check the forms your state has notified under the Code.

## Common mistakes

- Treating statutory bonus as discretionary.
- Calculating on full wages instead of the calculation ceiling.
- Using a stale eligibility or ceiling figure instead of the current notification.
- Missing employees who worked 30 days but left during the year.
- Citing the repealed 1965 Act in policies.

## FAQs

**When is bonus paid?** Within eight months of the close of the accounting year.

**Do joiners and leavers get bonus?** Yes, in proportion to the wages earned, if they worked at least 30 working days.

**Is statutory bonus taxable?** Yes, it is salary income.

**Can we pay a performance bonus instead?** A performance or ex-gratia payment does not replace the statutory minimum for eligible employees unless it is paid as, and adjusted against, the statutory bonus under the Code's rules.

## Key takeaways

- Statutory bonus is now under the Code on Wages, 2019.
- 8.33% to 20%, on wages up to the notified calculation ceiling.
- Eligibility and ceiling are notified amounts: ₹21,000 and ₹7,000 or minimum wage, as last notified.
- Pay within eight months and keep the surplus and payment records.

NeevHR runs the annual bonus on the configured eligibility limit and calculation ceiling, previews every eligible employee, pays it through payroll, and produces the computation and payment registers. See [variable pay and bonus](/features/variable-pay).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "tds-on-salary-old-vs-new-regime-fy-2026-27",
    title: "TDS on salary: old vs new tax regime for FY 2026-27",
    excerpt:
      "The new-regime slabs, the ₹75,000 standard deduction, the Section 87A rebate, how the old regime compares, and a practical way to help employees choose.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-18",
    body: `Every employer deducts tax at source (TDS) on salary and deposits it monthly. Since the introduction of the new tax regime, payroll has to support two parallel systems and let each employee choose. Getting the deduction right through the year, and truing it up at the end, is what keeps Form 16 clean and employees happy.

## Two regimes, one payroll

India now has two personal tax regimes. The new regime is the default, with lower slab rates but almost no deductions. The old regime has higher rates but allows the familiar deductions, such as 80C, HRA exemption and home loan interest. Employees can choose, and payroll must compute TDS accordingly.

## The new regime slabs

Indicative slabs for FY 2026-27 under the new regime are below. Confirm the current year's numbers in the Finance Act before finalising payroll.

| Taxable income | Rate |
| --- | --- |
| Up to ₹4,00,000 | Nil |
| ₹4,00,001 to ₹8,00,000 | 5% |
| ₹8,00,001 to ₹12,00,000 | 10% |
| ₹12,00,001 to ₹16,00,000 | 15% |
| ₹16,00,001 to ₹20,00,000 | 20% |
| ₹20,00,001 to ₹24,00,000 | 25% |
| Above ₹24,00,000 | 30% |

Two features make the new regime attractive for many employees:

- A standard deduction of ₹75,000 from salary.
- A Section 87A rebate that effectively makes tax nil for resident individuals with taxable income up to ₹12,00,000.

So a salaried employee with taxable income at or below ₹12 lakh may pay no tax at all under the new regime.

## The old regime

The old regime uses slabs of 5%, 20% and 30%, with a basic exemption up to ₹2,50,000, a standard deduction of ₹50,000, and an 87A rebate that makes tax nil up to ₹5,00,000 of taxable income. Its advantage is the deductions:

- Section 80C investments up to ₹1,50,000 (EPF, PPF, life insurance, ELSS, and more).
- HRA exemption under Section 10(13A).
- Home loan interest under Section 24.
- 80D health insurance, 80CCD(1B) NPS, and others.

## A simple way to help employees choose

There is no universal answer. The rule of thumb:

- Employees with large deductions (high HRA, a home loan, full 80C, health insurance) often still come out ahead on the old regime.
- Employees with few deductions usually pay less under the new regime, thanks to the lower rates and the larger standard deduction.

The practical approach is to let each employee declare their regime and their proposed deductions at the start of the year, compute TDS on that basis, then true up as proofs come in. Many employers allow one switch during the year.

## Worked example

Consider a CTC that yields a gross salary of ₹11,50,000, with an employee who has few deductions. Under the new regime, after the ₹75,000 standard deduction, taxable income is about ₹10,75,000, which is below the ₹12 lakh rebate limit, so TDS is nil. The same employee under the old regime, without significant deductions, would pay tax on income above ₹2.5 lakh at the higher slab rates. For this profile, the new regime clearly wins.

## Common mistakes to avoid

- Not spreading TDS evenly across the year, causing a large deduction in March.
- Ignoring the employee's declared regime and deductions.
- Forgetting to true up when declared investments are not actually made.
- Missing the higher TDS where PAN is not available.

## Frequently asked questions

**Which regime is the default?** The new regime.

**Can an employee switch regimes mid-year?** Employers usually allow one change; the final position is settled when filing the return.

**Does the new regime allow any deductions?** Very few; the main relief is the standard deduction and the 87A rebate.

## Key takeaways

- The new regime is the default, with lower rates and a ₹75,000 standard deduction.
- The 87A rebate makes tax nil up to ₹12 lakh taxable under the new regime.
- The old regime still helps employees with substantial deductions.
- Spread TDS across the year and true up with proofs.

NeevHR computes TDS under both regimes from each employee's declaration, spreads it across the year, and reconciles through Form 24Q and Form 16.`,
  },
  {
    slug: "hra-exemption-explained",
    title: "HRA exemption explained, with worked examples",
    excerpt:
      "HRA exemption under the Income-tax Act, 2025: the least-of-three rule, the eight 50% cities from tax year 2026-27, landlord PAN and common mistakes.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-21",
    body: `House Rent Allowance (HRA) is one of the most valuable exemptions for salaried employees who pay rent, available under the old tax regime. The catch is that the exemption is not simply the HRA you receive; it is the least of three amounts, and getting the calculation right can save an employee real money.

## The least-of-three rule

From tax year 2026-27 the exemption is in section 11 of the Income-tax Act, 2025, read with Schedule III (formerly section 10(13A) of the 1961 Act). The exempt HRA is still the lowest of these three figures:

1. The actual HRA received.
2. Rent paid minus 10% of Basic + DA.
3. 50% of Basic + DA in the eight listed cities, or 40% elsewhere.

From tax year 2026-27, rule 279 of the Income-tax Rules, 2026 lists eight cities for the 50% limb: Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Pune and Ahmedabad. Earlier years used only the first four. Everywhere else uses 40%.

## A worked example

Take a monthly Basic + DA of ₹40,000, HRA received of ₹20,000, and rent paid of ₹22,000 in a metro city.

| Test | Calculation | Amount |
| --- | --- | --- |
| Actual HRA received | given | ₹20,000 |
| Rent minus 10% of basic | 22,000 − 4,000 | ₹18,000 |
| 50% of basic (metro) | 50% of 40,000 | ₹20,000 |
| Exempt (least of three) | | ₹18,000 |

So ₹18,000 is exempt and ₹2,000 of HRA is taxable each month. Over a year, that is ₹2,16,000 exempt.

Now change the city to non-metro. The third test becomes 40% of ₹40,000 = ₹16,000, which is now the lowest, so only ₹16,000 is exempt and ₹4,000 becomes taxable.

## Why the rent-minus-10% test matters

The second test, rent paid minus 10% of Basic + DA, is what limits the exemption for employees who pay low rent relative to their salary. If someone earns a high basic but pays modest rent, this test caps their exemption. It rewards genuinely high rent, which is the point of the allowance.

## Documentation and the landlord PAN rule

To claim HRA, an employee must actually pay rent. Where annual rent exceeds ₹1,00,000, the employee must provide the landlord's PAN in the declaration (Form 124, formerly Form 12BB), which also asks for the employee's relationship with the landlord. Rent paid to a family member is allowed, but is scrutinised, so a genuine arrangement, a rent agreement and receipts matter. Employees who cannot produce proofs at year-end lose the exemption when payroll trues up.

## What if there is no HRA in the salary structure

An employee who pays rent but whose salary has no HRA component cannot claim the HRA exemption. They may instead claim a smaller deduction for rent paid (section 134 of the 2025 Act, formerly section 80GG), subject to its own limits and conditions. This is why a sensible salary structure includes an HRA component for employees likely to pay rent.

## Common mistakes to avoid

- Assuming the full HRA received is exempt.
- Using the metro rate for a non-metro city, or vice versa.
- Forgetting the landlord PAN requirement above the rent threshold.
- Claiming HRA under the new regime, where it is not available.

## Frequently asked questions

**Can I claim HRA and a home loan together?** Yes, if you genuinely pay rent where you live and own a property elsewhere or that is let out, subject to conditions.

**Is HRA available under the new regime?** No, HRA exemption is an old-regime benefit.

**What counts as a metro city?** From tax year 2026-27: Delhi, Mumbai, Kolkata, Chennai, Bengaluru, Hyderabad, Pune and Ahmedabad.

## Key takeaways

- HRA exemption is the least of actual HRA, rent minus 10% of basic, and 50%/40% of basic.
- Eight cities get the 50% rate from tax year 2026-27.
- Proper documentation and landlord PAN above the threshold are essential.
- HRA is an old-regime benefit.

NeevHR captures the rent declaration, computes the exemption correctly by city, and reduces taxable income so TDS reflects it through the year.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "salary-structure-ctc-breakup-explained",
    title: "Salary structure and CTC breakup, fully explained",
    excerpt:
      "What sits inside Cost to Company, why Basic drives everything, a full CTC-to-in-hand example, and how the Code on Wages shapes structure design.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-08-24",
    body: `Cost to Company (CTC) is the total annual cost an employer bears for an employee. It is not the same as take-home pay, and the gap between the two surprises almost every new joiner. Understanding the structure helps HR design packages that are fair, tax-efficient and statutorily sound.

## What CTC actually includes

CTC bundles together several things that the employee experiences very differently:

- Fixed pay: Basic, HRA, special allowance and other cash components.
- Allowances and reimbursements: LTA, conveyance, telephone and similar heads.
- Employer statutory contributions: employer PF and, where applicable, ESI.
- Retirement accruals: gratuity accrual, which is a cost even though it is paid only on exit.
- Variable pay: performance bonus or incentives, often shown at target.

The key insight is that employer PF and gratuity are part of CTC but never reach the employee's bank account as monthly salary. That is a large part of why in-hand is lower than CTC divided by twelve.

## Why Basic salary is the anchor

Basic salary drives almost everything else:

- PF is 12% of Basic (or Basic + DA).
- Gratuity accrues on Basic.
- HRA exemption limits are 50% or 40% of Basic.
- Statutory bonus keys off Basic + DA.

A very low Basic reduces statutory contributions and boosts short-term take-home, but it also reduces retirement savings and can breach the Code on Wages, which, since 21 November 2025, treats excluded allowances above 50% of total remuneration as wages, raising PF, gratuity and bonus bases. See [the 50% wage rule](/blog/labour-codes-wage-definition-50-percent-rule).

## A full worked example

Take a CTC of ₹12,00,000 with Basic set at 50% of CTC.

| Component | Amount per year |
| --- | --- |
| Basic (50% of CTC) | ₹6,00,000 |
| HRA and other allowances | ₹5,35,140 |
| Employer PF (12% of basic, capped at the ₹25,000 wage ceiling) | ₹36,000 |
| Gratuity accrual (4.81% of basic) | ₹28,860 |
| Gross (CTC minus employer PF and gratuity) | ₹11,35,140 |

From the gross, the employee's own deductions come off to reach in-hand:

| Deduction from gross | Amount per year |
| --- | --- |
| Employee PF | ₹36,000 |
| Professional tax | ₹2,400 |
| TDS (new regime, few deductions) | ₹0 (below the ₹12 lakh rebate) |
| In-hand per year | ₹10,96,740 |

So a ₹12 lakh CTC yields roughly ₹91,400 per month in-hand for this profile, using the ₹25,000 PF wage ceiling in force from 17 September 2026. Change the assumptions (a different Basic percentage, a home loan, the old regime) and the in-hand shifts.

## Designing good structures

A well-designed structure balances three goals: healthy take-home, tax efficiency, and statutory adequacy. Flexible benefit plans (FBP) let employees allocate parts of their pay to tax-friendly heads such as fuel, telephone or LTA, within limits and against proofs. But structures should not be so aggressive that they fall foul of the Code on Wages or leave retirement savings too thin.

## Common mistakes to avoid

- Setting Basic too low to inflate take-home, breaching the Code on Wages.
- Presenting CTC to candidates without explaining the in-hand gap.
- Forgetting that employer PF and gratuity are CTC but not salary.
- Building structures that are hard to administer across grades.

## Frequently asked questions

**Why is my in-hand so much less than CTC?** Employer PF, gratuity, employee PF, PT and TDS all sit between CTC and in-hand.

**What is a good Basic percentage?** Commonly 40% to 50% of CTC, balancing take-home and statutory adequacy.

**What is FBP?** Flexible Benefit Plan, letting employees allocate pay to tax-friendly heads against proofs.

## Key takeaways

- CTC includes employer contributions and accruals that are not paid as salary.
- Basic anchors PF, gratuity, HRA limits and bonus.
- In-hand is gross minus employee PF, PT and TDS.
- Structures must respect the Code on Wages and stay administrable.

NeevHR lets you define pay structures as reusable components and assign them to employee groups, so a new grade or entity does not need a new spreadsheet, and every payslip is consistent.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "form-16-explained",
    title: "Form 16, now Form 130: Part A, Part B and reconciliation",
    excerpt:
      "Form 16, now Form 130 under the Income-tax Act, 2025: Part A and Part B, the 15 June due date, the TDS reconciliation that catches errors and the PAN issue.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-08-27",
    body: `Form 16 is the certificate of tax deducted at source (TDS) on salary that an employer issues to each employee for a year. From tax year 2026-27, under the Income-tax Act, 2025, it is called Form 130 (issued under section 395, formerly section 203), and the quarterly return that feeds it, Form 24Q, is Form 138. The structure and the 15 June due date are unchanged; most people still say Form 16. Employees rely on it to file their income tax returns, so it must be accurate, reconciled and issued on time. For payroll, Form 16 is the visible proof that the whole year's TDS was handled correctly.

## What Form 16 is

Form 16 certifies how much salary an employer paid an employee in a financial year, how much tax was deducted, and how that tax was computed. It has two parts, generated from different sources.

## Part A: the deposit summary

Part A is generated from the TRACES portal of the income tax department, not typed by the employer. It shows:

- Employer and employee identity details (including PAN and TAN).
- The period of employment in the year.
- A quarter-by-quarter summary of TDS deducted and deposited.

Because Part A comes from TRACES, it reflects the TDS challans the employer actually filed. If a quarter's challan was short or filed late, Part A will show it. This is what makes Part A the anchor for reconciliation.

## Part B: the computation

Part B is prepared by the employer and shows the detailed computation:

- Gross salary and the value of perquisites.
- Exemptions such as HRA (section 11 and Schedule III of the 2025 Act, formerly section 10).
- The standard deduction.
- Deductions under the old regime, such as sections 123 and 126 of the 2025 Act (formerly 80C and 80D).
- Taxable income, tax on it, rebate, and the final tax.

Part B is where the employee sees exactly how their tax was arrived at, and where old-regime deductions appear.

## When Form 16 is due

Form 16 for a financial year (April to March) is generally issued by 15 June of the following year, after the fourth-quarter TDS return (Form 24Q) is filed. Rushing Form 16 before the Q4 return is filed risks a mismatch with Part A.

## The reconciliation that catches errors

The single most common Form 16 issue is a mismatch between the tax shown in Part A and the tax actually deposited during the year. If a quarter's challan was short, or a correction was filed late, the employee's Form 26AS and Part A will not match what payroll believed it deducted. The fix is to reconcile TDS deposited against payroll every quarter, not once at year-end.

## The PAN problem

An employee without a valid PAN cannot be issued a proper Form 16, and TDS on their salary is deducted at a higher rate through the year. Collecting and validating PAN at onboarding prevents a painful year-end scramble and protects the employee from excess deduction.

## Common mistakes to avoid

- Issuing Form 16 before the Q4 return is filed.
- Not reconciling Part A deposits against payroll each quarter.
- Missing employees with no or invalid PAN.
- Errors in Part B exemptions that do not match the year's declarations.

## Frequently asked questions

**What if I worked for two employers in a year?** Each employer issues a Form 16 for their period; you combine them when filing.

**Is Form 16 mandatory if no TDS was deducted?** If tax was deductible but nil due to the rebate, practice varies; many employers still issue Part B for the record.

**How does Form 16 relate to Form 24Q?** Form 24Q is the quarterly TDS return; its annexure feeds Part B, and its challans feed Part A.

## Key takeaways

- Part A comes from TRACES and shows deposited TDS; Part B is the employer's computation.
- Form 16 is due by 15 June after the year ends.
- Reconcile TDS quarterly to avoid Part A mismatches.
- Collect valid PAN at onboarding.

NeevHR generates Form 16 per employee, reconciles Part A deposits from filed challans, and flags any shortfall or missing PAN before you distribute.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "leave-types-in-india-explained",
    title: "Leave types in India: a complete guide for HR",
    excerpt:
      "Earned, casual and sick leave, maternity and paternity, comp-off and LWP, plus accrual, carry-forward, encashment and the sandwich rule.",
    category: "time",
    author: "NeevHR Team",
    publishedAt: "2026-08-30",
    body: `Leave policy is where HR flexibility meets statutory floors. India has no single national leave law for private employment. Instead, minimum leave comes from the OSH Code, 2020 (which replaced the Factories Act) for factories and covered establishments, from state Shops and Establishments Acts for shops and offices, and from the Code on Social Security, 2020 for maternity. Companies layer their own policy on top. The result is a lot of variation, which is exactly why a clear, consistent leave policy matters.

## The common leave types

| Type | Purpose and typical behaviour |
| --- | --- |
| Earned or Privilege leave (EL/PL) | Planned time off; accrues monthly; usually carries forward up to a cap; encashable |
| Casual leave (CL) | Short, unplanned absences; usually lapses at year-end |
| Sick leave (SL) | Illness; may need a medical certificate beyond a few days |
| Maternity leave | 26 weeks (12 weeks from the third child, and for adoption or surrogacy) under the Code on Social Security, 2020 |
| Paternity leave | Company policy; no central mandate for private employers |
| Comp-off | Time off in lieu of working a holiday or weekly off |
| Bereavement / marriage leave | Policy-based, short, occasion-specific |
| Leave without pay (LWP) | Unpaid absence once other balances are exhausted |

## Accrual and carry-forward

Earned leave typically accrues monthly, for example 1.5 to 2.5 days a month depending on policy and state minimums. It usually carries forward up to a cap; leave beyond the cap either lapses or is encashed, per policy. Casual and sick leave often do not carry forward and lapse at year-end.

Proration is essential: joiners and leavers should accrue leave for the part of the year they actually work, not a full year's entitlement.

## Encashment

Leave encashment usually applies to earned leave. It is valued on Basic + DA and paid either annually or on exit. On exit, encashment of earned leave is exempt up to ₹25 lakh under section 19(1) of the Income-tax Act, 2025 (Table Sl. Nos. 13 and 14, formerly section 10(10AA)), with the excess taxable. Encashing casual or sick leave is uncommon.

## The sandwich rule

Policies differ on whether holidays and weekly offs that fall inside or around a leave count as leave. Under a "sandwich" policy, a weekly off between two leave days is counted as leave; under a non-sandwich policy, it is not. This choice materially affects both balances and payroll, so it must be explicit in the policy, not left to interpretation.

## Statutory floors to respect

Under the OSH Code, a worker who has worked 180 days in a calendar year earns annual leave at one day for every 20 days worked (the Factories Act required 240 days). State Shops and Establishments Acts set the minimums for shops and offices, along with rules on carry-forward and, in some states, minimum accumulation. Company policy can be more generous but not less.

## Common mistakes to avoid

- Granting a full year's leave to a mid-year joiner without proration.
- Leaving the sandwich rule ambiguous.
- Encashing on gross instead of Basic + DA.
- Ignoring state statutory minimums.
- Letting balances drift because accrual and lapse are done manually.

## Frequently asked questions

**Is paternity leave mandatory?** Not for private employers under a central law; it is a policy choice.

**Can sick leave carry forward?** Usually not, but policy and state rules vary.

**How is encashment taxed?** Earned leave encashment on exit is exempt up to ₹25 lakh under section 19(1) of the Income-tax Act, 2025, with the balance taxable.

## Key takeaways

- India has no single leave law; policy layers on the OSH Code, state Shops and Establishments Acts and the Code on Social Security.
- Earned leave accrues and carries forward; casual and sick usually lapse.
- Encashment is on Basic + DA, exempt up to limits on exit.
- The sandwich rule must be explicit.

NeevHR models every leave type with its own accrual, carry-forward and encashment rules, prorates for joiners and leavers, and shows employees a live balance, so policy is enforced consistently rather than reconstructed by hand.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "maternity-benefit-act-for-employers",
    title: "Maternity benefit under the Labour Codes: a guide for employers",
    excerpt:
      "Maternity benefit under the Code on Social Security, 2020: 26 and 12 weeks, the 80-day rule, adoption and surrogacy, ESI, creche and work from home.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-09-01",
    body: `Maternity benefit gives women employees paid leave and protection around childbirth, adoption and surrogacy. Since 21 November 2025 it is governed by Chapter VI of the Code on Social Security, 2020, which replaced the Maternity Benefit Act, 1961. The entitlements HR knows, 26 weeks, the 80-day rule, the creche requirement and work from home, carried over.

## Who it applies to

Every factory, mine, plantation and shop or establishment in which 10 or more employees are employed, or were employed on any day of the preceding twelve months. A woman covered by ESI receives maternity benefit from ESIC instead, as a cash benefit at her average daily wage, subject to ESI's contribution conditions.

## The entitlements

| Situation | Paid leave |
| --- | --- |
| Childbirth, first and second child | 26 weeks, of which up to 8 weeks before the expected delivery |
| Childbirth, a woman with two or more surviving children | 12 weeks, of which up to 6 weeks before delivery |
| Adoption of a child below three months | 12 weeks from the date the child is handed over |
| Commissioning mother (surrogacy) | 12 weeks from the date the child is handed over |
| Miscarriage or medical termination of pregnancy | 6 weeks |
| Tubectomy | 2 weeks |

"Paid" means the average daily wage for the period of absence, so payroll keeps salary running. A woman who does not receive free pre-natal and post-natal care from the employer also gets a medical bonus of the amount notified (₹3,500 under the old Act; check the figure notified under the Code).

## Eligibility

A woman must have worked for the employer for at least 80 days in the twelve months immediately before her expected date of delivery. Days of lay-off and paid holidays count towards the 80 days. Check this early when leave is planned.

## Work from home, creche and information

- **Work from home:** after the leave, the employer may allow work from home where the nature of the work permits, on terms both agree.
- **Creche:** an establishment with 50 or more employees must provide a creche within the prescribed distance, alone or as a common facility, and allow the mother four visits a day, including the interval for rest.
- **Information:** every woman must be told in writing and electronically, at the time of her appointment, about the benefits available under the Code.

## Protections

An employer cannot dismiss or discharge a woman during, or on account of, her maternity absence, or change her conditions of service to her disadvantage. Leave counts as service, which protects gratuity and leave accrual.

## Employer checklist

| Step | What to do |
| --- | --- |
| Coverage | Check whether the woman is covered by ESI; if so, the claim goes to ESIC |
| Eligibility | Confirm 80 days in the preceding 12 months |
| Plan | Agree the split before and after delivery within the entitlement |
| Payroll | Pay the average daily wage for the leave, or stop salary where ESIC pays |
| Return | Discuss work from home and creche use before the return date |
| Records | Keep the notice, certificates and payment record |

## Common mistakes

- Treating maternity leave as unpaid or partly paid.
- Paying salary and also letting the employee claim from ESIC for the same period.
- Missing the 12 weeks for adoption and surrogacy.
- Ignoring the creche duty at 50 employees.
- Citing the repealed 1961 Act in the leave policy.

## FAQs

**Is it 26 weeks for every child?** For a woman with fewer than two surviving children. With two or more surviving children it is 12 weeks.

**Does adoption qualify?** Yes, 12 weeks for a child below three months, from the date of handover.

**Is maternity pay taxable?** Salary paid by the employer is taxed as salary. ESI maternity benefit paid by ESIC is a social security benefit, not salary.

**Is paternity leave mandatory?** Not under a central law for private employers; it is a policy choice.

## Key takeaways

- Maternity benefit is now under the Code on Social Security, 2020.
- 26 weeks for the first two children, 12 weeks thereafter and for adoption and surrogacy.
- 80 days of work in the preceding 12 months; ESI-covered women claim from ESIC.
- Creche at 50 employees; no dismissal during or because of maternity.

NeevHR models maternity as a leave type with its own eligibility and duration rules, keeps salary running through the period, and preserves service for gratuity. See [leave management](/features/leave).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "posh-act-compliance-for-employers",
    title: "POSH compliance: a complete guide for employers",
    excerpt:
      "The Internal Committee, the policy, mandatory training, the complaint and inquiry timelines, and the annual report every covered employer must file.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-09-03",
    body: `The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, known as POSH, requires every employer with 10 or more employees to build a safe, accountable workplace. Compliance is not optional, and gaps carry penalties, including fines and, on repeat offences, cancellation of licences. Beyond the law, a strong POSH framework signals to every employee that the company takes dignity seriously.

## The four pillars of compliance

1. A written POSH policy, communicated to all employees.
2. An Internal Committee (IC) with the required composition at each location.
3. Awareness for all employees and specific training for IC members.
4. A defined complaint, inquiry and redressal process with strict timelines.

## The Internal Committee

The IC must be constituted at every location that has 10 or more employees. Its composition is prescribed:

- A Presiding Officer who is a senior woman employee.
- At least two members from among employees, preferably committed to the cause or with relevant experience.
- One external member from an NGO or association, or a person familiar with issues of sexual harassment, to ensure independence.

At least half the members must be women. If a senior woman is not available at a location, the rules provide for nomination from another office or unit.

## Policy, awareness and training

A POSH policy on paper is not enough. Employers are expected to run regular awareness sessions for all employees, so people know what harassment is, how to complain, and what protections exist. IC members need specific orientation to conduct inquiries fairly. Many organisations run POSH as a mandatory annual training, tracked to completion by department, and capture policy acknowledgement at onboarding.

## The complaint and inquiry process

The Act sets out a clear process with timelines:

| Stage | Indicative timeline |
| --- | --- |
| Filing a complaint | Within three months of the incident (extendable) |
| Conciliation (optional, at the woman's request) | Before inquiry, if she chooses |
| Inquiry | To be completed within 90 days |
| Report and action | Within a defined period after the inquiry |

The process must protect confidentiality, prohibit retaliation, and allow interim relief such as a transfer or leave during the inquiry.

## The annual report

Covered employers must prepare an annual report on the number of complaints received and disposed of during the year, and submit it to the district officer. Companies that file a board's report must also disclose POSH compliance there.

## Common mistakes to avoid

- Not constituting an IC at every 10-plus location.
- Missing the mandatory external member.
- Treating POSH training as a one-time exercise.
- Ignoring the inquiry timelines.
- Failing to file the annual report.

## Frequently asked questions

**Does POSH apply to companies with fewer than 10 employees?** The IC requirement applies at 10 or more; smaller workplaces are served by a Local Committee at the district level.

**Can men file complaints under POSH?** The Act specifically protects women; many companies adopt a gender-neutral policy internally in addition.

**Is the external member mandatory?** Yes, for the IC to be validly constituted.

## Key takeaways

- Every employer with 10-plus employees needs an IC with an external member.
- A written policy, awareness and IC training are required.
- The inquiry must finish within 90 days, with confidentiality and no retaliation.
- File the annual report with the district officer.

NeevHR can run POSH as mandatory training with department-wise completion tracking, capture policy acknowledgements at onboarding, and keep the records an audit will ask for.`,
  },
  {
    slug: "dpdp-act-2023-for-hr-teams",
    title: "The DPDP Act 2023: what HR teams need to do",
    excerpt:
      "Consent, purpose limitation and data-principal rights applied to employee data, plus the technical controls that make compliance practical.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-09-05",
    body: `The Digital Personal Data Protection Act, 2023 (DPDP) is India's data protection law, and HR sits at the centre of it. HR systems hold some of the most sensitive personal data in any company: identity documents, bank details, salary, health information, performance records and family details. Handling that data lawfully is now a legal duty, not just good practice.

## When the obligations apply

The DPDP Act was enacted on 11 August 2023, and the Digital Personal Data Protection Rules, 2025 were notified on 13 November 2025 with an 18-month phased commencement. The substantive obligations, including notice, consent, security safeguards, breach notification and data principal rights, apply from 13 May 2027. Employee data collected now will still be held then, so build the habits today. Check the current position with the [Ministry of Electronics and Information Technology](https://www.meity.gov.in/).

## Employment is a legitimate use

The Act lets an employer process personal data without consent for purposes of employment, such as payroll, attendance, statutory filings and safeguarding the employer from loss or liability. Consent is still needed for purposes beyond employment, such as marketing or an optional wellness programme. Notice, security, retention and the rights below apply either way.

## The core principles

The DPDP framework rests on a few ideas that HR should internalise:

- Purpose limitation: process personal data only for a lawful, specified purpose.
- Lawful basis: rely on consent, or another permitted legal basis, to process data.
- Data minimisation: collect only what you actually need.
- Accuracy and retention: keep data accurate, and only for as long as the purpose requires.
- Security: protect data with reasonable safeguards.

## Employee rights as data principals

Under DPDP, individuals (called data principals) have rights over their data, and employees are no exception. In HR terms, an employee can:

- Access the personal data you hold about them.
- Seek correction of inaccurate data.
- Seek erasure of data no longer needed for the purpose.
- Nominate someone to exercise rights in the event of death or incapacity.

HR needs a defined way to receive and act on these requests within reasonable timelines, and a record that it did so.

## Practical HR steps

| Area | What to do |
| --- | --- |
| Collection | Collect only what the role and law require, with a clear purpose |
| Consent | Capture consent where it is the basis, and record it |
| Access control | Restrict who can see sensitive fields such as salary, bank and health |
| Retention | Set retention schedules and delete or archive when the purpose ends |
| Requests | Have a process to handle access, correction and erasure |
| Breach | Have a plan to detect, contain and report a data breach |

## Security by design

DPDP compliance is far easier when the HR system enforces the right controls automatically rather than relying on people to be careful. The controls that matter most are:

- Row-level isolation, so one company's data cannot leak into another's.
- Role-based access, so people see only what their role needs.
- Field masking, so sensitive fields are hidden from those who should not see them.
- An audit trail, so every access and change is recorded.
- Retention schedules and legal holds, so data is kept and removed by policy.

## Consent and notice

Where consent is the basis for processing, it must be free, informed, specific and capable of being withdrawn as easily as it was given. Employees should receive a clear notice of what data is processed and why. For much employment processing, other lawful bases may apply, but consent handling still matters for optional uses.

## Common mistakes to avoid

- Collecting more employee data than the purpose needs.
- Giving broad access to sensitive fields.
- Keeping data forever with no retention policy.
- Having no process for employee data requests.
- Treating security as an IT-only concern, separate from HR.

## Frequently asked questions

**Does DPDP apply to employee data?** Yes, employees are data principals and their personal data is covered.

**Do we always need consent?** Not always; other lawful bases can apply to employment, but consent handling is still relevant for optional processing.

**What about existing HR records?** They fall within the framework; retention and access controls should be applied to them too.

## Key takeaways

- Process employee data for a lawful, specified purpose, and minimise it.
- Employees have access, correction and erasure rights.
- Access control, masking, audit and retention are the practical backbone.
- Build security into the system rather than relying on manual care.

NeevHR builds in row-level isolation, role-based access, field masking and an audit trail, with consent capture and data-principal request handling for employees, so DPDP compliance is a configuration rather than a project.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "minimum-wages-in-india-explained",
    title: "Minimum wages in India, fully explained",
    excerpt:
      "Why minimum wage varies by state, skill and scheduled employment, how the Code on Wages changes things, and what payroll must check before every run.",
    category: "compliance",
    author: "NeevHR Team",
    publishedAt: "2026-09-08",
    body: `Minimum wages in India are not a single number, and treating them as one is a fast route to non-compliance. Rates are set by both central and state governments, vary by industry, skill and sometimes zone, and are revised periodically. For payroll, the obligation is to make sure no one is paid below the floor that applies to them.

## What drives the minimum wage rate

| Factor | Effect |
| --- | --- |
| State | Each state notifies its own rates |
| Type of work | States may still fix rates by employment or industry |
| Skill level | Unskilled, semi-skilled, skilled and highly skilled differ |
| Zone | Some states vary rates by city size or zone |

A minimum wage is usually made up of a basic component plus a variable dearness allowance (VDA) that is revised, often twice a year, to track inflation. That is why a rate you set at the start of the year can quietly become non-compliant after a VDA revision.

## Why it matters to payroll

Two things trip employers up.

First, the wage actually paid (broadly the components that count toward minimum wage) must not fall below the floor for the employee's state, industry and skill. If your structure has a very low Basic and most of the pay in allowances that do not count, you can breach the floor even while paying a decent total.

Second, the floor moves. A structure that is compliant today can slip below the floor after a revision if no one is watching. This is especially common with contract and entry-level roles.

## The Code on Wages

The Code on Wages, 2019, in force since 21 November 2025, replaced four laws (the Minimum Wages Act, the Payment of Wages Act, the Payment of Bonus Act and the Equal Remuneration Act). Three features matter for structure design:

- Minimum wages now apply to every employee, not only to scheduled employments.
- A floor wage fixed by the Central Government, below which no state can set its minimum.
- A definition of "wages" that expects excluded allowances not to exceed 50% of total remuneration. If they do, the excess is added back to wages, which raises PF, gratuity and bonus bases.

This is why aggressively low-Basic structures are risky under the Code.

## What payroll must check before every run

- The current minimum wage for each employee's state, industry and skill.
- Whether the wage-counting components meet or exceed that floor.
- Whether a recent VDA revision has changed the floor.
- Any contract or entry-level roles most at risk of a breach.

## Common mistakes to avoid

- Using a stale minimum wage after a VDA revision.
- Structuring pay so wage-counting components fall below the floor.
- Applying one state's rate to employees in another.
- Ignoring skill-level differences within the same site.

## Frequently asked questions

**Is there one national minimum wage?** No. States fix their own rates, but under the Code on Wages no state rate may be below the floor wage the Central Government fixes.

**How often do rates change?** Often twice a year, when the VDA is revised.

**Who sets the rate for my employees?** Usually the state, by skill level and area, and in some states by type of work. The Central Government sets rates for establishments where it is the appropriate government.

## Key takeaways

- Minimum wage varies by state, industry, skill and sometimes zone.
- It moves with VDA revisions, so compliance is not set-and-forget.
- The Code on Wages covers every employee, adds a floor wage and a 50% wages test.
- Check every payroll against the current applicable floor.

NeevHR surfaces minimum-wage warnings at the verify and publish steps, checking each employee against the current state and skill floor, so a stale rate never becomes an underpayment.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "full-and-final-settlement-explained",
    title: "Full and final settlement: a complete guide",
    excerpt:
      "What goes into the F&F, how gratuity and leave encashment are taxed, notice recovery, clearance, timelines, and how to close it cleanly.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-09-10",
    body: `Full and final settlement (F&F) is the last payroll event for a departing employee, and the one most likely to cause a dispute if handled poorly. It nets everything the company owes the employee against everything the employee owes the company, applies the right tax treatment, and closes the relationship. Done well, it leaves a good final impression. Done badly, it is the top source of ex-employee complaints.

## What the F&F includes

The settlement is a balance of earnings and recoveries.

| Earnings | Recoveries |
| --- | --- |
| Salary up to the last working day | Notice-period shortfall, if any |
| Leave encashment | Outstanding loan or advance balance |
| Gratuity, if eligible | Unreturned asset value |
| Pending reimbursements | Excess leave taken |
| Statutory bonus due, if any | TDS on taxable components |

## How the big items are taxed

Two components carry meaningful tax rules.

- Gratuity is exempt under section 19(1) of the Income-tax Act, 2025 (formerly section 10(10)). For employees covered by the Code on Social Security, the exemption is the least of the actual gratuity, ₹20 lakh, and the formula amount.
- Leave encashment on resignation or retirement is exempt up to ₹25 lakh under section 19(1) (formerly section 10(10AA)), with the balance taxable.

Notice-pay recovery, where the employee leaves before serving full notice, is handled per policy. The basis (Basic or gross) should be defined and applied consistently.

## Clearance and asset return

Most delays in F&F are not caused by payroll; they are caused by pending clearances. Before the settlement can be finalised, departments confirm there are no dues: IT reclaims assets and access, finance confirms no outstanding advances, and the manager confirms the knowledge handover. A clearance tracker with owners and due dates keeps this moving.

## Timelines

The Code on Wages, 2019 changed the timeline. Wages due to an employee who resigns, is removed, dismissed or retrenched, or whose establishment closes, must be paid within two working days of the last day. Gratuity must be paid within 30 days of becoming payable. The old practice of settling in 30 to 45 days now breaches the wage deadline, so run clearances during the notice period, not after it.

## Worked example

For an employee leaving with salary due, leave encashment and gratuity, against a short notice and a loan balance:

| Item | Amount |
| --- | --- |
| Salary till last working day | ₹58,400 |
| Leave encashment | ₹42,300 |
| Gratuity | ₹1,24,000 |
| Less: notice shortfall | −₹22,000 |
| Less: loan balance | −₹18,500 |
| Less: TDS | −₹9,700 |
| Net settlement | ₹1,74,500 |

The net is best shown in words on the settlement statement, and mirrored in the relieving and experience letters.

## Common mistakes to avoid

- Delaying the F&F because clearances are not tracked.
- Applying the wrong exemption on gratuity or leave encashment.
- Inconsistent notice-recovery basis across employees.
- Not returning or valuing company assets.

## Frequently asked questions

**How long can F&F take?** Wages are due within two working days of the last day under the Code on Wages, and gratuity within 30 days of becoming payable.

**Is leave encashment fully exempt?** No, only up to ₹25 lakh on exit; the balance is taxable.

**Can we withhold F&F until assets are returned?** Asset recovery is usually netted in the settlement rather than used to withhold it entirely; follow policy and law.

## Key takeaways

- F&F nets salary, leave encashment and gratuity against notice, loans, assets and TDS.
- Gratuity and leave encashment have their own exemptions.
- Clearance tracking, not payroll, is usually the bottleneck.
- Pay wages within two working days and gratuity within 30 days, then issue the letters.

NeevHR computes the F&F with the gratuity and leave-encashment exemptions, tracks clearances with owners, shows the net in words, and generates the relieving and experience letters.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "notice-period-and-buyout-explained",
    title: "Notice period and buyout: a fair, practical guide",
    excerpt:
      "How notice periods are set, buyout both ways, garden leave and early release, the recovery basis to define, and how to keep exits clean.",
    category: "hr-strategy",
    author: "NeevHR Team",
    publishedAt: "2026-09-12",
    body: `Notice period is the time between an employee's resignation and their last working day. It exists so work can be handed over and a replacement found, and it protects both sides. How you handle notice, especially when it is cut short, shapes the exit experience and your employer brand more than almost anything else in offboarding.

## How notice periods are set

Notice periods are contractual and vary by seniority, commonly 30 to 90 days. Senior or hard-to-replace roles often carry longer notice. Whatever the length, it should be stated clearly in the appointment letter and applied consistently across similar roles, so it never looks arbitrary.

## Buyout, both ways

The full notice is not always served, and buyout works in both directions.

- Employee leaves early: if the employee wants to leave before serving full notice, the employer may recover the shortfall as a notice-pay recovery. The recovery is usually calculated on Basic or on gross, per policy, for the unserved days.
- Employer wants an early exit: if the employer prefers the employee to leave sooner, it may buy out the notice by paying for the unserved days.

The policy should state the recovery basis (Basic or gross) and apply it the same way for everyone. Ambiguity here is a common source of disputes.

## Garden leave and early release

Some employers place a departing employee on garden leave, keeping them on payroll but away from work and systems, typically for sensitive roles. Others grant early release with a proper knowledge handover, letting a cooperative leaver go before the full notice ends. Both are legitimate; what matters is that the decision is transparent and documented.

## Keeping the exit clean

A clean exit protects both sides and preserves the relationship, which matters for rehires, referrals and reputation. The essentials:

- Confirm the last working day and communicate it.
- Run a structured knowledge handover to a named person.
- Complete department clearances and asset returns.
- Settle notice recovery or buyout in the full and final settlement, and pay the final wages within two working days of the last day, as the Code on Wages, 2019 requires.
- Issue relieving and experience letters promptly.

## Common mistakes to avoid

- Inconsistent notice periods for similar roles.
- An undefined recovery basis (Basic or gross).
- No knowledge handover, so the team loses context.
- Delaying the relieving letter, which hurts the leaver's next job.

## Frequently asked questions

**Can an employer refuse a resignation?** No, but it can hold the employee to the contractual notice or agree a buyout.

**Is notice recovery taxable in reverse?** Notice pay recovered from an employee reduces their taxable salary in most treatments; buyout paid by the employer is taxable in the employee's hands.

**Is garden leave paid?** Yes, the employee remains on payroll during garden leave.

## Key takeaways

- Notice periods are contractual, commonly 30 to 90 days, and should be consistent.
- Buyout works both ways; define the recovery basis clearly.
- Garden leave and early release are valid, documented choices.
- Settle notice in the F&F, pay wages within two working days, and issue letters promptly.

NeevHR manages notice periods by grade, supports early release with a knowledge handover, and settles notice recovery or buyout in the final settlement.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "monthly-payroll-process-step-by-step",
    title: "The monthly payroll process, step by step",
    excerpt:
      "A repeatable five-stage payroll cycle, the inputs to freeze, the checks that catch errors, the sign-off gate, and the outputs to generate.",
    category: "payroll",
    author: "NeevHR Team",
    publishedAt: "2026-09-14",
    body: `Payroll feels chaotic when it is a monthly scramble and calm when it is a repeatable process. The difference is not the tool alone; it is a disciplined cycle that the same person can run the same way every month. Here is a five-stage cycle that works for growing and enterprise companies.

## Stage 1: Inputs

Payroll quality is set here, before any calculation happens. Freeze attendance and leave for the period, then gather every variable input:

- New joiners and their prorated first month.
- Exits and their full and final settlements.
- Salary revisions effective in the period.
- Loss of pay from unapproved absences.
- Arrears from backdated changes.
- Reimbursements, incentives and one-time payments.
- Loan and advance EMIs to recover.

A missing input here becomes a correction later, so the freeze and the checklist matter.

## Stage 2: Compute

Run the calculation: apply each employee's salary structure, compute gross, then statutory deductions (PF, ESI, PT and TDS) and other deductions. Loss of pay should reduce both the pay and the statutory base correctly, not just the net. Arrears should recompute cleanly against the earlier period.

## Stage 3: Verify

This is the stage teams skip and regret. Before anyone is paid, review the run:

| Check | Why it matters |
| --- | --- |
| Net variance versus last month | Catches structure and LOP errors |
| New joiners and exits | Confirms proration and F&F correctness |
| Statutory deductions present | Prevents shortfalls |
| Minimum-wage floor | Prevents underpayment |
| Large one-off movements | Catches data-entry errors |

A good verify step compares this month's net for every employee against last month, and asks a human to explain the biggest movements.

## Stage 4: Approve

A single sign-off gate between verification and payment creates accountability. One named approver confirms the run is reconciled and authorises payment. This one control prevents a surprising number of errors, because it forces a final look.

## Stage 5: Publish

Once approved, generate the outputs:

- The bank file (NEFT or RTGS) for disbursement.
- Payslips for employees.
- The GL journal for finance.
- The statutory returns and challans (ECR, ESI, PT, and the TDS challan), filed by their due dates.

## Building it repeatable

The more of this the system does automatically, the fewer late nights and the fewer errors. The goal is a cycle where inputs flow in from attendance and leave, computation is one click, verification is a clear grid, sign-off is deliberate, and outputs are generated rather than assembled.

## Common mistakes to avoid

- Not freezing attendance before computing.
- Skipping the verify step.
- No single approver, so no accountability.
- Missing a statutory due date after disbursement.

## Frequently asked questions

**When should payroll be locked?** After sign-off; later changes go into the next cycle or an off-cycle run.

**What is an off-cycle run?** A separate run for a held employee or a correction, outside the main monthly cycle.

**How do we handle a held salary?** Hold at verify with a reason, pay the rest, and settle the held employee in an off-cycle run.

## Key takeaways

- Payroll is a five-stage cycle: inputs, compute, verify, approve, publish.
- Freeze inputs and check LOP and joiners and leavers carefully.
- Verify by comparing net to last month before paying.
- A single sign-off gate creates accountability.

NeevHR runs exactly this five-stage cycle, with a verify grid that compares net movements, a sign-off gate, and ready outputs for the bank and the authorities.`,
  },
  {
    slug: "attendance-and-overtime-rules-in-india",
    title: "Attendance and overtime rules in India under the OSH Code",
    excerpt:
      "Working hours, overtime at twice the rate, the quarterly cap, weekly holidays and annual leave under the OSH Code, and what a clean day-close needs.",
    category: "time",
    author: "NeevHR Team",
    publishedAt: "2026-09-16",
    body: `Attendance is where payroll accuracy begins: if the day records are wrong, pay, overtime and statutory figures are wrong too. Since 21 November 2025 working hours, overtime, weekly holidays and annual leave in factories and covered establishments are governed by the Occupational Safety, Health and Working Conditions Code, 2020 (the OSH Code), which replaced the Factories Act, 1948, with the details set by state rules. Shops and commercial establishments also follow their state Shops and Establishments Act.

## Working hours and overtime under the OSH Code

| Rule | Position under the Code |
| --- | --- |
| Daily hours | No worker may be required to work more than 8 hours a day |
| Weekly hours and spread-over | As notified by the appropriate Government in its rules |
| Overtime | Paid at twice the ordinary rate of wages, with the worker's consent |
| Overtime limit | A quarterly cap as notified in the state rules |
| Weekly holiday | At least one day off in every seven |
| Annual leave | One day for every 20 days worked, once the worker has worked 180 days in a calendar year |
| Women at night | Permitted with consent and the safety conditions the government prescribes |

The 180-day threshold for annual leave is lower than the 240 days under the Factories Act. Check the quarterly overtime cap and the weekly limit in your state's rules; several states have notified their own figures.

## What a clean day-close needs

Turning raw punches into a payroll-ready day means applying the same rules to everyone:

| Element | What to configure |
| --- | --- |
| Grace period | How late an in-punch can be before it counts as late |
| Half-day and short-day | The hours that trigger each |
| Overtime | When it starts, the rate, consent and the quarterly cap |
| Weekly off and holidays | How they interact with attendance and pay |
| Regularisation | Who can fix a missed punch, and the approval path |

## Shift work and rosters

Rotating and night shifts add rules: minimum rest between shifts, limits on consecutive days, the weekly limit and the conditions for women on night shifts. Check coverage and working-time compliance before a roster is published, so you neither understaff a shift nor quietly breach a rest rule. Night allowances and shift premiums must reach payroll correctly. See our guide to [shift management and rostering](/blog/shift-management-and-rostering) and [night shifts for women employees](/blog/night-shift-women-employees).

## Pay at risk

The most useful thing attendance can tell you before payroll is where pay is at risk. Unjustified absences and missing punches become loss of pay unless regularised. Surfacing them while there is still time to approve a regularisation avoids a smaller payslip at month end. See [loss of pay calculation](/blog/loss-of-pay-lop-calculation).

## Biometric, mobile and field capture

Factory and office staff punch on biometric terminals; distributed teams use mobile check-in; field staff use geofenced attendance. Whatever the method, punches must deduplicate and map to the right employee and shift before the day closes. See [biometric attendance integration](/blog/biometric-attendance-integration).

## Common mistakes

- Paying overtime at the single rate, or without consent.
- Ignoring the quarterly overtime cap in the state rules.
- Applying the old 240-day rule for annual leave.
- Breaching rest and consecutive-day rules in rosters.
- Discovering loss of pay only after payroll is computed.

## FAQs

**Is overtime always at twice the rate?** For workers covered by the OSH Code, yes. Shops and establishments follow their state Act, which usually also sets twice the rate.

**What is the quarterly overtime limit?** The figure in your state's rules under the OSH Code. Check the current notification.

**Can employees fix their own missed punches?** Through a regularisation request that a manager approves, not by editing attendance.

**When does annual leave start?** After 180 days of work in a calendar year, at one day for every 20 days worked.

## Key takeaways

- Working hours and overtime are now under the OSH Code, with details in state rules.
- 8 hours a day, overtime at twice the rate with consent, a quarterly cap as notified.
- Annual leave after 180 days at one day per 20 days worked.
- A configurable day-close and early pay-at-risk prevent payroll surprises.

NeevHR ingests biometric, mobile and field punches, applies a configurable day-close with grace, half-day and overtime rules, checks overtime against the configured cap, and shows pay at risk before payroll closes. See [attendance management](/features/attendance) and the [overtime calculator](/tools/overtime-calculator).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
  {
    slug: "probation-and-confirmation-best-practices",
    title: "Probation and confirmation: getting it right",
    excerpt:
      "How to set a fair probation, what to assess, why a structured confirmation beats a silent auto-confirm, and how to handle extensions kindly.",
    category: "hr-strategy",
    author: "NeevHR Team",
    publishedAt: "2026-09-17",
    body: `Probation is the window to confirm that a new hire is the right fit, for both the company and the employee. Handled well, it improves hiring quality and reduces early attrition. Handled as a date that quietly passes, it wastes the single best opportunity to correct a hiring decision before it becomes expensive.

## Setting the period

Probation is commonly 90 days, though it varies by role and level. Some organisations use longer probation for senior or specialised roles. Whatever the length, the period and its terms, including the possibility of an extension, should be clear in the appointment letter, so there are no surprises later.

Two Labour Code points apply. The OSH Code, 2020 requires an appointment letter for every employee, so put the probation period and its terms in it. Industrial establishments with 300 or more workers need standing orders under the Industrial Relations Code, 2020, and the model standing orders cover probation, so the policy must not contradict them. See [standing orders under the IR Code](/blog/standing-orders-industrial-relations-code).

## What to assess

A good confirmation decision looks at more than whether the person showed up. Define a short, honest set of criteria up front, and share them with the manager:

- Role competence: can the person do the core job well.
- Reliability: attendance, ownership and follow-through.
- Collaboration: how they work with the team.
- Alignment: fit with the company's values and ways of working.

A simple structured feedback form from the manager, a few days before probation ends, turns a gut call into a documented decision.

## The confirmation decision

There are three honest outcomes: confirm, extend, or part ways. A structured process, with a manager recommendation and an HR review, is fairer and safer than a silent auto-confirm. It gives a struggling hire a clear signal and a chance to improve, and it protects the company with documentation if a separation is needed.

| Outcome | When it fits |
| --- | --- |
| Confirm | The hire clearly meets the criteria |
| Extend | The decision genuinely needs more time; do this once, with clear goals |
| Exit | The fit is not there despite support and feedback |

## Communicate it, whatever the outcome

Whatever the decision, tell the employee. A confirmation letter is a small moment that signals the company is organised and values the person. An extension conversation, held early and kindly with specific goals, gives a struggling hire a real chance rather than a shock at the end. And an exit, handled with respect, protects everyone's dignity.

## Common mistakes to avoid

- Letting the probation date pass with a silent auto-confirm.
- Assessing only attendance, not competence and fit.
- Extending repeatedly instead of making a decision.
- Not communicating the outcome in writing.

## Frequently asked questions

**How long should probation be?** Commonly 90 days, longer for senior roles, with one extension if genuinely needed.

**Can probation be extended indefinitely?** No; repeated extensions are a sign the decision is being avoided.

**Is a confirmation letter necessary?** It is good practice and a clear record for both sides.

## Key takeaways

- Probation is the best chance to correct a hire before it becomes costly.
- Assess competence, reliability, collaboration and alignment, not just attendance.
- Confirm, extend once, or exit, and document the decision.
- Communicate the outcome in writing.

NeevHR makes probation a configurable period, prompts the manager for structured feedback before it ends, and supports a confirm, extend or exit decision, so the date never just slips by.

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 03 Nov 2026.*`,
  },
];
