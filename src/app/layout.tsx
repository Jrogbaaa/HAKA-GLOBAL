import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className="dark">
      <head>
        {/* Material Symbols Outlined */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-x-hidden antialiased selection:bg-primary selection:text-white`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
