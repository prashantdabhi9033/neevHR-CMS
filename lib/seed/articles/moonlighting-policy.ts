import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "moonlighting-policy",
  title: "Moonlighting policy in India: the law, dual jobs and clauses",
  excerpt:
    "How to write a moonlighting policy in India: what the law says, dual employment vs side work, PF and TDS signals, disclosure-based rules and sample clauses.",
  category: "hr-strategy",
  author: "NeevHR Team",
  publishedAt: "2026-10-27",
  body: `Moonlighting means an employee doing a second job or running a side business alongside their main employment. No single Indian law bans moonlighting for private-sector employees, so whether it is allowed depends mainly on the employment contract and company policy, though older factory and some state shop laws restricted double employment for certain workers. The best moonlighting policy is disclosure-based: it allows outside work that does not compete, create a conflict of interest, misuse confidential information or company resources, or eat into working hours, and it requires approval before the work starts.

This guide covers what the law says, the difference between moonlighting and dual employment, how dual employment comes to light, how to design a disclosure-based policy, sample clauses and how to handle a breach. For where the policy fits in your handbook, see [HR policies to include in an employee handbook](/blog/employee-handbook-hr-policies-india), and for checks at hiring, [employee background verification](/blog/employee-background-verification-india).

## What is moonlighting, and what is dual employment?

The terms are often used loosely. Separate them, because the right response differs.

| Type of outside work | Example | Typical risk |
| --- | --- | --- |
| Second full-time job (dual employment) | Working full time for two IT companies, often remotely | Breach of exclusivity, time theft, confidentiality |
| Freelance work in the same field | A developer taking paid projects from a competitor's client | Conflict of interest, IP ownership, competition |
| Unrelated side work | Weekend tuition, a home bakery, ride-hailing on Sundays | Usually low, if outside working hours |
| Teaching, writing, speaking | Guest lectures, paid articles, a book | Low, unless it uses confidential material |
| Own business or startup | Co-founding a company while employed | Competition, time, IP, solicitation of staff |
| Directorship or advisory role | Independent director or adviser to another company | Conflict of interest, time, disclosure obligations |
| Family business | Helping in a family shop | Low, unless competing |
| Content creation | A YouTube channel or paid social media posts | Brand, confidentiality, endorsements |

Dual employment, two concurrent jobs each expecting full working time, is what most employers worry about. Unrelated weekend work is a different matter and a blanket ban on it is hard to justify.

## Is moonlighting legal in India?

There is no general statute that prohibits or permits moonlighting for private-sector employees. The position comes from a few sources:

| Source | Position |
| --- | --- |
| Employment contract | The main source. A clause requiring exclusive service during employment is generally enforceable |
| Indian Contract Act, 1872 | Section 27 makes agreements in restraint of trade void. Courts have generally upheld restrictions that operate during employment, while post-employment non-competes are generally not enforceable |
| Factories Act, 1948 (historic) | Restricted an adult worker from working in a factory on a day on which they had already worked in another factory, except as permitted. Factories are now governed by the OSH Code; check how this restriction is carried into the Code and your state rules |
| State Shops and Establishments Acts | Some have restricted employees from working elsewhere on their weekly off or holidays, or beyond permitted hours. Check your state's Act |
| Standing orders | Model standing orders and certified standing orders often treat taking up employment elsewhere without permission as misconduct |
| Confidentiality and IP law | Duties not to misuse confidential information and assignment of work-related IP apply regardless of moonlighting |

So moonlighting is lawful unless the contract, standing orders or a specific statute prohibits it, and confidentiality and IP obligations always apply. If your appointment letter says nothing, you will struggle to discipline someone for unrelated weekend work. Our guide to [offer letters and appointment letters](/blog/offer-letter-vs-appointment-letter) covers where the clause belongs.

## How does dual employment come to light?

Most cases surface through statutory systems rather than surveillance.

- **PF and UAN.** An employee has one UAN, with a member ID for each establishment. Two employers contributing for the same wage months to the same UAN, or a joiner whose previous membership shows no exit date, is a strong signal. Employers do not get a general view of an employee's other PF accounts, so this usually emerges through the employee's own records, a background check done with consent, or a transfer claim. See [UAN explained](/blog/uan-explained).
- **Income tax.** An employee working for two employers at the same time can give one employer details of the other salary so that TDS is computed on the total. If neither employer is told, each applies the slabs, the standard deduction and possibly the rebate as if it were the only one, and the shortfall shows up when the employee files the return.
- **Attendance and output.** Repeated unavailability during core hours, camera-off meetings, missed deadlines and logins that do not match work patterns are indicators, not proof.
- **Background verification.** Employment checks that find overlapping dates, or a relieving letter that does not match.

### Worked example: the TDS gap that exposes dual employment

Arjun works full time for Employer A at ₹10,00,000 a year and for Employer B at ₹8,00,000 a year, in the new regime for tax year 2026-27. He tells neither employer about the other.

| Item | Employer A alone | Employer B alone | Combined |
| --- | --- | --- | --- |
| Salary | ₹10,00,000 | ₹8,00,000 | ₹18,00,000 |
| Less standard deduction | ₹75,000 | ₹75,000 | ₹75,000 (allowed once) |
| Taxable income | ₹9,25,000 | ₹7,25,000 | ₹17,25,000 |
| Tax after rebate | Nil (below ₹12 lakh) | Nil (below ₹12 lakh) | See below |

On ₹17,25,000: nil on the first ₹4,00,000, then ₹20,000 (5% of ₹4,00,000), ₹40,000 (10% of ₹4,00,000), ₹60,000 (15% of ₹4,00,000) and ₹25,000 (20% of ₹1,25,000), a total of ₹1,45,000. Add 4% cess of ₹5,800, and the tax is ₹1,50,800, with no TDS deducted by either employer. The demand at filing time is often how employees, and sometimes employers, find out. For how employers compute TDS, see [salary TDS explained](/blog/salary-tds-explained), or test the numbers in our [TDS calculator](/tools/tds-calculator).

## Should you ban moonlighting or allow it?

| Approach | How it works | Pros | Cons |
| --- | --- | --- | --- |
| Total ban | No outside paid work of any kind | Simple to state | Hard to justify for unrelated work; drives it underground; weak with younger talent |
| Disclosure and approval | Outside work allowed if disclosed and approved against clear criteria | Surfaces conflicts early; fair; enforceable | Needs a review process and records |
| Permissive | Anything outside working hours that does not compete | Attractive to talent | Conflicts discovered late; weak control over IP |

For most mid-sized Indian employers, disclosure and approval is the right balance. Prohibit dual full-time employment and competing work outright, and approve the rest case by case.

## How do you design a disclosure-based moonlighting policy?

Build it around six decisions:

1. **What is always prohibited.** Concurrent full-time or part-time employment with another employer; any work for a competitor, client or vendor; work that uses company time, equipment, systems or confidential information.
2. **What needs approval.** Freelance or consulting work, directorships and advisory roles, own businesses, and paid teaching or content work related to your industry.
3. **What only needs disclosure.** Unrelated, small-scale activities outside working hours, such as tuition or a family business, if your culture prefers lighter touch.
4. **Who approves.** The reporting manager and HR, with legal or compliance for directorships and anything touching clients or competitors.
5. **Conditions of approval.** Outside working hours, no use of company assets, no solicitation of colleagues or clients, IP created for the company belongs to the company, and re-disclosure if the activity changes.
6. **Annual declaration.** Every employee confirms each year that their outside activities are disclosed and unchanged.

Apply the policy equally across grades, and decide in advance how roles with special sensitivity, such as finance, sales and engineering leads, are treated.

## Sample policy clauses

Adapt these to your business and take advice before adopting them.

1. **Exclusive service.** During employment, you shall devote your full working time to the company and shall not take up any other employment, full time or part time, paid or unpaid, without the prior written approval of the company.
2. **Outside activities.** You may undertake outside activities that do not conflict with your duties, provided you disclose them in advance through the outside activity declaration and receive written approval where this policy requires it.
3. **Prohibited activities.** You shall not work for, advise or hold an interest in any competitor, client or vendor of the company, or use company time, equipment, systems or confidential information for any outside activity.
4. **Intellectual property.** Any work, invention or material created in the course of your employment, or using company resources, belongs to the company.
5. **Declaration.** You shall confirm your outside activities annually and update your declaration within 15 days of any change.
6. **Breach.** Undisclosed outside employment or a breach of this policy is misconduct and may lead to disciplinary action, up to termination of employment, after due process.

## How should you handle a suspected breach?

Treat it as any other disciplinary matter. Gather facts first; a PF or TDS signal is a reason to ask, not a finding. Issue a show cause notice that states the specific facts and the clause breached, give the employee a fair chance to explain, and where a major penalty is likely, follow the [domestic enquiry procedure](/blog/disciplinary-action-domestic-enquiry). Calibrate the outcome: a sales manager secretly working full time for a competitor is in a different category from an engineer who forgot to disclose weekend tuition.

Any monitoring you use to investigate, such as reviewing system logs, involves personal data. Tell employees in your privacy notice what is monitored and why, keep it proportionate, and follow the [DPDP Act](/blog/dpdp-act-2023-for-hr-teams).

## Common mistakes

- Relying on a policy that the appointment letter never incorporates.
- Banning every outside activity, then ignoring the ban until a dispute arises.
- Treating a PF overlap as proof without asking the employee.
- Terminating without a show cause notice or enquiry.
- Forgetting to cover directorships and startup roles.
- Never collecting annual declarations, so the disclosure system decays.

## FAQs

**Is moonlighting illegal in India?** Not as a general rule for private-sector employees. It becomes a problem when the contract, standing orders or a specific law prohibits it, or when it breaches confidentiality or creates a conflict of interest.

**Can an employer terminate an employee for moonlighting?** Yes, if the contract or policy prohibits the outside work and the breach is established through a fair process, such as a show cause notice and, for a major penalty, an enquiry.

**Can an employer find out about a second job through PF?** Overlapping contributions to the same UAN from two employers are a signal, but employers do not get a general view of an employee's other PF accounts. It usually surfaces through background checks, transfer claims or the employee's own disclosure.

**Is freelancing allowed while employed full time?** Only if your contract and policy allow it. A disclosure-based policy usually permits freelancing that does not compete or use company resources, with prior approval.

**Does a moonlighting policy apply to work done on weekends?** Yes, for the restrictions on competition, conflict and confidentiality. Many policies only require disclosure, not approval, for unrelated weekend work.

## How NeevHR helps

NeevHR [documents](/features/documents) publishes your moonlighting policy to employee groups and tracks each acknowledgement, and [onboarding](/features/onboarding) asks joiners to read and acknowledge policies before they start. [Employee records](/features/employees) support custom fields, so an outside activity declaration can sit on the record with field-level visibility by role. To see policy acknowledgement in action, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 27 Oct 2026.*`,
};

export default post;
