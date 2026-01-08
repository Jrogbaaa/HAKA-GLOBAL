"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Investing", href: "/investment" },
  { label: "Consulting", href: "/advisory" },
  { label: "Start a Conversation", href: "/contact", isAccent: true },
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
      <div className="w-full flex h-24 md:h-32 lg:h-40 items-center justify-between px-4 md:px-12 lg:px-16">
        {/* Logo with tagline below */}
        <Link
          href="/"
          className="inline-block shrink-0 group"
          aria-label="HAKA Global Home"
          tabIndex={0}
        >
          <div className="flex flex-col items-end">
            <Image
              src="/haka-logo-gold.svg"
              alt="HAKA"
              width={400}
              height={120}
              className="h-20 md:h-28 lg:h-36 w-auto object-contain"
              priority
            />
            <span className="hidden sm:block text-xs md:text-sm lg:text-base text-[var(--foreground-muted)] tracking-wide whitespace-nowrap -translate-x-3 -translate-y-10">
              pre-shift strike.
            </span>
          </div>
        </Link>

        {/* Three-line Hamburger Menu Button */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            className="flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 gap-2 md:gap-2.5 rounded-xl hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            tabIndex={0}
          >
            <span className={`block w-7 md:w-8 h-[3px] bg-[var(--gold)] rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[11px] md:translate-y-[13px]' : ''}`} />
            <span className={`block w-7 md:w-8 h-[3px] bg-[var(--gold)] rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block w-7 md:w-8 h-[3px] bg-[var(--gold)] rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[11px] md:-translate-y-[13px]' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 top-full mt-4 w-[340px] md:w-[420px] bg-[#242324] rounded-2xl shadow-2xl border border-[var(--border)] py-6 animate-fade-in-up overflow-hidden"
              role="menu"
            >
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-10 py-6 md:py-7 text-xl md:text-2xl font-bold uppercase tracking-wider transition-all duration-200 hover:bg-[var(--surface)] hover:pl-12 ${
                    pathname === link.href
                      ? "text-[var(--gold)] bg-[var(--surface)]"
                      : link.isAccent
                      ? "text-[var(--gold)]"
                      : "text-[var(--foreground)]"
                  } ${index === NAV_LINKS.length - 1 ? "mt-3 border-t border-[var(--border)] pt-8" : ""}`}
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
