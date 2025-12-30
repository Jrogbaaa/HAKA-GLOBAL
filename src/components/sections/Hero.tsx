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
  badgeText?: string;
}

export const Hero = ({
  title = "Orchestrating Wealth & Influence",
  subtitle,
  description = "Exclusive access to elite real estate, financial advisory, and personal branding strategies for the modern visionary.",
  primaryCta = {
    label: "Request Access",
    href: "/contact",
  },
  secondaryCta = {
    label: "Explore Services",
    href: "/services",
  },
  backgroundImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuD4dhCRCqE-Y3T1FbFvTduZ01YG3bpTec5P-t5ESU5ukY2aw4d4ROrx4e2Wb6_DcCIFPkS5efD_R5YPV55ZL9moxJDAsPQvTzqO03Hw3Ijq3VeJxNNHi7mensbSMA9Fr730gdD8GXcT-aUR5TfyG7iuoFfeC-dRd-szDPzXTbc3dU--3xmxwIllyBpKFlycG4UMzejEjpzQ79EZStET82kQMwjguNHcNw40QU41qM9vSBESGRT91WS1PXtR0AaISbOXjJc1E-pRDJs",
  badgeText = "Global Membership Open",
}: HeroProps) => {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[var(--background)] px-4 py-20 lg:px-10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-[var(--background)]/50 to-[var(--background)] z-10" />
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
          role="img"
          aria-label="Modern high-rise skyscrapers reaching into a dark sky"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex max-w-[960px] flex-col items-center gap-6 text-center fade-up">
        {/* Badge */}
        {badgeText && (
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">
              {badgeText}
            </span>
          </div>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {title.includes("&") ? (
            <>
              {title.split("&")[0]}
              <span className="text-[var(--primary)]">&</span>
              {title.split("&")[1]}
            </>
          ) : (
            title
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/80 md:text-xl">
            {description}
          </p>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row mt-4">
          {primaryCta && (
            <Link href={primaryCta.href} tabIndex={0}>
              <button
                className="flex h-14 items-center justify-center gap-2.5 rounded-lg bg-[#eebd2b] px-10 text-base font-bold text-[#181611] transition-all hover:bg-white hover:text-[#181611] whitespace-nowrap"
                tabIndex={-1}
                aria-label={primaryCta.label}
              >
                {primaryCta.label}
              </button>
            </Link>
          )}
          {secondaryCta && (
            <Link href={secondaryCta.href} tabIndex={0}>
              <button
                className="flex h-14 items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-10 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 whitespace-nowrap"
                tabIndex={-1}
                aria-label={secondaryCta.label}
              >
                {secondaryCta.label}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
