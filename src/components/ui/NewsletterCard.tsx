"use client";

import { useState } from "react";

interface NewsletterCardProps {
  className?: string;
}

export const NewsletterCard = ({ className = "" }: NewsletterCardProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Use Resend API via server action
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`mt-4 px-6 pt-8 pb-12 bg-[var(--surface)] rounded-t-3xl border-t border-white/5 ${className}`}
    >
      <div className="flex flex-col items-start gap-4 max-w-md mx-auto">
        <div>
          <h3 className="text-2xl font-bold text-[var(--foreground)]">
            Join the shift.
          </h3>
          <p className="text-sm text-[var(--foreground-muted)] mt-1">
            Get exclusive strategic insights delivered.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 mt-2">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-[var(--foreground-muted)]">
                mail
              </span>
            </div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full pl-10 pr-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
              placeholder="email@address.com"
              required
              aria-label="Email address"
              tabIndex={0}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[var(--primary)] text-white font-bold rounded-lg hover:bg-[var(--primary-hover)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary)]/25 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Subscribe to newsletter"
            tabIndex={0}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
            {!isSubmitting && (
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            )}
          </button>
        </form>

        {submitStatus === "success" && (
          <p className="text-emerald-500 text-sm">
            Thank you for subscribing!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500 text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      {/* Minimal Footer */}
      <div className="mt-10 pt-6 border-t border-white/5 flex flex-col items-center gap-4 max-w-md mx-auto">
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/company/hakaglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
            aria-label="LinkedIn"
            tabIndex={0}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/hakaglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors"
            aria-label="Twitter"
            tabIndex={0}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </div>
        <p className="text-xs text-[var(--foreground-muted)] font-light">
          © {new Date().getFullYear()} HAKA Global. All rights reserved.
        </p>
      </div>

      {/* Safe area spacer for iOS home indicator */}
      <div className="h-6 w-full" />
    </div>
  );
};
