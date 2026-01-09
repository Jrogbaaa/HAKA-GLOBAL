"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function InvestmentPage() {
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
        <section className="w-full flex justify-center pt-16 pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16">
          <div className="w-full max-w-3xl px-6 text-left">
            <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-[var(--gold)] mb-10">
              HAKA GLOBAL INVESTMENT
            </h1>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed">
              Strategic investments shaped by access, timing and conviction.
            </p>
          </div>
        </section>

        {/* Hero Banner Image */}
        <section className="w-full px-6 md:px-12 lg:px-16">
          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[360px] overflow-hidden rounded-lg">
            <Image
              src="/images/investment/hero.jpg"
              alt="HAKA Global Investment - Strategic Capital"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/30" />
          </div>
        </section>

        <div className="h-12 md:h-16 lg:h-20" aria-hidden="true" />

        {/* Overview Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-8">
              Overview
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9] mb-6">
              HAKA Global Investment operates where{" "}
              <strong className="text-[var(--gold)] font-semibold">information asymmetry, scarcity and strategic access</strong>{" "}
              generate long-term value. Our activity is selective and opportunity-driven, often emerging from insights developed within{" "}
              <Link
                href="/advisory"
                className="text-[var(--foreground)] font-semibold hover:text-[var(--gold)] transition-colors duration-300"
                tabIndex={0}
                aria-label="Learn about HAKA Global Consulting"
              >
                HAKA Global Consulting
              </Link>.
            </p>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9]">
              We deploy capital where anticipation creates advantage.
            </p>
          </div>
        </section>

        <div className="h-12 md:h-16 lg:h-20" aria-hidden="true" />

        {/* Investment Philosophy Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-8">
              Investment Philosophy
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9] mb-6">
              We do not chase trends. We position capital before they form.
            </p>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9] mb-6">
              Our approach combines contextual intelligence, disciplined risk assessment and access to non-obvious opportunities.
            </p>
            <p className="text-base md:text-lg text-[var(--foreground)] leading-[1.9] font-medium">
              Conviction matters more than volume.
            </p>
          </div>
        </section>

        <div className="h-12 md:h-16 lg:h-20" aria-hidden="true" />

        {/* Investment Areas Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-12">
              Investment Areas
            </h2>

            <div className="space-y-12 text-left">
              {/* 1. Worldwide Real Estate */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  1. Worldwide Real Estate
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  Strategic real estate investments across key global locations, focused on scarcity, positioning and long-term relevance rather than short-term cycles.
                </p>
              </div>

              {/* 2. Private & Strategic Investments */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  2. Private &amp; Strategic Investments
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8] mb-4">
                  Direct investments in companies and structures where governance, strategy and long-term vision are aligned.
                </p>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  This includes access to{" "}
                  <strong className="text-[var(--gold)] font-semibold">startups and early-stage opportunities typically unavailable to the broader market</strong>, sourced through private networks and proprietary intelligence.
                </p>
              </div>

              {/* 3. Precious Metals */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  3. Precious Metals
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  Targeted exposure to precious metals as instruments of capital preservation, optionality and portfolio balance, approached with strategic timing and discipline.
                </p>
              </div>

              {/* 4. Luxury Assets & Collectibles */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-[var(--foreground)] mb-2">
                  4. Luxury Assets &amp; Collectibles
                </h3>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8] mb-4">
                  We treat luxury goods as{" "}
                  <strong className="text-[var(--gold)] font-semibold">investment-grade assets</strong>, driven by scarcity, demand and access.
                </p>
                <p className="text-base text-[var(--foreground-muted)] leading-[1.8]">
                  We provide sourcing, access and resale of{" "}
                  <strong className="text-[var(--gold)] font-semibold">highly sought-after and often inaccessible pieces</strong>, including watches, handbags, accessories and fine jewelry from maisons such as Patek Philippe, Audemars Piguet, Rolex, Hermès, Chanel, Goyard, and other highly selective brands. We operate where access defines value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-12 md:h-16 lg:h-20" aria-hidden="true" />

        {/* Intelligence & Timing Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-8">
              Intelligence &amp; Timing
            </h2>
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9]">
              Investment decisions are supported by{" "}
              <strong className="text-[var(--gold)] font-semibold">AI-driven strategic intelligence</strong>, applied to context analysis, scenario anticipation and decision support across market and non-market environments.
            </p>
          </div>
        </section>

        <div className="h-12 md:h-16 lg:h-20" aria-hidden="true" />

        {/* How We Operate Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <h2 className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--foreground)] font-medium mb-12">
              How We Operate
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[var(--foreground-muted)]">
              <p>Direct investments or mandate-based activity. No open vehicles. No mass exposure.</p>
              <p>Discretion and selectivity are fundamental.</p>
            </div>
          </div>
        </section>

        <div className="h-12 md:h-16 lg:h-20" aria-hidden="true" />

        {/* Consulting Bridge Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-3xl px-6 text-left">
            <p className="text-base md:text-lg text-[var(--foreground-muted)] leading-[1.9] mb-6">
              Capital follows insight. Insight comes before opportunity.
            </p>
            <p className="text-base md:text-lg text-[var(--foreground)] leading-[1.9] font-medium">
              Pre-Shift Strike.
            </p>
          </div>
        </section>

        <div className="h-12 md:h-16 lg:h-20" aria-hidden="true" />

        {/* Email Subscription Section */}
        <section className="w-full flex justify-center pb-16 md:pb-24 lg:pb-32">
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
