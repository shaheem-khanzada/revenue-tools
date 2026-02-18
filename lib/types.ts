export interface FAQItem {
  question: string;
  answer: string;
}

/** Per-tool SEO metadata. Structure is locale-ready (e.g. meta.en, meta.ar later). */
export interface ToolMeta {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
  };
  canonical: string;
}

export interface ToolConfig {
  slug: string;
  name: string;
  description: string;
  href: string;
  meta: ToolMeta;
  faq: FAQItem[];
}
