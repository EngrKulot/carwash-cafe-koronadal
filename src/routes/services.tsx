import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, Info } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { CallToAction } from "@/components/call-to-action";
import { IMAGES, SITE, AUTO_SERVICES, CAFE_SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: `Services: Auto Detailing & Café | ${SITE.nameFull}`,
      },
      {
        name: "description",
        content:
          "Carwash Cafe Koronadal services: basic & full wash, deep cleaning, exterior restoration, window tinting with Magic Tint, plus a café, lounge, free Wi-Fi and restrooms.",
      },
      {
        property: "og:title",
        content: `Services | ${SITE.nameFull}`,
      },
      {
        property: "og:description",
        content: "Auto wash & detailing plus a café lounge experience in Koronadal City.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.foamCannon },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.foamCannon },
    ],
  }),
  component: ServicesPage,
});

function ServiceRow({
  service,
  index,
}: {
  service: (typeof AUTO_SERVICES)[number];
  index: number;
}) {
  const flip = index % 2 === 1;
  return (
    <Reveal>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className={flip ? "lg:order-2" : ""}>
          <div className="group relative overflow-hidden rounded-2xl border border-border shadow-[0_22px_60px_-34px_rgba(0,0,0,0.4)]">
            <img
              src={service.image}
              alt={service.alt}
              className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-surface/85 text-xs font-bold text-primary backdrop-blur-sm ring-1 ring-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <span className="hero-eyebrow text-primary">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
            {service.title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            {service.blurb}
          </p>
          <ul className="mt-7 space-y-3">
            {service.points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground sm:text-[0.95rem]">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

function ServicesPage() {
  return (
    <>
      <Hero
        full
        overlay="medium"
        image={IMAGES.handWashSuds}
        imageAlt="Technician detailing and hand-washing a car at Carwash Cafe Koronadal"
        imageClassName="object-cover object-[center_38%]"
        eyebrow="Our Services"
        title={
          <>
            Auto care & café, <span className="text-primary">done right.</span>
          </>
        }
        subtitle="From active foam washes to elevated underwash, deep cleaning, and window tinting, plus an air-conditioned café to enjoy while we work. Explore everything Carwash Cafe offers."
        primary={{ label: "Inquire on Facebook", to: "/contact" }}
        secondary={{ label: "See the Gallery", to: "/gallery" }}
        badges={[
          { label: "Basic & Full Wash" },
          { label: "Deep Cleaning & Underwash" },
          { label: "Exterior Restoration" },
          { label: "Window Tinting" },
        ]}
      />

      {/* Auto wash & detailing */}
      <section className="px-4 py-20 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="hero-eyebrow text-primary">A. Auto Wash & Detailing</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Professional care for every vehicle.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our automotive services cover everything from a complete wash to deep cleaning,
              exterior restoration, and window tinting. Each performed to detailing-studio
              standards.
            </p>
          </Reveal>

          <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
            {AUTO_SERVICES.map((s, i) => (
              <ServiceRow key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Tint spec callout */}
      <section className="bg-surface px-4 py-20 text-surface-foreground sm:px-6 lg:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25">
            <Info className="h-8 w-8" />
          </span>
          <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Window Tint: Magic Tint Specifications
          </h3>
          <p className="mt-5 text-base leading-relaxed text-surface-foreground/70 sm:text-lg">
            The following are product specifications supplied by Magic Tint and are presented as
            supplied, not as independently verified performance claims:{" "}
            <strong className="text-surface-foreground">99% UV rejection</strong> and{" "}
            <strong className="text-surface-foreground">93% infrared rejection</strong>.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:mx-auto sm:max-w-md">
            <div className="rounded-xl border border-white/10 bg-surface-muted p-5">
              <p className="font-display text-2xl font-bold text-primary sm:text-3xl">99%</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-surface-foreground/60">
                UV rejection
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-surface-muted p-5">
              <p className="font-display text-2xl font-bold text-primary sm:text-3xl">93%</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-surface-foreground/60">
                Infrared rejection
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-surface-foreground/45">
            Specifications provided by the tint supplier. Not independently verified performance
            guarantees.
          </p>
        </Reveal>
      </section>

      {/* Café & lounge */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="hero-eyebrow text-primary">B. Café & Lounge Experience</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Wait well while we work.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The café side of Carwash Cafe turns waiting time into downtime you actually enjoy:
              coffee, comfort, and connection.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAFE_SERVICES.map((c, i) => (
              <Reveal key={c.id} delay={i * 90}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_12px_36px_-24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_22px_50px_-24px_rgba(0,0,0,0.28)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    <img
                      src={c.image}
                      alt={c.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="inline-block h-4 w-[3px] shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
                        {c.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility feature callout */}
      <section className="bg-surface px-4 py-20 text-surface-foreground sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="hero-eyebrow text-primary">Dedicated Facility</span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.5rem]">
              Elevated underwash ramp & multi-bay service.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-surface-foreground/75 sm:text-lg">
              Unlike ordinary roadside washes, Carwash Cafe Koronadal features dedicated heavy-duty
              elevated service ramps that give our technicians clear, unobstructed access to your
              vehicle's underchassis, steering links, and wheel wells.
            </p>
            <p className="mt-4 text-base leading-relaxed text-surface-foreground/75 sm:text-lg">
              From compact sedans to full-size 4x4 pickups and SUVs like the Ford Raptor and Toyota
              Land Cruiser, every vehicle is treated with specialized equipment and care.
            </p>
          </Reveal>
          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_22px_60px_-34px_rgba(0,0,0,0.6)]">
              <img
                src={IMAGES.underwashFortunerRamp}
                alt="Toyota Fortuner SUV elevated on Carwash Cafe underwash ramp in Koronadal City"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_22px_60px_-34px_rgba(0,0,0,0.6)]">
              <img
                src={IMAGES.engineBayRestoredToyotaRed}
                alt="Toyota engine bay fully degreased, detailed, and dressed at Carwash Cafe Koronadal"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Booking note */}
      <section className="bg-accent px-4 py-20 sm:px-6 lg:py-24">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-[0_22px_60px_-40px_rgba(0,0,0,0.4)] sm:p-10 lg:p-12">
          <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Booking Information
          </h3>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Basic carwash services accept <strong className="text-foreground">walk-ins</strong>.
            Full detailing packages, including <strong className="text-foreground">Combo 2</strong>{" "}
            and <strong className="text-foreground">Combo 3</strong>, require a{" "}
            <strong className="text-foreground">morning reservation</strong> through our official
            Facebook page, as the full detailing process takes longer to complete.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-px hover:bg-primary-glow active:translate-y-px"
            >
              <MessageCircle className="h-4 w-4" />
              Message Us on Facebook
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Contact & Location
            </Link>
          </div>
        </Reveal>
      </section>

      <CallToAction
        title="Ready to book your service?"
        subtitle="Send an inquiry to reserve a full detailing package, or walk in for a wash. We'll take care of the rest."
      />
    </>
  );
}
