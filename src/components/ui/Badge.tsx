"use client";

type BadgeVariant = "default" | "gold" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default:
    "bg-[var(--surface-elevated)] text-[var(--text-secondary)] border-[var(--border)]",
  gold: "bg-[var(--accent-muted)] text-[var(--accent)] border-[var(--accent)]",
  outline:
    "bg-transparent text-[var(--text-secondary)] border-[var(--border)]",
};

export const Badge = ({
  children,
  variant = "default",
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`
        inline-flex items-center px-3.5 py-1.5
        text-xs font-medium uppercase tracking-wider
        border whitespace-nowrap
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

