import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "HAKA Global | Strategic Advisory & Investment",
    template: "%s | HAKA Global",
  },
  description:
    "Strategic advisory and investment where decisions take shape — before they become public. Pre-Shift Strike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased min-h-screen w-full flex flex-col bg-[var(--background)]`}
      >
        <Navigation />
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
