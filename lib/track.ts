// GA4 conversion & engagement events.
// A no-op until NEXT_PUBLIC_GA_ID is set (or runs in debug mode if requested).

type Gtag = (
  cmd: "event" | "config" | "set" | "js",
  targetOrName: string | Date,
  params?: Record<string, unknown>
) => void;

function isDebugMode(): boolean {
  if (typeof window === "undefined") return false;
  return (
    process.env.NODE_ENV !== "production" ||
    window.location.search.includes("debug_ga=true")
  );
}

export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const payload = {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...params,
  };

  if (isDebugMode()) {
    console.log(`%c[GA4 Event] ${name}`, "color: #4f46e5; font-weight: bold;", payload);
  }

  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, payload);
}

export function trackPageView(page_path: string, page_title?: string) {
  track("page_view", {
    page_path,
    page_title: page_title || (typeof document !== "undefined" ? document.title : ""),
  });
}

export function trackCtaClick({
  text,
  href,
  location,
  variant,
}: {
  text: string;
  href?: string;
  location?: string;
  variant?: string;
}) {
  track("cta_click", {
    cta_text: text,
    cta_href: href ?? "",
    cta_location: location ?? "body",
    cta_variant: variant ?? "default",
  });
}

export function trackOutboundClick(url: string, text?: string) {
  try {
    const parsed = new URL(url);
    track("outbound_click", {
      destination_url: url,
      destination_domain: parsed.hostname,
      link_text: text ?? "",
    });
  } catch {
    track("outbound_click", {
      destination_url: url,
      link_text: text ?? "",
    });
  }
}

export function trackContactClick(type: "email" | "phone", value: string) {
  track("contact_click", {
    contact_type: type,
    contact_value: value,
  });
}

export function trackScrollDepth(depth: number, page_path: string) {
  track("scroll_depth", {
    depth_percent: depth,
    page_path,
  });
}

export function trackFaqToggle(question: string, open: boolean) {
  if (open) {
    track("faq_expand", { question_text: question });
  }
}

export function trackFileDownload(url: string, fileName?: string) {
  const name = fileName || url.split("/").pop() || "";
  const ext = name.split(".").pop() || "";
  track("file_download", {
    file_name: name,
    file_extension: ext,
    file_url: url,
  });
}

export function trackStoreBadgeClick(store: string) {
  track("store_badge_click", {
    store_platform: store,
    status: "coming_soon",
  });
}
