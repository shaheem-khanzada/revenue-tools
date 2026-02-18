import type { ToolConfig } from "@/lib/types";
import type { FAQItem } from "@/lib/types";
import { FAQSection } from "@/components/faq-section";
import { RelatedTools } from "@/components/related-tools";
import { AdBelowResult, AdBetweenSections } from "@/components/ad-placements";
import { cn } from "@/lib/utils";

interface ToolLayoutProps {
  tool: ToolConfig;
  children: React.ReactNode;
  howItWorks: React.ReactNode;
  faqItems: FAQItem[];
  className?: string;
  /** Optional category label (e.g. "Image Tools") */
  category?: string;
  /** Optional icon shown next to the tool title */
  icon?: React.ReactNode;
}

export function ToolLayout({ tool, children, howItWorks, faqItems, className, category, icon }: ToolLayoutProps) {
  return (
    <div className={cn("max-w-5xl mx-auto px-4 py-8 sm:px-6 flex flex-col lg:flex-row lg:gap-8", className)}>
      <article className="min-w-0 flex-1 max-w-3xl">
        <header className="mb-8">
          {category && (
            <span className="inline-block text-sm text-muted-foreground border border-border rounded-lg px-2.5 py-1 mb-3">
              {category}
            </span>
          )}
          <div className="flex items-start gap-4">
            {icon && (
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary [&_svg]:w-8 [&_svg]:h-8">
                {icon}
              </div>
            )}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                {tool.name}
              </h1>
              <p className="mt-2 text-muted-foreground">{tool.description}</p>
            </div>
          </div>
        </header>

        <section aria-label="Tool" className="mb-6">
          {children}
          <AdBelowResult />
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

        <AdBetweenSections />

        {faqItems.length > 0 && (
          <div className="mb-10">
            <FAQSection items={faqItems} />
          </div>
        )}

        <AdBetweenSections />

        <RelatedTools currentSlug={tool.slug} />
      </article>
    </div>
  );
}
