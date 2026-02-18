import type { Metadata } from "next";
import { getToolBySlug, getToolMetadata } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { WhatsAppLinkGeneratorHowItWorks } from "@/lib/tools/content/whatsapp-link-generator";
import { WhatsAppLinkGeneratorClient } from "./tool-client";

const tool = getToolBySlug("whatsapp-link-generator")!;

export const metadata: Metadata = getToolMetadata(tool);

export default function WhatsAppLinkGeneratorPage() {
  return (
    <ToolLayout tool={tool} howItWorks={<WhatsAppLinkGeneratorHowItWorks />} faqItems={tool.faq}>
      <WhatsAppLinkGeneratorClient />
    </ToolLayout>
  );
}
