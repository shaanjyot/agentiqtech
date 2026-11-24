"use client";

import { useEffect, useState } from "react";

type Mode = "dark" | "light";
const KEY = "agentiq-theme";

function apply(mode: Mode) {
  const root = document.documentElement;
  root.classList.toggle("light", mode === "light");
  root.classList.toggle("dark", mode === "dark");
  root.style.colorScheme = mode;
}

function storedMode(): Mode {
  return window.localStorage.getItem(KEY) === "light" ? "light" : "dark";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  // Initial state is read lazily from storage: the server has no localStorage,
  // so it renders the default and the first client render reconciles before paint.
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    apply(storedMode());
  }, []);

  function toggle() {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    apply(next);
    window.localStorage.setItem(KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
      className={`group relative flex size-9 items-center justify-center rounded-full border border-line bg-panel/70 text-mist backdrop-blur-sm transition-colors hover:border-azure/50 hover:text-azure ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`absolute size-4 transition-all duration-500 ${mode === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M20 14.5A8.5 8.5 0 019.5 4 8.5 8.5 0 1020 14.5z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className={`absolute size-4 transition-all duration-500 ${mode === "light" ? "scale-100 rotate-0 opacity-100" : "scale-50 rotate-90 opacity-0"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
      </svg>
    </button>
  );
}
