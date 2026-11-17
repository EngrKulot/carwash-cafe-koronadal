import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { NAV, SITE } from "@/lib/site";

/**
 * Premium dark navigation header.
 * Solid charcoal surface, enlarged bare logo (no backing card), white text
 * with red active + hover accents. Same dark branding on desktop and mobile.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.9)]"
          : "border-b border-white/5",
        "bg-surface/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-24 lg:px-8">
        <Logo variant="bare" size="lg" to="/" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "group relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  active ? "text-primary" : "text-white/75 hover:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px origin-left bg-primary transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-12px_oklch(0.552_0.214_25_/_0.85)] transition-all hover:bg-primary-glow hover:shadow-[0_12px_28px_-10px_oklch(0.552_0.214_25_/_0.9)] active:translate-y-px sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Inquire Now
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-surface transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-white/10 text-primary"
                    : "text-white/80 hover:bg-white/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            <MessageCircle className="h-5 w-5" />
            Message Us on Facebook
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Send an Inquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
