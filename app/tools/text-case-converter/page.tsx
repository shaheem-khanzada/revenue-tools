import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { TextCaseConverterClient } from "./tool-client";

const tool = getToolBySlug("text-case-converter")!;

export const metadata: Metadata = {
  title: "Free Text Case Converter – Uppercase, Lowercase, Title Case Online",
  description:
    "Convert text to uppercase, lowercase, title case, or sentence case instantly. Free online text case converter. No sign-up required.",
  openGraph: {
    title: "Free Text Case Converter – Uppercase, Lowercase, Title Case Online",
    description: "Convert text to uppercase, lowercase, title case, or sentence case instantly. Free and private.",
    type: "website",
  },
  alternates: { canonical: "/tools/text-case-converter" },
};

const howItWorks = (
  <div className="space-y-3 text-muted-foreground text-sm">
    <p>
      Paste or type your text in the box, then click one of the case buttons. UPPERCASE converts every letter to
      capitals; lowercase does the opposite. Title Case capitalizes the first letter of each word. Sentence case
      capitalizes the first letter of each sentence. The result appears immediately and can be copied with one
      click. All processing happens in your browser—nothing is sent to a server.
    </p>
    <p>
      Use this for headings, titles, labels, or any text that needs consistent capitalization. No account or
      download required.
    </p>
  </div>
);

const faqItems = [
  {
    question: "Is the text case converter free?",
    answer:
      "Yes. The tool is free and runs in your browser. There are no sign-up requirements or usage limits.",
  },
  {
    question: "What is title case?",
    answer:
      "Title case means the first letter of each word is capitalized (e.g., “How To Use This Tool”). It’s common for headings and titles.",
  },
  {
    question: "Is my text stored or sent anywhere?",
    answer:
      "No. Conversion happens locally in your browser. Your text never leaves your device.",
  },
];

export default function TextCaseConverterPage() {
  return (
    <ToolLayout tool={tool} howItWorks={howItWorks} faqItems={faqItems}>
      <TextCaseConverterClient />
    </ToolLayout>
  );
}
