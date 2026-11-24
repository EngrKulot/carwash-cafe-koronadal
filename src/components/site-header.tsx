import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { NAV, SITE } from "@/lib/site";

/** Premium floating glass navigation shared by every route. */
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
        "pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-[padding] duration-300 sm:px-5 lg:px-8",
        scrolled && "pt-2",
      )}
    >
      <div
        className={cn(
          "elevate-nav-glass pointer-events-auto mx-auto flex h-[4.5rem] max-w-7xl items-center px-3 transition-[background,border-color,box-shadow] duration-300 sm:px-5 lg:h-20 lg:px-6",
          scrolled && "elevate-nav-glass--scrolled",
        )}
      >
        <Logo variant="bare" size="lg" to="/" />

        <div aria-hidden className="mx-6 hidden h-9 w-px bg-white/20 lg:block" />

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden flex-1 items-center justify-center gap-2 lg:flex"
        >
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                  active ? "text-primary" : "text-white/75 hover:text-white",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 bottom-0 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-5">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_28px_-10px_oklch(0.552_0.214_25_/_0.9)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-primary-glow hover:shadow-[0_14px_32px_-10px_oklch(0.552_0.214_25_/_0.95)] active:translate-y-0 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Inquire Now
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation keeps the desktop card's elevated glass treatment. */}
      {open && (
        <div
          id="mobile-navigation"
          className="elevate-nav-glass elevate-nav-glass--menu pointer-events-auto mx-auto mt-2 max-w-7xl overflow-y-auto p-2 animate-in fade-in slide-in-from-top-2 duration-200 lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex max-h-[calc(100svh-6rem)] flex-col gap-1 overflow-y-auto p-1"
          >
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-lg border-l-2 px-4 py-3 text-base font-medium transition-colors",
                    active
                      ? "border-primary bg-white/10 text-primary"
                      : "border-transparent text-white/80 hover:bg-white/5 hover:text-white",
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
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-[0_10px_28px_-12px_oklch(0.552_0.214_25_/_0.9)] transition-colors hover:bg-primary-glow"
            >
              <MessageCircle className="h-5 w-5" />
              Message Us on Facebook
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Send an Inquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
