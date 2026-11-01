"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

// The AI panel as the product draws it (web/src/features/ai/AiOnly.tsx, an Ant Design small card): title, purple
// "AI suggestion" tag, "Made on" date, then not run, running and ready. These screens play that out with sample data,
// the way AiChatDemo plays out the chat. They start complete, so no script or reduced motion shows the whole result.

export type Phase = "idle" | "press" | "running" | "ready";
export type Play = { phase: Phase; shown: number; run: number };

const RUNNING_MS = 1400;
const STEP_MS = 420;
const HOLD_MS = 5200;

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Plays only while on screen, so a page of these costs nothing out of view. */
export function usePlay(steps: number, { idleMs = 1300, delayMs = 0 }: { idleMs?: number; delayMs?: number } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState<Play>({ phase: "ready", shown: steps, run: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const timers: number[] = [];
    let visible = false;
    let playing = false;
    let run = 0;
    const wait = (fn: () => void, ms: number) => timers.push(window.setTimeout(fn, ms));
    const start = () => {
      playing = true;
      run += 1;
      const r = run;
      setPlay({ phase: "idle", shown: 0, run: r });
      let at = delayMs + idleMs;
      wait(() => setPlay({ phase: "press", shown: 0, run: r }), at - 280);
      wait(() => setPlay({ phase: "running", shown: 0, run: r }), at);
      at += RUNNING_MS;
      for (let i = 1; i <= steps; i++) {
        wait(() => setPlay({ phase: "ready", shown: i, run: r }), at);
        at += STEP_MS;
      }
      wait(() => {
        playing = false;
        if (visible) start();
      }, at + HOLD_MS);
    };
    // Start from the beginning before it scrolls into view, so it does not show the end first.
    const first = window.setTimeout(() => setPlay({ phase: "idle", shown: 0, run: 0 }), 0);
    timers.push(first);
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible && !playing) start();
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [steps, idleMs, delayMs]);

  return { ref, play };
}

/** Types a sentence each time a play starts. Empty until the first play; whole with no script or reduced motion. */
export function useTyped(text: string, play: Play) {
  const [n, setN] = useState(text.length);
  useEffect(() => {
    if (!play.run) return;
    const reset = window.setTimeout(() => setN(0), 0);
    const id = window.setInterval(() => setN((v) => (v >= text.length ? v : v + 1)), 42);
    return () => {
      window.clearTimeout(reset);
      window.clearInterval(id);
    };
  }, [play.run, text]);
  return play.phase === "idle" && !play.run ? "" : text.slice(0, n);
}

/** A line of the result. Hidden lines keep their space, so the card never jumps. */
export function Step({ play, at, className = "", children }: { play: Play; at: number; className?: string; children: ReactNode }) {
  return <div className={`${play.shown > at ? "animate-fade-up" : "invisible"} ${className}`}>{children}</div>;
}

const TAGS = {
  purple: "border-[#d3adf7] bg-[#f9f0ff] text-[#531dab]",
  green: "border-[#b7eb8f] bg-[#f6ffed] text-[#389e0d]",
  gold: "border-[#ffe58f] bg-[#fffbe6] text-[#d48806]",
  red: "border-[#ffa39e] bg-[#fff1f0] text-[#cf1322]",
  plain: "border-[#d9d9d9] bg-[#fafafa] text-ink",
};

export function Tag({ tone = "plain", children }: { tone?: keyof typeof TAGS; children: ReactNode }) {
  return <span className={`inline-block rounded border px-[7px] py-px text-xs leading-5 ${TAGS[tone]}`}>{children}</span>;
}

export function Btn({ kind = "default", pressed, children }: { kind?: "default" | "ghost" | "primary"; pressed?: boolean; children: ReactNode }) {
  const look =
    kind === "primary"
      ? "border-brand bg-brand text-white"
      : kind === "ghost"
        ? "border-brand text-brand"
        : "border-[#d9d9d9] bg-white text-ink";
  return <span className={`inline-block rounded-md border px-2.5 py-[3px] text-[13px] transition-transform duration-200 ${look} ${pressed ? "scale-95" : ""}`}>{children}</span>;
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="text-[12.5px] leading-snug text-muted">{children}</p>;
}

export function Alert({ tone = "warning", title, children }: { tone?: "warning" | "info"; title: string; children?: ReactNode }) {
  const look = tone === "warning" ? "border-[#ffe58f] bg-[#fffbe6]" : "border-[#91caff] bg-[#e6f4ff]";
  return (
    <div className={`rounded-lg border px-3 py-2 text-[13px] leading-snug ${look}`}>
      <p className="font-medium text-ink">{title}</p>
      {children && <p className="mt-0.5 text-[12.5px] text-body">{children}</p>}
    </div>
  );
}

export function Fields({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1.5 text-[13px]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-muted">{k}</dt>
          <dd className="tnum min-w-0 text-ink">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * The small card with its states. `runLabel` absent: the feature runs on an upload, so it goes straight to running.
 * `afterAsk`: nothing is drawn until the person asks (report from a sentence).
 */
export function AiCard({ title, made, play, runLabel, afterAsk, children }: { title: string; made: string; play: Play; runLabel?: string; afterAsk?: boolean; children: ReactNode }) {
  const waiting = play.phase === "idle" || play.phase === "press";
  const running = play.phase === "running" || (waiting && !runLabel);
  return (
    <div className={`rounded-lg border border-[#f0f0f0] bg-white ${waiting && afterAsk ? "invisible" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b border-[#f0f0f0] px-3 py-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-ink">{title}</span>
          <Tag tone="purple">AI suggestion</Tag>
        </div>
        <span className={`text-[12.5px] text-muted ${play.phase === "ready" ? "" : "invisible"}`}>
          Made on <span className="tnum">{made}</span>
        </span>
      </div>
      <div className="relative p-3">
        <div className={play.phase === "ready" ? "" : "invisible"}>{children}</div>
        {waiting && runLabel && (
          <div className="absolute inset-3">
            <Btn pressed={play.phase === "press"}>{runLabel}</Btn>
          </div>
        )}
        {running && (
          <div className="absolute inset-3 animate-pulse space-y-2.5 overflow-hidden">
            {["w-full", "w-[92%]", "w-[70%]"].map((w) => (
              <div key={w} className={`h-3.5 rounded bg-[#ececf1] ${w}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** The screen around a panel: where it sits in the product, on the app's page colour. */
export function ScreenFrame({ crumb, alt, children, frameRef }: { crumb: string; alt: string; children: ReactNode; frameRef?: React.Ref<HTMLDivElement> }) {
  return (
    <figure ref={frameRef} className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
      <figcaption className="sr-only">{alt} Sample data.</figcaption>
      <div className="flex flex-1 flex-col" aria-hidden="true">
        <div className="flex items-center justify-between gap-3 border-b border-line px-3.5 py-2">
          <p className="flex min-w-0 items-center gap-1.5 truncate text-xs font-medium text-muted">
            <Icon name="sparkle" className="h-3.5 w-3.5 shrink-0 text-brand-soft" />
            <span className="truncate">{crumb}</span>
          </p>
          <span className="shrink-0 rounded-full bg-surface-soft px-2 py-0.5 text-[11px] font-medium text-muted ring-1 ring-line">Sample</span>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 bg-[#f5f6fa] p-3 sm:p-3.5">{children}</div>
      </div>
    </figure>
  );
}
