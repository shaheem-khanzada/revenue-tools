import type { ToolConfig } from "@/lib/types";
import type { FAQItem } from "@/lib/types";
import { FAQSection } from "@/components/faq-section";
import { RelatedTools } from "@/components/related-tools";
import { cn } from "@/lib/utils";

interface ToolLayoutProps {
  tool: ToolConfig;
  children: React.ReactNode;
  howItWorks: React.ReactNode;
  faqItems: FAQItem[];
  className?: string;
}

export function ToolLayout({ tool, children, howItWorks, faqItems, className }: ToolLayoutProps) {
  return (
    <article className={cn("max-w-3xl mx-auto px-4 py-8 sm:px-6", className)}>
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {tool.name}
        </h1>
        <p className="mt-2 text-muted-foreground">{tool.description}</p>
      </header>

      <section aria-label="Tool" className="mb-10">
        {children}
      </section>

      <section
        aria-labelledby="how-it-works-heading"
        className="mb-10 prose prose-sm dark:prose-invert max-w-none"
      >
        <h2 id="how-it-works-heading" className="text-xl font-semibold text-foreground mb-4">
          How It Works
        </h2>
        {howItWorks}
      </section>

      {faqItems.length > 0 && (
        <div className="mb-10">
          <FAQSection items={faqItems} />
        </div>
      )}

      <RelatedTools currentSlug={tool.slug} />
    </article>
  );
}
