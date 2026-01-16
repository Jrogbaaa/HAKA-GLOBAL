"use client";

import { ContactForm } from "./ContactForm";
import { useLocale } from "@/i18n";

export default function ContactPage() {
  const { t } = useLocale();

  const OFFICES = [
    {
      city: t("contact.office.madrid"),
      address: t("contact.office.madrid.address"),
    },
    {
      city: t("contact.office.barcelona"),
      address: t("contact.office.barcelona.address"),
    },
    {
      city: t("contact.office.roma"),
      address: t("contact.office.roma.address"),
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Main Content */}
      <main className="flex-1 w-full max-w-lg mx-auto pb-12">
        {/* Intro Header */}
        <div className="px-5 pt-6 pb-2">
          <h1 className="text-slate-900 dark:text-gray-200 tracking-tight text-[32px] font-bold leading-tight mb-2">
            {t("contact.title")}
          </h1>
          <p className="text-primary text-lg font-semibold mb-3">
            {t("contact.subtitle")}
          </p>
          <p className="text-slate-500 dark:text-gray-400 text-base font-medium mb-2">
            {t("contact.intro")}
          </p>
          <p className="text-slate-400 dark:text-gray-500 text-sm italic">
            {t("contact.disclaimer")}
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        <div className="h-px bg-slate-200 dark:bg-gray-800 mx-5 my-6" />

        {/* Locations Section */}
        <div className="px-5">
          <h3 className="text-slate-900 dark:text-gray-200 text-lg font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              public
            </span>
            {t("contact.offices.title")}
          </h3>
          <div className="grid gap-4">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-gray-800 shadow-sm hover:border-primary/50 transition-colors"
              >
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-slate-900 dark:text-gray-200 font-bold text-base">
                    {office.city}
                  </h4>
                  <p className="text-slate-500 dark:text-gray-400 text-sm mt-1 leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="px-5 py-6">
          <p className="text-slate-600 dark:text-gray-400 text-sm italic text-center leading-relaxed">
            {t("contact.closing")}
          </p>
        </div>

        {/* Direct Email */}
        <div className="px-5 py-4 text-center">
          <a
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
            href={`mailto:${t("contact.email")}`}
            tabIndex={0}
            aria-label={`Send email to ${t("contact.email")}`}
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            {t("contact.email")}
          </a>
          <p className="text-slate-400 dark:text-slate-600 text-xs mt-2">
            © {new Date().getFullYear()} HAKA Global. {t("footer.rights")}
          </p>
        </div>
      </main>
    </div>
  );
}
