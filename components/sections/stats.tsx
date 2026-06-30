"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Film, Globe, Trophy, Users } from "lucide-react";

const stats = [
  {
    icon: Film,
    value: "8",
    label: "Live-Action Films",
    description: "Across three generations of Spider-Men",
  },
  {
    icon: Globe,
    value: "$3.9B",
    label: "Box Office Revenue",
    description: "Making it one of the highest-grossing franchises",
  },
  {
    icon: Trophy,
    value: "1",
    label: "Academy Award",
    description: "Best Animated Feature — Into the Spider-Verse",
  },
  {
    icon: Users,
    value: "60+",
    label: "Years of Legacy",
    description: "Since the first comic appearance in 1962",
  },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.04)] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ y }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative p-6 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-center group hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[hsl(var(--primary)/0.1)] mb-4 group-hover:bg-[hsl(var(--primary)/0.2)] transition-colors">
                <stat.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
              </div>

              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))]">
                {stat.description}
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary)/0.06)] to-transparent rounded-xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
