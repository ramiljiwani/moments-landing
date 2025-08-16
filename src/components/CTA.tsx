import React, { useState } from "react";
import { theme } from "../lib/theme";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzF4eLHBKbHtMy0RfZpPBIM6NtktzyvyNLyVimTEJlDTkEOLz5CR01xTPmZJU2SSSb5Qg/exec"; // from the deployment

export const CTA = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "dup" | "err">("idle");

  return (
    <section id="cta" className="mt-28 mb-16">
      <div className="mx-auto max-w-6xl px-5">
        <div
          className="rounded-3xl p-10 md:p-14 text-center overflow-hidden relative"
          style={{ background: theme.colors.text, color: theme.colors.secondary }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(600px 220px at 50% 50%, ${theme.colors.accent}, transparent)`,
            }}
          />
          <h3 className="text-3xl md:text-4xl font-semibold">Be first to try Moments</h3>
          <p className="mt-3 text-sm md:text-base opacity-80">
            We&apos;re preparing for launch. Drop your email and we&apos;ll let you know when it&apos;s out.
          </p>

          <form
            className="mx-auto mt-6 flex max-w-lg flex-col items-center gap-3 sm:flex-row"
            onSubmit={async (e) => {
              e.preventDefault();
              setStatus("loading");
            
              const form = e.currentTarget as HTMLFormElement;
              const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim();
              const gotcha = (form.elements.namedItem("_gotcha") as HTMLInputElement)?.value || "";
              if (!email) { setStatus("idle"); return; }
            
              try {
                // Use FormData to avoid CORS preflight
                const fd = new FormData();
                fd.append("email", email);
                fd.append("_gotcha", gotcha);               // honeypot
                fd.append("source", "landing-cta");
                fd.append("ua", typeof navigator !== "undefined" ? navigator.userAgent : "");
            
                const res = await fetch(APPS_SCRIPT_URL, {
                  method: "POST",
                  body: fd, // no headers → simple request
                });
            
                // Try to parse JSON, but tolerate plain text
                let data: unknown = null;
                const txt = await res.text();
                try { data = JSON.parse(txt); } catch { /* ignore */ }
            
                if (res.ok && (data as { ok?: boolean; duplicate?: boolean })?.ok) {
                  setStatus((data as { duplicate?: boolean }).duplicate ? "dup" : "ok");
                  form.reset();
                } else if (res.ok && txt.includes('"ok":true')) {
                  setStatus("ok");
                  form.reset();
                } else {
                  console.error("Waitlist error:", txt);
                  setStatus("err");
                }
              } catch (err) {
                console.error("Network error:", err);
                setStatus("err");
              }
            }}            
          >
            {/* Honeypot for bots */}
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

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
              disabled={status === "loading"}
              className="rounded-xl px-5 py-3 text-sm font-medium disabled:opacity-60"
              style={{ background: theme.colors.accent, color: theme.colors.secondary }}
            >
              {status === "loading" ? "Sending..." : "Notify"}
            </button>
          </form>

          {/* Lightweight feedback */}
          {status === "ok" && (
            <div className="mt-3 text-xs opacity-90">Thanks! You’re on the list.</div>
          )}
          {status === "dup" && (
            <div className="mt-3 text-xs opacity-90">You’re already on the list 🎉</div>
          )}
          {status === "err" && (
            <div className="mt-3 text-xs opacity-90">Something went wrong. Please try again.</div>
          )}

          <div className="mt-6 flex justify-center gap-3 text-xs opacity-80">
            <span>iOS &amp; Android</span>
            <span>•</span>
            <span>No spam ever</span>
          </div>
          <div className="mt-2 text-xs opacity-80">
            <span>By signing up you agree to receiving emails from moments</span>
          </div>
        </div>
      </div>
    </section>
  );
};
