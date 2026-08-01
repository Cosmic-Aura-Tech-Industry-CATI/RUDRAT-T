import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Youtube, Instagram } from "lucide-react";
import { BRAND } from "@/lib/brand";
import logoAsset from "@/assets/rudra-logo.png";
import dimisiLogo from "@/assets/dimisi-logo.png";
import { LANDING_PAGES } from "@/data/seo-landings";

const cols = [
  {
    title: "Explore",
    links: [
      { label: "Tour Packages", to: "/tours", ariaLabel: "View Tour Packages" },
      { label: "Car Rentals", to: "/vehicles", ariaLabel: "View Car Rentals" },
      { label: "Wedding Travel", to: "/weddings", ariaLabel: "View Wedding Travel" },
      { label: "Destinations", to: "/destinations", ariaLabel: "View Destinations" },
    ],
  },
  {
    title: "Travel Services",
    links: LANDING_PAGES.filter((page) => page.kind === "service")
      .slice(0, 4)
      .map((page) => ({
        label: page.eyebrow,
        to: `/${page.slug}`,
        ariaLabel: `Open ${page.title}`,
      })),
  },
  {
    title: "City Guides",
    links: LANDING_PAGES.filter((page) => page.kind === "location")
      .slice(0, 4)
      .map((page) => ({
        label: page.eyebrow,
        to: `/${page.slug}`,
        ariaLabel: `Open ${page.title}`,
      })),
  },
  {
    title: "Company",
    links: [{ label: "About Rudra", to: "/about", ariaLabel: "View About Rudra" }],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="mb-5">
              <img
                src={logoAsset}
                alt="Rudra Tours & Travels"
                className="w-40 h-20 object-contain opacity-95 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-luxury-gray text-sm leading-relaxed max-w-sm">
              India's friendly travel partner. Handpicked trips, comfortable cars and yaadgaar
              journeys — planned with warmth.
            </p>
            <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gold/80 font-medium">
              Direct contact via phone and WhatsApp
            </div>
            <div className="mt-4 space-y-2 text-sm text-luxury-gray">
              <a
                href={BRAND.phoneHref}
                className="flex items-center gap-3 hover:text-premium-white transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" /> {BRAND.phone}
              </a>
              <a
                href={BRAND.emailHref}
                className="flex items-center gap-3 hover:text-premium-white transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" /> {BRAND.email}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" /> Kanpur - Uttar Pradesh
              </div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] tracking-[0.3em] uppercase text-gold mb-5">{c.title}</div>
              <ul className="space-y-3 text-sm text-luxury-gray">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      aria-label={l.ariaLabel}
                      className="hover:text-premium-white transition-colors relative inline-block group"
                    >
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 pt-8 text-xs text-luxury-gray items-center">
          {/* Left — Copyright */}
          <div className="text-center md:text-left">
            <span>© 2026 Rudra Tours & Travels. Luxury Journeys Begin Here.</span>
          </div>

          {/* Center — Socials */}
          <div className="flex items-center gap-4 justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-gray hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-gray hover:text-gold transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Right — DIMISI */}
          <div className="flex items-center gap-2 justify-center md:justify-end">
            <span>Designed and developed by</span>
            <a
              href="https://dimisi.tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit DIMISI Website"
              className="inline-flex items-center"
            >
              <img
                src={dimisiLogo}
                alt="DIMISI"
                loading="lazy"
                decoding="async"
                className="h-5 md:h-6 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
