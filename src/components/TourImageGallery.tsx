import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "./Lightbox";

interface Props {
  images: string[];
  packageName: string;
}

const IMAGE_LABELS = ["Hero View", "Key Attraction", "Cultural Experience", "Scenic Landscape"];

export function TourImageGallery({ images, packageName }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (images.length < 2) return null;

  const galleryImages = images.map((src, i) => ({
    src,
    alt: `${packageName} — ${IMAGE_LABELS[i] ?? `Photo ${i + 1}`}`,
  }));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 md:h-[520px] h-auto">
        {galleryImages.map((img, i) => {
          let gridClasses = "col-span-1 aspect-[4/3]";
          if (i === 0) {
            gridClasses =
              "col-span-2 aspect-[16/10] sm:aspect-[16/10] md:aspect-auto md:col-span-2 md:row-span-2 md:h-full";
          } else if (i === 1) {
            gridClasses =
              "col-span-1 aspect-[4/3] sm:col-span-1 sm:aspect-square md:aspect-auto md:col-span-2 md:row-span-1 md:h-full";
          } else if (i === 2) {
            gridClasses =
              "col-span-1 aspect-[4/3] sm:col-span-1 sm:aspect-square md:aspect-auto md:col-span-1 md:row-span-1 md:h-full";
          } else if (i === 3) {
            gridClasses =
              "col-span-2 aspect-[16/10] sm:col-span-2 sm:aspect-[16/10] md:aspect-auto md:col-span-1 md:row-span-1 md:h-full";
          }

          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => setLightboxIndex(i)}
              className={`group relative rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--gold)]/40 transition-all duration-500 cursor-pointer w-full ${gridClasses}`}
              aria-label={`View ${img.alt} in fullscreen`}
            >
              {/* Hover glow */}
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
                style={{ background: "var(--gradient-radial-gold)" }}
              />
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Label */}
              <div className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-[0.2em] text-premium-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                {IMAGE_LABELS[i] ?? `Photo ${i + 1}`}
              </div>
            </motion.button>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
