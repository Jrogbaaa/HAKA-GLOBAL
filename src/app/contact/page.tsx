import { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description: "Discretion starts here. HAKA engages selectively.",
};

const OFFICES = [
  {
    city: "Madrid",
    address: "Calle de Velázquez 34\n28001 Madrid, Spain",
  },
  {
    city: "Barcelona",
    address: "Passeig de Gràcia 56\n08007 Barcelona, Spain",
  },
  {
    city: "Roma",
    address: "Via Veneto 112\n00187 Roma, Italy",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Main Content */}
      <main className="flex-1 w-full max-w-lg mx-auto pb-12">
        {/* Intro Header */}
        <div className="px-5 pt-6 pb-2">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight mb-2">
            Let&apos;s discuss how we can help your business grow.
          </h1>
          <p className="text-slate-500 dark:text-gray-400 text-base font-medium">
            Get in touch with our global team.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        <div className="h-px bg-slate-200 dark:bg-gray-800 mx-5 my-6" />

        {/* Locations Section */}
        <div className="px-5">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              public
            </span>
            Our Offices
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
                  <h4 className="text-slate-900 dark:text-white font-bold text-base">
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

        {/* Direct Email */}
        <div className="px-5 py-8 text-center">
          <a
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
            href="mailto:contact@haka.com"
            tabIndex={0}
            aria-label="Send email to contact@haka.com"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            contact@haka.com
          </a>
          <p className="text-slate-400 dark:text-slate-600 text-xs mt-2">
            © 2024 HAKA Consulting. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
