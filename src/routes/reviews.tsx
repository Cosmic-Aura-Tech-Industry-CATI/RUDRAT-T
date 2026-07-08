import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { reviews } from "@/data/reviews";
import hero from "@/assets/hero-suv.jpg";
import { pageSeo, breadcrumbLdJson } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    ...pageSeo({
      title: "Guest Reviews | Real Traveller Feedback",
      description:
        "Read real traveller reviews from Kashmir to Kerala, Ladakh to Goa, shared by guests of Rudra Tours and Travels.",
      path: "/reviews",
      image: hero,
    }),
    ...breadcrumbLdJson([{ name: "Reviews", path: "/reviews" }]),
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Reviews", to: "/reviews" }]} />
      <PageHero
        eyebrow="Guest Stories"
        title={
          <>
            Traveller reviews from <span className="shine-text italic">the road</span>.
          </>
        }
        subtitle="Every review below is from a real guest who travelled with us — unedited, unpaid, unfiltered."
        image={hero}
      />
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
