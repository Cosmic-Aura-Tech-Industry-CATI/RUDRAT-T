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
      title: "Travel Agency in Kanpur | Tour Packages & Cab Booking | Rudra Tours",
      description:
        "Kanpur's trusted travel agency since 2014. Book 24x7 taxi service, car rental, tempo travellers, luxury wedding cars & customized India tour packages with Rudra Tours & Travels.",
      path: "/",
      image: heroSuv,
      breadcrumbs: [{ name: "Home", path: "/" }],
      schema: organizationSchema(),
      faqs: [
        {
          question: "Which is the best travel agency and cab service in Kanpur?",
          answer:
            "Rudra Tours & Travels is rated 4.9/5 and is one of Kanpur's most trusted travel agencies and cab providers since 2014, offering 24x7 chauffeur-driven sedans, SUVs, Innova Crysta, and tempo travellers with transparent pricing.",
        },
        {
          question: "Can I book outstation cabs from Kanpur to Lucknow, Ayodhya, Varanasi, or Delhi?",
          answer:
            "Yes, we provide one-way and round-trip outstation cabs from Kanpur to Lucknow, Ayodhya, Prayagraj, Varanasi, Agra, Delhi NCR, and all major cities across Uttar Pradesh with on-time doorstep pickup.",
        },
        {
          question: "What luxury cars are available for wedding rentals in Kanpur?",
          answer:
            "Our luxury wedding fleet in Kanpur includes Audi, BMW, Mercedes-Benz, Fortuner, Innova Crysta, and vintage cars, along with 12 to 26 seater tempo travellers for baraat and guest transport.",
        },
        {
          question: "How can I book a cab or custom tour package from Kanpur?",
          answer:
            "You can call or WhatsApp us 24x7 at +91 70145 47628 / +91 93361 17414 or submit an inquiry through our website for instant quotes and confirmed booking.",
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
