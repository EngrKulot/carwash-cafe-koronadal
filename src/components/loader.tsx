import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LOGO } from "@/lib/site";

/**
 * Branded full-screen loading overlay.
 * Dark charcoal background, official Carwash Cafe logo reveal, thin
 * animated red indicator. Auto-dismisses; respects prefers-reduced-motion.
 */
export function Loader() {
  const [phase, setPhase] = useState<"show" | "hide" | "done">("show");

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const t1 = window.setTimeout(() => setPhase("hide"), reduce ? 200 : 1150);
    const t2 = window.setTimeout(() => setPhase("done"), reduce ? 500 : 1650);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden={phase === "hide"}
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface transition-opacity duration-500",
        phase === "hide" && "pointer-events-none opacity-0",
      )}
    >
      <div className="flex flex-col items-center gap-5">
        <img
          src={LOGO.src}
          alt={LOGO.alt}
          width={220}
          height={128}
          className="h-24 w-auto max-w-[80vw] object-contain"
          style={{ animation: "loader-fade 0.6s ease both" }}
          draggable={false}
        />
        <div className="mt-2 h-px w-40 overflow-hidden bg-surface-foreground/15">
          <div
            className="h-full w-full origin-left bg-primary"
            style={{ animation: "loader-bar 1.1s ease forwards" }}
          />
        </div>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-surface-foreground/55">
          Koronadal
        </span>
      </div>
    </div>
  );
}
