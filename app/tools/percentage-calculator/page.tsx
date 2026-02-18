import type { Metadata } from "next";
import { getToolBySlug, getToolMetadata } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { PercentageCalculatorHowItWorks } from "@/lib/tools/content/percentage-calculator";
import { PercentageCalculatorClient } from "./tool-client";

const tool = getToolBySlug("percentage-calculator")!;

export const metadata: Metadata = getToolMetadata(tool);

export default function PercentageCalculatorPage() {
  return (
    <ToolLayout tool={tool} howItWorks={<PercentageCalculatorHowItWorks />} faqItems={tool.faq}>
      <PercentageCalculatorClient />
    </ToolLayout>
  );
}
