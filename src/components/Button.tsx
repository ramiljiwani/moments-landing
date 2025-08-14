import React from "react";
import { motion } from "framer-motion";
import { theme } from "../lib/theme";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  href?: string;
}

export const Button = ({ children, variant = "solid", href }: ButtonProps) => {
  const base = "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-transform active:scale-[0.98]";
  const styles: Record<string, string> = {
    solid: `bg-[${theme.colors.text}] text-[${theme.colors.secondary}] hover:opacity-90`,
    outline: `border border-[${theme.colors.text}] text-[${theme.colors.text}] hover:bg-[${theme.colors.text}] hover:text-[${theme.colors.secondary}]`,
    ghost: `text-[${theme.colors.text}] hover:opacity-70`,
  };
  
  const Tag = href ? "a" : "button";
  const MotionTag = motion(Tag);
  
  return (
    <MotionTag 
      whileHover={{ y: -2, scale: 1.01 }} 
      whileTap={{ scale: 0.98 }} 
      transition={{ type: "spring", stiffness: 350, damping: 20 }} 
      href={href} 
      className={`${base} ${styles[variant]} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`} 
      style={{ outlineColor: theme.colors.accent }}
    >
      {children}
    </MotionTag>
  );
};
