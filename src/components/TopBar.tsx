import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/brand";

export function TopBar() {
  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] border-b border-white/5 bg-[oklch(0.10_0.02_260/0.85)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase text-luxury-gray">
        <div className="flex items-center gap-6">
          <a href={BRAND.phoneHref} className="flex items-center gap-2 hover:text-gold transition-colors">
            <Phone className="w-3 h-3 text-gold" /> {BRAND.phone}
          </a>
          <a href={BRAND.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
            <MessageCircle className="w-3 h-3 text-gold" /> WhatsApp
          </a>
          <a href={BRAND.emailHref} className="hidden lg:flex items-center gap-2 hover:text-gold transition-colors">
            <Mail className="w-3 h-3 text-gold" /> {BRAND.email}
          </a>
          <span className="hidden xl:flex items-center gap-2">
            <MapPin className="w-3 h-3 text-gold" /> {BRAND.shortAddress}
          </span>
        </div>
        <Link to="/inquiry" className="text-gold hover:text-premium-white transition-colors font-medium">
          Plan My Trip →
        </Link>
      </div>
    </div>
  );
}
