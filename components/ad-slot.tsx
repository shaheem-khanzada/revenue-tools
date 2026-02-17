"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    if (!clientId || !slotId) return;
    const t = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (_) {}
    }, 100);
    return () => clearTimeout(t);
  }, [clientId, slotId, pathname]);

  if (!clientId || !slotId) return null;

  return (
    <div
      className={cn(
        "min-h-[90px] w-full flex items-center justify-center bg-muted/30 rounded-lg",
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
        style={{ display: "block" }}
      />
    </div>
  );
}
