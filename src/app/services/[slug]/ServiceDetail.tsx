"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/constants";

interface ServiceDetailProps {
  service: (typeof SERVICES)[number];
}

export const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <section className="w-full flex justify-center bg-[var(--background)] py-12 lg:py-16">
      <div className="w-full max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
              Overview
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--foreground)] mb-4">
              What We Offer
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
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
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
              Key Capabilities
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--foreground)] mb-4">
              Our Approach
            </h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-1 p-1 bg-[var(--accent-muted)] text-[var(--accent)]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* How We Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 lg:mt-16 pt-12 lg:pt-16 border-t border-[var(--border)]"
        >
          <div className="text-center mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-3">
              Engagement Model
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[var(--foreground)]">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Selective",
                description: "Engagements where capabilities align.",
              },
              {
                step: "02",
                title: "Strategic",
                description: "Clarity under complexity.",
              },
              {
                step: "03",
                title: "Confidential",
                description: "Discretion is fundamental.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative p-6 bg-[var(--surface)] border border-[var(--border)]"
              >
                <span className="font-serif text-4xl font-medium text-[var(--accent)] opacity-20">
                  {item.step}
                </span>
                <h3 className="mt-2 font-serif text-lg font-medium text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
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
