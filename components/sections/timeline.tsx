"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Film, Star, Sparkles } from "lucide-react";

const movies = [
  {
    year: "2002",
    title: "Spider-Man",
    tagline: "With great power comes great responsibility.",
    director: "Sam Raimi",
    rating: "7.4",
    color: "from-red-500/20 to-blue-500/20",
  },
  {
    year: "2004",
    title: "Spider-Man 2",
    tagline: "Sacrifice brings its own rewards.",
    director: "Sam Raimi",
    rating: "7.5",
    color: "from-red-500/20 to-blue-600/20",
  },
  {
    year: "2007",
    title: "Spider-Man 3",
    tagline: "The greatest battle lies within.",
    director: "Sam Raimi",
    rating: "6.3",
    color: "from-red-500/20 to-purple-500/20",
  },
  {
    year: "2012",
    title: "The Amazing Spider-Man",
    tagline: "The untold story begins.",
    director: "Marc Webb",
    rating: "6.9",
    color: "from-blue-500/20 to-green-500/20",
  },
  {
    year: "2014",
    title: "The Amazing Spider-Man 2",
    tagline: "No more secrets.",
    director: "Marc Webb",
    rating: "6.6",
    color: "from-blue-500/20 to-red-500/20",
  },
  {
    year: "2017",
    title: "Spider-Man: Homecoming",
    tagline: "Homework can wait. The city can't.",
    director: "Jon Watts",
    rating: "7.4",
    color: "from-red-500/20 to-blue-500/20",
  },
  {
    year: "2019",
    title: "Spider-Man: Far From Home",
    tagline: "It's time to step up.",
    director: "Jon Watts",
    rating: "7.4",
    color: "from-blue-500/20 to-red-500/20",
  },
  {
    year: "2021",
    title: "Spider-Man: No Way Home",
    tagline: "The multiverse unleashed.",
    director: "Jon Watts",
    rating: "8.2",
    color: "from-purple-500/20 to-red-500/20",
  },
];

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.02)] to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] text-sm text-[hsl(var(--primary))] mb-6">
            <Film className="w-4 h-4" />
            The Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            A <span className="gradient-text">Cinematic</span> Journey
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Two decades of web-slinging storytelling across three generations of Spider-Men.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--border))] md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {movies.map((movie, i) => (
              <TimelineItem key={movie.title} movie={movie} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  movie,
  index,
}: {
  movie: (typeof movies)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Dot on timeline */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-[hsl(var(--primary))] bg-[hsl(var(--background))] z-10 mt-1.5" />

      {/* Spacer for centering */}
      <div className="hidden md:block md:w-1/2" />

      {/* Content card */}
      <div
        className={`ml-10 md:ml-0 md:w-1/2 ${
          isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
        }`}
      >
        <div className="group relative p-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300">
          {/* Year badge */}
          <div className="flex items-center gap-3 mb-3 justify-start md:justify-start">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))]">
              {movie.year}
            </span>
            <div className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]">
              <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              {movie.rating}
            </div>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:gradient-text transition-all">
            {movie.title}
          </h3>

          <p className="text-sm text-[hsl(var(--muted-foreground))] italic mb-2">
            &ldquo;{movie.tagline}&rdquo;
          </p>

          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            Directed by {movie.director}
          </p>

          {/* Hover gradient bar */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl bg-gradient-to-r ${movie.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />
        </div>
      </div>
    </motion.div>
  );
}
