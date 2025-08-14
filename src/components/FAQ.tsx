import React from "react";
import { theme } from "../lib/theme";
import { AnimatedHeading } from "./AnimatedHeading";


export const FAQ = () => (
  <section id="faq" className="mt-28">
    <div className="mx-auto max-w-6xl px-5">
      <div className="mb-10">
          <AnimatedHeading className="text-3xl md:text-4xl font-semibold" text="FAQs" />
          <p className="mt-2 text-sm text-[#B3B3B3]">We understand you may have questions. So here are some answers!</p>
      </div>
      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl p-6" style={{ border: '1px solid #FFFFFF14', background: '#FFFFFF07' }}>
          <h4 className="font-medium mb-2">Why only five photos?</h4>
          <p className="text-sm" style={{ color: theme.colors.tertiary }}>It keeps events intentional and easy to browse—quality over quantity.</p>
        </div>
        <div className="rounded-3xl p-6" style={{ border: '1px solid #FFFFFF14', background: '#FFFFFF07' }}>
          <h4 className="font-medium mb-2">Is my event public?</h4>
          <p className="text-sm" style={{ color: theme.colors.tertiary }}>No. Events are invite‑only via unique codes. Content isn&apos;t searchable or discoverable.</p>
        </div>
        <div className="rounded-3xl p-6" style={{ border: '1px solid #FFFFFF14', background: '#FFFFFF07' }}>
          <h4 className="font-medium mb-2">Can I switch devices?</h4>
          <p className="text-sm" style={{ color: theme.colors.tertiary }}>Yep. Your photos and events sync to your account so you can hop between iOS and Android.</p>
        </div>
      </div>
    </div>
  </section>
);
