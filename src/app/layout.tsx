import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Haka Global | Premium Services",
    template: "%s | Haka Global",
  },
  description:
    "Orchestrating Wealth & Influence. Exclusive access to elite real estate, financial advisory, and personal branding strategies for the modern visionary.",
  keywords: [
    "luxury advisory",
    "personal branding",
    "real estate investment",
    "wealth management",
    "luxury marketplace",
    "executive coaching",
    "high net worth",
    "financial advisory",
  ],
  authors: [{ name: "Haka Global" }],
  openGraph: {
    title: "Haka Global | Premium Services",
    description:
      "Orchestrating Wealth & Influence. Exclusive access to elite real estate, financial advisory, and personal branding strategies.",
    url: "https://hakaglobal.com",
    siteName: "Haka Global",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haka Global | Premium Services",
    description:
      "Orchestrating Wealth & Influence. Exclusive access to elite real estate, financial advisory, and personal branding strategies.",
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
        className={`${inter.variable} ${playfair.variable} ${cinzel.variable} antialiased min-h-screen w-full flex flex-col bg-[var(--background)] text-white overflow-x-hidden`}
      >
        <Navigation />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
