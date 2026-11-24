import { StatusBar } from "../device-frame";

function Chevron({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="m15 5-7 7 7 7" />
    </svg>
  );
}

function TabBar({ active }: { active: number }) {
  const tabs = [
    { n: "Home", d: "M3 11l9-7 9 7v9H3z" },
    { n: "Services", d: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" },
    { n: "Track", d: "M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" },
    { n: "Bookings", d: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" },
    { n: "Profile", d: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0" },
  ];
  return (
    <div className="relative mt-auto border-t border-[#e4e9f2] bg-white px-1 pb-3 pt-2">
      <div className="flex items-end justify-between px-2">
        {tabs.map((t, i) => {
          if (i === 2) {
            return (
              <div key={t.n} className="flex w-12 flex-col items-center">
                <span className="-mt-6 flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white shadow-[0_10px_24px_-6px_rgba(37,99,235,0.7)]">
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                </span>
                <span className="mt-0.5 text-[8px] font-semibold text-[#2563eb]">Track</span>
              </div>
            );
          }
          const on = i === active;
          return (
            <div key={t.n} className="flex w-12 flex-col items-center gap-1">
              <svg viewBox="0 0 24 24" className={`size-[18px] ${on ? "text-[#2563eb]" : "text-[#98a2b3]"}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d={t.d} />
              </svg>
              <span className={`text-[8px] ${on ? "font-semibold text-[#2563eb]" : "text-[#98a2b3]"}`}>{t.n}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const tiles = [
  { n: "Property tax", d: "M3 10l9-6 9 6v10H3z", c: "#2563eb", b: "#eff4ff" },
  { n: "Complain", d: "M21 12a8 8 0 01-8 8H7l-4 3V12a8 8 0 018-8h2a8 8 0 018 8z", c: "#e0491d", b: "#fff1ec" },
  { n: "Garbage", d: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13", c: "#0f9d76", b: "#ecfbf4" },
  { n: "Halls & vehicles", d: "M4 17V7h11v10M14 11h4l3 3v3", c: "#7c5cf0", b: "#f3efff" },
  { n: "Building", d: "M4 21V6l7-3v18M11 21V9l9 3v9", c: "#b8791a", b: "#fdf6e9" },
  { n: "Voice help", d: "M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zM5 11a7 7 0 0014 0M12 18v3", c: "#2563eb", b: "#eff4ff" },
];

export function CitizenHome() {
  return (
    <div className="flex min-h-[540px] flex-col bg-[#f6f8fc]">
      <StatusBar />
      <div className="flex items-center justify-between px-5 pb-3 pt-2">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-[#2563eb]/10 text-[11px] font-bold text-[#2563eb]">PB</span>
          <div className="leading-tight">
            <p className="text-[8px] text-[#667085]">Good morning</p>
            <p className="text-[11px] font-semibold text-[#101828]">Priyanka B.</p>
          </div>
        </div>
        <span className="rounded-full border border-[#e4e9f2] bg-white px-2 py-1 text-[8.5px] font-medium text-[#344054]">অসমীয়া</span>
      </div>

      <div className="px-4">
        <div className="rounded-2xl bg-gradient-to-br from-[#1d4ed8] to-[#2563eb] p-3.5 text-white shadow-[0_16px_32px_-16px_rgba(29,78,216,0.6)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[8px] tracking-wide text-white/70 uppercase">Total payable</p>
              <p className="mt-0.5 font-mono text-[20px] font-semibold tracking-tight">₹6,240</p>
              <p className="mt-0.5 text-[8.5px] text-white/80">Arrears ₹4,800 · Penalty ₹140</p>
            </div>
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[8px] font-medium">Due 30 Nov</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-mono text-[8px] text-white/70">Holding 05-2281 · Ward 05</span>
            <span className="rounded-full bg-white px-3 py-1 text-[9px] font-semibold text-[#1d4ed8]">Pay now</span>
          </div>
        </div>
      </div>

      <div className="mt-2.5 px-4">
        <div className="flex items-center gap-2.5 rounded-xl border border-[#e4e9f2] bg-white p-2.5">
          <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-[#ecfbf4] text-[#0f9d76]">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 16V7h11v9M14 11h4l3 3v2M6.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
            <span className="absolute inset-0 animate-pulse-ring rounded-full border border-[#0f9d76]/50" />
          </span>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="text-[7.5px] tracking-wide text-[#667085] uppercase">Collection today</p>
            <p className="truncate text-[9.5px] font-semibold text-[#101828]">AS-01-MC-3312 · on your route</p>
            <p className="text-[8px] text-[#667085]">Scheduled 06:30–08:00</p>
          </div>
          <span className="shrink-0 text-[8.5px] font-semibold text-[#2563eb]">Track on map</span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 px-4">
        {tiles.map((t) => (
          <div key={t.n} className="flex flex-col items-center gap-1.5 rounded-xl border border-[#e4e9f2] bg-white px-1 py-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg" style={{ background: t.b, color: t.c }}>
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={t.d} /></svg>
            </span>
            <span className="text-center text-[8px] font-medium leading-tight text-[#344054]">{t.n}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 px-4">
        <div className="mb-1.5 flex items-center justify-between">
          <p className="text-[9.5px] font-semibold text-[#101828]">Your open complaints</p>
          <span className="text-[8px] font-medium text-[#2563eb]">View all</span>
        </div>
        <div className="space-y-1.5">
          <div className="rounded-xl border border-[#e4e9f2] bg-white p-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold text-[#101828]">Drain overflow near gate</span>
              <span className="rounded-full bg-[#fff6e6] px-1.5 py-[1px] text-[7px] font-medium text-[#b8791a]">In progress</span>
            </div>
            <p className="mt-0.5 font-mono text-[7.5px] text-[#667085]">CL/GRV/2026/004182 · SLA due 08 Nov</p>
          </div>
          <div className="rounded-xl border border-[#e4e9f2] bg-white p-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold text-[#101828]">Street light out at lane 3</span>
              <span className="rounded-full bg-[#eff4ff] px-1.5 py-[1px] text-[7px] font-medium text-[#2563eb]">Assigned</span>
            </div>
            <p className="mt-0.5 font-mono text-[7.5px] text-[#667085]">CL/GRV/2026/004179 · SLA due 09 Nov</p>
          </div>
        </div>
      </div>

      <TabBar active={0} />
    </div>
  );
}

export function CitizenComplaint() {
  const cats = [
    { n: "Drain", d: "M3 12c3-3 6-3 9 0s6 3 9 0M3 18c3-3 6-3 9 0s6 3 9 0", on: true },
    { n: "Garbage", d: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" },
    { n: "Streetlight", d: "M12 3v3M12 18v3M5 12H2M22 12h-3M7 7l-2-2M19 5l-2 2M7 17l-2 2M19 19l-2-2" },
    { n: "Waterlogging", d: "M3 12c3-3 6-3 9 0s6 3 9 0" },
    { n: "Construction", d: "M4 21V9l8-5 8 5v12z" },
    { n: "Animals", d: "M6 12a2 2 0 100-4 2 2 0 000 4zM18 12a2 2 0 100-4 2 2 0 000 4zM12 20c4 0 6-3 6-6H6c0 3 2 6 6 6z" },
    { n: "Other", d: "M12 20h.01M5 12a7 7 0 1114 0c0 3-3 3-3 5" },
  ];
  return (
    <div className="flex min-h-[540px] flex-col bg-[#f6f8fc]">
      <StatusBar />
      <div className="flex items-center gap-2 px-4 pb-2 pt-1">
        <Chevron className="size-4 text-[#344054]" />
        <p className="text-[11px] font-semibold text-[#101828]">Register a complaint</p>
      </div>

      <div className="px-4">
        <p className="mb-1.5 text-[8px] font-medium tracking-wide text-[#667085] uppercase">Category</p>
        <div className="grid grid-cols-4 gap-1.5">
          {cats.map((c) => (
            <div key={c.n} className={`flex flex-col items-center gap-1 rounded-lg border px-0.5 py-1.5 ${c.on ? "border-[#2563eb] bg-[#eff4ff]" : "border-[#e4e9f2] bg-white"}`}>
              <svg viewBox="0 0 24 24" className={`size-3.5 ${c.on ? "text-[#2563eb]" : "text-[#98a2b3]"}`} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={c.d} /></svg>
              <span className={`text-[7px] font-medium ${c.on ? "text-[#2563eb]" : "text-[#475467]"}`}>{c.n}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2.5 px-4">
        <p className="mb-1.5 text-[8px] font-medium tracking-wide text-[#667085] uppercase">Location</p>
        <div className="flex items-start gap-2 rounded-xl border border-[#e4e9f2] bg-white p-2">
          <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-[#eff4ff] text-[#2563eb]">
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>
          </span>
          <div className="leading-tight">
            <p className="text-[9px] font-semibold text-[#101828]">05-2281, Ward 05</p>
            <p className="text-[7.5px] text-[#667085]">Pre-filled from your linked holding</p>
          </div>
        </div>
      </div>

      <div className="mt-2.5 px-4">
        <p className="mb-1.5 text-[8px] font-medium tracking-wide text-[#667085] uppercase">What is wrong?</p>
        <div className="rounded-xl border border-[#e4e9f2] bg-white p-2.5">
          <p className="text-[8.5px] leading-relaxed text-[#344054]">Drain is overflowing near the front gate since last night. Water is standing on the road...</p>
        </div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-full border border-[#0f9d76]/40 bg-[#ecfbf4] px-2 py-1 text-[8px] font-medium text-[#0f9d76]">
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
            Photo added
          </span>
          <span className="flex items-center gap-1 rounded-full border border-[#e4e9f2] bg-white px-2 py-1 text-[8px] font-medium text-[#475467]">
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
            Add photo
          </span>
        </div>
      </div>

      <div className="mx-4 mt-2.5 flex items-start gap-1.5 rounded-lg border border-[#e4e9f2] bg-[#f9fafc] p-2">
        <svg viewBox="0 0 24 24" className="mt-[1px] size-3 shrink-0 text-[#667085]" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 4v5c0 5-3 8-7 9-4-1-7-4-7-9V7z" /></svg>
        <p className="text-[7px] leading-relaxed text-[#667085]">Photos are stored privately and scanned before an official opens them. Voice intake is available on the helpline in Assamese, Bengali and English.</p>
      </div>

      <div className="mt-auto px-4 pb-4 pt-2.5">
        <div className="rounded-full bg-[#2563eb] py-2.5 text-center text-[10px] font-semibold text-white shadow-[0_12px_24px_-12px_rgba(37,99,235,0.9)]">Submit complaint</div>
        <p className="mt-1.5 text-center text-[7.5px] text-[#667085]">Saved offline as DRAFT-00418 if there is no signal</p>
      </div>
    </div>
  );
}

export function CitizenTrack() {
  return (
    <div className="flex min-h-[540px] flex-col bg-[#f6f8fc]">
      <StatusBar />
      <div className="flex items-center gap-2 px-4 pb-2 pt-1">
        <Chevron className="size-4 text-[#344054]" />
        <p className="text-[11px] font-semibold text-[#101828]">Garbage tracking</p>
      </div>

      <div className="mx-4 overflow-hidden rounded-2xl border border-[#e4e9f2] bg-white">
        <div className="relative h-44 bg-[#eef2f8]">
          <div className="dot-surface absolute inset-0 opacity-60" />
          <svg viewBox="0 0 200 130" className="relative h-full w-full">
            <path d="M-5 92 L205 74" stroke="#d3dbe8" strokeWidth="10" />
            <path d="M-5 92 L205 74" stroke="#ffffff" strokeWidth="7" strokeDasharray="6 5" />
            <path d="M62 -5 L74 135" stroke="#d3dbe8" strokeWidth="8" />
            <path d="M62 -5 L74 135" stroke="#ffffff" strokeWidth="5" />
            {[14, 34, 54].map((x, i) => (
              <rect key={i} x={x} y={16} width="16" height="16" rx="2" fill="#e2e8f2" />
            ))}
            <rect x="120" y="94" width="20" height="18" rx="2" fill="#e2e8f2" />
            <rect x="150" y="26" width="26" height="20" rx="2" fill="#e2e8f2" />
            <path d="M12 96 Q40 88 62 90 T108 80 T156 76" stroke="#2563eb" strokeWidth="2" fill="none" strokeDasharray="4 3" />
            {[12, 40, 62, 108].map((x, i) => (
              <circle key={i} cx={x} cy={[96, 88, 90, 80][i]} r="3" fill="#0f9d76" stroke="#fff" strokeWidth="1.2" />
            ))}
            <g>
              <circle cx="128" cy="78" r="10" fill="#2563eb" fillOpacity="0.15" />
              <circle cx="128" cy="78" r="6" fill="#2563eb" stroke="#fff" strokeWidth="1.6" />
              <path d="M125 78h6M128 75v6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
            </g>
            <circle cx="40" cy="88" r="3.5" fill="#e0491d" stroke="#fff" strokeWidth="1.2" />
          </svg>
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-medium text-[#344054] shadow-sm">Ward 05 · live</span>
          <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-medium text-[#0f9d76] shadow-sm">
            <span className="animate-blip size-1 rounded-full bg-[#0f9d76]" /> updating
          </span>
        </div>
      </div>

      <div className="mx-4 mt-2 rounded-xl border border-[#e4e9f2] bg-white p-2.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9.5px] font-semibold text-[#101828]">AS-01-MC-3312</p>
            <p className="text-[7.5px] text-[#667085]">Compactor · route Ward 05 → transfer station</p>
          </div>
          <span className="rounded-full bg-[#ecfbf4] px-1.5 py-[1px] text-[7px] font-semibold text-[#0f9d76]">On route</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-[7.5px] text-[#667085]">
          <span>Stops done</span>
          <span className="font-mono text-[#344054]">11 / 15</span>
        </div>
        <div className="mt-1 h-1 overflow-hidden rounded-full bg-[#eaeef5]">
          <div className="h-full w-[73%] rounded-full bg-[#0f9d76]" />
        </div>
        <p className="mt-1.5 text-[7.5px] text-[#667085]">Estimated at your street · <span className="font-semibold text-[#101828]">07:12</span></p>
      </div>

      <div className="mx-4 mt-2 rounded-xl border border-[#e4e9f2] bg-white p-2.5">
        <p className="mb-1.5 text-[8px] font-medium tracking-wide text-[#667085] uppercase">My complaint · CL/GRV/2026/004182</p>
        {[
          { t: "06:41", e: "Received", done: true },
          { t: "07:05", e: "Assigned · Engineering", done: true },
          { t: "09:12", e: "Field visit scheduled", done: true },
          { t: "—", e: "Resolved", done: false },
        ].map((s) => (
          <div key={s.e} className="flex items-center gap-2 border-b border-[#f0f3f8] py-[3px] last:border-0">
            <span className={`size-1.5 rounded-full ${s.done ? "bg-[#0f9d76]" : "bg-[#d3dbe8]"}`} />
            <span className="w-7 font-mono text-[7px] text-[#98a2b3]">{s.t}</span>
            <span className={`text-[8px] ${s.done ? "text-[#344054]" : "text-[#98a2b3]"}`}>{s.e}</span>
          </div>
        ))}
      </div>

      <TabBar active={2} />
    </div>
  );
}

export function CitizenAsha() {
  const msgs = [
    { who: "agent", text: "What happened to my complaint?", en: null },
    { who: "citizen", text: "আপুনাৰ অভিযোগ CL/GRV/2026/004182 অভিযান্ত পৰ্যবেক্ষাত আছে।", en: "Your complaint CL/GRV/2026/004182 is now under review. Engineering was assigned at 07:05." },
    { who: "agent", text: "কেতিয়া সময়ত সমাধান হব?", en: null },
    { who: "citizen", text: "SLA due 08 Nov, 22:00 IST · SLA-DRN-v4. A human officer closes it, not me.", en: null },
    { who: "agent", text: "স্ব্বেচ্ছাৰে ফোন পাৰ্তো মোর অভিযোগ অপডেট কৰিবোনে?", en: "Shall I call you when it updates?" },
  ];
  return (
    <div className="flex min-h-[540px] flex-col bg-[#f6f8fc]">
      <StatusBar />
      <div className="flex items-center gap-2 border-b border-[#e4e9f2] bg-white px-4 pb-2 pt-1">
        <Chevron className="size-4 text-[#344054]" />
        <span className="relative flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#7c5cf0] text-white">
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3v10M8 7v4M16 7v4M5 9v2M19 9v2M12 17v3" /></svg>
          <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full border border-white bg-[#0f9d76]" />
        </span>
        <div className="leading-tight">
          <p className="text-[10px] font-semibold text-[#101828]">Asha · voice &amp; chat</p>
          <p className="text-[7px] text-[#667085]">Civic support agent · online</p>
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden px-3 py-2.5">
        <p className="mx-auto w-fit rounded-full bg-[#e9eefb] px-2 py-0.5 text-[6.5px] text-[#5b6b8a]">Asha is an assistant, not an officer. It can register and track complaints; a human decides outcomes.</p>
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.who === "agent" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[78%] rounded-2xl px-2.5 py-1.5 ${m.who === "agent" ? "rounded-br-md bg-[#2563eb] text-white" : "rounded-bl-md border border-[#e4e9f2] bg-white text-[#344054]"}`}>
              <p className={`text-[8.5px] leading-relaxed ${m.who === "citizen" && m.en ? "text-[#101828]" : ""}`}>{m.text}</p>
              {m.en && (
                <p className={`mt-1 border-t pt-1 text-[7px] italic leading-relaxed ${m.who === "agent" ? "border-white/25 text-white/70" : "border-[#eef1f6] text-[#667085]"}`}>{m.en}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-3">
        <div className="mb-1.5 flex gap-1 overflow-hidden">
          {["Did the van come?", "My tax", "Street light"].map((s) => (
            <span key={s} className="shrink-0 rounded-full border border-[#2563eb]/30 bg-[#eff4ff] px-2 py-[3px] text-[7px] font-medium text-[#2563eb]">{s}</span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-[#e4e9f2] bg-white py-1.5 pl-3 pr-1.5">
          <span className="flex-1 text-[8px] text-[#98a2b3]">Type or speak in your language</span>
          <span className="flex size-6 items-center justify-center rounded-full bg-[#eff4ff] text-[#2563eb]">
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zM5 11a7 7 0 0014 0M12 18v3" /></svg>
          </span>
          <span className="flex size-6 items-center justify-center rounded-full bg-[#2563eb] text-white">
            <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 12h13M13 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>
      <div className="h-3" />
    </div>
  );
}

export function CitizenTax() {
  return (
    <div className="flex min-h-[540px] flex-col bg-[#f6f8fc]">
      <StatusBar />
      <div className="flex items-center gap-2 px-4 pb-2 pt-1">
        <Chevron className="size-4 text-[#344054]" />
        <p className="text-[11px] font-semibold text-[#101828]">Property tax</p>
      </div>

      <div className="mx-4 rounded-2xl border border-[#e4e9f2] bg-white p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[7.5px] tracking-wide text-[#667085] uppercase">Holding 05-2281</p>
            <p className="mt-0.5 text-[9px] font-semibold text-[#101828]">Owner: P. Baruah</p>
            <p className="text-[7.5px] text-[#667085]">Residential · 148 sqm · Ward 05</p>
          </div>
          <span className="rounded-full bg-[#fff6e6] px-1.5 py-[1px] text-[7px] font-semibold text-[#b8791a]">Due 30 Nov</span>
        </div>
        <div className="mt-2.5 space-y-1 border-t border-[#eef1f6] pt-2">
          {[
            { l: "Current demand", v: "₹1,300" },
            { l: "Arrears", v: "₹4,800" },
            { l: "Penalty", v: "₹140" },
          ].map((r) => (
            <div key={r.l} className="flex justify-between text-[8px]">
              <span className="text-[#667085]">{r.l}</span>
              <span className="font-mono text-[#344054]">{r.v}</span>
            </div>
          ))}
          <div className="flex justify-between border-t border-[#eef1f6] pt-1 text-[9.5px]">
            <span className="font-semibold text-[#101828]">Total payable</span>
            <span className="font-mono font-semibold text-[#101828]">₹6,240</span>
          </div>
        </div>
        <div className="mt-2.5 rounded-full bg-[#2563eb] py-2 text-center text-[9.5px] font-semibold text-white">Pay ₹6,240</div>
      </div>

      <div className="mx-4 mt-2 rounded-xl border border-[#e4e9f2] bg-white p-2.5">
        <p className="mb-1.5 text-[8px] font-medium tracking-wide text-[#667085] uppercase">Receipt history</p>
        {[
          { d: "12 Apr 2026", a: "₹4,800", ok: true },
          { d: "08 Nov 2025", a: "₹5,200", ok: true },
          { d: "03 Nov 2024", a: "₹4,950", ok: true },
        ].map((r) => (
          <div key={r.d} className="flex items-center justify-between border-b border-[#f0f3f8] py-[4px] last:border-0">
            <div className="flex items-center gap-1.5">
              <span className="flex size-4 items-center justify-center rounded-full bg-[#ecfbf4] text-[#0f9d76]">
                <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span className="text-[8px] text-[#344054]">{r.d}</span>
            </div>
            <span className="font-mono text-[8px] text-[#101828]">{r.a}</span>
          </div>
        ))}
        <p className="mt-1.5 text-[7px] leading-relaxed text-[#98a2b3]">Reconciled to the ULB ledger. Payment-state is visible to authorised officials only.</p>
      </div>

      <div className="mx-4 mt-2 flex items-center gap-2 rounded-xl border border-[#e4e9f2] bg-white p-2">
        <span className="flex size-7 items-center justify-center rounded-full bg-[#eff4ff] text-[#2563eb]">
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 3v10M8 7v4M16 7v4M5 9v2M19 9v2M12 17v3" /></svg>
        </span>
        <div className="leading-tight">
          <p className="text-[8.5px] font-semibold text-[#101828]">Ask Asha about this bill</p>
          <p className="text-[7px] text-[#667085]">অসমীয়া · বাংলা · বৰ’ · English</p>
        </div>
      </div>

      <TabBar active={1} />
    </div>
  );
}
