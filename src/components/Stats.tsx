import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 14, suffix: "+", label: "Years on the Road" },
  { value: 100000, suffix: "+", label: "Happy Travellers" },
  { value: 50, suffix: "+", label: "Tour Packages" },
  { value: 30, suffix: "+", label: "Destinations Covered" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (l) => Math.floor(l).toString());

  useEffect(() => {
    if (inView) {
      const c = animate(mv, to, { duration: 2.2, ease: [0.16, 1, 0.3, 1] });
      return () => c.stop();
    }
  }, [inView, mv, to]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-5 md:py-6 lg:py-8 px-6 border-y border-white/10">
      <div className="mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="font-display text-5xl md:text-7xl text-gradient-gold font-light">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-luxury-gray">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
