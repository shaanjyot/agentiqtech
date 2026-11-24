import { Reveal } from "../reveal";

const sections = [
  { n: "Command centre", d: "KPIs, live fleet, surveillance, approvals, integrity watch", g: "Core" },
  { n: "Approvals & audit", d: "Risk-tagged queue; approval pins the entity version", g: "Core" },
  { n: "Holdings & tax", d: "Demand, paid, arrears in paise; KYC and linked vehicles", g: "Revenue & registry" },
  { n: "Wards & boundaries", d: "Surveyed GeoJSON rings, population, waste TPD", g: "Revenue & registry" },
  { n: "Financial ledger", d: "Balanced journals; duplicate webhooks post once", g: "Revenue & registry" },
  { n: "Rules & rate cards", d: "Assessment rules that agents must obey", g: "Revenue & registry" },
  { n: "Complaints & SLA", d: "Reference, category, timeline, reopen, SLA policy", g: "Service delivery" },
  { n: "Voice & chat intake", d: "Bilingual transcripts, confidence, evidence", g: "Service delivery" },
  { n: "Fleet & dispatch", d: "Vehicles, routes, 15s pings, stale-GPS detection", g: "Service delivery" },
  { n: "Surveillance & incidents", d: "Camera wall with stills, HLS video, incident log", g: "Service delivery" },
  { n: "Flood & drainage", d: "Drain network, waterlogging risk by ward", g: "Service delivery" },
  { n: "Buildings & inspection", d: "Approved floors vs actual, setback deviations", g: "Service delivery" },
  { n: "Agent registry", d: "Agents, skills and needs-check flags", g: "AI & voice" },
  { n: "Voice & calls", d: "Calls, AI handling, transfers, p50/p95 latency", g: "AI & voice" },
  { n: "Schemes & planning", d: "PMAY-U, SBM-U 2.0, AMRUT physical progress", g: "Programme & people" },
  { n: "Staff & field sync", d: "Field commands pending sync, staff accounts", g: "Programme & people" },
  { n: "Account & settings", d: "Roles, permissions, ward scoping, overrides", g: "Programme & people" },
];

const roles = [
  "Primary administrator",
  "Department administrator",
  "Officer",
  "Supervisor",
  "Field staff",
  "Auditor",
];

export function Platform() {
  return (
    <section id="platform" className="relative py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-24">
            <p className="text-[12px] font-medium tracking-[0.22em] text-azure/80 uppercase">Platform</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink-2 sm:text-[2.7rem]">
              Seventeen sections. Six roles. One permissioned data model.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-mist">
              CivicLens stores every record in one governed database with row-level security. Roles, departments, wards and per-user permission
              overrides decide what a login can even see — the navigation is filtered, not just the buttons. It is designed
              in the language of the ULB: wards, holdings, rate cards and SLA policies as the urban local body already runs them.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {roles.map((r) => (
                <span key={r} className="rounded-full border border-line bg-[var(--chip)] px-3 py-1.5 text-[12px] text-mist">
                  {r}
                </span>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "One console", v: "Every department, one place" },
                { k: "Field apps", v: "Works offline, syncs when online" },
                { k: "Governed data", v: "Scoped access, full audit trail" },
                { k: "Agent runtime", v: "Policy-bound, evidence-linked" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-line bg-[var(--chip)] px-3 py-2.5">
                  <p className="text-[13.5px] font-semibold text-ink-2">{s.k}</p>
                  <p className="text-[10.5px] text-mist">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-2 sm:grid-cols-2">
            {sections.map((s, i) => (
              <Reveal
                key={s.n}
                delay={(i % 6) * 45}
                className="group rounded-xl border border-line bg-[var(--chip)] p-4 transition-colors duration-300 hover:border-azure/40 hover:bg-azure/[0.06]"
              >
                <p className="text-[10px] font-medium tracking-[0.14em] text-azure/60 uppercase">{s.g}</p>
                <p className="mt-1.5 text-[14.5px] font-semibold text-ink-2">{s.n}</p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-mist">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
