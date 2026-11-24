import type { ReactNode } from "react";

function Icon({ d, className = "size-3.5" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const navGroups: { label?: string; items: { name: string; d: string; active?: boolean }[] }[] = [
  {
    items: [
      { name: "Command centre", d: "M3 12h4l3-8 4 16 3-8h4", active: true },
      { name: "Approvals & audit", d: "M9 12l2 2 4-4M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7z" },
    ],
  },
  {
    label: "Revenue & registry",
    items: [
      { name: "Holdings & tax", d: "M3 10l9-6 9 6v10H3zM9 20v-6h6v6" },
      { name: "Wards & boundaries", d: "M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3z" },
      { name: "Financial ledger", d: "M4 5h16v14H4zM4 10h16M8 14h4" },
      { name: "Rules & rate cards", d: "M4 6h16M4 12h10M4 18h7M17 15l3 3-3 3" },
    ],
  },
  {
    label: "Service delivery",
    items: [
      { name: "Complaints & SLA", d: "M21 12a8 8 0 01-8 8H7l-4 3V12a8 8 0 018-8h2a8 8 0 018 8z" },
      { name: "Voice & chat intake", d: "M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zM5 11a7 7 0 0014 0M12 18v3" },
      { name: "Fleet & dispatch", d: "M3 16V7h11v9M14 11h4l3 3v2h-7M6.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" },
      { name: "Surveillance & incidents", d: "M2 7h13a2 2 0 012 2v6a2 2 0 01-2 2H2zM17 12l5-4v8l-5-4z" },
      { name: "Flood & drainage", d: "M3 12c3-3 6-3 9 0s6 3 9 0M3 18c3-3 6-3 9 0s6 3 9 0" },
      { name: "Buildings & inspection", d: "M4 21V6l7-3v18M11 21V9l9 3v9M14 14h3M14 17h3" },
    ],
  },
  {
    label: "AI & voice",
    items: [
      { name: "Agent registry", d: "M12 3v3M12 18v3M4.5 7.5l2 2M17.5 14.5l2 2M3 12h3M18 12h3M4.5 16.5l2-2M17.5 9.5l2-2" },
      { name: "Voice & calls", d: "M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" },
    ],
  },
  {
    label: "Programme & people",
    items: [
      { name: "Schemes & planning", d: "M4 19V5h10l2 3h4v11zM8 12h8M8 15h5" },
      { name: "Staff & field sync", d: "M9 11a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M17 11a3 3 0 100-6M21 20a5 5 0 00-3-4.6" },
    ],
  },
];

const kpis = [
  { label: "Collected this FY26-27", value: "₹19.80 Cr", delta: "58% of demand", note: "Reconciled to ledger" },
  { label: "Outstanding arrears", value: "₹14.42 Cr", delta: "6,418 holdings", note: "Authorised officials only" },
  { label: "Open complaints", value: "186", delta: "23 at SLA risk", note: "41 resolved today" },
  { label: "Approvals waiting", value: "12", delta: "human decides", note: "Statutory & financial" },
];

const approvals = [
  { task: "Refund · tax", subject: "Ward 09 · overpayment on holding 09-1142", risk: "high", tone: "bad", auth: "Commissioner", age: "26" },
  { task: "Vehicle · dispatch", subject: "Reassign AS-01-MC-3312 to Ward 05 transfer run", risk: "medium", tone: "warn", auth: "Sanitation", age: "14" },
  { task: "Building · deviation", subject: "Third floor not in approved plan v3 · Beltola", risk: "high", tone: "bad", auth: "Town planning", age: "9" },
  { task: "Staff · access", subject: "Grant complaints.assign to field supervisor", risk: "low", tone: "muted", auth: "Primary admin", age: "4" },
];

const integrity = [
  { label: "Payment mismatches quarantined", value: "0" },
  { label: "Vehicles with stale GPS > 180s", value: "1" },
  { label: "Field commands pending sync", value: "7" },
  { label: "Unbalanced journal entries", value: "0" },
  { label: "Unauthorised tool attempts (24h)", value: "3 blocked" },
];

const bars = [4, 7, 5, 9, 6, 11, 8, 12, 9, 14, 10, 13];

function Panel({ title, desc, children, className = "", action }: { title: string; desc?: string; children: ReactNode; className?: string; action?: string }) {
  return (
    <section className={`rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-3 ${className}`}>
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <h4 className="text-[11px] font-semibold text-white">{title}</h4>
          {desc && <p className="mt-0.5 text-[9px] leading-relaxed text-[var(--still-dim)]">{desc}</p>}
        </div>
        {action && <span className="shrink-0 text-[9px] font-medium text-[#6ea8ff]">{action}</span>}
      </div>
      {children}
    </section>
  );
}

function FleetMap() {
  const wards = [
    "M18 44 L62 30 L74 62 L34 74 Z",
    "M62 30 L104 22 L118 52 L74 62 Z",
    "M34 74 L74 62 L84 92 L40 100 Z",
    "M74 62 L118 52 L128 84 L84 92 Z",
    "M104 22 L146 20 L152 46 L118 52 Z",
    "M40 100 L84 92 L92 118 L46 122 Z",
  ];
  const pins = [
    { x: 52, y: 52 },
    { x: 96, y: 44 },
    { x: 70, y: 82 },
    { x: 122, y: 68 },
    { x: 92, y: 104 },
  ];
  return (
    <div className="relative overflow-hidden rounded-md border border-[var(--still-border)] bg-[var(--still-panel)]">
      <div className="dot-surface absolute inset-0 opacity-40" />
      <svg viewBox="0 0 168 130" className="relative w-full">
        {wards.map((d, i) => (
          <path key={i} d={d} fill={i % 2 ? "rgba(76,141,255,0.10)" : "rgba(62,224,176,0.08)"} stroke="#2a3549" strokeWidth="0.6" />
        ))}
        <path d="M18 44 L62 30 L74 62 L34 74 Z" fill="rgba(76,141,255,0.16)" stroke="#4c8dff" strokeOpacity="0.6" strokeWidth="0.8" />
        <path d="M62 30 L104 22 L118 52 L74 62 Z" fill="rgba(76,141,255,0.16)" stroke="#4c8dff" strokeOpacity="0.6" strokeWidth="0.8" />
        <path d="M34 74 L74 62 L84 92 L40 100 Z" fill="rgba(76,141,255,0.16)" stroke="#4c8dff" strokeOpacity="0.6" strokeWidth="0.8" />
        <path d="M74 62 L118 52 L128 84 L84 92 Z" fill="rgba(76,141,255,0.16)" stroke="#4c8dff" strokeOpacity="0.6" strokeWidth="0.8" />
        <path d="M52 52 Q76 40 96 44 T122 68" stroke="#3ee0b0" strokeWidth="0.9" strokeDasharray="3 2" fill="none" />
        {pins.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4" fill="#3ee0b0" fillOpacity="0.16" />
            <circle cx={p.x} cy={p.y} r="1.8" fill="#3ee0b0" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-1.5 left-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[8px] text-[#3ee0b0]">15 vehicles on route</div>
    </div>
  );
}

/*
 * Sample surveillance frame, drawn rather than fetched so the still always
 * renders offline. Detection boxes are authored to track the objects in this
 * scene; labels mirror the Vision API payload the console renders. The badge
 * says synthetic so it is never mistaken for a live model run.
 */
const detections = [
  { id: "t1", label: "garbage bag", conf: 0.94, x: 12, y: 56, w: 15, h: 18, d: 0 },
  { id: "t2", label: "person", conf: 0.91, x: 40, y: 30, w: 10, h: 44, d: 0.4 },
  { id: "t3", label: "spill", conf: 0.87, x: 58, y: 66, w: 16, h: 14, d: 0.8 },
  { id: "t4", label: "cattle", conf: 0.79, x: 76, y: 52, w: 13, h: 15, d: 1.2 },
];

function CameraScene() {
  return (
    <svg viewBox="0 0 160 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
      <defs>
        <linearGradient id="cctv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22314f" />
          <stop offset="0.45" stopColor="#16203a" />
          <stop offset="1" stopColor="#0b1220" />
        </linearGradient>
      </defs>
      <rect width="160" height="100" fill="url(#cctv-sky)" />
      {/* road surface receding to a vanishing point */}
      <path d="M0 62 L160 62 L160 100 L0 100 Z" fill="#111a2c" />
      <path d="M20 62 L-10 100" stroke="#1d2a42" strokeWidth="1" />
      {/* lane dashes */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={78} y={67 + i * 7} width="3" height={2 + i * 1.4} fill="#3a4a68" />
      ))}
      {/* buildings */}
      <rect x="4" y="34" width="34" height="28" fill="#1a2540" />
      <rect x="42" y="26" width="26" height="36" fill="#20304f" />
      <rect x="96" y="30" width="30" height="32" fill="#1a2540" />
      <rect x="130" y="38" width="24" height="24" fill="#20304f" />
      {/* lit windows */}
      {[8, 16, 24].map((x) =>
        [40, 50].map((y) => <rect key={`${x}-${y}`} x={x} y={y} width="4" height="3" fill="#ffcf7a" opacity="0.55" />),
      )}
      {[102, 112, 122].map((x) => (
        <rect key={x} x={x} y={38} width="4" height="3" fill="#ffcf7a" opacity="0.4" />
      ))}
      {/* street lamp */}
      <path d="M148 62 L148 30 L140 30" stroke="#40527a" strokeWidth="1.2" fill="none" />
      <circle cx="139" cy="30" r="3" fill="#ffe2a6" opacity="0.8" />
      <ellipse cx="139" cy="86" rx="14" ry="4" fill="#ffe2a6" opacity="0.07" />
      {/* objects the detections refer to */}
      <ellipse cx="30" cy="66" rx="7" ry="4.5" fill="#2f3a4d" />
      <rect x="64" y="60" width="5" height="14" rx="1.5" fill="#2b3549" />
      <circle cx="66.5" cy="58" r="2" fill="#33415c" />
      <ellipse cx="106" cy="73" rx="11" ry="3" fill="#26313f" />
      <path d="M122 66 q5 -4 8 0 l1 5 h-10 z" fill="#2b3549" />
    </svg>
  );
}

function CameraTile() {
  return (
    <div className="relative overflow-hidden rounded-md border border-[var(--still-border)] bg-[#05070d]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <CameraScene />
        <div className="absolute inset-0 bg-black/25" />

        {detections.map((det) => (
          <div
            key={det.id}
            className="absolute border-2 border-red-500/90 shadow-[0_0_10px_rgba(239,68,68,0.45)]"
            style={{
              left: `${det.x}%`,
              top: `${det.y}%`,
              width: `${det.w}%`,
              height: `${det.h}%`,
              animation: `blip 2.6s ease-in-out ${det.d}s infinite`,
            }}
          >
            <span className="absolute -top-[13px] left-[-2px] whitespace-nowrap bg-red-600 px-1 font-mono text-[6px] font-bold tracking-wide on-accent text-white">
              {det.label} {det.conf.toFixed(2)}
            </span>
          </div>
        ))}

        <div className="animate-sweep pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute left-1.5 top-1.5 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[7px] on-accent text-white/80">
          {detections.length} objects · 720p
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/75 px-1.5 py-0.5 font-mono text-[7px] on-accent text-white/85">
        <span className="flex items-center gap-1">
          <span className="animate-blip size-1 rounded-full bg-red-500" /> REC · Zoo Tiniali junction · CAM-02
        </span>
        <span className="text-red-400">Vision API · synthetic detections</span>
      </div>
    </div>
  );
}

function ComplaintChart() {
  return (
    <div className="flex h-24 items-end gap-1">
      {bars.map((b, i) => (
        <div key={i} className="flex flex-1 flex-col justify-end gap-[2px]">
          <div className="w-full rounded-sm bg-[#3ee0b0]/70" style={{ height: `${b * 1.6}px` }} />
          <div className="w-full rounded-sm bg-[#4c8dff]/70" style={{ height: `${b * 1.1}px` }} />
        </div>
      ))}
    </div>
  );
}

export function AdminCommandCentre() {
  return (
    <div data-still className="flex min-h-[560px] text-[10px] text-[var(--still-text)]">
      <aside className="hidden w-[168px] shrink-0 flex-col gap-3 border-r border-[var(--still-border)] bg-[var(--still-head)] p-2.5 sm:flex">
        <div className="flex items-center gap-2 rounded-md bg-[var(--still-panel-2)] px-2 py-1.5">
          <span className="flex size-6 items-center justify-center rounded-md bg-[#4c8dff]/15 text-[#4c8dff]">
            <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="10.5" cy="10.5" r="6" />
              <path d="m15 15 5 5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold text-white">CivicLens</span>
            <span className="block text-[8px] text-[var(--still-dim)]">Guwahati ULB pilot</span>
          </span>
        </div>

        <div className="space-y-2.5">
          {navGroups.map((group, gi) => (
            <div key={gi}>
              {group.label && (
                <p className="mb-1 px-2 text-[8px] font-medium tracking-wider text-[var(--still-dim)] uppercase">{group.label}</p>
              )}
              <ul className="space-y-[1px]">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center gap-1.5 rounded-md px-2 py-[5px] ${item.active ? "bg-[#4c8dff]/15 text-white" : "text-[var(--still-dim)]"}`}
                  >
                    <Icon d={item.d} className="size-3" />
                    <span className="truncate text-[9.5px]">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between border-b border-[var(--still-border)] px-3.5 py-2.5">
          <div>
            <h3 className="text-[12px] font-semibold text-white">Command centre</h3>
            <p className="text-[8.5px] text-[var(--still-dim)]">Guwahati ULB operational pilot · synthetic dataset</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-md border border-[var(--still-border)] px-1.5 py-1 text-[8px] text-[var(--still-dim)]">This week</span>
            <span className="flex size-5 items-center justify-center rounded-full bg-[#4c8dff]/20 text-[8px] font-semibold text-[#7ab4ff]">NG</span>
          </div>
        </div>

        <div className="space-y-2.5 p-3">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-[var(--still-border)] bg-[var(--still-panel)] p-2">
                <p className="text-[8px] text-[var(--still-dim)]">{k.label}</p>
                <p className="mt-0.5 font-mono text-[13px] font-semibold tracking-tight text-white">{k.value}</p>
                <p className="mt-0.5 text-[7.5px] text-[#3ee0b0]">{k.delta}</p>
                <p className="text-[7px] text-[var(--still-dim)]">{k.note}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-2 lg:grid-cols-[1.15fr_1fr]">
            <Panel title="Live tracking" desc="Vehicles moving between wards and the transfer station." action="Fleet & dispatch">
              <FleetMap />
            </Panel>
            <Panel title="Surveillance & incidents" desc="Nearest live camera, with the ward wall one click away." action="Full wall">
              <CameraTile />
            </Panel>
          </div>

          <div className="grid gap-2 lg:grid-cols-[1.3fr_1fr]">
            <Panel title="Needs a human decision" desc="AI recommendations stay attached to evidence; approval pins the entity version." action="Open queue (12)">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-[7.5px] uppercase tracking-wide text-[var(--still-dim)]">
                    <th className="pb-1 text-left font-medium">Task</th>
                    <th className="pb-1 text-left font-medium">Risk</th>
                    <th className="pb-1 text-left font-medium">Authority</th>
                    <th className="pb-1 text-right font-medium">Age</th>
                  </tr>
                </thead>
                <tbody>
                  {approvals.map((a) => (
                    <tr key={a.subject} className="border-t border-[var(--still-border)]">
                      <td className="py-[5px] pr-2 align-top">
                        <span className="block text-[9px] font-medium text-white">{a.task}</span>
                        <span className="block truncate text-[8px] text-[var(--still-dim)]" style={{ maxWidth: 150 }}>
                          {a.subject}
                        </span>
                      </td>
                      <td className="py-[5px] align-top">
                        <span
                          className={`rounded-full px-1.5 py-[1px] text-[7px] font-medium ${
                            a.tone === "bad"
                              ? "bg-red-500/15 text-red-300"
                              : a.tone === "warn"
                                ? "bg-amber-500/15 text-amber-300"
                                : "bg-white/8 text-white/60"
                          }`}
                        >
                          {a.risk}
                        </span>
                      </td>
                      <td className="py-[5px] align-top text-[8px] text-[var(--still-dim)]">{a.auth}</td>
                      <td className="py-[5px] text-right align-top font-mono text-[8px] text-[var(--still-dim)]">{a.age}h</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Panel>

            <div className="space-y-2">
              <Panel title="Complaints & SLA" desc="Received vs resolved, last 12 weeks.">
                <ComplaintChart />
                <div className="mt-1.5 flex items-center gap-3 text-[7.5px] text-[var(--still-dim)]">
                  <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-[#4c8dff]" />Received</span>
                  <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-[#3ee0b0]" />Resolved</span>
                </div>
              </Panel>
              <Panel title="Integrity watch" desc="Invariants that must hold after every retry.">
                <ul className="space-y-[3px]">
                  {integrity.map((i) => (
                    <li key={i.label} className="flex items-center justify-between gap-2 border-b border-[var(--still-border)] pb-[3px] text-[8px] last:border-0">
                      <span className="truncate text-[var(--still-dim)]">{i.label}</span>
                      <span className={`shrink-0 font-mono ${i.value === "0" ? "text-[#3ee0b0]" : "text-[#ffb454]"}`}>{i.value}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
