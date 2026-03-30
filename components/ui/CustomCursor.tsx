"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for tracking organically
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Velocity capture engines
  const velocityX = useVelocity(smoothX);
  const velocityY = useVelocity(smoothY);

  // Mathematical liquid mapping: when moving fast on an X-axis, the blob stretches horizontally and compresses vertically
  const scaleXBase = useTransform(velocityX, [-2500, 0, 2500], [2, 1, 2]);
  const scaleYBase = useTransform(velocityY, [-2500, 0, 2500], [2, 1, 2]);
  const shrinkXBase = useTransform(velocityY, [-2500, 0, 2500], [0.6, 1, 0.6]); 
  const shrinkYBase = useTransform(velocityX, [-2500, 0, 2500], [0.6, 1, 0.6]);

  // We combine the stretch and shrink using an inline functional template calculation
  const compositeScaleX = useTransform(
    [scaleXBase, shrinkXBase], 
    ([stretch, compress]) => (stretch as number) * (compress as number)
  );
  
  const compositeScaleY = useTransform(
    [scaleYBase, shrinkYBase], 
    ([stretch, compress]) => (stretch as number) * (compress as number)
  );

  useEffect(() => {
    // Abort entirely if device lacks precision hover states
    if (window.matchMedia("(hover: none)").matches) return;

    const mouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleInteractableEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") || 
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleInteractableEnter);
    window.addEventListener("mouseenter", () => setIsVisible(true));
    window.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleInteractableEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[10000] flex items-center justify-center mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scaleX: isHovering ? 2.5 : compositeScaleX,
          scaleY: isHovering ? 2.5 : compositeScaleY,
        }}
        animate={{ 
            rotate: isHovering ? 45 : 0 // Turns into a diamond when hovering interactive items
        }}
        transition={{ duration: 0.3 }}
      >
          {/* Core Velocity Body */}
          <div 
            className={`w-full h-full bg-primary shadow-[0_0_20px_hsl(var(--primary))] transition-all duration-300 ${
                isHovering ? "rounded-[5px] opacity-70 border-[2px] border-white" : "rounded-full opacity-100"
            }`}
          />
      </motion.div>
      
      {/* Precision Anchor Dot (Doesn't Stretch, gives user exact clicking location) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10001]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isHovering ? 0 : 1 }}
      />
    </>
  );
};
