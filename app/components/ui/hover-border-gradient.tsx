"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Component = "div",
  gradientClassName,
}: {
  children?: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: any;
  gradientClassName?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn("relative rounded-lg p-[1px] group/border", containerClassName)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 group-hover/border:opacity-100 transition duration-500",
          gradientClassName || "bg-gradient-to-r from-purple-500 to-blue-500"
        )}
      />
      <Component
        className={cn(
          "relative rounded-lg",
          className
        )}
      >
        {children}
      </Component>
    </div>
  );
};