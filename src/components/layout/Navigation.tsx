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
          sticky top-0 z-50 w-full border-b border-[var(--border)]
          transition-all duration-300
          ${isScrolled ? "bg-[var(--background)]/90 backdrop-blur-md" : "bg-[var(--background)]/80 backdrop-blur-md"}
        `}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white"
            aria-label={`${SITE_CONFIG.name} Home`}
            tabIndex={0}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[var(--primary-20)] text-[var(--primary)]">
              <span className="material-symbols-outlined">diamond</span>
            </div>
            <h2 className="font-serif text-xl font-bold tracking-tight text-white">
              {SITE_CONFIG.name}
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 justify-end gap-8 lg:flex">
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
                className="flex h-10 items-center justify-center gap-2 overflow-hidden rounded-lg bg-[var(--primary)] px-5 text-sm font-bold tracking-wide text-[var(--background)] transition-transform hover:scale-105 active:scale-95"
                tabIndex={-1}
              >
                <span>Request Access</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </Link>
          </div>

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
              className="mt-4 flex h-12 items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-8 text-base font-bold text-[var(--background)] transition-transform hover:scale-105"
              tabIndex={0}
            >
              Request Access
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};
