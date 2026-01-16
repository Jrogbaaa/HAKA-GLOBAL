"use client";

import Link from "next/link";
import { useLocale } from "@/i18n";

export default function HomePage() {
  const { t } = useLocale();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
      {/* Navigation Cards Area - NOW AT TOP */}
      <div className="flex flex-col gap-5 p-5 pt-6 w-full">
        {/* Consulting Card */}
        <Link
          href="/advisory"
          className="group relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
          tabIndex={0}
          aria-label={`${t("landing.card.advisory.title")} ${t("landing.card.advisory.subtitle")}`}
        >
          {/* Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/advisory/hero.jpg')" }}
          ></div>
          {/* Custom Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
            <div className="mb-auto w-full flex justify-between items-start">
              <div className="h-8 w-8 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-primary text-sm">hub</span>
              </div>
              <span className="material-symbols-outlined text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                arrow_forward
              </span>
            </div>
            <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 rounded border border-primary/20 backdrop-blur-sm">
              {t("landing.card.advisory.label")}
            </span>
            <h3 className="text-2xl font-bold text-white leading-none">
              {t("landing.card.advisory.title")}
              <br />
              <span className="text-gray-400 font-light">{t("landing.card.advisory.subtitle")}</span>
            </h3>
          </div>
        </Link>

        {/* Investment Card */}
        <Link
          href="/investment"
          className="group relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
          tabIndex={0}
          aria-label={`${t("landing.card.investment.title")} ${t("landing.card.investment.subtitle")}`}
        >
          {/* Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/investment/hero.jpg')" }}
          ></div>
          {/* Custom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
            <div className="mb-auto w-full flex justify-between items-start">
              <div className="h-8 w-8 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
              </div>
              <span className="material-symbols-outlined text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                arrow_forward
              </span>
            </div>
            <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 rounded border border-primary/20 backdrop-blur-sm">
              {t("landing.card.investment.label")}
            </span>
            <h3 className="text-2xl font-bold text-white leading-none">
              {t("landing.card.investment.title")}
              <br />
              <span className="text-gray-400 font-light">{t("landing.card.investment.subtitle")}</span>
            </h3>
          </div>
        </Link>
      </div>

      {/* Intro Text Section - NOW BELOW CARDS */}
      <section className="flex flex-col items-center justify-center py-8 px-6">
        <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>
        
        {/* Intro Text */}
        <p className="text-center text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-xs mb-4">
          {t("landing.intro")}
        </p>
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 font-normal leading-relaxed max-w-xs mb-4">
          {t("landing.intro2")}
        </p>
        <p className="text-center text-sm text-gray-500 dark:text-gray-500 font-medium leading-relaxed max-w-xs mb-4">
          {t("landing.intro3")}
        </p>
        
        {/* Motto */}
        <p className="text-center text-sm text-primary font-semibold leading-relaxed max-w-xs">
          {t("landing.motto")}
        </p>
      </section>

      {/* Pre-Shift Strike Explanation */}
      <section className="px-6 pb-6">
        <div className="bg-white dark:bg-surface-dark rounded-xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-gray-200">{t("landing.preshift.title")}</span>{" "}
            {t("landing.preshift.desc")}
          </p>
        </div>
      </section>

      {/* Newsletter / Bottom CTA */}
      <div className="mt-4 px-6 pt-8 pb-12 bg-white dark:bg-surface-dark rounded-t-3xl border-t border-gray-100 dark:border-white/5">
        <div className="flex flex-col items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-gray-200">{t("landing.newsletter.title")}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {t("landing.newsletter.subtitle")}
            </p>
          </div>
          <form
            className="w-full flex flex-col gap-3 mt-2"
            onSubmit={handleSubmit}
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <input
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-lg text-slate-900 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t("landing.newsletter.placeholder")}
                required
                type="email"
                aria-label="Email address"
              />
            </div>
            <button
              className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(23,84,207,0.39)]"
              type="submit"
            >
              {t("landing.newsletter.button")}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>
        </div>

        {/* Minimal Footer - Removed social icons */}
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} HAKA Global. {t("footer.rights")}
          </p>
        </div>

        {/* Safe area spacer for iOS home indicator */}
        <div className="h-6 w-full"></div>
      </div>
    </div>
  );
}
