"use client";

import { useEffect, useState } from "react";
import { DesktopFrame, PhoneFrame } from "./device-frame";
import { HeroFunnel } from "./hero-funnel";
import { AdminCommandCentre } from "./screens/admin-command-centre";
import { CitizenHome } from "./screens/citizen";

const lines = [
  "Speech → text · as → en",
  "Intent: garbage route not served today",
  "Locate: holding 05-2281 · Ward 05",
  "Check: vehicle AS-01-MC-3312 · schedule 06:30–08:00",
  "Draft complaint — evidence attached",
  "Route: Sanitation & fleet · human decides",
];

function LiveStrip() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % (lines.length + 2)), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-[268px] overflow-hidden rounded-xl border border-line bg-panel/95 p-2.5 backdrop-blur-md shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-line pb-1.5">
        <span className="animate-blip size-1.5 rounded-full bg-mint" />
        <span className="font-mono text-[8.5px] tracking-wide text-mist">ASHA · ULB PILOT · LIVE</span>
      </div>
      <ul className="mt-1.5 space-y-[3px] font-mono text-[8.5px] leading-relaxed">
        {lines.map((l, i) => (
          <li
            key={l}
            className={`truncate transition-all duration-500 ${
              i < step ? "text-mist" : i === step ? "text-mint" : "text-ink-2/25"
            }`}
          >
            <span className="text-ink-2/30">{i < step ? "✓" : "›"}</span> {l}
          </li>
        ))}
      </ul>
      <div className="mt-1.5 flex items-center justify-between border-t border-white/[0.07] pt-1.5 text-[8px] text-mist/70">
        <span>human decides</span>
        <span className="font-mono text-mint">CL/GRV/2026/004182</span>
      </div>
    </div>
  );
}

export function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <HeroFunnel />
      {/* Scrim: keeps headline contrast stable over the moving backdrop in both modes. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_58%_46%_at_50%_14%,var(--page)_0%,color-mix(in_oklab,var(--page)_72%,transparent)_52%,transparent_78%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(76,141,255,0.22),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-float inline-flex items-center gap-2 rounded-full border border-line bg-[var(--chip)] px-3 py-1.5 text-[12px] font-medium text-mist backdrop-blur-sm">
            <span className="flex size-1.5 rounded-full bg-mint" />
            AgentIQ Technologies · now launching CivicLens in a Guwahati ULB pilot
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[4.4rem]">
            <span className="text-gradient">Agentic AI for the systems</span>
            <br />
            <span className="text-body dark:text-white">a city runs on.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-mist sm:text-lg">
            We build AI agents that do real operational work — inside the rules, on the record,
            with a human signing every outcome. Our first product, <span className="font-medium text-ink-2">CivicLens</span>,
            is the civic operating system for local government.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#product"
              className="group inline-flex items-center gap-2 rounded-full bg-azure-solid px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              See CivicLens in action
              <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-[var(--chip)] px-5 py-3 text-sm font-medium text-ink-2 backdrop-blur-sm transition-colors hover:border-azure/50 hover:bg-azure/10"
            >
              Partner with us
            </a>
          </div>
          {children}
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div aria-hidden="true" className="absolute -inset-x-10 -top-6 bottom-0 -z-10 rounded-[3rem] bg-azure/10 blur-3xl" />

          <div className="relative rounded-2xl border border-line bg-panel p-1.5 shadow-[0_60px_160px_-60px_rgba(0,0,0,0.55)] light:shadow-[0_40px_100px_-50px_rgba(30,60,120,0.35)]">
            <div className="animate-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            <DesktopFrame label="civiclens.admin — /dashboard" className="rounded-xl border-0 shadow-none">
              <div className="relative">
                <AdminCommandCentre />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-panel to-transparent" />
              </div>
            </DesktopFrame>
          </div>

          <div className="absolute -bottom-10 -left-2 hidden lg:-left-14 lg:block">
            <div className="animate-float-slow">
              <PhoneFrame className="scale-[0.82] origin-bottom-left">
                <CitizenHome />
              </PhoneFrame>
            </div>
          </div>

          <div className="absolute -right-2 -top-8 hidden lg:-right-10 lg:block">
            <div className="animate-float">
              <LiveStrip />
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-10">
          <div className="mask-fade-x overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-10 opacity-60">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex items-center gap-10">
                  {[
                    "Complaints & SLA",
                    "Holdings & tax",
                    "Fleet & dispatch",
                    "Surveillance & incidents",
                    "Flood & drainage",
                    "Buildings & inspection",
                    "Voice & chat intake",
                    "Approvals & audit",
                    "Financial ledger",
                    "Schemes & planning",
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-2.5 whitespace-nowrap text-[12px] font-medium tracking-wide text-mist uppercase">
                      <span className="size-1 rounded-full bg-azure/70" />
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
