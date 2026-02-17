/**
 * Loads the Google AdSense script via a plain <script> tag (no Next.js Script).
 * Next.js Script adds data-nscript which AdSense does not support and triggers console errors.
 * Only rendered when NEXT_PUBLIC_ADSENSE_CLIENT_ID is set.
 */
export function AdSenseScript() {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  if (!clientId) return null;

  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
    />
  );
}
