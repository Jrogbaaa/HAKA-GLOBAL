import { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discretion starts here. HAKA engages selectively. If context, timing, and access are critical to your decisions, you may initiate a conversation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Start a Conversation"
        title="Discretion starts here."
        description="HAKA engages selectively. If context, timing, and access are critical to your decisions, you may initiate a conversation. All inquiries are treated with discretion."
      />

      <ContactForm />
    </>
  );
}
