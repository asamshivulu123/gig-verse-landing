import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const JOTFORM_ID = "261141448390454";

const BusinessContactForm = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(720);
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    // Reload iframe with cache-busting param to fully reset the form state.
    iframe.src = `https://form.jotform.com/${JOTFORM_ID}?_=${Date.now()}`;
    setSubmitted(false);
  };

  useEffect(() => {
    // JotForm posts messages from its iframe — listen for resize + submission events.
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      if (!e.origin.includes("jotform")) return;

      const parts = e.data.split(":");
      // Resize: "setHeight:680:25xxxxxxx"
      if (parts[0] === "setHeight") {
        const h = parseInt(parts[1], 10);
        if (!Number.isNaN(h)) setHeight(h);
        return;
      }

      // Submission: JotForm sends a few different messages on submit.
      const isSubmit =
        e.data.includes("submission-completed") ||
        e.data.includes("formSubmitted") ||
        parts[0] === "scrollIntoView"; // sent right after a successful submit

      if (isSubmit && !submitted) {
        setSubmitted(true);
        toast.success("Thanks! Your enquiry has been received.", {
          description: "Our team will reach out to you shortly.",
        });
        // Auto-refresh the form after a short delay so it's ready for the next visitor.
        setTimeout(() => {
          resetForm();
        }, 4000);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [submitted]);

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
          className="glass-card rounded-3xl p-2 sm:p-4 overflow-hidden relative"
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

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm rounded-3xl px-6"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-center max-w-md"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/15 text-primary mb-5">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                    Enquiry submitted!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thanks for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-glow hover:shadow-elegant hover:scale-105 transition-all"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessContactForm;