import Link from "next/link";
import type { ToolConfig } from "@/lib/types";
import { getRelatedTools } from "@/lib/tools-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface RelatedToolsProps {
  currentSlug: string;
  className?: string;
}

export function RelatedTools({ currentSlug, className }: RelatedToolsProps) {
  const tools = getRelatedTools(currentSlug);

  return (
    <section aria-labelledby="related-tools-heading" className={cn("space-y-4", className)}>
      <h2 id="related-tools-heading" className="text-xl font-semibold text-foreground">
        Related Tools
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <Link
              href={tool.href}
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
            >
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-base">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
