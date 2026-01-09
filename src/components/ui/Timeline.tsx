interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  isActive?: boolean;
  isLast?: boolean;
  icon?: string;
}

export const TimelineStep = ({
  step,
  title,
  description,
  isActive = false,
  isLast = false,
  icon,
}: TimelineStepProps) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div
          className={`flex size-8 md:size-10 shrink-0 items-center justify-center rounded-full z-10 ring-4 ring-[var(--background)] ${
            isActive
              ? "bg-[var(--primary)] text-white"
              : "bg-[var(--surface)] border-2 border-[var(--border)] text-[var(--foreground-muted)]"
          }`}
        >
          {icon ? (
            <span className="material-symbols-outlined text-sm">{icon}</span>
          ) : (
            <span className="text-sm font-bold">{step}</span>
          )}
        </div>
        {!isLast && (
          <div className="w-0.5 grow bg-[var(--border)] min-h-[40px]" />
        )}
      </div>
      <div className={`${isLast ? "pt-1" : "pb-8 pt-1"}`}>
        <h4 className="text-[var(--foreground)] text-lg font-bold mb-1">
          {title}
        </h4>
        <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export const Timeline = ({ children, className = "" }: TimelineProps) => {
  return <div className={`relative ${className}`}>{children}</div>;
};
