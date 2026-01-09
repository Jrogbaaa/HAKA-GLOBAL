"use client";

import { useState } from "react";

interface AccordionItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem = ({
  icon,
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-all duration-300">
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className="flex cursor-pointer items-center justify-between gap-4 p-4 select-none hover:bg-white/5 transition-colors w-full text-left"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
          <p className="text-[var(--foreground)] text-base font-semibold leading-normal">
            {title}
          </p>
        </div>
        <span
          className={`material-symbols-outlined text-[var(--foreground-muted)] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pl-[3.75rem]">
          <div className="text-[var(--foreground-muted)] text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion = ({ children, className = "" }: AccordionProps) => {
  return <div className={`flex flex-col gap-3 ${className}`}>{children}</div>;
};
