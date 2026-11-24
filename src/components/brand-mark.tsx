export function AgentIQMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="aiq-g" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7ab4ff" />
          <stop offset="0.55" stopColor="#4c8dff" />
          <stop offset="1" stopColor="#9d7bff" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="61" height="61" rx="16" stroke="url(#aiq-g)" strokeOpacity="0.55" strokeWidth="1.6" />
      <path d="M20 46 32 17l12 29" stroke="url(#aiq-g)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.5 37h13" stroke="#3ee0b0" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="32" cy="17" r="3.6" fill="#3ee0b0" />
    </svg>
  );
}

export function CivicLensMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="cl-g" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3ee0b0" />
          <stop offset="1" stopColor="#4c8dff" />
        </linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="61" height="61" rx="16" stroke="url(#cl-g)" strokeOpacity="0.55" strokeWidth="1.6" />
      <circle cx="28" cy="28" r="12.5" stroke="url(#cl-g)" strokeWidth="3.2" />
      <circle cx="28" cy="28" r="4.6" fill="#3ee0b0" />
      <path d="m38 38 8.5 8.5" stroke="url(#cl-g)" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
