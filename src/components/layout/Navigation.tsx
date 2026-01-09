"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Consulting", href: "/advisory" },
  { label: "Investment", href: "/investment" },
  { label: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800/50">
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center p-1 rounded-full text-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      <div className="flex-1 text-center pr-8">
        <Link href="/">
          <h2 className="text-xl font-extrabold tracking-[0.2em] leading-tight text-slate-900 dark:text-white">
            HAKA
          </h2>
        </Link>
      </div>

      {/* Spacer to balance the menu icon */}
      <div className="w-6"></div>

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
                  ? "text-primary"
                  : "text-slate-900 dark:text-white"
              }`}
              role="menuitem"
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-gray-400 text-lg">
                arrow_forward
              </span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
