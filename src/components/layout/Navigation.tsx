"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

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
        className={`
          sticky top-0 z-50 w-full flex justify-center border-b border-[var(--border)]
          transition-all duration-300
          ${isScrolled ? "bg-[var(--background)]/90 backdrop-blur-md" : "bg-[var(--background)]/80 backdrop-blur-md"}
        `}
      >
        <div className="w-full flex h-20 max-w-[1280px] items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label={`${SITE_CONFIG.name} Home`}
            tabIndex={0}
          >
            <img
              src="/haka-logo.svg"
              alt={`${SITE_CONFIG.name} Logo`}
              className="h-16 w-auto logo-fade"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-end gap-10 lg:flex">
            <div className="flex items-center gap-8">
              {NAV_LINKS.filter((link) => link.href !== "/contact").map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      text-sm font-medium transition-colors
                      ${
                        pathname === link.href
                          ? "text-[var(--primary)]"
                          : "text-white/80 hover:text-[var(--primary)]"
                      }
                    `}
                    tabIndex={0}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            <Link href="/contact" tabIndex={0}>
              <button
                className="flex h-11 items-center justify-center gap-2.5 rounded-lg border border-[var(--primary)] bg-transparent px-6 text-sm font-semibold text-[var(--primary)] transition-all duration-200 hover:bg-[var(--primary)] hover:text-[var(--background)] whitespace-nowrap"
                tabIndex={-1}
              >
                <span>Contact Us</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleToggleMobileMenu}
            onKeyDown={handleKeyDown}
            className="flex items-center text-white lg:hidden p-2"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            tabIndex={0}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[var(--background)]" />
          <nav className="relative h-full flex flex-col items-center justify-center gap-8 p-6 pt-24">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  font-serif text-3xl font-bold
                  transition-colors duration-300
                  ${
                    pathname === link.href
                      ? "text-[var(--primary)]"
                      : "text-white hover:text-[var(--primary)]"
                  }
                `}
                tabIndex={0}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-6 flex h-14 items-center justify-center gap-2.5 rounded-lg bg-[var(--primary)] px-10 text-base font-bold text-[var(--background)] transition-transform hover:scale-[1.02] whitespace-nowrap"
              tabIndex={0}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
