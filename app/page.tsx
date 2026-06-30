"use client";

import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { CharactersSection } from "@/components/sections/characters";
import { TimelineSection } from "@/components/sections/timeline";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroSection />
      <StatsSection />
      <CharactersSection />
      <TimelineSection />
      <CTASection />

      {/* Footer */}
      <footer className="relative border-t border-[hsl(var(--border))] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center">
              <span className="text-xs font-bold text-black">SM</span>
            </div>
            <span className="text-sm text-[hsl(var(--muted-foreground))]">
              Spider-Man Launch
            </span>
          </div>
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            &copy; {new Date().getFullYear()} — Fan tribute. Not affiliated with Marvel or Sony.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              Twitter
            </a>
            <a href="#" className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-xs text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
