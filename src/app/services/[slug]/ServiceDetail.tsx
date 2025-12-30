"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";

interface ServiceDetailProps {
  service: (typeof SERVICES)[number];
}

export const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <section className="py-24 lg:py-32 bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Overview
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[var(--foreground)] mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Key Features
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[var(--foreground)] mb-6">
              Our Approach
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1 p-1 bg-[var(--accent-muted)] text-[var(--accent)]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-[var(--text-secondary)]">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-24 border-t border-[var(--border)]"
        >
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
              Our Process
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[var(--foreground)]">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We begin with a confidential consultation to understand your unique position, goals, and vision.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Our team develops a tailored approach, leveraging our global network and expertise.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We implement with precision, providing ongoing support and adapting as your needs evolve.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative p-8 bg-[var(--surface)] border border-[var(--border)]"
              >
                <span className="font-serif text-5xl font-medium text-[var(--accent)] opacity-20">
                  {item.step}
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

