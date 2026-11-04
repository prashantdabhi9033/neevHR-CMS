// Lightweight industry list for client-side menus (no page content), so the
// header does not ship every industry page's copy in the JS bundle.
// Keep slugs, names and taglines in step with lib/industries.ts. `short` is the one-line
// summary under the name in the header menu.
export const industryNav = [
  { slug: "manufacturing", name: "Manufacturing", tagline: "Shifts, overtime and factory compliance, handled.", short: "Plants, shifts and overtime" },
  { slug: "it-ites", name: "IT & ITES", tagline: "Utilisation, hiring and reviews on one record.", short: "Utilisation, hiring and reviews" },
  { slug: "retail-qsr", name: "Retail & QSR", tagline: "Staff every store, every shift.", short: "Every store, every shift" },
  { slug: "healthcare", name: "Healthcare & hospitals", tagline: "24x7 rosters and statutory accuracy for care teams.", short: "24x7 rosters for care teams" },
  { slug: "bfsi", name: "Financial services (BFSI)", tagline: "Audit trail, access control and data protection.", short: "Audit trail and access control" },
  { slug: "logistics", name: "Logistics & transport", tagline: "Hubs, drivers and field staff on one payroll.", short: "Hubs, drivers and field staff" },
  { slug: "pharma", name: "Pharma & life sciences", tagline: "Plants, compliance and sales incentives in one place.", short: "Plants, compliance and incentives" },
  { slug: "hospitality", name: "Hospitality", tagline: "Rosters and shift pay for hotels and resorts.", short: "Hotel rosters and shift pay" },
  { slug: "professional-services", name: "Professional services", tagline: "Utilisation and delivery on one platform.", short: "Utilisation and delivery" },
  { slug: "staffing-bpo", name: "Staffing & BPO", tagline: "High headcount, high velocity, under control.", short: "High headcount at speed" },
];
