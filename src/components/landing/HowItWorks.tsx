import { motion } from "framer-motion";
import { MessageCircle, Bell, Wallet } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Join WhatsApp Community",
    desc: "Click 'Join Now' to enter our exclusive WhatsApp community in seconds.",
    step: "01",
  },
  {
    icon: Bell,
    title: "Get Daily Gig Updates",
    desc: "Receive verified gig opportunities directly on WhatsApp — no app needed.",
    step: "02",
  },
  {
    icon: Wallet,
    title: "Apply & Earn Instantly",
    desc: "Pick gigs that fit your schedule, complete them, and get paid quickly.",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 lg:py-28 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            How It Works
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Start earning in <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signup to payout — we kept it ridiculously simple.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative glass-card rounded-3xl p-8 hover:shadow-elegant hover:-translate-y-1 transition-all group"
            >
              <div className="absolute -top-4 right-6 px-3 py-1 rounded-full bg-gradient-cta text-primary-foreground text-xs font-bold shadow-glow">
                STEP {s.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
