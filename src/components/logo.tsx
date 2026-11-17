import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { LOGO } from "@/lib/site";

type LogoProps = {
  className?: string;
  /**
   * Visual treatment for the lockup.
   * - "plate": dark charcoal rounded backing so the light logo is always
   *   legible (used in contexts where the surface is not guaranteed dark).
   * - "bare": logo sits directly on a known-dark surface with no plate.
   *
   * The header now uses a solid dark charcoal navigation, so the header logo
   * uses "bare" with no backing card, border, or shadow.
   */
  variant?: "plate" | "bare";
  /**
   * Logo display height.
   * - "sm": compact (footer companion lockups).
   * - "md": default bare/plate size.
   * - "lg": enlarged header logo for strong brand recognition.
   */
  size?: "sm" | "md" | "lg";
  showTag?: boolean;
  to?: string;
};

const SIZE_HEIGHT: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-7 sm:h-8",
  md: "h-9 sm:h-10",
  lg: "h-12 sm:h-14 lg:h-16",
};

/**
 * Official Carwash Cafe Koronadal logo lockup.
 *
 * The uploaded asset is a light-colored mark with a red accent droplet on a
 * transparent background, so it only reads clearly on a dark surface. The
 * logo image is never stretched, cropped, or recreated. It is always rendered
 * with object-contain to preserve its native aspect ratio (~1.72:1).
 */
export function Logo({
  className,
  variant = "plate",
  size = "md",
  showTag = false,
  to,
}: LogoProps) {
  const lockup = (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={LOGO.src}
        alt={LOGO.alt}
        className={cn(
          "block w-auto select-none object-contain",
          SIZE_HEIGHT[size],
          variant === "plate"
            ? "rounded-lg border border-white/10 bg-surface px-2.5 py-1.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
            : "opacity-95",
        )}
        draggable={false}
      />
      {showTag && (
        <span className="ml-2 hidden font-display text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-surface-foreground/55 sm:inline">
          Koronadal
        </span>
      )}
    </span>
  );

  if (to) {
    return (
      <Link to={to} aria-label="Carwash Cafe Koronadal home" className="shrink-0">
        {lockup}
      </Link>
    );
  }
  return lockup;
}
