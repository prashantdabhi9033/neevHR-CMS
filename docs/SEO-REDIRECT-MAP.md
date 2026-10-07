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
| `/about` | `/company` | 301 | Corporate / Company |
| `/features/payroll` | `/payroll` | 301 | Pillar unification (avoid cannibalizing /payroll) |
| `/hrms-comparison` | `/compare` | 301 | Short clean URL |
| `/full-and-final-settlement` | `/features/full-and-final-settlement` | 301 | Namespace alignment |
| `/employee-management` | `/features/employees` | 301 | Clean shortcut |
| `/attendance` | `/features/attendance` | 301 | Clean shortcut |
| `/leave-management` | `/features/leave` | 301 | Clean shortcut |
| `/recruitment` | `/features/recruitment` | 301 | Clean shortcut |
| `/performance-management` | `/features/performance` | 301 | Clean shortcut |
| `/employee-self-service` | `/mobile` | 301 | ESS & mobile unification |
| `/hr-analytics` | `/features/reports` | 301 | Reports & analytics |
| `/industries/retail` | `/industries/retail-qsr` | 301 | Industry slug update |
| `/industries/staffing` | `/industries/staffing-bpo` | 301 | Industry slug update |
| `/in-hand-salary-calculator` | `/tools/take-home-salary-calculator` | 301 | Synonymous calculator alias |
| `/tools/in-hand-salary-calculator` | `/tools/take-home-salary-calculator` | 301 | Synonymous calculator alias |

---

## 3. Calculator Root Shortcuts (`/:tool` -> `/tools/:tool`)

| Source Shortcut | Canonical Destination | Status |
| :--- | :--- | :---: |
| `/pf-calculator` | `/tools/pf-calculator` | 301 |
| `/esi-calculator` | `/tools/esi-calculator` | 301 |
| `/gratuity-calculator` | `/tools/gratuity-calculator` | 301 |
| `/hra-calculator` | `/tools/hra-calculator` | 301 |
| `/bonus-calculator` | `/tools/bonus-calculator` | 301 |
| `/salary-hike-calculator` | `/tools/salary-hike-calculator` | 301 |
| `/tds-calculator` | `/tools/tds-calculator` | 301 |
| `/ctc-calculator` | `/tools/ctc-calculator` | 301 |
| `/leave-encashment-calculator` | `/tools/leave-encashment-calculator` | 301 |
| `/overtime-calculator` | `/tools/overtime-calculator` | 301 |
| `/notice-period-calculator` | `/tools/notice-period-calculator` | 301 |
| `/full-and-final-calculator` | `/tools/full-and-final-calculator` | 301 |

---

## 4. Topic Aliases (`/hrms/:topic` -> Canonical Target)

| Source URL | Canonical Destination | Status |
| :--- | :--- | :---: |
| `/hrms/employee-management` | `/features/employees` | 301 |
| `/hrms/onboarding` | `/features/onboarding` | 301 |
| `/hrms/attendance` | `/features/attendance` | 301 |
| `/hrms/leave-management` | `/features/leave` | 301 |
| `/hrms/shift-management` | `/features/rostering` | 301 |
| `/hrms/payroll` | `/payroll` | 301 |
| `/hrms/payroll-compliance` | `/features/compliance` | 301 |
| `/hrms/recruitment` | `/features/recruitment` | 301 |
| `/hrms/performance-management` | `/features/performance` | 301 |
| `/hrms/expense-management` | `/features/expenses` | 301 |
| `/hrms/loan-management` | `/features/loans` | 301 |
| `/hrms/compensation` | `/features/compensation` | 301 |
| `/hrms/employee-self-service` | `/mobile` | 301 |
| `/hrms/hr-analytics` | `/features/reports` | 301 |
| `/hrms/employee-documents` | `/features/documents` | 301 |
| `/hrms/exit-management` | `/features/exit` | 301 |
| `/hrms/full-and-final-settlement` | `/features/full-and-final-settlement` | 301 |
| `/hrms/manufacturing` | `/industries/manufacturing` | 301 |
| `/hrms/it-ites` | `/industries/it-ites` | 301 |
| `/hrms/retail` | `/industries/retail-qsr` | 301 |
| `/hrms/healthcare` | `/industries/healthcare` | 301 |
| `/hrms/bfsi` | `/industries/bfsi` | 301 |
| `/hrms/logistics` | `/industries/logistics` | 301 |
| `/hrms/pharma` | `/industries/pharma` | 301 |
| `/hrms/hospitality` | `/industries/hospitality` | 301 |
| `/hrms/professional-services` | `/industries/professional-services` | 301 |
| `/hrms/staffing` | `/industries/staffing-bpo` | 301 |
