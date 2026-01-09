"use client";

import { useState } from "react";
import Link from "next/link";

type TabId = "overview" | "philosophy" | "areas" | "operate";

export default function InvestmentPage() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1 flex flex-col pb-24">
        {/* Hero Section */}
        <div className="relative w-full px-4 pt-4 pb-2">
          <div className="relative w-full h-[240px] rounded-xl overflow-hidden shadow-lg group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrMh97VMpZ8HS7eXlEokv_IjVKT1ueTmg5fUoTFKpZnbBdxS2EOY6VpH5TQ6403kobE2Zp98DtjW4laXwL8Gkq4jGSxEEFKjsCAB_wVfLbqtbDZQG4If8tYa8qgWDjGvLkL7CfLKGXl9Rc05MQiIHHAbZ_H0XerR5tTl807UAyI6hn_DbhBOD5ztNjjbGJnF6TD9WNk2mcVs4GjgJD6tn2y5w-fGwAUp_xWxWvgh5yf4qBrWOSy7XbhfnHiX3QlCyEvnW2guTvwvo')",
              }}
              role="img"
              aria-label="Abstract view of modern glass skyscrapers looking up towards the sky"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <p className="text-primary font-bold tracking-wider text-xs mb-2 uppercase">
                Global Consulting Firm
              </p>
              <h1 className="text-white text-3xl font-extrabold leading-tight mb-1">
                Global Investment
              </h1>
              <p className="text-gray-300 text-sm font-medium">
                Preserving Wealth across Borders
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Navigation Tabs */}
        <div className="sticky top-[69px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="flex overflow-x-auto no-scrollbar px-4 space-x-6">
            <button
              onClick={() => handleTabClick("overview")}
              className={`whitespace-nowrap py-3 border-b-[3px] text-sm font-bold tracking-wide transition-colors ${
                activeTab === "overview"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              tabIndex={0}
              aria-label="Overview tab"
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick("philosophy")}
              className={`whitespace-nowrap py-3 border-b-[3px] text-sm font-bold tracking-wide transition-colors ${
                activeTab === "philosophy"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              tabIndex={0}
              aria-label="Philosophy tab"
            >
              Philosophy
            </button>
            <button
              onClick={() => handleTabClick("areas")}
              className={`whitespace-nowrap py-3 border-b-[3px] text-sm font-bold tracking-wide transition-colors ${
                activeTab === "areas"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              tabIndex={0}
              aria-label="Areas tab"
            >
              Areas
            </button>
            <button
              onClick={() => handleTabClick("operate")}
              className={`whitespace-nowrap py-3 border-b-[3px] text-sm font-bold tracking-wide transition-colors ${
                activeTab === "operate"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              tabIndex={0}
              aria-label="Operate tab"
            >
              Operate
            </button>
          </div>
        </div>

        {/* Overview Content */}
        <div className="px-6 py-6 scroll-mt-32" id="overview">
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            HAKA is a global consulting and investment firm dedicated to
            sustainable growth. We specialize in identifying unique opportunities
            that preserve wealth while fostering innovation across international
            borders.
          </p>
        </div>

        {/* Separator */}
        <div className="h-2 bg-gray-100 dark:bg-surface-dark w-full" />

        {/* Philosophy Section */}
        <div className="px-6 py-8 scroll-mt-32" id="philosophy">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="text-xl font-bold tracking-tight uppercase">
              Investment Philosophy
            </h2>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-3">
                Prudence. Patience. Precision.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                We believe that true wealth preservation requires a disciplined
                approach to risk management. Our philosophy is rooted in long-term
                value creation rather than short-term speculation.
              </p>
              {/* Abstract Visualization of Portfolio */}
              <div className="flex items-center gap-4">
                <div className="relative size-16 shrink-0">
                  {/* CSS Donut Chart */}
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="text-gray-700"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeWidth="4"
                    />
                    <path
                      className="text-primary"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="70, 100"
                      strokeWidth="4"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-lg">
                      pie_chart
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Strategy
                  </span>
                  <span className="text-sm font-semibold">
                    Diversified Risk Management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-2 bg-gray-100 dark:bg-surface-dark w-full" />

        {/* Areas Section */}
        <div className="px-6 py-8 scroll-mt-32" id="areas">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="text-xl font-bold tracking-tight uppercase">
              Focus Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {/* Card 1: Real Estate */}
            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:border-primary/50 transition-colors">
              <div
                className="h-32 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBrbdFFSXeypJEQSl6Y7gcDF2geATp-szCoib5FQIN3C4axyTd78qXZ_g3_hyC_9p7JGc1xGjQXr0sFo1yU1THWG5Tb88-hkYeh-b6huGqms7AG8LzNy_fIDCHK9_jgU4fKfEh0Chi0B8G2BRuODIAYY83UsCPpspi7V9bBKnaDMVG36Z-fl4GA_2hdpfsq1wD6djDwUDk7lRMBYukQBqFzYwUipL7SNpLDFRjqCiYSrIWg0x0kH1S7_OIGhGpVr-wOhdwdWZVvBE')",
                }}
                role="img"
                aria-label="Modern architectural building facade detail"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-3 left-4 p-2 bg-primary/90 rounded-lg text-white">
                  <span className="material-symbols-outlined text-xl">
                    apartment
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Worldwide Real Estate</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Commercial & Residential acquisitions in high-growth global
                  markets.
                </p>
              </div>
            </div>

            {/* Card 2: Private Equity */}
            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:border-primary/50 transition-colors">
              <div
                className="h-32 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3FUiu6s88gf8pyR5ZR6qtSz4BPMUGkAnl4K7KwRR6NdbHebKf7Zz_kjEjGeSPOLT9kyuI4njrx2tizXFNPIbdi1zoHSYS4AmzEIspjkjc9Bt9IyHlhLoBByaCLgS7Ee5820KLweaJzP74n1q6n3JsY1Q8agjjJIFBhGIF38RJkF0PRJjdSTFwPQwHHt_ZGM0DzIz8J42Z7e9tRbQ4e05NAocb3U9rpVQ-z9isU8M3xRgYySQ4ZKiTawM73IjpfpPAMacYdDDSfkk')",
                }}
                role="img"
                aria-label="Two professionals shaking hands in a meeting room"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-3 left-4 p-2 bg-primary/90 rounded-lg text-white">
                  <span className="material-symbols-outlined text-xl">
                    handshake
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Private & Strategic</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Direct equity investments in scalable technologies and
                  established firms.
                </p>
              </div>
            </div>

            {/* Card 3 & 4 (Grid) */}
            <div className="grid grid-cols-2 gap-4">
              {/* Precious Metals */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-gray-700/50 shadow-sm flex flex-col items-start gap-3">
                <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg">
                  <span className="material-symbols-outlined">
                    monetization_on
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 leading-tight">
                    Precious Metals
                  </h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                    Gold, Silver & Strategic reserves.
                  </p>
                </div>
              </div>
              {/* Luxury Assets */}
              <div className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-gray-700/50 shadow-sm flex flex-col items-start gap-3">
                <div className="p-2 bg-purple-500/20 text-purple-500 rounded-lg">
                  <span className="material-symbols-outlined">diamond</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 leading-tight">
                    Luxury Assets
                  </h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                    Collectibles, Art & rare Vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-2 bg-gray-100 dark:bg-surface-dark w-full" />

        {/* How We Operate Section */}
        <div className="px-6 py-8 scroll-mt-32" id="operate">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="text-xl font-bold tracking-tight uppercase">
              How We Operate
            </h2>
          </div>
          <div className="relative pl-2">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-2 bottom-4 w-[2px] bg-gray-200 dark:bg-gray-800" />
            {/* Step 1 */}
            <div className="relative flex gap-6 mb-8">
              <div className="relative z-10 size-10 rounded-full bg-background-light dark:bg-surface-dark border-2 border-primary flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-primary text-sm">
                  search
                </span>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Discovery
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Understanding your unique financial landscape and objectives.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative flex gap-6 mb-8">
              <div className="relative z-10 size-10 rounded-full bg-background-light dark:bg-surface-dark border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-sm">
                  strategy
                </span>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Strategy
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Crafting a bespoke investment roadmap tailored to your needs.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex gap-6 mb-8">
              <div className="relative z-10 size-10 rounded-full bg-background-light dark:bg-surface-dark border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-sm">
                  rocket_launch
                </span>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Execution
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Deploying capital with precision into selected asset classes.
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative flex gap-6">
              <div className="relative z-10 size-10 rounded-full bg-background-light dark:bg-surface-dark border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-sm">
                  monitoring
                </span>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  Management
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Continuous monitoring and optimization of your portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 z-50">
        <Link
          href="/contact"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all active:scale-[0.98]"
          tabIndex={0}
          aria-label="Request Consultation"
        >
          <span>Request Consultation</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
