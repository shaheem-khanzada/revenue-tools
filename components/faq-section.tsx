"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "mt-12 bg-card border border-border rounded-2xl p-8",
        className
      )}
      role="region"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-2xl mb-6 text-foreground"
      >
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-border rounded-xl overflow-hidden"
          >
            <button
              type="button"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span className="font-medium text-foreground">
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={cn(
                "px-6 overflow-hidden transition-all duration-200",
                openIndex === index ? "py-4 max-h-96" : "max-h-0"
              )}
            >
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
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
    </div>
  );
}
