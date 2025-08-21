import React from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { theme } from "../lib/theme";
import { Button } from "./Button";
import Link from "next/link";

export const Privacy = () => (
  <section id="privacy" className="mt-28">
    <div className="mx-auto max-w-6xl px-5">
      <div className="rounded-3xl p-8 md:p-10" style={{ border: `1px solid ${theme.colors.text}14`, background: '#FFFFFF07' }}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold">Built for close friends, not the crowd.</h3>
            <p className="mt-3 text-sm" style={{ color: theme.colors.tertiary }}>
              Moments is intentionally private. Events are invite‑only with a code, content isn&apos;t searchable, and we keep things simple—likes over comments, curation over chaos.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 grid place-items-center rounded-full" style={{ background: `${theme.colors.accent}15`, color: theme.colors.accent }}>
              <ShieldCheck size={18} />
            </div>
            <div className="h-10 w-10 grid place-items-center rounded-full" style={{ background: `${theme.colors.accent}15`, color: theme.colors.accent }}>
              <Lock size={18} />
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row md:items-center gap-4">
          <Link href="/privacy-policy" target="_blank">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
          <Link href="/terms-and-conditions" target="_blank">
            <Button variant="outline">Terms and Conditions</Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
