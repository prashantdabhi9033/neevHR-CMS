// What the header menus show, beyond the module list in lib/module-nav.ts. Every link is a page
// that already exists on the site; icons are names from components/site/MenuIcon.
import { industryNav } from "@/lib/industry-nav";
import { menuLinks, moduleGroups, type MenuLink } from "@/lib/module-nav";

export type MenuItem = { key: string; name: string; desc: string; href: string; icon: string };
export type MenuColumn = { heading: string; items: MenuItem[]; span?: 2 };

// Icon for each module slug and for the capabilities placed in a menu group (keyed by href).
const itemIcon: Record<string, string> = {
  employees: "idCard",
  onboarding: "userPlus",
  "org-chart": "orgChart",
  positions: "briefcase",
  planning: "barChart",
  exit: "door",
  "full-and-final-settlement": "receipt",
  documents: "file",
  "alumni-portal": "graduation",
  disciplinary: "alert",
  posh: "shield",
  attendance: "clock",
  rostering: "calendar",
  leave: "calendarOff",
  holidays: "sun",
  "field-tracking": "mapPin",
  timesheets: "clipboard",
  projects: "folder",
  payroll: "wallet",
  "income-tax": "percent",
  compliance: "shield",
  expenses: "receipt",
  loans: "coins",
  "variable-pay": "trendUp",
  benefits: "heart",
  recruitment: "search",
  performance: "target",
  "goal-cascade": "flag",
  "development-plans": "sprout",
  "360-feedback": "cycle",
  compensation: "banknote",
  learning: "book",
  succession: "orgChart",
  "talent-review": "grid",
  mobile: "phone",
  engagement: "star",
  surveys: "clipboard",
  "manager-self-service": "inbox",
  "approval-channels": "message",
  helpdesk: "headset",
  travel: "plane",
  assets: "laptop",
  reports: "chart",
  "ai-assistant": "sparkle",
  "process-studio": "flow",
  "sign-in-security": "lock",
  integrations: "plug",
  hindi: "language",
  "data-migration": "database",
  "/features/attendance#qr-code-attendance": "qr",
  "/features/attendance#device-management": "fingerprint",
  "/features/compliance#pf-correction-of-a-filed-month": "fileEdit",
  "/features/recruitment#careers-website-applications": "globe",
  "/features/recruitment#internal-job-posting": "megaphone",
  "/features/recruitment#resume-parsing": "fileSearch",
  "/features/performance#1-1-meetings": "message",
  "/features/employees#digital-id-cards": "idCard",
};

const withIcon = (l: MenuLink): MenuItem => ({ ...l, icon: itemIcon[l.key] ?? "layers" });

// Features menu: the module groups down the left, in the menu's own order. Insights joins Platform.
export type FeatureGroup = { group: string; blurb: string; icon: string; items: MenuItem[] };
const blurb = (g: string) => moduleGroups.find((m) => m.group === g)?.blurb ?? "";

export const featureGroups: FeatureGroup[] = [
  { group: "Core HR", icon: "users", blurb: blurb("Core HR"), items: menuLinks("Core HR").map(withIcon) },
  { group: "Time & attendance", icon: "clock", blurb: blurb("Time & attendance"), items: menuLinks("Time & attendance").map(withIcon) },
  { group: "Payroll & pay", icon: "wallet", blurb: blurb("Payroll & pay"), items: menuLinks("Payroll & pay").map(withIcon) },
  { group: "Talent", icon: "rocket", blurb: blurb("Talent"), items: menuLinks("Talent").map(withIcon) },
  { group: "Employee experience", icon: "smile", blurb: blurb("Employee experience"), items: menuLinks("Employee experience").map(withIcon) },
  {
    group: "Platform and insights",
    icon: "layers",
    blurb: `${blurb("Insights")} ${blurb("Platform and security")}`,
    items: [...menuLinks("Insights"), ...menuLinks("Platform and security")].map(withIcon),
  },
];

const industryIcon: Record<string, string> = {
  manufacturing: "factory",
  "it-ites": "laptop",
  "retail-qsr": "cart",
  healthcare: "medical",
  bfsi: "bank",
  logistics: "truck",
  pharma: "flask",
  hospitality: "bed",
  "professional-services": "briefcase",
  "staffing-bpo": "headset",
};

export const solutionColumns: MenuColumn[] = [
  {
    heading: "By industry",
    span: 2,
    items: industryNav.map((i) => ({
      key: i.slug,
      name: i.name,
      desc: i.short,
      href: `/industries/${i.slug}`,
      icon: industryIcon[i.slug] ?? "building",
    })),
  },
  {
    heading: "By company size",
    items: [
      { key: "small", name: "Small business", desc: "Accurate payroll, simple setup", href: "/best-hrms-for-small-business", icon: "store" },
      { key: "mid", name: "Mid-sized business", desc: "Locations, shifts and approvals", href: "/best-hrms-for-mid-sized-business", icon: "building" },
      { key: "large", name: "1,000+ employees", desc: "Entities, bulk work and security", href: "/best-hrms-for-1000-employees", icon: "buildings" },
    ],
  },
  {
    heading: "Switching from",
    items: [
      { key: "excel", name: "Excel", desc: "HR and payroll off spreadsheets", href: "/switch-from-excel", icon: "table" },
      { key: "manual", name: "Manual payroll", desc: "Without missing a pay date", href: "/switch-from-manual-payroll", icon: "calculator" },
      { key: "legacy", name: "A legacy HRMS", desc: "What to carry across and archive", href: "/switch-from-legacy-hrms", icon: "server" },
      { key: "point", name: "Separate tools", desc: "One record instead of many apps", href: "/switch-from-point-solutions", icon: "puzzle" },
    ],
  },
];

export const resourceColumns: MenuColumn[] = [
  {
    heading: "Learn",
    items: [
      { key: "blog", name: "Blog", desc: "HR, payroll and compliance articles", href: "/blog", icon: "newspaper" },
      { key: "glossary", name: "Glossary", desc: "HR and payroll terms explained", href: "/glossary", icon: "book" },
      { key: "resources", name: "Guides", desc: "Choosing and switching an HRMS", href: "/resources", icon: "file" },
      { key: "faq", name: "FAQ", desc: "Common questions answered", href: "/faq", icon: "help" },
    ],
  },
  {
    heading: "India payroll",
    items: [
      { key: "india-payroll", name: "India payroll rules", desc: "PF, ESI, PT, LWF and TDS", href: "/india-payroll", icon: "rupee" },
      { key: "calendar", name: "Compliance calendar", desc: "Due dates for FY 2026-27", href: "/payroll-compliance-calendar-2026-27", icon: "calendar" },
      { key: "pf-ceiling", name: "PF wage ceiling ₹25,000", desc: "What changed and when", href: "/pf-wage-ceiling-25000", icon: "wallet" },
      { key: "it-act", name: "Income-tax Act, 2025", desc: "Payroll changes", href: "/income-tax-act-2025-payroll-changes", icon: "percent" },
    ],
  },
  {
    heading: "Explore NeevHR",
    items: [
      { key: "tools", name: "Free calculators", desc: "PF, ESI, TDS, gratuity and more", href: "/tools", icon: "calculator" },
      { key: "compare", name: "Compare", desc: "Suites, point tools and spreadsheets", href: "/compare", icon: "swap" },
      { key: "implementation", name: "Implementation", desc: "How a rollout runs", href: "/hrms-implementation", icon: "rocket" },
      { key: "security", name: "Security", desc: "Sign-in, encryption and audit", href: "/security", icon: "lock" },
    ],
  },
];
