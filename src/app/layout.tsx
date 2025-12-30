import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Haka Global | Luxury Advisory & Marketplace",
    template: "%s | Haka Global",
  },
  description:
    "A Private Gateway to Influence, Assets, and Opportunity. Personal Branding, Global Real Estate, Strategic Investments, and Luxury Access.",
  keywords: [
    "luxury advisory",
    "personal branding",
    "real estate investment",
    "wealth management",
    "luxury marketplace",
    "executive coaching",
    "high net worth",
  ],
  authors: [{ name: "Haka Global" }],
  openGraph: {
    title: "Haka Global | Luxury Advisory & Marketplace",
    description:
      "A Private Gateway to Influence, Assets, and Opportunity.",
    url: "https://hakaglobal.com",
    siteName: "Haka Global",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haka Global | Luxury Advisory & Marketplace",
    description:
      "A Private Gateway to Influence, Assets, and Opportunity.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
