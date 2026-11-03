"use client";

import dynamic from "next/dynamic";

// The popup renders nothing until a trigger fires (never in the first 8 s of a
// page), so its code is loaded after hydration instead of with every page's
// first JS.
const LeadPopup = dynamic(() => import("@/components/site/LeadPopup").then((m) => m.LeadPopup), { ssr: false });

export function LeadPopupLazy() {
  return <LeadPopup />;
}
