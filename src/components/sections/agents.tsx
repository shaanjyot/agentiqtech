import { Reveal } from "../reveal";

const memory = [
  { k: "fact", t: "Holding 05-2281 · linked, Ward 05", c: "text-azure-2 border-azure/30 bg-azure/10" },
  { k: "preference", t: "Language: Assamese (as)", c: "text-violet border-violet/30 bg-violet/10" },
  { k: "history", t: "Streetlight fixed · Aug 2026", c: "text-mint border-mint/30 bg-mint/10" },
  { k: "consent", t: "Photo + callback: granted", c: "text-amber border-amber/30 bg-amber/10" },
];

const prompts = [
  "What happened to my complaint?",
  "Did the garbage van come today?",
  "The street light is out again",
  "How much tax do I owe?",
];

const steps = [
  { n: "01", t: "Intake", d: "Voice or chat, in the citizen's language, with disclosure that Asha is an assistant and not an officer." },
  { n: "02", t: "Recall", d: "Typed memory — facts, preferences, history and consent — recalled by keyword, deterministically." },
  { n: "03", t: "Act", d: "Registers or tracks the complaint, attaches evidence, sets the SLA from the policy in force." },
  { n: "04", t: "Escalate", d: "Anything outside its mandate becomes a callback or a transfer to a human, with the transcript attached." },
];

export function Agents() {
  return (
    <section id="agents" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-1/4 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet/15 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <p className="text-[12px] font-medium tracking-[0.22em] text-violet/80 uppercase">The agent</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink-2 sm:text-[3rem]">
              Meet <span className="text-gradient">Asha</span> — a civic support agent that keeps its receipts.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-mist">
              Asha runs on a purpose-built civic agent with policy <span className="font-mono text-[14px] text-ink-2/80">SLA-ASA-v1</span> and
              a locale-tuned model. It speaks Assamese, Bengali, Bodo and English, and it says so up front:
            </p>

            <blockquote className="mt-5 border-l-2 border-mint/50 pl-4 text-[15px] leading-relaxed text-ink-2/85 italic">
              &ldquo;Asha is an assistant, not an officer. It can register and track complaints; a human decides outcomes.&rdquo;
            </blockquote>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 70} className="rounded-xl border border-line bg-[var(--chip)] p-4">
                  <p className="font-mono text-[10px] text-mint/80">{s.n} · {s.t}</p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-mist">{s.d}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_50px_120px_-50px_rgba(0,0,0,0.55)] light:shadow-[0_30px_80px_-50px_rgba(30,60,120,0.35)]">
              <div className="flex items-center justify-between border-b border-line bg-[var(--chip)] px-4 py-2.5">
                <span className="flex items-center gap-2 font-mono text-[10.5px] text-mist">
                  <span className="animate-blip size-1.5 rounded-full bg-mint" /> asha · live call
                </span>
                <span className="font-mono text-[10px] text-mist/60">ashaLocaleV2 · policy-bound</span>
              </div>

              <div className="space-y-3 p-4">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-azure-solid px-3.5 py-2.5 text-[14px] text-white">
                  মোৰ বাহৰত আজি গাৰ্বেজি গাড়ি অহিলা নাঃ
                  <span className="mt-1.5 block border-t border-white/25 pt-1.5 text-[12px] text-white/70 italic">
                    The garbage van did not come to my street today.
                  </span>
                </div>

                <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-line bg-[var(--chip)] px-3.5 py-2.5 text-[14px] text-ink-2">
                  আপুনাৰ ৱাৰ্ডত AS-01-MC-3312 রুট সাকালী ৫:৩০–৮:০০ ত গাড়ি সেইৱা করিংছে। এটা অভিযোগ হিসাপে পৰ্যবেক্ষা কৰিবো নে?
                  <span className="mt-1.5 block border-t border-white/10 pt-1.5 text-[12px] text-mist italic">
                    Vehicle AS-01-MC-3312 on your ward route is scheduled 06:30–08:00. Shall I register this as a complaint for review?
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-mint/30 bg-mint/[0.07] px-3 py-2">
                  <span className="rounded bg-mint px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-[#05070d]">CREATED</span>
                  <span className="font-mono text-[12px] text-ink-2">CL/GRV/2026/004182</span>
                  <span className="ml-auto font-mono text-[10px] text-mist/70">SLA 08 Nov · SLA-DRN-v4</span>
                </div>

                <div>
                  <p className="mb-2 font-mono text-[10px] tracking-wider text-mist/60 uppercase">Memory recall · typed</p>
                  <div className="space-y-1.5">
                    {memory.map((m, i) => (
                      <div
                        key={m.t}
                        className="flex items-center gap-2 rounded-lg border border-line bg-[var(--chip)] px-2.5 py-1.5"
                        style={{ animationDelay: `${i * 120}ms` }}
                      >
                        <span className={`rounded border px-1.5 py-0.5 text-[9px] font-semibold uppercase ${m.c}`}>{m.k}</span>
                        <span className="truncate text-[11.5px] text-ink-2/75">{m.t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {prompts.map((p) => (
                    <span key={p} className="rounded-full border border-line bg-[var(--chip)] px-2.5 py-1 text-[10.5px] text-mist">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
