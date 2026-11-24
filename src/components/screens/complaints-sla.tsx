const rows = [
  { ref: "CL/GRV/2026/004182", cat: "Drain", ward: "05", status: "in-progress", sla: "6h", tone: "warn" },
  { ref: "CL/GRV/2026/004179", cat: "Streetlight", ward: "02", status: "assigned", sla: "19h", tone: "ok" },
  { ref: "CL/GRV/2026/004171", cat: "Waterlogging", ward: "11", status: "in-progress", sla: "2h", tone: "bad" },
  { ref: "CL/GRV/2026/004168", cat: "Garbage", ward: "07", status: "resolved", sla: "—", tone: "done" },
  { ref: "CL/GRV/2026/004160", cat: "Animals", ward: "09", status: "received", sla: "34h", tone: "ok" },
  { ref: "CL/GRV/2026/004154", cat: "Unauthorised construction", ward: "14", status: "reopened", sla: "11h", tone: "warn" },
];

const tone: Record<string, string> = {
  bad: "bg-red-500/15 text-red-300",
  warn: "bg-amber-500/15 text-amber-300",
  ok: "bg-sky-500/15 text-sky-300",
  done: "bg-emerald-500/15 text-emerald-300",
};

export function ComplaintsSla() {
  return (
    <div data-still className="min-h-[560px] p-3.5 text-[10px] text-[var(--still-text)]">
      <div className="flex flex-wrap items-end justify-between gap-2 border-b border-[var(--still-border)] pb-2.5">
        <div>
          <h3 className="text-[12px] font-semibold text-white">Complaints &amp; SLA</h3>
          <p className="text-[8.5px] text-[var(--still-dim)]">186 open · 23 at SLA risk · 41 resolved today</p>
        </div>
        <div className="flex gap-1.5">
          {["All wards", "Category", "SLA policy"].map((f) => (
            <span key={f} className="rounded-md border border-[var(--still-border)] bg-[var(--still-panel)] px-2 py-1 text-[8px] text-[var(--still-dim)]">{f} ⌄</span>
          ))}
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-2 lg:grid-cols-4">
        {[
          { l: "At SLA risk", v: "23", c: "text-red-300" },
          { l: "Avg first response", v: "1h 12m", c: "text-white" },
          { l: "Reopened this week", v: "9", c: "text-amber-300" },
          { l: "Resolution rate", v: "87%", c: "text-emerald-300" },
        ].map((k) => (
          <div key={k.l} className="rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
            <p className="text-[8px] text-[var(--still-dim)]">{k.l}</p>
            <p className={`font-mono text-[14px] font-semibold ${k.c}`}>{k.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-2.5 overflow-hidden rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)]">
        <table className="w-full border-collapse">
          <thead className="bg-[var(--still-panel-2)]">
            <tr className="text-[7.5px] uppercase tracking-wide text-[var(--still-dim)]">
              <th className="px-2 py-1.5 text-left font-medium">Reference</th>
              <th className="px-2 py-1.5 text-left font-medium">Category</th>
              <th className="px-2 py-1.5 text-left font-medium">Ward</th>
              <th className="px-2 py-1.5 text-left font-medium">Status</th>
              <th className="px-2 py-1.5 text-left font-medium">AI triage</th>
              <th className="px-2 py-1.5 text-right font-medium">SLA left</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.ref} className="border-t border-[var(--still-border)]">
                <td className="px-2 py-[7px] font-mono text-[8.5px] text-white">{r.ref}</td>
                <td className="px-2 py-[7px] text-[8.5px] text-[var(--still-dim)]">{r.cat}</td>
                <td className="px-2 py-[7px] font-mono text-[8.5px] text-[var(--still-dim)]">W{r.ward}</td>
                <td className="px-2 py-[7px]">
                  <span className={`rounded-full px-1.5 py-[1px] text-[7.5px] font-medium ${tone[r.tone]}`}>{r.status}</span>
                </td>
                <td className="px-2 py-[7px]">
                  <span className="flex items-center gap-1 text-[8px] text-[var(--still-dim)]">
                    <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="#9d7bff" strokeWidth="2" strokeLinecap="round"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" /></svg>
                    {r.cat === "Drain" ? "Engineering / P2" : r.cat === "Garbage" ? "Sanitation / P1" : "Engineering / P3"}
                  </span>
                </td>
                <td className="px-2 py-[7px] text-right font-mono text-[8.5px] text-[var(--still-text)]">{r.sla}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2.5 grid gap-2 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
          <p className="mb-1.5 text-[8px] tracking-wider text-[var(--still-dim)] uppercase">Complaint timeline · CL/GRV/2026/004182</p>
          {[
            { t: "06:41", e: "Received · voice intake, Assamese", c: "bg-[#4c8dff]" },
            { t: "06:41", e: "Triage suggestion attached (Drainage / P2)", c: "bg-[#9d7bff]" },
            { t: "07:05", e: "Assigned to Engineering, ward 05", c: "bg-[#3ee0b0]" },
            { t: "09:12", e: "Field photo uploaded · private, scanned", c: "bg-[#3ee0b0]" },
            { t: "—", e: "Awaiting closure evidence", c: "bg-[#33405a]" },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-1.5 pb-1.5 last:pb-0">
              <span className={`mt-[3px] size-1.5 shrink-0 rounded-full ${s.c}`} />
              <span className="w-8 shrink-0 font-mono text-[7.5px] text-[var(--still-dim)]">{s.t}</span>
              <span className="text-[8px] text-[var(--still-dim)]">{s.e}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
          <p className="mb-1.5 text-[8px] tracking-wider text-[var(--still-dim)] uppercase">Fleet on route · 15s ping</p>
          {[
            { v: "AS-01-MC-3312", w: "W05", s: "on-route", p: 74 },
            { v: "AS-01-MC-1180", w: "W02", s: "on-route", p: 41 },
            { v: "AS-01-MC-4407", w: "W11", s: "idle", p: 0 },
            { v: "AS-01-MC-2205", w: "W07", s: "maintenance", p: 0 },
          ].map((v) => (
            <div key={v.v} className="border-b border-[var(--still-border)] py-[4px] last:border-0">
              <div className="flex items-center justify-between font-mono text-[8px]">
                <span className="text-white">{v.v}</span>
                <span className={v.s === "on-route" ? "text-[#3ee0b0]" : v.s === "idle" ? "text-[var(--still-dim)]" : "text-[#ffb454]"}>{v.s}</span>
              </div>
              <div className="mt-[2px] h-[3px] overflow-hidden rounded-full bg-[#1b2234]">
                <div className="h-full rounded-full bg-[#4c8dff]" style={{ width: `${v.p}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
