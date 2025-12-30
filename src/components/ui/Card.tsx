"use client";

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
    <div
      className={`
        group relative overflow-hidden rounded-xl
        bg-[var(--surface)] border border-white/10
        transition-all duration-300
        hover:border-[var(--primary)]/50 hover:bg-[var(--border-subtle)]
        ${className}
      `}
    >
      {imageUrl && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg m-2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
          {badge && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium uppercase tracking-wider bg-[var(--primary)] text-[var(--background)] rounded">
              {badge}
            </span>
          )}
        </div>
      )}
      <div className="p-4 px-5">
        <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
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
    <div className="group relative p-8 rounded-xl bg-[var(--surface)] border border-white/10 hover:border-[var(--primary)]/50 hover:bg-[var(--border-subtle)] transition-all duration-300">
      <div className="mb-6 text-[var(--primary)]">{icon}</div>
      <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] leading-relaxed">
        {description}
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl" />
    </div>
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
