"use client";

import { useRef, type ReactNode } from "react";
import { track } from "@/lib/track";

// Fires one GA4 `calculator_use` event on the first interaction with a
// calculator, without each calculator having to know about analytics.
export function CalcTracker({ tool, children }: { tool: string; children: ReactNode }) {
  const fired = useRef(false);
  const fire = () => {
    if (fired.current) return;
    fired.current = true;
    track("calculator_use", { tool });
  };
  return (
    <div onInputCapture={fire} onClickCapture={fire}>
      {children}
    </div>
  );
}
