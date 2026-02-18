import type { Metadata } from "next";
import { getToolBySlug, getToolMetadata } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { BmiCalculatorHowItWorks } from "@/lib/tools/content/bmi-calculator";
import { BmiCalculatorClient } from "./tool-client";

const tool = getToolBySlug("bmi-calculator")!;

export const metadata: Metadata = getToolMetadata(tool);

export default function BmiCalculatorPage() {
  return (
    <ToolLayout tool={tool} howItWorks={<BmiCalculatorHowItWorks />} faqItems={tool.faq}>
      <BmiCalculatorClient />
    </ToolLayout>
  );
}
