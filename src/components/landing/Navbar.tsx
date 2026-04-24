import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/assets/gigverse-logo.png";

const links = [
  { label: "How It Works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Gigs", href: "#gigs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <div className={`glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? "shadow-elegant" : "shadow-soft"}`}>
          <a href="#" className="flex items-center gap-2 group" aria-label="Gig Verse home">
            <img src={logo} alt="Gig Verse logo" className="h-9 w-9 object-contain" />
            <span className="font-display font-bold text-xl tracking-tight">
              Gig <span className="text-gradient">Verse</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm shadow-glow hover:shadow-elegant hover:scale-105 transition-all"
            >
              Join Now
            </a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden glass-card rounded-2xl mt-2 p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden mt-2 inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground px-5 py-3 rounded-xl font-semibold text-sm shadow-glow"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
