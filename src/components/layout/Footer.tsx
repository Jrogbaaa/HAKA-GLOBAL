import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const FOOTER_LINKS = {
  advisory: {
    title: "Advisory",
    links: [
      { label: "Strategic Advisory", href: "/advisory" },
      { label: "C-Level Advisory", href: "/advisory" },
      { label: "Non-Market Strategy", href: "/advisory" },
      { label: "Financial Advisory", href: "/advisory" },
    ],
  },
  investment: {
    title: "Investment",
    links: [
      { label: "Real Estate", href: "/investment#areas" },
      { label: "Private Equity", href: "/investment#areas" },
      { label: "Precious Metals", href: "/investment#areas" },
      { label: "Luxury Assets", href: "/investment#areas" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer */}
      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1 mb-6 md:mb-0">
            <Link href="/" className="inline-block mb-4 -ml-1" tabIndex={0}>
              <div className="flex flex-col items-start">
                <img
                  src="/haka-logo-gold.svg"
                  alt={`${SITE_CONFIG.name} Logo`}
                  className="h-14 w-auto"
                />
                <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-wide -mt-2 whitespace-nowrap self-end translate-x-[-4px]">
                  pre-shift strike.
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-[200px]">
              Strategic advisory and investment where decisions take shape.
            </p>
          </div>

          {/* Link Columns */}
          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-gray-200 mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                      tabIndex={0}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200 transition-colors"
                tabIndex={0}
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal"
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200 transition-colors"
                tabIndex={0}
              >
                Legal Notice
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200 transition-colors"
                tabIndex={0}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
