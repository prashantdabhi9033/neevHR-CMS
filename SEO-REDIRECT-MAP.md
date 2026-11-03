# NeevHR — Master SEO Redirect Map

This document catalogs all permanent (301/308) redirects implemented for **https://www.neevhr.com** in `next.config.ts` and Nginx.

## Redirect Architecture & Principles
1. **Host Canonicalization:** Every request to apex `neevhr.com` permanently redirects (HTTP 308) to canonical `https://www.neevhr.com`.
2. **Protocol Canonicalization:** Plain `http://` permanently redirects (HTTP 301) to `https://`.
3. **Trailing Slash Policy:** Next.js normalizes trailing slashes (e.g., `/pricing/` -> `/pricing`).
4. **Descriptive Topic Aliases:** SEO-friendly URLs mapped to module and feature landing pages without content duplication.
5. **Tool Shortcut Aliases:** Root-level calculator paths (e.g., `/pf-calculator`) permanently redirect to `/tools/pf-calculator`.

---

## 1. Host & Protocol Redirects

| Source | Target | HTTP Status | Purpose |
| :--- | :--- | :---: | :--- |
| `http://neevhr.com/*` | `https://www.neevhr.com/*` | 301 | Enforce HTTPS and canonical WWW host |
| `http://www.neevhr.com/*` | `https://www.neevhr.com/*` | 301 | Enforce HTTPS |
| `https://neevhr.com/*` | `https://www.neevhr.com/*` | 308 | Eliminate duplicate apex host |
| `https://www.neevhr.com/:path/` | `https://www.neevhr.com/:path` | 308 | Enforce no-trailing-slash canonical format |

---

## 2. Legacy and Clean URL Redirects

| Source URL | Target Canonical URL | Status | Category |
| :--- | :--- | :---: | :--- |
| `/about` | `/company` | 308 | Corporate / Company |
| `/features/payroll` | `/payroll` | 308 | Pillar unification (avoid cannibalizing /payroll) |
| `/hrms-comparison` | `/compare` | 308 | Short clean URL |
| `/full-and-final-settlement` | `/features/full-and-final-settlement` | 308 | Namespace alignment |
| `/employee-management` | `/features/employees` | 308 | Clean shortcut |
| `/attendance` | `/features/attendance` | 308 | Clean shortcut |
| `/leave-management` | `/features/leave` | 308 | Clean shortcut |
| `/recruitment` | `/features/recruitment` | 308 | Clean shortcut |
| `/performance-management` | `/features/performance` | 308 | Clean shortcut |
| `/employee-self-service` | `/mobile` | 308 | ESS & mobile unification |
| `/hr-analytics` | `/features/reports` | 308 | Reports & analytics |
| `/industries/retail` | `/industries/retail-qsr` | 308 | Industry slug update |
| `/industries/staffing` | `/industries/staffing-bpo` | 308 | Industry slug update |
| `/in-hand-salary-calculator` | `/tools/take-home-salary-calculator` | 308 | Synonymous calculator alias |
| `/tools/in-hand-salary-calculator` | `/tools/take-home-salary-calculator` | 308 | Synonymous calculator alias |

---

## 3. Calculator Root Shortcuts (`/:tool` -> `/tools/:tool`)

| Source Shortcut | Canonical Destination | Status |
| :--- | :--- | :---: |
| `/pf-calculator` | `/tools/pf-calculator` | 308 |
| `/esi-calculator` | `/tools/esi-calculator` | 308 |
| `/gratuity-calculator` | `/tools/gratuity-calculator` | 308 |
| `/hra-calculator` | `/tools/hra-calculator` | 308 |
| `/bonus-calculator` | `/tools/bonus-calculator` | 308 |
| `/salary-hike-calculator` | `/tools/salary-hike-calculator` | 308 |
| `/tds-calculator` | `/tools/tds-calculator` | 308 |
| `/ctc-calculator` | `/tools/ctc-calculator` | 308 |
| `/leave-encashment-calculator` | `/tools/leave-encashment-calculator` | 308 |
| `/overtime-calculator` | `/tools/overtime-calculator` | 308 |
| `/notice-period-calculator` | `/tools/notice-period-calculator` | 308 |
| `/full-and-final-calculator` | `/tools/full-and-final-calculator` | 308 |

---

## 4. Topic Aliases (`/hrms/:topic` -> Canonical Target)

| Source URL | Canonical Destination | Status |
| :--- | :--- | :---: |
| `/hrms/employee-management` | `/features/employees` | 308 |
| `/hrms/onboarding` | `/features/onboarding` | 308 |
| `/hrms/attendance` | `/features/attendance` | 308 |
| `/hrms/leave-management` | `/features/leave` | 308 |
| `/hrms/shift-management` | `/features/rostering` | 308 |
| `/hrms/payroll` | `/payroll` | 308 |
| `/hrms/payroll-compliance` | `/features/compliance` | 308 |
| `/hrms/recruitment` | `/features/recruitment` | 308 |
| `/hrms/performance-management` | `/features/performance` | 308 |
| `/hrms/expense-management` | `/features/expenses` | 308 |
| `/hrms/loan-management` | `/features/loans` | 308 |
| `/hrms/compensation` | `/features/compensation` | 308 |
| `/hrms/employee-self-service` | `/mobile` | 308 |
| `/hrms/hr-analytics` | `/features/reports` | 308 |
| `/hrms/employee-documents` | `/features/documents` | 308 |
| `/hrms/exit-management` | `/features/exit` | 308 |
| `/hrms/full-and-final-settlement` | `/features/full-and-final-settlement` | 308 |
| `/hrms/manufacturing` | `/industries/manufacturing` | 308 |
| `/hrms/it-ites` | `/industries/it-ites` | 308 |
| `/hrms/retail` | `/industries/retail-qsr` | 308 |
| `/hrms/healthcare` | `/industries/healthcare` | 308 |
| `/hrms/bfsi` | `/industries/bfsi` | 308 |
| `/hrms/logistics` | `/industries/logistics` | 308 |
| `/hrms/pharma` | `/industries/pharma` | 308 |
| `/hrms/hospitality` | `/industries/hospitality` | 308 |
| `/hrms/professional-services` | `/industries/professional-services` | 308 |
| `/hrms/staffing` | `/industries/staffing-bpo` | 308 |

## Added 03 Nov 2026 (SEO audit WEB-007 and TECH-15)

Merged blog posts point to the page that now owns the intent; the CMS copies are set to draft.

| Source | Destination | Code | Reason |
| :--- | :--- | :---: | :--- |
| `/blog/hrms-for-1000-employees` | `/best-hrms-for-1000-employees` | 308 | Merged into the size guide |
| `/blog/hrms-for-500-employees` | `/best-hrms-for-mid-sized-business` | 308 | Merged into the size guide |
| `/blog/esi-explained-eligibility-benefits-contribution` | `/blog/esi-eligibility` | 308 | One ESI guide |
| `/blog/tds-on-salary-old-vs-new-regime-fy-2026-27` | `/blog/salary-tds-explained` | 308 | One salary TDS guide |
| `/blog/uan-explained` | `/blog/epf-explained-contribution-uan-withdrawal` | 308 | UAN merged into the EPF guide |
| `/blog/monthly-payroll-process-step-by-step` | `/blog/monthly-payroll-checklist` | 308 | One monthly payroll guide |
| `/india`, `/india/payroll` | `/india-payroll` | 308 | Parent of the state payroll guides |

