import { useState, useId, type FormEvent } from "react";
import { Send, CheckCircle2, Calendar, ChevronDown, LoaderCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEBSITE_SOURCE = "Carwash Cafe Koronadal";

/**
 * Sends inquiries to the Make.com webhook configured at build time.
 */
export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formId = useId();
  const isSubmitting = status === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const type = String(formData.get("type") ?? "").trim();
    const date = String(formData.get("date") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (!name || !email || !phone || !type || !message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields before sending your inquiry.");
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL?.trim();
    if (!webhookUrl) {
      setStatus("error");
      setErrorMessage("The inquiry form is temporarily unavailable. Please try again later.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 20_000);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          type,
          date,
          message,
          submittedAt: new Date().toISOString(),
          source: WEBSITE_SOURCE,
          website,
        }),
        signal: controller.signal,
      });

      const responseText = await response.text();
      let result: { success?: boolean; message?: string } = {};

      if (responseText) {
        try {
          result = JSON.parse(responseText) as typeof result;
        } catch {
          throw new Error("The inquiry service returned an invalid response.");
        }
      }

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "We couldn't send your inquiry. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      const message =
        error instanceof DOMException && error.name === "AbortError"
          ? "The request took too long. Please check your connection and try again."
          : error instanceof Error
            ? error.message
            : "We couldn't send your inquiry. Please check your connection and try again.";

      setStatus("error");
      setErrorMessage(message);
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-border bg-card p-8 text-center shadow-[0_22px_60px_-40px_rgba(0,0,0,0.4)] sm:p-10"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/25">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
          Inquiry received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for contacting Carwash Cafe Koronadal. We've received your inquiry and sent a
          confirmation to your email address.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-glow"
          >
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
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

      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          disabled={isSubmitting}
        />
      </div>

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
            maxLength={120}
            autoComplete="name"
            disabled={isSubmitting}
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
            maxLength={40}
            autoComplete="tel"
            disabled={isSubmitting}
            placeholder="e.g. 0917 123 4567"
            className="h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-email`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Email Address
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
            required
            maxLength={3000}
            disabled={isSubmitting}
            placeholder="Vehicle details, preferred date or time, or any questions"
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="mt-5 rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {errorMessage}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-glow active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
        <span className="text-xs text-muted-foreground">
          We'll reply via your preferred contact method.
        </span>
      </div>

      <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Your information is used only to respond to your inquiry. We never share or sell your
        details. Your inquiry is sent directly to our team and is not stored in a website database.
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
