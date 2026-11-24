import { Reveal } from "../reveal";
import { ContactForm } from "../contact-form";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-panel/70 p-8 sm:p-14">
          <div aria-hidden="true" className="absolute -top-32 left-1/2 h-80 w-[38rem] -translate-x-1/2 rounded-full bg-azure/25 blur-[110px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-[12px] font-medium tracking-[0.22em] text-azure/80 uppercase">Get in touch</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink-2 sm:text-[2.9rem]">
                Running a city, a department, or a pilot? Let&apos;s look at your workflow.
              </h2>
              <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-mist">
                We onboard one ULB at a time and adapt the rules, rate cards and SLA policies to your jurisdiction
                before a single agent answers a call.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-3">
              {[
                { label: "Partnerships & pilots", value: "partners@agentiqtech.com" },
                { label: "CivicLens product team", value: "civiclens@agentiqtech.com" },
                { label: "Careers", value: "careers@agentiqtech.com" },
              ].map((c) => (
                <a
                  key={c.value}
                  href={`mailto:${c.value}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-panel/60 px-4 py-3.5 transition-colors hover:border-azure/40 hover:bg-panel"
                >
                  <span>
                    <span className="block text-[10px] tracking-[0.16em] text-mist/70 uppercase">{c.label}</span>
                    <span className="mt-0.5 block font-mono text-[14px] text-ink-2">{c.value}</span>
                  </span>
                  <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-mist transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-ink-2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              ))}
              <p className="pt-1 text-[12px] leading-relaxed text-mist/60">
                Guwahati, Assam · India. Pilots are scoped per urban local body (ULB), one at a time.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <p className="text-sm font-semibold text-ink-2">AgentIQ Technologies</p>
          <p className="mt-2 text-[13px] leading-relaxed text-mist">
            Agentic AI for public systems. CivicLens is our civic operating system for local government.
          </p>
          <p className="mt-4 text-[12px] leading-relaxed text-mist/75">
            Product stills on this site are captured from the CivicLens pilot build and render on a synthetic
            pilot-ULB dataset. Figures are sample data, not production records.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-[13px] sm:grid-cols-3">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.16em] text-mist/60 uppercase">Product</p>
            {[
              { l: "Command centre", h: "#product" },
              { l: "Citizen app", h: "#apps" },
              { l: "Field apps", h: "#apps" },
              { l: "Asha agent", h: "#agents" },
            ].map((i) => (
              <a key={i.l} href={i.h} className="block py-1 text-mist transition-colors hover:text-ink-2">{i.l}</a>
            ))}
          </div>
          <div>
            <p className="mb-3 text-[10px] tracking-[0.16em] text-mist/60 uppercase">Company</p>
            {[
              { l: "Platform", h: "#platform" },
              { l: "Trust & safety", h: "#trust" },
              { l: "The company", h: "#team" },
              { l: "Contact", h: "#contact" },
            ].map((i) => (
              <a key={i.l} href={i.h} className="block py-1 text-mist transition-colors hover:text-ink-2">{i.l}</a>
            ))}
          </div>
          <div>
            <p className="mb-3 text-[10px] tracking-[0.16em] text-mist/60 uppercase">Languages</p>
            <p className="py-1 text-mist">অসমীয়া</p>
            <p className="py-1 text-mist">বাংলা</p>
            <p className="py-1 text-mist">বৰ&apos;</p>
            <p className="py-1 text-mist">English</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/[0.06] px-5 pt-6 text-[12px] text-mist/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 AgentIQ Technologies. All rights reserved.</p>
        <p className="font-mono">CivicLens · Guwahati ULB pilot</p>
      </div>
    </footer>
  );
}
