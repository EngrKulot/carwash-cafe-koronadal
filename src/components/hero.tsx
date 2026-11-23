import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type HeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  primary?: { label: string; to?: string; href?: string };
  secondary?: { label: string; to?: string; href?: string };
  badges?: { label: string }[];
  align?: "left" | "center";
  imageClassName?: string;
  /**
   * Full-viewport immersive hero (homepage). Fills 100svh with the
   * background extending behind the fixed navigation, the main message
   * vertically centered, and the trust highlights pinned to the bottom.
   */
  full?: boolean;
  /**
   * Overlay strength: "strong" (default) for facility imagery,
   * "soft" for portrait/team photography where faces should stay visible,
   * "medium" for readability on busy photography while keeping colors.
   */
  overlay?: "strong" | "soft" | "medium" | "cinematic";
};

export function Hero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
  badges,
  align = "left",
  imageClassName,
  full = false,
  overlay = "strong",
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex flex-col overflow-hidden bg-surface",
        full ? "min-h-[100svh]" : "min-h-[68vh] lg:min-h-[78vh]",
      )}
    >
      {/* Background image, covers the full screen from the top of the nav down */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className={cn("h-full w-full object-cover object-center", imageClassName)}
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle, balanced dark overlays for readability without over-darkening */}
        {overlay === "strong" ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/65 to-surface/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-surface/25 to-transparent" />
          </>
        ) : overlay === "medium" ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/55 to-surface/15" />
          </>
        ) : overlay === "cinematic" ? (
          <>
            {/* Cinematic: darker bottom for depth, dark left for text, lighter center/right so the storefront and signage stay visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/85 via-surface/35 to-surface/12" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/85 via-surface/35 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-surface/85 via-surface/35 to-surface/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/55 via-surface/10 to-transparent" />
          </>
        )}
      </div>

      <div
        className={cn(
          "relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8",
          align === "center" ? "items-center text-center" : "items-start text-left",
          full
            ? "justify-between pb-12 pt-28 lg:pb-16 lg:pt-36"
            : "justify-end pb-16 pt-32 lg:pb-24 lg:pt-40",
        )}
      >
        <div className={cn("flex w-full flex-col", full && "flex-1 justify-center pb-4")}>
          <Reveal>
            <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-primary/55 bg-surface/65 px-4 py-1.5 text-primary backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary ring-2 ring-primary/30" />
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className={cn(
                "mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl",
                align === "center" && "mx-auto",
              )}
            >
              {title}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p
              className={cn(
                "mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg",
                align === "center" && "mx-auto",
              )}
            >
              {subtitle}
            </p>
          </Reveal>

          {(primary || secondary) && (
            <Reveal delay={240}>
              <div
                className={cn(
                  "mt-9 flex flex-wrap items-center gap-3",
                  align === "center" && "justify-center",
                )}
              >
                {primary &&
                  (primary.href ? (
                    <a
                      href={primary.href}
                      target={primary.href.startsWith("http") ? "_blank" : undefined}
                      rel={primary.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_34px_-12px_oklch(0.552_0.214_25_/_0.85)] transition-all hover:-translate-y-px hover:bg-primary-glow active:translate-y-px"
                    >
                      {primary.label}
                      <span aria-hidden>→</span>
                    </a>
                  ) : (
                    <Link
                      to={primary.to ?? "/"}
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_34px_-12px_oklch(0.552_0.214_25_/_0.85)] transition-all hover:-translate-y-px hover:bg-primary-glow active:translate-y-px"
                    >
                      {primary.label}
                      <span aria-hidden>→</span>
                    </Link>
                  ))}
                {secondary &&
                  (secondary.href ? (
                    <a
                      href={secondary.href}
                      target={secondary.href.startsWith("http") ? "_blank" : undefined}
                      rel={secondary.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
                    >
                      {secondary.label}
                    </a>
                  ) : (
                    <Link
                      to={secondary.to ?? "/"}
                      className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
                    >
                      {secondary.label}
                    </Link>
                  ))}
              </div>
            </Reveal>
          )}
        </div>

        {badges && badges.length > 0 && (
          <Reveal delay={320}>
            <ul
              className={cn(
                "flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs font-medium uppercase tracking-wider text-white/60",
                align === "center" ? "justify-center" : "",
                full ? "mt-2" : "mt-12",
              )}
            >
              {badges.map((b) => (
                <li key={b.label} className="inline-flex items-center gap-2">
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                  {b.label}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
