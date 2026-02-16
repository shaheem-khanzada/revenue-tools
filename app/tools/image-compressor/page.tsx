import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { ImageCompressorClient } from "./tool-client";

const tool = getToolBySlug("image-compressor")!;

export const metadata: Metadata = {
  title: "Free Image Compressor Online – Compress Images Without Losing Quality",
  description:
    "Compress images online for free. Reduce JPEG and PNG file size without losing quality. No sign-up, works in your browser. Fast and private.",
  openGraph: {
    title: "Free Image Compressor Online – Compress Images Without Losing Quality",
    description:
      "Compress images online for free. Reduce file size for web and email. No sign-up, works in your browser.",
    type: "website",
  },
  alternates: { canonical: "/tools/image-compressor" },
};

const howItWorks = (
  <div className="space-y-3 text-muted-foreground text-sm">
    <p>
      Our image compressor runs entirely in your browser. You select an image, set a quality level (0.1 to 1) and
      optional max width. Click &quot;Compress image&quot; and the tool resizes and re-encodes the image as JPEG
      to reduce file size. No data is uploaded to any server, so your photos stay private.
    </p>
    <p>
      Lower quality and a smaller max width produce smaller files; higher quality keeps more detail. Use this for
      web images, email attachments, or saving storage. The result can be downloaded immediately.
    </p>
  </div>
);

const faqItems = [
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
];

export default function ImageCompressorPage() {
  return (
    <ToolLayout tool={tool} howItWorks={howItWorks} faqItems={faqItems}>
      <ImageCompressorClient />
    </ToolLayout>
  );
}
