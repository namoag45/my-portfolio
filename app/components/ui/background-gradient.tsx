"use client";
import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BackgroundGradientProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  return (
    <div
      className={cn(
        "relative p-[0.12rem] group overflow-hidden",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] z-[1]",
          animate && "group-hover:opacity-100 opacity-0 transition-opacity duration-500"
        )}
        style={{
          background: `
            radial-gradient(
              300px circle at var(--x, 100px) var(--y, 100px),
              rgba(120, 85, 255, 0.15),
              transparent 40%
            )
          `,
        }}
      />
      <div
        className={cn(
          "absolute z-[2] inset-0 backdrop-blur-md rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 z-[1] rounded-[inherit]",
          animate && "animate-border-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        )}
        style={{
          background: `
            linear-gradient(
              to bottom right,
              rgba(120, 119, 198, 0.3),
              rgba(255, 122, 245, 0.3),
              rgba(116, 192, 252, 0.3)
            )
          `,
        }}
      />
      <div className={cn("relative z-[3]", className)}>
        {children}
      </div>
    </div>
  );
};