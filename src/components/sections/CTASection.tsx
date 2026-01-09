"use client";

import Link from "next/link";

interface CTASectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  note?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CTASection = ({
  subtitle = "Start a Conversation",
  title = "Discretion starts here.",
  description = "HAKA engages selectively. If context, timing, and access are critical to your decisions, you may initiate a conversation. All inquiries are treated with discretion.",
  note = "Not every conversation leads to engagement. But every engagement starts with the right conversation.",
  buttonText = "Initiate a Conversation",
  buttonHref = "/contact",
}: CTASectionProps) => {
  return (
    <section className="relative w-full flex justify-center bg-[var(--background)] py-20 lg:py-32 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.04] blur-3xl pointer-events-none" />
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[var(--primary)]/30 to-transparent" />

      <div className="relative w-full max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-left">
          {/* Subtitle with decorative elements */}
          <div className="flex items-center justify-start gap-4 mb-10">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--primary)]/60" />
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--primary)]">
              {subtitle}
            </p>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--primary)]/60" />
          </div>

          {/* Title with gold gradient text */}
          <h2 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-[var(--primary)] via-white to-[var(--primary)] bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_8s_ease-in-out_infinite]">
            {title}
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg text-white/50 leading-relaxed lg:text-xl">
            {description}
          </p>

          {/* CTA Button with enhanced styling */}
          <div className="mt-14">
            <Link href={buttonHref} tabIndex={0}>
              <button
                className="group relative inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-xl bg-[var(--primary)] px-14 text-lg font-bold text-[var(--background)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(238,189,43,0.35)] whitespace-nowrap"
                tabIndex={-1}
                aria-label={buttonText}
              >
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">{buttonText}</span>
                <span className="relative material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </Link>
          </div>

          {note && (
            <div className="mt-14 flex items-center justify-start gap-3">
              <span className="h-px w-6 bg-white/20" />
              <p className="text-sm text-white/35 italic max-w-md">
                {note}
              </p>
              <span className="h-px w-6 bg-white/20" />
            </div>
          )}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-[var(--primary)]/30 to-transparent" />
    </section>
  );
};
