"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/personal-branding", label: "Personal Branding" },
  { href: "/services/real-estate", label: "Real Estate" },
  { href: "/services/financial-advisory", label: "Investment" },
  { href: "/marketplace", label: "Marketplace" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

const locations = ["New York", "London", "Dubai"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center border-t border-[var(--border)] bg-[var(--background)] pt-16 pb-8">
      <div className="w-full max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand Column */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-3 text-white mb-6"
              tabIndex={0}
              aria-label={`${SITE_CONFIG.name} Home`}
            >
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[var(--primary-20)] text-[var(--primary)]">
                <span className="material-symbols-outlined text-sm">
                  diamond
                </span>
              </div>
              <h2 className="font-serif text-lg font-bold">
                {SITE_CONFIG.name}
              </h2>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Redefining wealth management and influence for the global elite.
              Headquartered in New York with offices in London, Dubai, and
              Singapore.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-[var(--primary)] hover:text-[var(--background)]"
                tabIndex={0}
                aria-label="Visit our website"
              >
                <span className="material-symbols-outlined text-lg">
                  public
                </span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-[var(--primary)] hover:text-[var(--background)]"
                tabIndex={0}
                aria-label="Email us"
              >
                <span className="material-symbols-outlined text-lg">
                  alternate_email
                </span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:gap-20">
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="font-serif font-bold text-white">Company</h4>
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h4 className="font-serif font-bold text-white">Services</h4>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="font-serif font-bold text-white">Legal</h4>
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--text-secondary)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {locations.map((location) => (
              <span key={location} className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  location_on
                </span>
                {location}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
