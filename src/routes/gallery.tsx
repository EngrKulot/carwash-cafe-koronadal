import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { CallToAction } from "@/components/call-to-action";
import { Lightbox, lightboxClass } from "@/components/lightbox";
import { IMAGES, SITE, GALLERY } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery | ${SITE.nameFull}` },
      {
        name: "description",
        content:
          "A visual look inside Carwash Cafe Koronadal: our detailing facility, wash bays, café lounge, and the care that goes into every vehicle.",
      },
      {
        property: "og:title",
        content: `Gallery | ${SITE.nameFull}`,
      },
      {
        property: "og:description",
        content: "A visual look inside Carwash Cafe Koronadal: detailing, wash bays, and café.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.galleryHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.galleryHero },
    ],
  }),
  component: GalleryPage,
});

type GalleryItem = { src: string; alt: string; span?: string; tag?: string };

/**
 * Gallery thumbnail with graceful image error handling.
 * If the source fails to load, the card is hidden rather than showing a
 * broken image placeholder, so the grid stays clean and balanced.
 */
function GalleryTile({
  item,
  index,
  active,
  showSpan,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  active: boolean;
  showSpan: boolean;
  onOpen: (i: number) => void;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <Reveal
      key={item.src}
      delay={(index % 4) * 60}
      className={cn("h-full w-full overflow-hidden rounded-lg", showSpan ? item.span : "")}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`View image: ${item.alt}`}
        className={cn(lightboxClass(active), "h-full w-full")}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          onError={() => setFailed(true)}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {item.tag && (
          <span className="absolute left-3 top-3 inline-block rounded-full bg-primary/90 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary-foreground shadow">
            {item.tag}
          </span>
        )}
        <span className="absolute bottom-3 left-3 right-3 text-left text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-2">
          {item.alt}
        </span>
      </button>
    </Reveal>
  );
}

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const tags = [
    "All",
    "Facility",
    "Foam Wash",
    "Underwash Ramp",
    "Engine Detail",
    "Café Lounge",
    "Café",
    "Restoration",
  ];

  const filtered: GalleryItem[] = useMemo(
    () => (selectedTag === "All" ? [...GALLERY] : GALLERY.filter((g) => g.tag === selectedTag)),
    [selectedTag],
  );

  const images = filtered.map((g) => ({ src: g.src, alt: g.alt }));

  const showSpan = selectedTag === "All";

  return (
    <>
      <Hero
        full
        image={IMAGES.underwashFortunerRamp}
        imageAlt="Toyota Fortuner SUV elevated on the dedicated heavy-duty steel underwash service ramp at Carwash Cafe Koronadal"
        imageClassName="object-cover object-[center_45%]"
        eyebrow="Official Gallery"
        title={
          <>
            Inside <span className="text-primary">Carwash Cafe.</span>
          </>
        }
        subtitle="A look at our actual detailing facility, active wash bays, elevated underwash ramp, and café. Clean rides and good vibes in Koronadal City."
        align="center"
        primary={{ label: "Explore Services", to: "/services" }}
        secondary={{ label: "Visit Us", to: "/contact" }}
        badges={[
          { label: "Facility" },
          { label: "Foam Wash" },
          { label: "Underwash Ramp" },
          { label: "Engine Detail" },
          { label: "Café Lounge" },
        ]}
      />

      <section className="px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal className="max-w-2xl">
              <span className="hero-eyebrow text-primary">Our Work &amp; Facility</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Authentic care behind every clean ride.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Featuring authentic photography of our multi-bay facility, active wash bays, engine
                detailing, elevated underwash ramp, and dine-in café lounge. Tap any photo to
                expand.
              </p>
            </Reveal>

            {/* Category Filter Pills */}
            <Reveal delay={100} className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSelectedTag(tag);
                    setActive(null);
                  }}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all",
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  {tag}
                </button>
              ))}
            </Reveal>
          </div>

          {/* Balanced dense masonry grid.
              Spans only apply on the "All" view (designed for the full set);
              filtered views use uniform cells so there are never awkward gaps. */}
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 [grid-auto-flow:dense] sm:auto-rows-[220px] sm:grid-cols-3 lg:auto-rows-[240px] lg:grid-cols-4">
            {filtered.map((g, i) => (
              <GalleryTile
                key={g.src}
                item={g}
                index={i}
                active={active === i}
                showSpan={showSpan}
                onOpen={setActive}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive}
      />

      <CallToAction
        title="Like what you see?"
        subtitle="Bring your ride in for the same care. Send an inquiry to reserve, or stop by for a wash."
      />
    </>
  );
}
