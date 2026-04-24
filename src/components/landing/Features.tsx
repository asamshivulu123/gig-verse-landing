import { motion } from "framer-motion";
import { Bell, MapPin, Clock, GraduationCap, ShieldCheck } from "lucide-react";

const features = [
  { icon: Bell, title: "Instant Gig Notifications", desc: "Be the first to know when new gigs drop in your area." },
  { icon: MapPin, title: "Nearby Opportunities", desc: "Discover gigs around your campus, neighborhood, or city." },
  { icon: Clock, title: "Flexible Working Hours", desc: "Pick gigs that match your schedule — work when you want." },
  { icon: GraduationCap, title: "Beginner-Friendly Jobs", desc: "No experience? No problem. Most gigs are perfect for students." },
  { icon: ShieldCheck, title: "Verified Gigs Only", desc: "Every gig is reviewed and posted by our admin team." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gradient-hero bg-mesh relative overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Why Gig Verse
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Built for students, <span className="text-gradient">made simple</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to start earning — without the hassle of apps, forms, or signups.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-3xl p-7 hover:shadow-elegant hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5 group-hover:bg-gradient-primary transition-all">
                <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
