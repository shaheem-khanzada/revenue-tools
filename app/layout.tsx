import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { AdSenseScript } from "@/components/adsense-script";
import { GoogleAnalyticsScript } from "@/components/google-analytics";
import { GoogleAnalyticsTracker } from "@/components/google-analytics-tracker";
import { TOOLS } from "@/lib/tools-config";
import "./globals.css";

const siteKeywords = ["free online tools", ...TOOLS.map((t) => t.name.toLowerCase())];
const toolsListForMeta = TOOLS.map((t) => t.name.toLowerCase()).join(", ");
const defaultTitle =
  TOOLS.length > 3
    ? `Free Online Tools – ${TOOLS.slice(0, 3).map((t) => t.name).join(", ")} & More`
    : `Free Online Tools – ${TOOLS.map((t) => t.name).join(", ")}`;
const defaultDescription = `Free online tools: ${toolsListForMeta}. No sign-up. Fast and private.`;

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanoapps.shop").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Nano Apps",
  },
  description: defaultDescription,
  keywords: siteKeywords,
  authors: [{ name: "Nano Apps" }],
  creator: "Nano Apps",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nano Apps",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nano Apps",
    description: `Free online tools: ${toolsListForMeta}.`,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/tools/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AdSenseScript />
        <GoogleAnalyticsScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalyticsTracker />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-background focus:z-50">
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
