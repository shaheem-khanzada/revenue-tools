import type { Metadata } from "next";
import { Image } from "lucide-react";
import { getToolBySlug, getToolMetadata } from "@/lib/tools-config";
import { ToolLayout } from "@/components/tool-layout";
import { ImageCompressorHowItWorks } from "@/lib/tools/content/image-compressor";
import { ImageCompressorClient } from "./tool-client";

const tool = getToolBySlug("image-compressor")!;

export const metadata: Metadata = getToolMetadata(tool);

export default function ImageCompressorPage() {
  return (
    <ToolLayout
      tool={tool}
      howItWorks={<ImageCompressorHowItWorks />}
      faqItems={tool.faq}
      category="Image Tools"
      icon={<Image className="w-8 h-8" />}
    >
      <ImageCompressorClient />
    </ToolLayout>
  );
}
