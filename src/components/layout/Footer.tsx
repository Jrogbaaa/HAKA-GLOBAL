"use client";

import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-300"
              tabIndex={0}
              aria-label="Haka Global Home"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                    tabIndex={0}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                  tabIndex={0}
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block mt-2 px-6 py-3 text-sm font-medium uppercase tracking-wider border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300"
                  tabIndex={0}
                >
                  Private Access
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
              tabIndex={0}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
              tabIndex={0}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

