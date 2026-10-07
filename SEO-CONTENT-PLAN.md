# NeevHR — Master SEO Content Plan & Editorial Strategy

This document outlines the content architecture, topical clusters, editorial quality standards, and content roadmap for **https://www.neevhr.com**.

## 1. Content Architecture & Intent Strategy

NeevHR’s content ecosystem is structured into five distinct, non-competing layers:

```
[ Tier 1: Commercial Pillars ]
        │  (/hrms, /payroll, /india-payroll, /pricing, /compare, /features)
        │
[ Tier 2: Functional Module Pages ]
        │  (/features/attendance, /features/leave, /features/recruitment, etc.)
        │
[ Tier 3: High-Intent Decision Guides & State Rules ]
        │  (/switch-from-excel, /hrms-implementation, /india/payroll/maharashtra, etc.)
        │
[ Tier 4: Interactive Statutory Calculators ]
        │  (/tools/pf-calculator, /tools/take-home-salary-calculator, etc.)
        │
[ Tier 5: Educational Resources & Glossary ]
           (/glossary/pf, /blog/epf-explained, /blog/monthly-payroll-checklist, etc.)
```

### Strict Keyword Ownership Policy
To prevent **keyword cannibalization**:
- Broad commercial queries (e.g. *"HRMS software India"*) belong exclusively to Tier 1 (`/hrms`).
- Process & task queries (e.g. *"how to process monthly payroll in India"*) belong to Tier 5 (`/blog/*`).
- Utility calculation queries (e.g. *"how to calculate gratuity"*) belong to Tier 4 (`/tools/*`), which directly funnel into Tier 1 and Tier 2 pages.

---

## 2. Topic Clusters & Publication Pipeline

### Cluster A: Core Statutory Compliance (India-First)
- **Primary Commercial Hub:** `/india-payroll`
- **Supporting Module:** `/features/compliance`
- **Interactive Tools:** `/tools/pf-calculator`, `/tools/esi-calculator`, `/tools/tds-calculator`
- **State-Specific Pages:**
  - `/india/payroll/maharashtra`
  - `/india/payroll/karnataka`
  - `/india/payroll/gujarat`
  - `/india/payroll/tamil-nadu`
  - `/india/payroll/delhi`
  - `/india/payroll/telangana`
  - `/india/payroll/uttar-pradesh`
  - `/india/payroll/haryana`
  - `/india/payroll/west-bengal`
  - `/india/payroll/rajasthan`
- **Live Blog Articles:**
  - EPF Explained: Contribution, UAN & Withdrawal
  - ESI Explained: Eligibility, Benefits & Contribution
  - Professional Tax by State in India
  - TDS on Salary: Old vs New Regime (FY 2026-27)
  - Gratuity in India: Eligibility, Formula & Tax
  - Statutory Bonus: Payment of Bonus Act
  - Form 16 & Form 24Q Explained
- **Pre-Written Batch 2 & 3 Articles (Awaiting DB Seed):**
  - Labour Codes Wage Definition: The 50% Rule
  - Labour Welfare Fund (LWF) State-Wise Matrix
  - Wage Payment Deadlines & Permissible Deductions
  - Contract Labour Compliance for Principal Employers

### Cluster B: Core Payroll Operations
- **Primary Commercial Hub:** `/payroll`
- **Supporting Modules:** `/features/full-and-final-settlement`, `/features/expenses`, `/features/loans`, `/features/compensation`
- **Interactive Tools:** `/tools/take-home-salary-calculator`, `/tools/ctc-calculator`, `/tools/full-and-final-calculator`, `/tools/bonus-calculator`
- **Pre-Written Batch 2 & 3 Articles (Awaiting DB Seed):**
  - Monthly Payroll Checklist: Step-by-Step Run
  - Payroll Reconciliation Guide: Month-on-Month Variance
  - Prorated Salary Calculation for Mid-Month Joiners & Leavers
  - Salary Arrears Calculation & Tax Treatment
  - Payslip Format in India: Statutory Requirements
  - Salary Advance & Employee Loan Policy

### Cluster C: Time, Attendance & Rostering
- **Primary Commercial Hub:** `/features/attendance`
- **Supporting Modules:** `/features/rostering`, `/features/leave`, `/features/timesheets`, `/features/holidays`
- **Interactive Tools:** `/tools/overtime-calculator`, `/tools/leave-encashment-calculator`
- **Pre-Written Batch 2 & 3 Articles (Awaiting DB Seed):**
  - Shift Management & Rostering in Indian Manufacturing & Retail
  - Hybrid Work Attendance Policy & Best Practices
  - Comp-Off (Compensatory Off) Policy & Compliance
  - Overtime Rules & Wage Calculation under Indian Labour Laws

### Cluster D: Talent, Performance & Lifecycle
- **Primary Commercial Hub:** `/features/employees`
- **Supporting Modules:** `/features/onboarding`, `/features/recruitment`, `/features/performance`, `/features/exit`
- **Interactive Tools:** `/tools/salary-hike-calculator`, `/tools/notice-period-calculator`
- **Pre-Written Batch 2 & 3 Articles (Awaiting DB Seed):**
  - Bell Curve vs Continuous Feedback in Performance Appraisal
  - Merit Increase Matrix: How to Distribute Increments
  - Employee Attrition Rate: Calculation, Benchmarks & Reduction
  - How to Reduce Offer Dropouts in Indian Tech & Mid-Market
  - Relieving Letter vs Experience Letter: Legal Differences
  - Offer Letter vs Appointment Letter: Enforceability

---

## 3. Editorial & Factual Verification Protocol

Because HR and payroll software impacts financial payouts and legal compliance:

1. **Authoritative Sources Only:**
   - Every statutory claim must cite official gazettes, EPFO, ESIC, Income Tax Department, or Ministry of Labour portals.
   - Never quote unverified third-party blogs or outdated circulars.
2. **Date Transparency:**
   - Statutory articles must display `Last reviewed on [Date]` (`LAST_REVIEWED = "24 Sep 2026"`).
3. **No Fabricated Product Capabilities:**
   - If a feature is not built yet (e.g. mobile app store release, Hindi UI, biometric SSO), clearly note it as *"coming soon"* or *"planned"*.
4. **Structured Internal Linking:**
   - Every educational blog post must link to:
     1. A relevant statutory calculator (immediate utility).
     2. A corresponding product module (commercial solution).
     3. The Book a Demo form (`/demo`) with an aligned intent trigger.

---

## 4. Production Database Seeding Action Item

The repository contains 39 high-value pre-written articles in `marketing-site/lib/seed/articles/`. 
To publish them to the live blog:
1. Ensure `SEED_KEY` is set in the server environment `/var/www/neevhr/.env`.
2. Execute a single authorized HTTP request:
   ```bash
   curl -s "https://www.neevhr.com/api/dev-seed?key=YOUR_SEED_KEY"
   ```
3. This creates all 39 missing articles in PostgreSQL without overwriting any manual edits.
4. Payload CMS and `/sitemap.xml` will immediately reflect all 58 total published articles.
