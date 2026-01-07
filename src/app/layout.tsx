import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HAKA Global | Strategic Advisory & Investment",
    template: "%s | HAKA Global",
  },
  description:
    "Strategic advisory and investment where decisions take shape — before they become public. Pre-Shift Strike.",
  keywords: [
    "strategic advisory",
    "executive advisory",
    "investment",
    "real estate",
    "private equity",
    "luxury assets",
    "wealth management",
    "C-level advisory",
    "non-market strategy",
  ],
  authors: [{ name: "HAKA Global" }],
  openGraph: {
    title: "HAKA Global | Strategic Advisory & Investment",
    description:
      "Strategic advisory and investment where decisions take shape — before they become public.",
    url: "https://hakaglobal.com",
    siteName: "HAKA Global",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HAKA Global | Strategic Advisory & Investment",
    description:
      "Strategic advisory and investment where decisions take shape — before they become public.",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased min-h-screen w-full flex flex-col bg-[var(--background)] text-white overflow-x-hidden`}
      >
        <Navigation />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
