"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale } from "@/i18n";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const { t } = useLocale();

  const NAV_LINKS = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.advisory"), href: "/advisory" },
    { label: t("nav.investment"), href: "/investment" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu on click outside
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

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-12 lg:px-16 py-3 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/50">
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center p-1 rounded-full text-slate-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      {/* Logo with tagline below - right aligned */}
      <div className="flex-1 flex justify-center">
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
              width={320}
              height={90}
              className="h-16 md:h-24 lg:h-28 w-auto object-contain"
              priority
            />
            <span className="text-xs md:text-sm lg:text-base text-gray-500 dark:text-gray-400 tracking-wide -mt-1 text-right whitespace-nowrap">
              pre-shift strike.
            </span>
          </div>
        </Link>
      </div>

      {/* Spacer to balance the menu icon */}
      <div className="w-10"></div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute left-4 right-4 top-full mt-2 bg-white dark:bg-surface-dark rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50"
          role="menu"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between px-4 py-3 text-base font-medium transition-colors hover:bg-gray-100 dark:hover:bg-white/5 ${
                pathname === link.href
                  ? "text-primary bg-primary/10 border-l-4 border-primary"
                  : "text-slate-900 dark:text-gray-200 border-l-4 border-transparent"
              }`}
              role="menuitem"
            >
              <span>{link.label}</span>
              <span className={`material-symbols-outlined text-lg ${
                pathname === link.href ? "text-primary" : "text-gray-400"
              }`}>
                arrow_forward
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
