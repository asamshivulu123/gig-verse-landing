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
    document.title = "Gig Verse — Earn Money with Quick Gigs Near You";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", "Join Gig Verse on WhatsApp and start earning through short-time gigs near you. Verified gigs, flexible hours, instant updates — no signup needed.");
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
