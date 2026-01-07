import { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Advisory Services",
  description: "Strategic advisory at decision level.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnxEkcjhjYkzHjwFSLLW7Q21i9AEgnDVvMNGGUvmQxyqweUJJz93duzjL5OF3GairMOe0uUzrdAriPyzx9k-xRMCxJkSTyid5Ivl7HA3rrZijT20XZTLGyxeSXGfnCW0LdG05csu_3cMbXdaMxwk8LRkVqkv7jsU7XOeS1Mzer6nzdTFCbtdya1N0MYu9Qmx4JyQT6UbnJgm3Sea5Da-shxnvY2uWo6diNoMrNwgvy6CLKBaw3zG0h-AcNX7hGlanLkzLzlcX7Smw")`,
          }}
          role="img"
          aria-label="Abstract dark luxury texture"
        />
        <div className="relative z-10 flex flex-col gap-4 text-center max-w-4xl mx-auto fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
            HAKA Global Consulting
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-black font-serif leading-tight tracking-tight">
            Areas of Advisory
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className={`group relative flex flex-col p-10 lg:p-12 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300 ${
                  index === SERVICES.length - 1 && SERVICES.length % 3 === 1
                    ? "lg:col-start-2"
                    : ""
                }`}
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
              >
                {/* Number */}
                <span className="font-serif text-5xl font-bold text-[var(--primary)]/20 mb-8">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--primary)]/10 mb-8">
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    {service.icon}
                  </span>
                </div>

                {/* Title Only */}
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>

                {/* Arrow */}
                <div className="mt-auto pt-8 flex items-center gap-2 text-white/40 group-hover:text-[var(--primary)] transition-colors">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Learn More
                  </span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
