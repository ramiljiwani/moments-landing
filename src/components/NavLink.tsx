import React from "react";
import { theme } from "../lib/theme";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => (
  <a href={href} className="group relative inline-flex items-center gap-1">
    <span className="transition-opacity group-hover:opacity-100" style={{ color: theme.colors.tertiary }}>{children}</span>
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all" style={{ background: theme.colors.accent }} />
  </a>
);
