"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showScrollIndicator?: boolean;
  size?: "full" | "large" | "medium";
  backgroundImage?: string;
}

export const Hero = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  showScrollIndicator = true,
  size = "full",
  backgroundImage,
}: HeroProps) => {
  const heights = {
    full: "min-h-screen",
    large: "min-h-[85vh]",
    medium: "min-h-[60vh]",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      className={`
        relative ${heights[size]} flex items-center justify-center
        overflow-hidden
      `}
    >
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-[var(--background)]/80" />
        </div>
      ) : (
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--surface)] to-[var(--background)]" />
          
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                               linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
          
          {/* Gold Accent Glow */}
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[var(--accent)] opacity-[0.03] blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[var(--accent)] opacity-[0.03] blur-[150px] rounded-full" />
        </div>
      )}

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center"
      >
        {subtitle && (
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-[var(--foreground)] leading-[1.1] tracking-tight"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {primaryCta && (
              <Link href={primaryCta.href} tabIndex={0}>
                <Button variant="primary" size="lg">
                  {primaryCta.label}
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} tabIndex={0}>
                <Button variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      {showScrollIndicator && size === "full" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
};

