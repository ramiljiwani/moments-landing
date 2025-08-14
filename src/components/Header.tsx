import React from "react";
import { Button } from "./Button";
import { NavLink } from "./NavLink";
import { theme } from "../lib/theme";
import { cx } from "../lib/theme";
import Image from "next/image";

interface HeaderProps {
  navSolid: boolean;
}

export const Header = ({ navSolid }: HeaderProps) => (
  <header
    className={cx(
      "fixed inset-x-0 top-0 z-50 transition-colors",
      navSolid ? "backdrop-blur supports-[backdrop-filter]:bg-black/50" : "bg-transparent"
    )}
    style={{ borderBottom: navSolid ? `1px solid ${theme.colors.text}10` : "none" }}
  >
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl overflow-hidden" style={{ background: theme.colors.text }}>
            <Image
              src="/favicon.png" // path relative to public/
              alt="Moments logo"
              width={72}
              height={72}
            />
          </div>
        <span className="text-sm tracking-wide" style={{ color: theme.colors.text }}>Moments</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#how">How it works</NavLink>
        <NavLink href="#privacy">Privacy</NavLink>
      </nav>
      <Button href="#cta">Get the app</Button>
    </div>
  </header>
);
