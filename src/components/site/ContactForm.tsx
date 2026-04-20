import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { leadSchema } from "@/lib/schemas";

type Props = { source?: string; compact?: boolean };

export function ContactForm({ source = "contact_form", compact = false }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      organization: String(fd.get("organization") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
      source,
    };
    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      organization: parsed.data.organization || null,
      subject: parsed.data.subject || null,
      message: parsed.data.message,
      source: parsed.data.source || source,
    });
    setLoading(false);
    if (error) {
      toast.error("Could not send your message. Please try again.");
      return;
    }
    toast.success("Thank you — we'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" name="name" required maxLength={120} placeholder="Jane Doe" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required maxLength={255} placeholder="jane@example.com" />
        </div>
      </div>
      {!compact && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" maxLength={40} placeholder="+234 800 000 0000" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="organization">Organization</Label>
            <Input id="organization" name="organization" maxLength={160} placeholder="Optional" />
          </div>
        </div>
      )}
      {!compact && (
        <div className="space-y-1.5">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" maxLength={200} placeholder="Partnership, volunteering, donation…" />
        </div>
      )}
      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" name="message" required minLength={10} maxLength={4000} rows={5} placeholder="How can we work together?" />
      </div>
      <Button type="submit" disabled={loading} className="w-full bg-[var(--brand-orange)] text-white hover:bg-[var(--brand-orange)]/90 sm:w-auto">
        {loading ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
