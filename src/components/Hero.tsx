import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock } from "lucide-react";
import { Button } from "./Button";
import { PhoneMock } from "./PhoneMock";
import { AccentBadge } from "./AccentBadge";
import { AnimatedHeadline } from "./AnimatedHeadline";
import { JoinCodeChip } from "./JoinCodeChip";
//import { Sparkles } from "./Sparkles";
import { theme } from "../lib/theme";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={heroRef} className="relative pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2">
        <motion.div style={{ y: parallaxY }}>
          <AnimatedHeadline className="mt-4 text-4xl md:text-6xl leading-[1.05] font-semibold" text="Share the moments that matter." />
                      <p className="mt-4 text-base md:text-lg" style={{ color: theme.colors.tertiary }}>
              Spin up a private event with a join code, invite friends, and everyone can snap or upload up to five photos. See only what&apos;s new since your last visit, like shots you love, and post straight from the app.
            </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#cta">Get early access</Button>
            <Button variant="outline" href="#features">See features</Button>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm" style={{ color: theme.colors.tertiary }}>
            <Lock size={16} /> Private by default • No public feeds
          </div>
        </motion.div>

        <div className="flex justify-center md:justify-end">
          <PhoneMock caption="Moments – event feed" />
        </div>
      </div>
      {/* Accent ribbon */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 opacity-30 blur-2xl" style={{ background: `radial-gradient(600px 100px at 50% 0, ${theme.colors.accent}, transparent)` }} />
    </section>
  );
};
