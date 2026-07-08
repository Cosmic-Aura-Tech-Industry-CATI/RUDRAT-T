import { motion } from "framer-motion";
import cta from "@/assets/cta-india.jpg";

export function CTA() {
  return (
    <section id="contact" className="relative py-5 md:py-6 lg:py-8 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-7xl rounded-3xl overflow-hidden border border-white/10"
      >
        <img
          src={cta}
          alt="Incredible India"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />

        <div className="relative px-8 md:px-14 py-10 md:py-12 max-w-3xl">
          <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
            <span className="w-8 h-px bg-gold" />
            Let's Plan Your Trip
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
            Ready to explore <br />
            <span className="shine-text italic">Incredible India?</span>
          </h2>
          <p className="mt-5 text-luxury-gray max-w-lg">
            Bas share your dates, dream destination and travel style. We'll send a friendly,
            tailored quote within 24 hours — no pushy calls, promise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="btn-gold px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-medium"
            >
              Get Free Quote
            </a>
            <a
              href="#"
              className="btn-ghost-luxe px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-medium"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
