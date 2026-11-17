import { Link } from "@tanstack/react-router";
import { Facebook, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Logo } from "./logo";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo variant="bare" size="md" showTag />
            <p className="mt-6 text-sm leading-relaxed text-surface-foreground/70">
              {SITE.nameFull} brings automotive care and a comfortable café experience together:
              clean rides, good vibes, all in one stop in Koronadal City.
            </p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-surface-foreground/85 transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
              Facebook Page
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-surface-foreground/55">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-surface-foreground/75 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-surface-foreground/55">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-surface-foreground/75">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Reservations via Facebook</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-surface-foreground/55">
              Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-surface-foreground/75">
              {SITE.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="block text-surface-foreground/90">{h.day}</span>
                    <span className="text-surface-foreground/65">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-surface-foreground/45">
              Hours are provisional. Please confirm with the owner before visiting.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-surface-foreground/55 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.nameFull}. All rights reserved.
          </p>
          <p className="text-surface-foreground/45">
            Koronadal City · South Cotabato · Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
