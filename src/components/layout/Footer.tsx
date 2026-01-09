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

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/hakaglobal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hakaglobal",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)]">
      {/* Main Footer */}
      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1 mb-6 md:mb-0">
            <Link href="/" className="inline-block mb-4" tabIndex={0}>
              <div className="flex flex-col items-start">
                <img
                  src="/haka-logo-gold.svg"
                  alt={`${SITE_CONFIG.name} Logo`}
                  className="h-8 w-auto"
                />
                <span className="text-[10px] text-[var(--foreground-muted)] tracking-wide mt-1 whitespace-nowrap">
                  pre-shift strike.
                </span>
              </div>
            </Link>
            <p className="text-xs text-[var(--foreground-muted)] mb-4 max-w-[200px]">
              Strategic advisory and investment where decisions take shape.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
                  aria-label={social.name}
                  tabIndex={0}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
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
      <div className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[var(--foreground-muted)]">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                tabIndex={0}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                tabIndex={0}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
