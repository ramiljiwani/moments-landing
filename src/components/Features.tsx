import React from "react";
import { Users, Camera, Image as ImageIcon, Heart, ShieldCheck, Zap } from "lucide-react";
import { FeatureCard } from "./FeatureCard";
import { AnimatedHeading } from "./AnimatedHeading";
import { AccentBadge } from "./AccentBadge";

export const Features = () => (
  <section id="features" className="mt-24">
    <div className="mx-auto max-w-6xl px-5">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <AnimatedHeading className="text-3xl md:text-4xl font-semibold" text="What Moments does" />
          <p className="mt-2 text-sm text-[#B3B3B3]">Designed to be effortless, private, and fun.</p>
        </div>
        <AccentBadge>
          <Zap size={14}/> Lightweight & fast
        </AccentBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard icon={Users} title="Spin up private events" desc="Create an event in seconds. Share the unique join code with your friends—no public discovery, just people you invite."/>
        <FeatureCard icon={Camera} title="Shoot in‑app or upload" desc="Take photos right inside Moments or upload from your camera roll. Post to any event you've joined."/>
        <FeatureCard icon={ImageIcon} title="5 photos per person" desc="Keep galleries tight and intentional. Up to five photos per person per event keeps the vibe curated."/>
        <FeatureCard icon={Heart} title="Simple likes" desc="Like any shot you love. No comments or clout chasing—just appreciation."/>
        <FeatureCard icon={ShieldCheck} title="Private by default" desc="Events are invite‑only via code. Your content isn't searchable or public."/>
        <FeatureCard icon={Zap} title="Only what's new" desc="Each time you open the app, you'll see only the photos you haven't viewed yet—no endless doom scroll."/>
      </div>
    </div>
  </section>
);
