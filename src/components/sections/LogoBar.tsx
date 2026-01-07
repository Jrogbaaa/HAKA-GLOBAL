type LogoBarProps = {
  title?: string;
  logos?: { name: string; icon?: string }[];
};

const DEFAULT_LOGOS = [
  { name: "Fortune 500", icon: "corporate_fare" },
  { name: "Family Offices", icon: "account_balance" },
  { name: "Private Equity", icon: "trending_up" },
  { name: "Sovereign Wealth", icon: "public" },
  { name: "UHNW Individuals", icon: "person" },
  { name: "Institutions", icon: "domain" },
];

export const LogoBar = ({
  title = "Trusted by leading institutions and executives",
  logos = DEFAULT_LOGOS,
}: LogoBarProps) => {
  return (
    <section className="py-16 lg:py-20 border-y border-[var(--border)]">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Title */}
        <p className="text-center text-sm font-medium text-[var(--text-muted)] uppercase tracking-wider mb-10">
          {title}
        </p>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors group"
            >
              <span className="material-symbols-outlined text-2xl opacity-50 group-hover:opacity-70 transition-opacity">
                {logo.icon}
              </span>
              <span className="text-sm font-medium whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

