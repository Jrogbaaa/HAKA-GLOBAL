"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";

type MenuItemType = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

type MegaMenuType = {
  label: string;
  items: MenuItemType[];
  featured?: {
    title: string;
    description: string;
    href: string;
    cta: string;
  };
};

const MEGA_MENUS: Record<string, MegaMenuType> = {
  advisory: {
    label: "Advisory",
    items: [
      {
        title: "C-Level Advisory",
        description: "Strategic guidance for executive leadership",
        href: "/services/c-level-advisory",
        icon: "person_celebrate",
      },
      {
        title: "Leadership Development",
        description: "Build high-performing executive teams",
        href: "/services/leadership-development",
        icon: "groups",
      },
      {
        title: "Change Advisory",
        description: "Navigate organizational transformation",
        href: "/services/change-advisory",
        icon: "autorenew",
      },
      {
        title: "Brand Strategy",
        description: "Position your personal and corporate brand",
        href: "/services/personal-branding",
        icon: "star",
      },
      {
        title: "Deal Advisory",
        description: "Expert guidance on M&A and transactions",
        href: "/services/deal-advisory",
        icon: "handshake",
      },
      {
        title: "Non-Market Strategy",
        description: "Navigate regulatory and political landscapes",
        href: "/services/non-market-strategy",
        icon: "policy",
      },
    ],
    featured: {
      title: "Pre-Shift Strike",
      description:
        "Position before the shift. Our strategic framework for identifying opportunities before they become public.",
      href: "/about",
      cta: "Learn more",
    },
  },
  investment: {
    label: "Investment",
    items: [
      {
        title: "Real Estate",
        description: "Prime residential and commercial opportunities",
        href: "/investment#real-estate",
        icon: "home_work",
      },
      {
        title: "Private Equity",
        description: "Direct investments in high-growth companies",
        href: "/investment#private-equity",
        icon: "trending_up",
      },
      {
        title: "Luxury Assets",
        description: "Collectibles, art, and tangible investments",
        href: "/investment#luxury-assets",
        icon: "diamond",
      },
      {
        title: "Venture Capital",
        description: "Early-stage investments in innovation",
        href: "/investment#venture-capital",
        icon: "rocket_launch",
      },
    ],
    featured: {
      title: "Investment Thesis",
      description:
        "Discover our approach to identifying and capturing asymmetric opportunities across asset classes.",
      href: "/investment",
      cta: "Explore opportunities",
    },
  },
  resources: {
    label: "Resources",
    items: [
      {
        title: "Insights",
        description: "Strategic perspectives and market analysis",
        href: "/insights",
        icon: "lightbulb",
      },
      {
        title: "Marketplace",
        description: "Exclusive opportunities for qualified buyers",
        href: "/marketplace",
        icon: "storefront",
      },
      {
        title: "About HAKA",
        description: "Our story, team, and global presence",
        href: "/about",
        icon: "info",
      },
    ],
    featured: {
      title: "Latest Insights",
      description:
        "Stay ahead with our latest market analysis and strategic perspectives.",
      href: "/insights",
      cta: "Read insights",
    },
  },
};

