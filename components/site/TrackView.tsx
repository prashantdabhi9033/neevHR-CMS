"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

// Fires one GA4 event when a page mounts (e.g. pricing_view, demo_view).
export function TrackView({
  event,
  params,
}: {
  event: string;
  params?: Record<string, unknown>;
}) {
  useEffect(() => {
    track(event, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);
  return null;
}
