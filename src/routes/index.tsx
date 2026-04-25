import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Star, Phone, Clock, Sparkles, Shield, Smile, HeartPulse,
  Stethoscope, Award, Users, CheckCircle2, Quote, Compass,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import heroDentists from "@/assets/hero-dentists.png";
import about1Img from "@/assets/clinic-memmeri.png";
import about2Img from "@/assets/clinic-tamendjari.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dentorama Dental Center — Gentle Dental Excellence" },
      { name: "description", content: "Modern dental clinic offering cleanings, implants, whitening, and orthodontics with a calm, gentle approach." },
      { property: "og:title", content: "Dentorama Dental Center" },
      { property: "og:description", content: "Premium dental care with a gentle touch." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80" },
    ],
  }),
  component: HomePage,
});

const HERO = heroDentists;
const ABOUT1 = about1Img;
const ABOUT2 = about2Img;
const DOCTOR = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&q=80";

const services = [
  { icon: Smile, title: "Teeth Whitening", desc: "Brighten your smile by several shades in a single visit." },
  { icon: Shield, title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth." },
  { icon: HeartPulse, title: "Root Canal Therapy", desc: "Pain-free procedures using the latest sedation tech." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Veneers and reshaping for a flawless, photogenic smile." },
  { icon: Stethoscope, title: "Pediatric Dentistry", desc: "Gentle, friendly care designed for little patients." },
  { icon: Award, title: "Orthodontics", desc: "Invisible aligners and braces for perfect alignment." },
];

const testimonials = [
  { name: "Aarav Mehta", role: "Patient", quote: "The most relaxed dentist visit I've ever had. The team is genuinely kind.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80" },
  { name: "Sara Khan", role: "Patient", quote: "My smile transformation was beyond what I imagined. Highly recommended!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80" },
  { name: "Rohit Sharma", role: "Patient", quote: "Modern equipment, calm vibe, and zero pain. Dr. Priya is amazing.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* floating decor */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-8 h-3 w-3 rotate-45 bg-primary/40 animate-float" />
          <div className="absolute top-40 right-10 h-4 w-4 rounded-full bg-accent/50 animate-float-slow" />
          <div className="absolute bottom-32 left-1/4 text-primary/30 text-3xl animate-float">+</div>
          <div className="absolute top-1/3 right-1/3 text-primary/20 text-5xl animate-float-slow">+</div>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-10 pb-24 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium text-primary shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" /> Trusted by 5,000+ happy smiles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
            >
              Experience <span className="text-primary">Dental Excellence</span> with a{" "}
              <span className="text-primary">Gentle Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-base lg:text-lg text-muted-foreground max-w-xl"
            >
              From routine cleanings to full smile makeovers, our award-winning team blends
              modern technology with genuine care — so every visit feels effortless.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-6 pr-2 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105 transition-transform">
                Make An Appointment
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card/60 backdrop-blur pl-6 pr-2 py-2.5 text-sm font-semibold text-primary hover:border-primary hover:bg-card transition-colors">
                Explore Our Site
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Compass className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="mt-10 pt-6 border-t border-border flex items-center gap-4"
            >
              <div>
                <p className="text-sm font-semibold">Google Rating <span className="text-amber-500">5.0</span></p>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="ml-2 text-xs text-muted-foreground">Based on 492 reviews</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero image with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-primary opacity-20 blur-3xl" />
            <img src={HERO} alt="Smiling dentist" className="relative h-full w-full rounded-[3rem] object-cover shadow-card" />

            {/* floating icon bubbles */}
            <motion.div className="absolute -top-4 -right-4 grid h-16 w-16 place-items-center rounded-full bg-card shadow-card animate-float">
              <Smile className="h-7 w-7 text-primary" />
            </motion.div>
            <motion.div className="absolute top-1/3 -left-6 grid h-14 w-14 place-items-center rounded-full bg-card shadow-card animate-float-slow">
              <Shield className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.div className="absolute bottom-20 -right-6 grid h-14 w-14 place-items-center rounded-full bg-card shadow-card animate-float">
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>

            {/* doctor card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
              className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-card"
            >
              <img src={DOCTOR} alt="Dr. Memmeri" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold">Dr. Memmeri & Dr. Tamendjari</p>
                <p className="text-xs text-muted-foreground">Founders</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA strip */}
        <div className="bg-dark-section text-dark-section-foreground">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary"><Phone className="h-5 w-5" /></span>
              <div>
                <p className="font-semibold">Need Dental Services?</p>
                <p className="text-sm text-dark-section-foreground/70">Call: 06 72 68 09 13</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary"><Clock className="h-5 w-5" /></span>
              <div>
                <p className="font-semibold">Opening Hours</p>
                <p className="text-sm text-dark-section-foreground/70">Sam–Jeu 9h–22h · Ven 14h–20h</p>
              </div>
            </div>
            <Link to="/contact" className="justify-self-start lg:justify-self-end inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-5 pr-2 py-2 text-sm font-semibold shadow-soft hover:scale-105 transition-transform">
              Make An Appointment
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground text-primary"><ArrowUpRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={ABOUT1} alt="Clinic" className="rounded-3xl object-cover h-72 w-full shadow-card" />
              <img src={ABOUT2} alt="Treatment" className="rounded-3xl object-cover h-72 w-full mt-10 shadow-card" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 grid h-28 w-28 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft animate-spin-slow">
              <div className="text-center leading-tight">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-[10px] uppercase tracking-wide">Years Exp.</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About Us</p>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold leading-tight">
                Caring for smiles, <span className="text-primary">one patient at a time</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                At Dentorama, we believe great dentistry starts with listening. Our calming
                environment, board-certified specialists, and modern tools combine to make
                every visit comfortable, transparent, and effective.
              </p>
            </Reveal>
            <StaggerGroup className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Board-certified specialists",
                "Painless, sedation-friendly care",
                "State-of-the-art equipment",
                "Transparent pricing",
              ].map((t) => (
                <StaggerItem key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{t}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={0.3}>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-5 pr-2 py-2 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105 transition-transform">
                Learn More
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-foreground text-primary"><ArrowUpRight className="h-4 w-4" /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Services</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Complete dental care under one roof</h2>
            <p className="mt-4 text-muted-foreground">From preventive checkups to advanced cosmetic procedures.</p>
          </Reveal>

          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group h-full rounded-3xl bg-card p-7 shadow-card border border-border/50 hover:border-primary/40 transition-colors"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground group-hover:rotate-6 transition-transform">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read more <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WHY US — stats */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: Users, n: "5,000+", l: "Happy Patients" },
            { icon: Award, n: "15+", l: "Years Experience" },
            { icon: Stethoscope, n: "20+", l: "Expert Specialists" },
            { icon: Star, n: "4.9", l: "Average Rating" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 text-center shadow-soft">
                <s.icon className="h-8 w-8 mx-auto opacity-90" />
                <p className="mt-4 text-4xl font-bold">{s.n}</p>
                <p className="mt-1 text-sm opacity-90">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Testimonials</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">What our patients say</h2>
          </Reveal>

          <StaggerGroup className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl bg-card p-7 shadow-card border border-border/50">
                  <Quote className="h-7 w-7 text-primary/40" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                    <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                    <div className="ml-auto flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-primary text-primary-foreground px-8 py-14 lg:px-16 lg:py-20 text-center shadow-soft">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl animate-float-slow" />
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
                Ready to give your smile the care it deserves?
              </h2>
              <p className="mt-4 opacity-90 max-w-xl mx-auto">Book a consultation today and meet the team that puts your comfort first.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground pl-6 pr-2 py-2.5 text-sm font-semibold text-primary shadow-md hover:scale-105 transition-transform">
                Book Appointment
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowUpRight className="h-4 w-4" /></span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
