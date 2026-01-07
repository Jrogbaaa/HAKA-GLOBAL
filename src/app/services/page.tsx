import { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/sections";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Advisory Services",
  description:
    "Strategic advisory at decision level. C-Level Advisory, Leadership Development, Change Advisory, Brand Strategy, Deal Advisory, and Non-Market Strategy.",
};

const SERVICE_GRADIENTS = [
  "linear-gradient(135deg, rgba(238, 189, 43, 0.15), rgba(238, 189, 43, 0.05))",
  "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))",
  "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(6, 182, 212, 0.05))",
  "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0.05))",
  "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05))",
  "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--background)]">
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
              transform: "translate(30%, -40%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(238, 189, 43, 0.3) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                Advisory Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Strategic counsel for
              <br />
              <span className="gradient-text">critical moments.</span>
            </h1>

            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Our advisory practice serves C-level executives and boards
              navigating complex strategic decisions, organizational
              transformation, and high-stakes opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-elevated)] hover:-translate-y-1"
                tabIndex={0}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: SERVICE_GRADIENTS[index % SERVICE_GRADIENTS.length],
                  }}
                >
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-[var(--surface)]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--background)] border border-[var(--border)] mb-6">
              <span className="text-sm font-medium text-[var(--primary)]">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              How we work
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Every engagement begins with understanding your unique context and
              objectives, then delivering tailored solutions with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Deep dive into your situation, objectives, and constraints.",
              },
              {
                step: "02",
                title: "Analysis",
                description:
                  "Comprehensive assessment leveraging our network and intelligence.",
              },
              {
                step: "03",
                title: "Strategy",
                description:
                  "Develop actionable recommendations tailored to your context.",
              },
              {
                step: "04",
                title: "Execution",
                description:
                  "Support implementation with ongoing guidance and access.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-[var(--border)]" />
                )}

                <div className="text-4xl font-bold gradient-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to discuss your needs?"
        description="Start a confidential conversation about your strategic objectives."
        primaryCta={{ text: "Get Started", href: "/contact" }}
        secondaryCta={{ text: "View Investment", href: "/investment" }}
        variant="gradient"
      />
    </>
  );
}
