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
    <footer className="w-full flex justify-center bg-[var(--background)] pt-16 pb-12 lg:pt-20 lg:pb-16">
      <div className="w-full max-w-[1280px] px-6 lg:px-10">
        <div className="border-t border-[var(--border)] pt-12 lg:pt-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            {/* Brand Column */}
            <div className="max-w-sm">
              <Link
                href="/"
                className="flex items-center mb-6"
                tabIndex={0}
                aria-label={`${SITE_CONFIG.name} Home`}
              >
                <img
                  src="/haka-logo.svg"
                  alt={`${SITE_CONFIG.name} Logo`}
                  className="h-14 w-auto logo-fade"
                />
              </Link>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
                {SITE_CONFIG.tagline}
              </p>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                Strategic advisory and investment for people and companies
                operating where decisions take shape — before they become
                public.
              </p>
              <div className="mt-6 flex gap-4">
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

              {/* Advisory */}
              <div className="flex flex-col gap-4">
                <h4 className="font-serif font-bold text-white">Advisory</h4>
                {advisoryLinks.map((link) => (
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
          <div className="mt-12 lg:mt-16 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--text-secondary)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {LOCATIONS.map((location) => (
                <span key={location.city} className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    location_on
                  </span>
                  {location.city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
