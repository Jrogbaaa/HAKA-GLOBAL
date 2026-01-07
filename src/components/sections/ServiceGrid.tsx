"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";

interface ServiceGridProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export const ServiceGrid = ({
  sectionSubtitle = "What We Do",
  sectionTitle = "Areas of Advisory",
}: ServiceGridProps) => {
  return (
    <section className="relative w-full flex justify-center bg-[var(--background)] py-24 lg:py-32 overflow-hidden">
      <div className="relative w-full flex max-w-[1280px] flex-col gap-16 lg:gap-20 px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[var(--primary)]/60" />
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--primary)]">
                {sectionSubtitle}
              </p>
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {sectionTitle}
            </h2>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-3 text-[var(--primary)] transition-all hover:gap-4"
            tabIndex={0}
            aria-label="View all advisory services"
          >
            <span className="text-sm font-bold uppercase tracking-wider">
              View All Services
            </span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Cards Grid - Show first 4 services */}
        <div className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-[var(--surface)] p-8 lg:p-10 transition-all duration-300 border border-[var(--border)] hover:border-[var(--primary)]/30"
              style={{ animationDelay: `${index * 100}ms` }}
              tabIndex={0}
              aria-label={`Learn more about ${service.title}`}
            >
              {/* Icon */}
              <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors duration-300 mb-8">
                <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                  {service.icon}
                </span>
              </div>

              {/* Title Only */}
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors duration-300 leading-snug">
                {service.title}
              </h3>

              {/* Arrow indicator */}
              <div className="mt-auto pt-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-white/30 group-hover:text-[var(--primary)]/70 transition-colors duration-300">
                  Explore
                </span>
                <span className="material-symbols-outlined text-white/30 group-hover:text-[var(--primary)] transition-all duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
