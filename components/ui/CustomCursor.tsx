"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  id:   number;
  x:    number;
  y:    number;
  vx:   number;
  vy:   number;
  life: number; // 0–1
  size: number;
  alpha: number;
}

interface Splat {
  id: number;
  x:  number;
  y:  number;
}

// ─── Constants ─────────────────────────────────────────────────────────────────
const TRAIL_CAPACITY       = 18;
const PARTICLE_LIFETIME_MS = 600;

// ─── Component ─────────────────────────────────────────────────────────────────
export const CustomCursor = () => {
  const [isVisible,  setIsVisible]  = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [particles,  setParticles]  = useState<Particle[]>([]);
  const [splats,     setSplats]     = useState<Splat[]>([]);

  // Raw mouse position (no spring — used for trail spawn)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Slow-spring ring that lags behind for the magnetic feel
  const ringX = useSpring(rawX, { damping: 18, stiffness: 120, mass: 0.8 });
  const ringY = useSpring(rawY, { damping: 18, stiffness: 120, mass: 0.8 });

  // Tight-spring core that tracks closely
  const coreX = useSpring(rawX, { damping: 30, stiffness: 400 });
  const coreY = useSpring(rawY, { damping: 30, stiffness: 400 });

  const particleIdRef  = useRef(0);
  const splatIdRef     = useRef(0);
  const lastTrailRef   = useRef({ x: 0, y: 0 });
  const frameRef       = useRef<number | null>(null);

  // ── Particle animation loop ────────────────────────────────────────────────
  const tick = useCallback(() => {
    setParticles(prev =>
      prev
        .map(p => ({
          ...p,
          x:    p.x + p.vx,
          y:    p.y + p.vy,
          vy:   p.vy + 0.08,        // gravity
          vx:   p.vx * 0.96,        // air drag
          life: p.life - 1000 / (PARTICLE_LIFETIME_MS * 60),
        }))
        .filter(p => p.life > 0)
    );
    frameRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [tick]);

  // ── Mouse events ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const dx = e.clientX - lastTrailRef.current.x;
      const dy = e.clientY - lastTrailRef.current.y;

      if (Math.hypot(dx, dy) > 8) {
        lastTrailRef.current = { x: e.clientX, y: e.clientY };
        const speed = Math.min(Math.hypot(dx, dy) / 8, 3);

        setParticles(prev => {
          const next: Particle = {
            id:    ++particleIdRef.current,
            x:     e.clientX,
            y:     e.clientY,
            vx:    (Math.random() - 0.5) * speed * 1.2,
            vy:    (Math.random() - 0.5) * speed * 1.2 - 0.6,
            life:  1,
            size:  Math.random() * 5 + 3,
            alpha: 0.6 + Math.random() * 0.3,
          };
          return [...prev.slice(-TRAIL_CAPACITY + 1), next];
        });
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHovering(
        window.getComputedStyle(t).cursor === "pointer" ||
        ["a", "button"].includes(t.tagName.toLowerCase()) ||
        !!t.closest("a") ||
        !!t.closest("button")
      );
    };

    const onClick = (e: MouseEvent) => {
      // Radial particle burst on click
      const burst: Particle[] = Array.from({ length: 12 }, () => ({
        id:    ++particleIdRef.current,
        x:     e.clientX,
        y:     e.clientY,
        vx:    (Math.random() - 0.5) * 10,
        vy:    (Math.random() - 0.5) * 10 - 1,
        life:  1,
        size:  Math.random() * 7 + 3,
        alpha: 0.8,
      }));
      setParticles(prev => [...prev, ...burst]);

      // Expanding ring splat
      const id = ++splatIdRef.current;
      setSplats(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSplats(prev => prev.filter(s => s.id !== id)), 600);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseover",  onOver);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("click",      onClick);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onOver);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click",      onClick);
    };
  }, [rawX, rawY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed top-0 left-0 pointer-events-none rounded-full"
          style={{
            width:     p.size,
            height:    p.size,
            transform: `translate(${p.x - p.size / 2}px, ${p.y - p.size / 2}px)`,
            // Uses the CSS variable directly — matches both light & dark mode
            background: `hsl(var(--primary) / ${p.life * p.alpha})`,
            boxShadow:  `0 0 ${p.size * 2}px hsl(var(--primary) / ${p.life * 0.35})`,
            zIndex: 9998,
          }}
        />
      ))}

      <AnimatePresence>
        {splats.map(s => (
          <motion.div
            key={s.id}
            className="fixed top-0 left-0 pointer-events-none rounded-full"
            style={{
              border:      "1.5px solid hsl(var(--primary))",
              boxShadow:   "0 0 8px hsl(var(--primary) / 0.5)",
              x:           s.x,
              y:           s.y,
              translateX:  "-50%",
              translateY:  "-50%",
              zIndex:      9999,
            }}
            initial={{ width: 0,  height: 0,  opacity: 0.9 }}
            animate={{ width: 80, height: 80, opacity: 0   }}
            exit={{}}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          x:          ringX,
          y:          ringY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex:     10000,
        }}
        animate={{
          width:  isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {/* Spinning glow border */}
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            border:    "1.5px solid hsl(var(--primary))",
            boxShadow: `0 0 10px hsl(var(--primary) / 0.6), inset 0 0 6px hsl(var(--primary) / 0.3)`,
            opacity:   isHovering ? 0.95 : 0.6,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width:      5,
              height:     5,
              top:        -2.5,
              left:       "calc(50% - 2.5px)",
              background: "hsl(var(--ring))",
              boxShadow:  "0 0 6px hsl(var(--ring) / 0.8)",
            }}
          />
        </motion.div>
      </motion.div>

      {/*Glowing Core Dot*/}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          x:          coreX,
          y:          coreY,
          translateX: "-50%",
          translateY: "-50%",
          zIndex:     10001,
        }}
        animate={{
          width:  isHovering ? 10 : 6,
          height: isHovering ? 10 : 6,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: "radial-gradient(circle, white 20%, hsl(var(--primary)) 100%)",
            boxShadow:  "0 0 8px hsl(var(--primary) / 0.8), 0 0 20px hsl(var(--primary) / 0.4)",
          }}
        />
      </motion.div>
    </>
  );
};
