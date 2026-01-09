"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col mx-auto w-full max-w-md bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      {/* Hero Section */}
      <div className="p-4 pb-2">
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden shadow-lg group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRlMK2j9nqa28zcnqgWRlRUCDM8HhGO6NfAScCEQqX7IgrbV6w6tpRpN6yZQGmjyp30L329ksZkwZNwOLublV1LCCK7TC_i9CsKPpmxrm15xRBSK0ti9J0UqftBiz_9yGY1JFhV0UB9EnOCtHROCYJgwdJYh3p9tfDqZO2J062QLH1DwE_cHY5u0shPl0D9YggHa6eZeVWrPafOv-3TZokHNd7duHOxt43KqAvHVYL3yceohcIyzd1vNGbVQqvlLvRJFTxsYEvWqc')",
            }}
            role="img"
            aria-label="Modern skyscrapers looking up towards a blue sky"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="w-12 h-1 bg-primary mb-3 rounded-full" />
            <h2 className="text-3xl font-extrabold text-white leading-tight mb-1">
              Global Vision,
            </h2>
            <h2 className="text-3xl font-extrabold text-white/80 leading-tight">
              Local Impact.
            </h2>
          </div>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm px-1">
          HAKA is a premier global consulting and investment firm dedicated to
          bridging the gap between ambitious vision and tangible reality.
        </p>
      </div>

      {/* Section: Philosophy */}
      <section className="mt-6">
        <div className="flex items-center px-4 mb-3">
          <span className="material-symbols-outlined text-primary mr-2 text-xl">
            psychology
          </span>
          <h3 className="text-lg font-bold">Our Philosophy</h3>
        </div>
        <div className="px-4 space-y-4">
          {/* Card 1: Long-term Value */}
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-200 dark:border-gray-800 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/20" />
            <div className="p-5 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Long-term Value</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                We focus on sustainable growth strategies that yield lasting
                results, prioritizing stability over short-term gains.
              </p>
            </div>
          </div>
          {/* Card 2: Transparency */}
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-200 dark:border-gray-800 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-emerald-500/20" />
            <div className="p-5 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-500">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Transparency</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Open communication and clear reporting are the pillars of our
                client relationships. We believe in total clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Strategic Approach */}
      <section className="mt-8">
        <div className="flex items-center px-4 mb-4">
          <span className="material-symbols-outlined text-primary mr-2 text-xl">
            strategy
          </span>
          <h3 className="text-lg font-bold">Strategic Approach</h3>
        </div>
        <div className="px-4">
          <div className="bg-white dark:bg-surface-dark rounded-xl p-1 border border-gray-200 dark:border-gray-800 shadow-sm">
            {/* Item 1 */}
            <div className="flex gap-4 p-4 border-b border-gray-100 dark:border-gray-700/50">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-400/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg">
                    analytics
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">
                  Data-Driven Decisions
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Utilizing advanced analytics to inform every strategic move,
                  minimizing risk and maximizing opportunity.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-4 p-4 border-b border-gray-100 dark:border-gray-700/50">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 dark:bg-purple-400/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-600 dark:text-purple-400 text-lg">
                    rocket_launch
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Agile Methodology</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Adapting quickly to market changes with flexible, iterative
                  processes that keep you ahead of the curve.
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex gap-4 p-4">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 dark:bg-orange-400/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-400 text-lg">
                    hub
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Holistic Integration</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Connecting all aspects of your business operations to ensure
                  seamless execution of strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Client Engagement */}
      <section className="mt-8 mb-24">
        <div className="flex items-center px-4 mb-4">
          <span className="material-symbols-outlined text-primary mr-2 text-xl">
            handshake
          </span>
          <h3 className="text-lg font-bold">Client Engagement</h3>
        </div>
        <div className="px-4 grid grid-cols-2 gap-3">
          {/* Engagement Card 1 */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-surface-dark dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex flex-col justify-between min-h-[140px]">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">
              diversity_3
            </span>
            <div>
              <h4 className="font-bold text-sm mb-1">Partnership</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                More than a vendor; we are extensions of your team.
              </p>
            </div>
          </div>
          {/* Engagement Card 2 */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-surface-dark dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex flex-col justify-between min-h-[140px]">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">
              forum
            </span>
            <div>
              <h4 className="font-bold text-sm mb-1">Feedback Loops</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                Continuous dialogue ensures we stay aligned with goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark dark:to-transparent z-40 max-w-md mx-auto">
        <Link
          href="/contact"
          className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          tabIndex={0}
          aria-label="Get in Touch"
        >
          <span>Get in Touch</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
