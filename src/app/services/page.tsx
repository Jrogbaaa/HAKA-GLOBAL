import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive luxury advisory services: Personal Branding, Global Real Estate, Financial Investment Advisory, and Luxury Marketplace access.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        subtitle="Our Services"
        title="Comprehensive Advisory Excellence"
        description="Tailored solutions for discerning individuals seeking excellence in every aspect of their professional and personal lives."
      />

      <ServiceGrid />

      <CTASection
        title="Discuss Your Needs"
        description="Every client's journey is unique. Schedule a confidential consultation to explore how we can serve your specific objectives."
      />
    </>
  );
}

