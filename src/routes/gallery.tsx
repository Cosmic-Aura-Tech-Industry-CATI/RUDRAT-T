import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { galleryImages } from "@/data/gallery";
import { pageSeo, breadcrumbLdJson } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    ...pageSeo({
      title: "Travel Gallery | Real Trip Photos by Rudra Tours",
      description:
        "Browse real trip photos from Rudra Tours and Travels across destinations, cars and celebrations in India.",
      path: "/gallery",
      image: galleryImages[0].src,
    }),
    ...breadcrumbLdJson([{ name: "Gallery", path: "/gallery" }]),
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Gallery", to: "/gallery" }]} />
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Travel gallery moments from <span className="shine-text italic">every road</span>.
          </>
        }
        subtitle="Har tasveer ek yaadgar safar ki kahani kehti hai — moments captured straight from our travellers' journeys."
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
