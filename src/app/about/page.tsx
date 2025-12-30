import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Haka Global - a distinguished advisory firm serving high-net-worth individuals and global professionals with personalized luxury services.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        subtitle="About Us"
        title="Excellence Without Compromise"
        description="A distinguished advisory firm serving those who demand the extraordinary in every facet of their lives."
      />

      <AboutContent />

      <CTASection
        title="Partner With Us"
        description="Join a select clientele who trust Haka Global to navigate the complexities of wealth, influence, and opportunity."
      />
    </>
  );
}

