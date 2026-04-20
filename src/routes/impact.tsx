import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Users, MapPin, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/hero-community.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact — LIA Care Foundation" },
      { name: "description", content: "Our measured impact: lives reached, communities served, and stories from the field." },
      { property: "og:title", content: "Our Impact — LIA Care Foundation" },
      { property: "og:description", content: "Measured outcomes and field stories from LIA Care programs." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-green)]">Impact</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Real numbers. Real lives. Real change.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We track every outreach, scholarship, borehole and grant. Here's what your support has built so far.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, n: "12,000+", l: "Lives reached" },
            { icon: MapPin, n: "47", l: "Communities served" },
            { icon: TrendingUp, n: "9", l: "Active programs" },
            { icon: Users, n: "85+", l: "Active volunteers" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-soft)]">
              <s.icon className="mx-auto h-8 w-8 text-[var(--brand-orange)]" />
              <p className="mt-3 font-display text-4xl font-semibold text-primary">{s.n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-4xl font-semibold">Stories from the field</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "Aisha, 12", body: "I love coming to school again. The new books and uniforms made me feel like I belong." },
              { name: "Mama Grace", body: "The mobile clinic saved my baby. We had nowhere else to go that day." },
              { name: "Chinedu", body: "The tailoring program changed my life. I now run my own shop and employ two people." },
            ].map((s) => (
              <figure key={s.name} className="rounded-2xl border border-border bg-background p-7">
                <Quote className="h-7 w-7 text-[var(--brand-green)]" />
                <blockquote className="mt-3 text-base leading-relaxed">"{s.body}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">— {s.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-4xl font-semibold">Where we work</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Headquartered in Abuja, Nigeria, with active program sites across the South-South, North-Central and South-East regions — and partnerships extending across West Africa.
        </p>
      </section>
    </SiteLayout>
  );
}
