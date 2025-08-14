import React from "react";
import { FooterLink } from "./FooterLink";
import { theme } from "../lib/theme";

export const Footer = () => (
  <footer className="mb-16">
    <div className="mx-auto max-w-6xl px-5">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-xl" style={{ background: theme.colors.text, color: theme.colors.secondary }}>
            M
          </div>
          <span className="text-sm" style={{ color: theme.colors.tertiary }}>© {new Date().getFullYear()} Moments</span>
        </div>
        <div className="flex items-center gap-6">
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Terms</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </div>
      </div>
    </div>
  </footer>
);
