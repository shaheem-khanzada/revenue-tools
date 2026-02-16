import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { WhatsAppLinkGeneratorClient } from "./tool-client";

const tool = getToolBySlug("whatsapp-link-generator")!;

export const metadata: Metadata = {
  title: "Free WhatsApp Link Generator – Create wa.me Click-to-Chat Links",
  description:
    "Create WhatsApp click-to-chat links with optional pre-filled message. Enter phone number and get a wa.me link. Free, no sign-up.",
  openGraph: {
    title: "Free WhatsApp Link Generator – Create wa.me Click-to-Chat Links",
    description: "Create WhatsApp links with pre-filled messages. Enter phone number, get wa.me link. Free and instant.",
    type: "website",
  },
  alternates: { canonical: "/tools/whatsapp-link-generator" },
};

const howItWorks = (
  <div className="space-y-3 text-muted-foreground text-sm">
    <p>
      Enter the phone number with country code (digits only, e.g. 14155551234 for USA). Optionally add a
      pre-filled message. Click “Generate link” to get a wa.me URL. Anyone who opens that link on a device with
      WhatsApp installed will start a chat with that number; if you added a message, it appears in the compose
      box. Use this for “Contact us on WhatsApp” buttons, email signatures, or QR codes. No account or app
      needed to generate the link—only to open it.
    </p>
    <p>
      All processing is done in your browser. We don’t store phone numbers or messages.
    </p>
  </div>
);

const faqItems = [
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
      "Yes. The tool is free. We don’t store your phone number or message; the link is generated in your browser.",
  },
];

export default function WhatsAppLinkGeneratorPage() {
  return (
    <ToolLayout tool={tool} howItWorks={howItWorks} faqItems={faqItems}>
      <WhatsAppLinkGeneratorClient />
    </ToolLayout>
  );
}
