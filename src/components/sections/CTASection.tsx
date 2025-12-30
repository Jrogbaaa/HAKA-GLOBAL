"use client";

import { useState } from "react";

interface CTASectionProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

export const CTASection = ({
  title = "Join the Inner Circle",
  description = "Receive curated insights on global markets, emerging real estate opportunities, and personal brand management.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
}: CTASectionProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <section className="w-full flex justify-center bg-[var(--surface-elevated)]">
      <div className="w-full max-w-[1280px] px-6 lg:px-10">
        {/* Divider with generous spacing above and below */}
        <div className="py-16 lg:py-24">
          <div className="border-t border-[var(--border)]" />
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <span className="material-symbols-outlined mb-8 text-5xl text-[var(--primary)]">
            mark_email_read
          </span>

          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-secondary)] leading-relaxed">
            {description}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 flex max-w-lg flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={placeholder}
              required
              disabled={isSubmitting}
              className="flex-1 rounded-lg border border-[var(--border)] bg-[var(--background)] px-5 py-4 text-white placeholder-white/40 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] disabled:opacity-50 transition-colors"
              aria-label="Email address"
              tabIndex={0}
            />
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="rounded-lg bg-[var(--primary)] px-10 py-4 font-bold text-[var(--background)] transition-colors hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              tabIndex={0}
              aria-label={buttonText}
            >
              {isSubmitting ? "Subscribing..." : buttonText}
            </button>
          </form>

          {isSuccess && (
            <p className="mt-6 text-sm text-green-400 animate-fade-in">
              Thank you for subscribing! Check your inbox for confirmation.
            </p>
          )}
        </div>
        
        {/* Bottom spacing */}
        <div className="pb-20 lg:pb-28" />
      </div>
    </section>
  );
};
