import { Reveal } from "../reveal";
import { DesktopFrame } from "../device-frame";
import { AdminCommandCentre } from "../screens/admin-command-centre";
import { ComplaintsSla } from "../screens/complaints-sla";
import { AshaVoice } from "../screens/asha-voice";

const pillars = [
  {
    n: "01",
    title: "Understands the citizen",
    desc: "Voices and chats in Assamese, Bengali, Bodo and English. Recalls the holding, the ward and the last complaint.",
  },
  {
    n: "02",
    title: "Acts on the record",
    desc: "Registers complaints with reference and SLA, attaches evidence, routes to the right department.",
  },
  {
    n: "03",
    title: "Stops at the decision",
    desc: "Money, status and employment outcomes never close without a named official approving them.",
  },
];

export function Product() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium tracking-[0.22em] text-mint/80 uppercase">Our first product</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink-2 sm:text-[3.1rem]">
            CivicLens is the operating system a city actually works in.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-mist sm:text-base">
            Complaints and SLA, property tax and holdings, fleet and dispatch, surveillance, drainage, building
            permissions and approvals — one console, one ledger, one set of permissions. Not seventeen tools with
            seventeen spreadsheets behind them.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative mt-14">
          <div className="relative rounded-2xl border border-line bg-panel p-1.5 shadow-[0_60px_160px_-60px_rgba(0,0,0,0.55)] light:shadow-[0_40px_100px_-50px_rgba(30,60,120,0.35)]">
            <DesktopFrame label="civiclens.admin — /dashboard" className="border-0 shadow-none">
              <AdminCommandCentre />
            </DesktopFrame>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 px-2 pb-1">
              <p className="font-mono text-[10px] text-mist/60">Command centre · 17 sections · role-filtered nav</p>
              <p className="font-mono text-[10px] text-mist/60">KPI → panel → evidence → approval</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 90}
              className="group relative overflow-hidden rounded-2xl border border-line bg-[var(--chip)] p-6"
            >
              <span className="font-mono text-[12px] text-azure/70">{p.n}</span>
              <h3 className="mt-3 text-[17px] font-semibold tracking-tight text-ink-2">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mist">{p.desc}</p>
              <div className="absolute -bottom-16 -right-10 size-32 rounded-full bg-azure/10 blur-2xl transition-opacity duration-500 group-hover:bg-azure/20" />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Reveal className="group overflow-hidden rounded-2xl border border-line bg-[var(--chip)]">
            <DesktopFrame label="civiclens.admin — /dashboard/complaints" className="rounded-none border-0 border-b border-white/[0.07] shadow-none">
              <ComplaintsSla />
            </DesktopFrame>
            <div className="p-6">
              <h3 className="text-[17px] font-semibold text-ink-2">The ULB back office, with its reasoning shown</h3>
              <p className="text-[14px] leading-relaxed text-mist">
                Every complaint carries a reference, a category, a policy-driven SLA and a timeline the citizen can see.
                Reopening is a first-class event, so a “resolved” ticket cannot quietly disappear.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} className="group overflow-hidden rounded-2xl border border-line bg-[var(--chip)]">
            <DesktopFrame label="civiclens.admin — /dashboard/voice" className="rounded-none border-0 border-b border-white/[0.07] shadow-none">
              <AshaVoice />
            </DesktopFrame>
            <div className="p-6">
              <h3 className="text-[17px] font-semibold text-ink-2">Every AI answer is traceable</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mist">
                The transcript, the language, the memory record that produced the answer and the policy that set the SLA
                are all on one screen. If it says something wrong, you can see which record did it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
