// AI inside the modules: what each feature does, when it runs and what it sends. Checked against the product on
// 01 Nov 2026: backend/src/modules/ai/ai-screen-catalog.ts (dataSent) and Doc/10-feature-specs/AI-IN-MODULES.md.
// The privacy page, the AI page and the pricing rows read from here, so a change of fact is made once.

export type AiFeatureKey =
  | "resume"
  | "payroll"
  | "receipt"
  | "helpdesk"
  | "report"
  | "taxProof"
  | "drafts"
  | "survey"
  | "attrition"
  | "learning"
  | "setup";

export type AiFeature = {
  key: AiFeatureKey;
  name: string;
  module: string;
  href: string;
  /** What it does, in one or two plain sentences. */
  what: string;
  /** What starts it. */
  when: string;
  /** What the person still decides. */
  decides: string;
  /** Screen-reader description of the sample screen. */
  alt: string;
};

export const aiFeatures: AiFeature[] = [
  {
    key: "resume",
    name: "Resume match",
    module: "Recruitment",
    href: "/features/recruitment",
    what: "A score and reasons on the candidate page, against the opening's requirements: what the resume shows and what it does not.",
    when: "When an application arrives, or when a recruiter asks.",
    decides: "It never rejects or moves a candidate. The recruiter decides.",
    alt: "A sample candidate page. Resume match shows a score of 78 out of 100, four requirements shown in the resume and two not shown, labelled as an AI suggestion.",
  },
  {
    key: "payroll",
    name: "Payroll change explanation",
    module: "Payroll",
    href: "/payroll",
    what: "Plain words for the checks that fired on a computed run, and what to check first.",
    when: "Once after a run is computed. Again only if a recompute changes the flagged lines.",
    decides: "It never changes, holds or releases a run.",
    alt: "A sample payroll exception report. AI explains two flags, excessive loss of pay and a salary decrease over the threshold, with what to check first for each.",
  },
  {
    key: "receipt",
    name: "Expense receipt reading",
    module: "Expenses",
    href: "/features/expenses",
    what: "Reads the amount, date, vendor and category from an uploaded bill, and warns if it may already be on another claim.",
    when: "When a person uploads a receipt, once per file.",
    decides: "The person checks and changes it. Nothing is submitted by itself.",
    alt: "A sample expense claim. A hotel bill is read as 4,720 rupees on 21 October 2026, with a warning that this amount may already be claimed for this date.",
  },
  {
    key: "helpdesk",
    name: "Helpdesk reply draft",
    module: "HR helpdesk",
    href: "/features/helpdesk",
    what: "Suggests a category when a ticket is raised, and drafts a reply from your knowledge base when an agent asks.",
    when: "Category when a ticket is created. Draft when an agent clicks.",
    decides: "The agent edits it. Nothing is sent until they press Send reply.",
    alt: "A sample helpdesk ticket about HRA on a payslip, with a suggested category of Payroll and a reply draft based on a knowledge base article.",
  },
  {
    key: "report",
    name: "Report from a sentence",
    module: "Reports",
    href: "/features/reports",
    what: "Type what you want and AI picks the report or sets up the custom report. It returns a report definition, not data.",
    when: "When a person asks. The data is read fresh under their own access each time.",
    decides: "They check it and open it. Nothing is saved or sent by itself.",
    alt: "A sample report screen. The sentence attrition by department last quarter finds the Attrition trend report for 01 July to 30 September 2026.",
  },
  {
    key: "taxProof",
    name: "Tax proof reading",
    module: "Income tax",
    href: "/features/income-tax",
    what: "Reads the section, amount, financial year and issuer from an uploaded proof, and shows how they compare with what was declared.",
    when: "When a person uploads a proof, once per file. Proofs on the 80D, 80DD, 80DDB and 80U lines are not sent.",
    decides: "It never approves a proof or changes a declaration.",
    alt: "A sample tax proof. The section and financial year are the same as declared, and the amount is 15,000 rupees less than the 1,50,000 rupees declared.",
  },
  {
    key: "drafts",
    name: "Review and letter drafts",
    module: "Performance and documents",
    href: "/features/performance",
    what: "Feedback on each goal for a manager writing a review, goal ideas, a 1:1 summary, and wording for a letter template. Letter drafts can be in English or Hindi, though issued letter PDFs cannot print Hindi yet.",
    when: "When a person clicks.",
    decides: "It goes into the normal box to edit. AI gives no score or rating. Disciplinary and POSH letters have no AI.",
    alt: "A sample feedback draft on one goal, and a sample letter template draft with merge fields and a fill in marker.",
  },
  {
    key: "survey",
    name: "Survey summary",
    module: "Surveys",
    href: "/features/surveys",
    what: "The themes in a closed survey's open-text answers, and actions HR could take. It shows no names and no quotes.",
    when: "Once after a survey closes, and again only if more responses arrive.",
    decides: "It changes nothing. HR decides what to do.",
    alt: "A sample survey summary built from 184 comments, with two themes and two actions to consider, without names or quotes.",
  },
  {
    key: "attrition",
    name: "Attrition reasons",
    module: "Reports",
    href: "/features/reports",
    what: "Plain words on each department's exit figures, and what to check. It explains past trends. It is not a prediction, and it says nothing about any person.",
    when: "Once a month, at department level only.",
    decides: "It gives no risk score and changes nothing.",
    alt: "A sample attrition report for 12 months to October 2026, explaining exits by department, with small departments left out.",
  },
  {
    key: "learning",
    name: "Learning suggestions",
    module: "Learning",
    href: "/features/learning",
    what: "Courses from your own catalogue for each person, from their role and skills.",
    when: "Once a month, or when a person asks. Again only if role or skills change.",
    decides: "Nothing enrols anyone. The person decides.",
    alt: "A sample list of three suggested courses with a reason for each and a button to open the course.",
  },
  {
    key: "setup",
    name: "Setup from Excel or PDF",
    module: "Setup",
    href: "/hrms-data-migration",
    what: "Suggests which NeevHR field each column of an employee or migration file holds, and fills a draft leave policy from your policy PDF.",
    when: "When a person uploads a file, once per file.",
    decides: "Nothing imports, saves or publishes by itself. It reads what the document says, not what the law requires.",
    alt: "A sample import mapping with three column suggestions, and a sample leave policy read from a PDF with three leave types.",
  },
];

