import Link from "next/link";

interface FloatingCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const FloatingCTA = ({
  href,
  children,
  className = "",
}: FloatingCTAProps) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-4 bg-[var(--background)]/90 backdrop-blur-md border-t border-[var(--border)] z-40 ${className}`}
    >
      <div className="max-w-md mx-auto">
        <Link
          href={href}
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white font-bold py-4 rounded-xl shadow-lg shadow-[var(--primary)]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          tabIndex={0}
        >
          <span>{children}</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
            arrow_forward
          </span>
        </Link>
      </div>
    </div>
  );
};

interface FloatingCTAButtonProps {
  onClick?: () => void;
  type?: "button" | "submit";
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const FloatingCTAButton = ({
  onClick,
  type = "button",
  children,
  disabled = false,
  className = "",
}: FloatingCTAButtonProps) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-4 bg-[var(--background)]/90 backdrop-blur-md border-t border-[var(--border)] z-40 ${className}`}
    >
      <div className="max-w-md mx-auto">
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-[var(--primary)]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
          tabIndex={0}
        >
          <span>{children}</span>
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
