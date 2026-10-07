import Script from "next/script";
import { Suspense } from "react";
import { AnalyticsListener } from "@/components/site/AnalyticsListener";

// Google Analytics 4. Set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXXXXX) in the
// environment to enable. Renders nothing until an ID is provided.
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID || "G-ZDBTJ2CRCZ";
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <AnalyticsListener />
      </Suspense>
    </>
  );
}
