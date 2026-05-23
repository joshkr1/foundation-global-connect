import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Heart, Target, Globe2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import about from "@/assets/about-team.jpg";
import certCac from "@/assets/cert-cac.jpg";
import certScuml from "@/assets/cert-scuml.jpg";
import ceo from "@/assets/ceo-prudence.jpg";

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

      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[2fr_3fr] md:items-center">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]">
            <img src={ceo} alt="Prudence Amieibi-Ibama Briggs, Founder & CEO" loading="lazy" width={768} height={960} className="w-full object-cover" />
            <figcaption className="border-t border-border p-4 text-sm">
              <p className="font-semibold text-foreground">Prudence Amieibi-Ibama Briggs</p>
              <p className="text-muted-foreground">Founder & CEO · LIA Consultancy Ltd · LIA Care Foundation</p>
            </figcaption>
          </figure>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-orange)]">Leadership</p>
            <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">A founder rooted in sustainability and people.</h2>
            <p className="mt-5 text-muted-foreground">
              Prudence is a sustainability and HR professional with deep expertise in
              learning &amp; development, ISO management systems, and Health, Safety &
              Environment (HSE) governance. She founded LIA to bridge two missions —
              helping organizations operate responsibly, and channeling that work back
              into the communities that need it most.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { k: "B.Sc. Microbiology", v: "University of Port Harcourt" },
                { k: "ISO 9001:2015 Lead Auditor", v: "SGS-certified" },
                { k: "FSSC / ISO 22000:2018", v: "Lead Auditor (SGS)" },
                { k: "HSE Governance", v: "Level 3, NISCN" },
              ].map((c) => (
                <div key={c.k} className="rounded-xl border border-border bg-background p-4">
                  <p className="text-sm font-semibold text-foreground">{c.k}</p>
                  <p className="text-xs text-muted-foreground">{c.v}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Through <span className="font-semibold text-foreground">LIA Consultancy Ltd</span>,
              Prudence delivers Environmental Impact Assessments, ISO 9001 / 14001 /
              45001 / 50001 implementation, climate strategy, and HSE training to
              clients across oil &amp; gas, power, FMCG and food sectors. The proceeds
              and partnerships fuel <span className="font-semibold text-foreground">LIA Care Foundation's</span> work in
              health, education, clean water and women's empowerment.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-green)]">Sister organization</p>
        <h2 className="mt-2 font-display text-4xl font-semibold">LIA Consultancy Limited</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          A leading Nigerian environmental services and consultancy firm —
          <em> "Sustainable Solutions for a Better Tomorrow."</em> The consultancy's
          revenue and partnerships underwrite the Foundation's community programs,
          ensuring long-term sustainability beyond donor cycles.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Environmental Impact Assessments (EIA)",
            "Environmental Audit Reporting",
            "ISO 50001:2018 Energy Audits",
            "ISO 9001 / 14001 / 45001 Implementation",
            "Climate Change Mitigation & Adaptation",
            "EMS Implementation & Certification",
            "Biodiversity Conservation",
            "Waste Management & Recycling",
            "Air & Water Quality Monitoring",
            "HSE Procurement & Training",
          ].map((s) => (
            <div key={s} className="rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-medium text-foreground">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
          <p><span className="font-semibold text-foreground">HQ:</span> 34 Pomona Street, Suncity, Abuja</p>
          <p><span className="font-semibold text-foreground">Email:</span> prudencebriggs@gmail.com</p>
          <p><span className="font-semibold text-foreground">Phone:</span> +234 806 459 2426</p>
        </div>
      </section>
    </SiteLayout>
  );
}
