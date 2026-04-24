import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, Users, Sparkles, Mail, Zap, Target, Clock, BadgeCheck, TrendingUp } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from "@/lib/constants";

const perks = [
  {
    icon: Users,
    title: "Trained Manpower",
    desc: "Pre-vetted students ready to deliver — briefed, reliable, and quick to ramp up.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    desc: "Every gig is reviewed and rated. Consistent output, every single time.",
  },
  {
    icon: Briefcase,
    title: "Business-Ready",
    desc: "From event staff to digital tasks — we match the right talent to your needs.",
  },
  {
    icon: Sparkles,
    title: "Effective & Affordable",
    desc: "Flexible hiring that fits your scale and budget — without the overhead.",
  },
];

const helps = [
  {
    icon: Zap,
    title: "Hire in hours, not weeks",
    desc: "Skip the long recruitment cycle. Post a requirement and get matched with ready talent within hours through our WhatsApp network.",
  },
  {
    icon: Target,
    title: "Right-fit, every time",
    desc: "We match candidates by skill, location, and availability — so you get people who actually fit the role and show up prepared.",
  },
  {
    icon: Clock,
    title: "Scale up or down on demand",
    desc: "Need 2 people today and 20 next week? Flex your workforce around real demand without long-term commitments.",
  },
  {
    icon: BadgeCheck,
    title: "Verified, accountable talent",
    desc: "Every gigger is verified and rated. Performance is tracked across gigs, so quality stays high and surprises stay low.",
  },
  {
    icon: TrendingUp,
    title: "Lower cost, higher output",
    desc: "No agency markups, no idle payroll. Pay for the work that gets done — and reinvest the savings into growth.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-end support",
    desc: "From briefing to coordination on the ground, our team stays in the loop so your operations run smoothly.",
  },
];

const ForBusinesses = () => {
  return (
    <section id="businesses" className="py-20 sm:py-28 relative">
      <div className="container">
        <div className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <Briefcase className="w-3.5 h-3.5" /> For Businesses
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Get <span className="text-gradient">quality, trained manpower</span> on demand
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 max-w-xl">
                Meet your business requirements effectively with a vetted network of student talent — fast, flexible, and dependable.
              </p>

              <a
                href={CONTACT_EMAIL_HREF}
                className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-glow hover:shadow-elegant hover:scale-105 transition-all"
              >
                <Mail className="w-4 h-4" />
                Email us — {CONTACT_EMAIL}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {perks.map((p) => (
                <div
                  key={p.title}
                  className="glass rounded-2xl p-5 hover:scale-[1.02] transition-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-3">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Why Gig Verse for Business */}
          <div className="relative mt-16 sm:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Why Gig Verse
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                Built to help your business <span className="text-gradient">move faster</span>
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg">
                Whether you're running a campus event, a weekend campaign, a delivery push, or a digital sprint — Gig Verse plugs you into a community of motivated, trained students ready to get work done. No bloated processes. No wasted time. Just dependable talent, on tap.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {helps.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass rounded-2xl p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-cta text-primary-foreground flex items-center justify-center mb-4 shadow-glow">
                    <h.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-1.5">{h.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Ready to scale your team the smart way? Let's talk about your requirement.
              </p>
              <a
                href={CONTACT_EMAIL_HREF}
                className="inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-glow hover:shadow-elegant hover:scale-105 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact us at {CONTACT_EMAIL}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;