import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";

interface Props {
  packageName: string;
  destinations: string[];
}

export function TourTestimonials({ packageName, destinations }: Props) {
  // Find reviews mentioning the destination or package keywords
  const keywords = [
    ...destinations.map((d) => d.toLowerCase()),
    ...packageName
      .toLowerCase()
      .split(/[\s–—-]+/)
      .filter((w) => w.length > 3),
  ];

  const matched = reviews.filter((r) => keywords.some((k) => r.text.toLowerCase().includes(k)));

  // Use matched reviews, or fall back to first 3 reviews if no matches
  const displayed = matched.length >= 2 ? matched.slice(0, 3) : reviews.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {displayed.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong rounded-2xl p-6"
        >
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: r.rating }).map((_, k) => (
              <Star key={k} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
            ))}
          </div>
          <p className="text-sm leading-relaxed text-premium-white/90 mb-5">"{r.text}"</p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--accent-blue)] grid place-items-center font-display text-sm">
              {r.name[0]}
            </div>
            <div>
              <div className="text-sm">{r.name}</div>
              <div className="text-xs text-luxury-gray">{r.city}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
