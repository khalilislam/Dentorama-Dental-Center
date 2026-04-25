import { Link } from "@tanstack/react-router";
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

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
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
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
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>+(91) 8826-200939</span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>hello@dentorama.com</span></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>24 Wellness Avenue, New Delhi</span></li>
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
