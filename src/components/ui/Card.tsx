"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  href?: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({
  title,
  description,
  imageUrl,
  href,
  badge,
  children,
  className = "",
}: CardProps) => {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        group relative overflow-hidden
        bg-[var(--surface)] border border-[var(--border)]
        transition-all duration-300
        hover:border-[var(--accent)]
        ${className}
      `}
    >
      {imageUrl && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
          {badge && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium uppercase tracking-wider bg-[var(--accent)] text-[var(--background)]">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
      {href && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block" tabIndex={0} aria-label={`View ${title}`}>
        {content}
      </Link>
    );
  }

  return content;
};

// Feature Card variant for services
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  href,
}: FeatureCardProps) => {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative p-8 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-300"
    >
      <div className="mb-6 text-[var(--accent)]">{icon}</div>
      <h3 className="font-serif text-2xl font-medium text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        {description}
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block" tabIndex={0} aria-label={`Learn more about ${title}`}>
        {content}
      </Link>
    );
  }

  return content;
};

