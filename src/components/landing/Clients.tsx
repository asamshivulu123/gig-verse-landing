import { motion } from "framer-motion";
import foundersHub from "@/assets/clients/founders-hub.png";
import foundersMic from "@/assets/clients/founders-mic.jpg";
import studentSpot from "@/assets/clients/student-spot.jpg";
import jatayuvAi from "@/assets/clients/jatayuv-ai.jpg";
import consistencyAi from "@/assets/clients/consistency-ai.jpg";

const clients = [
  { name: "Founders Hub", logo: foundersHub },
  { name: "Founders Mic", logo: foundersMic },
  { name: "The Student Spot", logo: studentSpot },
  { name: "Jatayuv AI", logo: jatayuvAi },
  { name: "Consistency.AI", logo: consistencyAi },
];

const Clients = () => {
  return (
    <section className="py-16 lg:py-20 bg-secondary/30 border-y border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-3">
            Trusted by <span className="text-gradient">Growing Businesses</span>
          </h2>
          <p className="text-muted-foreground">
            Startups and local businesses use Gig Verse to find quick manpower.
          </p>
        </motion.div>

        <div className="relative overflow-hidden mask-fade">
          <div className="flex marquee gap-12 w-max">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[200px] h-24 px-6 rounded-2xl glass-card bg-white/95 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  loading="lazy"
                  className="max-h-16 max-w-[160px] w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-secondary/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-secondary/80 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
