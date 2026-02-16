"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSlotProps {
  /** AdSense slot ID (e.g. "1234567890") */
  slotId: string;
  /** AdSense client ID (e.g. "ca-pub-XXXXXXXXXXXXXXXX") */
  clientId: string;
  /** Layout: "in-article" | "in-feed" | "auto" (responsive) */
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  /** Optional className for the wrapper */
  className?: string;
  /** Optional label for accessibility */
  label?: string;
}

export function AdSlot({
  slotId,
  clientId,
  format = "auto",
  className,
  label = "Advertisement",
}: AdSlotProps) {
  const pathname = usePathname();
  const insRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!clientId || !slotId || typeof window === "undefined") return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("AdSense push failed", e);
    }
  }, [clientId, slotId, pathname]);

  if (!clientId || !slotId) return null;

  return (
    <div
      className={cn("min-h-[90px] flex items-center justify-center bg-muted/30 rounded-lg", className)}
      role="complementary"
      aria-label={label}
    >
      <ins
        ref={insRef}
        className="adsbygoogle block"
        data-adtest="on"
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={format === "auto" ? "true" : undefined}
        style={{ display: "block" }}
      />
    </div>
  );
}
