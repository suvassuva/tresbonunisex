"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-3.5 text-xs font-semibold tracking-[0.25em] uppercase",
            isDark ? "text-[#B59A72]" : "text-[#B59A72]"
          )}
        >
          <span className="w-6 h-[1px] bg-[#B59A72]" />
          <span>{badge}</span>
          <span className="w-6 h-[1px] bg-[#B59A72]" />
        </div>
      )}
      <h2
        className={cn(
          "font-editorial text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-[#111111]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg font-light leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            isDark ? "text-stone-300" : "text-[#777777]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
