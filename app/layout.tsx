import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { AdSenseScript } from "@/components/adsense-script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://revenue-tools.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Free Online Tools – Image Compressor, Case Converter, Percentage Calculator & More",
    template: "%s | Revenue Tools",
  },
  description:
    "Free online tools: compress images, convert text case, calculate percentages, create WhatsApp links, convert JSON to CSV. No sign-up. Fast and private.",
  keywords: [
    "free online tools",
    "image compressor",
    "text case converter",
    "percentage calculator",
    "WhatsApp link generator",
    "JSON to CSV",
  ],
  authors: [{ name: "Revenue Tools" }],
  creator: "Revenue Tools",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Revenue Tools",
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
    name: "Revenue Tools",
    description: "Free online tools: image compressor, text case converter, percentage calculator, WhatsApp link generator, JSON to CSV.",
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-background focus:z-50">
          Skip to content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