const NAV_ITEMS = ["advisory", "investment", "resources"] as const;

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(
    null
  );
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setMobileExpandedMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuEnter = (menuKey: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuKey);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileExpandedMenu(null);
  };

  const handleMobileMenuToggle = (menuKey: string) => {
    setMobileExpandedMenu(mobileExpandedMenu === menuKey ? null : menuKey);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggleMobileMenu();
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent, menuKey: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveMenu(activeMenu === menuKey ? null : menuKey);
    }
    if (event.key === "Escape") {
      setActiveMenu(null);
    }
  };

  return (
    <>
      {/* Mega Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-200 ${
          activeMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActiveMenu(null)}
        aria-hidden="true"
      />

      <header
        ref={navRef}
        className={`
          fixed top-0 z-50 w-full transition-all duration-300
          ${
            isScrolled
              ? "bg-[var(--background)]/95 backdrop-blur-lg border-b border-[var(--border)]"
              : "bg-transparent"
          }
        `}
      >
        <div className="w-full max-w-[1280px] mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label={`${SITE_CONFIG.name} Home`}
            tabIndex={0}
          >
            <img
              src="/haka-logo.svg"
              alt={`${SITE_CONFIG.name} Logo`}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 ml-8">
            {NAV_ITEMS.map((menuKey) => {
              const menu = MEGA_MENUS[menuKey];
              return (
                <div
                  key={menuKey}
                  className="relative"
                  onMouseEnter={() => handleMenuEnter(menuKey)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeMenu === menuKey
                        ? "text-white bg-[var(--surface)]"
                        : "text-[var(--text-secondary)] hover:text-white"
                    }`}
                    aria-expanded={activeMenu === menuKey}
                    aria-haspopup="true"
                    onKeyDown={(e) => handleMenuKeyDown(e, menuKey)}
                    tabIndex={0}
                  >
                    {menu.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMenu === menuKey ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                      activeMenu === menuKey
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => handleMenuEnter(menuKey)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl p-6 min-w-[600px]">
                      <div className="grid grid-cols-2 gap-6">
                        {/* Menu Items */}
                        <div className="space-y-1">
                          {menu.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-[var(--surface-hover)] group"
                              tabIndex={0}
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="w-10 h-10 rounded-lg bg-[var(--primary-muted)] flex items-center justify-center shrink-0 group-hover:bg-[var(--primary-20)] transition-colors">
                                <span className="material-symbols-outlined text-[var(--primary)] text-xl">
                                  {item.icon}
                                </span>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white group-hover:text-[var(--primary)] transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Featured Section */}
                        {menu.featured && (
                          <div className="bg-[var(--surface-elevated)] rounded-xl p-5 flex flex-col justify-between">
                            <div>
                              <div className="text-xs font-medium text-[var(--primary)] uppercase tracking-wider mb-2">
                                Featured
                              </div>
                              <h4 className="text-lg font-semibold text-white mb-2">
                                {menu.featured.title}
                              </h4>
                              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                {menu.featured.description}
                              </p>
                            </div>
                            <Link
                              href={menu.featured.href}
                              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] mt-4 hover:gap-3 transition-all"
                              tabIndex={0}
                              onClick={() => setActiveMenu(null)}
                            >
                              {menu.featured.cta}
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-white transition-colors"
              tabIndex={0}
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold bg-[var(--primary)] text-[var(--background)] rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/20"
              tabIndex={0}
            >
              Get Started
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
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[var(--background)]" />
        <nav className="relative h-full flex flex-col pt-20 pb-6 px-4 overflow-y-auto">
          {NAV_ITEMS.map((menuKey) => {
            const menu = MEGA_MENUS[menuKey];
            const isExpanded = mobileExpandedMenu === menuKey;

            return (
              <div key={menuKey} className="border-b border-[var(--border)]">
                <button
                  onClick={() => handleMobileMenuToggle(menuKey)}
                  className="w-full flex items-center justify-between py-4 text-lg font-semibold text-white"
                  aria-expanded={isExpanded}
                  tabIndex={0}
                >
                  {menu.label}
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? "max-h-[500px] pb-4" : "max-h-0"
                  }`}
                >
                  <div className="space-y-2 pl-4">
                    {menu.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 py-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                        tabIndex={0}
                      >
                        <span className="material-symbols-outlined text-[var(--primary)] text-lg">
                          {item.icon}
                        </span>
                        <span className="text-sm font-medium">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Mobile CTA */}
          <div className="mt-auto pt-6 space-y-3">
            <Link
              href="/contact"
              className="block w-full py-3 text-center text-sm font-medium text-[var(--text-secondary)] border border-[var(--border)] rounded-lg hover:bg-[var(--surface)] transition-colors"
              tabIndex={0}
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="block w-full py-3 text-center text-sm font-semibold bg-[var(--primary)] text-[var(--background)] rounded-lg hover:bg-[var(--primary-hover)] transition-colors"
              tabIndex={0}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};
