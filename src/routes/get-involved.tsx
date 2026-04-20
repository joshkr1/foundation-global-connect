import { createFileRoute, Link } from "@tanstack/react-router";
import { HandHeart, Users, Building2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — LIA Care Foundation" },
      { name: "description", content: "Donate, volunteer, or partner with LIA Care Foundation to advance global community development." },
      { property: "og:title", content: "Get Involved — LIA Care Foundation" },
      { property: "og:description", content: "Donate, volunteer, or partner with us." },
    ],
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-green)]">Get involved</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Three ways to make impact with us.</h1>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: HandHeart, title: "Donate", body: "Every dollar is tracked to a program outcome — books, vaccines, water, training.", cta: "Donate", to: "/donate" },
            { icon: Users, title: "Volunteer", body: "Join our field, design and digital teams. Local and remote roles available.", cta: "Apply", to: "/contact" },
            { icon: Building2, title: "Partner", body: "Corporates, foundations, governments and faith-based organizations welcome.", cta: "Discuss partnership", to: "/contact" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <c.icon className="h-9 w-9 text-[var(--brand-orange)]" />
              <h3 className="mt-3 font-display text-2xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <Button asChild variant="outline" className="mt-5">
                <Link to={c.to}>{c.cta} <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elevated)] sm:p-10">
          <h2 className="font-display text-3xl font-semibold">Tell us how you'd like to help</h2>
          <p className="mt-2 text-muted-foreground">We respond to every inquiry within 2 business days.</p>
          <div className="mt-6">
            <ContactForm source="get_involved" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
