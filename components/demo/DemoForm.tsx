"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const sizes = ["500 - 1,000", "1,000 - 2,500", "2,500 - 5,000", "Other"];

type Status = "idle" | "submitting" | "done" | "error";

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

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
        <h3 className="mt-4 text-xl font-semibold text-ink">
          Thanks, we have your request
        </h3>
        <p className="mt-2 text-sm text-body">
          Our team will reach out within one business day to schedule your
          walkthrough.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
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
            Company size
          </label>
          <select
            id="size"
            name="size"
            required
            defaultValue=""
            className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          >
            <option value="" disabled>
              Select employees
            </option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
        <Field label="Role (optional)" name="role" autoComplete="organization-title" />
      </div>
      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          What would you like to see? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full">
          {status === "submitting" ? "Sending..." : "Request my demo"}
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
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
        className="h-11 rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
