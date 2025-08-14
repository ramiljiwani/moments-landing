import React from "react";
import { theme } from "../lib/theme";

export const CTA = () => (
  <section id="cta" className="mt-28 mb-16">
    <div className="mx-auto max-w-6xl px-5">
      <div className="rounded-3xl p-10 md:p-14 text-center overflow-hidden relative" style={{ background: theme.colors.text, color: theme.colors.secondary }}>
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ background: `radial-gradient(600px 220px at 50% 50%, ${theme.colors.accent}, transparent)` }} />
        <h3 className="text-3xl md:text-4xl font-semibold">Be first to try Moments</h3>
        <p className="mt-3 text-sm md:text-base opacity-80">
          We&apos;re preparing for launch. Drop your email and we&apos;ll let you know when its out.
        </p>
        <form
          className="mx-auto mt-6 flex max-w-lg flex-col items-center gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
            if (!email) return;
            alert(`Thanks! We'll be in touch at ${email}`);
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl px-4 py-3 text-sm outline-none"
            style={{ color: theme.colors.text, background: theme.colors.secondary }}
          />
          <button
            type="submit"
            className="rounded-xl px-5 py-3 text-sm font-medium"
            style={{ background: theme.colors.accent, color: theme.colors.secondary }}
          >
            Notify
          </button>
        </form>
        <div className="mt-6 flex justify-center gap-3 text-xs opacity-80">
          <span>iOS & Android</span>
          <span>•</span>
          <span>No spam ever</span>
        </div>
      </div>
    </div>
  </section>
);
