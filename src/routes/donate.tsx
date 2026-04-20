import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, CreditCard } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — LIA Care Foundation" },
      { name: "description", content: "Support LIA Care Foundation. 100% of your donation funds programs in education, health, water and empowerment." },
      { property: "og:title", content: "Donate — LIA Care Foundation" },
      { property: "og:description", content: "Every dollar is tracked to a program outcome." },
    ],
  }),
  component: DonatePage,
});

const tiers = [
  { amount: "$25", impact: "School supplies for 1 child" },
  { amount: "$60", impact: "Maternal health visit" },
  { amount: "$150", impact: "Vocational training kit" },
  { amount: "$500", impact: "Borehole maintenance" },
];

function DonatePage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-[var(--brand-brown)] text-white">
        <div className="container mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Heart className="h-10 w-10 text-[var(--brand-orange)]" />
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Your gift becomes care, water, and opportunity.</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            We're a registered Nigerian non-profit. Every contribution is allocated to a specific program outcome and reported transparently.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-4xl font-semibold">Choose an impact level</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div key={t.amount} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
              <p className="font-display text-3xl font-semibold text-primary">{t.amount}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.impact}</p>
              <Button className="mt-5 w-full bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90">
                Give {t.amount}
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Online giving via Stripe / Paystack will be enabled in the next phase. To give now, reach us at{" "}
          <a href="mailto:hello@liacarefoundation.org" className="font-semibold text-foreground underline">hello@liacarefoundation.org</a>.
        </p>
      </section>

      <section className="bg-card border-y border-border">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-7 w-7 text-[var(--brand-green)]" />
            <div>
              <h3 className="font-display text-xl font-semibold">Verified non-profit</h3>
              <p className="text-sm text-muted-foreground">CAC RC 7939463 · SCUML SC 151421059 · TIN 32201302-0001</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CreditCard className="mt-1 h-7 w-7 text-[var(--brand-cyan)]" />
            <div>
              <h3 className="font-display text-xl font-semibold">Secure giving</h3>
              <p className="text-sm text-muted-foreground">All transactions handled by PCI-compliant providers.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
