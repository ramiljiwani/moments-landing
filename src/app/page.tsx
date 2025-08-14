"use client";

import React, { useEffect, useState } from "react";
import { theme } from "../lib/theme";
import {
  Header,
  Hero,
  Trust,
  Features,
  HowItWorks,
  Privacy,
  CTA,
  FAQ,
  Footer
} from "../components";
import "./styles.css";

export default function MomentsLanding() {
  const [navSolid, setNavSolid] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: theme.colors.background, color: theme.colors.text, fontFamily: "Inter, ui-sans-serif, system-ui" }}>
      <Header navSolid={navSolid} />
      <Hero />
      <Trust />
      <Features />
      <HowItWorks />
      <Privacy />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
