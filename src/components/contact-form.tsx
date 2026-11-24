"use client";

import { useState } from "react";

const roleOptions = [
  "ULB / local government",
  "Department or agency",
  "Technology partner",
  "Press or research",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="mt-8 grid gap-3 rounded-2xl border border-line bg-panel/70 p-5 sm:p-6"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[10px] tracking-[0.16em] text-mist/70 uppercase">Full name</span>
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-line bg-ink-2 px-3 py-2.5 text-[14px] text-ink-2 outline-none transition-colors placeholder:text-mist/50 focus:border-azure/60"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[10px] tracking-[0.16em] text-mist/70 uppercase">Work email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@ulb.gov.in"
            className="w-full rounded-lg border border-line bg-ink-2 px-3 py-2.5 text-[14px] text-ink-2 outline-none transition-colors placeholder:text-mist/50 focus:border-azure/60"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-[10px] tracking-[0.16em] text-mist/70 uppercase">You are</span>
        <select
          name="role"
          className="w-full rounded-lg border border-line bg-ink-2 px-3 py-2.5 text-[14px] text-ink-2 outline-none transition-colors focus:border-azure/60"
        >
          {roleOptions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-[10px] tracking-[0.16em] text-mist/70 uppercase">
          Which workflow should we look at?
        </span>
        <textarea
          required
          name="workflow"
          rows={3}
          placeholder="e.g. complaint SLA and field survey for our ULB"
          className="w-full resize-none rounded-lg border border-line bg-ink-2 px-3 py-2.5 text-[14px] text-ink-2 outline-none transition-colors placeholder:text-mist/50 focus:border-azure/60"
        />
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-azure-solid px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.01]"
      >
        Request a walkthrough
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      {sent && (
        <p className="rounded-lg border border-mint/30 bg-mint/10 px-3 py-2.5 text-[13px] text-mint">
          Thanks — noted. Wire this form to your CRM or mail endpoint to receive it. For now it does not leave the
          page.
        </p>
      )}
      <p className="text-[10.5px] leading-relaxed text-mist/60">
        We onboard one ULB at a time. No agent is configured for your jurisdiction until the rate cards and SLA
        policies are agreed with your team.
      </p>
    </form>
  );
}
