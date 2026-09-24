// GA4 conversion events. A no-op until NEXT_PUBLIC_GA_ID is set (gtag absent).
// Event names follow the SEO spec: demo_view, demo_start, demo_submit,
// pricing_view, calculator_use, blog_read, contact_submit.
type Gtag = (cmd: "event", name: string, params?: Record<string, unknown>) => void;

export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, { page_path: window.location.pathname, ...params });
}
