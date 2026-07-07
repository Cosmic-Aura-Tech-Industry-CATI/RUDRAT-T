import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  className?: string;
  interval?: number;
};

/**
 * Auto-rotating cross-fade slider. Pauses on hover via the parent's `group` class.
 */
export function PackageSlider({ images, alt, className = "", interval = 4000 }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % images.length), interval);
    return () => window.clearInterval(id);
  }, [paused, images.length, interval]);

  return (
    <div
      className={`absolute inset-0 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={images[i]}
          alt={alt}
          loading="lazy"
          width={1024}
          height={1024}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`h-1 rounded-full transition-all duration-500 ${
                idx === i ? "w-5 bg-[var(--gold)]" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
