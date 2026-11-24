import { StatusBar } from "../device-frame";

/** Driver app: "Today's route" on the shift screen. */
export function DriverToday() {
  return (
    <div data-still className="flex min-h-[540px] flex-col bg-[var(--still-head)] text-[var(--still-text)]">
      <StatusBar dark />
      <div className="flex items-center justify-between px-4 pb-2 pt-1">
        <div className="leading-tight">
          <p className="text-[7.5px] text-white/50">Today&apos;s route</p>
          <p className="text-[11px] font-semibold">R. Das · AS-01-MC-3312</p>
          <p className="font-mono text-[7px] text-white/45">Shift 06:30–14:30 · Compactor</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#3ee0b0]/15 px-2 py-0.5 text-[7.5px] font-semibold text-[#3ee0b0]">
          <span className="size-1 rounded-full bg-[#3ee0b0]" /> Online
        </span>
      </div>

      <div className="mx-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[8.5px] font-semibold">Shift progress</p>
          <p className="font-mono text-[8.5px] text-[#3ee0b0]">11 / 15 stops</p>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[73%] rounded-full bg-gradient-to-r from-[#3ee0b0] to-[#4c8dff]" />
        </div>
        <div className="mt-2 flex justify-between text-[7.5px] text-white/55">
          <span>Load <span className="font-mono text-white/85">62%</span></span>
          <span>Fuel <span className="font-mono text-white/85">48%</span></span>
          <span>Queued <span className="font-mono text-white/85">3</span></span>
        </div>
      </div>

      <div className="mx-4 mt-2 rounded-xl border border-[#4c8dff]/35 bg-[#4c8dff]/10 p-2.5">
        <p className="text-[7px] tracking-wide text-[#7ab4ff] uppercase">Next stop · 4 of 15</p>
        <p className="mt-0.5 text-[9px] font-semibold">Near Zoo Tiniali junction, Ward 02</p>
        <p className="font-mono text-[7px] text-white/50">Complaint CL/GRV/2026/004179 linked</p>
        <div className="mt-1.5 flex gap-1.5">
          <span className="flex-1 rounded-full bg-[#4c8dff] py-1.5 text-center text-[8.5px] font-semibold text-white">Open stop</span>
          <span className="flex-1 rounded-full border border-white/15 py-1.5 text-center text-[8.5px] font-medium text-white/85">Something is wrong</span>
        </div>
      </div>

      <div className="mx-4 mt-2.5 space-y-1">
        {[
          { n: 1, k: "garbage", t: "06:38" },
          { n: 2, k: "garbage", t: "06:52" },
          { n: 3, k: "complaint", t: "07:04" },
          { n: 4, k: "complaint", t: "next" },
          { n: 5, k: "drain", t: "—" },
          { n: 6, k: "light", t: "—" },
        ].map((s) => (
          <div key={s.n} className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 ${s.t === "next" ? "border-[#4c8dff]/30 bg-[#4c8dff]/8" : "border-white/[0.06] bg-white/[0.02]"}`}>
            <span className="flex size-4 items-center justify-center rounded-full bg-white/8 font-mono text-[7px] text-white/70">{s.n}</span>
            <span className="flex-1 text-[8px] text-white/80 capitalize">{s.k} stop</span>
            <span className="font-mono text-[7.5px] text-white/45">{s.t}</span>
            {s.t !== "next" && s.t !== "—" && (
              <svg viewBox="0 0 24 24" className="size-2.5 text-[#3ee0b0]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
            )}
          </div>
        ))}
      </div>

      <p className="mx-4 mt-2 text-[6.5px] leading-relaxed text-white/35">Skipping a stop needs a reason and is shown to your supervisor. The office sees the time it was recorded.</p>
    </div>
  );
}

/** Surveyor app: "Verify holding" field survey. */
export function SurveyorList() {
  return (
    <div data-still className="flex min-h-[540px] flex-col bg-[var(--still-head)] text-[var(--still-text)]">
      <StatusBar dark />
      <div className="px-4 pb-2 pt-1">
        <p className="text-[7.5px] text-white/50">Today&apos;s survey</p>
        <p className="text-[11px] font-semibold">S. Kalita</p>
        <p className="font-mono text-[7px] text-white/45">Ward 11 · Block B · STF-2207</p>
      </div>

      <div className="mx-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
        <div className="flex items-center justify-between">
          <p className="text-[8.5px] font-semibold">Today&apos;s target</p>
          <p className="font-mono text-[8.5px] text-[#3ee0b0]">18 / 40 holdings</p>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[45%] rounded-full bg-[#3ee0b0]" />
        </div>
        <div className="mt-2 flex justify-between text-[7.5px] text-white/55">
          <span>Queued <span className="font-mono text-white/85">4</span></span>
          <span>Remaining <span className="font-mono text-white/85">22</span></span>
        </div>
      </div>

      <div className="mx-4 mt-2 rounded-xl border border-[#3ee0b0]/30 bg-[#3ee0b0]/8 p-2.5">
        <p className="text-[7px] tracking-wide text-[#3ee0b0] uppercase">Next on this lane</p>
        <p className="mt-0.5 text-[9px] font-semibold">11-0893 · M. Hazarika</p>
        <p className="text-[7px] text-white/55">Beltola Path · residential · 132 sqm</p>
      </div>

      <div className="mx-4 mt-2.5 space-y-1">
        {[
          { h: "11-0881", o: "A. Bora", s: "done" },
          { h: "11-0885", o: "J. Deka", s: "done" },
          { h: "11-0888", o: "Unknown · unregistered", s: "queued" },
          { h: "11-0893", o: "M. Hazarika", s: "pending" },
          { h: "11-0901", o: "R. Choudhury", s: "pending" },
        ].map((r) => (
          <div key={r.h} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2 py-1.5">
            <span className="flex-1 leading-tight">
              <span className="block font-mono text-[8px] text-white">{r.h} · {r.o}</span>
              <span className="block text-[6.5px] text-white/40">Residential · 132 sqm</span>
            </span>
            {r.s === "done" && (
              <svg viewBox="0 0 24 24" className="size-3 text-[#3ee0b0]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
            )}
            {r.s === "queued" && (
              <svg viewBox="0 0 24 24" className="size-3 text-[#ffb454]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 18H7zM12 12v5M12 12l-2 2M12 12l2 2" /></svg>
            )}
            {r.s === "pending" && <span className="size-1.5 rounded-full bg-white/25" />}
          </div>
        ))}
      </div>

      <p className="mx-4 mt-2 pb-3 text-[6.5px] leading-relaxed text-white/35">Photos are of the property only, never of people or documents. Records save on the phone first and upload when there is signal.</p>
    </div>
  );
}
