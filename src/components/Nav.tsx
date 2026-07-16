import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/rudra-logo.png";

type NavLink =
  | { label: string; to: string }
  | { label: string; children: { label: string; to: string; desc?: string }[] };

const links: NavLink[] = [
  { label: "Home", to: "/" },
  {
    label: "Tour Packages",
    children: [
      { label: "Explore Packages", to: "/tours", desc: "Browse all our travel packages" },
      { label: "Customised Package", to: "/inquiry", desc: "Plan a trip made just for you" },
    ],
  },
  { label: "Vehicle Rentals", to: "/vehicles" },
  { label: "Wedding Travel", to: "/weddings" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20 || isHome);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleEnter = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const handleLeave = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 md:top-9 top-0 ${scrolled ? "py-1" : "py-2"}`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-2">
        <div
          className={`rounded-2xl px-5 md:px-6 py-2 flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? "glass-strong shadow-[0_10px_40px_rgba(0,0,0,0.35)] border border-[var(--gold)]/10" : "bg-transparent border border-transparent"}`}
        >
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={logoAsset}
              alt="Rudra Tours & Travels"
              className="w-40 h-13 object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>

          <nav className="hidden xl:flex items-center gap-6 text-[13px] text-luxury-gray">
            {links.map((l) =>
              "children" in l ? (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => handleEnter(l.label)}
                  onMouseLeave={handleLeave}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 hover:text-premium-white transition-colors relative group"
                  >
                    {l.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${openDropdown === l.label ? "rotate-180" : ""}`}
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === l.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-72"
                      >
                        <div
                          className="rounded-2xl p-2"
                          style={{
                            background: "rgba(10, 10, 10, 0.92)",
                            backdropFilter: "blur(16px) saturate(140%)",
                            WebkitBackdropFilter: "blur(16px) saturate(140%)",
                            border: "1px solid rgba(212, 175, 55, 0.15)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
                          }}
                        >
                          {l.children.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-3 rounded-xl transition-all duration-300 hover:bg-[rgba(212,175,55,0.08)] group/item"
                            >
                              <div className="text-sm text-premium-white group-hover/item:text-gold transition-colors">
                                {c.label}
                              </div>
                              {c.desc && (
                                <div className="text-[11px] text-luxury-gray mt-0.5">{c.desc}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-premium-white" }}
                  className="hover:text-premium-white transition-colors relative group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/inquiry"
              className="hidden sm:inline-flex btn-gold text-[11px] tracking-[0.22em] uppercase px-5 py-2.5 rounded-full font-medium"
            >
              Plan My Trip
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="xl:hidden grid place-items-center w-10 h-10 rounded-full border border-white/10 text-premium-white"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="xl:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) =>
                "children" in l ? (
                  <div key={l.label} className="flex flex-col">
                    <button
                      onClick={() => setMobileOpenSub(mobileOpenSub === l.label ? null : l.label)}
                      className="px-3 py-2.5 rounded-lg text-sm text-luxury-gray hover:text-premium-white hover:bg-white/5 transition-colors flex items-center justify-between"
                    >
                      {l.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileOpenSub === l.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileOpenSub === l.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-3"
                        >
                          {l.children.map((c) => (
                            <Link
                              key={c.to}
                              to={c.to}
                              onClick={() => {
                                setOpen(false);
                                setMobileOpenSub(null);
                              }}
                              className="block px-3 py-2 rounded-lg text-sm text-luxury-gray hover:text-gold hover:bg-white/5 transition-colors"
                            >
                              {c.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "text-gold" }}
                    className="px-3 py-2.5 rounded-lg text-sm text-luxury-gray hover:text-premium-white hover:bg-white/5 transition-colors"
                  >
                    {l.label}
                  </Link>
                ),
              )}
              <Link
                to="/inquiry"
                onClick={() => setOpen(false)}
                className="mt-2 btn-gold text-center text-[11px] tracking-[0.22em] uppercase px-5 py-3 rounded-full font-medium"
              >
                Plan My Trip
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
