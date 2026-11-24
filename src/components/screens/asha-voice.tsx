export function AshaVoice() {
  return (
    <div data-still className="flex min-h-[560px] text-[10px] text-[var(--still-text)]">
      <aside className="hidden w-[150px] shrink-0 border-r border-[var(--still-border)] bg-[var(--still-head)] p-2.5 sm:block">
        <p className="mb-1.5 text-[8px] font-medium tracking-wider text-[var(--still-dim)] uppercase">AI &amp; voice</p>
        {[
          { n: "Agent registry", on: false },
          { n: "Voice & calls", on: true },
        ].map((i) => (
          <div key={i.n} className={`flex items-center gap-1.5 rounded-md px-2 py-[5px] text-[9px] ${i.on ? "bg-[#4c8dff]/15 text-white" : "text-[var(--still-dim)]"}`}>
            <span className={`size-1.5 rounded-full ${i.on ? "bg-[#3ee0b0]" : "bg-[#33405a]"}`} />
            {i.n}
          </div>
        ))}
        <div className="mt-4 rounded-md border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
          <p className="text-[8px] text-[var(--still-dim)]">Calls today</p>
          <p className="font-mono text-[15px] font-semibold text-white">312</p>
          <p className="text-[7.5px] text-[#3ee0b0]">71% handled by AI</p>
        </div>
        <div className="mt-2 space-y-1 text-[8px] text-[var(--still-dim)]">
          <p className="flex justify-between"><span>Human transfers</span><span className="font-mono text-white">41</span></p>
          <p className="flex justify-between"><span>Callbacks queued</span><span className="font-mono text-white">8</span></p>
          <p className="flex justify-between"><span>p50 latency</span><span className="font-mono text-white">640ms</span></p>
          <p className="flex justify-between"><span>Barge-in p95</span><span className="font-mono text-white">210ms</span></p>
        </div>
      </aside>

      <div className="min-w-0 flex-1 p-3">
        <div className="flex items-center justify-between border-b border-[var(--still-border)] pb-2">
          <div className="flex items-center gap-2">
            <span className="relative flex size-7 items-center justify-center rounded-full bg-[#3ee0b0]/15 text-[#3ee0b0]">
              <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 3v10M8 7v4M16 7v4M5 9v2M19 9v2M12 17v3" />
              </svg>
            </span>
            <div>
              <h3 className="text-[11px] font-semibold text-white">Asha · live call</h3>
              <p className="text-[8px] text-[var(--still-dim)]">ashaLocaleV2 · policy SLA-ASA-v1 · channel voice</p>
            </div>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-red-500/15 px-2 py-0.5 text-[8px] text-red-300">
            <span className="animate-blip size-1 rounded-full bg-red-400" /> recording · 01:42
          </span>
        </div>

        <div className="mt-2 grid gap-2 lg:grid-cols-[1.25fr_1fr]">
          <div className="space-y-1.5 rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
            <p className="text-[8px] tracking-wider text-[var(--still-dim)] uppercase">Transcript · Assamese → English</p>
            {[
              { who: "citizen", as: "মোৰ বাহৰত আজি গাৰ্বেজি গাড়ি অহিলা নাঃ", en: "The garbage van did not come to my street today." },
              { who: "agent", as: "আপুনাৰ ৱাৰ্ডত AS-01-MC-3312 রুট সাকালী ৫:৩০–৮:০০ ত গাড়ি সেইৱা করিংছে ৥৫", en: "Vehicle AS-01-MC-3312 on your ward route is scheduled 06:30–08:00." },
              { who: "agent", as: "মুঃ স্ব্বেচ্ছাৰে এটা অভিযোগ হিছাপে পৰ্যবেক্ষা কৰিবো নে?", en: "Shall I register this as a complaint for review?" },
              { who: "citizen", as: "হেঁ, এটা কৰিবা", en: "Yes, please do." },
            ].map((t, i) => (
              <div key={i} className={`rounded-md p-1.5 ${t.who === "agent" ? "bg-[#4c8dff]/10" : "bg-[var(--still-panel-2)]"}`}>
                <p className="text-[7px] font-medium tracking-wide uppercase text-[var(--still-dim)]">{t.who === "agent" ? "Asha" : "Citizen"}</p>
                <p className="mt-0.5 text-[9.5px] text-[var(--still-text)]">{t.as}</p>
                <p className="mt-0.5 border-l border-[#3ee0b0]/40 pl-1.5 text-[8px] italic text-[var(--still-dim)]">{t.en}</p>
              </div>
            ))}
            <div className="flex items-center gap-1 rounded-md border border-[#3ee0b0]/30 bg-[#3ee0b0]/[0.07] px-1.5 py-1">
              <span className="rounded bg-[#3ee0b0] px-1 py-[1px] text-[7px] font-semibold text-black">CREATED</span>
              <span className="font-mono text-[8px] text-[var(--still-text)]">CL/GRV/2026/004182</span>
              <span className="ml-auto text-[7.5px] text-[var(--still-dim)]">SLA due 08 Nov, 22:00 IST · SLA-DRN-v4</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
              <p className="mb-1 text-[8px] tracking-wider text-[var(--still-dim)] uppercase">Memory recall · typed</p>
              {[
                { k: "fact", t: "Holding 05-2281 · linked, Ward 05", c: "#4c8dff" },
                { k: "preference", t: "Language: Assamese (as)", c: "#9d7bff" },
                { k: "history", t: "Streetlight fixed · Aug 2026", c: "#3ee0b0" },
                { k: "consent", t: "Photo + callback: granted", c: "#ffb454" },
              ].map((m) => (
                <div key={m.t} className="flex items-center gap-1.5 border-b border-[var(--still-border)] py-[3px] last:border-0">
                  <span className="rounded px-1 py-[1px] text-[6.5px] font-semibold uppercase" style={{ background: `${m.c}22`, color: m.c }}>
                    {m.k}
                  </span>
                  <span className="truncate text-[8px] text-[var(--still-dim)]">{m.t}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
              <p className="mb-1 text-[8px] tracking-wider text-[var(--still-dim)] uppercase">Guardrails</p>
              <ul className="space-y-[3px] text-[8px] text-[var(--still-dim)]">
                <li className="flex items-center justify-between"><span>Disclosure played</span><span className="font-mono text-[#3ee0b0]">yes</span></li>
                <li className="flex items-center justify-between"><span>Confidence</span><span className="font-mono text-white">0.94</span></li>
                <li className="flex items-center justify-between"><span>Money / status changes</span><span className="font-mono text-[#ffb454]">human only</span></li>
                <li className="flex items-center justify-between"><span>Evidence attached</span><span className="font-mono text-[#3ee0b0]">1 photo</span></li>
              </ul>
            </div>

            <div className="rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
              <p className="mb-1.5 text-[8px] tracking-wider text-[var(--still-dim)] uppercase">Routes to department</p>
              {[
                { d: "Engineering", r: 62 },
                { d: "Sanitation & fleet", r: 24 },
                { d: "Revenue & assessment", r: 9 },
                { d: "Town planning", r: 5 },
              ].map((r) => (
                <div key={r.d} className="mb-1">
                  <div className="flex justify-between text-[7.5px] text-[var(--still-dim)]"><span>{r.d}</span><span className="font-mono">{r.r}%</span></div>
                  <div className="mt-px h-[3px] overflow-hidden rounded-full bg-[#1b2234]">
                    <div className="h-full rounded-full bg-[#4c8dff]" style={{ width: `${r.r}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
