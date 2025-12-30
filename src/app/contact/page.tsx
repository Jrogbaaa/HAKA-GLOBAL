import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Haka Global for a confidential consultation. Private access to luxury advisory services.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        subtitle="Private Access"
        title="Connect With Us"
        description="Begin a confidential conversation with our advisory team."
        size="large"
        showScrollIndicator={false}
      />

      <ContactForm />
    </>
  );
}

