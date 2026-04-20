import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.22_0.03_60)] text-[oklch(0.92_0.02_85)]">
      <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="LIA Care Foundation" className="h-12 w-auto rounded-md bg-white/5 p-1" />
            <div>
              <p className="font-display text-xl font-semibold text-white">LIA Care Foundation</p>
              <p className="text-xs text-white/60">Love · Impact · Action</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            A registered Nigerian non-profit advancing health, education, clean water and
            women's empowerment across underserved communities — with global partners.
          </p>
          <div className="mt-5 space-y-1.5 text-xs text-white/60">
            <p className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-green)]" /> CAC Reg. No. 7939463 · TIN 32201302-0001</p>
            <p className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-[var(--brand-green)]" /> SCUML Reg. SC 151421059</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Explore</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
            <li><Link to="/impact" className="hover:text-white">Impact</Link></li>
            <li><Link to="/get-involved" className="hover:text-white">Get Involved</Link></li>
            <li><Link to="/donate" className="hover:text-white">Donate</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</p>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[var(--brand-orange)]" /> Abuja, Nigeria</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[var(--brand-orange)]" /> hello@liacarefoundation.org</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[var(--brand-orange)]" /> +234 800 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} LIA Care Foundation. All rights reserved.</p>
          <p>Built with care for global impact.</p>
        </div>
      </div>
    </footer>
  );
}
