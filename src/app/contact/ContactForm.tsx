"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { submitContactForm } from "@/lib/actions/contact";
import { INTEREST_OPTIONS, SITE_CONFIG, LOCATIONS } from "@/lib/constants";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFormSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    const result = await submitContactForm(data);
    if (result.success) {
      setIsSubmitted(true);
      reset();
    } else {
      setSubmitError(result.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full flex justify-center pb-24 lg:pb-32 bg-[var(--background)]">
      <div className="w-full max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Contact
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[var(--foreground)] mb-6">
              Initiate a Conversation
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-12">
              Not every conversation leads to engagement. But every engagement
              starts with the right conversation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-[var(--surface)] text-[var(--accent)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-[var(--foreground)] mb-1">
                    Email
                  </h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                    tabIndex={0}
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="pt-4">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-[var(--surface)] text-[var(--accent)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] mb-1">
                      Locations
                    </h3>
                  </div>
                </div>
                <div className="space-y-6 pl-16">
                  {LOCATIONS.map((location) => (
                    <div key={location.city}>
                      <h4 className="font-medium text-[var(--foreground)] mb-1">
                        {location.city}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {location.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[var(--accent-muted)] flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[var(--accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl text-[var(--foreground)] mb-3">
                    Message Received
                  </h3>
                  <p className="text-[var(--text-secondary)] max-w-md">
                    Thank you for reaching out. Your inquiry will be reviewed
                    with discretion. We will respond if there is alignment.
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8"
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-[var(--surface)] border border-[var(--border)] p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-2">
                  Initiate a Conversation
                </h3>
                <p className="text-sm text-[var(--text-muted)] mb-8">
                  All inquiries are treated with discretion.
                </p>

                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  className="space-y-6"
                >
                  <Input
                    label="Name"
                    placeholder="Your name"
                    {...register("name")}
                    error={errors.name?.message}
                  />

                  <Input
                    label="Organization"
                    placeholder="Organization (optional)"
                    {...register("organization")}
                  />

                  <Input
                    label="Contact Details"
                    type="email"
                    placeholder="your@email.com"
                    {...register("email")}
                    error={errors.email?.message}
                  />

                  <Select
                    label="Area of Interest"
                    options={INTEREST_OPTIONS.map((opt) => ({
                      value: opt.value,
                      label: opt.label,
                    }))}
                    {...register("interest")}
                    error={errors.interest?.message}
                  />

                  <Textarea
                    label="Context / Message"
                    placeholder="Describe the context of your inquiry..."
                    rows={5}
                    {...register("message")}
                    error={errors.message?.message}
                  />

                  {submitError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded text-center">
                      <p className="text-sm text-red-400">{submitError}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full"
                  >
                    Submit Inquiry
                  </Button>

                  <p className="text-xs text-[var(--text-muted)] text-center">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
