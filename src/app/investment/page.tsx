"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Timeline, TimelineStep } from "@/components/ui/Timeline";

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
    <div className="flex flex-col min-h-screen bg-[var(--background)] overflow-x-hidden">
      {/* Main Content */}
      <main className="flex-1 flex flex-col pb-24">
        {/* Hero Section */}
        <div className="relative w-full px-4 pt-4 pb-2">
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/investment/hero.jpg"
              alt="Modern glass skyscrapers"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-[var(--background)]/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <p className="text-[var(--primary)] font-bold tracking-wider text-[10px] mb-1 uppercase">
                Global Investment Firm
              </p>
              <h1 className="text-[var(--foreground)] text-2xl font-extrabold leading-tight mb-0.5">
                HAKA GLOBAL INVESTMENT
              </h1>
              <p className="text-[var(--foreground-muted)] text-xs font-medium">
                Strategic investments shaped by access, timing and conviction.
              </p>
            </div>
          </div>
        </div>

        {/* Sticky Navigation Tabs */}
        <div className="sticky top-[69px] z-40 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
          <div className="flex overflow-x-auto no-scrollbar px-4 space-x-5">
            {[
              { id: "overview" as TabId, label: "Overview" },
              { id: "philosophy" as TabId, label: "Philosophy" },
              { id: "areas" as TabId, label: "Areas" },
              { id: "operate" as TabId, label: "Operate" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`whitespace-nowrap py-3 border-b-2 text-xs font-bold tracking-wide transition-colors ${
                  activeTab === tab.id
                    ? "border-[var(--primary)] text-[var(--primary)]"
                    : "border-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                }`}
                tabIndex={0}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Content */}
        <div className="px-5 py-5 scroll-mt-28" id="overview">
          <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
            HAKA Global Investment operates where information asymmetry, scarcity and strategic access generate long-term value.
          </p>
        </div>

        {/* Separator */}
        <div className="h-2 bg-[var(--surface)] w-full" />

        {/* Philosophy Section */}
        <div className="px-5 py-6 scroll-mt-28" id="philosophy">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 bg-[var(--primary)] rounded-full" />
            <h2 className="text-lg font-bold tracking-tight uppercase text-[var(--foreground)]">Investment Philosophy</h2>
          </div>
          <div className="bg-[var(--surface)] rounded-xl p-5 shadow-sm border border-[var(--border)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary)]/5 rounded-full blur-3xl -mr-8 -mt-8" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-2">Prudence. Patience. Precision.</h3>
              <p className="text-[var(--foreground-muted)] text-xs leading-relaxed mb-3">
                We position capital before trends form. Contextual intelligence and disciplined risk assessment.
              </p>
              <p className="text-[var(--foreground)] text-xs font-medium mb-4">
                Conviction matters more than volume.
              </p>
              {/* Strategy Indicator */}
              <div className="flex items-center gap-3">
                <div className="relative size-12 shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-[var(--border)]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeOpacity="0.3"
                      strokeWidth="4"
                    />
                    <path
                      className="text-[var(--primary)]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="70, 100"
                      strokeWidth="4"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[var(--primary)] text-sm">pie_chart</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[var(--foreground-muted)] uppercase tracking-wider">Strategy</span>
                  <span className="text-xs font-semibold text-[var(--foreground)]">Diversified Risk Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-2 bg-[var(--surface)] w-full" />

        {/* Areas Section */}
        <div className="px-5 py-6 scroll-mt-28" id="areas">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 bg-[var(--primary)] rounded-full" />
            <h2 className="text-lg font-bold tracking-tight uppercase text-[var(--foreground)]">Investment Areas</h2>
          </div>
          <div className="flex flex-col gap-3">
            {/* Real Estate */}
            <div className="group flex flex-col bg-[var(--surface)] rounded-xl overflow-hidden border border-[var(--border)] shadow-sm">
              <div className="h-28 bg-cover bg-center relative overflow-hidden">
                <Image
                  src="/images/investment/hero.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-2 left-3 p-1.5 bg-[var(--primary)]/90 rounded-lg text-white">
                  <span className="material-symbols-outlined text-lg">apartment</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-base mb-1 text-[var(--foreground)]">Worldwide Real Estate</h3>
                <p className="text-[10px] text-[var(--foreground-muted)] leading-relaxed">
                  Strategic investments across key global locations.
                </p>
              </div>
            </div>

            {/* Private & Strategic */}
            <div className="group flex flex-col bg-[var(--surface)] rounded-xl overflow-hidden border border-[var(--border)] shadow-sm">
              <div className="h-28 bg-cover bg-center relative overflow-hidden">
                <Image
                  src="/images/advisory/hero.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-2 left-3 p-1.5 bg-[var(--primary)]/90 rounded-lg text-white">
                  <span className="material-symbols-outlined text-lg">handshake</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-base mb-1 text-[var(--foreground)]">Private &amp; Strategic</h3>
                <p className="text-[10px] text-[var(--foreground-muted)] leading-relaxed">
                  Direct investments with aligned vision. Access to startups and early-stage opportunities.
                </p>
              </div>
            </div>

            {/* Small Cards Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[var(--surface)] rounded-xl p-3 border border-[var(--border)] shadow-sm flex flex-col gap-2">
                <div className="p-1.5 bg-yellow-500/20 text-yellow-500 rounded-lg w-fit">
                  <span className="material-symbols-outlined text-lg">monetization_on</span>
                </div>
                <h3 className="font-bold text-xs leading-tight text-[var(--foreground)]">Precious Metals</h3>
                <p className="text-[9px] text-[var(--foreground-muted)] leading-tight">
                  Capital preservation and portfolio balance.
                </p>
              </div>
              <div className="bg-[var(--surface)] rounded-xl p-3 border border-[var(--border)] shadow-sm flex flex-col gap-2">
                <div className="p-1.5 bg-purple-500/20 text-purple-500 rounded-lg w-fit">
                  <span className="material-symbols-outlined text-lg">diamond</span>
                </div>
                <h3 className="font-bold text-xs leading-tight text-[var(--foreground)]">Luxury Assets</h3>
                <p className="text-[9px] text-[var(--foreground-muted)] leading-tight">
                  Watches, handbags, fine jewelry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-2 bg-[var(--surface)] w-full" />

        {/* How We Operate */}
        <div className="px-5 py-6 scroll-mt-28" id="operate">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 bg-[var(--primary)] rounded-full" />
            <h2 className="text-lg font-bold tracking-tight uppercase text-[var(--foreground)]">How We Operate</h2>
          </div>
          <div className="relative pl-2">
            <Timeline>
              <TimelineStep
                step={1}
                icon="search"
                title="Discovery"
                description="Understanding your financial landscape."
                isActive
              />
              <TimelineStep
                step={2}
                icon="strategy"
                title="Strategy"
                description="Bespoke investment roadmap."
              />
              <TimelineStep
                step={3}
                icon="rocket_launch"
                title="Execution"
                description="Deploying capital with precision."
              />
              <TimelineStep
                step={4}
                icon="monitoring"
                title="Management"
                description="Continuous portfolio optimization."
                isLast
              />
            </Timeline>
          </div>
        </div>
      </main>

      {/* Floating Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--background)]/90 backdrop-blur-md border-t border-[var(--border)] z-40">
        <Link
          href="/contact"
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[var(--primary)]/20 transition-all flex items-center justify-center gap-2"
          tabIndex={0}
        >
          Request Consultation
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
