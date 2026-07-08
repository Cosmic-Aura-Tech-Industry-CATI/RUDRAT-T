import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Destinations";
import { galleryImages } from "@/data/gallery";

export function Gallery() {
  const loop = [...galleryImages, ...galleryImages];
  return (
    <section id="gallery" className="relative py-5 md:py-6 lg:py-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--deep-2)]/40 to-transparent pointer-events-none" />
      <div className="relative px-6 mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments from the road."
          subtitle="Real photos from real trips — the places, drives and celebrations our guests have loved."
        />
      </div>

      <div className="mt-8 md:mt-9 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        >
          {loop.map((img, i) => (
            <div
              key={i}
              className="group relative h-64 md:h-72 shrink-0 rounded-2xl glass-strong overflow-hidden hover:border-[var(--gold)]/40 transition-all duration-500"
            >
              <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: "var(--gradient-radial-gold)" }}
              />
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="relative h-full w-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            aria-label="View full gallery"
            className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.24em] font-medium float-y"
          >
            See More <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
