import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface Props {
  packageName: string;
}

export function FloatingBookCTA({ packageName }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~500px (past the hero)
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-20 lg:bottom-6 left-4 z-[55]"
        >
          <Link
            to="/inquiry"
            search={{ type: "Tour Inquiry", package: packageName }}
            className="group relative"
          >
            <span
              className="absolute inset-0 rounded-full opacity-60 blur-lg group-hover:opacity-90 transition-opacity"
              style={{ background: "var(--gradient-radial-gold)" }}
            />
            <span className="relative btn-gold px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2 shadow-2xl">
              Book Now <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
