import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";

interface Props {
  limit?: number;
}

export function GalleryGrid({ limit }: Props) {
  const items = limit ? galleryImages.slice(0, limit) : galleryImages;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: (i % 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6 }}
          className="group relative rounded-2xl glass-strong overflow-hidden hover:border-[var(--gold)]/40 transition-all duration-500 h-64 md:h-72"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "var(--gradient-radial-gold)" }} />
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </div>
  );
}
