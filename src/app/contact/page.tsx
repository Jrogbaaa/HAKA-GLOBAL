import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { LOCATIONS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "Discretion starts here. HAKA engages selectively. If context, timing, and access are critical to your decisions, you may initiate a conversation.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 w-full py-24 lg:py-32 flex flex-col items-center">
        <div className="w-full max-w-[850px] px-8 lg:px-12">
          {/* Title */}
          <h1
            className="text-[var(--foreground)] font-medium tracking-tight text-center"
            style={{ fontSize: "1.5rem", lineHeight: "1.2" }}
          >
            START A CONVERSATION
          </h1>

          {/* Subheading */}
          <p
            className="text-[var(--foreground)] font-semibold mt-12"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            Discretion starts here.
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-[var(--foreground)] my-8" />

          {/* Description */}
          <p
            className="text-[var(--foreground)]"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            HAKA engages selectively. If context, timing and access are critical
            to your decisions, you may initiate a conversation.
          </p>
          <p
            className="text-[var(--foreground)] mt-4"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            All inquiries are treated with discretion.
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-[var(--foreground)] my-14" />

          {/* Contact Section */}
          <p
            className="text-[var(--foreground)] font-semibold"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            Contact
          </p>

          {/* Locations */}
          <ul className="mt-6 space-y-6">
            {LOCATIONS.map((location) => (
              <li key={location.city}>
                <p className="text-[var(--foreground)]">
                  •{" "}
                  <span
                    className="underline underline-offset-4 font-medium"
                    style={{ fontSize: "1.375rem" }}
                  >
                    {location.city}
                  </span>
                </p>
                <p
                  className="text-[var(--foreground)] ml-4 mt-1"
                  style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
                >
                  {location.address}
                </p>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-12 h-px bg-[var(--foreground)] my-14" />

          {/* Email */}
          <p
            className="text-[var(--foreground)] font-semibold"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            Email
          </p>
          <p
            className="text-[var(--foreground)] mt-3"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            <Link
              href={`mailto:${SITE_CONFIG.email}`}
              className="hover:text-[var(--gold)] transition-colors"
              tabIndex={0}
              aria-label={`Send email to ${SITE_CONFIG.email}`}
            >
              {SITE_CONFIG.email}
            </Link>
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-[var(--foreground)] my-14" />

          {/* Initiate a Conversation Form */}
          <p
            className="text-[var(--foreground)] font-semibold"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            Initiate a Conversation
          </p>

          {/* Form */}
          <div className="mt-8">
            <ContactForm />
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-[var(--foreground)] my-14" />

          {/* Closing Statement */}
          <p
            className="text-[var(--foreground)] italic"
            style={{ fontSize: "1.125rem", lineHeight: "1.75" }}
          >
            Not every conversation leads to engagement. But every engagement
            starts with the right conversation.
          </p>
        </div>
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
