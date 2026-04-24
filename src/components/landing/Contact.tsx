import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Users } from "lucide-react";
import { WHATSAPP_LINK, CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/constants";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-hero bg-mesh">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Get in Touch
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Have a question? <span className="text-gradient">We're here</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach out to the Gig Verse Team — we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Users, label: "Team", value: "Gig Verse Team" },
            { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF },
            { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: CONTACT_PHONE_HREF },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href || "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-3xl p-7 text-center hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
                <c.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{c.label}</div>
              <div className="font-display font-bold text-lg">{c.value}</div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-8 py-4 rounded-2xl font-semibold shadow-glow hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Message us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
