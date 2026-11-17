import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Coffee,
  Car,
  Heart,
  Users,
  Target,
  Eye,
  Sparkles,
  Wifi,
  MapPin,
  Wrench,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { CallToAction } from "@/components/call-to-action";
import { IMAGES, SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us | ${SITE.nameFull}` },
      {
        name: "description",
        content:
          "Carwash Cafe Koronadal is more than a carwash: a one-stop destination combining professional auto detailing with a comfortable café experience in Koronadal City.",
      },
      {
        property: "og:title",
        content: `About Us | ${SITE.nameFull}`,
      },
      {
        property: "og:description",
        content:
          "More than a carwash: automotive care and a comfortable café experience in Koronadal City.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.aboutHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.aboutHero },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    icon: Car,
    title: "Automotive Cleaning & Detailing",
    body: "From basic washes to deep cleaning, exterior restoration, and window tinting. Your vehicle gets detail-studio care.",
  },
  {
    icon: Coffee,
    title: "Café & Dining Experience",
    body: "Coffee, refreshments, food, and snacks served fresh while your vehicle is being cared for.",
  },
  {
    icon: Heart,
    title: "Customer Comfort",
    body: "An air-conditioned lounge, free Wi-Fi, and clean restroom facilities. Comfort built into every visit.",
  },
  {
    icon: Users,
    title: "Friendly Local Service",
    body: "A local Koronadal business that treats every customer and every vehicle with genuine care.",
  },
];

const VALUES = [
  {
    icon: Sparkles,
    title: "Detail-First Standards",
    body: "We hold every vehicle to the standard of a detailing studio, not a quick rinse. Active foam bays, careful hand washing, and multi-step restoration.",
  },
  {
    icon: Wrench,
    title: "Honest, Capable Work",
    body: "Engine bays, underchassis ramps, and cabin sanitizing handled with the right tools and the right process, done properly the first time.",
  },
  {
    icon: Heart,
    title: "Comfort, Not Waiting",
    body: "Waiting should not mean standing in the heat. Our air-conditioned lounge, food, coffee, and Wi-Fi turn downtime into downtime you enjoy.",
  },
  {
    icon: MapPin,
    title: "Genuinely Local",
    body: "We are a Koronadal City business serving our neighbors. Friendly faces, familiar regulars, and real pride in the work we do here.",
  },
];

const STATS = [
  { value: "2", label: "Offerings in one stop" },
  { value: "4", label: "Detailing service lines" },
  { value: "100%", label: "Comfort-first waiting" },
  { value: "1", label: "Easy Koronadal location" },
];

function AboutPage() {
  return (
    <>
      <Hero
        full
        image={IMAGES.aboutHero}
        imageAlt="Carwash Cafe Koronadal team gathered at the detailing facility in front of the MTX Microtex detailing banners"
        imageClassName="object-cover object-[center_38%] sm:object-[center_42%]"
        overlay="medium"
        eyebrow="About Carwash Cafe"
        title={
          <>
            More Than Just <span className="text-primary">a Carwash.</span>
          </>
        }
        subtitle="Carwash Cafe Koronadal brings together automotive care and a comfortable café experience, so you can have your vehicle cleaned and detailed while enjoying food, coffee, and a relaxing place to wait."
        primary={{ label: "See Our Services", to: "/services" }}
        secondary={{ label: "Visit the Gallery", to: "/gallery" }}
        badges={[
          { label: "Automotive Cleaning & Detailing" },
          { label: "Comfortable Café Experience" },
          { label: "Free Wi-Fi" },
          { label: "Friendly Local Service" },
        ]}
      />

      {/* Expanded story with collage */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="hero-eyebrow text-primary">Who We Are</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A one-stop experience, built around you.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                {SITE.nameFull} began with a simple idea: car care and waiting should not feel like
                two separate things. While our team cleans, details, and cares for your vehicle, you
                can settle in with coffee, food, and free Wi-Fi in our air-conditioned lounge.
              </p>
              <p>
                Instead of standing by your car or waiting in the heat, you get a comfortable place
                to relax, catch up on work, or simply enjoy a good cup of coffee, all while your
                vehicle is treated to detailing-studio standards.
              </p>
              <p>
                It is a convenient, one-stop destination designed around comfort and care, for your
                car, and for you.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-px hover:bg-primary-glow active:translate-y-px"
              >
                Come visit us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                View our gallery
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            <div className="col-span-2 overflow-hidden rounded-xl border border-border shadow-xl">
              <img
                src={IMAGES.facilityWide}
                alt="Full view of the Carwash Cafe Koronadal multi-bay wash facility"
                className="aspect-[16/9] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-md">
              <img
                src={IMAGES.cafeBrandedIcedFrappe}
                alt="Carwash Cafe branded signature iced beverage with whipped cream"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-md">
              <img
                src={IMAGES.engineBayRestoredToyotaRed}
                alt="Complete engine bay detailing restoration on red Toyota pickup at Carwash Cafe Koronadal"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface px-4 py-20 text-surface-foreground sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col rounded-2xl border border-white/10 bg-surface-muted p-8 sm:p-10 lg:p-12">
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
              <Target className="h-7 w-7" />
            </span>
            <h3 className="mt-7 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Our Mission
            </h3>
            <p className="mt-5 text-base leading-relaxed text-surface-foreground/70">
              To make exceptional vehicle care and genuine hospitality part of a single visit. We
              clean, detail, and restore every vehicle to a high standard, while giving every
              customer a comfortable, welcoming place to wait, with good coffee, food, and free
              Wi-Fi.
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="flex flex-col rounded-2xl border border-white/10 bg-surface-muted p-8 sm:p-10 lg:p-12"
          >
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
              <Eye className="h-7 w-7" />
            </span>
            <h3 className="mt-7 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Our Vision
            </h3>
            <p className="mt-5 text-base leading-relaxed text-surface-foreground/70">
              To be Koronadal City's go-to destination for automotive care, known not just for clean
              cars, but for how good it feels to wait here. A place where detail work and a café
              share the same address, and the same standard.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-accent px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm font-medium text-muted-foreground sm:text-[0.95rem]">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What makes us different, pillars */}
      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <span className="hero-eyebrow text-primary">What Makes Us Different</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Care for your car. Comfort for you.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Two offerings, one destination. Every visit is built around the same idea: your
              vehicle deserves proper care, and you deserve a good place to wait.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_22px_48px_-26px_rgba(0,0,0,0.4)]">
                  <span className="grid h-13 w-13 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Combined experience split feature */}
      <section className="px-4 pb-20 sm:px-6 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-border lg:grid-cols-2">
            <Reveal className="grid min-h-[440px] grid-rows-2 gap-0 lg:min-h-[520px]">
              <div className="relative overflow-hidden">
                <img
                  src={IMAGES.foamWashSedanBay}
                  alt="Active foam bath on sedan in Carwash Cafe Koronadal Bay 6"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/85 via-surface/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="hero-eyebrow text-primary-foreground/85">The Wash Side</span>
                  <p className="mt-1.5 max-w-sm font-display text-xl font-semibold text-white">
                    Active foam bays, hand washing, and multi-step restoration.
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src={IMAGES.cafeLoungeInteriorMural}
                  alt="Authentic Carwash Cafe Koronadal air-conditioned café lounge with tropical leaf mural and customer tables"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/85 via-surface/15 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="hero-eyebrow text-primary-foreground/85">The Café Side</span>
                  <p className="mt-1.5 max-w-sm font-display text-xl font-semibold text-white">
                    Coffee, food, and a comfortable place to relax while we work.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal
              delay={120}
              className="flex flex-col justify-center bg-card p-8 sm:p-12 lg:p-16"
            >
              <span className="hero-eyebrow text-primary">Two in One</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A carwash and a café, sharing one address.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                On one side, a working detailing facility with covered wash bays, an elevated
                underwash ramp, and the tools for proper exterior restoration. On the other, an
                air-conditioned café with coffee, food, and space to relax.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Car, text: "Professional car washing and detailing" },
                  { icon: Coffee, text: "Dine-in café with food and refreshments" },
                  { icon: Wifi, text: "Free Wi-Fi while you wait" },
                  { icon: Heart, text: "A comfortable lounge, not a parking lot" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/20">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="text-[0.95rem] leading-relaxed text-foreground">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-px hover:bg-primary-glow active:translate-y-px"
                >
                  Explore our services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Plan your visit
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-surface px-4 py-20 text-surface-foreground sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <span className="hero-eyebrow text-primary">What We Stand For</span>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The values behind every visit.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-surface-muted p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
                  <span className="grid h-13 w-13 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-surface-foreground/65">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Experience the Carwash Cafe difference."
        subtitle="Send an inquiry to reserve a full detailing package, or stop by for a wash. Enjoy the café while we work."
      />
    </>
  );
}
