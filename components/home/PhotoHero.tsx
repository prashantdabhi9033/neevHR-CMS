import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { AiChatDemo } from "@/components/home/AiChatDemo";

// The home page's first block: the sign-in page's idea (the tree on the hill, full width), with the assistant where the
// sign-in card sits. The photo is decorative; the tint carries the brand colour and keeps the words readable.
export function PhotoHero() {
  return (
    <section id="home-hero" className="relative isolate -mt-16 overflow-hidden bg-[#2f28a8] text-white">
      <Image
        src="/hero/nature.webp"
        alt=""
        width={1672}
        height={941}
        priority
        sizes="100vw"
        aria-hidden="true"
        className="relative -z-20 block h-auto w-full lg:absolute lg:inset-y-0 lg:left-[12%] lg:h-full lg:object-cover lg:object-[36%_40%] lg:[mask-image:linear-gradient(90deg,transparent,#000_16%)]"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(47,40,168,0)_0,rgba(47,40,168,0)_34vw,#2f28a8_56vw,#15147b_100%)] lg:bg-[linear-gradient(90deg,rgba(58,46,195,0.96)_0%,rgba(58,46,195,0.9)_32%,rgba(58,46,190,0.5)_42%,rgba(58,46,190,0.08)_52%,rgba(21,20,123,0)_62%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1560px] items-center gap-10 px-4 pb-12 pt-2 sm:px-8 lg:min-h-[784px] lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.55fr)_minmax(400px,0.75fr)] lg:gap-0 lg:px-[clamp(32px,5vw,88px)] lg:pb-14 lg:pt-[120px]">
        <div className="max-w-[540px]">
          <p className="text-sm font-semibold tracking-wide text-[#cfc8ff]">India-first HRMS &amp; Payroll Software</p>
          <h1 className="mt-3 text-[2.6rem] font-bold leading-[1.06] tracking-tight sm:text-[3.4rem]">
            Foundation for{" "}
            <span className="block w-fit bg-gradient-to-r from-[#cfc8ff] to-[#ffb37a] bg-clip-text text-transparent">Every HR Process</span>
          </h1>
          <p className="hero-intro mt-5 text-[17px] leading-relaxed text-white/90">
            Hire, pay and grow your people on one platform built for Indian companies, with an AI assistant that answers them in their own language.
          </p>
          <ul className="mt-6 grid gap-2.5 text-[15px] text-white/90">
            {[
              "PF, ESI, PT, LWF and TDS built in, not added on",
              "Live in 4 to 8 weeks, run by your own HR team",
              "AI you control: who uses it, how much, and who used what",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-[#ffb37a]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/demo" variant="cta" size="lg">
              Book a Demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="/features/ai-assistant" variant="inverse" size="lg">
              See the AI assistant
            </Button>
          </div>
        </div>

        {/* The middle column stays empty so the tree shows between the words and the panel. */}
        <div className="hidden lg:block" aria-hidden="true" />

        <AiChatDemo className="mx-auto w-full max-w-[480px] lg:mr-0" />
      </div>
    </section>
  );
}
