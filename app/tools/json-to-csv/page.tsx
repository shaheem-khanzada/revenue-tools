import type { Metadata } from "next";
import { getToolBySlug, getToolMetadata } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { JsonToCsvHowItWorks } from "@/lib/tools/content/json-to-csv";
import { JsonToCsvClient } from "./tool-client";

const tool = getToolBySlug("json-to-csv")!;

export const metadata: Metadata = getToolMetadata(tool);

export default function JsonToCsvPage() {
  return (
    <ToolLayout tool={tool} howItWorks={<JsonToCsvHowItWorks />} faqItems={tool.faq}>
      <JsonToCsvClient />
    </ToolLayout>
  );
}
