import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Dentorama Dental Center" },
      { name: "description", content: "Book an appointment or visit our clinic. Open Mon–Sat 9 AM to 9 PM." },
      { property: "og:title", content: "Contact Dentorama" },
      { property: "og:description", content: "Book an appointment with our gentle dental team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Contact</p>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold">Let's start your smile journey</h1>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
              Reach out and our team will get back within a few hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Phone, t: "Phone", d: "+(91) 8826-200939" },
            { icon: Mail, t: "Email", d: "hello@dentorama.com" },
            { icon: MapPin, t: "Location", d: "24 Wellness Avenue, New Delhi" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="rounded-3xl bg-card p-7 shadow-card border border-border/50 h-full">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-12 grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-3xl bg-card p-8 shadow-card border border-border/50 space-y-4">
              <h2 className="text-2xl font-bold">Make an appointment</h2>
              <p className="text-sm text-muted-foreground">Fill the form and we'll confirm your slot.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                <input required type="tel" placeholder="Phone Number" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <input required type="email" placeholder="Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
                <option>Select a service</option>
                <option>Teeth Whitening</option>
                <option>Dental Implants</option>
                <option>Root Canal</option>
                <option>Orthodontics</option>
                <option>General Checkup</option>
              </select>
              <textarea rows={4} placeholder="Message (optional)" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-6 pr-2 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft"
              >
                {sent ? "Sent!" : "Send Request"}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary">
                  {sent ? <CheckCircle2 className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </span>
              </motion.button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden shadow-card border border-border/50">
              <iframe
                title="Map"
                className="w-full h-80"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.20%2C28.60%2C77.25%2C28.65&layer=mapnik"
              />
            </div>
            <div className="mt-6 rounded-3xl bg-dark-section text-dark-section-foreground p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary"><Clock className="h-5 w-5" /></span>
                <h3 className="font-bold">Opening Hours</h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-dark-section-foreground/80">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Mon – Fri</span><span>9:00 AM – 9:00 PM</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span><span>9:00 AM – 9:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
