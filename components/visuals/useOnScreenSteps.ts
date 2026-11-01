"use client";

import { useEffect, useRef, useState } from "react";

// Drives a looping sample: `step` counts 0..steps-1 while the element is on screen and the page is visible, and stops
// otherwise. It starts on the last step, so the server render, a reader without scripts and a reader who asked for
// reduced motion all see the complete picture and nothing moves.
export function useOnScreenSteps<T extends HTMLElement>(steps: number, intervalMs = 1800, holdLastMs = 3200) {
  const ref = useRef<T>(null);
  const [step, setStep] = useState(steps - 1);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;
    let current = -1;
    let onScreen = false;
    const stop = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      timer = undefined;
    };
    const tick = () => {
      current = (current + 1) % steps;
      setStep(current);
      timer = window.setTimeout(tick, current === steps - 1 ? holdLastMs : intervalMs);
    };
    const sync = () => {
      stop();
      if (onScreen && !document.hidden) timer = window.setTimeout(tick, current < 0 ? 300 : intervalMs);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        onScreen = e.isIntersecting;
        sync();
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [steps, intervalMs, holdLastMs]);

  return { ref, step };
}
