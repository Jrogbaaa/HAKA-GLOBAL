"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/i18n";

type TabId = "overview" | "philosophy" | "areas" | "operate";

export default function InvestmentPage() {
  const { t } = useLocale();
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
                backgroundImage: "url('/images/investment/hero.jpg')",
              }}
              role="img"
              aria-label="Abstract view of modern glass skyscrapers looking up towards the sky"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h1 className="text-white text-3xl font-extrabold leading-tight mb-1">
                {t("investment.hero.title")}
              </h1>
              <p className="text-gray-300 text-sm font-medium">
                {t("investment.hero.subtitle")}
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
              aria-label={t("investment.tab.overview")}
            >
              {t("investment.tab.overview")}
            </button>
            <button
              onClick={() => handleTabClick("philosophy")}
              className={`whitespace-nowrap py-3 border-b-[3px] text-sm font-bold tracking-wide transition-colors ${
                activeTab === "philosophy"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              tabIndex={0}
              aria-label={t("investment.tab.philosophy")}
            >
              {t("investment.tab.philosophy")}
            </button>
            <button
              onClick={() => handleTabClick("areas")}
              className={`whitespace-nowrap py-3 border-b-[3px] text-sm font-bold tracking-wide transition-colors ${
                activeTab === "areas"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              tabIndex={0}
              aria-label={t("investment.tab.areas")}
            >
              {t("investment.tab.areas")}
            </button>
            <button
              onClick={() => handleTabClick("operate")}
              className={`whitespace-nowrap py-3 border-b-[3px] text-sm font-bold tracking-wide transition-colors ${
                activeTab === "operate"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              tabIndex={0}
              aria-label={t("investment.tab.operate")}
            >
              {t("investment.tab.operate")}
            </button>
          </div>
        </div>

        {/* Overview Content */}
        <div className="px-6 py-6 scroll-mt-32" id="overview">
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
            {t("investment.overview.p1")}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
            {t("investment.overview.p2")}
          </p>
        </div>

        {/* Separator */}
        <div className="h-2 bg-gray-100 dark:bg-surface-dark w-full" />

        {/* Philosophy Section */}
        <div className="px-6 py-8 scroll-mt-32" id="philosophy">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="text-xl font-bold tracking-tight uppercase">
              {t("investment.philosophy.title")}
            </h2>
          </div>
          <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/50 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-primary mb-3">
                {t("investment.philosophy.headline")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {t("investment.philosophy.desc")}
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
                    {t("investment.philosophy.strategy")}
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
              {t("investment.areas.title")}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {/* Card 1: Real Estate */}
            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:border-primary/50 transition-colors">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-xl">apartment</span>
                  </div>
                  <h3 className="font-bold text-lg">{t("investment.area1.title")}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("investment.area1.desc")}
                </p>
              </div>
            </div>

            {/* Card 2: Private & Strategic */}
            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:border-primary/50 transition-colors">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-xl">handshake</span>
                  </div>
                  <h3 className="font-bold text-lg">{t("investment.area2.title")}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("investment.area2.desc")}
                </p>
              </div>
            </div>

            {/* Card 3: Precious Metals */}
            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:border-primary/50 transition-colors">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-xl">monetization_on</span>
                  </div>
                  <h3 className="font-bold text-lg">{t("investment.area3.title")}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("investment.area3.desc")}
                </p>
              </div>
            </div>

            {/* Card 4: Luxury Assets */}
            <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:border-primary/50 transition-colors">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <span className="material-symbols-outlined text-xl">diamond</span>
                  </div>
                  <h3 className="font-bold text-lg">{t("investment.area4.title")}</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("investment.area4.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Intelligence & Timing Section */}
        <div className="px-6 py-6 bg-slate-100 dark:bg-[#151921]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="text-lg font-bold tracking-tight uppercase">
              {t("investment.intelligence.title")}
            </h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("investment.intelligence.desc")}
          </p>
        </div>

        {/* Separator */}
        <div className="h-2 bg-gray-100 dark:bg-surface-dark w-full" />

        {/* How We Operate Section */}
        <div className="px-6 py-8 scroll-mt-32" id="operate">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-6 bg-primary rounded-full" />
            <h2 className="text-xl font-bold tracking-tight uppercase">
              {t("investment.operate.title")}
            </h2>
          </div>
          <div className="relative pl-2">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-2 bottom-4 w-[2px] bg-gray-200 dark:bg-gray-800" />
            {/* Step 1 */}
            <div className="relative flex gap-6 mb-8">
              <div className="relative z-10 size-10 rounded-full bg-background-light dark:bg-surface-dark border-2 border-primary flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-primary text-sm">
                  account_balance_wallet
                </span>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                  {t("investment.operate.step1.title")}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t("investment.operate.step1.desc")}
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative flex gap-6 mb-8">
              <div className="relative z-10 size-10 rounded-full bg-background-light dark:bg-surface-dark border-2 border-primary flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-primary text-sm">
                  visibility_off
                </span>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                  {t("investment.operate.step2.title")}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t("investment.operate.step2.desc")}
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative flex gap-6 mb-8">
              <div className="relative z-10 size-10 rounded-full bg-background-light dark:bg-surface-dark border-2 border-primary flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-primary text-sm">
                  smart_toy
                </span>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                  {t("investment.operate.step3.title")}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t("investment.operate.step3.desc")}
                </p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative flex gap-6">
              <div className="relative z-10 size-10 rounded-full bg-background-light dark:bg-surface-dark border-2 border-primary flex items-center justify-center shrink-0 shadow-lg">
                <span className="material-symbols-outlined text-primary text-sm">
                  bolt
                </span>
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                  {t("investment.operate.step4.title")}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {t("investment.operate.step4.desc")}
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
          aria-label={t("investment.cta")}
        >
          <span>{t("investment.cta")}</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
