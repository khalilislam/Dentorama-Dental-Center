import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-section text-dark-section-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="text-lg font-bold">Dentorama</span>
          </Link>
          <p className="mt-4 text-sm text-dark-section-foreground/70 leading-relaxed">
            Premium dental care delivered with a gentle touch. Your smile, our craft.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.instagram.com/dentorama_dental_center" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61555264380391" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-dark-section-foreground/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-dark-section-foreground/70">
            {["Teeth Whitening", "Root Canal", "Dental Implants", "Orthodontics", "Pediatric Care"].map((s) => (
              <li key={s} className="hover:text-accent transition-colors cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-dark-section-foreground/70">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>06 72 68 09 13</span></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /><a href="https://maps.app.goo.gl/hmKmPkoucFCkG5Tq5" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">View on Google Maps</a></li>
            <li className="pt-2 text-dark-section-foreground/80">
              <p className="font-semibold text-dark-section-foreground">Hours</p>
              <p className="mt-1">Sam–Jeu : 09h–22h</p>
              <p>Vendredi : 14h–20h</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-dark-section-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Dentorama Dental Center. All rights reserved.</p>
          <p>Crafted with care for healthier smiles.</p>
        </div>
      </div>
    </footer>
  );
}
