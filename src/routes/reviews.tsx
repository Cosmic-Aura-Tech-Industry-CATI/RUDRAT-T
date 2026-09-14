import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, Star } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { reviews } from "@/data/reviews";
import hero from "@/assets/hero-suv.jpg";
import { pageSeo } from "@/lib/seo";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageSeo({
      title: "Customer Reviews | Rudra Tours & Travels Kanpur (4.9/5 Rating)",
      description:
        "Read verified customer reviews of Rudra Tours & Travels Kanpur. Over 1 Lakh+ happy travellers rate our cab services, tour packages & drivers 4.9/5.",
      path: "/reviews",
      image: hero,
      breadcrumbs: [{ name: "Reviews", path: "/reviews" }],
    }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Reviews", to: "/reviews" }]} />
      <PageHero
        eyebrow="Verified Guest Reviews"
        title={
          <>
            Kanpur's top-rated travel experience,{" "}
            <span className="shine-text italic">told by travellers</span>.
          </>
        }
        subtitle="1,280+ happy journeys across Uttar Pradesh and India. Unedited feedback from families, pilgrims, and corporate guests."
        image={hero}
      />

      <section className="px-6 -mt-6 mb-8 relative z-20">
        <div className="mx-auto max-w-7xl glass-strong rounded-2xl p-5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold" />
              ))}
            </div>
            <div className="text-sm text-premium-white font-medium">
              4.9 out of 5 · Google Business Profile Rating
            </div>
          </div>
          <a
            href={BRAND.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2"
          >
            Review Us on Google <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
      <section className="px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={`${r.name}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="glass-strong rounded-2xl p-7"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-premium-white/90 mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--accent-blue)] grid place-items-center font-display text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm">{r.name}</div>
                    <div className="text-xs text-luxury-gray">{r.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
