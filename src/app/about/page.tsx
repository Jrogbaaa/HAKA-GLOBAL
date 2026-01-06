import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About HAKA",
  description:
    "HAKA operates where decisions take shape, before they become public or formalized. Anticipation · Affairs · Influence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        subtitle="About HAKA"
        title="Anticipation · Affairs · Influence"
        description="HAKA operates where decisions take shape, before they become public or formalized."
      />

      <AboutContent />

      <CTASection
        subtitle="Start a Conversation"
        title="Discretion starts here."
        description="HAKA engages selectively. If context, timing, and access are critical to your decisions, you may initiate a conversation."
      />
    </>
  );
}
