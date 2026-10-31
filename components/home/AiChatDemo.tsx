"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

// A played-out sample of the NeevHR AI assistant (sample names and figures). Each scene follows what the product really
// does: leave is drafted as a review card and goes only when the person confirms; the payroll answer is the release check's.
type Step =
  | { kind: "user"; text: string }
  | { kind: "ai"; text: string; strong?: string; after?: string }
  | { kind: "checked"; text: string }
  | { kind: "card"; rows: [string, string][] };

type Scene = { who: string; steps: Step[] };

const scenes: Scene[] = [
  {
    who: "Employee",
    steps: [
      { kind: "user", text: "Apply casual leave for 5 November" },
      { kind: "ai", text: "Here is your request. Check it and confirm." },
      { kind: "card", rows: [["Type", "Casual leave"], ["Date", "05 Nov 2026"], ["Days", "1"]] },
      { kind: "ai", text: "Done. Your leave request has gone to ", strong: "Meera Nair", after: " for approval." },
    ],
  },
  {
    who: "Payroll admin",
    steps: [
      { kind: "user", text: "Why can't I release October payroll?" },
      { kind: "checked", text: "Checked what is stopping the payroll run" },
      { kind: "ai", text: "It is waiting for approval from ", strong: "Priya Shah", after: ". It can be published once they approve it." },
    ],
  },
  {
    who: "Employee, in Hindi",
    steps: [
      { kind: "user", text: "मेरी कितनी casual leave बाकी है?" },
      { kind: "ai", text: "आपके पास ", strong: "6 casual leave", after: " बाकी हैं। क्या मैं अनुरोध तैयार करूँ?" },
    ],
  },
  {
    who: "Employee",
    steps: [
      { kind: "user", text: "What was my net pay last month?" },
      { kind: "ai", text: "Your net pay for October 2026 was ", strong: "₹78,450", after: ". Gross ₹91,200, deductions ₹12,750." },
    ],
  },
];

const TYPING_MS = 1000;
const READ_MS = 1500;
const CARD_MS = 2200;
const SCENE_PAUSE_MS = 3200;

export function AiChatDemo({ className = "" }: { className?: string }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  // How many steps of the scene show. It starts complete, so a reader without scripts or with reduced motion sees it all.
  const [shown, setShown] = useState(scenes[0].steps.length);
  const [typing, setTyping] = useState(false);
  const [confirmed, setConfirmed] = useState(true);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const list = timers.current;
    const wait = (fn: () => void, ms: number) => list.push(window.setTimeout(fn, ms));
    const play = (index: number) => {
      const { steps } = scenes[index];
      setSceneIndex(index);
      setShown(0);
      setConfirmed(false);
      setTyping(false);
      let at = 500;
      steps.forEach((step, i) => {
        if (step.kind !== "user") {
          wait(() => setTyping(true), at);
          at += step.kind === "checked" ? TYPING_MS / 2 : TYPING_MS;
        }
        wait(() => {
          setTyping(false);
          setShown(i + 1);
        }, at);
        at += step.kind === "card" ? CARD_MS : READ_MS;
        if (step.kind === "card") wait(() => setConfirmed(true), at - 700);
      });
      wait(() => play((index + 1) % scenes.length), at + SCENE_PAUSE_MS - READ_MS);
    };
    play(0);
    return () => list.forEach((t) => window.clearTimeout(t));
  }, []);

  const scene = scenes[sceneIndex];
  return (
    <div className={`relative overflow-hidden rounded-3xl bg-white text-left text-ink shadow-[0_40px_90px_rgba(3,2,34,0.55)] ${className}`}>
      <div className="absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-brand-soft via-brand to-cta" aria-hidden="true" />
      <p className="sr-only">
        A sample chat. An employee asks for a day of casual leave, checks the request and confirms it. A payroll admin asks why payroll cannot be released and is told who must approve it.
      </p>
      <div className="px-5 pb-5 pt-6 sm:px-7" aria-hidden="true">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-tint text-brand-soft">
              <Icon name="sparkle" className="h-[18px] w-[18px]" />
            </span>
            <p className="text-sm font-semibold text-brand">NeevHR AI assistant</p>
          </div>
          <span className="rounded-full bg-surface-soft px-2.5 py-1 text-xs font-medium text-muted ring-1 ring-line">{scene.who}</span>
        </div>

        <div className="mt-4 flex h-[345px] flex-col justify-end gap-2.5 overflow-hidden text-sm leading-relaxed">
          {scene.steps.slice(0, shown).map((step, i) => (
            <div key={`${sceneIndex}-${i}`} className="animate-fade-up">
              {step.kind === "user" && <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-brand-soft px-4 py-2.5 text-white">{step.text}</p>}
              {step.kind === "checked" && (
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <Icon name="check" className="h-3.5 w-3.5 text-accent" />
                  {step.text}
                </p>
              )}
              {step.kind === "ai" && (
                <p className="w-fit max-w-[92%] rounded-2xl rounded-bl-md bg-surface-soft px-4 py-2.5 text-body">
                  {step.text}
                  {step.strong && <strong className="font-semibold text-ink">{step.strong}</strong>}
                  {step.after}
                </p>
              )}
              {step.kind === "card" && (
                <div className="w-[88%] rounded-2xl border border-line p-3.5">
                  <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[13px]">
                    {step.rows.map(([k, v]) => (
                      <div key={k} className="contents">
                        <dt className="text-muted">{k}</dt>
                        <dd className="font-medium text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-3 flex justify-end gap-2 text-[13px] font-semibold">
                    <span className="rounded-lg px-3 py-1.5 text-muted ring-1 ring-line">Cancel</span>
                    <span className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-white transition-all duration-300 ${confirmed ? "scale-95 bg-success-dark" : "bg-brand-soft"}`}>
                      {confirmed && <Icon name="check" className="h-3.5 w-3.5" />}
                      {confirmed ? "Confirmed" : "Confirm"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
          {typing && (
            <p className="flex w-fit gap-1 rounded-2xl rounded-bl-md bg-surface-soft px-4 py-3.5">
              {[0, 150, 300].map((d) => (
                <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" style={{ animationDelay: `${d}ms` }} />
              ))}
            </p>
          )}
        </div>

        <p className="mt-4 flex items-start gap-2 border-t border-line pt-3.5 text-xs leading-relaxed text-muted">
          <Icon name="shield" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
          It reads only what the person&apos;s role can open, and nothing changes until they confirm.
        </p>
      </div>
    </div>
  );
}
