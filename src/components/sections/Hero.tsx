"use client";

import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

export const Hero = ({
  title = "Pre-Shift Strike.",
  subtitle = "HAKA Global",
  description = "Strategic advisory and investment where decisions take shape.",
  primaryCta = {
    label: "Start a Conversation",
    href: "/contact",
  },
  secondaryCta = {
    label: "Our Advisory",
    href: "/services",
  },
  backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuD4dhCRCqE-Y3T1FbFvTduZ01YG3bpTec5P-t5ESU5ukY2aw4d4ROrx4e2Wb6_DcCIFPkS5efD_R5YPV55ZL9moxJDAsPQvTzqO03Hw3Ijq3VeJxNNHi7mensbSMA9Fr730gdD8GXcT-aUR5TfyG7iuoFfeC-dRd-szDPzXTbc3dU--3xmxwIllyBpKFlycG4UMzejEjpzQ79EZStET82kQMwjguNHcNw40QU41qM9vSBESGRT91WS1PXtR0AaISbOXjJc1E-pRDJs",
}: HeroProps) => {
  return (
    <section className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden bg-[var(--background)] px-6 py-32 lg:px-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[var(--background)] via-[var(--background)]/40 to-[var(--background)]" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--background)]/80 via-transparent to-[var(--background)]/80" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_100%)]" />
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
          role="img"
          aria-label="Modern high-rise skyscrapers reaching into a dark sky"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-[var(--primary)]/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-8 w-px h-32 bg-gradient-to-b from-transparent via-[var(--primary)]/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-20 flex max-w-[1000px] flex-col items-center gap-8 text-center fade-up">
        {/* Subtitle */}
        {subtitle && (
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[var(--primary)]/60 hidden sm:block" />
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.35em] text-[var(--primary)]">
              {subtitle}
            </p>
            <span className="h-px w-8 bg-[var(--primary)]/60 hidden sm:block" />
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="max-w-xl text-lg font-light text-white/60 md:text-xl">
            {description}
          </p>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-5 sm:flex-row mt-8 lg:mt-12">
          {primaryCta && (
            <Link href={primaryCta.href} tabIndex={0}>
              <button
                className="group flex h-[3.75rem] items-center justify-center gap-3 rounded-lg bg-[var(--primary)] px-12 text-base font-bold text-[var(--background)] transition-all duration-300 hover:bg-white whitespace-nowrap"
                tabIndex={-1}
                aria-label={primaryCta.label}
              >
                {primaryCta.label}
                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} tabIndex={0}>
              <button
                className="flex h-[3.75rem] items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-12 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 whitespace-nowrap"
                tabIndex={-1}
                aria-label={secondaryCta.label}
              >
                {secondaryCta.label}
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-pulse">
        <span className="material-symbols-outlined text-white/40 text-sm">expand_more</span>
      </div>
    </section>
  );
};
