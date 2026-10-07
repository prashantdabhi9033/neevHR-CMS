"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  trackPageView,
  trackCtaClick,
  trackOutboundClick,
  trackContactClick,
  trackScrollDepth,
  trackFaqToggle,
  trackFileDownload,
  trackStoreBadgeClick,
} from "@/lib/track";

function getElementLocation(el: HTMLElement): string {
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("dialog, [role='dialog'], [aria-modal='true']")) return "modal";
  if (el.closest("nav")) return "navigation";
  const section = el.closest("section");
  if (section?.id) return `section_${section.id}`;
  return "page_content";
}

export function AnalyticsListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firedScroll = useRef<Set<number>>(new Set());
  const lastTrackedPath = useRef<string>("");

  const fullPath = searchParams && searchParams.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  // 1. Accurate Page View tracking on initial load and SPA transitions
  useEffect(() => {
    if (!fullPath || fullPath === lastTrackedPath.current) return;
    lastTrackedPath.current = fullPath;
    firedScroll.current.clear();

    // Small delay ensures document.title has updated
    const timer = setTimeout(() => {
      trackPageView(fullPath, document.title);
    }, 100);

    return () => clearTimeout(timer);
  }, [fullPath]);

  // 2. Scroll Depth tracking (25%, 50%, 75%, 90%)
  useEffect(() => {
    const milestones = [25, 50, 75, 90];
    let ticking = false;

    function handleScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        ticking = false;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollHeight <= 0) return;

        const currentPercent = Math.min(
          100,
          Math.round((window.scrollY / scrollHeight) * 100)
        );

        for (const m of milestones) {
          if (currentPercent >= m && !firedScroll.current.has(m)) {
            firedScroll.current.add(m);
            trackScrollDepth(m, fullPath);
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fullPath]);

  // 3. Global click delegation for CTAs, outbound links, downloads, contact links, and store badges
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement | null)?.closest(
        "a, button, [role='button'], [data-store], [data-analytics-click]"
      ) as HTMLElement | null;

      if (!target) return;

      // Mobile app store badges
      const storeAttr = target.getAttribute("data-store") || target.dataset.store;
      if (storeAttr) {
        trackStoreBadgeClick(storeAttr);
        return;
      }

      // Check if <a> tag
      if (target.tagName.toLowerCase() === "a") {
        const anchor = target as HTMLAnchorElement;
        const href = anchor.getAttribute("href") || "";
        const text = anchor.innerText?.trim() || anchor.getAttribute("aria-label") || "";

        // Email / Phone contact links
        if (href.startsWith("mailto:")) {
          trackContactClick("email", href.replace(/^mailto:/i, "").trim());
          return;
        }
        if (href.startsWith("tel:")) {
          trackContactClick("phone", href.replace(/^tel:/i, "").trim());
          return;
        }

        // File download links (.pdf, .xlsx, .csv, etc.)
        if (/\.(pdf|xlsx|xls|csv|docx|zip)($|\?)/i.test(href)) {
          trackFileDownload(href);
          return;
        }

        // Outbound links (external domains)
        if (href.startsWith("http://") || href.startsWith("https://")) {
          try {
            const urlObj = new URL(href);
            if (urlObj.hostname !== window.location.hostname) {
              trackOutboundClick(href, text);
              return;
            }
          } catch {
            // ignore malformed URLs
          }
        }

        // Key CTAs (Demo, Pricing, Contact, Calculator, or button-styled links)
        const isCtaHref =
          href.includes("/demo") ||
          href.includes("/pricing") ||
          href.includes("/contact") ||
          href.includes("/tools/");

        const isCtaStyled =
          target.classList.contains("bg-cta") ||
          target.classList.contains("bg-brand") ||
          target.hasAttribute("data-analytics-cta");

        if (isCtaHref || isCtaStyled) {
          trackCtaClick({
            text,
            href,
            location: getElementLocation(target),
            variant: isCtaStyled ? "primary/cta" : "link",
          });
        }
        return;
      }

      // Check if <button>
      if (target.tagName.toLowerCase() === "button") {
        const text = target.innerText?.trim() || target.getAttribute("aria-label") || "";
        if (!text) return;

        // Skip close/dismiss buttons that already handle their own tracking
        if (text === "✕" || text === "Close" || target.getAttribute("aria-label") === "Close") {
          return;
        }

        const isCta =
          target.classList.contains("bg-cta") ||
          target.classList.contains("bg-brand") ||
          target.getAttribute("type") === "submit";

        if (isCta) {
          trackCtaClick({
            text,
            location: getElementLocation(target),
            variant: target.getAttribute("type") === "submit" ? "submit" : "button",
          });
        }
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [fullPath]);

  // 4. FAQ accordion expansion
  useEffect(() => {
    function handleToggle(e: Event) {
      const details = e.target as HTMLDetailsElement | null;
      if (details && details.tagName === "DETAILS" && details.open) {
        const summary = details.querySelector("summary");
        const question =
          summary?.innerText?.replace(/\s*\+\s*$/, "").trim() || "";
        if (question) {
          trackFaqToggle(question, true);
        }
      }
    }

    document.addEventListener("toggle", handleToggle, { capture: true });
    return () => document.removeEventListener("toggle", handleToggle, { capture: true });
  }, []);

  return null;
}
