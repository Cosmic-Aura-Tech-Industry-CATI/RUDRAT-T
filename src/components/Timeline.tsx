import { motion } from "framer-motion";

export interface TimelineItem {
  day: number;
  title: string;
  description: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  if (!items.length) return null;

  return (
    <div className="relative">
      {/* Gold vertical line */}
      <div
        className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(to bottom, var(--gold), oklch(0.78 0.13 85 / 0.15))",
        }}
      />

      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex gap-5 md:gap-6"
          >
            {/* Day marker */}
            <div className="relative z-10 shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full grid place-items-center glass-strong border border-[var(--gold)]/40 text-gold font-display text-sm md:text-base">
              {item.day}
            </div>

            {/* Content card */}
            <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.03] p-5 md:p-6 group hover:border-[var(--gold)]/30 transition-colors duration-500">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-2">
                Day {item.day}
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2 leading-tight">{item.title}</h3>
              <p className="text-sm text-luxury-gray leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