/** The features shown on the home page. The rest are on the AI page. */
export const homeAiFeatures: AiFeatureKey[] = ["resume", "payroll", "receipt"];

export const aiFeature = (key: AiFeatureKey) => aiFeatures.find((f) => f.key === key)!;

// The control story: rules 1, 4, 6 and 7 of AI-IN-MODULES, and the credit behaviour in section 2.
export const aiRules: { icon: string; title: string; body: string }[] = [
  {
    icon: "sliders",
    title: "A switch per module",
    body: "NeevHR switches a module's AI on for your company, and your AI admin can turn it off. With it off, the screen is the normal complete screen, with no empty box and no prompt.",
  },
  {
    icon: "check",
    title: "AI suggests, a person decides",
    body: "It never rejects, approves, pays or changes a record by itself. Every result is labelled as an AI suggestion, with the date it was made.",
  },
  {
    icon: "bolt",
    title: "No repeat call for unchanged data",
    body: "The same record with the same input never calls the model twice. The stored result is reused at no charge, and nothing calls the model when a page opens.",
  },
  {
    icon: "shield",
    title: "The same role permissions",
    body: "AI text shows only to someone who may already open the record and the fields it was built from. Disciplinary and POSH have no AI.",
  },
  {
    icon: "wallet",
    title: "Prepaid credits",
    body: "AI runs on credits your company buys. When they finish, stored results still show, no new run starts, and the feature keeps working without AI.",
  },
];

