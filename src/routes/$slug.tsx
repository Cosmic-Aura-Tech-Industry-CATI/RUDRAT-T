import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Clock,
  Car,
  Star,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { PageLayout } from "@/components/PageLayout";
import { packages } from "@/data/packages";
import { LANDING_PAGES, getLandingPageBySlug } from "@/data/seo-landings";
import { createLandingGraphSchema, pageSeo } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

import heroSuv from "@/assets/hero-suv.jpg";
import ctaIndia from "@/assets/cta-india.jpg";
import weddingCar1 from "@/assets/wedding-car-1.jpg";
import audiA6 from "@/assets/vehicles/audi-a6.jpg";
import crysta from "@/assets/vehicles/innova-crysta.jpg";
import fortuner from "@/assets/vehicles/fortuner.jpg";
import tt17 from "@/assets/vehicles/force-traveller-17.jpg";
import deluxeBus from "@/assets/vehicles/deluxe-bus-55.jpg";
import mercedes from "@/assets/vehicles/mercedes-benz.jpg";
import ayodhya from "@/assets/destinations/ayodhya.jpg";
import mathura from "@/assets/destinations/mathura.jpg";
import prayagraj from "@/assets/destinations/prayagraj.jpg";
import varanasi from "@/assets/destinations/varanasi.jpg";
import kainchiDham from "@/assets/destinations/kainchi-dham.jpg";

const PAGE_IMAGE_BY_SLUG: Record<string, string> = {
  "car-rental-kanpur": heroSuv,
  "taxi-service-kanpur": heroSuv,
  "cab-booking-kanpur": heroSuv,
  "tempo-traveller-kanpur": tt17,
  "luxury-car-rental": mercedes,
  "innova-crysta-rental": crysta,
  "fortuner-rental": fortuner,
  "bus-rental": deluxeBus,
  "wedding-car-rental": weddingCar1,
  "airport-transfer": ctaIndia,
  "pick-and-drop-service-kanpur": heroSuv,
  "outstation-taxi": heroSuv,
  "travel-agent-kanpur": ctaIndia,
  "travel-agency-kanpur": ctaIndia,
  "corporate-travel": audiA6,
  "tour-packages": ctaIndia,
  "uttar-pradesh-tour-packages": ctaIndia,
  "holiday-packages": ctaIndia,
  "kanpur-to-lucknow-cab": heroSuv,
  "kanpur-to-ayodhya-taxi": ayodhya,
  "kanpur-to-prayagraj-taxi": prayagraj,
  "kanpur-to-varanasi-cab": varanasi,
  "kanpur-to-delhi-cab": heroSuv,
  "kanpur-to-agra-cab": ctaIndia,
  "kanpur-to-mathura-vrindavan-cab": mathura,
  "kanpur-to-kainchi-dham-taxi": kainchiDham,
  kanpur: ctaIndia,
  lucknow: ctaIndia,
  agra: ctaIndia,
  prayagraj,
  varanasi,
  ayodhya,
  mathura,
  noida: ctaIndia,
  ghaziabad: ctaIndia,
  meerut: ctaIndia,
};

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const page = getLandingPageBySlug(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    const image = PAGE_IMAGE_BY_SLUG[loaderData.page.slug] ?? ctaIndia;
    const schema = createLandingGraphSchema({
      slug: loaderData.page.slug,
      title: loaderData.page.title,
      description: loaderData.page.description,
      kind: loaderData.page.kind,
      faqs: loaderData.page.faqs,
      breadcrumbs: [{ name: loaderData.page.eyebrow, path: `/${loaderData.page.slug}` }],
    });

    return pageSeo({
      title: loaderData.page.title,
      description: loaderData.page.description,
      path: `/${loaderData.page.slug}`,
      image,
      schema,
    });
  },
  component: LandingPageRoute,
});

const QUICK_FLEET = [
  { name: "Sedan (Dzire / Etios)", capacity: "4+1 Seater", ideal: "City & Outstation Cabs" },
  { name: "Innova Crysta", capacity: "6/7 Seater", ideal: "Family & Executive Travel" },
  { name: "Toyota Fortuner", capacity: "7 Seater VIP", ideal: "VIP & Wedding Convoy" },
  { name: "Tempo Traveller", capacity: "12/17/26 Seater", ideal: "Group & Pilgrimage Tours" },
];

