// Guides, calculators and glossary entries that go with a module page. Every link is a page on this site; the crawl check
// at release confirms each one answers 200.

export type RelatedLink = { label: string; href: string };

const guide = {
  epf: { label: "EPF explained", href: "/blog/epf-explained-contribution-uan-withdrawal" },
  esi: { label: "ESI eligibility and contribution", href: "/blog/esi-explained-eligibility-benefits-contribution" },
  pt: { label: "Professional tax by state", href: "/blog/professional-tax-by-state-india" },
  tds: { label: "TDS on salary, old and new regime", href: "/blog/tds-on-salary-old-vs-new-regime-fy-2026-27" },
  form16: { label: "Form 16 explained", href: "/blog/form-16-explained" },
  form24q: { label: "Form 24Q explained", href: "/blog/form-24q-explained" },
  checklist: { label: "Payroll compliance checklist", href: "/blog/payroll-compliance-checklist-india" },
  posh: { label: "POSH Act compliance for employers", href: "/blog/posh-act-compliance-for-employers" },
  fnf: { label: "Full and final settlement explained", href: "/blog/full-and-final-settlement-explained" },
  dpdp: { label: "DPDP Act 2023 for HR teams", href: "/blog/dpdp-act-2023-for-hr-teams" },
  indiaPayroll: { label: "India payroll rules", href: "/india-payroll" },
  migration: { label: "HRMS data migration guide", href: "/hrms-data-migration" },
  pfCalc: { label: "PF calculator", href: "/tools/pf-calculator" },
  esiCalc: { label: "ESI calculator", href: "/tools/esi-calculator" },
  tdsCalc: { label: "TDS calculator", href: "/tools/tds-calculator" },
  gratuityCalc: { label: "Gratuity calculator", href: "/tools/gratuity-calculator" },
  fnfCalc: { label: "F&F calculator", href: "/tools/full-and-final-calculator" },
  bonusCalc: { label: "Bonus calculator", href: "/tools/bonus-calculator" },
  otCalc: { label: "Overtime calculator", href: "/tools/overtime-calculator" },
  encashCalc: { label: "Leave encashment calculator", href: "/tools/leave-encashment-calculator" },
  noticeCalc: { label: "Notice period calculator", href: "/tools/notice-period-calculator" },
  hikeCalc: { label: "Salary hike calculator", href: "/tools/salary-hike-calculator" },
  ctcCalc: { label: "CTC calculator", href: "/tools/ctc-calculator" },
  hraCalc: { label: "HRA calculator", href: "/tools/hra-calculator" },
};

export const relatedLinks: Record<string, RelatedLink[]> = {
  compliance: [guide.checklist, guide.indiaPayroll, guide.epf, guide.esi, guide.pt, guide.form24q, guide.pfCalc, guide.esiCalc],
  "income-tax": [guide.tds, guide.form16, guide.form24q, guide.tdsCalc, guide.hraCalc],
  "full-and-final-settlement": [guide.fnf, guide.fnfCalc, guide.gratuityCalc, guide.encashCalc],
  exit: [guide.fnf, guide.noticeCalc, guide.fnfCalc, guide.gratuityCalc],
  attendance: [
    { label: "Attendance and overtime rules", href: "/blog/attendance-and-overtime-rules-in-india" },
    { label: "Biometric attendance integration", href: "/blog/biometric-attendance-integration" },
    guide.otCalc,
  ],
  leave: [{ label: "Leave types in India", href: "/blog/leave-types-in-india-explained" }, { label: "Leave management guide", href: "/blog/leave-management-guide" }, guide.encashCalc],
  rostering: [{ label: "Shift management and rostering", href: "/blog/shift-management-and-rostering" }, guide.otCalc],
  "field-tracking": [{ label: "Geo-fencing attendance for field staff", href: "/blog/geo-fencing-attendance-field-staff" }],
  posh: [guide.posh, { label: "POSH training and learning", href: "/features/learning" }],
  disciplinary: [{ label: "Disciplinary action and domestic enquiry", href: "/blog/disciplinary-action-domestic-enquiry" }, { label: "Performance improvement plan", href: "/blog/performance-improvement-plan" }],
  "goal-cascade": [{ label: "OKR vs KPI", href: "/blog/okr-vs-kpi" }, { label: "Performance appraisal process", href: "/blog/performance-appraisal-process" }],
  performance: [{ label: "Performance appraisal process", href: "/blog/performance-appraisal-process" }, { label: "OKR vs KPI", href: "/blog/okr-vs-kpi" }, guide.hikeCalc],
  compensation: [{ label: "Salary structure and CTC", href: "/blog/salary-structure-ctc-breakup-explained" }, guide.ctcCalc, guide.hikeCalc],
  "variable-pay": [{ label: "Statutory bonus explained", href: "/blog/statutory-bonus-payment-of-bonus-act" }, guide.bonusCalc],
  loans: [{ label: "Salary advance and loan policy", href: "/blog/salary-advance-employee-loan-policy" }],
  expenses: [{ label: "Expense reimbursement policy", href: "/blog/expense-reimbursement-policy" }],
  recruitment: [{ label: "Applicant tracking system guide", href: "/blog/applicant-tracking-system-guide" }],
  onboarding: [{ label: "Employee onboarding checklist", href: "/blog/employee-onboarding-checklist" }],
  helpdesk: [{ label: "HR helpdesk and employee queries", href: "/blog/hr-helpdesk-employee-query-management" }],
  "ai-assistant": [{ label: "HRMS security checklist", href: "/blog/hrms-security-checklist" }, guide.dpdp, { label: "Security and data handling", href: "/security" }],
  employees: [{ label: "What an HRMS should include", href: "/blog/what-should-an-hrms-include" }, guide.migration],
};
