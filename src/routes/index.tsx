import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Coffee, Wifi, MapPin, ArrowRight, Facebook } from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { CallToAction } from "@/components/call-to-action";
import { IMAGES, SITE, AUTO_SERVICES, CAFE_SERVICES, WHY_CHOOSE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.nameFull} | Auto Detailing & Café in Koronadal City` },
      {
        name: "description",
        content:
          "Professional car washing, auto detailing, window tinting and a comfortable café, all in one destination in Koronadal City, South Cotabato. Clean Rides. Good Vibes.",
      },
      {
        property: "og:title",
        content: `${SITE.nameFull} | Auto Detailing & Café`,
      },
      {
        property: "og:description",
        content:
          "Professional car washing, auto detailing, window tinting and a comfortable café, all in one destination in Koronadal City.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.homeHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.homeHero },
    ],
  }),
  component: Index,
});

const ICONS = { Sparkles, Coffee, Wifi, MapPin } as const;

const GALLERY_ITEMS: { src: string; alt: string; span?: string }[] = [
  {
    src: IMAGES.facilityWide,
    alt: "Carwash Cafe Koronadal multi-bay facility with vehicles being serviced",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: IMAGES.cafeBrandedIcedFrappe,
    alt: "Carwash Cafe branded iced beverage with whipped cream",
  },
  {
    src: IMAGES.engineBayRestoredToyotaRed,
    alt: "Restored Toyota engine bay after complete deep clean",
  },
  {
    src: IMAGES.foamWashSedanBay,
    alt: "Active foam wash on sedan in wash bay",
  },
  {
    src: IMAGES.underwashFortunerRamp,
    alt: "Toyota Fortuner elevated on the underwash ramp",
  },
  {
    src: IMAGES.cafeLoungeInteriorMural,
    alt: "Carwash Cafe air-conditioned dining lounge with tropical mural",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: IMAGES.engineBayCleanToyotaBlack,
    alt: "Detailed black Toyota engine bay with dressed plastics",
  },
  {
    src: IMAGES.foamWashCommercialTruck,
    alt: "Commercial truck receiving complete foam wash",
  },
  {
    src: IMAGES.icedCoffeeFrappe,
    alt: "Iced coffee frappe with whipped cream served at the café",
  },
  {
    src: IMAGES.cafeFood,
    alt: "Fresh Filipino rice meal and snacks served at the café",
  },
];

function Index() {
  return (
    <>
      <Hero
        full
        image={IMAGES.homeHero}
        imageAlt="Carwash Cafe Koronadal active multi-bay car wash facility with customer vehicles being serviced under canopy"
        imageClassName="object-cover object-[center_42%]"
        eyebrow="Auto Detailing · Café · Koronadal City"
        title={
          <>
            Clean Rides. <span className="text-primary">Good Vibes.</span>
          </>
        }
        subtitle="Your car deserves the best care, and you deserve a place to relax. Experience professional car washing, detailing, elevated underwash, and café comfort, all in one destination in Koronadal City."
        primary={{ label: "Explore Our Services", to: "/services" }}
        secondary={{ label: "Visit Our Cafe", to: "/about" }}
        badges={[
          { label: "Active Multi-Bay Wash" },
          { label: "Elevated Ramp Underwash" },
          { label: "Air-Conditioned Café Lounge" },
          { label: "Free Wi-Fi" },
        ]}
      />

      {/* Brand story */}
      <section className="bg-background px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="hero-eyebrow text-primary">Our Story</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              More than a carwash: a place to stay and enjoy.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {SITE.nameFull} brings together automotive care and a comfortable café experience.
              While our team cleans, details, and cares for your vehicle, you can settle in with
              coffee, food, and free Wi-Fi in our air-conditioned lounge.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              It's a one-stop destination built around your comfort: premium detailing standards,
              friendly local service, and a relaxed place to wait.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-xl border border-border shadow-xl">
              <img
                src={IMAGES.washBaysActive}
                alt="Active wash bays at Carwash Cafe Koronadal with vehicles being detailed"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-48 overflow-hidden rounded-lg border-4 border-background shadow-2xl sm:block">
              <img
                src={IMAGES.handWashSuds}
                alt="Suds-covered car during hand wash at Carwash Cafe"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Automotive services preview */}
      <section className="bg-surface px-4 py-20 text-surface-foreground sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="hero-eyebrow text-primary">Automotive Care</span>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Detailing that treats your car like it deserves.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-surface-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AUTO_SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 90}>
                <Link
                  to="/services"
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-surface-muted transition-all hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-muted to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-semibold text-surface-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-surface-foreground/65">
                      {s.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Café experience */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
                <img
                  src={IMAGES.cafeLoungeInteriorMural}
                  alt="Carwash Cafe Koronadal authentic air-conditioned café dining lounge with tropical leaf mural and Carwash Cafe logo"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 rounded-lg bg-surface/90 px-3.5 py-1.5 backdrop-blur-md">
                  <p className="text-xs font-semibold text-white">
                    Carwash Cafe Lounge · Koronadal City
                  </p>
                </div>
              </div>
              {/* Inset badge showing authentic branded Carwash Cafe drink */}
              <div className="absolute -bottom-6 -right-3 hidden w-44 overflow-hidden rounded-xl border-4 border-background shadow-2xl sm:block md:w-52">
                <img
                  src={IMAGES.cafeBrandedIcedFrappe}
                  alt="Official Carwash Cafe iced frappe with whipped cream"
                  className="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                />
                <div className="bg-surface/95 px-2.5 py-1 text-center text-[0.7rem] font-semibold text-white">
                  Freshly Made in Cafe
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="hero-eyebrow text-primary">The Café Experience</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Wait well. Sip something good.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              No standing around in the heat. While your vehicle is being cared for, relax in our
              air-conditioned lounge with coffee, refreshments, and food, and stay connected with
              complimentary Wi-Fi.
            </p>
            <ul className="mt-7 space-y-3">
              {CAFE_SERVICES.map((c) => (
                <li
                  key={c.id}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <Coffee className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{c.title}</p>
                    <p className="text-sm text-muted-foreground">{c.blurb}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-accent px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <span className="hero-eyebrow text-primary">Why Carwash Cafe</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built around your comfort and your car.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((w, i) => {
              const Icon = ICONS[w.icon as keyof typeof ICONS];
              return (
                <Reveal key={w.title} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.4)]">
                    <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured gallery */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal>
              <span className="hero-eyebrow text-primary">Featured Gallery</span>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A look inside the studio.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                View full gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid auto-rows-[140px] grid-cols-2 gap-3 [grid-auto-flow:dense] sm:auto-rows-[200px] sm:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4">
            {GALLERY_ITEMS.map((g, i) => (
              <Reveal
                key={g.src}
                delay={(i % 4) * 70}
                className={`h-full overflow-hidden rounded-lg ${g.span ?? ""}`}
              >
                <div className="group h-full w-full overflow-hidden rounded-lg bg-surface-muted">
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer feedback */}
      <section className="bg-surface px-4 py-20 text-surface-foreground sm:px-6 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="hero-eyebrow text-primary">Customer Feedback</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-surface-foreground sm:text-4xl">
            See what our customers say.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-surface-foreground/70">
            The best place to read genuine reviews from our customers is our official Facebook page,
            where real people share their experiences after bringing their rides to us.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
            >
              <Facebook className="h-4 w-4" />
              View Reviews on Facebook
            </a>
          </div>
        </Reveal>
      </section>

      {/* Location preview */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="hero-eyebrow text-primary">Find Us</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Conveniently located in Koronadal City.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {SITE.address.full}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                hash="inquiry"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
              >
                <MapPin className="h-4 w-4" />
                Send an Inquiry
              </Link>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Message Us on Facebook
              </a>
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="overflow-hidden rounded-xl border border-border bg-surface-muted"
          >
            <iframe
              title="Map showing Carwash Cafe Koronadal location"
              src={SITE.mapEmbed}
              className="h-80 min-h-[320px] w-full lg:h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      <CallToAction
        title="Ready for clean rides and good vibes?"
        subtitle="Send an inquiry to reserve a full detailing package, or stop by for a wash. We'll take care of the rest."
      />
    </>
  );
}
