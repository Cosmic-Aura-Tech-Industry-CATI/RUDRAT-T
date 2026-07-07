import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { Destinations } from "@/components/Destinations";
import { Fleet } from "@/components/Fleet";
import { WhyChoose } from "@/components/WhyChoose";
import { IndiaMap } from "@/components/IndiaMap";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import heroSuv from "@/assets/hero-suv.jpg";
import { pageSeo, breadcrumbLdJson } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageSeo({
      title: "Rudra Tours and Travels | India Tour Packages",
      description: "Plan India tour packages, domestic holidays, vehicle rentals and wedding travel with Rudra Tours and Travels in Kanpur.",
      path: "/",
      image: heroSuv,
    }),
    ...breadcrumbLdJson([{ name: "Home", path: "/" }]),
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <TopBar />
      <Nav />
      <Hero />
      <SearchBar />
      <Destinations />
      <Fleet />
      <WhyChoose />
      <IndiaMap />
      <Gallery />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
      <FloatingActions />
    </main>
  );
}
