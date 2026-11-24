"use client";

import { useEffect, useState } from "react";
import { AgentIQMark } from "./brand-mark";
import { ThemeToggle } from "./theme";

export const LOGIN_URL = "https://civiclens.agentiqtech.si/login";

const links = [
  { href: "#product", label: "CivicLens" },
  { href: "#platform", label: "Platform" },
  { href: "#agents", label: "Agents" },
  { href: "#apps", label: "Apps" },
  { href: "#trust", label: "Trust" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <AgentIQMark className="size-8 transition-transform duration-500 group-hover:rotate-6" />
          <span className="flex flex-col leading-none">
            <span className="text-[16px] font-semibold tracking-tight text-ink-2">AgentIQ</span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.18em] text-mist/70 uppercase">
              Technologies
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm text-mist transition-colors hover:bg-[var(--chip)] hover:text-ink-2"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={LOGIN_URL}
            className="hidden rounded-full border border-line bg-[var(--chip)] px-4 py-2 text-sm font-medium text-ink-2 transition-all hover:border-azure/50 hover:bg-azure/10 sm:block"
          >
            Log in
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-azure-solid px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 md:block"
          >
            Talk to us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full border border-line text-ink-2 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-3 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2.5 text-sm text-mist hover:bg-[var(--chip)] hover:text-ink-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LOGIN_URL}
            className="mt-1 flex items-center justify-center rounded-full bg-azure-solid px-4 py-2.5 text-sm font-semibold text-white"
          >
            Log in to CivicLens
          </a>
        </div>
      )}
    </header>
  );
}
