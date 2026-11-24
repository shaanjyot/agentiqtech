import type { ReactNode } from "react";

/** Dark chrome for product stills; light chrome for the citizen app. */
export function DesktopFrame({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-xl border border-[var(--still-line)] bg-[var(--still-bg)] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.45)] transition-colors duration-300 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--still-line)] bg-[var(--still-chip)] px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="size-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-3 truncate rounded-md bg-[var(--still-chip)] px-2 py-0.5 font-mono text-[10px] text-mist">
          {label}
        </span>
      </div>
      {children}
    </figure>
  );
}

/** Phone bezel. Light UI for the citizen app, as the app ships it. */
export function PhoneFrame({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const shell = tone === "light" ? "bg-[#f6f8fc] text-[#101828]" : "bg-[var(--still-bg)] text-body";
  return (
    <div
      className={`relative w-[268px] shrink-0 rounded-[2.4rem] border border-[var(--still-line)] bg-[var(--still-bezel)] p-[7px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.45)] transition-colors duration-300 ${className}`}
    >
      <div className={`relative overflow-hidden rounded-[2rem] ${shell}`}>
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />
        {children}
      </div>
    </div>
  );
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between px-5 pb-1 pt-2.5 font-mono text-[10px] font-semibold ${dark ? "text-white/80" : "text-[#344054]"}`}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <svg viewBox="0 0 18 12" className="h-2.5 w-3.5" fill="currentColor" aria-hidden="true">
          <rect x="0" y="7" width="2.6" height="5" rx="0.6" />
          <rect x="4" y="5" width="2.6" height="7" rx="0.6" />
          <rect x="8" y="2.5" width="2.6" height="9.5" rx="0.6" />
          <rect x="12" y="0" width="2.6" height="12" rx="0.6" />
        </svg>
        <svg viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <rect x="1" y="1" width="18" height="10" rx="3" />
          <rect x="3" y="3" width="12" height="6" rx="1.6" fill="currentColor" stroke="none" />
          <path d="M21 4.5v3" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}
