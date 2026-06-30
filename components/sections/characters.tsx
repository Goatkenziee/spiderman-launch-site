"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";

const characters = [
  {
    name: "Spider-Man",
    alias: "Peter Parker",
    role: "Hero",
    color: "from-red-500/20 to-blue-500/20",
    borderColor: "border-red-500/30",
    accent: "text-red-400",
    description:
      "Balancing life as a teenager and a superhero, Peter Parker protects New York City with great power and great responsibility.",
    abilities: ["Web-Slinging", "Spider-Sense", "Superhuman Strength", "Wall-Crawling"],
  },
  {
    name: "Green Goblin",
    alias: "Norman Osborn",
    role: "Villain",
    color: "from-green-500/20 to-emerald-900/20",
    borderColor: "border-green-500/30",
    accent: "text-green-400",
    description:
      "A brilliant scientist consumed by his alter ego, the Green Goblin brings chaos and destruction to Spider-Man's world.",
    abilities: ["Goblin Glider", "Pumpkin Bombs", "Enhanced Strength", "Genius Intellect"],
  },
  {
    name: "MJ",
    alias: "Mary Jane Watson",
    role: "Ally",
    color: "from-orange-500/20 to-yellow-500/20",
    borderColor: "border-orange-500/30",
    accent: "text-orange-400",
    description:
      "The love of Peter's life, MJ is a fierce and independent journalist who always has his back, even when the mask comes off.",
    abilities: ["Investigative Journalism", "Quick Thinking", "Courage", "Empathy"],
  },
  {
    name: "Doctor Octopus",
    alias: "Otto Octavius",
    role: "Villain",
    color: "from-purple-500/20 to-indigo-900/20",
    borderColor: "border-purple-500/30",
    accent: "text-purple-400",
    description:
      "A genius nuclear physicist with four mechanical tentacles fused to his spine, driven mad by his own creation.",
    abilities: ["Mechanical Tentacles", "Genius Intellect", "Multi-Tasking", "Durability"],
  },
  {
    name: "Venom",
    alias: "Eddie Brock",
    role: "Anti-Hero",
    color: "from-slate-800/30 to-black/30",
    borderColor: "border-slate-500/30",
    accent: "text-slate-300",
    description:
      "A symbiotic entity bonded with journalist Eddie Brock, Venom is a lethal protector with a twisted sense of justice.",
    abilities: ["Symbiote Powers", "Shapeshifting", "Regeneration", "Immunity to Spider-Sense"],
  },
  {
    name: "Aunt May",
    alias: "May Parker",
    role: "Family",
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/30",
    accent: "text-rose-400",
    description:
      "The heart of the Parker household, Aunt May's wisdom and unconditional love ground Peter through every challenge.",
    abilities: ["Unconditional Love", "Wisdom", "Resilience", "Nursing Skills"],
  },
];

export function CharactersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.03)] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] text-sm text-[hsl(var(--primary))] mb-6">
            The Cast
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Heroes, Villains &{" "}
            <span className="gradient-text">Everyone In Between</span>
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Every hero is only as good as their rogues' gallery — and theirs is legendary.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ y }}
        >
          {characters.map((char, i) => (
            <motion.div
              key={char.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group relative overflow-hidden p-0 border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-500">
                {/* Character color bar */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${char.color}`}
                />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:gradient-text transition-all">
                        {char.name}
                      </h3>
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        {char.alias}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${char.borderColor} ${char.accent}`}
                    >
                      {char.role}
                    </span>
                  </div>

                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
                    {char.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {char.abilities.map((ability) => (
                      <span
                        key={ability}
                        className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"
                      >
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary)/0.08)] to-transparent" />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
