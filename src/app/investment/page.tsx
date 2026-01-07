import { Metadata } from "next";
import { INVESTMENT_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Investment",
  description: "Strategic investments shaped by access, timing, and conviction.",
};

export default function InvestmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgbpv6xb2b1bI8hRrdOmjsd35EJzCL-KiI2_h09cMl8D_Dx89YrpCvQPeRFzwMCZSjMfllLSBH9cU3j5uGCmC_OYFGRIVkiGN342AQMj95YotHloh7ZIdK9PtdaVD-EXvmkhzTRQ6HLsQa9beMXY5-fbBQVpeMdtsmkRoyEfH3XLkSUGradjbB9Zzp-p9GUWommuqMP5qlhhxHDMr03nvOoDXuCD9EDjWNVBuTIk1PvUcuhmYl7pZyna27G6WHtTs3Itv6XBBCw")`,
          }}
          role="img"
          aria-label="Golden topographic map symbolizing wealth growth"
        />
        <div className="relative z-10 flex flex-col gap-4 text-center max-w-4xl mx-auto fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
            HAKA Global Investment
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-black font-serif leading-tight tracking-tight">
            Strategic Investments
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-6">
              Overview
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">
              Capital Follows Insight
            </h2>
          </div>
        </div>
      </section>

      {/* Investment Areas */}
      <section className="w-full flex justify-center py-24 md:py-32 bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 md:px-10">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--primary)] mb-6">
              Investment Areas
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">
              Where We Deploy Capital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {INVESTMENT_AREAS.map((area, index) => (
              <div
                key={area.id}
                className="group p-10 lg:p-12 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-300"
              >
                {/* Number */}
                <span className="font-serif text-5xl font-bold text-[var(--primary)]/20 mb-6 block">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--primary)]/10 mb-6">
                  <span className="material-symbols-outlined text-[var(--primary)] text-2xl">
                    {area.icon}
                  </span>
                </div>

                {/* Title Only */}
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                  {area.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
