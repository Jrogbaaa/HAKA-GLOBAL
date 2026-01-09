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
          <p className="text-slate-900 dark:text-white text-base font-semibold leading-normal">
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
      <section className="relative p-6 pt-8 pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-primary via-background-dark to-background-dark pointer-events-none" />
        {/* Decorative circle glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Advisory Services
          </span>
          <h1 className="text-slate-900 dark:text-white text-4xl font-bold leading-[1.1] mb-4 tracking-tight">
            Global Consulting
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
            Navigating complexity with precision. We provide expert guidance for
            your most critical decisions.
          </p>
        </div>
      </section>

      {/* Section 1: What We Do (Accordions) */}
      <section className="flex flex-col gap-2 mb-8">
        <div className="px-6 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest text-opacity-80">
            What We Do
          </h3>
          <span className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4" />
        </div>
        <div className="flex flex-col px-4 pt-4 gap-3">
          {/* Accordion 1 */}
          <AccordionItem icon="strategy" title="Strategic Advisory" defaultOpen>
            Comprehensive market entry analysis, growth strategy formulation,
            and competitive landscape mapping to ensure sustainable long-term
            success in volatile markets.
          </AccordionItem>
          {/* Accordion 2 */}
          <AccordionItem
            icon="meeting_room"
            title="C-Level & Executive Advisory"
          >
            Confidential sounding board services for senior leadership, focusing
            on high-stakes decision support, succession planning, and
            organizational transformation.
          </AccordionItem>
          {/* Accordion 3 */}
          <AccordionItem
            icon="admin_panel_settings"
            title="Personal & Corporate Affairs"
          >
            Discreet management of reputational risks, crisis communication
            strategies, and complex stakeholder negotiations for individuals and
            entities.
          </AccordionItem>
        </div>
      </section>

      {/* Section 2: How We Work (Timeline) */}
      <section className="flex flex-col mb-10">
        <div className="px-6 pb-4 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest text-opacity-80">
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
              <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-1">
                Assessment
              </h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                We begin with a deep dive into the current state of affairs,
                identifying hidden risks and opportunities.
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
              <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-1">
                Strategy Formulation
              </h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                Developing tailored, actionable roadmaps that align with your
                core business objectives.
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
              <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-1">
                Execution & Oversight
              </h4>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                Accompanying the implementation phase to ensure precision and
                adaptability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: When Clients Engage Us (Cards) */}
      <section className="flex flex-col mb-10 bg-slate-100 dark:bg-[#151921] py-8">
        <div className="px-6 pb-6 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest text-opacity-80">
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
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">
                M&A Activity
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 leading-snug">
                During mergers, acquisitions, or divestitures.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-3 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">
                Crisis Mgmt
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 leading-snug">
                Unexpected high-impact events needing rapid response.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-3 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">
                Global Expansion
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 leading-snug">
                Entering new geopolitical territories.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-3 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">
                Restructuring
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-500 leading-snug">
                Significant organizational pivots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Relationship Model */}
      <section className="flex flex-col mb-24 px-6">
        <div className="pb-4 flex items-center justify-between">
          <h3 className="text-slate-900 dark:text-white text-sm font-bold uppercase tracking-widest text-opacity-80">
            Relationship Model
          </h3>
          <span className="h-px bg-gray-200 dark:bg-gray-800 flex-1 ml-4" />
        </div>
        <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <span className="material-symbols-outlined text-6xl">contract</span>
          </div>
          <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">
            Tailored Engagement
          </h4>
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Our engagement models are designed for flexibility. We offer:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                check_circle
              </span>
              <span className="text-slate-700 dark:text-gray-300 text-sm">
                <strong>Retainer Based:</strong> Ongoing advisory for continuous
                support.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                check_circle
              </span>
              <span className="text-slate-700 dark:text-gray-300 text-sm">
                <strong>Project Based:</strong> Define scope for specific
                deliverables.
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
