import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt, children }: Props) {
  return (
    <section className="relative pt-28 pb-8 md:pt-32 md:pb-10 px-6 overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt={imageAlt ?? `${eyebrow} hero image for Rudra Tours and Travels`} loading="eager" decoding="async" fetchPriority="high" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--deep) 0%, oklch(0.13 0.02 260 / 0.6) 50%, var(--deep) 100%)" }} />
        </div>
      )}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 20%, oklch(0.78 0.13 85 / 0.18), transparent 60%)" }} />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass text-[11px] tracking-[0.3em] uppercase text-luxury-gray"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold pulse-gold" />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-display text-5xl md:text-7xl font-light leading-[1.05] max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-5 max-w-2xl text-base md:text-lg text-luxury-gray leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
