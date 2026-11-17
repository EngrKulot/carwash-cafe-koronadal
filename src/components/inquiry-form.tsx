import { useState, useId } from "react";
import { Send, Info, Calendar, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";

type Status = "idle" | "preview";

/**
 * Front-end UI mockup of the Carwash Cafe Koronadal inquiry form.
 *
 * IMPORTANT: This is a presentation mockup only. No data is submitted,
 * transmitted, or stored. The Send Inquiry button shows a preview-only
 * notice explaining that online inquiries will be enabled after the
 * website is approved.
 */
export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();

  if (status === "preview") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-border bg-card p-8 text-center shadow-[0_22px_60px_-40px_rgba(0,0,0,0.4)] sm:p-10"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
          <Info className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
          Preview only
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          This inquiry form is part of the website design preview. Online inquiries will be enabled
          after the website is approved. For now, please reach us through Facebook or the phone
          number listed below.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            Message Us on Facebook
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Back to form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("preview");
      }}
      className="rounded-2xl border border-border bg-card p-6 shadow-[0_22px_60px_-40px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10"
      aria-labelledby={`${formId}-title`}
    >
      <span id={`${formId}-title`} className="hero-eyebrow text-primary">
        Send an Inquiry
      </span>
      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Tell us about your ride.
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Share your details and the service you're interested in. We'll get back to you through your
        preferred contact method.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor={`${formId}-name`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Full Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor={`${formId}-phone`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Phone Number
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            required
            placeholder="e.g. 0917 123 4567"
            className="h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-email`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Email Address{" "}
            <span className="font-normal normal-case text-muted-foreground/70">(optional)</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            placeholder="you@email.com"
            className="h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-type`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Inquiry Type
          </label>
          <div className="relative">
            <select
              id={`${formId}-type`}
              name="type"
              required
              defaultValue=""
              className="h-11 w-full appearance-none rounded-md border border-border bg-background px-4 pr-10 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed [&>option]:bg-background [&>option]:text-foreground"
            >
              <option value="" disabled>
                Select an inquiry type
              </option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
              aria-hidden
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-date`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Preferred Date{" "}
            <span className="font-normal normal-case text-muted-foreground/70">(optional)</span>
          </label>
          <div className="relative">
            <Calendar
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
              aria-hidden
            />
            <input
              id={`${formId}-date`}
              name="date"
              type="date"
              className="h-11 w-full rounded-md border border-border bg-background px-4 pl-10 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-message`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Message
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            placeholder="Vehicle details, preferred date or time, or any questions"
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-glow active:translate-y-px"
        >
          <Send className="h-4 w-4" />
          Send Inquiry
        </button>
        <span className="text-xs text-muted-foreground">
          We'll reply via your preferred contact method.
        </span>
      </div>

      <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Your information is used only to respond to your inquiry. We never share or sell your
        details. This form is a design preview and does not submit or store any information.
      </p>
    </form>
  );
}

const INQUIRY_TYPES = [
  "Basic Car Wash",
  "Full Detailing",
  "Underwash",
  "Engine Wash",
  "Window Tinting",
  "Cafe / Food Inquiry",
  "Other",
] as const;
