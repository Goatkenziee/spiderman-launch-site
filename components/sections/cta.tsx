"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bell, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary)/0.05)] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--primary)/0.06)] blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--primary)/0.08)] text-sm text-[hsl(var(--primary))] mb-6">
            <Sparkles className="w-4 h-4" />
            Stay Updated
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready for the Next
            <br />
            <span className="gradient-text">Chapter?</span>
          </h2>

          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-10 leading-relaxed">
            Be the first to know about the upcoming Spider-Man release. Exclusive
            content, behind-the-scenes footage, and early access tickets await.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="h-12 px-8 text-base gap-2 glow">
              <Bell className="w-5 h-5" />
              Notify Me
            </Button>
            <Button variant="outline" className="h-12 px-8 text-base">
              View Trailers
            </Button>
          </div>

          <motion.p
            className="mt-8 text-xs text-[hsl(var(--muted-foreground))]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            No spam. Just the latest news from across the Spider-Verse.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
