import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import heroSuv from "@/assets/hero-suv.jpg";
import heroVideo from "@/assets/hero-video.mp4";
const VIDEO_SRC = heroVideo;

const MARKERS = [
  { left: "12%", label: "Kashmir" },
  { left: "28%", label: "Himachal" },
  { left: "44%", label: "Rajasthan" },
  { left: "60%", label: "Kerala" },
  { left: "76%", label: "Goa" },
  { left: "90%", label: "Ladakh" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const markerGlow = useTransform(scrollYProgress, [0, 0.6], [0.35, 1]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden pt-28 md:pt-32 pb-16">
      {/* Cinematic background video — full-bleed, unobstructed */}
      <motion.div style={{ y: yBg, scale }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroSuv}
          disablePictureInPicture
          // @ts-expect-error vendor attribute
          disableRemotePlayback=""
          className="w-full h-full object-cover"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Cinematic dark luxury overlays */}
        <div className="absolute inset-0 bg-background/45" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, transparent 0%, oklch(0.10 0.02 260 / 0.75) 85%)",
          }}
        />
        {/* Top + bottom fade for legibility */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      {/* Subtle destination markers — soft glowing dots along the horizon */}
      <motion.div
        style={{ opacity: markerGlow }}
        className="pointer-events-none absolute inset-x-0 bottom-[14%] z-[5] hidden md:block"
      >
        <div className="relative mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent">
          {MARKERS.map((m, i) => (
            <div
              key={m.label}
              className="absolute -top-1.5 flex flex-col items-center"
              style={{ left: m.left, transform: "translateX(-50%)", animationDelay: `${i * 0.4}s` }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--gold)] shadow-[0_0_18px_var(--gold)] pulse-gold" />
              <span className="mt-2 text-[9px] tracking-[0.3em] uppercase text-luxury-gray/80">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-[calc(100vh-7rem)] md:min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full glass text-[11px] tracking-[0.3em] uppercase text-luxury-gray"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold pulse-gold" />
          Rudra Tours & Travels · Kanpur
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-5xl"
        >
          Your Next Journey
          <br />
          <span className="shine-text italic">Starts Here.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-luxury-gray leading-relaxed"
        >
          Handpicked tours, premium cars, and dreamy destination weddings —
          planned with love, dispatched from Kanpur, delivered all across India. Chaliye, let's make your safar truly yaadgaar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 mb-16 flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Link
            to="/tours"
            className="btn-gold px-7 py-4 rounded-full text-[12px] uppercase tracking-[0.22em] font-medium magnetic"
          >
            Explore Tours
          </Link>
          <Link
            to="/vehicles"
            className="btn-ghost-luxe px-7 py-4 rounded-full text-[12px] uppercase tracking-[0.22em] font-medium magnetic"
          >
            Book A Vehicle
          </Link>
          <Link
            to="/inquiry"
            className="btn-ghost-luxe px-7 py-4 rounded-full text-[12px] uppercase tracking-[0.22em] font-medium magnetic"
          >
            Plan My Trip
          </Link>
          <Link
            to="/weddings"
            className="btn-ghost-luxe px-7 py-4 rounded-full text-[12px] uppercase tracking-[0.22em] font-medium magnetic"
          >
            Wedding Cars
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}
