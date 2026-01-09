"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setEmail("");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full max-w-full">
      {/* Main Content - Full Width */}
      <main className="flex-1 w-full max-w-full">
        {/* Two Card Grid - Full Width */}
        <section className="w-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Consulting Card - With Background Image */}
            <Link
              href="/advisory"
              className="group relative flex items-center justify-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--gold)]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--gold)]/10"
              tabIndex={0}
              aria-label="Explore Consulting services"
            >
              {/* Background Image */}
              <Image
                src="/images/advisory/hero.jpg"
                alt=""
                fill
                className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                priority
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500" />
              {/* Title */}
              <h2 
                className="relative z-10 text-[var(--gold)] font-light tracking-tight text-center group-hover:scale-105 transition-transform duration-500"
                style={{ fontSize: 'clamp(1.75rem, 6vw, 4.5rem)', lineHeight: '1' }}
              >
                CONSULTING
              </h2>
            </Link>

            {/* Investing Card - With Background Image */}
            <Link
              href="/investment"
              className="group relative flex items-center justify-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px] overflow-hidden rounded-2xl border border-[var(--border)] hover:border-[var(--foreground-muted)]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5"
              tabIndex={0}
              aria-label="Explore Investing services"
            >
              {/* Background Image */}
              <Image
                src="/images/investment/hero.jpg"
                alt=""
                fill
                className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                priority
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500" />
              {/* Title */}
              <h2 
                className="relative z-10 text-[var(--foreground-muted)] font-light tracking-tight text-center group-hover:scale-105 transition-transform duration-500"
                style={{ fontSize: 'clamp(1.75rem, 6vw, 4.5rem)', lineHeight: '1' }}
              >
                INVESTING
              </h2>
            </Link>
          </div>
        </section>

        {/* Spacer between cards and description */}
        <div className="h-8 md:h-12 lg:h-16" aria-hidden="true" />

        {/* Description Section - Below boxes with spacing */}
        <section className="w-full flex justify-center pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20">
          <div className="w-full max-w-4xl px-6 text-left">
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-[var(--gold)] font-semibold">
              We support Personal and Corporate Affairs with anticipation, strategic clarity, access and long-term vision.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[var(--foreground)] mt-6">
              We operate where decisions take shape, before they become public.
            </p>
            <div className="h-4 md:h-6" aria-hidden="true" />
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[var(--foreground)]">
              We read context, influence outcomes and position people and companies where it matters most. Strategy, reputation and capital move together.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[var(--foreground)] mt-6">
              We create opinions and build consensus.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[var(--foreground)] mt-6">
              We advise with clarity. We invest with conviction. We act with access.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[var(--foreground)] mt-6">
              <strong className="font-semibold text-[var(--gold)]">Pre-Shift Strike</strong> is not a slogan. It&apos;s knowing when to move, where to stand, and who needs to be in the room. Before the shift happens.
            </p>
          </div>
        </section>

        {/* Email Subscription Section */}
        <section className="w-full flex justify-center pt-20 md:pt-28 lg:pt-36 pb-12 md:pb-16 lg:pb-20">
          <div className="w-full max-w-md px-6 text-left">
            <p className="text-base md:text-lg text-[var(--foreground)] mb-8">
              Enter your email address
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder=""
                className="w-full px-5 py-4 border border-[var(--foreground-muted)] bg-transparent text-[var(--foreground)] text-center focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-200"
                aria-label="Email address"
                tabIndex={0}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 py-4 border border-[var(--foreground-muted)] bg-transparent text-[var(--foreground)] text-center uppercase tracking-widest text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Subscribe to newsletter"
                tabIndex={0}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {submitStatus === "success" && (
              <p className="mt-5 text-green-500 text-sm">
                Thank you for subscribing!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-5 text-red-500 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-full bg-[var(--surface)] py-6 mt-auto">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[var(--foreground-muted)] text-sm">
            <p>© {new Date().getFullYear()} HAKA Global. All rights reserved.</p>
            <p>Confidential by default.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
