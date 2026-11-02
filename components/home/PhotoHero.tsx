import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { AiChatDemo } from "@/components/home/AiChatDemo";

// The home page's first block: the sign-in page's idea (the pebble stack at sunset, full width), with the assistant where
// the sign-in card sits. The photo is decorative; the tint carries the brand colour and keeps the words readable.
export function PhotoHero() {
  return (
    <section id="home-hero" className="relative isolate -mt-16 overflow-hidden bg-[#15147b] text-white">
      <Image
        src="/hero/pebbles.webp"
        alt=""
        width={2000}
        height={1022}
        priority
        sizes="100vw"
        aria-hidden="true"
        className="relative -z-20 block h-[56vw] w-full object-cover object-[54%_70%] lg:absolute lg:inset-0 lg:h-full lg:object-[54%_72%]"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(21,20,123,0)_0,rgba(21,20,123,0)_42vw,#15147b_56vw,#15147b_100%)] lg:bg-[linear-gradient(90deg,#15147b_0%,rgba(21,20,123,0.92)_24%,rgba(21,20,123,0.78)_34%,rgba(21,20,123,0.5)_42%,rgba(21,20,123,0.1)_50%,rgba(21,20,123,0)_56%)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1560px] items-center gap-10 px-4 pb-12 pt-2 sm:px-8 lg:min-h-[784px] lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.55fr)_minmax(400px,0.75fr)] lg:gap-0 lg:px-[clamp(32px,5vw,88px)] lg:pb-14 lg:pt-[120px]">
        <div className="max-w-[540px]">
          {/* The category line is part of the H1, so the page's main heading says what NeevHR is. */}
          <h1 className="text-[2.6rem] font-bold leading-[1.06] tracking-tight sm:text-[3.4rem]">
            <span className="mb-3 block text-sm font-semibold leading-normal tracking-wide text-[#cfc8ff]">India-first HRMS &amp; Payroll Software:</span>{" "}
            Foundation for{" "}
            <span className="block w-fit bg-gradient-to-r from-[#cfc8ff] to-[#ffb37a] bg-clip-text text-transparent">Every HR Process</span>
          </h1>
          <p className="hero-intro mt-5 text-[17px] leading-relaxed text-white/90">
            Hire, pay and grow your people on one platform built for Indian companies.{" "}
            <strong className="font-semibold text-white">NeevHR is fully AI enabled, with AI inside each module and not only a chat.</strong>
          </p>
          <ul className="mt-6 grid gap-2.5 text-[15px] text-white/90">
            {[
              "PF, ESI, PT, LWF and TDS built in, not added on",
              "Set up and run by your own HR team",
              "AI suggests on the screen, and a person decides",
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
              See AI in NeevHR
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
