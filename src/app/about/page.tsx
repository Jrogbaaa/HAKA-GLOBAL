"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 w-full py-24 lg:py-32 flex flex-col items-center">
        <div className="w-full max-w-[850px] px-8 lg:px-12">
          {/* Title */}
          <h1
            className="text-[var(--foreground)] font-medium tracking-tight text-center"
            style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
          >
            ABOUT HAKA
          </h1>

          {/* Content */}
          <article
            className="text-[var(--foreground)] mt-6"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            {/* Tagline */}
            <p className="font-semibold">Anticipation · Affairs · Influence</p>

            {/* Space after tagline */}
            <div className="h-6" />

            {/* Introduction paragraphs */}
            <p>
              HAKA operates where{" "}
              <strong className="font-semibold">decisions take shape</strong>,
              before they become public or formalized.
            </p>
            <p>
              We work within complex{" "}
              <strong className="font-semibold">
                personal, corporate and institutional environments
              </strong>
              , supporting individuals and organizations whose outcomes depend on{" "}
              <strong className="font-semibold">
                context, alignment and timing
              </strong>
              , not only on market dynamics.
            </p>
            <p>
              Our activity sits within{" "}
              <strong className="font-semibold">
                Personal and Corporate Affairs
              </strong>
              : the management of positioning, relationships and credibility in
              environments where{" "}
              <strong className="font-semibold">
                power, interests and perception converge.
              </strong>
            </p>

            {/* Double space before influence section */}
            <div className="h-6" />

            <p>
              We help navigate groups of influence, shape alignment among key
              actors and{" "}
              <strong className="font-semibold">
                build consensus before positions harden
              </strong>
              . Influence, for us, is not pressure — it is strategic alignment
              achieved early.
            </p>
            <p>
              Anticipation defines our advantage. By combining contextual judgment
              with{" "}
              <strong className="font-semibold">
                AI-driven strategic intelligence
              </strong>
              , we analyze decision-making environments, identify early signals
              and anticipate scenarios before they become visible.
            </p>
            <p>This allows our clients to move:</p>
            <ul className="ml-1">
              <li>• before narratives settle,</li>
              <li>• before consensus becomes public,</li>
              <li>• before the shift occurs.</li>
            </ul>

            {/* Double space before Pre-Shift Strike */}
            <div className="h-6" />

            <p>
              <strong className="font-semibold">Pre-Shift Strike</strong> is how
              we operate. HAKA works selectively and with discretion. We do not
              seek visibility. We operate where relevance is decided.
            </p>

            {/* Double space before AI section */}
            <div className="h-6" />

            <p className="font-semibold">AI as Strategic Leverage</p>
            <p>
              At HAKA, artificial intelligence is not a product, a toolset or a
              standalone service.
            </p>
            <p>
              It is a{" "}
              <strong className="font-semibold">strategic leverage layer</strong>{" "}
              embedded into our judgment and advisory processes. We use AI to
              enhance contextual analysis, map complex decision-making
              environments, detect weak signals and simulate scenarios before they
              materialize. The objective is not automation, but{" "}
              <strong className="font-semibold">clarity</strong>: reducing
              uncertainty, improving timing and supporting higher-quality
              decisions at critical moments. AI amplifies human judgment. It does
              not replace it.
            </p>
          </article>
        </div>

        {/* Email Section - No Subscribe Button */}
        <section className="w-full flex justify-center pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-28">
          <div className="w-full max-w-md px-6 text-center">
            <p className="text-base md:text-lg text-[var(--foreground)] mb-8">
              Enter your email address
            </p>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder=""
              className="w-full px-5 py-4 border border-[var(--foreground-muted)] bg-transparent text-[var(--foreground)] text-center focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all duration-200"
              aria-label="Email address"
              tabIndex={0}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[var(--surface)] py-8 mt-auto">
        <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--foreground-muted)] text-sm">
            <p>© {new Date().getFullYear()}. All rights reserved</p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="hover:text-[var(--foreground)] transition-colors"
                tabIndex={0}
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal"
                className="hover:text-[var(--foreground)] transition-colors"
                tabIndex={0}
              >
                Legal Notice
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
