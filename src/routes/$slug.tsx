import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { PageLayout } from "@/components/PageLayout";
import { packages } from "@/data/packages";
import { LANDING_PAGES, getLandingPageBySlug, type LandingPage } from "@/data/seo-landings";
import { breadcrumbLdJson, faqLdJson, pageSeo } from "@/lib/seo";

import heroSuv from "@/assets/hero-suv.jpg";
import ctaIndia from "@/assets/cta-india.jpg";
import weddingCar1 from "@/assets/wedding-car-1.jpg";
import weddingCar2 from "@/assets/wedding-car-2.jpg";
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
  "outstation-taxi": heroSuv,
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
    return pageSeo({
      title: loaderData.page.title,
      description: loaderData.page.description,
      path: `/${loaderData.page.slug}`,
      image,
      breadcrumbs: [{ name: loaderData.page.eyebrow, path: `/${loaderData.page.slug}` }],
      faqs: loaderData.page.faqs,
    });
  },
  component: LandingPageRoute,
});

function LandingPageRoute() {
  const { page } = Route.useLoaderData();
  const image = PAGE_IMAGE_BY_SLUG[page.slug] ?? ctaIndia;
  const relatedPackages = packages.filter((item) => page.relatedPackages.includes(item.slug));
  const relatedPages = LANDING_PAGES.filter((item) => page.relatedPages.includes(item.slug));

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
                ? "Why this service page matters"
                : "Why this city guide matters"}
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">{page.introHeading}</h2>
            <p className="text-luxury-gray leading-relaxed mb-6">{page.introBody}</p>

            <div className="grid sm:grid-cols-2 gap-4">
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

            <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-2">
                Search Intent Fit
              </div>
              <p className="text-premium-white leading-relaxed">{page.heroSubtitle}</p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="glass-strong rounded-3xl p-7 md:p-10 h-fit"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Why people click this page
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              High-intent travel search support.
            </h2>

            <div className="space-y-3 mb-8">
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

            <Link
              to="/inquiry"
              search={{
                type: page.kind === "service" ? "Service Inquiry" : "Destination Inquiry",
                package: page.eyebrow,
              }}
              className="btn-gold w-full px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2"
            >
              Enquire Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.aside>
        </div>
      </section>

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
                  <span className="text-gold text-lg">+</span>
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
