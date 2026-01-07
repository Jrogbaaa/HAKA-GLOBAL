"use client";

import Link from "next/link";

type HeroProps = {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showDashboard?: boolean;
};

export const Hero = ({
  badge,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  showDashboard = true,
}: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[var(--background)]">
        {/* Primary gradient orb - purple/blue */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
            transform: "translate(20%, -30%)",
          }}
        />
        {/* Secondary gradient orb - gold */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(238, 189, 43, 0.4) 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />
        {/* Cyan accent */}
        <div
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.5) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl fade-in-up">
            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
              {titleHighlight && (
                <>
                  <br />
                  <span className="gradient-text">{titleHighlight}</span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/20 hover:-translate-y-0.5"
                  tabIndex={0}
                >
                  {primaryCta.text}
                  <svg
                    className="w-5 h-5"
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
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-[var(--border)] hover:bg-[var(--surface)] hover:border-[var(--border-hover)] transition-all"
                  tabIndex={0}
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          {showDashboard && (
            <div className="relative fade-in-up delay-200">
              <div className="relative">
                {/* Glow effect behind dashboard */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 via-purple-500/10 to-blue-500/10 blur-3xl scale-110" />

                {/* Dashboard Card */}
                <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl animate-float">
                  {/* Dashboard Header */}
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--border)]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-xs text-[var(--text-muted)] font-mono">
                      dashboard.hakaglobal.com
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-6">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[var(--surface-elevated)] rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">
                          $2.4B
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">
                          Assets Advised
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-green-400 text-xs">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                          <span>+18%</span>
                        </div>
                      </div>
                      <div className="bg-[var(--surface-elevated)] rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">147</div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">
                          Active Clients
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-green-400 text-xs">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                          <span>+24</span>
                        </div>
                      </div>
                      <div className="bg-[var(--surface-elevated)] rounded-xl p-4">
                        <div className="text-2xl font-bold gradient-text">
                          98%
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-1">
                          Success Rate
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-[var(--primary)] text-xs">
                          <span>Verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Chart Placeholder */}
                    <div className="bg-[var(--surface-elevated)] rounded-xl p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-white">
                          Portfolio Performance
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                          Last 12 months
                        </div>
                      </div>
                      <div className="h-32 flex items-end gap-2">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map(
                          (height, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t-sm transition-all duration-300 hover:opacity-80"
                              style={{
                                height: `${height}%`,
                                background:
                                  i === 11
                                    ? "var(--primary)"
                                    : "linear-gradient(to top, rgba(139, 92, 246, 0.3), rgba(139, 92, 246, 0.6))",
                              }}
                            />
                          )
                        )}
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-white">
                        Recent Activity
                      </div>
                      {[
                        {
                          icon: "trending_up",
                          title: "Deal Advisory completed",
                          time: "2h ago",
                        },
                        {
                          icon: "handshake",
                          title: "New client onboarded",
                          time: "5h ago",
                        },
                        {
                          icon: "home_work",
                          title: "Real estate closing",
                          time: "1d ago",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-[var(--surface-elevated)] rounded-lg"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[var(--primary-muted)] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[var(--primary)] text-sm">
                              {item.icon}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-white">
                              {item.title}
                            </div>
                          </div>
                          <div className="text-xs text-[var(--text-muted)]">
                            {item.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
