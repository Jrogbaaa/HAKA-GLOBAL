import { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Advisory Services",
  description:
    "Strategic advisory for people and companies operating where decisions take shape. We advise at decision level, aligning strategy, reputation, and context.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 22, 17, 0.7) 0%, rgba(24, 22, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnxEkcjhjYkzHjwFSLLW7Q21i9AEgnDVvMNGGUvmQxyqweUJJz93duzjL5OF3GairMOe0uUzrdAriPyzx9k-xRMCxJkSTyid5Ivl7HA3rrZijT20XZTLGyxeSXGfnCW0LdG05csu_3cMbXdaMxwk8LRkVqkv7jsU7XOeS1Mzer6nzdTFCbtdya1N0MYu9Qmx4JyQT6UbnJgm3Sea5Da-shxnvY2uWo6diNoMrNwgvy6CLKBaw3zG0h-AcNX7hGlanLkzLzlcX7Smw")`,
          }}
          role="img"
          aria-label="Abstract dark luxury texture"
        />
        <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
            HAKA Global Consulting
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-black font-serif leading-tight tracking-tight">
            Areas of Advisory
          </h1>
          <h2 className="text-[var(--text-secondary)] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Strategic advisory for people and companies operating where
            decisions take shape. We advise at decision level, aligning
            strategy, reputation, and context.
          </h2>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className={`group relative flex flex-col p-8 lg:p-10 bg-[var(--surface)] border border-white/10 hover:border-[var(--primary)]/50 transition-all duration-300 ${
                  index === SERVICES.length - 1 && SERVICES.length % 3 === 1
                    ? "lg:col-start-2"
                    : ""
                }`}
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
              >
                {/* Number */}
                <span className="font-serif text-5xl font-bold text-[var(--primary)]/20 mb-6">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--primary)]/10 mb-6">
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    {service.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Arrow */}
                <div className="mt-auto pt-4 flex items-center gap-2 text-white/40 group-hover:text-[var(--primary)] transition-colors">
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Learn More
                  </span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
              Engagement Model
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-[var(--background)] border border-white/10">
              <h3 className="font-serif text-xl font-medium text-white mb-4">
                We work selectively
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                We prioritize mandates where our capabilities create meaningful
                advantage for our clients.
              </p>
            </div>

            <div className="p-8 bg-[var(--background)] border border-white/10">
              <h3 className="font-serif text-xl font-medium text-white mb-4">
                We operate with discretion
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Confidential by default. We do not seek visibility. We operate
                where relevance is decided.
              </p>
            </div>

            <div className="p-8 bg-[var(--background)] border border-white/10">
              <h3 className="font-serif text-xl font-medium text-white mb-4">
                We prioritize judgment
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Advisory is not execution support. It is strategic clarity under
                complexity.
              </p>
            </div>
          </div>

          {/* When Clients Engage Us */}
          <div className="p-10 lg:p-12 border border-white/10 bg-[var(--background)]">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-8">
              When Clients Engage Us
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-[var(--primary)]">•</span>
                <p className="text-[var(--text-secondary)]">
                  When visibility, access, and timing matter
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--primary)]">•</span>
                <p className="text-[var(--text-secondary)]">
                  When influence is necessary
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--primary)]">•</span>
                <p className="text-[var(--text-secondary)]">
                  When decisions cannot be improvised
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--primary)]">•</span>
                <p className="text-[var(--text-secondary)]">
                  When context is as important as capital
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationship Model */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-4">
                Relationship Model
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">
                From Advisory to Investment
              </h2>
              <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Our engagements are mandate-based, bespoke, and confidential
                  by default.
                </p>
                <p>
                  Strategic advisory often leads to capital decisions. When
                  appropriate, our work extends into{" "}
                  <span className="text-white">HAKA Global Investment</span>.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 border-l-2 border-[var(--primary)]/30">
                <h3 className="font-serif text-lg font-medium text-white mb-2">
                  Mandate-based
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Clear scope and objectives aligned with client needs.
                </p>
              </div>
              <div className="p-6 border-l-2 border-[var(--primary)]/30">
                <h3 className="font-serif text-lg font-medium text-white mb-2">
                  Bespoke engagements
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Tailored approach for each unique situation.
                </p>
              </div>
              <div className="p-6 border-l-2 border-[var(--primary)]/30">
                <h3 className="font-serif text-lg font-medium text-white mb-2">
                  Confidential by default
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Discretion is fundamental to our operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-6">
            Start a Conversation
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Discretion starts here.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--text-secondary)] leading-relaxed mb-10">
            HAKA engages selectively. If context, timing, and access are
            critical to your decisions, you may initiate a conversation.
          </p>
          <Link href="/contact" tabIndex={0}>
            <button
              className="rounded-lg bg-[var(--primary)] px-10 py-4 font-bold text-[var(--background)] transition-colors hover:bg-white"
              tabIndex={-1}
              aria-label="Initiate a Conversation"
            >
              Initiate a Conversation
            </button>
          </Link>
          <p className="mt-8 text-sm text-[var(--text-muted)] italic">
            Not every conversation leads to engagement. But every engagement
            starts with the right conversation.
          </p>
        </div>
      </section>
    </>
  );
}
