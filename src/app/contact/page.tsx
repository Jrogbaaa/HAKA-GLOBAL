import { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discretion starts here. HAKA engages selectively. If context, timing, and access are critical to your decisions, you may initiate a conversation.",
};

const OFFICES = [
  {
    city: "London",
    region: "EMEA Headquarters",
    address: "Mayfair, London",
    timezone: "GMT",
    icon: "location_city",
  },
  {
    city: "Dubai",
    region: "Middle East",
    address: "DIFC, Dubai",
    timezone: "GMT+4",
    icon: "apartment",
  },
  {
    city: "Singapore",
    region: "Asia Pacific",
    address: "Marina Bay, Singapore",
    timezone: "GMT+8",
    icon: "business",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-32 lg:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--background)]">
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(238, 189, 43, 0.3) 0%, transparent 70%)",
              transform: "translate(20%, -30%)",
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
          <div className="max-w-3xl pl-6 sm:pl-12 lg:pl-24 xl:pl-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-8">
              <span className="text-sm font-medium text-[var(--primary)]">
                Contact
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Start a
              <br />
              <span className="gradient-text">conversation.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              HAKA engages selectively. If context, timing, and access are
              critical to your decisions, you may initiate a conversation. All
              inquiries are treated with discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-10">
                Send us a message
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              {/* Offices */}
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-white mb-8">
                  Our Offices
                </h3>
                <div className="space-y-5">
                  {OFFICES.map((office, index) => (
                    <div
                      key={index}
                      className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--border-hover)] transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[var(--primary-muted)] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[var(--primary)] text-xl">
                            {office.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {office.city}
                          </h4>
                          <p className="text-sm text-[var(--text-muted)]">
                            {office.region}
                          </p>
                          <p className="text-sm text-[var(--text-muted)] mt-1">
                            {office.address}
                          </p>
                        </div>
                        <div className="ml-auto text-right">
                          <span className="text-xs text-[var(--text-muted)]">
                            {office.timezone}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engagement Types */}
              <div className="mb-16">
                <h3 className="text-xl font-semibold text-white mb-8">
                  Engagement Types
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: "Advisory Mandate",
                      description:
                        "Ongoing strategic counsel for executives and boards",
                    },
                    {
                      title: "Project Engagement",
                      description:
                        "Focused support for specific transactions or initiatives",
                    },
                    {
                      title: "Investment Inquiry",
                      description:
                        "Discussion of co-investment or deal flow opportunities",
                    },
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5"
                    >
                      <h4 className="font-medium text-white mb-1">
                        {type.title}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        {type.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discretion Note */}
              <div className="bg-[var(--surface)] border border-[var(--primary-muted)] rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[var(--primary)]">
                    shield
                  </span>
                  <div>
                    <h4 className="font-medium text-white mb-2">
                      Confidentiality
                    </h4>
                    <p className="text-sm text-[var(--text-muted)]">
                      All inquiries are handled with strict confidentiality.
                      Initial conversations are non-binding and exploratory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
