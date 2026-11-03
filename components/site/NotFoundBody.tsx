import Link from "next/link";

// The 404 body shared by the in-layout not-found page and the global one: where to go next,
// so a broken or mistyped link still leads somewhere useful.
const links = [
  { label: "HRMS software", href: "/hrms" },
  { label: "Payroll software", href: "/payroll" },
  { label: "India payroll: PF, ESI, PT, LWF, TDS", href: "/india-payroll" },
  { label: "All features", href: "/features" },
  { label: "Pricing and editions", href: "/pricing" },
  { label: "Free HR and payroll calculators", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "Book a demo", href: "/demo" },
];

export function NotFoundBody() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">This page could not be found</h1>
      <p className="mt-4 text-base leading-relaxed text-body">
        The link may be old or mistyped. These pages are a good place to continue.
      </p>
      <ul className="mt-8 grid gap-2 text-left sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="block rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink hover:border-brand hover:text-brand"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">
        Looking for something specific? Write to{" "}
        <a className="text-brand underline" href="mailto:hello@neevhr.com">hello@neevhr.com</a>.
      </p>
    </div>
  );
}
