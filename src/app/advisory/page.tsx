"use client";

import { useState } from "react";
import Link from "next/link";

type AccordionItemProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const AccordionItem = ({
  icon,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="group flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark overflow-hidden transition-all duration-300">
      <div
        className="flex cursor-pointer items-center justify-between gap-4 p-4 select-none hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
          <p className="text-slate-900 dark:text-gray-200 text-base font-semibold leading-normal">
            {title}
          </p>
        </div>
        <span
          className={`material-symbols-outlined text-slate-500 dark:text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </div>
      {isOpen && (
        <div className="px-4 pb-4 pl-[3.75rem]">
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
            {children}
          </p>
        </div>
      )}
    </div>
  );
};

export default function ConsultingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-md mx-auto shadow-2xl overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative w-full px-4 pt-4 pb-2">
        <div className="relative w-full h-[240px] rounded-xl overflow-hidden shadow-lg group">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/advisory/hero.jpg')" }}
            role="img"
            aria-label="Strategic advisory consulting hero image"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-90" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h1 className="text-white text-3xl font-extrabold leading-tight mb-1">
              HAKA Global Consulting
            </h1>
            <p className="text-gray-300 text-sm font-medium">
              Strategic advisory for people and companies operating where decisions take shape.
            </p>
          </div>
        </div>
      </div>

      {/* Section 1: What We Do (Accordions) */}
      <section className="flex flex-col gap-2 mb-8">
        <div className="px-6 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-gray-200 text-sm font-bold uppercase tracking-widest text-opacity-80">
            What We Do
          </h3>
          <span className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4" />
        </div>
        <div className="flex flex-col px-4 pt-4 gap-3">
          {/* Accordion 1 */}
          <AccordionItem icon="strategy" title="Strategic Advisory & Positioning" defaultOpen>
            We define and refine strategic positioning where relevance, authority and long-term advantage are built — beyond visibility or messaging.
          </AccordionItem>
          {/* Accordion 2 */}
          <AccordionItem
            icon="meeting_room"
            title="C-Level & Executive Advisory"
          >
            Confidential counsel for founders, executives and decision-makers operating under high stakes, public exposure and institutional complexity.
          </AccordionItem>
          {/* Accordion 3 */}
          <AccordionItem
            icon="admin_panel_settings"
            title="Personal & Corporate Affairs"
          >
            Strategic advisory on personal and corporate interests, aligning reputation, relationships and positioning within decision-making environments.
          </AccordionItem>
        </div>
      </section>

      {/* Section 2: How We Work (Timeline) */}
      <section className="flex flex-col mb-10">
        <div className="px-6 pb-4 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-gray-200 text-sm font-bold uppercase tracking-widest text-opacity-80">
            How We Work
          </h3>
          <span className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4" />
        </div>
        <div className="px-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm font-bold z-10 ring-4 ring-background-light dark:ring-background-dark">
                1
              </div>
              <div className="w-0.5 grow bg-gray-200 dark:bg-gray-800 min-h-[40px]" />
            </div>
            <div className="pb-8 pt-1">
              <h4 className="text-slate-900 dark:text-gray-200 text-lg font-bold mb-1">
                We work selectively
              </h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                We operate with discretion. We prioritize judgment over process.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-primary text-primary text-sm font-bold z-10 ring-4 ring-background-light dark:ring-background-dark">
                2
              </div>
              <div className="w-0.5 grow bg-gray-200 dark:bg-gray-800 min-h-[40px]" />
            </div>
            <div className="pb-8 pt-1">
              <h4 className="text-slate-900 dark:text-gray-200 text-lg font-bold mb-1">
                Advisory is not execution support
              </h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                It is strategic clarity under complexity.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-dark border border-gray-600 text-gray-400 text-sm font-bold z-10 ring-4 ring-background-light dark:ring-background-dark">
                3
              </div>
              {/* Last item has no line growing down */}
            </div>
            <div className="pt-1">
              <h4 className="text-slate-900 dark:text-gray-200 text-lg font-bold mb-1">
                Confidential by default
              </h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                We do not seek visibility. We operate where relevance is decided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: When Clients Engage Us (Cards) */}
      <section className="flex flex-col mb-10 bg-slate-100 dark:bg-[#151921] py-8">
        <div className="px-6 pb-6 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-gray-200 text-sm font-bold uppercase tracking-widest text-opacity-80">
            When Clients Engage Us
          </h3>
        </div>
        <div className="px-4 grid grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-3 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
              <span className="material-symbols-outlined">domain</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-gray-200 font-bold text-sm mb-1">
                Visibility matters
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 leading-snug">
                When access and timing are critical.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-3 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-gray-200 font-bold text-sm mb-1">
                Influence needed
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 leading-snug">
                When strategic alignment must be achieved.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-3 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-gray-200 font-bold text-sm mb-1">
                No improvisation
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 leading-snug">
                When decisions cannot be left to chance.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-3 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-gray-200 font-bold text-sm mb-1">
                Context matters
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 leading-snug">
                When context is as important as capital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Relationship Model */}
      <section className="flex flex-col mb-24 px-6">
        <div className="pb-4 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-gray-200 text-sm font-bold uppercase tracking-widest text-opacity-80">
            Relationship Model
          </h3>
          <span className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4" />
        </div>
        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <span className="material-symbols-outlined text-6xl">contract</span>
          </div>
          <h4 className="text-slate-900 dark:text-gray-200 font-bold text-lg mb-2">
            Mandate-based. Bespoke. Confidential.
          </h4>
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Strategic advisory often leads to capital decisions. When appropriate, our work extends into HAKA Global Investment.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                check_circle
              </span>
              <span className="text-slate-700 dark:text-gray-300 text-sm">
                Not every conversation leads to engagement.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                check_circle
              </span>
              <span className="text-slate-700 dark:text-gray-300 text-sm">
                But every engagement starts with the right conversation.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 max-w-md mx-auto z-50">
        <Link
          href="/contact"
          className="w-full h-12 bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all rounded-lg text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
          tabIndex={0}
          aria-label="Schedule Consultation"
        >
          <span>Schedule Consultation</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
