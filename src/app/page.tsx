import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Pre Shift Strike."
        description="Exclusive access to elite real estate, financial advisory, and personal branding strategies for the modern visionary."
        primaryCta={{
          label: "Request Access",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Explore Services",
          href: "/services",
        }}
        badgeText="Global Membership Open"
      />

      <StatsSection />

      <ServiceGrid />

      <CTASection />
    </>
  );
}
