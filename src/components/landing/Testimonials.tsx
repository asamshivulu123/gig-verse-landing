import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Engineering Student, Delhi",
    review: "Made ₹3,500 in my first week helping at a music festival. Super easy to find gigs through WhatsApp!",
    initials: "AS",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Priya Patel",
    role: "BBA Student, Mumbai",
    review: "I love how flexible it is. I pick gigs between my classes and pay my own rent now. Game changer!",
    initials: "PP",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Rohan Mehta",
    role: "MCA Student, Pune",
    review: "Verified gigs only — no scams. Got paid the same day for a delivery task. Highly recommend.",
    initials: "RM",
    color: "from-emerald-500 to-teal-500",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Students <span className="text-gradient">love Gig Verse</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from students earning real money.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card rounded-3xl p-7 hover:shadow-elegant transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold shadow-soft`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
