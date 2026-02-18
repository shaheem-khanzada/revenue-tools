import type { ToolConfig } from "./types";

export const TOOLS: ToolConfig[] = [
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Compress images online without losing quality. Reduce file size for web and email.",
    href: "/tools/image-compressor",
    meta: {
      title: "Free Image Compressor Online – Compress Images Without Losing Quality",
      description:
        "Compress images online for free. Reduce JPEG and PNG file size without losing quality. No sign-up, works in your browser. Fast and private.",
      openGraph: {
        title: "Free Image Compressor Online – Compress Images Without Losing Quality",
        description:
          "Compress images online for free. Reduce file size for web and email. No sign-up, works in your browser.",
      },
      canonical: "/tools/image-compressor",
    },
    faq: [
      {
        question: "Is the image compressor free?",
        answer:
          "Yes. The tool is free to use with no sign-up. Compression happens in your browser, so there are no server costs or limits.",
      },
      {
        question: "Does compressing reduce image quality?",
        answer:
          "Yes, to some degree. JPEG compression is lossy. We let you choose a quality level (0.1–1) so you can balance file size and visual quality. For most web use, 0.7–0.8 is a good balance.",
      },
      {
        question: "Are my images sent to a server?",
        answer:
          "No. All compression is done locally in your browser. Your images never leave your device, so they stay private.",
      },
      {
        question: "What image formats are supported?",
        answer:
          "You can upload JPEG, PNG, WebP, and other common image formats. The compressed output is always JPEG for the best size reduction.",
      },
    ],
  },
  {
    slug: "text-case-converter",
    name: "Text Case Converter",
    description: "Convert text to uppercase, lowercase, title case, or sentence case instantly.",
    href: "/tools/text-case-converter",
    meta: {
      title: "Free Text Case Converter – Uppercase, Lowercase, Title Case Online",
      description:
        "Convert text to uppercase, lowercase, title case, or sentence case instantly. Free online text case converter. No sign-up required.",
      openGraph: {
        title: "Free Text Case Converter – Uppercase, Lowercase, Title Case Online",
        description: "Convert text to uppercase, lowercase, title case, or sentence case instantly. Free and private.",
      },
      canonical: "/tools/text-case-converter",
    },
    faq: [
      {
        question: "Is the text case converter free?",
        answer:
          "Yes. The tool is free and runs in your browser. There are no sign-up requirements or usage limits.",
      },
      {
        question: "What is title case?",
        answer:
          "Title case means the first letter of each word is capitalized (e.g., \"How To Use This Tool\"). It's common for headings and titles.",
      },
      {
        question: "Is my text stored or sent anywhere?",
        answer: "No. Conversion happens locally in your browser. Your text never leaves your device.",
      },
    ],
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages, find what percent one number is of another.",
    href: "/tools/percentage-calculator",
    meta: {
      title: "Free Percentage Calculator – What is X% of Y?",
      description:
        "Calculate percentages online: what is X% of Y, what percent is X of Y, and percent change. Free percentage calculator, no sign-up.",
      openGraph: {
        title: "Free Percentage Calculator – What is X% of Y?",
        description: "Calculate percentages online. What is X% of Y? What percent is X of Y? Percent change. Free and fast.",
      },
      canonical: "/tools/percentage-calculator",
    },
    faq: [
      {
        question: "How do I find what X% of Y is?",
        answer:
          "Select \"What is X% of Y?\", enter the percentage (X) and the value (Y), then click Calculate. The result is (X/100) × Y.",
      },
      {
        question: "How do I find what percent X is of Y?",
        answer:
          "Select \"X is what % of Y?\", enter X and Y, then click Calculate. The result is (X/Y) × 100.",
      },
      {
        question: "Is the percentage calculator free?",
        answer: "Yes. The tool is free and runs entirely in your browser with no sign-up or limits.",
      },
    ],
  },
  {
    slug: "whatsapp-link-generator",
    name: "WhatsApp Link Generator",
    description: "Create click-to-chat WhatsApp links with pre-filled messages.",
    href: "/tools/whatsapp-link-generator",
    meta: {
      title: "Free WhatsApp Link Generator – Create wa.me Click-to-Chat Links",
      description:
        "Create WhatsApp click-to-chat links with optional pre-filled message. Enter phone number and get a wa.me link. Free, no sign-up.",
      openGraph: {
        title: "Free WhatsApp Link Generator – Create wa.me Click-to-Chat Links",
        description: "Create WhatsApp links with pre-filled messages. Enter phone number, get wa.me link. Free and instant.",
      },
      canonical: "/tools/whatsapp-link-generator",
    },
    faq: [
      {
        question: "Do I need to include the country code?",
        answer:
          "Yes. Use the full international number without + or leading zero (e.g. 44 for UK, 1 for USA/Canada).",
      },
      {
        question: "Can I add a pre-filled message?",
        answer:
          "Yes. Enter your message in the optional field. When someone opens the link, the message will appear in the chat box (they can edit it before sending).",
      },
      {
        question: "Is the WhatsApp link generator free?",
        answer:
          "Yes. The tool is free. We don't store your phone number or message; the link is generated in your browser.",
      },
    ],
  },
  {
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    description: "Convert JSON data to CSV format for spreadsheets and data export.",
    href: "/tools/json-to-csv",
    meta: {
      title: "Free JSON to CSV Converter – Convert JSON to CSV Online",
      description:
        "Convert JSON to CSV online. Paste a JSON array of objects and get CSV for Excel or Google Sheets. Free, no sign-up, runs in your browser.",
      openGraph: {
        title: "Free JSON to CSV Converter – Convert JSON to CSV Online",
        description: "Convert JSON to CSV in one click. Paste JSON, get CSV. Free and private.",
      },
      canonical: "/tools/json-to-csv",
    },
    faq: [
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
    ],
  },
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    description: "Check your body mass index (BMI) with metric or imperial units. Free online BMI calculator.",
    href: "/tools/bmi-calculator",
    meta: {
      title: "Free BMI Calculator – Check Your Body Mass Index Online",
      description:
        "Use our free BMI calculator to check your body mass index instantly. Supports metric and imperial units.",
      openGraph: {
        title: "Free BMI Calculator – Check Your Body Mass Index Online",
        description:
          "Use our free BMI calculator to check your body mass index instantly. Supports metric and imperial units.",
      },
      canonical: "/tools/bmi-calculator",
    },
    faq: [
      {
        question: "What is a healthy BMI?",
        answer:
          "A BMI between 18.5 and 24.9 is generally considered the normal or healthy range for adults. Below 18.5 is underweight, 25–29.9 is overweight, and 30 or above is obese. Health organizations use these ranges as screening tools; individual health depends on other factors too.",
      },
      {
        question: "Is BMI accurate?",
        answer:
          "BMI is a useful population-level screening tool but does not distinguish between muscle and fat. Very muscular people may have a high BMI without excess body fat, and some people with a normal BMI may still have unhealthy fat levels. It does not account for age, sex, or body composition. For personal health decisions, use it as one indicator and consult a healthcare provider.",
      },
      {
        question: "Should I use metric or imperial units?",
        answer:
          "Use whichever you prefer. Select Metric for kilograms and centimeters, or Imperial for pounds and inches. The calculator converts internally and gives the same BMI scale; only the input units change.",
      },
    ],
  },
];

export function getRelatedTools(currentSlug: string, limit = 3): ToolConfig[] {
  return TOOLS.filter((t) => t.slug !== currentSlug).slice(0, limit);
}

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

/** Build Next.js Metadata for a tool from config. */
export function getToolMetadata(tool: ToolConfig) {
  return {
    title: tool.meta.title,
    description: tool.meta.description,
    openGraph: tool.meta.openGraph
      ? {
          title: tool.meta.openGraph.title,
          description: tool.meta.openGraph.description,
          type: "website" as const,
        }
      : undefined,
    alternates: { canonical: tool.meta.canonical },
  };
}
