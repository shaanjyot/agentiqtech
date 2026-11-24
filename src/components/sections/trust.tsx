import { Reveal } from "../reveal";

const principles = [
  {
    t: "Humans decide outcomes",
    d: "AI recommendations stay attached to their evidence; approval pins the entity version it approved. Statutory, financial and employment outcomes are always a named human's signature.",
    d2: "M11 21a9 9 0 100-18 9 9 0 000 18zM9 12l2 2 4-4",
  },
  {
    t: "Tool permissions are enforced",
    d: "Agents act through typed tools with allow-lists. Unauthorised tool attempts are counted and blocked in the command centre, not discovered later in a log.",
    d2: "M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7zM9 12l2 2 4-4",
  },
  {
    t: "A citizen sees their own record",
    d: "Row-level security separates citizen profiles from staff accounts. A citizen token has no path to administrative data — the database refuses it, not the UI.",
    d2: "M12 11a3 3 0 100-6 3 3 0 000 6zM5 20a7 7 0 0114 0",
  },
  {
    t: "Disclosed, not disguised",
    d: "Citizens are told they are talking to an assistant, not an officer. Confidence and language are recorded on every intake.",
    d2: "M21 12a8 8 0 01-8 8H7l-4 3V12a8 8 0 018-8h2a8 8 0 018 8z",
  },
  {
    t: "Integrity invariants",
    d: "Payment mismatches are quarantined, duplicate webhooks post once, unbalanced journals are surfaced, and stale GPS is flagged instead of smoothed over.",
    d2: "M4 6h16M4 12h16M4 18h10",
  },
  {
    t: "Honest about what it is",
    d: "The pilot runs on a synthetic dataset with a stated planning envelope. Sample figures are labelled as sample figures — no rule in it is described as statutory.",
    d2: "M12 8h.01M11 12h1v5h1",
  },
];

export function Trust() {
  return (
    <section id="trust" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[12px] font-medium tracking-[0.22em] text-mint/80 uppercase">Trust by construction</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink-2 sm:text-[3rem]">
            In government, &ldquo;the model was confident&rdquo; is not an answer.
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-mist">
            These are the constraints we design against — not a policy page bolted on after the agent shipped.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 80} className="group bg-ink p-6 transition-colors duration-500 hover:bg-ink-2 light:hover:bg-white">
              <div className="flex size-9 items-center justify-center rounded-lg border border-line bg-[var(--chip)] text-mint transition-colors group-hover:border-mint/40">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d={p.d2} />
                </svg>
              </div>
              <h3 className="mt-5 text-[15px] font-semibold text-ink-2">{p.t}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-mist">{p.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-6 grid gap-4 lg:grid-cols-3">
          {[
            { k: "100k", l: "holdings", h: "Planning envelope" },
            { k: "20k", l: "monthly citizens", h: "Planning envelope" },
            { k: "250", l: "staff · 50 vehicles", h: "Planning envelope" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-line bg-[var(--chip)] px-5 py-4">
              <p className="text-[10px] tracking-[0.16em] text-mist/70 uppercase">{s.h}</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight text-ink-2">
                {s.k} <span className="text-[14px] font-normal text-mist">{s.l}</span>
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
