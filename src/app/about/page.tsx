"use client";

import Image from "next/image";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] overflow-x-hidden">
      {/* Hero Image */}
      <div className="p-4 pb-2">
        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/about/hero.jpg"
            alt="Modern skyscrapers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 via-[var(--background)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <div className="w-10 h-1 bg-[var(--primary)] mb-3 rounded-full" />
            <h1 className="text-3xl font-extrabold text-[var(--foreground)] leading-tight">
              Global Vision,
            </h1>
            <h2 className="text-3xl font-extrabold text-[var(--foreground)]/70 leading-tight">
              Local Impact.
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 pt-4 pb-24">
        {/* Intro */}
        <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-6">
          HAKA is a premier global consulting and investment firm dedicated to bridging the gap between ambitious vision and tangible reality.
        </p>

        {/* Tagline */}
        <p className="text-[var(--primary)] font-semibold text-sm mb-6">
          Anticipation · Affairs · Influence
        </p>

        {/* Philosophy Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[var(--primary)]">psychology</span>
            <h3 className="text-lg font-bold text-[var(--foreground)]">Our Philosophy</h3>
          </div>
          <div className="flex flex-col gap-3">
            {/* Long-term Value Card */}
            <div className="relative overflow-hidden rounded-xl bg-[var(--surface)] shadow-sm border border-[var(--border)]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary)]/10 rounded-bl-full -mr-6 -mt-6" />
              <div className="p-4 relative z-10">
                <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-3 text-[var(--primary)]">
                  <span className="material-symbols-outlined text-xl">trending_up</span>
                </div>
                <h4 className="text-lg font-bold mb-1 text-[var(--foreground)]">Long-term Value</h4>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  We focus on sustainable growth strategies that yield lasting results, prioritizing stability over short-term gains.
                </p>
              </div>
            </div>

            {/* Transparency Card */}
            <div className="relative overflow-hidden rounded-xl bg-[var(--surface)] shadow-sm border border-[var(--border)]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full -mr-6 -mt-6" />
              <div className="p-4 relative z-10">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 text-emerald-500">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </div>
                <h4 className="text-lg font-bold mb-1 text-[var(--foreground)]">Transparency</h4>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  Open communication and clear reporting are the pillars of our client relationships. We believe in total clarity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Approach */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[var(--primary)]">strategy</span>
            <h3 className="text-lg font-bold text-[var(--foreground)]">Strategic Approach</h3>
          </div>
          <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] overflow-hidden">
            {/* Data-Driven */}
            <div className="flex gap-3 p-4 border-b border-[var(--border)]/50">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-blue-400 text-lg">analytics</span>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-0.5 text-[var(--foreground)]">Data-Driven Decisions</h4>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  Utilizing advanced analytics to inform every strategic move.
                </p>
              </div>
            </div>
            {/* Agile */}
            <div className="flex gap-3 p-4 border-b border-[var(--border)]/50">
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-purple-400 text-lg">rocket_launch</span>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-0.5 text-[var(--foreground)]">Agile Methodology</h4>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  Adapting quickly to market changes with flexible processes.
                </p>
              </div>
            </div>
            {/* Holistic */}
            <div className="flex gap-3 p-4">
              <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-orange-400 text-lg">hub</span>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-0.5 text-[var(--foreground)]">Holistic Integration</h4>
                <p className="text-xs text-[var(--foreground-muted)] leading-relaxed">
                  Connecting all aspects of your business operations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[var(--primary)]">psychology_alt</span>
            <h3 className="text-lg font-bold text-[var(--foreground)]">AI as Strategic Leverage</h3>
          </div>
          <div className="flex gap-4">
            <p className="flex-1 text-xs text-[var(--foreground-muted)] leading-relaxed">
              At HAKA, artificial intelligence is a strategic leverage layer embedded into our judgment and advisory processes.
            </p>
            <div className="relative w-24 h-20 shrink-0 overflow-hidden rounded-lg">
              <Image
                src="/images/about/ai-section.jpg"
                alt="AI"
                fill
                className="object-cover opacity-60"
              />
            </div>
          </div>
        </div>

        {/* Client Engagement */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[var(--primary)]">handshake</span>
            <h3 className="text-lg font-bold text-[var(--foreground)]">Client Engagement</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--background)] rounded-xl p-3 border border-[var(--border)] flex flex-col min-h-[110px]">
              <span className="material-symbols-outlined text-2xl text-[var(--primary)] mb-2">diversity_3</span>
              <h4 className="font-bold text-xs mb-0.5 text-[var(--foreground)]">Partnership</h4>
              <p className="text-[10px] text-[var(--foreground-muted)] leading-tight">Extensions of your team.</p>
            </div>
            <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--background)] rounded-xl p-3 border border-[var(--border)] flex flex-col min-h-[110px]">
              <span className="material-symbols-outlined text-2xl text-[var(--primary)] mb-2">forum</span>
              <h4 className="font-bold text-xs mb-0.5 text-[var(--foreground)]">Feedback Loops</h4>
              <p className="text-[10px] text-[var(--foreground-muted)] leading-tight">Continuous dialogue.</p>
            </div>
            <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--background)] rounded-xl p-3 border border-[var(--border)] flex flex-col min-h-[110px]">
              <span className="material-symbols-outlined text-2xl text-[var(--primary)] mb-2">security</span>
              <h4 className="font-bold text-xs mb-0.5 text-[var(--foreground)]">Discretion</h4>
              <p className="text-[10px] text-[var(--foreground-muted)] leading-tight">Confidentiality is fundamental.</p>
            </div>
            <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--background)] rounded-xl p-3 border border-[var(--border)] flex flex-col min-h-[110px]">
              <span className="material-symbols-outlined text-2xl text-[var(--primary)] mb-2">timeline</span>
              <h4 className="font-bold text-xs mb-0.5 text-[var(--foreground)]">Long-term</h4>
              <p className="text-[10px] text-[var(--foreground-muted)] leading-tight">Beyond transactions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <FloatingCTA href="/contact">Get in Touch</FloatingCTA>
    </div>
  );
}
