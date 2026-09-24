"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { track } from "@/lib/track";

const sizes = [
  "Under 100",
  "100 - 500",
  "500 - 1,000",
  "1,000 - 2,500",
  "2,500 - 5,000",
  "5,000+",
];

const requirements = [
  "Complete HRMS",
  "Payroll & statutory compliance",
  "Attendance, shifts & leave",
  "Recruitment & onboarding",
  "Performance & compensation",
  "Switching from another HRMS",
  "Other",
];

type Status = "idle" | "submitting" | "done" | "error";
export type Intent = "demo" | "quote";

const copy: Record<
  Intent,
  { submit: string; sending: string; doneTitle: string; doneBody: string; ask: string }
> = {
  demo: {
    submit: "Request my demo",
    sending: "Sending...",
    doneTitle: "Thanks, we have your request",
    doneBody:
      "Our team will reach out within one business day to schedule your walkthrough.",
    ask: "What would you like to see? (optional)",
  },
  quote: {
    submit: "Get my quote",
    sending: "Sending...",
    doneTitle: "Thanks, we have your request",
    doneBody:
      "Our team will reach out within one business day with a tailored quote for your team.",
    ask: "Anything we should know for your quote? (optional)",
  },
};

export function DemoForm({ intent = "demo" }: { intent?: Intent }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const t = copy[intent];
  const started = useRef(false);
  const today = new Date().toISOString().slice(0, 10);

  function onStart() {
    if (started.current) return;
    started.current = true;
    track("demo_start", { intent });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
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
      track(intent === "quote" ? "quote_submit" : "demo_submit", {
        intent,
        company_size: String(data.size ?? ""),
        requirement: String(data.requirement ?? ""),
      });
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-[var(--shadow-card)]">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent-tint text-accent-dark">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-xl font-semibold text-ink">{t.doneTitle}</h3>
        <p className="mt-2 text-sm text-body">{t.doneBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocusCapture={onStart}
      className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      {/* honeypot */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input type="hidden" name="intent" value={intent} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <Field label="Company" name="company" required autoComplete="organization" />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="size" className="text-sm font-medium text-ink">
            Employee count <span className="text-brand"> *</span>
          </label>
          <select
            id="size"
            name="size"
            required
            defaultValue=""
            className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            <option value="" disabled>
              Select employee count
            </option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Current HRMS or payroll tool" name="currentHrms" placeholder="e.g. Excel, another HRMS" />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="requirement" className="text-sm font-medium text-ink">
            Primary requirement
          </label>
          <select
            id="requirement"
            name="requirement"
            defaultValue=""
            className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            <option value="">Select one</option>
            {requirements.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        {intent === "demo" && (
          <Field label="Preferred demo date" name="preferredDate" type="date" min={today} />
        )}
        <Field label="Role (optional)" name="role" autoComplete="organization-title" />
      </div>
      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          {t.ask}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? t.sending : t.submit}
        </Button>
        <p className="mt-3 text-center text-xs text-muted">
          By submitting you agree to be contacted about NeevHR. We respect the
          DPDP Act 2023.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  min?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        min={min}
        className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
