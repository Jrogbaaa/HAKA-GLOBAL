"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Advisory", href: "/advisory" },
  { label: "Investment", href: "/investment" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggleMobileMenu();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto flex h-20 items-center justify-between px-8 lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="HAKA Global Home"
            tabIndex={0}
          >
            <img
              src="/haka-logo.svg"
              alt="HAKA Global Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[var(--foreground)]"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                }`}
                tabIndex={0}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMobileMenu}
            onKeyDown={handleKeyDown}
            className="flex items-center text-[var(--foreground)] lg:hidden p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            tabIndex={0}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[var(--background)]" />
        <nav className="relative h-full flex flex-col pt-28 pb-8 px-8">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-4 text-2xl font-serif transition-colors border-b border-[var(--border)] ${
                  pathname === link.href
                    ? "text-[var(--foreground)]"
                    : "text-[var(--foreground-muted)]"
                }`}
                tabIndex={0}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link
              href="mailto:info@hakaglobal.com"
              className="text-sm text-[var(--foreground-muted)]"
              tabIndex={0}
            >
              info@hakaglobal.com
            </Link>
          </div>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
};
