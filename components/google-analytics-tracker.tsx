"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: Record<string, string>) => void;
  }
}

/**
 * Sends page_view to GA4 on initial load and on client-side route changes.
 * Renders nothing. Only active when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 */
export function GoogleAnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId || typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: pathname ?? window.location.pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
