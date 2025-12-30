"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const CTASection = ({
  title = "Begin Your Journey",
  description = "Connect with our team for a confidential consultation and discover how we can elevate your position in the global marketplace.",
  ctaLabel = "Request Private Access",
  ctaHref = "/contact",
}: CTASectionProps) => {
  return (
    <section className="py-24 lg:py-32 bg-[var(--surface)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[var(--accent)] opacity-[0.02] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[var(--accent)] opacity-[0.02] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
            Private Access
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)] leading-tight">
            {title}
          </h2>
          <p className="mt-6 text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-10">
            <Link href={ctaHref} tabIndex={0}>
              <Button variant="outline" size="lg">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Lines */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-12 h-[1px] bg-[var(--border)]" />
          <div className="w-2 h-2 rotate-45 border border-[var(--accent)]" />
          <div className="w-12 h-[1px] bg-[var(--border)]" />
        </div>
      </div>
    </section>
  );
};

