"use client";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: "$500M+", label: "Assets Managed" },
  { value: "12", label: "Global Offices" },
  { value: "350+", label: "Private Clients" },
  { value: "2.4K", label: "Transactions" },
];

export const StatsSection = ({ stats = defaultStats }: StatsSectionProps) => {
  return (
    <section className="w-full flex justify-center bg-[var(--background)] border-b border-[var(--border)]">
      <div className="w-full max-w-[1280px] px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col gap-1 ${
                index > 0 ? "border-l border-white/10 pl-6" : ""
              }`}
            >
              <p className="font-serif text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

