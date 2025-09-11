"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

type BackgroundEffectProps = {
  variant?: "gradient" | "particles" | "minimal";
  intensity?: "light" | "medium" | "strong";
  showSparkles?: boolean;
  showFloatingIcons?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({
  variant = "gradient",
  intensity = "medium",
  showSparkles = false,
  showFloatingIcons = false,
  className = "",
  children,
}) => {
  // Generate random sparkles
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  
  // Generate floating icons
  const [floatingIcons, setFloatingIcons] = useState<Array<{ id: number; x: number; y: number; icon: JSX.Element; delay: number }>>([]);

  // Generate background elements on mount
  useEffect(() => {
    if (showSparkles) {
      const newSparkles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
      }));
      setSparkles(newSparkles);
    }

    if (showFloatingIcons) {
      const icons = [
        <SiReact key="react" className="text-cyan-400" />,
        <SiNextdotjs key="next" className="text-white" />,
        <SiTypescript key="ts" className="text-blue-400" />,
        <SiTailwindcss key="tailwind" className="text-cyan-300" />,
      ];

      const newFloatingIcons = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        icon: icons[i % icons.length],
        delay: Math.random() * 10,
      }));
      setFloatingIcons(newFloatingIcons);
    }
  }, [showSparkles, showFloatingIcons]);

  // Determine gradient based on intensity
  const getGradientStyle = () => {
    switch (intensity) {
      case "light":
        return "bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10";
      case "strong":
        return "bg-gradient-to-br from-purple-600/30 via-blue-600/20 to-purple-600/30";
      case "medium":
      default:
        return "bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-purple-600/20";
    }
  };

  // Determine background style based on variant
  const getBackgroundStyle = () => {
    switch (variant) {
      case "particles":
        return "bg-black";
      case "minimal":
        return "bg-gray-950";
      case "gradient":
      default:
        return getGradientStyle();
    }
  };

  return (
    <div className={`relative ${getBackgroundStyle()} ${className}`}>
      {/* Gradient overlay */}
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      )}

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(transparent,black)]" />

      {/* Sparkles */}
      {showSparkles && sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: sparkle.delay,
          }}
        />
      ))}

      {/* Floating Icons */}
      {showFloatingIcons && floatingIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-2xl opacity-20"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.2, 0],
            y: [`${icon.y}%`, `${icon.y - 10}%`, `${icon.y}%`],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: icon.delay,
            ease: "easeInOut",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}

      {/* Content */}
      {children}
    </div>
  );
};

export default BackgroundEffect;