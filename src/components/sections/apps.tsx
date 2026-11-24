import { Reveal } from "../reveal";
import { PhoneFrame } from "../device-frame";
import { CitizenHome, CitizenComplaint, CitizenTrack, CitizenAsha, CitizenTax } from "../screens/citizen";
import { DriverToday, SurveyorList } from "../screens/field";

const citizenScreens = [
  { el: <CitizenHome />, label: "Home", note: "Dues, collection vehicle, six services" },
  { el: <CitizenComplaint />, label: "Register a complaint", note: "7 categories, photo, offline draft" },
  { el: <CitizenTrack />, label: "Garbage tracking", note: "Live vehicle, route progress, complaint timeline" },
  { el: <CitizenAsha />, label: "Asha · voice & chat", note: "4 languages, memory-grounded answers" },
  { el: <CitizenTax />, label: "Property tax", note: "Demand, arrears, penalty, receipts" },
];

const features = [
  { t: "Works offline", d: "Complaints and survey records save on the phone first and sync when there is signal." },
  { t: "Private by default", d: "Citizen photos are stored privately and scanned before an official opens them." },
  { t: "No admin leakage", d: "A citizen token has no path to administrative data — enforced in the database, not the UI." },
  { t: "Shared-phone ready", d: "Language, consent and callback preference are remembered per citizen, not per device." },
];

export function Apps() {
  return (
    <section id="apps" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[12px] font-medium tracking-[0.22em] text-azure/80 uppercase">Four apps · one data model</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink-2 sm:text-[3.1rem]">
            The citizen, the driver and the surveyor get real software too.
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-mist">
            Most civic platforms stop at the dashboard. CivicLens ships the field as well — offline-first mobile apps
            for citizens, waste-vehicle drivers and field surveyors, all writing to the same permissioned ULB record.
          </p>
        </Reveal>

        <div className="mask-fade-x -mx-5 mt-14 overflow-hidden px-5 sm:mx-0 sm:px-0">
          <div className="flex w-max items-end gap-5 animate-marquee-rev hover:[animation-play-state:paused]">
            {[...citizenScreens, ...citizenScreens].map((s, i) => (
              <div key={i} className="w-[268px] shrink-0">
                <PhoneFrame className="transition-transform duration-500 hover:-translate-y-2">{s.el}</PhoneFrame>
                <p className="mt-4 text-center text-[13.5px] font-semibold text-ink-2">{s.label}</p>
                <p className="mt-1 text-center text-[12px] text-mist">{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Reveal className="rounded-2xl border border-line bg-[var(--chip)] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-mint/80 uppercase">Citizen app</p>
                <h3 className="mt-2 text-xl font-semibold text-ink-2">The citizen-facing edge</h3>
              </div>
              <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1 text-[10px] font-semibold text-mint">Live in pilot</span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.t} className="rounded-xl border border-line bg-panel/60 p-3.5">
                  <p className="text-[13.5px] font-semibold text-ink-2">{f.t}</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-mist">{f.d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={80} className="flex flex-col items-center">
              <PhoneFrame tone="dark" className="scale-[0.86] origin-top">
                <DriverToday />
              </PhoneFrame>
              <div className="-mt-6 px-2 text-center">
                <p className="font-mono text-[10px] tracking-[0.16em] text-azure/80 uppercase">Driver</p>
                <p className="mt-1 text-[13.5px] font-semibold text-ink-2">Today&apos;s route</p>
                <p className="mt-1 text-[12px] leading-relaxed text-mist">Shift progress, next stop, offline queue and a reason every time a stop is skipped.</p>
              </div>
            </Reveal>
            <Reveal delay={160} className="flex flex-col items-center">
              <PhoneFrame tone="dark" className="scale-[0.86] origin-top">
                <SurveyorList />
              </PhoneFrame>
              <div className="-mt-6 px-2 text-center">
                <p className="font-mono text-[10px] tracking-[0.16em] text-violet/80 uppercase">Surveyor</p>
                <p className="mt-1 text-[13.5px] font-semibold text-ink-2">Verify holding</p>
                <p className="mt-1 text-[12px] leading-relaxed text-mist">Door-to-door holding surveys with a daily target and property-only photos.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
