"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/actions/contact";

type FormData = {
  name: string;
  email: string;
  interest: string;
  message: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        email: formData.email,
        interest: formData.interest,
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
          email: "",
          interest: "",
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors"
            placeholder="john@company.com"
          />
        </div>
      </div>

      {/* Interest */}
      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-medium text-white mb-2"
        >
          Area of Interest *
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-white focus:outline-none focus:border-[var(--primary)] transition-colors appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            backgroundSize: "1.25rem",
          }}
        >
          <option value="" disabled>
            Select area of interest
          </option>
          <option value="c-level-advisory">C-Level Advisory</option>
          <option value="leadership-development">Leadership Development</option>
          <option value="change-advisory">Change Advisory</option>
          <option value="brand-strategy">Brand Strategy</option>
          <option value="deal-advisory">Deal Advisory</option>
          <option value="non-market-strategy">Non-Market Strategy</option>
          <option value="investment">Investment Opportunities</option>
          <option value="marketplace">Luxury Marketplace</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
          placeholder="Please describe your situation and objectives. What context can you share about your needs?"
        />
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-500/10 border border-green-500/20 text-green-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-xl">
              {submitStatus.type === "success" ? "check_circle" : "error"}
            </span>
            <p className="text-sm">{submitStatus.message}</p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[var(--primary)] text-[var(--background)] font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        tabIndex={0}
      >
        {isSubmitting ? (
          <>
            <span className="w-5 h-5 border-2 border-[var(--background)] border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Submit Inquiry</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </>
        )}
      </button>

      {/* Disclaimer */}
      <p className="text-xs text-[var(--text-muted)] text-center">
        By submitting this form, you agree to our privacy policy. We will never
        share your information with third parties.
      </p>
    </form>
  );
};
