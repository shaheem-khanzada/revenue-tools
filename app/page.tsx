import Link from "next/link";
import { TOOLS } from "@/lib/tools-config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="min-h-screen">
      <header className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            Revenue Tools
          </h1>
          <p className="mt-1 text-muted-foreground text-sm">
            Free online tools. No sign-up. Works in your browser.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        <section aria-labelledby="tools-heading" className="mb-12">
          <h2 id="tools-heading" className="sr-only">
            Available tools
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
            {TOOLS.map((tool) => (
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
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {tool.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">Free Online Tools for Everyone</h2>
          <p>
            Revenue Tools offers a set of free, fast online tools that run in your browser. No account is required,
            and your data stays on your device. Use our <Link href="/tools/image-compressor" className="text-primary underline">image compressor</Link> to
            reduce file size for web or email. Our <Link href="/tools/text-case-converter" className="text-primary underline">text case converter</Link> lets you
            switch between uppercase, lowercase, title case, and sentence case in one click. Need to work out a
            percentage? The <Link href="/tools/percentage-calculator" className="text-primary underline">percentage calculator</Link> finds what X% of Y is, what
            percent X is of Y, or the percent change between two values.
          </p>
          <p>
            Create click-to-chat links for WhatsApp with our <Link href="/tools/whatsapp-link-generator" className="text-primary underline">WhatsApp link generator</Link>:
            enter a phone number (with country code) and an optional pre-filled message to get a wa.me link. For
            data and spreadsheets, the <Link href="/tools/json-to-csv" className="text-primary underline">JSON to CSV converter</Link> turns a JSON array of
            objects into CSV so you can open it in Excel or Google Sheets. All tools are free, work on mobile and
            desktop, and process everything locally—nothing is sent to our servers.
          </p>
          <p>
            We built these tools to be simple and fast: choose a tool, do your task in one or two clicks, and get
            your result. No sign-up, no paywall, no heavy software. Whether you need to compress an image for a
            website, format text for a heading, calculate a discount, add a WhatsApp button to your site, or
            export JSON to CSV, you can do it here in seconds.
          </p>
        </section>
      </div>
    </div>
  );
}
