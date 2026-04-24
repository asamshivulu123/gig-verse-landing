import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const CTA = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] bg-gradient-cta p-10 sm:p-14 lg:p-20 overflow-hidden text-center shadow-glow"
        >
          {/* Decorative orbs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-2xl rotate-12 hidden lg:block" />
          <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-white/20 rounded-full hidden lg:block" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-primary-foreground text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              Free to Join
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
              Start Earning Today
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
              Join our WhatsApp community and get instant gig updates delivered straight to your phone.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-primary-deep px-8 py-4 rounded-2xl font-bold text-base shadow-elegant hover:scale-105 transition-all"
            >
              Join Now on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
