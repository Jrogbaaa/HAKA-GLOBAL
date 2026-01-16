"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/actions/contact";
import { useLocale } from "@/i18n";

type FormData = {
  name: string;
  organization: string;
  contactDetails: string;
  message: string;
};

export const ContactForm = () => {
  const { t } = useLocale();
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
    <form className="flex flex-col gap-1 mt-4" onSubmit={handleSubmit}>
      {/* Name Field */}
      <div className="flex flex-wrap items-end gap-4 px-5 py-2">
        <label className="flex flex-col min-w-40 flex-1 group">
          <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">
            {t("contact.form.name")}
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-gray-800 bg-white dark:bg-surface-dark h-14 placeholder:text-slate-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal text-slate-900 dark:text-white transition-all shadow-sm"
            placeholder={t("contact.form.name.placeholder")}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            tabIndex={0}
            aria-label={t("contact.form.name")}
          />
        </label>
      </div>

      {/* Organization Field */}
      <div className="flex flex-wrap items-end gap-4 px-5 py-2">
        <label className="flex flex-col min-w-40 flex-1 group">
          <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">
            {t("contact.form.organization")}{" "}
            <span className="text-slate-400 dark:text-slate-600 font-normal text-sm ml-1">
              (Optional)
            </span>
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-gray-800 bg-white dark:bg-surface-dark h-14 placeholder:text-slate-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal text-slate-900 dark:text-white transition-all shadow-sm"
            placeholder={t("contact.form.organization.placeholder")}
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            tabIndex={0}
            aria-label={t("contact.form.organization")}
          />
        </label>
      </div>

      {/* Contact Details Field */}
      <div className="flex flex-wrap items-end gap-4 px-5 py-2">
        <label className="flex flex-col min-w-40 flex-1 group">
          <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">
            {t("contact.form.email")}
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-gray-800 bg-white dark:bg-surface-dark h-14 placeholder:text-slate-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal text-slate-900 dark:text-white transition-all shadow-sm"
            placeholder={t("contact.form.email.placeholder")}
            type="text"
            name="contactDetails"
            value={formData.contactDetails}
            onChange={handleChange}
            required
            tabIndex={0}
            aria-label={t("contact.form.email")}
          />
        </label>
      </div>

      {/* Context/Message Field */}
      <div className="flex flex-wrap items-end gap-4 px-5 py-2">
        <label className="flex flex-col min-w-40 flex-1 group">
          <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">
            {t("contact.form.message")}
          </p>
          <textarea
            className="form-textarea flex w-full min-w-0 flex-1 resize-none rounded-lg focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-gray-800 bg-white dark:bg-surface-dark min-h-[140px] placeholder:text-slate-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal text-slate-900 dark:text-white transition-all shadow-sm"
            placeholder={t("contact.form.message.placeholder")}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            tabIndex={0}
            aria-label={t("contact.form.message")}
          />
        </label>
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`mx-5 p-3 rounded-lg border mt-2 ${
            submitStatus.type === "success"
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
              : "border-red-500/30 bg-red-500/10 text-red-400"
          }`}
        >
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="px-5 py-4">
        <button
          className="w-full bg-primary hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base h-14 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
          tabIndex={0}
          aria-label={t("contact.form.submit")}
        >
          {isSubmitting ? "Sending..." : t("contact.form.submit")}
          {!isSubmitting && (
            <span className="material-symbols-outlined text-[20px]">send</span>
          )}
        </button>
      </div>
    </form>
  );
};
