import type { FAQItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export function FAQSection({ items, title = "Frequently Asked Questions", className }: FAQSectionProps) {
  return (
    <section aria-labelledby="faq-heading" className={cn("space-y-4", className)}>
      <h2 id="faq-heading" className="text-xl font-semibold text-foreground">
        {title}
      </h2>
      <ul className="space-y-4 list-none p-0 m-0">
        {items.map((item, i) => (
          <li key={i} className="border-b border-border pb-4 last:border-0 last:pb-0">
            <h3 className="text-base font-medium text-foreground mb-1">{item.question}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
          </li>
        ))}
      </ul>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
