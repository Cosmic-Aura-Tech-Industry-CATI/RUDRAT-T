import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: { src: string; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);
  const current = images[index];

  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length],
  );

  // Keyboard navigation
  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [onClose, prev, next],
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        onKeyDown={handleKey}
        tabIndex={0}
        role="dialog"
        aria-label="Image lightbox"
        ref={(el) => el?.focus()}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-5 right-5 z-10 grid place-items-center w-12 h-12 rounded-full glass-strong border border-white/10 text-premium-white hover:text-gold hover:border-[var(--gold)]/40 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 z-10 grid place-items-center w-12 h-12 rounded-full glass-strong border border-white/10 text-premium-white hover:text-gold hover:border-[var(--gold)]/40 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next */}
        {images.length > 1 && (
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 md:right-8 z-10 grid place-items-center w-12 h-12 rounded-full glass-strong border border-white/10 text-premium-white hover:text-gold hover:border-[var(--gold)]/40 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Image */}
        <motion.img
          key={index}
          src={current.src}
          alt={current.alt}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[1] max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        />

        {/* Counter */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 px-4 py-2 rounded-full glass text-[11px] tracking-[0.25em] uppercase text-luxury-gray">
          {index + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
