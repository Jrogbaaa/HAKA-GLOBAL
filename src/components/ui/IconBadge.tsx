interface IconBadgeProps {
  icon: string;
  color?: "primary" | "blue" | "green" | "red" | "purple" | "orange" | "yellow";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colorMap = {
  primary: "bg-[var(--primary)]/10 text-[var(--primary)]",
  blue: "bg-blue-500/10 text-blue-500",
  green: "bg-emerald-500/10 text-emerald-500",
  red: "bg-red-500/10 text-red-500",
  purple: "bg-purple-500/10 text-purple-500",
  orange: "bg-orange-500/10 text-orange-500",
  yellow: "bg-yellow-500/10 text-yellow-500",
};

const sizeMap = {
  sm: "size-8 text-lg",
  md: "size-10 text-xl",
  lg: "size-12 text-2xl",
};

export const IconBadge = ({
  icon,
  color = "primary",
  size = "md",
  className = "",
}: IconBadgeProps) => {
  return (
    <div
      className={`rounded-lg flex items-center justify-center ${colorMap[color]} ${sizeMap[size]} ${className}`}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </div>
  );
};
