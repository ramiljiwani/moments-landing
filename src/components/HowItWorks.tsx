import React from "react";
import { motion } from "framer-motion";
import { Users, Camera, Heart } from "lucide-react";
import { StepCard } from "./StepCard";
import { AnimatedHeading } from "./AnimatedHeading";
import { AccentBadge } from "./AccentBadge";
import { theme } from "../lib/theme";

export const HowItWorks = () => (
  <section id="how" className="mt-28">
    <div className="mx-auto max-w-6xl px-5">
      <div className="mb-10 flex items-end justify-between">
        <AnimatedHeading className="text-3xl md:text-4xl font-semibold" text="How Moments works" />
        <AccentBadge>
          <Zap width={14} height={14}/> 3 quick steps
        </AccentBadge>
      </div>

      <div className="relative">

        <div className="relative grid gap-6 md:grid-cols-3">
          <StepCard n={1} icon={Users} title="Create or join" desc="Start a new event or paste a friend's code. Only people with the code can view or post."/>
          <StepCard n={2} icon={Camera} title="Snap or upload" desc="Use the built‑in camera or upload from your roll. Choose which event to drop it in."/>
          <StepCard n={3} icon={Heart} title="React & enjoy" desc="Open the app to see only new photos. Tap ♥ on your favorites and keep the vibe going."/>
        </div>
      </div>
    </div>
  </section>
);

// Small helper used in the badge
function Zap(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
