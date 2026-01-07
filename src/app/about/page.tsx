import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About HAKA",
  description:
    "HAKA operates where decisions take shape, before they become public. Anticipation · Affairs · Influence.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        subtitle="About HAKA"
        title="Anticipation · Affairs · Influence"
      />

      <AboutContent />
    </>
  );
}
