import { Droplet, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

type CtaProps = {
  title: string;
  subtitle: string;
};

/**
 * Site-wide final CTA.
 * Primary action: "Send an Inquiry" scrolls to the contact page inquiry form.
 * Secondary action: "Message Us on Facebook" opens the official page.
 */
export function CallToAction({ title, subtitle }: CtaProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary px-4 py-24 text-center sm:py-32">
      <Droplet
        className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 fill-white/10 text-transparent"
        aria-hidden
      />
      <Droplet
        className="pointer-events-none absolute -bottom-12 -left-8 h-48 w-48 fill-white/10 text-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/contact#inquiry"
            className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3.5 text-sm font-bold text-primary shadow-lg transition-all hover:-translate-y-px active:translate-y-px"
          >
            Send an Inquiry
            <span aria-hidden>→</span>
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10",
            )}
          >
            <MessageCircle className="h-4 w-4" />
            Message Us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
