import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const JOTFORM_ID = "261141448390454";

const BusinessContactForm = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(720);

  useEffect(() => {
    // JotForm posts iframe height messages — listen and resize so there's no inner scrollbar.
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      if (!e.origin.includes("jotform")) return;
      // Format: "setHeight:680:25xxxxxxx"
      const parts = e.data.split(":");
      if (parts[0] === "setHeight") {
        const h = parseInt(parts[1], 10);
        if (!Number.isNaN(h)) setHeight(h);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="business-contact" className="py-20 sm:py-28 relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" /> Business Enquiry
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
            Tell us what you <span className="text-gradient">need</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Share your requirement and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-3xl p-2 sm:p-4 overflow-hidden"
        >
          <iframe
            ref={iframeRef}
            id={`JotFormIFrame-${JOTFORM_ID}`}
            title="Gig Verse — Business Contact Form"
            src={`https://form.jotform.com/${JOTFORM_ID}`}
            allow="geolocation; microphone; camera; fullscreen"
            className="w-full rounded-2xl bg-white"
            style={{ height, minHeight: 600, border: 0 }}
            scrolling="no"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessContactForm;