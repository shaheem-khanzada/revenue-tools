import type { ToolConfig } from "./types";

export const TOOLS: ToolConfig[] = [
  {
    slug: "image-compressor",
    name: "Image Compressor",
    description: "Compress images online without losing quality. Reduce file size for web and email.",
    href: "/tools/image-compressor",
  },
  {
    slug: "text-case-converter",
    name: "Text Case Converter",
    description: "Convert text to uppercase, lowercase, title case, or sentence case instantly.",
    href: "/tools/text-case-converter",
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    description: "Calculate percentages, find what percent one number is of another.",
    href: "/tools/percentage-calculator",
  },
  {
    slug: "whatsapp-link-generator",
    name: "WhatsApp Link Generator",
    description: "Create click-to-chat WhatsApp links with pre-filled messages.",
    href: "/tools/whatsapp-link-generator",
  },
  {
    slug: "json-to-csv",
    name: "JSON to CSV Converter",
    description: "Convert JSON data to CSV format for spreadsheets and data export.",
    href: "/tools/json-to-csv",
  },
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    description: "Check your body mass index (BMI) with metric or imperial units. Free online BMI calculator.",
    href: "/tools/bmi-calculator",
  },
];

export function getRelatedTools(currentSlug: string, limit = 3): ToolConfig[] {
  return TOOLS.filter((t) => t.slug !== currentSlug).slice(0, limit);
}

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
