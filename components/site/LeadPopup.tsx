"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { sizes, type Intent } from "@/components/demo/DemoForm";
import { track } from "@/lib/track";

// Lead-capture popup. Shown at most once per session, and only on a sign of
// real interest, never on landing (Google's intrusive-interstitial guidance):
//   - exit intent on desktop (cursor leaves through the top of the window)
//   - 40 s on a page, or 15 s from the third page of the visit
//   - scrolling past 55% of a long page
// Nothing fires in the first 8 s of a page. Dismissing hides it for 3 days;
// submitting, or visiting /demo or /contact, stops it for longer.

const MIN_DWELL_MS = 8_000;
const TIME_TRIGGER_MS = 40_000;
const ENGAGED_TIME_TRIGGER_MS = 15_000;
const SCROLL_TRIGGER = 0.55;
const DISMISS_DAYS = 3;
const SUBMIT_DAYS = 180;

const EXCLUDED = ["/demo", "/contact", "/privacy", "/terms", "/dpdp", "/admin"];

const LS_KEY = "neevhr_lead_popup";
const SS_SHOWN = "neevhr_popup_shown";
const SS_PAGES = "neevhr_pages";
const SS_VARIANT = "neevhr_popup_variant";

type Trigger = "exit" | "time" | "scroll";
type Status = "idle" | "submitting" | "done" | "error";

const VARIANTS: Record<
  Intent,
  { eyebrow: string; title: string; sub: string; submit: string; doneBody: string }
> = {
  demo: {
    eyebrow: "Book a demo",
    title: "See NeevHR run your payroll in 30 minutes",
    sub: "A walkthrough on your own scenarios: PF, ESI, PT, TDS, attendance and leave.",
    submit: "Book my demo",
    doneBody: "Our team will reach out within one business day to schedule your walkthrough.",
  },
  quote: {
    eyebrow: "Contact us",
    title: "Talk to our team about your HR and payroll",
    sub: "Tell us your headcount and we will share pricing and an implementation plan for your team.",
    submit: "Contact me",
    doneBody: "Our team will reach out within one business day with pricing for your team.",
  },
};

const POINTS = [
  "India-first: PF, ESI, PT, LWF and TDS built in",
  "Typical go-live in 4 to 8 weeks",
  "Configured by your HR admin, no consultant needed",
];

// Storage can throw (private mode, blocked site data), so every access is guarded.
function readLocal(): { until?: number } {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || "{}");
  } catch {
    return {};
  }
}
function snooze(days: number) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({ until: Date.now() + days * 86_400_000 }));
  } catch {}
}
function ssGet(k: string) {
  try {
    return sessionStorage.getItem(k);
  } catch {
    return null;
  }
}
function ssSet(k: string, v: string) {
  try {
    sessionStorage.setItem(k, v);
  } catch {}
}

function isExcluded(path: string) {
  return EXCLUDED.some((p) => path === p || path.startsWith(`${p}/`));
}