// What leaves for the AI provider, per feature. Whole files are said to be whole files: a file can contain what is printed on it.
export const aiDataRows: { feature: string; sent: string }[] = [
  {
    feature: "AI assistant (chat)",
    sent: "The question, and the record data needed to answer it within that person's role, such as their own payslip summary or leave balance. The assistant's tools do not read bank account, IFSC, PAN, Aadhaar, UAN, ESI number, address, tax details, health or disciplinary data, a candidate's phone or email, or another person's individual pay. Whatever a person types in a question goes as typed.",
  },
  {
    feature: "Resume match",
    sent: "Cleaned resume text and the opening's title and job description. Automatic rules take out the name, contact details, ID numbers, address, personal details and pay first. Rules work on patterns, so something written in an unusual way could remain.",
  },
  {
    feature: "Expense receipt reading",
    sent: "The whole receipt file as uploaded (image or PDF), and your expense category names. No detail is added from the record, but a file can contain what is printed on it, such as a name or a card or account number.",
  },
  {
    feature: "Tax proof reading",
    sent: "The whole proof file as uploaded (image or PDF), and the product's tax section names. A file can contain what is printed on it, such as a name, PAN or account number; those are not kept or shown from the reading. Proofs on the health-related lines (80D, 80DD, 80DDB, 80U) are not sent. The check is by the line a file is uploaded on, so a health paper uploaded on another line would go.",
  },
  {
    feature: "Leave policy from a PDF",
    sent: "The whole PDF as uploaded, and the names of your leave types. A PDF whose text shows a PAN or Aadhaar number is refused. A scanned page has no text to check, so it can still go if it shows one.",
  },
  {
    feature: "Import column matching",
    sent: "Column headings, and up to three masked samples per column that show the shape of a value, not the value. Columns for PAN, Aadhaar, bank, pay and other personal details send no sample. The rows of the file do not go.",
  },
  {
    feature: "Payroll change explanation",
    sent: "The checks that fired, with a line reference for each person, the percent change in net pay, loss-of-pay days, overtime hours and variable pay as a percent of gross. No name, employee code, department, bank detail, PAN or rupee amount.",
  },
  {
    feature: "Helpdesk category and reply draft",
    sent: "The ticket subject and the conversation with the employee, after automatic rules remove names, contact details and ID numbers, your ticket category names, and matching knowledge base and Help Centre text. Internal notes and attachments do not go. Confidential categories and tickets that read as a private matter do not use AI.",
  },
  {
    feature: "Report from a sentence",
    sent: "The sentence typed, and the names of the reports and fields the person's role may use. No employee data. A sentence with a person's full name, code, email, phone or ID number is refused.",
  },
  {
    feature: "Review, goal and 1:1 drafts",
    sent: "For a review: each goal's title, description and weight, and the employee's own note and self percent. For a goal: the designation, department and existing goal titles. For a 1:1: the agenda, shared notes, action items and that person's own private note. Automatic rules remove names, codes, contact details, ID numbers, bank details and pay figures first. Ratings, pay and the other person's private note do not go.",
  },
  {
    feature: "Letter template draft",
    sent: "The letter type, language, template name and category, and the names of the merge fields. No employee data: details stay as merge fields until a letter is issued.",
  },
  {
    feature: "Survey summary",
    sent: "The question text and open-text answers, with no name, employee code or department attached, after automatic rules remove names, contact details, ID numbers and pay figures from the words. A question goes only with at least the survey's minimum group of comments. An answer that reads as a health, private, disciplinary or POSH matter is left out.",
  },
  {
    feature: "Attrition reasons",
    sent: "For each department large enough to show: its name, average headcount, exits, attrition percent, trend, and counts of exit types and resignation reasons. No name, employee code, pay, rating or exit interview text.",
  },
  {
    feature: "Learning suggestions",
    sent: "The person's designation, department and skill names, and your catalogue's course titles, types, hours and skills. No name, employee code, contact detail, pay, rating or attendance.",
  },
];
