import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

export default function HomePage() {
  return (
    <>
      <Hero
        subtitle="HAKA Global"
        title="Pre-Shift Strike."
        description="Strategic advisory and investment where decisions take shape — before they become public."
        primaryCta={{
          label: "Start a Conversation",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Our Advisory",
          href: "/services",
        }}
      />

      <ServiceGrid />
    </>
  );
}
