"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/utils/cn";

interface SparklesCoreProps {
  id: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  className?: string;
  particleDensity?: number;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  className,
  particleDensity,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    if (canvasRef.current && canvasRef.current.parentElement) {
      setDimensions({
        width: canvasRef.current.parentElement.offsetWidth,
        height: canvasRef.current.parentElement.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particlesArray: any[] = [];
    const minSizeValue = minSize || 0.5;
    const maxSizeValue = maxSize || 1.5;
    const speedValue = speed || 0.1;
    const particleColorValue = particleColor || "#ffffff";
    const particleDensityValue = particleDensity || 100;

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      opacity: number = 0;
      directionX: number = 0;
      directionY: number = 0;
      
      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (maxSizeValue - minSizeValue) + minSizeValue;
        this.opacity = Math.random();
        this.directionX = Math.random() * speedValue * 2 - speedValue;
        this.directionY = Math.random() * speedValue * 2 - speedValue;
      }
      
      move() {
        if (!canvas || !ctx) return;
        this.x += this.directionX;
        this.y += this.directionY;
        
        if (this.x < 0 || this.x > canvas.width) {
          this.directionX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.directionY *= -1;
        }
        
        this.opacity = Math.min(Math.max(this.opacity + (Math.random() * 0.04 - 0.02), 0), 1);
      }
      
      draw() {
        if (!ctx || !canvas) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColorValue;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
      }
    }
    
    function init() {
      particlesArray.length = 0;
      if (!canvas || !ctx) return;
      const particlesCount = Math.floor((canvas.width * canvas.height) / 8000) * particleDensityValue;
      
      for (let i = 0; i < particlesCount; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].move();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    init();
    animate();
    
    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        init();
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions, maxSize, minSize, particleColor, particleDensity, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      width={dimensions.width}
      height={dimensions.height}
      className={cn("absolute inset-0", className)}
      style={{
        background: background || "transparent",
      }}
    />
  );
};