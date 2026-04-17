import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-ball shadow-glow" />
            <span className="font-display text-xl tracking-wider">MACUSHLA CRICKET ACADEMY</span>
          </div>
          <p className="text-sm text-secondary-foreground/70 max-w-sm">
            By Shivil Kaushik. A premier cricket coaching destination in HSR Layout, Bengaluru —
            developing players from grassroots to professional level.
          </p>
          <a
            href="https://www.instagram.com/macushlasports/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cream hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" /> @macushlasports
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-display text-base tracking-wider text-cream">Visit</h4>
          <p className="flex gap-2 text-secondary-foreground/75">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
            Jakkasandra Cross Rd, Sector 6, HSR Layout, Bengaluru — 560102
          </p>
          <p className="flex gap-2 text-secondary-foreground/75">
            <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /> +91 80 XXXX XXXX
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h4 className="font-display text-base tracking-wider text-cream">Hours</h4>
          <p className="flex gap-2 text-secondary-foreground/75">
            <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
            <span>
              Mon: 4 – 9 PM<br />
              Tue – Fri: 7 – 10 PM<br />
              Sat: 2 – 4, 6 – 9 PM<br />
              Sun: 6 AM – 4 PM, 6 – 9 PM
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Macushla Cricket Academy. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/programs" className="hover:text-primary">Programs</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
