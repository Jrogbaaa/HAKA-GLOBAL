"use client";

import Link from "next/link";
import { useLocale } from "@/i18n";

export default function AboutPage() {
  const { t } = useLocale();

  return (
    <div className="relative min-h-screen flex flex-col mx-auto w-full max-w-md bg-background-light dark:bg-background-dark overflow-x-hidden shadow-2xl">
      {/* Hero Section */}
      <div className="p-4 pb-2">
        <div className="relative w-full h-[240px] rounded-2xl overflow-hidden shadow-lg group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: "url('/images/about/hero.jpg')",
            }}
            role="img"
            aria-label="Modern skyscrapers looking up towards a blue sky"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="w-12 h-1 bg-primary mb-3 rounded-full" />
            <h1 className="text-3xl font-extrabold text-white leading-tight">
              {t("about.hero.title")}
            </h1>
          </div>
        </div>
      </div>

      {/* Section Heading */}
      <div className="px-4 pt-6 pb-2">
        <h2 className="text-2xl font-bold text-primary leading-tight">
          {t("about.hero.line1")}
        </h2>
        <h2 className="text-2xl font-bold text-primary/80 leading-tight">
          {t("about.hero.line2")}
        </h2>
      </div>

      {/* About HAKA Section */}
      <section className="px-4 py-4">
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {t("about.section1.p1")}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {t("about.section1.p2")}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {t("about.section1.p3")}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {t("about.section1.p4")}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {t("about.section1.p5")}
          </p>
        </div>
      </section>

      {/* Section: Anticipation */}
      <section className="mt-2">
        <div className="flex items-center px-4 mb-4">
          <span className="material-symbols-outlined text-primary mr-2 text-xl">
            strategy
          </span>
          <h3 className="text-lg font-bold">{t("about.anticipation.title")}</h3>
        </div>
        <div className="px-4">
          <div className="bg-white dark:bg-surface-dark rounded-xl p-1 border border-gray-200 dark:border-gray-800 shadow-sm">
            {/* Item 1 */}
            <div className="flex gap-4 p-4 border-b border-gray-100 dark:border-gray-700/50">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">
                    analytics
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">
                  {t("about.anticipation.item1.title")}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("about.anticipation.item1.desc")}
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-4 p-4 border-b border-gray-100 dark:border-gray-700/50">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">
                    groups
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">{t("about.anticipation.item2.title")}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("about.anticipation.item2.desc")}
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex gap-4 p-4">
              <div className="shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-lg">
                    bolt
                  </span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">{t("about.anticipation.item3.title")}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t("about.anticipation.item3.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pre-Shift Strike Statement */}
        <div className="px-4 mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
            {t("about.preshift")}
          </p>
        </div>
      </section>

      {/* Section: How We Operate */}
      <section className="mt-8">
        <div className="flex items-center px-4 mb-3">
          <span className="material-symbols-outlined text-primary mr-2 text-xl">
            psychology
          </span>
          <h3 className="text-lg font-bold">{t("about.operate.title")}</h3>
        </div>
        <div className="px-4 space-y-4">
          {/* Card 1: Selectivity */}
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-200 dark:border-gray-800 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/20" />
            <div className="p-5 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h4 className="text-xl font-bold mb-2">{t("about.operate.selectivity.title")}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("about.operate.selectivity.desc")}
              </p>
            </div>
          </div>
          {/* Card 2: Discretion */}
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-gray-200 dark:border-gray-800 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/20" />
            <div className="p-5 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined">visibility_off</span>
              </div>
              <h4 className="text-xl font-bold mb-2">{t("about.operate.discretion.title")}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("about.operate.discretion.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: AI as Strategic Leverage */}
      <section className="mt-8 mb-24">
        <div className="flex items-center px-4 mb-4">
          <span className="material-symbols-outlined text-primary mr-2 text-xl">
            smart_toy
          </span>
          <h3 className="text-lg font-bold">{t("about.ai.title")}</h3>
        </div>
        
        {/* AI Description */}
        <div className="px-4 mb-4 space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.ai.p1")}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.ai.p2")}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {t("about.ai.p3")}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
            {t("about.ai.p4")}
          </p>
        </div>
        
        {/* AI Feature Cards */}
        <div className="px-4 grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-surface-dark dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex flex-col justify-between min-h-[140px]">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">
              hub
            </span>
            <div>
              <h4 className="font-bold text-sm mb-1">{t("about.ai.card1.title")}</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                {t("about.ai.card1.desc")}
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-surface-dark dark:to-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 flex flex-col justify-between min-h-[140px]">
            <span className="material-symbols-outlined text-3xl text-primary mb-2">
              psychology
            </span>
            <div>
              <h4 className="font-bold text-sm mb-1">{t("about.ai.card2.title")}</h4>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">
                {t("about.ai.card2.desc")}
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
          aria-label={t("about.cta")}
        >
          <span>{t("about.cta")}</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
}
