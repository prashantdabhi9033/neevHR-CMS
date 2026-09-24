import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "esi-eligibility",
  title: "ESI eligibility: who is covered and when coverage starts and stops",
  excerpt:
    "Which establishments and employees ESI covers, the ₹21,000 wage limit, contribution periods, the mid-period rule and scenarios for increments and new joiners.",
  category: "compliance",
  author: "NeevHR Team",
  publishedAt: "2026-09-24",
  body: `ESI covers employees earning gross wages of up to ₹21,000 a month (₹25,000 for persons with disability) in establishments with 10 or more employees in areas where the scheme is notified. Eligibility is tested at the start of each six-month contribution period (April to September and October to March). An employee covered at the start stays covered until that period ends, even if an increment takes wages above the limit. A new joiner earning within the limit is covered from the day they join.

Our [ESI overview](/blog/esi-explained-eligibility-benefits-contribution) explains the benefits and rates. This article goes deeper on the eligibility rules and the edge cases that decide whether a particular employee should have ESI deducted this month.

## Which establishments are covered

The first question is whether the establishment is covered at all. Per [ESIC](https://www.esic.gov.in/), the scheme applies to:

- **Non-seasonal factories employing 10 or more persons.**
- **Other establishments by notification.** State governments have extended coverage to shops, hotels, restaurants, cinemas, road motor transport undertakings, newspaper establishments, private medical and educational institutions employing 10 or more persons in many states. Where the Central Government is the appropriate government, coverage has been extended to sectors such as insurance, NBFCs, port trusts, airports and warehousing, some with a 20-person threshold.
- **Notified areas only.** The scheme is implemented district by district. Most districts are notified, some only partially (for example, the district headquarters and main industrial centres), and a few not yet. Check ESIC's district-wise notification status for each location.

Under the Code on Social Security, 2020, in force since 21 November 2025, ESI applies to establishments with 10 or more employees and can be extended by notification, including to hazardous occupations with even one employee. The ESI regulations continue to operate under the Code's transition provisions until replaced. State notifications still matter, so confirm coverage with the ESIC regional office for each state you operate in.

Once covered, an establishment remains covered even if headcount later falls below the threshold.

## Which employees are covered

Within a covered establishment, an employee is covered if their wages are within the limit:

| Category | Monthly wage limit for coverage |
| --- | --- |
| Employees generally | ₹21,000 |
| Persons with disability | ₹25,000 |

The limit has been ₹21,000 since 1 January 2017 and was not changed when the EPF ceiling was raised to ₹25,000 in September 2026. The two tests are independent: PF looks at Basic plus DA against ₹25,000, while ESI looks at a much broader wage figure against ₹21,000.

**What counts as wages.** ESI uses gross wages, not Basic. Regular allowances count. Under the Code on Social Security, the uniform definition of wages applies, including the rule that excluded components above 50% of total remuneration are added back. Two points from ESIC's own guidance are especially practical:

- **Overtime** counts for calculating contributions, but not for deciding coverage.
- **Annual bonus and incentives** paid at intervals of more than two months are not treated as wages for contribution.

Contract workers engaged through a contractor on your premises are also covered. The principal employer is liable if the contractor does not pay.

## Contribution periods and the mid-period rule

| Contribution period | Corresponding cash benefit period |
| --- | --- |
| 1 April to 30 September | 1 January to 30 June of the following year |
| 1 October to 31 March | 1 July to 31 December of the following year |

The rule that trips up payroll teams: **coverage is decided at the start of the contribution period and holds until its end.** An employee covered on 1 April remains covered until 30 September, even if wages cross ₹21,000 in June. Contributions continue on the actual wages paid for those months. The employee drops out only from the start of the next period, 1 October, if wages are then above the limit. A May 2026 notification under the Code confirmed this treatment.

For a new joiner, the first contribution period starts on the date of joining and ends with the current period.

Contributions (0.75% employee and 3.25% employer) are due within 15 days of the end of the month. ESIC rounds contributions up to the next higher rupee.

## Low-wage employees exempt from the employee share

Employees whose average daily wage is up to ₹176 are exempt from paying the employee's 0.75%. They remain covered and entitled to benefits, and the employer still pays its 3.25%.

## Worked scenarios

### Scenario 1: increment crosses the limit mid-period

Priya earns ₹20,000 gross from 1 April 2026. Her increment takes gross to ₹23,000 from 1 July 2026.

| Months | Gross | Employee 0.75% | Employer 3.25% |
| --- | --- | --- | --- |
| April to June | ₹20,000 | ₹150 | ₹650 |
| July to September | ₹23,000 | ₹172.50, rounded to ₹173 | ₹747.50, rounded to ₹748 |
| From October | ₹23,000 | Not covered | Not covered |

For July to September, contributions total ₹519 from Priya (3 × ₹173) and ₹2,244 from the employer (3 × ₹748). Stopping deductions in July would leave a shortfall of that amount plus interest.

### Scenario 2: new joiner mid-month

Arjun joins on 10 November 2026 at ₹18,000 gross a month. He is covered from day one, and his first contribution period runs from 10 November 2026 to 31 March 2027. For November he is paid for 21 of 30 days: ₹18,000 × 21 ÷ 30 = ₹12,600.

- Employee: 0.75% of ₹12,600 = ₹94.50, rounded to ₹95
- Employer: 3.25% of ₹12,600 = ₹409.50, rounded to ₹410

Medical benefit is available from joining; cash benefits depend on contribution conditions.

### Scenario 3: overtime in a month

Meena's fixed gross is ₹19,500. In August she earns ₹3,000 overtime, so wages paid are ₹22,500.

- Employee: 0.75% of ₹22,500 = ₹168.75, rounded to ₹169
- Employer: 3.25% of ₹22,500 = ₹731.25, rounded to ₹732

She stays covered. Overtime is included for contributions but excluded when testing coverage, so at the next period start her wages for the test are ₹19,500.

### Scenario 4: exactly at the limit

Rahul's gross is ₹21,000 on 1 October. "Up to ₹21,000" includes ₹21,000, so he is covered: ₹157.50 rounded to ₹158 from him, and ₹682.50 rounded to ₹683 from the employer.

### Scenario 5: employee with a disability

Farhan, a person with disability, earns ₹24,000. His limit is ₹25,000, so he is covered: ₹180 employee and ₹780 employer.

### Scenario 6: low daily wage

A part-time employee earns ₹5,000 for a 30-day month, an average of about ₹166.67 a day, which is below ₹176. No employee share is deducted; the employer pays 3.25% of ₹5,000 = ₹162.50, rounded to ₹163.

Try other figures with our [ESI calculator](/tools/esi-calculator).

## Registering an insured person

Every covered employee must be registered as an insured person (IP) on the ESIC employer portal, generally within 10 days of joining. The portal generates the insurance (IP) number and an e-Pehchan card. The employee should add family details so dependants can access medical benefit. If the employee was previously covered with another employer, reuse the existing IP number rather than creating a new one, just as you would with a PF UAN.

## Common mistakes

- **Testing coverage on Basic instead of gross.** ESI uses gross wages.
- **Stopping ESI in the month of an increment.** Coverage continues to the end of the contribution period.
- **Counting overtime for the coverage test.** It counts for contributions only.
- **Missing a location.** Opening an office in a new district without checking whether it is notified, or assuming coverage stops at a state border.
- **Creating duplicate IP numbers** for rejoiners or employees with prior ESI coverage.
- **Deducting 0.75% from exempt low-wage employees.**
- **Ignoring contract labour.** The principal employer carries the liability if the contractor defaults.

## FAQs

**When does an employee stop being covered?** From the start of the next contribution period after their wages exceed the limit, that is 1 October or 1 April. Not in the month the increment takes effect.

**Does the new ₹25,000 EPF ceiling change ESI?** No. ESI's ₹21,000 limit is separate and unchanged.

**Is ESI deducted on arrears and overtime?** Overtime is included in contribution wages. For arrears and other irregular payments, the treatment depends on the nature and periodicity of the payment, so check ESIC guidance for your case.

**Do we need ESI if we have 8 employees?** Generally not, unless a notification covers your establishment type with a lower threshold. Confirm with the ESIC regional office for your state.

## How NeevHR helps

NeevHR computes ESI on gross wages in each [payroll](/payroll) run, alongside PF, PT, LWF and TDS, and generates the ESIC contribution file and challan for the employer to upload and pay on the ESIC portal. Increments, arrears and overtime come through the same effective-dated employee record and [attendance](/features/attendance) data, so contribution wages follow what was actually paid. Explore the [compliance features](/features/compliance) or [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 24 Sep 2026.*`,
};

export default post;
