import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
      <body
        className={`${dmSans.variable} antialiased min-h-screen w-full max-w-full flex flex-col bg-[var(--background)] overflow-x-hidden`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
