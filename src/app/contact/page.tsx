import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { LOCATIONS, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "Discretion starts here. HAKA engages selectively.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1 w-full pb-8">
        {/* Header */}
        <div className="px-5 pt-6 pb-4">
          <h1 className="text-[var(--foreground)] tracking-tight text-[28px] font-bold leading-tight mb-2">
            Let&apos;s discuss how we can help your business grow.
          </h1>
          <p className="text-[var(--foreground-muted)] text-sm font-medium">
            Get in touch with our global team.
          </p>
        </div>

        {/* Contact Form */}
        <div className="px-5">
          <ContactForm />
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border)] mx-5 my-6" />

        {/* Locations */}
        <div className="px-5">
          <h3 className="text-[var(--foreground)] text-base font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[var(--primary)] text-lg">public</span>
            Our Offices
          </h3>
          <div className="flex flex-col gap-3">
            {LOCATIONS.map((location) => (
              <div
                key={location.city}
                className="flex items-start gap-3 p-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] shadow-sm"
              >
                <div className="size-9 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0 text-[var(--primary)]">
                  <span className="material-symbols-outlined text-lg">location_on</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--foreground)] font-bold text-sm">
                    {location.city}
                  </h4>
                  <p className="text-[var(--foreground-muted)] text-xs mt-0.5">
                    {location.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Link */}
        <div className="px-5 pt-6 pb-4 text-center">
          <Link
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:underline text-sm"
            tabIndex={0}
            aria-label={`Email ${SITE_CONFIG.email}`}
          >
            <span className="material-symbols-outlined text-base">mail</span>
            {SITE_CONFIG.email}
          </Link>

          <p className="text-[var(--foreground-muted)]/60 text-xs mt-4">
            © {new Date().getFullYear()} HAKA Global. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
