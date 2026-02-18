import type { Metadata } from "next";
import { getToolBySlug, getToolMetadata } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { TextCaseConverterHowItWorks } from "@/lib/tools/content/text-case-converter";
import { TextCaseConverterClient } from "./tool-client";

const tool = getToolBySlug("text-case-converter")!;

export const metadata: Metadata = getToolMetadata(tool);

export default function TextCaseConverterPage() {
  return (
    <ToolLayout tool={tool} howItWorks={<TextCaseConverterHowItWorks />} faqItems={tool.faq}>
      <TextCaseConverterClient />
    </ToolLayout>
  );
}
