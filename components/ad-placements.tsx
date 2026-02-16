"use client";

import { AdSlot } from "@/components/ad-slot";
import { cn } from "@/lib/utils";

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "";
const slotBelowResult = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_RESULT ?? "";
const slotBetweenSections = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BETWEEN_SECTIONS ?? "";
const slotSidebar = process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR ?? "";
const slotHomepage = process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOMEPAGE ?? "";

/** Below the main tool UI (allowed per requirements). Never above the tool. */
export function AdBelowResult() {
  if (!clientId || !slotBelowResult) return null;
  return (
    <div className="mt-6">
      <AdSlot slotId={slotBelowResult} clientId={clientId} format="auto" label="Advertisement" />
    </div>
  );
}

/** Between content sections (e.g. between How it works and FAQ). */
export function AdBetweenSections() {
  if (!clientId || !slotBetweenSections) return null;
  return (
    <div className="my-8">
      <AdSlot slotId={slotBetweenSections} clientId={clientId} format="auto" label="Advertisement" />
    </div>
  );
}

/** Sidebar ad – desktop only (allowed per requirements). */
export function AdSidebar() {
  if (!clientId || !slotSidebar) return null;
  return (
    <aside className="hidden lg:block shrink-0 w-52" aria-label="Advertisement">
      <div className="sticky top-4">
        <AdSlot slotId={slotSidebar} clientId={clientId} format="vertical" label="Advertisement" />
      </div>
    </aside>
  );
}

/** Homepage: between tool grid and content. */
export function AdHomepage() {
  if (!clientId || !slotHomepage) return null;
  return (
    <div className="my-8">
      <AdSlot slotId={slotHomepage} clientId={clientId} format="auto" label="Advertisement" />
    </div>
  );
}
