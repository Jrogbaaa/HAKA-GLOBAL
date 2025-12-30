import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Haka Global for a confidential consultation. Private access to luxury advisory services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Private Access"
        title="Connect With Us"
        description="Begin a confidential conversation with our advisory team."
      />

      <ContactForm />
    </>
  );
}

