import Link from "next/link";
import { Image, Type, Calculator, MessageCircle, FileJson, Activity } from "lucide-react";
import { TOOLS } from "@/lib/tools-config";
import { ToolCard } from "@/components/tool-card";
import { AdHomepage } from "@/components/ad-placements";

const TOOL_ICONS: Record<string, React.ReactNode> = {
  "image-compressor": <Image className="size-6" />,
  "text-case-converter": <Type className="size-6" />,
  "percentage-calculator": <Calculator className="size-6" />,
  "whatsapp-link-generator": <MessageCircle className="size-6" />,
  "json-to-csv": <FileJson className="size-6" />,
  "bmi-calculator": <Activity className="size-6" />,
};

const TOOL_CATEGORIES: Record<string, string> = {
  "image-compressor": "Image",
  "text-case-converter": "Text",
  "percentage-calculator": "Math",
  "whatsapp-link-generator": "Utility",
  "json-to-csv": "Utility",
  "bmi-calculator": "Math",
};

export const metadata = {
  title: "Free Online Tools – Image Compressor, Case Converter, Percentage Calculator & More",
  description:
    "Free online tools: compress images, convert text case, calculate percentages, create WhatsApp links, convert JSON to CSV. No sign-up. Fast and private.",
  openGraph: {
    title: "Free Online Tools – Image Compressor, Case Converter, Percentage Calculator & More",
    description:
      "Free online tools: compress images, convert text case, calculate percentages, create WhatsApp links, convert JSON to CSV. No sign-up.",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative">
          <div className="text-center mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-foreground tracking-tight">
              Simple Online Tools
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text]">
                For Everyone
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Free, fast, and easy-to-use web tools for your everyday tasks. No sign-up required.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pt-4 pb-12 px-4 sm:px-6 lg:px-8" aria-labelledby="popular-tools-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <h2 id="popular-tools-heading" className="text-3xl font-medium mb-2 text-foreground">
              Popular Tools
            </h2>
            <p className="text-muted-foreground">Most used tools by our community</p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
            {TOOLS.map((tool, index) => (
              <li key={tool.slug}>
                <ToolCard
                  title={tool.name}
                  description={tool.description}
                  icon={TOOL_ICONS[tool.slug] ?? <FileJson className="size-6" />}
                  category={TOOL_CATEGORIES[tool.slug] ?? "Utility"}
                  href={tool.href}
                  featured={index < 3}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AdHomepage />

      {/* Why Choose NanoApps */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30" aria-labelledby="why-heading">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 id="why-heading" className="text-3xl font-medium mb-4 text-foreground">
              Why Choose NanoApps?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern technology to provide the best user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden>⚡</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">
                All tools work instantly in your browser. No waiting, no delays.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden>🔒</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-foreground">100% Private</h3>
              <p className="text-muted-foreground">
                Your data never leaves your device. Everything is processed locally.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden>🎨</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-foreground">Beautiful Design</h3>
              <p className="text-muted-foreground">
                Clean, modern interface that works perfectly on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20 text-left" aria-labelledby="seo-heading">
        <div className="container mx-auto max-w-6xl">
          <h2 id="seo-heading" className="text-2xl font-semibold text-foreground mb-6">
            Free Online Tools for Everyone
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-none">
            NanoApps offers free, fast online tools that run in your browser. No account required—your data stays on your device. Use our <Link href="/tools/image-compressor" className="text-primary font-medium hover:underline underline-offset-2">image compressor</Link> to reduce file size for web or email. Our <Link href="/tools/text-case-converter" className="text-primary font-medium hover:underline underline-offset-2">text case converter</Link> switches between uppercase, lowercase, title case, and sentence case in one click. The <Link href="/tools/percentage-calculator" className="text-primary font-medium hover:underline underline-offset-2">percentage calculator</Link> finds what X% of Y is, what percent X is of Y, or the percent change between two values. Create click-to-chat links with our <Link href="/tools/whatsapp-link-generator" className="text-primary font-medium hover:underline underline-offset-2">WhatsApp link generator</Link>: enter a number (with country code) and optional message to get a wa.me link. The <Link href="/tools/json-to-csv" className="text-primary font-medium hover:underline underline-offset-2">JSON to CSV converter</Link> turns JSON into CSV for spreadsheets. Check your <Link href="/tools/bmi-calculator" className="text-primary font-medium hover:underline underline-offset-2">BMI</Link> with our calculator. All tools work on mobile and desktop and process everything locally—nothing is sent to our servers.
          </p>
        </div>
      </section>
    </div>
  );
}
