import Link from "next/link";
import { Container } from "@/components/ui/Container";

// Decision guides by company size and switch-from pages (audit WEB-008): these had only two or
// three internal links each, so the pillar pages and the footer now link to all of them.
export const chooseAndSwitch = {
  choose: [
    { label: "How to choose an HRMS in India", href: "/best-hrms-software-india" },
    { label: "HRMS for a small business", href: "/best-hrms-for-small-business" },
    { label: "HRMS for a mid-sized business", href: "/best-hrms-for-mid-sized-business" },
    { label: "HRMS for 1,000+ employees", href: "/best-hrms-for-1000-employees" },
    { label: "Choosing payroll software in India", href: "/best-payroll-software-india" },
    { label: "Payroll software for a growing business", href: "/best-payroll-software-for-growing-business" },
  ],
  switch: [
    { label: "Switch from Excel", href: "/switch-from-excel" },
    { label: "Switch from manual payroll", href: "/switch-from-manual-payroll" },
    { label: "Switch from a legacy HRMS", href: "/switch-from-legacy-hrms" },
    { label: "Replace point solutions", href: "/switch-from-point-solutions" },
  ],
};

export function ChooseAndSwitch({ className = "" }: { className?: string }) {
  return (
    <section className={`border-t border-line py-14 ${className}`}>
      <Container>
        <h2 className="text-xl font-bold tracking-tight text-ink">Choosing an HRMS, or switching to one</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {([
            ["By company size and need", chooseAndSwitch.choose],
            ["Moving from what you use today", chooseAndSwitch.switch],
          ] as const).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">{title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-flex rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink hover:border-brand hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
