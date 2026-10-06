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

// Batch 3 articles (06 Oct 2026).
import bell_curve_performance_appraisal from "./bell-curve-performance-appraisal";
import comp_off_policy from "./comp-off-policy";
import contract_labour_compliance_principal_employer from "./contract-labour-compliance-principal-employer";
import employee_attrition_rate from "./employee-attrition-rate";
import employee_background_verification_india from "./employee-background-verification-india";
import hybrid_work_attendance_policy from "./hybrid-work-attendance-policy";
import labour_codes_wage_definition_fifty_percent_rule from "./labour-codes-wage-definition-50-percent-rule";
import labour_welfare_fund_state_wise from "./labour-welfare-fund-state-wise";
import merit_increase_matrix from "./merit-increase-matrix";
import offer_letter_vs_appointment_letter from "./offer-letter-vs-appointment-letter";
import payslip_format_india from "./payslip-format-india";
import performance_appraisal_process from "./performance-appraisal-process";
import prorated_salary_mid_month_joiners_leavers from "./prorated-salary-mid-month-joiners-leavers";
import reduce_offer_dropouts from "./reduce-offer-dropouts";
import relieving_letter_vs_experience_letter from "./relieving-letter-vs-experience-letter";
import salary_advance_employee_loan_policy from "./salary-advance-employee-loan-policy";
import salary_arrears_calculation from "./salary-arrears-calculation";
import shift_management_and_rostering from "./shift-management-and-rostering";
import shops_and_establishments_act_registration from "./shops-and-establishments-act-registration";
import wage_payment_deadlines_and_deductions from "./wage-payment-deadlines-and-deductions";

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

export const articleBatch3: SeedPost[] = [
  bell_curve_performance_appraisal,
  comp_off_policy,
  contract_labour_compliance_principal_employer,
  employee_attrition_rate,
  employee_background_verification_india,
  hybrid_work_attendance_policy,
  labour_codes_wage_definition_fifty_percent_rule,
  labour_welfare_fund_state_wise,
  merit_increase_matrix,
  offer_letter_vs_appointment_letter,
  payslip_format_india,
  performance_appraisal_process,
  prorated_salary_mid_month_joiners_leavers,
  reduce_offer_dropouts,
  relieving_letter_vs_experience_letter,
  salary_advance_employee_loan_policy,
  salary_arrears_calculation,
  shift_management_and_rostering,
  shops_and_establishments_act_registration,
  wage_payment_deadlines_and_deductions,
];
