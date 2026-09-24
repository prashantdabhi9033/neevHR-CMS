// Batch 2 articles (SEO spec §16, §76), one file per article. Regenerate this
// index when adding a file: every default export is a SeedPost.
import type { SeedPost } from "../posts";
import ecr_explained from "./ecr-explained";
import employee_onboarding_checklist from "./employee-onboarding-checklist";
import employee_vs_employer_pf_contribution from "./employee-vs-employer-pf-contribution";
import esi_eligibility from "./esi-eligibility";
import form_24q_explained from "./form-24q-explained";
import hrms_cost_in_india from "./hrms-cost-in-india";
import hrms_for_1000_employees from "./hrms-for-1000-employees";
import hrms_for_500_employees from "./hrms-for-500-employees";
import hrms_security_checklist from "./hrms-security-checklist";
import hrms_vs_hris from "./hrms-vs-hris";
import leave_management_guide from "./leave-management-guide";
import monthly_payroll_checklist from "./monthly-payroll-checklist";
import payroll_compliance_checklist_india from "./payroll-compliance-checklist-india";
import payroll_reconciliation_guide from "./payroll-reconciliation-guide";
import payroll_software_vs_manual_payroll from "./payroll-software-vs-manual-payroll";
import salary_tds_explained from "./salary-tds-explained";
import uan_explained from "./uan-explained";
import what_is_hrms_software from "./what-is-hrms-software";
import what_should_an_hrms_include from "./what-should-an-hrms-include";

export const articleBatch2: SeedPost[] = [
  ecr_explained,
  employee_onboarding_checklist,
  employee_vs_employer_pf_contribution,
  esi_eligibility,
  form_24q_explained,
  hrms_cost_in_india,
  hrms_for_1000_employees,
  hrms_for_500_employees,
  hrms_security_checklist,
  hrms_vs_hris,
  leave_management_guide,
  monthly_payroll_checklist,
  payroll_compliance_checklist_india,
  payroll_reconciliation_guide,
  payroll_software_vs_manual_payroll,
  salary_tds_explained,
  uan_explained,
  what_is_hrms_software,
  what_should_an_hrms_include,
];
