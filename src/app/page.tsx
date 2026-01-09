"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-12 pb-8 px-6">
        {/* Animated Logo Representation */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="relative w-full h-full bg-surface-dark rounded-2xl border border-white/10 flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <span className="material-symbols-outlined text-primary text-5xl">change_history</span>
          </div>
        </div>
        <h1 className="text-4xl font-light italic tracking-tight text-center mb-4 text-slate-900 dark:text-white">
          pre-shift strike.
        </h1>
        <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>
        <p className="text-center text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-xs">
          Bridging the gap between visionary strategy and tangible capital. We empower global enterprises to define the future.
        </p>
      </section>

      {/* Navigation Cards Area */}
      <div className="flex flex-col gap-5 p-5 w-full">
        {/* Consulting Card */}
        <Link
          href="/advisory"
          className="group relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
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
              <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white text-sm">hub</span>
              </div>
              <span className="material-symbols-outlined text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                arrow_forward
              </span>
            </div>
            <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 rounded border border-primary/20 backdrop-blur-sm">
              Strategy &amp; Operations
            </span>
            <h3 className="text-2xl font-bold text-white leading-none">
              HAKA GLOBAL
              <br />
              <span className="text-gray-400 font-light">CONSULTING</span>
            </h3>
          </div>
        </Link>

        {/* Investment Card */}
        <Link
          href="/investment"
          className="group relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1"
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
              <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white text-sm">trending_up</span>
              </div>
              <span className="material-symbols-outlined text-white/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                arrow_forward
              </span>
            </div>
            <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 rounded border border-primary/20 backdrop-blur-sm">
              Venture &amp; Capital
            </span>
            <h3 className="text-2xl font-bold text-white leading-none">
              HAKA GLOBAL
              <br />
              <span className="text-gray-400 font-light">INVESTMENT</span>
            </h3>
          </div>
        </Link>
      </div>

      {/* Newsletter / Bottom CTA */}
      <div className="mt-4 px-6 pt-8 pb-12 bg-white dark:bg-surface-dark rounded-t-3xl border-t border-gray-100 dark:border-white/5">
        <div className="flex flex-col items-start gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Join the shift.</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Get exclusive strategic insights delivered.
            </p>
          </div>
          <form
            className="w-full flex flex-col gap-3 mt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">mail</span>
              </div>
              <input
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-lg text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="email@address.com"
                required
                type="email"
              />
            </div>
            <button
              className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(23,84,207,0.39)]"
              type="submit"
            >
              Subscribe
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </form>
        </div>

        {/* Minimal Footer */}
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="https://linkedin.com/company/hakaglobal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors"
              href="https://twitter.com/hakaglobal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} HAKA Global. All rights reserved.
          </p>
        </div>

        {/* Safe area spacer for iOS home indicator */}
        <div className="h-6 w-full"></div>
      </div>
    </div>
  );
}
