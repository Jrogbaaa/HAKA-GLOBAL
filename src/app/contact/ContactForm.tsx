"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/actions/contact";

type FormData = {
  name: string;
  organization: string;
  contactDetails: string;
  message: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    contactDetails: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await submitContactForm({
        name: formData.name,
        organization: formData.organization,
        contactDetails: formData.contactDetails,
        message: formData.message,
      });

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your inquiry. We will be in touch within 48 hours.",
        });
        setFormData({
          name: "",
          organization: "",
          contactDetails: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      {/* Name */}
      <div className="flex flex-col py-2">
        <label className="flex flex-col gap-2">
          <p className="text-[var(--foreground)] text-sm font-medium">Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] h-12 px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
            placeholder="Your full name"
            aria-label="Your name"
            tabIndex={0}
          />
        </label>
      </div>

      {/* Organization */}
      <div className="flex flex-col py-2">
        <label className="flex flex-col gap-2">
          <p className="text-[var(--foreground)] text-sm font-medium">
            Organization <span className="text-[var(--foreground-muted)] font-normal text-xs">(Optional)</span>
          </p>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] h-12 px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
            placeholder="Company name"
            aria-label="Your organization"
            tabIndex={0}
          />
        </label>
      </div>

      {/* Contact Details */}
      <div className="flex flex-col py-2">
        <label className="flex flex-col gap-2">
          <p className="text-[var(--foreground)] text-sm font-medium">Contact Details</p>
          <input
            type="text"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] h-12 px-4 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 transition-all"
            placeholder="Email or phone number"
            aria-label="Your contact details"
            tabIndex={0}
          />
        </label>
      </div>

      {/* Message */}
      <div className="flex flex-col py-2">
        <label className="flex flex-col gap-2">
          <p className="text-[var(--foreground)] text-sm font-medium">How can we help?</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] min-h-[120px] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 transition-all resize-none"
            placeholder="Tell us about the context of your inquiry..."
            aria-label="Your message"
            tabIndex={0}
          />
        </label>
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-3 rounded-lg border mt-2 ${
            submitStatus.type === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              : "border-red-500/30 bg-red-500/10 text-red-400"
          }`}
        >
          <p className="text-xs">{submitStatus.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-bold text-sm h-12 rounded-lg shadow-lg shadow-[var(--primary)]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          tabIndex={0}
          aria-label="Submit inquiry"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && (
            <span className="material-symbols-outlined text-base">send</span>
          )}
        </button>
      </div>
    </form>
  );
};
