"use client";

import Link from "next/link";
import { SITE_CONFIG, LOCATIONS } from "@/lib/constants";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Advisory" },
  { href: "/investment", label: "Investment" },
  { href: "/contact", label: "Contact" },
];

const advisoryLinks = [
  { href: "/services/strategic-advisory", label: "Strategic Advisory" },
  { href: "/services/executive-advisory", label: "Executive Advisory" },
  { href: "/services/personal-corporate-affairs", label: "Personal & Corporate Affairs" },
  { href: "/services/financial-advisory", label: "Financial Advisory" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full flex justify-center bg-[var(--background)] pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="relative w-full max-w-[1280px] px-6 lg:px-10">
        {/* Top border */}
        <div className="absolute left-6 lg:left-10 right-6 lg:right-10 top-0 h-px bg-[var(--border)]" />

        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between pt-16 lg:pt-20">
          {/* Brand Column */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center mb-8 group"
              tabIndex={0}
              aria-label={`${SITE_CONFIG.name} Home`}
            >
              <img
                src="/haka-logo.svg"
                alt={`${SITE_CONFIG.name} Logo`}
                className="h-14 w-auto logo-fade transition-opacity group-hover:opacity-80"
              />
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-6 bg-[var(--primary)]/50" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--primary)]">
                {SITE_CONFIG.tagline}
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] border border-[var(--border)] text-white/60 transition-all duration-300 hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-[var(--background)]"
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
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Company</h4>
              <div className="flex flex-col gap-4">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Advisory */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Advisory</h4>
              <div className="flex flex-col gap-4">
                {advisoryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Legal</h4>
              <div className="flex flex-col gap-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 lg:mt-24 pt-8 border-t border-[var(--border)] text-xs text-[var(--text-muted)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            {LOCATIONS.map((location) => (
              <span key={location.city} className="flex items-center gap-2 text-[var(--text-muted)]">
                <span className="material-symbols-outlined text-[12px] text-[var(--primary)]/50">
                  location_on
                </span>
                {location.city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
