import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools-config";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanoapps.shop").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const toolEntries: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...toolEntries,
  ];
}
