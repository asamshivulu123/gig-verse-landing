import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";
import { WHATSAPP_LINK } from "@/lib/constants";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-hero bg-mesh">
      {/* Glow orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-primary-deep mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              WhatsApp-First Gig Platform
            </motion.div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight">
              Earn Money with{" "}
              <span className="text-gradient">Quick Gigs</span>{" "}
              Near You
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join Gig Verse on WhatsApp and start earning through short-time gigs instantly. No signup. No fees. Just opportunities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-base shadow-glow hover:shadow-elegant hover:scale-105 transition-all w-full sm:w-auto justify-center"
              >
                Join Now on WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-2xl font-semibold text-base hover:scale-105 transition-all w-full sm:w-auto justify-center"
              >
                How It Works
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium"><span className="font-bold text-foreground">2,500+</span> Active Students</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium"><span className="font-bold text-foreground">10K+</span> Gigs Posted</span>
              </div>
            </div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-glow blur-2xl" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={heroImg}
                alt="Students earning money through Gig Verse on WhatsApp"
                width={1024}
                height={1024}
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-8 -left-2 sm:left-4 glass-card rounded-2xl px-4 py-3 shadow-elegant hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">₹</span>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Earned today</div>
                  <div className="font-bold text-foreground">₹ 850</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 -right-2 sm:right-4 glass-card rounded-2xl px-4 py-3 shadow-elegant hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="text-sm font-semibold">New gig nearby!</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
