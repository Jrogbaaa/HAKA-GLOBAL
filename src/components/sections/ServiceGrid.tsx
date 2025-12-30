"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Crown, Building, TrendingUp, Diamond } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  crown: <Crown className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
  "trending-up": <TrendingUp className="w-8 h-8" />,
  diamond: <Diamond className="w-8 h-8" />,
};

export const ServiceGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-[var(--background)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)]">
            Comprehensive Advisory
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-[var(--text-secondary)]">
            Tailored solutions for discerning individuals seeking excellence in
            every aspect of their professional and personal lives.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                href={`/services/${service.id}`}
                className="block group"
                tabIndex={0}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="relative p-8 lg:p-10 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 h-full">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-4 bg-[var(--accent-muted)] text-[var(--accent)] transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--background)]">
                      {iconMap[service.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

