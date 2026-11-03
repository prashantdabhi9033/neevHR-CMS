// Blog posts merged into the page that owns the same search intent (SEO audit WEB-007,
// 03 Nov 2026). next.config.ts redirects each slug with a 308; the sitemap and the blog
// index leave them out even if the CMS still has them published.
export const MERGED_POSTS: Record<string, string> = {
  "hrms-for-1000-employees": "/best-hrms-for-1000-employees",
  "hrms-for-500-employees": "/best-hrms-for-mid-sized-business",
  "esi-explained-eligibility-benefits-contribution": "/blog/esi-eligibility",
  "tds-on-salary-old-vs-new-regime-fy-2026-27": "/blog/salary-tds-explained",
  "uan-explained": "/blog/epf-explained-contribution-uan-withdrawal",
  "monthly-payroll-process-step-by-step": "/blog/monthly-payroll-checklist",
};

export const isMergedPost = (slug?: string | null) => !!slug && slug in MERGED_POSTS;
