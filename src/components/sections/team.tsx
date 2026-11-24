import { Reveal } from "../reveal";

const team = [
  {
    role: "Founder & Chief Executive",
    name: "Product & partnerships",
    desc: "Owns the CivicLens roadmap, ULB relationships and what ships against a pilot.",
    d: "M12 3l2.6 6.2 6.7.5-5.1 4.4 1.6 6.6L12 17.2 6.2 20.7l1.6-6.6L2.7 9.7l6.7-.5z",
  },
  {
    role: "Engineering",
    name: "Agents & platform",
    desc: "Agent behaviour, policy enforcement, tool permissions and the command centre.",
    d: "M12 3v3M12 18v3M4.5 7.5l2 2M17.5 14.5l2 2M3 12h3M18 12h3M4.5 16.5l2-2M17.5 9.5l2-2",
  },
  {
    role: "Field engineering",
    name: "Citizen, driver & surveyor apps",
    desc: "Offline-first mobile apps built for patchy networks and shared phones.",
    d: "M7 3h10v18H7zM10 18h4",
  },
  {
    role: "Governance & security",
    name: "Data boundaries",
    desc: "RBAC, audit logs, citizen/staff separation and approval gates by design.",
    d: "M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7z",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.22em] text-azure/80 uppercase">The company</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] text-ink-2 sm:text-[2.7rem] sm:leading-[1.1]">
              Built by people who ran ward operations, not only the IDE.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-mist">
              AgentIQ Technologies is an agentic AI product company. We do not sell a model — we ship systems
              that change the state of a record, with the guardrails a government auditor will ask about.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { k: "One", v: "ULB in operational pilot" },
                { k: "Four", v: "apps on one data model" },
                { k: "Four", v: "languages at the citizen edge" },
              ].map((s) => (
                <div key={s.v}>
                  <p className="text-2xl font-semibold tracking-tight text-ink-2">{s.k}</p>
                  <p className="mt-1 max-w-[9rem] text-[12px] leading-snug text-mist">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {team.map((t, i) => (
              <Reveal
                key={t.role}
                delay={i * 80}
                className="group relative overflow-hidden rounded-2xl border border-line bg-[var(--chip)] p-5 transition-colors duration-500 hover:border-azure/40 hover:bg-azure/[0.06]"
              >
                <div className="flex size-9 items-center justify-center rounded-lg border border-line bg-[var(--chip)] text-azure transition-colors group-hover:text-mint">
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={t.d} />
                  </svg>
                </div>
                <p className="mt-5 text-[10px] font-medium tracking-[0.16em] text-mist/70 uppercase">{t.role}</p>
                <p className="mt-1.5 text-[15px] font-semibold text-ink-2">{t.name}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-mist">{t.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
