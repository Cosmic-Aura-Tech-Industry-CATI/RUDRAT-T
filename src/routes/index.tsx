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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rudra Tours & Travels — Plan Your Next Trip Across India" },
      { name: "description", content: "Friendly Kanpur-based travel company. Handpicked tour packages, comfortable cars, decorated wedding cars and easy, tension-free journeys all across India." },
      { property: "og:title", content: "Rudra Tours & Travels — Plan Your Next Trip Across India" },
      { property: "og:description", content: "Handpicked tours, comfortable cars and yaadgaar wedding travel — all across India." },
    ],
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
