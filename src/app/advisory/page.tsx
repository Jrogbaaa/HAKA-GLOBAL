"use client";

import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Timeline, TimelineStep } from "@/components/ui/Timeline";

export default function ConsultingPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[var(--background)] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative p-5 pt-6 pb-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-br from-[var(--primary)] via-[var(--background)] to-[var(--background)] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-[var(--primary)]/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-[10px] font-bold uppercase tracking-wider mb-3">
            Advisory Services
          </span>
          <h1 className="text-[var(--foreground)] text-3xl font-bold leading-tight mb-3 tracking-tight">
            HAKA GLOBAL CONSULTING
          </h1>
          <p className="text-[var(--foreground-muted)] text-base font-normal leading-relaxed">
            Strategic advisory for people and companies operating where decisions take shape.
          </p>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="w-full px-4">
        <div className="relative w-full h-[160px] overflow-hidden rounded-xl">
          <Image
            src="/images/advisory/hero.jpg"
            alt="HAKA Global Consulting"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/30" />
        </div>
      </section>

      {/* What We Do */}
      <section className="flex flex-col gap-2 mt-6">
        <div className="px-5 flex items-center justify-between">
          <h3 className="text-[var(--foreground)] text-xs font-bold uppercase tracking-widest opacity-80">What We Do</h3>
          <span className="h-px bg-[var(--border)] flex-1 ml-4" />
        </div>
        <div className="px-5 pt-3">
          <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
            We advise at decision level, aligning strategy, reputation and context. Our work sits across personal and corporate affairs.
          </p>
        </div>
      </section>

      {/* Areas of Advisory */}
      <section className="flex flex-col mt-6">
        <div className="px-5 flex items-center justify-between mb-3">
          <h3 className="text-[var(--foreground)] text-xs font-bold uppercase tracking-widest opacity-80">Areas of Advisory</h3>
          <span className="h-px bg-[var(--border)] flex-1 ml-4" />
        </div>
        <div className="px-4">
          <Accordion>
            <AccordionItem icon="strategy" title="Strategic Advisory & Positioning" defaultOpen>
              Strategic positioning where relevance and authority are built.
            </AccordionItem>
            <AccordionItem icon="meeting_room" title="C-Level & Executive Advisory">
              Confidential counsel for executives and decision-makers.
            </AccordionItem>
            <AccordionItem icon="admin_panel_settings" title="Personal & Corporate Affairs">
              Advisory on personal and corporate interests.
            </AccordionItem>
            <AccordionItem icon="public" title="Non-Market Strategy">
              Strategy beyond markets and traditional frameworks.
            </AccordionItem>
            <AccordionItem icon="verified" title="Public Reputation, Trust & Consensus">
              Building and protecting reputational capital.
            </AccordionItem>
            <AccordionItem icon="psychology" title="AI-Driven Strategic Intelligence">
              Advanced intelligence for decision support.
            </AccordionItem>
            <AccordionItem icon="account_balance" title="Financial Advisory">
              Strategic financial counsel and capital decisions.
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* How We Work */}
      <section className="flex flex-col mt-8">
        <div className="px-5 pb-3 flex items-center justify-between">
          <h3 className="text-[var(--foreground)] text-xs font-bold uppercase tracking-widest opacity-80">How We Work</h3>
          <span className="h-px bg-[var(--border)] flex-1 ml-4" />
        </div>
        <div className="px-5">
          <Timeline>
            <TimelineStep
              step={1}
              title="Assessment"
              description="Deep dive into current state of affairs."
              isActive
            />
            <TimelineStep
              step={2}
              title="Strategy Formulation"
              description="Developing tailored, actionable roadmaps."
            />
            <TimelineStep
              step={3}
              title="Execution & Oversight"
              description="Ensuring precision and adaptability."
              isLast
            />
          </Timeline>
        </div>
      </section>

      {/* When Clients Engage Us */}
      <section className="flex flex-col mt-8 bg-[var(--surface)]/50 py-6">
        <div className="px-5 pb-4 flex items-center justify-between">
          <h3 className="text-[var(--foreground)] text-xs font-bold uppercase tracking-widest opacity-80">When Clients Engage Us</h3>
        </div>
        <div className="px-4 grid grid-cols-2 gap-3">
          <div className="bg-[var(--surface)] p-3 rounded-xl border border-[var(--border)] flex flex-col gap-2">
            <div className="size-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
              <span className="material-symbols-outlined text-lg">domain</span>
            </div>
            <h4 className="text-[var(--foreground)] font-bold text-xs">M&A Activity</h4>
            <p className="text-[10px] text-[var(--foreground-muted)] leading-tight">Mergers and acquisitions.</p>
          </div>
          <div className="bg-[var(--surface)] p-3 rounded-xl border border-[var(--border)] flex flex-col gap-2">
            <div className="size-9 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
              <span className="material-symbols-outlined text-lg">warning</span>
            </div>
            <h4 className="text-[var(--foreground)] font-bold text-xs">Crisis Mgmt</h4>
            <p className="text-[10px] text-[var(--foreground-muted)] leading-tight">Rapid response events.</p>
          </div>
          <div className="bg-[var(--surface)] p-3 rounded-xl border border-[var(--border)] flex flex-col gap-2">
            <div className="size-9 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <span className="material-symbols-outlined text-lg">public</span>
            </div>
            <h4 className="text-[var(--foreground)] font-bold text-xs">Global Expansion</h4>
            <p className="text-[10px] text-[var(--foreground-muted)] leading-tight">New territories.</p>
          </div>
          <div className="bg-[var(--surface)] p-3 rounded-xl border border-[var(--border)] flex flex-col gap-2">
            <div className="size-9 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
              <span className="material-symbols-outlined text-lg">handshake</span>
            </div>
            <h4 className="text-[var(--foreground)] font-bold text-xs">Restructuring</h4>
            <p className="text-[10px] text-[var(--foreground-muted)] leading-tight">Organizational pivots.</p>
          </div>
        </div>
      </section>

      {/* Relationship Model */}
      <section className="flex flex-col mt-6 px-5 pb-28">
        <div className="pb-3 flex items-center justify-between">
          <h3 className="text-[var(--foreground)] text-xs font-bold uppercase tracking-widest opacity-80">Relationship Model</h3>
          <span className="h-px bg-[var(--border)] flex-1 ml-4" />
        </div>
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 opacity-5">
            <span className="material-symbols-outlined text-5xl">contract</span>
          </div>
          <h4 className="text-[var(--foreground)] font-bold text-base mb-2">Tailored Engagement</h4>
          <p className="text-[var(--foreground-muted)] text-xs leading-relaxed mb-3">
            Flexible engagement models designed for your needs.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--primary)] text-base">check_circle</span>
              <span className="text-[var(--foreground-muted)] text-xs">Mandate Based</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--primary)] text-base">check_circle</span>
              <span className="text-[var(--foreground-muted)] text-xs">Confidential by Default</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[var(--foreground-muted)] text-xs mb-2">
            Strategic advisory often leads to capital decisions.
          </p>
          <Link
            href="/investment"
            className="text-[var(--primary)] text-sm font-semibold hover:underline"
            tabIndex={0}
          >
            Explore HAKA Global Investment →
          </Link>
        </div>
      </section>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--background)]/90 backdrop-blur-md border-t border-[var(--border)] z-40">
        <Link
          href="/contact"
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[var(--primary)]/20 transition-all flex items-center justify-center gap-2"
          tabIndex={0}
        >
          Schedule Consultation
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
