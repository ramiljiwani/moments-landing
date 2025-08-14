import React from "react";
import { theme } from "../lib/theme";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a href={href} className="text-sm hover:opacity-70" style={{ color: theme.colors.tertiary }}>
    {children}
  </a>
);
