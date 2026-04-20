import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Heart, Target, Globe2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import about from "@/assets/about-team.jpg";
import certCac from "@/assets/cert-cac.jpg";
import certScuml from "@/assets/cert-scuml.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LIA Care Foundation" },
      { name: "description", content: "LIA Care Foundation is a registered Nigerian NGO (CAC RC 7939463) advancing community development through health, education, water and empowerment." },
      { property: "og:title", content: "About LIA Care Foundation" },
      { property: "og:description", content: "Our story, mission, leadership and registrations." },
      { property: "og:image", content: about },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-green)]">About us</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">
            A foundation built on love, action and accountability.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            LIA Care Foundation was incorporated in Nigeria in 2024 to address the persistent gaps
            in healthcare, education, water and economic opportunity faced by underserved
            communities — and to do so with the transparency global partners expect.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
        <img src={about} alt="LIA Care volunteers distributing supplies" loading="lazy" className="rounded-2xl object-cover shadow-[var(--shadow-elevated)]" />
        <div>
          <h2 className="font-display text-4xl font-semibold">Our story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded by a team of trustees committed to community-led change, LIA Care Foundation
            grew from a small volunteer effort into a registered non-profit serving communities
            across Nigeria. Our name — Love, Impact, Action — reflects the way we work: with heart,
            with rigor, and always in the field.
          </p>
          <p className="mt-3 text-muted-foreground">
            We collaborate with hospitals, schools, local leaders, and international funders to
            design programs that are both immediate and durable.
          </p>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="container mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Mission", body: "Improve lives in underserved communities through sustainable health, education, water and empowerment programs." },
            { icon: Target, title: "Vision", body: "A world where every community — regardless of geography — has dignified access to opportunity and care." },
            { icon: Globe2, title: "Values", body: "Integrity, partnership, transparency, and unwavering respect for the communities we serve." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-background p-7">
              <v.icon className="h-8 w-8 text-[var(--brand-orange)]" />
              <h3 className="mt-3 font-display text-2xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-6 w-6 text-[var(--brand-green)]" />
          <h2 className="font-display text-4xl font-semibold">Registrations & accountability</h2>
        </div>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We are a fully registered Nigerian non-profit, compliant with national regulations governing charitable organizations and money-laundering prevention.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <img src={certCac} alt="Certificate of Incorporation" loading="lazy" className="w-full object-cover" />
            <figcaption className="border-t border-border p-4 text-sm">
              <p className="font-semibold text-foreground">Corporate Affairs Commission</p>
              <p className="text-muted-foreground">Certificate of Incorporation · RC 7939463 · 18 Sep 2024</p>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <img src={certScuml} alt="SCUML Certificate of Registration" loading="lazy" className="w-full object-cover" />
            <figcaption className="border-t border-border p-4 text-sm">
              <p className="font-semibold text-foreground">SCUML (EFCC)</p>
              <p className="text-muted-foreground">Certificate of Registration · SC 151421059 · 4 Nov 2024</p>
            </figcaption>
          </figure>
        </div>
      </section>
    </SiteLayout>
  );
}
