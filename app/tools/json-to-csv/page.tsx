import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { JsonToCsvClient } from "./tool-client";

const tool = getToolBySlug("json-to-csv")!;

export const metadata: Metadata = {
  title: "Free JSON to CSV Converter – Convert JSON to CSV Online",
  description:
    "Convert JSON to CSV online. Paste a JSON array of objects and get CSV for Excel or Google Sheets. Free, no sign-up, runs in your browser.",
  openGraph: {
    title: "Free JSON to CSV Converter – Convert JSON to CSV Online",
    description: "Convert JSON to CSV in one click. Paste JSON, get CSV. Free and private.",
    type: "website",
  },
  alternates: { canonical: "/tools/json-to-csv" },
};

const howItWorks = (
  <div className="space-y-3 text-muted-foreground text-sm">
    <p>
      Paste valid JSON in the input box—usually an array of objects, e.g. [{"{"} &quot;name&quot;: &quot;Alice&quot;,
      &quot;age&quot;: 30{"}"}, ...]. Click “Convert to CSV”. The first object’s keys become the CSV header;
      each object’s values become a row. Commas and newlines inside values are escaped so the CSV is valid. You
      can copy the result or download it as a .csv file. Conversion runs in your browser; nothing is sent to a
      server.
    </p>
    <p>
      Use this for API responses, export scripts, or any JSON data you need in spreadsheet form. No account
      required.
    </p>
  </div>
);

const faqItems = [
  {
    question: "What JSON format does the converter expect?",
    answer:
      "An array of objects works best (e.g. [{\"id\":1,\"name\":\"A\"}, ...]). A single object is converted to one row. Keys of the first item define the CSV columns.",
  },
  {
    question: "Are special characters in values handled?",
    answer:
      "Yes. Values that contain commas, quotes, or newlines are wrapped in double quotes and internal quotes are escaped so the CSV is valid.",
  },
  {
    question: "Is the JSON to CSV converter free and private?",
    answer:
      "Yes. The tool is free and runs entirely in your browser. Your JSON is not uploaded or stored anywhere.",
  },
];

export default function JsonToCsvPage() {
  return (
    <ToolLayout tool={tool} howItWorks={howItWorks} faqItems={faqItems}>
      <JsonToCsvClient />
    </ToolLayout>
  );
}
