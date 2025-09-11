"use client";
import { cn } from "@/utils/cn";
// import { motion } from "framer-motion";
import React, { useState, useEffect, useRef, ElementType, ComponentPropsWithoutRef } from "react";

interface HoverBorderGradientProps<T extends ElementType = "button"> {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: T;
  duration?: number;
  [key: string]: any;
}

export const HoverBorderGradient = <T extends ElementType = "button">({
  children,
  containerClassName,
  className,
  as,
  duration = 400,
  ...props
}: HoverBorderGradientProps<T>) => {
  const [isHovered, setIsHovered] = useState(false);
  const gradientBorderRef = useRef<HTMLElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const Component = as || "button";

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gradientBorderRef.current) return;
    const div = gradientBorderRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    setOpacity(isHovered ? 1 : 0);
  }, [isHovered]);

  return (
    <Component
      ref={gradientBorderRef as any}
      className={cn(
        "group relative rounded-full p-px font-medium transition-all duration-500 hover:shadow-[0_0_2rem_-0.5rem_#8A2BE2] bg-black",
        !isHovered && "hover:border-slate-500/30",
        containerClassName
      )}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <div className="absolute -inset-px rounded-full z-0">
        <div
          className="absolute inset-px rounded-full opacity-0 group-hover:opacity-100 duration-500"
          style={{
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(120, 85, 255, 0.2), transparent 40%)`,
            transition: `opacity ${duration}ms ease-in-out`,
            opacity,
          }}
        />
      </div>
      <div
        className={cn(
          "relative rounded-full border border-slate-800/80 px-4 py-2 flex items-center justify-center transition-all duration-500",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
};