import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Rudra Tours & Travels" },
      { name: "description", content: "Real photos from real trips — destinations, cars and celebrations captured across India by Rudra Tours & Travels." },
      { property: "og:title", content: "Gallery — Rudra Tours & Travels" },
      { property: "og:description", content: "A visual safar across India with Rudra Tours & Travels." },
      { property: "og:image", content: galleryImages[0].src },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Gallery"
        title={<>Moments from <span className="shine-text italic">every road</span>.</>}
        subtitle="Every photo is from a real trip — no stock images, no fake filters. Bilkul asli."
        image={galleryImages[0].src}
      />
      <section className="px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid />
        </div>
      </section>
    </PageLayout>
  );
}
