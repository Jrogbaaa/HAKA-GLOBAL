"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConsultingPage() {
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
      <main className="flex-1 w-full max-w-full">
        {/* Hero Section */}
        <section className="w-full flex justify-center pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32">
          <div className="w-full max-w-3xl px-6 text-left">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[var(--foreground)] mb-10">
              HAKA GLOBAL CONSULTING
            </h1>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed">
              Strategic advisory for people and companies operating where decisions take shape.
            </p>
          </div>
        </section>

        <div className="h-16 md:h-24 lg:h-32" aria-hidden="true" />

        {/* What We Do Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-8">
              What We Do
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9]">
              We advise at decision level, aligning strategy, reputation and context. Our work sits across{" "}
              <strong className="text-[var(--foreground)] font-semibold">Personal and Corporate Affairs</strong>, non-market dynamics and financial decision-making. We help clients anticipate shifts, shape consensus and act with clarity — before moves become public.
            </p>
          </div>
        </section>

        <div className="h-16 md:h-24 lg:h-32" aria-hidden="true" />

        {/* Areas of Advisory Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-12">
              Areas of Advisory
            </h2>

            <div className="space-y-12 text-left">
              {/* 1. Strategic Advisory & Positioning */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  1. Strategic Advisory &amp; Positioning
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  We define and refine strategic positioning where relevance, authority and long-term advantage are built — beyond visibility or messaging.
                </p>
              </div>

              {/* 2. C-Level & Executive Advisory */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  2. C-Level &amp; Executive Advisory
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  Confidential counsel for founders, executives and decision-makers operating under high stakes, public exposure and institutional complexity.
                </p>
              </div>

              {/* 3. Personal & Corporate Affairs */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  3. Personal &amp; Corporate Affairs
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  Strategic advisory on personal and corporate interests, aligning reputation, relationships and positioning within decision-making environments.
                </p>
              </div>

              {/* 4. Non-Market Strategy */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  4. Non-Market Strategy
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  Strategy beyond markets: institutions, regulation, public perception and power dynamics that shape outcomes outside traditional competitive frameworks.
                </p>
              </div>

              {/* 5. Public Reputation, Trust & Consensus */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  5. Public Reputation, Trust &amp; Consensus
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  We help build, protect and reinforce reputational capital, legitimacy and trust, ensuring credibility among key stakeholders before consensus becomes public.
                </p>
              </div>

              {/* 6. AI-Driven Strategic Intelligence */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  6. AI-Driven Strategic Intelligence
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  Advanced intelligence systems applied to context analysis, scenario anticipation and decision support across personal, corporate and non-market environments.
                </p>
              </div>

              {/* 7. Financial Advisory */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  7. Financial Advisory
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  Strategic financial counsel supporting growth, restructuring, transactions and capital decisions, often acting as a bridge toward investment activity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-16 md:h-24 lg:h-32" aria-hidden="true" />

        {/* How We Work Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-12">
              How We Work
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[var(--foreground-muted)]">
              <p>We work selectively.</p>
              <p>We operate with discretion.</p>
              <p>We prioritize judgment over process.</p>
              <p>Advisory is not execution support.</p>
              <p>It is strategic clarity under complexity.</p>
            </div>
          </div>
        </section>

        <div className="h-16 md:h-24 lg:h-32" aria-hidden="true" />

        {/* When Clients Engage Us Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-12">
              When Clients Engage Us
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[var(--foreground-muted)]">
              <p>When visibility, access and timing matter.</p>
              <p>When influence is necessary.</p>
              <p>When decisions cannot be improvised.</p>
              <p>When context is as important as capital.</p>
            </div>
          </div>
        </section>

        <div className="h-16 md:h-24 lg:h-32" aria-hidden="true" />

        {/* Relationship Model Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-12">
              Relationship Model
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[var(--foreground-muted)]">
              <p>Mandate-based.</p>
              <p>Bespoke engagements.</p>
              <p>Confidential by default.</p>
            </div>
          </div>
        </section>

        <div className="h-16 md:h-24 lg:h-32" aria-hidden="true" />

        {/* Investment Bridge Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9] mb-6">
              Strategic advisory often leads to capital decisions.
            </p>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9]">
              When appropriate, our work extends into{" "}
              <Link
                href="/investment"
                className="text-[var(--foreground)] font-semibold hover:text-[var(--gold)] transition-colors duration-300"
                tabIndex={0}
                aria-label="Learn about Haka Global Investment"
              >
                Haka Global Investment
              </Link>
              .
            </p>
          </div>
        </section>

        <div className="h-16 md:h-24 lg:h-32" aria-hidden="true" />

        {/* Email Subscription Section */}
        <section className="w-full flex justify-center pb-24 md:pb-36 lg:pb-44">
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