function LandingPageRoute() {
  const { page } = Route.useLoaderData();
  const image = PAGE_IMAGE_BY_SLUG[page.slug] ?? ctaIndia;
  const relatedPackages = packages.filter((item) => page.relatedPackages.includes(item.slug));
  const relatedPages = LANDING_PAGES.filter((item) => page.relatedPages.includes(item.slug));
  const isRoute = page.slug.startsWith("kanpur-to-");

  const whatsappMessage = encodeURIComponent(
    `Hello Rudra Tours, I want to book / enquire about "${page.eyebrow}". Please share available vehicles, rates and booking details.`
  );
  const whatsappUrl = `https://wa.me/917014547628?text=${whatsappMessage}`;

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: page.eyebrow, to: `/${page.slug}` }]} />
      <PageHero
        eyebrow={page.eyebrow}
        title={
          <>
            {page.heroTitle.split("|")[0]?.trim() ?? page.heroTitle}
            <span className="shine-text italic">
              {page.kind === "service" ? " service" : " guide"}
            </span>
            .
          </>
        }
        subtitle={page.heroSubtitle}
        image={image}
        imageAlt={page.title}
      />

      {/* Quick Conversion Bar */}
      <section className="px-6 -mt-6 mb-8 relative z-20">
        <div className="mx-auto max-w-7xl glass-strong rounded-2xl p-4 md:p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 grid place-items-center text-gold shrink-0">
              <Star className="w-6 h-6 fill-gold" />
            </div>
            <div>
              <div className="text-sm font-medium text-premium-white flex items-center gap-2">
                <span>Kanpur's #1 Rated Cab & Travel Service</span>
                <span className="text-[11px] bg-gold/20 text-gold px-2 py-0.5 rounded-full border border-gold/30">
                  4.9 / 5 (1280+ Reviews)
                </span>
              </div>
              <p className="text-xs text-luxury-gray">
                Verified drivers · Clean AC vehicles · On-time doorstep pickup across Kanpur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={BRAND.phoneHref}
              className="flex-1 md:flex-none btn-gold px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none btn-ghost-luxe px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-7 md:p-10"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              {page.kind === "service"
                ? "Why this service matters"
                : "Why this travel guide matters"}
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">{page.introHeading}</h2>
            <p className="text-luxury-gray leading-relaxed mb-6">{page.introBody}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {page.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-sm text-premium-white">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Vehicle Fleet Selection Grid */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-3">
                Available Fleet Options
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {QUICK_FLEET.map((veh) => (
                  <div
                    key={veh.name}
                    className="p-3.5 rounded-xl border border-white/5 bg-white/[0.02] flex items-start gap-3"
                  >
                    <Car className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-premium-white">{veh.name}</div>
                      <div className="text-xs text-luxury-gray">
                        {veh.capacity} · {veh.ideal}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="glass-strong rounded-3xl p-7 md:p-10 h-fit space-y-6"
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                Why choose Rudra Tours
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Trusted Kanpur Travel Partner.
              </h2>
              <p className="text-sm text-luxury-gray leading-relaxed mb-6">
                Operating since 2014 with 1 Lakh+ happy travellers, experienced chauffeurs, clean
                vehicles and zero hidden charges.
              </p>
            </div>

            <div className="space-y-3">
              {page.reasons.map((reason, index) => (
                <div
                  key={reason}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 flex items-start gap-3"
                >
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.25em] text-gold">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-luxury-gray">{reason}</p>
                </div>
              ))}
            </div>

            {/* Direct Booking CTAs */}
            <div className="pt-2 space-y-3">
              <Link
                to="/inquiry"
                search={{
                  type: page.kind === "service" ? "Service Inquiry" : "Destination Inquiry",
                  package: page.eyebrow,
                }}
                className="btn-gold w-full px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2"
              >
                Get Instant Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-luxe w-full px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
              >
                <MessageCircle className="w-4 h-4" /> Book via WhatsApp
              </a>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Kanpur Local Coverage Section */}
      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-7xl glass-strong rounded-3xl p-7 md:p-10 border border-white/5">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
            <MapPin className="w-3.5 h-3.5" /> 100% Kanpur Locality Coverage
          </div>
          <h2 className="font-display text-2xl md:text-3xl mb-4">
            Doorstep Pickups & Drops Across All Kanpur Areas
          </h2>
          <p className="text-sm text-luxury-gray max-w-4xl leading-relaxed mb-6">
            We provide 24x7 punctual cab pickups from your home, hotel, railway station or office
            across Kanpur:
          </p>
          <div className="flex flex-wrap gap-2">
            {BRAND.topLocalities.map((loc) => (
              <span
                key={loc}
                className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-luxury-gray"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Packages */}
      {relatedPackages.length > 0 && (
        <section className="px-6 pb-10 md:pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Related Packages
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              {page.kind === "service"
                ? "Packages that pair with this service."
                : "Trips that pair with this destination."}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPackages.map((item) => (
                <Link
                  key={item.slug}
                  to="/tours/$slug"
                  params={{ slug: item.slug }}
                  className="glass-strong rounded-2xl p-5 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.25em] text-luxury-gray mb-2">
                    {item.days} Days
                  </div>
                  <div className="font-display text-2xl leading-tight mb-2">{item.name}</div>
                  <p className="text-sm text-luxury-gray">{item.destinations.join(" · ")}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links Hub */}
      {relatedPages.length > 0 && (
        <section className="px-6 pb-10 md:pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Internal Links
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Explore related travel pages.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {relatedPages.map((item) => (
                <Link
                  key={item.slug}
                  to="/$slug"
                  params={{ slug: item.slug }}
                  className="glass-strong rounded-2xl p-5 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.25em] text-luxury-gray mb-2">
                    {item.kind === "service" ? "Service" : "City Guide"}
                  </div>
                  <div className="font-display text-2xl leading-tight mb-2">{item.title}</div>
                  <p className="text-sm text-luxury-gray line-clamp-3">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="px-6 pb-14 md:pb-16">
        <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-7 md:p-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">FAQs</div>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            {page.eyebrow} questions, answered.
          </h2>
          <div className="grid gap-4">
            {page.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5"
              >
                <summary className="cursor-pointer list-none font-medium text-premium-white flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-gold text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-luxury-gray">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

