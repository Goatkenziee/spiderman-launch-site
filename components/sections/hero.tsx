"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary)/0.15)] via-transparent to-[hsl(var(--background))]" />

      {/* Animated web lines */}
      <WebLines scrollYProgress={scrollYProgress} />

      {/* Floating Spider-Man silhouette */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ opacity, y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <FloatingSpider />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] text-sm text-[hsl(var(--primary))]">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] animate-pulse" />
            Coming Soon
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text">Your Friendly</span>
          <br />
          <span className="text-foreground">Neighborhood</span>
          <br />
          <span className="gradient-text">Spider-Man</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mb-10 leading-relaxed"
        >
          A new era begins. Experience the return of the web-slinger in an
          unprecedented cinematic journey across the multiverse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button className="h-12 px-8 text-base gap-2 glow">
            <Play className="w-5 h-5" />
            Watch Trailer
          </Button>
          <Button variant="outline" className="h-12 px-8 text-base">
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-[hsl(var(--muted-foreground))] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-[hsl(var(--muted-foreground))]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingSpider() {
  return (
    <motion.div
      className="relative w-80 h-80 md:w-96 md:h-96"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Spider emblem */}
      <svg viewBox="0 0 200 200" className="w-full h-full opacity-20" fill="none">
        <motion.path
          d="M100 20 C100 20 60 60 40 90 C20 120 30 160 60 170 C90 180 100 160 100 140 C100 160 110 180 140 170 C170 160 180 120 160 90 C140 60 100 20 100 20Z"
          fill="url(#spider-grad)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M100 40 L100 100 M100 60 L70 80 M100 60 L130 80 M100 80 L60 100 M100 80 L140 100 M100 100 L50 120 M100 100 L150 120 M100 120 L70 150 M100 120 L130 150"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
        <defs>
          <radialGradient id="spider-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

function WebLines({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0]);

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    >
      <motion.path
        d="M0 100 Q 200 50, 400 120 T 800 80 T 1200 100"
        stroke="hsl(var(--primary) / 0.12)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      />
      <motion.path
        d="M0 200 Q 300 150, 500 220 T 900 180 T 1400 200"
        stroke="hsl(var(--primary) / 0.08)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 1 }}
      />
      <motion.path
        d="M0 300 Q 250 250, 600 320 T 1000 280 T 1400 300"
        stroke="hsl(var(--primary) / 0.06)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 1.5 }}
      />
    </motion.svg>
  );
}
