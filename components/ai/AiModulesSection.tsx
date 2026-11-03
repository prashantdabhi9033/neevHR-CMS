import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/site/Reveal";
import { AiScreen } from "@/components/ai/AiScreens";
import { aiDataRows, aiFeature, aiFeatures, aiRules, homeAiFeatures } from "@/lib/ai-features";

function Rules() {
  return (
    <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {aiRules.map((r) => (
        <li key={r.title}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-tint text-brand">
            <Icon name={r.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-3 text-[15px] font-semibold text-ink">{r.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-body">{r.body}</p>
        </li>
      ))}
    </ul>
  );
}

/** Home: the few strongest screens, the names of the rest, and the rules in short. */
export function AiModulesHome() {
  const others = aiFeatures.filter((f) => !homeAiFeatures.includes(f.key));
  return (
    <section id="ai-in-modules" className="scroll-mt-16 border-b border-line bg-white py-16 lg:py-20">
      <Container wide>
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Fully AI enabled</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">AI inside each module, not only in a chat</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            It works on the screen where the work happens, and every result is a labelled suggestion. These are sample screens, with sample names and figures.
          </p>
        </Reveal>
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {homeAiFeatures.map((key, i) => (
            <Reveal key={key} delay={i * 60} className="flex min-w-0 flex-col">
              <h3 className="text-[15px] font-semibold text-ink">{aiFeature(key).name}</h3>
              <p className="mb-3 mt-1 text-sm leading-relaxed text-body">{aiFeature(key).decides}</p>
              <div className="flex-1">
                <AiScreen name={key} />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm font-medium text-muted">Also inside the modules:</span>
          {others.map((f) => (
            <Link key={f.key} href={`/features/ai-assistant#ai-${f.key}`} className="rounded-full border border-line px-3 py-1 text-[13px] font-medium text-body transition-colors hover:border-brand/40 hover:text-brand">
              {f.name}
            </Link>
          ))}
        </div>
        <Rules />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-body">
          Your Company Admin decides who gets the assistant, and a usage report shows credits used by person and
          department, never what anyone asked. It reads only what the person&apos;s role can open on screen.
        </p>
        <div className="mt-8">
          <Button href="/features/ai-assistant" variant="secondary">
            See every AI feature
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

/** AI page: every feature with its sample screen, the rules, and what goes to the provider. */
export function AiModulesFull() {
  return (
    <>
      <section id="ai-in-modules" className="scroll-mt-16 border-b border-line bg-white py-16 lg:py-20">
        <Container wide>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">AI inside each module</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">On the screen where the work happens</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              Each one sits in its module and is switched separately from the chat. These are sample screens: the labels and states are the product&apos;s, and the names and figures are made up.
            </p>
          </Reveal>
          <div className="mt-10 grid items-start gap-x-6 gap-y-12 lg:grid-cols-2">
            {aiFeatures.map((f) => (
              <article key={f.key} id={`ai-${f.key}`} className="min-w-0 scroll-mt-24">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-dark">{f.module}</span>
                <h3 className="mt-1 text-lg font-semibold text-ink">{f.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{f.what}</p>
                <dl className="mb-4 mt-2.5 grid gap-1 text-sm leading-relaxed">
                  <div><dt className="inline font-medium text-ink">Runs: </dt><dd className="inline text-body">{f.when}</dd></div>
                  <div><dt className="inline font-medium text-ink">You decide: </dt><dd className="inline text-body">{f.decides}</dd></div>
                </dl>
                <AiScreen name={f.key} />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="ai-rules" className="scroll-mt-16 border-b border-line bg-white py-16 lg:py-20">
        <Container wide>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">The rules every AI feature follows</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">You stay in charge of what it does</h2>
          </Reveal>
          <Rules />
        </Container>
      </section>

      <section id="ai-data" className="scroll-mt-16 border-b border-line bg-surface-soft py-16 lg:py-20">
        <Container>
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">What goes to the AI provider</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Feature by feature, in plain words</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              When your company switches a feature on, this goes to our AI provider, Anthropic, which may process it outside India. Files are sent whole, and a file can contain what is printed on it, so ask people to upload only what the claim or proof needs. See the{" "}
              <Link href="/privacy#ai" className="font-medium text-brand hover:text-brand-dark">privacy policy</Link>.
            </p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">What each AI feature sends to the AI provider</caption>
              <thead>
                <tr className="border-b border-line bg-surface-soft text-ink">
                  <th scope="col" className="w-[28%] px-5 py-3 font-semibold">Feature</th>
                  <th scope="col" className="px-5 py-3 font-semibold">What is sent</th>
                </tr>
              </thead>
              <tbody className="text-body">
                {aiDataRows.map((r) => (
                  <tr key={r.feature} className="border-b border-line align-top last:border-0">
                    <th scope="row" className="px-5 py-3 font-medium text-ink">{r.feature}</th>
                    <td className="px-5 py-3 leading-relaxed">{r.sent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
    </>
  );
}