export function LeadPopup() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<Intent>("demo");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const started = useRef(false);

  // Count pages per visit; a visit to /demo or /contact means the person has
  // already found the form, so stay quiet for the rest of the session.
  useEffect(() => {
    const pages = Number(ssGet(SS_PAGES) || "0") + 1;
    ssSet(SS_PAGES, String(pages));
    if (pathname.startsWith("/demo") || pathname.startsWith("/contact")) {
      ssSet(SS_SHOWN, "1");
    }
  }, [pathname]);

  const show = useCallback(
    (trigger: Trigger) => {
      if (ssGet(SS_SHOWN)) return;
      ssSet(SS_SHOWN, "1");
      let v = ssGet(SS_VARIANT) as Intent | null;
      if (v !== "demo" && v !== "quote") {
        v = Math.random() < 0.5 ? "demo" : "quote";
        ssSet(SS_VARIANT, v);
      }
      setVariant(v);
      lastFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
      track("popup_view", { variant: v, trigger });
    },
    [],
  );

  // Arm the triggers for each page.
  useEffect(() => {
    if (isExcluded(pathname) || ssGet(SS_SHOWN)) return;
    const { until } = readLocal();
    if (until && until > Date.now()) return;

    const landed = Date.now();
    const armed = () => Date.now() - landed >= MIN_DWELL_MS;
    const engaged = Number(ssGet(SS_PAGES) || "0") >= 3;

    const timer = window.setTimeout(
      () => show("time"),
      engaged ? ENGAGED_TIME_TRIGGER_MS : TIME_TRIGGER_MS,
    );

    const onScroll = () => {
      const doc = document.documentElement;
      // Only long pages: on a short page the scroll depth means little.
      if (doc.scrollHeight < window.innerHeight * 1.6 || !armed()) return;
      const depth = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (depth >= SCROLL_TRIGGER) show("scroll");
    };

    const desktop = window.matchMedia("(pointer: fine)").matches;
    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0 && armed()) show("exit");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    if (desktop) document.addEventListener("mouseout", onLeave);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [pathname, show]);

  const close = useCallback(() => {
    setOpen(false);
    if (status !== "done") {
      snooze(DISMISS_DAYS);
      track("popup_dismiss", { variant });
    }
    lastFocus.current?.focus?.();
  }, [status, variant]);

  // While open: lock page scroll, focus the first field, Esc closes, Tab stays inside.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const els = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([type="hidden"]):not([tabindex="-1"]), select, textarea',
      );
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("done");
      snooze(SUBMIT_DAYS);
      track(variant === "quote" ? "quote_submit" : "demo_submit", {
        intent: variant,
        source: "popup",
        company_size: String(data.size ?? ""),
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function onStart() {
    if (started.current) return;
    started.current = true;
    track("demo_start", { intent: variant, source: "popup" });
  }

  if (!open) return null;
  const v = VARIANTS[variant];

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="lead-popup-backdrop absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px]"
        onClick={close}
        aria-hidden="true"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className="lead-popup-panel relative flex max-h-[88vh] w-full flex-col overflow-y-auto rounded-t-3xl bg-white shadow-[var(--shadow-float)] sm:max-w-3xl sm:flex-row sm:overflow-hidden sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white sm:text-muted sm:hover:bg-surface-soft sm:hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* Brand panel */}
        <div className="bg-brand px-6 pb-6 pt-7 text-white sm:w-[42%] sm:shrink-0 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-mist">
            {v.eyebrow}
          </p>
          <h2 id="lead-popup-title" className="mt-2 pr-8 text-xl font-bold leading-snug sm:pr-0 sm:text-2xl">
            {v.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">{v.sub}</p>
          <ul className="mt-6 hidden space-y-3 sm:block">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-2.5 text-sm text-white/90">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/15">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <div className="flex-1 px-6 pb-6 pt-5 sm:p-8">
          {status === "done" ? (
            <div className="flex h-full flex-col items-center justify-center py-8 text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-success-tint text-success-dark">
                <Icon name="check" className="h-6 w-6" />
              </span>
              <p className="mt-4 text-lg font-semibold text-ink">Thanks, we have your request</p>
              <p className="mt-2 text-sm text-body">{v.doneBody}</p>
              <Button type="button" variant="secondary" className="mt-6" onClick={close}>
                Continue reading
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} onFocusCapture={onStart} className="flex flex-col gap-3.5">
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <input type="hidden" name="intent" value={variant} />
              <input
                type="hidden"
                name="message"
                value={`Submitted from the website popup on ${pathname}`}
              />
              <PopupField ref={firstFieldRef} label="Full name" name="name" required autoComplete="name" />
              <PopupField label="Work email" name="email" type="email" required autoComplete="email" />
              <div className="grid gap-3.5 sm:grid-cols-2">
                <PopupField label="Company" name="company" required autoComplete="organization" />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="popup-size" className="text-sm font-medium text-ink">
                    Employees<span className="text-brand"> *</span>
                  </label>
                  <select
                    id="popup-size"
                    name="size"
                    required
                    defaultValue=""
                    className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {sizes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <PopupField label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />

              {status === "error" && (
                <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                variant="cta"
                size="lg"
                className="mt-1 w-full"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : v.submit}
              </Button>
              <p className="text-center text-xs text-muted">
                No spam. We use your details only to contact you about NeevHR, as
                per the DPDP Act 2023.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function PopupField({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  ref,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  ref?: React.Ref<HTMLInputElement>;
}) {
  const id = `popup-${name}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
