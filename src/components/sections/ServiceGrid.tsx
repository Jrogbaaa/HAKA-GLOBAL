"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";

interface ServiceGridProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  sectionDescription?: string;
}

export const ServiceGrid = ({
  sectionSubtitle = "What We Do",
  sectionTitle = "Areas of Advisory",
  sectionDescription = "Strategic advisory for people and companies operating where decisions take shape. We advise at decision level, aligning strategy, reputation, and context.",
}: ServiceGridProps) => {
  return (
    <section className="w-full flex justify-center bg-[var(--background)] py-24 lg:py-32">
      <div className="w-full flex max-w-[1280px] flex-col gap-12 lg:gap-16 px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
              {sectionSubtitle}
            </p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
              {sectionTitle}
            </h2>
            <p className="mt-5 text-lg text-white/70 leading-relaxed">
              {sectionDescription}
            </p>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-3 text-[var(--primary)] transition-opacity hover:opacity-80"
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
        <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 4).map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-white/10 bg-[var(--surface)] p-6 transition-all hover:border-[var(--primary)]/50 hover:bg-[var(--border-subtle)]"
              tabIndex={0}
              aria-label={`Learn more about ${service.title}`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--primary)]/10">
                <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                  {service.icon}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="mt-auto pt-4">
                <span className="material-symbols-outlined text-white/40 group-hover:text-[var(--primary)] transition-colors">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="mt-8 p-8 lg:p-12 border border-white/10 bg-[var(--surface)]">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
              How We Work
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              We work selectively. We operate with discretion. We prioritize judgment over process.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Advisory is not execution support. It is strategic clarity under complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
