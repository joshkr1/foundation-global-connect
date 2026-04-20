import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, GraduationCap, Stethoscope, Droplets, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactForm } from "@/components/site/ContactForm";
import hero from "@/assets/hero-community.jpg";
import imgEdu from "@/assets/program-education.jpg";
import imgHealth from "@/assets/program-health.jpg";
import imgWater from "@/assets/program-water.jpg";
import imgEmp from "@/assets/program-empowerment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LIA Care Foundation — Love. Impact. Action." },
      { name: "description", content: "A registered Nigerian non-profit advancing health, education, clean water and women's empowerment across underserved communities." },
      { property: "og:title", content: "LIA Care Foundation" },
      { property: "og:description", content: "Health, education, clean water and empowerment for underserved communities." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

const programs = [
  { icon: GraduationCap, title: "Education", img: imgEdu, copy: "Scholarships, learning materials and teacher support for children in low-income communities." },
  { icon: Stethoscope, title: "Healthcare", img: imgHealth, copy: "Maternal & child health outreaches, mobile clinics, and free medical screenings." },
  { icon: Droplets, title: "Clean Water", img: imgWater, copy: "Boreholes, sanitation facilities and hygiene education to end water-borne illness." },
  { icon: Sparkles, title: "Empowerment", img: imgEmp, copy: "Vocational training, micro-grants and digital skills for women and youth." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Community gathering at golden hour" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.04_60)/0.92] via-[oklch(0.18_0.04_60)/0.7] to-transparent" />
        <div className="relative container mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:py-44">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-green)]" />
              Registered NGO · CAC RC 7939463
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Love. Impact. <span className="text-[var(--brand-orange)]">Action.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              We deliver healthcare, education, clean water and economic empowerment to communities the world too often forgets — with full transparency and measurable impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90">
                <Link to="/donate">Donate now <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white">
                <Link to="/programs">Our programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {[
            { n: "12,000+", l: "Lives reached" },
            { n: "47", l: "Communities served" },
            { n: "9", l: "Active programs" },
            { n: "100%", l: "Programs verified" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="font-display text-4xl font-semibold text-primary">{s.n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-green)]">What we do</p>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">Programs that change lives</h2>
          <p className="mt-4 text-muted-foreground">Four interconnected pillars working together to break cycles of poverty.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[var(--brand-green)]">
                  <p.icon className="h-5 w-5" />
                  <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link to="/programs">Explore all programs <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-[var(--brand-brown)] text-white">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <HeartHandshake className="h-10 w-10 text-[var(--brand-orange)]" />
            <h2 className="mt-3 font-display text-4xl font-semibold">Partner with us for global impact.</h2>
            <p className="mt-3 max-w-lg text-white/80">
              We work with corporates, foundations, governments and individuals worldwide. Every contract, grant and donation is tracked and reported.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-foreground shadow-[var(--shadow-elevated)] sm:p-8">
            <h3 className="font-display text-2xl font-semibold">Get in touch</h3>
            <p className="mb-4 text-sm text-muted-foreground">A team member will reply within 2 business days.</p>
            <ContactForm source="home_cta" compact />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
