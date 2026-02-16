import Script from "next/script";

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

/**
 * Loads the Google AdSense script. Only rendered when NEXT_PUBLIC_ADSENSE_CLIENT_ID is set.
 * Use in root layout so ad slots can run on any page.
 */
export function AdSenseScript() {
  if (!clientId) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}