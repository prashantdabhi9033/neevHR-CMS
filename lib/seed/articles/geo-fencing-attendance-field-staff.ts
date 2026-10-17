import type { SeedPost } from "../posts";

const post: SeedPost = {
  slug: "geo-fencing-attendance-field-staff",
  title: "Geo-fencing attendance for field staff: a practical guide",
  excerpt:
    "How geo-fencing and GPS attendance work for field employees in India: geofence design, selfie checks, accuracy limits, duty-hours tracking and DPDP consent.",
  category: "time",
  author: "NeevHR Team",
  publishedAt: "2026-10-11",
  body: `Geo-fencing attendance lets a field employee mark attendance from a mobile phone only when the phone's location is inside a defined boundary, such as a client site, store or warehouse. GPS attendance is the broader idea of recording location at check-in, check-out or during duty hours. Done well, it replaces paper visit reports and phone calls with verifiable data; done badly, it becomes surveillance that employees resent and the law does not support.

This guide is for companies with sales, service, merchandising or collection teams who rarely see an office. For office and WFH attendance, see our [hybrid work attendance policy](/blog/hybrid-work-attendance-policy) guide, and for punch-based sites, see [biometric attendance integration](/blog/biometric-attendance-integration).

## How does geo-fencing attendance work?

A geofence is a virtual boundary drawn on a map. When an employee taps check-in on the app, the phone reads its location from GPS, Wi-Fi and mobile network signals, and the app compares it with the boundaries assigned to that employee.

- **Inside the boundary:** check-in is accepted and stored with time and coordinates.
- **Outside the boundary:** check-in is blocked, or accepted and flagged as an exception, depending on policy.
- **Location unavailable:** the app records a no-signal state, which the policy treats like a missed punch.

Boundaries come in two shapes:

| Shape | How it is drawn | Best for |
| --- | --- | --- |
| Circle | A centre point and a radius, for example 150 metres | Stores, branches, single buildings |
| Polygon | A set of corner points | Campuses, plants, ports, large construction sites |

Most companies also keep a list of "any approved location" boundaries for roaming staff, so a sales executive can check in at whichever dealer they visit first.

## GPS attendance models compared

Not every field role needs the same level of tracking. Pick the lightest model that solves the problem.

| Model | What is recorded | Suits | Privacy impact |
| --- | --- | --- | --- |
| Check-in and check-out only | Location at the start and end of the day | Store staff, site engineers with one base | Low |
| Check-in at each visit | Location at every customer or site visit | Sales and service teams with planned beats | Moderate |
| Duty-hours trail | Periodic location samples between check-in and check-out | Delivery, collections, security patrol | Higher; needs strong justification |
| Continuous tracking | Location all the time | Rarely justified for employees | High; avoid |

Location should never be collected outside working hours. Once the employee checks out, tracking stops.

## Selfie and location checks: closing the loopholes

A geofence proves where the phone was, not who was holding it. Common additional checks:

- **Selfie at check-in**, compared visually or by face matching against the employee's profile photo. This adds biometric-style data, so it needs the same care as fingerprints under the DPDP Act.
- **Mock-location detection**, to flag phones using apps that fake GPS coordinates.
- **Device binding**, so attendance can be marked only from the employee's registered phone.
- **Time from the server**, not the phone, so changing the phone clock does not change the punch time.

Use these in proportion to the risk. A selfie at every visit for a senior sales manager is overkill; a selfie at check-in for a security guard rotation may be reasonable.

## Designing a field attendance policy

| Decision | Common options | Guidance |
| --- | --- | --- |
| Who is covered | Named roles with no fixed workplace | List roles, not individuals |
| Check-in rule | First visit inside any approved geofence by a set time | Allow a grace period, as for office shifts |
| Geofence radius | 100 to 300 metres | Smaller than 100 metres causes false rejections |
| Out-of-boundary check-in | Blocked, or allowed with a reason | Allow with reason, then review exceptions |
| Duty-hours trail | Off by default; on for specific roles | Document why each role needs it |
| Sampling interval | Every 10 to 30 minutes when trail is on | Longer intervals save battery |
| No-signal handling | Treat as exception, regularise with visit proof | Never as automatic absence |
| Minimum day | Hours between first check-in and last check-out | Align with the shift's half-day rule |
| Data retention | For example, 90 days for trails, longer for daily check-ins | Keep only what pay and disputes need |

Write the policy so employees can predict how a day will be marked. Surprises cause disputes.

## Worked example: field attendance and travel reimbursement

Anjali is a medical representative on a gross salary of ₹42,000 a month, reimbursed for two-wheeler travel at ₹4 per kilometre under the company's expense policy. Her October 2026 record shows:

| Item | Count | Effect |
| --- | --- | --- |
| Days with check-in inside an approved geofence | 22 | Paid |
| Days with check-in outside boundary, reason accepted (doctor moved clinics) | 2 | Paid after review |
| Day with no check-in and no regularisation by cut-off | 1 | LOP: ₹42,000 ÷ 31 = ₹1,355 |
| Weekly offs and holidays | 6 | Paid |
| Kilometres claimed | 1,480 | Reimbursement claim |
| Kilometres on duty-hours trail | 1,390 | Reference for approval |

The approver sees a 90-kilometre gap between the claim and the trail. Rather than cutting the claim automatically, the manager asks about it: two visits were to rural chemists where signal dropped. The manager approves 1,450 kilometres, so the reimbursement is 1,450 × ₹4 = ₹5,800. Location data supports the decision; it does not replace judgement. For the claim workflow itself, see our [expense reimbursement policy](/blog/expense-reimbursement-policy) guide.

## What are the accuracy and battery limits?

GPS on a phone is good, but not exact, and planning around its limits avoids most disputes.

- **Accuracy.** Outdoors with a clear sky, phones are commonly accurate to within a few metres to a few tens of metres. Inside buildings, basements, dense markets and between tall buildings, accuracy can drop to hundreds of metres. Size geofences with this in mind.
- **Signal loss.** Rural routes and lift lobbies lose signal. The app should queue check-ins and sync when signal returns.
- **Battery.** Frequent location sampling drains the battery. A sampling interval of 10 to 30 minutes is a reasonable balance for most trails, and check-in-only models use very little battery.
- **Phone settings.** Battery savers and some manufacturers' power management stop apps running in the background. Brief employees on settings during rollout.
- **Personal phones.** If employees use their own phones, say so in the policy and consider a mobile data allowance.

## Privacy and DPDP Act consent

Location data is personal data under the Digital Personal Data Protection Act, 2023. The Act does not have a separate "sensitive" category, but continuous location reveals a lot about a person's life, so the principles matter more here than almost anywhere else in HR.

- **Clear purpose.** State it in the notice: verifying attendance, supporting visit records, enabling travel reimbursement, worker safety.
- **Lawful basis.** The Act permits certain processing for employment purposes as a legitimate use; otherwise consent is needed. Many employers record explicit consent for location tracking and let employees withdraw it, with an alternative way to mark attendance. Take advice on which basis fits your situation.
- **Duty hours only.** No tracking before check-in, after check-out, on leave days or on weekly offs.
- **Minimum data.** Check-in only, unless the role genuinely needs a trail.
- **Limited access.** Reporting managers see their own team; HR sees exceptions; nobody browses trails out of curiosity.
- **Retention.** Delete trails on a schedule.

The DPDP Rules, 2025 bring obligations into force in phases, so confirm the current position on the [Ministry of Electronics and Information Technology](https://www.meity.gov.in/) website. Our [DPDP Act guide for HR teams](/blog/dpdp-act-2023-for-hr-teams) covers notices and consent records in more depth.

## Rolling out geo-fenced attendance

1. **Map the roles** and decide which tracking model each needs.
2. **Build the boundary list** from your site, store or customer master, with radius by type.
3. **Pilot with one team** for a month, comparing geofence results with manager knowledge.
4. **Tune the radius and grace** based on false rejections in the pilot.
5. **Publish the policy and notice**, explain it in a team meeting, and record acknowledgement and consent.
6. **Review exceptions weekly** for the first quarter, then monthly.

Field staff often work long days, so check that recorded hours and overtime still respect the working-time rules in our [attendance and overtime rules](/blog/attendance-and-overtime-rules-in-india) guide.

## Common mistakes

- Tracking location around the clock instead of during duty hours only.
- Drawing geofences too small, then blaming employees for GPS drift.
- Marking no-signal days as absent without a regularisation route.
- Using trails to cut expense claims automatically without a conversation.
- Collecting selfies without telling employees how they are stored and for how long.
- Skipping the pilot and discovering battery and phone-setting problems across the whole field force at once.

## FAQs

**Is GPS tracking of employees legal in India?** There is no specific law banning it, but location is personal data under the DPDP Act. Track only for a clear purpose, during duty hours, with notice and an appropriate lawful basis, and take advice for your situation.

**What radius should a geofence have?** For a single store or office, 100 to 200 metres is common. Use larger radii or polygons for campuses and sites where GPS is weak.

**Can employees mark attendance without internet?** A well-built app records the check-in with the location and time and syncs when connectivity returns. The server should validate the record on sync.

**Can field staff use personal phones?** Yes, if the policy allows it. Make the duty-hours-only rule explicit and consider a data allowance.

**How do you stop fake GPS apps?** Use mock-location detection, device binding and server time, and review patterns, such as identical coordinates every day.

**Should selfie attendance be compulsory?** Only where impersonation is a real risk. A selfie is personal data that needs a clear notice and retention period.

## How NeevHR helps

NeevHR [field tracking](/features/field-tracking) is built for this: circular or polygon geofences assigned to workers, location during duty hours only, tracking enabled only with recorded employee consent, a live team map, out-of-boundary, over-stay and no-signal alerts, and time-in-boundary and distance reports. Tracking runs from the NeevHR [mobile app](/mobile), which is coming soon. Today, [attendance](/features/attendance) brings biometric and web check-ins together with regularisation, and [expenses](/features/expenses) handles policy-checked travel claims. To plan field attendance for your team, [book a demo](/demo).

*This article provides general information for educational purposes. Statutory rules, thresholds, rates and filing requirements may change; verify with the relevant authority or a qualified professional. Last reviewed: 17 Oct 2026.*`,
};

export default post;
