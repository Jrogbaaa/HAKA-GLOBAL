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

  const inputStyles =
    "w-full px-4 py-3 border border-[var(--foreground-muted)] bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-1 focus:ring-[var(--gold)] focus:border-[var(--gold)] transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Form Fields Indicator */}
      <p
        className="text-[var(--foreground-muted)] text-sm"
        style={{ lineHeight: "1.75" }}
      >
        (Form)
      </p>

      {/* Field Labels List */}
      <ul className="space-y-1 mb-6">
        <li className="text-[var(--foreground)] text-sm">• Name</li>
        <li className="text-[var(--foreground)] text-sm">
          • Organization (optional)
        </li>
        <li className="text-[var(--foreground)] text-sm">• Contact details</li>
        <li className="text-[var(--foreground)] text-sm">• Context / Message</li>
      </ul>

      {/* Name */}
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputStyles}
          placeholder="Name *"
          aria-label="Your name"
          tabIndex={0}
        />
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className="sr-only">
          Organization
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className={inputStyles}
          placeholder="Organization (optional)"
          aria-label="Your organization"
          tabIndex={0}
        />
      </div>

      {/* Contact Details */}
      <div>
        <label htmlFor="contactDetails" className="sr-only">
          Contact details
        </label>
        <input
          type="text"
          id="contactDetails"
          name="contactDetails"
          value={formData.contactDetails}
          onChange={handleChange}
          required
          className={inputStyles}
          placeholder="Contact details (email or phone) *"
          aria-label="Your contact details"
          tabIndex={0}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="sr-only">
          Context / Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputStyles} resize-none`}
          placeholder="Context / Message *"
          aria-label="Your message"
          tabIndex={0}
        />
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-4 border ${
            submitStatus.type === "success"
              ? "border-green-500/30 text-green-400"
              : "border-red-500/30 text-red-400"
          }`}
        >
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-5 py-4 border border-[var(--foreground-muted)] bg-transparent text-[var(--foreground)] text-center uppercase tracking-widest text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        tabIndex={0}
        aria-label="Submit inquiry"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
