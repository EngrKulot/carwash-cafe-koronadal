const MESSENGER_URL = "https://m.me/61557184804507";

export function MessengerLauncher() {
  return (
    <a
      href={MESSENGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Carwash Cafe Koronadal on Messenger"
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2.5 rounded-full transition-transform duration-200 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#0866ff]/40 focus-visible:ring-offset-3 focus-visible:ring-offset-background active:translate-y-0 sm:bottom-6 sm:right-6 sm:gap-3"
    >
      <span
        aria-hidden="true"
        className="relative max-w-36 rounded-xl border border-white/10 bg-surface px-3 py-2 text-center text-[0.7rem] leading-4 font-semibold text-surface-foreground shadow-xl after:absolute after:top-1/2 after:-right-1.5 after:h-3 after:w-3 after:-translate-y-1/2 after:rotate-45 after:border-r after:border-t after:border-white/10 after:bg-surface sm:max-w-none sm:px-4 sm:text-xs sm:whitespace-nowrap"
      >
        Chat with us on Messenger
      </span>

      <span className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#0866ff] text-white shadow-[0_12px_32px_rgba(8,102,255,0.32),0_2px_8px_rgba(16,24,40,0.22)] ring-1 ring-black/10 transition-[filter,box-shadow] duration-200 group-hover:brightness-110 group-hover:shadow-[0_16px_38px_rgba(8,102,255,0.4),0_4px_10px_rgba(16,24,40,0.24)] sm:h-14 sm:w-14">
        <svg aria-hidden="true" viewBox="0 0 36 36" className="h-7 w-7 sm:h-8 sm:w-8" fill="none">
          <path
            fill="currentColor"
            d="M18 3.75c-8.01 0-14.25 5.86-14.25 13.76 0 4.13 1.69 7.69 4.47 10.15.38.34.61.81.62 1.32l.08 2.53c.03.81.86 1.33 1.6 1l2.82-1.24c.43-.19.91-.22 1.36-.1 1.05.29 2.16.43 3.3.43 8.01 0 14.25-5.86 14.25-13.76S26.01 3.75 18 3.75Zm8.55 10.8-4.19 6.64a2.14 2.14 0 0 1-3.09.57l-3.33-2.5a.86.86 0 0 0-1.03 0l-4.49 3.41c-.6.45-1.38-.26-.98-.9l4.18-6.64a2.14 2.14 0 0 1 3.09-.57l3.33 2.5c.31.23.73.23 1.03 0l4.49-3.4c.6-.46 1.39.25.99.89Z"
          />
        </svg>
      </span>
    </a>
  );
}
