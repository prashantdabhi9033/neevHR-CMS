import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/Button";

const controls = [
  {
    icon: "users",
    title: "Who can use it",
    body: "Your company switches it on, module by module. Your Company Admin has it from day one and decides who else gets it: everyone, or only the people you name.",
  },
  {
    icon: "wallet",
    title: "How much it can use",
    body: "AI runs on prepaid credits your company buys, never the employee. You see the balance at any time, and when the credits finish, AI stops. There is no surprise bill.",
  },
  {
    icon: "chart",
    title: "Who used how much",
    body: "A usage report by person and department, with date and module filters, ready to export. It shows questions asked and credits used, never what anyone asked.",
  },
  {
    icon: "shield",
    title: "What it can see",
    body: "Exactly what the person's role can open on screen. Never another person's pay, and bank, PAN, Aadhaar, UAN, ESI number, address, health and disciplinary data are never sent to the AI provider. Anyone who tries a trick to get more is warned once, then blocked for a day.",
  },
];

export function AiControlSection({ cta = true }: { cta?: boolean }) {
  return (
    <section id="ai-control" className="scroll-mt-16 border-b border-line bg-surface-soft py-16 lg:py-20">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">AI you stay in control of</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Your people get answers. You keep the keys.</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            Employees stop waiting for HR on routine questions, and anything that would change a record comes back to them to confirm. Your admin decides the rest.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {controls.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
                  <Icon name={c.icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {cta && (
          <div className="mt-8">
            <Button href="/features/ai-assistant" variant="secondary">
              Explore the AI assistant
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
