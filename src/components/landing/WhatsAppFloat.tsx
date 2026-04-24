import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const WhatsAppFloat = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Join Gig Verse on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
    className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-cta flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
  >
    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
    <MessageCircle className="w-7 h-7 text-primary-foreground relative" fill="currentColor" />
  </motion.a>
);

export default WhatsAppFloat;
