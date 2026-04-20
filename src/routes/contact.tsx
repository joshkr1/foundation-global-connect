import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LIA Care Foundation" },
      { name: "description", content: "Reach LIA Care Foundation about partnerships, volunteering, donations or media inquiries." },
      { property: "og:title", content: "Contact LIA Care Foundation" },
      { property: "og:description", content: "Partnerships, volunteering, donations and media inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-green)]">Contact</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Let's start a conversation.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Whether you represent a corporation, foundation, government agency or community group — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.4fr]">
        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <MapPin className="h-6 w-6 text-[var(--brand-orange)]" />
            <h3 className="mt-2 font-display text-lg font-semibold">Headquarters</h3>
            <p className="text-sm text-muted-foreground">Abuja, Federal Capital Territory, Nigeria</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Mail className="h-6 w-6 text-[var(--brand-green)]" />
            <h3 className="mt-2 font-display text-lg font-semibold">Email</h3>
            <a href="mailto:hello@liacarefoundation.org" className="text-sm text-foreground underline">hello@liacarefoundation.org</a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <Phone className="h-6 w-6 text-[var(--brand-cyan)]" />
            <h3 className="mt-2 font-display text-lg font-semibold">Phone</h3>
            <p className="text-sm text-muted-foreground">+234 800 000 0000</p>
          </div>
        </aside>
        <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-elevated)] sm:p-10">
          <h2 className="font-display text-3xl font-semibold">Send us a message</h2>
          <p className="mt-2 text-muted-foreground">We respond within 2 business days.</p>
          <div className="mt-6">
            <ContactForm source="contact_page" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
