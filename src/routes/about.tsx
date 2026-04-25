import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, HeartPulse, Smile, Users, CheckCircle2 } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import drMemmeri from "@/assets/dr-memmeri.png";
import drTamendjari from "@/assets/dr-tamendjari.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dentorama Dental Center" },
      { name: "description", content: "Meet the Dentorama team — board-certified dentists committed to gentle, modern dental care." },
      { property: "og:title", content: "About Dentorama" },
      { property: "og:description", content: "Meet the team behind gentle dental excellence." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80" },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Dr. Memmeri", role: "Co-Founder · Dentiste", img: drMemmeri },
  { name: "Dr. Tamendjari", role: "Co-Founder · Dentiste", img: drTamendjari },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">About Us</p>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold">A clinic built around your comfort</h1>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              Founded with a mission to make dentistry stress-free, Dentorama combines world-class training
              with a warm, welcoming environment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" alt="Clinic" className="rounded-3xl object-cover w-full aspect-[4/3] shadow-card" />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-3xl lg:text-4xl font-bold">Our story</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                What began as a single chair clinic has grown into a multi-specialty center serving thousands of families.
                We've stayed true to our founding principle: every patient deserves time, transparency, and tenderness.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From digital scanners to laser dentistry, we invest in technology that makes treatment quicker and gentler.
              </p>
            </Reveal>
            <StaggerGroup className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Patient-first philosophy", "Latest dental technology", "Sterile, calming environment", "Affordable plans"].map((t) => (
                <StaggerItem key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{t}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Values</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">What guides us every day</h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HeartPulse, t: "Compassion", d: "We listen first, treat second." },
              { icon: Award, t: "Excellence", d: "Best-in-class training and tools." },
              { icon: Smile, t: "Comfort", d: "Calming spaces, gentle hands." },
              { icon: Users, t: "Community", d: "Caring for families across generations." },
            ].map((v) => (
              <StaggerItem key={v.t}>
                <div className="rounded-3xl bg-card p-7 shadow-card text-center h-full border border-border/50">
                  <div className="grid h-14 w-14 mx-auto place-items-center rounded-2xl bg-gradient-primary text-primary-foreground"><v.icon className="h-7 w-7" /></div>
                  <h3 className="mt-5 font-bold text-lg">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our Team</p>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Meet the specialists</h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group">
                  <div className="overflow-hidden rounded-3xl shadow-card aspect-[3/4]">
                    <img src={m.img} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="mt-4 font-bold">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary pl-6 pr-2 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105 transition-transform">
              Book A Visit
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground text-primary"><ArrowUpRight className="h-4 w-4" /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
