"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Consulting", href: "/advisory" },
  { label: "Investing", href: "/investment" },
  { label: "About", href: "/about" },
  { label: "Start a Conversation", href: "/contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggleMenu();
    }
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full max-w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#1A191A]/95 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-[#1A191A]"
      }`}
    >
      <div className="w-full flex h-28 md:h-32 items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Logo with tagline below - centered tagline */}
        <Link
          href="/"
          className="flex flex-col items-center shrink-0 group"
          aria-label="HAKA Global Home"
          tabIndex={0}
        >
          <Image
            src="/haka-logo.svg"
            alt="HAKA"
            width={180}
            height={65}
            className="h-16 md:h-20 w-auto object-contain object-center"
            priority
          />
          <span className="text-xs md:text-sm text-[var(--foreground-muted)] mt-2 tracking-wide">
            pre-shift strike.
          </span>
        </Link>

        {/* Three-line Hamburger Menu Button */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            className="flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg hover:bg-[var(--surface)] transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            tabIndex={0}
          >
            <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 top-full mt-3 w-72 bg-[var(--surface)] rounded-xl shadow-2xl border border-[var(--border)] py-3 animate-fade-in-up"
              role="menu"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-6 py-3.5 text-base transition-colors hover:bg-[var(--background)] ${
                    pathname === link.href
                      ? "text-[var(--gold)] font-medium"
                      : "text-[var(--foreground)]"
                  }`}
                  role="menuitem"
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
