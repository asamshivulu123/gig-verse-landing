import { Zap, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <a href="#" className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-xl">
                Gig <span className="text-gradient">Verse</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Find quick work. Earn instantly. The WhatsApp-first gig platform built for students.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#how" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#gigs" className="hover:text-primary transition-colors">Gig Types</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> example@email.com</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Gig Verse. All rights reserved.</div>
          <div>Made with 💚 for hustlers.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
