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
    <section className="w-full flex justify-center bg-[var(--surface-elevated)] pt-16 lg:pt-20">
      <div className="w-full max-w-[1280px] px-6 lg:px-10">
        {/* Divider */}
        <div className="pb-12 lg:pb-16">
          <div className="border-t border-[var(--border)]" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-6">
            {subtitle}
          </p>

          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-secondary)] leading-relaxed">
            {description}
          </p>

          <div className="mt-10">
            <Link href={buttonHref} tabIndex={0}>
              <button
                className="rounded-lg bg-[var(--primary)] px-10 py-4 font-bold text-[var(--background)] transition-colors hover:bg-white whitespace-nowrap"
                tabIndex={-1}
                aria-label={buttonText}
              >
                {buttonText}
              </button>
            </Link>
          </div>

          {note && (
            <p className="mt-8 text-sm text-[var(--text-muted)] italic">
              {note}
            </p>
          )}
        </div>

        {/* Bottom spacing */}
        <div className="pb-16 lg:pb-20" />
      </div>
    </section>
  );
};
