import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { SearchBar } from "@/components/SearchBar";
import { Destinations } from "@/components/Destinations";
import { SEOHub } from "@/components/SEOHub";
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
import { pageSeo, breadcrumbLdJson, faqLdJson } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageSeo({
      title: "Rudra Tours & Travels — Best Cab Service, Car Rental & Tour Packages in Kanpur",
      description:
        "Book the best cab service & car rental in Kanpur with Rudra Tours & Travels. 24x7 taxi booking, Innova Crysta, tempo travellers, wedding luxury cars & UP tour packages.",
      path: "/",
      image: heroSuv,
    }),
    ...breadcrumbLdJson([{ name: "Home", path: "/" }]),
    ...faqLdJson([
      {
        question: "Which is the best cab service in Kanpur for local and outstation travel?",
        answer:
          "Rudra Tours & Travels is rated 4.9/5 and is one of Kanpur's most trusted cab services, offering 24x7 chauffeur-driven sedans, SUVs, Innova Crysta, and tempo travellers with transparent pricing.",
      },
      {
        question: "Can I book a cab from Kanpur to Lucknow, Ayodhya, Varanasi, or Delhi?",
        answer:
          "Yes, we provide one-way and round-trip outstation cabs from Kanpur to Lucknow, Ayodhya, Prayagraj, Varanasi, Agra, Delhi NCR, and all major cities across Uttar Pradesh.",
      },
      {
        question: "Do you offer luxury wedding car rentals in Kanpur?",
        answer:
          "Yes, we offer decorated luxury cars including Audi A6, Audi Q7, BMW 5-Series, Mercedes-Benz, and Fortuner for wedding entries, groom travel, and guest convoys.",
      },
      {
        question: "How can I book a taxi or car rental with Rudra Tours?",
        answer:
          "You can book instantly by calling +91 70145 47628, sending a WhatsApp message, or submitting our online trip inquiry form on the website.",
      },
    ]),
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
      <SEOHub />
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
