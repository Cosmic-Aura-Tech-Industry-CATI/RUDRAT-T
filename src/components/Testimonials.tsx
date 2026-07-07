import { motion } from "framer-motion";
import { SectionHeader } from "./Destinations";
import { Star } from "lucide-react";
import { reviews as allReviews } from "@/data/reviews";

const reviews = allReviews.slice(0, 6);

export function Testimonials() {
  return (
    <section className="relative py-5 md:py-6 lg:py-8 overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl">
        <SectionHeader eyebrow="Guest Stories" title="Kya kehte hain our travellers." />
      </div>

      <div className="mt-8 md:mt-9 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="w-[360px] shrink-0 glass-strong rounded-2xl p-7">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-premium-white/90 mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--accent-blue)] grid place-items-center font-display text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm">{r.name}</div>
                  <div className="text-xs text-luxury-gray">{r.city}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
