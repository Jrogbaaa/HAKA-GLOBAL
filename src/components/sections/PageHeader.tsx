"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
}

export const PageHeader = ({ subtitle, title, description }: PageHeaderProps) => {
  return (
    <section className="w-full flex justify-center bg-[var(--background)] pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="w-full max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          {subtitle && (
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
              {subtitle}
            </p>
          )}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

