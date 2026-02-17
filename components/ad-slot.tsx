"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSlotProps {
  slotId: string;
  clientId: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [pushed, setPushed] = useState(false);

  useEffect(() => {
    setPushed(false);
  }, [pathname]);

  useEffect(() => {
    if (!clientId || !slotId || typeof window === "undefined" || !containerRef.current) return;

    const el = containerRef.current;

    const tryPush = () => {
      if (el.offsetWidth === 0 || pushed) return;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setPushed(true);
      } catch (e) {
        console.warn("AdSense push failed", e);
      }
    };

    tryPush();
    const ro = new ResizeObserver(() => tryPush());
    ro.observe(el);
    return () => ro.disconnect();
  }, [clientId, slotId, pathname, pushed]);

  if (!clientId || !slotId) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "min-h-[90px] min-w-[200px] w-full flex items-center justify-center bg-muted/30 rounded-lg",
        className
      )}
      role="complementary"
      aria-label={label}
    >
      <ins
        className="adsbygoogle block"
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={format === "auto" ? "true" : undefined}
        style={{ display: "block", minHeight: "90px" }}
      />
    </div>
  );
}
