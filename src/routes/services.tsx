import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Smile, Shield, HeartPulse, Sparkles, Stethoscope, Award, Activity, Baby, Scan,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dentorama Dental Center" },
      { name: "description", content: "Whitening, implants, root canals, orthodontics, pediatric and cosmetic dentistry — full-service care." },
      { property: "og:title", content: "Dental Services at Dentorama" },
      { property: "og:description", content: "Complete dental care under one roof." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80" },
    ],
  }),
  component: ServicesPage,
});

const all = [
  { icon: Smile, title: "Teeth Whitening", desc: "Instant brightness with safe, enamel-friendly whitening." },
  { icon: Shield, title: "Dental Implants", desc: "Titanium implants restore function and aesthetics for life." },
  { icon: HeartPulse, title: "Root Canal", desc: "Pain-free endodontic care using precision rotary tools." },
  { icon: Sparkles, title: "Veneers", desc: "Hand-crafted porcelain veneers for a flawless smile." },
  { icon: Stethoscope, title: "General Checkups", desc: "Routine cleanings, exams, and preventive guidance." },
  { icon: Award, title: "Orthodontics", desc: "Invisible aligners and traditional braces options." },
  { icon: Activity, title: "Gum Treatment", desc: "Periodontal therapy to keep gums healthy and strong." },
  { icon: Baby, title: "Pediatric Care", desc: "Friendly, fun dentistry for your littlest patients." },
  { icon: Scan, title: "Digital X-Ray", desc: "Low-radiation, instant 3D imaging for accurate diagnosis." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Services</p>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold">Every smile deserves expert care</h1>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              Explore our full range of treatments — preventive, restorative, and cosmetic — all delivered with our signature gentle touch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {all.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div whileHover={{ y: -8 }} className="group h-full rounded-3xl bg-card p-7 shadow-card border border-border/50 hover:border-primary/40 transition-colors">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground group-hover:rotate-6 transition-transform">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Book now <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="rounded-[2.5rem] bg-gradient-primary text-primary-foreground p-10 lg:p-16 text-center shadow-soft">
              <h2 className="text-3xl lg:text-4xl font-bold">Not sure which treatment is right for you?</h2>
              <p className="mt-4 opacity-90">Schedule a free consultation and we'll guide you.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground pl-6 pr-2 py-2.5 text-sm font-semibold text-primary hover:scale-105 transition-transform">
                Book Free Consultation
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowUpRight className="h-4 w-4" /></span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
