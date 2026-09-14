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
import { organizationSchema, pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "Travel Agency in Kanpur | Best Cab Booking & Car Rental - Rudra Tours",
      description:
        "Rudra Tours & Travels is Kanpur's best travel agency since 2014. Book 24x7 taxi service, cab booking in Kanpur, car rental, outstation taxi, airport transfer & tempo traveller on rent.",
      path: "/",
      image: heroSuv,
      breadcrumbs: [{ name: "Home", path: "/" }],
      schema: organizationSchema(),
      faqs: [
        {
          question: "Which is the best travel agency in Kanpur?",
          answer:
            "Rudra Tours & Travels is rated 4.9/5 and is recognized as the best travel agency in Kanpur since 2014, offering customized all-India tour packages, spiritual pilgrimage tours, and 24x7 local support.",
        },
        {
          question: "How can I book a taxi service or cab in Kanpur?",
          answer:
            "You can call or WhatsApp our Kanpur booking desk 24x7 at +91 70145 47628 for instant cab booking in Kanpur with on-time doorstep pickup across all Kanpur localities.",
        },
        {
          question: "Do you offer outstation taxi and airport taxi from Kanpur?",
          answer:
            "Yes, we offer one-way and round-trip outstation taxi service from Kanpur to Lucknow, Ayodhya, Prayagraj, Varanasi, Agra, Delhi NCR, and 24x7 airport taxi drops to Lucknow Amausi Airport (LKO).",
        },
        {
          question: "What vehicle options are available for car rental in Kanpur?",
          answer:
            "Our car rental fleet in Kanpur includes Swift Dzire, Maruti Ertiga, Toyota Innova Crysta, Toyota Fortuner, luxury wedding cars (Audi, BMW, Mercedes), and 12, 17, and 26-seater Tempo Travellers.",
        },
        {
          question: "Do you provide wedding car rental and tempo traveller in Kanpur?",
          answer:
            "Yes, we provide decorated luxury wedding car rental in Kanpur for bridal and groom entry, as well as 12 to 26-seater AC Tempo Travellers for wedding baraat and pilgrimage groups.",
        },
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
