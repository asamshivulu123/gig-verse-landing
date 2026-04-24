import { motion } from "framer-motion";
import { PartyPopper, Bike, Megaphone, Database, Store } from "lucide-react";

const gigs = [
  { icon: PartyPopper, title: "Event Helper", desc: "Assist at concerts, weddings, and corporate events.", color: "from-pink-500/20 to-rose-500/20" },
  { icon: Bike, title: "Delivery Tasks", desc: "Quick local pickups and deliveries on your schedule.", color: "from-amber-500/20 to-orange-500/20" },
  { icon: Megaphone, title: "Social Media Work", desc: "Content creation, posting, and engagement gigs.", color: "from-violet-500/20 to-purple-500/20" },
  { icon: Database, title: "Data Entry", desc: "Simple typing and data tasks you can do remotely.", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Store, title: "Shop Assistance", desc: "Help local shops during peak hours and events.", color: "from-emerald-500/20 to-teal-500/20" },
];

const GigTypes = () => {
  return (
    <section id="gigs" className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Types of Gigs
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Find work that <span className="text-gradient">fits your vibe</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From event hustles to remote tasks — there's something for every student.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gigs.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl p-8 overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all glass-card hover:shadow-elegant"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform">
                  <g.icon className="w-7 h-7 text-primary-deep" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{g.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{g.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Promo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-3xl p-8 bg-gradient-cta text-primary-foreground relative overflow-hidden flex flex-col justify-center shadow-glow"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <h3 className="font-display font-bold text-2xl mb-2 relative">+ More gigs every day</h3>
            <p className="opacity-90 text-sm relative">New opportunities posted daily across cities. Join the community to never miss out.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GigTypes;
