import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Facebook, Navigation, MessageCircle, Phone } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { InquiryForm } from "@/components/inquiry-form";
import { IMAGES, SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact & Location | ${SITE.nameFull}` },
      {
        name: "description",
        content:
          "Contact Carwash Cafe Koronadal: send an inquiry, message us on Facebook, find our address and map, and check our operating hours in Koronadal City, South Cotabato.",
      },
      {
        property: "og:title",
        content: `Contact & Location | ${SITE.nameFull}`,
      },
      {
        property: "og:description",
        content: "Find us in Koronadal City: inquiry form, Facebook, address, map, and hours.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.contactHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.contactHero },
    ],
  }),
  component: ContactPage,
});

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: SITE.address.full,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      SITE.address.full,
    )}`,
    note: "Get directions",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Carwash Cafe Koronadal",
    href: SITE.facebook,
    note: "Message us / reserve",
  },
];

function ContactPage() {
  return (
    <>
      {/* Hero with authentic exterior storefront and roadside signage */}
      <Hero
        full
        overlay="cinematic"
        image={IMAGES.contactHero}
        imageAlt="Carwash Cafe Koronadal storefront, wash facility, and roadside signage along Judge Alba Street"
        imageClassName="object-cover object-[center_45%] lg:object-[center_50%]"
        eyebrow="Contact & Location"
        title={
          <>
            Come visit <span className="text-primary">Carwash Cafe.</span>
          </>
        }
        subtitle="Find us in Koronadal City, send us an inquiry, or message us on Facebook to reserve a full detail. We're ready to take care of your ride."
        primary={{ label: "Send an Inquiry", to: "/contact#inquiry" }}
        secondary={{ label: "Message Us on Facebook", to: SITE.facebook }}
        badges={[
          { label: "Koronadal City, South Cotabato" },
          { label: "Open Daily: 7:00 AM to 5:00 PM" },
        ]}
      />

      {/* Contact info + inquiry form */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Info column */}
          <div>
            <Reveal>
              <span className="hero-eyebrow text-primary">Get In Touch</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                We'd love to hear from you.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                For reservations, questions, or full detailing packages, send us an inquiry or reach
                us through our official Facebook page.
              </p>
            </Reveal>

            {/* Contact cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CONTACT_INFO.map((c, i) => (
                <Reveal key={c.label} delay={i * 80}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.4)]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1.5 break-words text-sm font-medium text-foreground">
                      {c.value}
                    </p>
                    <p className="mt-auto pt-3 text-xs font-semibold text-primary">{c.note}</p>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Operating hours */}
            <Reveal delay={160}>
              <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2.5">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Operating Hours
                  </h3>
                </div>
                <ul className="mt-4 divide-y divide-border">
                  {SITE.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                      <span className="font-medium text-foreground">{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 rounded-md bg-accent px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                  These hours are provisional. Please confirm with the owner before publishing as
                  final hours.
                </p>
              </div>
            </Reveal>

            {/* Phone: plain contact info, not a CTA */}
            <Reveal delay={220}>
              <div className="mt-4 flex items-center gap-4 rounded-xl border border-border bg-accent/60 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">{SITE.phone}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Listed for reference. For reservations and faster replies, please use the
                    inquiry form or Facebook.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Inquiry form column */}
          <div id="inquiry" className="scroll-mt-28">
            <Reveal delay={120}>
              <InquiryForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map + booking notes: full-width balanced lower section */}
      <section className="bg-accent px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="hero-eyebrow text-primary">Find Us</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Visit our location in Koronadal City.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {SITE.address.full}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-8">
            {/* Map */}
            <Reveal className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.4)]">
              <iframe
                title="Map showing Carwash Cafe Koronadal location"
                src={SITE.mapEmbed}
                className="h-[320px] w-full rounded-xl sm:h-[380px] lg:h-[460px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>

            {/* Booking notes */}
            <Reveal delay={120} className="lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Booking Notes
                  </h3>
                </div>
                <ul className="mt-4 space-y-3.5 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      Basic carwash services accept{" "}
                      <strong className="text-foreground">walk-ins</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      Full detailing packages (Combo 2 & Combo 3) require a{" "}
                      <strong className="text-foreground">morning reservation</strong> via Facebook,
                      as the process takes longer.
                    </span>
                  </li>
                </ul>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
                >
                  <Facebook className="h-4 w-4" />
                  Message Us on Facebook
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                SITE.address.full,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Navigation className="h-4 w-4" />
              Open in Google Maps
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
