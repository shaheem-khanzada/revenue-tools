import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { PercentageCalculatorClient } from "./tool-client";

const tool = getToolBySlug("percentage-calculator")!;

export const metadata: Metadata = {
  title: "Free Percentage Calculator – What is X% of Y?",
  description:
    "Calculate percentages online: what is X% of Y, what percent is X of Y, and percent change. Free percentage calculator, no sign-up.",
  openGraph: {
    title: "Free Percentage Calculator – What is X% of Y?",
    description: "Calculate percentages online. What is X% of Y? What percent is X of Y? Percent change. Free and fast.",
    type: "website",
  },
  alternates: { canonical: "/tools/percentage-calculator" },
};

const howItWorks = (
  <div className="space-y-3 text-muted-foreground text-sm">
    <p>
      Choose a calculation type: “What is X% of Y?” gives you the value of a percentage of a number (e.g., 15% of
      200 = 30). “X is what % of Y?” finds the percentage (e.g., 30 is 15% of 200). “Percent change” computes the
      percentage increase or decrease from an original value to a new value. Enter the two numbers and click
      Calculate. All math is done in your browser—no data is sent to a server.
    </p>
    <p>
      Useful for discounts, tips, grades, growth rates, and any quick percentage math. No account needed.
    </p>
  </div>
);

const faqItems = [
  {
    question: "How do I find what X% of Y is?",
    answer:
      "Select “What is X% of Y?”, enter the percentage (X) and the value (Y), then click Calculate. The result is (X/100) × Y.",
  },
  {
    question: "How do I find what percent X is of Y?",
    answer:
      "Select “X is what % of Y?”, enter X and Y, then click Calculate. The result is (X/Y) × 100.",
  },
  {
    question: "Is the percentage calculator free?",
    answer:
      "Yes. The tool is free and runs entirely in your browser with no sign-up or limits.",
  },
];

export default function PercentageCalculatorPage() {
  return (
    <ToolLayout tool={tool} howItWorks={howItWorks} faqItems={faqItems}>
      <PercentageCalculatorClient />
    </ToolLayout>
  );
}
