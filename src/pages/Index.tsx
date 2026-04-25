import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ForBusinesses from "@/components/landing/ForBusinesses";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import GigTypes from "@/components/landing/GigTypes";
import Clients from "@/components/landing/Clients";
import Testimonials from "@/components/landing/Testimonials";
import CTA from "@/components/landing/CTA";
import Contact from "@/components/landing/Contact";
import BusinessContactForm from "@/components/landing/BusinessContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const title = "Gig Verse — Find Quick Gigs & Hire Trained Manpower in India";
    const description =
      "Gig Verse connects students with quick part-time gigs near them and helps businesses hire trained, verified manpower on demand — all via WhatsApp.";
    const url = "https://gig-verse-landing.lovable.app/";

    document.title = title;

    const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // JSON-LD: Service schema for the homepage
    const ldId = "ld-gigverse-service";
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Gig Verse",
      serviceType: "Gig & Manpower Marketplace",
      provider: {
        "@type": "Organization",
        name: "Gig Verse",
        url,
        email: "contact.gigverse@gmail.com",
        telephone: "+91-81791-03796",
      },
      areaServed: { "@type": "Country", name: "India" },
      description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    });
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <ForBusinesses />
      <Clients />
      <HowItWorks />
      <Features />
      <GigTypes />
      <Testimonials />
      <CTA />
      <Contact />
      <BusinessContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
