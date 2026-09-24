// State payroll guides (SEO spec §12). Each state carries genuinely
// state-specific content with sources and a review date; no page is the same
// template with the name swapped. Figures come from state PT / LWF sources
// researched on 24 Sep 2026; anything not confirmed is described, not quoted.

export type StateGuide = {
  slug: string;
  name: string;
  reviewed: string;
  reviewedIso: string;
  summary: string;
  pt: {
    body: string[];
    slabHead?: string[];
    slabs?: string[][];
    facts?: string[][];
  };
  lwf: { body: string[]; facts?: string[][] };
  minWage: string[];
  other: string[];
  /** Only what NeevHR verifiably does for this state. */
  neevhr: string[];
  faqs: { q: string; a: string }[];
  sources: { label: string; href: string }[];
};

const R = "24 Sep 2026";
const RI = "2026-09-24";

const COMMON_NEEVHR = [
  "PT and LWF follow each employee's work location on the effective-dated record.",
  "State slab and LWF tables are configurable settings, so a rate change is a settings update.",
  "PT and LWF challan data is produced from the published payroll run.",
];

export const statesA: StateGuide[] = [
  {
    slug: "gujarat",
    name: "Gujarat",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Gujarat levies professional tax of ₹200 a month on salaries above ₹12,000, with no February top-up. Labour Welfare Fund is half-yearly, deducted from June and December wages.",
    pt: {
      body: [
        "Professional tax in Gujarat is levied under the Gujarat State Tax on Professions, Trades, Callings and Employments Act, 1976. It is collected by the municipal corporation, municipality or district panchayat for its area, and by the Commercial Tax Department elsewhere, so a city employer usually deals with the municipal corporation's PT department.",
        "The salary slab has been flat since 1 April 2022: nothing up to ₹12,000 a month and ₹200 a month above it. There is no gender slab and no higher February deduction, so the maximum is ₹2,400 a year.",
      ],
      slabs: [
        ["Up to ₹12,000", "Nil"],
        ["More than ₹12,000", "₹200"],
      ],
      facts: [
        ["Employer registration", "Registration Certificate (RC), needed even for one employee; a separate RC for each branch"],
        ["Entity enrolment", "Enrolment Certificate (EC) for companies, firms and professionals, with an annual tax"],
        ["Payment, 20 or more employees", "Monthly, by the 15th of the following month, with Form 5"],
        ["Payment, fewer than 20 employees", "Quarterly, by the 15th after the quarter, with an annual return"],
      ],
    },
    lwf: {
      body: [
        "Gujarat's Labour Welfare Fund is collected under the Gujarat Labour Welfare Fund Act, 1953 for employees on the register in June and December. The employer deducts the employee share from June and December wages and pays both shares online to the Gujarat Labour Welfare Board.",
        "The commonly applied rates are ₹6 per employee and ₹12 per employer each half-year. The Act allows the employee rate to be raised to ₹6 by notification; confirm the current rate with the Board.",
      ],
      facts: [
        ["Contribution", "₹6 employee, ₹12 employer, per half-year"],
        ["Deduction months", "June and December"],
        ["Due dates", "Before 15 July and 15 January"],
        ["Payment", "Online only since 1 July 2022"],
      ],
    },
    minWage: [
      "Minimum wages are fixed per scheduled employment by zone and skill, plus a Special Allowance revised every six months, for 1 April to 30 September and 1 October to 31 March.",
      "The Labour Commissioner's notice for 1 April to 30 September 2026 sets the Special Allowance at ₹60.50 a day for most scheduled employments and ₹146 a day for six employments including agriculture, garments and brick manufacturing. A new revision is due from 1 October 2026; check the Labour Commissioner's website for current rates.",
    ],
    other: [
      "Gujarat Shops and Establishments Act, 2019, as amended with effect from 16 December 2025: the Act now applies to establishments with 20 or more workers, the working day is up to 10 hours and overtime is capped at 144 hours a quarter, paid at twice the ordinary rate.",
      "Women may work between 9 pm and 6 am with consent and prescribed safeguards, including transport and protection from sexual harassment.",
      "Do not copy the February ₹300 rule used by Maharashtra and Karnataka; Gujarat has none.",
    ],
    neevhr: [
      ...COMMON_NEEVHR,
      "Gujarat's flat ₹200 monthly PT and half-yearly June and December LWF are supported cadences.",
    ],
    faqs: [
      { q: "What is the professional tax in Gujarat?", a: "₹200 a month for salaries above ₹12,000; nothing at or below ₹12,000. There is no February top-up." },
      { q: "When is Gujarat LWF deducted?", a: "From June and December wages, paid by the employer before 15 July and 15 January." },
    ],
    sources: [
      { label: "Gujarat Commercial Tax: PT rates", href: "https://commercialtax.gujarat.gov.in/vatwebsite/download/schedule/Rate_of_Profession_Tax.pdf" },
      { label: "Gujarat Labour Welfare Board", href: "https://glwb.gujarat.gov.in" },
      { label: "Labour Commissioner, Gujarat", href: "https://col.gujarat.gov.in" },
    ],
  },
  {
    slug: "maharashtra",
    name: "Maharashtra",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Maharashtra professional tax differs for men and women and reaches ₹2,500 a year with ₹300 in February. Monthly PT returns are now due on the 15th, and LWF is ₹25 and ₹75 each half-year.",
    pt: {
      body: [
        "Professional tax is levied under the Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975 and administered by the Maharashtra GST Department. Employers hold a PTRC (registration certificate) for tax deducted from salaries; entities and directors also pay PTEC (enrolment) tax.",
        "Maharashtra has the country's best-known gender-differentiated slab. Since 1 April 2023, women earning up to ₹25,000 a month pay nothing.",
        "A notification dated 28 February 2026 moved due dates: the monthly return is due by the 15th of the month following the salary month (previously the last day), and the annual return by 15 March (previously 31 March). Many published guides still show the old dates.",
      ],
      slabHead: ["Employee and monthly salary", "PT"],
      slabs: [
        ["Men, up to ₹7,500", "Nil"],
        ["Men, ₹7,501 to ₹10,000", "₹175 a month"],
        ["Men, above ₹10,000", "₹200 a month, ₹300 in February"],
        ["Women, up to ₹25,000", "Nil"],
        ["Women, above ₹25,000", "₹200 a month, ₹300 in February"],
      ],
      facts: [
        ["Exemptions (section 27A)", "Includes persons with benchmark disability and parents of a child with benchmark disability, and Central Armed Police Forces members; check the Act for the full list"],
        ["Return frequency", "Monthly if the previous year's liability was ₹1,00,000 or more; annual if less"],
        ["Payment", "Challan MTR-6 before the e-return"],
      ],
    },
    lwf: {
      body: [
        "Under the Maharashtra Labour Welfare Fund Act, 1953, as amended in 2024, the employee contributes ₹25 and the employer ₹75 each half-year. The contribution is deducted only from June and December wages for employees on the register on 30 June and 31 December.",
        "It applies to factories and establishments employing five or more persons. Managerial staff and supervisors drawing more than ₹3,500 a month are excluded.",
      ],
      facts: [
        ["Contribution", "₹25 employee, ₹75 employer, per half-year"],
        ["Deduction months", "June and December"],
        ["Due dates", "Before 15 July and 15 January"],
        ["Coverage", "5 or more persons"],
      ],
    },
    minWage: [
      "Minimum wages are fixed for about 60 scheduled employments across three zones and skill levels, plus a Special Allowance revised on 1 January and 1 July. The Special Allowance for July to December 2026 is reported as notified in August 2026; confirm it on the Commissioner of Labour's website, which can lag.",
      "Draft Maharashtra Code on Wages Rules, 2026 were published on 28 April 2026. Until final rules are notified, check which rules your establishment follows.",
    ],
    other: [
      "Maharashtra Shops and Establishments Act, 2017: an amendment ordinance effective 1 October 2025 raised the applicability threshold to 20 employees, the working day to 10 hours and the overtime cap to 144 hours a quarter at twice the ordinary rate. Confirm the status of the replacement Bill.",
      "The mahagst.gov.in website was migrated in 2026 and many older links no longer work; use the current Acts, rules and notifications listings.",
    ],
    neevhr: [
      ...COMMON_NEEVHR,
      "The February ₹300 PT levy and half-yearly June and December LWF are supported.",
      "PT slabs can be set separately for women, so the nil PT for women earning up to ₹25,000 is applied from the employee record.",
    ],
    faqs: [
      { q: "Is professional tax different for women in Maharashtra?", a: "Yes. Women earning up to ₹25,000 a month pay no PT. Above that, the same ₹200 a month and ₹300 in February applies as for men." },
      { q: "When is Maharashtra PT due?", a: "Since the 28 February 2026 amendment, the monthly return is due by the 15th of the following month and the annual return by 15 March." },
      { q: "What is Maharashtra LWF?", a: "₹25 from the employee and ₹75 from the employer, deducted from June and December wages and paid before 15 July and 15 January." },
    ],
    sources: [
      { label: "Maharashtra GST: PT notifications", href: "https://www.mahagst.gov.in/en/profession-tax-and-allied-acts-notifications" },
      { label: "Maharashtra Labour Welfare Board", href: "https://public.mlwb.in" },
      { label: "Commissioner of Labour, Maharashtra", href: "https://mahakamgar.maharashtra.gov.in" },
    ],
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Karnataka professional tax is ₹200 a month from ₹25,000 salary, with ₹300 in February from 2025-26. LWF is annual, ₹50 and ₹100, and now covers establishments with 10 or more people.",
    pt: {
      body: [
        "Professional tax is levied under the Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976 and paid through the Commercial Taxes Department's PT portal.",
        "Salaries below ₹25,000 a month pay nothing. From 1 April 2025, the Amendment Act, 2025 sets ₹200 a month and ₹300 in February for salaries of ₹25,000 and above, so the annual total reaches ₹2,500. February 2026 was the first month at ₹300.",
      ],
      slabs: [
        ["Below ₹25,000", "Nil"],
        ["₹25,000 and above", "₹200 a month, ₹300 in February"],
      ],
      facts: [
        ["Employer registration", "Registration Certificate (RC) on the PT portal, needed even for one employee"],
        ["Monthly statement and payment", "Form 5-A, within 20 days of the end of the month"],
        ["Annual return", "Form 5, within 60 days of the end of the year"],
      ],
    },
    lwf: {
      body: [
        "Under the Karnataka Labour Welfare Fund Act, 1965, the employee contributes ₹50, the employer ₹100 and the state ₹50 per employee each year, for employees on the register on 31 December, deducted from December wages and paid by 15 January.",
        "An amendment in force from 7 January 2026 lowers the threshold from more than 50 persons to 10 or more persons. Many smaller offices will contribute for the first time for calendar year 2026, payable by 15 January 2027.",
      ],
      facts: [
        ["Contribution", "₹50 employee, ₹100 employer, per year"],
        ["Deduction month", "December"],
        ["Due date", "15 January"],
        ["Coverage", "10 or more persons from 2026"],
      ],
    },
    minWage: [
      "Minimum wages are set by scheduled employment, zone and skill, with a variable dearness allowance revised each April.",
      "A notification dated 22 May 2026 revised basic minimum wages for 81 scheduled employments. It has been challenged in the Karnataka High Court, mainly because it was issued under the repealed Minimum Wages Act, 1948; as of late September 2026 there was no stay protecting employers. Treat rates published after 22 May 2026 as subject to the outcome of that litigation and check the Labour Department for updates.",
    ],
    other: [
      "Karnataka Shops and Commercial Establishments Act, 1961: overtime is paid at twice the ordinary rate. The Amendment Act notified on 4 September 2026 introduces digital registration with lifetime validity and requires a service certificate to be issued within seven days of it being sought.",
      "Karnataka PT has two filings, the monthly Form 5-A payment and the annual Form 5 return; do not treat it as monthly only.",
    ],
    neevhr: [
      ...COMMON_NEEVHR,
      "The February ₹300 PT levy and annual December LWF are supported.",
    ],
    faqs: [
      { q: "Does Karnataka charge ₹300 PT in February?", a: "Yes, from the 2025-26 year: ₹200 a month and ₹300 in February for salaries of ₹25,000 and above." },
      { q: "Does Karnataka LWF apply to my 15-person office?", a: "From 2026, yes: the threshold dropped to 10 or more persons. The first contribution is for calendar year 2026, due by 15 January 2027." },
    ],
    sources: [
      { label: "Karnataka PT portal FAQ", href: "https://ptax.karnataka.gov.in/ptemployer/FAQ" },
      { label: "Karnataka Commercial Taxes: PT notifications", href: "https://gst.karnataka.gov.in/Profession.aspx" },
      { label: "Karnataka Labour Welfare Board", href: "https://klwbapps.karnataka.gov.in" },
    ],
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Tamil Nadu professional tax is half-yearly and levied by local bodies, so rates vary by corporation or municipality. LWF is annual: ₹20 from the employee and ₹40 from the employer.",
    pt: {
      body: [
        "Unlike most states, Tamil Nadu's professional tax is levied by urban local bodies under the Tamil Nadu Urban Local Bodies Act, 1998 (Chapter VI-A) and the Tamil Nadu Urban Local Bodies Rules, 2023, and by village panchayats in rural areas. It is half-yearly: April to September and October to March, and the slab is based on half-yearly income.",
        "Employers deduct from the August and January salaries and pay by 30 September and 31 March with Form 14. Rates are revised by each council, so check your local body's current schedule. The Greater Chennai Corporation slab, revised from the second half of 2024-25, is shown below.",
      ],
      slabHead: ["Half-yearly income (Chennai)", "PT per half-year"],
      slabs: [
        ["Up to ₹21,000", "Nil"],
        ["₹21,001 to ₹30,000", "₹180"],
        ["₹30,001 to ₹45,000", "₹425"],
        ["₹45,001 to ₹60,000", "₹930"],
        ["₹60,001 to ₹75,000", "₹1,025"],
        ["₹75,001 and above", "₹1,250"],
      ],
    },
    lwf: {
      body: [
        "Under the Tamil Nadu Labour Welfare Fund Act, 1972, as amended in December 2022, the employee contributes ₹20, the employer ₹40 and the government ₹20 per employee each year. The deduction is made from December wages, and both shares are paid before 31 January with Form A.",
        "The Act covers factories, plantations, motor transport undertakings, catering establishments and other establishments employing five or more persons. Supervisors drawing more than ₹15,000 a month and managerial staff are excluded.",
      ],
      facts: [
        ["Contribution", "₹20 employee, ₹40 employer, per year"],
        ["Deduction month", "December"],
        ["Due date", "Before 31 January"],
        ["Payment", "Through the Board's LWMIS portal"],
      ],
    },
    minWage: [
      "Minimum wages are fixed employment by employment through Government Orders, with a dearness allowance revised each April. Rates differ by zone; check the G.O. for your employment on the Commissioner of Labour's minimum wages page.",
    ],
    other: [
      "Tamil Nadu Shops and Establishments Act, 1947: 8 hours a day and 48 a week, with overtime at twice the ordinary rate. Establishments with 10 or more persons may operate 24x7 for three years from 6 June 2025, subject to conditions including rotational weekly off and transport for women working between 8 pm and 6 am.",
      "A single statewide PT slab is wrong for Tamil Nadu: payroll must follow each local body's half-yearly schedule and deduction months.",
    ],
    neevhr: [
      "LWF follows each employee's work location, with the annual December deduction supported.",
      "State tables are configurable settings, and challan data is produced from the published payroll run.",
      "PT rules can be set per local body and tagged to each work location, with half-yearly income slabs and August and January deduction months. Half-yearly income is taken as six months of the current monthly salary.",
    ],
    faqs: [
      { q: "Why is Tamil Nadu PT different?", a: "It is levied by local bodies, not the state, on half-yearly income, and deducted from August and January salaries. Rates vary by corporation or municipality." },
      { q: "What is the maximum PT in Tamil Nadu?", a: "₹1,250 per half-year in Greater Chennai, within the constitutional cap of ₹2,500 a year." },
    ],
    sources: [
      { label: "Tamil Nadu Urban Local Bodies Rules, 2023", href: "https://www.tnurbantree.tn.gov.in/wp-content/uploads/2023/07/Rules-2023.pdf" },
      { label: "Greater Chennai Corporation: professional tax", href: "https://chennaicorporation.gov.in/gcc/online-payment/profession-tax/" },
      { label: "Tamil Nadu Labour Welfare Board", href: "https://lwb.tn.gov.in" },
      { label: "Commissioner of Labour, Tamil Nadu", href: "https://labour.tn.gov.in/minimum-wages.php" },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Delhi has no professional tax. Employers deduct a small half-yearly Labour Welfare Fund contribution, and minimum wages are revised by Labour Department order, normally every April and October.",
    pt: {
      body: [
        "The National Capital Territory of Delhi does not levy professional tax, so nothing is deducted for employees whose place of work is Delhi. PT registration is needed only for employees working in states that levy it.",
        "In the wider NCR, Haryana (Gurugram) and Uttar Pradesh (Noida) do not levy PT either.",
      ],
    },
    lwf: {
      body: [
        "Delhi applies the Bombay Labour Welfare Fund Act, 1953 as extended to the NCT. Each half-year the employee contributes ₹0.75, the employer ₹2.25 and the Government of Delhi ₹1.50, for employees on the register on 30 June and 31 December.",
        "It covers establishments employing five or more persons, excluding managerial and supervisory staff drawing more than ₹2,500. The amounts are small, but the contribution is statutory.",
      ],
      facts: [
        ["Contribution", "₹0.75 employee, ₹2.25 employer, per half-year"],
        ["Basis", "Employees on the register on 30 June and 31 December"],
        ["Due dates", "Before 15 July and 15 January"],
      ],
    },
    minWage: [
      "Delhi fixes minimum wages for unskilled, semi-skilled and skilled workers and for clerical and supervisory staff, normally revised on 1 April and 1 October. As of 24 September 2026 the latest order on the Labour Department's current minimum wage page is dated 15 April 2025, effective 1 April 2025.",
      "A fake revision order dated October 2025 circulated widely. Rely only on orders published on the Labour Department's website.",
    ],
    other: [
      "Delhi Shops and Establishments (Amendment) Act, 2026, notified on 11 March 2026: the Act now applies to establishments with 20 or more employees, allows a 10-hour working day with a 12-hour spread-over and caps overtime at 144 hours a quarter. Women may work night shifts with written consent and safeguards such as secure transport.",
    ],
    neevhr: [
      "No PT is deducted for employees whose work location is Delhi.",
      "Half-yearly LWF in paise-level amounts is supported, with June and December deductions.",
      "Employees in other NCR states get their own state's rules from their work location.",
    ],
    faqs: [
      { q: "Is there professional tax in Delhi?", a: "No. Delhi does not levy professional tax." },
      { q: "What is Delhi LWF?", a: "₹0.75 from the employee and ₹2.25 from the employer each half-year, for employees on the register on 30 June and 31 December, paid before 15 July and 15 January." },
    ],
    sources: [
      { label: "Delhi Labour Welfare Board", href: "https://dlwb.delhi.gov.in" },
      { label: "Delhi Labour Department: current minimum wages", href: "https://labour.delhi.gov.in/labour/current-minimum-wage-rate" },
    ],
  },
];
export const statesB: StateGuide[] = [
  {
    slug: "telangana",
    name: "Telangana",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Telangana levies monthly professional tax of ₹150 or ₹200 on salaries above ₹15,000, with no February top-up. LWF is a small annual contribution, and minimum wages are revised every April and October.",
    pt: {
      body: [
        "Professional tax is levied under the Telangana Tax on Professions, Trades, Callings and Employments Act, 1987. Employers hold a Certificate of Registration to deduct PT from employees and a separate Certificate of Enrolment for the entity's own tax, and file a monthly return in Form V with the challan through the state's PT portal.",
        "The monthly slab has no special February amount, so the maximum is ₹2,400 a year. Unpaid tax carries interest of 2% a month.",
      ],
      slabs: [
        ["Up to ₹15,000", "Nil"],
        ["₹15,001 to ₹20,000", "₹150"],
        ["Above ₹20,000", "₹200"],
      ],
    },
    lwf: {
      body: [
        "Under the Telangana Labour Welfare Fund Act, 1987, the employee contributes ₹2 and the employer ₹5 per employee each year, for employees on the register on 31 December, deducted from December wages. Payment is commonly made with the annual return by 31 January; confirm the date with the Labour Welfare Board.",
        "The Act covers factories, motor transport undertakings and establishments employing 20 or more persons, and excludes managerial staff, apprentices and part-time workers.",
      ],
      facts: [
        ["Contribution", "₹2 employee, ₹5 employer, per year"],
        ["Deduction month", "December"],
        ["Coverage", "20 or more persons"],
      ],
    },
    minWage: [
      "Minimum wages are notified for 74 scheduled employments, some divided into zones, with a variable dearness allowance revised every six months for 1 April to 30 September and 1 October to 31 March. Current tables are published on the Labour Department's minimum rates of wages page.",
    ],
    other: [
      "Telangana Shops and Establishments Act, 1988: wages must be paid before the fifth day after the wage period ends, and overtime is paid at twice the ordinary rate.",
      "The Act provides 15 days of leave with wages after 240 days of service, accumulating to 60 days, plus sick and casual leave of up to 12 days each.",
    ],
    neevhr: [...COMMON_NEEVHR, "Telangana's monthly PT and annual December LWF are supported cadences."],
    faqs: [
      { q: "What is professional tax in Telangana?", a: "Nil up to ₹15,000 a month, ₹150 from ₹15,001 to ₹20,000, and ₹200 above ₹20,000." },
      { q: "Is Telangana LWF monthly?", a: "No. It is annual: ₹2 from the employee and ₹5 from the employer, based on employees on the register on 31 December." },
    ],
    sources: [
      { label: "Telangana Commercial Taxes: PT schedule", href: "https://www.tgct.gov.in/tgportal/AllActs/APPT/APPTSchedule.aspx" },
      { label: "Telangana Labour Welfare Fund Act", href: "https://labour.telangana.gov.in/content/ActsRules/TELANGANA%20LABOUR%20WELFARE%20FUND%20ACT,%201987.htm" },
      { label: "Telangana minimum rates of wages", href: "https://labour.telangana.gov.in/MinRatesWages.do" },
    ],
  },
  {
    slug: "west-bengal",
    name: "West Bengal",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "West Bengal levies monthly professional tax from ₹110 to ₹200, and a new slab table has been proposed from 1 October 2026. Employers file one annual PT return; LWF is half-yearly.",
    pt: {
      body: [
        "Professional tax is levied under the West Bengal State Tax on Professions, Trades, Callings and Employments Act, 1979. Employers obtain a Certificate of Registration for deducting tax from employees, deposit the tax each month and, since 2022-23, file a single annual return after the year ends. The slab is tested on salary including perquisites, not on basic alone.",
        "The schedule below has applied since April 2014. A notification dated 18 August 2026 proposes a new employee schedule from 1 October 2026: nil up to ₹20,000, then ₹100, ₹140, ₹170 and ₹208 above ₹1,00,000. It was published as a proposal inviting objections, and a final notification had not been found at the time of review; check the Commercial Taxes website before applying it.",
      ],
      slabs: [
        ["Up to ₹10,000", "Nil"],
        ["₹10,001 to ₹15,000", "₹110"],
        ["₹15,001 to ₹25,000", "₹130"],
        ["₹25,001 to ₹40,000", "₹150"],
        ["Above ₹40,000", "₹200"],
      ],
    },
    lwf: {
      body: [
        "The West Bengal Labour Welfare Fund Act, 1974 applies half-yearly, for the periods ending 30 June and 31 December. The employee share is ₹3 per half-year; the employer share is widely reported as ₹30 per half-year from January 2024. The official LWF portal was unavailable at the time of review, so confirm the current employer rate and due dates with the Labour Department.",
      ],
      facts: [
        ["Contribution", "₹3 employee per half-year; employer reported as ₹30"],
        ["Periods", "Half-years ending 30 June and 31 December"],
      ],
    },
    minWage: [
      "Minimum wages are revised every six months, on 1 January and 1 July, through variable dearness allowance, by zone (A for urban areas, B for the rest) and skill. Circulars for July to December 2026 were issued in June 2026.",
    ],
    other: [
      "West Bengal Shops and Establishments Act, 1963: register within 30 days of starting, pay wages by the 10th of the following month, and pay overtime at twice the ordinary rate.",
      "The Act provides 14 days of privilege leave, 14 days of sick leave on half pay and 10 days of casual leave a year.",
    ],
    neevhr: [...COMMON_NEEVHR, "West Bengal's monthly PT slabs and half-yearly LWF are supported cadences; a slab change is a settings update."],
    faqs: [
      { q: "Is West Bengal PT changing in October 2026?", a: "A new schedule has been proposed from 1 October 2026. At the time of review it was still a proposal awaiting final notification, so keep applying the current slabs until the final notification is published." },
      { q: "How often do West Bengal employers file PT returns?", a: "Tax is deposited monthly, and registered employers file one annual return after the financial year ends." },
    ],
    sources: [
      { label: "West Bengal PT schedule (from 1 April 2014)", href: "https://comtax.wb.gov.in/Ptax-Schedule-New_(w.e.f._1-4-2014).pdf" },
      { label: "Proposed PT amendment, 18 August 2026", href: "https://comtax.wb.gov.in/pdf/SAR-470_Finance%20Dept(Rev)_1407-FT.pdf" },
      { label: "West Bengal Profession Tax portal", href: "https://professiontax.wb.gov.in" },
      { label: "West Bengal Labour Department", href: "https://labour.wb.gov.in" },
    ],
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Uttar Pradesh has no professional tax and no periodic Labour Welfare Fund deduction. Minimum wages were reset from 1 April 2026 into three area categories, with Noida and Ghaziabad in the highest.",
    pt: {
      body: [
        "Uttar Pradesh does not levy professional tax, so no PT is deducted for employees working in the state.",
      ],
    },
    lwf: {
      body: [
        "The Uttar Pradesh Labour Welfare Fund Act, 1965 builds its fund from fines, unpaid accumulations, grants and donations. There is no regular employee or employer contribution, so there is no LWF line on the payslip. Employers transfer fines and unpaid wages to the Board as the Act requires.",
      ],
    },
    minWage: [
      "A revision effective 1 April 2026 set minimum wages in three categories: Gautam Buddh Nagar and Ghaziabad; other municipal corporation districts; and all other districts, for unskilled, semi-skilled and skilled workers. A further dearness allowance revision is historically due in October; check the Labour Department for the current notification.",
    ],
    other: [
      "The Uttar Pradesh shops and establishments law was amended with effect from 19 November 2025: it applies to establishments with 20 or more employees, allows a 9-hour day and overtime of up to 144 hours a quarter, and includes outsourced-agency workers within the definition of employee.",
      "Statutory payroll lines for UP employees are usually PF, ESI and TDS, plus bonus and gratuity where they apply.",
    ],
    neevhr: [
      "No PT or LWF is deducted for employees whose work location is Uttar Pradesh.",
      "PF, ESI and TDS apply as usual, and the payroll exception report flags pay below the configured minimum wage.",
    ],
    faqs: [
      { q: "Is there professional tax in Uttar Pradesh?", a: "No. Uttar Pradesh does not levy professional tax." },
      { q: "Do UP employers deduct Labour Welfare Fund?", a: "No regular deduction. The UP fund is financed from fines and unpaid accumulations rather than employee and employer contributions." },
    ],
    sources: [
      { label: "UP Labour Welfare Fund Act, 1965 (PRS)", href: "https://prsindia.org/files/bills_acts/acts_states/uttar-pradesh/1965/1965UP14.pdf" },
      { label: "Uttar Pradesh Labour Department", href: "https://uplabour.gov.in" },
    ],
  },
  {
    slug: "haryana",
    name: "Haryana",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Haryana has no professional tax. Its Labour Welfare Fund is 0.2% of wages, capped at ₹35 a month for employees in 2026, with employers paying twice that.",
    pt: {
      body: [
        "Haryana does not levy professional tax, so no PT is deducted for employees working in the state, including in Gurugram.",
      ],
    },
    lwf: {
      body: [
        "Haryana applies the Punjab Labour Welfare Fund Act, 1965 (section 9A). The employee contributes 0.2% of salary, capped at ₹35 a month from January 2026, and the employer twice the employee amount, up to ₹70 a month. The cap is indexed each January.",
        "Contributions are for employees on the register on the last working day of each month. The employer pays both shares online before 31 December each year, and interest of 12% a year applies to late payment.",
      ],
      facts: [
        ["Employee", "0.2% of wages, up to ₹35 a month (2026)"],
        ["Employer", "Twice the employee amount, up to ₹70 a month"],
        ["Remittance", "Before 31 December each year; monthly payment is also possible"],
      ],
    },
    minWage: [
      "Haryana applies one statewide schedule to all employments by skill level. A reset effective 1 April 2026 was reported under the Code on Wages, 2019; dearness allowance has historically been revised on 1 January and 1 July. Check the Labour Department's notifications for current rates.",
    ],
    other: [
      "Haryana Shop and Commercial Establishments Act, 1958, as amended: establishments with 20 or more workers register, smaller ones file an online intimation. Overtime of up to 156 hours a quarter is paid at twice the normal rate.",
      "Factories must give 3 national holidays, 5 festival holidays, 7 casual leave days and 7 sick leave days a year under the state holidays and leave Act.",
      "Draft Haryana rules under all four Labour Codes were published in May 2026; final rules had not been confirmed at the time of review.",
    ],
    neevhr: [
      "No PT is deducted for employees whose work location is Haryana.",
      "LWF can be set as a percentage of wages with a monthly cap for each side, so the 0.2% employee share and twice-that employer share are calculated each month. The January cap revision is a new dated rule in settings.",
      "Holiday calendars and leave policies can be configured for Haryana factories' festival and leave entitlements.",
    ],
    faqs: [
      { q: "Is there professional tax in Haryana or Gurugram?", a: "No. Haryana does not levy professional tax." },
      { q: "How is Haryana LWF calculated?", a: "0.2% of the employee's wages, capped at ₹35 a month in 2026, with the employer paying twice the employee amount." },
    ],
    sources: [
      { label: "Haryana Labour Welfare Board", href: "https://hrylabour.gov.in/content/cms/MTU" },
      { label: "Punjab Labour Welfare Fund Act, 1965 (Haryana)", href: "https://hrylabour.gov.in/staticdocs/labourActpdfdocs/ThePunjabLabourFundACt1965.pdf" },
      { label: "Haryana Labour Department", href: "https://hrylabour.gov.in" },
    ],
  },
  {
    slug: "kerala",
    name: "Kerala",
    reviewed: R,
    reviewedIso: RI,
    summary:
      "Kerala professional tax is half-yearly and paid to the local body, with rates revised from 1 October 2024. Most shops and offices pay a monthly welfare fund of ₹50 each from employee and employer.",
    pt: {
      body: [
        "Professional tax in Kerala is levied by municipalities and panchayats under the Kerala Municipality Act, 1994 and the Kerala Panchayat Raj Act, 1994, for the half-years April to September and October to March. The employer deducts it and pays the local body where the establishment is located. The slab is based on half-yearly income.",
        "Rates were revised from 1 October 2024 by G.O.(Rt) No. 1149/2024/LSGD. The top rate of ₹1,250 per half-year reaches the constitutional maximum of ₹2,500 a year. Payment is commonly due by 31 August and the end of February; confirm with your local body.",
      ],
      slabHead: ["Half-yearly income", "PT per half-year"],
      slabs: [
        ["Up to ₹11,999", "Nil"],
        ["₹12,000 to ₹17,999", "₹320"],
        ["₹18,000 to ₹29,999", "₹450"],
        ["₹30,000 to ₹44,999", "₹600"],
        ["₹45,000 to ₹99,999", "₹750"],
        ["₹1,00,000 to ₹1,24,999", "₹1,000"],
        ["₹1,25,000 and above", "₹1,250"],
      ],
    },
    lwf: {
      body: [
        "Kerala runs sector-specific welfare funds. For most shops, offices and IT or ITeS establishments outside factories, the Kerala Shops and Commercial Establishments Workers Welfare Fund Act, 2006 applies: ₹50 from the employee and ₹50 from the employer each month from 1 September 2022.",
        "Factories, plantations and some other sectors fall under other funds, including the Kerala Labour Welfare Fund Act, 1975, whose current amounts should be confirmed with the Labour Commissionerate.",
      ],
      facts: [
        ["Shops and establishments fund", "₹50 employee, ₹50 employer, monthly"],
        ["Other sectors", "Sector-specific welfare boards"],
      ],
    },
    minWage: [
      "Minimum wages are notified separately for more than 80 scheduled employments, with a dearness allowance linked to the consumer price index, and the list of employments is still growing. Check the Labour Commissionerate for your employment.",
    ],
    other: [
      "Kerala Shops and Commercial Establishments Act, 1960: the 2018 amendment allows women to work night shifts with safeguards and requires seating for staff.",
      "The Labour Commissionerate issues paid-holiday orders for elections, so holiday calendars should allow ad hoc paid holidays.",
    ],
    neevhr: [
      "The monthly shops and establishments welfare fund is supported as a fixed monthly contribution by work location.",
      "Holiday calendars accept ad hoc paid holidays, such as election holidays.",
      "PT rules can be set per municipality or panchayat and tagged to each work location, with half-yearly income slabs and the deduction months your local body uses. Half-yearly income is taken as six months of the current monthly salary.",
    ],
    faqs: [
      { q: "Is Kerala professional tax monthly?", a: "No. It is half-yearly, paid to the municipality or panchayat, based on half-yearly income, with a maximum of ₹1,250 per half-year." },
      { q: "What welfare fund applies to offices in Kerala?", a: "Most shops and offices fall under the Shops and Commercial Establishments Workers Welfare Fund: ₹50 a month each from employee and employer." },
    ],
    sources: [
      { label: "Kerala Labour Commissionerate", href: "https://lc.kerala.gov.in" },
      { label: "Kerala Labour Welfare Fund Act", href: "https://lc.kerala.gov.in/images/pdf/klwf.pdf" },
    ],
  },
];

export const states: StateGuide[] = [...statesA, ...statesB];

export const stateBySlug: Record<string, StateGuide> = Object.fromEntries(
  states.map((s) => [s.slug, s])
);
