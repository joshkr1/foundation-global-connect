import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Stethoscope, Droplets, Sparkles, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import imgEdu from "@/assets/program-education.jpg";
import imgHealth from "@/assets/program-health.jpg";
import imgWater from "@/assets/program-water.jpg";
import imgEmp from "@/assets/program-empowerment.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — LIA Care Foundation" },
      { name: "description", content: "Explore our four core programs: Education, Healthcare, Clean Water, and Women's Empowerment." },
      { property: "og:title", content: "Our Programs — LIA Care Foundation" },
      { property: "og:description", content: "Four pillars: education, healthcare, clean water, empowerment." },
      { property: "og:image", content: imgWater },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    icon: GraduationCap,
    title: "Education for All",
    img: imgEdu,
    summary: "We invest in the next generation through scholarships, learning materials, and teacher training.",
    impact: ["School supply kits for 1,200+ pupils", "Scholarships for vulnerable children", "After-school literacy clubs"],
  },
  {
    icon: Stethoscope,
    title: "Community Healthcare",
    img: imgHealth,
    summary: "Mobile clinics, maternal & child health outreaches, and free screenings reach communities far from hospitals.",
    impact: ["Free medical outreaches", "Maternal health support", "Vaccination & nutrition campaigns"],
  },
  {
    icon: Droplets,
    title: "Clean Water & Sanitation",
    img: imgWater,
    summary: "Boreholes, hand-washing stations, and hygiene education prevent disease and free up time for school and work.",
    impact: ["Borehole drilling projects", "Hygiene & sanitation training", "School latrine construction"],
  },
  {
    icon: Sparkles,
    title: "Women & Youth Empowerment",
    img: imgEmp,
    summary: "Vocational and digital skills training, micro-grants, and mentorship unlock economic independence.",
    impact: ["Tailoring & catering training", "Digital skills bootcamps", "Micro-business grants"],
  },
];

function ProgramsPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-green)]">Programs</p>
          <h1 className="mt-2 max-w-3xl font-display text-5xl font-semibold sm:text-6xl">Four pillars. One mission.</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Each program is designed in partnership with local leaders, measured against clear indicators, and reported transparently to our funders.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6">
        {programs.map((p, i) => (
          <section key={p.title} className="grid items-center gap-10 md:grid-cols-2">
            <img src={p.img} alt={p.title} loading="lazy" className={`rounded-2xl object-cover shadow-[var(--shadow-elevated)] ${i % 2 ? "md:order-2" : ""}`} />
            <div>
              <div className="flex items-center gap-2 text-[var(--brand-green)]">
                <p.icon className="h-6 w-6" />
                <p className="text-sm font-semibold uppercase tracking-widest">Program 0{i + 1}</p>
              </div>
              <h2 className="mt-2 font-display text-4xl font-semibold">{p.title}</h2>
              <p className="mt-4 text-muted-foreground">{p.summary}</p>
              <ul className="mt-5 space-y-2">
                {p.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-7 bg-[var(--brand-brown)] text-white hover:bg-[var(--brand-brown)]/90">
                <Link to="/get-involved">Support this program <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
